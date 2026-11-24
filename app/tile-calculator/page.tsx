import type { Metadata } from "next";
import { siteOpenGraph } from "../shared-metadata";
import TileCalc from "./TileCalc";
import CalcSchema from "../components/CalcSchema";
import CalcFaq from "../components/CalcFaq";
import RelatedGuides from "../components/RelatedGuides";

export const metadata: Metadata = {
  title: "Tile Calculator — How Many Tiles Do I Need? | BuildCalc",
  description:
    "Free tile calculator. Enter room dimensions and tile size to find exact tile count and boxes needed. Grout joint and waste factor included. Instant results.",
  keywords: [
    "tile calculator",
    "how many tiles do I need",
    "floor tile calculator",
    "tile estimator",
  ],
  alternates: { canonical: "/tile-calculator" },
  openGraph: {
    ...siteOpenGraph,
    type: "website",
    title: "Tile Calculator — How Many Tiles Do I Need? | BuildCalc",
    description:
      "Free tile calculator. Enter room dimensions and tile size to find exact tile count and boxes needed. Grout joint and waste factor included. Instant results.",
    url: "https://buildcalczone.com/tile-calculator",
  },
};

const faqs = [
  {
    question: "How many tiles do I need for a room?",
    answer:
      "Divide your room area by the area of a single tile (including the grout joint). For example, a 12 m² room with 60 × 60 cm tiles and 3 mm joints needs 12 ÷ 0.603² = 33.002, which rounds up to 34 tiles before adding waste.",
  },
  {
    question: "How much extra tile should I buy for waste?",
    answer:
      "As a rule of thumb, add 10% extra for straight-laid floor tile and 15–20% in total for diagonal, herringbone or other patterned layouts, to cover cuts and breakage.",
  },
  {
    question: "What size grout joint should I use?",
    answer:
      "Size the joint from the tile you bought. ANSI A108.02 requires the joint to be at least three times the size variation between tiles, and never less than 1/16 inch (1.6 mm). For offset layouts of tile longer than 15 inches, the average joint must be at least 1/8 inch (3.2 mm) for rectified tile and 3/16 inch (4.8 mm) for calibrated tile. The calculator defaults (3 mm floor, 2 mm wall) are only starting points.",
  },
  {
    question: "How many tiles come in a box?",
    answer:
      "It varies by manufacturer and tile size. Enter the quantity printed on the packaging in the tiles-per-box field to get a box count.",
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
      <RelatedGuides
        guides={[
          { href: "/guides/how-many-tiles-do-i-need", label: "How Many Tiles Do I Need?" },
          { href: "/guides/tile-grout-gap-guide", label: "Tile Grout Gap Guide" },
          { href: "/guides/how-to-lay-tile-step-by-step", label: "How to Lay Tile Step by Step" },
        ]}
      />
      <CalcFaq faqs={faqs} />
    </>
  );
}
