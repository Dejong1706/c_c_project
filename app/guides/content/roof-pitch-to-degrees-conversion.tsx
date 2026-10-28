import Link from "next/link";
import { Breadcrumb, sectionHeading, paragraph, formula, note, th, td } from "./shared";

const faqs = [
  {
    question: "How do I convert roof pitch to degrees?",
    answer:
      "Use arctan(rise ÷ 12) × (180 ÷ π). For a 6:12 pitch: arctan(6 ÷ 12) = arctan(0.5) = 26.57°. Most scientific calculators have an arctan (tan⁻¹) button. The roof pitch calculator on this site handles the conversion instantly.",
  },
  {
    question: "What is a 4:12 pitch in degrees?",
    answer:
      "A 4:12 pitch equals 18.43°. Use arctan(4 ÷ 12) = arctan(0.333) = 18.43°. It is the upper limit of a low-slope roof under OSHA 29 CFR 1926.500 (anything steeper is a steep roof). In the 2024 IRC it is the minimum slope for slate and the point at which asphalt shingles and tile no longer need double underlayment.",
  },
  {
    question: "What is a 6:12 pitch in degrees?",
    answer:
      "A 6:12 pitch equals 26.57° (50% slope, pitch factor 1.118). Because it is over 4:12, OSHA classifies it as a steep roof: for construction work 6 ft or more above a lower level, guardrails with toeboards, safety nets or personal fall arrest are required.",
  },
  {
    question: "How do I convert degrees back to x:12 pitch?",
    answer:
      "Use tan(degrees) × 12. For 30°: tan(30°) = 0.577 × 12 = 6.93, so a 30° roof is a 6.93:12 pitch — about 7:12 when rounded to a whole number.",
  },
  {
    question: "What angle is a 12:12 pitch?",
    answer:
      "A 12:12 pitch is exactly 45° — the roof rises as much as it runs horizontally (100% slope, pitch factor 1.414). Pitches above 12:12 give angles greater than 45°.",
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
  headline: "Roof Pitch to Degrees Conversion Chart",
  description:
    "Roof pitch to degrees chart for x:12, percent slope and pitch factor, with OSHA low-slope/steep categories and 2024 IRC minimum pitch by roofing material.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://buildcalczone.com/guides/roof-pitch-to-degrees-conversion" },
  datePublished: "2026-07-22",
  dateModified: "2026-10-21",
  author: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  publisher: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  image: { "@type": "ImageObject", url: "https://buildcalczone.com/opengraph-image", width: 1200, height: 630 },
};

export default function RoofPitchToDegreesConversion() {
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
        <Breadcrumb current="Roof Pitch to Degrees Conversion Chart" />
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
            Conversion
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
            Roof Pitch to Degrees Conversion Chart
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            A complete reference table for converting roof pitch (x:12 ratio) to
            degrees, percentage slope, and pitch factor — plus the formula to
            convert any pitch you encounter.
          </p>
        </header>

        {/* Formula */}
        <h2 style={sectionHeading}>The conversion formula</h2>
        <p style={paragraph}>
          Roof pitch in the US is expressed as x:12 — the number of inches of
          rise per 12 inches of run. To convert to degrees:
        </p>
        <div style={formula}>
          Degrees = arctan(x &divide; 12) &times; (180 &divide; &pi;)
        </div>
        <p style={paragraph}>To convert degrees back to x:12 pitch:</p>
        <div style={formula}>x = tan(degrees) &times; 12</div>
        <p style={paragraph}>To convert x:12 to percentage slope:</p>
        <div style={formula}>% slope = (x &divide; 12) &times; 100</div>

        {/* Full conversion table */}
        <h2 style={sectionHeading}>Complete conversion table</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "12px 0 20px",
            fontSize: "14px",
          }}
        >
          <thead>
            <tr>
              <th style={th}>Pitch (x:12)</th>
              <th style={th}>Degrees</th>
              <th style={th}>% slope</th>
              <th style={th}>Pitch factor</th>
              <th style={th}>OSHA category</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1:12", "4.76°", "8.3%", "1.003", "Low slope"],
              ["2:12", "9.46°", "16.7%", "1.014", "Low slope"],
              ["3:12", "14.04°", "25.0%", "1.031", "Low slope"],
              ["4:12", "18.43°", "33.3%", "1.054", "Low slope"],
              ["5:12", "22.62°", "41.7%", "1.083", "Steep"],
              ["6:12", "26.57°", "50.0%", "1.118", "Steep"],
              ["7:12", "30.26°", "58.3%", "1.158", "Steep"],
              ["8:12", "33.69°", "66.7%", "1.202", "Steep"],
              ["9:12", "36.87°", "75.0%", "1.250", "Steep"],
              ["10:12", "39.81°", "83.3%", "1.302", "Steep"],
              ["11:12", "42.51°", "91.7%", "1.357", "Steep"],
              ["12:12", "45.00°", "100.0%", "1.414", "Steep"],
              ["14:12", "49.40°", "116.7%", "1.537", "Steep"],
              ["16:12", "53.13°", "133.3%", "1.667", "Steep"],
            ].map(([pitch, deg, pct, factor, cat]) => (
              <tr key={pitch}>
                <td style={td}>{pitch}</td>
                <td style={td}>{deg}</td>
                <td style={td}>{pct}</td>
                <td style={td}>{factor}</td>
                <td style={{ ...td, color: "var(--text-3)", fontSize: "13px" }}>
                  {cat}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={note}>
          OSHA 29 CFR 1926.500 defines a low-slope roof as 4:12 or less and a
          steep roof as over 4:12. Pitch factor = √((x/12)² + 1) — multiply
          your flat roof footprint by this number to get the true sloped
          surface area for material ordering.
        </div>

        {/* Worked examples */}
        <h2 style={sectionHeading}>Worked examples</h2>

        <p
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "var(--text-1)",
            marginBottom: "6px",
          }}
        >
          Example 1 — x:12 to degrees
        </p>
        <div style={formula}>
          8:12 pitch &rarr; arctan(8 &divide; 12) = arctan(0.667) ={" "}
          <strong>33.69°</strong>
        </div>

        <p
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "var(--text-1)",
            marginBottom: "6px",
            marginTop: "16px",
          }}
        >
          Example 2 — degrees to x:12
        </p>
        <div style={formula}>
          30° &rarr; tan(30°) &times; 12 = 0.577 &times; 12 ={" "}
          <strong>6.93:12 &asymp; 7:12</strong>
        </div>

        <p
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "var(--text-1)",
            marginBottom: "6px",
            marginTop: "16px",
          }}
        >
          Example 3 — pitch factor for material ordering
        </p>
        <div style={formula}>
          6:12 pitch, 2,000 sq ft footprint &rarr; 2,000 &times; 1.118 ={" "}
          <strong>2,236 sq ft</strong> of roofing material
        </div>

        {/* Material guide */}
        <h2 style={sectionHeading}>Minimum pitch by roofing material</h2>
        <p style={paragraph}>
          The 2024 International Residential Code (IRC) sets a minimum slope
          for each roof covering in Section R905:
        </p>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "12px 0 20px",
            fontSize: "14px",
          }}
        >
          <thead>
            <tr>
              <th style={th}>Roof covering</th>
              <th style={th}>Minimum pitch</th>
              <th style={th}>2024 IRC</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Built-up roofing (coal-tar)", "¼:12 (⅛:12)", "R905.9.1"],
              ["Standing-seam metal panels", "¼:12", "R905.10.2"],
              ["Modified bitumen", "¼:12", "R905.11.1"],
              ["Single-ply membrane (EPDM, TPO, PVC)", "¼:12", "R905.12.1"],
              ["Sprayed polyurethane foam", "¼:12", "R905.13.1"],
              ["Liquid-applied roofing", "¼:12", "R905.14.1"],
              ["Lapped metal panels with lap sealant", "½:12", "R905.10.2"],
              ["Mineral-surfaced roll roofing", "1:12", "R905.5.2"],
              ["Asphalt shingles", "2:12 (double underlayment below 4:12)", "R905.2.2"],
              ["Clay and concrete tile", "2½:12 (double underlayment below 4:12)", "R905.3.2"],
              ["Metal roof shingles", "3:12", "R905.4.2"],
              ["Wood shingles / wood shakes", "3:12", "R905.7.2 / R905.8.2"],
              ["Lapped metal panels without lap sealant", "3:12", "R905.10.2"],
              ["Slate shingles", "4:12", "R905.6.2"],
            ].map(([covering, min, section]) => (
              <tr key={covering}>
                <td style={td}>{covering}</td>
                <td style={td}>{min}</td>
                <td style={{ ...td, color: "var(--text-3)", fontSize: "13px" }}>
                  {section}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={note}>
          For built-up, modified bitumen, single-ply, foam and liquid-applied
          roofs, the IRC figure is a minimum design slope. Below 2:12 the IRC
          still allows standing-seam metal panels as well as these systems, so
          a low pitch does not mean membrane only. Manufacturer
          installation instructions and local code amendments can set higher
          minimums, so check both before choosing a material.
        </div>

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
            Convert any pitch instantly
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-2)",
              marginBottom: "12px",
            }}
          >
            Enter rise and run, degrees, or x:12 ratio — get all conversions,
            rafter length, and true roof area in one step.
          </p>
          <Link
            href="/roof-pitch-calculator"
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
            Use the Roof Pitch Calculator &rarr;
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
