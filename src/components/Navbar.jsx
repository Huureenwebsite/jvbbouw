import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo, ArrowUpRight, Menu, X, Phone } from './primitives'
import { useContent } from '../lib/ContentProvider'

function WhatsAppIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.73 6.4L3.2 28.8l6.57-1.72a12.74 12.74 0 0 0 6.23 1.6h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05A12.7 12.7 0 0 0 16 3.2Zm0 23.02h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.57 10.57 0 0 1-1.62-5.64c0-5.86 4.77-10.62 10.63-10.62 2.84 0 5.5 1.1 7.51 3.11a10.55 10.55 0 0 1 3.11 7.52c0 5.86-4.77 10.62-10.62 10.62Zm5.83-7.95c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.53-.71-.54l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.25 3.43 5.45 4.81.76.33 1.36.52 1.82.67.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  )
}

export default function Navbar() {
  const { company, nav } = useContent()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const waUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hallo JvB Bouw, ik heb een vraag over mijn project.')}`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav
        className={`fixed left-1/2 top-4 z-50 flex w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 ${
          scrolled ? 'glass shadow-lg shadow-ink/5' : 'bg-transparent'
        }`}
      >
        <Link to="/" onClick={() => setOpen(false)}><Logo dark={!scrolled} /></Link>

        <div className="hidden items-center gap-7 lg:flex">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`lift-on-hover text-sm font-medium ${
                scrolled ? 'text-ink/80 hover:text-primary' : 'text-white/85 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${company.phoneTel}`}
            className={`hidden items-center gap-1.5 text-sm font-semibold lg:inline-flex ${
              scrolled ? 'text-ink hover:text-primary' : 'text-white hover:text-accent'
            }`}
          >
            <Phone className="h-4 w-4" /> {company.phoneDisplay}
          </a>
          <a
            href="/#contact"
            className="magnetic-btn hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 sm:inline-flex"
          >
            Offerte aanvragen <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className={`grid h-10 w-10 place-items-center rounded-full border lg:hidden ${
              scrolled || open ? 'border-divider bg-surface/70 text-ink' : 'border-white/25 bg-white/10 text-white'
            }`}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobiel overlay-menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center gap-2 px-8 transition-all duration-500 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        style={{ background: 'rgba(20,22,26,0.92)', backdropFilter: 'blur(24px)' }}
      >
        {nav.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-3xl font-bold text-white/90 transition-transform hover:translate-x-2 hover:text-accent"
            style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
          >
            {l.label}
          </a>
        ))}
        <a
          href={`tel:${company.phoneTel}`}
          onClick={() => setOpen(false)}
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white"
        >
          Bel {company.phoneDisplay}
        </a>
      </div>

      {/* Zwevende WhatsApp-knop (alle pagina's) */}
      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp JvB Bouw"
        className="fixed bottom-20 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-transform hover:scale-110 sm:bottom-6 sm:right-6"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      {/* Vaste bel/offerte-balk op mobiel */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-divider bg-surface/95 p-2.5 backdrop-blur lg:hidden">
        <a
          href={`tel:${company.phoneTel}`}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 py-3 text-sm font-semibold text-primary"
        >
          <Phone className="h-4 w-4" /> Bellen
        </a>
        <a
          href="/#contact"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30"
        >
          Offerte <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </>
  )
}
