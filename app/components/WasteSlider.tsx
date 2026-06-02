'use client'

interface WasteSliderProps {
  label?: string
  value: number
  onChange: (v: number) => void
  min?: number
  max?: number
}

export default function WasteSlider({ label = 'Waste allowance', value, onChange, min = 0, max = 30 }: WasteSliderProps) {
  return (
    <div style={{ marginBottom: '6px', paddingTop: '6px', borderTop: '1px solid var(--border)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-2)' }}>{label}</label>
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent)', fontFamily: 'var(--font-mono)', background: 'var(--accent-light)', padding: '2px 8px', borderRadius: '6px' }}>
          {value}%
        </span>
      </div>
      <input type="range" min={min} max={max} step={1} value={value} onChange={e => onChange(Number(e.target.value))} />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--text-3)', marginTop: '4px' }}>
        <span>Exact</span><span>Conservative</span>
      </div>
    </div>
  )
}
