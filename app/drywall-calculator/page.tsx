import type { Metadata } from "next";
import CalcSchema from "../components/CalcSchema";
import CalcFaq from "../components/CalcFaq";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import DrywallCalc from "./DrywallCalc";

export const metadata: Metadata = {
  title: "Drywall Calculator — Sheets, Compound & Screws | BuildCalc",
  description:
    "Calculate how many drywall sheets you need for any room. Enter dimensions, doors, and windows to get sheet count, joint compound, tape, and screw estimates instantly.",
  keywords: [
    "drywall calculator",
    "how many sheets of drywall do i need",
    "sheetrock calculator",
    "drywall sheet calculator",
    "drywall estimator",
  ],
  alternates: { canonical: "/drywall-calculator" },
};

const faqs = [
  {
    question: "How do I calculate how many drywall sheets I need?",
    answer:
      "Calculate total wall area using 2 × (length + width) × ceiling height, add ceiling area (length × width) if needed, subtract door and window openings, then divide by your sheet size and add 10% waste. A 4×8 sheet covers 32 sq ft, so a 400 sq ft room with 10% waste needs ⌈440 ÷ 32⌉ = 14 sheets.",
  },
  {
    question:
      "Should I subtract doors and windows from my drywall calculation?",
    answer:
      "You can, but many professionals don't — drywall is hung over openings and cut out, so the cutoffs become waste. If you do subtract, use 21 sq ft per standard door (3×7 ft) and 15 sq ft per standard window (3×5 ft). For rooms with many openings, subtract them and increase waste to 15%.",
  },
  {
    question: "What size drywall sheets should I use?",
    answer:
      "4×8 ft sheets are standard for most residential work and easiest to handle solo. 4×12 ft sheets are preferred for ceilings and 9-foot walls — they span the full height horizontally with fewer joints to tape. 4×10 ft is a good middle ground for 9-foot walls.",
  },
  {
    question: "How much joint compound do I need?",
    answer:
      "Budget approximately 1 gallon of all-purpose joint compound per 100 square feet of drywall. A standard 5-gallon bucket covers about 500 sq ft for taping and two coats of mud. You'll need more for heavy texture or Level 5 finish.",
  },
  {
    question: "What thickness drywall should I use?",
    answer:
      "Use ½-inch drywall for standard interior walls and ceilings. Use ⅝-inch Type X (fire-rated) for garage walls and ceilings adjacent to living space — required by IRC. Use ¼-inch flexible drywall for curved walls. Moisture-resistant (green board) for bathrooms, though cement board is better behind tile.",
  },
];

export default function DrywallCalculatorPage() {
  return (
    <>
      <CalcSchema
        name="Drywall Calculator"
        description="Calculate drywall sheets, joint compound, tape, and screws for any room — walls only or walls and ceiling."
        url="https://buildcalczone.com/drywall-calculator"
        faqs={faqs}
      />
      <DrywallCalc />
      <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--border)", maxWidth: "560px" }}>
        <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
          Related guides
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {[
            { href: "/guides/how-to-calculate-drywall-sheets", label: "How to Calculate Drywall Sheets" },
            { href: "/guides/drywall-screw-spacing-guide", label: "Drywall Screw Spacing Guide" },
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
