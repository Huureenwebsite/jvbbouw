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

// Officieel JvB Bouw-logo. `dark` = op donkere achtergrond → witte variant.
export function Logo({ dark = false, className = '' }) {
  return (
    <img
      src={dark ? '/logo-white.png' : '/logo-dark.png'}
      alt="JvB Bouw — verbouwing, renovatie en onderhoud"
      width={160}
      height={86}
      className={`h-9 w-auto sm:h-10 ${className}`}
    />
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
