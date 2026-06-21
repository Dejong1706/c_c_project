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
    question: "How many bricks do I need for a 10m² wall?",
    answer:
      "For a half-brick (single-leaf) wall using UK standard bricks (215 × 102.5 × 65 mm) with a 10 mm mortar joint, you need approximately 60 bricks per m². A 10 m² wall requires around 600 bricks before waste. Add 10% for cuts and breakage, bringing the total to 660 bricks. For a full-brick (double-leaf) wall, double the count to 1,200 bricks plus waste.",
  },
  {
    question:
      "What is the difference between a half-brick and a full-brick wall?",
    answer:
      "A half-brick wall is one brick wide — the brick is laid lengthways (stretcher bond), giving a wall 102.5 mm thick. A full-brick wall is one full brick length wide (215 mm thick), where every course has bricks running both directions. Half-brick walls are common for garden walls, internal partitions, and non-load-bearing applications. Full-brick walls are used for load-bearing exterior walls. Full-brick walls require roughly twice as many bricks per m² as half-brick walls.",
  },
  {
    question: "Should I add waste to my brick calculation?",
    answer:
      "Yes, always. For straightforward rectangular walls with few cuts, add 5%. For walls with openings (doors, windows), arches, or complex bonds, add 10%. For decorative or intricate patterns, add up to 15%. Underordering means delays and potential dye-lot mismatches if you need to reorder later.",
  },
  {
    question: "How do I account for doors and windows when calculating bricks?",
    answer:
      "Calculate the gross wall area first (full height × full width), then subtract the area of each opening. Apply your waste factor to the net area. For example, a 4 m × 2.5 m wall (10 m²) with one 1 m × 2 m door opening has a net area of 8 m². At 60 bricks/m² plus 10% waste: 8 × 60 × 1.10 = 528 bricks.",
  },
  {
    question: "Do mortar joint thickness affect how many bricks I need?",
    answer:
      "Yes. A thicker mortar joint increases the coordinating size of each brick, so fewer bricks fit per m². With UK standard bricks, an 8 mm joint gives about 63 bricks/m², a 10 mm joint gives 60 bricks/m², and a 12 mm joint gives about 58 bricks/m². The difference matters on large projects — always use the joint size you actually intend to lay.",
  },
  {
    question: "How many bricks are in a standard pack or pallet?",
    answer:
      "Pack sizes vary by manufacturer, but UK standard bricks typically come in packs of 400–500 bricks. A full pallet is usually 400–504 bricks. Always confirm with your supplier. Order in full packs where possible to avoid small top-up orders, which are often charged at a higher per-brick rate.",
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
  headline: "How to Calculate Bricks for a Wall",
  description:
    "Step-by-step guide to calculating how many bricks you need for any wall — including half-brick and full-brick walls, openings, waste factors, and mortar quantities.",
  url: "https://buildcalczone.com/guides/how-to-calculate-bricks-for-a-wall",
};

export default function HowToCalculateBricksForAWall() {
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
        <Breadcrumb current="How to Calculate Bricks for a Wall" />
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
            How to Calculate Bricks for a Wall
          </h1>
          <IntroText>
            Whether you&apos;re building a garden wall or estimating for a full
            house, the calculation follows the same steps: work out the wall
            area, choose the right brick density for your wall type, subtract
            any openings, then add waste. This guide walks through each step
            with worked examples.
          </IntroText>
        </header>

        {/* Step 1 */}
        <h2 style={sectionHeading}>Step 1 — Decide Your Wall Type</h2>
        <p style={paragraph}>
          The number of bricks you need depends on whether you&apos;re building
          a half-brick or full-brick wall.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Wall Type</th>
              <th style={th}>Thickness</th>
              <th style={th}>Common Uses</th>
              <th style={th}>Bricks/m² (UK standard)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Half-brick (single-leaf)</td>
              <td style={td}>102.5 mm</td>
              <td style={td}>Garden walls, partition walls</td>
              <td style={td}>~60</td>
            </tr>
            <tr>
              <td style={td}>Full-brick (double-leaf)</td>
              <td style={td}>215 mm</td>
              <td style={td}>Load-bearing exterior walls</td>
              <td style={td}>~120</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          Bricks per m² figures assume UK standard bricks (215 × 102.5 × 65 mm)
          with a 10 mm mortar joint. For other countries, see our{" "}
          <Link href="/guides/standard-brick-sizes-by-country" style={link}>
            Standard Brick Sizes by Country
          </Link>{" "}
          guide.
        </NoteBox>

        {/* Step 2 */}
        <h2 style={sectionHeading}>Step 2 — Calculate the Gross Wall Area</h2>
        <p style={paragraph}>
          Measure the full height and width of the wall, including any openings.
          This gives you the gross area.
        </p>
        <div style={formula}>
          Gross area (m²) = Wall width (m) × Wall height (m)
        </div>
        <p style={paragraph}>
          <strong>Example:</strong> A wall 5 m wide and 2 m high has a gross
          area of 10 m².
        </p>

        {/* Step 3 */}
        <h2 style={sectionHeading}>Step 3 — Subtract Openings</h2>
        <p style={paragraph}>
          For each door, window, or other opening, calculate the opening area
          and subtract it from the gross area.
        </p>
        <div style={formula}>
          Net area (m²) = Gross area − (opening width × opening height) for each
          opening
        </div>
        <p style={paragraph}>
          <strong>Example:</strong> The 10 m² wall above has one window 1.2 m
          wide × 1.0 m high (1.2 m²) and one door 0.9 m wide × 2.1 m high (1.89
          m²).
        </p>
        <div style={formula}>Net area = 10 − 1.2 − 1.89 = 6.91 m²</div>
        <NoteBox>
          Bricks cut around openings have a higher waste rate. If more than 20%
          of your wall area is openings, use a 10% waste factor rather than 5%.
        </NoteBox>

        {/* Step 4 */}
        <h2 style={sectionHeading}>Step 4 — Calculate Brick Quantity</h2>
        <p style={paragraph}>
          Multiply the net area by the number of bricks per m² for your wall
          type and brick size.
        </p>
        <div style={formula}>Bricks needed = Net area (m²) × Bricks per m²</div>
        <p style={paragraph}>
          <strong>Example continued:</strong> Half-brick wall, UK standard
          bricks (60/m²):
        </p>
        <div style={formula}>6.91 × 60 = 414.6 → 415 bricks (before waste)</div>

        {/* Step 5 */}
        <h2 style={sectionHeading}>Step 5 — Add Waste</h2>
        <p style={paragraph}>
          Always order more than the calculated quantity. Cutting, breakage, and
          colour variation between batches make it essential to have spares on
          site.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Situation</th>
              <th style={th}>Waste Factor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Simple rectangular wall, stretcher bond</td>
              <td style={td}>5%</td>
            </tr>
            <tr>
              <td style={td}>Wall with openings (doors / windows)</td>
              <td style={td}>10%</td>
            </tr>
            <tr>
              <td style={td}>Complex bond (Flemish, English, herringbone)</td>
              <td style={td}>10–15%</td>
            </tr>
            <tr>
              <td style={td}>Curved walls or arches</td>
              <td style={td}>15%</td>
            </tr>
          </tbody>
        </GuideTable>
        <div style={formula}>
          Final order quantity = Bricks needed × (1 + waste factor)
        </div>
        <p style={paragraph}>
          <strong>Example continued:</strong> Wall with openings, 10% waste:
        </p>
        <div style={formula}>
          415 × 1.10 = 456.5 → order 457 bricks (round up)
        </div>
        <NoteBox>
          Always round up to the nearest full pack. Ordering a partial pack
          later often costs more per brick and risks a dye-lot mismatch.
        </NoteBox>

        {/* Worked examples */}
        <h2 style={sectionHeading}>Worked Examples</h2>

        <p style={{ ...paragraph, fontWeight: 600, marginBottom: "6px" }}>
          Example A — Garden wall, no openings
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={listItem}>Wall: 6 m wide × 1.2 m high = 7.2 m²</li>
          <li style={listItem}>Type: half-brick, UK standard (60 bricks/m²)</li>
          <li style={listItem}>Bricks: 7.2 × 60 = 432</li>
          <li style={listItem}>Waste (5%): 432 × 1.05 = 453.6 → order 454</li>
        </ul>

        <p style={{ ...paragraph, fontWeight: 600, marginBottom: "6px" }}>
          Example B — House exterior wall with two windows
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={listItem}>Wall: 8 m wide × 2.5 m high = 20 m²</li>
          <li style={listItem}>
            Two windows: 1.0 m × 1.2 m each = 2.4 m² total openings
          </li>
          <li style={listItem}>Net area: 20 − 2.4 = 17.6 m²</li>
          <li style={listItem}>
            Type: full-brick, UK standard (120 bricks/m²)
          </li>
          <li style={listItem}>Bricks: 17.6 × 120 = 2,112</li>
          <li style={listItem}>
            Waste (10%): 2,112 × 1.10 = 2,323.2 → order 2,324
          </li>
        </ul>

        {/* Bricks per m² by country */}
        <h2 style={sectionHeading}>
          Bricks per m² by Country (Half-Brick Wall)
        </h2>
        <p style={paragraph}>
          If you&apos;re not using UK standard bricks, use the correct figure
          for your region.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Country</th>
              <th style={th}>Standard Brick Size (mm)</th>
              <th style={th}>Bricks/m²</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>UK</td>
              <td style={td}>215 × 102.5 × 65</td>
              <td style={td}>~60</td>
            </tr>
            <tr>
              <td style={td}>USA (modular)</td>
              <td style={td}>194 × 92 × 57</td>
              <td style={td}>~73</td>
            </tr>
            <tr>
              <td style={td}>Australia</td>
              <td style={td}>230 × 110 × 76</td>
              <td style={td}>~48</td>
            </tr>
            <tr>
              <td style={td}>Germany (DF)</td>
              <td style={td}>240 × 115 × 52</td>
              <td style={td}>~65</td>
            </tr>
            <tr>
              <td style={td}>South Africa</td>
              <td style={td}>222 × 106 × 73</td>
              <td style={td}>~52</td>
            </tr>
            <tr>
              <td style={td}>India (modular)</td>
              <td style={td}>190 × 90 × 90</td>
              <td style={td}>~50</td>
            </tr>
          </tbody>
        </GuideTable>

        {/* Mortar quantity */}
        <h2 style={sectionHeading}>Estimating Mortar Quantity</h2>
        <p style={paragraph}>
          As a rule of thumb, one bag of cement (25 kg) mixed at a 1:4
          cement-to-sand ratio will lay approximately 60–70 UK standard bricks.
          For a more accurate estimate, use the following:
        </p>
        <div style={formula}>
          Mortar volume (m³) ≈ 0.25 × wall volume (m³) × mortar fraction
        </div>
        <p style={paragraph}>
          For a half-brick wall, mortar makes up roughly 17% of total wall
          volume. For a full-brick wall, this rises to around 20% due to more
          cross joints.
        </p>
        <NoteBox>
          For a full mortar breakdown including cement bags and sand weight, see
          our{" "}
          <Link href="/guides/brick-mortar-mix-ratio" style={link}>
            Brick Mortar Mix Ratio Guide
          </Link>
          .
        </NoteBox>

        {/* Calculator CTA */}
        <h2 style={sectionHeading}>Skip the Maths</h2>
        <p style={paragraph}>
          Use our{" "}
          <Link href="/brick-calculator" style={link}>
            Brick Calculator
          </Link>{" "}
          to enter your wall dimensions, brick size, wall type, and waste factor
          — it calculates the brick count and mortar estimate in one step.
        </p>

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
