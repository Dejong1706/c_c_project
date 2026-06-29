import type { Metadata } from "next";
import ConcreteCalc from "./ConcreteCalc";
import CalcSchema from "../components/CalcSchema";

export const metadata: Metadata = {
  title:
    "Concrete Calculator — Volume, Cubic Yards & Ready-Mix Trucks | BuildCalc",
  description:
    "Free concrete calculator. Enter length, width and depth to get exact volume in m³ and cubic yards, plus ready-mix truck count. Works for slabs, footings, and columns.",
  keywords: [
    "concrete calculator",
    "concrete volume calculator",
    "cubic yards concrete",
    "ready mix concrete calculator",
  ],
  alternates: { canonical: "/concrete-calculator" },
  openGraph: {
    type: "website",
    title:
      "Concrete Calculator — Volume, Cubic Yards & Ready-Mix Trucks | BuildCalc",
    description:
      "Free concrete calculator. Enter length, width and depth to get exact volume in m³ and cubic yards, plus ready-mix truck count. Works for slabs, footings, and columns.",
    url: "https://buildcalczone.com/concrete-calculator",
  },
};

const faqs = [
  {
    question: "How do I calculate concrete volume?",
    answer:
      "Multiply length × width × depth to get the volume in cubic metres. For round columns, use π × radius² × height. Always add 5–10% extra for waste and uneven subgrade.",
  },
  {
    question: "How many cubic yards of concrete do I need?",
    answer:
      "Convert cubic metres to cubic yards by multiplying by 1.308. For example, 3 cubic metres equals approximately 3.92 cubic yards.",
  },
  {
    question: "How many trucks of concrete do I need?",
    answer:
      "A standard ready-mix truck carries about 6 cubic metres (8 cubic yards). Divide your total volume by 6 and round up to get the number of trucks needed.",
  },
  {
    question: "How much waste allowance should I add for concrete?",
    answer:
      "A 5–10% waste allowance is typical for most slabs and footings to account for spillage, uneven excavation, and minor measurement errors.",
  },
];

export default function Page() {
  return (
    <>
      <CalcSchema
        name="Concrete Calculator"
        description="Calculate concrete volume, cubic yards, and ready-mix truck count for slabs, walls, columns and footings."
        url="https://buildcalczone.com/concrete-calculator"
        faqs={faqs}
      />
      <ConcreteCalc />
    </>
  );
}
