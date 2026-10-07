import Link from "next/link";
import {
  Breadcrumb,
  GuideTable,
  IntroText,
  NoteBox,
  formula,
  link,
  listItem,
  paragraph,
  sectionHeading,
  td,
  th,
} from "./shared";

const faqs = [
  {
    question: "What is the maximum riser height for residential stairs?",
    answer:
      'The IRC sets a maximum riser height of 7¾ inches (7.75"). There is no minimum riser height in the IRC. All risers in a single flight must be within ⅜ inch of each other — this uniformity rule is the most commonly failed inspection point.',
  },
  {
    question: "What is the minimum tread depth per building code?",
    answer:
      "IRC R311.7.5.2 requires a minimum tread depth of 10 inches, measured horizontally between the leading edges of adjacent treads. As with risers, the deepest and shallowest tread in a flight may differ by no more than ⅜ inch. Commercial stairs under the IBC need 11 inches.",
  },
  {
    question: "How wide do stairs need to be?",
    answer:
      "IRC R311.7.1 requires a minimum clear width of 36 inches above the handrail. At and below the handrail, the clear width can drop to 31½ inches with a handrail on one side, or 27 inches with handrails on both sides.",
  },
  {
    question: "How many steps before a handrail is required?",
    answer:
      "IRC R311.7.8 requires a handrail on at least one side of any flight with 4 or more risers. Handrail height must be 34–38 inches, measured vertically from the line connecting the tread nosings, and it must run continuously for the full length of the flight.",
  },
  {
    question: "What is the minimum headroom for stairs?",
    answer:
      "IRC R311.7.2 requires a minimum headroom of 6 feet 8 inches (80 inches), measured vertically from the sloped line connecting the tread nosings to the ceiling or soffit above. Spiral stairs are allowed 6 feet 6 inches.",
  },
  {
    question: "Are open risers allowed on residential stairs?",
    answer:
      "Yes. The IRC allows open risers as long as the gap between treads will not let a 4-inch sphere pass through. If the total rise of the stair is 30 inches or less, the openings do not need to meet this limit at all.",
  },
  {
    question: "Do deck stairs have to meet the same code?",
    answer:
      "Yes. Stairs serving a deck are regulated by the same IRC R311.7 rules as interior stairs — 7¾-inch maximum risers, 10-inch minimum treads, 36-inch width, handrails at 4 or more risers — plus guards on open sides more than 30 inches above grade and a light at the top landing.",
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
    "IRC residential stair code explained — riser height, tread depth, width, headroom, handrails, guards, landings, winders, spiral and deck stairs, with a worked example.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://buildcalczone.com/guides/stair-building-code-requirements",
  },
  datePublished: "2026-07-08",
  dateModified: "2026-10-07",
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
        <Breadcrumb current="Stair Building Code Requirements (IRC R311.7)" />
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
            Stair Building Code Requirements (IRC R311.7)
          </h1>
          <IntroText>
            Stairs are one of the most code-intensive elements in residential
            construction. Every dimension is regulated — riser height, tread
            depth, width, headroom, handrails, guards and landings. This is a
            complete reference for the IRC residential stair rules, with a
            worked example and the special cases: winders, spiral stairs and
            deck stairs.
          </IntroText>
        </header>

        <NoteBox>
          This guide covers the 2021 IRC (International Residential Code).
          Local jurisdictions may adopt a different edition or add amendments —
          always confirm with your local building department before cutting
          stringers. Commercial stairs follow IBC §1011, which is stricter.
        </NoteBox>

        <h2 style={sectionHeading}>Quick reference — IRC vs IBC</h2>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Requirement</th>
              <th style={th}>IRC residential</th>
              <th style={th}>IBC commercial</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Max riser height</td>
              <td style={td}>7¾&quot;</td>
              <td style={td}>7&quot;</td>
            </tr>
            <tr>
              <td style={td}>Min riser height</td>
              <td style={td}>None</td>
              <td style={td}>4&quot;</td>
            </tr>
            <tr>
              <td style={td}>Min tread depth</td>
              <td style={td}>10&quot;</td>
              <td style={td}>11&quot;</td>
            </tr>
            <tr>
              <td style={td}>Riser / tread uniformity</td>
              <td style={td}>⅜&quot; max variation</td>
              <td style={td}>⅜&quot; max variation</td>
            </tr>
            <tr>
              <td style={td}>Min stair width</td>
              <td style={td}>36&quot; clear</td>
              <td style={td}>44&quot; (36&quot; under 50 occupants)</td>
            </tr>
            <tr>
              <td style={td}>Min headroom</td>
              <td style={td}>6&apos;8&quot;</td>
              <td style={td}>6&apos;8&quot;</td>
            </tr>
            <tr>
              <td style={td}>Handrail height</td>
              <td style={td}>34&quot;–38&quot;</td>
              <td style={td}>34&quot;–38&quot;</td>
            </tr>
            <tr>
              <td style={td}>Handrails required</td>
              <td style={td}>One side, 4+ risers</td>
              <td style={td}>Both sides (with exceptions)</td>
            </tr>
            <tr>
              <td style={td}>Max rise between landings</td>
              <td style={td}>151&quot; (12&apos;7&quot;)</td>
              <td style={td}>12&apos;</td>
            </tr>
            <tr>
              <td style={td}>Min landing depth</td>
              <td style={td}>36&quot;</td>
              <td style={td}>Stair width (need not exceed 48&quot; on a straight run)</td>
            </tr>
          </tbody>
        </GuideTable>

        <h2 style={sectionHeading}>Worked example: checking a stair</h2>
        <p style={paragraph}>
          Say the finished floor-to-floor height is 105 inches. Divide by the
          7¾-inch maximum and round up to get the fewest risers that pass:
        </p>
        <div style={formula}>105 ÷ 7.75 = 13.5 → 14 risers</div>
        <div style={formula}>105 ÷ 14 = 7.5&quot; per riser ✓</div>
        <p style={paragraph}>
          A straight flight has one fewer tread than risers, so 13 treads. At
          the 10-inch minimum that is a total run of 130 inches (10&apos;10&quot;).
          The rise + run check — 7.5 + 10 = 17.5 inches — falls in the
          comfortable 17–18 inch range. Our{" "}
          <Link href="/stair-calculator" style={link}>
            stair calculator
          </Link>{" "}
          does this, plus stringer length, for any height.
        </p>

        <h2 style={sectionHeading}>Riser height — IRC R311.7.5.1</h2>
        <p style={paragraph}>
          Maximum riser height is 7¾ inches, measured vertically between the
          leading edges of adjacent treads. The IRC sets no minimum. The most
          important rule — and the most commonly failed at inspection — is
          uniformity:
        </p>
        <div style={formula}>
          Tallest riser − shortest riser in a flight ≤ ⅜ inch
        </div>
        <p style={paragraph}>
          You cannot make the bottom or top step a different height to absorb
          rounding. Divide the total rise evenly across all risers so every
          step is identical. A stair with 13 risers at 7¼ inches and one at 7¾
          inches fails — inspectors measure every riser.
        </p>
        <p style={paragraph}>
          <strong>Open risers</strong>{" "}(no riser board) are allowed, as long as
          the gap between treads will not let a 4-inch sphere pass through. If
          the stair&apos;s total rise is 30 inches or less, that limit does not
          apply.
        </p>
        <NoteBox>
          Always measure finished floor to finished floor, including flooring
          on both levels. A ½-inch error in total rise ends up on one riser —
          enough to push it outside the ⅜-inch tolerance.
        </NoteBox>

        <h2 style={sectionHeading}>Tread depth — IRC R311.7.5.2</h2>
        <p style={paragraph}>
          Minimum tread depth is 10 inches, measured horizontally between the
          leading edges of adjacent treads. The same ⅜-inch uniformity rule
          applies to treads. Tread depth and riser height work together — the
          long-standing comfort rule of thumb is:
        </p>
        <div style={formula}>Rise + Run = 17 to 18 inches</div>
        <p style={paragraph}>
          A 7-inch rise with an 11-inch run (sum 18) is the most comfortable
          combination. The IRC limit of a 7¾-inch rise with a 10-inch run (sum
          17¾) is legal but feels noticeably steep going down.
        </p>

        <h2 style={sectionHeading}>Winder treads — IRC R311.7.5.2.1</h2>
        <p style={paragraph}>
          Winders are the wedge-shaped treads used to turn a stair without a
          landing. Because they are narrow at one end, the IRC measures them
          along a <strong>walkline</strong> 12 inches in from the narrow side:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
          <li style={listItem}>At least 10 inches deep at the walkline</li>
          <li style={listItem}>At least 6 inches deep at any point</li>
          <li style={listItem}>
            Winder depths at the walkline within ⅜ inch of each other
          </li>
        </ul>

        <h2 style={sectionHeading}>Nosing — IRC R311.7.5.3</h2>
        <p style={paragraph}>
          On stairs with solid risers, each tread needs a nosing that projects
          ¾ inch to 1¼ inches past the riser below, with no more than ⅜ inch
          variation in a flight. The nosing radius may not exceed 9⁄16 inch. A
          nosing is not required when treads are at least 11 inches deep.
        </p>

        <h2 style={sectionHeading}>Stair width — IRC R311.7.1</h2>
        <p style={paragraph}>
          Minimum clear width is 36 inches above the handrail. Handrails may
          project up to 4½ inches into that width, so at and below handrail
          height the minimum is 31½ inches with a handrail on one side, or 27
          inches with handrails on both sides. Most residential stairs are
          built 36–42 inches wide.
        </p>

        <h2 style={sectionHeading}>Headroom — IRC R311.7.2</h2>
        <p style={paragraph}>
          Minimum headroom is 6 feet 8 inches (80 inches), measured vertically
          from the sloped line connecting the tread nosings to the ceiling or
          soffit above, along the full length of the stair.
        </p>
        <NoteBox>
          Headroom is frequently a problem at the top of basement stairs where
          a beam or duct crosses. Check this before finalizing the stair
          location — moving a stair after framing is expensive.
        </NoteBox>

        <h2 style={sectionHeading}>Handrails — IRC R311.7.8</h2>
        <p style={paragraph}>
          A handrail is required on at least one side of any flight with 4 or
          more risers. Key requirements:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
          <li style={listItem}>
            <strong>Height:</strong> 34–38 inches, measured vertically from the
            line connecting the tread nosings
          </li>
          <li style={listItem}>
            <strong>Continuity:</strong> runs the full flight, from above the
            top riser to above the bottom riser; ends return to the wall or
            finish at a newel post
          </li>
          <li style={listItem}>
            <strong>Graspable profile:</strong> round rails 1¼–2 inches in
            diameter; other shapes need a 4–6¼ inch perimeter and a cross-section
            no wider than 2¼ inches
          </li>
          <li style={listItem}>
            <strong>Wall clearance:</strong> at least 1½ inches between the rail
            and the wall
          </li>
          <li style={listItem}>
            <strong>Strength:</strong> must resist a 200 lb load in any
            direction — bracket spacing comes from the bracket manufacturer,
            commonly 4 feet or less
          </li>
        </ul>

        <h2 style={sectionHeading}>Guards on open sides — IRC R312</h2>
        <p style={paragraph}>
          A handrail is for gripping; a <strong>guard</strong> stops people
          falling off the side. Guards are required on the open side of a
          stair or landing that is more than 30 inches above the floor or
          grade below.
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
          <li style={listItem}>
            At least 34 inches high on the stair, measured from the tread
            nosings (36 inches on landings and floors)
          </li>
          <li style={listItem}>
            Balusters spaced so a 4⅜-inch sphere cannot pass (4 inches on
            landings and floors)
          </li>
          <li style={listItem}>
            The triangle formed by the riser, tread and bottom rail must stop a
            6-inch sphere
          </li>
        </ul>

        <h2 style={sectionHeading}>Landings — IRC R311.7.6</h2>
        <p style={paragraph}>
          A landing or floor is required at the top and bottom of every
          stairway. Key rules:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
          <li style={listItem}>At least 36 inches deep in the direction of travel</li>
          <li style={listItem}>At least as wide as the stair it serves</li>
          <li style={listItem}>
            No flight may rise more than 151 inches (12&apos;7&quot;) between
            floors or landings (R311.7.3)
          </li>
          <li style={listItem}>
            A top landing is not needed on an interior stair if the door at the
            top does not swing over the stairs
          </li>
        </ul>

        <h2 style={sectionHeading}>Lighting — IRC R303.7</h2>
        <p style={paragraph}>
          Interior stairs need a light that illuminates the treads and
          landings. If the stair has 6 or more risers, the light must be
          switchable from both the top and bottom floor levels (unless it is
          always on or automatic). Exterior stairs need a light at the top
          landing.
        </p>

        <h2 style={sectionHeading}>Spiral stairs — IRC R311.7.10.1</h2>
        <p style={paragraph}>
          Spiral stairs get their own, looser rules because of their compact
          geometry:
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Requirement</th>
              <th style={th}>Spiral stair</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Min clear width</td>
              <td style={td}>26&quot; at and below the handrail</td>
            </tr>
            <tr>
              <td style={td}>Min tread depth</td>
              <td style={td}>6¾&quot; at the walkline (12&quot; from the narrow edge)</td>
            </tr>
            <tr>
              <td style={td}>Max riser height</td>
              <td style={td}>9½&quot;</td>
            </tr>
            <tr>
              <td style={td}>Min headroom</td>
              <td style={td}>6&apos;6&quot;</td>
            </tr>
            <tr>
              <td style={td}>Treads</td>
              <td style={td}>All identical</td>
            </tr>
          </tbody>
        </GuideTable>

        <h2 style={sectionHeading}>Deck and exterior stairs</h2>
        <p style={paragraph}>
          There is no separate, looser code for deck stairs — they follow the
          same R311.7 rules for risers, treads, width and handrails. Outdoors,
          three more items catch people out:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
          <li style={listItem}>
            <strong>Guards:</strong> any open side more than 30 inches above
            grade needs a guard (see R312 above)
          </li>
          <li style={listItem}>
            <strong>Lighting:</strong> a light source at the top landing
          </li>
          <li style={listItem}>
            <strong>Bottom riser:</strong> measure total rise to the finished
            surface the stair lands on — patio, pad or grade — not to the
            ground before it is levelled
          </li>
        </ul>
        <p style={paragraph}>
          Many jurisdictions also reference the American Wood Council&apos;s
          DCA 6 prescriptive deck guide for stringer sizing and footing
          details — ask your building department which they enforce.
        </p>

        <h2 style={sectionHeading}>Most common inspection failures</h2>
        <GuideTable>
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
              <td style={td}>Flooring thickness not factored in at lower level</td>
            </tr>
            <tr>
              <td style={td}>Headroom too low</td>
              <td style={td}>Beam or duct not accounted for in stair layout</td>
            </tr>
            <tr>
              <td style={td}>Handrail not graspable</td>
              <td style={td}>Decorative wide-profile rail without a finger recess</td>
            </tr>
            <tr>
              <td style={td}>Baluster gaps too wide</td>
              <td style={td}>Spacing set by eye, or the bottom-rail triangle left open</td>
            </tr>
            <tr>
              <td style={td}>Landing too short</td>
              <td style={td}>Door swing reduces effective landing depth</td>
            </tr>
          </tbody>
        </GuideTable>

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
            height, stringer length, and an IRC code check. For the step-by-step
            math, see{" "}
            <Link href="/guides/how-to-calculate-stair-rise-and-run" style={link}>
              how to calculate stair rise and run
            </Link>
            .
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
