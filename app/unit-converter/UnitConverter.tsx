'use client'
import { useState } from 'react'

interface Category {
  label: string
  units: string[]
  toBase: Record<string, number>
}

const categories: Category[] = [
  {
    label: 'Length',
    units: ['mm','cm','m','km','in','ft','yd'],
    toBase: { mm:0.001, cm:0.01, m:1, km:1000, in:0.0254, ft:0.3048, yd:0.9144 },
  },
  {
    label: 'Area',
    units: ['mm²','cm²','m²','km²','in²','ft²','yd²','acre','평'],
    toBase: { 'mm²':1e-6,'cm²':1e-4,'m²':1,'km²':1e6,'in²':6.4516e-4,'ft²':0.092903,'yd²':0.836127,'acre':4046.86,'평':3.30579 },
  },
  {
    label: 'Volume',
    units: ['cm³','m³','litre','ml','in³','ft³','yd³','gallon(US)'],
    toBase: { 'cm³':1e-6,'m³':1,'litre':0.001,'ml':1e-6,'in³':1.6387e-5,'ft³':0.028317,'yd³':0.764555,'gallon(US)':0.003785 },
  },
  {
    label: 'Weight',
    units: ['g','kg','tonne','lb','oz','ton(US)'],
    toBase: { g:0.001, kg:1, tonne:1000, lb:0.453592, oz:0.028350, 'ton(US)':907.185 },
  },
]

export default function UnitConverter() {
  const [catIdx, setCatIdx] = useState(0)
  const [fromUnit, setFromUnit] = useState(categories[0].units[2])
  const [toUnit, setToUnit] = useState(categories[0].units[5])
  const [value, setValue] = useState('1')

  const cat = categories[catIdx]
  const tb = cat.toBase as Record<string, number>

  const result = (() => {
    const v = parseFloat(value)
    if (isNaN(v)) return '—'
    const inBase = v * (tb[fromUnit] ?? 1)
    const out = inBase / (tb[toUnit] ?? 1)
    if (Math.abs(out) < 0.001 || Math.abs(out) > 1e9) return out.toExponential(4)
    return parseFloat(out.toPrecision(8)).toString()
  })()

  const swap = () => { setFromUnit(toUnit); setToUnit(fromUnit) }

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '6px' }}>Unit converter</h1>
        <p style={{ fontSize: '14px', color: 'var(--text-2)' }}>Construction-focused unit conversion — length, area, volume and weight.</p>
      </div>

      {/* Category tabs */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {categories.map((c, i) => (
          <button key={c.label} onClick={() => { setCatIdx(i); setFromUnit(c.units[2]); setToUnit(c.units[i===1?4:5] ?? c.units[1]) }}
            style={{ padding: '6px 16px', borderRadius: '20px', fontSize: '13px', cursor: 'pointer', border: catIdx === i ? 'none' : '1px solid var(--border)', background: catIdx === i ? 'var(--accent)' : 'var(--surface)', color: catIdx === i ? 'white' : 'var(--text-2)', fontFamily: 'var(--font-sans)', fontWeight: catIdx === i ? 500 : 400, transition: 'all 0.15s' }}>
            {c.label}
          </button>
        ))}
      </div>

      {/* Converter card */}
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', maxWidth: '520px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '10px', alignItems: 'end' }}>
          <div>
            <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-2)', display: 'block', marginBottom: '5px' }}>From</label>
            <select value={fromUnit} onChange={e => setFromUnit(e.target.value)}>
              {cat.units.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
          <button onClick={swap}
            style={{ height: '36px', width: '36px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--surface-2)', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-2)', marginBottom: '0' }}>
            ⇄
          </button>
          <div>
            <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-2)', display: 'block', marginBottom: '5px' }}>To</label>
            <select value={toUnit} onChange={e => setToUnit(e.target.value)}>
              {cat.units.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '10px', alignItems: 'center', marginTop: '16px' }}>
          <input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="Enter value" step="any" />
          <span style={{ fontSize: '18px', color: 'var(--text-3)', textAlign: 'center' }}>=</span>
          <div style={{ background: 'var(--accent)', borderRadius: '8px', padding: '9px 12px' }}>
            <p style={{ fontSize: '16px', fontWeight: 600, color: 'white', fontFamily: 'var(--font-mono)', wordBreak: 'break-all' }}>{result}</p>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginTop: '2px' }}>{toUnit}</p>
          </div>
        </div>
      </div>

      {/* Reference table */}
      <div style={{ marginTop: '28px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
        <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-3)', letterSpacing: '0.07em', textTransform: 'uppercase', padding: '14px 18px', borderBottom: '1px solid var(--border)' }}>Quick reference — {cat.label}</p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <tbody>
              {cat.units.slice(0, 6).map((u, i) => (
                <tr key={u} style={{ borderBottom: i < cat.units.slice(0,6).length - 1 ? '1px solid var(--border)' : 'none', background: u === fromUnit ? 'var(--accent-light)' : 'transparent' }}>
                  <td style={{ padding: '10px 18px', fontWeight: 500, color: 'var(--text-1)' }}>{u}</td>
                  {cat.units.slice(0, 6).map(u2 => {
                    if (u === u2) return <td key={u2} style={{ padding: '10px 14px', color: 'var(--text-3)' }}>—</td>
                    const v = tb[u] / tb[u2]
                    const disp = Math.abs(v) < 0.001 || Math.abs(v) > 9999 ? v.toExponential(3) : parseFloat(v.toPrecision(5))
                    return <td key={u2} style={{ padding: '10px 14px', color: 'var(--text-2)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>{disp}</td>
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
