"use client";
import { useState, useMemo } from "react";
import CalcShell from "../components/CalcShell";
import Field from "../components/Field";
import WasteSlider from "../components/WasteSlider";

type UnitLen = "m" | "ft";
const toM: Record<UnitLen, number> = { m: 1, ft: 0.3048 };

export default function BrickCalc() {
  const [len, setLen] = useState("");
  const [lUnit, setLUnit] = useState<UnitLen>("m");
  const [h, setH] = useState("");
  const [hUnit, setHUnit] = useState<UnitLen>("m");
  const [waste, setWaste] = useState(10);

  const results = useMemo(() => {
    const L = (parseFloat(len) || 0) * toM[lUnit];
    const H = (parseFloat(h) || 0) * toM[hUnit];
    const area = L * H;
    const net = Math.ceil(area * 60);
    const total = Math.ceil(net * (1 + waste / 100));
    return [
      {
        label: "Bricks needed",
        value: total || "—",
        unit: `pcs (with ${waste}% waste)`,
        tier: 1 as const,
      },
      {
        label: "Wall area",
        value: area > 0 ? area.toFixed(2) : "—",
        unit: "m²",
        tier: 2 as const,
      },
      {
        label: "Pallets",
        value: total > 0 ? Math.ceil(total / 500) : "—",
        unit: "~500 bricks/pallet",
        tier: 2 as const,
      },
      {
        label: "Net bricks",
        value: net || "—",
        unit: "pcs (no waste)",
        tier: 3 as const,
      },
      { label: "Density", value: "60", unit: "bricks/m²", tier: 3 as const },
    ];
  }, [len, lUnit, h, hUnit, waste]);

  const inputs = (
    <>
      <Field
        label="Wall length"
        id="len"
        value={len}
        onChange={setLen}
        placeholder="e.g. 8"
        units={["m", "ft"]}
        selectedUnit={lUnit}
        onUnitChange={(v) => setLUnit(v as UnitLen)}
      />
      <Field
        label="Wall height"
        id="h"
        value={h}
        onChange={setH}
        placeholder="e.g. 2.5"
        units={["m", "ft"]}
        selectedUnit={hUnit}
        onUnitChange={(v) => setHUnit(v as UnitLen)}
      />
      <WasteSlider value={waste} onChange={setWaste} label="Breakage / waste" />
    </>
  );

  return (
    <CalcShell
      title="Brick calculator"
      description="Estimate bricks needed for a wall including mortar joints. Based on standard brick (215×102×65mm) with 10mm mortar joints — approx 60 bricks per m²."
      types={["Single leaf", "Double leaf"]}
      inputs={inputs}
      results={results}
      notice="Based on 60 bricks/m² standard. Cavity walls or special bonds will differ."
      related={[
        {
          href: "/concrete-calculator",
          label: "Concrete calculator",
          desc: "Volume & trucks",
        },
        {
          href: "/paint-calculator",
          label: "Paint calculator",
          desc: "Litres & tins",
        },
      ]}
    />
  );
}
