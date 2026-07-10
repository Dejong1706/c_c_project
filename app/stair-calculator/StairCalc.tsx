"use client";
import { useState, useMemo } from "react";
import CalcShell from "../components/CalcShell";
import Field from "../components/Field";

type HeightUnit = "in" | "cm" | "ft";
type MountType = "standard" | "flush";

// IRC R311.7.5 limits
const IRC_MAX_RISER_IN = 7.75;
const IRC_MIN_TREAD_IN = 10;
const IRC_MIN_WIDTH_IN = 36;

const toIn: Record<HeightUnit, number> = { in: 1, cm: 0.393701, ft: 12 };

const MOUNT_TYPES: Record<MountType, { label: string; desc: string }> = {
  standard: {
    label: "Standard mount",
    desc: "Deck/landing face is top tread — most common for decks",
  },
  flush: {
    label: "Flush mount",
    desc: "Stringer top sits level with deck — common for interior stairs",
  },
};
const MOUNT_ORDER: MountType[] = ["standard", "flush"];
const TYPES = MOUNT_ORDER.map((k) => MOUNT_TYPES[k].label);

export default function StairCalc() {
  const [mountIdx, setMountIdx] = useState(0);
  const [totalRise, setTotalRise] = useState("");
  const [riseUnit, setRiseUnit] = useState<HeightUnit>("in");
  const [targetRiser, setTargetRiser] = useState("7");
  const [treadDepth, setTreadDepth] = useState("11");
  const [stairWidth, setStairWidth] = useState("36");

  const mountType = MOUNT_ORDER[mountIdx];

  const results = useMemo<
    { label: string; value: string | number; unit: string; tier: 1 | 2 | 3 }[]
  >(() => {
    const totalRiseIn = (parseFloat(totalRise) || 0) * toIn[riseUnit];
    const targetRiserIn = parseFloat(targetRiser) || 7;
    const treadDepthIn = parseFloat(treadDepth) || 11;
    const stairWidthIn = parseFloat(stairWidth) || 36;

    const valid = totalRiseIn > 0;

    // Risers = ⌈Total Rise ÷ Target Riser⌉
    const numRisers = valid ? Math.ceil(totalRiseIn / targetRiserIn) : 0;
    // Back-derive actual riser so all risers are equal
    const actualRiser = valid ? totalRiseIn / numRisers : 0;
    // Treads = Risers − 1 (top landing counts as last tread in standard mount)
    const numTreads = valid ? numRisers - 1 : 0;
    // Total horizontal run
    const totalRun = valid ? numTreads * treadDepthIn : 0;

    // Stringer length — Pythagorean theorem
    // Standard mount: stringer spans rise minus one riser (deck face = top tread)
    // Flush mount: full total rise used
    const stringerRise =
      mountType === "standard" ? totalRiseIn - actualRiser : totalRiseIn;
    const stringerLengthIn = valid
      ? Math.sqrt(stringerRise ** 2 + totalRun ** 2)
      : 0;
    const stringerLengthFt = stringerLengthIn / 12;

    // Stair angle
    const angleRad = valid ? Math.atan(stringerRise / totalRun) : 0;
    const angleDeg = (angleRad * 180) / Math.PI;

    // Comfort check: Rise + Run should be 17–18"
    const comfortSum = actualRiser + treadDepthIn;

    // IRC code checks
    const riserOk = actualRiser <= IRC_MAX_RISER_IN && actualRiser >= 4;
    const treadOk = treadDepthIn >= IRC_MIN_TREAD_IN;
    const widthOk = stairWidthIn >= IRC_MIN_WIDTH_IN;
    const comfortOk = comfortSum >= 17 && comfortSum <= 18;
    const angleOk = angleDeg >= 30 && angleDeg <= 37;

    const codeStatus =
      riserOk && treadOk && widthOk ? "✓ IRC compliant" : "✗ Check code";

    return [
      {
        label: "Number of risers",
        value: valid ? numRisers : "—",
        unit: "risers",
        tier: 1,
      },
      {
        label: "Actual riser height",
        value: valid ? actualRiser.toFixed(3) : "—",
        unit: `in ${riserOk ? "✓" : '✗ exceeds 7¾" max'}`,
        tier: 1,
      },
      {
        label: "Number of treads",
        value: valid ? numTreads : "—",
        unit: "treads",
        tier: 2,
      },
      {
        label: "Total horizontal run",
        value: valid
          ? `${totalRun.toFixed(1)} in (${(totalRun / 12).toFixed(2)} ft)`
          : "—",
        unit: "",
        tier: 2,
      },
      {
        label: "Stringer length",
        value: valid
          ? `${stringerLengthIn.toFixed(1)} in (${stringerLengthFt.toFixed(
              2
            )} ft)`
          : "—",
        unit: "— buy next standard length up",
        tier: 2,
      },
      {
        label: "Stair angle",
        value: valid ? `${angleDeg.toFixed(1)}°` : "—",
        unit: `${
          angleOk ? "✓ 30–37° comfort range" : "✗ outside comfort range"
        }`,
        tier: 3,
      },
      {
        label: "Comfort formula (R + T)",
        value: valid ? comfortSum.toFixed(1) : "—",
        unit: `in ${comfortOk ? '✓ 17–18" ideal' : '⚠ outside 17–18" ideal'}`,
        tier: 3,
      },
      {
        label: "IRC code check",
        value: valid ? codeStatus : "—",
        unit: `riser ${riserOk ? "✓" : "✗"} · tread ${
          treadOk ? "✓" : "✗"
        } · width ${widthOk ? "✓" : "✗"}`,
        tier: 3,
      },
    ];
  }, [totalRise, riseUnit, targetRiser, treadDepth, stairWidth, mountType]);

  const inputs = (
    <>
      <Field
        label="Total rise (floor to floor)"
        id="totalRise"
        value={totalRise}
        onChange={setTotalRise}
        placeholder="e.g. 108"
        units={["in", "cm", "ft"]}
        selectedUnit={riseUnit}
        onUnitChange={(v) => setRiseUnit(v as HeightUnit)}
      />
      <Field
        label='Target riser height (in) — IRC max 7¾"'
        id="targetRiser"
        value={targetRiser}
        onChange={setTargetRiser}
        placeholder="e.g. 7"
      />
      <Field
        label='Tread depth (in) — IRC min 10"'
        id="treadDepth"
        value={treadDepth}
        onChange={setTreadDepth}
        placeholder="e.g. 11"
      />
      <Field
        label='Stair width (in) — IRC min 36"'
        id="stairWidth"
        value={stairWidth}
        onChange={setStairWidth}
        placeholder="e.g. 36"
      />

      {/* Mount type */}
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
          Stringer mount type
        </p>
        <div style={{ display: "flex", gap: "6px" }}>
          {MOUNT_ORDER.map((k, i) => (
            <button
              key={k}
              onClick={() => setMountIdx(i)}
              style={{
                flex: 1,
                padding: "7px",
                borderRadius: "8px",
                fontSize: "13px",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                fontWeight: mountIdx === i ? 600 : 400,
                border: mountIdx === i ? "none" : "1px solid var(--border)",
                background: mountIdx === i ? "var(--accent)" : "var(--surface)",
                color: mountIdx === i ? "white" : "var(--text-2)",
                transition: "all 0.15s",
              }}
            >
              {MOUNT_TYPES[k].label}
            </button>
          ))}
        </div>
        <p
          style={{
            fontSize: "12px",
            color: "var(--text-3)",
            marginTop: "6px",
          }}
        >
          {MOUNT_TYPES[MOUNT_ORDER[mountIdx]].desc}
        </p>
      </div>
    </>
  );

  return (
    <CalcShell
      title="Stair calculator"
      description="Calculate riser count, actual riser height, tread count, total run, and stringer length for IRC-compliant residential stairs."
      types={TYPES}
      onTypeChange={setMountIdx}
      inputs={inputs}
      results={results}
      notice={`Risers = ⌈Total Rise ÷ Target Riser⌉. Actual riser = Total Rise ÷ Risers (equal distribution per IRC §R311.7.5.1 ⅜" uniformity rule). Stringer = √(Rise² + Run²). IRC R311.7.5: max riser 7¾", min tread 10", min width 36". Comfort formula: Rise + Run = 17–18" (Blondel). Measure finished floor to finished floor — include flooring thickness on both ends. Always verify with your local building department before cutting stringers.`}
      related={[
        {
          href: "/concrete-calculator",
          label: "Concrete calculator",
          desc: "Footing & slab volumes",
        },
        {
          href: "/excavation-calculator",
          label: "Excavation calculator",
          desc: "Soil volume & cost",
        },
      ]}
    />
  );
}
