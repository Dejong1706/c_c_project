import type { Metadata } from "next";
import CalcSchema from "../components/CalcSchema";
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
};

const faqs = [
  {
    question: "How much mortar do I need per square metre of brickwork?",
    answer:
      "A standard single-leaf brick wall (215×65mm bricks, 10mm joints) uses roughly 20–25 litres of wet mortar per square metre. This calculator works it out from your exact wall size, masonry unit, and mortar type.",
  },
  {
    question: "What's the difference between Type M, S, N, and O mortar?",
    answer:
      "Per ASTM C270, Type M (1:0.25:3) is strongest at 2,500 psi for foundations and below-grade work. Type S (1:0.5:4.5) at 1,800 psi suits structural walls. Type N (1:1:6) at 750 psi is the most common choice for above-grade residential brickwork. Type O (1:2:9) at 350 psi is for interior, non-load-bearing walls only.",
  },
  {
    question: "How many 80 lb bags of pre-mixed mortar do I need?",
    answer:
      "Each 80 lb (~36 kg) bag of pre-mixed mortar yields about 10.5 litres of wet mortar. Divide your total mortar volume by 10.5 to get the bag count — this calculator does that for you automatically, including your waste allowance.",
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
    </>
  );
}