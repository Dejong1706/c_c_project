import type { Metadata } from "next";
import CalcSchema from "../components/CalcSchema";
import MulchCalc from "./MulchCalc";

export const metadata: Metadata = {
  title: "Mulch Calculator — Cubic Yards & Bags Estimator | BuildCalc",
  description:
    "Calculate how much mulch you need in cubic yards or bags for any garden bed. Enter your area and depth to get an instant estimate with waste allowance.",
  keywords: [
    "mulch calculator",
    "how much mulch do i need",
    "cubic yards of mulch calculator",
    "mulch bags calculator",
    "how many bags of mulch do i need",
  ],
  alternates: { canonical: "/mulch-calculator" },
};

const faqs = [
  {
    question: "How do I calculate how much mulch I need?",
    answer:
      "Multiply your area in square feet by the depth in inches, then divide by 324. This gives you cubic yards. For example, a 200 sq ft bed at 3 inches deep needs 200 × 3 ÷ 324 = 1.85 cubic yards.",
  },
  {
    question: "How many bags of mulch do I need per cubic yard?",
    answer:
      "One cubic yard equals 27 cubic feet. A standard 2 cu ft bag gives you 13.5 bags per cubic yard. A 3 cu ft bag gives you 9 bags per cubic yard. Always round up to the nearest whole bag.",
  },
  {
    question: "How deep should I apply mulch?",
    answer:
      "For flower beds and garden borders, 2–3 inches is ideal. For weed suppression in paths or utility areas, use 3–4 inches. Playground areas need a minimum of 6 inches per CPSC guidelines. Keep mulch 2–3 inches away from plant stems and tree trunks to prevent rot.",
  },
  {
    question: "How many cubic yards of mulch do I need for 1,000 square feet?",
    answer:
      "At 2 inches deep: 1,000 × 2 ÷ 324 = 6.17 cubic yards. At 3 inches deep: 1,000 × 3 ÷ 324 = 9.26 cubic yards. Add 10% for waste and settling, so order 7 or 10 cubic yards respectively.",
  },
  {
    question: "Should I buy mulch by the bag or in bulk?",
    answer:
      "Buy bags if you need less than 3 cubic yards — it's more convenient and no delivery fee. For larger projects, bulk mulch is significantly cheaper: bagged mulch costs $47–$81 per cubic yard while bulk typically runs $30–$45 per cubic yard plus a one-time delivery fee.",
  },
];

export default function MulchCalculatorPage() {
  return (
    <>
      <CalcSchema
        name="Mulch Calculator"
        description="Calculate cubic yards and bags of mulch needed for rectangular or circular garden beds."
        url="https://buildcalczone.com/mulch-calculator"
        faqs={faqs}
      />
      <MulchCalc />
    </>
  );
}
