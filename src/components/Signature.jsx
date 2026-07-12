import { useEffect, useState } from 'react'

// Signature-animatie voor de bouw-branche.
// Een blauwdruk die zichzelf tekent: in vier fases wordt een huis opgebouwd
// (opmeten -> muren -> dak -> afwerking), gesynchroniseerd met de status onderaan.

const STAGES = [
  { label: 'Opmeten' },
  { label: 'In uitvoering' },
  { label: 'Inspectie' },
  { label: 'Opgeleverd' },
]

// Onderdeel van de tekening; verschijnt wanneer de huidige fase >= stage
function Stroke({ d, show, color = '#3B5B7A', w = 2, delay = 0 }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={w}
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength={1}
      style={{
        strokeDasharray: 1,
        strokeDashoffset: show ? 0 : 1,
        transition: `stroke-dashoffset 0.7s ease ${delay}s`,
      }}
    />
  )
}

export default function Signature() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStage((s) => (s + 1) % STAGES.length), 2300)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="relative h-44 overflow-hidden rounded-3xl border border-divider"
      style={{ background: 'linear-gradient(180deg, #EEF3F8 0%, #DEE8F1 68%, #CFDDEB 100%)' }}
    >
      <style>{`@keyframes sig-fadein { from { opacity: 0; transform: translateY(2px) } to { opacity: 1; transform: translateY(0) } }`}</style>

      {/* atmosferische blur-blobs */}
      <div className="pointer-events-none absolute -left-6 top-2 h-24 w-24 rounded-full bg-white/50 blur-2xl" />
      <div className="pointer-events-none absolute right-2 top-6 h-20 w-20 rounded-full bg-primary/10 blur-2xl" />

      {/* subtiel blauwdruk-raster */}
      <div className="blueprint-bg absolute inset-0 opacity-[0.10]" />

      {/* header-strip */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary-dark/70">Blauwdruk</span>
        <span className="font-mono text-[10px] text-primary-dark/60">Fase {stage + 1} / 4</span>
      </div>

      {/* zelftekenende blauwdruk van een huis */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 220 150" preserveAspectRatio="xMidYMid meet">
        {/* Fase 0 — opmeten: grondlijn + maatlijn met ticks */}
        <Stroke d="M35 112 L185 112" show={stage >= 0} color="#3B5B7A" w={2} />
        <Stroke d="M40 126 L180 126" show={stage >= 0} color="#C2A06B" w={1.4} delay={0.1} />
        <Stroke d="M40 122 L40 130" show={stage >= 0} color="#C2A06B" w={1.4} delay={0.15} />
        <Stroke d="M180 122 L180 130" show={stage >= 0} color="#C2A06B" w={1.4} delay={0.15} />

        {/* Fase 1 — muren */}
        <Stroke d="M55 112 L55 64" show={stage >= 1} color="#3B5B7A" w={2} />
        <Stroke d="M165 112 L165 64" show={stage >= 1} color="#3B5B7A" w={2} delay={0.1} />
        <Stroke d="M55 64 L165 64" show={stage >= 1} color="#3B5B7A" w={2} delay={0.2} />

        {/* Fase 2 — dak */}
        <Stroke d="M48 64 L110 32 L172 64" show={stage >= 2} color="#2C465F" w={2} />

        {/* Fase 3 — afwerking: deur, raam + accent-vinkje */}
        <Stroke d="M82 112 L82 86 L102 86 L102 112" show={stage >= 3} color="#3B5B7A" w={1.8} />
        <Stroke d="M120 76 L148 76 L148 100 L120 100 Z" show={stage >= 3} color="#3B5B7A" w={1.8} delay={0.1} />
        <Stroke d="M134 76 L134 100" show={stage >= 3} color="#6E8CA8" w={1.2} delay={0.2} />
        <Stroke d="M120 88 L148 88" show={stage >= 3} color="#6E8CA8" w={1.2} delay={0.2} />
        <Stroke d="M150 46 l6 7 l13 -15" show={stage >= 3} color="#C2A06B" w={2.2} delay={0.25} />
      </svg>

      {/* footer-strip: status (met het groene bolletje) */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center gap-2 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        <span key={stage} className="font-mono text-[11px] font-medium text-primary-dark" style={{ animation: 'sig-fadein 0.4s ease-out' }}>
          {STAGES[stage].label}
        </span>
      </div>
    </div>
  )
}
