"use client";
import { useState, useMemo } from "react";
import CalcShell from "../components/CalcShell";
import Field from "../components/Field";
import { ceilCount } from "../components/calcMath";

type UnitLen = "m" | "ft";
const toM: Record<UnitLen, number> = { m: 1, ft: 0.3048 };

const TYPES = ["Walls", "Ceiling", "Exterior walls"];
// Starting values only (m²/L); the tin overrides them
const DEFAULT_COVERAGE = [10, 10, 7];

export default function PaintCalc() {
  const [type, setType] = useState(0);
  const [roomL, setRoomL] = useState("");
  const [rlUnit, setRlUnit] = useState<UnitLen>("m");
  const [roomW, setRoomW] = useState("");
  const [rwUnit, setRwUnit] = useState<UnitLen>("m");
  const [ceilH, setCeilH] = useState("");
  const [chUnit, setChUnit] = useState<UnitLen>("m");
  const [coverage, setCoverage] = useState("");
  const [coats, setCoats] = useState(2);

  const isCeiling = type === 1;
  const isExterior = type === 2;
  const rate = parseFloat(coverage) || DEFAULT_COVERAGE[type];

  const results = useMemo(() => {
    const L = (parseFloat(roomL) || 0) * toM[rlUnit];
    const W = (parseFloat(roomW) || 0) * toM[rwUnit];
    const H = (parseFloat(ceilH) || 0) * toM[chUnit];
    const area = isCeiling ? L * W : 2 * (L + W) * H;
    const litres = (area / rate) * coats;
    return [
      {
        label: `Paint needed (${coats} coat${coats > 1 ? "s" : ""})`,
        value: litres > 0 ? litres.toFixed(1) : "—",
        unit: "litres",
        tier: 1 as const,
      },
      {
        label: isCeiling ? "Ceiling area" : "Wall area",
        value: area > 0 ? area.toFixed(1) : "—",
        unit: "m²",
        tier: 2 as const,
      },
      {
        label: "4 L tins",
        value: litres > 0 ? ceilCount(litres / 4) : "—",
        unit: "tins",
        tier: 2 as const,
      },
      {
        label: "10 L tins",
        value: litres > 0 ? ceilCount(litres / 10) : "—",
        unit: "tins",
        tier: 3 as const,
      },
      {
        label: "Coverage rate",
        value: String(rate),
        unit: "m² per litre per coat",
        tier: 3 as const,
      },
    ];
  }, [roomL, rlUnit, roomW, rwUnit, ceilH, chUnit, coats, isCeiling, rate]);

  const inputs = (
    <>
      <Field
        label={isExterior ? "Building length" : "Room length"}
        id="roomL"
        value={roomL}
        onChange={setRoomL}
        placeholder="e.g. 5"
        units={["m", "ft"]}
        selectedUnit={rlUnit}
        onUnitChange={(v) => setRlUnit(v as UnitLen)}
      />
      <Field
        label={isExterior ? "Building width" : "Room width"}
        id="roomW"
        value={roomW}
        onChange={setRoomW}
        placeholder="e.g. 4"
        units={["m", "ft"]}
        selectedUnit={rwUnit}
        onUnitChange={(v) => setRwUnit(v as UnitLen)}
      />
      {!isCeiling && (
        <Field
          label={isExterior ? "Wall height" : "Ceiling height"}
          id="ceilH"
          value={ceilH}
          onChange={setCeilH}
          placeholder="e.g. 2.5"
          units={["m", "ft"]}
          selectedUnit={chUnit}
          onUnitChange={(v) => setChUnit(v as UnitLen)}
        />
      )}
      <Field
        label="Coverage from the tin (m²/L)"
        id="coverage"
        value={coverage}
        onChange={setCoverage}
        placeholder={String(DEFAULT_COVERAGE[type])}
        hint={`default ${DEFAULT_COVERAGE[type]}`}
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
          Number of coats
        </p>
        <div style={{ display: "flex", gap: "6px" }}>
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => setCoats(n)}
              style={{
                flex: 1,
                padding: "7px",
                borderRadius: "8px",
                fontSize: "13px",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                fontWeight: coats === n ? 600 : 400,
                border: coats === n ? "none" : "1px solid var(--border)",
                background: coats === n ? "var(--accent)" : "var(--surface)",
                color: coats === n ? "white" : "var(--text-2)",
                transition: "all 0.15s",
              }}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <CalcShell
      title="Paint calculator"
      description="How much paint do you need? Enter room dimensions and coating preferences to get litres required and tin count. Enter the coverage from your tin, or use the default starting value."
      types={TYPES}
      onTypeChange={setType}
      inputs={inputs}
      results={results}
      notice="Default coverage is 10 m²/L indoors and 7 m²/L for exterior walls. These are starting values: use the figure on your tin. Rough or porous surfaces take more paint. Windows and doors are not deducted, which leaves a small margin for waste. 1 US gallon = 3.785 L; 400 ft²/gal = 9.8 m²/L."
      related={[
        {
          href: "/tile-calculator",
          label: "Tile calculator",
          desc: "Tile count & boxes",
        },
        {
          href: "/brick-calculator",
          label: "Brick calculator",
          desc: "Brick count & pallets",
        },
      ]}
    />
  );
}
