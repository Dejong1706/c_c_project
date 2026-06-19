import Link from "next/link";
import { Breadcrumb, GuideTable, IntroText, NoteBox, formula, link, listItem, paragraph, sectionHeading, td, th } from "./shared";

const faqs = [
  {
    question: "What is the standard brick size in the UK?",
    answer:
      "The standard UK brick (as per BS EN 771-1) is 215 × 102.5 × 65 mm. With a 10 mm mortar joint, the coordinating size becomes 225 × 112.5 × 75 mm. This is the most common brick used in residential and commercial construction across England, Scotland, Wales, and Northern Ireland.",
  },
  {
    question: "Are US bricks the same size as UK bricks?",
    answer:
      "No. The standard US modular brick (ASTM C652) is 194 × 92 × 57 mm (nominal 203 × 102 × 67 mm with mortar). It is slightly smaller in length and height than the UK standard. This means brick counts per square metre differ between US and UK projects — always check which standard your supplier uses.",
  },
  {
    question: "What is a metric brick vs an imperial brick?",
    answer:
      "Imperial bricks (pre-1969 UK) measured 9 × 4.5 × 3 inches (229 × 114 × 76 mm). When the UK switched to metric in 1969, the standard changed to 215 × 102.5 × 65 mm. The metric brick is slightly smaller, so the two are not directly interchangeable in coursing calculations without adjustment.",
  },
  {
    question: "Why do brick sizes vary by country?",
    answer:
      "Sizes reflect each country's historical building standards, climate requirements, and masonry traditions. Larger bricks (like those used in Australia and South Africa) lay faster and suit thicker load-bearing walls. Smaller bricks offer finer coursing detail. Each national standard body (BSI, ASTM, Standards Australia, etc.) sets the accepted tolerances for their region.",
  },
  {
    question: "What is the standard brick size in Australia?",
    answer:
      "The standard Australian brick (AS/NZS 4455) is 230 × 110 × 76 mm. With a 10 mm mortar joint, the coordinating size is 240 × 120 × 86 mm. Australia also commonly uses a 'standard' 230 × 110 × 76 mm and a 'modular' 290 × 90 × 90 mm brick depending on the application.",
  },
  {
    question: "How does brick size affect how many bricks I need?",
    answer:
      "Directly — a larger brick covers more wall area per unit, so you need fewer bricks per square metre. For example, UK standard bricks require about 60 bricks/m² (half-brick wall), while Australian standard bricks require about 50 bricks/m². Always use the correct brick size for your region when calculating quantities.",
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
  headline: "Standard Brick Sizes by Country",
  description:
    "A complete reference guide to standard brick dimensions in the UK, US, Australia, Europe, and beyond — with coordinating sizes, mortar joints, and bricks per m².",
  url: "https://buildcalczone.com/guides/standard-brick-sizes-by-country",
};

export default function StandardBrickSizesByCountry() {
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
        <Breadcrumb current="Standard Brick Sizes by Country" />
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
            Standard Brick Sizes by Country
          </h1>
          <IntroText>
            Brick dimensions vary significantly between countries. Using the
            wrong size in your calculations leads to incorrect material orders.
            This guide covers the standard work sizes, coordinating sizes (with
            mortar), and approximate brick counts per m² for the most common
            building regions worldwide.
          </IntroText>
        </header>

        {/* What "work size" and "coordinating size" mean */}
        <h2 style={sectionHeading}>Work Size vs Coordinating Size</h2>
        <p style={paragraph}>
          Every brick standard distinguishes between two dimensions:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={listItem}>
            <strong>Work size</strong> — the actual manufactured brick dimension
            (length × width × height).
          </li>
          <li style={listItem}>
            <strong>Coordinating size</strong> — work size plus one mortar joint
            on each relevant face. Most countries assume a 10 mm joint, making
            the coordinating size 10 mm larger in each direction.
          </li>
        </ul>
        <p style={paragraph}>
          Brick counts per m² are always calculated using the coordinating size,
          not the bare work size.
        </p>
        <div style={formula}>
          Bricks per m² = 1,000 mm ÷ (length + joint) × 1,000 mm ÷ (height +
          joint)
        </div>
        <NoteBox>
          The formula above applies to a half-brick (single-leaf) wall. Double
          the count for a full-brick wall.
        </NoteBox>

        {/* UK */}
        <h2 style={sectionHeading}>United Kingdom</h2>
        <p style={paragraph}>
          The UK standard is defined by <strong>BS EN 771-1</strong>. The metric
          standard brick replaced the imperial brick in 1969.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Type</th>
              <th style={th}>Work Size (L × W × H)</th>
              <th style={th}>Coordinating Size</th>
              <th style={th}>Bricks/m² (half-brick)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Standard (metric)</td>
              <td style={td}>215 × 102.5 × 65 mm</td>
              <td style={td}>225 × 112.5 × 75 mm</td>
              <td style={td}>~60</td>
            </tr>
            <tr>
              <td style={td}>Imperial (pre-1969)</td>
              <td style={td}>229 × 114 × 76 mm</td>
              <td style={td}>239 × 124 × 86 mm</td>
              <td style={td}>~48</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          Imperial bricks are still found in renovation work on older
          properties. They are not interchangeable with metric bricks in
          coursing — mixing the two changes joint spacing.
        </NoteBox>

        {/* USA */}
        <h2 style={sectionHeading}>United States</h2>
        <p style={paragraph}>
          US brick sizes are governed by <strong>ASTM C652</strong> and{" "}
          <strong>ASTM C216</strong>. The most common type is the modular brick.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Type</th>
              <th style={th}>Work Size (L × W × H)</th>
              <th style={th}>Nominal Size (with 3/8″ joint)</th>
              <th style={th}>Bricks/m² (approx)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Modular</td>
              <td style={td}>194 × 92 × 57 mm</td>
              <td style={td}>203 × 102 × 67 mm</td>
              <td style={td}>~73</td>
            </tr>
            <tr>
              <td style={td}>Standard (non-modular)</td>
              <td style={td}>203 × 95 × 57 mm</td>
              <td style={td}>213 × 102 × 67 mm</td>
              <td style={td}>~70</td>
            </tr>
            <tr>
              <td style={td}>Queen</td>
              <td style={td}>194 × 73 × 70 mm</td>
              <td style={td}>203 × 83 × 79 mm</td>
              <td style={td}>~62</td>
            </tr>
            <tr>
              <td style={td}>King</td>
              <td style={td}>194 × 70 × 70 mm</td>
              <td style={td}>203 × 83 × 79 mm</td>
              <td style={td}>~62</td>
            </tr>
            <tr>
              <td style={td}>Jumbo Modular</td>
              <td style={td}>194 × 92 × 70 mm</td>
              <td style={td}>203 × 102 × 79 mm</td>
              <td style={td}>~62</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          US bricks use a 3/8 inch (9.5 mm) mortar joint as standard, slightly
          less than the 10 mm used in most other countries.
        </NoteBox>

        {/* Australia */}
        <h2 style={sectionHeading}>Australia & New Zealand</h2>
        <p style={paragraph}>
          Australian and New Zealand bricks conform to{" "}
          <strong>AS/NZS 4455</strong>. Australian construction uses a 10 mm
          mortar joint.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Type</th>
              <th style={th}>Work Size (L × W × H)</th>
              <th style={th}>Coordinating Size</th>
              <th style={th}>Bricks/m² (half-brick)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Standard</td>
              <td style={td}>230 × 110 × 76 mm</td>
              <td style={td}>240 × 120 × 86 mm</td>
              <td style={td}>~48</td>
            </tr>
            <tr>
              <td style={td}>Modular</td>
              <td style={td}>290 × 90 × 90 mm</td>
              <td style={td}>300 × 100 × 100 mm</td>
              <td style={td}>~33</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          The Australian standard brick is larger than UK and US equivalents,
          which is why fewer bricks per m² are needed. Always confirm with your
          supplier — some Australian manufacturers produce slightly non-standard
          sizes.
        </NoteBox>

        {/* Europe */}
        <h2 style={sectionHeading}>Europe (EN Standard)</h2>
        <p style={paragraph}>
          Most European countries follow <strong>EN 771-1</strong> but each
          country maintains its own preferred format within that standard. The
          most widely used across continental Europe is the DF (Dünnformat /
          thin format) brick.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Format</th>
              <th style={th}>Country / Region</th>
              <th style={th}>Work Size (L × W × H)</th>
              <th style={th}>Bricks/m² (half-brick)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>DF (Dünnformat)</td>
              <td style={td}>Germany, Austria, CH</td>
              <td style={td}>240 × 115 × 52 mm</td>
              <td style={td}>~79</td>
            </tr>
            <tr>
              <td style={td}>NF (Normalformat)</td>
              <td style={td}>Germany (older)</td>
              <td style={td}>240 × 115 × 71 mm</td>
              <td style={td}>~52</td>
            </tr>
            <tr>
              <td style={td}>WDF (Waalformat)</td>
              <td style={td}>Netherlands, Belgium</td>
              <td style={td}>210 × 100 × 50 mm</td>
              <td style={td}>~88</td>
            </tr>
            <tr>
              <td style={td}>Standard</td>
              <td style={td}>France</td>
              <td style={td}>220 × 105 × 57 mm</td>
              <td style={td}>~74</td>
            </tr>
          </tbody>
        </GuideTable>

        {/* South Africa */}
        <h2 style={sectionHeading}>South Africa</h2>
        <p style={paragraph}>
          South African bricks are governed by <strong>SANS 227</strong>. Two
          sizes dominate the market.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Type</th>
              <th style={th}>Work Size (L × W × H)</th>
              <th style={th}>Coordinating Size</th>
              <th style={th}>Bricks/m² (half-brick)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Standard</td>
              <td style={td}>222 × 106 × 73 mm</td>
              <td style={td}>232 × 116 × 83 mm</td>
              <td style={td}>~52</td>
            </tr>
            <tr>
              <td style={td}>Maxi</td>
              <td style={td}>290 × 140 × 90 mm</td>
              <td style={td}>300 × 150 × 100 mm</td>
              <td style={td}>~33</td>
            </tr>
          </tbody>
        </GuideTable>

        {/* India */}
        <h2 style={sectionHeading}>India</h2>
        <p style={paragraph}>
          Indian standard bricks are defined by <strong>IS 1077</strong>. The
          modular brick was introduced to replace older non-modular sizes.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Type</th>
              <th style={th}>Work Size (L × W × H)</th>
              <th style={th}>Coordinating Size</th>
              <th style={th}>Bricks/m² (half-brick)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Modular</td>
              <td style={td}>190 × 90 × 90 mm</td>
              <td style={td}>200 × 100 × 100 mm</td>
              <td style={td}>~50</td>
            </tr>
            <tr>
              <td style={td}>Non-modular (traditional)</td>
              <td style={td}>230 × 110 × 70 mm</td>
              <td style={td}>240 × 120 × 80 mm</td>
              <td style={td}>~52</td>
            </tr>
          </tbody>
        </GuideTable>

        {/* Summary table */}
        <h2 style={sectionHeading}>Quick Reference: Bricks per m²</h2>
        <p style={paragraph}>
          This table summarises the approximate number of bricks needed per m²
          of half-brick (single-leaf) wall using each country&apos;s most common
          standard brick and a 10 mm mortar joint.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Country</th>
              <th style={th}>Standard</th>
              <th style={th}>Work Size (mm)</th>
              <th style={th}>Bricks/m²</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>UK</td>
              <td style={td}>BS EN 771-1</td>
              <td style={td}>215 × 102.5 × 65</td>
              <td style={td}>~60</td>
            </tr>
            <tr>
              <td style={td}>USA (modular)</td>
              <td style={td}>ASTM C652</td>
              <td style={td}>194 × 92 × 57</td>
              <td style={td}>~73</td>
            </tr>
            <tr>
              <td style={td}>Australia</td>
              <td style={td}>AS/NZS 4455</td>
              <td style={td}>230 × 110 × 76</td>
              <td style={td}>~48</td>
            </tr>
            <tr>
              <td style={td}>Germany (DF)</td>
              <td style={td}>EN 771-1</td>
              <td style={td}>240 × 115 × 52</td>
              <td style={td}>~79</td>
            </tr>
            <tr>
              <td style={td}>Netherlands</td>
              <td style={td}>EN 771-1</td>
              <td style={td}>210 × 100 × 50</td>
              <td style={td}>~88</td>
            </tr>
            <tr>
              <td style={td}>South Africa</td>
              <td style={td}>SANS 227</td>
              <td style={td}>222 × 106 × 73</td>
              <td style={td}>~52</td>
            </tr>
            <tr>
              <td style={td}>India (modular)</td>
              <td style={td}>IS 1077</td>
              <td style={td}>190 × 90 × 90</td>
              <td style={td}>~50</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          All bricks/m² figures are for a half-brick (single-leaf) wall with a
          10 mm mortar joint. Add 5–10% for waste and cuts.
        </NoteBox>

        {/* Mortar joint note */}
        <h2 style={sectionHeading}>How Mortar Joint Size Affects Your Count</h2>
        <p style={paragraph}>
          A standard 10 mm mortar joint is assumed in most national standards.
          If your project uses a different joint size — for example, 8 mm for a
          tighter finish or 15 mm for rough blockwork — your brick count will
          change.
        </p>
        <p style={paragraph}>Using UK standard bricks as an example:</p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Joint Size</th>
              <th style={th}>Coordinating Height</th>
              <th style={th}>Bricks/m²</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>8 mm</td>
              <td style={td}>73 mm</td>
              <td style={td}>~63</td>
            </tr>
            <tr>
              <td style={td}>10 mm (standard)</td>
              <td style={td}>75 mm</td>
              <td style={td}>~60</td>
            </tr>
            <tr>
              <td style={td}>12 mm</td>
              <td style={td}>77 mm</td>
              <td style={td}>~58</td>
            </tr>
          </tbody>
        </GuideTable>
        <p style={paragraph}>
          For a precise material estimate, use our{" "}
          <Link href="/brick-calculator" style={link}>
            Brick Calculator
          </Link>{" "}
          — it lets you set your own joint size and wall dimensions.
        </p>

        {/* Related guides */}
        <h2 style={sectionHeading}>Related Guides</h2>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={{ ...listItem }}>
            <Link href="/guides/how-many-bricks-per-square-metre" style={link}>
              How Many Bricks Per Square Metre?
            </Link>{" "}
            — detailed calculation walkthrough
          </li>
          <li style={{ ...listItem }}>
            <Link href="/guides/brick-mortar-mix-ratio" style={link}>
              Brick Mortar Mix Ratio Guide
            </Link>{" "}
            — getting the right mix for your application
          </li>
        </ul>

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
