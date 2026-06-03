"use client";
import { useState, ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ResultItem {
  label: string;
  value: string | number;
  unit: string;
  primary?: boolean;
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

      {/* Calc grid — 데스크탑: 2열, 모바일: 1열 */}
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
          <div className="result-grid">
            {results.map((r, i) => (
              <div
                key={i}
                className={
                  r.primary ? "result-card result-card--primary" : "result-card"
                }
              >
                <p className="rc-label">{r.label}</p>
                <p
                  className={
                    r.primary ? "rc-value rc-value--primary" : "rc-value"
                  }
                >
                  {r.value}
                </p>
                <p className="rc-unit">{r.unit}</p>
              </div>
            ))}
          </div>
          {notice && (
            <p
              style={{
                fontSize: "11px",
                color: "var(--text-3)",
                marginTop: "14px",
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
          <div className="related-grid">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="related-card">
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
        /* 계산기 2열 그리드 */
        .calc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        /* 결과 카드 2열 */
        .result-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .result-card {
          padding: 12px 14px;
          border-radius: 10px;
          background: var(--surface-2);
        }
        .result-card--primary {
          background: var(--accent);
          grid-column: span 2;
        }

        .rc-label {
          font-size: 11px;
          color: var(--text-3);
          margin-bottom: 4px;
        }
        .result-card--primary .rc-label {
          color: rgba(255,255,255,0.75);
        }

        .rc-value {
          font-size: 20px;
          font-weight: 600;
          color: var(--text-1);
          line-height: 1;
          font-family: var(--font-mono);
        }
        .rc-value--primary {
          font-size: 28px;
          color: white;
        }

        .rc-unit {
          font-size: 11px;
          color: var(--text-3);
          margin-top: 2px;
        }
        .result-card--primary .rc-unit {
          color: rgba(255,255,255,0.6);
        }

        /* 관련 계산기 */
        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 8px;
        }
        .related-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          text-decoration: none;
          transition: border-color 0.15s;
        }
        .related-card:hover {
          border-color: var(--accent);
        }

        /* 태블릿: 계산기 그리드 1열 전환 */
        @media (max-width: 900px) {
          .calc-grid {
            grid-template-columns: 1fr;
          }
        }

        /* 모바일: result-card 1열 */
        @media (max-width: 480px) {
          .result-card--primary {
            grid-column: span 2;
          }
          .rc-value--primary {
            font-size: 24px;
          }
          .related-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
