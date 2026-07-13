"use client";
import { useState, useMemo } from "react";
import CalcShell from "../components/CalcShell";
import Field from "../components/Field";
import WasteSlider from "../components/WasteSlider";

type UnitLen = "ft" | "m";
type SheetSize = "4x8" | "4x10" | "4x12";

const toFt: Record<UnitLen, number> = { ft: 1, m: 3.28084 };

const SHEET_SIZES: Record<SheetSize, { label: string; sqft: number }> = {
  "4x8": { label: "4×8 ft (32 sq ft)", sqft: 32 },
  "4x10": { label: "4×10 ft (40 sq ft)", sqft: 40 },
  "4x12": { label: "4×12 ft (48 sq ft)", sqft: 48 },
};
const SHEET_ORDER: SheetSize[] = ["4x8", "4x10", "4x12"];
const TYPES = SHEET_ORDER.map((k) => SHEET_SIZES[k].label);

// Standard deductions per USG / Georgia-Pacific
const DOOR_SQFT = 21; // 3×7 ft standard interior door
const WINDOW_SQFT = 15; // 3×5 ft standard window

export default function DrywallCalc() {
  const [sheetIdx, setSheetIdx] = useState(0);
  const [length, setLength] = useState("");
  const [lengthUnit, setLengthUnit] = useState<UnitLen>("ft");
  const [width, setWidth] = useState("");
  const [widthUnit, setWidthUnit] = useState<UnitLen>("ft");
  const [ceilingHeight, setCeilingHeight] = useState("");
  const [ceilingHeightUnit, setCeilingHeightUnit] = useState<UnitLen>("ft");
  const [includeCeiling, setIncludeCeiling] = useState(true);
  const [doors, setDoors] = useState("1");
  const [windows, setWindows] = useState("1");
  const [waste, setWaste] = useState(10);

  const sheetKey = SHEET_ORDER[sheetIdx];
  const sheet = SHEET_SIZES[sheetKey];

  const results = useMemo<
    { label: string; value: string | number; unit: string; tier: 1 | 2 | 3 }[]
  >(() => {
    const L = (parseFloat(length) || 0) * toFt[lengthUnit];
    const W = (parseFloat(width) || 0) * toFt[widthUnit];
    const H = (parseFloat(ceilingHeight) || 0) * toFt[ceilingHeightUnit];
    const numDoors = parseInt(doors) || 0;
    const numWindows = parseInt(windows) || 0;

    const valid = L > 0 && W > 0 && H > 0;

    // Wall area = 2 × (L + W) × H − doors − windows
    const grossWallArea = valid ? 2 * (L + W) * H : 0;
    const deductions = numDoors * DOOR_SQFT + numWindows * WINDOW_SQFT;
    const netWallArea = valid ? Math.max(grossWallArea - deductions, 0) : 0;
    const ceilingArea = valid && includeCeiling ? L * W : 0;
    const totalArea = netWallArea + ceilingArea;

    // Sheets = ⌈total area × (1 + waste%) ÷ sheet area⌉
    const sheets = valid
      ? Math.ceil((totalArea * (1 + waste / 100)) / sheet.sqft)
      : 0;

    // Ancillary materials
    // Joint compound: 1 gallon per 100 sq ft
    const jointCompoundGal = valid ? Math.ceil(totalArea / 100) : 0;
    // Screws: ~32–40 per 4×8 sheet at 16" OC — use 36 as midpoint
    const screws = valid ? Math.ceil(sheets * (sheet.sqft / 32) * 36) : 0;
    // Tape: 1 roll per ~150 sq ft
    const tapeRolls = valid ? Math.ceil(totalArea / 150) : 0;

    return [
      {
        label: "Sheets needed",
        value: valid ? sheets : "—",
        unit: `${sheetKey} sheets`,
        tier: 1,
      },
      {
        label: "Total surface area",
        value: valid ? totalArea.toFixed(1) : "—",
        unit: "sq ft",
        tier: 1,
      },
      {
        label: "Wall area (net)",
        value: valid ? netWallArea.toFixed(1) : "—",
        unit: `sq ft (deducted ${deductions} sq ft openings)`,
        tier: 2,
      },
      {
        label: "Ceiling area",
        value: valid && includeCeiling ? ceilingArea.toFixed(1) : "—",
        unit: "sq ft",
        tier: 2,
      },
      {
        label: "Joint compound",
        value: valid ? jointCompoundGal : "—",
        unit: "gallons",
        tier: 3,
      },
      {
        label: "Drywall screws",
        value: valid ? screws.toLocaleString() : "—",
        unit: 'screws (16" OC)',
        tier: 3,
      },
      {
        label: "Drywall tape",
        value: valid ? tapeRolls : "—",
        unit: "rolls",
        tier: 3,
      },
    ];
  }, [
    length,
    lengthUnit,
    width,
    widthUnit,
    ceilingHeight,
    ceilingHeightUnit,
    includeCeiling,
    doors,
    windows,
    waste,
    sheet,
    sheetKey,
  ]);

  const inputs = (
    <>
      <Field
        label="Room length"
        id="length"
        value={length}
        onChange={setLength}
        placeholder="e.g. 15"
        units={["ft", "m"]}
        selectedUnit={lengthUnit}
        onUnitChange={(v) => setLengthUnit(v as UnitLen)}
      />
      <Field
        label="Room width"
        id="width"
        value={width}
        onChange={setWidth}
        placeholder="e.g. 12"
        units={["ft", "m"]}
        selectedUnit={widthUnit}
        onUnitChange={(v) => setWidthUnit(v as UnitLen)}
      />
      <Field
        label="Ceiling height"
        id="ceilingHeight"
        value={ceilingHeight}
        onChange={setCeilingHeight}
        placeholder="e.g. 9"
        units={["ft", "m"]}
        selectedUnit={ceilingHeightUnit}
        onUnitChange={(v) => setCeilingHeightUnit(v as UnitLen)}
      />

      {/* Include ceiling toggle */}
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
          Include ceiling?
        </p>
        <div style={{ display: "flex", gap: "6px" }}>
          {[true, false].map((val) => (
            <button
              key={String(val)}
              onClick={() => setIncludeCeiling(val)}
              style={{
                flex: 1,
                padding: "7px",
                borderRadius: "8px",
                fontSize: "13px",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                fontWeight: includeCeiling === val ? 600 : 400,
                border:
                  includeCeiling === val ? "none" : "1px solid var(--border)",
                background:
                  includeCeiling === val ? "var(--accent)" : "var(--surface)",
                color: includeCeiling === val ? "white" : "var(--text-2)",
                transition: "all 0.15s",
              }}
            >
              {val ? "Walls + Ceiling" : "Walls only"}
            </button>
          ))}
        </div>
      </div>

      {/* Openings */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginTop: "12px",
        }}
      >
        <Field
          label="Doors (21 sq ft each)"
          id="doors"
          value={doors}
          onChange={setDoors}
          placeholder="e.g. 1"
        />
        <Field
          label="Windows (15 sq ft each)"
          id="windows"
          value={windows}
          onChange={setWindows}
          placeholder="e.g. 2"
        />
      </div>

      <WasteSlider value={waste} onChange={setWaste} />
    </>
  );

  return (
    <CalcShell
      title="Drywall calculator"
      description="Calculate how many drywall sheets you need for walls and ceiling, plus joint compound, tape, and screw estimates."
      types={TYPES}
      onTypeChange={setSheetIdx}
      inputs={inputs}
      results={results}
      notice={`Wall area = 2 × (L + W) × H. Deductions: ${DOOR_SQFT} sq ft per door, ${WINDOW_SQFT} sq ft per window (USG / Georgia-Pacific standard). Sheets = ⌈Total area × (1 + ${waste}% waste) ÷ ${sheet.sqft} sq ft⌉. Joint compound: 1 gal per 100 sq ft. Screws: ~36 per 4×8 sheet at 16" OC. Install ceiling drywall before walls. Use ½" for walls, ⅝" Type X for garages and fire-rated assemblies.`}
      related={[
        {
          href: "/paint-calculator",
          label: "Paint calculator",
          desc: "Coverage per litre",
        },
        {
          href: "/flooring-calculator",
          label: "Flooring calculator",
          desc: "Sq ft, boxes & waste",
        },
      ]}
    />
  );
}
