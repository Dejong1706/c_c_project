import type { Metadata } from "next";
import Link from "next/link";
import {
  IconBuildingFactory2,
  IconPackage,
  IconWall,
  IconTool,
  IconLayoutGrid,
  IconPaint,
  IconWeight,
  IconShovel,
  IconArrowsExchange,
  IconFence,
  IconWood,
  IconPlant2,
  IconStairs,
  IconWallpaper,
  IconBuildingCottage,
  IconCheck,
  IconBook2,
} from "@tabler/icons-react";
import type { TablerIcon } from "@tabler/icons-react";
import QuickCalc from "./components/QuickCalc";

export const metadata: Metadata = {
  title: "BuildCalc — Free Construction Calculators",
  description:
    "Free construction calculators for concrete volume, tile quantity, rebar weight, brick count and more. Instant results in metric and imperial.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "BuildCalc — Free Construction Calculators",
    description:
      "Free construction calculators for concrete volume, tile quantity, rebar weight, brick count and more. Instant results in metric and imperial.",
    url: "https://buildcalczone.com",
  },
};

// 작업(프로젝트) 단위로 계산기 + 가이드를 묶어서 보여줌
const projects: {
  title: string;
  icon: TablerIcon;
  calcs: { href: string; label: string }[];
  guides: { href: string; label: string }[];
}[] = [
  {
    title: "Pour a concrete slab",
    icon: IconBuildingFactory2,
    calcs: [
      { href: "/concrete-calculator", label: "Concrete" },
      { href: "/concrete-bags", label: "Concrete bags" },
      { href: "/rebar-calculator", label: "Rebar" },
    ],
    guides: [
      { href: "/guides/how-to-calculate-concrete-volume", label: "How to Calculate Concrete Volume" },
      { href: "/guides/how-to-mix-concrete-by-hand", label: "How to Mix Concrete by Hand" },
      { href: "/guides/concrete-curing-time-guide", label: "Concrete Curing Time Guide" },
    ],
  },
  {
    title: "Build a brick wall",
    icon: IconWall,
    calcs: [
      { href: "/brick-calculator", label: "Brick" },
      { href: "/mortar-calculator", label: "Mortar" },
    ],
    guides: [
      { href: "/guides/brick-mortar-mix-ratio", label: "Mortar Mix Ratio: Type N, S, M" },
      { href: "/guides/how-to-calculate-bricks-for-a-wall", label: "How to Calculate Bricks for a Wall" },
      { href: "/guides/single-vs-double-leaf-brick-wall", label: "Single vs Double Leaf Brick Wall" },
    ],
  },
  {
    title: "Build stairs",
    icon: IconStairs,
    calcs: [{ href: "/stair-calculator", label: "Stair" }],
    guides: [
      { href: "/guides/stair-building-code-requirements", label: "Stair Building Code Requirements (IRC)" },
      { href: "/guides/how-to-calculate-stair-rise-and-run", label: "How to Calculate Stair Rise and Run" },
    ],
  },
  {
    title: "Tile or floor a room",
    icon: IconLayoutGrid,
    calcs: [
      { href: "/tile-calculator", label: "Tile" },
      { href: "/flooring-calculator", label: "Flooring" },
    ],
    guides: [
      { href: "/guides/how-many-tiles-do-i-need", label: "How Many Tiles Do I Need?" },
      { href: "/guides/tile-grout-gap-guide", label: "Tile Grout Gap Guide" },
      { href: "/guides/how-to-lay-tile-step-by-step", label: "How to Lay Tile Step by Step" },
    ],
  },
  {
    title: "Drywall and paint",
    icon: IconPaint,
    calcs: [
      { href: "/drywall-calculator", label: "Drywall" },
      { href: "/paint-calculator", label: "Paint" },
    ],
    guides: [
      { href: "/guides/how-to-calculate-drywall-sheets", label: "How to Calculate Drywall Sheets" },
      { href: "/guides/how-to-calculate-wall-area-for-painting", label: "Wall Area for Painting" },
      { href: "/guides/how-to-calculate-paint-coverage", label: "How to Calculate Paint Coverage" },
    ],
  },
  {
    title: "Fence and yard",
    icon: IconFence,
    calcs: [
      { href: "/fence-calculator", label: "Fence" },
      { href: "/mulch-calculator", label: "Mulch" },
      { href: "/excavation-calculator", label: "Excavation" },
    ],
    guides: [
      { href: "/guides/how-to-calculate-fence-post-spacing", label: "How to Calculate Fence Post Spacing" },
      { href: "/guides/how-much-mulch-do-i-need", label: "How Much Mulch Do I Need?" },
    ],
  },
];

const allCalcs: { href: string; icon: TablerIcon; title: string }[] = [
  { href: "/concrete-calculator", icon: IconBuildingFactory2, title: "Concrete" },
  { href: "/concrete-bags", icon: IconPackage, title: "Concrete bags" },
  { href: "/rebar-calculator", icon: IconWeight, title: "Rebar" },
  { href: "/brick-calculator", icon: IconWall, title: "Brick" },
  { href: "/mortar-calculator", icon: IconTool, title: "Mortar" },
  { href: "/stair-calculator", icon: IconStairs, title: "Stair" },
  { href: "/roof-pitch-calculator", icon: IconBuildingCottage, title: "Roof pitch" },
  { href: "/tile-calculator", icon: IconLayoutGrid, title: "Tile" },
  { href: "/flooring-calculator", icon: IconWood, title: "Flooring" },
  { href: "/paint-calculator", icon: IconPaint, title: "Paint" },
  { href: "/drywall-calculator", icon: IconWallpaper, title: "Drywall" },
  { href: "/fence-calculator", icon: IconFence, title: "Fence" },
  { href: "/mulch-calculator", icon: IconPlant2, title: "Mulch" },
  { href: "/excavation-calculator", icon: IconShovel, title: "Excavation" },
  { href: "/unit-converter", icon: IconArrowsExchange, title: "Unit converter" },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BuildCalc",
  url: "https://buildcalczone.com",
  description: "Free construction calculators for concrete, tiles, bricks, rebar, paint and more.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://buildcalczone.com/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const sectionTitle: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: 600,
  color: "var(--text-1)",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <div style={{ maxWidth: "1160px", display: "flex", flexDirection: "column", gap: "48px" }}>
        {/* Hero — 홈에서 바로 계산 */}
        <section style={{ display: "flex", gap: "32px", flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ flex: "1 1 320px", minWidth: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
            <h1 style={{ fontSize: "36px", fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.01em" }}>
              Free construction calculators
            </h1>
            <p style={{ fontSize: "16px", color: "var(--text-2)", lineHeight: 1.65 }}>
              Get material quantities in seconds — try it right here, or open a
              full calculator for more shapes, metric units and waste options.
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", marginTop: "4px" }}>
              {["Free, no sign-up", "Metric and imperial", "Every formula explained in a guide"].map((t) => (
                <li key={t} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "var(--text-2)" }}>
                  <IconCheck size={16} color="var(--accent)" stroke={2.4} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ flex: "1.3 1 440px", minWidth: 0 }}>
            <QuickCalc />
          </div>
        </section>

        {/* Projects — 계산기 + 가이드 묶음 */}
        <section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <h2 style={sectionTitle}>What are you building?</h2>
            <p style={{ fontSize: "14px", color: "var(--text-2)", marginTop: "4px" }}>
              The calculators and guides for each job, together in one place.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "14px" }}>
            {projects.map((p) => (
              <div
                key={p.title}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "14px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "var(--accent-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <p.icon size={22} color="var(--accent)" stroke={1.6} />
                  </span>
                  <h3 style={{ fontSize: "17px", fontWeight: 600 }}>{p.title}</h3>
                </div>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {p.calcs.map((c) => (
                    <Link key={c.href} href={c.href} className="home-calc-pill">
                      {c.label}
                    </Link>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid var(--surface-2)", paddingTop: "8px" }}>
                  {p.guides.map((g) => (
                    <Link key={g.href} href={g.href} className="home-guide-link">
                      <IconBook2 size={14} color="var(--accent)" stroke={1.8} style={{ flexShrink: 0 }} />
                      {g.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All calculators */}
        <section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
            <h2 style={sectionTitle}>All calculators</h2>
            <Link href="/guides" style={{ fontSize: "14px", fontWeight: 600, color: "var(--accent)", textDecoration: "none" }}>
              Browse all guides →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "10px" }}>
            {allCalcs.map((c) => (
              <Link key={c.href} href={c.href} className="home-calc-tile">
                <c.icon size={20} color="var(--accent)" stroke={1.6} style={{ flexShrink: 0 }} />
                {c.title}
              </Link>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        .home-calc-pill {
          font-size: 14px;
          font-weight: 600;
          color: white;
          background: var(--accent);
          padding: 8px 14px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.15s;
        }
        .home-calc-pill:hover { background: var(--accent-text); }
        .home-guide-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--accent-text);
          padding: 6px 0;
          text-decoration: none;
        }
        .home-guide-link:hover { text-decoration: underline; }
        .home-calc-tile {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 12px 14px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-1);
          text-decoration: none;
          transition: border-color 0.15s;
        }
        .home-calc-tile:hover { border-color: var(--accent); }
      `}</style>
    </>
  );
}
