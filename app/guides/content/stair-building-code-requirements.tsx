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
      'The 2024 IRC (R318.7.5.1) sets a maximum riser height of 7¾ inches (7.75"). There is no minimum riser height in the IRC. Within a flight, the tallest riser may not exceed the shortest by more than ⅜ inch.',
  },
  {
    question: "What is the minimum tread depth per building code?",
    answer:
      "IRC R318.7.5.2 requires a minimum tread depth of 10 inches, measured horizontally between the vertical planes of the foremost projection of adjacent treads. As with risers, the deepest and shallowest tread in a flight may differ by no more than ⅜ inch. Stairs under the IBC need 11 inches (IBC 1011.5.2).",
  },
  {
    question: "How wide do stairs need to be?",
    answer:
      "IRC R318.7.1 requires a minimum clear width of 36 inches above the permitted handrail height. At and below the handrail, the clear width can drop to 31½ inches with a handrail on one side, or 27 inches with handrails on both sides.",
  },
  {
    question: "How many steps before a handrail is required?",
    answer:
      "IRC R318.7.8 requires a handrail on at least one side of each flight with 4 or more risers. Under R320, handrail height must be 34–38 inches, measured vertically from the sloped plane adjoining the tread nosings, and it must be continuous for the full length of the flight.",
  },
  {
    question: "What is the minimum headroom for stairs?",
    answer:
      "IRC R318.7.2 requires a minimum headroom of 6 feet 8 inches (80 inches), measured vertically from the sloped line adjoining the tread nosings, or from the landing surface. Spiral stairs are allowed 6 feet 6 inches.",
  },
  {
    question: "Are open risers allowed on residential stairs?",
    answer:
      "Yes. The IRC allows open risers as long as the gap between treads will not let a 4-inch sphere pass through. The limit only applies to openings more than 30 inches above the floor or grade below, so the gaps on the lowest steps are not restricted. Spiral stairs are exempt entirely.",
  },
  {
    question: "Do deck stairs have to meet the same code?",
    answer:
      "Yes. Stairs serving a deck are regulated by the same IRC R318.7 rules as interior stairs — 7¾-inch maximum risers, 10-inch minimum treads, 36-inch width, handrails at 4 or more risers — plus guards on open sides more than 30 inches above grade (R321) and a light at the top landing (R325.7).",
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
  headline: "Stair Building Code Requirements (IRC R318.7)",
  description:
    "2024 IRC residential stair code explained — riser height, tread depth, width, headroom, handrails, guards, landings, winders, spiral and deck stairs, with a worked example.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://buildcalczone.com/guides/stair-building-code-requirements",
  },
  datePublished: "2026-07-08",
  dateModified: "2026-10-16",
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
        <Breadcrumb current="Stair Building Code Requirements (IRC R318.7)" />
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
            Stair Building Code Requirements (IRC R318.7)
          </h1>
          <IntroText>
            The IRC regulates riser height, tread depth, width, headroom,
            handrails, guards, landings and lighting for residential stairs.
            This is a reference for those rules, with a worked example and the
            special cases: winders, spiral stairs and deck stairs.
          </IntroText>
        </header>

        <NoteBox>
          This guide follows the 2024 IRC (International Residential Code), the
          current edition — the 2027 edition has not been released yet. The
          2024 edition renumbered the stair rules: stairways moved from R311.7
          to R318.7, handrail details to R320, guards to R321 and stair
          lighting to R325.6–R325.7. Each state or city adopts its own edition
          and may amend it, so confirm the code in force with your local
          building department before cutting stringers. Stairs in buildings
          outside the IRC follow 2024 IBC Section 1011.
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
              <td style={td}>36&quot; on a straight run</td>
              <td style={td}>Stair width or 48&quot;, whichever is less</td>
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
          Our{" "}
          <Link href="/stair-calculator" style={link}>
            stair calculator
          </Link>{" "}
          does this, plus stringer length, for any height.
        </p>

        <h2 style={sectionHeading}>Riser height — IRC R318.7.5.1</h2>
        <p style={paragraph}>
          Maximum riser height is 7¾ inches, measured vertically between the
          leading edges of adjacent treads. The IRC sets no minimum. Risers
          must also be uniform within a flight:
        </p>
        <div style={formula}>
          Tallest riser − shortest riser in a flight ≤ ⅜ inch
        </div>
        <p style={paragraph}>
          You cannot make the bottom or top step a different height to absorb
          rounding. Divide the total rise evenly across all risers so every
          step is identical. A stair with 13 risers at 7¼ inches and one at 7¾
          inches fails, because the difference is ½ inch.
        </p>
        <p style={paragraph}>
          <strong>Open risers</strong>{" "}(no riser board) are allowed, as long as
          the gap between treads will not let a 4-inch sphere pass through. The
          limit applies only to openings more than 30 inches above the floor or
          grade below — gaps on the lowest few steps are not restricted — and
          spiral stairs are exempt.
        </p>
        <NoteBox>
          Lay out the stair from the finished floor surfaces on both levels.
          The IRC measures stair dimensions exclusive of carpets, rugs or
          runners (R318.7.5), but hard flooring counts. If the total rise is
          off by ½ inch and that error lands on one riser, it differs from the
          others by ½ inch — more than the ⅜-inch limit.
        </NoteBox>

        <h2 style={sectionHeading}>Tread depth — IRC R318.7.5.2</h2>
        <p style={paragraph}>
          Minimum tread depth is 10 inches, measured horizontally between the
          vertical planes of the foremost projection of adjacent treads, at a
          right angle to the tread&apos;s leading edge. The same ⅜-inch
          uniformity rule applies to treads.
        </p>

        <h2 style={sectionHeading}>Winder treads — IRC R318.7.5.2.1</h2>
        <p style={paragraph}>
          Winders are the wedge-shaped treads used to turn a stair without a
          landing. Because they are narrow at one end, the IRC measures them
          along a <strong>walkline</strong> located 12 inches from the inside
          of the turn (R318.7.4):
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
          <li style={listItem}>At least 10 inches deep at the walkline</li>
          <li style={listItem}>
            At least 6 inches deep at any point within the clear width
          </li>
          <li style={listItem}>
            Winder depths at the walkline within ⅜ inch of each other; they do
            not have to be within ⅜ inch of the rectangular treads in the same
            flight
          </li>
        </ul>

        <h2 style={sectionHeading}>Nosing — IRC R318.7.5.3</h2>
        <p style={paragraph}>
          Stairways need a nosing projection of ¾ inch to 1¼ inches. The
          largest and smallest projection may differ by no more than ⅜ inch
          within a flight, including the landing at the top of the flight.
          Treads, landings and floors need a nosing radius of no more than
          9⁄16 inch or a bevel of no more than ½ inch. A nosing projection is
          not required when treads are at least 11 inches deep, and with open
          risers the projection may exceed 1¼ inches.
        </p>

        <h2 style={sectionHeading}>Stair width — IRC R318.7.1</h2>
        <p style={paragraph}>
          Minimum clear width is 36 inches at all points above the permitted
          handrail height and below the required headroom height. Handrails may
          project up to 4½ inches (R320.3), so at and below handrail height the
          minimum is 31½ inches with a handrail on one side, or 27 inches with
          handrails on both sides.
        </p>

        <h2 style={sectionHeading}>Headroom — IRC R318.7.2</h2>
        <p style={paragraph}>
          Minimum headroom is 6 feet 8 inches (80 inches), measured vertically
          from the sloped line adjoining the tread nosings, or from the landing
          surface. Where the side of a flight passes under the edge of a floor
          opening, the floor opening may project into the required headroom by
          up to 4¾ inches.
        </p>

        <h2 style={sectionHeading}>Handrails — IRC R318.7.8 and R320</h2>
        <p style={paragraph}>
          A handrail is required on at least one side of each flight with 4 or
          more risers. Key requirements:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
          <li style={listItem}>
            <strong>Height:</strong> 34–38 inches, measured vertically from the
            sloped plane adjoining the tread nosings (R320.2)
          </li>
          <li style={listItem}>
            <strong>Continuity:</strong> runs the full flight, from directly
            above the top landing nosing to directly above the lowest nosing.
            Ends return continuous to themselves or toward a wall, guard or
            walking surface, with no more than a ¼-inch gap at a wall. A newel
            post may interrupt the rail at a winder turn, at a landing or over
            the lowest tread (R320.5)
          </li>
          <li style={listItem}>
            <strong>Graspable profile:</strong> round rails 1¼–2 inches in
            diameter; other shapes need a 4–6¼ inch perimeter and a cross-section
            no wider than 2¼ inches. Larger profiles need a finger recess on
            both sides (Type II, R320.6)
          </li>
          <li style={listItem}>
            <strong>Wall clearance:</strong> at least 1½ inches between the rail
            and the wall (R320.4)
          </li>
          <li style={listItem}>
            <strong>Strength:</strong> must resist a 200 lb concentrated load
            applied in any direction at any point along the top (Table R301.5)
          </li>
        </ul>

        <h2 style={sectionHeading}>Guards on open sides — IRC R321</h2>
        <p style={paragraph}>
          A handrail is for gripping; a <strong>guard</strong> stops people
          falling off the side. Guards are required on open-sided stairs and
          landings more than 30 inches above the floor or grade below, measured
          at any point within 36 inches horizontally of the open edge.
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

        <h2 style={sectionHeading}>Landings — IRC R318.7.6</h2>
        <p style={paragraph}>
          A landing or floor is required at the top and bottom of each flight.
          Key rules:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
          <li style={listItem}>At least as wide as the flight it serves</li>
          <li style={listItem}>
            On a straight run, at least 36 inches deep in the direction of
            travel
          </li>
          <li style={listItem}>
            Landings that are not square or rectangular need a depth at the
            walkline and a total area at least equal to a quarter circle with a
            radius equal to the required landing width
          </li>
          <li style={listItem}>
            No flight may rise more than 12&apos;7&quot; (151 inches) between
            floors or landings (R318.7.3)
          </li>
          <li style={listItem}>
            On an interior stair, the top landing may be on the other side of a
            door at the top, as long as the door does not swing over the stairs
          </li>
        </ul>

        <h2 style={sectionHeading}>Lighting — IRC R325.6 and R325.7</h2>
        <p style={paragraph}>
          <strong>Interior stairs (R325.6):</strong> a light must be able to
          illuminate the treads and landings to at least 1 foot-candle,
          measured at the center of treads and landings. If the stair has 6 or
          more risers, there must be a wall switch at each floor level — unless
          remote, central or automatic control of the lighting is provided.
        </p>
        <p style={paragraph}>
          <strong>Exterior stairs (R325.7):</strong> a light is required at the
          top landing — and at the bottom landing for outdoor stairs down to a
          basement.
        </p>

        <h2 style={sectionHeading}>Spiral stairs — IRC R318.7.11.1</h2>
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
              <td style={td}>6¾&quot; at the walkline</td>
            </tr>
            <tr>
              <td style={td}>Max walkline radius</td>
              <td style={td}>24½&quot; from the center column</td>
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
          There is no separate, looser code for deck stairs — stairways serving
          a building, porch or deck follow the same R318.7 rules for risers,
          treads, width and handrails. Outdoors, three more items apply:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
          <li style={listItem}>
            <strong>Guards:</strong> any open side more than 30 inches above
            grade needs a guard (see R321 above)
          </li>
          <li style={listItem}>
            <strong>Lighting:</strong> a light source at the top landing
            (R325.7)
          </li>
          <li style={listItem}>
            <strong>Bottom riser:</strong> risers are measured to the landing
            or floor the stair lands on, so measure total rise to the finished
            surface — patio, pad or grade — not to the ground before it is
            levelled
          </li>
        </ul>
        <p style={paragraph}>
          The IRC&apos;s deck construction rules are in Section R507. The
          American Wood Council&apos;s DCA 6 prescriptive deck guide is based
          on the 2015 IRC — ask your building department whether it is
          accepted where you build.
        </p>

        <h2 style={sectionHeading}>Pre-inspection checklist</h2>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Check</th>
              <th style={th}>2024 IRC requirement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Riser heights</td>
              <td style={td}>
                ≤ 7¾&quot;, tallest − shortest ≤ ⅜&quot; in a flight (R318.7.5.1)
              </td>
            </tr>
            <tr>
              <td style={td}>Tread depths</td>
              <td style={td}>
                ≥ 10&quot;, deepest − shallowest ≤ ⅜&quot; in a flight (R318.7.5.2)
              </td>
            </tr>
            <tr>
              <td style={td}>Headroom</td>
              <td style={td}>≥ 6&apos;8&quot; along the full stair (R318.7.2)</td>
            </tr>
            <tr>
              <td style={td}>Handrail</td>
              <td style={td}>
                34–38&quot; high, continuous, Type I or Type II grip (R320)
              </td>
            </tr>
            <tr>
              <td style={td}>Guard openings</td>
              <td style={td}>
                4⅜&quot; sphere on stairs, 4&quot; on landings, 6&quot; at the
                bottom-rail triangle (R321.1.3)
              </td>
            </tr>
            <tr>
              <td style={td}>Landings</td>
              <td style={td}>
                Flight width wide, 36&quot; deep on a straight run (R318.7.6)
              </td>
            </tr>
            <tr>
              <td style={td}>Lighting</td>
              <td style={td}>
                Interior light and switching (R325.6); exterior top-landing
                light (R325.7)
              </td>
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
