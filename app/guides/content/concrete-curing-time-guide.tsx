import Link from "next/link";
import {
  Breadcrumb,
  GuideTable,
  NoteBox,
  formula,
  listItem,
  paragraph,
  sectionHeading,
  td,
  th,
} from "./shared";

const faqs = [
  {
    question: "How long does concrete take to cure?",
    answer:
      "Concrete reaches walkable strength in 24–48 hours, 75% of design strength at 7 days, and full 28-day design strength at 28 days under ideal conditions (60–80°F with continuous wet curing). It continues gaining strength slowly beyond 28 days.",
  },
  {
    question: "Can you walk on concrete after 24 hours?",
    answer:
      "Yes — foot traffic is generally safe after 24–48 hours. However, avoid heavy loads, vehicles, or concentrated point loads until at least 7 days. In cold weather (below 50°F), wait longer before applying any load.",
  },
  {
    question: "What happens if concrete dries too fast?",
    answer:
      "If concrete loses moisture too quickly — from sun, wind, or high temperatures — it won't fully hydrate and will be weaker, more porous, and prone to surface cracking (crazing). This is why wet curing for at least 7 days is essential.",
  },
  {
    question: "How does cold weather affect concrete curing?",
    answer:
      "Below 40°F, hydration slows dramatically. Concrete that freezes before reaching 500 PSI (typically in the first 24–48 hours) suffers permanent strength loss of 50% or more — damage that cannot be reversed. In cold weather, maintain the concrete above 50°F for the first 72 hours minimum using insulating blankets or heated enclosures.",
  },
  {
    question: "When can you drive on a new concrete slab?",
    answer:
      "Wait at least 7 days for passenger cars at normal temperatures (above 70°F). For temperatures between 50–70°F, wait 10–14 days. For heavy vehicles or loaded trucks, wait until full 28-day strength.",
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
  headline: "Concrete Curing Time Guide",
  description:
    "How long concrete takes to cure at every stage — 24 hours, 7 days, 28 days — and how temperature affects strength gain.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://buildcalczone.com/guides/concrete-curing-time-guide" },
  datePublished: "2026-06-25",
  dateModified: "2026-06-25",
  author: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  publisher: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  image: { "@type": "ImageObject", url: "https://buildcalczone.com/opengraph-image", width: 1200, height: 630 },
};

export default function ConcreteCuringTimeGuide() {
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
        <Breadcrumb current="Concrete Curing Time Guide" />
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
            Concrete Curing Time Guide
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            Curing is not the same as drying. Concrete gains strength through a
            chemical reaction called hydration — it needs moisture, not air, to
            reach its design strength. Rush the process and the slab will be
            permanently weaker. Here&apos;s exactly how long each stage takes
            and what affects it.
          </p>
        </header>

        <h2 style={sectionHeading}>Strength gain timeline</h2>
        <p style={paragraph}>
          Under ideal conditions — 60–80°F with continuous wet curing — standard
          concrete follows this strength curve:
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Time</th>
              <th style={th}>Strength gained</th>
              <th style={th}>What you can do</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>24 hours</td>
              <td style={td}>~10% of design strength</td>
              <td style={td}>Foot traffic only — carefully</td>
            </tr>
            <tr>
              <td style={td}>3 days</td>
              <td style={td}>~40%</td>
              <td style={td}>Light foot traffic, remove most formwork</td>
            </tr>
            <tr>
              <td style={td}>7 days</td>
              <td style={td}>~70–75%</td>
              <td style={td}>Passenger vehicles (above 70°F)</td>
            </tr>
            <tr>
              <td style={td}>14 days</td>
              <td style={td}>~90%</td>
              <td style={td}>Most residential loads</td>
            </tr>
            <tr>
              <td style={td}>28 days</td>
              <td style={td}>100% (design strength)</td>
              <td style={td}>Full load — heavy vehicles, structural use</td>
            </tr>
            <tr>
              <td style={td}>90 days+</td>
              <td style={td}>105–110%</td>
              <td style={td}>Concrete continues gaining strength slowly</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          The 28-day mark is the industry standard test point per ACI 318.
          It&apos;s not the maximum — concrete never fully stops gaining
          strength, but the rate beyond 28 days becomes negligible for practical
          purposes.
        </NoteBox>

        <h2 style={sectionHeading}>How temperature affects curing</h2>
        <p style={paragraph}>
          Temperature is the single biggest variable in how quickly — and how
          well — concrete cures.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Temperature</th>
              <th style={th}>Effect</th>
              <th style={th}>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Above 95°F (35°C)</td>
              <td style={td}>Faster early strength, weaker long-term</td>
              <td style={td}>Rapid moisture loss — wet cure aggressively</td>
            </tr>
            <tr>
              <td style={td}>60–80°F (15–27°C)</td>
              <td style={td}>Ideal curing range</td>
              <td style={td}>Reaches design strength at 28 days</td>
            </tr>
            <tr>
              <td style={td}>50–60°F (10–15°C)</td>
              <td style={td}>Slower hydration</td>
              <td style={td}>28-day strength may take 35–45 days</td>
            </tr>
            <tr>
              <td style={td}>Below 40°F (4°C)</td>
              <td style={td}>Hydration nearly stops</td>
              <td style={td}>Protect with insulating blankets or heat</td>
            </tr>
            <tr>
              <td style={td}>Below 32°F (0°C)</td>
              <td style={td}>Freezing risk — permanent damage</td>
              <td style={td}>
                Concrete that freezes before 500 PSI loses 50%+ strength
              </td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          Research confirms that curing at 100°F can reduce 28-day compressive
          strength by up to 23% compared to curing at 68°F. Hot weather concrete
          must be shaded, misted, and covered immediately after finishing.
        </NoteBox>

        <h2 style={sectionHeading}>Minimum wet curing time</h2>
        <p style={paragraph}>
          Wet curing keeps the concrete surface moist so hydration can continue.
          ACI 308R specifies a minimum of 7 days for standard Portland cement
          mixes. Cutting this short has real consequences:
        </p>
        <div style={formula}>
          Wet curing cut to 3 days → up to 20–30% reduction in 28-day
          compressive strength
        </div>
        <p style={paragraph}>Methods for wet curing include:</p>
        <ul style={{ paddingLeft: "20px", margin: "0 0 14px" }}>
          <li style={listItem}>
            <strong>Wet burlap or hessian</strong> — cover the surface and keep
            damp
          </li>
          <li style={listItem}>
            <strong>Plastic sheeting</strong> — traps moisture, no watering
            needed
          </li>
          <li style={listItem}>
            <strong>Curing compound</strong> — spray-applied membrane, used
            where wet curing isn&apos;t practical
          </li>
          <li style={listItem}>
            <strong>Ponding water</strong> — for large flat slabs in warm
            weather
          </li>
        </ul>

        <h2 style={sectionHeading}>When to apply loads</h2>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Load type</th>
              <th style={th}>Wait time (above 70°F)</th>
              <th style={th}>Wait time (50–70°F)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Foot traffic</td>
              <td style={td}>24–48 hours</td>
              <td style={td}>48–72 hours</td>
            </tr>
            <tr>
              <td style={td}>Passenger vehicles</td>
              <td style={td}>7 days</td>
              <td style={td}>10–14 days</td>
            </tr>
            <tr>
              <td style={td}>Heavy vehicles / trucks</td>
              <td style={td}>28 days</td>
              <td style={td}>28+ days</td>
            </tr>
            <tr>
              <td style={td}>Full structural load</td>
              <td style={td}>28 days</td>
              <td style={td}>28–40 days</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          For structural applications — foundations, beams, load-bearing slabs —
          always consult a structural engineer before applying loads. These
          timelines are for standard residential flatwork.
        </NoteBox>

        {/* CTA */}
        <div
          style={{
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            padding: "16px 20px",
            margin: "24px 0",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--text-1)",
              marginBottom: "6px",
            }}
          >
            Need to estimate concrete volume?
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-2)",
              marginBottom: "12px",
            }}
          >
            Use the Concrete Calculator to get cubic yards, bags, and mix ratios
            for your slab.
          </p>
          <Link
            href="/concrete-calculator"
            style={{
              display: "inline-block",
              background: "var(--accent)",
              color: "#fff",
              padding: "8px 18px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Use the Concrete Calculator →
          </Link>
        </div>

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
