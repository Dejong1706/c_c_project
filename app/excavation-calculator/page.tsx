import type { Metadata } from "next";
import ExcavationCalc from "./ExcavationCalc";
import CalcSchema from "../components/CalcSchema";

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
      "Multiply length × width × depth to get the volume in cubic metres. For trenches with sloped sides, use the average of the top and bottom width instead of a single width measurement.",
  },
  {
    question: "How many trucks do I need to remove excavated soil?",
    answer:
      "A standard dump truck carries about 6 cubic metres of material. Divide your total excavation volume by 6 and round up to get the number of truck loads needed.",
  },
  {
    question: "Why should I add a buffer to my excavation volume?",
    answer:
      "Soil swells when excavated — loose soil takes up more volume than compacted soil in the ground. A 10–15% buffer accounts for this swell and any over-excavation at the edges.",
  },
  {
    question: "What is the difference between a pit and a trench excavation?",
    answer:
      "A pit is a broad, roughly square or rectangular hole (for foundations or basements), while a trench is long and narrow (for pipes, footings, or drainage). The volume calculation is the same for both.",
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
    </>
  );
}
