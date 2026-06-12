import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Guides — How-To & Reference | BuildCalc",
  description:
    "Free construction guides covering concrete, tiles, rebar, paint and more. Learn how to calculate material quantities and understand industry standards.",
};

// 정보 페이지가 추가될 때마다 이 배열에 항목을 추가하면 됩니다.
const guides: {
  title: string;
  href: string;
  desc: string;
  category: string;
}[] = [
  {
    title: "How to Calculate Concrete Volume",
    href: "/guides/how-to-calculate-concrete-volume",
    desc: "Step-by-step formula with examples for slabs, footings and columns, plus waste percentage and unit conversion tips.",
    category: "Concrete",
  },
  {
    title: "Cubic Yards to Cubic Meters",
    href: "/guides/cubic-yards-to-cubic-meters",
    desc: "Exact conversion formula, quick reference tables, and tips for ordering ready-mix concrete in the right unit.",
    category: "Conversion",
  },
  {
    title: "Tile Grout Gap Guide",
    href: "/guides/tile-grout-gap-guide",
    desc: "Recommended grout gap widths for floor, wall and large-format tile, and how joint size affects appearance and tile count.",
    category: "Tile",
  },
  {
    title: "Concrete Strength Grades Explained",
    href: "/guides/concrete-strength-grades",
    desc: "PSI and MPa strength grades for concrete, what they&apos;re used for, and how US and international (EN 206) classifications compare.",
    category: "Concrete",
  },
  {
    title: "How Many Tiles Do I Need?",
    href: "/guides/how-many-tiles-do-i-need",
    desc: "Step-by-step calculation including waste percentage by layout pattern, buying by the box, and common mistakes.",
    category: "Tile",
  },
];

export default function GuidesPage() {
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
          Construction guides
        </h1>
        <p
          style={{
            fontSize: "15px",
            color: "var(--text-2)",
            lineHeight: 1.7,
            maxWidth: "540px",
          }}
        >
          Step-by-step guides for calculating materials, understanding industry
          standards, and converting units.
        </p>
      </div>

      {guides.length === 0 ? (
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "40px 24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-2)",
              marginBottom: "6px",
            }}
          >
            Guides are coming soon.
          </p>
          <p style={{ fontSize: "13px", color: "var(--text-3)" }}>
            In the meantime, try one of our free calculators from the sidebar.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "12px",
          }}
        >
          {guides.map((g) => (
            <a
              key={g.href}
              href={g.href}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "16px 18px",
                textDecoration: "none",
                display: "block",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  color: "var(--accent)",
                  background: "var(--accent-light)",
                  padding: "2px 8px",
                  borderRadius: "20px",
                }}
              >
                {g.category}
              </span>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--text-1)",
                  margin: "8px 0 4px",
                }}
              >
                {g.title}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--text-2)",
                  lineHeight: 1.5,
                }}
              >
                {g.desc}
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
