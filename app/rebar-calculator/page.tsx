import type { Metadata } from "next";
import { siteOpenGraph } from "../shared-metadata";
import RebarCalc from "./RebarCalc";
import CalcSchema from "../components/CalcSchema";
import CalcFaq from "../components/CalcFaq";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Rebar Weight Calculator — Steel Bar Weight & Length | BuildCalc",
  description:
    "Free rebar weight calculator. Enter bar diameter, length and quantity to get total weight in kg and tonnes. Unit weight formula included. Metric and imperial.",
  keywords: [
    "rebar calculator",
    "rebar weight calculator",
    "rebar weight per meter",
    "steel bar weight",
  ],
  alternates: { canonical: "/rebar-calculator" },
  openGraph: {
    ...siteOpenGraph,
    type: "website",
    title: "Rebar Weight Calculator — Steel Bar Weight & Length | BuildCalc",
    description:
      "Free rebar weight calculator. Enter bar diameter, length and quantity to get total weight in kg and tonnes. Unit weight formula included. Metric and imperial.",
    url: "https://buildcalczone.com/rebar-calculator",
  },
};

const faqs = [
  {
    question: "How do I calculate rebar weight?",
    answer:
      "Use the formula: unit weight (kg/m) = 0.006165 × diameter² (in mm). Multiply this by the total length of rebar to get the total weight in kilograms.",
  },
  {
    question: "What is a lap splice and how much extra rebar do I need?",
    answer:
      "A lap splice is the overlap where two bars are joined. Lap length is set by the design — for IRC footings and concrete walls it comes from Table R608.5.4(1) — so there is no fixed percentage. Work out the allowance as total lap length ÷ total bar run; for example, one 0.6 m lap for every 6 m of run adds 10%. The IRC also asks for bars in the longest lengths practical to keep splices to a minimum.",
  },
  {
    question: "How much does a 12mm rebar weigh per meter?",
    answer:
      "A 12mm rebar weighs approximately 0.888 kg per meter, calculated as 0.006165 × 12² = 0.8878 kg/m.",
  },
  {
    question: "How do I convert rebar weight to tonnes?",
    answer:
      "Divide the total weight in kilograms by 1000 to get tonnes. For example, 1,500 kg of rebar equals 1.5 tonnes.",
  },
];

export default function Page() {
  return (
    <>
      <CalcSchema
        name="Rebar Weight Calculator"
        description="Calculate total steel rebar weight from diameter, length and quantity."
        url="https://buildcalczone.com/rebar-calculator"
        faqs={faqs}
      />
      <RebarCalc />
      <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--border)", maxWidth: "560px" }}>
        <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
          Related guides
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {[
            { href: "/guides/what-size-rebar-do-i-need", label: "What Size Rebar Do I Need? Bar Sizes and Code Rules" },
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
