import type { Metadata } from "next";
import { siteOpenGraph } from "../shared-metadata";
import ExcavationCalc from "./ExcavationCalc";
import CalcSchema from "../components/CalcSchema";
import CalcFaq from "../components/CalcFaq";
import RelatedGuides from "../components/RelatedGuides";

export const metadata: Metadata = {
  title:
    "Excavation Calculator — Volume in m³, Cubic Yards & Truck Loads | BuildCalc",
  description:
    "Free excavation calculator. Enter pit or trench dimensions to get exact excavation volume in m³ and cubic yards, plus how many trucks to remove the soil.",
  keywords: [
    "excavation calculator",
    "excavation volume calculator",
    "trench volume calculator",
    "cubic yards excavation",
  ],
  alternates: { canonical: "/excavation-calculator" },
  openGraph: {
    ...siteOpenGraph,
    type: "website",
    title:
      "Excavation Calculator — Volume in m³, Cubic Yards & Truck Loads | BuildCalc",
    description:
      "Free excavation calculator. Enter pit or trench dimensions to get exact excavation volume in m³ and cubic yards, plus how many trucks to remove the soil.",
    url: "https://buildcalczone.com/excavation-calculator",
  },
};

const faqs = [
  {
    question: "How do I calculate excavation volume?",
    answer:
      "Multiply length × width × depth to get the volume in cubic metres. For a trench with sloped sides and vertical ends, use the average of the top and bottom width. For a pit with four sloped sides, use depth ÷ 6 × (top area + 4 × mid-depth area + bottom area): a pit 4 × 4 m at the top, 2 × 2 m at the bottom and 2 m deep is 2 ÷ 6 × (16 + 36 + 4) = 18.67 m³.",
  },
  {
    question: "How many trucks do I need to remove excavated soil?",
    answer:
      "Divide the loose volume (after swell) by the truck's capacity and round up. Truck sizes vary, so ask your haulage company; this calculator uses 6 m³ as an example. For 20 m³ in the ground at 25% swell: 20 × 1.25 = 25 m³, and 25 ÷ 6 rounds up to 5 loads. A truck may reach its weight limit before it is full.",
  },
  {
    question: "What is the difference between over-excavation and swell?",
    answer:
      "Over-excavation is extra soil dug beyond the design size. Swell is the increase in volume when soil is loosened: it changes how much you haul away, not the size of the hole. The calculator applies them separately. Its defaults (10% and 25%) are planning figures, and swell depends on the soil.",
  },
  {
    question: "What is the difference between a pit and a trench excavation?",
    answer:
      "A pit is a broad, roughly square or rectangular hole (for foundations or basements), while a trench is long and narrow (for pipes, footings, or drainage). With vertical sides the volume calculation is the same for both.",
  },
];

export default function Page() {
  return (
    <>
      <CalcSchema
        name="Excavation Calculator"
        description="Calculate excavation volume for pits, trenches and sloped cuts in m³, cubic yards and truck loads."
        url="https://buildcalczone.com/excavation-calculator"
        faqs={faqs}
      />
      <ExcavationCalc />
      <RelatedGuides
        guides={[
          { href: "/guides/cubic-yards-to-cubic-meters", label: "Cubic Yards to Cubic Meters" },
          { href: "/guides/how-to-calculate-concrete-volume", label: "How to Calculate Concrete Volume" },
        ]}
      />
      <CalcFaq faqs={faqs} />
    </>
  );
}
