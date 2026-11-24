"use client";
import { useState, useMemo } from "react";
import CalcShell from "../components/CalcShell";
import Field from "../components/Field";
import WasteSlider from "../components/WasteSlider";
import { ceilCount } from "../components/calcMath";

type UnitLen = "m" | "ft" | "cm" | "in";
const toM: Record<UnitLen, number> = { m: 1, ft: 0.3048, cm: 0.01, in: 0.0254 };

const TYPES = ["Rectangular pit", "Trench", "Trench, sloped sides", "Pit, sloped sides"];

export default function ExcavationCalc() {
  const [type, setType] = useState(0);
  const [length, setLength] = useState("");
  const [lenUnit, setLenUnit] = useState<UnitLen>("m");
  const [width, setWidth] = useState("");
  const [wUnit, setWUnit] = useState<UnitLen>("m");
  const [lengthBottom, setLengthBottom] = useState("");
  const [lbUnit, setLbUnit] = useState<UnitLen>("m");
  const [widthBottom, setWidthBottom] = useState("");
  const [wbUnit, setWbUnit] = useState<UnitLen>("m");
  const [depth, setDepth] = useState("");
  const [dUnit, setDUnit] = useState<UnitLen>("m");
  const [waste, setWaste] = useState(10);
  const [swell, setSwell] = useState(25);

  const results = useMemo(() => {
    const L = (parseFloat(length) || 0) * toM[lenUnit];
    const W = (parseFloat(width) || 0) * toM[wUnit];
    const Wb = (parseFloat(widthBottom) || 0) * toM[wbUnit];
    const Lb = (parseFloat(lengthBottom) || 0) * toM[lbUnit];
    const D = (parseFloat(depth) || 0) * toM[dUnit];

    let netVol = 0;
    if (type === 2) {
      // sloped: average of top and bottom width (a blank bottom width would
      // silently halve the volume, so require it)
      netVol = Wb > 0 ? ((W + Wb) / 2) * L * D : 0;
    } else if (type === 3) {
      // pit with four sloped sides: prismoidal formula, D/6 × (top + 4 × middle + bottom)
      netVol =
        Wb > 0 && Lb > 0
          ? (D / 6) * (L * W + (L + Lb) * (W + Wb) + Lb * Wb)
          : 0;
    } else {
      // rectangular pit or trench
      netVol = L * W * D;
    }

    const withWaste = netVol * (1 + waste / 100);
    const loose = withWaste * (1 + swell / 100);
    const trucks = loose > 0 ? ceilCount(loose / 6) : "—";

    return [
      {
        label: "Volume in the ground (net)",
        value: netVol > 0 ? netVol.toFixed(3) : "—",
        unit: "cubic metres (m³)",
        tier: 1 as const,
      },
      {
        label: `With ${waste}% over-excavation`,
        value: withWaste > 0 ? withWaste.toFixed(3) : "—",
        unit: "m³",
        tier: 2 as const,
      },
      {
        label: `Cubic yards (incl. ${waste}% over-excavation)`,
        value: withWaste > 0 ? (withWaste / 0.764554857984).toFixed(2) : "—",
        unit: "yd³",
        tier: 2 as const,
      },
      {
        label: `Loose soil to remove (${swell}% swell)`,
        value: loose > 0 ? loose.toFixed(2) : "—",
        unit: loose > 0 ? `m³ (${(loose / 0.764554857984).toFixed(2)} yd³)` : "m³",
        tier: 2 as const,
      },
      {
        label: "Removal trucks",
        value: trucks,
        unit: "loads @ 6 m³ loose (example size)",
        tier: 2 as const,
      },
    ];
  }, [
    length,
    lenUnit,
    width,
    wUnit,
    widthBottom,
    wbUnit,
    lengthBottom,
    lbUnit,
    depth,
    dUnit,
    waste,
    swell,
    type,
  ]);

  const isSloped = type >= 2;
  const isSlopedPit = type === 3;

  const inputs = (
    <>
      <Field
        label={isSlopedPit ? "Length (top)" : "Length"}
        id="length"
        value={length}
        onChange={setLength}
        placeholder="e.g. 5"
        units={["m", "ft", "cm", "in"]}
        selectedUnit={lenUnit}
        onUnitChange={(v) => setLenUnit(v as UnitLen)}
      />
      {isSlopedPit && (
        <Field
          label="Length (bottom)"
          id="lengthBottom"
          value={lengthBottom}
          onChange={setLengthBottom}
          placeholder="e.g. 4"
          units={["m", "ft", "cm", "in"]}
          selectedUnit={lbUnit}
          onUnitChange={(v) => setLbUnit(v as UnitLen)}
        />
      )}
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
        label="Over-excavation allowance"
      />
      <WasteSlider value={swell} onChange={setSwell} label="Soil swell when dug" max={60} />
    </>
  );

  return (
    <CalcShell
      title="Excavation calculator"
      description="Calculate the volume of soil or material to be excavated for pits and trenches with vertical or sloped sides. Results in m³, cubic yards and truck loads."
      types={TYPES}
      onTypeChange={setType}
      inputs={inputs}
      results={results}
      notice="Dug soil takes up more space than soil in the ground. The 10% over-excavation and 25% swell are planning figures, not standards: swell depends on the soil, so ask your haulage company or use a site figure. Trench, sloped sides assumes vertical ends; use Pit, sloped sides when all four sides slope. Safety (US): OSHA 1926.652 requires protection from cave-ins in an excavation unless it is entirely in stable rock, or is less than 5 ft (1.52 m) deep and a competent person finds no sign of a potential cave-in."
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
