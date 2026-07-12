import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { services, company } from '../content'
import { Icon, ArrowUpRight, ArrowRight, ArrowLeft, Phone, CheckCircle2 } from '../components/primitives'
import { useSEO } from '../lib/useSEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CONTAINER = 'mx-auto max-w-7xl px-6 sm:px-10 lg:px-16'

export default function ServicePage() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  useSEO(
    service
      ? { title: service.metaTitle, description: service.metaDescription, path: `/diensten/${service.slug}` }
      : { title: company.name },
  )

  // Breadcrumb structured data (SEO)
  useEffect(() => {
    if (!service) return
    const ld = document.createElement('script')
    ld.type = 'application/ld+json'
    ld.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: company.url + '/' },
        { '@type': 'ListItem', position: 2, name: 'Diensten', item: company.url + '/#diensten' },
        { '@type': 'ListItem', position: 3, name: service.title, item: `${company.url}/diensten/${service.slug}` },
      ],
    })
    document.head.appendChild(ld)
    return () => { document.head.removeChild(ld) }
  }, [service])

  if (!service) return <Navigate to="/" replace />

  const others = services.filter((s) => s.slug !== slug)

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />

      {/* hero */}
      <section className="relative flex min-h-[62vh] items-end overflow-hidden">
        <img src={service.image} alt={service.alt} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover brightness-[0.5]" />
        <div className="absolute inset-0 bg-gradient-to-br from-deep/85 via-deep/45 to-deep/75" />
        <div className="blueprint-bg absolute inset-0 opacity-[0.12]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-deep to-transparent" />
        <div className={`relative z-10 ${CONTAINER} pb-14 pt-36`}>
          <Link to="/#diensten" className="mb-6 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white/70 hover:text-accent">
            <ArrowLeft className="h-3.5 w-3.5" /> Alle diensten
          </Link>
          <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-primary/20 text-accent backdrop-blur">
            <Icon name={service.icon} className="h-7 w-7" strokeWidth={2.2} />
          </div>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold tracking-tighter text-white sm:text-6xl">{service.title}</h1>
        </div>
      </section>

      {/* body */}
      <section className={`${CONTAINER} py-20 sm:py-28`}>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">{service.intro}</p>

            <div className="mt-10 space-y-3">
              {service.points.map((pt) => (
                <div key={pt} className="flex items-start gap-3 rounded-2xl border border-divider bg-surface p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                  <span className="text-sm leading-relaxed text-ink/80">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA-kaart */}
          <aside className="lg:col-span-5">
            <div className="sticky top-28 overflow-hidden rounded-[2rem] bg-deep p-8 text-white">
              <div className="blueprint-bg absolute inset-0 opacity-[0.10]" />
              <div className="relative">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Interesse?</p>
                <h3 className="mt-2 font-display text-2xl font-bold">Vraag een vrijblijvende offerte</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Vertel ons over uw {service.title.toLowerCase()}-project. We denken graag met u mee.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Link to="/#contact" className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/30">
                    Offerte aanvragen <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a href={`tel:${company.phoneTel}`} className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white">
                    <Phone className="h-4 w-4" /> {company.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* andere diensten */}
        <div className="mt-24">
          <h2 className="mb-8 font-display text-2xl font-bold">Andere diensten</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <Link key={s.slug} to={`/diensten/${s.slug}`} className="group rounded-2xl border border-divider bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary-light hover:shadow-lg">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon name={s.icon} className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <h3 className="mb-1 font-display text-lg font-bold">{s.title}</h3>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.1em] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Bekijk <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
