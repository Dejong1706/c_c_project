import Link from "next/link";
import {
  Breadcrumb,
  GuideTable,
  NoteBox,
  formula,
  paragraph,
  sectionHeading,
  td,
  th,
} from "./shared";

const faqs = [
  {
    question: "How many fence posts do I need for 100 feet?",
    answer:
      "For 100 ft with standard 8 ft spacing: divide 100 by 8 (= 12.5), round up to 13 sections, then add 1 post = 14 posts total. Add 2 extra posts per gate opening.",
  },
  {
    question: "How far apart should fence posts be?",
    answer:
      "8 feet on centre is standard for most wood and vinyl fences. Use 6 ft for fences over 6 ft tall or in high-wind areas. Chain-link fences typically use 10 ft spacing.",
  },
  {
    question: "How deep should fence posts be set?",
    answer:
      "At least 1/3 of the total post length — so a 6 ft fence needs 8 ft posts with 2 ft buried. In cold climates, always go below the local frost line (36–48 inches in northern regions).",
  },
  {
    question: "Why do I get an uneven last bay?",
    answer:
      "Because fence length rarely divides evenly by your desired spacing. Fix it by using adjusted spacing: divide your total length by the number of bays (posts minus 1). This spreads the difference evenly across all sections.",
  },
  {
    question: "How many rails do I need per section?",
    answer:
      "Use 2 rails for fences under 5 ft, 3 rails for 5–7 ft fences, and 4 rails for 8 ft fences. Rails run horizontally between posts and carry the pickets or boards.",
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
  headline: "How to Calculate Fence Post Spacing",
  description:
    "Step-by-step guide to calculating fence post spacing, post count, burial depth, rail count, and concrete needs for wood, vinyl, and chain-link fences.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://buildcalczone.com/guides/how-to-calculate-fence-post-spacing" },
  datePublished: "2026-06-25",
  dateModified: "2026-06-25",
  author: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  publisher: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  image: { "@type": "ImageObject", url: "https://buildcalczone.com/opengraph-image", width: 1200, height: 630 },
};

export default function FencePostSpacingGuide() {
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
        <Breadcrumb current="How to Calculate Fence Post Spacing" />
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
            Fencing
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
            How to Calculate Fence Post Spacing
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            Getting post spacing right determines how strong your fence stands
            and how professional it looks. Space posts too far apart and rails
            sag; too close and you waste material. Here&apos;s how to work it
            out precisely.
          </p>
        </header>

        {/* Step 1 */}
        <h2 style={sectionHeading}>Step 1 — Choose your post spacing</h2>
        <p style={paragraph}>
          Post spacing depends on fence type, height, and wind exposure. These
          are the industry-standard spacings used by professional fencing
          contractors:
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Fence type</th>
              <th style={th}>Standard spacing</th>
              <th style={th}>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Wood privacy</td>
              <td style={td}>8 ft (2.4 m)</td>
              <td style={td}>Reduce to 6 ft for 7–8 ft tall or windy areas</td>
            </tr>
            <tr>
              <td style={td}>Vinyl panel</td>
              <td style={td}>6 or 8 ft</td>
              <td style={td}>
                Match panel width exactly — vinyl can&apos;t be cut
              </td>
            </tr>
            <tr>
              <td style={td}>Chain link</td>
              <td style={td}>10 ft (3 m)</td>
              <td style={td}>
                Mesh doesn&apos;t catch wind, wider spacing is fine
              </td>
            </tr>
            <tr>
              <td style={td}>Split rail</td>
              <td style={td}>8–10 ft</td>
              <td style={td}>Decorative only — strength less critical</td>
            </tr>
          </tbody>
        </GuideTable>

        {/* Step 2 */}
        <h2 style={sectionHeading}>Step 2 — Calculate number of posts</h2>
        <p style={paragraph}>The formula for a straight fence run is:</p>
        <div style={formula}>Posts = ⌈Fence length ÷ Post spacing⌉ + 1</div>
        <p style={paragraph}>
          The ⌈ ⌉ symbol means round up to the nearest whole number. Always
          round up — never down — or your last section will be too wide.
        </p>
        <p style={paragraph}>
          <strong>Example:</strong> 100 ft fence, 8 ft spacing:
        </p>
        <div style={formula}>
          ⌈100 ÷ 8⌉ + 1 = ⌈12.5⌉ + 1 = 13 + 1 = 14 posts
        </div>
        <p style={paragraph}>
          If your fence includes gates, add 2 posts per gate opening — one on
          each side.
        </p>
        <div style={formula}>Total posts = Line posts + (Gates × 2)</div>

        {/* Step 3 */}
        <h2 style={sectionHeading}>Step 3 — Adjust to even bay spacing</h2>
        <p style={paragraph}>
          After calculating post count, work backwards to get perfectly even
          spacing. This prevents an awkward short bay at the end of your run.
        </p>
        <div style={formula}>Adjusted spacing = Fence length ÷ (Posts − 1)</div>
        <p style={paragraph}>
          <strong>Example:</strong> 100 ft fence, 14 posts:
        </p>
        <div style={formula}>100 ÷ (14 − 1) = 100 ÷ 13 = 7.69 ft per bay</div>
        <NoteBox>
          Set your corner and end posts first, then string a line between them.
          Divide the string into equal sections and mark each post position.
          This gives a clean, professional result.
        </NoteBox>

        {/* Step 4 */}
        <h2 style={sectionHeading}>
          Step 4 — Calculate post length and burial depth
        </h2>
        <p style={paragraph}>
          Every post needs to be buried deep enough to stay rigid. The rule is:
        </p>
        <div style={formula}>Burial depth = max(Fence height ÷ 3, 2 ft)</div>
        <p style={paragraph}>
          So a 6 ft fence needs posts buried at least 2 ft (6 ÷ 3 = 2). Total
          post length = fence height + burial depth. A 6 ft fence uses 8 ft
          posts.
        </p>
        <p style={paragraph}>
          In cold climates, burial depth must go below the local frost line
          regardless of the 1/3 rule. Frost lines range from 24 inches in mild
          regions to 48+ inches in northern states and Canada. Check your local
          building code.
        </p>

        {/* Step 5 */}
        <h2 style={sectionHeading}>Step 5 — Count rails</h2>
        <p style={paragraph}>
          Rails are the horizontal boards that run between posts. The number you
          need per section depends on fence height:
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Fence height</th>
              <th style={th}>Rails per section</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Under 5 ft</td>
              <td style={td}>2 rails</td>
            </tr>
            <tr>
              <td style={td}>5 – 7 ft</td>
              <td style={td}>3 rails</td>
            </tr>
            <tr>
              <td style={td}>8 ft</td>
              <td style={td}>4 rails</td>
            </tr>
          </tbody>
        </GuideTable>
        <div style={formula}>
          Total rails = Number of bays × Rails per section
        </div>

        {/* Step 6 */}
        <h2 style={sectionHeading}>Step 6 — Estimate concrete</h2>
        <p style={paragraph}>
          Each post needs a concrete footing. For a standard 4×4 post in a
          12-inch diameter hole about 24 inches deep, use 2 bags of 80 lb
          quick-setting concrete per post. Deeper holes (36+ inches) need 3–4
          bags.
        </p>
        <div style={formula}>Concrete bags = Total posts × 2</div>
        <NoteBox>
          Dig holes 3× the post width in diameter — so 12 inches for a 4×4 post.
          Add 4–6 inches of gravel at the bottom for drainage before setting the
          post. Crown the concrete above grade to shed water away from the post
          base.
        </NoteBox>

        {/* Calculator CTA */}
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
            Skip the manual calculation
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-2)",
              marginBottom: "12px",
            }}
          >
            Enter your fence length, height, and spacing to get posts, rails,
            concrete, and pickets in one step.
          </p>
          <Link
            href="/fence-calculator"
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
            Use the Fence Calculator →
          </Link>
        </div>

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
