import Link from "next/link";
import {
  sectionHeading,
  paragraph,
  formula,
  note,
  th,
  td,
} from "./shared";

const faqs = [
  {
    question: "How do I calculate roof pitch?",
    answer:
      "Measure the vertical rise in inches over a 12-inch horizontal run. That rise number is your pitch — a 6-inch rise over 12 inches of run is a 6:12 pitch. You can measure from inside the attic by holding a level against a rafter and measuring straight down at the 12-inch mark.",
  },
  {
    question: "What is the most common roof pitch for houses?",
    answer:
      "6:12 (26.57°) is the most common residential pitch in the US. It sheds water and snow effectively, supports all standard roofing materials, allows usable attic space, and is safe to walk on without special equipment.",
  },
  {
    question: "How do I convert roof pitch to degrees?",
    answer:
      "Use the formula: Degrees = arctan(rise ÷ 12) × (180 ÷ π). Common results: 4:12 = 18.4°, 6:12 = 26.6°, 8:12 = 33.7°, 12:12 = 45°. The roof pitch calculator above handles this conversion instantly.",
  },
  {
    question: "What is a pitch factor and why does it matter?",
    answer:
      "The pitch factor is √((rise/12)² + 1). Multiply your roof&apos;s flat footprint area by this number to get the true sloped surface area. A 6:12 pitch has a factor of 1.118 — so a 1,000 sq ft footprint needs 1,118 sq ft of shingles or roofing material.",
  },
  {
    question: "What roof pitch requires special equipment to walk on?",
    answer:
      "Roofs at 6:12 (26.6°) or less are generally safe to walk on without special gear. At 7:12 (30°) caution is needed. Above 8:12 (33.7°), safety harnesses and roof brackets are recommended. Above 12:12 (45°), specialized safety equipment is required by OSHA.",
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
  headline: "How to Calculate Roof Pitch",
  description:
    "Step-by-step guide to measuring and calculating roof pitch — rise over run, x:12 ratio, degrees conversion, rafter length, and pitch factor explained.",
  url: "https://buildcalczone.com/guides/how-to-calculate-roof-pitch",
};

export default function HowToCalculateRoofPitch() {
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
            How to Calculate Roof Pitch
          </h1>
          <p style={{ fontSize: "15px", color: "var(--text-2)", lineHeight: 1.7 }}>
            Roof pitch determines your rafter length, the roofing materials you can
            use, and how water and snow behave on the surface. Here&apos;s how to
            measure it, calculate it from any starting point, and use it to estimate
            materials.
          </p>
        </header>

        {/* What is roof pitch */}
        <h2 style={sectionHeading}>What is roof pitch?</h2>
        <p style={paragraph}>
          Roof pitch is the ratio of vertical rise to horizontal run, expressed as
          x:12 in the US. A 6:12 pitch means the roof rises 6 inches for every
          12 inches of horizontal distance. The same pitch can also be expressed
          as an angle (26.57°) or a percentage slope (50%).
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
              <th style={th}>Pitch category</th>
              <th style={th}>x:12 range</th>
              <th style={th}>Degrees</th>
              <th style={th}>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Flat / low slope</td>
              <td style={td}>0:12 – 3:12</td>
              <td style={td}>0° – 14°</td>
              <td style={td}>Membrane roofing required</td>
            </tr>
            <tr>
              <td style={td}>Conventional</td>
              <td style={td}>4:12 – 9:12</td>
              <td style={td}>18° – 37°</td>
              <td style={td}>Supports shingles, tiles, metal</td>
            </tr>
            <tr>
              <td style={td}>Steep slope</td>
              <td style={td}>10:12 – 12:12</td>
              <td style={td}>40° – 45°</td>
              <td style={td}>Safety gear required</td>
            </tr>
            <tr>
              <td style={td}>Very steep</td>
              <td style={td}>Over 12:12</td>
              <td style={td}>45°+</td>
              <td style={td}>Specialty roofs (A-frame etc.)</td>
            </tr>
          </tbody>
        </table>

        {/* How to measure */}
        <h2 style={sectionHeading}>How to measure roof pitch</h2>
        <p style={paragraph}>
          You can measure from outside on the roof or from inside the attic —
          the attic method is safer and doesn&apos;t require going on the roof.
        </p>

        <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-1)", marginBottom: "4px" }}>
          Method 1 — From the attic (recommended)
        </p>
        <ol style={{ paddingLeft: "20px", margin: "0 0 16px" }}>
          {[
            "Hold a level horizontally against the underside of a rafter.",
            "Mark a point exactly 12 inches from where the level touches the rafter.",
            "Measure straight down from that mark to the rafter surface.",
            "That vertical measurement in inches is your pitch (e.g. 6 inches = 6:12).",
          ].map((step, i) => (
            <li
              key={i}
              style={{ fontSize: "15px", color: "var(--text-2)", lineHeight: 1.8, marginBottom: "6px" }}
            >
              {step}
            </li>
          ))}
        </ol>

        <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-1)", marginBottom: "4px" }}>
          Method 2 — From the roof surface
        </p>
        <ol style={{ paddingLeft: "20px", margin: "0 0 16px" }}>
          {[
            "Place a level flat on the roof surface, bubble centred.",
            "Hold one end of the level at the roof surface.",
            "Measure 12 inches along the level from that end.",
            "Measure straight down from the 12-inch mark to the roof — that&apos;s your rise.",
          ].map((step, i) => (
            <li
              key={i}
              style={{ fontSize: "15px", color: "var(--text-2)", lineHeight: 1.8, marginBottom: "6px" }}
            >
              {step}
            </li>
          ))}
        </ol>

        <div style={note}>
          A speed square gives an instant pitch reading on the roof — hold the
          pivot point against the rafter edge and read the degree or pitch scale
          where the level vial aligns.
        </div>

        {/* Calculate from rise and run */}
        <h2 style={sectionHeading}>Calculate pitch from rise and run</h2>
        <div style={formula}>
          Pitch (x:12) = Rise (in) &divide; Run (in) &times; 12
        </div>
        <p style={paragraph}>
          <strong>Example:</strong> a roof rises 9 inches over a 12-inch run:
          9 &divide; 12 &times; 12 = <strong>9:12 pitch</strong>
        </p>
        <p style={paragraph}>
          If you know the total rise and total run of the roof (not just a
          12-inch section):
        </p>
        <div style={formula}>
          Pitch (x:12) = (Total Rise &divide; Total Run) &times; 12
        </div>
        <p style={paragraph}>
          <strong>Example:</strong> total rise 8 ft, total run 16 ft:
          (8 &divide; 16) &times; 12 = <strong>6:12 pitch</strong>
        </p>

        {/* Convert to degrees */}
        <h2 style={sectionHeading}>Convert pitch to degrees</h2>
        <div style={formula}>
          Degrees = arctan(rise &divide; 12) &times; (180 &divide; &pi;)
        </div>
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
            </tr>
          </thead>
          <tbody>
            {[
              ["3:12", "14.0°", "25%", "1.031"],
              ["4:12", "18.4°", "33%", "1.054"],
              ["5:12", "22.6°", "42%", "1.083"],
              ["6:12", "26.6°", "50%", "1.118"],
              ["7:12", "30.3°", "58%", "1.158"],
              ["8:12", "33.7°", "67%", "1.202"],
              ["9:12", "36.9°", "75%", "1.250"],
              ["10:12", "39.8°", "83%", "1.302"],
              ["12:12", "45.0°", "100%", "1.414"],
            ].map(([pitch, deg, pct, factor]) => (
              <tr key={pitch}>
                <td style={td}>{pitch}</td>
                <td style={td}>{deg}</td>
                <td style={td}>{pct}</td>
                <td style={td}>{factor}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Rafter length */}
        <h2 style={sectionHeading}>Calculate rafter length</h2>
        <p style={paragraph}>
          Once you know the pitch, rafter length follows from the Pythagorean theorem.
          The rafter is the hypotenuse of the right triangle formed by the rise and run:
        </p>
        <div style={formula}>
          Rafter length = &radic;(Rise&sup2; + Run&sup2;)
        </div>
        <p style={paragraph}>
          Or using the pitch factor as a shortcut:
        </p>
        <div style={formula}>
          Rafter length = Run &times; Pitch factor
        </div>
        <p style={paragraph}>
          <strong>Example:</strong> 6:12 pitch, 12 ft run:
          12 &times; 1.118 = <strong>13.42 ft rafter length</strong>
        </p>
        <div style={note}>
          Add 12–18 inches to calculated rafter length for the eave overhang,
          and allow for the plumb cut at the ridge and the bird&apos;s mouth
          (seat cut) at the wall plate before purchasing lumber.
        </div>

        {/* Pitch factor for materials */}
        <h2 style={sectionHeading}>Pitch factor — calculating true roof area</h2>
        <p style={paragraph}>
          The pitch factor converts flat footprint area to sloped surface area —
          essential for ordering shingles, underlayment, or metal panels:
        </p>
        <div style={formula}>
          Pitch factor = &radic;((rise &divide; 12)&sup2; + 1)
        </div>
        <div style={formula}>
          True roof area = Flat footprint area &times; Pitch factor
        </div>
        <p style={paragraph}>
          <strong>Example:</strong> 1,500 sq ft footprint, 6:12 pitch (factor 1.118):
          1,500 &times; 1.118 = <strong>1,677 sq ft</strong> of roofing material needed
        </p>

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
          <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-1)", marginBottom: "6px" }}>
            Calculate your roof pitch instantly
          </p>
          <p style={{ fontSize: "14px", color: "var(--text-2)", marginBottom: "12px" }}>
            Enter rise and run, degrees, or x:12 ratio to get pitch conversion,
            rafter length, pitch factor, and true roof area in one step.
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
            <p style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-1)", marginBottom: "4px" }}>
              {f.question}
            </p>
            <p style={{ fontSize: "14px", color: "var(--text-2)", lineHeight: 1.7 }}>
              {f.answer}
            </p>
          </div>
        ))}
      </article>
    </>
  );
}