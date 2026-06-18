import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ConcreteVolumeGuide from "../content/how-to-calculate-concrete-volume";
import CubicYardsToMetersGuide from "../content/cubic-yards-to-cubic-meters";
import TileGroutGapGuide from "../content/tile-grout-gap-guide";
import ConcreteStrengthGradesGuide from "../content/concrete-strength-grades";
import HowManyTilesGuide from "../content/how-many-tiles-do-i-need";
import PaintCoverageGuide from "../content/how-to-calculate-paint-coverage";
import HowToMixConcreteByHandGuide from "../content/how-to-mix-concrete-by-hand";
import WhatSizeRebarDoINeedGuide from "../content/what-size-rebar-do-i-need";
import HowManyBricksPerSquareMetreGuide from "../content/how-many-bricks-per-square-metre";
import BrickMortarMixRatioGuide from "../content/brick-mortar-mix-ratio";
import StandardBrickSizesByCountry from "../content/standard-brick-sizes-by-country";

const contentMap: Record<string, React.ComponentType> = {
  "how-to-calculate-concrete-volume": ConcreteVolumeGuide,
  "cubic-yards-to-cubic-meters": CubicYardsToMetersGuide,
  "tile-grout-gap-guide": TileGroutGapGuide,
  "concrete-strength-grades": ConcreteStrengthGradesGuide,
  "how-many-tiles-do-i-need": HowManyTilesGuide,
  "how-to-calculate-paint-coverage": PaintCoverageGuide,
  "how-to-mix-concrete-by-hand": HowToMixConcreteByHandGuide,
  "what-size-rebar-do-i-need": WhatSizeRebarDoINeedGuide,
  "how-many-bricks-per-square-metre": HowManyBricksPerSquareMetreGuide,
  "brick-mortar-mix-ratio": BrickMortarMixRatioGuide,
  "standard-brick-sizes-by-country": StandardBrickSizesByCountry,
};

const metaMap: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  "how-to-calculate-concrete-volume": {
    title: "How to Calculate Concrete Volume — Formula & Examples | BuildCalc",
    description:
      "Learn how to calculate concrete volume for slabs, footings and columns. Includes waste percentage tips, unit conversions, and bag vs ready-mix guidance.",
    keywords: [
      "concrete volume calculation",
      "how to calculate concrete",
      "concrete formula",
      "cubic yards concrete",
    ],
  },
  "cubic-yards-to-cubic-meters": {
    title:
      "Cubic Yards to Cubic Meters Converter & Conversion Guide | BuildCalc",
    description:
      "Convert cubic yards to cubic meters and back. Includes the exact formula, a quick reference table, and tips for ordering ready-mix concrete.",
    keywords: [
      "cubic yards to cubic meters",
      "cubic meters to cubic yards",
      "yd3 to m3",
      "concrete volume conversion",
    ],
  },
  "tile-grout-gap-guide": {
    title: "Tile Grout Gap Guide — How Wide Should Grout Lines Be? | BuildCalc",
    description:
      "Recommended grout gap widths for floor, wall and large-format tile. Learn how grout joint size affects appearance, durability and tile count.",
    keywords: [
      "grout gap size",
      "tile grout width",
      "grout line spacing",
      "how wide should grout lines be",
    ],
  },
  "concrete-strength-grades": {
    title: "Concrete Strength Grades Explained (PSI & MPa) | BuildCalc",
    description:
      "Understand concrete strength grades in PSI and MPa, what they're used for, and how US and international (EN 206) classifications compare.",
    keywords: [
      "concrete strength grades",
      "concrete psi chart",
      "concrete mpa",
      "concrete grade c25 c30",
    ],
  },
  "how-many-tiles-do-i-need": {
    title: "How Many Tiles Do I Need? Calculation Guide & Tips | BuildCalc",
    description:
      "Learn how to calculate the number of tiles needed for a room, including waste percentage by layout pattern, box quantities, and common mistakes to avoid.",
    keywords: [
      "how many tiles do i need",
      "tile calculator guide",
      "tile quantity calculation",
      "tile waste percentage",
    ],
  },
  "how-to-calculate-paint-coverage": {
    title: "How to Calculate Paint Coverage — Litres Per Room | BuildCalc",
    description:
      "Learn how to calculate how much paint you need for a room. Includes coverage rates, coat counts, wall area formulas and tips for buying the right amount.",
    keywords: [
      "how to calculate paint coverage",
      "how much paint do i need",
      "paint calculator guide",
      "litres of paint per room",
    ],
  },
  "how-to-mix-concrete-by-hand": {
    title:
      "How to Mix Concrete by Hand: Ratios, Water and Technique | BuildCalc",
    description:
      "Step-by-step guide to mixing concrete by hand. Covers mix ratios, how much water to add, mixing sequence, and when hand mixing stops being practical.",
    keywords: [
      "how to mix concrete by hand",
      "concrete mix ratio",
      "mixing concrete",
      "concrete water ratio",
    ],
  },
  "what-size-rebar-do-i-need": {
    title: "What Size Rebar Do I Need? A Practical Selection Guide | BuildCalc",
    description:
      "Rebar size and spacing guide for slabs, footings and driveways. Covers metric and US Imperial bar sizes, typical spacing, and when to consult an engineer.",
    keywords: [
      "what size rebar do i need",
      "rebar size guide",
      "rebar spacing",
      "steel reinforcement bar size",
    ],
  },
  "how-many-bricks-per-square-metre": {
    title:
      "How Many Bricks Per Square Metre? Standard, Maxi & Jumbo | BuildCalc",
    description:
      "Brick quantities per square metre for standard, maxi and jumbo bricks with 10mm mortar joints. Includes waste allowance guidance and pallet quantity notes.",
    keywords: [
      "how many bricks per square metre",
      "bricks per m2",
      "maxi brick calculator",
      "brick wall calculator",
    ],
  },
  "brick-mortar-mix-ratio": {
    title: "Brick Mortar Mix Ratio Guide: Which Mix for Which Job? | BuildCalc",
    description:
      "Mortar mix ratios for bricklaying by application. Covers cement to sand ratios for external walls, internal walls, below-ground work, and the role of lime.",
    keywords: [
      "mortar mix ratio",
      "brick mortar ratio",
      "cement sand ratio brickwork",
      "mortar mix for bricklaying",
    ],
  },
  "standard-brick-sizes-by-country": {
    title: "Standard Brick Sizes by Country | BuildCalc",
    description:
      "Complete reference for standard brick dimensions in the UK, US, Australia, Europe, South Africa, and India — with mortar joint sizes and bricks per m².",
    keywords: [
      "standard brick size",
      "brick dimensions",
      "brick size uk",
      "brick size us",
      "brick size australia",
      "bricks per m2",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(contentMap).map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/guides/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const meta = metaMap[slug];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  };
}

export default async function GuidePage(props: PageProps<"/guides/[slug]">) {
  const { slug } = await props.params;
  const Content = contentMap[slug];
  if (!Content) notFound();
  return <Content />;
}
