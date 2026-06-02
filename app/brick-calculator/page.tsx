import type { Metadata } from 'next'
import BrickCalc from './BrickCalc'
export const metadata: Metadata = {
  title: 'Brick Calculator — How Many Bricks Do I Need? | BuildCalc',
  description: 'Free brick calculator. Enter wall dimensions and get exact brick count, mortar bags and pallet estimate. Adjustable mortar joint thickness.',
}
export default function Page() { return <BrickCalc /> }
