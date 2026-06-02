import type { Metadata } from 'next'
import TileCalc from './TileCalc'

export const metadata: Metadata = {
  title: 'Tile Calculator — How Many Tiles Do I Need? | BuildCalc',
  description: 'Free tile calculator. Enter room dimensions and tile size to find exact tile count, boxes needed and grout coverage. Supports waste factor and multiple patterns.',
  keywords: ['tile calculator', 'how many tiles do I need', 'floor tile calculator', 'tile estimator'],
}

export default function Page() { return <TileCalc /> }
