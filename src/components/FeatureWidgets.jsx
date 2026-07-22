import { useEffect, useState } from 'react'
import { CheckCircle2 } from './primitives'
import { useContent } from '../lib/ContentProvider'

// ── Kaart 1: gestapelde project-shuffler (beheerbaar via "Project slider") ──
export function Shuffler() {
  const { slider } = useContent()
  const slides = (slider?.length ? slider : []).slice(0, 3)
  const [order, setOrder] = useState([0, 1, 2])

  useEffect(() => {
    const id = setInterval(() => setOrder((o) => [o[1], o[2], o[0]]), 3000)
    return () => clearInterval(id)
  }, [])

  const styles = [
    { z: 30, scale: 1, y: 0, blur: 0, opacity: 1 },
    { z: 20, scale: 0.94, y: 14, blur: 2, opacity: 0.7 },
    { z: 10, scale: 0.88, y: 28, blur: 4, opacity: 0.45 },
  ]

  return (
    <div className="relative h-44">
      {order.map((cardIdx, pos) => {
        const s = styles[pos]
        const c = slides[cardIdx]
        if (!c) return null
        return (
          <div
            key={cardIdx}
            className="absolute inset-x-2 top-1 overflow-hidden rounded-2xl border border-divider shadow-lg transition-all duration-700 ease-out"
            style={{
              zIndex: s.z,
              transform: `translateY(${s.y}px) scale(${s.scale})`,
              filter: `blur(${s.blur}px)`,
              opacity: s.opacity,
            }}
          >
            <div className="relative h-36">
              <img src={c.img} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/80 to-transparent" />
              <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/90">
                {c.tag}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ── Kaart 3: planner met bewegende cursor ────────────────────
const DAYS = ['M', 'D', 'W', 'D', 'V', 'Z', 'Z']

// Huidig ISO-weeknummer (de werkelijke werkweek) — verandert vanzelf elke week
function currentIsoWeek() {
  const d = new Date()
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  const day = t.getUTCDay() || 7
  t.setUTCDate(t.getUTCDate() + 4 - day)
  const yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1))
  return Math.ceil(((t - yearStart) / 86400000 + 1) / 7)
}

export function Planner() {
  const [phase, setPhase] = useState(0) // 0..4 loop
  const week = currentIsoWeek()

  useEffect(() => {
    const id = setInterval(() => setPhase((p) => (p + 1) % 5), 1400)
    return () => clearInterval(id)
  }, [])

  const booked = phase >= 3
  const targetDay = 10 // gemarkeerde dag

  return (
    <div className="relative h-44 overflow-hidden rounded-3xl border border-divider bg-surface p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Planning</span>
        <span className="font-mono text-[10px] text-primary">Week 24</span>
      </div>

      <div className="grid grid-cols-7 gap-1.5">
        {DAYS.map((d, i) => (
          <div key={i} className="text-center font-mono text-[9px] text-muted">{d}</div>
        ))}
        {Array.from({ length: 14 }).map((_, i) => {
          const isTarget = i === targetDay
          return (
            <div
              key={i}
              className={`grid aspect-square place-items-center rounded-md text-[10px] font-medium transition-all duration-300 ${
                isTarget && booked
                  ? 'bg-primary text-white'
                  : isTarget
                  ? 'bg-primary/10 text-primary ring-1 ring-primary/40'
                  : 'bg-background text-ink/50'
              }`}
            >
              {i + 8}
            </div>
          )
        })}
      </div>

      {/* bevestiging */}
      <div
        className="absolute bottom-3 left-4 flex items-center gap-1.5 transition-all duration-500"
        style={{ opacity: booked ? 1 : 0, transform: booked ? 'translateY(0)' : 'translateY(6px)' }}
      >
        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
        <span className="font-mono text-[11px] text-ink">Afspraak ingepland</span>
      </div>

      {/* bewegende cursor */}
      <svg
        className="pointer-events-none absolute z-30 transition-all duration-700 ease-out"
        width="20" height="20" viewBox="0 0 24 24"
        style={{
          left: phase < 2 ? '20%' : '62%',
          top: phase < 2 ? '78%' : '52%',
        }}
      >
        <path d="M4 2 L4 18 L8.5 13.5 L11.5 20 L14 19 L11 12.5 L18 12.5 Z" fill="#191B1F" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    </div>
  )
}
