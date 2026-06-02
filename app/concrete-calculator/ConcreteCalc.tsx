'use client'
import { useState, useMemo } from 'react'
import CalcShell from '../components/CalcShell'
import Field from '../components/Field'
import WasteSlider from '../components/WasteSlider'

type UnitLen = 'm' | 'ft' | 'cm' | 'in'
const toM: Record<UnitLen, number> = { m: 1, ft: 0.3048, cm: 0.01, in: 0.0254 }

const TYPES = ['Slab / floor', 'Wall', 'Column / pier', 'Footing (strip)', 'Round column']
const TRUCK_M3 = 6

export default function ConcreteCalc() {
  const [type, setType] = useState(0)
  const [length, setLength] = useState(''); const [lenUnit, setLenUnit] = useState<UnitLen>('m')
  const [width, setWidth]   = useState(''); const [wUnit, setWUnit]   = useState<UnitLen>('m')
  const [depth, setDepth]   = useState(''); const [dUnit, setDUnit]   = useState<UnitLen>('m')
  const [diam, setDiam]     = useState(''); const [diamUnit, setDiamUnit] = useState<UnitLen>('m')
  const [waste, setWaste]   = useState(10)

  const results = useMemo(() => {
    const L = (parseFloat(length) || 0) * toM[lenUnit]
    const W = (parseFloat(width) || 0) * toM[wUnit]
    const D = (parseFloat(depth) || 0) * toM[dUnit]
    const R = (parseFloat(diam) || 0) / 2 * toM[diamUnit]

    let netVol = 0
    if (type === 4) netVol = Math.PI * R * R * D
    else netVol = L * W * D

    const withWaste = netVol * (1 + waste / 100)
    const cubicYards = withWaste * 1.30795
    const trucks = Math.ceil(withWaste / TRUCK_M3)

    return [
      { label: 'Volume (net)', value: netVol.toFixed(3), unit: 'm³', primary: true },
      { label: `With ${waste}% waste`, value: withWaste.toFixed(3), unit: 'm³' },
      { label: 'Cubic yards', value: cubicYards.toFixed(2), unit: 'yd³' },
      { label: 'Ready-mix trucks', value: trucks === 0 ? '—' : trucks, unit: `@ ${TRUCK_M3} m³/truck` },
    ]
  }, [length, lenUnit, width, wUnit, depth, dUnit, diam, diamUnit, waste, type])

  const isRound = type === 4

  const inputs = (
    <>
      {!isRound ? (
        <>
          <Field label="Length" id="length" value={length} onChange={setLength} placeholder="e.g. 5" units={['m','ft','cm','in']} selectedUnit={lenUnit} onUnitChange={v => setLenUnit(v as UnitLen)} />
          <Field label="Width" id="width" value={width} onChange={setWidth} placeholder="e.g. 4" units={['m','ft','cm','in']} selectedUnit={wUnit} onUnitChange={v => setWUnit(v as UnitLen)} />
        </>
      ) : (
        <Field label="Diameter" id="diam" value={diam} onChange={setDiam} placeholder="e.g. 0.5" units={['m','ft','cm','in']} selectedUnit={diamUnit} onUnitChange={v => setDiamUnit(v as UnitLen)} />
      )}
      <Field label={type === 0 ? 'Thickness' : 'Height / Depth'} id="depth" value={depth} onChange={setDepth} placeholder="e.g. 0.15" units={['m','ft','cm','in']} selectedUnit={dUnit} onUnitChange={v => setDUnit(v as UnitLen)} />
      <WasteSlider value={waste} onChange={setWaste} />
    </>
  )

  return (
    <CalcShell
      title="Concrete calculator"
      description="Calculate the volume of concrete needed for slabs, walls, columns, footings and round piers. Results include cubic yards and ready-mix truck count."
      types={TYPES}
      inputs={inputs}
      results={results}
      notice="Estimates are for material planning only. Always order 5–10% extra. Consult an engineer for structural work."
      related={[
        { href: '/rebar-calculator', label: 'Rebar calculator', desc: 'Weight & bar count' },
        { href: '/concrete-bags', label: 'Concrete bags', desc: 'Bag count estimator' },
        { href: '/unit-converter', label: 'Unit converter', desc: 'm³ ↔ yd³ and more' },
      ]}
    />
  )
}
