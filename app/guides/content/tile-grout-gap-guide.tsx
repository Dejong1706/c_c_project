import { Breadcrumb, GuideTable, IntroText, link, paragraph, sectionHeading, td, th } from "./shared";
const faqs = [
  {
    question: "What is the standard grout gap for floor tile?",
    answer:
      "Most floor tile is installed with a 3mm (1/8 inch) grout joint, which works well for typical 30-60cm tiles. Smaller mosaic tiles often use a narrower 1.5-2mm joint.",
  },
  {
    question: "Should large format tiles have wider or narrower grout lines?",
    answer:
      "Large format tiles (60cm and up) generally need wider grout lines, often 3-6mm, to accommodate manufacturing size variation (lippage) between tiles and allow for slight movement.",
  },
  {
    question: "Does grout gap size affect how many tiles I need?",
    answer:
      "Yes, slightly. Wider grout lines mean each tile effectively takes up a bit more space, which can marginally increase the number of tiles needed to cover a given area, especially on large jobs.",
  },
  {
    question: "What grout gap should I use for outdoor or wet areas?",
    answer:
      "Outdoor and wet areas, such as patios or pool surrounds, often use wider joints (6mm or more) since they allow more flexibility to absorb thermal movement and make sloped drainage easier to maintain.",
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
  headline: "Tile Grout Gap Guide: How Wide Should Your Grout Lines Be?",
  description:
    "Recommended grout gap widths for floor, wall and large-format tile. Learn how grout joint size affects appearance, durability and tile count.",
  url: "https://buildcalczone.com/guides/tile-grout-gap-guide",
};

export default function TileGroutGapGuide() {
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
        <Breadcrumb current="Tile Grout Gap Guide: How Wide Should Your Grout Lines Be?" />
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
            Tile
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
            Tile Grout Gap Guide: How Wide Should Your Grout Lines Be?
          </h1>
          <IntroText>
            The grout gap is one of those details that&apos;s easy to overlook until
            the tiles are already down — but it affects how the finished floor
            looks, how easy it is to keep clean, and even how many tiles you&apos;ll
            end up needing. Here&apos;s what&apos;s typical, and how to choose the right
            gap for your project.
          </IntroText>
        </header>

        <h2 style={sectionHeading}>Why grout gaps exist at all</h2>
        <p style={paragraph}>
          Grout lines aren&apos;t just a design choice — they serve a structural
          purpose. Tiles expand and contract slightly with temperature and
          humidity changes, and the grout joint gives them a small amount of
          room to move without cracking or popping loose. Grout lines also
          absorb minor size variations between tiles, which is especially
          important for handmade or large-format tile where no two pieces are
          perfectly identical.
        </p>

        <h2 style={sectionHeading}>Recommended grout gap sizes</h2>
        <p style={paragraph}>
          There&apos;s no single &ldquo;correct&rdquo; gap size — it depends on the tile type,
          size, and where it&apos;s being installed. That said, here are the ranges
          most commonly used:
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Tile type</th>
              <th style={th}>Typical grout gap</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Mosaic / small wall tile</td>
              <td style={td}>1.5–2mm</td>
            </tr>
            <tr>
              <td style={td}>Standard floor/wall tile (30–45cm)</td>
              <td style={td}>3mm</td>
            </tr>
            <tr>
              <td style={td}>Large format tile (60cm+)</td>
              <td style={td}>3–6mm</td>
            </tr>
            <tr>
              <td style={td}>Outdoor / wet areas</td>
              <td style={td}>6mm+</td>
            </tr>
          </tbody>
        </GuideTable>
        <p style={paragraph}>
          These are general guidelines rather than fixed rules — manufacturer
          recommendations and local building codes can vary, so it&apos;s worth
          checking the specifications for your specific tile product before
          finalizing your layout.
        </p>

        <h2 style={sectionHeading}>Why large format tile needs wider joints</h2>
        <p style={paragraph}>
          Large format tiles are more prone to slight variations in flatness and
          edge straightness during manufacturing, a property sometimes called
          &ldquo;lippage.&rdquo; A narrow grout line on a large tile makes any unevenness
          between adjacent tiles much more visible, while a slightly wider joint
          helps disguise small inconsistencies and gives installers more room to
          adjust each tile during setting.
        </p>

        <h2 style={sectionHeading}>How grout gap affects tile count</h2>
        <p style={paragraph}>
          Grout lines take up physical space, so a wider joint means each tile
          effectively &ldquo;uses up&rdquo; a bit more of the wall or floor area. For most
          residential rooms with standard tile sizes, this difference is small
          enough to ignore. But on larger jobs, or when working with bigger
          tiles and wider joints, it&apos;s worth accounting for — increasing your
          tile count estimate slightly, or simply relying on the waste
          percentage built into your calculation to cover the difference.
        </p>

        <h2 style={sectionHeading}>Color and maintenance considerations</h2>
        <p style={paragraph}>
          Beyond width, grout color and gap size together affect how visible the
          grid pattern is. Narrow joints with a grout color close to the tile
          create a more seamless look, while wider joints or contrasting grout
          colors emphasize each tile individually. From a maintenance
          standpoint, narrower joints generally mean less grout surface area to
          clean and reseal over time, though they offer less tolerance for tile
          size variation.
        </p>

        <h2 style={sectionHeading}>Putting it together</h2>
        <p style={paragraph}>
          For most standard floor and wall tile projects, a 3mm grout joint is a
          safe, widely-used default. Step up to 6mm or more for large-format
          tile or outdoor applications, and down to 1.5-2mm for small mosaic
          work. Once you&apos;ve settled on a gap size, our{" "}
          <a href="/tile-calculator" style={link}>
            tile calculator
          </a>{" "}
          can help estimate how many tiles and boxes you&apos;ll need for your room,
          including a waste margin to cover cuts and breakage.
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
