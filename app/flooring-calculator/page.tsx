import type { Metadata } from "next";
import CalcSchema from "../components/CalcSchema";
import CalcFaq from "../components/CalcFaq";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import FlooringCalc from "./FlooringCalc";

export const metadata: Metadata = {
  title: "Flooring Calculator — Sq Ft, Boxes & Waste | BuildCalc",
  description:
    "Calculate how much flooring you need for LVP, hardwood, laminate, tile, or carpet. Get square footage, box count, and waste-adjusted totals instantly.",
  keywords: [
    "flooring calculator",
    "how much flooring do i need",
    "flooring square footage calculator",
    "flooring waste calculator",
    "how many boxes of flooring do i need",
  ],
  alternates: { canonical: "/flooring-calculator" },
  openGraph: {
    type: "website",
    title: "Flooring Calculator — Sq Ft, Boxes & Waste | BuildCalc",
    description:
      "Calculate how much flooring you need for LVP, hardwood, laminate, tile, or carpet. Get square footage, box count, and waste-adjusted totals instantly.",
    url: "https://buildcalczone.com/flooring-calculator",
  },
};

const faqs = [
  {
    question: "How do I calculate how much flooring I need?",
    answer:
      "Multiply the room length by the width to get square footage, then add a waste factor. For LVP or laminate in a straight layout, add 7–8%. For diagonal or pattern layouts, add 12–15%. Divide the total by the coverage per box to get your box count.",
  },
  {
    question: "How much extra flooring should I order for waste?",
    answer:
      "For straight installations, add 7–10% depending on the material. Diagonal and herringbone patterns need 12–15% extra because of the additional cuts at the edges. Always order from the same dye lot — a partial reorder later may not match.",
  },
  {
    question: "How many boxes of LVP do I need for a 200 sq ft room?",
    answer:
      "With 7% waste, you need 214 sq ft of material. If each box covers 20 sq ft, that's 11 boxes (⌈214 ÷ 20⌉ = 11). Always round up — never down.",
  },
  {
    question: "How is carpet measured — sq ft or sq yd?",
    answer:
      "Carpet is typically sold by the square yard (1 sq yd = 9 sq ft). Measure your room in square feet, add 10% waste, then divide by 9 to get square yards. This calculator handles that conversion automatically.",
  },
];

export default function FlooringCalculatorPage() {
  return (
    <>
      <CalcSchema
        name="Flooring Calculator"
        description="Calculate square footage, box count, and waste-adjusted totals for LVP, hardwood, laminate, tile, or carpet flooring."
        url="https://buildcalczone.com/flooring-calculator"
        faqs={faqs}
      />
      <FlooringCalc />
      <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--border)", maxWidth: "560px" }}>
        <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
          Related guides
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {[
            { href: "/guides/how-many-tiles-do-i-need", label: "How Many Tiles Do I Need?" },
            { href: "/guides/how-to-lay-tile-step-by-step", label: "How to Lay Tile Step by Step" },
            { href: "/guides/tile-grout-gap-guide", label: "Tile Grout Gap Guide" },
          ].map((g) => (
            <Link key={g.href} href={g.href} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--accent-text)", background: "var(--accent-light)", padding: "8px 14px", borderRadius: "8px", textDecoration: "none" }}>
              <BookOpen size={13} color="var(--accent)" />
              {g.label}
            </Link>
          ))}
        </div>
      </div>
      <CalcFaq faqs={faqs} />
    </>
  );
}
