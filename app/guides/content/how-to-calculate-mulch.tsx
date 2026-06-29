import Link from "next/link";
import {
  sectionHeading,
  paragraph,
  formula,
  note,
  th,
  td,
} from "./shared";

const faqs = [
  {
    question: "How do I calculate how much mulch I need?",
    answer:
      "Multiply your area in square feet by the depth in inches, then divide by 324. This gives cubic yards. For example, a 300 sq ft bed at 3 inches deep: 300 × 3 ÷ 324 = 2.78 cubic yards. Always round up.",
  },
  {
    question: "How many bags of mulch equal a cubic yard?",
    answer:
      "1 cubic yard = 27 cubic feet. A standard 2 cu ft bag gives 13.5 bags per cubic yard. A 3 cu ft bag gives 9 bags per cubic yard.",
  },
  {
    question: "How many square feet does a cubic yard of mulch cover?",
    answer:
      "At 1 inch deep: 324 sq ft. At 2 inches deep: 162 sq ft. At 3 inches deep: 108 sq ft. At 4 inches deep: 81 sq ft.",
  },
  {
    question: "Should I buy bags or bulk mulch?",
    answer:
      "Buy bags for projects under 3 cubic yards — more convenient and no delivery fee. For larger projects, bulk is significantly cheaper: bagged mulch costs $47–$81 per cubic yard while bulk typically runs $30–$45 per cubic yard plus delivery.",
  },
  {
    question: "How much extra mulch should I order?",
    answer:
      "Add 10% for flat, even beds. Add 15–20% for uneven ground, areas around tree roots, or beds with grade changes — mulch settles into depressions faster than expected.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Calculate Mulch",
  description:
    "Step-by-step guide to calculating how much mulch you need in cubic yards and bags for any garden bed shape.",
  url: "https://buildcalczone.com/guides/how-to-calculate-mulch",
};

export default function HowToCalculateMulch() {
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
            Landscaping
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
            How to Calculate Mulch
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            The most common mulch mistake is guessing the quantity. Too little
            and you make a second trip; too much and you&apos;re left with yards
            of material going nowhere. Here&apos;s how to get the number right
            the first time.
          </p>
        </header>

        <h2 style={sectionHeading}>The formula</h2>
        <p style={paragraph}>
          All mulch calculations come down to one formula, regardless of bed
          shape:
        </p>
        <div style={formula}>
          Cubic yards = Area (sq ft) &times; Depth (inches) &divide; 324
        </div>
        <p style={paragraph}>
          The number 324 comes from 27 cubic feet per cubic yard &times; 12
          inches per foot. Every legitimate mulch calculator uses this same
          formula.
        </p>

        <h2 style={sectionHeading}>Step 1 — Measure your area</h2>
        <p style={paragraph}>
          How you measure depends on the shape of the bed:
        </p>

        <p
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "var(--text-1)",
            marginBottom: "4px",
          }}
        >
          Rectangular or square beds
        </p>
        <div style={formula}>Area = Length &times; Width</div>
        <p style={paragraph}>
          Example: a bed 20 ft long and 5 ft wide = 100 sq ft.
        </p>

        <p
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "var(--text-1)",
            marginBottom: "4px",
          }}
        >
          Circular beds
        </p>
        <div style={formula}>
          Area = &pi; &times; Radius&sup2; (radius = diameter &divide; 2)
        </div>
        <p style={paragraph}>
          Example: a circular bed with a 6 ft radius = 3.14 &times; 36 = 113 sq
          ft.
        </p>

        <p
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "var(--text-1)",
            marginBottom: "4px",
          }}
        >
          Multiple or irregular beds
        </p>
        <p style={paragraph}>
          Break each area into rectangles or circles, calculate each one
          separately, then add the totals together.
        </p>

        <h2 style={sectionHeading}>Step 2 — Choose your depth</h2>
        <p style={paragraph}>
          Depth affects how much material you need and how well it works. Use
          these standard recommendations:
        </p>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "12px 0 20px",
            fontSize: "14px",
          }}
        >
          <thead>
            <tr>
              <th style={th}>Application</th>
              <th style={th}>Recommended depth</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Flower beds, garden borders</td>
              <td style={td}>2–3 inches</td>
            </tr>
            <tr>
              <td style={td}>Weed suppression, paths</td>
              <td style={td}>3–4 inches</td>
            </tr>
            <tr>
              <td style={td}>Around trees (keep away from trunk)</td>
              <td style={td}>2–3 inches</td>
            </tr>
            <tr>
              <td style={td}>Refreshing existing mulch</td>
              <td style={td}>1–2 inches on top</td>
            </tr>
            <tr>
              <td style={td}>Playgrounds (CPSC requirement)</td>
              <td style={td}>6 inches minimum</td>
            </tr>
          </tbody>
        </table>
        <div style={note}>
          Never apply mulch deeper than 4 inches around plants — it traps excess
          moisture and can cause root rot. Keep mulch 2–3 inches away from all
          plant stems and tree trunks.
        </div>

        <h2 style={sectionHeading}>Step 3 — Calculate cubic yards</h2>
        <p style={paragraph}>
          Plug your numbers into the formula. Here are worked examples:
        </p>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "12px 0 20px",
            fontSize: "14px",
          }}
        >
          <thead>
            <tr>
              <th style={th}>Area</th>
              <th style={th}>Depth</th>
              <th style={th}>Cubic yards</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>100 sq ft</td>
              <td style={td}>2 in</td>
              <td style={td}>0.62 yd&sup3;</td>
            </tr>
            <tr>
              <td style={td}>200 sq ft</td>
              <td style={td}>3 in</td>
              <td style={td}>1.85 yd&sup3;</td>
            </tr>
            <tr>
              <td style={td}>500 sq ft</td>
              <td style={td}>3 in</td>
              <td style={td}>4.63 yd&sup3;</td>
            </tr>
            <tr>
              <td style={td}>1,000 sq ft</td>
              <td style={td}>2 in</td>
              <td style={td}>6.17 yd&sup3;</td>
            </tr>
            <tr>
              <td style={td}>1,000 sq ft</td>
              <td style={td}>3 in</td>
              <td style={td}>9.26 yd&sup3;</td>
            </tr>
          </tbody>
        </table>

        <h2 style={sectionHeading}>Step 4 — Convert to bags</h2>
        <p style={paragraph}>
          If buying bagged mulch, convert cubic yards to bags:
        </p>
        <div style={formula}>
          Bags = Cubic yards &times; 27 &divide; bag size (cu ft)
        </div>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "12px 0 20px",
            fontSize: "14px",
          }}
        >
          <thead>
            <tr>
              <th style={th}>Bag size</th>
              <th style={th}>Bags per cubic yard</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>2 cu ft bags</td>
              <td style={td}>13.5 bags</td>
            </tr>
            <tr>
              <td style={td}>3 cu ft bags</td>
              <td style={td}>9 bags</td>
            </tr>
          </tbody>
        </table>
        <p style={paragraph}>
          Always round up to the nearest whole bag. Running short mid-project
          means a second trip and a possible dye-lot mismatch.
        </p>

        <h2 style={sectionHeading}>Step 5 — Add waste allowance</h2>
        <p style={paragraph}>
          Add 10% for flat, even beds. Add 15–20% for uneven ground, areas with
          mature tree roots, or beds with any grade change — mulch settles into
          depressions faster than expected on irregular terrain.
        </p>

        {/* CTA */}
        <div
          style={{
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            padding: "16px 20px",
            margin: "24px 0",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--text-1)",
              marginBottom: "6px",
            }}
          >
            Skip the manual calculation
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-2)",
              marginBottom: "12px",
            }}
          >
            Enter your bed dimensions and depth to get cubic yards and bag count
            instantly.
          </p>
          <Link
            href="/mulch-calculator"
            style={{
              display: "inline-block",
              background: "var(--accent)",
              color: "#fff",
              padding: "8px 18px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Use the Mulch Calculator &rarr;
          </Link>
        </div>

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
