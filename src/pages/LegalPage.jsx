import { Link } from 'react-router-dom'
import { ArrowLeft } from '../components/primitives'
import { useSEO } from '../lib/useSEO'
import { company } from '../content'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CONTAINER = 'mx-auto max-w-3xl px-6 sm:px-10'

export default function LegalPage({ title, updated, sections, path }) {
  useSEO({ title: `${title} | ${company.name}`, description: `${title} van ${company.name}, aannemer in ${company.city}.`, path })
  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <main className={`${CONTAINER} pb-24 pt-36`}>
        <Link to="/" className="mb-6 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted hover:text-primary">
          <ArrowLeft className="h-3.5 w-3.5" /> Terug naar home
        </Link>
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-3 font-mono text-xs text-muted">Laatst bijgewerkt: {updated}</p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="mb-3 font-display text-xl font-bold">{s.h}</h2>
              {s.p.map((para, i) => (
                <p key={i} className="mb-3 leading-relaxed text-ink/75">{para}</p>
              ))}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
