"use client";
import { useState, useMemo } from "react";
import CalcShell from "../components/CalcShell";
import Field from "../components/Field";
import WasteSlider from "../components/WasteSlider";

type UnitLen = "m" | "ft" | "cm" | "in" | "mm";
const toM: Record<string, number> = {
  m: 1,
  ft: 0.3048,
  cm: 0.01,
  in: 0.0254,
  mm: 0.001,
};
const TYPES = ["Floor", "Wall", "Backsplash"];

export default function TileCalc() {
  const [roomL, setRoomL] = useState("");
  const [rlUnit, setRlUnit] = useState("m");
  const [roomW, setRoomW] = useState("");
  const [rwUnit, setRwUnit] = useState("m");
  const [tileL, setTileL] = useState("");
  const [tlUnit, setTlUnit] = useState("cm");
  const [tileW, setTileW] = useState("");
  const [twUnit, setTwUnit] = useState("cm");
  const [grout, setGrout] = useState("3");
  const [waste, setWaste] = useState(10);

  const results = useMemo(() => {
    const RL = (parseFloat(roomL) || 0) * toM[rlUnit];
    const RW = (parseFloat(roomW) || 0) * toM[rwUnit];
    const TL = (parseFloat(tileL) || 0) * toM[tlUnit];
    const TW = (parseFloat(tileW) || 0) * toM[twUnit];
    const G = (parseFloat(grout) || 0) * 0.001;
    const area = RL * RW;
    const tileArea = (TL + G) * (TW + G);
    const net = tileArea > 0 ? Math.ceil(area / tileArea) : 0;
    const total = Math.ceil(net * (1 + waste / 100));
    return [
      {
        label: "Room area",
        value: area > 0 ? area.toFixed(2) : "—",
        unit: "square metres (m²)",
        tier: 1 as const,
      },
      {
        label: `Tiles (with ${waste}% waste)`,
        value: total || "—",
        unit: "pcs",
        tier: 2 as const,
      },
      {
        label: `Boxes (10 tiles/box)`,
        value: total > 0 ? Math.ceil(total / 10) : "—",
        unit: "boxes",
        tier: 2 as const,
      },
      {
        label: "Net tiles",
        value: net || "—",
        unit: "pcs (no waste)",
        tier: 3 as const,
      },
      {
        label: "Tile area",
        value: TL > 0 && TW > 0 ? Math.round(TL * TW * 10000) : "—",
        unit: "cm²/tile",
        tier: 3 as const,
      },
    ];
  }, [
    roomL,
    rlUnit,
    roomW,
    rwUnit,
    tileL,
    tlUnit,
    tileW,
    twUnit,
    grout,
    waste,
  ]);

  const inputs = (
    <>
      <p
        style={{
          fontSize: "11px",
          fontWeight: 600,
          color: "var(--text-3)",
          letterSpacing: ".07em",
          textTransform: "uppercase",
          marginBottom: "10px",
        }}
      >
        Room size
      </p>
      <Field
        label="Length"
        id="roomL"
        value={roomL}
        onChange={setRoomL}
        placeholder="e.g. 4"
        units={["m", "ft"]}
        selectedUnit={rlUnit}
        onUnitChange={setRlUnit}
      />
      <Field
        label="Width"
        id="roomW"
        value={roomW}
        onChange={setRoomW}
        placeholder="e.g. 3"
        units={["m", "ft"]}
        selectedUnit={rwUnit}
        onUnitChange={setRwUnit}
      />
      <p
        style={{
          fontSize: "11px",
          fontWeight: 600,
          color: "var(--text-3)",
          letterSpacing: ".07em",
          textTransform: "uppercase",
          margin: "16px 0 10px",
        }}
      >
        Tile size
      </p>
      <Field
        label="Length"
        id="tileL"
        value={tileL}
        onChange={setTileL}
        placeholder="e.g. 60"
        units={["cm", "mm", "in", "m"]}
        selectedUnit={tlUnit}
        onUnitChange={setTlUnit}
      />
      <Field
        label="Width"
        id="tileW"
        value={tileW}
        onChange={setTileW}
        placeholder="e.g. 60"
        units={["cm", "mm", "in", "m"]}
        selectedUnit={twUnit}
        onUnitChange={setTwUnit}
      />
      <Field
        label="Grout joint"
        id="grout"
        value={grout}
        onChange={setGrout}
        placeholder="3"
        units={["mm"]}
        hint="typical 3 mm"
      />
      <WasteSlider value={waste} onChange={setWaste} label="Waste / cuts" />
    </>
  );

  return (
    <CalcShell
      title="Tile calculator"
      description="Find out exactly how many tiles you need for floors, walls, or backsplashes. Enter room dimensions and tile size — we'll account for grout joints and waste."
      types={TYPES}
      inputs={inputs}
      results={results}
      notice="Always buy 10–15% extra for herringbone or diagonal patterns."
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
        {
          href: "/unit-converter",
          label: "Unit converter",
          desc: "cm ↔ in and more",
        },
      ]}
    />
  );
}
