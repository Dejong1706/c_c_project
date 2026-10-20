import Link from "next/link";
import { Breadcrumb, GuideTable, IntroText, NoteBox, formula, link, listItem, paragraph, sectionHeading, td, th } from "./shared";
const faqs = [
  {
    question: "What is the minimum grout joint width for tile?",
    answer:
      "ANSI A108.02 (section 4.3.8) sets two minimums: the joint must be at least three times the actual variation in facial dimensions of the tile supplied, and never less than 1/16 inch (1.6 mm). If your tiles vary by 1/16 inch, the joint must be at least 3/16 inch (4.8 mm). The tile manufacturer may recommend a wider joint.",
  },
  {
    question: "Do large format tiles need wider grout lines?",
    answer:
      "Not because of their size alone. The joint is set by how much the tiles vary in size. For running bond (offset) layouts with any side longer than 15 inches, ANSI A108.02 (section 4.3.8.1) sets an average minimum of 1/8 inch (3.2 mm) for rectified tile and 3/16 inch (4.8 mm) for calibrated (non-rectified) tile.",
  },
  {
    question: "Does a wider grout gap mean I need more tiles?",
    answer:
      "No, it means slightly fewer. Each tile covers its own size plus one joint, so a wider joint makes each tile cover more area. Going from a 3 mm to a 6 mm joint cuts the count by about 1% for 60 cm tiles, about 2% for 30 cm tiles and about 6% for 10 cm tiles.",
  },
  {
    question: "Does grout absorb tile expansion and movement?",
    answer:
      "No. Cement grout cures hard and cannot take up movement. Movement is handled by movement accommodation joints (TCNA Handbook EJ171) at the perimeter, inside corners, changes of plane and in the field. These joints are filled with a flexible sealant and kept free of thinset and grout.",
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
    "Minimum tile grout joint width per ANSI A108.02 (3× the tile size variation, never under 1/16″), lippage explained, why grout is not a movement joint, and how joint width changes tile count.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://buildcalczone.com/guides/tile-grout-gap-guide" },
  datePublished: "2026-06-12",
  dateModified: "2026-10-20",
  author: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  publisher: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  image: { "@type": "ImageObject", url: "https://buildcalczone.com/opengraph-image", width: 1200, height: 630 },
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
            The grout joint width is not just a style choice. The US tile
            installation standard, ANSI A108.02, sets a minimum based on how
            much your tiles vary in size. This guide covers that rule, what
            lippage actually means, why grout is not a movement joint, and how
            joint width changes the number of tiles you need.
          </IntroText>
        </header>

        <h2 style={sectionHeading}>What the grout joint does (and doesn&apos;t do)</h2>
        <p style={paragraph}>
          No two tiles come out of the kiln exactly the same size. The grout
          joint takes up those size differences so the joint lines stay
          straight from one end of the room to the other. That is why the
          minimum joint width is tied to the size variation of the tile you
          actually bought.
        </p>
        <p style={paragraph}>
          What the joint does <strong>not</strong> do is absorb expansion and
          contraction. Cement grout cures hard. Movement is taken up by
          separate movement joints filled with a flexible sealant (see{" "}
          <a href="#movement-joints" style={link}>
            movement joints
          </a>{" "}
          below).
        </p>

        <h2 style={sectionHeading}>Minimum grout joint width (ANSI A108.02)</h2>
        <p style={paragraph}>
          ANSI A108.02 section 4.3.8 sets the minimum joint width. The joint
          you lay out has to meet every rule that applies:
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Rule</th>
              <th style={th}>Minimum joint</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Any tile, any layout</td>
              <td style={td}>3 × the actual variation in facial dimensions of the tile supplied</td>
            </tr>
            <tr>
              <td style={td}>Absolute minimum</td>
              <td style={td}>1/16″ (1.6 mm)</td>
            </tr>
            <tr>
              <td style={td}>Running bond / offset, any side over 15″ (38 cm), rectified tile</td>
              <td style={td}>1/8″ (3.2 mm) on average</td>
            </tr>
            <tr>
              <td style={td}>Running bond / offset, any side over 15″ (38 cm), calibrated (non-rectified) tile</td>
              <td style={td}>3/16″ (4.8 mm) on average</td>
            </tr>
          </tbody>
        </GuideTable>
        <p style={paragraph}>
          The &ldquo;variation in facial dimensions&rdquo; is the difference
          between the largest and smallest tile in the lot. To find it, measure
          tiles from several different boxes and subtract the smallest
          measurement from the largest.
        </p>
        <div style={formula}>
          Minimum joint = 3 × (largest tile − smallest tile), and at least 1/16″ (1.6 mm)
        </div>
        <p style={paragraph}>
          Example: if your tiles range from 599 mm to 600 mm, the variation is
          1 mm, so the joint must be at least 3 mm. In inches, a 1/16″
          variation needs a joint of at least 3/16″.
        </p>
        <p style={paragraph}>
          Rectified tiles have their edges ground to size after firing, so they
          usually vary less and can take a narrower joint. Calibrated
          (pressed, non-rectified) tiles are sorted by size but not ground, so
          they usually need a wider joint. Sheet-mounted mosaics come with the
          joint width already set by the backing.
        </p>
        <NoteBox>
          These are minimums. If the tile manufacturer recommends a wider
          joint for its product, use the wider joint. ANSI A108.02 also notes
          that the joint actually installed may have to differ from the one
          specified to absorb the size range of the tile on a project.
        </NoteBox>

        <h2 style={sectionHeading}>Lippage is not the same as size variation</h2>
        <p style={paragraph}>
          <strong>Lippage</strong> is the difference in height between the
          edges of two adjacent tiles after they are installed: one edge sits
          higher than its neighbor. You can feel it with your hand or see it
          with a straightedge, and the ANSI tile standards limit how much is
          allowed.
        </p>
        <p style={paragraph}>Three different terms often get mixed up:</p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={listItem}>
            <strong>Facial dimension variation:</strong> tiles that differ in
            length or width. The grout joint takes this up.
          </li>
          <li style={listItem}>
            <strong>Warpage:</strong> a tile that is not perfectly flat (bowed
            edges or a curved face).
          </li>
          <li style={listItem}>
            <strong>Lippage:</strong> the height step between installed
            tiles. Warpage, an uneven substrate or uneven setting can all
            cause it.
          </li>
        </ul>
        <p style={paragraph}>
          A wider grout joint does not fix lippage. It is controlled by a flat
          substrate, careful setting and the tile&apos;s own warpage. Warpage
          is also behind A108.02&apos;s separate joint widths for offset
          layouts of tile longer than 15″, where the bowed middle of one tile
          lines up with the edge of the next.
        </p>

        <h2 id="movement-joints" style={sectionHeading}>
          Grout is not a movement joint
        </h2>
        <p style={paragraph}>
          Tile, substrate and building all move with changes in temperature
          and moisture. Rigid cement grout cannot take up that movement. The
          TCNA Handbook method EJ171 calls for movement accommodation joints
          instead, filled with a flexible sealant over a backer rod rather than
          grout:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={listItem}>
            At the perimeter, where tile meets walls and other restraining
            surfaces
          </li>
          <li style={listItem}>At inside corners and other changes of plane</li>
          <li style={listItem}>Over joints in the substrate below</li>
          <li style={listItem}>
            In the field of the tile, about every 20–25 ft (6.1–7.6 m)
            indoors and every 8–12 ft (2.4–3.7 m) outdoors. Indoor tile
            exposed to direct sunlight or moisture needs the closer spacing.
          </li>
        </ul>
        <p style={paragraph}>
          ANSI A108.02 requires movement joints to be kept free of setting and
          grouting materials. On a designed project, the architect or engineer
          shows the joint locations on the drawings.
        </p>

        <h2 style={sectionHeading}>How grout gap affects tile count</h2>
        <p style={paragraph}>
          A wider joint means you need <strong>fewer</strong> tiles, not more.
          Each tile covers its own size plus one joint width, so a wider joint
          makes each tile cover more of the floor:
        </p>
        <div style={formula}>
          Tiles = Area ÷ ((tile length + joint) × (tile width + joint))
        </div>
        <p style={paragraph}>
          The effect is small for large tiles and bigger for small ones. Going
          from a 3 mm to a 6 mm joint changes the count by:
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Square tile size</th>
              <th style={th}>Fewer tiles with 6 mm vs 3 mm joint</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>60 cm</td>
              <td style={td}>about 1%</td>
            </tr>
            <tr>
              <td style={td}>30 cm</td>
              <td style={td}>about 2%</td>
            </tr>
            <tr>
              <td style={td}>10 cm</td>
              <td style={td}>about 6%</td>
            </tr>
          </tbody>
        </GuideTable>
        <p style={paragraph}>
          For example, a 12 m² floor in 60 × 60 cm tile needs 12 ÷ 0.603² =
          33.002, rounded up to 34 tiles with a 3 mm joint, but 12 ÷ 0.606² =
          32.68, rounded up to 33 tiles with a 6 mm joint (both before waste).
          For large tiles the difference is smaller than a typical 10% waste
          allowance.
        </p>

        <h2 style={sectionHeading}>Putting it together</h2>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={listItem}>
            Measure tiles from several boxes. The joint must be at least 3×
            the size variation and never under 1/16″ (1.6 mm).
          </li>
          <li style={listItem}>
            For offset layouts of tile longer than 15″, use at least 1/8″ for
            rectified and 3/16″ for calibrated tile, on average.
          </li>
          <li style={listItem}>
            Follow the manufacturer&apos;s joint recommendation if it is
            wider.
          </li>
          <li style={listItem}>
            Leave movement joints at the perimeter, inside corners and in
            large fields, and fill them with sealant, not grout.
          </li>
        </ul>
        <p style={paragraph}>
          Once you&apos;ve chosen a joint width, our{" "}
          <Link href="/tile-calculator" style={link}>
            tile calculator
          </Link>{" "}
          uses it to work out how many tiles and boxes you need, including a
          waste margin. For the full installation process, see{" "}
          <Link href="/guides/how-to-lay-tile-step-by-step" style={link}>
            how to lay tile step by step
          </Link>
          .
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
