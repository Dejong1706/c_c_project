import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Strength Grades Explained (PSI & MPa) | BuildCalc",
  description:
    "Understand concrete strength grades in PSI and MPa, what they're used for, and how US and international (EN 206) classifications compare.",
  keywords: [
    "concrete strength grades",
    "concrete psi chart",
    "concrete mpa",
    "concrete grade c25 c30",
  ],
};

const faqs = [
  {
    question: "What PSI concrete should I use for a driveway?",
    answer:
      "Driveways typically use concrete rated at 3500-4000 psi, which provides enough strength to handle vehicle loads and resist cracking from freeze-thaw cycles in colder climates.",
  },
  {
    question: "What does C25/30 concrete mean?",
    answer:
      "C25/30 is a strength class used in the EN 206 European standard. The first number (25) is the cylinder strength and the second (30) is the cube strength in MPa, both measured on the same concrete using different test specimen shapes.",
  },
  {
    question: "How do I convert concrete strength from MPa to PSI?",
    answer:
      "Multiply the MPa value by 145.04 to get PSI. For example, 25 MPa is approximately 3626 psi. This is a direct unit conversion, though US and European grading systems aren't perfectly equivalent due to differences in testing standards.",
  },
  {
    question: "Why is concrete strength measured at 28 days?",
    answer:
      "28 days is the industry-standard age for testing concrete compressive strength because it represents the point where concrete has reached the large majority of its long-term strength, while still allowing reasonably timely quality control on a project.",
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
  headline: "Concrete Strength Grades Explained: PSI, MPa, and What They Mean",
  description:
    "Understand concrete strength grades in PSI and MPa, what they're used for, and how US and international (EN 206) classifications compare.",
  url: "https://buildcalczone.com/guides/concrete-strength-grades",
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

const link: React.CSSProperties = {
  color: "var(--accent)",
  textDecoration: "underline",
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

export default function ConcreteStrengthGradesGuide() {
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
            Concrete Strength Grades Explained: PSI, MPa, and What They Mean
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            Order concrete for a project and you&apos;ll be asked what strength you
            need — usually expressed as a PSI number in the US, or an MPa /
            C-grade almost everywhere else. These numbers aren&apos;t arbitrary; they
            correspond to how much load the concrete can handle once cured, and
            choosing the right one matters for both safety and cost.
          </p>
        </header>

        <h2 style={sectionHeading}>What the numbers mean</h2>
        <p style={paragraph}>
          Concrete strength is measured by compressive strength testing — curing
          a sample for a set period (almost always 28 days) and then measuring
          how much load it can withstand before failing. In the US, this is
          expressed in PSI (pounds per square inch). In most other countries,
          it&apos;s expressed in MPa (megapascals), often as part of a C-grade
          designation like C25/30.
        </p>

        <h2 style={sectionHeading}>Common PSI grades (US)</h2>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>PSI</th>
              <th style={th}>Typical use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>2500–3000</td>
              <td style={td}>Sidewalks, patios, non-structural slabs</td>
            </tr>
            <tr>
              <td style={td}>3500–4000</td>
              <td style={td}>Driveways, garage floors, residential slabs</td>
            </tr>
            <tr>
              <td style={td}>4000–4500</td>
              <td style={td}>Foundations, structural slabs</td>
            </tr>
            <tr>
              <td style={td}>5000+</td>
              <td style={td}>
                Commercial and high-strength structural elements
              </td>
            </tr>
          </tbody>
        </table>

        <h2 style={sectionHeading}>Common C-grades (EN 206 / international)</h2>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Grade</th>
              <th style={th}>Typical use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>C20/25</td>
              <td style={td}>Non-structural slabs, pathways</td>
            </tr>
            <tr>
              <td style={td}>C25/30</td>
              <td style={td}>Residential foundations and slabs</td>
            </tr>
            <tr>
              <td style={td}>C30/37</td>
              <td style={td}>Structural columns and beams</td>
            </tr>
            <tr>
              <td style={td}>C35/45+</td>
              <td style={td}>High-strength structural and commercial work</td>
            </tr>
          </tbody>
        </table>
        <p style={paragraph}>
          In a C-grade like C25/30, the first number is the cylinder strength
          and the second is the cube strength — two different test specimen
          shapes used for the same concrete, which is why a single mix gets two
          numbers.
        </p>

        <h2 style={sectionHeading}>Converting between PSI and MPa</h2>
        <p style={paragraph}>The unit conversion itself is straightforward:</p>
        <p style={paragraph}>1 MPa ≈ 145.04 PSI, and 1 PSI ≈ 0.0069 MPa.</p>
        <p style={paragraph}>
          So 3000 psi works out to roughly 20.7 MPa, and 4000 psi to roughly
          27.6 MPa.
        </p>
        <div style={note}>
          Note: this is a direct unit conversion, not a direct equivalence
          between grading systems. US PSI grades and European C-grades are based
          on similar but not identical testing standards (specimen shape, curing
          conditions, and age can all differ slightly), so treat cross-system
          comparisons as approximate rather than exact substitutions.
        </div>

        <h2 style={sectionHeading}>Why 28 days?</h2>
        <p style={paragraph}>
          Concrete doesn&apos;t stop gaining strength at 28 days — it continues to
          cure and strengthen for months or even years afterward. But 28 days
          has become the standard testing age because it captures the large
          majority of the concrete&apos;s eventual strength while still being
          practical for project timelines and quality control. Strength measured
          earlier, such as at 7 days, will generally be lower than the 28-day
          figure, though the exact relationship depends on the mix design and
          cement type used.
        </p>

        <h2 style={sectionHeading}>Choosing the right grade</h2>
        <p style={paragraph}>
          For most homeowner projects — patios, walkways, small slabs — standard
          ready-mix in the 2500–3000 psi (roughly C15–C20) range is common and
          cost-effective. Anything load-bearing, exposed to freeze-thaw cycles,
          or structural (foundations, driveways with heavy vehicle traffic)
          generally calls for a higher grade. Local building codes often specify
          minimum requirements for these applications, so it&apos;s worth checking
          what&apos;s required before ordering — going higher than necessary mainly
          adds cost without adding benefit for non-structural work.
        </p>

        <h2 style={sectionHeading}>Putting it together</h2>
        <p style={paragraph}>
          The strength grade you specify when ordering concrete affects both
          performance and price, so it&apos;s worth matching the grade to the job
          rather than defaulting to &ldquo;whatever&apos;s standard.&rdquo; Once you&apos;ve picked a
          grade, your{" "}
          <a href="/concrete-calculator" style={link}>
            concrete calculator
          </a>{" "}
          and{" "}
          <a href="/concrete-bags" style={link}>
            concrete bag calculator
          </a>{" "}
          can help you figure out exactly how much you need to order.
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
