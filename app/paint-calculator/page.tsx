import type { Metadata } from "next";
import { siteOpenGraph } from "../shared-metadata";
import PaintCalc from "./PaintCalc";
import CalcSchema from "../components/CalcSchema";
import CalcFaq from "../components/CalcFaq";
import RelatedGuides from "../components/RelatedGuides";

export const metadata: Metadata = {
  title: "Paint Calculator — How Much Paint Do I Need? | BuildCalc",
  description:
    "Free paint calculator. Enter room dimensions and get litres needed plus tin count. Covers walls, ceilings and exterior. Adjustable for 2-coat coverage.",
  keywords: [
    "paint calculator",
    "how much paint do I need",
    "paint coverage calculator",
    "wall paint calculator",
  ],
  alternates: { canonical: "/paint-calculator" },
  openGraph: {
    ...siteOpenGraph,
    type: "website",
    title: "Paint Calculator — How Much Paint Do I Need? | BuildCalc",
    description:
      "Free paint calculator. Enter room dimensions and get litres needed plus tin count. Covers walls, ceilings and exterior. Adjustable for 2-coat coverage.",
    url: "https://buildcalczone.com/paint-calculator",
  },
};

const faqs = [
  {
    question: "How much paint do I need for a room?",
    answer:
      "Calculate the total wall area (2 × (length + width) × height), then divide by the coverage rate on the tin (this calculator starts at 10 m² per litre indoors). Multiply by the number of coats needed.",
  },
  {
    question: "How many coats of paint do I need?",
    answer:
      "Two coats is the usual starting point. A strong color change can need a primer or a third coat, and new plaster needs a thinned first coat before the finish coats. Follow the instructions on the tin.",
  },
  {
    question: "How much area does 1 litre of paint cover?",
    answer:
      "It depends on the paint and surface, so use the figure on the tin. Published examples: Benjamin Moore Regal Select flat 400–450 ft² per US gallon (9.8–11.0 m²/L), Dulux Trade Vinyl Matt up to 17 m²/L, Benjamin Moore Element Guard exterior flat 300–400 ft² per gallon (7.4–9.8 m²/L).",
  },
  {
    question: "Should I subtract windows and doors from paint calculations?",
    answer:
      "For more accurate estimates, subtract the area of large windows and doors. However, many people skip this since it provides a small buffer for touch-ups.",
  },
];

export default function Page() {
  return (
    <>
      <CalcSchema
        name="Paint Calculator"
        description="Calculate how much paint you need for walls, ceilings and exterior surfaces."
        url="https://buildcalczone.com/paint-calculator"
        faqs={faqs}
      />
      <PaintCalc />
      <RelatedGuides
        guides={[
          { href: "/guides/how-to-calculate-paint-coverage", label: "How to Calculate Paint Coverage" },
          { href: "/guides/how-to-calculate-wall-area-for-painting", label: "How to Calculate Wall Area for Painting" },
        ]}
      />
      <CalcFaq faqs={faqs} />
    </>
  );
}
