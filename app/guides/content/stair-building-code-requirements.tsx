import Link from "next/link";
import { sectionHeading, paragraph, formula, note, th, td } from "./shared";

const faqs = [
  {
    question: "What is the maximum riser height for residential stairs?",
    answer:
      'The IRC sets a maximum riser height of 7¾ inches (7.75") for residential stairs. All risers in a single flight must be within ⅜ inch of each other — this uniformity rule is the most commonly failed inspection point.',
  },
  {
    question: "What is the minimum tread depth per building code?",
    answer:
      "IRC R311.7.5.2 requires a minimum tread depth of 10 inches, measured nose to nose. For exterior stairs, some jurisdictions require 11 inches. The comfortable range is 10–11 inches.",
  },
  {
    question: "How wide do stairs need to be?",
    answer:
      "IRC R311.7.1 requires a minimum clear width of 36 inches for residential stairs, measured above the handrail height. Some jurisdictions require wider stairs for egress purposes — always check local amendments.",
  },
  {
    question: "When is a handrail required?",
    answer:
      "IRC R311.7.8 requires a handrail on at least one side of any stairway with 4 or more risers. Handrail height must be 34–38 inches measured vertically above the leading edge of the treads. It must run continuously for the full length of the flight.",
  },
  {
    question: "What is the minimum headroom for stairs?",
    answer:
      "IRC R311.7.2 requires a minimum headroom of 6 feet 8 inches (80 inches) measured vertically from the sloped line connecting the leading edges of the treads to the ceiling above.",
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
  headline: "Stair Building Code Requirements (IRC R311.7)",
  description:
    "Complete reference for IRC residential stair code requirements — riser height, tread depth, width, headroom, handrails, and landings.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://buildcalczone.com/guides/stair-building-code-requirements",
  },
  datePublished: "2026-07-08",
  dateModified: "2026-07-08",
  author: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  publisher: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  image: { "@type": "ImageObject", url: "https://buildcalczone.com/opengraph-image", width: 1200, height: 630 },
};

export default function StairBuildingCodeRequirements() {
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
            Stair Building Code Requirements (IRC R311.7)
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            Stairs are one of the most code-intensive elements in residential
            construction. Every dimension is regulated — riser height, tread
            depth, width, headroom, handrail height, and landing size. This is a
            complete reference for IRC R311.7 residential stair requirements.
          </p>
        </header>

        <div style={note}>
          This guide covers the 2021 IRC (International Residential Code). Local
          jurisdictions may adopt different editions or add amendments — always
          confirm with your local building department before cutting stringers.
          Commercial stairs follow IBC §1011, which has stricter requirements.
        </div>

        {/* Quick reference */}
        <h2 style={sectionHeading}>Quick reference — IRC R311.7</h2>
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
              <th style={th}>Requirement</th>
              <th style={th}>IRC Residential</th>
              <th style={th}>IBC Commercial</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Max riser height</td>
              <td style={td}>7¾&quot; (7.75&quot;)</td>
              <td style={td}>7&quot;</td>
            </tr>
            <tr>
              <td style={td}>Min tread depth</td>
              <td style={td}>10&quot;</td>
              <td style={td}>11&quot;</td>
            </tr>
            <tr>
              <td style={td}>Riser uniformity</td>
              <td style={td}>Max ⅜&quot; variation</td>
              <td style={td}>Max ⅜&quot; variation</td>
            </tr>
            <tr>
              <td style={td}>Min stair width</td>
              <td style={td}>36&quot; clear</td>
              <td style={td}>44&quot; (most occupancies)</td>
            </tr>
            <tr>
              <td style={td}>Min headroom</td>
              <td style={td}>6&apos;8&quot; (80&quot;)</td>
              <td style={td}>6&apos;8&quot; (80&quot;)</td>
            </tr>
            <tr>
              <td style={td}>Handrail height</td>
              <td style={td}>34&quot;–38&quot;</td>
              <td style={td}>34&quot;–38&quot;</td>
            </tr>
            <tr>
              <td style={td}>Handrail required</td>
              <td style={td}>4+ risers, one side</td>
              <td style={td}>Both sides if &gt;44&quot; wide</td>
            </tr>
            <tr>
              <td style={td}>Min landing depth</td>
              <td style={td}>36&quot; in travel direction</td>
              <td style={td}>44&quot; in travel direction</td>
            </tr>
            <tr>
              <td style={td}>Nosing projection</td>
              <td style={td}>¾&quot;–1¼&quot;</td>
              <td style={td}>¾&quot;–1¼&quot;</td>
            </tr>
          </tbody>
        </table>

        {/* Riser height */}
        <h2 style={sectionHeading}>Riser height — IRC R311.7.5.1</h2>
        <p style={paragraph}>
          Maximum riser height is 7¾ inches. Minimum is 4 inches. The most
          important rule — and the most commonly failed at inspection — is the
          uniformity requirement:
        </p>
        <div style={formula}>
          Max variation between any two risers in a flight: ⅜ inch
        </div>
        <p style={paragraph}>
          This means you cannot simply make the bottom or top step a different
          height to absorb rounding. Divide total rise evenly across all risers
          so every step is identical. A stair with 13 risers at 7.25 inches and
          one riser at 7.75 inches fails this test — inspectors measure every
          riser.
        </p>
        <div style={note}>
          Always measure finished floor to finished floor, including flooring
          thickness on both levels. A ½-inch error in total rise measurement
          shows up as a ½-inch error on one riser — which may push it outside
          the ⅜-inch tolerance.
        </div>

        {/* Tread depth */}
        <h2 style={sectionHeading}>Tread depth — IRC R311.7.5.2</h2>
        <p style={paragraph}>
          Minimum tread depth is 10 inches, measured horizontally from nosing to
          nosing. The comfortable residential range is 10–11 inches. Tread depth
          and riser height work together — the ergonomic comfort formula is:
        </p>
        <div style={formula}>Rise + Run = 17 to 18 inches</div>
        <p style={paragraph}>
          A 7-inch rise with 11-inch run (sum = 18) is the most comfortable
          combination. The IRC-maximum combination of 7¾-inch rise with 10-inch
          run (sum = 17.75) is legal but feels noticeably steep on the way down.
        </p>

        {/* Width */}
        <h2 style={sectionHeading}>Stair width — IRC R311.7.1</h2>
        <p style={paragraph}>
          Minimum clear width is 36 inches, measured above the handrail height.
          Below the handrail, the minimum is 31.5 inches on one side or 27
          inches on both sides where handrails project into the width. Most
          residential stairs are built at 36–42 inches.
        </p>

        {/* Headroom */}
        <h2 style={sectionHeading}>Headroom — IRC R311.7.2</h2>
        <p style={paragraph}>
          Minimum headroom is 6 feet 8 inches (80 inches), measured vertically
          from the sloped plane connecting the leading edges of the treads to
          the ceiling or soffit above. This measurement must be maintained for
          the full length of the stairway.
        </p>
        <div style={note}>
          Headroom is frequently a problem at the top of basement stairs where a
          beam or duct crosses. Check this before finalizing stair location —
          moving a stair after framing is expensive.
        </div>

        {/* Handrails */}
        <h2 style={sectionHeading}>Handrails — IRC R311.7.8</h2>
        <p style={paragraph}>
          A handrail is required on at least one side of any stairway with 4 or
          more risers. Key requirements:
        </p>
        <ul style={{ paddingLeft: "20px", margin: "0 0 14px" }}>
          <li
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.8,
              marginBottom: "6px",
            }}
          >
            <strong>Height:</strong> 34–38 inches measured vertically above the
            leading edge of the treads
          </li>
          <li
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.8,
              marginBottom: "6px",
            }}
          >
            <strong>Continuity:</strong> Must run the full length of the flight,
            from top riser to bottom riser
          </li>
          <li
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.8,
              marginBottom: "6px",
            }}
          >
            <strong>Graspable profile:</strong> Round rails 1¼&quot;–2&quot;
            diameter. Non-circular profiles must have a perimeter of
            4&quot;–6¼&quot; with a max cross-section of 2¼&quot;
          </li>
          <li
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.8,
              marginBottom: "6px",
            }}
          >
            <strong>Wall clearance:</strong> Minimum 1½ inches between the
            handrail and any wall
          </li>
          <li
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.8,
              marginBottom: "6px",
            }}
          >
            <strong>Bracket spacing:</strong> Maximum 48 inches apart, rated 200
            lb minimum
          </li>
        </ul>

        {/* Landings */}
        <h2 style={sectionHeading}>Landings — IRC R311.7.6</h2>
        <p style={paragraph}>
          A landing is required at the top and bottom of every stairway. Key
          rules:
        </p>
        <ul style={{ paddingLeft: "20px", margin: "0 0 14px" }}>
          <li
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.8,
              marginBottom: "6px",
            }}
          >
            Minimum 36 inches in the direction of travel
          </li>
          <li
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.8,
              marginBottom: "6px",
            }}
          >
            Width must be at least the stair width
          </li>
          <li
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.8,
              marginBottom: "6px",
            }}
          >
            Maximum vertical rise between landings: 12 feet 3 inches (147
            inches)
          </li>
          <li
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.8,
              marginBottom: "6px",
            }}
          >
            Doors at the top of stairs must not swing over the top step — they
            must swing over the landing
          </li>
        </ul>

        {/* Nosing */}
        <h2 style={sectionHeading}>Nosing — IRC R311.7.5.3</h2>
        <p style={paragraph}>
          Open risers are not permitted for residential stairs (a 4-inch sphere
          must not pass through any opening). Where a nosing projection exists,
          it must be ¾ inch to 1¼ inches. The nosing radius must not exceed 9/16
          inch to reduce trip hazard. Solid risers are required.
        </p>

        {/* Common failures */}
        <h2 style={sectionHeading}>Most common inspection failures</h2>
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
              <th style={th}>Failure</th>
              <th style={th}>Root cause</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Riser variation &gt; ⅜&quot;</td>
              <td style={td}>
                Measured rough-to-rough instead of finished-to-finished
              </td>
            </tr>
            <tr>
              <td style={td}>Bottom riser too tall</td>
              <td style={td}>
                Flooring thickness not factored in at lower level
              </td>
            </tr>
            <tr>
              <td style={td}>Headroom too low</td>
              <td style={td}>Beam or duct not accounted for in stair layout</td>
            </tr>
            <tr>
              <td style={td}>Handrail not graspable</td>
              <td style={td}>
                Decorative wide-profile rail without a graspable recess
              </td>
            </tr>
            <tr>
              <td style={td}>Landing too short</td>
              <td style={td}>Door swings reduce effective landing depth</td>
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
            Check your stair dimensions automatically
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-2)",
              marginBottom: "12px",
            }}
          >
            Enter your floor-to-floor height to get riser count, actual riser
            height, stringer length, and an IRC code compliance check.
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
