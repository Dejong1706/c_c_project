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
      "A half-brick wall is one brick wide — the brick is laid lengthways (stretcher bond), giving a wall 102.5 mm thick. A full-brick (one-brick) wall is one brick length thick (215 mm), with its two leaves tied together by header bricks laid across the wall. Half-brick brickwork is used for the outer leaf of cavity walls, internal non-load-bearing partitions and very low garden walls; UK guidance limits a free-standing half-brick wall without piers to 375–525 mm high and a one-brick wall to 1,075–1,450 mm, depending on wind zone. A full-brick wall takes twice as many bricks per m² as a half-brick wall.",
  },
  {
    question: "Should I add waste to my brick calculation?",
    answer:
      "Yes. The Brick Industry Association (US, Technical Note 10) says that, as a general rule, at least 5 percent is added to the net brick quantity, and more where job conditions warrant it. Common rules of thumb are 5% for plain rectangular walls, 10% for walls with openings, 10–15% for complex bonds, and 15% for curved walls or arches. Bricks from a later batch may not match in colour, so order the extra with the main delivery.",
  },
  {
    question: "How do I account for doors and windows when calculating bricks?",
    answer:
      "Calculate the gross wall area first (full height × full width), then subtract the area of each opening. Apply your waste factor to the net area. For example, a 4 m × 2.5 m wall (10 m²) with one 1 m × 2 m door opening has a net area of 8 m². At 60 bricks/m² plus 10% waste: 8 × 60 × 1.10 = 528 bricks.",
  },
  {
    question: "Does mortar joint thickness affect how many bricks I need?",
    answer:
      "Yes. A thicker mortar joint increases the coordinating size of each brick, so fewer bricks fit per m². With UK standard bricks, an 8 mm joint gives about 61 bricks/m², a 10 mm joint about 59 (usually rounded to 60), and a 12 mm joint about 57. The difference matters on large projects — always use the joint size you actually intend to lay.",
  },
  {
    question: "How many bricks are in a standard pack or pallet?",
    answer:
      "It varies by manufacturer and brick. Our calculator assumes 500 per pallet as a planning figure; use the pack size your supplier quotes when you order.",
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
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://buildcalczone.com/guides/how-to-calculate-bricks-for-a-wall" },
  datePublished: "2026-06-18",
  dateModified: "2026-11-27",
  author: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  publisher: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  image: { "@type": "ImageObject", url: "https://buildcalczone.com/opengraph-image", width: 1200, height: 630 },
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
              <td style={td}>
                Outer leaf of a cavity wall, internal non-load-bearing
                partitions, very low garden walls*
              </td>
              <td style={td}>~60</td>
            </tr>
            <tr>
              <td style={td}>Full-brick (double-leaf)</td>
              <td style={td}>215 mm</td>
              <td style={td}>Solid walls, garden walls*</td>
              <td style={td}>~120</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          * Welsh Government guidance limits a free-standing wall without piers
          to 375–525 mm high (half-brick) or 1,075–1,450 mm (one-brick),
          depending on wind zone. It advises getting expert advice for anything
          higher, for walls with piers and for walls retaining soil. See the
          full{" "}
          <Link href="/guides/single-vs-double-leaf-brick-wall" style={link}>
            wall height table
          </Link>
          . A brick count does not tell you whether a wall is safe to build.
        </NoteBox>
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
          <strong>Example:</strong> The brick outer leaf of a house wall, 5 m wide
          and 2.4 m high, has a gross area of 12 m².
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
          <strong>Example:</strong> The 12 m² wall above has one window 1.2 m
          wide × 1.0 m high (1.2 m²) and one door 0.9 m wide × 2.1 m high (1.89
          m²).
        </p>
        <div style={formula}>Net area = 12 − 1.2 − 1.89 = 8.91 m²</div>
        <NoteBox>
          Cutting around openings wastes more bricks. As a rule of thumb, allow
          10% rather than 5% on walls with openings.
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
        <div style={formula}>8.91 × 60 = 534.6 → 535 bricks (before waste)</div>

        {/* Step 5 */}
        <h2 style={sectionHeading}>Step 5 — Add Waste</h2>
        <p style={paragraph}>
          Order more than the calculated quantity to cover cutting and breakage.
          The Brick Industry Association (US) gives at least 5% as a general
          rule; the higher figures below are rules of thumb, not a standard.
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
          535 × 1.10 = 588.5 → order 589 bricks (round up)
        </div>
        <NoteBox>
          Round up to whole packs if your supplier only sells full packs. Bricks
          from a later batch may not match in colour.
        </NoteBox>

        {/* Worked examples */}
        <h2 style={sectionHeading}>Worked Examples</h2>

        <p style={{ ...paragraph, fontWeight: 600, marginBottom: "6px" }}>
          Example A — Garden wall 0.9 m high, no openings
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={listItem}>Wall: 6 m wide × 0.9 m high = 5.4 m²</li>
          <li style={listItem}>Type: one-brick (215 mm), UK standard (120 bricks/m²). 0.9 m is too
            high for a free-standing half-brick wall</li>
          <li style={listItem}>Bricks: 5.4 × 120 = 648</li>
          <li style={listItem}>Waste (5%): 648 × 1.05 = 680.4 → order 681</li>
        </ul>

        <p style={{ ...paragraph, fontWeight: 600, marginBottom: "6px" }}>
          Example B — Solid one-brick wall with two windows
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
              <td style={td}>64</td>
            </tr>
          </tbody>
        </GuideTable>

        {/* Mortar quantity */}
        <h2 style={sectionHeading}>Estimating Mortar Quantity</h2>
        <p style={paragraph}>
          The mortar in the joints is the part of the wall that is not brick:
        </p>
        <div style={formula}>
          Mortar volume (m³) ≈ wall volume (m³) × mortar fraction
        </div>
        <p style={paragraph}>
          For UK standard bricks with 10 mm joints, mortar makes up about 17% of a
          half-brick wall. In a full-brick wall it rises to about 21%, because of
          the extra joint between the two leaves. So 1 m² of half-brick wall
          (0.1025 m³) holds about 17.6 litres of mortar and 1 m² of full-brick
          wall (0.215 m³) about 45 litres, before frogs and waste.
        </p>
        <NoteBox>
          For mix proportions, see our{" "}
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
          to enter your wall length and height, choose a wall type (UK single or
          double leaf, or US modular brick) and set a waste allowance. If the
          wall has openings, subtract them first as in Step 3. The{" "}
          <Link href="/mortar-calculator" style={link}>
            Mortar Calculator
          </Link>{" "}
          estimates the mortar.
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
