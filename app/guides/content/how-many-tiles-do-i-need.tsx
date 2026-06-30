import { Breadcrumb, GuideTable, IntroText, formula, link, paragraph, sectionHeading, td, th } from "./shared";
const faqs = [
  {
    question: "How do I calculate how many tiles I need for a room?",
    answer:
      "Divide the total floor or wall area by the area of a single tile, then round up. For a 12 square meter room with 0.36 square meter tiles (60x60cm), that's 12 divided by 0.36, which equals about 33.3, rounded up to 34 tiles before adding waste.",
  },
  {
    question: "How much extra tile should I buy for waste?",
    answer:
      "For a simple grid layout in a square or rectangular room, 10% extra is typically enough. For diagonal, herringbone, or other complex patterns, or for rooms with lots of corners and cuts, 15-20% is safer.",
  },
  {
    question: "Should I subtract doors and windows from my tile area?",
    answer:
      "For wall tile, large openings like doors are usually subtracted from the total area. Small openings or floor tile around fixtures are often left as-is and covered by the waste percentage instead, since the time saved rarely justifies the extra calculation.",
  },
  {
    question: "Do grout lines change how many tiles I need?",
    answer:
      "Grout lines take up a small amount of space, which can slightly increase the number of tiles needed on large jobs. For most residential rooms, this difference is small enough to be covered by your waste percentage.",
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
  headline: "How Many Tiles Do I Need? A Practical Calculation Guide",
  description:
    "Learn how to calculate the number of tiles needed for a room, including waste percentage by layout pattern, box quantities, and common mistakes to avoid.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://buildcalczone.com/guides/how-many-tiles-do-i-need" },
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
  author: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  publisher: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  image: { "@type": "ImageObject", url: "https://buildcalczone.com/opengraph-image", width: 1200, height: 630 },
};

export default function HowManyTilesGuide() {
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
        <Breadcrumb current="How Many Tiles Do I Need? A Practical Calculation Guide" />
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
            How Many Tiles Do I Need? A Practical Calculation Guide
          </h1>
          <IntroText>
            The core calculation for tile quantity is simple division — but
            getting an order that&apos;s actually right for your project means
            thinking about layout pattern, cuts, and how tile is packaged and
            sold. Here&apos;s how to go from room dimensions to a number you can
            confidently take to the store.
          </IntroText>
        </header>

        <h2 style={sectionHeading}>The basic calculation</h2>
        <p style={paragraph}>
          Start by finding your area, then divide by the area of a single tile:
        </p>
        <div style={formula}>
          Number of tiles = Area to cover ÷ Area of one tile
        </div>
        <p style={paragraph}>
          For example, a 4m × 3m room is 12 square meters. If you&apos;re using 60cm
          × 60cm tiles (0.36 square meters each):
        </p>
        <div style={formula}>12 ÷ 0.36 ≈ 33.3 → 34 tiles</div>
        <p style={paragraph}>
          Always round up to the next whole tile — you can&apos;t buy a third of a
          tile, and this number doesn&apos;t yet include any allowance for cuts or
          breakage.
        </p>

        <h2 style={sectionHeading}>Waste percentage by layout pattern</h2>
        <p style={paragraph}>
          The 34 tiles above is the bare minimum for a perfectly simple layout
          with zero cuts — which essentially never happens in practice. How much
          extra to add depends largely on your layout pattern:
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Layout</th>
              <th style={th}>Recommended waste</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Simple grid, square/rectangular room</td>
              <td style={td}>10%</td>
            </tr>
            <tr>
              <td style={td}>Diagonal or herringbone pattern</td>
              <td style={td}>15%</td>
            </tr>
            <tr>
              <td style={td}>Irregular room shape, many corners/cuts</td>
              <td style={td}>15-20%</td>
            </tr>
          </tbody>
        </GuideTable>
        <p style={paragraph}>
          For our 34-tile example with a 10% allowance, that comes to about
          37.4, rounded up to 38 tiles. Diagonal layouts waste more material
          because most cut pieces along the edges can&apos;t be reused elsewhere,
          unlike a grid layout where offcuts from one row can sometimes be used
          to start the next.
        </p>

        <h2 style={sectionHeading}>Buying by the box</h2>
        <p style={paragraph}>
          Tile is almost always sold by the box rather than individually, and
          box quantities vary significantly between products and manufacturers —
          some boxes hold 4 large tiles, others hold 10 or more smaller ones.
          Once you know your total tile count including waste, check the
          coverage area or tile count printed on the box and divide to find how
          many boxes to buy, rounding up to the nearest full box. It&apos;s normal
          for this final rounding to add a small amount of extra material beyond
          your waste percentage — that&apos;s a good thing, since leftover tiles are
          useful for future repairs.
        </p>

        <h2 style={sectionHeading}>Should you subtract doors and windows?</h2>
        <p style={paragraph}>
          For wall tile, large openings such as doorways are usually subtracted
          from your total wall area before calculating quantity, since they
          represent meaningful unused space. For floor tile, small obstructions
          like cabinet toe-kicks or floor vents are often left in the
          calculation as-is — the area is small enough that it&apos;s easier to let
          the waste percentage absorb it than to calculate precise cutouts.
          There&apos;s no strict rule here; it mostly comes down to how much
          precision is worth the extra time for your project.
        </p>

        <h2 style={sectionHeading}>Grout lines and tile count</h2>
        <p style={paragraph}>
          Grout joints take up a small amount of space between tiles, which can
          marginally affect tile count on larger jobs. For most residential
          rooms this effect is small enough to be covered by your waste
          percentage — see our{" "}
          <a href="/guides/tile-grout-gap-guide" style={link}>
            tile grout gap guide
          </a>{" "}
          for more on choosing a joint width.
        </p>

        <h2 style={sectionHeading}>Putting it together</h2>
        <p style={paragraph}>
          The short version: calculate your area, divide by tile size, round up,
          then add a waste percentage based on your layout pattern before
          rounding up again to full boxes. If you&apos;d rather not do this by hand,
          our{" "}
          <a href="/tile-calculator" style={link}>
            tile calculator
          </a>{" "}
          takes your room dimensions and tile size and handles the area, waste,
          and rounding for you.
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
