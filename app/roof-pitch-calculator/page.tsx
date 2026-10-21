import type { Metadata } from "next";
import CalcSchema from "../components/CalcSchema";
import CalcFaq from "../components/CalcFaq";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import RoofPitchCalc from "./RoofPitchCalc";

export const metadata: Metadata = {
  title: "Roof Pitch Calculator — Degrees, Ratio & Rafter Length | BuildCalc",
  description:
    "Convert roof pitch between x:12 ratio, degrees, and percentage slope. Get rafter length, pitch factor, and true roof area for accurate material estimates.",
  keywords: [
    "roof pitch calculator",
    "roof pitch to degrees",
    "roof slope calculator",
    "rafter length calculator",
    "roof pitch conversion",
  ],
  alternates: { canonical: "/roof-pitch-calculator" },
};

const faqs = [
  {
    question: "How do I calculate roof pitch?",
    answer:
      "Roof pitch is the ratio of vertical rise to horizontal run, expressed as x:12 in the US. Measure the rise in inches over a 12-inch horizontal run — a rise of 6 inches gives a 6:12 pitch. To convert to degrees, use arctan(rise ÷ 12). A 6:12 pitch equals 26.57°.",
  },
  {
    question: "How do I convert roof pitch to degrees?",
    answer:
      "Use the formula: Degrees = arctan(rise ÷ 12) × (180 ÷ π). Common conversions: 4:12 = 18.4°, 6:12 = 26.6°, 8:12 = 33.7°, 9:12 = 36.9°, 12:12 = 45°. This calculator handles the conversion instantly from any input format.",
  },
  {
    question: "What is a pitch factor and how do I use it?",
    answer:
      "The pitch factor (also called roof multiplier) is √((rise/12)² + 1). Multiply your roof's flat footprint area by the pitch factor to get the true sloped surface area for ordering shingles, underlayment, or metal panels. A 6:12 pitch has a factor of 1.118 — a 1,000 sq ft footprint needs 1,118 sq ft of roofing material.",
  },
  {
    question: "What is the minimum roof pitch for shingles?",
    answer:
      "Under the 2024 IRC (R905.2.2), asphalt shingles can be used on slopes of 2:12 (9.46°) or greater, with double underlayment required from 2:12 up to 4:12. Other minimums in R905: clay and concrete tile 2½:12, metal shingles and wood shingles or shakes 3:12, slate 4:12, standing-seam metal panels and membrane roofs ¼:12. Manufacturer instructions and local amendments can be stricter.",
  },
  {
    question: "What roof pitch is too steep to walk on?",
    answer:
      "OSHA does not set a pitch below which a roof is safe to walk on without fall protection. It (29 CFR 1926.500) defines a steep roof as one over 4:12 (18.43°) and a low-slope roof as 4:12 or less. For construction work, guardrails, safety nets or personal fall arrest are required 6 ft or more above a lower level on steep roofs and in residential construction at any pitch; low-slope roofs also allow warning-line and safety-monitoring systems (1926.501(b)(10), (11), (13)).",
  },
];

export default function RoofPitchCalculatorPage() {
  return (
    <>
      <CalcSchema
        name="Roof Pitch Calculator"
        description="Convert roof pitch between x:12 ratio, degrees, and percentage. Get rafter length, pitch factor, and true roof area."
        url="https://buildcalczone.com/roof-pitch-calculator"
        faqs={faqs}
      />
      <RoofPitchCalc />
      <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--border)", maxWidth: "560px" }}>
        <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
          Related guides
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {[
            { href: "/guides/how-to-calculate-roof-pitch", label: "How to Calculate Roof Pitch" },
            { href: "/guides/roof-pitch-to-degrees-conversion", label: "Roof Pitch to Degrees Conversion Chart" },
          ].map((g) => (
            <Link key={g.href} href={g.href} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--accent-text)", background: "var(--accent-light)", padding: "8px 14px", borderRadius: "8px", textDecoration: "none" }}>
              <BookOpen size={13} color="var(--accent)" />
              {g.label}
            </Link>
          ))}
        </div>
      </div>
      <CalcFaq faqs={faqs} />
    </>
  );
}
