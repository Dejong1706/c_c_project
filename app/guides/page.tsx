import type { Metadata } from "next";
import GuidesClient from "./GuidesClient";

export const metadata: Metadata = {
  title: "Construction Guides — How-To & Reference | BuildCalc",
  description:
    "Free construction guides covering concrete, tiles, rebar, paint and more. Learn how to calculate material quantities and understand industry standards.",
  alternates: { canonical: "/guides" },
};

const guides: {
  title: string;
  href: string;
  desc: string;
  category: string;
}[] = [
  {
    title: "How to Calculate Concrete Volume",
    href: "/guides/how-to-calculate-concrete-volume",
    desc: "Step-by-step formula with examples for slabs, footings and columns, plus waste percentage and unit conversion tips.",
    category: "Concrete",
  },
  {
    title: "Cubic Yards to Cubic Meters",
    href: "/guides/cubic-yards-to-cubic-meters",
    desc: "Exact conversion formula, quick reference tables, and tips for ordering ready-mix concrete in the right unit.",
    category: "Conversion",
  },
  {
    title: "Tile Grout Gap Guide",
    href: "/guides/tile-grout-gap-guide",
    desc: "Recommended grout gap widths for floor, wall and large-format tile, and how joint size affects appearance and tile count.",
    category: "Tile",
  },
  {
    title: "Concrete Strength Grades Explained",
    href: "/guides/concrete-strength-grades",
    desc: "PSI and MPa strength grades for concrete, what they're used for, and how US and international (EN 206) classifications compare.",
    category: "Concrete",
  },
  {
    title: "How Many Tiles Do I Need?",
    href: "/guides/how-many-tiles-do-i-need",
    desc: "Step-by-step calculation including waste percentage by layout pattern, buying by the box, and common mistakes.",
    category: "Tile",
  },
  {
    title: "How to Calculate Paint Coverage",
    href: "/guides/how-to-calculate-paint-coverage",
    desc: "Wall area formula, coverage rates by paint type, and how many coats you actually need.",
    category: "Paint",
  },
  {
    title: "How to Mix Concrete by Hand",
    href: "/guides/how-to-mix-concrete-by-hand",
    desc: "Mix ratios, water quantity, mixing sequence, and when hand mixing stops being practical.",
    category: "Concrete",
  },
  {
    title: "What Size Rebar Do I Need?",
    href: "/guides/what-size-rebar-do-i-need",
    desc: "Bar size and spacing guide for slabs, footings and driveways. Covers metric and US Imperial sizes.",
    category: "Structural",
  },
  {
    title: "How Many Bricks Per Square Metre?",
    href: "/guides/how-many-bricks-per-square-metre",
    desc: "Brick counts per m² for standard, maxi and jumbo bricks, plus waste allowance and pallet guidance.",
    category: "Masonry",
  },
  {
    title: "Brick Mortar Mix Ratio Guide",
    href: "/guides/brick-mortar-mix-ratio",
    desc: "Cement to sand ratios for external walls, internal walls and below-ground work, plus the role of lime and how much mortar per m².",
    category: "Masonry",
  },
  {
    title: "Standard Brick Sizes by Country",
    href: "/guides/standard-brick-sizes-by-country",
    desc: "Work sizes, coordinating sizes, and bricks per m² for UK, US, Australia, Europe, and more.",
    category: "Masonry",
  },
  {
    title: "How to Calculate Bricks for a Wall",
    href: "/guides/how-to-calculate-bricks-for-a-wall",
    desc: "Step-by-step: wall area, openings, waste factor, and mortar — with worked examples.",
    category: "Masonry",
  },
  {
    title: "Single vs Double Leaf Brick Wall",
    href: "/guides/single-vs-double-leaf-brick-wall",
    desc: "Thickness, structural limits, brick counts, and bonding patterns — with cavity wall comparison.",
    category: "Masonry",
  },
];

export default function GuidesPage() {
  return <GuidesClient guides={guides} />;
}
