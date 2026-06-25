"use client";
import Link from "next/link";
import { useState } from "react";

type Guide = {
  title: string;
  href: string;
  desc: string;
  category: string;
};

const CATEGORY_ORDER = [
  "All",
  "Concrete",
  "Structural",
  "Masonry",
  "Tile",
  "Paint",
  "Conversion",
  "Fencing",
];

export default function GuidesClient({ guides }: { guides: Guide[] }) {
  const [active, setActive] = useState("All");

  // guides 배열에 있는 카테고리만 탭에 표시 (순서 고정)
  const existingCategories = CATEGORY_ORDER.filter(
    (cat) => cat === "All" || guides.some((g) => g.category === cat)
  );

  const filtered =
    active === "All" ? guides : guides.filter((g) => g.category === active);

  return (
    <div>
      {/* 헤더 */}
      <div style={{ marginBottom: "24px" }}>
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

      {/* 탭 필터 */}
      <div
        style={{
          display: "flex",
          gap: "6px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        {existingCategories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "5px 14px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: isActive ? 600 : 400,
                border: isActive
                  ? "1.5px solid var(--accent)"
                  : "1.5px solid var(--border)",
                background: isActive ? "var(--accent-light)" : "var(--surface)",
                color: isActive ? "var(--accent)" : "var(--text-2)",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 카드 그리드 */}
      {filtered.length === 0 ? (
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "40px 24px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "14px", color: "var(--text-2)" }}>
            No guides in this category yet.
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
          {filtered.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "16px 18px",
                textDecoration: "none",
                display: "block",
                transition: "border-color 0.15s",
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
                  display: "inline-block",
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
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
