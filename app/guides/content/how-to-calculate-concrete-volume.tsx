import { Breadcrumb, IntroText, formula, link, listItem, paragraph, sectionHeading } from "./shared";
const faqs = [
  {
    question: "How much concrete do I need for a 10x10 slab?",
    answer:
      "At a standard 4-inch (10cm) thickness, a 10x10 ft slab needs about 1.23 cubic yards before waste. Adding a 10% waste margin brings that to roughly 1.35 cubic yards, or about 36.5 cubic feet.",
  },
  {
    question: "Do I need to add extra concrete for waste?",
    answer:
      "Yes — most professionals add 5-10% to account for uneven ground, spillage, and minor formwork variations. Skipping this often means running short and needing a second delivery.",
  },
  {
    question: "How many 80lb bags of concrete do I need per cubic yard?",
    answer:
      "One cubic yard requires roughly 45 bags of 80lb concrete mix, since each bag yields about 0.022 cubic yards of mixed concrete, though this can vary slightly by brand.",
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
  headline: "How to Calculate Concrete Volume (and How Much You Actually Need)",
  description:
    "Learn how to calculate concrete volume for slabs, footings and columns. Includes waste percentage tips, unit conversions, and bag vs ready-mix guidance.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://buildcalczone.com/guides/how-to-calculate-concrete-volume" },
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
  author: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  publisher: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  image: { "@type": "ImageObject", url: "https://buildcalczone.com/opengraph-image", width: 1200, height: 630 },
};

export default function ConcreteVolumeGuide() {
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
        <Breadcrumb current="How to Calculate Concrete Volume (and How Much You Actually Need)" />
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
            How to Calculate Concrete Volume (and How Much You Actually Need)
          </h1>
          <IntroText>
            If you&apos;ve ever poured concrete and ended up with three extra
            bags sitting in your driveway — or worse, run short halfway through
            a slab — you know why getting the volume right matters. The good
            news is the math itself is simple. The part people usually get wrong
            isn&apos;t the formula, it&apos;s the inputs.
          </IntroText>
        </header>

        <h2 style={sectionHeading}>The basic formula</h2>
        <p style={paragraph}>Concrete volume comes down to one calculation:</p>
        <div style={formula}>Volume = Length × Width × Depth</div>
        <p style={paragraph}>
          That gives you volume in cubic units — cubic meters if you&apos;re
          working in meters, cubic feet if you&apos;re working in feet. For a
          slab, &quot;depth&quot; just means thickness. A 4m × 3m patio poured
          at 10cm thick works out to:
        </p>
        <div style={formula}>4 × 3 × 0.10 = 1.2 cubic meters</div>
        <p style={paragraph}>
          That&apos;s the theoretical minimum. In practice, you&apos;ll want to
          order more than that, and here&apos;s why.
        </p>

        <h2 style={sectionHeading}>
          Why you should always add waste percentage
        </h2>
        <p style={paragraph}>
          No pour is perfectly flat, and no slab has perfectly straight edges.
          Ground isn&apos;t level, formwork shifts slightly, and some concrete
          gets lost to spillage, over-excavation, or simply settling into low
          spots you didn&apos;t account for. Contractors typically build in a
          5–10% waste margin to cover this.
        </p>
        <p style={paragraph}>
          So that 1.2 cubic meter patio? Add 10% waste and you&apos;re looking
          at about 1.32 cubic meters. It might not sound like much, but running
          short mid-pour means calling for a second truck — and that&apos;s a
          logistical headache (and often an extra delivery fee) nobody wants on
          pour day.
        </p>
        <p style={paragraph}>A rough rule of thumb:</p>
        <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
          <li style={listItem}>
            Small DIY jobs (fence posts, stepping stones): 5% waste is usually
            enough
          </li>
          <li style={listItem}>
            Slabs, footings, driveways: 10% is the safer bet
          </li>
          <li style={listItem}>
            Irregular shapes or uneven ground: closer to 15%
          </li>
        </ul>

        <h2 style={sectionHeading}>Common shapes and how to handle them</h2>
        <p style={paragraph}>
          <strong>Rectangular slabs and footings</strong> are the easiest — just
          multiply length, width, and depth as shown above.
        </p>
        <p style={paragraph}>
          <strong>Columns and round footings</strong> use a different formula
          since you&apos;re working with a circle:
        </p>
        <div style={formula}>Volume = π × radius² × height</div>
        <p style={paragraph}>
          For a column with a 0.3m diameter (so a 0.15m radius) and 2m height:
        </p>
        <div style={formula}>3.1416 × 0.15² × 2 ≈ 0.14 cubic meters</div>
        <p style={paragraph}>
          <strong>L-shaped or irregular slabs</strong> are best handled by
          breaking the area into smaller rectangles, calculating each one
          separately, then adding them together.
        </p>

        <h2 style={sectionHeading}>Converting between units</h2>
        <p style={paragraph}>
          If you&apos;re working between metric and imperial — say, your
          supplier quotes in cubic yards but you&apos;ve calculated in cubic
          meters — the conversion factor is:
        </p>
        <div style={formula}>1 cubic meter ≈ 1.308 cubic yards</div>
        <p style={paragraph}>
          So 1.32 cubic meters comes out to roughly 1.73 cubic yards. Ready-mix
          suppliers in the US typically sell by the cubic yard, often with a
          minimum order (commonly around 1 yard), so it&apos;s worth checking
          with your supplier before finalizing quantities. For a full conversion
          table and more detail on working between units, see our{" "}
          <a href="/guides/cubic-yards-to-cubic-meters" style={link}>
            cubic yards to cubic meters guide
          </a>
          .
        </p>

        <h2 style={sectionHeading}>Bagged concrete vs. ready-mix</h2>
        <p style={paragraph}>
          For smaller jobs, bagged concrete mix is often more practical than
          ordering a truck. As a rough guide, based on standard cubic yard
          yields:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
          <li style={listItem}>
            An 80lb bag yields about 0.6 cubic feet (0.022 cubic yards) of mixed
            concrete — about 45 bags per cubic yard
          </li>
          <li style={listItem}>
            A 60lb bag yields about 0.45 cubic feet (0.017 cubic yards) — about
            60 bags per cubic yard
          </li>
          <li style={listItem}>
            A 40lb bag yields about 0.3 cubic feet (0.011 cubic yards) — about
            90 bags per cubic yard
          </li>
        </ul>
        <p style={paragraph}>
          So for that 1.32 cubic meter (≈1.73 cubic yard) patio, you&apos;d need
          roughly 78 × 80lb bags (1.73 × 45 ≈ 78) — though buying a few
          extra is wise in case of spillage or a thicker pour than planned.
        </p>

        <h2 style={sectionHeading}>Putting it together</h2>
        <p style={paragraph}>
          Once you know your length, width, and depth, the rest is just plugging
          numbers in — but the waste margin and unit conversions are where most
          estimating errors happen. If you&apos;d rather skip the manual math,
          our{" "}
          <a href="/concrete-calculator" style={link}>
            concrete calculator
          </a>{" "}
          handles the volume calculation with waste percentage built in, and our{" "}
          <a href="/concrete-bags" style={link}>
            concrete bag calculator
          </a>{" "}
          converts that volume directly into bag counts for 40lb, 60lb, and 80lb
          bags.
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
