import Link from "next/link";
import { Breadcrumb, sectionHeading, paragraph, formula, note, th, td } from "./shared";

const faqs = [
  {
    question: "How do I calculate how many sheets of drywall I need?",
    answer:
      "Calculate wall area using 2 × (length + width) × ceiling height. Add ceiling area (length × width) if needed. Subtract openings — 21 sq ft per door, 15 sq ft per window. Divide by sheet coverage (32 sq ft for 4×8) and round up. Add 10% waste.",
  },
  {
    question: "How many sq ft does a sheet of drywall cover?",
    answer:
      "A standard 4×8 sheet covers 32 sq ft. A 4×10 sheet covers 40 sq ft. A 4×12 sheet covers 48 sq ft. Always divide your total area by the coverage of your chosen sheet size and round up to the nearest whole sheet.",
  },
  {
    question: "Should I subtract doors and windows from drywall calculations?",
    answer:
      "You can, but many pros don&apos;t — drywall is hung over openings and cut out, so the cutoffs become waste. If you do subtract, use 21 sq ft per standard door and 15 sq ft per standard window, then increase your waste factor to 15%.",
  },
  {
    question: "How many sheets of drywall do I need for a 12×12 room?",
    answer:
      "A 12×12 room with 9 ft ceilings has 2 × (12+12) × 9 = 432 sq ft of wall area. With ceiling (144 sq ft), total = 576 sq ft. At 10% waste: ⌈634 ÷ 32⌉ = 20 sheets of 4×8 drywall. Walls only: ⌈475 ÷ 32⌉ = 15 sheets.",
  },
  {
    question: "What waste factor should I use for drywall?",
    answer:
      "Use 10% for simple rectangular rooms with few openings. Use 15% for rooms with many corners, closets, or angled walls. Use 20% for complex spaces with vaulted ceilings or unusual geometry. It&apos;s always cheaper to have 1–2 extra sheets than to make a second trip.",
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
  headline: "How to Calculate Drywall Sheets",
  description:
    "Step-by-step guide to calculating how many drywall sheets you need for walls and ceiling — with formula, worked examples, and sheet size comparison.",
  url: "https://buildcalczone.com/guides/how-to-calculate-drywall-sheets",
};

export default function HowToCalculateDrywallSheets() {
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
        <Breadcrumb current="How to Calculate Drywall Sheets" />
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
            Finishing
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
            How to Calculate Drywall Sheets
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            Ordering too few sheets means a second trip to the supply house
            mid-job. Ordering too many leaves you with heavy leftover panels.
            Here&apos;s how to get the number right the first time — walls,
            ceiling, openings, and waste all accounted for.
          </p>
        </header>

        {/* Sheet sizes */}
        <h2 style={sectionHeading}>Sheet sizes and coverage</h2>
        <p style={paragraph}>
          Standard drywall comes in three common lengths. All sheets are 4 feet
          wide.
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
              <th style={th}>Sheet size</th>
              <th style={th}>Coverage</th>
              <th style={th}>Best for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>4×8 ft</td>
              <td style={td}>32 sq ft</td>
              <td style={td}>Standard walls, easiest to handle alone</td>
            </tr>
            <tr>
              <td style={td}>4×10 ft</td>
              <td style={td}>40 sq ft</td>
              <td style={td}>9 ft walls — fewer horizontal seams</td>
            </tr>
            <tr>
              <td style={td}>4×12 ft</td>
              <td style={td}>48 sq ft</td>
              <td style={td}>Ceilings and long walls — minimum joints</td>
            </tr>
          </tbody>
        </table>
        <div style={note}>
          4×12 sheets are preferred by professionals for ceilings — fewer seams
          means less taping and a smoother finish. But at ~90 lbs per sheet,
          they require two people and ideally a drywall lift (rental
          ~$50–$80/day).
        </div>

        {/* Step 1 */}
        <h2 style={sectionHeading}>Step 1 — Calculate wall area</h2>
        <p style={paragraph}>
          For a rectangular room, wall area is the perimeter times ceiling
          height:
        </p>
        <div style={formula}>
          Wall area = 2 &times; (Length + Width) &times; Ceiling height
        </div>
        <p style={paragraph}>
          <strong>Example:</strong> 15 ft × 12 ft room, 9 ft ceiling:
        </p>
        <div style={formula}>
          2 &times; (15 + 12) &times; 9 = 2 &times; 27 &times; 9 = 486 sq ft
        </div>

        {/* Step 2 */}
        <h2 style={sectionHeading}>
          Step 2 — Add ceiling area (if applicable)
        </h2>
        <div style={formula}>Ceiling area = Length &times; Width</div>
        <p style={paragraph}>
          <strong>Example:</strong> 15 &times; 12 = 180 sq ft ceiling
        </p>
        <p style={paragraph}>
          Total surface area = 486 + 180 = <strong>666 sq ft</strong>
        </p>

        {/* Step 3 */}
        <h2 style={sectionHeading}>Step 3 — Subtract openings</h2>
        <p style={paragraph}>
          Deduct standard openings from your gross wall area:
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
              <th style={th}>Opening type</th>
              <th style={th}>Standard deduction</th>
              <th style={th}>Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Standard interior door</td>
              <td style={td}>21 sq ft</td>
              <td style={td}>3 ft &times; 7 ft</td>
            </tr>
            <tr>
              <td style={td}>Standard window</td>
              <td style={td}>15 sq ft</td>
              <td style={td}>3 ft &times; 5 ft</td>
            </tr>
          </tbody>
        </table>
        <p style={paragraph}>
          <strong>Example:</strong> 1 door + 2 windows: 21 + (2 &times; 15) = 51
          sq ft deducted
        </p>
        <p style={paragraph}>
          Net area = 666 − 51 = <strong>615 sq ft</strong>
        </p>
        <div style={note}>
          Some pros skip subtracting openings entirely — drywall is hung over
          openings and cut out, making cutoffs part of the waste. If you skip
          deductions, use a 15% waste factor instead of 10%.
        </div>

        {/* Step 4 */}
        <h2 style={sectionHeading}>
          Step 4 — Apply waste factor and calculate sheets
        </h2>
        <div style={formula}>
          Sheets = &lceil;Net area &times; (1 + waste%) &divide; sheet
          coverage&rceil;
        </div>
        <p style={paragraph}>
          <strong>Example:</strong> 615 sq ft, 10% waste, 4&times;8 sheets (32
          sq ft):
        </p>
        <div style={formula}>
          &lceil;615 &times; 1.10 &divide; 32&rceil; = &lceil;676.5 &divide;
          32&rceil; = &lceil;21.1&rceil; = <strong>22 sheets</strong>
        </div>
        <p style={paragraph}>
          Always round up — you can&apos;t buy partial sheets, and having 1–2
          extra is cheap insurance against damaged sheets and future repairs.
        </p>

        {/* Waste guide */}
        <h2 style={sectionHeading}>Waste factor guide</h2>
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
              <th style={th}>Room type</th>
              <th style={th}>Waste factor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Simple rectangular room, few openings</td>
              <td style={td}>10%</td>
            </tr>
            <tr>
              <td style={td}>Rooms with closets, multiple doors/windows</td>
              <td style={td}>15%</td>
            </tr>
            <tr>
              <td style={td}>Vaulted ceilings, arches, unusual geometry</td>
              <td style={td}>20%</td>
            </tr>
            <tr>
              <td style={td}>Ceiling only (harder cuts)</td>
              <td style={td}>15%</td>
            </tr>
          </tbody>
        </table>

        {/* Worked examples */}
        <h2 style={sectionHeading}>Worked examples</h2>
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
              <th style={th}>Room</th>
              <th style={th}>Surface</th>
              <th style={th}>4&times;8 sheets</th>
              <th style={th}>4&times;12 sheets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>10&times;10, 8 ft ceiling</td>
              <td style={td}>Walls only</td>
              <td style={td}>11 sheets</td>
              <td style={td}>8 sheets</td>
            </tr>
            <tr>
              <td style={td}>12&times;12, 9 ft ceiling</td>
              <td style={td}>Walls + ceiling</td>
              <td style={td}>20 sheets</td>
              <td style={td}>14 sheets</td>
            </tr>
            <tr>
              <td style={td}>15&times;12, 9 ft ceiling</td>
              <td style={td}>Walls + ceiling</td>
              <td style={td}>22 sheets</td>
              <td style={td}>15 sheets</td>
            </tr>
            <tr>
              <td style={td}>20&times;15, 9 ft ceiling</td>
              <td style={td}>Walls + ceiling</td>
              <td style={td}>31 sheets</td>
              <td style={td}>21 sheets</td>
            </tr>
          </tbody>
        </table>
        <div style={note}>
          All examples include 10% waste and subtract 1 door (21 sq ft) and 1
          window (15 sq ft). Actual counts may vary by room shape and opening
          placement.
        </div>

        {/* Ancillary materials */}
        <h2 style={sectionHeading}>Other materials to order</h2>
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
              <th style={th}>Material</th>
              <th style={th}>Rule of thumb</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Joint compound (all-purpose)</td>
              <td style={td}>1 gallon per 100 sq ft of surface</td>
            </tr>
            <tr>
              <td style={td}>Drywall tape</td>
              <td style={td}>1 roll per 150 sq ft</td>
            </tr>
            <tr>
              <td style={td}>Drywall screws (1⅝&quot; coarse)</td>
              <td style={td}>
                ~36 screws per 4&times;8 sheet (16&quot; OC studs)
              </td>
            </tr>
            <tr>
              <td style={td}>Corner bead</td>
              <td style={td}>
                1 per outside corner — measure total linear feet
              </td>
            </tr>
          </tbody>
        </table>

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
            Enter room dimensions, doors, and windows to get sheet count, joint
            compound, tape, and screws instantly.
          </p>
          <Link
            href="/drywall-calculator"
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
            Use the Drywall Calculator &rarr;
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
