// Notify Bing (and other IndexNow engines) that pages changed.
// Run after the change is deployed:
//   npm run indexnow -- /guides/stair-building-code-requirements /stair-calculator
//   npm run indexnow -- --all   (every URL in the live sitemap)

const HOST = "buildcalczone.com";
const KEY = "fdb6be067a045eeece1178dd45eb4061"; // must match public/<KEY>.txt

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage: npm run indexnow -- <path> [<path> ...] | --all");
  process.exit(1);
}

let urlList;
if (args.includes("--all")) {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
} else {
  urlList = args.map((p) => new URL(p, `https://${HOST}`).href);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});

// 200 = accepted, 202 = accepted (key validation pending)
console.log(`${res.status} ${res.statusText} — ${urlList.length} URL(s)`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
