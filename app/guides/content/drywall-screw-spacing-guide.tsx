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
      "Under 2024 IRC Table R702.3.5 (no adhesive), the maximum screw spacing along each framing member is 16 inches on walls framed 16 inches on center, 12 inches on walls framed 24 inches on center, and 12 inches on ceilings. The same spacing applies at sheet edges and in the field — 8 inches is the nail spacing for walls, not a screw edge spacing.",
  },
  {
    question: "How many screws do I need per sheet of drywall?",
    answer:
      "At the IRC maximum spacing, with a screw at each end of every framing member, a 4×8 sheet needs 28 screws on a wall framed 16 inches on center and 35 screws on a ceiling framed 16 inches on center (sheet perpendicular to framing). A 4×12 sheet needs 40 and 50. These are code-minimum counts; closer spacing is allowed.",
  },
  {
    question: "What size screws should I use for drywall?",
    answer:
      "The 2024 IRC (R702.3.5.1) requires Type W or Type S screws (ASTM C1002) that penetrate wood framing at least ⅝ inch, so screw length must be at least board thickness + ⅝ inch: 1⅛ inch for ½-inch board and 1¼ inch for ⅝-inch board. 1¼-inch screws meet both. For steel studs thinner than 0.033 inch, use Type S screws that penetrate the steel at least ⅜ inch.",
  },
  {
    question: "Can I use nails instead of screws for drywall?",
    answer:
      "Yes. 2024 IRC Table R702.3.5 permits nails on both walls and ceilings, at closer spacing than screws: 7 inches maximum on ceilings and 8 inches on walls (no adhesive), using the nail sizes listed in the table. Screws are not required by the IRC for ceilings.",
  },
  {
    question: "Can I use ½-inch drywall on a ceiling with joists 24 inches on center?",
    answer:
      "Yes, if the board runs perpendicular to the joists — 2024 IRC Table R702.3.5 lists ½-inch ceiling board at 24 inches on center with screws at 12 inches. If the ceiling will get a water-based texture, footnote 4 of the table requires ⅝-inch board or ½-inch sag-resistant ceiling board instead.",
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
    "Drywall screw spacing for walls and ceilings under 2024 IRC Table R702.3.5, screw types and lengths, and code-minimum screws per sheet.",
  url: "https://buildcalczone.com/guides/drywall-screw-spacing-guide",
};

const li = {
  fontSize: "15px",
  color: "var(--text-2)",
  lineHeight: 1.8,
  marginBottom: "6px",
};

const table = {
  width: "100%",
  borderCollapse: "collapse" as const,
  margin: "12px 0 20px",
  fontSize: "14px",
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
            Fastener spacing for drywall (gypsum board) is set by the building
            code. In the US, the 2024 International Residential Code (IRC) lists
            the maximum screw and nail spacing in Table R702.3.5 and the screw
            requirements in Section R702.3.5.1. Here&apos;s that reference for
            walls, ceilings, and 16- or 24-inch framing.
          </p>
        </header>

        {/* Quick reference */}
        <h2 style={sectionHeading}>Quick reference — 2024 IRC Table R702.3.5</h2>
        <p style={paragraph}>
          Maximum fastener spacing along each framing member, for board
          installed without adhesive:
        </p>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Location</th>
              <th style={th}>Framing</th>
              <th style={th}>Board</th>
              <th style={th}>Screws</th>
              <th style={th}>Nails</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Walls</td>
              <td style={td}>16&quot; OC</td>
              <td style={td}>½&quot; or ⅝&quot;</td>
              <td style={td}>16&quot;</td>
              <td style={td}>8&quot;</td>
            </tr>
            <tr>
              <td style={td}>Walls</td>
              <td style={td}>24&quot; OC</td>
              <td style={td}>½&quot; or ⅝&quot;</td>
              <td style={td}>12&quot;</td>
              <td style={td}>8&quot;</td>
            </tr>
            <tr>
              <td style={td}>Ceilings</td>
              <td style={td}>16&quot; OC</td>
              <td style={td}>½&quot; or ⅝&quot;</td>
              <td style={td}>12&quot;</td>
              <td style={td}>7&quot;</td>
            </tr>
            <tr>
              <td style={td}>Ceilings</td>
              <td style={td}>24&quot; OC</td>
              <td style={td}>½&quot; or ⅝&quot;, perpendicular to joists</td>
              <td style={td}>12&quot;</td>
              <td style={td}>7&quot;</td>
            </tr>
            <tr>
              <td style={td}>Garage ceiling under habitable rooms</td>
              <td style={td}>24&quot; OC</td>
              <td style={td}>⅝&quot; Type X, perpendicular</td>
              <td style={td}>6&quot;</td>
              <td style={td}>6&quot;</td>
            </tr>
          </tbody>
        </table>
        <div style={note}>
          The table gives one maximum spacing per framing member — it does not
          set a separate, tighter &ldquo;edge&rdquo; spacing for screws. The 8&quot;
          figure often quoted for walls is the <strong>nail</strong> spacing.
          Installing with adhesive allows wider spacing (see the table&apos;s
          adhesive rows). The IRC sets a minimum fastener distance of ⅜&quot; from
          board edges and ends only for gypsum ceilings used as diaphragms
          (Table R702.3.6); for other work, follow the board manufacturer&apos;s
          instructions.
        </div>

        {/* Walls */}
        <h2 style={sectionHeading}>Walls — screw spacing in detail</h2>
        <p style={paragraph}>
          The IRC lets wall board run either direction — horizontal or vertical
          (R702.3.5). All edges and ends must land on framing, except edges and
          ends that run perpendicular to the framing.
        </p>
        <ul style={{ paddingLeft: "20px", margin: "0 0 14px" }}>
          <li style={li}>
            <strong>16&quot; OC studs:</strong> screws no more than 16 inches apart
            along every stud the sheet crosses, including the studs at the sheet
            ends
          </li>
          <li style={li}>
            <strong>24&quot; OC studs:</strong> screws no more than 12 inches apart
            — not 24 inches
          </li>
          <li style={li}>
            <strong>Butt joints:</strong> both sheets are screwed to the shared
            stud at the same maximum spacing
          </li>
        </ul>
        <div style={formula}>
          4&times;8 sheet, horizontal on 16&quot; OC: 7 studs &times; (48 &divide; 16 + 1)
          = 7 &times; 4 = 28 screws
        </div>

        {/* Ceilings */}
        <h2 style={sectionHeading}>Ceilings — 12-inch maximum</h2>
        <ul style={{ paddingLeft: "20px", margin: "0 0 14px" }}>
          <li style={li}>
            <strong>Screws:</strong> no more than 12 inches apart along each
            joist, at 16&quot; or 24&quot; OC
          </li>
          <li style={li}>
            <strong>½&quot; board at 24&quot; OC:</strong> allowed when installed
            perpendicular to the joists
          </li>
          <li style={li}>
            <strong>Water-based texture:</strong> the board must run
            perpendicular to the framing, and thickness goes up — ⅜&quot; to
            ½&quot; at 16&quot; OC, ½&quot; to ⅝&quot; at 24&quot; OC — or use ½&quot;
            sag-resistant ceiling board (Table R702.3.5, footnote 4)
          </li>
          <li style={li}>
            <strong>⅜&quot; single layer:</strong> not allowed on ceilings that get
            a water-based texture or that support insulation above
          </li>
        </ul>
        <div style={formula}>
          4&times;8 sheet on 16&quot; OC joists: 7 joists &times; (48 &divide; 12 + 1)
          = 7 &times; 5 = 35 screws
        </div>
        <div style={note}>
          Common practice is to hang the ceiling before the walls. This is a
          rule of thumb, not a code requirement.
        </div>

        {/* Screw sizes */}
        <h2 style={sectionHeading}>Screw type and length</h2>
        <p style={paragraph}>
          2024 IRC R702.3.5.1: screws into wood must be Type W or Type S
          (ASTM C1002) and penetrate the wood at least ⅝ inch. Into steel studs
          thinner than 0.033 inch, use Type S (or ASTM C1513 bugle head) screws
          that penetrate the steel at least ⅜ inch; for 0.033–0.112 inch steel,
          use ASTM C954 (or C1513 bugle head) screws.
        </p>
        <div style={formula}>
          Minimum screw length (wood) = total board thickness + ⅝&quot;
        </div>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Application</th>
              <th style={th}>Minimum length</th>
              <th style={th}>Typical screw</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>½&quot; board into wood</td>
              <td style={td}>1⅛&quot;</td>
              <td style={td}>1¼&quot; Type W (coarse)</td>
            </tr>
            <tr>
              <td style={td}>⅝&quot; board into wood</td>
              <td style={td}>1¼&quot;</td>
              <td style={td}>1¼&quot; Type W (coarse)</td>
            </tr>
            <tr>
              <td style={td}>½&quot; board into steel (&lt;0.033&quot;)</td>
              <td style={td}>⅞&quot;</td>
              <td style={td}>1&quot; Type S (fine)</td>
            </tr>
            <tr>
              <td style={td}>Two layers ½&quot; into wood — base layer</td>
              <td style={td}>1⅛&quot;</td>
              <td style={td}>1¼&quot; Type W</td>
            </tr>
            <tr>
              <td style={td}>Two layers ½&quot; into wood — face layer</td>
              <td style={td}>1⅝&quot;</td>
              <td style={td}>1⅝&quot; Type W</td>
            </tr>
          </tbody>
        </table>
        <div style={note}>
          Type G screws (ASTM C1002) fasten gypsum board to gypsum board, for
          example a face layer screwed only into the base layer. Follow the
          board manufacturer&apos;s instructions for their length and spacing.
          Setting each head just below the surface without breaking the face
          paper is common practice; the IRC doesn&apos;t address setting depth.
        </div>

        {/* Common mistakes */}
        <h2 style={sectionHeading}>Common screw mistakes to avoid</h2>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Mistake</th>
              <th style={th}>Why it&apos;s wrong</th>
              <th style={th}>Fix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>16&quot; spacing on ceilings</td>
              <td style={td}>Ceiling maximum is 12&quot;</td>
              <td style={td}>Screws at 12&quot; or less</td>
            </tr>
            <tr>
              <td style={td}>24&quot; spacing on 24&quot; OC walls</td>
              <td style={td}>Wall maximum at 24&quot; OC is 12&quot;</td>
              <td style={td}>Screws at 12&quot; or less</td>
            </tr>
            <tr>
              <td style={td}>Screw too short</td>
              <td style={td}>Less than ⅝&quot; into wood</td>
              <td style={td}>Board thickness + ⅝&quot; or longer</td>
            </tr>
            <tr>
              <td style={td}>Coarse-thread (Type W) screws in thin steel studs</td>
              <td style={td}>Steel &lt;0.033&quot; needs Type S (or C1513)</td>
              <td style={td}>Fine-thread Type S</td>
            </tr>
            <tr>
              <td style={td}>Board edge or end between framing</td>
              <td style={td}>Edges and ends parallel to framing must land on it</td>
              <td style={td}>Cut the sheet to break on a stud or joist</td>
            </tr>
          </tbody>
        </table>

        {/* Screws per sheet estimator */}
        <h2 style={sectionHeading}>Screws per sheet — code minimum</h2>
        <p style={paragraph}>
          Counts below use the maximum spacing above, a screw at each end of
          every framing member, and the sheet perpendicular to the framing.
          Closer spacing is allowed, so treat these as the minimum.
        </p>
        <table style={table}>
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
              <td style={td}>28 screws</td>
              <td style={td}>40 screws</td>
            </tr>
            <tr>
              <td style={td}>Walls</td>
              <td style={td}>24&quot;</td>
              <td style={td}>25 screws</td>
              <td style={td}>35 screws</td>
            </tr>
            <tr>
              <td style={td}>Ceilings</td>
              <td style={td}>16&quot;</td>
              <td style={td}>35 screws</td>
              <td style={td}>50 screws</td>
            </tr>
            <tr>
              <td style={td}>Ceilings</td>
              <td style={td}>24&quot;</td>
              <td style={td}>25 screws</td>
              <td style={td}>35 screws</td>
            </tr>
          </tbody>
        </table>
        <p style={paragraph}>
          Screws per box vary by brand, length, and box weight — check the
          count on the label before ordering.
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
