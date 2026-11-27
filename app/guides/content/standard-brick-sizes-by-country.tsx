import Link from "next/link";
import { Breadcrumb, GuideTable, IntroText, NoteBox, formula, link, listItem, paragraph, sectionHeading, td, th, RelatedGuides } from "./shared";

const faqs = [
  {
    question: "What is the standard brick size in the UK?",
    answer:
      "215 × 102.5 × 65 mm (length × width × height). This is the work size, the size the brick is made to. UK brickwork is laid with a nominal 10 mm mortar joint, so the co-ordinating size, brick plus one joint, is 225 × 112.5 × 75 mm. BS EN 771-1 is the European product standard UK clay bricks are made to; it sets how size tolerances are tested and declared rather than fixing the 215 mm size itself.",
  },
  {
    question: "Are US bricks the same size as UK bricks?",
    answer:
      "No. The US modular brick is specified as 3⅝ × 2¼ × 7⅝ in (92 × 57 × 194 mm). With a ⅜ in joint it lays to a nominal 4 × 2⅔ × 8 in (102 × 68 × 203 mm), so three courses rise 8 in. The UK brick is longer and taller, so the two need different brick counts per square metre: about 73 for US modular against about 60 for UK standard, both without waste.",
  },
  {
    question: "What is the standard brick size in Australia?",
    answer:
      "PGH Bricks, an Australian manufacturer, gives the 'standard' brick as 230 × 110 × 76 mm (length × width × height) and notes that not every maker follows it exactly. With a 10 mm joint that works out at about 48 bricks per square metre of single-leaf wall, before waste. Check the actual size on your supplier's data sheet.",
  },
  {
    question: "How does brick size affect how many bricks I need?",
    answer:
      "The count per square metre is 1 ÷ (brick length + joint) ÷ (brick height + joint), with sizes in metres. A larger face means fewer bricks: about 60 per m² for UK standard bricks with 10 mm joints and about 48 for the Australian 230 × 76 mm face. Both are for a single-leaf (half-brick) wall before waste.",
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
    "Standard brick sizes in the UK, US, Australia, Germany and the Netherlands, with joint sizes and bricks per m², taken from industry and manufacturer sources.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://buildcalczone.com/guides/standard-brick-sizes-by-country" },
  datePublished: "2026-06-16",
  dateModified: "2026-11-27",
  author: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  publisher: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  image: { "@type": "ImageObject", url: "https://buildcalczone.com/opengraph-image", width: 1200, height: 630 },
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
            Brick dimensions differ between countries, and a count worked out
            for the wrong size gives the wrong order. This guide lists the
            standard sizes in the UK, the US, Australia, Germany and the
            Netherlands, the joint each size is laid with, and the number of
            bricks per m². Each figure comes from an industry body or a
            manufacturer, listed under Sources at the end.
          </IntroText>
        </header>

        {/* What "work size" and "coordinating size" mean */}
        <h2 style={sectionHeading}>Work Size vs Coordinating Size</h2>
        <p style={paragraph}>
          Brick sizes are given in two ways:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={listItem}>
            <strong>Work size</strong> (US: <em>specified size</em>): the size
            the brick is made to, without mortar.
          </li>
          <li style={listItem}>
            <strong>Coordinating size</strong> (US: <em>nominal size</em>):
            the work size plus one mortar joint. In the UK the joint is a
            nominal 10 mm; US modular bricks are sized for a ⅜ in or ½ in
            joint.
          </li>
        </ul>
        <p style={paragraph}>
          Brick counts per m² use the coordinating size, not the bare work
          size.
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
          The standard UK brick has a work size of{" "}
          <strong>215 × 102.5 × 65 mm</strong> and is laid with a nominal 10 mm
          joint (Wienerberger). UK clay bricks are made to the European product
          standard <strong>BS EN 771-1</strong>. That standard does not fix the
          215 mm size; it sets how the manufacturer tests and declares size
          tolerances. For a 215 × 102.5 × 65 mm brick, the tightest category
          (T2) allows the mean of 10 bricks to differ by ±4 mm in length, ±3 mm
          in width and ±2 mm in height.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Type</th>
              <th style={th}>Work Size (L × W × H)</th>
              <th style={th}>Coordinating Size (10 mm joint)</th>
              <th style={th}>Bricks/m² (half-brick)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Standard</td>
              <td style={td}>215 × 102.5 × 65 mm</td>
              <td style={td}>225 × 112.5 × 75 mm</td>
              <td style={td}>~60 (59.3)</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          Bricks in older UK buildings are often a different size from the
          215 × 65 mm metric brick, and the sizes vary. When matching existing
          brickwork, measure several of the existing bricks and the joints, and
          work the count out from those measurements.
        </NoteBox>

        {/* USA */}
        <h2 style={sectionHeading}>United States</h2>
        <p style={paragraph}>
          US brick sizes are industry designations listed by the Brick Industry
          Association (BIA) in Technical Note 10. Size tolerances are set in{" "}
          <strong>ASTM C216</strong> (facing brick) and{" "}
          <strong>ASTM C652</strong> (hollow brick). BIA notes that the name of a
          brick and its size can vary by manufacturer, so it recommends
          specifying the dimensions, written width × height × length.
        </p>
        <p style={paragraph}>
          The table below gives the sizes in length × width × height order, the
          same as the rest of this guide. Where BIA gives a range, specified
          sizes vary within it from manufacturer to manufacturer. Non-modular
          bricks have no nominal size.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Type</th>
              <th style={th}>Specified Size (L × W × H)</th>
              <th style={th}>Nominal Size (L × W × H)</th>
              <th style={th}>Bricks/m² (BIA, no waste)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Modular</td>
              <td style={td}>7½–7⅝ × 3½–3⅝ × 2¼ in (191–194 × 89–92 × 57 mm)</td>
              <td style={td}>8 × 4 × 2⅔ in (203 × 102 × 68 mm)</td>
              <td style={td}>72.7</td>
            </tr>
            <tr>
              <td style={td}>Engineer Modular</td>
              <td style={td}>7½–7⅝ × 3½–3⅝ × 2¾–2<sup>13</sup>⁄<sub>16</sub> in (191–194 × 89–92 × 70–71 mm)</td>
              <td style={td}>8 × 4 × 3⅕ in (203 × 102 × 81 mm)</td>
              <td style={td}>60.5</td>
            </tr>
            <tr>
              <td style={td}>Standard (non-modular)</td>
              <td style={td}>8 × 3½–3⅝ × 2¼ in (203 × 89–92 × 57 mm)</td>
              <td style={td}>—</td>
              <td style={td}>70.5</td>
            </tr>
            <tr>
              <td style={td}>Queen (non-modular)</td>
              <td style={td}>7⅝–8 × 2¾–3 × 2¾ in (194–203 × 70–76 × 70 mm)</td>
              <td style={td}>—</td>
              <td style={td}>59.2</td>
            </tr>
            <tr>
              <td style={td}>King (non-modular)</td>
              <td style={td}>9⅝–9¾ × 2¾–3 × 2⅝–2¾ in (244–248 × 70–76 × 67–70 mm)</td>
              <td style={td}>—</td>
              <td style={td}>49.0</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          Bricks/m² are BIA Table 4 figures (bricks per 10 m² ÷ 10) and do not
          include waste. BIA&apos;s general rule is to add at least 5% to the
          net brick quantity for waste and breakage.
        </NoteBox>

        {/* Australia */}
        <h2 style={sectionHeading}>Australia</h2>
        <p style={paragraph}>
          PGH Bricks, an Australian manufacturer, gives the &quot;standard&quot;
          Australian brick as <strong>230 × 110 × 76 mm</strong> and notes that
          not everyone follows these measurements exactly. The count below
          uses a 10 mm joint.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Type</th>
              <th style={th}>Work Size (L × W × H)</th>
              <th style={th}>Coordinating Size (10 mm joint)</th>
              <th style={th}>Bricks/m² (half-brick)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Standard</td>
              <td style={td}>230 × 110 × 76 mm</td>
              <td style={td}>240 × 120 × 86 mm</td>
              <td style={td}>~48 (48.4)</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          Australian makers also sell other sizes. Take the size from your
          supplier&apos;s data sheet and use the formula at the top of this
          guide.
        </NoteBox>

        {/* Germany */}
        <h2 style={sectionHeading}>Germany</h2>
        <p style={paragraph}>
          The German formats follow the octametric grid of{" "}
          <strong>DIN 4172</strong>: a module of ⅛ m (125 mm) covering brick and
          joint, based on a 1 cm joint. The bricks themselves are made to{" "}
          <strong>DIN EN 771-1</strong>. Because the grid sets the course height,
          the bed joint is not exactly 10 mm (four DF courses or three NF
          courses make 250 mm), so the counts below come from the grid.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Format</th>
              <th style={th}>Work Size (L × W × H)</th>
              <th style={th}>Grid per Brick (L × H)</th>
              <th style={th}>Bricks/m² (half-brick)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>DF (Dünnformat)</td>
              <td style={td}>240 × 115 × 52 mm</td>
              <td style={td}>250 × 62.5 mm</td>
              <td style={td}>64</td>
            </tr>
            <tr>
              <td style={td}>NF (Normalformat)</td>
              <td style={td}>240 × 115 × 71 mm</td>
              <td style={td}>250 × 83⅓ mm</td>
              <td style={td}>48</td>
            </tr>
            <tr>
              <td style={td}>2DF</td>
              <td style={td}>240 × 115 × 113 mm</td>
              <td style={td}>250 × 125 mm</td>
              <td style={td}>32</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          The 48 (NF) and 32 (2DF) per m² match the figures in a German
          manufacturer&apos;s 2024 data sheet (Lücking) for a 115 mm wall.
        </NoteBox>

        {/* Netherlands */}
        <h2 style={sectionHeading}>Netherlands</h2>
        <p style={paragraph}>
          The Waalformat (WF) and the taller Waaldickformat (WDF) are listed by
          the German brick industry association among the formats used
          alongside the German ones. The sources found do not give a Dutch joint
          size, so the counts below assume a 10 mm joint. Check the joint your
          bricklayer will use.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Format</th>
              <th style={th}>Work Size (L × W × H)</th>
              <th style={th}>Coordinating Size (10 mm joint)</th>
              <th style={th}>Bricks/m² (half-brick)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>WF (Waalformat)</td>
              <td style={td}>210 × 100 × 50 mm</td>
              <td style={td}>220 × 110 × 60 mm</td>
              <td style={td}>~76 (75.8)</td>
            </tr>
            <tr>
              <td style={td}>WDF (Waaldickformat)</td>
              <td style={td}>210 × 100 × 65 mm</td>
              <td style={td}>220 × 110 × 75 mm</td>
              <td style={td}>~61 (60.6)</td>
            </tr>
          </tbody>
        </GuideTable>

        {/* Summary table */}
        <h2 style={sectionHeading}>Quick Reference: Bricks per m²</h2>
        <p style={paragraph}>
          Bricks per m² of half-brick (single-leaf) wall for the main size in
          each section above, before waste.
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Country</th>
              <th style={th}>Brick</th>
              <th style={th}>Work Size (mm)</th>
              <th style={th}>Joint</th>
              <th style={th}>Bricks/m²</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>UK</td>
              <td style={td}>Standard</td>
              <td style={td}>215 × 102.5 × 65</td>
              <td style={td}>10 mm</td>
              <td style={td}>~60</td>
            </tr>
            <tr>
              <td style={td}>USA</td>
              <td style={td}>Modular</td>
              <td style={td}>194 × 92 × 57</td>
              <td style={td}>⅜ in</td>
              <td style={td}>~73</td>
            </tr>
            <tr>
              <td style={td}>Australia</td>
              <td style={td}>Standard</td>
              <td style={td}>230 × 110 × 76</td>
              <td style={td}>10 mm</td>
              <td style={td}>~48</td>
            </tr>
            <tr>
              <td style={td}>Germany</td>
              <td style={td}>NF</td>
              <td style={td}>240 × 115 × 71</td>
              <td style={td}>DIN 4172 grid</td>
              <td style={td}>48</td>
            </tr>
            <tr>
              <td style={td}>Germany</td>
              <td style={td}>DF</td>
              <td style={td}>240 × 115 × 52</td>
              <td style={td}>DIN 4172 grid</td>
              <td style={td}>64</td>
            </tr>
            <tr>
              <td style={td}>Netherlands</td>
              <td style={td}>WF</td>
              <td style={td}>210 × 100 × 50</td>
              <td style={td}>10 mm (assumed)</td>
              <td style={td}>~76</td>
            </tr>
          </tbody>
        </GuideTable>
        <NoteBox>
          These are net counts. Add a waste allowance before ordering; BIA
          suggests at least 5% as a general rule, and job conditions may call
          for more.
        </NoteBox>

        {/* Mortar joint note */}
        <h2 style={sectionHeading}>How Mortar Joint Size Affects Your Count</h2>
        <p style={paragraph}>
          The counts above assume the joint shown. A thinner or thicker joint
          changes the coordinating size and so the count. Using UK standard
          bricks as an example:
        </p>
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
              <td style={td}>~61</td>
            </tr>
            <tr>
              <td style={td}>10 mm (standard)</td>
              <td style={td}>75 mm</td>
              <td style={td}>~60</td>
            </tr>
            <tr>
              <td style={td}>12 mm</td>
              <td style={td}>77 mm</td>
              <td style={td}>~57</td>
            </tr>
          </tbody>
        </GuideTable>
        <p style={paragraph}>
          For a precise material estimate, use our{" "}
          <Link href="/brick-calculator" style={link}>
            Brick Calculator
          </Link>{" "}
          for UK standard (10 mm joints) or US modular brick; for another size
          or joint, use the formula at the top of this guide.
        </p>

        <RelatedGuides
          links={[
            { href: "/guides/how-many-bricks-per-square-metre", label: "How Many Bricks Per Square Metre?", description: "detailed calculation walkthrough" },
            { href: "/guides/brick-mortar-mix-ratio", label: "Brick Mortar Mix Ratio Guide", description: "getting the right mix for your application" },
          ]}
        />

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

        {/* Sources */}
        <h2 style={sectionHeading}>Sources</h2>
        <p style={paragraph}>Checked 27 November 2026.</p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={listItem}>
            Brick Industry Association, Technical Note 10,{" "}
            <em>Dimensioning and Estimating Brick Masonry</em> (February 2009),
            Tables 1, 2 and 4 and the waste section (gobrick.com).
          </li>
          <li style={listItem}>
            Wienerberger UK, Technical Guidance <em>Dimensions and
            Tolerances</em> (03/23, rev 2), and the Wienerberger UK article on
            brick sizes (10 mm joint).
          </li>
          <li style={listItem}>
            Zweischalige Wand Marketing e.V. / Bundesverband der Deutschen
            Ziegelindustrie e.V., <em>Architekten-Ordner, Kapitel 1
            Baustoffkunde</em> (2017), sections 1.4.1 and 1.5.1 (formats, DIN
            4172).
          </li>
          <li style={listItem}>
            Lücking, product handbook 2024, <em>Kleinformate HLZ B 12-0,90</em>{" "}
            data sheet (NF and 2DF bricks per m²).
          </li>
          <li style={listItem}>
            PGH Bricks (Australia), FAQs: &quot;What size is a
            &apos;standard&apos; brick?&quot;
          </li>
        </ul>
      </article>
    </>
  );
}
