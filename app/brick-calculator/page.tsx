import type { Metadata } from "next";
import BrickCalc from "./BrickCalc";
import CalcSchema from "../components/CalcSchema";

export const metadata: Metadata = {
  title: "Brick Calculator — How Many Bricks Do I Need? | BuildCalc",
  description:
    "Free brick calculator. Enter wall dimensions and get exact brick count, mortar bags and pallet estimate. Adjustable mortar joint thickness.",
  keywords: [
    "brick calculator",
    "how many bricks do I need",
    "brick wall calculator",
    "bricks per square meter",
  ],
};

const faqs = [
  {
    question: "How many bricks do I need per square meter?",
    answer:
      "A standard single-leaf brick wall requires approximately 60 bricks per square meter, based on a standard brick size (215×102×65mm) with 10mm mortar joints.",
  },
  {
    question: "How do I calculate bricks for a wall?",
    answer:
      "Multiply the wall length by height to get the area in square meters, then multiply by 60 (bricks per m²). Add 10% extra for breakage and waste.",
  },
  {
    question: "How many bricks are on a pallet?",
    answer:
      "A standard pallet typically holds around 500 bricks, though this varies by brick size and supplier.",
  },
  {
    question:
      "What is the difference between single leaf and double leaf walls?",
    answer:
      "A single leaf wall is one brick thick, while a double leaf (cavity) wall has two layers with a gap between them, requiring roughly double the bricks per square meter.",
  },
];

export default function Page() {
  return (
    <>
      <CalcSchema
        name="Brick Calculator"
        description="Calculate how many bricks, mortar and pallets you need for a wall."
        url="https://buildcalc.pro/brick-calculator"
        faqs={faqs}
      />
      <BrickCalc />
    </>
  );
}
