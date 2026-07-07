import Link from "next/link";
import { sectionHeading, paragraph, formula, note, th, td } from "./shared";

const faqs = [
  {
    question: "How do I calculate the number of stairs I need?",
    answer:
      "Divide your total floor-to-floor height by your target riser height and round up. For example, 108 inches ÷ 7 inches = 15.4, rounded up to 16 risers. Then back-derive the actual riser: 108 ÷ 16 = 6.75 inches per riser.",
  },
  {
    question: "What is the ideal stair rise and run?",
    answer:
      "The most comfortable combination is a 7-inch rise with an 11-inch run (sum = 18). The IRC allows up to 7¾-inch rise and requires a minimum 10-inch run. The comfort formula is Rise + Run = 17–18 inches.",
  },
  {
    question: "How do I calculate stringer length?",
    answer:
      "Use the Pythagorean theorem: stringer length = √(total rise² + total run²). For 108-inch rise and 154-inch run: √(11,664 + 23,716) = √35,380 = 188 inches (15.7 ft). Buy the next standard lumber length up and add 6–12 inches for cuts.",
  },
  {
    question: "Why can&apos;t I just make the bottom step a different height?",
    answer:
      "IRC §R311.7.5.1 requires all risers in a flight to be within ⅜ inch of each other. An uneven bottom or top step is both a code violation and the leading cause of stair falls — the foot expects a consistent rhythm and misjudges the last step.",
  },
  {
    question: "Does the deck or landing count as a tread?",
    answer:
      "Yes — in standard mount, the deck or landing surface acts as the top tread. This is why treads = risers minus 1. A 15-riser stair has 14 physical treads in the stringer.",
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
  headline: "How to Calculate Stair Rise and Run",
  description:
    "Step-by-step guide to calculating stair rise, run, riser count, tread count, and stringer length for IRC-compliant residential stairs.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://buildcalczone.com/guides/how-to-calculate-stair-rise-and-run",
  },
  datePublished: "2026-07-07",
  dateModified: "2026-07-07",
  author: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  publisher: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  image: { "@type": "ImageObject", url: "https://buildcalczone.com/opengraph-image", width: 1200, height: 630 },
};

export default function HowToCalculateStairRiseAndRun() {
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
            Concrete
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
            How to Calculate Stair Rise and Run
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            Stair geometry comes down to three numbers: total rise, riser
            height, and tread depth. Get those right and everything else — riser
            count, total run, stringer length — follows directly. Here&apos;s
            how to work through it step by step.
          </p>
        </header>

        {/* Key terms */}
        <h2 style={sectionHeading}>Key terms</h2>
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
              <th style={th}>Term</th>
              <th style={th}>Definition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>
                <strong>Total rise</strong>
              </td>
              <td style={td}>
                Vertical distance from finished floor to finished floor
              </td>
            </tr>
            <tr>
              <td style={td}>
                <strong>Riser</strong>
              </td>
              <td style={td}>Vertical height of one step</td>
            </tr>
            <tr>
              <td style={td}>
                <strong>Tread (run)</strong>
              </td>
              <td style={td}>Horizontal depth of one step, nose to nose</td>
            </tr>
            <tr>
              <td style={td}>
                <strong>Total run</strong>
              </td>
              <td style={td}>Total horizontal distance the stair covers</td>
            </tr>
            <tr>
              <td style={td}>
                <strong>Stringer</strong>
              </td>
              <td style={td}>Diagonal support board the treads sit on</td>
            </tr>
          </tbody>
        </table>

        {/* Step 1 */}
        <h2 style={sectionHeading}>Step 1 — Measure total rise precisely</h2>
        <p style={paragraph}>
          Total rise is the finished floor to finished floor height — including
          any flooring material on both levels. This is the most critical
          measurement: a ½-inch error here shows up as a ½-inch error on the
          bottom riser, which fails inspection.
        </p>
        <div style={note}>
          Always measure finished-to-finished. If you&apos;re adding ¾-inch
          hardwood upstairs and ½-inch tile downstairs, factor both thicknesses
          in before calculating. Building from rough framing dimensions is the
          most common source of stair callbacks.
        </div>

        {/* Step 2 */}
        <h2 style={sectionHeading}>Step 2 — Calculate riser count</h2>
        <p style={paragraph}>
          Divide total rise by your target riser height and round{" "}
          <strong>up</strong>. Never round down — it produces a riser that
          exceeds the IRC maximum.
        </p>
        <div style={formula}>
          Risers = ⌈Total Rise &divide; Target Riser Height⌉
        </div>
        <p style={paragraph}>
          <strong>Example:</strong> 108-inch total rise, 7-inch target riser:
        </p>
        <div style={formula}>⌈108 &divide; 7⌉ = ⌈15.43⌉ = 16 risers</div>

        {/* Step 3 */}
        <h2 style={sectionHeading}>Step 3 — Back-derive actual riser height</h2>
        <p style={paragraph}>
          Once you have the riser count, divide total rise by that number to get
          the actual uniform riser height. This ensures every step is identical
          — required by IRC §R311.7.5.1.
        </p>
        <div style={formula}>
          Actual Riser = Total Rise &divide; Number of Risers
        </div>
        <p style={paragraph}>
          <strong>Example:</strong> 108 &divide; 16 = 6.75 inches per riser ✓
          (under 7¾&quot; IRC maximum)
        </p>
        <div style={note}>
          The ⅜-inch uniformity rule is the most commonly failed inspection
          point. Never adjust just the bottom or top step to make the math work
          — distribute any remainder evenly across all risers.
        </div>

        {/* Step 4 */}
        <h2 style={sectionHeading}>
          Step 4 — Count treads and calculate total run
        </h2>
        <p style={paragraph}>
          In a standard mount stair, the deck or landing surface acts as the top
          tread. So the number of physical treads is always one less than the
          riser count.
        </p>
        <div style={formula}>Treads = Risers &minus; 1</div>
        <div style={formula}>Total Run = Treads &times; Tread Depth</div>
        <p style={paragraph}>
          <strong>Example:</strong> 16 risers, 11-inch tread depth: 15 treads
          &times; 11&quot; = 165 inches (13 ft 9 in) total run
        </p>

        {/* Step 5 */}
        <h2 style={sectionHeading}>Step 5 — Calculate stringer length</h2>
        <p style={paragraph}>
          The stringer is the hypotenuse of the right triangle formed by total
          rise and total run. Use the Pythagorean theorem:
        </p>
        <div style={formula}>
          Stringer = &radic;(Total Rise&sup2; + Total Run&sup2;)
        </div>
        <p style={paragraph}>
          <strong>Example:</strong> 108-inch rise, 165-inch run:
        </p>
        <div style={formula}>
          &radic;(108&sup2; + 165&sup2;) = &radic;(11,664 + 27,225) =
          &radic;38,889 = 197.2 in (16.4 ft)
        </div>
        <p style={paragraph}>
          Buy the next standard lumber length up — in this case 18-foot
          2&times;12 stringers. Add 6–12 inches to your calculated length for
          the top plumb cut and bottom seat cut.
        </p>
        <div style={note}>
          For standard mount decks, use total rise minus one riser height as the
          vertical leg of the triangle — the deck face is the top tread, so the
          stringer doesn&apos;t span the full rise.
        </div>

        {/* Comfort formula */}
        <h2 style={sectionHeading}>The comfort formula</h2>
        <p style={paragraph}>
          A stair that passes code isn&apos;t always comfortable. The ergonomic
          standard, documented by Nicolas-François Blondel in 1672 and restated
          in AWC DCA-6, is:
        </p>
        <div style={formula}>Rise + Run = 17 to 18 inches</div>
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
              <th style={th}>Rise</th>
              <th style={th}>Run</th>
              <th style={th}>Sum</th>
              <th style={th}>Angle</th>
              <th style={th}>Feel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>7&quot;</td>
              <td style={td}>11&quot;</td>
              <td style={td}>18 ✓</td>
              <td style={td}>32.5°</td>
              <td style={td}>Ideal — most comfortable</td>
            </tr>
            <tr>
              <td style={td}>7.5&quot;</td>
              <td style={td}>10&quot;</td>
              <td style={td}>17.5 ✓</td>
              <td style={td}>36.9°</td>
              <td style={td}>Acceptable, slightly steep</td>
            </tr>
            <tr>
              <td style={td}>7.75&quot;</td>
              <td style={td}>10&quot;</td>
              <td style={td}>17.75 ✓</td>
              <td style={td}>37.8°</td>
              <td style={td}>IRC max — noticeably steep</td>
            </tr>
            <tr>
              <td style={td}>6.75&quot;</td>
              <td style={td}>11&quot;</td>
              <td style={td}>17.75 ✓</td>
              <td style={td}>31.5°</td>
              <td style={td}>Comfortable, uses more floor space</td>
            </tr>
          </tbody>
        </table>

        {/* Worked example */}
        <h2 style={sectionHeading}>Full worked example</h2>
        <p style={paragraph}>
          Standard 9-ft floor-to-floor (108 inches), 7-inch target riser,
          11-inch treads:
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
              <th style={th}>Calculation</th>
              <th style={th}>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Risers = ⌈108 &divide; 7⌉</td>
              <td style={td}>16 risers</td>
            </tr>
            <tr>
              <td style={td}>Actual riser = 108 &divide; 16</td>
              <td style={td}>6.75&quot; ✓ (under 7¾&quot; max)</td>
            </tr>
            <tr>
              <td style={td}>Treads = 16 &minus; 1</td>
              <td style={td}>15 treads</td>
            </tr>
            <tr>
              <td style={td}>Total run = 15 &times; 11&quot;</td>
              <td style={td}>165&quot; (13 ft 9 in)</td>
            </tr>
            <tr>
              <td style={td}>Comfort = 6.75 + 11</td>
              <td style={td}>17.75&quot; ✓</td>
            </tr>
            <tr>
              <td style={td}>Stringer = &radic;(108&sup2; + 165&sup2;)</td>
              <td style={td}>197.2&quot; (16.4 ft) → buy 18 ft 2&times;12</td>
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
            Enter your floor-to-floor height to get riser count, actual riser
            height, total run, stringer length, and IRC code check instantly.
          </p>
          <Link
            href="/stair-calculator"
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
            Use the Stair Calculator &rarr;
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
