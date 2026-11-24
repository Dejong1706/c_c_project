// Screen check for docs/verification.md (stages 2 and 4).
// Needs `npx next start -p 3100` running. Every non-localhost host is blocked,
// so no AdSense / Analytics request leaves the machine.
//
//   node scripts/verify-ui.mjs <outDir> home /fence-calculator ...
//   node scripts/verify-ui.mjs <outDir> fence-calculator --steps steps.json
//
// Paths may be written without the leading slash ("home" = /), because Git Bash
// rewrites "/x" arguments. With --steps, give exactly one path.
// steps.json: [{ "click": "Vinyl", "set": { "length": "100" }, "select": { "length unit": "m" }, "read": "main" }]
//   click  = exact text of a button     set = { input id: value }
//   select = { aria-label of a <select>: option value }
//   read   = CSS selector whose text is printed after the step
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const BASE = "http://localhost:3100";
const PORT = 9333;
const WIDTHS = [1280, 500, 375];

const args = process.argv.slice(2);
const si = args.indexOf("--steps");
const steps = si >= 0 ? JSON.parse(readFileSync(args[si + 1], "utf8")) : null;
if (si >= 0) args.splice(si, 2);
const [outDir, ...rawPaths] = args;
const paths = rawPaths.map((p) => (p === "home" ? "/" : "/" + p.replace(/^\/+/, "")));
if (!outDir || paths.length === 0 || (steps && paths.length !== 1)) {
  console.error("Usage: node scripts/verify-ui.mjs <outDir> <path> [<path> ...] | <outDir> <path> --steps steps.json");
  process.exit(1);
}
const chrome = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
].find((p) => p && existsSync(p));
if (!chrome) throw new Error("Chrome/Edge not found — set CHROME_PATH");
mkdirSync(outDir, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const profile = mkdtempSync(join(tmpdir(), "verify-ui-"));
const proc = spawn(
  chrome,
  [
    "--headless=new", "--disable-gpu", "--disable-extensions", "--hide-scrollbars",
    "--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE localhost",
    `--user-data-dir=${profile}`, `--remote-debugging-port=${PORT}`, "about:blank",
  ],
  { stdio: "ignore" },
);
const exited = new Promise((r) => proc.on("exit", r));

let failed = false;
const fail = (msg) => {
  failed = true;
  console.log("FAIL", msg);
};

try {
  let target;
  for (let i = 0; i < 40 && !target; i++) {
    await sleep(250);
    try {
      target = (await (await fetch(`http://localhost:${PORT}/json`)).json()).find((t) => t.type === "page");
    } catch {
      // not up yet
    }
  }
  if (!target) throw new Error("browser did not start");
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((res, rej) => {
    ws.onopen = res;
    ws.onerror = rej;
  });

  let id = 0;
  const pending = new Map();
  let logs = [];
  let status = 0;
  ws.onmessage = (e) => {
    const m = JSON.parse(e.data);
    if (m.id) {
      pending.get(m.id)?.(m);
      pending.delete(m.id);
      return;
    }
    const p = m.params;
    if (m.method === "Runtime.exceptionThrown")
      logs.push("exception: " + (p.exceptionDetails.exception?.description ?? p.exceptionDetails.text));
    if (m.method === "Runtime.consoleAPICalled" && p.type === "error")
      logs.push("console.error: " + p.args.map((a) => a.value ?? a.description).join(" "));
    if (m.method === "Log.entryAdded" && p.entry.level === "error" && (!p.entry.url || p.entry.url.startsWith(BASE)))
      logs.push(`${p.entry.text} ${p.entry.url ?? ""}`);
    if (m.method === "Network.responseReceived" && p.type === "Document" && p.response.url.startsWith(BASE))
      status = p.response.status;
  };
  const send = (method, params = {}) =>
    new Promise((res, rej) => {
      const i = ++id;
      pending.set(i, (m) => (m.error ? rej(new Error(`${method}: ${m.error.message}`)) : res(m.result)));
      ws.send(JSON.stringify({ id: i, method, params }));
    });
  const evaluate = async (expression) => {
    const r = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description ?? r.exceptionDetails.text);
    return r.result.value;
  };
  for (const d of ["Page", "Runtime", "Log", "Network"]) await send(`${d}.enable`);

  const open = async (path, width) => {
    logs = [];
    status = 0;
    await send("Emulation.setDeviceMetricsOverride", {
      width, height: 900, deviceScaleFactor: 1, mobile: width < 600,
    });
    await send("Page.navigate", { url: BASE + path });
    await sleep(2500);
    if (status !== 200) fail(`${path} HTTP ${status || "no response"}`);
  };
  const check = async (label) => {
    const r = await evaluate(`({ over: document.documentElement.scrollWidth - innerWidth, len: document.body.innerText.trim().length,
      bad: document.body.innerText.match(/undefined|NaN|&[a-z]+;|Application error/g) ?? [] })`);
    if (r.over > 0) fail(`${label} overflows by ${r.over}px`);
    if (r.len < 200) fail(`${label} almost empty (${r.len} chars)`);
    if (r.bad.length) fail(`${label} shows ${r.bad.join(", ")}`);
    for (const l of new Set(logs)) fail(`${label} ${l}`);
  };
  const shot = async (file, width) => {
    const height = await evaluate("document.documentElement.scrollHeight");
    const r = await send("Page.captureScreenshot", {
      captureBeyondViewport: true, clip: { x: 0, y: 0, width, height, scale: 1 },
    });
    writeFileSync(join(outDir, file), Buffer.from(r.data, "base64"));
    console.log("saved", join(outDir, file), `${width}x${height}`);
  };

  for (const path of paths) {
    const name = path === "/" ? "home" : path.slice(1).replaceAll("/", "_");
    for (const width of WIDTHS) {
      await open(path, width);
      await check(`${path} @${width}`);
      await shot(`${name}-${width}.png`, width);
    }
  }

  if (steps) {
    await open(paths[0], 1280);
    for (const step of steps) {
      if (step.click)
        await evaluate(`(() => { const b = [...document.querySelectorAll("button")].find((x) => x.textContent.trim() === ${JSON.stringify(step.click)});
          if (!b) throw new Error("no button: " + ${JSON.stringify(step.click)}); b.click(); })()`);
      if (step.click) await sleep(150);
      for (const [label, v] of Object.entries(step.select ?? {}))
        await evaluate(`(() => { const s = [...document.querySelectorAll("select")].find((x) => x.getAttribute("aria-label") === ${JSON.stringify(label)});
          if (!s) throw new Error("no select: " + ${JSON.stringify(label)} + " have: " + [...document.querySelectorAll("select")].map((x) => x.getAttribute("aria-label")).join(" / "));
          Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, "value").set.call(s, ${JSON.stringify(v)}); s.dispatchEvent(new Event("change", { bubbles: true })); })()`);
      for (const [key, v] of Object.entries(step.set ?? {}))
        await evaluate(`(() => { const e = document.getElementById(${JSON.stringify(key)}); if (!e) throw new Error("no input: " + ${JSON.stringify(key)});
          Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set.call(e, ${JSON.stringify(v)}); e.dispatchEvent(new Event("input", { bubbles: true })); })()`);
      await sleep(200);
      const text = await evaluate(`document.querySelector(${JSON.stringify(step.read ?? "main")}).innerText.replace(/\\n+/g, " | ")`);
      console.log(JSON.stringify(step), "=>", text);
      await check(`step ${JSON.stringify(step)}`);
    }
  }
  await send("Browser.close");
} finally {
  proc.kill();
  await Promise.race([exited, sleep(3000)]);
  try {
    rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  } catch {
    // temp folder still locked; harmless
  }
}
console.log(failed ? "RESULT: FAIL" : "RESULT: no automatic failures — now open the images");
process.exit(failed ? 1 : 0);
