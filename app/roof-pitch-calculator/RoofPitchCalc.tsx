"use client";
import { useState, useMemo } from "react";
import CalcShell from "../components/CalcShell";
import Field from "../components/Field";

type InputMode = "riseRun" | "degrees" | "ratio";
type UnitLen = "ft" | "m";
const toFt: Record<UnitLen, number> = { ft: 1, m: 1 / 0.3048 };

const INPUT_MODES: Record<InputMode, { label: string }> = {
  riseRun: { label: "Rise & Run" },
  degrees: { label: "Degrees" },
  ratio: { label: "x:12 Ratio" },
};
const MODE_ORDER: InputMode[] = ["riseRun", "degrees", "ratio"];
const TYPES = MODE_ORDER.map((k) => INPUT_MODES[k].label);

// OSHA 29 CFR 1926.500(b): low-slope roof ≤ 4 in 12, steep roof > 4 in 12
function pitchCategory(xIn12: number): string {
  return xIn12 <= 4
    ? "Low-slope roof (≤ 4:12, OSHA 1926.500)"
    : "Steep roof (> 4:12, OSHA 1926.500)";
}

// 2024 IRC R905 minimum slopes; each tier adds to the coverings allowed below it
function allowedCoverings(xIn12: number): string {
  if (xIn12 < 0.125) return "None — below every IRC R905 minimum slope";
  if (xIn12 < 0.25) return "Coal-tar built-up roofing only (⅛:12)";
  if (xIn12 < 0.5)
    return "Built-up, modified bitumen, single-ply, SPF, liquid-applied, standing-seam metal (¼:12)";
  if (xIn12 < 1) return "Above + lapped metal panels with lap sealant (½:12)";
  if (xIn12 < 2) return "Above + mineral-surfaced roll roofing (1:12)";
  if (xIn12 < 2.5)
    return "Above + asphalt shingles with double underlayment (2:12)";
  if (xIn12 < 3)
    return "Above + clay/concrete tile with double underlayment (2½:12)";
  if (xIn12 < 4)
    return "Above + metal shingles, wood shingles/shakes, lapped metal panels without sealant (3:12)";
  return "All IRC R905 coverings incl. slate (4:12); standard underlayment for shingles & tile";
}

export default function RoofPitchCalc() {
  const [modeIdx, setModeIdx] = useState(0);
  const [rise, setRise] = useState("");
  const [run, setRun] = useState("");
  const [runUnit, setRunUnit] = useState<UnitLen>("ft");
  const [degrees, setDegrees] = useState("");
  const [xRatio, setXRatio] = useState("");
  const [span, setSpan] = useState("");
  const [spanUnit, setSpanUnit] = useState<UnitLen>("ft");
  const [bLen, setBLen] = useState("");
  const [bLenUnit, setBLenUnit] = useState<UnitLen>("ft");

  const mode = MODE_ORDER[modeIdx];

  const results = useMemo<
    { label: string; value: string | number; unit: string; tier: 1 | 2 | 3 }[]
  >(() => {
    let risePerRun = 0; // rise per 1 unit of run
    let valid = false;

    if (mode === "riseRun") {
      const rIn = parseFloat(rise) || 0;
      const rRun = (parseFloat(run) || 0) * toFt[runUnit];
      if (rIn > 0 && rRun > 0) {
        // rise is always in inches, run in feet → convert run to inches
        risePerRun = rIn / (rRun * 12);
        valid = true;
      }
    } else if (mode === "degrees") {
      const deg = parseFloat(degrees) || 0;
      if (deg > 0 && deg < 90) {
        risePerRun = Math.tan((deg * Math.PI) / 180);
        valid = true;
      }
    } else {
      const x = parseFloat(xRatio) || 0;
      if (x > 0) {
        risePerRun = x / 12;
        valid = true;
      }
    }

    const xIn12 = risePerRun * 12;
    // classify on the displayed 2-decimal value (18.43° → 3.9988 → 4.00:12)
    const xRounded = Math.round(xIn12 * 100) / 100;
    const angleDeg = (Math.atan(risePerRun) * 180) / Math.PI;
    const pitchPct = risePerRun * 100;
    // Pitch factor = √((rise/run)² + 1)
    const pitchFactor = Math.sqrt(risePerRun ** 2 + 1);

    // Rafter length per foot of run
    const rafterPerFt = Math.sqrt(1 + risePerRun ** 2);

    // If span provided, calculate full rafter length
    const spanVal = (parseFloat(span) || 0) * toFt[spanUnit];
    const lenVal = (parseFloat(bLen) || 0) * toFt[bLenUnit];
    const halfSpan = spanVal / 2; // rafter run = half span for gable
    const rafterLength = halfSpan > 0 ? rafterPerFt * halfSpan : 0;
    // Gable roof: each slope is rafter length × building length
    const sideArea = rafterLength * lenVal;

    return [
      {
        label: "Pitch ratio",
        value: valid ? `${xIn12.toFixed(2)}:12` : "—",
        unit: "",
        tier: 1,
      },
      {
        label: "Angle",
        value: valid ? `${angleDeg.toFixed(2)}°` : "—",
        unit: "",
        tier: 1,
      },
      {
        label: "Pitch category",
        value: valid ? pitchCategory(xRounded) : "—",
        unit: "",
        tier: 2,
      },
      {
        label: "Roof coverings allowed",
        value: valid ? allowedCoverings(xRounded) : "—",
        unit: "minimum slope, 2024 IRC R905",
        tier: 2,
      },
      {
        label: "Percentage slope",
        value: valid ? `${pitchPct.toFixed(1)}%` : "—",
        unit: "(rise ÷ run × 100)",
        tier: 2,
      },
      {
        label: "Pitch factor (multiplier)",
        value: valid ? pitchFactor.toFixed(4) : "—",
        unit: "× flat area = true roof area",
        tier: 2,
      },
      {
        label: "Rafter length per ft of run",
        value: valid ? `${rafterPerFt.toFixed(4)} ft` : "—",
        unit: "",
        tier: 3,
      },
      {
        label: "Full rafter length",
        value:
          valid && rafterLength > 0
            ? `${rafterLength.toFixed(2)} ft (${(rafterLength * 12).toFixed(
                1
              )} in)`
            : "—",
        unit: halfSpan > 0 ? `for a ${halfSpan.toFixed(1)} ft run (half the span)` : "enter the span",
        tier: 3,
      },
      {
        label: "Gable roof area (one side)",
        value: valid && sideArea > 0 ? `${sideArea.toFixed(1)} sq ft` : "—",
        unit: sideArea > 0 ? "rafter length × building length" : "enter the span and length",
        tier: 3,
      },
      {
        label: "Gable roof area (both sides)",
        value: valid && sideArea > 0 ? `${(sideArea * 2).toFixed(1)} sq ft` : "—",
        unit: sideArea > 0 ? "before waste" : "enter the span and length",
        tier: 3,
      },
    ];
  }, [mode, rise, run, runUnit, degrees, xRatio, span, spanUnit, bLen, bLenUnit]);

  const inputs = (
    <>
      {mode === "riseRun" && (
        <>
          <Field
            label="Total rise (inches, eave to ridge)"
            id="rise"
            value={rise}
            onChange={setRise}
            placeholder="e.g. 72"
          />
          <Field
            label="Horizontal run (eave to ridge)"
            id="run"
            value={run}
            onChange={setRun}
            placeholder="e.g. 12"
            units={["ft", "m"]}
            selectedUnit={runUnit}
            onUnitChange={(v) => setRunUnit(v as UnitLen)}
          />
        </>
      )}

      {mode === "degrees" && (
        <Field
          label="Roof angle (degrees)"
          id="degrees"
          value={degrees}
          onChange={setDegrees}
          placeholder="e.g. 26.57"
        />
      )}

      {mode === "ratio" && (
        <Field
          label="Pitch ratio (x in x:12)"
          id="xRatio"
          value={xRatio}
          onChange={setXRatio}
          placeholder="e.g. 6"
        />
      )}

      {/* Optional span and length for rafter length and gable roof area */}
      <div
        style={{
          marginTop: "14px",
          paddingTop: "14px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <Field
          label="Span, eave to eave — optional"
          id="span"
          value={span}
          onChange={setSpan}
          placeholder="e.g. 24"
          units={["ft", "m"]}
          selectedUnit={spanUnit}
          onUnitChange={(v) => setSpanUnit(v as UnitLen)}
        />
        <Field
          label="Roof length along the ridge — optional"
          id="bLen"
          value={bLen}
          onChange={setBLen}
          placeholder="e.g. 40"
          units={["ft", "m"]}
          selectedUnit={bLenUnit}
          onUnitChange={(v) => setBLenUnit(v as UnitLen)}
        />
        <p
          style={{ fontSize: "12px", color: "var(--text-3)", marginTop: "4px" }}
        >
          Include the overhangs in both to get the full rafter and roof area. Assumes a
          symmetrical gable roof: rafter run = span &divide; 2.
        </p>
      </div>
    </>
  );

  return (
    <CalcShell
      title="Roof pitch calculator"
      description="Convert roof pitch between x:12 ratio, degrees, and percentage. Get rafter length, pitch factor, and gable roof area from any input format."
      types={TYPES}
      onTypeChange={setModeIdx}
      inputs={inputs}
      results={results}
      notice={`Pitch ratio = rise ÷ 12 (x:12 format). Degrees = arctan(rise/12) × (180/π). Pitch factor = √((rise/12)² + 1) — multiply the flat footprint area, including overhangs, by this to get the sloped roof area. Rafter length = run × pitch factor, measured to the centre of the ridge with no deduction for a ridge board. Gable area per side = rafter length × roof length; waste, ridge caps and hips are not included. Minimum slopes (2024 IRC R905): ¼:12 built-up, membrane and standing-seam metal; 2:12 asphalt shingles (double underlayment below 4:12); 2½:12 clay/concrete tile (double underlayment below 4:12); 3:12 metal shingles and wood shingles/shakes; 4:12 slate. Manufacturer instructions and local amendments can be stricter. OSHA calls a roof over 4:12 "steep", but for construction work fall protection is required 6 ft or more above a lower level at any pitch (29 CFR 1926.501(b)(10), (11), (13)).`}
      related={[
        {
          href: "/concrete-calculator",
          label: "Concrete calculator",
          desc: "Footing & slab volumes",
        },
        {
          href: "/excavation-calculator",
          label: "Excavation calculator",
          desc: "Soil volume & truck loads",
        },
      ]}
    />
  );
}
