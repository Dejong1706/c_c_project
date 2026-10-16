import type { Metadata } from "next";
import CalcSchema from "../components/CalcSchema";
import CalcFaq from "../components/CalcFaq";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import StairCalc from "./StairCalc";

export const metadata: Metadata = {
  title: "Stair Calculator — Rise, Run & Stringer Length | BuildCalc",
  description:
    "Calculate stair risers, treads, total run, and stringer length for IRC-compliant residential stairs. Includes code check for riser height, tread depth, and stair angle.",
  keywords: [
    "stair calculator",
    "stair rise and run calculator",
    "stringer length calculator",
    "how many steps do i need",
    "stair riser calculator",
  ],
  alternates: { canonical: "/stair-calculator" },
};

const faqs = [
  {
    question: "How do I calculate stair rise and run?",
    answer:
      "Divide your total floor-to-floor height by your target riser height and round up to get the number of risers. Then back-derive the actual riser by dividing total rise by riser count — this ensures all risers are equal. Treads = risers minus 1. Total run = treads × tread depth.",
  },
  {
    question: "What is the maximum riser height per building code?",
    answer:
      'The 2024 IRC (International Residential Code, R318.7.5) sets a maximum riser height of 7¾ inches (7.75") and a minimum tread depth of 10 inches for residential stairs. All risers in a single flight must be within ⅜ inch of each other.',
  },
  {
    question: "How do I calculate stringer length?",
    answer:
      "Use the Pythagorean theorem. For a standard mount stair, stringer length = √((total rise − one riser)² + total run²), because the deck face acts as the top step; for a flush mount, use the full total rise. Add 6–12 inches when purchasing lumber to allow for the top plumb cut and bottom seat cut.",
  },
  {
    question: "How steep can residential stairs be?",
    answer:
      "The IRC limits the dimensions, not the angle: a riser of no more than 7¾ inches and a tread of at least 10 inches (2024 IRC R318.7.5). At those limits the stair angle is about 37.8°; a 7-inch rise with an 11-inch run is about 32.5°. A common carpenter's rule of thumb (not a code requirement) is Rise + Run ≈ 17–18 inches.",
  },
  {
    question: "How many steps do I need for a 9-foot ceiling?",
    answer:
      "A 9 ft floor-to-floor height is 108 inches. At a 7-inch target riser: ⌈108 ÷ 7⌉ = 16 risers, actual riser = 108 ÷ 16 = 6.75 inches. At 7.5-inch target: ⌈108 ÷ 7.5⌉ = 15 risers, actual riser = 7.2 inches. Either is code-compliant.",
  },
];

export default function StairCalculatorPage() {
  return (
    <>
      <CalcSchema
        name="Stair Calculator"
        description="Calculate riser count, actual riser height, tread count, total run, and stringer length for IRC-compliant residential stairs."
        url="https://buildcalczone.com/stair-calculator"
        faqs={faqs}
      />
      <StairCalc />
      <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--border)", maxWidth: "560px" }}>
        <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
          Related guides
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {[
            { href: "/guides/stair-building-code-requirements", label: "Stair Building Code Requirements (IRC R318.7)" },
            { href: "/guides/how-to-calculate-stair-rise-and-run", label: "How to Calculate Stair Rise and Run" },
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
