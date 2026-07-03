import type { Metadata } from "next";
import BrickCalc from "./BrickCalc";
import CalcSchema from "../components/CalcSchema";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Brick Calculator — How Many Bricks Do I Need? | BuildCalc",
  description:
    "Free brick calculator. Enter wall length and height to get brick count with waste allowance and pallet estimate. Based on standard brick (215×102×65mm) with 10mm mortar joints.",
  keywords: [
    "brick calculator",
    "how many bricks do I need",
    "brick wall calculator",
    "bricks per square meter",
  ],
  alternates: { canonical: "/brick-calculator" },
  openGraph: {
    type: "website",
    title: "Brick Calculator — How Many Bricks Do I Need? | BuildCalc",
    description:
      "Free brick calculator. Enter wall length and height to get brick count with waste allowance and pallet estimate. Based on standard brick (215×102×65mm) with 10mm mortar joints.",
    url: "https://buildcalczone.com/brick-calculator",
  },
};

const faqs = [
  {
    question: "How many bricks do I need per square meter?",
    answer:
      "A standard single-leaf brick wall requires approximately 60 bricks per square meter, based on a standard brick size (215×102×65mm) with 10mm mortar joints.",
  },
  {
    question: "How do I calculate bricks for a wall?",
    answer:
      "Multiply the wall length by height to get the area in square meters, then multiply by 60 for a single leaf wall or 120 for a double leaf wall. Add 10% extra for breakage and waste.",
  },
  {
    question: "How many bricks are on a pallet?",
    answer:
      "A standard pallet typically holds around 500 bricks, though this varies by brick size and supplier.",
  },
  {
    question:
      "What is the difference between single leaf and double leaf walls?",
    answer:
      "A single leaf wall is one brick thick, while a double leaf (cavity) wall has two layers with a gap between them, requiring roughly double the bricks per square meter.",
  },
];

export default function Page() {
  return (
    <>
      <CalcSchema
        name="Brick Calculator"
        description="Calculate how many bricks and pallets you need for a wall, including waste allowance."
        url="https://buildcalczone.com/brick-calculator"
        faqs={faqs}
      />
      <BrickCalc />
      <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--border)", maxWidth: "560px" }}>
        <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
          Related guides
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {[
            { href: "/guides/how-to-calculate-bricks-for-a-wall", label: "How to Calculate Bricks for a Wall" },
            { href: "/guides/how-many-bricks-per-square-metre", label: "How Many Bricks Per Square Metre?" },
            { href: "/guides/brick-mortar-mix-ratio", label: "Brick Mortar Mix Ratio Guide" },
            { href: "/guides/standard-brick-sizes-by-country", label: "Standard Brick Sizes by Country" },
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
