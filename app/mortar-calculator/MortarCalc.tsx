"use client";

import { useState, useMemo } from "react";
import CalcShell from "../components/CalcShell";
import Field from "../components/Field";
import WasteSlider from "../components/WasteSlider";

const MIX_PRESETS: Record<
  string,
  { cement: number; sand: number; label: string; use: string }
> = {
  "1:3": { cement: 1, sand: 3, label: "1:3 — Strong", use: "Below ground, high moisture, engineering bricks" },
  "1:4": { cement: 1, sand: 4, label: "1:4 — General purpose", use: "Retaining walls, below DPC level, hard-wearing surfaces" },
  "1:5": { cement: 1, sand: 5, label: "1:5 — Standard", use: "External walls above ground, most general brickwork" },
  "1:6": { cement: 1, sand: 6, label: "1:6 — Weak", use: "Internal non-structural walls, light partitions" },
};

const MORTAR_FRACTION = [0.17, 0.2]; // half, full
const DRY_VOLUME_FACTOR = 1 / 0.65;
const CEMENT_DENSITY = 1500;
const SAND_DENSITY = 1600;
const WATER_PER_KG_CEMENT = 0.5;

type UnitLen = "m" | "ft";
const toM: Record<UnitLen, number> = { m: 1, ft: 0.3048 };

export default function MortarCalc() {
  const [wallType, setWallType] = useState(0); // 0=half, 1=full
  const [len, setLen] = useState("");
  const [lUnit, setLUnit] = useState<UnitLen>("m");
  const [ht, setHt] = useState("");
  const [hUnit, setHUnit] = useState<UnitLen>("m");
  const [mixKey, setMixKey] = useState("1:5");
  const [waste, setWaste] = useState(10);

  const results = useMemo(() => {
    const L = (parseFloat(len) || 0) * toM[lUnit];
    const H = (parseFloat(ht) || 0) * toM[hUnit];
    const area = L * H;
    const thicknessM = wallType === 0 ? 0.1025 : 0.215;
    const wallVol = area * thicknessM;
    const mortarWet = wallVol * MORTAR_FRACTION[wallType];
    const mortarWithWaste = mortarWet * (1 + waste / 100);
    const dryVol = mortarWithWaste * DRY_VOLUME_FACTOR;
    const mix = MIX_PRESETS[mixKey];
    const totalParts = mix.cement + mix.sand;
    const cementVol = (mix.cement / totalParts) * dryVol;
    const sandVol = (mix.sand / totalParts) * dryVol;
    const cementKg = cementVol * CEMENT_DENSITY;
    const cementBags = area > 0 ? Math.ceil(cementKg / 25) : 0;
    const sandKg = sandVol * SAND_DENSITY;
    const waterL = cementKg * WATER_PER_KG_CEMENT;

    const sandDisplay =
      area > 0
        ? sandKg < 1000
          ? `${Math.ceil(sandKg)}`
          : `${sandVol.toFixed(3)}`
        : "—";
    const sandUnit =
      area > 0 ? (sandKg < 1000 ? "kg" : "m³") : "kg";

    return [
      {
        label: "Cement (25 kg bags)",
        value: cementBags || "—",
        unit: "bags",
        tier: 1 as const,
      },
      {
        label: "Sand",
        value: sandDisplay,
        unit: sandUnit,
        tier: 2 as const,
      },
      {
        label: "Water",
        value: area > 0 ? `${Math.ceil(waterL)}` : "—",
        unit: "litres",
        tier: 2 as const,
      },
      {
        label: "Mortar volume (wet + waste)",
        value: area > 0 ? mortarWithWaste.toFixed(3) : "—",
        unit: "m³",
        tier: 3 as const,
      },
      {
        label: "Wall area",
        value: area > 0 ? area.toFixed(2) : "—",
        unit: "m²",
        tier: 3 as const,
      },
    ];
  }, [len, lUnit, ht, hUnit, wallType, mixKey, waste]);

  const inputs = (
    <>
      <Field
        label="Wall length"
        id="len"
        value={len}
        onChange={setLen}
        placeholder="e.g. 5"
        units={["m", "ft"]}
        selectedUnit={lUnit}
        onUnitChange={(v) => setLUnit(v as UnitLen)}
      />
      <Field
        label="Wall height"
        id="ht"
        value={ht}
        onChange={setHt}
        placeholder="e.g. 2"
        units={["m", "ft"]}
        selectedUnit={hUnit}
        onUnitChange={(v) => setHUnit(v as UnitLen)}
      />
      <div style={{ marginBottom: "14px" }}>
        <label
          style={{
            display: "block",
            fontSize: "12px",
            fontWeight: 500,
            color: "var(--text-2)",
            marginBottom: "5px",
          }}
        >
          Mix ratio (cement : sand)
        </label>
        <select
          value={mixKey}
          onChange={(e) => setMixKey(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 12px",
            fontSize: "14px",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            background: "var(--surface)",
            color: "var(--text-1)",
          }}
        >
          {Object.entries(MIX_PRESETS).map(([key, val]) => (
            <option key={key} value={key}>
              {val.label}
            </option>
          ))}
        </select>
        <p style={{ fontSize: "11px", color: "var(--text-3)", marginTop: "5px" }}>
          {MIX_PRESETS[mixKey].use}
        </p>
      </div>
      <WasteSlider value={waste} onChange={setWaste} min={5} max={20} />
    </>
  );

  return (
    <CalcShell
      title="Mortar calculator"
      description="Calculate cement bags, sand, and water for brickwork — choose your mix ratio and wall type."
      types={["Half-brick (102 mm)", "Full-brick (215 mm)"]}
      onTypeChange={setWallType}
      inputs={inputs}
      results={results}
      notice="Cement rounded up to nearest whole bag. Sand shown in kg under 1,000 kg, m³ above. Water is a guide — adjust for workability on site."
      related={[
        { href: "/brick-calculator", label: "Brick calculator", desc: "Bricks & pallets" },
        { href: "/concrete-calculator", label: "Concrete calculator", desc: "Volume & trucks" },
      ]}
    />
  );
}
