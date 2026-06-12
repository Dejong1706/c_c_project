import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BuildCalc — Free Construction Calculators",
  description:
    "Free construction calculators for concrete volume, tile quantity, rebar weight, brick count and more. Instant results in metric and imperial.",
};

const calcs = [
  {
    href: "/concrete-calculator",
    icon: "🏗",
    badge: "Most used",
    title: "Concrete calculator",
    desc: "Volume for slabs, walls, columns and footings",
    tags: ["Length", "Width", "Depth", "Waste %"],
    preview: { val: "3.0", unit: "m³", expr: "5×4×0.15m" },
  },
  {
    href: "/concrete-bags",
    icon: "📦",
    title: "Concrete bag calculator",
    desc: "40lb, 60lb, 80lb bag count for any pour",
    tags: ["Length", "Width", "Depth"],
    preview: { val: "45", unit: "bags", expr: "80lb @ 10×10ft" },
  },
  {
    href: "/tile-calculator",
    icon: "⬜",
    title: "Tile calculator",
    desc: "Tile count, box quantity and grout joints",
    tags: ["Room size", "Tile size", "Grout"],
    preview: { val: "112", unit: "tiles", expr: "4×3m, 60×60cm" },
  },
  {
    href: "/brick-calculator",
    icon: "🧱",
    title: "Brick calculator",
    desc: "Bricks and pallets for walls and partitions",
    tags: ["Length", "Height", "Waste %"],
    preview: { val: "1,320", unit: "bricks", expr: "8×2.5m wall" },
  },
  {
    href: "/paint-calculator",
    icon: "🎨",
    title: "Paint calculator",
    desc: "Litres and tin count for walls and ceilings",
    tags: ["Room size", "Coats", "Coverage"],
    preview: { val: "9", unit: "litres", expr: "5×4m, 2 coats" },
  },
  {
    href: "/rebar-calculator",
    icon: "📏",
    title: "Rebar calculator",
    desc: "Steel bar weight by diameter and length",
    tags: ["Diameter", "Length", "Count"],
    preview: { val: "74.4", unit: "kg", expr: "13mm × 6m × 20" },
  },
  {
    href: "/unit-converter",
    icon: "⇄",
    title: "Unit converter",
    desc: "Length, area, volume and weight conversions",
    tags: ["m ↔ ft", "m² ↔ ft²", "m³ ↔ yd³", "평"],
    preview: { val: "3.281", unit: "ft", expr: "1 m =" },
  },
];

export default function Home() {
  return (
    <div>
      <div style={{ marginBottom: "32px" }}>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 600,
            marginBottom: "10px",
            lineHeight: 1.3,
          }}
        >
          Free construction calculators
        </h1>
        <p
          style={{
            fontSize: "15px",
            color: "var(--text-2)",
            lineHeight: 1.7,
            maxWidth: "540px",
          }}
        >
          Instant material estimates for concrete, tiles, bricks, rebar and
          more. Metric and imperial, no sign-up needed.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
          gap: "12px",
        }}
      >
        {calcs.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "18px 20px",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              transition: "border-color 0.15s, box-shadow 0.15s",
            }}
          >
            {/* 상단 아이콘 + 뱃지 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: "22px" }}>{c.icon}</span>
              {c.badge && (
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    color: "var(--accent)",
                    background: "var(--accent-light)",
                    padding: "2px 7px",
                    borderRadius: "20px",
                  }}
                >
                  {c.badge}
                </span>
              )}
            </div>

            {/* 제목 + 설명 */}
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--text-1)",
                  marginBottom: "4px",
                }}
              >
                {c.title}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--text-2)",
                  lineHeight: 1.5,
                }}
              >
                {c.desc}
              </p>
            </div>

            {/* 입력 태그 */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
              {c.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "10px",
                    color: "var(--text-3)",
                    background: "var(--surface-2)",
                    borderRadius: "4px",
                    padding: "2px 6px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* 미리보기 결과 */}
            <div
              style={{
                background: "var(--surface-2)",
                borderRadius: "8px",
                padding: "8px 10px",
                display: "flex",
                alignItems: "baseline",
                gap: "5px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "var(--accent)",
                }}
              >
                {c.preview.val}
              </span>
              <span style={{ fontSize: "11px", color: "var(--text-3)" }}>
                {c.preview.unit}
              </span>
              <span
                style={{
                  fontSize: "10px",
                  color: "var(--text-3)",
                  marginLeft: "auto",
                }}
              >
                {c.preview.expr}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
