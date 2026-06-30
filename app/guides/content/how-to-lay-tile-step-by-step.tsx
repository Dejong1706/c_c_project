import Link from "next/link";
import { Breadcrumb, GuideTable, NoteBox, paragraph, sectionHeading, td, th } from "./shared";

const faqs = [
  {
    question: "Do I need to seal tiles before grouting?",
    answer:
      "Porcelain and glazed ceramic tiles don't need sealing before grouting. Natural stone (marble, travertine, slate) should be sealed before grouting to prevent the grout from staining the porous surface.",
  },
  {
    question: "How long after laying tiles can I grout?",
    answer:
      "Wait at least 24 hours after setting tiles before grouting. In humid conditions or with large-format tiles, wait 48 hours. The thinset must be fully set — tiles should not move at all when pressed.",
  },
  {
    question: "What size notched trowel should I use?",
    answer:
      "For standard floor tiles (12–18 inches), use a 3/8 × 3/8 inch square-notch trowel. For large-format tiles (18 inches+), use a 1/2 × 1/2 inch notch. For wall tiles and mosaics, a 3/16 × 5/32 inch V-notch works well.",
  },
  {
    question: "Should I start tiling from the center or the wall?",
    answer:
      "Always start from the center of the room and work outward. Starting from a wall risks ending with a very thin strip of tile on the opposite side, which looks unprofessional and is structurally weak. Find the center, snap chalk lines, and dry-lay first.",
  },
  {
    question: "What is back-buttering and when do I need it?",
    answer:
      "Back-buttering means applying a thin layer of thinset to the back of the tile in addition to the floor. It's required for large-format tiles (12 inches+) and natural stone to ensure full contact and prevent hollow spots that crack over time.",
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
  headline: "How to Lay Tile Step by Step",
  description:
    "Complete step-by-step guide to laying floor and wall tiles — substrate prep, layout, thinset, setting, grouting, and sealing.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://buildcalczone.com/guides/how-to-lay-tile-step-by-step" },
  datePublished: "2026-06-25",
  dateModified: "2026-06-25",
  author: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  publisher: { "@type": "Organization", name: "BuildCalc", url: "https://buildcalczone.com" },
  image: { "@type": "ImageObject", url: "https://buildcalczone.com/opengraph-image", width: 1200, height: 630 },
};

const stepNumber: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  background: "var(--accent)",
  color: "#fff",
  fontSize: "13px",
  fontWeight: 700,
  marginRight: "10px",
  flexShrink: 0,
};
const stepRow: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  marginBottom: "24px",
};
const stepContent: React.CSSProperties = { flex: 1 };
const stepTitle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: 600,
  color: "var(--text-1)",
  marginBottom: "8px",
};

export default function HowToLayTileStepByStep() {
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
        <Breadcrumb current="How to Lay Tile Step by Step" />
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
            Tile
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
            How to Lay Tile Step by Step
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            Most tiling mistakes happen before a single tile goes down — in the
            substrate prep and layout planning. Get those right and the rest
            follows. This guide covers every stage from bare floor to finished
            grout.
          </p>
        </header>

        {/* Tools list */}
        <h2 style={sectionHeading}>What you&apos;ll need</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6px 24px",
            marginBottom: "20px",
          }}
        >
          {[
            "Notched trowel (size matched to tile)",
            "Rubber mallet",
            "Tile spacers",
            "Grout float",
            "Chalk line + pencil",
            "Spirit level",
            "Tile cutter or wet saw",
            "Sponges + clean buckets",
            "Thinset mortar",
            "Grout (sanded or unsanded)",
            "Tile sealer (for natural stone)",
            "Knee pads",
          ].map((item) => (
            <p
              key={item}
              style={{ fontSize: "14px", color: "var(--text-2)", margin: 0 }}
            >
              · {item}
            </p>
          ))}
        </div>

        {/* Steps */}
        <h2 style={sectionHeading}>Step-by-step process</h2>

        <div style={stepRow}>
          <span style={stepNumber}>1</span>
          <div style={stepContent}>
            <p style={stepTitle}>Prepare the substrate</p>
            <p style={paragraph}>
              The tile is only as good as what&apos;s underneath. The surface must be
              clean, dry, flat, and structurally sound. For concrete floors,
              fill any cracks and grind down high spots. For wood subfloors,
              install cement backer board using thinset and screws — tiling
              directly onto plywood is not recommended as it flexes and causes
              grout to crack over time.
            </p>
            <NoteBox>
              Check flatness with a long straightedge. There should be no more
              than 3mm variation over a 3m span (or 1/8&quot; over 10 ft per ANSI
              A108 standards). Any more than this and tiles will rock or crack.
            </NoteBox>
          </div>
        </div>

        <div style={stepRow}>
          <span style={stepNumber}>2</span>
          <div style={stepContent}>
            <p style={stepTitle}>Plan your layout — dry-lay first</p>
            <p style={paragraph}>
              Find the center of the room by measuring and snapping two chalk
              lines that intersect at 90°. Check they&apos;re square using the 3-4-5
              method: measure 3 ft along one line, 4 ft along the other — the
              diagonal between those two points should be exactly 5 ft.
            </p>
            <p style={paragraph}>
              Dry-lay a full row of tiles along each chalk line without
              adhesive. This shows you where cuts will fall at the edges. Adjust
              the starting point so you don&apos;t end with a sliver of tile (less
              than half a tile width) along any visible wall.
            </p>
          </div>
        </div>

        <div style={stepRow}>
          <span style={stepNumber}>3</span>
          <div style={stepContent}>
            <p style={stepTitle}>Choose the right grout joint size</p>
            <p style={paragraph}>
              Grout joints aren&apos;t just aesthetic — they accommodate tile size
              variation and substrate movement. Standard recommendations:
            </p>
            <GuideTable>
              <thead>
                <tr>
                  <th style={th}>Tile type</th>
                  <th style={th}>Recommended joint</th>
                  <th style={th}>Grout type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={td}>Rectified porcelain/ceramic</td>
                  <td style={td}>1/16&quot; – 1/8&quot; (2–3mm)</td>
                  <td style={td}>Unsanded</td>
                </tr>
                <tr>
                  <td style={td}>Standard floor tile</td>
                  <td style={td}>1/8&quot; – 3/16&quot; (3–5mm)</td>
                  <td style={td}>Sanded</td>
                </tr>
                <tr>
                  <td style={td}>Natural stone</td>
                  <td style={td}>1/8&quot; – 3/8&quot; (3–10mm)</td>
                  <td style={td}>Sanded or epoxy</td>
                </tr>
                <tr>
                  <td style={td}>Handmade / rustic tile</td>
                  <td style={td}>3/16&quot; – 3/8&quot; (5–10mm)</td>
                  <td style={td}>Sanded</td>
                </tr>
              </tbody>
            </GuideTable>
            <NoteBox>
              Use unsanded grout for joints under 1/8&quot; — sanded grout has
              aggregate too coarse for narrow joints. Never use sanded grout on
              polished marble or glass tile as it scratches the surface.
            </NoteBox>
          </div>
        </div>

        <div style={stepRow}>
          <span style={stepNumber}>4</span>
          <div style={stepContent}>
            <p style={stepTitle}>Mix and apply thinset</p>
            <p style={paragraph}>
              Mix thinset to a peanut butter consistency — thick enough to hold
              ridges when combed, but still spreadable. Let it slake for 5–10
              minutes after mixing, then mix once more before use.
            </p>
            <p style={paragraph}>
              Apply thinset with the flat side of the notched trowel, then comb
              it at 45° with the notched side. Hold the trowel at a consistent
              angle to create uniform ridges. Work in sections of 3–4 sq ft —
              don&apos;t spread more than you can tile before the thinset skins over
              (usually 20–30 minutes).
            </p>
            <NoteBox>
              For tiles 12 inches or larger, back-butter each tile with a thin
              skim coat of thinset in addition to the floor application. This
              ensures full contact and prevents hollow spots that fail under
              load.
            </NoteBox>
          </div>
        </div>

        <div style={stepRow}>
          <span style={stepNumber}>5</span>
          <div style={stepContent}>
            <p style={stepTitle}>Set the tiles</p>
            <p style={paragraph}>
              Place each tile along your chalk lines and press firmly, giving a
              slight twist to embed it into the thinset ridges. Insert spacers
              at each corner. Check level frequently with a spirit level —
              adjust with a rubber mallet by tapping gently. Never use a metal
              hammer directly on tile.
            </p>
            <p style={paragraph}>
              Work outward from the center in quadrants. Save cut tiles for the
              edges — cut these last once the full tiles are set and you can
              measure precisely.
            </p>
          </div>
        </div>

        <div style={stepRow}>
          <span style={stepNumber}>6</span>
          <div style={stepContent}>
            <p style={stepTitle}>Allow thinset to cure — then grout</p>
            <p style={paragraph}>
              Wait at least 24 hours before grouting (48 hours for large-format
              tiles or natural stone). Remove spacers before the thinset fully
              hardens — usually within 20–30 minutes of setting each tile. Once
              cured, mix grout to a smooth consistency.
            </p>
            <p style={paragraph}>
              Apply grout with a rubber float held at 45°, pressing it firmly
              into the joints in diagonal strokes. Work in 3–4 sq ft sections.
              Remove excess grout from the tile face with the edge of the float
              before it hardens.
            </p>
          </div>
        </div>

        <div style={stepRow}>
          <span style={stepNumber}>7</span>
          <div style={stepContent}>
            <p style={stepTitle}>Clean and finish</p>
            <p style={paragraph}>
              After 20–30 minutes, clean the tile surface with a damp sponge
              using diagonal strokes. Rinse the sponge frequently — dirty water
              smears grout haze back onto the tiles. Allow grout to cure 48–72
              hours before sealing.
            </p>
            <p style={paragraph}>
              Apply grout sealer to protect against staining. Natural stone
              tiles should be sealed before and after grouting. Leave expansion
              joints (filled with matching caulk, not grout) along all perimeter
              edges and at every 5–8m across large areas.
            </p>
          </div>
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
            How many tiles do you need?
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-2)",
              marginBottom: "12px",
            }}
          >
            Enter your room dimensions and tile size to get tile count, grout,
            and waste estimate.
          </p>
          <Link
            href="/tile-calculator"
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
            Use the Tile Calculator →
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
