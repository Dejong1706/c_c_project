import type { Metadata } from "next";
import UnitConverter from "./UnitConverter";
import CalcSchema from "../components/CalcSchma";

export const metadata: Metadata = {
  title: "Construction Unit Converter — m, ft, m², yd³, kg, lbs | BuildCalc",
  description:
    "Free construction unit converter. Convert length, area, volume and weight units instantly — mm, cm, m, ft, in, m², ft², m³, yd³, kg, lbs, tonnes.",
  keywords: [
    "unit converter",
    "construction unit converter",
    "meters to feet",
    "square meters to square feet",
    "cubic yards to cubic meters",
  ],
};

const faqs = [
  {
    question: "How do I convert square meters to square feet?",
    answer:
      "Multiply the value in square meters by 10.764 to get square feet. For example, 10 m² equals approximately 107.64 ft².",
  },
  {
    question: "How do I convert cubic meters to cubic yards?",
    answer:
      "Multiply the value in cubic meters by 1.308 to get cubic yards. For example, 5 m³ equals approximately 6.54 yd³.",
  },
  {
    question: "What is 1 pyeong (평) in square meters?",
    answer:
      "1 pyeong (a traditional Korean unit of area) equals approximately 3.3058 square meters, or about 35.58 square feet.",
  },
  {
    question: "How do I convert kilograms to pounds?",
    answer:
      "Multiply the value in kilograms by 2.2046 to get pounds. For example, 10 kg equals approximately 22.05 lbs.",
  },
];

export default function Page() {
  return (
    <>
      <CalcSchema
        name="Construction Unit Converter"
        description="Convert length, area, volume and weight units commonly used in construction."
        url="https://buildcalc.pro/unit-converter"
        faqs={faqs}
      />
      <UnitConverter />
    </>
  );
}
