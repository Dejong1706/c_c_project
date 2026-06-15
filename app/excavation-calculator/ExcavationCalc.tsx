"use client";
import { useState, useMemo } from "react";
import CalcShell from "../components/CalcShell";
import Field from "../components/Field";
import WasteSlider from "../components/WasteSlider";

type UnitLen = "m" | "ft" | "cm" | "in";
const toM: Record<UnitLen, number> = { m: 1, ft: 0.3048, cm: 0.01, in: 0.0254 };

const TYPES = ["Rectangular pit", "Trench", "Sloped sides"];

export default function ExcavationCalc() {
  const [type, setType] = useState(0);
  const [length, setLength] = useState("");
  const [lenUnit, setLenUnit] = useState<UnitLen>("m");
  const [width, setWidth] = useState("");
  const [wUnit, setWUnit] = useState<UnitLen>("m");
  const [widthBottom, setWidthBottom] = useState("");
  const [wbUnit, setWbUnit] = useState<UnitLen>("m");
  const [depth, setDepth] = useState("");
  const [dUnit, setDUnit] = useState<UnitLen>("m");
  const [waste, setWaste] = useState(15);

  const results = useMemo(() => {
    const L = (parseFloat(length) || 0) * toM[lenUnit];
    const W = (parseFloat(width) || 0) * toM[wUnit];
    const Wb = (parseFloat(widthBottom) || 0) * toM[wbUnit];
    const D = (parseFloat(depth) || 0) * toM[dUnit];

    let netVol = 0;
    if (type === 2) {
      // sloped: average of top and bottom width
      netVol = ((W + Wb) / 2) * L * D;
    } else {
      // rectangular pit or trench
      netVol = L * W * D;
    }

    const withWaste = netVol * (1 + waste / 100);
    const trucks = withWaste > 0 ? Math.ceil(withWaste / 6) : "—";

    return [
      {
        label: "Volume (net)",
        value: netVol > 0 ? netVol.toFixed(3) : "—",
        unit: "cubic metres (m³)",
        tier: 1 as const,
      },
      {
        label: `With ${waste}% buffer`,
        value: withWaste > 0 ? withWaste.toFixed(3) : "—",
        unit: "m³",
        tier: 2 as const,
      },
      {
        label: "Cubic yards",
        value: withWaste > 0 ? (withWaste * 1.30795).toFixed(2) : "—",
        unit: "yd³",
        tier: 2 as const,
      },
      {
        label: "Removal trucks",
        value: trucks,
        unit: "@ 6m³ / truck",
        tier: 3 as const,
      },
      {
        label: "Litres",
        value:
          withWaste > 0 ? Math.round(withWaste * 1000).toLocaleString() : "—",
        unit: "L",
        tier: 3 as const,
      },
    ];
  }, [
    length,
    lenUnit,
    width,
    wUnit,
    widthBottom,
    wbUnit,
    depth,
    dUnit,
    waste,
    type,
  ]);

  const isSloped = type === 2;

  const inputs = (
    <>
      <Field
        label="Length"
        id="length"
        value={length}
        onChange={setLength}
        placeholder="e.g. 5"
        units={["m", "ft", "cm", "in"]}
        selectedUnit={lenUnit}
        onUnitChange={(v) => setLenUnit(v as UnitLen)}
      />
      <Field
        label={isSloped ? "Width (top)" : "Width"}
        id="width"
        value={width}
        onChange={setWidth}
        placeholder="e.g. 3"
        units={["m", "ft", "cm", "in"]}
        selectedUnit={wUnit}
        onUnitChange={(v) => setWUnit(v as UnitLen)}
      />
      {isSloped && (
        <Field
          label="Width (bottom)"
          id="widthBottom"
          value={widthBottom}
          onChange={setWidthBottom}
          placeholder="e.g. 2"
          units={["m", "ft", "cm", "in"]}
          selectedUnit={wbUnit}
          onUnitChange={(v) => setWbUnit(v as UnitLen)}
        />
      )}
      <Field
        label="Depth"
        id="depth"
        value={depth}
        onChange={setDepth}
        placeholder="e.g. 1.5"
        units={["m", "ft", "cm", "in"]}
        selectedUnit={dUnit}
        onUnitChange={(v) => setDUnit(v as UnitLen)}
      />
      <WasteSlider
        value={waste}
        onChange={setWaste}
        label="Over-excavation buffer"
      />
    </>
  );

  return (
    <CalcShell
      title="Excavation calculator"
      description="Calculate the volume of soil or material to be excavated for pits, trenches and sloped-side cuts. Results in m³, cubic yards and truck loads."
      types={TYPES}
      onTypeChange={setType}
      inputs={inputs}
      results={results}
      notice="Add 10–15% buffer to account for over-excavation and soil swell. Actual removal volume may vary depending on soil type."
      related={[
        {
          href: "/concrete-calculator",
          label: "Concrete calculator",
          desc: "Volume in m³ & yd³",
        },
        {
          href: "/rebar-calculator",
          label: "Rebar calculator",
          desc: "Weight & bar count",
        },
        {
          href: "/unit-converter",
          label: "Unit converter",
          desc: "m³ ↔ yd³ and more",
        },
      ]}
    />
  );
}
