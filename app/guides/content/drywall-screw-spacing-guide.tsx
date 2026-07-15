import Link from "next/link";
import {
  Breadcrumb,
  sectionHeading,
  paragraph,
  formula,
  note,
  th,
  td,
} from "./shared";

const faqs = [
  {
    question: "How far apart should drywall screws be?",
    answer:
      "For walls, space screws 16 inches apart on studs in the field and 8 inches apart on edges. For ceilings, use 12 inches in the field and 8 inches on edges. These are the IRC and GA-216 standard intervals for ½-inch drywall on 16-inch OC framing.",
  },
  {
    question: "How many screws do I need per sheet of drywall?",
    answer:
      "A standard 4×8 sheet on walls at 16-inch OC framing needs approximately 32–36 screws. On ceilings at 12-inch spacing, expect 40–45 screws per sheet. Use these as planning estimates — actual count depends on stud spacing and sheet placement.",
  },
  {
    question: "What size screws should I use for drywall?",
    answer:
      "Use 1¼-inch coarse-thread screws for ½-inch drywall into wood studs. Use 1⅝-inch screws for ⅝-inch Type X drywall. For metal studs, use fine-thread drywall screws of the same lengths. Never use nails for ceiling drywall — screws are required to prevent nail pops.",
  },
  {
    question: "How deep should drywall screws be set?",
    answer:
      "Drive screws so the head dimples the paper surface slightly without breaking through it. The screw should penetrate at least ⅝ inch into wood studs. A broken paper surface weakens the hold and must be filled with an additional screw nearby.",
  },
  {
    question: "Can I use nails instead of screws for drywall?",
    answer:
      "Nails are permitted for walls by code but not recommended — they are prone to popping as lumber dries and shrinks. Screws grip better and are required for ceiling installations. Most professionals use screws exclusively.",
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
  headline: "Drywall Screw Spacing Guide",
  description:
    "Complete reference for drywall screw spacing on walls and ceilings — field spacing, edge spacing, screw sizes, and how many screws per sheet.",
  url: "https://buildcalczone.com/guides/drywall-screw-spacing-guide",
};

export default function DrywallScrewSpacingGuide() {
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
        <Breadcrumb current="Drywall Screw Spacing Guide" />
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
            Finishing
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
            Drywall Screw Spacing Guide
          </h1>
          <p style={{ fontSize: "15px", color: "var(--text-2)", lineHeight: 1.7 }}>
            Screw spacing is one of the few drywall details that&apos;s actually
            specified by code. Get it wrong and you get nail pops, loose panels,
            and failed inspections. Here&apos;s the full reference for walls,
            ceilings, and different framing spacings.
          </p>
        </header>

        {/* Quick reference */}
        <h2 style={sectionHeading}>Quick reference — GA-216 / IRC standard</h2>
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
              <th style={th}>Location</th>
              <th style={th}>Field spacing</th>
              <th style={th}>Edge spacing</th>
              <th style={th}>Framing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Walls</td>
              <td style={td}>16&quot; OC</td>
              <td style={td}>8&quot; OC</td>
              <td style={td}>16&quot; OC studs</td>
            </tr>
            <tr>
              <td style={td}>Walls</td>
              <td style={td}>24&quot; OC</td>
              <td style={td}>8&quot; OC</td>
              <td style={td}>24&quot; OC studs</td>
            </tr>
            <tr>
              <td style={td}>Ceilings</td>
              <td style={td}>12&quot; OC</td>
              <td style={td}>8&quot; OC</td>
              <td style={td}>16&quot; OC joists</td>
            </tr>
            <tr>
              <td style={td}>Ceilings</td>
              <td style={td}>12&quot; OC</td>
              <td style={td}>8&quot; OC</td>
              <td style={td}>24&quot; OC joists (⅝&quot; only)</td>
            </tr>
          </tbody>
        </table>
        <div style={note}>
          &ldquo;Field&rdquo; means the interior of the sheet — screws that hit
          intermediate framing members between the edges. &ldquo;Edge&rdquo; means
          the perimeter of the sheet where it meets a framing member at the end
          or side. Edge screws must be at least ⅜ inch from the edge of the sheet
          to avoid crumbling the core.
        </div>

        {/* Walls */}
        <h2 style={sectionHeading}>Walls — screw spacing in detail</h2>
        <p style={paragraph}>
          For ½-inch drywall on 16-inch OC wood studs — the most common residential
          wall assembly:
        </p>
        <ul style={{ paddingLeft: "20px", margin: "0 0 14px" }}>
          <li style={{ fontSize: "15px", color: "var(--text-2)", lineHeight: 1.8, marginBottom: "6px" }}>
            <strong>Field screws:</strong> Every 16 inches along each intermediate stud
          </li>
          <li style={{ fontSize: "15px", color: "var(--text-2)", lineHeight: 1.8, marginBottom: "6px" }}>
            <strong>Edge screws:</strong> Every 8 inches along top and bottom plates
            and any end stud
          </li>
          <li style={{ fontSize: "15px", color: "var(--text-2)", lineHeight: 1.8, marginBottom: "6px" }}>
            <strong>Butt joints:</strong> 8 inches OC on both sheets at the joint
          </li>
        </ul>
        <div style={formula}>
          Screws per 4&times;8 wall sheet (16&quot; OC) &asymp; 32–36 screws
        </div>
        <p style={paragraph}>
          For 24-inch OC framing, field screws space out to 24 inches, reducing
          the total count per sheet slightly — but edge spacing stays at 8 inches.
        </p>
        <div style={note}>
          Hang wall sheets horizontally (long edge parallel to floor) on walls
          taller than 8 feet. This positions the tapered edges at a comfortable
          taping height and reduces the total linear footage of joints to finish.
        </div>

        {/* Ceilings */}
        <h2 style={sectionHeading}>Ceilings — tighter spacing required</h2>
        <p style={paragraph}>
          Ceiling drywall fights gravity and is more prone to sag — tighter
          screw spacing is required by GA-216:
        </p>
        <ul style={{ paddingLeft: "20px", margin: "0 0 14px" }}>
          <li style={{ fontSize: "15px", color: "var(--text-2)", lineHeight: 1.8, marginBottom: "6px" }}>
            <strong>Field screws:</strong> Every 12 inches along each joist
          </li>
          <li style={{ fontSize: "15px", color: "var(--text-2)", lineHeight: 1.8, marginBottom: "6px" }}>
            <strong>Edge screws:</strong> Every 8 inches along perimeter framing
          </li>
        </ul>
        <div style={formula}>
          Screws per 4&times;8 ceiling sheet (16&quot; OC joists) &asymp; 40–45 screws
        </div>
        <p style={paragraph}>
          For 24-inch OC ceiling joists, use ⅝-inch drywall only — ½-inch will
          sag between joists at that span. Screw spacing remains 12 inches in
          the field even at 24-inch OC.
        </p>
        <div style={note}>
          Always install ceiling drywall before walls. The wall sheets will
          support the ceiling sheet edges and prevent them from drooping over time.
          Never hang ceiling drywall alone — use a drywall lift (rental ~$50–$80/day)
          or a helper.
        </div>

        {/* Screw sizes */}
        <h2 style={sectionHeading}>Screw size reference</h2>
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
              <th style={th}>Application</th>
              <th style={th}>Screw size</th>
              <th style={th}>Thread type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>½&quot; drywall into wood studs</td>
              <td style={td}>1¼&quot; (6d equivalent)</td>
              <td style={td}>Coarse thread</td>
            </tr>
            <tr>
              <td style={td}>⅝&quot; Type X into wood studs</td>
              <td style={td}>1⅝&quot;</td>
              <td style={td}>Coarse thread</td>
            </tr>
            <tr>
              <td style={td}>½&quot; drywall into metal studs</td>
              <td style={td}>1¼&quot;</td>
              <td style={td}>Fine thread (S-12)</td>
            </tr>
            <tr>
              <td style={td}>Double-layer drywall</td>
              <td style={td}>1⅝&quot; base layer, 1¼&quot; face</td>
              <td style={td}>Coarse thread</td>
            </tr>
            <tr>
              <td style={td}>Drywall to drywall (face layer only)</td>
              <td style={td}>1&quot; Type G</td>
              <td style={td}>Coarse thread</td>
            </tr>
          </tbody>
        </table>
        <div style={note}>
          Screws must penetrate at least ⅝ inch into wood framing members.
          For metal studs, penetration of at least ⅜ inch through the stud is
          required. Use a dimpler bit to set screws consistently — the head should
          create a slight dimple without tearing the paper face.
        </div>

        {/* Common mistakes */}
        <h2 style={sectionHeading}>Common screw mistakes to avoid</h2>
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
              <th style={th}>Mistake</th>
              <th style={th}>Result</th>
              <th style={th}>Fix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Over-driven screw (paper torn)</td>
              <td style={td}>Weak hold, must be refilled</td>
              <td style={td}>Add a new screw 2&quot; away</td>
            </tr>
            <tr>
              <td style={td}>Under-driven screw (proud of surface)</td>
              <td style={td}>Blocks taping, shows through paint</td>
              <td style={td}>Drive deeper with dimpler bit</td>
            </tr>
            <tr>
              <td style={td}>Screw too close to edge (&lt;⅜&quot;)</td>
              <td style={td}>Core crumbles, no holding power</td>
              <td style={td}>Move screw &frac12;&quot; from edge minimum</td>
            </tr>
            <tr>
              <td style={td}>Wrong thread type on metal studs</td>
              <td style={td}>Screw strips out, sheet loose</td>
              <td style={td}>Use fine-thread (S-12) for metal</td>
            </tr>
            <tr>
              <td style={td}>Spacing too wide on ceilings</td>
              <td style={td}>Sheet sags, nail pops over time</td>
              <td style={td}>Add screws to meet 12&quot; OC requirement</td>
            </tr>
          </tbody>
        </table>

        {/* Screws per sheet estimator */}
        <h2 style={sectionHeading}>Screws per sheet — planning guide</h2>
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
              <th style={th}>Location</th>
              <th style={th}>Framing OC</th>
              <th style={th}>Per 4&times;8 sheet</th>
              <th style={th}>Per 4&times;12 sheet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Walls</td>
              <td style={td}>16&quot;</td>
              <td style={td}>~34 screws</td>
              <td style={td}>~50 screws</td>
            </tr>
            <tr>
              <td style={td}>Walls</td>
              <td style={td}>24&quot;</td>
              <td style={td}>~28 screws</td>
              <td style={td}>~42 screws</td>
            </tr>
            <tr>
              <td style={td}>Ceilings</td>
              <td style={td}>16&quot;</td>
              <td style={td}>~42 screws</td>
              <td style={td}>~62 screws</td>
            </tr>
          </tbody>
        </table>
        <p style={paragraph}>
          A standard 5-lb box of 1¼-inch coarse-thread screws contains approximately
          660 screws — enough for roughly 19 sheets at wall spacing. Order one box
          per 15–18 sheets for walls, one box per 12–15 sheets for ceilings.
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
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--text-1)",
              marginBottom: "6px",
            }}
          >
            How many sheets do you need?
          </p>
          <p style={{ fontSize: "14px", color: "var(--text-2)", marginBottom: "12px" }}>
            Enter your room dimensions to get sheet count, joint compound, tape,
            and screw estimates in one step.
          </p>
          <Link
            href="/drywall-calculator"
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
            Use the Drywall Calculator &rarr;
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
            <p style={{ fontSize: "14px", color: "var(--text-2)", lineHeight: 1.7 }}>
              {f.answer}
            </p>
          </div>
        ))}
      </article>
    </>
  );
}
