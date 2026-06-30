import Link from "next/link";
import { sectionHeading, paragraph, formula, note, th, td } from "./shared";

const faqs = [
  {
    question: "How much mulch do I need for 100 square feet?",
    answer:
      "At 2 inches deep: 100 × 2 ÷ 324 = 0.62 cubic yards (about 8–9 bags of 2 cu ft). At 3 inches deep: 100 × 3 ÷ 324 = 0.93 cubic yards (about 13 bags). Always round up.",
  },
  {
    question: "How many cubic yards of mulch do I need for a typical garden?",
    answer:
      "Most homeowners need 2–4 cubic yards for an average landscaping project. A 500 sq ft area at 3 inches deep needs about 4.6 cubic yards. Use the formula: area × depth in inches ÷ 324.",
  },
  {
    question: "How deep should mulch be?",
    answer:
      "2–3 inches is ideal for flower beds and borders. 3–4 inches for weed suppression. No deeper than 4 inches around plants — excess depth traps moisture and causes root rot. Keep mulch 2–3 inches away from stems and trunks.",
  },
  {
    question: "When is the best time to apply mulch?",
    answer:
      "Mid-to-late spring after the soil has warmed is ideal — mulching too early traps cold air. Fall mulching also works well to protect roots over winter. Apply after the first hard freeze and keep mulch a few inches from stems.",
  },
  {
    question: "How often should I top up mulch?",
    answer:
      "Top up annually or when depth drops below 2 inches. Most beds need 0.5–1 inch added each year to refresh coverage and color. Organic mulch breaks down over time, which is actually beneficial for soil health.",
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
  headline: "How Much Mulch Do I Need?",
  description:
    "Quick reference guide for mulch quantities by area and depth, plus tips on depth, timing, and choosing between bags and bulk delivery.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://buildcalczone.com/guides/how-much-mulch-do-i-need" },
  datePublished: "2026-06-29",
  dateModified: "2026-06-29",
  author: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  publisher: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  image: { "@type": "ImageObject", url: "https://buildcalczone.com/opengraph-image", width: 1200, height: 630 },
};

export default function HowMuchMulchDoINeed() {
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
            How Much Mulch Do I Need?
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            A quick reference for mulch quantities by area and depth, plus the
            formula to calculate any bed size. Most homeowners need 2–4 cubic
            yards for a standard landscaping project.
          </p>
        </header>

        <h2 style={sectionHeading}>Quick reference table</h2>
        <p style={paragraph}>
          How much mulch a cubic yard covers at common depths:
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
              <th style={th}>Depth</th>
              <th style={th}>Coverage per cubic yard</th>
              <th style={th}>2 cu ft bags needed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>1 inch</td>
              <td style={td}>324 sq ft</td>
              <td style={td}>13.5 bags</td>
            </tr>
            <tr>
              <td style={td}>2 inches</td>
              <td style={td}>162 sq ft</td>
              <td style={td}>13.5 bags</td>
            </tr>
            <tr>
              <td style={td}>3 inches</td>
              <td style={td}>108 sq ft</td>
              <td style={td}>13.5 bags</td>
            </tr>
            <tr>
              <td style={td}>4 inches</td>
              <td style={td}>81 sq ft</td>
              <td style={td}>13.5 bags</td>
            </tr>
          </tbody>
        </table>
        <div style={note}>
          Bags per cubic yard stays the same regardless of depth — you always
          need 13.5 bags of 2 cu ft (or 9 bags of 3 cu ft) to make up one cubic
          yard. What changes with depth is how much area that yard covers.
        </div>

        <h2 style={sectionHeading}>Mulch by area size</h2>
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
              <th style={th}>At 2&quot; depth</th>
              <th style={th}>At 3&quot; depth</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["100 sq ft", "0.62 yd³ (9 bags)", "0.93 yd³ (13 bags)"],
              ["200 sq ft", "1.23 yd³ (17 bags)", "1.85 yd³ (25 bags)"],
              ["300 sq ft", "1.85 yd³ (25 bags)", "2.78 yd³ (38 bags)"],
              ["500 sq ft", "3.09 yd³ (42 bags)", "4.63 yd³ (63 bags)"],
              ["1,000 sq ft", "6.17 yd³ (84 bags)", "9.26 yd³ (125 bags)"],
            ].map(([area, d2, d3]) => (
              <tr key={area}>
                <td style={td}>{area}</td>
                <td style={td}>{d2}</td>
                <td style={td}>{d3}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={note}>
          Bag counts based on 2 cu ft bags, rounded up. Add 10% for waste and
          settling on flat beds, 15–20% for uneven ground or areas around mature
          tree roots.
        </div>

        <h2 style={sectionHeading}>The formula</h2>
        <div style={formula}>
          Cubic yards = Area (sq ft) &times; Depth (in) &divide; 324
        </div>
        <p style={paragraph}>
          For a 400 sq ft bed at 3 inches deep: 400 &times; 3 &divide; 324 =
          3.70 cubic yards. Order 4 cubic yards to allow for waste and settling.
        </p>

        <h2 style={sectionHeading}>Bags vs. bulk delivery</h2>
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
              <th style={th}>Option</th>
              <th style={th}>Best for</th>
              <th style={th}>Approx. cost per yd³</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Bagged (2 cu ft)</td>
              <td style={td}>Under 3 cubic yards</td>
              <td style={td}>$47–$81</td>
            </tr>
            <tr>
              <td style={td}>Bulk delivery</td>
              <td style={td}>3+ cubic yards</td>
              <td style={td}>$30–$45 + delivery</td>
            </tr>
          </tbody>
        </table>
        <p style={paragraph}>
          Bulk mulch saves 30–50% per cubic yard on larger projects. Delivery is
          typically included for orders of 3+ cubic yards from most suppliers.
        </p>

        <h2 style={sectionHeading}>Depth guide</h2>
        <ul style={{ paddingLeft: "20px", margin: "0 0 20px" }}>
          <li
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.8,
              marginBottom: "6px",
            }}
          >
            <strong>2–3 inches</strong> — flower beds, garden borders, around
            shrubs
          </li>
          <li
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.8,
              marginBottom: "6px",
            }}
          >
            <strong>3–4 inches</strong> — weed suppression along paths, utility
            areas
          </li>
          <li
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.8,
              marginBottom: "6px",
            }}
          >
            <strong>1–2 inches</strong> — refreshing an existing layer that has
            thinned
          </li>
          <li
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.8,
              marginBottom: "6px",
            }}
          >
            <strong>6 inches minimum</strong> — playgrounds (CPSC requirement)
          </li>
        </ul>
        <div style={note}>
          Never exceed 4 inches around plants. Keep all mulch 2–3 inches away
          from plant stems and tree trunks to prevent rot and pest habitat.
        </div>

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
            Calculate your exact amount
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-2)",
              marginBottom: "12px",
            }}
          >
            Enter your bed dimensions and depth to get cubic yards and bags
            instantly — rectangular and circular beds supported.
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
