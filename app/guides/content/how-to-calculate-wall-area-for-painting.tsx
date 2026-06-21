import Link from "next/link";

const faqs = [
  {
    question: "How do I calculate the wall area of a room for painting?",
    answer:
      "Measure the perimeter of the room (total length of all walls) and multiply by the ceiling height to get the gross wall area. Then subtract the area of all doors and windows. For a standard rectangular room 4 m × 3 m with 2.4 m ceilings, one door (0.9 × 2.1 m) and one window (1.2 × 1.0 m): perimeter = (4 + 3) × 2 = 14 m, gross area = 14 × 2.4 = 33.6 m², openings = 1.89 + 1.2 = 3.09 m², net area = 33.6 − 3.09 = 30.51 m².",
  },
  {
    question:
      "Do I need to include the ceiling when calculating paint coverage?",
    answer:
      "Only if you're painting the ceiling too. Calculate the ceiling area separately — it's simply the floor area of the room (length × width). Keep ceiling and wall calculations separate because ceilings often use a different paint type (typically matt white) and may need fewer coats if already a light colour.",
  },
  {
    question: "How much paint do I need per m²?",
    answer:
      "Most standard emulsion paints cover 10–12 m² per litre for a single coat. Higher-pigment or specialist paints may cover less — always check the manufacturer's stated coverage rate on the tin. For two coats on new plaster or a significant colour change, divide your wall area by the coverage rate and multiply by 2.",
  },
  {
    question: "How many coats of paint do I need?",
    answer:
      "For repainting a similar colour on a sound surface: 1–2 coats. For a significant colour change (e.g. dark to light or vice versa): 2–3 coats. For new plaster or bare walls: a diluted mist coat first, then 2 full coats. New plaster is highly absorbent — skipping the mist coat leads to uneven finish and peeling.",
  },
  {
    question: "Should I add waste when ordering paint?",
    answer:
      "Yes. Add 10% for straightforward rooms. Add 15% for rooms with many corners, alcoves, or detailed trim work where more cutting-in is required. It's better to have a small amount left over — paint from the same batch ensures a consistent colour match if you need to touch up later.",
  },
  {
    question: "How do I measure an irregular or L-shaped room?",
    answer:
      "Break the room into rectangular sections. Measure each wall individually (width × ceiling height), add them all together for the gross wall area, then subtract doors and windows as normal. Don't try to calculate the perimeter of an L-shape in one step — measuring wall by wall is more accurate and less error-prone.",
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
  headline: "How to Calculate Wall Area for Painting",
  description:
    "Step-by-step guide to calculating wall area for painting — including rooms with doors and windows, ceilings, number of coats, and how much paint to order.",
  url: "https://buildcalczone.com/guides/how-to-calculate-wall-area-for-painting",
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
const note: React.CSSProperties = {
  fontSize: "13px",
  color: "var(--text-3)",
  lineHeight: 1.7,
  background: "var(--surface-2)",
  border: "1px solid var(--border)",
  borderRadius: "8px",
  padding: "12px 16px",
  margin: "12px 0 20px",
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

export default function HowToCalculateWallAreaForPainting() {
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
            How to Calculate Wall Area for Painting
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            Getting the wall area right before you buy paint saves money and
            avoids mid-job trips to the shop. The calculation is straightforward
            — measure the walls, subtract the openings, account for the number
            of coats, and add a small buffer. This guide walks through each step
            with worked examples.
          </p>
        </header>

        {/* Step 1 */}
        <h2 style={sectionHeading}>Step 1 — Measure the Walls</h2>
        <p style={paragraph}>
          For a rectangular room, the quickest method is to calculate the gross
          wall area using the room perimeter.
        </p>
        <div style={formula}>
          Perimeter (m) = (Room length + Room width) × 2
        </div>
        <div style={formula}>
          Gross wall area (m²) = Perimeter × Ceiling height
        </div>
        <p style={paragraph}>
          <strong>Example:</strong> Room 5 m × 4 m, ceiling height 2.4 m:
        </p>
        <div style={formula}>
          Perimeter = (5 + 4) × 2 = 18 m{"\n"}
          Gross wall area = 18 × 2.4 = 43.2 m²
        </div>
        <div style={note}>
          For L-shaped or irregular rooms, measure each wall individually (width
          × ceiling height) and add them together. Don&apos;t try to calculate
          the perimeter of a complex room in one step.
        </div>

        {/* Step 2 */}
        <h2 style={sectionHeading}>Step 2 — Subtract Doors and Windows</h2>
        <p style={paragraph}>
          Measure the width and height of each door and window opening and
          subtract the total from the gross wall area.
        </p>
        <div style={formula}>
          Net wall area (m²) = Gross area − (width × height) for each opening
        </div>
        <p style={paragraph}>
          <strong>Example continued:</strong> One door (0.9 m × 2.1 m) and two
          windows (1.2 m × 1.0 m each):
        </p>
        <div style={formula}>
          Openings = (0.9 × 2.1) + (1.2 × 1.0 × 2){"\n"}= 1.89 + 2.4 = 4.29 m²
          {"\n"}
          Net wall area = 43.2 − 4.29 = 38.91 m²
        </div>
        <div style={note}>
          Some painters skip subtracting small windows and use the gross area as
          a built-in buffer. Either approach works — just be consistent so you
          know whether your final figure already includes waste.
        </div>

        {/* Step 3 — Ceiling */}
        <h2 style={sectionHeading}>
          Step 3 — Add the Ceiling (If Painting It)
        </h2>
        <p style={paragraph}>
          Ceiling area is simply the floor area of the room. Calculate it
          separately — ceilings often use a different paint and may need fewer
          coats.
        </p>
        <div style={formula}>Ceiling area (m²) = Room length × Room width</div>
        <p style={paragraph}>
          <strong>Example continued:</strong> 5 m × 4 m room:
        </p>
        <div style={formula}>Ceiling area = 5 × 4 = 20 m²</div>

        {/* Step 4 — Coats */}
        <h2 style={sectionHeading}>Step 4 — Decide on Number of Coats</h2>
        <p style={paragraph}>
          The number of coats affects how much paint you need. Use the table
          below as a guide.
        </p>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Situation</th>
              <th style={th}>Recommended Coats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Repainting — similar colour, sound surface</td>
              <td style={td}>1–2 coats</td>
            </tr>
            <tr>
              <td style={td}>
                Significant colour change (dark to light or vice versa)
              </td>
              <td style={td}>2–3 coats</td>
            </tr>
            <tr>
              <td style={td}>New plaster</td>
              <td style={td}>1 mist coat + 2 full coats</td>
            </tr>
            <tr>
              <td style={td}>Bare plasterboard</td>
              <td style={td}>1 primer + 2 full coats</td>
            </tr>
          </tbody>
        </table>
        <div style={note}>
          A mist coat is standard emulsion diluted with 10–20% water. It seals
          new plaster and prevents the topcoats from being absorbed unevenly.
          Skipping it on new plaster is one of the most common causes of patchy
          finish.
        </div>

        {/* Step 5 — Paint quantity */}
        <h2 style={sectionHeading}>Step 5 — Calculate Paint Quantity</h2>
        <p style={paragraph}>
          Most standard emulsion paints cover{" "}
          <strong>10–12 m² per litre</strong> per coat. Always check the
          coverage rate on the tin — premium or high-pigment paints often cover
          less.
        </p>
        <div style={formula}>
          Litres needed = (Net wall area × number of coats) ÷ coverage rate
          (m²/L)
        </div>
        <p style={paragraph}>
          <strong>Example continued:</strong> 38.91 m² net wall area, 2 coats,
          coverage rate 11 m²/L:
        </p>
        <div style={formula}>
          Litres = (38.91 × 2) ÷ 11 = 77.82 ÷ 11 = 7.07 litres
        </div>

        {/* Step 6 — Waste */}
        <h2 style={sectionHeading}>Step 6 — Add Waste</h2>
        <p style={paragraph}>
          Always order slightly more than the calculated quantity. Cutting in
          around skirting boards, cornices, and window reveals uses more paint
          than rolling open wall areas.
        </p>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Situation</th>
              <th style={th}>Waste Factor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Simple rectangular room, roller finish</td>
              <td style={td}>10%</td>
            </tr>
            <tr>
              <td style={td}>Many corners, alcoves, or detailed trim</td>
              <td style={td}>15%</td>
            </tr>
            <tr>
              <td style={td}>Textured or rough surfaces</td>
              <td style={td}>15–20%</td>
            </tr>
          </tbody>
        </table>
        <div style={formula}>
          Final order (litres) = Calculated litres × (1 + waste factor)
        </div>
        <p style={paragraph}>
          <strong>Example continued:</strong> 7.07 litres + 10% waste:
        </p>
        <div style={formula}>7.07 × 1.10 = 7.78 litres → buy 8 litres</div>
        <div style={note}>
          Order in standard tin sizes (1 L, 2.5 L, 5 L) and round up. Leftover
          paint from the same batch is useful for future touch-ups — colour
          matching from a different batch is rarely exact.
        </div>

        {/* Worked examples */}
        <h2 style={sectionHeading}>Worked Examples</h2>

        <p style={{ ...paragraph, fontWeight: 600, marginBottom: "6px" }}>
          Example A — Small bedroom, repaint
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={listItem}>Room: 3.5 m × 3.0 m, ceiling 2.4 m</li>
          <li style={listItem}>
            Gross wall area: (3.5 + 3.0) × 2 × 2.4 = 31.2 m²
          </li>
          <li style={listItem}>
            Openings: 1 door (0.9 × 2.1 = 1.89 m²) + 1 window (1.0 × 1.0 = 1.0
            m²) = 2.89 m²
          </li>
          <li style={listItem}>Net area: 31.2 − 2.89 = 28.31 m²</li>
          <li style={listItem}>
            2 coats, coverage 11 m²/L: (28.31 × 2) ÷ 11 = 5.15 L
          </li>
          <li style={listItem}>
            +10% waste: 5.15 × 1.10 = 5.66 L → buy 2× 2.5 L tins (5 L) + 1× 1 L
            tin
          </li>
        </ul>

        <p style={{ ...paragraph, fontWeight: 600, marginBottom: "6px" }}>
          Example B — Open-plan living room, colour change
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={listItem}>Room: 7.0 m × 5.0 m, ceiling 2.5 m</li>
          <li style={listItem}>
            Gross wall area: (7.0 + 5.0) × 2 × 2.5 = 60.0 m²
          </li>
          <li style={listItem}>
            Openings: 1 door (0.9 × 2.1 = 1.89 m²) + 2 windows (1.4 × 1.2 × 2 =
            3.36 m²) = 5.25 m²
          </li>
          <li style={listItem}>Net area: 60.0 − 5.25 = 54.75 m²</li>
          <li style={listItem}>
            3 coats (dark to light), coverage 10 m²/L: (54.75 × 3) ÷ 10 = 16.43
            L
          </li>
          <li style={listItem}>
            +15% waste: 16.43 × 1.15 = 18.89 L → buy 4× 5 L tins
          </li>
        </ul>

        {/* Common coverage rates */}
        <h2 style={sectionHeading}>Common Paint Coverage Rates</h2>
        <p style={paragraph}>
          Coverage varies by paint type. Use these as a starting point and
          always verify against the tin.
        </p>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Paint Type</th>
              <th style={th}>Typical Coverage</th>
              <th style={th}>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Standard emulsion (walls)</td>
              <td style={td}>10–12 m²/L</td>
              <td style={td}>Most common interior wall paint</td>
            </tr>
            <tr>
              <td style={td}>Matt emulsion</td>
              <td style={td}>10–12 m²/L</td>
              <td style={td}>Hides surface imperfections well</td>
            </tr>
            <tr>
              <td style={td}>Silk / satin emulsion</td>
              <td style={td}>10–11 m²/L</td>
              <td style={td}>Washable, used in kitchens and bathrooms</td>
            </tr>
            <tr>
              <td style={td}>Eggshell (oil-based)</td>
              <td style={td}>8–10 m²/L</td>
              <td style={td}>Durable, slow drying</td>
            </tr>
            <tr>
              <td style={td}>Masonry paint (exterior)</td>
              <td style={td}>4–6 m²/L</td>
              <td style={td}>Lower coverage due to textured surfaces</td>
            </tr>
            <tr>
              <td style={td}>Primer / undercoat</td>
              <td style={td}>8–10 m²/L</td>
              <td style={td}>Higher pigment, covers less per litre</td>
            </tr>
          </tbody>
        </table>

        {/* Calculator CTA */}
        <h2 style={sectionHeading}>Skip the Maths</h2>
        <p style={paragraph}>
          Use our{" "}
          <Link href="/paint-calculator" style={link}>
            Paint Calculator
          </Link>{" "}
          to enter your room dimensions, number of coats, and coverage rate — it
          calculates the exact litres needed in one step.
        </p>

        {/* Related guides */}
        <h2 style={sectionHeading}>Related Guides</h2>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={listItem}>
            <Link href="/guides/how-to-calculate-paint-coverage" style={link}>
              How to Calculate Paint Coverage
            </Link>{" "}
            — coverage rates, tin sizes, and surface types explained
          </li>
        </ul>

        {/* FAQ */}
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
