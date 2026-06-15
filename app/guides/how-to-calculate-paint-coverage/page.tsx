import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Calculate Paint Coverage — Litres Per Room | BuildCalc",
  description:
    "Learn how to calculate how much paint you need for a room. Includes coverage rates, coat counts, wall area formulas and tips for buying the right amount.",
  keywords: [
    "how to calculate paint coverage",
    "how much paint do i need",
    "paint calculator guide",
    "litres of paint per room",
  ],
};

const faqs = [
  {
    question: "How much paint do I need for a room?",
    answer:
      "Calculate the total wall area (perimeter × ceiling height), subtract large openings like doors and windows, then divide by the paint's coverage rate — typically 10–12 square meters per litre. Multiply by the number of coats and add 10% for waste.",
  },
  {
    question: "How many square meters does 1 litre of paint cover?",
    answer:
      "Most standard interior paints cover around 10–12 square meters per litre per coat. Premium paints may cover slightly more. Always check the coverage rate on the tin, as it varies by brand and finish.",
  },
  {
    question: "How many coats of paint do I need?",
    answer:
      "Two coats is standard for most interior repaints. If you're painting over a dark color, going from light to dark, or using a new color on bare plaster, you may need a primer coat plus two finish coats.",
  },
  {
    question: "How do I calculate wall area for painting?",
    answer:
      "Multiply the room perimeter (the total of all wall lengths) by the ceiling height. For a 5m × 4m room with 2.5m ceilings, that's 2 × (5+4) × 2.5 = 45 square meters before subtracting doors and windows.",
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
  headline: "How to Calculate Paint Coverage: Litres Per Room Guide",
  description:
    "Learn how to calculate how much paint you need for a room. Includes coverage rates, coat counts, wall area formulas and tips for buying the right amount.",
  url: "https://buildcalczone.com/guides/how-to-calculate-paint-coverage",
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

const listItem: React.CSSProperties = {
  fontSize: "15px",
  color: "var(--text-2)",
  lineHeight: 1.8,
  marginBottom: "6px",
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
};

export default function PaintCoverageGuide() {
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
            Paint
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
            How to Calculate Paint Coverage: Litres Per Room Guide
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            Buying too little paint means a second trip to the store mid-job.
            Buying too much means leftover tins sitting in the garage for years.
            Getting the calculation right isn&apos;t complicated — it mostly
            comes down to measuring your walls accurately and knowing the
            coverage rate of the paint you&apos;re using.
          </p>
        </header>

        <h2 style={sectionHeading}>Step 1 — Calculate your wall area</h2>
        <p style={paragraph}>
          Start by measuring the total surface area you&apos;re painting. For a
          standard rectangular room, the formula is:
        </p>
        <div style={formula}>
          Wall area = 2 × (Length + Width) × Ceiling height
        </div>
        <p style={paragraph}>For a 5m × 4m room with 2.5m ceilings:</p>
        <div style={formula}>2 × (5 + 4) × 2.5 = 45 m²</div>
        <p style={paragraph}>
          If you&apos;re also painting the ceiling, add that separately:
        </p>
        <div style={formula}>Ceiling area = Length × Width = 5 × 4 = 20 m²</div>

        <h2 style={sectionHeading}>Step 2 — Subtract doors and windows</h2>
        <p style={paragraph}>
          Large openings reduce the paintable area, so it&apos;s worth
          subtracting them — especially if the room has several windows or a
          wide doorway. As a rough guide:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
          <li style={listItem}>Standard door: approximately 1.8 m²</li>
          <li style={listItem}>Standard window: approximately 1.2–1.5 m²</li>
        </ul>
        <p style={paragraph}>
          For a room with one door and two windows, that&apos;s roughly 1.8 + (2
          × 1.35) = 4.5 m² to subtract, bringing the 45 m² wall area down to
          about 40.5 m². For a quick estimate, many painters simply skip this
          step and let the waste percentage absorb the difference — which works
          fine for rooms with only one or two openings.
        </p>

        <h2 style={sectionHeading}>
          Step 3 — Find your paint&apos;s coverage rate
        </h2>
        <p style={paragraph}>
          Coverage rate tells you how many square meters one litre of paint will
          cover per coat. It&apos;s printed on every tin, but typical ranges
          are:
        </p>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Paint type</th>
              <th style={th}>Coverage per litre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Standard interior emulsion</td>
              <td style={td}>10–12 m²</td>
            </tr>
            <tr>
              <td style={td}>Premium interior paint</td>
              <td style={td}>12–14 m²</td>
            </tr>
            <tr>
              <td style={td}>Primer / undercoat</td>
              <td style={td}>8–10 m²</td>
            </tr>
            <tr>
              <td style={td}>Exterior masonry paint</td>
              <td style={td}>6–10 m²</td>
            </tr>
          </tbody>
        </table>
        <p style={paragraph}>
          When in doubt, use 10 m²/L as a conservative default for interior
          walls — it&apos;s better to slightly overestimate than to run short on
          a second coat.
        </p>

        <h2 style={sectionHeading}>Step 4 — Calculate total litres needed</h2>
        <p style={paragraph}>
          Divide your paintable area by the coverage rate, then multiply by the
          number of coats:
        </p>
        <div style={formula}>
          Litres = (Area ÷ Coverage rate) × Number of coats
        </div>
        <p style={paragraph}>
          Using our 40.5 m² room with a standard paint at 11 m²/L and two coats:
        </p>
        <div style={formula}>(40.5 ÷ 11) × 2 = 7.36 litres</div>
        <p style={paragraph}>
          Add 10% for waste (roller absorption, brush losses, touching up):
        </p>
        <div style={formula}>7.36 × 1.10 ≈ 8.1 litres</div>
        <p style={paragraph}>
          Round up to the nearest tin size — in this case, a 10L tin would be
          the practical choice.
        </p>

        <h2 style={sectionHeading}>How many coats do you need?</h2>
        <p style={paragraph}>
          Two coats is standard for most interior repaints onto a previously
          painted surface. You may need more in these situations:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
          <li style={listItem}>
            Painting over a dark color with a lighter shade — consider a primer
            coat first
          </li>
          <li style={listItem}>
            New bare plaster — needs a mist coat (diluted paint) before normal
            coats
          </li>
          <li style={listItem}>
            Bright or saturated colors on white walls — may need three coats for
            full coverage
          </li>
        </ul>

        <h2 style={sectionHeading}>Putting it together</h2>
        <p style={paragraph}>
          The steps are straightforward once you have your measurements — the
          most common mistake is forgetting to multiply by the number of coats,
          which can leave you with half the paint you actually need. If
          you&apos;d rather skip the manual calculation, our{" "}
          <a href="/paint-calculator" style={link}>
            paint calculator
          </a>{" "}
          takes your room dimensions and coat count and works out the litres and
          tin quantity automatically.
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
