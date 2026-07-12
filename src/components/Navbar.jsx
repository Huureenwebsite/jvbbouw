import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { company, nav } from '../content'
import { Logo, ArrowUpRight, Menu, X } from './primitives'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
    </>
  )
}
