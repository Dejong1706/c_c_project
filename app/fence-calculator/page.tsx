import type { Metadata } from "next";
import CalcSchema from "../components/CalcSchema";
import FenceCalc from "./FenceCalc";

export const metadata: Metadata = {
  title: "Fence Calculator — Posts, Rails & Concrete Estimator | BuildCalc",
  description:
    "Calculate how many fence posts, rails, and concrete bags you need for wood, vinyl, or chain-link fences. Get even post spacing and a full materials list.",
  keywords: [
    "fence calculator",
    "fence post calculator",
    "how many fence posts do i need",
    "fence post spacing calculator",
    "fence materials calculator",
  ],
  alternates: { canonical: "/fence-calculator" },
};

const faqs = [
  {
    question: "How many fence posts do I need?",
    answer:
      "Divide your total fence length by your post spacing, round up, then add 1. For a 100 ft fence at 8 ft spacing: ⌈100 ÷ 8⌉ + 1 = 14 posts. Add 2 extra posts per gate opening.",
  },
  {
    question: "How far apart should fence posts be?",
    answer:
      "8 feet on centre is the standard for most wood and vinyl fences. Use 6 ft spacing for fences over 6 ft tall or in high-wind areas. Chain-link fences typically use 10 ft spacing.",
  },
  {
    question: "How deep should fence posts be buried?",
    answer:
      "At least 1/3 of the total post length, with a minimum of 2 feet for a 6 ft fence. In cold climates, posts must go below the frost line — typically 36–48 inches in northern regions.",
  },
  {
    question: "How many bags of concrete do I need per fence post?",
    answer:
      "For a standard 4×4 post in a 12-inch diameter hole about 24 inches deep, use 2 bags of 80 lb quick-setting concrete. Deeper holes (36+ inches) require 3–4 bags.",
  },
];

export default function FenceCalculatorPage() {
  return (
    <>
      <CalcSchema
        name="Fence Calculator"
        description="Estimate fence posts, rails, concrete, and pickets for wood, vinyl, or chain-link fences."
        url="https://buildcalczone.com/fence-calculator"
        faqs={faqs}
      />
      <FenceCalc />
    </>
  );
}
