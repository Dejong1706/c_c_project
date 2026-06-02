import type { Metadata } from 'next'
import PaintCalc from './PaintCalc'
export const metadata: Metadata = {
  title: 'Paint Calculator — How Much Paint Do I Need? | BuildCalc',
  description: 'Free paint calculator. Enter room dimensions and get litres needed plus tin count. Covers walls, ceilings and exterior. Adjustable for 2-coat coverage.',
}
export default function Page() { return <PaintCalc /> }
