"use client";
import { useState } from "react";
import Link from "next/link";

type Tab = "slab" | "brick" | "stair";

const TABS: { id: Tab; label: string }[] = [
  { id: "slab", label: "Concrete slab" },
  { id: "brick", label: "Brick wall" },
  { id: "stair", label: "Stairs" },
];

// 80 lb premix bag yields ~0.6 ft³; US modular brick with 3/8" joints ≈ 6.75 per ft²
const BAG_80LB_FT3 = 0.6;
const BRICKS_PER_FT2 = 6.75;
const MAX_RISER_IN = 7.75; // IRC R311.7.5.1
const MIN_TREAD_IN = 10; // IRC R311.7.5.2

const num = (v: string) => {
  const n = parseFloat(v);
  return isFinite(n) && n > 0 ? n : 0;
};

function NumField({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: 0 }}>
      <label htmlFor={id} style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-2)" }}>
        {label}
      </label>
      <input
        id={id}
        type="number"
        inputMode="decimal"
        min="0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ height: "44px", fontSize: "16px" }}
      />
    </div>
  );
}

function Result({
  label,
  value,
  unit,
  primary,
}: {
  label: string;
  value: string;
  unit: string;
  primary?: boolean;
}) {
  return (
    <div
      style={{
        background: primary ? "var(--accent)" : "var(--accent-light)",
        color: primary ? "white" : "var(--accent-text)",
        borderRadius: "10px",
        padding: "14px 16px",
        minWidth: 0,
      }}
    >
      <p style={{ fontSize: "12px", opacity: primary ? 0.8 : 1 }}>{label}</p>
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "36px",
          fontWeight: 600,
          lineHeight: 1.15,
        }}
      >
        {value}
      </p>
      <p style={{ fontSize: "12px", opacity: primary ? 0.8 : 1 }}>{unit}</p>
    </div>
  );
}

export default function QuickCalc() {
  const [tab, setTab] = useState<Tab>("slab");
  const [slab, setSlab] = useState({ l: "10", w: "10", d: "4" });
  const [wall, setWall] = useState({ l: "20", h: "6" });
  const [rise, setRise] = useState("108");

  // Slab — includes 10% waste, matching the concrete calculator default
  const ft3 = num(slab.l) * num(slab.w) * (num(slab.d) / 12) * 1.1;
  const slabYd = ft3 > 0 ? (ft3 / 27).toFixed(2) : "—";
  const slabBags = ft3 > 0 ? Math.ceil(ft3 / BAG_80LB_FT3).toLocaleString("en-US") : "—";

  // Brick wall — includes 5% waste
  const area = num(wall.l) * num(wall.h);
  const bricks = area > 0 ? Math.ceil(area * BRICKS_PER_FT2 * 1.05).toLocaleString("en-US") : "—";

  // Stairs
  const totalRise = num(rise);
  const risers = totalRise > 0 ? Math.ceil(totalRise / MAX_RISER_IN) : 0;
  const treads = Math.max(risers - 1, 0);

  const resultGrid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "10px",
  };
  const fullLink: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--accent)",
    textDecoration: "none",
  };

  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        boxShadow: "0 12px 32px rgba(27, 67, 50, 0.08)",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        minWidth: 0,
      }}
    >
      <div role="tablist" aria-label="Quick calculator" style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {TABS.map((t) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setTab(t.id)}
              style={{
                minHeight: "40px",
                padding: "0 16px",
                borderRadius: "20px",
                border: active ? "1px solid var(--accent)" : "1px solid var(--border)",
                background: active ? "var(--accent)" : "var(--surface)",
                color: active ? "white" : "var(--text-2)",
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {tab === "slab" && (
        <div role="tabpanel" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "10px" }}>
            <NumField id="qc-slab-l" label="Length (ft)" value={slab.l} onChange={(v) => setSlab({ ...slab, l: v })} />
            <NumField id="qc-slab-w" label="Width (ft)" value={slab.w} onChange={(v) => setSlab({ ...slab, w: v })} />
            <NumField id="qc-slab-d" label="Thickness (in)" value={slab.d} onChange={(v) => setSlab({ ...slab, d: v })} />
          </div>
          <div style={resultGrid}>
            <Result primary label="Concrete needed" value={slabYd} unit="cubic yards (incl. 10% waste)" />
            <Result label="Or in bags" value={slabBags} unit="80 lb bags (0.6 ft³ each)" />
          </div>
          <Link href="/concrete-calculator" style={fullLink}>
            Full concrete calculator — metric, columns, footings →
          </Link>
        </div>
      )}

      {tab === "brick" && (
        <div role="tabpanel" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px" }}>
            <NumField id="qc-wall-l" label="Wall length (ft)" value={wall.l} onChange={(v) => setWall({ ...wall, l: v })} />
            <NumField id="qc-wall-h" label="Wall height (ft)" value={wall.h} onChange={(v) => setWall({ ...wall, h: v })} />
          </div>
          <div style={resultGrid}>
            <Result primary label="Bricks needed" value={bricks} unit="US modular bricks (incl. 5% waste)" />
            <Result label="Wall area" value={area > 0 ? area.toFixed(0) : "—"} unit="sq ft at 6.75 bricks / sq ft" />
          </div>
          <Link href="/brick-calculator" style={fullLink}>
            Full brick calculator — metric bricks, pallets →
          </Link>
        </div>
      )}

      {tab === "stair" && (
        <div role="tabpanel" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <NumField id="qc-rise" label="Total rise, floor to floor (in)" value={rise} onChange={setRise} />
          <div style={resultGrid}>
            <Result
              primary
              label="Risers"
              value={risers > 0 ? String(risers) : "—"}
              unit={risers > 0 ? `at ${(totalRise / risers).toFixed(2)} in each (IRC max 7¾ in)` : "IRC max 7¾ in each"}
            />
            <Result
              label="Total run"
              value={treads > 0 ? String(treads * MIN_TREAD_IN) : "—"}
              unit={`in, with ${treads} treads at ${MIN_TREAD_IN} in`}
            />
          </div>
          <Link href="/stair-calculator" style={fullLink}>
            Full stair calculator — stringer length, IRC check →
          </Link>
        </div>
      )}
    </div>
  );
}
