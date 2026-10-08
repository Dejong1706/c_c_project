import type { Metadata } from "next";
import CalcSchema from "../components/CalcSchema";
import CalcFaq from "../components/CalcFaq";
import Link from "next/link";
import { BookOpen } from "lucide-react";
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
      "A common rule is one-third of the above-ground height, with a 2 ft minimum — so a 6 ft fence needs 2 ft buried and an 8 ft post. In cold climates, set posts below the local frost line (often 48 inches or more in northern states) to prevent frost heave, and check your local requirements.",
  },
  {
    question: "How many bags of concrete do I need per fence post?",
    answer:
      "A 12-inch diameter hole 24 inches deep holds about 1.4 cubic feet of concrete around a 4×4 post. At 0.6 cubic feet per 80 lb bag, that's 3 bags per post. A 36-inch-deep hole needs about 4 bags. This calculator works it out from your fence height.",
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
      <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--border)", maxWidth: "560px" }}>
        <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
          Related guides
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {[
            { href: "/guides/how-to-calculate-fence-post-spacing", label: "How to Calculate Fence Post Spacing" },
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
