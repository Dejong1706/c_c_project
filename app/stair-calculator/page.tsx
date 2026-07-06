import type { Metadata } from "next";
import CalcSchema from "../components/CalcSchema";
import StairCalc from "./StairCalc";

export const metadata: Metadata = {
  title: "Stair Calculator — Rise, Run & Stringer Length | BuildCalc",
  description:
    "Calculate stair risers, treads, total run, and stringer length for IRC-compliant residential stairs. Includes code check for riser height, tread depth, and comfort angle.",
  keywords: [
    "stair calculator",
    "stair rise and run calculator",
    "stringer length calculator",
    "how many steps do i need",
    "stair riser calculator",
  ],
  alternates: { canonical: "/stair-calculator" },
};

const faqs = [
  {
    question: "How do I calculate stair rise and run?",
    answer:
      "Divide your total floor-to-floor height by your target riser height and round up to get the number of risers. Then back-derive the actual riser by dividing total rise by riser count — this ensures all risers are equal. Treads = risers minus 1. Total run = treads × tread depth.",
  },
  {
    question: "What is the maximum riser height per building code?",
    answer:
      'The IRC (International Residential Code) sets a maximum riser height of 7¾ inches (7.75") and a minimum tread depth of 10 inches for residential stairs. All risers in a single flight must be within ⅜ inch of each other.',
  },
  {
    question: "How do I calculate stringer length?",
    answer:
      "Use the Pythagorean theorem: stringer length = √(total rise² + total run²). For a standard mount stair, the rise used is total rise minus one riser height (because the deck face acts as the top tread). Add 6–12 inches when purchasing lumber to allow for the top plumb cut and bottom seat cut.",
  },
  {
    question: "What is the comfortable stair angle?",
    answer:
      "Residential stairs should be between 30° and 37° for comfortable use. The ergonomic comfort formula is: Rise + Run = 17–18 inches. A 7-inch rise with 11-inch run (sum = 18) is widely considered the most comfortable combination.",
  },
  {
    question: "How many steps do I need for a 9-foot ceiling?",
    answer:
      "A 9 ft floor-to-floor height is 108 inches. At a 7-inch target riser: ⌈108 ÷ 7⌉ = 16 risers, actual riser = 108 ÷ 16 = 6.75 inches. At 7.5-inch target: ⌈108 ÷ 7.5⌉ = 15 risers, actual riser = 7.2 inches. Either is code-compliant.",
  },
];

export default function StairCalculatorPage() {
  return (
    <>
      <CalcSchema
        name="Stair Calculator"
        description="Calculate riser count, actual riser height, tread count, total run, and stringer length for IRC-compliant residential stairs."
        url="https://buildcalczone.com/stair-calculator"
        faqs={faqs}
      />
      <StairCalc />
    </>
  );
}
