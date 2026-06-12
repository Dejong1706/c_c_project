"use client";
import { useState, useMemo } from "react";
import CalcShell from "../components/CalcShell";
import Field from "../components/Field";
import WasteSlider from "../components/WasteSlider";

type UnitLen = "ft" | "m" | "in" | "cm";
const toFt: Record<UnitLen, number> = {
  ft: 1,
  m: 3.28084,
  in: 1 / 12,
  cm: 0.0328084,
};

export default function BagCalc() {
  const [len, setLen] = useState("");
  const [lUnit, setLUnit] = useState<UnitLen>("ft");
  const [wid, setWid] = useState("");
  const [wUnit, setWUnit] = useState<UnitLen>("ft");
  const [dep, setDep] = useState("");
  const [dUnit, setDUnit] = useState<UnitLen>("in");
  const [waste, setWaste] = useState(10);

  const results = useMemo(() => {
    const L = (parseFloat(len) || 0) * toFt[lUnit];
    const W = (parseFloat(wid) || 0) * toFt[wUnit];
    const D = (parseFloat(dep) || 0) * toFt[dUnit];
    const yd3 = ((L * W * D) / 27) * (1 + waste / 100);
    return [
      {
        label: "80 lb bags",
        value: yd3 > 0 ? Math.ceil(yd3 * 45) : "—",
        unit: "bags needed",
        tier: 1 as const,
      },
      {
        label: "60 lb bags",
        value: yd3 > 0 ? Math.ceil(yd3 * 60) : "—",
        unit: "bags needed",
        tier: 2 as const,
      },
      {
        label: "40 lb bags",
        value: yd3 > 0 ? Math.ceil(yd3 * 90) : "—",
        unit: "bags needed",
        tier: 2 as const,
      },
      {
        label: "Volume",
        value: yd3 > 0 ? yd3.toFixed(3) : "—",
        unit: "cubic yards (yd³)",
        tier: 3 as const,
      },
      {
        label: "Buffer",
        value: `${waste}%`,
        unit: "extra included",
        tier: 3 as const,
      },
    ];
  }, [len, lUnit, wid, wUnit, dep, dUnit, waste]);

  const inputs = (
    <>
      <Field
        label="Length"
        id="len"
        value={len}
        onChange={setLen}
        placeholder="e.g. 10"
        units={["ft", "m", "in", "cm"]}
        selectedUnit={lUnit}
        onUnitChange={(v) => setLUnit(v as UnitLen)}
      />
      <Field
        label="Width"
        id="wid"
        value={wid}
        onChange={setWid}
        placeholder="e.g. 10"
        units={["ft", "m", "in", "cm"]}
        selectedUnit={wUnit}
        onUnitChange={(v) => setWUnit(v as UnitLen)}
      />
      <Field
        label="Depth"
        id="dep"
        value={dep}
        onChange={setDep}
        placeholder="e.g. 4"
        units={["in", "ft", "cm", "m"]}
        selectedUnit={dUnit}
        onUnitChange={(v) => setDUnit(v as UnitLen)}
      />
      <WasteSlider value={waste} onChange={setWaste} label="Extra buffer" />
    </>
  );

  return (
    <CalcShell
      title="Concrete bag calculator"
      description="Calculate how many bags of pre-mix concrete (40lb, 60lb, or 80lb) you need for any slab, post hole or footing project."
      inputs={inputs}
      results={results}
      notice="For large pours over 1 yd³, ready-mix concrete is more cost-effective than bags."
      related={[
        {
          href: "/concrete-calculator",
          label: "Concrete calculator",
          desc: "Volume in m³ & yd³",
        },
        {
          href: "/rebar-calculator",
          label: "Rebar calculator",
          desc: "Rebar weight",
        },
      ]}
    />
  );
}
