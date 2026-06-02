import type { Metadata } from 'next'
import UnitConverter from './UnitConverter'
export const metadata: Metadata = {
  title: 'Construction Unit Converter — m, ft, m², yd³, kg, lbs | BuildCalc',
  description: 'Free construction unit converter. Convert length, area, volume and weight units instantly — mm, cm, m, ft, in, m², ft², m³, yd³, kg, lbs, tonnes.',
}
export default function Page() { return <UnitConverter /> }
