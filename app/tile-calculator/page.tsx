import type { Metadata } from "next";
import TileCalc from "./TileCalc";
import CalcSchema from "../components/CalcSchma";

export const metadata: Metadata = {
  title: "Tile Calculator — How Many Tiles Do I Need? | BuildCalc",
  description:
    "Free tile calculator. Enter room dimensions and tile size to find exact tile count, boxes needed and grout coverage. Supports waste factor and multiple patterns.",
  keywords: [
    "tile calculator",
    "how many tiles do I need",
    "floor tile calculator",
    "tile estimator",
  ],
};

const faqs = [
  {
    question: "How many tiles do I need for a room?",
    answer:
      "Divide your room area by the area of a single tile (including the grout joint). For example, a 12 m² room with 60×60cm tiles needs about 33 tiles before adding waste allowance.",
  },
  {
    question: "How much extra tile should I buy for waste?",
    answer:
      "Add 10% extra for straight-laid tiles, and 15% for diagonal, herringbone, or patterned layouts to account for cuts and breakage.",
  },
  {
    question: "What size grout joint should I use?",
    answer:
      "Most floor tiles use a 2–5mm grout joint. Larger format tiles (60cm+) typically use 3mm, while smaller mosaic tiles may need wider joints up to 6mm.",
  },
  {
    question: "How many tiles come in a box?",
    answer:
      "Box quantities vary by manufacturer and tile size, but 10 tiles per box is common for medium-format floor tiles. Always check the specific product packaging.",
  },
];

export default function Page() {
  return (
    <>
      <CalcSchema
        name="Tile Calculator"
        description="Calculate how many tiles you need for floors, walls and backsplashes including grout joints and waste."
        url="https://buildcalczone.com/tile-calculator"
        faqs={faqs}
      />
      <TileCalc />
    </>
  );
}
