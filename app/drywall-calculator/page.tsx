import type { Metadata } from "next";
import { siteOpenGraph } from "../shared-metadata";
import CalcSchema from "../components/CalcSchema";
import CalcFaq from "../components/CalcFaq";
import RelatedGuides from "../components/RelatedGuides";
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
  openGraph: {
    ...siteOpenGraph,
    type: "website",
    title: "Drywall Calculator — Sheets, Compound & Screws | BuildCalc",
    description:
      "Calculate how many drywall sheets you need for any room. Enter dimensions, doors, and windows to get sheet count, joint compound, tape, and screw estimates instantly.",
    url: "https://buildcalczone.com/drywall-calculator",
  },
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
      "You can, but many professionals don't — drywall is hung over openings and cut out, so the cutoffs become waste. If you do subtract, use 21 sq ft per standard door (3×7 ft) and 15 sq ft per standard window (3×5 ft). The choice affects waste: if you leave openings in, their area already covers much of the waste, so 10% is enough; if you subtract many openings, use about 15% because the cutouts are lost. These are rules of thumb.",
  },
  {
    question: "What size drywall sheets should I use?",
    answer:
      "4×8 ft sheets are the easiest to handle. Longer 4×10 and 4×12 ft sheets leave fewer joints to tape on ceilings and long walls. All three are 4 ft wide, so two rows hung horizontally cover 8 ft of height: a 9 ft wall needs an extra strip, 54-inch-wide board, or 4×10 sheets hung vertically.",
  },
  {
    question: "How much joint compound do I need?",
    answer:
      "A rule of thumb is 1 gallon of all-purpose joint compound per 100 square feet of drywall, or about 500 sq ft from a 5-gallon bucket. Heavy texture or a Level 5 finish takes more. Check the coverage the manufacturer gives for your product.",
  },
  {
    question: "What thickness drywall should I use?",
    answer:
      "½-inch is the usual thickness for interior walls. Ceilings depend on joist spacing, finish and load, so check the manufacturer's tables. Garages are not one rule: the IRC sets the board by location, with the stricter ⅝-inch Type X case being a garage ceiling below habitable rooms, so confirm with your building department. In wet areas use a tile backer approved by the tile and board manufacturers instead of ordinary gypsum board.",
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
      <RelatedGuides
        guides={[
          { href: "/guides/how-to-calculate-drywall-sheets", label: "How to Calculate Drywall Sheets" },
          { href: "/guides/drywall-screw-spacing-guide", label: "Drywall Screw Spacing Guide" },
        ]}
      />
      <CalcFaq faqs={faqs} />
    </>
  );
}
