import { useEffect, useRef, useState } from 'react'
import {
  Hammer, Paintbrush, Wrench, Boxes, Bath, PanelTop,
  ShieldCheck, MessageSquare, Award, ArrowUpRight, ArrowRight, ArrowLeft,
  Phone, Mail, MapPin, Clock, Upload, CheckCircle2, X, Menu, ChevronDown,
} from 'lucide-react'

// Map content.js icon-namen naar lucide componenten
export const ICONS = {
  Hammer, Paintbrush, Wrench, Boxes, Bath, PanelTop,
  ShieldCheck, MessageSquare, Award,
}

export function Icon({ name, ...props }) {
  const Cmp = ICONS[name] || Hammer
  return <Cmp {...props} />
}

export {
  ArrowUpRight, ArrowRight, ArrowLeft, Phone, Mail, MapPin, Clock,
  Upload, CheckCircle2, X, Menu, ChevronDown,
}

// JvB-monogram + wordmark
export function Logo({ dark = false, className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-deep font-display text-sm font-extrabold tracking-tight text-accent">
        JvB
      </div>
      <span className={`font-display text-lg font-extrabold tracking-tight ${dark ? 'text-white' : 'text-ink'}`}>
        JvB&nbsp;Bouw
      </span>
    </div>
  )
}

// Meetellende teller (IntersectionObserver + requestAnimationFrame)
export function CountUp({ end, suffix = '', duration = 2000 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const startTs = performance.now()
        const tick = (now) => {
          const t = Math.min(1, (now - startTs) / duration)
          const eased = 1 - Math.pow(1 - t, 3)
          setValue(Math.round(end * eased))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [end, duration])

  return <span ref={ref} className="tabular-nums">{value}{suffix}</span>
}

export const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
