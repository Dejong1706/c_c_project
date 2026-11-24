import type { Metadata } from "next";
import { siteOpenGraph } from "../shared-metadata";
import BrickCalc from "./BrickCalc";
import CalcSchema from "../components/CalcSchema";
import CalcFaq from "../components/CalcFaq";
import RelatedGuides from "../components/RelatedGuides";

export const metadata: Metadata = {
  title: "Brick Calculator — How Many Bricks Do I Need? | BuildCalc",
  description:
    "Free brick calculator. Enter wall length and height to get a brick count with waste and pallets, for UK standard (60/m²) or US modular (6.75/ft²) brick.",
  keywords: [
    "brick calculator",
    "how many bricks do I need",
    "brick wall calculator",
    "bricks per square meter",
  ],
  alternates: { canonical: "/brick-calculator" },
  openGraph: {
    ...siteOpenGraph,
    type: "website",
    title: "Brick Calculator — How Many Bricks Do I Need? | BuildCalc",
    description:
      "Free brick calculator. Enter wall length and height to get a brick count with waste and pallets, for UK standard (60/m²) or US modular (6.75/ft²) brick.",
    url: "https://buildcalczone.com/brick-calculator",
  },
};

const faqs = [
  {
    question: "How many bricks do I need per square meter?",
    answer:
      "A single-leaf wall of UK standard bricks (215 × 102.5 × 65 mm) with 10 mm joints takes about 60 bricks per square meter. One wythe of US modular brick takes 6.75 per square foot, which is about 73 per square meter.",
  },
  {
    question: "How do I calculate bricks for a wall?",
    answer:
      "Multiply the wall length by height to get the area in square meters, then multiply by 60 for a single leaf wall or 120 for a double leaf wall of UK standard bricks. For US modular brick, multiply the area in square feet by 6.75. Subtract openings first, then add an allowance for breakage and waste: 10% is the default here, and the Brick Industry Association gives at least 5% as a general rule.",
  },
  {
    question: "How many bricks are on a pallet?",
    answer:
      "It varies by brick size and supplier. This calculator assumes 500 as a planning figure; use the pack size your supplier quotes.",
  },
  {
    question:
      "What is the difference between single leaf and double leaf walls?",
    answer:
      "A single leaf (half-brick) wall is one brick wide — 102.5 mm with UK standard bricks. A double leaf (one-brick) wall is one brick length thick — 215 mm — with the two leaves bonded by header bricks, so it needs exactly twice the bricks per square meter. A cavity wall is different: two separate leaves with a gap, and the inner leaf is often blockwork.",
  },
];

export default function Page() {
  return (
    <>
      <CalcSchema
        name="Brick Calculator"
        description="Calculate how many bricks and pallets you need for a wall, including waste allowance."
        url="https://buildcalczone.com/brick-calculator"
        faqs={faqs}
      />
      <BrickCalc />
      <RelatedGuides
        guides={[
          { href: "/guides/how-to-calculate-bricks-for-a-wall", label: "How to Calculate Bricks for a Wall" },
          { href: "/guides/how-many-bricks-per-square-metre", label: "How Many Bricks Per Square Metre?" },
          { href: "/guides/brick-mortar-mix-ratio", label: "Brick Mortar Mix Ratio Guide" },
          { href: "/guides/standard-brick-sizes-by-country", label: "Standard Brick Sizes by Country" },
          { href: "/guides/single-vs-double-leaf-brick-wall", label: "Single vs Double Leaf Brick Wall" },
        ]}
      />
      <CalcFaq faqs={faqs} />
    </>
  );
}
