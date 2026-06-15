import type { Metadata } from "next";
import RebarCalc from "./RebarCalc";
import CalcSchema from "../components/CalcSchema";

export const metadata: Metadata = {
  title: "Rebar Weight Calculator — Steel Bar Weight & Length | BuildCalc",
  description:
    "Free rebar weight calculator. Enter bar diameter, length and quantity to get total weight in kg and tonnes. Unit weight formula included. Metric and imperial.",
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
        url="https://buildcalczone.com/rebar-calculator"
        faqs={faqs}
      />
      <RebarCalc />
    </>
  );
}
