import Link from "next/link";

const faqs = [
  {
    question: "What is a single leaf brick wall?",
    answer:
      "A single leaf wall (also called a half-brick wall) is one brick wide — bricks are laid lengthways in stretcher bond, giving a wall 102.5 mm thick (UK standard). It is the most common wall type for garden walls, boundary walls, and internal non-load-bearing partitions. Single leaf walls are not suitable for load-bearing external applications without additional structural support.",
  },
  {
    question: "What is a double leaf brick wall?",
    answer:
      "A double leaf wall (also called a full-brick or one-brick wall) is one full brick length wide — 215 mm thick for UK standard bricks. Every course has bricks running in both directions, tied together with header courses or wall ties. Double leaf walls are used for load-bearing external walls, retaining walls, and anywhere structural strength or thermal mass is required.",
  },
  {
    question: "Can a single leaf wall be load-bearing?",
    answer:
      "A single leaf wall has limited load-bearing capacity and should not be used as a primary structural wall without engineering assessment. For garden walls taller than 450 mm, Building Regulations in England and Wales require adequate thickness or piers for stability. Any load-bearing application should be confirmed by a structural engineer.",
  },
  {
    question:
      "What is a cavity wall and how does it differ from a double leaf wall?",
    answer:
      "A cavity wall consists of two separate single-leaf walls (inner and outer leaf) separated by a gap (cavity) of typically 50–100 mm, tied together with wall ties. The cavity provides thermal insulation and prevents moisture transfer. A solid double leaf (one-brick) wall has no cavity — both leaves are bonded directly together with mortar. Modern external walls in the UK are almost always cavity construction rather than solid double leaf.",
  },
  {
    question:
      "How many more bricks does a double leaf wall need compared to a single leaf?",
    answer:
      "Approximately twice as many. A single leaf wall with UK standard bricks requires about 60 bricks per m². A double leaf wall requires about 120 bricks per m². In practice, the double leaf figure is marginally higher due to the additional header bricks used to bond the two leaves together in traditional bonding patterns.",
  },
  {
    question: "Which brick bond should I use for a single leaf wall?",
    answer:
      "Stretcher bond is the only practical option for a single leaf wall — all bricks are laid lengthways with each course offset by half a brick. For double leaf walls, common bonds include English bond (alternating courses of stretchers and headers), Flemish bond (alternating stretchers and headers within each course), and English garden wall bond. Each gives a different appearance and slightly different structural performance.",
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
    "A clear comparison of single leaf (half-brick) and double leaf (full-brick) walls — thickness, structural capacity, brick counts, bonding patterns, and when to use each.",
  url: "https://buildcalczone.com/guides/single-vs-double-leaf-brick-wall",
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
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            Choosing the wrong wall type is a costly mistake — too thin and the
            wall may fail structurally or thermally; too thick and you&apos;ve
            wasted materials and space. This guide covers the practical
            differences between single and double leaf walls, including
            thickness, structural limits, brick quantities, bonding patterns,
            and when each is appropriate.
          </p>
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
            standard bricks. The two leaves are bonded together with mortar in a
            structural pattern.
          </li>
          <li style={listItem}>
            <strong>Cavity wall</strong> — two separate single leaves with a
            50–100 mm gap between them, tied with metal wall ties. This is a
            distinct construction method covered separately below.
          </li>
        </ul>

        {/* Side-by-side comparison */}
        <h2 style={sectionHeading}>Side-by-Side Comparison</h2>
        <table style={table}>
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
              <td style={td}>Bricks per m²</td>
              <td style={td}>~60</td>
              <td style={td}>~120</td>
            </tr>
            <tr>
              <td style={td}>Mortar volume (% of wall)</td>
              <td style={td}>~17%</td>
              <td style={td}>~20%</td>
            </tr>
            <tr>
              <td style={td}>Load-bearing capacity</td>
              <td style={td}>Limited</td>
              <td style={td}>High</td>
            </tr>
            <tr>
              <td style={td}>Thermal mass</td>
              <td style={td}>Low</td>
              <td style={td}>High</td>
            </tr>
            <tr>
              <td style={td}>Weather resistance</td>
              <td style={td}>Moderate</td>
              <td style={td}>Good</td>
            </tr>
            <tr>
              <td style={td}>Typical bond</td>
              <td style={td}>Stretcher bond only</td>
              <td style={td}>English, Flemish, or English garden wall</td>
            </tr>
            <tr>
              <td style={td}>Common applications</td>
              <td style={td}>Garden walls, partitions</td>
              <td style={td}>External structural walls, retaining walls</td>
            </tr>
            <tr>
              <td style={td}>Relative material cost</td>
              <td style={td}>Lower</td>
              <td style={td}>~2× higher</td>
            </tr>
          </tbody>
        </table>

        {/* Single leaf detail */}
        <h2 style={sectionHeading}>Single Leaf Walls in Detail</h2>
        <p style={paragraph}>
          A single leaf wall is quick to build and uses fewer materials, which
          makes it the default choice for non-structural applications. All
          bricks are laid in <strong>stretcher bond</strong> — the only bond
          that works for a wall one brick wide — with each course offset by half
          a brick to distribute load and tie the coursing together.
        </p>
        <p style={paragraph}>
          <strong>Height limitations:</strong> For free-standing garden walls in
          the UK, Approved Document A (Structure) and standard masonry practice
          set practical height limits based on wall length and thickness. A
          102.5 mm single leaf wall without piers should not exceed
          approximately 450 mm in height as a free-standing structure. With
          piers (at least 327 mm × 327 mm, spaced no more than 3 m apart), a
          single leaf wall can reach up to 1.8 m in appropriate conditions.
          Always consult a structural engineer for walls above 1 m.
        </p>
        <div style={note}>
          Height and stability limits for free-standing walls depend on
          exposure, foundation conditions, and local regulations. The figures
          above are indicative only — a structural engineer should be consulted
          for any wall above 1 m or in exposed locations.
        </div>
        <p style={paragraph}>
          <strong>Where single leaf walls are appropriate:</strong>
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={listItem}>
            Low garden boundary walls (under 450 mm without piers)
          </li>
          <li style={listItem}>Internal non-load-bearing partitions</li>
          <li style={listItem}>Raised planter beds and low edging walls</li>
          <li style={listItem}>Infill panels within a structural frame</li>
        </ul>

        {/* Double leaf detail */}
        <h2 style={sectionHeading}>Double Leaf Walls in Detail</h2>
        <p style={paragraph}>
          A double leaf (one-brick) wall bonds two leaves of brickwork together
          using header bricks that span the full wall thickness. This creates a
          monolithic structure with significantly greater compressive strength
          and lateral stability than a single leaf wall.
        </p>
        <p style={paragraph}>
          <strong>Bonding patterns for double leaf walls:</strong>
        </p>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Bond</th>
              <th style={th}>Description</th>
              <th style={th}>Appearance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>English bond</td>
              <td style={td}>
                Alternating courses of all stretchers and all headers
              </td>
              <td style={td}>
                Strong, traditional, distinct horizontal banding
              </td>
            </tr>
            <tr>
              <td style={td}>Flemish bond</td>
              <td style={td}>
                Each course alternates stretcher–header–stretcher–header
              </td>
              <td style={td}>
                Decorative, used widely in Georgian and Victorian work
              </td>
            </tr>
            <tr>
              <td style={td}>English garden wall bond</td>
              <td style={td}>
                Three (or five) courses of stretchers between each header course
              </td>
              <td style={td}>
                Faster to lay than full English bond, less formal
              </td>
            </tr>
            <tr>
              <td style={td}>Flemish garden wall bond</td>
              <td style={td}>
                Each course has one header for every three stretchers
              </td>
              <td style={td}>
                Decorative variation of Flemish, fewer headers required
              </td>
            </tr>
          </tbody>
        </table>
        <div style={note}>
          English bond is generally considered the strongest of these patterns
          due to its higher header frequency and the way loads are transferred
          across the wall thickness.
        </div>
        <p style={paragraph}>
          <strong>Where double leaf walls are appropriate:</strong>
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={listItem}>
            Load-bearing external walls (pre-cavity construction or solid wall
            retrofit)
          </li>
          <li style={listItem}>Retaining walls holding back soil or water</li>
          <li style={listItem}>
            Garden walls above 1 m requiring structural mass
          </li>
          <li style={listItem}>
            Buildings where thermal mass is deliberately specified (e.g. passive
            solar design)
          </li>
          <li style={listItem}>
            Heritage and conservation work where solid wall construction is
            required to match existing fabric
          </li>
        </ul>

        {/* Cavity walls */}
        <h2 style={sectionHeading}>Cavity Walls — A Third Option</h2>
        <p style={paragraph}>
          Most modern UK external walls are neither single leaf nor solid double
          leaf — they are <strong>cavity walls</strong>. A cavity wall consists
          of two single leaf skins separated by a gap (the cavity), typically
          50–100 mm wide, tied together with stainless steel wall ties at
          regular intervals.
        </p>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Property</th>
              <th style={th}>Solid Double Leaf</th>
              <th style={th}>Cavity Wall</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Overall wall thickness</td>
              <td style={td}>215 mm</td>
              <td style={td}>270–330 mm (with insulation)</td>
            </tr>
            <tr>
              <td style={td}>Thermal performance</td>
              <td style={td}>Poor without added insulation</td>
              <td style={td}>Good — cavity filled with insulation</td>
            </tr>
            <tr>
              <td style={td}>Moisture resistance</td>
              <td style={td}>Moderate (solid path for water)</td>
              <td style={td}>High — cavity breaks moisture path</td>
            </tr>
            <tr>
              <td style={td}>Brick quantity (outer leaf only)</td>
              <td style={td}>N/A</td>
              <td style={td}>~60 bricks/m² (same as single leaf)</td>
            </tr>
            <tr>
              <td style={td}>Common in UK new build</td>
              <td style={td}>No (pre-1920s mainly)</td>
              <td style={td}>Yes (standard since ~1930s)</td>
            </tr>
          </tbody>
        </table>
        <div style={note}>
          For new external walls in the UK, cavity construction is the standard.
          Solid double leaf walls are primarily encountered in renovation,
          heritage work, or specific structural applications.
        </div>

        {/* Brick and mortar quantities */}
        <h2 style={sectionHeading}>Brick and Mortar Quantities</h2>
        <p style={paragraph}>
          For UK standard bricks (215 × 102.5 × 65 mm) with a 10 mm mortar
          joint:
        </p>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Wall Type</th>
              <th style={th}>Bricks/m²</th>
              <th style={th}>Mortar/m² (approx)</th>
              <th style={th}>Cement bags/m² (1:4 mix)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Single leaf (half-brick)</td>
              <td style={td}>~60</td>
              <td style={td}>~0.018 m³</td>
              <td style={td}>~0.7 bags (25 kg)</td>
            </tr>
            <tr>
              <td style={td}>Double leaf (full-brick)</td>
              <td style={td}>~120</td>
              <td style={td}>~0.043 m³</td>
              <td style={td}>~1.6 bags (25 kg)</td>
            </tr>
          </tbody>
        </table>
        <div style={note}>
          Mortar quantities assume a standard 1:4 cement-to-sand mix. For a full
          mortar calculation, see our{" "}
          <Link href="/guides/brick-mortar-mix-ratio" style={link}>
            Brick Mortar Mix Ratio Guide
          </Link>
          .
        </div>

        {/* Which to choose */}
        <h2 style={sectionHeading}>Which Wall Type Should You Use?</h2>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Project</th>
              <th style={th}>Recommended Wall Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Low garden boundary wall (under 450 mm)</td>
              <td style={td}>Single leaf</td>
            </tr>
            <tr>
              <td style={td}>Garden wall 450 mm – 1.8 m with piers</td>
              <td style={td}>Single leaf with piers, or double leaf</td>
            </tr>
            <tr>
              <td style={td}>Garden wall above 1.8 m</td>
              <td style={td}>Double leaf — seek structural engineer advice</td>
            </tr>
            <tr>
              <td style={td}>Retaining wall (holding back soil)</td>
              <td style={td}>
                Double leaf minimum — structural design required
              </td>
            </tr>
            <tr>
              <td style={td}>Internal partition (non-load-bearing)</td>
              <td style={td}>Single leaf</td>
            </tr>
            <tr>
              <td style={td}>New external house wall</td>
              <td style={td}>Cavity wall (not solid double leaf)</td>
            </tr>
            <tr>
              <td style={td}>Heritage / conservation external wall</td>
              <td style={td}>
                Double leaf solid — match existing construction
              </td>
            </tr>
          </tbody>
        </table>

        {/* Related links */}
        <h2 style={sectionHeading}>Related Guides & Tools</h2>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={listItem}>
            <Link href="/brick-calculator" style={link}>
              Brick Calculator
            </Link>{" "}
            — calculate bricks and mortar for your wall dimensions
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
            — cement, sand, and water ratios for brickwork
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
