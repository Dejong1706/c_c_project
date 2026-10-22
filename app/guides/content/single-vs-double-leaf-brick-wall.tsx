import Link from "next/link";
import { Breadcrumb, GuideTable, IntroText, NoteBox, link, listItem, paragraph, sectionHeading, td, th } from "./shared";

const faqs = [
  {
    question: "What is a single leaf brick wall?",
    answer:
      "A single leaf wall (also called a half-brick wall) is one brick wide: bricks are laid lengthways in stretcher bond, so the wall is as thick as the brick is wide — 102.5 mm for UK standard bricks. With 10 mm joints it takes about 59 bricks per m² (usually rounded to 60).",
  },
  {
    question: "What is a double leaf brick wall?",
    answer:
      "A double leaf wall (also called a one-brick or full-brick wall) is one brick length thick — 215 mm for UK standard bricks. The two leaves are tied together by header bricks laid across the wall. In English bond, courses of headers alternate with courses of stretchers; in Flemish bond, headers and stretchers alternate within each course. It takes exactly twice the bricks of a single leaf wall: about 118.5 per m² (usually rounded to 120).",
  },
  {
    question: "How high can a half-brick garden wall be?",
    answer:
      "Welsh Government and ODPM guidance (based on BRE Good Building Guides 13 & 14) gives maximum heights of 525 mm, 450 mm, 400 mm and 375 mm for a free-standing half-brick wall in wind zones 1 to 4. A one-brick (215 mm) wall can go to 1,450, 1,300, 1,175 and 1,075 mm. Seek expert advice for any wall above these heights, walls with piers, walls carrying heavy gates and walls retaining soil.",
  },
  {
    question: "Do garden walls need Building Regulations approval?",
    answer:
      "No. Welsh Government guidance states that fences, walls and gates do not require building regulations approval, but they must still be structurally sound and maintained. Planning rules are separate: in England, permitted development allows a wall up to 1 m high next to a highway used by vehicles and up to 2 m elsewhere (GPDO 2015, Schedule 2, Part 2, Class A). Listed buildings and areas with an Article 4 direction are excluded.",
  },
  {
    question:
      "What is a cavity wall and how does it differ from a double leaf wall?",
    answer:
      "A cavity wall is two separate leaves with a gap between them, connected by wall ties. Approved Document A (2013) paragraph 2C8 requires leaves at least 90 mm thick and a cavity at least 50 mm wide, with ties at 900 mm horizontal and 450 mm vertical spacing. A solid double leaf wall has no cavity — the leaves are bonded with headers. A cavity wall is not two leaves of brick by default: the inner leaf is often blockwork, so it does not need double the bricks.",
  },
  {
    question:
      "How many more bricks does a double leaf wall need compared to a single leaf?",
    answer:
      "Exactly twice as many. For UK standard bricks (215 × 102.5 × 65 mm) with 10 mm joints, a single leaf needs 1 ÷ (0.225 × 0.075) = 59.3 bricks per m² and a double leaf needs 118.5. Header bricks do not add to the count — a header takes the place of two stretchers' worth of wall thickness, so the total volume of brick is the same in any bond.",
  },
  {
    question: "Which brick bond should I use for a single leaf wall?",
    answer:
      "Stretcher bond — all bricks laid lengthways with each course offset by half a brick. A half-brick wall has no room for headers across its thickness. For double leaf walls, English bond, Flemish bond and their garden wall variants are used; they differ in how often header bricks appear on the face.",
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
  headline: "Single vs Double Leaf Brick Wall: Key Differences Explained",
  description:
    "Single leaf (half-brick) vs double leaf (one-brick) walls — thickness, brick counts, bonds, safe garden wall heights by wind zone, and how cavity walls differ.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://buildcalczone.com/guides/single-vs-double-leaf-brick-wall" },
  datePublished: "2026-06-18",
  dateModified: "2026-10-22",
  author: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  publisher: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  image: { "@type": "ImageObject", url: "https://buildcalczone.com/opengraph-image", width: 1200, height: 630 },
};

export default function SingleVsDoubleLeafBrickWall() {
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
        <Breadcrumb current="Single vs Double Leaf Brick Wall: Key Differences Explained" />
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
            Masonry
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
            Single vs Double Leaf Brick Wall: Key Differences Explained
          </h1>
          <IntroText>
            A single leaf (half-brick) wall is half the thickness of a double
            leaf (one-brick) wall, and that difference decides how high a
            free-standing garden wall can safely go. This guide covers
            thickness, brick quantities, bonding patterns, published safe
            heights for garden walls in the UK, and how cavity walls differ
            from solid double leaf walls.
          </IntroText>
        </header>

        {/* Definitions */}
        <h2 style={sectionHeading}>Definitions</h2>
        <p style={paragraph}>
          The terms &quot;single leaf&quot; and &quot;double leaf&quot; refer to
          how many vertical layers (leaves) of brickwork make up the wall
          thickness.
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={listItem}>
            <strong>Single leaf (half-brick wall)</strong> — one leaf wide.
            Bricks are laid with their length running along the wall face
            (stretcher position). Wall thickness equals the brick width: 102.5
            mm for UK standard bricks.
          </li>
          <li style={listItem}>
            <strong>Double leaf (one-brick / full-brick wall)</strong> — two
            leaves wide. Wall thickness equals the brick length: 215 mm for UK
            standard bricks. The two leaves are tied together by header bricks
            laid across the full thickness.
          </li>
          <li style={listItem}>
            <strong>Cavity wall</strong> — two separate leaves with a gap
            between them, connected by wall ties. The inner leaf is often
            blockwork rather than brick. Covered separately below.
          </li>
        </ul>

        {/* Side-by-side comparison */}
        <h2 style={sectionHeading}>Side-by-Side Comparison</h2>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Property</th>
              <th style={th}>Single Leaf</th>
              <th style={th}>Double Leaf</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Wall thickness (UK standard brick)</td>
              <td style={td}>102.5 mm</td>
              <td style={td}>215 mm</td>
            </tr>
            <tr>
              <td style={td}>Bricks per m² (10 mm joints)</td>
              <td style={td}>59.3 (≈ 60)</td>
              <td style={td}>118.5 (≈ 120)</td>
            </tr>
            <tr>
              <td style={td}>Mortar joints (% of wall volume)</td>
              <td style={td}>~17%</td>
              <td style={td}>~21%</td>
            </tr>
            <tr>
              <td style={td}>Max. free-standing height, wind zone 1–4*</td>
              <td style={td}>525–375 mm</td>
              <td style={td}>1,450–1,075 mm</td>
            </tr>
            <tr>
              <td style={td}>Bond</td>
              <td style={td}>Stretcher bond</td>
              <td style={td}>English, Flemish, or garden wall variants</td>
            </tr>
          </tbody>
        </GuideTable>
        <p style={paragraph}>
          * Walls without piers. Source and full table in the{" "}
          <a href="#garden-wall-heights" style={link}>
            garden wall heights
          </a>{" "}
          section below.
        </p>

        {/* Single leaf detail */}
        <h2 style={sectionHeading}>Single Leaf Walls in Detail</h2>
        <p style={paragraph}>
          A single leaf wall uses half the bricks of a double leaf wall. All
          bricks are laid in <strong>stretcher bond</strong> — each course
          offset by half a brick — because a wall one brick wide has no room
          for headers across its thickness.
        </p>
        <p style={paragraph}>
          Its thinness is also its main limit. As a free-standing wall, a
          half-brick wall without piers should be kept to 375–525 mm high
          depending on wind exposure (see the table below). Typical uses
          within that range:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={listItem}>Low garden edging and planter walls</li>
          <li style={listItem}>
            One leaf of a cavity wall (the outer brick leaf of most new UK
            houses)
          </li>
          <li style={listItem}>Internal non-load-bearing partitions</li>
          <li style={listItem}>Infill panels within a structural frame</li>
        </ul>

        {/* Double leaf detail */}
        <h2 style={sectionHeading}>Double Leaf Walls in Detail</h2>
        <p style={paragraph}>
          A double leaf (one-brick) wall ties two leaves of brickwork together
          with header bricks — bricks laid across the wall so their end shows
          on the face. Twice the thickness allows a free-standing wall about 2.8–2.9
          times as high as a half-brick wall in the same wind zone (1,450 mm
          vs 525 mm in zone 1).
        </p>
        <p style={paragraph}>
          <strong>Bonding patterns for double leaf walls:</strong>
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Bond</th>
              <th style={th}>Pattern</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>English bond</td>
              <td style={td}>
                Alternating courses: one course of all headers, one course of
                all stretchers
              </td>
            </tr>
            <tr>
              <td style={td}>Flemish bond</td>
              <td style={td}>
                Headers and stretchers alternate within every course
              </td>
            </tr>
            <tr>
              <td style={td}>English garden wall bond</td>
              <td style={td}>
                One course of headers after every three (sometimes five)
                courses of stretchers
              </td>
            </tr>
            <tr>
              <td style={td}>Flemish garden wall bond</td>
              <td style={td}>
                One header to every three stretchers within each course
              </td>
            </tr>
          </tbody>
        </GuideTable>
        <p style={paragraph}>
          The bond does not change the brick count: one header fills the same
          wall volume as the two stretchers it replaces (one in each leaf), so
          every bond uses about 118.5 bricks per m² with UK standard bricks.
        </p>

        {/* Garden wall heights */}
        <h2 id="garden-wall-heights" style={sectionHeading}>
          Safe Heights for Free-Standing Garden Walls (UK)
        </h2>
        <p style={paragraph}>
          The table below is published by the Welsh Government and in the ODPM
          leaflet <em>Your Garden Walls: Better to be Safe than Sorry</em>,
          which states it is based on BRE Good Building Guides 13 &amp; 14.
          Heights depend on wall thickness and on the wind zone: the allowed
          height falls from zone 1 to zone 4 as wind exposure rises. The zone
          map is on the{" "}
          <a
            href="https://gov.wales/building-regulations-fences-gates-and-garden-walls"
            style={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            GOV.WALES garden walls page
          </a>
          .
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Wall</th>
              <th style={th}>Zone 1</th>
              <th style={th}>Zone 2</th>
              <th style={th}>Zone 3</th>
              <th style={th}>Zone 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Half brick (100 mm)</td>
              <td style={td}>525 mm</td>
              <td style={td}>450 mm</td>
              <td style={td}>400 mm</td>
              <td style={td}>375 mm</td>
            </tr>
            <tr>
              <td style={td}>One brick (215 mm)</td>
              <td style={td}>1,450 mm</td>
              <td style={td}>1,300 mm</td>
              <td style={td}>1,175 mm</td>
              <td style={td}>1,075 mm</td>
            </tr>
            <tr>
              <td style={td}>One and a half brick (325 mm)</td>
              <td style={td}>2,400 mm</td>
              <td style={td}>2,175 mm</td>
              <td style={td}>2,000 mm</td>
              <td style={td}>1,825 mm</td>
            </tr>
            <tr>
              <td style={td}>100 mm block</td>
              <td style={td}>450 mm</td>
              <td style={td}>400 mm</td>
              <td style={td}>350 mm</td>
              <td style={td}>325 mm</td>
            </tr>
            <tr>
              <td style={td}>200 mm block</td>
              <td style={td}>1,050 mm</td>
              <td style={td}>925 mm</td>
              <td style={td}>850 mm</td>
              <td style={td}>775 mm</td>
            </tr>
            <tr>
              <td style={td}>300 mm block</td>
              <td style={td}>2,000 mm</td>
              <td style={td}>1,825 mm</td>
              <td style={td}>1,650 mm</td>
              <td style={td}>1,525 mm</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          The guidance advises seeking expert advice for any wall above these
          heights, and for walls with piers, walls supporting heavy gates, or
          walls retaining soil — the table does not apply to them. It notes
          that taller walls may be acceptable in very sheltered locations or
          where piers are used, but gives no pier sizes or heights, so a pier
          design should come from an engineer. For an existing wall, seek
          advice if it leans more than 30 mm (half brick), 70 mm (one brick)
          or 100 mm (brick and a half).
        </NoteBox>
        <p style={paragraph}>
          <strong>Regulations:</strong> Welsh Government guidance states that
          fences, walls and gates do not need building regulations approval,
          but must be kept structurally sound. Planning permission is a
          separate question — in England, permitted development covers a wall
          up to 1 m high next to a highway used by vehicles and up to 2 m
          elsewhere (
          <a
            href="https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/2/crossheading/class-a-gates-fences-walls-etc"
            style={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            GPDO 2015, Schedule 2, Part 2, Class A
          </a>
          ), with exclusions such as listed buildings. A wall built astride a
          boundary (a party fence wall) may also need notice to the neighbour under the
          Party Wall etc. Act 1996.
        </p>

        {/* Cavity walls */}
        <h2 style={sectionHeading}>Cavity Walls — A Third Option</h2>
        <p style={paragraph}>
          A <strong>cavity wall</strong> is two separate leaves separated by a
          gap (the cavity) and connected by wall ties. For walls designed
          under the simple rules of Approved Document A (2013), paragraph 2C8
          requires each leaf to be at least 90 mm thick and the cavity at
          least 50 mm wide, with ties at 900 mm horizontally and 450 mm
          vertically. Table 5 of the same document gives tie lengths for
          cavities from 50 mm up to 300 mm; the actual width is set by the
          insulation the design needs.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Property</th>
              <th style={th}>Solid Double Leaf</th>
              <th style={th}>Cavity Wall</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>How the leaves connect</td>
              <td style={td}>Header bricks and mortar, no gap</td>
              <td style={td}>Metal wall ties across a cavity ≥ 50 mm</td>
            </tr>
            <tr>
              <td style={td}>Wall thickness</td>
              <td style={td}>215 mm (UK standard brick)</td>
              <td style={td}>Leaf + cavity + leaf (each leaf ≥ 90 mm)</td>
            </tr>
            <tr>
              <td style={td}>Inner leaf material</td>
              <td style={td}>Brick</td>
              <td style={td}>Brick or blockwork</td>
            </tr>
            <tr>
              <td style={td}>Bricks per m² (brick outer leaf)</td>
              <td style={td}>118.5</td>
              <td style={td}>
                59.3 for the outer leaf; inner leaf counted separately
              </td>
            </tr>
          </tbody>
        </GuideTable>

        {/* Brick and mortar quantities */}
        <h2 style={sectionHeading}>Brick and Mortar Quantities</h2>
        <p style={paragraph}>
          For UK standard bricks (215 × 102.5 × 65 mm) with a 10 mm mortar
          joint, each brick plus its joints covers 0.225 × 0.075 = 0.016875
          m² of wall face:
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Wall Type</th>
              <th style={th}>Bricks/m²</th>
              <th style={th}>Mortar in joints/m²</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Single leaf (half-brick)</td>
              <td style={td}>59.3</td>
              <td style={td}>~0.018 m³</td>
            </tr>
            <tr>
              <td style={td}>Double leaf (one-brick)</td>
              <td style={td}>118.5</td>
              <td style={td}>~0.045 m³</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          Mortar figures are the volume of the joints only (wall volume minus
          brick volume), for solid bricks. The double leaf figure includes the
          10 mm vertical joint between the two leaves. Frogged bricks, site
          waste and mixing losses add to this, so use the{" "}
          <Link href="/mortar-calculator" style={link}>
            Mortar Calculator
          </Link>{" "}
          for an order quantity and the{" "}
          <Link href="/guides/brick-mortar-mix-ratio" style={link}>
            Brick Mortar Mix Ratio Guide
          </Link>{" "}
          for mixes.
        </NoteBox>

        {/* Which to choose */}
        <h2 style={sectionHeading}>Which Wall Type Should You Use?</h2>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Project</th>
              <th style={th}>Wall Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>
                Free-standing garden wall up to 375–525 mm (by wind zone)
              </td>
              <td style={td}>Single leaf</td>
            </tr>
            <tr>
              <td style={td}>
                Free-standing garden wall up to 1,075–1,450 mm (by wind zone)
              </td>
              <td style={td}>Double leaf</td>
            </tr>
            <tr>
              <td style={td}>
                Taller garden wall, wall with piers, or wall carrying heavy
                gates
              </td>
              <td style={td}>Get expert / engineer advice</td>
            </tr>
            <tr>
              <td style={td}>Retaining wall (holding back soil)</td>
              <td style={td}>Get expert / engineer design</td>
            </tr>
            <tr>
              <td style={td}>Internal non-load-bearing partition</td>
              <td style={td}>Single leaf</td>
            </tr>
            <tr>
              <td style={td}>New external house wall</td>
              <td style={td}>
                Cavity wall, designed to Approved Document A
              </td>
            </tr>
          </tbody>
        </GuideTable>

        {/* Related links */}
        <h2 style={sectionHeading}>Related Guides & Tools</h2>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={listItem}>
            <Link href="/brick-calculator" style={link}>
              Brick Calculator
            </Link>{" "}
            — count bricks for single or double leaf walls, with waste
          </li>
          <li style={listItem}>
            <Link href="/mortar-calculator" style={link}>
              Mortar Calculator
            </Link>{" "}
            — estimate mortar for your brickwork
          </li>
          <li style={listItem}>
            <Link
              href="/guides/how-to-calculate-bricks-for-a-wall"
              style={link}
            >
              How to Calculate Bricks for a Wall
            </Link>{" "}
            — step-by-step calculation guide with worked examples
          </li>
          <li style={listItem}>
            <Link href="/guides/how-many-bricks-per-square-metre" style={link}>
              How Many Bricks Per Square Metre?
            </Link>{" "}
            — detailed bricks/m² reference
          </li>
          <li style={listItem}>
            <Link href="/guides/brick-mortar-mix-ratio" style={link}>
              Brick Mortar Mix Ratio Guide
            </Link>{" "}
            — cement, lime, and sand ratios for brickwork
          </li>
          <li style={listItem}>
            <Link href="/guides/standard-brick-sizes-by-country" style={link}>
              Standard Brick Sizes by Country
            </Link>{" "}
            — work sizes and coordinating sizes worldwide
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
