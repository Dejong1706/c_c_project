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
  // 예시 (실제 작성 시 주석 해제):
  // { title: 'How to Calculate Concrete Volume', href: '/guides/how-to-calculate-concrete-volume', desc: 'Step-by-step formula with examples for slabs, footings and columns.', category: 'Concrete' },
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
