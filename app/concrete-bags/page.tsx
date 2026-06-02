import type { Metadata } from 'next'
import BagCalc from './BagCalc'
export const metadata: Metadata = {
  title: 'Concrete Bag Calculator — How Many Bags of Concrete? | BuildCalc',
  description: 'How many bags of pre-mix concrete do you need? Enter slab dimensions and select bag size (40lb, 60lb, 80lb). Free, instant results.',
}
export default function Page() { return <BagCalc /> }
