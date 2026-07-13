import { Link } from 'react-router-dom'
import { Logo } from './primitives'
import { useContent } from '../lib/ContentProvider'

export default function Footer() {
  const { company, services } = useContent()
  return (
    <footer className="relative z-10 bg-deep pt-20 pb-28 text-white lg:pb-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Verbouwing, renovatie &amp; onderhoud met vakmanschap en eerlijke communicatie. In {company.region}.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-white/70">
              <span className="ring-pulse h-2.5 w-2.5 rounded-full bg-emerald-400" />
              Beschikbaar voor nieuwe projecten
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">Diensten</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/diensten/${s.slug}`} className="text-sm text-white/70 transition-colors hover:text-accent">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">Bedrijf</h4>
            <ul className="space-y-2.5">
              <li><a href="/#werkwijze" className="text-sm text-white/70 hover:text-accent">Werkwijze</a></li>
              <li><a href="/#projecten" className="text-sm text-white/70 hover:text-accent">Projecten</a></li>
              <li><a href="/#contact" className="text-sm text-white/70 hover:text-accent">Contact</a></li>
              <li><a href={company.instagram} target="_blank" rel="noreferrer" className="text-sm text-white/70 hover:text-accent">Instagram</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">Contact</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a href={`tel:${company.phoneTel}`} className="hover:text-accent">{company.phoneDisplay}</a></li>
              <li><a href={`mailto:${company.email}`} className="hover:text-accent">{company.email}</a></li>
              <li>{company.street}<br />{company.postal}</li>
              <li className="pt-1 text-white/45">KvK {company.kvk}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {company.name}. Alle rechten voorbehouden.</span>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white/80">Privacy</Link>
            <Link to="/terms" className="hover:text-white/80">Voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
