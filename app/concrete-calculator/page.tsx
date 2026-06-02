import type { Metadata } from 'next'
import ConcreteCalc from './ConcreteCalc'

export const metadata: Metadata = {
  title: 'Concrete Calculator — Volume, Cubic Yards & Ready-Mix Trucks | BuildCalc',
  description: 'Free concrete calculator. Enter length, width and depth to get exact volume in m³ and cubic yards, plus ready-mix truck count. Works for slabs, footings, and columns.',
  keywords: ['concrete calculator', 'concrete volume calculator', 'cubic yards concrete', 'ready mix concrete calculator'],
}

export default function Page() { return <ConcreteCalc /> }
