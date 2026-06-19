import Link from "next/link";
import { Breadcrumb, GuideTable, IntroText, NoteBox, link, paragraph, sectionHeading, td, th } from "./shared";

const faqs = [
  {
    question: "How many bricks do I need per square metre?",
    answer:
      "For a standard single-leaf wall using standard bricks (215×102.5×65mm) with 10mm mortar joints, you need approximately 60 bricks per square metre. Maxi bricks (290×140×90mm) require around 34 per square metre, and jumbo bricks (290×140×140mm) around 23 per square metre.",
  },
  {
    question: "What is a maxi brick?",
    answer:
      "A maxi brick is a larger format brick measuring approximately 290×140×90mm, commonly used in South Africa and some other markets. Because of its larger face area, fewer maxi bricks are needed per square metre compared to standard bricks.",
  },
  {
    question: "How many bricks are on a pallet?",
    answer:
      "Pallet quantities vary by brick size and supplier. Standard bricks are typically supplied around 500 per pallet, though this varies. Maxi bricks generally come in smaller pallet quantities. Always confirm with your supplier before ordering.",
  },
  {
    question: "How much waste should I add to my brick estimate?",
    answer:
      "Add 5–10% for a straightforward rectangular wall. For walls with many openings, cut bricks around corners, or patterned brickwork, allow 10–15%. It is generally better to order slightly more than needed, as colour and batch matching can be difficult if you need to reorder.",
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
  headline: "How Many Bricks Per Square Metre? Standard, Maxi & Jumbo",
  description:
    "Brick quantities per square metre for standard, maxi and jumbo bricks. Includes waste allowance guidance and pallet quantity notes.",
  url: "https://buildcalczone.com/guides/how-many-bricks-per-square-metre",
};

export default function HowManyBricksPerSquareMetreGuide() {
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
        <Breadcrumb current="How Many Bricks Per Square Metre? Standard, Maxi & Jumbo" />
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
            How Many Bricks Per Square Metre? Standard, Maxi & Jumbo
          </h1>
          <IntroText>
            The number of bricks per square metre depends on the brick size and
            the mortar joint thickness used. Standard bricks, maxi bricks, and
            jumbo bricks all give different coverage — and getting this number
            right before ordering prevents both shortfalls and unnecessary
            surplus.
          </IntroText>
        </header>

        <h2 style={sectionHeading}>Bricks per square metre by size</h2>
        <p style={paragraph}>
          The figures below are for a single-leaf wall (one brick thick) with
          10mm mortar joints, which is the standard joint width for most
          brickwork. Double-leaf or cavity walls require double these
          quantities.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Brick type</th>
              <th style={th}>Brick size (L×W×H)</th>
              <th style={th}>Per m² (single leaf)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Standard</td>
              <td style={td}>215×102.5×65mm</td>
              <td style={td}>~60</td>
            </tr>
            <tr>
              <td style={td}>Maxi</td>
              <td style={td}>290×140×90mm</td>
              <td style={td}>~34</td>
            </tr>
            <tr>
              <td style={td}>Jumbo</td>
              <td style={td}>290×140×140mm</td>
              <td style={td}>~23</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          These figures are calculated from the face dimensions including a 10mm
          mortar joint on each edge. Actual quantities can vary slightly
          depending on the brick manufacturer&apos;s tolerances and the joint
          width used on site.
        </NoteBox>

        <h2 style={sectionHeading}>How the calculation works</h2>
        <p style={paragraph}>
          Each brick occupies a face area equal to its length plus one mortar
          joint, multiplied by its height plus one mortar joint. For a standard
          brick with 10mm joints:
        </p>
        <p
          style={{
            ...paragraph,
            fontFamily: "var(--font-mono)",
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "14px 18px",
          }}
        >
          (215 + 10) × (65 + 10) = 225 × 75 = 16,875 mm²
        </p>
        <p style={paragraph}>One square metre is 1,000,000 mm², so:</p>
        <p
          style={{
            ...paragraph,
            fontFamily: "var(--font-mono)",
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "14px 18px",
          }}
        >
          1,000,000 ÷ 16,875 ≈ 59.3 → 60 bricks per m²
        </p>
        <p style={paragraph}>
          The same formula applies to any brick size — add 10mm to both the
          length and height dimensions, multiply them together, then divide
          1,000,000 by the result.
        </p>

        <h2 style={sectionHeading}>Waste allowance</h2>
        <p style={paragraph}>
          Brick estimates should always include a waste allowance to cover cuts,
          breakage, and minor measurement variations:
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Wall type</th>
              <th style={th}>Recommended waste</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Simple rectangular wall, few openings</td>
              <td style={td}>5–10%</td>
            </tr>
            <tr>
              <td style={td}>
                Multiple openings, corners, or decorative patterns
              </td>
              <td style={td}>10–15%</td>
            </tr>
          </tbody>
        </GuideTable>
        <p style={paragraph}>
          One additional consideration: bricks are manufactured in batches, and
          colour can vary between batches. If you run short and need to reorder,
          the new batch may not match exactly. Ordering a small surplus is
          generally preferable to running short.
        </p>

        <h2 style={sectionHeading}>Pallet quantities</h2>
        <p style={paragraph}>
          Bricks are typically sold by the pallet. Pallet quantities vary
          significantly between suppliers and brick types — standard bricks are
          commonly supplied around 500 per pallet, but this is not universal.
          Always confirm the pallet quantity with your supplier before
          calculating how many pallets to order, rather than assuming a standard
          number.
        </p>

        <h2 style={sectionHeading}>Putting it together</h2>
        <p style={paragraph}>
          To get your total brick count: calculate the wall area in square
          metres, multiply by the bricks-per-m² figure for your brick type, then
          add your waste percentage and round up to the nearest full pallet. Our{" "}
          <Link href="/brick-calculator" style={link}>
            brick calculator
          </Link>{" "}
          handles this automatically — enter your wall dimensions and it returns
          brick count and pallet estimate with adjustable waste.
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
