'use client'

interface FieldProps {
  label: string
  id: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  units?: string[]
  selectedUnit?: string
  onUnitChange?: (u: string) => void
  hint?: string
}

export default function Field({ label, id, value, onChange, placeholder, units, selectedUnit, onUnitChange, hint }: FieldProps) {
  return (
    <div style={{ marginBottom: '14px' }}>
      <label htmlFor={id} style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--text-2)', marginBottom: '5px' }}>
        {label}
        {hint && <span style={{ fontWeight: 400, color: 'var(--text-3)', marginLeft: '5px' }}>{hint}</span>}
      </label>
      <div style={{ display: 'flex', gap: '6px' }}>
        <input
          type="number"
          id={id}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder || '0'}
          min={0}
          step="any"
          style={{ flex: 1, minWidth: 0 }}
        />
        {units && units.length > 1 && onUnitChange && (
          <select value={selectedUnit} onChange={e => onUnitChange(e.target.value)}
            style={{ width: 'auto', padding: '9px 10px', fontSize: '13px', color: 'var(--text-2)' }}>
            {units.map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        )}
        {units && units.length === 1 && (
          <span style={{ display: 'flex', alignItems: 'center', padding: '0 10px', fontSize: '13px', color: 'var(--text-3)', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '8px', whiteSpace: 'nowrap' }}>
            {units[0]}
          </span>
        )}
      </div>
    </div>
  )
}
