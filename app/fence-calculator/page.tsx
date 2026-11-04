import type { Metadata } from "next";
import { siteOpenGraph } from "../shared-metadata";
import CalcSchema from "../components/CalcSchema";
import CalcFaq from "../components/CalcFaq";
import RelatedGuides from "../components/RelatedGuides";
import FenceCalc from "./FenceCalc";

export const metadata: Metadata = {
  title: "Fence Calculator — Posts, Rails & Concrete Estimator | BuildCalc",
  description:
    "Calculate how many fence posts, rails, and concrete bags you need for wood, vinyl, or chain-link fences. Get even post spacing and a full materials list.",
  keywords: [
    "fence calculator",
    "fence post calculator",
    "how many fence posts do i need",
    "fence post spacing calculator",
    "fence materials calculator",
  ],
  alternates: { canonical: "/fence-calculator" },
  openGraph: {
    ...siteOpenGraph,
    type: "website",
    title: "Fence Calculator — Posts, Rails & Concrete Estimator | BuildCalc",
    description:
      "Calculate how many fence posts, rails, and concrete bags you need for wood, vinyl, or chain-link fences. Get even post spacing and a full materials list.",
    url: "https://buildcalczone.com/fence-calculator",
  },
};

const faqs = [
  {
    question: "How many fence posts do I need?",
    answer:
      "Divide your total fence length by your post spacing, round up, then add 1. For a 100 ft fence at 8 ft spacing: ⌈100 ÷ 8⌉ + 1 = 14 posts. Add 2 extra posts per gate opening.",
  },
  {
    question: "How far apart should fence posts be?",
    answer:
      "8 feet on centre is the standard for most wood and vinyl fences. Use 6 ft spacing for fences over 6 ft tall or in high-wind areas. Chain-link fences typically use 10 ft spacing.",
  },
  {
    question: "How deep should fence posts be buried?",
    answer:
      "Quikrete's post-setting instructions say to dig the hole 1/3 of the overall post length deep — which works out to half the above-ground height. A 6 ft fence needs 3 ft buried and a 9 ft post (cut from a 10 ft length). In cold climates, set posts below the local frost line (often 48 inches or more in northern states) to prevent frost heave, and check your local requirements.",
  },
  {
    question: "How many bags of concrete do I need per fence post?",
    answer:
      "A 12-inch diameter hole 24 inches deep holds about 1.4 cubic feet of concrete around a 4×4 post. At 0.6 cubic feet per 80 lb bag, that's 3 bags per post. A 36-inch-deep hole (2.1 cubic feet) needs 4 bags. This calculator works it out from your fence height, filling the hole to the full burial depth.",
  },
];

export default function FenceCalculatorPage() {
  return (
    <>
      <CalcSchema
        name="Fence Calculator"
        description="Estimate fence posts, rails, concrete, and pickets for wood, vinyl, or chain-link fences."
        url="https://buildcalczone.com/fence-calculator"
        faqs={faqs}
      />
      <FenceCalc />
      <RelatedGuides
        guides={[
          { href: "/guides/how-to-calculate-fence-post-spacing", label: "How to Calculate Fence Post Spacing" },
        ]}
      />
      <CalcFaq faqs={faqs} />
    </>
  );
}
