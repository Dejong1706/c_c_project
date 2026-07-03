import type { Metadata } from "next";
import BagCalc from "./BagCalc";
import CalcSchema from "../components/CalcSchema";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Concrete Bag Calculator — How Many Bags of Concrete? | BuildCalc",
  description:
    "Free concrete bag calculator. Enter slab dimensions and select bag size — 40lb, 60lb or 80lb — to get exact bag count. Includes adjustable waste buffer. Instant results, no sign-up.",
  keywords: [
    "concrete bag calculator",
    "how many bags of concrete",
    "concrete bags calculator",
    "80lb bag calculator",
  ],
  alternates: { canonical: "/concrete-bags" },
  openGraph: {
    type: "website",
    title: "Concrete Bag Calculator — How Many Bags of Concrete? | BuildCalc",
    description:
      "Free concrete bag calculator. Enter slab dimensions and select bag size — 40lb, 60lb or 80lb — to get exact bag count. Includes adjustable waste buffer. Instant results, no sign-up.",
    url: "https://buildcalczone.com/concrete-bags",
  },
};

const faqs = [
  {
    question: "How many 80lb bags of concrete do I need?",
    answer:
      "One 80lb bag of concrete yields about 0.6 cubic feet (roughly 0.022 cubic yards). To find how many bags you need, multiply your total volume in cubic yards by 45.",
  },
  {
    question: "How much volume does a 60lb bag of concrete make?",
    answer:
      "A 60lb bag of concrete yields approximately 0.45 cubic feet (about 0.017 cubic yards) of mixed concrete — multiply your volume in cubic yards by 60 to get the number of 60lb bags needed.",
  },
  {
    question: "When should I use bags vs ready-mix concrete?",
    answer:
      "For pours under 1 cubic yard, pre-mix bags are usually more practical. For larger pours, ready-mix delivery is more cost-effective and saves significant labor.",
  },
  {
    question: "How many 40lb bags of concrete do I need?",
    answer:
      "One 40lb bag of concrete yields about 0.3 cubic feet (roughly 0.011 cubic yards). You need approximately 90 bags per cubic yard of concrete.",
  },
  {
    question: "How do I calculate concrete volume in cubic yards?",
    answer:
      "Multiply length × width × depth (all in feet), then divide by 27 to convert cubic feet to cubic yards.",
  },
];

export default function Page() {
  return (
    <>
      <CalcSchema
        name="Concrete Bag Calculator"
        description="Calculate how many bags of pre-mix concrete you need for your project."
        url="https://buildcalczone.com/concrete-bags"
        faqs={faqs}
      />
      <BagCalc />
      <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--border)", maxWidth: "560px" }}>
        <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
          Related guides
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {[
            { href: "/guides/how-to-calculate-concrete-volume", label: "How to Calculate Concrete Volume" },
            { href: "/guides/how-to-mix-concrete-by-hand", label: "How to Mix Concrete by Hand" },
            { href: "/guides/cubic-yards-to-cubic-meters", label: "Cubic Yards to Cubic Meters" },
          ].map((g) => (
            <Link key={g.href} href={g.href} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--accent-text)", background: "var(--accent-light)", padding: "8px 14px", borderRadius: "8px", textDecoration: "none" }}>
              <BookOpen size={13} color="var(--accent)" />
              {g.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
