import Link from "next/link";
import { sectionHeading, paragraph, formula, note, th, td } from "./shared";

const faqs = [
  {
    question: "How do I convert roof pitch to degrees?",
    answer:
      "Use arctan(rise ÷ 12) × (180 ÷ π). For a 6:12 pitch: arctan(6 ÷ 12) = arctan(0.5) = 26.57°. Most scientific calculators have an arctan (tan⁻¹) button. The roof pitch calculator on this site handles the conversion instantly.",
  },
  {
    question: "What is a 4:12 pitch in degrees?",
    answer:
      "A 4:12 pitch equals 18.43°. Use arctan(4 ÷ 12) = arctan(0.333) = 18.43°. This is a low-slope conventional pitch commonly used on ranch-style homes and low-profile additions.",
  },
  {
    question: "What is a 6:12 pitch in degrees?",
    answer:
      "A 6:12 pitch equals 26.57°. This is the most common residential roof pitch in the US — it sheds water well, supports all standard roofing materials, and is safe to walk on without special equipment.",
  },
  {
    question: "How do I convert degrees back to x:12 pitch?",
    answer:
      "Use tan(degrees) × 12. For 30°: tan(30°) = 0.577 × 12 = 6.93, so approximately 7:12. This is exact: a 30° roof is a 6.928:12 pitch.",
  },
  {
    question: "What angle is a 12:12 pitch?",
    answer:
      "A 12:12 pitch is exactly 45° — the roof rises as much as it runs horizontally. This is the steepest common residential pitch. Above 12:12 produces angles greater than 45°, which are considered very steep or specialty pitches.",
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
    "Complete conversion table for roof pitch x:12 to degrees and percentage slope, plus the formula to convert any pitch instantly.",
  url: "https://buildcalczone.com/guides/roof-pitch-to-degrees-conversion",
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
              <th style={th}>Category</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1:12", "4.76°", "8.3%", "1.003", "Flat"],
              ["2:12", "9.46°", "16.7%", "1.014", "Low slope"],
              ["3:12", "14.04°", "25.0%", "1.031", "Low slope"],
              ["4:12", "18.43°", "33.3%", "1.054", "Conventional"],
              ["5:12", "22.62°", "41.7%", "1.083", "Conventional"],
              ["6:12", "26.57°", "50.0%", "1.118", "Conventional ★"],
              ["7:12", "30.26°", "58.3%", "1.158", "Conventional"],
              ["8:12", "33.69°", "66.7%", "1.202", "Conventional"],
              ["9:12", "36.87°", "75.0%", "1.250", "Conventional"],
              ["10:12", "39.81°", "83.3%", "1.302", "Steep"],
              ["11:12", "42.51°", "91.7%", "1.357", "Steep"],
              ["12:12", "45.00°", "100.0%", "1.414", "Steep"],
              ["14:12", "49.40°", "116.7%", "1.537", "Very steep"],
              ["16:12", "53.13°", "133.3%", "1.667", "Very steep"],
            ].map(([pitch, deg, pct, factor, cat]) => (
              <tr key={pitch}>
                <td style={{ ...td, fontWeight: pitch === "6:12" ? 600 : 400 }}>
                  {pitch}
                </td>
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
          ★ 6:12 is the most common residential pitch in the US. Pitch factor =
          √((x/12)² + 1) — multiply your flat roof footprint by this number to
          get the true sloped surface area for material ordering.
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
        <h2 style={sectionHeading}>Roofing material by pitch</h2>
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
              <th style={th}>Pitch range</th>
              <th style={th}>Compatible materials</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>0:12 – 2:12</td>
              <td style={td}>TPO, EPDM, PVC membrane only</td>
            </tr>
            <tr>
              <td style={td}>2:12 – 4:12</td>
              <td style={td}>Modified bitumen, some metal panels</td>
            </tr>
            <tr>
              <td style={td}>4:12 – 9:12</td>
              <td style={td}>
                Asphalt shingles, metal, clay/concrete tile, wood shakes
              </td>
            </tr>
            <tr>
              <td style={td}>10:12 – 12:12</td>
              <td style={td}>
                All of above — safety equipment required for installation
              </td>
            </tr>
            <tr>
              <td style={td}>Over 12:12</td>
              <td style={td}>
                Metal, slate, specialty systems — structural engineer
                recommended
              </td>
            </tr>
          </tbody>
        </table>
        <div style={note}>
          Minimum pitch for standard asphalt shingles is 2:12 with double
          underlayment, 4:12 for standard installation per most manufacturer
          warranties. Always check the specific manufacturer&apos;s requirements
          before specifying materials.
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
