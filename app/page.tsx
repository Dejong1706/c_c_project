import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BuildCalc — Free Construction Calculators',
  description: 'Free construction calculators for concrete volume, tile quantity, rebar weight, brick count and more. Instant results in metric and imperial.',
}

const calcs = [
  { href: '/concrete-calculator', title: 'Concrete calculator', desc: 'Volume in m³, cubic yards and ready-mix truck count', icon: '🏗' },
  { href: '/concrete-bags', title: 'Concrete bag calculator', desc: 'How many 40, 60 or 80 lb bags do you need?', icon: '📦' },
  { href: '/tile-calculator', title: 'Tile calculator', desc: 'Tile count, boxes and grout joint calculation', icon: '⬜' },
  { href: '/brick-calculator', title: 'Brick calculator', desc: 'Bricks, mortar and pallet estimator', icon: '🧱' },
  { href: '/paint-calculator', title: 'Paint calculator', desc: 'Litres and tin count for walls and ceilings', icon: '🎨' },
  { href: '/rebar-calculator', title: 'Rebar calculator', desc: 'Steel bar weight by diameter and length', icon: '📏' },
  { href: '/unit-converter', title: 'Unit converter', desc: 'Length, area, volume and weight conversions', icon: '⇄' },
]

export default function Home() {
  return (
    <div>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '10px', lineHeight: 1.3 }}>Free construction calculators</h1>
        <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: '540px' }}>
          Instant, accurate material estimates for concrete, tiles, bricks, rebar and more. Works in metric and imperial.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
        {calcs.map(c => (
          <Link key={c.href} href={c.href} style={{
            background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px',
            padding: '18px 20px', textDecoration: 'none', display: 'block', transition: 'border-color 0.15s, box-shadow 0.15s',
          }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>{c.icon}</div>
            <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-1)', marginBottom: '4px' }}>{c.title}</p>
            <p style={{ fontSize: '13px', color: 'var(--text-2)', lineHeight: 1.5 }}>{c.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
