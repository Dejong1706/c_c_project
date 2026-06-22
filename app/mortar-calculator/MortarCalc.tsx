"use client";
import { useState, useMemo } from "react";
import CalcShell from "../components/CalcShell";
import Field from "../components/Field";
import WasteSlider from "../components/WasteSlider";

type UnitLen = "m" | "ft";
const toM: Record<UnitLen, number> = { m: 1, ft: 0.3048 };

type MortarKey = "N" | "S" | "M" | "O";
type MasonryUnit = "brick" | "block" | "stone";

// ASTM C270 proportion specification — ratios are [cement, lime, sand] by volume
const MORTAR_TYPES: Record<
  MortarKey,
  { label: string; ratio: [number, number, number]; psi: number; use: string }
> = {
  N: {
    label: "Type N",
    ratio: [1, 1, 6],
    psi: 750,
    use: "above-grade exterior, chimneys, veneer",
  },
  S: {
    label: "Type S",
    ratio: [1, 0.5, 4.5],
    psi: 1800,
    use: "structural walls, below & above-grade, exterior",
  },
  M: {
    label: "Type M",
    ratio: [1, 0.25, 3],
    psi: 2500,
    use: "foundations, below-grade, retaining walls",
  },
  O: {
    label: "Type O",
    ratio: [1, 2, 9],
    psi: 350,
    use: "interior non-load-bearing walls, low-exposure",
  },
};
// Type N first — most common choice for residential above-grade brickwork
const TYPES_ORDER: MortarKey[] = ["N", "S", "M", "O"];
const TYPES = TYPES_ORDER.map((k) => MORTAR_TYPES[k].label);

// Masonry unit dimensions (L × H × D, mm) and standard joint thickness
const MASONRY_UNITS: Record<
  MasonryUnit,
  { label: string; l: number; h: number; d: number; jointMm: number }
> = {
  brick: { label: "Brick (215×65mm)", l: 215, h: 65, d: 102.5, jointMm: 10 },
  block: { label: "Block (440×215mm)", l: 440, h: 215, d: 100, jointMm: 10 },
  stone: { label: "Stone (approx.)", l: 300, h: 100, d: 100, jointMm: 12 },
};

// 80 lb (~36.3 kg) pre-mixed bag yields ~10.5 L of wet mortar
const BAG_LITRES = 10.5;
// Dry materials compact on mixing — ~1.3 m³ dry yields 1 m³ finished mortar
const DRY_FACTOR = 1.3;

export default function MortarCalc() {
  const [len, setLen] = useState("");
  const [lenUnit, setLenUnit] = useState<UnitLen>("m");
  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState<UnitLen>("m");
  const [mortarTypeIdx, setMortarTypeIdx] = useState(0);
  const [masonryUnit, setMasonryUnit] = useState<MasonryUnit>("brick");
  const [waste, setWaste] = useState(10);

  const mortarKey = TYPES_ORDER[mortarTypeIdx];
  const type = MORTAR_TYPES[mortarKey];

  const results = useMemo(() => {
    const L = (parseFloat(len) || 0) * toM[lenUnit];
    const H = (parseFloat(height) || 0) * toM[heightUnit];
    const wallArea = L * H;
    const unit = MASONRY_UNITS[masonryUnit];

    // Mortar fraction of wall face = (gross module area - net unit area) / gross module area
    const grossAreaM2 =
      ((unit.l + unit.jointMm) / 1000) * ((unit.h + unit.jointMm) / 1000);
    const netAreaM2 = (unit.l / 1000) * (unit.h / 1000);
    const mortarFraction = (grossAreaM2 - netAreaM2) / grossAreaM2;

    // Bed/perpend joints run the full depth of the masonry unit, not just the joint thickness
    const jointDepthM = (unit.d + unit.jointMm) / 1000;
    const mortarVolumeRaw = wallArea * mortarFraction * jointDepthM * 1000; // litres
    const mortarVolumeLitres = mortarVolumeRaw * (1 + waste / 100);

    const [cRatio, limeRatio, sandRatio] = type.ratio;
    const totalParts = cRatio + limeRatio + sandRatio;
    const dryVolumeLitres = mortarVolumeLitres * DRY_FACTOR;
    const cementLitres = (cRatio / totalParts) * dryVolumeLitres;
    const limeLitres = (limeRatio / totalParts) * dryVolumeLitres;
    const sandLitres = (sandRatio / totalParts) * dryVolumeLitres;

    const bags = mortarVolumeLitres > 0 ? Math.ceil(mortarVolumeLitres / BAG_LITRES) : 0;
    // 25 kg cement bag, ~1.28 kg/L loose bulk density
    const cementBags25kg = Math.ceil((cementLitres * 1.28) / 25);
    // Dry sand bulk density ~1,600 kg/m³
    const sandKg = Math.round((sandLitres / 1000) * 1600);

    const rows = [
      {
        label: "Pre-mixed bags (80 lb / ~36 kg)",
        value: bags > 0 ? bags : "—",
        unit: "bags",
        tier: 1 as const,
      },
      {
        label: "Mortar volume (wet)",
        value: mortarVolumeLitres > 0 ? mortarVolumeLitres.toFixed(1) : "—",
        unit: "litres",
        tier: 2 as const,
      },
      {
        label: "Wall area",
        value: wallArea > 0 ? wallArea.toFixed(2) : "—",
        unit: "m²",
        tier: 2 as const,
      },
      {
        label: "Cement",
        value: cementBags25kg > 0 ? cementBags25kg : "—",
        unit: "× 25 kg bags",
        tier: 3 as const,
      },
      {
        label: "Sand",
        value: sandKg > 0 ? sandKg.toLocaleString() : "—",
        unit: "kg",
        tier: 3 as const,
      },
    ];

    if (limeRatio > 0) {
      rows.push({
        label: "Lime",
        value: limeLitres > 0 ? (limeLitres / 1000).toFixed(3) : "—",
        unit: "m³ hydrated lime",
        tier: 3 as const,
      });
    }

    return rows;
  }, [len, lenUnit, height, heightUnit, masonryUnit, waste, type]);

  const inputs = (
    <>
      <Field
        label="Wall length"
        id="len"
        value={len}
        onChange={setLen}
        placeholder="e.g. 5"
        units={["m", "ft"]}
        selectedUnit={lenUnit}
        onUnitChange={(v) => setLenUnit(v as UnitLen)}
      />
      <Field
        label="Wall height"
        id="height"
        value={height}
        onChange={setHeight}
        placeholder="e.g. 2.4"
        units={["m", "ft"]}
        selectedUnit={heightUnit}
        onUnitChange={(v) => setHeightUnit(v as UnitLen)}
      />
      <div
        style={{
          marginTop: "14px",
          paddingTop: "14px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            fontWeight: 500,
            color: "var(--text-2)",
            marginBottom: "8px",
          }}
        >
          Masonry unit
        </p>
        <div style={{ display: "flex", gap: "6px" }}>
          {(Object.entries(MASONRY_UNITS) as [MasonryUnit, (typeof MASONRY_UNITS)[MasonryUnit]][]).map(
            ([k, v]) => (
              <button
                key={k}
                onClick={() => setMasonryUnit(k)}
                style={{
                  flex: 1,
                  padding: "7px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  cursor: "pointer",
                  fontFamily: "var(--font-sans)",
                  fontWeight: masonryUnit === k ? 600 : 400,
                  border: masonryUnit === k ? "none" : "1px solid var(--border)",
                  background: masonryUnit === k ? "var(--accent)" : "var(--surface)",
                  color: masonryUnit === k ? "white" : "var(--text-2)",
                  transition: "all 0.15s",
                }}
              >
                {v.label}
              </button>
            )
          )}
        </div>
      </div>
      <WasteSlider value={waste} onChange={setWaste} />
    </>
  );

  return (
    <CalcShell
      title="Mortar calculator"
      description="Estimate how much mortar you need for brick, block, or stone masonry — get cement, sand, lime, and pre-mixed bag quantities based on ASTM C270 mix ratios."
      types={TYPES}
      onTypeChange={setMortarTypeIdx}
      inputs={inputs}
      results={results}
      notice={`${type.label} mix ratio ${type.ratio[0]}:${type.ratio[1]}:${type.ratio[2]} (cement:lime:sand) — ${type.psi.toLocaleString()} psi, for ${type.use}. Includes ${waste}% waste and a 1.3 dry-yield factor. Use builder's (soft) sand, not sharp sand, and place mortar within 2 hours of mixing.`}
      related={[
        {
          href: "/brick-calculator",
          label: "Brick calculator",
          desc: "Brick count & pallets",
        },
        {
          href: "/concrete-bags",
          label: "Concrete bags",
          desc: "Bag count estimator",
        },
      ]}
    />
  );
}
