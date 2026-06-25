"use client";
import { useState, useMemo } from "react";
import CalcShell from "../components/CalcShell";
import Field from "../components/Field";

type UnitLen = "ft" | "m";
const toFt: Record<UnitLen, number> = { ft: 1, m: 3.28084 };

type FlooringType = "lvp" | "hardwood" | "laminate" | "tile" | "carpet";
type Layout = "straight" | "diagonal";

// Waste factors per NWFA / 2020Flooring / remodelcalculators
const FLOORING_TYPES: Record<
  FlooringType,
  {
    label: string;
    wasteStraight: number; // %
    wasteDiagonal: number; // %
    defaultBoxSqft: number;
    unit: string;
  }
> = {
  lvp: {
    label: "LVP / Vinyl Plank",
    wasteStraight: 7,
    wasteDiagonal: 12,
    defaultBoxSqft: 20,
    unit: "box",
  },
  hardwood: {
    label: "Hardwood",
    wasteStraight: 10,
    wasteDiagonal: 15,
    defaultBoxSqft: 20,
    unit: "box",
  },
  laminate: {
    label: "Laminate",
    wasteStraight: 8,
    wasteDiagonal: 14,
    defaultBoxSqft: 20,
    unit: "box",
  },
  tile: {
    label: "Tile / Porcelain",
    wasteStraight: 10,
    wasteDiagonal: 15,
    defaultBoxSqft: 10,
    unit: "box",
  },
  carpet: {
    label: "Carpet",
    wasteStraight: 10,
    wasteDiagonal: 10,
    defaultBoxSqft: 1, // sold by sq yd — handled separately
    unit: "sq yd",
  },
};

const TYPES_ORDER: FlooringType[] = [
  "lvp",
  "hardwood",
  "laminate",
  "tile",
  "carpet",
];
const TYPES = TYPES_ORDER.map((k) => FLOORING_TYPES[k].label);

export default function FlooringCalc() {
  const [typeIdx, setTypeIdx] = useState(0);
  const [length, setLength] = useState("");
  const [lengthUnit, setLengthUnit] = useState<UnitLen>("ft");
  const [width, setWidth] = useState("");
  const [widthUnit, setWidthUnit] = useState<UnitLen>("ft");
  const [layout, setLayout] = useState<Layout>("straight");
  const [boxSqft, setBoxSqft] = useState("");

  const flooringKey = TYPES_ORDER[typeIdx];
  const flooring = FLOORING_TYPES[flooringKey];

  const results = useMemo(() => {
    const L = (parseFloat(length) || 0) * toFt[lengthUnit];
    const W = (parseFloat(width) || 0) * toFt[widthUnit];
    const roomSqft = L * W;
    const valid = roomSqft > 0;

    const wastePct =
      layout === "diagonal" ? flooring.wasteDiagonal : flooring.wasteStraight;
    const totalSqft = roomSqft * (1 + wastePct / 100);

    const coveragePerBox = parseFloat(boxSqft) || flooring.defaultBoxSqft;

    // Carpet is sold by sq yd (1 sq yd = 9 sq ft)
    const isCarpet = flooringKey === "carpet";
    const totalSqyd = totalSqft / 9;

    const boxes = Math.ceil(isCarpet ? totalSqyd : totalSqft / coveragePerBox);

    const rows = [
      {
        label: "Room area",
        value: valid ? roomSqft.toFixed(1) : "—",
        unit: "sq ft",
        tier: 2 as const,
      },
      {
        label: `Total to order (incl. ${wastePct}% waste)`,
        value: valid
          ? isCarpet
            ? totalSqyd.toFixed(1)
            : totalSqft.toFixed(1)
          : "—",
        unit: isCarpet ? "sq yd" : "sq ft",
        tier: 1 as const,
      },
      {
        label: isCarpet
          ? "Square yards needed"
          : `Boxes needed (${coveragePerBox} sq ft/box)`,
        value: valid ? boxes : "—",
        unit: isCarpet ? "sq yd" : "boxes",
        tier: 1 as const,
      },
      {
        label: "Waste allowance",
        value: valid ? (totalSqft - roomSqft).toFixed(1) : "—",
        unit: "sq ft extra",
        tier: 3 as const,
      },
    ];

    return rows;
  }, [
    length,
    lengthUnit,
    width,
    widthUnit,
    layout,
    boxSqft,
    flooring,
    flooringKey,
  ]);

  const flooringKey2 = TYPES_ORDER[typeIdx];
  const flooring2 = FLOORING_TYPES[flooringKey2];
  const currentWaste =
    layout === "diagonal" ? flooring2.wasteDiagonal : flooring2.wasteStraight;

  const inputs = (
    <>
      <Field
        label="Room length"
        id="length"
        value={length}
        onChange={setLength}
        placeholder="e.g. 12"
        units={["ft", "m"]}
        selectedUnit={lengthUnit}
        onUnitChange={(v) => setLengthUnit(v as UnitLen)}
      />
      <Field
        label="Room width"
        id="width"
        value={width}
        onChange={setWidth}
        placeholder="e.g. 10"
        units={["ft", "m"]}
        selectedUnit={widthUnit}
        onUnitChange={(v) => setWidthUnit(v as UnitLen)}
      />

      {/* Layout pattern */}
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
          Installation pattern
        </p>
        <div style={{ display: "flex", gap: "6px" }}>
          {(["straight", "diagonal"] as Layout[]).map((l) => (
            <button
              key={l}
              onClick={() => setLayout(l)}
              style={{
                flex: 1,
                padding: "7px",
                borderRadius: "8px",
                fontSize: "13px",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                fontWeight: layout === l ? 600 : 400,
                border: layout === l ? "none" : "1px solid var(--border)",
                background: layout === l ? "var(--accent)" : "var(--surface)",
                color: layout === l ? "white" : "var(--text-2)",
                transition: "all 0.15s",
              }}
            >
              {l === "straight" ? "Straight" : "Diagonal / Pattern"}
            </button>
          ))}
        </div>
      </div>

      {/* Box coverage — hidden for carpet */}
      {flooringKey2 !== "carpet" && (
        <Field
          label={`Coverage per box (sq ft) — default ${flooring2.defaultBoxSqft}`}
          id="boxSqft"
          value={boxSqft}
          onChange={setBoxSqft}
          placeholder={`e.g. ${flooring2.defaultBoxSqft}`}
        />
      )}
    </>
  );

  return (
    <CalcShell
      title="Flooring calculator"
      description="Calculate how much flooring you need — sq ft, boxes, and waste — for LVP, hardwood, laminate, tile, or carpet."
      types={TYPES}
      onTypeChange={setTypeIdx}
      inputs={inputs}
      results={results}
      notice={`${flooring2.label} — ${layout} layout — ${currentWaste}% waste factor applied (per NWFA guidelines). Diagonal and pattern layouts need more waste due to extra cuts. Always order from the same dye lot — reordering a partial box later may not match.`}
      related={[
        {
          href: "/tile-calculator",
          label: "Tile calculator",
          desc: "Tiles & grout estimator",
        },
        {
          href: "/paint-calculator",
          label: "Paint calculator",
          desc: "Coverage per litre",
        },
      ]}
    />
  );
}
