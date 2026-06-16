import Link from "next/link";

const faqs = [
  {
    question: "What size rebar should I use for a concrete slab?",
    answer:
      "For a standard residential slab (100–150mm thick), 10mm or 12mm rebar at 200–300mm spacing is commonly used. Thicker slabs or those carrying heavier loads may require larger bar sizes. For any structural slab, consult a structural engineer for the correct specification.",
  },
  {
    question: "What is the difference between #4 and 12mm rebar?",
    answer:
      "These are measurements from two different systems. #4 rebar is a US Imperial designation referring to a bar with a nominal diameter of 12.7mm (roughly half an inch). The metric 12mm bar has a nominal diameter of 12mm. They are close in size but not identical and are not directly interchangeable in engineered designs.",
  },
  {
    question: "How far apart should rebar be spaced?",
    answer:
      "For residential concrete slabs, 200–300mm spacing is typical. ACI 318 specifies that the maximum spacing for temperature and shrinkage reinforcement should not exceed 3 times the slab thickness or 450mm, whichever is smaller. Structural applications require engineer-specified spacing.",
  },
  {
    question: "Do I need rebar in a concrete driveway?",
    answer:
      "Rebar is not always required in a residential driveway, but it significantly reduces the risk of cracking under load and improves long-term durability. Wire mesh is a common alternative for thin slabs, while rebar is preferred for driveways that will carry heavy vehicles or are in areas with expansive soils.",
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
  headline: "What Size Rebar Do I Need? A Practical Selection Guide",
  description:
    "Rebar size and spacing guide for slabs, footings and driveways. Covers metric and US Imperial bar sizes, typical spacing, and when to consult an engineer.",
  url: "https://buildcalczone.com/guides/what-size-rebar-do-i-need",
};

const sectionHeading: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: 600,
  color: "var(--text-1)",
  margin: "32px 0 12px",
};

const paragraph: React.CSSProperties = {
  fontSize: "15px",
  color: "var(--text-2)",
  lineHeight: 1.8,
  marginBottom: "14px",
};

const note: React.CSSProperties = {
  fontSize: "13px",
  color: "var(--text-3)",
  lineHeight: 1.7,
  background: "var(--surface-2)",
  border: "1px solid var(--border)",
  borderRadius: "8px",
  padding: "12px 16px",
  margin: "12px 0 20px",
};

const link: React.CSSProperties = {
  color: "var(--accent)",
  textDecoration: "underline",
};

const table: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  margin: "12px 0 20px",
  fontSize: "14px",
};

const th: React.CSSProperties = {
  textAlign: "left",
  padding: "8px 12px",
  borderBottom: "1px solid var(--border)",
  color: "var(--text-1)",
  fontWeight: 600,
};

const td: React.CSSProperties = {
  padding: "8px 12px",
  borderBottom: "1px solid var(--border)",
  color: "var(--text-2)",
};

export default function WhatSizeRebarDoINeedGuide() {
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
            What Size Rebar Do I Need? A Practical Selection Guide
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            Rebar size is one of those decisions that feels technical but mostly
            comes down to what you&apos;re building and how much load it will
            carry. For most residential DIY work, the range of sensible options
            is narrow. For anything structural, the decision belongs with an
            engineer — not a general guide.
          </p>
        </header>

        <h2 style={sectionHeading}>How rebar is sized</h2>
        <p style={paragraph}>
          Rebar is sized by its nominal diameter. The two systems in common use
          are metric (diameter in millimetres) and US Imperial (bar numbers,
          where the number refers to the diameter in eighths of an inch).
        </p>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>US bar size</th>
              <th style={th}>Nominal diameter</th>
              <th style={th}>Metric equivalent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>#3</td>
              <td style={td}>9.5mm (⅜&quot;)</td>
              <td style={td}>~10mm</td>
            </tr>
            <tr>
              <td style={td}>#4</td>
              <td style={td}>12.7mm (½&quot;)</td>
              <td style={td}>~12mm</td>
            </tr>
            <tr>
              <td style={td}>#5</td>
              <td style={td}>15.9mm (⅝&quot;)</td>
              <td style={td}>~16mm</td>
            </tr>
            <tr>
              <td style={td}>#6</td>
              <td style={td}>19.1mm (¾&quot;)</td>
              <td style={td}>~20mm</td>
            </tr>
            <tr>
              <td style={td}>#8</td>
              <td style={td}>25.4mm (1&quot;)</td>
              <td style={td}>~25mm</td>
            </tr>
          </tbody>
        </table>
        <div style={note}>
          US and metric bar sizes are close but not identical. Do not substitute
          one for the other in a design that specifies a particular bar size
          without checking with the engineer of record.
        </div>

        <h2 style={sectionHeading}>Typical sizes by application</h2>
        <p style={paragraph}>
          The table below covers common residential and light commercial
          applications. These are general starting points, not engineered
          specifications.
        </p>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Application</th>
              <th style={th}>Common bar size</th>
              <th style={th}>Typical spacing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Residential slab (100–150mm)</td>
              <td style={td}>10–12mm (#3–#4)</td>
              <td style={td}>200–300mm</td>
            </tr>
            <tr>
              <td style={td}>Driveway</td>
              <td style={td}>10–12mm (#3–#4)</td>
              <td style={td}>300mm</td>
            </tr>
            <tr>
              <td style={td}>Footing / strip foundation</td>
              <td style={td}>12–16mm (#4–#5)</td>
              <td style={td}>Per engineer spec</td>
            </tr>
            <tr>
              <td style={td}>Fence post hole</td>
              <td style={td}>10mm (#3)</td>
              <td style={td}>N/A</td>
            </tr>
            <tr>
              <td style={td}>Structural column or beam</td>
              <td style={td}>16mm+ (#5+)</td>
              <td style={td}>Engineer required</td>
            </tr>
          </tbody>
        </table>

        <h2 style={sectionHeading}>Rebar spacing</h2>
        <p style={paragraph}>
          Spacing controls how well the reinforcement distributes load and
          controls cracking. For residential slabs, 200–300mm centre-to-centre
          spacing is standard. ACI 318 sets a maximum spacing for temperature
          and shrinkage reinforcement at the smaller of three times the slab
          thickness or 450mm — so for a 150mm slab, the maximum would be 450mm,
          but 200–300mm is more typical in practice.
        </p>
        <p style={paragraph}>
          For anything beyond a simple residential slab, spacing should be
          specified by a structural engineer based on loads, soil conditions,
          and the concrete grade being used.
        </p>

        <h2 style={sectionHeading}>When to involve an engineer</h2>
        <p style={paragraph}>
          General guidance covers non-structural slabs, driveways, and light
          footings. For foundations, retaining walls, structural beams, columns,
          or any element where failure would pose a safety risk, rebar size and
          spacing must be designed by a licensed structural engineer. Local
          building codes typically require this for permitted work.
        </p>
        <div style={note}>
          This guide covers general residential applications only. It is not a
          substitute for engineering design on structural elements.
        </div>

        <h2 style={sectionHeading}>Putting it together</h2>
        <p style={paragraph}>
          Once you know the bar size and spacing you need, our{" "}
          <Link href="/rebar-calculator" style={link}>
            rebar calculator
          </Link>{" "}
          can work out the total weight by diameter and length — useful for
          estimating material costs and ordering quantities.
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
