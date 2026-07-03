import type { Metadata } from "next";
import TileCalc from "./TileCalc";
import CalcSchema from "../components/CalcSchema";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Tile Calculator — How Many Tiles Do I Need? | BuildCalc",
  description:
    "Free tile calculator. Enter room dimensions and tile size to find exact tile count and boxes needed. Grout joint and waste factor included. Instant results.",
  keywords: [
    "tile calculator",
    "how many tiles do I need",
    "floor tile calculator",
    "tile estimator",
  ],
  alternates: { canonical: "/tile-calculator" },
  openGraph: {
    type: "website",
    title: "Tile Calculator — How Many Tiles Do I Need? | BuildCalc",
    description:
      "Free tile calculator. Enter room dimensions and tile size to find exact tile count and boxes needed. Grout joint and waste factor included. Instant results.",
    url: "https://buildcalczone.com/tile-calculator",
  },
};

const faqs = [
  {
    question: "How many tiles do I need for a room?",
    answer:
      "Divide your room area by the area of a single tile (including the grout joint). For example, a 12 m² room with 60×60cm tiles needs about 33 tiles before adding waste allowance.",
  },
  {
    question: "How much extra tile should I buy for waste?",
    answer:
      "Add 10% extra for straight-laid tiles, and 15% for diagonal, herringbone, or patterned layouts to account for cuts and breakage.",
  },
  {
    question: "What size grout joint should I use?",
    answer:
      "Most floor tiles use a 3mm grout joint. Larger format tiles (60cm+) typically need wider joints of 3–6mm to accommodate size variation, while smaller mosaic tiles use narrower joints of 1.5–2mm.",
  },
  {
    question: "How many tiles come in a box?",
    answer:
      "Box quantities vary by manufacturer and tile size, but 10 tiles per box is common for medium-format floor tiles. Always check the specific product packaging.",
  },
];

export default function Page() {
  return (
    <>
      <CalcSchema
        name="Tile Calculator"
        description="Calculate how many tiles you need for floors, walls and backsplashes including grout joints and waste."
        url="https://buildcalczone.com/tile-calculator"
        faqs={faqs}
      />
      <TileCalc />
      <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--border)", maxWidth: "560px" }}>
        <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
          Related guides
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {[
            { href: "/guides/how-many-tiles-do-i-need", label: "How Many Tiles Do I Need?" },
            { href: "/guides/tile-grout-gap-guide", label: "Tile Grout Gap Guide" },
            { href: "/guides/how-to-lay-tile-step-by-step", label: "How to Lay Tile Step by Step" },
          ].map((g) => (
            <Link key={g.href} href={g.href} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--accent-text)", background: "var(--accent-light)", padding: "8px 14px", borderRadius: "8px", textDecoration: "none" }}>
              <BookOpen size={13} color="var(--accent)" />
              {g.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
