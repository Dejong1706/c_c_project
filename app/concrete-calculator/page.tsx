import type { Metadata } from "next";
import ConcreteCalc from "./ConcreteCalc";
import CalcSchema from "../components/CalcSchema";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Concrete Calculator — Volume, Cubic Yards & Ready-Mix Trucks | BuildCalc",
  description:
    "Free concrete calculator. Enter length, width and depth to get exact volume in m³ and cubic yards, plus ready-mix truck count. Works for slabs, footings, and columns.",
  keywords: [
    "concrete calculator",
    "concrete volume calculator",
    "cubic yards concrete",
    "ready mix concrete calculator",
  ],
  alternates: { canonical: "/concrete-calculator" },
  openGraph: {
    type: "website",
    title:
      "Concrete Calculator — Volume, Cubic Yards & Ready-Mix Trucks | BuildCalc",
    description:
      "Free concrete calculator. Enter length, width and depth to get exact volume in m³ and cubic yards, plus ready-mix truck count. Works for slabs, footings, and columns.",
    url: "https://buildcalczone.com/concrete-calculator",
  },
};

const faqs = [
  {
    question: "How do I calculate concrete volume?",
    answer:
      "Multiply length × width × depth to get the volume in cubic metres. For round columns, use π × radius² × height. Always add 5–10% extra for waste and uneven subgrade.",
  },
  {
    question: "How many cubic yards of concrete do I need?",
    answer:
      "Convert cubic metres to cubic yards by multiplying by 1.308. For example, 3 cubic metres equals approximately 3.92 cubic yards.",
  },
  {
    question: "How many trucks of concrete do I need?",
    answer:
      "A standard ready-mix truck carries about 6 cubic metres (8 cubic yards). Divide your total volume by 6 and round up to get the number of trucks needed.",
  },
  {
    question: "How much waste allowance should I add for concrete?",
    answer:
      "A 5–10% waste allowance is typical for most slabs and footings to account for spillage, uneven excavation, and minor measurement errors.",
  },
];

export default function Page() {
  return (
    <>
      <CalcSchema
        name="Concrete Calculator"
        description="Calculate concrete volume, cubic yards, and ready-mix truck count for slabs, walls, columns and footings."
        url="https://buildcalczone.com/concrete-calculator"
        faqs={faqs}
      />
      <ConcreteCalc />
      <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--border)", maxWidth: "560px" }}>
        <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
          Related guides
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {[
            { href: "/guides/how-to-calculate-concrete-volume", label: "How to Calculate Concrete Volume" },
            { href: "/guides/how-to-mix-concrete-by-hand", label: "How to Mix Concrete by Hand" },
            { href: "/guides/concrete-strength-grades", label: "Concrete Strength Grades Explained" },
            { href: "/guides/concrete-curing-time-guide", label: "Concrete Curing Time Guide" },
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
