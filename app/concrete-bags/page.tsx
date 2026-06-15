import type { Metadata } from "next";
import BagCalc from "./BagCalc";
import CalcSchema from "../components/CalcSchema";

export const metadata: Metadata = {
  title: "Concrete Bag Calculator — How Many Bags of Concrete? | BuildCalc",
  description:
    "Free concrete bag calculator. Enter slab dimensions and select bag size — 40lb, 60lb or 80lb — to get exact bag count. Includes adjustable waste buffer. Instant results, no sign-up.",
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
      "One 80lb bag of concrete yields about 0.6 cubic feet (roughly 0.022 cubic yards). To find how many bags you need, multiply your total volume in cubic yards by 45.",
  },
  {
    question: "How much volume does a 60lb bag of concrete make?",
    answer:
      "A 60lb bag of concrete yields approximately 0.45 cubic feet (about 0.017 cubic yards) of mixed concrete — multiply your volume in cubic yards by 60 to get the number of 60lb bags needed.",
  },
  {
    question: "When should I use bags vs ready-mix concrete?",
    answer:
      "For pours under 1 cubic yard, pre-mix bags are usually more practical. For larger pours, ready-mix delivery is more cost-effective and saves significant labor.",
  },
  {
    question: "How many 40lb bags of concrete do I need?",
    answer:
      "One 40lb bag of concrete yields about 0.3 cubic feet (roughly 0.011 cubic yards). You need approximately 90 bags per cubic yard of concrete.",
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
