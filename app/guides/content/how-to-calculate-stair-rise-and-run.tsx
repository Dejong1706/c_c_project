import Link from "next/link";
import { Breadcrumb, sectionHeading, paragraph, formula, note, th, td, link } from "./shared";

const faqs = [
  {
    question: "How do I calculate the number of stairs I need?",
    answer:
      "Divide your total floor-to-floor height by your target riser height and round up. For example, 108 inches ÷ 7 inches = 15.4, rounded up to 16 risers. Then back-derive the actual riser: 108 ÷ 16 = 6.75 inches per riser.",
  },
  {
    question: "What is the ideal stair rise and run?",
    answer:
      "The IRC doesn't define an ideal. It sets limits: risers no more than 7¾ inches (§R318.7.5.1) and treads at least 10 inches deep (§R318.7.5.2). For proportion, England's Approved Document K gives 2 × rise + going between 550 mm and 700 mm (about 21.7–27.6 inches). A 7-inch rise with an 11-inch tread meets the IRC limits and gives 2R + G = 25 inches (635 mm).",
  },
  {
    question: "How do I calculate stringer length?",
    answer:
      "Use the Pythagorean theorem: stringer length = √((total rise − one riser)² + total run²). In a standard mount stair the deck face is the top step, so the stringer climbs one riser less than the total rise. For a 108-inch total rise with 16 risers of 6.75 inches and 15 treads of 11 inches (165-inch run): √(101.25² + 165²) = √37,476.6 ≈ 193.6 inches (16.1 ft). Add 6–12 inches for cuts and buy the next standard lumber length up — 18 ft here.",
  },
  {
    question: "Why can't I just make the bottom step a different height?",
    answer:
      "IRC §R318.7.5.1 says the greatest riser height within any flight shall not exceed the smallest by more than ⅜ inch. A bottom or top step that differs from the rest by more than that violates the rule, so spread any remainder evenly across all risers instead.",
  },
  {
    question: "Does the deck or landing count as a tread?",
    answer:
      "Yes — in standard mount, the deck or landing surface serves as the top step, so it isn't cut into the stringer. That's why treads = risers minus 1 for this layout. A 15-riser stair has 14 physical treads in the stringer.",
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
  dateModified: "2026-10-16",
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
        <Breadcrumb current="How to Calculate Stair Rise and Run" />
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
            Structural
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
          any flooring material on both levels. Every later number depends on
          it: a ½-inch error here ends up as a ½-inch difference on the first
          or last riser, more than the ⅜-inch variation the IRC allows within
          a flight.
        </p>
        <div style={note}>
          Always measure finished-to-finished. If you&apos;re adding ¾-inch
          hardwood upstairs and ½-inch tile downstairs, factor both thicknesses
          in before calculating.
        </div>

        {/* Step 2 */}
        <h2 style={sectionHeading}>Step 2 — Calculate riser count</h2>
        <p style={paragraph}>
          Divide total rise by your target riser height and round{" "}
          <strong>up</strong>. Rounding down gives fewer, taller risers — taller
          than your target, and over the 7¾-inch IRC maximum if your target
          was already close to it. For example, 108 &divide; 7 rounded down is
          15 risers at 7.2 inches: still legal, but steeper than planned.
          Whichever way you round, check the actual riser height in Step 3.
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
          the actual uniform riser height. This keeps every step the same height
          — IRC §R318.7.5.1 allows no more than ⅜ inch of variation within a
          flight. See{" "}
          <Link href="/guides/stair-building-code-requirements" style={link}>
            stair building code requirements
          </Link>{" "}
          for the full set of IRC limits.
        </p>
        <div style={formula}>
          Actual Riser = Total Rise &divide; Number of Risers
        </div>
        <p style={paragraph}>
          <strong>Example:</strong> 108 &divide; 16 = 6.75 inches per riser ✓
          (under 7¾&quot; IRC maximum)
        </p>
        <div style={note}>
          Because of the ⅜-inch uniformity rule, never adjust just the bottom
          or top step to make the math work — distribute any remainder evenly
          across all risers.
        </div>

        {/* Step 4 */}
        <h2 style={sectionHeading}>
          Step 4 — Count treads and calculate total run
        </h2>
        <p style={paragraph}>
          In a standard mount stair, the deck or upper landing surface serves
          as the top step, so it isn&apos;t cut into the stringer. For this
          layout, the number of physical treads is one less than the riser
          count.
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
          In a standard mount stair, the stringer is the hypotenuse of a right
          triangle whose legs are the total run and the total rise minus one
          riser. Use the Pythagorean theorem:
        </p>
        <div style={formula}>
          Stringer = &radic;((Total Rise &minus; One Riser)&sup2; + Total
          Run&sup2;)
        </div>
        <div style={note}>
          The deck face is the top step, so the stringer stops one riser below
          the deck surface and doesn&apos;t climb the full rise.
        </div>
        <p style={paragraph}>
          <strong>Example:</strong> 108-inch total rise minus one 6.75-inch
          riser = 101.25-inch stringer rise, with a 165-inch run:
        </p>
        <div style={formula}>
          &radic;(101.25&sup2; + 165&sup2;) = &radic;(10,251.6 + 27,225) =
          &radic;37,476.6 = 193.6 in (16.1 ft)
        </div>
        <p style={paragraph}>
          Add 6–12 inches to your calculated length for the top plumb cut and
          bottom seat cut, then buy the next standard lumber length up — in
          this case 18-foot 2&times;12 stringers.
        </p>
        <div style={note}>
          The American Wood Council&apos;s deck guide (DCA 6, Figure 28) limits
          a cut stringer to a maximum span of 6&apos;-0&quot; measured
          horizontally, so a 165-inch run like this one needs a 4&times;4 post
          on a footing or an intermediate landing to shorten the span.
        </div>

        {/* Comfort formula */}
        <h2 style={sectionHeading}>Checking rise and run together</h2>
        <p style={paragraph}>
          The IRC sets limits on each dimension — a riser of no more than 7¾
          inches (§R318.7.5.1) and a tread of at least 10 inches
          (§R318.7.5.2) — but no formula linking the two. England&apos;s
          Approved Document K (Table 1.1) does give one: &ldquo;twice the rise
          plus the going (2R + G) equals between 550mm and 700mm&rdquo;, about
          21.7 to 27.6 inches. It&apos;s UK guidance, not a US code
          requirement, but it&apos;s a published check on proportion.
        </p>
        <div style={formula}>550 mm &le; 2 &times; Rise + Going &le; 700 mm</div>
        <p style={paragraph}>
          In the US, carpenters commonly use a simpler rule of thumb: rise plus
          run of about 17–18 inches (7 + 11 = 18). It isn&apos;t a code
          requirement, but it&apos;s widely used and our stair calculator shows
          it as a quick check.
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
              <th style={th}>Rise</th>
              <th style={th}>Run</th>
              <th style={th}>2R + G</th>
              <th style={th}>Angle</th>
              <th style={th}>IRC limits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>7&quot;</td>
              <td style={td}>11&quot;</td>
              <td style={td}>25&quot; (635 mm) ✓</td>
              <td style={td}>32.5°</td>
              <td style={td}>Within both</td>
            </tr>
            <tr>
              <td style={td}>7.5&quot;</td>
              <td style={td}>10&quot;</td>
              <td style={td}>25&quot; (635 mm) ✓</td>
              <td style={td}>36.9°</td>
              <td style={td}>Within both; tread at minimum</td>
            </tr>
            <tr>
              <td style={td}>7.75&quot;</td>
              <td style={td}>10&quot;</td>
              <td style={td}>25.5&quot; (648 mm) ✓</td>
              <td style={td}>37.8°</td>
              <td style={td}>Max riser and min tread — steepest allowed</td>
            </tr>
            <tr>
              <td style={td}>6.75&quot;</td>
              <td style={td}>11&quot;</td>
              <td style={td}>24.5&quot; (622 mm) ✓</td>
              <td style={td}>31.5°</td>
              <td style={td}>Within both</td>
            </tr>
          </tbody>
        </table>

        {/* Worked example */}
        <h2 style={sectionHeading}>Full worked example</h2>
        <p style={paragraph}>
          9-ft floor-to-floor (108 inches), 7-inch target riser, 11-inch
          treads, standard mount:
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
              <td style={td}>2R + G = 2 &times; 6.75 + 11</td>
              <td style={td}>24.5&quot; (622 mm) ✓ (550–700 mm)</td>
            </tr>
            <tr>
              <td style={td}>Stringer = &radic;((108 &minus; 6.75)&sup2; + 165&sup2;)</td>
              <td style={td}>193.6&quot; (16.1 ft) → buy 18 ft 2&times;12</td>
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
