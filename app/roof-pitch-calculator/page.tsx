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
    question: "What is the most common roof pitch for residential homes?",
    answer:
      "The most common US residential pitch is 6:12 (26.57°). It sheds water and snow well, works with most shingle types, allows usable attic space, and is safe to walk on without special equipment. Pitches from 4:12 to 9:12 are considered conventional and support all standard roofing materials.",
  },
  {
    question: "What roof pitch is too steep to walk on?",
    answer:
      "Roofs at 6:12 (26.6°) or less are generally safe to walk on without special equipment. At 7:12 (30°), caution is required. Above 8:12 (33.7°), safety harnesses and roof brackets are recommended. Above 12:12 (45°), specialized safety equipment is required.",
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
