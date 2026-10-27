import type { Metadata } from "next";
import { siteOpenGraph } from "../shared-metadata";
import CalcSchema from "../components/CalcSchema";
import CalcFaq from "../components/CalcFaq";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import MortarCalc from "./MortarCalc";

export const metadata: Metadata = {
  title: "Mortar Calculator — Cement, Sand & Bags Estimator | BuildCalc",
  description:
    "Calculate how much mortar you need for brick, block, or stone projects. Get cement, sand, and pre-mixed bag estimates for Type M, S, N, and O mortars.",
  keywords: [
    "mortar calculator",
    "mortar mix calculator",
    "how much mortar do i need",
    "cement sand ratio",
    "mortar bags calculator",
  ],
  alternates: { canonical: "/mortar-calculator" },
  openGraph: {
    ...siteOpenGraph,
    type: "website",
    title: "Mortar Calculator — Cement, Sand & Bags Estimator | BuildCalc",
    description:
      "Calculate how much mortar you need for brick, block, or stone projects. Get cement, sand, and pre-mixed bag estimates for Type M, S, N, and O mortars.",
    url: "https://buildcalczone.com/mortar-calculator",
  },
};

const faqs = [
  {
    question: "How much mortar do I need per square metre of brickwork?",
    answer:
      "The joints alone in a single-leaf wall of 215×65mm bricks with 10mm joints hold about 18 litres of mortar per square metre. Real use is higher — frogged bricks, buttering and droppings add to it — so allow extra. This calculator shows the joint volume plus your waste allowance, and allows extra headroom in the pre-mixed bag count.",
  },
  {
    question: "What's the difference between Type M, S, N, and O mortar?",
    answer:
      "They are the four ASTM C270 mortar types, strongest to weakest. Typical cement:lime:sand mixes are Type M 1:¼:3¾, Type S 1:½:4½, Type N 1:1:6 and Type O 1:2:9, with lab-tested 28-day minimums of 2,500, 1,800, 750 and 350 psi. The Brick Industry Association recommends Type N for most above-grade brickwork, Type S for reinforced or loadbearing exterior walls, Type M for foundation and retaining walls, and Type O as an alternate for interior partitions and repointing.",
  },
  {
    question: "How many 80 lb bags of pre-mixed mortar do I need?",
    answer:
      "Quikrete states that each 80 lb bag of its Mortar Mix will lay up to 37 standard bricks or 13 standard 8×8×16 in blocks. This calculator allows about 10.5 litres of joint volume per bag — roughly 35 UK-size bricks at 10 mm joints — so treat the bag count as an estimate and check the coverage printed on your product.",
  },
  {
    question: "Should I use sharp sand or builder's sand for mortar?",
    answer:
      "Use builder's (soft) sand for brick and block mortar — it has rounder, finer particles that give a workable mix. Sharp sand is coarser and is meant for concrete and screeding, not mortar joints.",
  },
];

export default function MortarCalculatorPage() {
  return (
    <>
      <CalcSchema
        name="Mortar Calculator"
        description="Estimate cement, sand, and pre-mixed mortar bags for brick, block, and stone masonry projects."
        url="https://buildcalczone.com/mortar-calculator"
        faqs={faqs}
      />
      <MortarCalc />
      <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--border)", maxWidth: "560px" }}>
        <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
          Related guides
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {[
            { href: "/guides/brick-mortar-mix-ratio", label: "Brick Mortar Mix Ratio Guide" },
            { href: "/guides/how-many-bricks-per-square-metre", label: "How Many Bricks Per Square Metre?" },
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