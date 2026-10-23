import Link from "next/link";
import { Breadcrumb, GuideTable, IntroText, NoteBox, formula, link, listItem, paragraph, sectionHeading, td, th } from "./shared";

const faqs = [
  {
    question: "What size rebar should I use for a concrete slab?",
    answer:
      "The 2024 IRC does not require reinforcement in a residential concrete slab-on-ground (Section R506 sets a minimum thickness of 3½ inches and says where reinforcement is provided it must be supported in the center to upper one-third of the slab during placement). If the slab is reinforced, bar size and spacing come from its design. As an example of the ACI 318 minimum for a structural slab, a 6-inch slab needs at least 0.0018 × 6 × 12 = 0.13 in² of steel per foot of width — #3 bars at 10 inches or #4 bars at 18 inches.",
  },
  {
    question: "What is the difference between #4 and 12mm rebar?",
    answer:
      "#4 is a US bar number: under ASTM A615 it has a nominal diameter of 0.500 in (12.7 mm), an area of 0.20 in² and a nominal weight of 0.668 lb/ft (0.994 kg/m). Its soft-metric designation is #13, the same bar. A 12 mm bar is a different, smaller bar specified by its diameter in millimetres: it has about 11% less cross-sectional area than a #4. Do not substitute one for the other in a design without the engineer's approval.",
  },
  {
    question: "How far apart should rebar be spaced?",
    answer:
      "It depends on the design. For shrinkage and temperature reinforcement in structural slabs, ACI 318-19 §24.4.3.3 limits spacing to the lesser of 5 times the slab thickness and 18 inches (457 mm); for any slab thicker than 3.6 inches, the 18-inch limit governs. ACI 318 does not govern slabs-on-ground unless they carry vertical loads or lateral forces from the rest of the structure to the soil (§1.4.8). In IRC stem walls in Seismic Design Categories D0–D2, vertical No. 4 bars are placed at not more than 4 feet on center.",
  },
  {
    question: "Do I need rebar in a concrete driveway?",
    answer:
      "The IRC does not set reinforcement requirements for driveways, and its slab-on-ground section does not require reinforcement in floors either. Whether to add rebar or mesh is a design decision; check your local jurisdiction, which may have its own flatwork requirements.",
  },
  {
    question: "What size rebar do I need for a footing?",
    answer:
      "The 2024 IRC prescribes footing reinforcement only in Seismic Design Categories D0, D1 and D2 (Section R403.1.3). There, a slab cast monolithically with a turned-down footing needs at least one No. 4 bar at the top and bottom of the footing, or one No. 5 or two No. 4 bars in the middle third of its depth, and concrete stem walls need No. 4 vertical bars at not more than 4 feet on center plus a No. 4 horizontal bar within 12 inches of the top. Bars must be ASTM A615, A706 or A996, Grade 40 or higher, with 3 inches of cover where concrete is cast against earth.",
  },
  {
    question: "How much does rebar weigh per foot or metre?",
    answer:
      "Nominal weight in kg/m is 0.006165 × d², with d the nominal diameter in mm — roughly d² ÷ 162. ASTM A615 nominal weights are 0.376 lb/ft (0.560 kg/m) for #3, 0.668 lb/ft (0.994 kg/m) for #4, 1.043 lb/ft (1.552 kg/m) for #5 and 1.502 lb/ft (2.235 kg/m) for #6.",
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
  headline: "What Size Rebar Do I Need? Bar Sizes and Code Rules",
  description:
    "US rebar sizes (#3–#11) with diameters and weights, what the 2024 IRC requires for slabs and footings, ACI 318 spacing limits, and when you need an engineer.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://buildcalczone.com/guides/what-size-rebar-do-i-need" },
  datePublished: "2026-06-12",
  dateModified: "2026-10-23",
  author: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  publisher: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  image: { "@type": "ImageObject", url: "https://buildcalczone.com/opengraph-image", width: 1200, height: 630 },
};

const barSizes = [
  { bar: "#3", metric: "#10", inch: "0.375", mm: "9.5", area: "0.11", lbft: "0.376", kgm: "0.560" },
  { bar: "#4", metric: "#13", inch: "0.500", mm: "12.7", area: "0.20", lbft: "0.668", kgm: "0.994" },
  { bar: "#5", metric: "#16", inch: "0.625", mm: "15.9", area: "0.31", lbft: "1.043", kgm: "1.552" },
  { bar: "#6", metric: "#19", inch: "0.750", mm: "19.1", area: "0.44", lbft: "1.502", kgm: "2.235" },
  { bar: "#7", metric: "#22", inch: "0.875", mm: "22.2", area: "0.60", lbft: "2.044", kgm: "3.042" },
  { bar: "#8", metric: "#25", inch: "1.000", mm: "25.4", area: "0.79", lbft: "2.670", kgm: "3.973" },
  { bar: "#9", metric: "#29", inch: "1.128", mm: "28.7", area: "1.00", lbft: "3.400", kgm: "5.060" },
  { bar: "#10", metric: "#32", inch: "1.270", mm: "32.3", area: "1.27", lbft: "4.303", kgm: "6.404" },
  { bar: "#11", metric: "#36", inch: "1.410", mm: "35.8", area: "1.56", lbft: "5.313", kgm: "7.907" },
];

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
        <Breadcrumb current="What Size Rebar Do I Need? Bar Sizes and Code Rules" />
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
            Structural
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
            What Size Rebar Do I Need? Bar Sizes and Code Rules
          </h1>
          <IntroText>
            Rebar size is not picked from a rule of thumb. It comes either from
            a prescriptive code provision for the element you are building or
            from an engineered design. This guide explains US bar sizes, what
            the 2024 International Residential Code (IRC) actually requires for
            slabs and footings, and the ACI 318 spacing limits — and where those
            rules stop.
          </IntroText>
        </header>

        <h2 style={sectionHeading}>How US rebar is sized</h2>
        <p style={paragraph}>
          US bars are made to ASTM A615 (and A706, A996 and others) and named
          by a bar number. For #3 to #8, the number is the nominal diameter in
          eighths of an inch — #4 is 4/8 = ½ in. From #9 up the number no
          longer matches: a #9 bar is 1.128 in, not 9/8 = 1.125 in, because
          these sizes are defined by area (#9 has 1.00 in²). A615 also lists
          each bar with a soft-metric number, which is the same bar named by
          its diameter rounded to millimetres (#4 = #13). The current edition,
          A615/A615M-26, covers bars up to No. 20 [64].
        </p>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Bar</th>
              <th style={th}>Soft metric</th>
              <th style={th}>Diameter</th>
              <th style={th}>Area (in²)</th>
              <th style={th}>Weight</th>
            </tr>
          </thead>
          <tbody>
            {barSizes.map((b) => (
              <tr key={b.bar}>
                <td style={td}>{b.bar}</td>
                <td style={td}>{b.metric}</td>
                <td style={td}>
                  {b.inch} in ({b.mm} mm)
                </td>
                <td style={td}>{b.area}</td>
                <td style={td}>
                  {b.lbft} lb/ft ({b.kgm} kg/m)
                </td>
              </tr>
            ))}
          </tbody>
        </GuideTable>
        <NoteBox>
          A soft-metric #13 bar and a #4 bar are identical. A European or UK
          12 mm bar is not: it is specified by its diameter in millimetres and
          has about 11% less area than a #4 (113 mm² vs 127 mm²). Do not
          substitute one system&apos;s bar for the other in a design without
          the engineer&apos;s approval.
        </NoteBox>

        <h2 style={sectionHeading}>What the 2024 IRC requires</h2>
        <p style={paragraph}>
          The IRC is the model code for one- and two-family homes in the US.
          Its prescriptive reinforcement rules are narrower than many people
          expect:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={listItem}>
            <strong>Slab-on-ground floors (R506):</strong> at least 3½ in
            thick. Reinforcement is not required. Where it is provided, it must
            be supported to stay in the center to upper one-third of the slab
            while the concrete is placed (R506.3.4) — mesh or bars lying on the
            ground do nothing.
          </li>
          <li style={listItem}>
            <strong>Footings in Seismic Design Categories A, B and C:</strong>{" "}
            the IRC footing details (Figure R403.1(1)) show plain concrete
            footings. Local amendments may add requirements.
          </li>
          <li style={listItem}>
            <strong>Footings in Seismic Design Categories D0, D1 and D2
            (R403.1.3):</strong> concrete or masonry stem walls on concrete
            footings need at least one No. 4 vertical bar at not more than 4 ft
            on center, and concrete stem walls also need one No. 4 horizontal
            bar within 12 in of the top. A slab cast monolithically with a
            turned-down footing needs one No. 4 bar at the top and bottom of
            the footing, or one No. 5 or two No. 4 bars in the middle third of
            the footing depth. Where the slab is not monolithic, No. 3 or
            larger hooked dowels go in at not more than 4 ft on center.
          </li>
          <li style={listItem}>
            <strong>Steel and cover (R403.1.3.5):</strong> bars to ASTM A615,
            A706 or A996, minimum Grade 40. Cover is 3 in where concrete is
            cast against earth; 1½ in (No. 5 and smaller) or 2 in (No. 6 and
            larger) in formed concrete exposed to earth or weather; ¾ in in
            formed concrete not exposed to earth or weather.
          </li>
          <li style={listItem}>
            <strong>Lap splices:</strong> bars are to be the longest lengths
            practical. Where splices are needed, lap length follows IRC Table
            R608.5.4(1), and the gap between non-contact lapped bars may not
            exceed the smaller of one-fifth of the lap length and 6 in
            (R403.1.3.5.4).
          </li>
        </ul>
        <p style={paragraph}>
          Concrete foundation walls, retaining walls and concrete above-grade
          walls have their own IRC tables (R404 and R608), with bar size and
          spacing set by wall height, soil and wind or seismic loads.
        </p>

        <h2 style={sectionHeading}>Rebar spacing in structural slabs (ACI 318)</h2>
        <p style={paragraph}>
          For a structural concrete slab, ACI 318 sets a minimum amount of
          shrinkage and temperature reinforcement. In ACI 318-19, the
          deformed-bar area must be at least 0.0018 of the gross concrete area
          (§24.4.3.2), and spacing may not exceed the lesser of 5 times the
          slab thickness (5h) and 18 in, or 457 mm (§24.4.3.3). Because 5h only
          falls below 18 in for slabs thinner than 3.6 in, the 18-in limit
          governs almost every slab.
        </p>
        <div style={formula}>
          Minimum steel per foot of width = 0.0018 × h × 12 (in²/ft)
        </div>
        <GuideTable>
          <thead>
            <tr>
              <th style={th}>Slab thickness</th>
              <th style={th}>Minimum steel</th>
              <th style={th}>#3 bars</th>
              <th style={th}>#4 bars</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>4 in</td>
              <td style={td}>0.086 in²/ft</td>
              <td style={td}>15 in max</td>
              <td style={td}>18 in max</td>
            </tr>
            <tr>
              <td style={td}>5 in</td>
              <td style={td}>0.108 in²/ft</td>
              <td style={td}>12 in max</td>
              <td style={td}>18 in max</td>
            </tr>
            <tr>
              <td style={td}>6 in</td>
              <td style={td}>0.130 in²/ft</td>
              <td style={td}>10 in max</td>
              <td style={td}>18 in max</td>
            </tr>
          </tbody>
        </GuideTable>
        <p style={paragraph}>
          The maximum spacing for each bar is its area divided by the minimum
          steel per foot, rounded down — for example 0.20 ÷ 0.130 × 12 = 18.5
          in for #4 in a 6-in slab, which the 18-in limit caps at 18 in. These
          are minimums for crack control, not a design for load.
        </p>
        <NoteBox>
          ACI 318 does not govern slabs-on-ground unless the slab carries
          vertical loads or lateral forces from other parts of the structure to
          the soil (ACI 318-19 §1.4.8). Ordinary ground-supported slabs are
          covered by the ACI 360R guide instead, which gives design methods for
          plain, reinforced, shrinkage-compensating and post-tensioned slabs.
        </NoteBox>

        <h2 style={sectionHeading}>When you need an engineer</h2>
        <p style={paragraph}>
          The IRC requires engineered design for any structural element that
          exceeds its limits or does not conform to its prescriptive provisions
          (R301.1.3). In practice, that means bar size and spacing for
          structural beams, columns, suspended slabs, retaining walls outside
          the IRC tables, and anything carrying loads the code tables do not
          cover must come from a design, not from a general guide. Your local
          building department can tell you which seismic design category and
          local amendments apply to your site.
        </p>

        <h2 style={sectionHeading}>Working out rebar weight</h2>
        <p style={paragraph}>
          Steel weighs about 7,850 kg/m³, so the nominal weight of a bar
          follows from its nominal diameter:
        </p>
        <div style={formula}>
          Weight (kg/m) = 0.006165 × d² ≈ d² ÷ 162 (d in mm)
        </div>
        <p style={paragraph}>
          For a #4 bar: 0.006165 × 12.7² = 0.994 kg/m, which matches the ASTM
          nominal weight of 0.668 lb/ft. Once you know the bar size, length and
          count, our{" "}
          <Link href="/rebar-calculator" style={link}>
            rebar calculator
          </Link>{" "}
          gives the total weight in kg and tonnes, with an allowance for lap
          splices. For the concrete itself, see the{" "}
          <Link href="/concrete-calculator" style={link}>
            concrete calculator
          </Link>
          .
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
