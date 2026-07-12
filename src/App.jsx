import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { company, hero, services, pillars, protocol, trust, projects, contact, contactForm, seo, faq } from './content'
import {
  Icon, CountUp, prefersReducedMotion,
  ArrowUpRight, ArrowRight, Phone, Mail, MapPin, Upload, CheckCircle2, X, ChevronDown,
} from './components/primitives'
import { useSEO } from './lib/useSEO'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signature from './components/Signature'
import { Shuffler, Planner } from './components/FeatureWidgets'

gsap.registerPlugin(ScrollTrigger)

const CONTAINER = 'mx-auto max-w-7xl px-6 sm:px-10 lg:px-16'

/* ── Hero ─────────────────────────────────────────────── */
function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-line-1', { y: 40, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' })
      gsap.from('.hero-line-2', { y: 60, opacity: 0, duration: 1.2, delay: 0.5, ease: 'power3.out' })
      gsap.from('.hero-cta, .hero-meta, .hero-eyebrow', { y: 24, opacity: 0, duration: 0.8, delay: 0.85, stagger: 0.12, ease: 'power3.out' })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={ref} className="relative flex min-h-[100dvh] items-center overflow-hidden">
      <img src={hero.image} alt={hero.alt} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover brightness-[0.55]" />
      <div className="absolute inset-0 bg-gradient-to-br from-deep/85 via-deep/45 to-deep/70" />
      <div className="blueprint-bg absolute inset-0 opacity-[0.14]" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-deep to-transparent" />

      {/* zwevende chips rechtsboven */}
      <div className="absolute right-6 top-28 z-10 hidden flex-col items-end gap-2 md:flex">
        {hero.chips.map((c, i) => (
          <div
            key={c}
            className="animate-float rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 font-mono text-[11px] text-white/90 backdrop-blur"
            style={{ animationDelay: `${i * 0.8}s` }}
          >
            {c}
          </div>
        ))}
      </div>

      <div className={`relative z-10 ${CONTAINER} pb-24 pt-36`}>
        <p className="hero-eyebrow mb-5 font-mono text-xs uppercase tracking-[0.22em] text-accent">{hero.eyebrow}</p>
        <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.98] tracking-tighter text-white sm:text-7xl lg:text-8xl">
          <span className="hero-line-1 block">{hero.titleLine1}</span>
          <span className="hero-line-2 block font-serif font-medium italic text-white/90">{hero.titleLine2}</span>
        </h1>
        <p className="hero-meta mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">{hero.subtext}</p>
        <div className="hero-cta mt-9 flex flex-wrap gap-3">
          <a href="#contact" className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/40">
            {hero.ctaPrimary} <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href={`tel:${company.phoneTel}`} className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-white/15 glass-dark px-6 py-3.5 font-semibold text-white">
            <Phone className="h-4 w-4" /> Bel {company.phoneDisplay}
          </a>
        </div>
        <div className="hero-meta mt-12 flex flex-wrap gap-x-10 gap-y-4">
          {[['10+', 'Jaar ervaring'], ['100%', 'Eigen vakmensen'], ['A–Z', 'Eén aanspreekpunt']].map(([b, s]) => (
            <div key={s}>
              <div className="font-display text-3xl font-extrabold text-white">{b}</div>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Features (3 interactieve kaarten) ────────────────── */
function Features() {
  const ref = useRef(null)
  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const cards = [
    { eyebrow: 'Portfolio', title: 'Werk dat blijft staan', text: 'Van badkamer tot dakkapel — bekijk een greep uit recente projecten in de regio.', widget: <Shuffler /> },
    { eyebrow: 'Vakwerk', title: 'Strak tot in het detail', text: 'Constructie, afwerking en installatie in één hand. Netjes, waterdicht en volgens plan.', widget: <Signature /> },
    { eyebrow: 'Planning', title: 'Duidelijk ingepland', text: 'Heldere afspraken en een realistische planning — u weet altijd waar u aan toe bent.', widget: <Planner /> },
  ]

  return (
    <section ref={ref} className={`${CONTAINER} py-24 sm:py-32`}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="feature-card rounded-3xl border border-divider bg-surface p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">{c.eyebrow}</p>
            <h3 className="mb-5 mt-1.5 font-display text-xl font-bold sm:text-2xl">{c.title}</h3>
            {c.widget}
            <p className="mt-5 text-sm leading-relaxed text-muted">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Pillars (tellers) ────────────────────────────────── */
function Pillars() {
  return (
    <section className="relative overflow-hidden py-8">
      <div className={CONTAINER}>
        <div className="relative overflow-hidden rounded-[2rem] bg-deep text-white">
          <div className="blueprint-bg absolute inset-0 opacity-[0.10]" />
          <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative grid gap-px lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.eyebrow} className="p-10 sm:p-12">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{p.eyebrow}</span>
                <div className="my-3 font-display text-5xl font-extrabold sm:text-6xl">
                  <span className="bg-gradient-to-br from-white to-primary-light bg-clip-text text-transparent">
                    <CountUp end={p.value} suffix={p.suffix} />
                  </span>
                </div>
                <div className="mb-2 font-display text-sm font-semibold text-white/80">{p.label}</div>
                <p className="text-sm leading-relaxed text-white/55">{p.text}</p>
                <div className="mt-5 h-px overflow-hidden bg-white/10">
                  <div className="h-full w-full bg-gradient-to-r from-transparent via-accent to-transparent"
                    style={{ animation: 'pillar-sweep 3s ease-in-out infinite' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes pillar-sweep { 0%{transform:translateX(-100%)} 50%{transform:translateX(100%)} 100%{transform:translateX(100%)} }`}</style>
    </section>
  )
}

/* ── Protocol (sticky-stack) ──────────────────────────── */
function Protocol() {
  const ref = useRef(null)
  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scrollTrigger: { trigger: card, start: 'top top+=100', end: '+=520', scrub: 1 },
          scale: 0.92, filter: 'blur(6px) saturate(0.7)', opacity: 0.5, ease: 'none',
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="werkwijze" ref={ref} className="py-24 sm:py-32">
      <div className={`${CONTAINER} mb-14`}>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Werkwijze</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          Van eerste schets tot nette oplevering
        </h2>
      </div>

      <div className={CONTAINER}>
        {protocol.map((p) => (
          <div key={p.step} className="protocol-card sticky top-24 mb-6">
            <div className="grid overflow-hidden rounded-[2rem] border border-divider bg-surface lg:grid-cols-5">
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:col-span-3">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-display text-5xl font-extrabold text-primary/20">{p.step}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">{p.eyebrow}</span>
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold sm:text-3xl">{p.title}</h3>
                <p className="max-w-md leading-relaxed text-muted">{p.text}</p>
              </div>
              <div className="relative min-h-[220px] lg:col-span-2">
                <img src={p.image} alt={p.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/30 to-transparent" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── ServicesGrid ─────────────────────────────────────── */
function ServicesGrid() {
  const ref = useRef(null)
  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.from('.svc-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 78%', once: true },
        y: 30, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="diensten" ref={ref} className="bg-deep py-24 text-white sm:py-32">
      <div className={`${CONTAINER} mb-14`}>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Wat wij doen</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          Diensten voor woning &amp; bedrijfspand
        </h2>
        <p className="mt-4 max-w-xl text-white/60">Klik op een dienst voor meer informatie en voorbeelden.</p>
      </div>

      <div className={CONTAINER}>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[2rem] bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/diensten/${s.slug}`}
              className="svc-tile group relative bg-deep p-8 transition-colors hover:bg-white/[0.03] sm:p-10"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-accent transition-transform group-hover:scale-110">
                <Icon name={s.icon} className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <h3 className="mb-2 font-display text-xl font-bold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-white/55">{s.short}</p>
              <span className="mt-5 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.1em] text-accent opacity-0 transition-opacity group-hover:opacity-100">
                Meer <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Projects ─────────────────────────────────────────── */
function Projects() {
  const ref = useRef(null)
  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.from('.proj-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 36, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="projecten" ref={ref} className={`${CONTAINER} py-24 sm:py-32`}>
      <div className="mb-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Recent werk</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          Projecten die voor zich spreken
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <div key={p.title} className="proj-card group relative aspect-[16/11] overflow-hidden rounded-3xl">
            <img src={p.image} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{p.tag}</span>
              <h3 className="mt-1.5 font-display text-2xl font-bold text-white">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── TrustSignals ─────────────────────────────────────── */
function TrustSignals() {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setShown(true), { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className={`${CONTAINER} py-24 sm:py-32`}>
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
        {trust.map((t, i) => (
          <div
            key={t.title}
            className="rounded-2xl border border-divider bg-surface p-8 shadow-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-lg"
            style={{ opacity: shown ? 1 : 0, transform: shown ? 'translateY(0)' : 'translateY(24px)', transitionDelay: `${i * 120}ms` }}
          >
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Icon name={t.icon} className="h-6 w-6" strokeWidth={2.2} />
            </div>
            <h3 className="mb-2 font-display text-lg font-bold">{t.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── FAQ (met FAQPage structured data) ────────────────── */
function Faq() {
  const [open, setOpen] = useState(0)

  useEffect(() => {
    const ld = document.createElement('script')
    ld.type = 'application/ld+json'
    ld.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
    document.head.appendChild(ld)
    return () => { document.head.removeChild(ld) }
  }, [])

  return (
    <section id="faq" className={`${CONTAINER} py-24 sm:py-32`}>
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Veelgestelde vragen</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">Goed om te weten</h2>
        </div>
        <div className="divide-y divide-divider overflow-hidden rounded-3xl border border-divider bg-surface">
          {faq.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold sm:text-lg">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 flex-none text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className="grid px-6 transition-all duration-300 sm:px-8"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-muted">{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── ContactForm ──────────────────────────────────────── */
function Field({ label, type = 'text', name, textarea }) {
  const cls = 'w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 text-white placeholder-white/30 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30'
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-white/50">{label}</span>
      {textarea
        ? <textarea name={name} rows={4} className={`${cls} resize-none py-3`} />
        : <input name={name} type={type} className={`${cls} h-12`} />}
    </label>
  )
}

function ContactForm() {
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'sent' | 'error'
  const [files, setFiles] = useState([])

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('_gotcha')) return // honeypot: spam-bot ingevuld
    data.append('_subject', 'Nieuwe aanvraag via jvbbouw.nl')
    setStatus('sending')
    try {
      if (contactForm.formspreeId) {
        const res = await fetch(`https://formspree.io/f/${contactForm.formspreeId}`, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        })
        if (!res.ok) throw new Error('form-error')
        setStatus('sent')
      } else {
        // Fallback tot Formspree actief is: open de mailclient met de gegevens
        const body = [...data.entries()]
          .filter(([k]) => !k.startsWith('_'))
          .map(([k, v]) => `${k}: ${v}`)
          .join('\n')
        window.location.href = `mailto:${contactForm.recipient}?subject=${encodeURIComponent('Aanvraag via website')}&body=${encodeURIComponent(body)}`
        setStatus('sent')
      }
    } catch {
      setStatus('error')
    }
  }
  const addFiles = (list) => setFiles((prev) => [...prev, ...[...list].filter((f) => f.type.startsWith('image/'))].slice(0, 5))

  return (
    <section id="contact" className={`${CONTAINER} py-24 sm:py-32`}>
      <div className="grid overflow-hidden rounded-[2.5rem] border border-divider bg-surface lg:grid-cols-12">
        <div className="p-8 sm:p-12 lg:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">{contact.eyebrow}</p>
          <h2 className="mb-4 mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{contact.title}</h2>
          <p className="text-muted">{contact.text}</p>
          <div className="mt-8 space-y-3">
            {[[Phone, company.phoneDisplay, `tel:${company.phoneTel}`], [Mail, company.email, `mailto:${company.email}`], [MapPin, `${company.street}, ${company.postal}`, null]].map(([I, txt, href]) => (
              <a key={txt} href={href || undefined} className="flex items-center gap-3 text-sm">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-primary/10 text-primary"><I className="h-4 w-4" /></span>
                {txt}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-deep p-8 sm:p-12 lg:col-span-7">
          {status === 'sent' ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
              <CheckCircle2 className="mb-4 h-14 w-14 text-emerald-400" />
              <h3 className="font-display text-2xl font-bold text-white">Bedankt — we nemen contact op.</h3>
              <p className="mt-2 max-w-sm text-white/60">Uw aanvraag is verzonden. U hoort meestal binnen enkele dagen van ons.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Naam" name="naam" />
                <Field label="E-mail" name="email" type="email" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Telefoon" name="tel" type="tel" />
                <Field label="Postcode" name="postcode" />
              </div>
              <Field label="Uw project" name="bericht" textarea />

              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => { e.preventDefault(); addFiles(e.dataTransfer.files) }}
                className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 py-6 text-center transition hover:border-primary/50"
                onClick={() => document.getElementById('file-in').click()}
              >
                <Upload className="mb-2 h-5 w-5 text-white/50" />
                <span className="font-mono text-[11px] text-white/50">Sleep foto's hierheen of klik (max. 5)</span>
                <input id="file-in" type="file" accept="image/*" multiple className="hidden" onChange={(e) => addFiles(e.target.files)} />
              </div>
              {files.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {files.map((f, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] text-white/70">
                      {f.name.slice(0, 18)}
                      <button type="button" onClick={() => setFiles(files.filter((_, j) => j !== i))}><X className="h-3 w-3" /></button>
                    </span>
                  ))}
                </div>
              )}

              {status === 'error' && (
                <p className="rounded-xl bg-red-500/10 px-4 py-3 text-center text-sm text-red-300">
                  Er ging iets mis. Bel ons op {company.phoneDisplay} of mail naar {company.email}.
                </p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="magnetic-btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 font-semibold text-white shadow-lg shadow-primary/30 disabled:opacity-70"
              >
                {status === 'sending' ? 'Versturen…' : 'Aanvraag versturen'} <ArrowUpRight className="h-4 w-4" />
              </button>
              <p className="text-center font-mono text-[10px] text-white/35">Uw gegevens worden vertrouwelijk behandeld.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

/* ── Page ─────────────────────────────────────────────── */
export default function App() {
  useSEO({ title: seo.title, description: seo.description, path: '/' })

  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 200)
    return () => clearTimeout(id)
  }, [])

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pillars />
        <Protocol />
        <ServicesGrid />
        <Projects />
        <TrustSignals />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
