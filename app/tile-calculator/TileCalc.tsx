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

type TileApp = "floor" | "wall" | "backsplash";

// Waste and surface defaults differ by application: floors are mostly
// straight cuts along the perimeter, wall tiling adds corner/fixture cuts,
// and backsplashes need the most cuts (outlets, cabinets, small runs).
const TILE_APPS: Record<
  TileApp,
  {
    label: string;
    sectionLabel: string;
    dim1Label: string;
    dim2Label: string;
    dim1Placeholder: string;
    dim2Placeholder: string;
    areaLabel: string;
    defaultWaste: number;
    defaultGroutMm: number;
  }
> = {
  floor: {
    label: "Floor",
    sectionLabel: "Room size",
    dim1Label: "Room length",
    dim2Label: "Room width",
    dim1Placeholder: "e.g. 4",
    dim2Placeholder: "e.g. 3",
    areaLabel: "Room area",
    defaultWaste: 10,
    defaultGroutMm: 3,
  },
  wall: {
    label: "Wall",
    sectionLabel: "Wall size",
    dim1Label: "Wall length",
    dim2Label: "Wall height",
    dim1Placeholder: "e.g. 3",
    dim2Placeholder: "e.g. 2.4",
    areaLabel: "Wall area",
    defaultWaste: 12,
    defaultGroutMm: 2,
  },
  backsplash: {
    label: "Backsplash",
    sectionLabel: "Backsplash size",
    dim1Label: "Counter length",
    dim2Label: "Backsplash height",
    dim1Placeholder: "e.g. 3",
    dim2Placeholder: "e.g. 0.6",
    areaLabel: "Backsplash area",
    defaultWaste: 18,
    defaultGroutMm: 2,
  },
};

const APP_ORDER: TileApp[] = ["floor", "wall", "backsplash"];
const TYPES = APP_ORDER.map((k) => TILE_APPS[k].label);

export default function TileCalc() {
  const [appIdx, setAppIdx] = useState(0);
  const [roomL, setRoomL] = useState("");
  const [rlUnit, setRlUnit] = useState("m");
  const [roomW, setRoomW] = useState("");
  const [rwUnit, setRwUnit] = useState("m");
  const [tileL, setTileL] = useState("");
  const [tlUnit, setTlUnit] = useState("cm");
  const [tileW, setTileW] = useState("");
  const [twUnit, setTwUnit] = useState("cm");
  const [grout, setGrout] = useState(String(TILE_APPS.floor.defaultGroutMm));
  const [waste, setWaste] = useState(TILE_APPS.floor.defaultWaste);

  const appKey = APP_ORDER[appIdx];
  const app = TILE_APPS[appKey];

  // Switching application resets waste/grout to that use case's typical
  // defaults; the user can still fine-tune both afterwards.
  const handleAppChange = (idx: number) => {
    setAppIdx(idx);
    const next = TILE_APPS[APP_ORDER[idx]];
    setWaste(next.defaultWaste);
    setGrout(String(next.defaultGroutMm));
  };

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
        label: app.areaLabel,
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
    app.areaLabel,
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
        {app.sectionLabel}
      </p>
      <Field
        label={app.dim1Label}
        id="roomL"
        value={roomL}
        onChange={setRoomL}
        placeholder={app.dim1Placeholder}
        units={["m", "ft"]}
        selectedUnit={rlUnit}
        onUnitChange={setRlUnit}
      />
      <Field
        label={app.dim2Label}
        id="roomW"
        value={roomW}
        onChange={setRoomW}
        placeholder={app.dim2Placeholder}
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
        placeholder={String(app.defaultGroutMm)}
        units={["mm"]}
        hint={`typical ${app.defaultGroutMm} mm`}
      />
      <WasteSlider value={waste} onChange={setWaste} label="Waste / cuts" />
    </>
  );

  return (
    <CalcShell
      title="Tile calculator"
      description="Find out exactly how many tiles you need for floors, walls, or backsplashes. Enter surface dimensions and tile size — we'll account for grout joints and waste."
      types={TYPES}
      onTypeChange={handleAppChange}
      inputs={inputs}
      results={results}
      notice={`${app.label} tiling — default ${app.defaultWaste}% waste (${
        appKey === "backsplash"
          ? "backsplashes need the most cuts around outlets and cabinets"
          : appKey === "wall"
          ? "wall tiling needs extra cuts around corners and fixtures"
          : "floor tiling is mostly straight cuts along the perimeter"
      }). Add 10–15% more on top for herringbone or diagonal patterns.`}
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
