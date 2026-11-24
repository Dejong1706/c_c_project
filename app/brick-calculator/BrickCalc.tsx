"use client";
import { useState, useMemo } from "react";
import CalcShell from "../components/CalcShell";
import Field from "../components/Field";
import WasteSlider from "../components/WasteSlider";
import { ceilCount } from "../components/calcMath";

type UnitLen = "m" | "ft";
const toM: Record<UnitLen, number> = { m: 1, ft: 0.3048 };

// BIA Technical Note 10, Table 4: 675 modular brick per 100 ft² (nominal 4 × 2⅔ × 8 in)
const BRICKS_PER_FT2_MODULAR = 6.75;

export default function BrickCalc() {
  const [type, setType] = useState(0);
  const [len, setLen] = useState("");
  const [lUnit, setLUnit] = useState<UnitLen>("m");
  const [h, setH] = useState("");
  const [hUnit, setHUnit] = useState<UnitLen>("m");
  const [waste, setWaste] = useState(10);

  const isUS = type === 2;
  const density = isUS ? BRICKS_PER_FT2_MODULAR : type === 1 ? 120 : 60;

  const results = useMemo(() => {
    const L = (parseFloat(len) || 0) * toM[lUnit];
    const H = (parseFloat(h) || 0) * toM[hUnit];
    const area = isUS ? (L * H) / (0.3048 * 0.3048) : L * H;
    const net = ceilCount(area * density);
    const total = ceilCount(net * (1 + waste / 100));
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
        unit: isUS ? "ft²" : "m²",
        tier: 2 as const,
      },
      {
        label: "Pallets",
        value: total > 0 ? ceilCount(total / 500) : "—",
        unit: "~500 bricks/pallet",
        tier: 2 as const,
      },
      {
        label: "Net bricks",
        value: net || "—",
        unit: "pcs (no waste)",
        tier: 3 as const,
      },
      {
        label: "Density",
        value: String(density),
        unit: isUS ? "bricks/ft²" : "bricks/m²",
        tier: 3 as const,
      },
    ];
  }, [len, lUnit, h, hUnit, waste, density, isUS]);

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
      description="Estimate bricks needed for a wall including mortar joints — UK standard brick (215 × 102.5 × 65 mm, 10 mm joints) in single or double leaf, or one wythe of US modular brick (6.75 per ft²)."
      types={["UK single leaf", "UK double leaf", "US modular"]}
      onTypeChange={setType}
      inputs={inputs}
      results={results}
      notice="UK: 60 bricks/m² single leaf, 120 double leaf. US modular: 6.75 bricks/ft² for one wythe in running or stack bond (BIA Technical Note 10). Other brick sizes will differ. Subtract openings from the wall area first. This counts bricks only — it does not check that a wall is safe to build. UK guidance limits a free-standing wall without piers to 375–525 mm (half-brick) or 1,075–1,450 mm (one-brick) depending on wind zone; get expert advice above that."
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
