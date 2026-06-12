"use client";
import { useState, ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ResultItem {
  label: string;
  value: string | number;
  unit: string;
  tier?: 1 | 2 | 3; // 1=primary, 2=secondary, 3=tertiary
}

interface RelatedCalc {
  href: string;
  label: string;
  desc: string;
}

interface CalcShellProps {
  title: string;
  description: string;
  types?: string[];
  inputs: ReactNode;
  results: ResultItem[];
  related?: RelatedCalc[];
  notice?: string;
}

export default function CalcShell({
  title,
  description,
  types,
  inputs,
  results,
  related,
  notice,
}: CalcShellProps) {
  const [activeType, setActiveType] = useState(0);

  const primary = results.find((r) => r.tier === 1) ?? results[0];
  const secondary = results.filter((r) => r.tier === 2).length
    ? results.filter((r) => r.tier === 2)
    : results.slice(1, 3);
  const tertiary = results.filter((r) => r.tier === 3).length
    ? results.filter((r) => r.tier === 3)
    : results.slice(3);

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
        <h1
          style={{
            fontSize: "22px",
            fontWeight: 600,
            color: "var(--text-1)",
            marginBottom: "6px",
          }}
        >
          {title}
        </h1>
        <p
          style={{ fontSize: "14px", color: "var(--text-2)", lineHeight: 1.6 }}
        >
          {description}
        </p>
      </div>

      {/* Type tabs */}
      {types && types.length > 1 && (
        <div
          style={{
            display: "flex",
            gap: "6px",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}
        >
          {types.map((t, i) => (
            <button
              key={t}
              onClick={() => setActiveType(i)}
              style={{
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "13px",
                cursor: "pointer",
                border: activeType === i ? "none" : "1px solid var(--border)",
                background:
                  activeType === i ? "var(--accent)" : "var(--surface)",
                color: activeType === i ? "white" : "var(--text-2)",
                fontFamily: "var(--font-sans)",
                fontWeight: activeType === i ? 500 : 400,
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      {/* Calc grid */}
      <div className="calc-grid" style={{ marginBottom: "20px" }}>
        {/* Inputs */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "var(--text-3)",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Inputs
          </p>
          {inputs}
        </div>

        {/* Results */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "var(--text-3)",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Results
          </p>

          {/* Primary — 크고 임팩트 있게 */}
          <div
            style={{
              background: "var(--accent)",
              borderRadius: "10px",
              padding: "16px 18px",
              marginBottom: "8px",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.7)",
                marginBottom: "6px",
              }}
            >
              {primary.label}
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "48px",
                fontWeight: 600,
                color: "white",
                lineHeight: 1,
                letterSpacing: "0.01em",
              }}
            >
              {primary.value === 0 ||
              primary.value === "0" ||
              primary.value === ""
                ? "—"
                : primary.value}
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.6)",
                marginTop: "4px",
              }}
            >
              {primary.unit}
            </p>
          </div>

          {/* Secondary — 중간 크기 2열 */}
          {secondary.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px",
                marginBottom: "8px",
              }}
            >
              {secondary.map((r, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--surface-2)",
                    borderRadius: "8px",
                    padding: "10px 12px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      color: "var(--text-3)",
                      marginBottom: "3px",
                    }}
                  >
                    {r.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "22px",
                      fontWeight: 500,
                      color: "var(--text-1)",
                      lineHeight: 1,
                    }}
                  >
                    {r.value === 0 || r.value === "0" || r.value === ""
                      ? "—"
                      : r.value}
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "var(--text-3)",
                      marginTop: "2px",
                    }}
                  >
                    {r.unit}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tertiary — 작고 테두리만 */}
          {tertiary.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px",
              }}
            >
              {tertiary.map((r, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    padding: "8px 10px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "10px",
                      color: "var(--text-3)",
                      marginBottom: "2px",
                    }}
                  >
                    {r.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "var(--text-2)",
                    }}
                  >
                    {r.value === 0 || r.value === "0" || r.value === ""
                      ? "—"
                      : r.value}
                  </p>
                  <p style={{ fontSize: "10px", color: "var(--text-3)" }}>
                    {r.unit}
                  </p>
                </div>
              ))}
            </div>
          )}

          {notice && (
            <p
              style={{
                fontSize: "11px",
                color: "var(--text-3)",
                marginTop: "12px",
                lineHeight: 1.6,
                padding: "8px 10px",
                background: "var(--surface-2)",
                borderRadius: "8px",
              }}
            >
              ⚠ {notice}
            </p>
          )}
        </div>
      </div>

      {/* Related */}
      {related && related.length > 0 && (
        <div>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "var(--text-3)",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Related calculators
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "8px",
            }}
          >
            {related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 14px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  textDecoration: "none",
                  transition: "border-color 0.15s",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "var(--text-1)",
                    }}
                  >
                    {r.label}
                  </p>
                  <p style={{ fontSize: "11px", color: "var(--text-3)" }}>
                    {r.desc}
                  </p>
                </div>
                <ChevronRight size={14} color="var(--text-3)" />
              </Link>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .calc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 900px) {
          .calc-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .calc-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
