import Link from "next/link";
import { Breadcrumb, GuideTable, IntroText, NoteBox, link, paragraph, sectionHeading, td, th, RelatedGuides } from "./shared";
const faqs = [
  {
    question: "What PSI concrete should I use for a driveway?",
    answer:
      "Where the slab will be wet, freeze and get deicing salts, NRMCA (CIP 2, Scaling Concrete Surfaces) recommends ordering exterior slabs at a specified strength of 4000 psi (28 MPa), consistent with ACI 332, and air-entrained — about 6% total air for 3/4-inch or 1-inch coarse aggregate. Where the concrete will not stay continuously moist or deicers won't be used, it gives 3500 psi (24 MPa). Air entrainment, not strength alone, is what protects concrete against freeze-thaw scaling. Your local building code may set its own minimums, so check with your building department.",
  },
  {
    question: "What does C25/30 concrete mean?",
    answer:
      "It is a European strength class (EN 206, used in Eurocode 2). The first number is the characteristic cylinder strength and the second the characteristic cube strength, both in MPa (N/mm²) at 28 days. 'Characteristic' means the strength that only about 5% of results are expected to fall below. So C25/30 means 25 MPa on cylinders and 30 MPa on cubes.",
  },
  {
    question: "How do I convert concrete strength from MPa to PSI?",
    answer:
      "Multiply the MPa value by 145.04 to get psi. For example, 25 MPa is about 3,626 psi. This is a direct unit conversion, though US and European grades aren't exact equivalents because they define and test the strength differently.",
  },
  {
    question: "Why is concrete strength measured at 28 days?",
    answer:
      "Because that is the age specifications usually name. NRMCA (CIP 35) notes that in most cases strength requirements for concrete are at an age of 28 days, and Eurocode 2 bases its strength classes on the 28-day value. Tests at 3 or 7 days can flag a problem early, but NRMCA says they are not a basis for rejecting concrete specified at 28 days. Concrete keeps gaining strength after 28 days; how much depends on the cement, temperature and curing.",
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
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://buildcalczone.com/guides/concrete-strength-grades" },
  datePublished: "2026-06-12",
  dateModified: "2026-11-26",
  author: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  publisher: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  image: { "@type": "ImageObject", url: "https://buildcalczone.com/opengraph-image", width: 1200, height: 630 },
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
        <Breadcrumb current="Concrete Strength Grades Explained: PSI, MPa, and What They Mean" />
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
          <IntroText>
            Order concrete for a project and you&apos;ll be asked what strength you
            need — usually expressed as a PSI number in the US, or an MPa /
            C-grade in Europe and the UK. The number is the compressive strength
            the mix is designed to reach, and for outdoor concrete in cold
            climates it is only half of the answer: the other half is entrained
            air.
          </IntroText>
        </header>

        <h2 style={sectionHeading}>What the numbers mean</h2>
        <p style={paragraph}>
          Concrete strength is measured by casting test specimens, curing them,
          and crushing them in a testing machine; the failure load divided by
          the area gives the compressive strength. In the US the specification
          names a <strong>specified compressive strength (f′c)</strong>{" "}in psi.
          Cylinders are 4×8 in or 6×12 in and are tested to ASTM C39, and in
          most cases the requirement applies at an age of 28 days (NRMCA, CIP
          35 &ldquo;Testing Compressive Strength of Concrete&rdquo;).
        </p>
        <p style={paragraph}>
          In Europe and the UK the strength is given as a class such as C25/30
          (EN 206, used in Eurocode 2). The numbers are the{" "}
          <strong>characteristic</strong> cylinder and cube strengths in MPa
          at 28 days — the strength that only about 5% of results are expected
          to fall below (EN 1992-1-1, 3.1.2).
        </p>

        <h2 style={sectionHeading}>US strengths and where they are used</h2>
        <p style={paragraph}>
          NRMCA (CIP 35) says compressive strength can vary from 2500 psi for
          residential concrete to 4000 psi and higher in commercial structures,
          with some applications above 10,000 psi. For outdoor slabs, its
          recommendations depend on the exposure:
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Specified strength</th>
              <th style={th}>Where NRMCA puts it</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>2500 psi (17 MPa)</td>
              <td style={td}>Lower end of the range for residential concrete (CIP 35)</td>
            </tr>
            <tr>
              <td style={td}>3500 psi (24 MPa), air-entrained</td>
              <td style={td}>
                Exterior slabs in freezing climates that won&apos;t stay
                continuously moist or won&apos;t get deicing chemicals (CIP 2)
              </td>
            </tr>
            <tr>
              <td style={td}>4000 psi (28 MPa), air-entrained</td>
              <td style={td}>
                Exterior slabs that stay moist, freeze and get deicing
                chemicals — consistent with ACI 332 (CIP 2)
              </td>
            </tr>
            <tr>
              <td style={td}>4000 psi (28 MPa) and higher</td>
              <td style={td}>Commercial structures (CIP 35)</td>
            </tr>
          </tbody>
        </GuideTable>
        <p style={paragraph}>
          Foundations, footings and other structural concrete are sized by
          the building code your area has adopted and by the designer, not by
          a typical-use table. For houses, most US jurisdictions use the
          International Residential Code, which sets minimum concrete
          strengths by weathering exposure in Section R402.2; states often
          amend that table, so check the version your building department
          enforces.
        </p>

        <h2 style={sectionHeading}>Freeze-thaw: air entrainment matters more than strength</h2>
        <p style={paragraph}>
          Concrete that is saturated with water and goes through freezing and
          thawing can flake and peel at the surface (scaling). NRMCA (CIP 2)
          lists non-air-entrained concrete or too little entrained air as the
          first cause, ahead of low strength. Air-entrained concrete contains
          millions of tiny bubbles that give the freezing water room to
          expand. For exterior slabs exposed to freezing, NRMCA recommends
          air-entrained concrete with about <strong>6% total air</strong> for
          3/4-inch or 1-inch coarse aggregate, along with the strengths in the
          table above, no extra water at the site, finishing only after the
          bleed water has gone, proper curing, and no deicers in
          the first winter.
        </p>

        <h2 style={sectionHeading}>European C-classes (EN 206 / Eurocode 2)</h2>
        <p style={paragraph}>
          Eurocode 2 (EN 1992-1-1, Table 3.1) lists the strength classes from
          C12/15 to C90/105. The lower classes, with the cylinder strength
          converted to psi:
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Class</th>
              <th style={th}>Cylinder (MPa)</th>
              <th style={th}>Cube (MPa)</th>
              <th style={th}>Cylinder in psi (approx.)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>C12/15</td>
              <td style={td}>12</td>
              <td style={td}>15</td>
              <td style={td}>1,740</td>
            </tr>
            <tr>
              <td style={td}>C16/20</td>
              <td style={td}>16</td>
              <td style={td}>20</td>
              <td style={td}>2,320</td>
            </tr>
            <tr>
              <td style={td}>C20/25</td>
              <td style={td}>20</td>
              <td style={td}>25</td>
              <td style={td}>2,900</td>
            </tr>
            <tr>
              <td style={td}>C25/30</td>
              <td style={td}>25</td>
              <td style={td}>30</td>
              <td style={td}>3,630</td>
            </tr>
            <tr>
              <td style={td}>C30/37</td>
              <td style={td}>30</td>
              <td style={td}>37</td>
              <td style={td}>4,350</td>
            </tr>
            <tr>
              <td style={td}>C35/45</td>
              <td style={td}>35</td>
              <td style={td}>45</td>
              <td style={td}>5,080</td>
            </tr>
          </tbody>
        </GuideTable>
        <p style={paragraph}>
          There is no C15 class: the class names always pair a cylinder and a
          cube value. Which class a job needs is set by the designer from the
          exposure conditions under EN 206 and the national standard (BS 8500
          in the UK), so check the specification rather than picking a class
          from a list of uses.
        </p>

        <h2 style={sectionHeading}>Converting between PSI and MPa</h2>
        <p style={paragraph}>The unit conversion itself is straightforward:</p>
        <p style={paragraph}>1 MPa ≈ 145.04 psi, and 1 psi ≈ 0.0069 MPa.</p>
        <p style={paragraph}>
          So 2500 psi is about 17.2 MPa, 3000 psi about 20.7 MPa, 3500 psi
          about 24.1 MPa and 4000 psi about 27.6 MPa. By cylinder strength,
          the 2500–3000 psi range falls between C16/20 (16 MPa) and C20/25
          (20 MPa).
        </p>
        <NoteBox>
          Note: this is a direct unit conversion, not a direct equivalence
          between grading systems. A US specified strength (f′c) and a European
          characteristic strength are defined differently, and specimen shape
          and curing conditions can differ, so treat cross-system comparisons
          as approximate rather than exact substitutions.
        </NoteBox>

        <h2 style={sectionHeading}>Why 28 days?</h2>
        <p style={paragraph}>
          28 days is the age that specifications usually name: NRMCA (CIP 35)
          notes that in most cases strength requirements for concrete are at
          an age of 28 days, and Eurocode 2 bases its strength classes on the
          28-day value. It is a reference age, not the end of strength gain —
          concrete keeps getting stronger after 28 days, at a rate that depends
          on the cement type, temperature and curing (EN 1992-1-1, 3.1.2).
          Tests at 3 or 7 days can help catch a problem early, but NRMCA says
          they are not a basis for rejecting concrete that is specified at 28
          days. For how fast concrete gains strength at different
          temperatures, see the{" "}
          <Link href="/guides/concrete-curing-time-guide" style={link}>
            concrete curing time guide
          </Link>
          .
        </p>

        <h2 style={sectionHeading}>Putting it together</h2>
        <p style={paragraph}>
          When you order ready-mix, give the supplier the specified strength
          and, for outdoor concrete in a freezing climate, ask for
          air-entrained concrete. Once you&apos;ve picked a grade, the{" "}
          <Link href="/concrete-calculator" style={link}>
            concrete calculator
          </Link>{" "}
          and{" "}
          <Link href="/concrete-bags" style={link}>
            concrete bag calculator
          </Link>{" "}
          can help you figure out how much you need. If you&apos;re mixing
          small batches yourself rather than ordering, see{" "}
          <Link href="/guides/how-to-mix-concrete-by-hand" style={link}>
            how to mix concrete by hand
          </Link>{" "}
          — the amount of water you add affects the strength you actually get.
          In ACI&apos;s table of typical values (ACI PRC-211.1-22, Table 5.3.4),
          a water-cement ratio of 0.57 gives about 4,000 psi at 28 days and
          0.68 about 3,000 psi, for concrete without air entrainment.
        </p>

        <RelatedGuides
          links={[
            { href: "/guides/what-size-rebar-do-i-need", label: "What Size Rebar Do I Need?", description: "US bar sizes #3–#11 and what the 2024 IRC requires for slabs and footings" },
            { href: "/guides/concrete-curing-time-guide", label: "Concrete Curing Time Guide", description: "Days to 50–95% strength at 70°F and 50°F, moist curing and freezing risk" },
          ]}
        />

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
