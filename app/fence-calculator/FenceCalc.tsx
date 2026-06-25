"use client";
import { useState, useMemo } from "react";
import CalcShell from "../components/CalcShell";
import Field from "../components/Field";
import WasteSlider from "../components/WasteSlider";

type UnitLen = "ft" | "m";
const toFt: Record<UnitLen, number> = { ft: 1, m: 3.28084 };

type FenceType = "wood" | "vinyl" | "chainlink";

const FENCE_TYPES: Record<
  FenceType,
  {
    label: string;
    defaultSpacing: number;
    railsPerSection: (h: number) => number;
  }
> = {
  wood: {
    label: "Wood",
    defaultSpacing: 8,
    railsPerSection: (h) => (h < 5 ? 2 : h <= 7 ? 3 : 4),
  },
  vinyl: {
    label: "Vinyl",
    defaultSpacing: 8,
    railsPerSection: (h) => (h < 5 ? 2 : h <= 7 ? 3 : 4),
  },
  chainlink: {
    label: "Chain Link",
    defaultSpacing: 10,
    railsPerSection: () => 2,
  },
};

const FENCE_TYPES_ORDER: FenceType[] = ["wood", "vinyl", "chainlink"];
const TYPES = FENCE_TYPES_ORDER.map((k) => FENCE_TYPES[k].label);

export default function FenceCalc() {
  const [fenceTypeIdx, setFenceTypeIdx] = useState(0);
  const [length, setLength] = useState("");
  const [lengthUnit, setLengthUnit] = useState<UnitLen>("ft");
  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState<UnitLen>("ft");
  const [spacing, setSpacing] = useState("");
  const [spacingUnit, setSpacingUnit] = useState<UnitLen>("ft");
  const [gates, setGates] = useState("0");
  const [waste, setWaste] = useState(10);

  const fenceKey = FENCE_TYPES_ORDER[fenceTypeIdx];
  const fenceType = FENCE_TYPES[fenceKey];

  const results = useMemo(() => {
    const L = (parseFloat(length) || 0) * toFt[lengthUnit];
    const H = (parseFloat(height) || 0) * toFt[heightUnit];
    const S =
      (parseFloat(spacing) || fenceType.defaultSpacing) * toFt[spacingUnit];
    const G = parseInt(gates) || 0;

    const valid = L > 0 && H > 0 && S > 0;

    // Posts = ⌈length ÷ spacing⌉ + 1 + (gates × 2)
    const linePosts = valid ? Math.ceil(L / S) + 1 : 0;
    const gatePosts = G * 2;
    const totalPosts = valid ? linePosts + gatePosts : 0;

    // Adjusted equal spacing
    const bays = linePosts - 1;
    const adjustedSpacing = valid && bays > 0 ? L / bays : S;

    // Post length: above ground (H) + burial (H/3, min 2ft)
    const burial = Math.max(H / 3, 2);
    const postLength = H + burial;

    // Rails
    const railsPerSection = fenceType.railsPerSection(H);
    const totalRails = valid ? bays * railsPerSection : 0;

    // Concrete: 2 bags per post (80lb, 12" diameter hole, ~24" deep)
    const concreteBags = totalPosts * 2;

    // Pickets (wood only, 5.5" wide, 0" gap for privacy)
    const picketWidthFt = 5.5 / 12;
    const pickets =
      valid && fenceKey === "wood"
        ? Math.ceil((L / picketWidthFt) * (1 + waste / 100))
        : 0;

    const rows: {
      label: string;
      value: string | number;
      unit: string;
      tier: 1 | 2 | 3;
    }[] = [
      {
        label: "Total posts needed",
        value: valid ? totalPosts : "—",
        unit: "posts",
        tier: 1 as const,
      },
      {
        label: "Adjusted post spacing",
        value: valid ? adjustedSpacing.toFixed(2) : "—",
        unit: "ft on centre",
        tier: 1 as const,
      },
      {
        label: "Post length (incl. burial)",
        value: valid ? postLength.toFixed(1) : "—",
        unit: "ft per post",
        tier: 2 as const,
      },
      {
        label: "Horizontal rails",
        value: valid ? totalRails : "—",
        unit: `rails (${railsPerSection}/section)`,
        tier: 2 as const,
      },
      {
        label: "Concrete (80 lb bags)",
        value: valid ? concreteBags : "—",
        unit: "bags",
        tier: 2 as const,
      },
    ];

    if (fenceKey === "wood") {
      rows.push({
        label: "Pickets / boards",
        value: valid ? pickets : "—",
        unit: 'pcs (5.5" wide, privacy)',
        tier: 3 as const,
      });
    }

    return rows;
  }, [
    length,
    lengthUnit,
    height,
    heightUnit,
    spacing,
    spacingUnit,
    gates,
    waste,
    fenceKey,
    fenceType,
  ]);

  const fenceKey2 = FENCE_TYPES_ORDER[fenceTypeIdx];
  const defaultSpacingDisplay = FENCE_TYPES[fenceKey2].defaultSpacing;

  const inputs = (
    <>
      <Field
        label="Total fence length"
        id="length"
        value={length}
        onChange={setLength}
        placeholder="e.g. 100"
        units={["ft", "m"]}
        selectedUnit={lengthUnit}
        onUnitChange={(v) => setLengthUnit(v as UnitLen)}
      />
      <Field
        label="Fence height"
        id="height"
        value={height}
        onChange={setHeight}
        placeholder="e.g. 6"
        units={["ft", "m"]}
        selectedUnit={heightUnit}
        onUnitChange={(v) => setHeightUnit(v as UnitLen)}
      />
      <Field
        label={`Post spacing (default ${defaultSpacingDisplay} ft)`}
        id="spacing"
        value={spacing}
        onChange={setSpacing}
        placeholder={`e.g. ${defaultSpacingDisplay}`}
        units={["ft", "m"]}
        selectedUnit={spacingUnit}
        onUnitChange={(v) => setSpacingUnit(v as UnitLen)}
      />
      <Field
        label="Number of gates"
        id="gates"
        value={gates}
        onChange={setGates}
        placeholder="e.g. 1"
      />
      <WasteSlider value={waste} onChange={setWaste} />
    </>
  );

  return (
    <CalcShell
      title="Fence calculator"
      description="Estimate posts, rails, concrete, and pickets for wood, vinyl, or chain-link fences. Get an even post spacing layout and full materials list."
      types={TYPES}
      onTypeChange={setFenceTypeIdx}
      inputs={inputs}
      results={results}
      notice={`Posts = ⌈length ÷ spacing⌉ + 1. Burial depth = max(height ÷ 3, 2 ft). Rails per section: ${FENCE_TYPES[
        fenceKey2
      ].railsPerSection(
        parseFloat(height) || 6
      )}. Concrete: 2 × 80 lb bags per post (12″ hole, ~24″ deep). Includes ${waste}% waste on pickets. Always check local building codes for height limits and permit requirements.`}
      related={[
        {
          href: "/concrete-bags",
          label: "Concrete bags",
          desc: "Bag count estimator",
        },
        {
          href: "/excavation-calculator",
          label: "Excavation calculator",
          desc: "Soil volume & cost",
        },
      ]}
    />
  );
}
