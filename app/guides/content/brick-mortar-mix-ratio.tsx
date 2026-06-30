import Link from "next/link";
import { Breadcrumb, GuideTable, IntroText, NoteBox, link, listItem, paragraph, sectionHeading, td, th } from "./shared";

const faqs = [
  {
    question: "What is the correct mortar mix ratio for bricklaying?",
    answer:
      "For most external brickwork, a 1:5 ratio (1 part cement to 5 parts sand) by volume is standard. For internal non-structural walls, a weaker 1:6 mix is common. For below-ground or high-moisture areas, a stronger 1:3 or 1:4 mix is used. Adding a small amount of hydrated lime (typically 1 part lime to the cement) improves workability without significantly reducing strength.",
  },
  {
    question: "Can I use the same mortar mix for all brickwork?",
    answer:
      "No. The right mix depends on where the wall is and what load it carries. A 1:3 mix used for an internal partition is unnecessarily strong and more likely to crack due to rigidity. A 1:6 mix used below ground level will not have adequate water resistance. Match the mix to the application.",
  },
  {
    question: "What does a 1:5 mortar mix mean?",
    answer:
      "A 1:5 mortar mix means 1 part cement to 5 parts sand, measured by volume. So for every bucket of cement, you add 5 buckets of sand, plus water until the mix reaches a workable consistency.",
  },
  {
    question: "How much mortar do I need per square metre of brickwork?",
    answer:
      "As a rough guide, standard brickwork with 10mm joints uses approximately 0.5 to 0.7 litres of mortar per brick, depending on whether joints are on all faces or only the bed and perpendicular joints. For a single-leaf wall using approximately 60 bricks per square metre, that works out to around 30 to 40 litres of mixed mortar per square metre.",
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
  headline: "Brick Mortar Mix Ratio Guide: Which Mix for Which Job?",
  description:
    "Mortar mix ratios for bricklaying by application. Covers cement to sand ratios for external walls, internal walls, below-ground work, and the role of lime.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://buildcalczone.com/guides/brick-mortar-mix-ratio" },
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  publisher: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  image: { "@type": "ImageObject", url: "https://buildcalczone.com/opengraph-image", width: 1200, height: 630 },
};

export default function BrickMortarMixRatioGuide() {
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
        <Breadcrumb current="Brick Mortar Mix Ratio Guide: Which Mix for Which Job?" />
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
            Brick Mortar Mix Ratio Guide: Which Mix for Which Job?
          </h1>
          <IntroText>
            Mortar holds brickwork together, but the right mix depends on where
            the wall is and what it needs to do. Using a mix that&apos;s too
            strong can cause cracking; too weak and it won&apos;t cope with
            moisture or load. Here&apos;s how to match the ratio to the job.
          </IntroText>
        </header>

        <h2 style={sectionHeading}>The basic mix: cement and sand</h2>
        <p style={paragraph}>
          Standard bricklaying mortar is a mix of Portland cement and sharp
          sand, combined by volume. The ratio describes how many parts sand per
          part cement. A higher number means more sand — a weaker, more flexible
          mix. A lower number means more cement — stronger but less forgiving of
          movement.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Mix ratio (cement:sand)</th>
              <th style={th}>Typical application</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>1:3</td>
              <td style={td}>
                Below ground, high moisture exposure, engineering bricks
              </td>
            </tr>
            <tr>
              <td style={td}>1:4</td>
              <td style={td}>
                Below DPC level, retaining walls, hard-wearing surfaces
              </td>
            </tr>
            <tr>
              <td style={td}>1:5</td>
              <td style={td}>
                External walls above ground, most general brickwork
              </td>
            </tr>
            <tr>
              <td style={td}>1:6</td>
              <td style={td}>
                Internal non-structural walls, light partitions
              </td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          These ratios are by volume, not weight. Use the same container for
          measuring each material to keep proportions consistent across batches.
        </NoteBox>

        <h2 style={sectionHeading}>Adding lime</h2>
        <p style={paragraph}>
          Hydrated lime is commonly added to mortar to improve workability and
          reduce the risk of shrinkage cracking. It makes the mix easier to
          spread and gives it a slight flexibility that pure cement mortar lacks
          — useful in walls that may experience minor movement.
        </p>
        <p style={paragraph}>
          A typical lime-modified mix for external brickwork is cement:lime:sand
          in a 1:1:5 to 1:1:6 ratio. The lime partially replaces some of the
          cement&apos;s stiffness without significantly reducing final strength
          for standard applications.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Mix (cement:lime:sand)</th>
              <th style={th}>Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>1:0:3 to 1:0:4</td>
              <td style={td}>Below ground, high exposure (no lime)</td>
            </tr>
            <tr>
              <td style={td}>1:½:4 to 1:½:4.5</td>
              <td style={td}>External walls, moderate exposure</td>
            </tr>
            <tr>
              <td style={td}>1:1:5 to 1:1:6</td>
              <td style={td}>External walls, sheltered; most general use</td>
            </tr>
            <tr>
              <td style={td}>1:2:8 to 1:2:9</td>
              <td style={td}>Internal walls, low load</td>
            </tr>
          </tbody>
        </GuideTable>

        <h2 style={sectionHeading}>Plasticisers as a lime alternative</h2>
        <p style={paragraph}>
          Liquid plasticisers can be added instead of lime to improve
          workability. They introduce tiny air bubbles into the mix, making it
          easier to spread without adding water. Dosage varies by product —
          follow the manufacturer&apos;s instructions rather than a fixed ratio,
          as over-dosing weakens the finished mortar.
        </p>

        <h2 style={sectionHeading}>How much water to add</h2>
        <p style={paragraph}>
          Water is added until the mortar reaches a workable consistency — it
          should hold its shape on a trowel without slumping, and spread
          smoothly without being stiff or dry. Adding too much water reduces
          strength and causes the mortar to run down the face of the bricks.
        </p>
        <p style={paragraph}>
          Mix the dry materials thoroughly before adding water, then add water
          gradually and mix again. It is much easier to add a little more water
          than to correct a mix that is too wet.
        </p>

        <h2 style={sectionHeading}>How much mortar per square metre</h2>
        <p style={paragraph}>
          As a rough guide for standard brickwork with 10mm mortar joints, allow
          approximately 30 to 40 litres of mixed mortar per square metre of
          single-leaf wall. This accounts for bed joints (horizontal) and
          perpendicular joints (vertical) but not collar joints in cavity walls.
          Add 10% for waste and overfilling.
        </p>
        <NoteBox>
          Mortar volume estimates vary with joint width and brick type. The
          figures above apply to standard bricks (215×102.5×65mm) with 10mm
          joints. Maxi or jumbo bricks with larger joints will require more
          mortar per square metre.
        </NoteBox>

        <h2 style={sectionHeading}>Common mistakes</h2>
        <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
          <li style={listItem}>
            <strong>Using the same mix everywhere</strong> — a 1:3 mix on an
            internal partition is overly rigid and prone to cracking with normal
            building movement
          </li>
          <li style={listItem}>
            <strong>Adding too much water</strong> — weakens the mortar and
            causes staining on brick faces
          </li>
          <li style={listItem}>
            <strong>Inconsistent batching</strong> — measuring by eye rather
            than a fixed container leads to variable strength across a wall
          </li>
          <li style={listItem}>
            <strong>Working in cold conditions without precautions</strong> —
            mortar should not be mixed or applied when temperatures are at or
            below 2°C, as freezing before curing destroys the bond
          </li>
        </ul>

        <h2 style={sectionHeading}>Putting it together</h2>
        <p style={paragraph}>
          Before mixing mortar, it helps to know exactly how many bricks
          you&apos;re laying and how much material you&apos;ll need. Our{" "}
          <Link href="/brick-calculator" style={link}>
            brick calculator
          </Link>{" "}
          gives brick count and pallet estimates for any wall size, and the{" "}
          <Link href="/guides/how-many-bricks-per-square-metre" style={link}>
            bricks per square metre guide
          </Link>{" "}
          covers how coverage varies by brick type.
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
