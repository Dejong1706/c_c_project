import Link from "next/link";
import { Breadcrumb, GuideTable, IntroText, NoteBox, formula, link, listItem, paragraph, sectionHeading, td, th } from "./shared";

const faqs = [
  {
    question: "What is the correct mix ratio for concrete by hand?",
    answer:
      "For general purpose work such as slabs and footings, a 1:2:3 ratio by volume (1 part cement, 2 parts sand, 3 parts coarse aggregate) is widely used. For lighter, non-structural work, a 1:2:4 ratio is common. Always add water gradually — the mix should hold its shape when squeezed without being wet or crumbly.",
  },
  {
    question: "How much water should I add to concrete?",
    answer:
      "Water is added gradually until the mix holds its shape when squeezed and releases no free water. Adding too much water weakens the final concrete significantly. A water-to-cement ratio of 0.45 to 0.55 by weight is typical for hand-mixed concrete, but in practice the squeeze test is the most reliable guide on site.",
  },
  {
    question: "How much concrete can I mix by hand?",
    answer:
      "Hand mixing becomes impractical above roughly 0.1 cubic meters (about 100 litres) per batch. Beyond that volume, consistency suffers and the physical effort becomes excessive. For larger pours, a drum mixer or ready-mix delivery is more practical.",
  },
  {
    question: "How long does hand-mixed concrete take to set?",
    answer:
      "Initial set typically occurs within 2 to 4 hours depending on temperature, humidity, and cement type. Concrete reaches most of its design strength at 28 days, though it continues to gain strength slowly after that. Avoid loading or disturbing the pour for at least 24 hours.",
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
  headline: "How to Mix Concrete by Hand: Ratios, Water, and Technique",
  description:
    "Step-by-step guide to mixing concrete by hand. Covers mix ratios, water amount, tools, and when hand mixing stops being practical.",
  url: "https://buildcalczone.com/guides/how-to-mix-concrete-by-hand",
};

export default function HowToMixConcreteByHandGuide() {
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
        <Breadcrumb current="How to Mix Concrete by Hand: Ratios, Water, and Technique" />
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
            Concrete
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
            How to Mix Concrete by Hand: Ratios, Water, and Technique
          </h1>
          <IntroText>
            For small pours — a fence post, a garden step, a small slab — mixing
            concrete by hand is straightforward and doesn&apos;t require a drum
            mixer. The key variables are the mix ratio, the amount of water, and
            the mixing sequence. Get those right and the result is the same as
            any other method.
          </IntroText>
        </header>

        <h2 style={sectionHeading}>Mix ratios</h2>
        <p style={paragraph}>
          Concrete is made from cement, sand (fine aggregate), and coarse
          aggregate (gravel or crushed stone), combined in proportions that
          determine the final strength. The ratios below are by volume:
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Ratio (cement:sand:aggregate)</th>
              <th style={th}>Typical use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>1:2:3</td>
              <td style={td}>General slabs, footings, driveways</td>
            </tr>
            <tr>
              <td style={td}>1:2:4</td>
              <td style={td}>Non-structural work, garden paths, fence posts</td>
            </tr>
            <tr>
              <td style={td}>1:3:6</td>
              <td style={td}>
                Mass fill, blinding layers, very low-load applications
              </td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          These ratios are for site-mixed concrete using separate materials. If
          you&apos;re using bagged pre-mix concrete, the proportions are already
          set — just add water according to the bag instructions.
        </NoteBox>

        <h2 style={sectionHeading}>How much water to add</h2>
        <p style={paragraph}>
          Water is the most common point of failure in hand-mixed concrete. Too
          much water makes the mix easier to work but significantly reduces
          final strength — water dilutes the cement paste that binds everything
          together.
        </p>
        <p style={paragraph}>
          The practical test on site: squeeze a handful of mixed concrete. It
          should hold its shape clearly and feel firm, with no water bleeding
          out. If it crumbles, it needs a little more water. If water appears on
          the surface when squeezed, it&apos;s too wet.
        </p>
        <p style={paragraph}>
          Add water in small amounts and mix thoroughly between additions.
          It&apos;s much easier to add more water than to fix an over-watered
          mix.
        </p>

        <h2 style={sectionHeading}>Mixing sequence</h2>
        <p style={paragraph}>
          Mixing in the right order ensures the cement distributes evenly before
          water is introduced:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
          <li style={listItem}>
            Combine the dry materials first — cement, sand, and aggregate —
            until the colour is uniform with no streaks
          </li>
          <li style={listItem}>Make a well in the centre of the dry mix</li>
          <li style={listItem}>
            Add roughly two-thirds of your estimated water into the well
          </li>
          <li style={listItem}>
            Work from the outside in, folding dry material into the water
          </li>
          <li style={listItem}>
            Add remaining water gradually until the mix passes the squeeze test
          </li>
          <li style={listItem}>
            Mix for at least 3 to 5 minutes after the last water addition to
            ensure full hydration
          </li>
        </ul>

        <h2 style={sectionHeading}>Tools</h2>
        <p style={paragraph}>
          For small batches under about 50 litres, a mixing board (a sheet of
          plywood works) and a square-ended spade or mortar hoe are sufficient.
          For batches up to around 100 litres, a large wheelbarrow and a mixing
          hoe give more room to work. Beyond that volume, hand mixing becomes
          inconsistent and physically demanding — a drum mixer is worth hiring
          for anything larger.
        </p>

        <h2 style={sectionHeading}>When hand mixing stops being practical</h2>
        <p style={paragraph}>
          Hand mixing is generally practical up to around 0.1 cubic meters (100
          litres) per batch. Above that, maintaining a consistent mix becomes
          difficult and the time and effort required outweigh the cost of hiring
          a drum mixer or ordering ready-mix. For any structural element — a
          foundation, a load-bearing column — ready-mix concrete from a supplier
          is preferable regardless of volume, since plant-mixed concrete has
          tighter quality control than site mixing.
        </p>
        <NoteBox>
          For structural work, consult a qualified engineer before specifying
          mix ratios or concrete grades. The ratios above are for general
          guidance on non-structural and lightly loaded applications.
        </NoteBox>

        <h2 style={sectionHeading}>Putting it together</h2>
        <p style={paragraph}>
          Before mixing, work out how much concrete you actually need —
          it&apos;s easy to under-estimate and run short mid-pour. Our{" "}
          <Link href="/concrete-calculator" style={link}>
            concrete calculator
          </Link>{" "}
          gives volume in m³ with waste percentage included, and our{" "}
          <Link href="/concrete-bags" style={link}>
            concrete bag calculator
          </Link>{" "}
          converts that directly into bag counts for 40lb, 60lb, and 80lb bags.
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
