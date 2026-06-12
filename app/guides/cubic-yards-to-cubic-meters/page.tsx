import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cubic Yards to Cubic Meters Converter & Conversion Guide | BuildCalc",
  description:
    "Convert cubic yards to cubic meters and back. Includes the exact formula, a quick reference table, and tips for ordering ready-mix concrete.",
  keywords: [
    "cubic yards to cubic meters",
    "cubic meters to cubic yards",
    "yd3 to m3",
    "concrete volume conversion",
  ],
};

const faqs = [
  {
    question: "How do I convert cubic yards to cubic meters?",
    answer:
      "Multiply the number of cubic yards by 0.7646 to get cubic meters. For example, 5 cubic yards equals about 3.82 cubic meters.",
  },
  {
    question: "How do I convert cubic meters to cubic yards?",
    answer:
      "Multiply the number of cubic meters by 1.308 to get cubic yards. For example, 5 cubic meters equals about 6.54 cubic yards.",
  },
  {
    question: "Why do US concrete suppliers use cubic yards?",
    answer:
      "Ready-mix concrete in the US has historically been priced and delivered by the cubic yard, and most trucks and batching equipment are calibrated to that unit. Metric countries use cubic meters instead.",
  },
  {
    question: "Is 1 cubic yard the same as 1 cubic meter?",
    answer:
      "No. A cubic yard is smaller than a cubic meter. One cubic yard is about 0.7646 cubic meters, so a cubic meter holds roughly 31% more volume than a cubic yard.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cubic Yards to Cubic Meters: Conversion Guide & Quick Reference",
  description:
    "Convert cubic yards to cubic meters and back. Includes the exact formula, a quick reference table, and tips for ordering ready-mix concrete.",
  url: "https://buildcalczone.com/guides/cubic-yards-to-cubic-meters",
};

const sectionHeading: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: 600,
  color: "var(--text-1)",
  margin: "32px 0 12px",
};

const paragraph: React.CSSProperties = {
  fontSize: "15px",
  color: "var(--text-2)",
  lineHeight: 1.8,
  marginBottom: "14px",
};

const formula: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  background: "var(--surface-2)",
  border: "1px solid var(--border)",
  borderRadius: "8px",
  padding: "14px 18px",
  fontSize: "15px",
  color: "var(--text-1)",
  margin: "12px 0",
};

const link: React.CSSProperties = {
  color: "var(--accent)",
  textDecoration: "underline",
};

const table: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  margin: "12px 0 20px",
  fontSize: "14px",
};

const th: React.CSSProperties = {
  textAlign: "left",
  padding: "8px 12px",
  borderBottom: "1px solid var(--border)",
  color: "var(--text-1)",
  fontWeight: 600,
};

const td: React.CSSProperties = {
  padding: "8px 12px",
  borderBottom: "1px solid var(--border)",
  color: "var(--text-2)",
  fontFamily: "var(--font-mono)",
};

export default function CubicYardsToMetersGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article style={{ maxWidth: "680px" }}>
        <header style={{ marginBottom: "24px" }}>
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
            Conversion
          </span>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 600,
              lineHeight: 1.3,
              margin: "10px 0",
              color: "var(--text-1)",
            }}
          >
            Cubic Yards to Cubic Meters: Conversion Guide & Quick Reference
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            If you&apos;ve calculated a volume in one unit and your supplier
            quotes in the other, this mismatch comes up constantly in
            construction — especially with concrete, where US suppliers price by
            the cubic yard but most of the world works in cubic meters.
            Here&apos;s the exact conversion, plus a quick reference table so
            you don&apos;t have to do the math every time.
          </p>
        </header>

        <h2 style={sectionHeading}>The conversion formula</h2>
        <p style={paragraph}>
          A yard is defined as exactly 0.9144 meters, so a cubic yard is 0.9144
          cubed:
        </p>
        <div style={formula}>
          1 cubic yard = 0.9144³ m³ ≈ 0.7646 cubic meters
        </div>
        <p style={paragraph}>Flip it around, and:</p>
        <div style={formula}>1 cubic meter ≈ 1.308 cubic yards</div>
        <p style={paragraph}>
          To convert cubic yards to cubic meters, multiply by 0.7646. To go the
          other way, multiply by 1.308. Both numbers come from the same
          relationship — they&apos;re just reciprocals of each other.
        </p>

        <h2 style={sectionHeading}>Quick reference table</h2>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Cubic yards (yd³)</th>
              <th style={th}>Cubic meters (m³)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>1</td>
              <td style={td}>0.76</td>
            </tr>
            <tr>
              <td style={td}>2</td>
              <td style={td}>1.53</td>
            </tr>
            <tr>
              <td style={td}>3</td>
              <td style={td}>2.29</td>
            </tr>
            <tr>
              <td style={td}>5</td>
              <td style={td}>3.82</td>
            </tr>
            <tr>
              <td style={td}>10</td>
              <td style={td}>7.65</td>
            </tr>
            <tr>
              <td style={td}>20</td>
              <td style={td}>15.29</td>
            </tr>
          </tbody>
        </table>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Cubic meters (m³)</th>
              <th style={th}>Cubic yards (yd³)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>1</td>
              <td style={td}>1.31</td>
            </tr>
            <tr>
              <td style={td}>2</td>
              <td style={td}>2.62</td>
            </tr>
            <tr>
              <td style={td}>3</td>
              <td style={td}>3.92</td>
            </tr>
            <tr>
              <td style={td}>5</td>
              <td style={td}>6.54</td>
            </tr>
            <tr>
              <td style={td}>10</td>
              <td style={td}>13.08</td>
            </tr>
            <tr>
              <td style={td}>20</td>
              <td style={td}>26.16</td>
            </tr>
          </tbody>
        </table>

        <h2 style={sectionHeading}>Why this matters for concrete orders</h2>
        <p style={paragraph}>
          In the US, ready-mix concrete is almost always priced and delivered by
          the cubic yard, with most suppliers enforcing a minimum order —
          commonly around 1 yard, sometimes higher depending on the plant. If
          you&apos;ve calculated your slab or footing volume in cubic meters
          (common if you&apos;re working from metric blueprints or an online
          calculator), you&apos;ll need to convert before calling your supplier,
          or you risk under-ordering and getting hit with a small load
          surcharge.
        </p>
        <p style={paragraph}>
          A useful gut-check: a cubic meter holds noticeably more than a cubic
          yard — about 31% more. So if your supplier says &quot;we need at least
          1 yard,&quot; that&apos;s roughly 0.76 cubic meters, not 1. Getting
          this backwards on a small pour can mean ordering nearly a third more
          concrete than you need.
        </p>

        <h2 style={sectionHeading}>Other volume units worth knowing</h2>
        <p style={paragraph}>
          A few related conversions come up often when working between metric
          and imperial systems on construction sites:
        </p>
        <div style={formula}>1 cubic yard = 27 cubic feet</div>
        <div style={formula}>1 cubic meter ≈ 35.31 cubic feet</div>
        <div style={formula}>1 cubic foot ≈ 0.0283 cubic meters</div>
        <p style={paragraph}>
          These come in handy when bagged concrete mix is labeled in cubic feet
          per bag, but your overall project volume is in cubic yards or cubic
          meters.
        </p>

        <h2 style={sectionHeading}>Putting it together</h2>
        <p style={paragraph}>
          For most jobsite purposes, rounding to two decimal places is more than
          accurate enough — the conversion factor itself is exact, but
          measurement tolerances on a real pour will dwarf any rounding error.
          If you&apos;d rather skip manual conversion entirely, our{" "}
          <a href="/unit-converter" style={link}>
            unit converter
          </a>{" "}
          handles cubic yards, cubic meters, cubic feet and more, and our{" "}
          <a href="/concrete-calculator" style={link}>
            concrete calculator
          </a>{" "}
          gives results in both units automatically.
        </p>

        <h2 style={sectionHeading}>FAQ</h2>
        {faqs.map((f) => (
          <div key={f.question} style={{ marginBottom: "16px" }}>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "var(--text-1)",
                marginBottom: "4px",
              }}
            >
              {f.question}
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "var(--text-2)",
                lineHeight: 1.7,
              }}
            >
              {f.answer}
            </p>
          </div>
        ))}
      </article>
    </>
  );
}
