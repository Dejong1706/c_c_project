'use client'
import { useState, useMemo } from 'react'
import CalcShell from '../components/CalcShell'
import Field from '../components/Field'
import WasteSlider from '../components/WasteSlider'

type UnitLen = 'm' | 'ft'
const toM: Record<UnitLen, number> = { m: 1, ft: 0.3048 }

export default function RebarCalc() {
  const [diam, setDiam]   = useState('')
  const [len, setLen]     = useState(''); const [lUnit, setLUnit] = useState<UnitLen>('m')
  const [count, setCount] = useState('')
  const [splice, setSplice] = useState(5)

  const results = useMemo(() => {
    const d   = parseFloat(diam) || 0
    const L   = (parseFloat(len) || 0) * toM[lUnit]
    const n   = parseFloat(count) || 0
    const unitWt = 0.006165 * d * d
    const totalLen = L * n * (1 + splice / 100)
    const kg = unitWt * totalLen
    return [
      { label: 'Unit weight', value: unitWt.toFixed(4), unit: 'kg/m', primary: true },
      { label: 'Total length', value: totalLen.toFixed(2), unit: 'm' },
      { label: 'Total weight', value: kg.toFixed(2), unit: 'kg' },
      { label: 'Tonnes', value: (kg / 1000).toFixed(4), unit: 'ton' },
    ]
  }, [diam, len, lUnit, count, splice])

  const inputs = (
    <>
      <Field label="Bar diameter" id="diam" value={diam} onChange={setDiam} placeholder="e.g. 13" units={['mm']} hint="e.g. 10, 13, 16, 19 mm" />
      <Field label="Bar length" id="len" value={len} onChange={setLen} placeholder="e.g. 6" units={['m','ft']} selectedUnit={lUnit} onUnitChange={v => setLUnit(v as UnitLen)} />
      <Field label="Number of bars" id="count" value={count} onChange={setCount} placeholder="e.g. 40" units={['bars']} />
      <WasteSlider value={splice} onChange={setSplice} label="Lap splice allowance" max={20} />
    </>
  )

  return (
    <CalcShell
      title="Rebar weight calculator"
      description="Calculate total weight of steel rebar from bar diameter, length and count. Uses the standard formula: unit weight = 0.006165 × d² kg/m."
      inputs={inputs}
      results={results}
      notice="Formula: W = 0.006165 × d²(mm) kg/m. Results are theoretical weight; actual may vary ±3%."
      related={[
        { href: '/concrete-calculator', label: 'Concrete calculator', desc: 'Volume & trucks' },
        { href: '/unit-converter', label: 'Unit converter', desc: 'kg ↔ lbs ↔ ton' },
      ]}
    />
  )
}
