'use client'
import { useState, useMemo } from 'react'
import CalcShell from '../components/CalcShell'
import Field from '../components/Field'
import WasteSlider from '../components/WasteSlider'

type UnitLen = 'm' | 'ft' | 'cm' | 'in'
const toM: Record<UnitLen, number> = { m: 1, ft: 0.3048, cm: 0.01, in: 0.0254 }

const TYPES = ['Floor', 'Wall', 'Backsplash']
const TILES_PER_BOX = 10

export default function TileCalc() {
  const [roomL, setRoomL] = useState(''); const [rlUnit, setRlUnit] = useState<UnitLen>('m')
  const [roomW, setRoomW] = useState(''); const [rwUnit, setRwUnit] = useState<UnitLen>('m')
  const [tileL, setTileL] = useState(''); const [tlUnit, setTlUnit] = useState<UnitLen>('cm')
  const [tileW, setTileW] = useState(''); const [twUnit, setTwUnit] = useState<UnitLen>('cm')
  const [grout, setGrout] = useState('3')
  const [waste, setWaste] = useState(10)

  const results = useMemo(() => {
    const RL = (parseFloat(roomL) || 0) * toM[rlUnit]
    const RW = (parseFloat(roomW) || 0) * toM[rwUnit]
    const TL = (parseFloat(tileL) || 0) * toM[tlUnit]
    const TW = (parseFloat(tileW) || 0) * toM[twUnit]
    const G  = (parseFloat(grout) || 0) * 0.001

    const roomArea = RL * RW
    const tileArea = (TL + G) * (TW + G)
    const netTiles = tileArea > 0 ? Math.ceil(roomArea / tileArea) : 0
    const totalTiles = Math.ceil(netTiles * (1 + waste / 100))
    const boxes = Math.ceil(totalTiles / TILES_PER_BOX)

    return [
      { label: 'Room area', value: roomArea.toFixed(2), unit: 'm²', primary: true },
      { label: 'Tiles (net)', value: netTiles, unit: 'pcs' },
      { label: `With ${waste}% waste`, value: totalTiles, unit: 'pcs' },
      { label: `Boxes (${TILES_PER_BOX}/box)`, value: boxes || '—', unit: 'boxes' },
    ]
  }, [roomL, rlUnit, roomW, rwUnit, tileL, tlUnit, tileW, twUnit, grout, waste])

  const inputs = (
    <>
      <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-3)', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '10px' }}>Room size</p>
      <Field label="Length" id="roomL" value={roomL} onChange={setRoomL} placeholder="e.g. 4" units={['m','ft','cm','in']} selectedUnit={rlUnit} onUnitChange={v => setRlUnit(v as UnitLen)} />
      <Field label="Width" id="roomW" value={roomW} onChange={setRoomW} placeholder="e.g. 3" units={['m','ft','cm','in']} selectedUnit={rwUnit} onUnitChange={v => setRwUnit(v as UnitLen)} />
      <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-3)', letterSpacing: '0.07em', textTransform: 'uppercase', margin: '16px 0 10px' }}>Tile size</p>
      <Field label="Length" id="tileL" value={tileL} onChange={setTileL} placeholder="e.g. 60" units={['cm','mm','in','m']} selectedUnit={tlUnit} onUnitChange={v => setTlUnit(v as UnitLen)} />
      <Field label="Width" id="tileW" value={tileW} onChange={setTileW} placeholder="e.g. 60" units={['cm','mm','in','m']} selectedUnit={twUnit} onUnitChange={v => setTwUnit(v as UnitLen)} />
      <Field label="Grout joint" id="grout" value={grout} onChange={setGrout} placeholder="3" units={['mm']} hint="typical 2–5 mm" />
      <WasteSlider value={waste} onChange={setWaste} label="Waste / cuts" />
    </>
  )

  return (
    <CalcShell
      title="Tile calculator"
      description="Find out exactly how many tiles you need for floors, walls, or backsplashes. Enter room dimensions and tile size — we'll account for grout joints and waste."
      types={TYPES}
      inputs={inputs}
      results={results}
      notice="Tile count includes grout joints. Always buy 10–15% extra for herringbone or diagonal patterns."
      related={[
        { href: '/concrete-calculator', label: 'Concrete calculator', desc: 'Volume & trucks' },
        { href: '/paint-calculator', label: 'Paint calculator', desc: 'Litres & tins' },
        { href: '/unit-converter', label: 'Unit converter', desc: 'cm ↔ in and more' },
      ]}
    />
  )
}
