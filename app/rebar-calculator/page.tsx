import type { Metadata } from 'next'
import RebarCalc from './RebarCalc'
export const metadata: Metadata = {
  title: 'Rebar Weight Calculator — Steel Bar Weight & Length | BuildCalc',
  description: 'Calculate total rebar weight by diameter, length and quantity. Unit weight formula included. Works for #3 to #18 bars in metric and imperial.',
}
export default function Page() { return <RebarCalc /> }
