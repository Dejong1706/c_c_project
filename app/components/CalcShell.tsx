'use client'
import { useState, ReactNode } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface ResultItem {
  label: string
  value: string | number
  unit: string
  primary?: boolean
}

interface RelatedCalc {
  href: string
  label: string
  desc: string
}

interface CalcShellProps {
  title: string
  description: string
  types?: string[]
  inputs: ReactNode
  results: ResultItem[]
  related?: RelatedCalc[]
  notice?: string
}

export default function CalcShell({ title, description, types, inputs, results, related, notice }: CalcShellProps) {
  const [activeType, setActiveType] = useState(0)

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--text-1)', marginBottom: '6px' }}>{title}</h1>
        <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.6 }}>{description}</p>
      </div>

      {/* Type tabs */}
      {types && types.length > 1 && (
        <div style={{ display: 'flex', gap: '6px', marginBottom: '20px' }}>
          {types.map((t, i) => (
            <button key={t} onClick={() => setActiveType(i)}
              style={{
                padding: '6px 14px', borderRadius: '20px', fontSize: '13px', cursor: 'pointer',
                border: activeType === i ? 'none' : '1px solid var(--border)',
                background: activeType === i ? 'var(--accent)' : 'var(--surface)',
                color: activeType === i ? 'white' : 'var(--text-2)',
                fontFamily: 'var(--font-sans)', fontWeight: activeType === i ? 500 : 400,
                transition: 'all 0.15s',
              }}>
              {t}
            </button>
          ))}
        </div>
      )}

      {/* Calc grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginBottom: '20px' }}>
        {/* Inputs */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
          <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-3)', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '16px' }}>Inputs</p>
          {inputs}
        </div>

        {/* Results */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
          <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-3)', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '16px' }}>Results</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {results.map((r, i) => (
              <div key={i} style={{
                padding: '12px 14px', borderRadius: '10px',
                background: r.primary ? 'var(--accent)' : 'var(--surface-2)',
                gridColumn: r.primary ? 'span 2' : 'span 1',
              }}>
                <p style={{ fontSize: '11px', color: r.primary ? 'rgba(255,255,255,0.75)' : 'var(--text-3)', marginBottom: '4px' }}>{r.label}</p>
                <p style={{ fontSize: r.primary ? '28px' : '20px', fontWeight: 600, color: r.primary ? 'white' : 'var(--text-1)', lineHeight: 1, fontFamily: 'var(--font-mono)' }}>{r.value}</p>
                <p style={{ fontSize: '11px', color: r.primary ? 'rgba(255,255,255,0.6)' : 'var(--text-3)', marginTop: '2px' }}>{r.unit}</p>
              </div>
            ))}
          </div>
          {notice && (
            <p style={{ fontSize: '11px', color: 'var(--text-3)', marginTop: '14px', lineHeight: 1.6, padding: '8px 10px', background: 'var(--surface-2)', borderRadius: '8px' }}>
              ⚠ {notice}
            </p>
          )}
        </div>
      </div>

      {/* Related */}
      {related && related.length > 0 && (
        <div>
          <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-3)', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '10px' }}>Related calculators</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px' }}>
            {related.map(r => (
              <Link key={r.href} href={r.href} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '12px 14px', background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: '10px', textDecoration: 'none', transition: 'border-color 0.15s',
              }}>
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-1)' }}>{r.label}</p>
                  <p style={{ fontSize: '11px', color: 'var(--text-3)' }}>{r.desc}</p>
                </div>
                <ChevronRight size={14} color="var(--text-3)" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
