import type { Metadata } from "next";
import BagCalc from "./BagCalc";
import CalcSchema from "../components/CalcSchma";

export const metadata: Metadata = {
  title: "Concrete Bag Calculator — How Many Bags of Concrete? | BuildCalc",
  description:
    "How many bags of pre-mix concrete do you need? Enter slab dimensions and select bag size (40lb, 60lb, 80lb). Free, instant results.",
  keywords: [
    "concrete bag calculator",
    "how many bags of concrete",
    "concrete bags calculator",
    "80lb bag calculator",
  ],
};

const faqs = [
  {
    question: "How many 80lb bags of concrete do I need?",
    answer:
      "One 80lb bag of concrete yields about 0.022 cubic yards. Divide your total volume in cubic yards by 0.022, or multiply by 45 to get the number of 80lb bags needed.",
  },
  {
    question: "How much volume does a 60lb bag of concrete make?",
    answer:
      "A 60lb bag of concrete yields approximately 0.017 cubic yards (about 0.45 cubic feet) of mixed concrete.",
  },
  {
    question: "When should I use bags vs ready-mix concrete?",
    answer:
      "For pours under 1 cubic yard, pre-mix bags are usually more practical. For larger pours, ready-mix delivery is more cost-effective and saves significant labor.",
  },
  {
    question: "How do I calculate concrete volume in cubic yards?",
    answer:
      "Multiply length × width × depth (all in feet), then divide by 27 to convert cubic feet to cubic yards.",
  },
];

export default function Page() {
  return (
    <>
      <CalcSchema
        name="Concrete Bag Calculator"
        description="Calculate how many bags of pre-mix concrete you need for your project."
        url="https://buildcalczone.com/concrete-bags"
        faqs={faqs}
      />
      <BagCalc />
    </>
  );
}
