"use client";
import { useState, useMemo } from "react";
import CalcShell from "../components/CalcShell";
import Field from "../components/Field";

type UnitLen = "m" | "ft";
const toM: Record<UnitLen, number> = { m: 1, ft: 0.3048 };

export default function PaintCalc() {
  const [roomL, setRoomL] = useState("");
  const [rlUnit, setRlUnit] = useState<UnitLen>("m");
  const [roomW, setRoomW] = useState("");
  const [rwUnit, setRwUnit] = useState<UnitLen>("m");
  const [ceilH, setCeilH] = useState("");
  const [chUnit, setChUnit] = useState<UnitLen>("m");
  const [coats, setCoats] = useState(2);

  const results = useMemo(() => {
    const L = (parseFloat(roomL) || 0) * toM[rlUnit];
    const W = (parseFloat(roomW) || 0) * toM[rwUnit];
    const H = (parseFloat(ceilH) || 0) * toM[chUnit];
    const wallArea = 2 * (L + W) * H;
    const litres = (wallArea / 10) * coats;
    return [
      {
        label: `Paint needed (${coats} coat${coats > 1 ? "s" : ""})`,
        value: litres > 0 ? litres.toFixed(1) : "—",
        unit: "litres",
        tier: 1 as const,
      },
      {
        label: "Wall area",
        value: wallArea > 0 ? wallArea.toFixed(1) : "—",
        unit: "m²",
        tier: 2 as const,
      },
      {
        label: "4 L tins",
        value: litres > 0 ? Math.ceil(litres / 4) : "—",
        unit: "tins",
        tier: 2 as const,
      },
      {
        label: "10 L tins",
        value: litres > 0 ? Math.ceil(litres / 10) : "—",
        unit: "tins",
        tier: 3 as const,
      },
      {
        label: "Coverage rate",
        value: "10",
        unit: "m² per litre",
        tier: 3 as const,
      },
    ];
  }, [roomL, rlUnit, roomW, rwUnit, ceilH, chUnit, coats]);

  const inputs = (
    <>
      <Field
        label="Room length"
        id="roomL"
        value={roomL}
        onChange={setRoomL}
        placeholder="e.g. 5"
        units={["m", "ft"]}
        selectedUnit={rlUnit}
        onUnitChange={(v) => setRlUnit(v as UnitLen)}
      />
      <Field
        label="Room width"
        id="roomW"
        value={roomW}
        onChange={setRoomW}
        placeholder="e.g. 4"
        units={["m", "ft"]}
        selectedUnit={rwUnit}
        onUnitChange={(v) => setRwUnit(v as UnitLen)}
      />
      <Field
        label="Ceiling height"
        id="ceilH"
        value={ceilH}
        onChange={setCeilH}
        placeholder="e.g. 2.5"
        units={["m", "ft"]}
        selectedUnit={chUnit}
        onUnitChange={(v) => setChUnit(v as UnitLen)}
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
      description="How much paint do you need? Enter room dimensions and coating preferences to get litres required and tin count. Based on 10 m²/litre standard coverage."
      types={["Walls", "Ceiling", "Exterior"]}
      inputs={inputs}
      results={results}
      notice="Based on 10 m²/L coverage. Rough or porous surfaces may need 20% more. Excludes windows and doors."
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
