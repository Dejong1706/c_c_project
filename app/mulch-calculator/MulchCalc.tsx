"use client";
import { useState, useMemo } from "react";
import CalcShell from "../components/CalcShell";
import Field from "../components/Field";
import WasteSlider from "../components/WasteSlider";

type UnitLen = "ft" | "m";
type DepthUnit = "in" | "cm";
type BedShape = "rectangle" | "circle";

const toFt: Record<UnitLen, number> = { ft: 1, m: 3.28084 };
const toIn: Record<DepthUnit, number> = { in: 1, cm: 0.393701 };

// 1 cubic yard = 27 cubic feet
// Formula: cubic yards = area(sq ft) × depth(in) ÷ 324
// 324 = 27 (cu ft per cu yd) × 12 (in per ft)
const CU_YD_DIVISOR = 324;
const CU_FT_PER_YD = 27;

const BAG_SIZES: Record<string, { label: string; cuFt: number }> = {
  "2": { label: "2 cu ft bags", cuFt: 2 },
  "3": { label: "3 cu ft bags", cuFt: 3 },
};
const BAG_ORDER = ["2", "3"];
const BAG_TYPES = BAG_ORDER.map((k) => BAG_SIZES[k].label);

export default function MulchCalc() {
  const [bagIdx, setBagIdx] = useState(0);
  const [shape, setShape] = useState<BedShape>("rectangle");
  const [length, setLength] = useState("");
  const [lengthUnit, setLengthUnit] = useState<UnitLen>("ft");
  const [width, setWidth] = useState("");
  const [widthUnit, setWidthUnit] = useState<UnitLen>("ft");
  const [radius, setRadius] = useState("");
  const [radiusUnit, setRadiusUnit] = useState<UnitLen>("ft");
  const [depth, setDepth] = useState("");
  const [depthUnit, setDepthUnit] = useState<DepthUnit>("in");
  const [waste, setWaste] = useState(10);

  const bagKey = BAG_ORDER[bagIdx];
  const bag = BAG_SIZES[bagKey];

  const results = useMemo<
    { label: string; value: string | number; unit: string; tier: 1 | 2 | 3 }[]
  >(() => {
    const depthIn = (parseFloat(depth) || 0) * toIn[depthUnit];

    let areaSqFt = 0;
    if (shape === "rectangle") {
      const L = (parseFloat(length) || 0) * toFt[lengthUnit];
      const W = (parseFloat(width) || 0) * toFt[widthUnit];
      areaSqFt = L * W;
    } else {
      const R = (parseFloat(radius) || 0) * toFt[radiusUnit];
      areaSqFt = Math.PI * R * R;
    }

    const valid = areaSqFt > 0 && depthIn > 0;

    const cubicYards = valid
      ? (areaSqFt * depthIn * (1 + waste / 100)) / CU_YD_DIVISOR
      : 0;
    const cubicFeet = cubicYards * CU_FT_PER_YD;
    const bags = valid ? Math.ceil(cubicFeet / bag.cuFt) : 0;

    return [
      {
        label: "Cubic yards needed",
        value: valid ? cubicYards.toFixed(2) : "—",
        unit: "yd³",
        tier: 1,
      },
      {
        label: `Bags needed (${bag.label})`,
        value: valid ? bags : "—",
        unit: "bags",
        tier: 1,
      },
      {
        label: "Area covered",
        value: valid ? areaSqFt.toFixed(1) : "—",
        unit: "sq ft",
        tier: 2,
      },
      {
        label: "Cubic feet",
        value: valid ? cubicFeet.toFixed(1) : "—",
        unit: "cu ft",
        tier: 2,
      },
      {
        label: "Waste / settling allowance",
        value: valid ? ((cubicYards * waste) / (100 + waste)).toFixed(2) : "—",
        unit: `yd³ (${waste}%)`,
        tier: 3,
      },
    ];
  }, [
    shape,
    length,
    lengthUnit,
    width,
    widthUnit,
    radius,
    radiusUnit,
    depth,
    depthUnit,
    waste,
    bag,
  ]);

  const inputs = (
    <>
      {/* Bed shape toggle */}
      <div style={{ marginBottom: "14px" }}>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 500,
            color: "var(--text-2)",
            marginBottom: "8px",
          }}
        >
          Bed shape
        </p>
        <div style={{ display: "flex", gap: "6px" }}>
          {(["rectangle", "circle"] as BedShape[]).map((s) => (
            <button
              key={s}
              onClick={() => setShape(s)}
              style={{
                flex: 1,
                padding: "7px",
                borderRadius: "8px",
                fontSize: "13px",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                fontWeight: shape === s ? 600 : 400,
                border: shape === s ? "none" : "1px solid var(--border)",
                background: shape === s ? "var(--accent)" : "var(--surface)",
                color: shape === s ? "white" : "var(--text-2)",
                transition: "all 0.15s",
              }}
            >
              {s === "rectangle" ? "Rectangle / Square" : "Circle"}
            </button>
          ))}
        </div>
      </div>

      {/* Dimensions */}
      {shape === "rectangle" ? (
        <>
          <Field
            label="Length"
            id="length"
            value={length}
            onChange={setLength}
            placeholder="e.g. 20"
            units={["ft", "m"]}
            selectedUnit={lengthUnit}
            onUnitChange={(v) => setLengthUnit(v as UnitLen)}
          />
          <Field
            label="Width"
            id="width"
            value={width}
            onChange={setWidth}
            placeholder="e.g. 5"
            units={["ft", "m"]}
            selectedUnit={widthUnit}
            onUnitChange={(v) => setWidthUnit(v as UnitLen)}
          />
        </>
      ) : (
        <Field
          label="Radius"
          id="radius"
          value={radius}
          onChange={setRadius}
          placeholder="e.g. 6"
          units={["ft", "m"]}
          selectedUnit={radiusUnit}
          onUnitChange={(v) => setRadiusUnit(v as UnitLen)}
        />
      )}

      {/* Depth */}
      <Field
        label="Mulch depth"
        id="depth"
        value={depth}
        onChange={setDepth}
        placeholder="e.g. 3"
        units={["in", "cm"]}
        selectedUnit={depthUnit}
        onUnitChange={(v) => setDepthUnit(v as DepthUnit)}
      />

      {/* Waste slider */}
      <WasteSlider value={waste} onChange={setWaste} />
    </>
  );

  return (
    <CalcShell
      title="Mulch calculator"
      description="Calculate how many cubic yards or bags of mulch you need for rectangular or circular garden beds — with waste and settling allowance included."
      types={BAG_TYPES}
      onTypeChange={setBagIdx}
      inputs={inputs}
      results={results}
      notice={`Formula: Area (sq ft) × Depth (in) ÷ 324 = cubic yards. 1 cubic yard = 27 cubic feet = ${
        BAG_SIZES["2"].cuFt === bag.cuFt
          ? "13.5 × 2 cu ft bags"
          : "9 × 3 cu ft bags"
      }. Includes ${waste}% for waste and settling. Recommended depth: 2–3 in for flower beds, 3–4 in for weed suppression, 6 in for playgrounds (CPSC). Keep mulch 2–3 inches away from plant stems and tree trunks.`}
      related={[
        {
          href: "/excavation-calculator",
          label: "Excavation calculator",
          desc: "Soil volume & cost",
        },
        {
          href: "/concrete-calculator",
          label: "Concrete calculator",
          desc: "Slab & footing volumes",
        },
      ]}
    />
  );
}
