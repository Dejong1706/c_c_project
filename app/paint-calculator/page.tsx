import type { Metadata } from "next";
import PaintCalc from "./PaintCalc";
import CalcSchema from "../components/CalcSchema";

export const metadata: Metadata = {
  title: "Paint Calculator — How Much Paint Do I Need? | BuildCalc",
  description:
    "Free paint calculator. Enter room dimensions and get litres needed plus tin count. Covers walls, ceilings and exterior. Adjustable for 2-coat coverage.",
  keywords: [
    "paint calculator",
    "how much paint do I need",
    "paint coverage calculator",
    "wall paint calculator",
  ],
};

const faqs = [
  {
    question: "How much paint do I need for a room?",
    answer:
      "Calculate the total wall area (2 × (length + width) × height), then divide by the coverage rate (typically 10 m² per litre). Multiply by the number of coats needed.",
  },
  {
    question: "How many coats of paint do I need?",
    answer:
      "Most walls need 2 coats for even coverage, especially when changing colors significantly. A single coat may suffice for touch-ups or when using the same color.",
  },
  {
    question: "How much area does 1 litre of paint cover?",
    answer:
      "On average, 1 litre of paint covers about 10 m² per coat, though this varies by paint type, surface texture, and application method.",
  },
  {
    question: "Should I subtract windows and doors from paint calculations?",
    answer:
      "For more accurate estimates, subtract the area of large windows and doors. However, many people skip this since it provides a small buffer for touch-ups.",
  },
];

export default function Page() {
  return (
    <>
      <CalcSchema
        name="Paint Calculator"
        description="Calculate how much paint you need for walls, ceilings and exterior surfaces."
        url="https://buildcalczone.com/paint-calculator"
        faqs={faqs}
      />
      <PaintCalc />
    </>
  );
}
