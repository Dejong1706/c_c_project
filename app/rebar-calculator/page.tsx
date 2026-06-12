import type { Metadata } from "next";
import RebarCalc from "./RebarCalc";
import CalcSchema from "../components/CalcSchma";

export const metadata: Metadata = {
  title: "Rebar Weight Calculator — Steel Bar Weight & Length | BuildCalc",
  description:
    "Calculate total rebar weight by diameter, length and quantity. Unit weight formula included. Works for #3 to #18 bars in metric and imperial.",
  keywords: [
    "rebar calculator",
    "rebar weight calculator",
    "rebar weight per meter",
    "steel bar weight",
  ],
};

const faqs = [
  {
    question: "How do I calculate rebar weight?",
    answer:
      "Use the formula: unit weight (kg/m) = 0.006165 × diameter² (in mm). Multiply this by the total length of rebar to get the total weight in kilograms.",
  },
  {
    question: "What is a lap splice and how much extra rebar do I need?",
    answer:
      "A lap splice is the overlap between two rebar pieces joined together. Typical lap splice length adds 5–10% extra material depending on bar diameter and design requirements.",
  },
  {
    question: "How much does a 12mm rebar weigh per meter?",
    answer:
      "A 12mm rebar weighs approximately 0.888 kg per meter, calculated as 0.006165 × 12² = 0.8878 kg/m.",
  },
  {
    question: "How do I convert rebar weight to tonnes?",
    answer:
      "Divide the total weight in kilograms by 1000 to get tonnes. For example, 1,500 kg of rebar equals 1.5 tonnes.",
  },
];

export default function Page() {
  return (
    <>
      <CalcSchema
        name="Rebar Weight Calculator"
        description="Calculate total steel rebar weight from diameter, length and quantity."
        url="https://buildcalc.pro/rebar-calculator"
        faqs={faqs}
      />
      <RebarCalc />
    </>
  );
}
