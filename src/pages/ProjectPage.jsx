import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowUpRight, ArrowLeft, ArrowRight, Phone } from '../components/primitives'
import { useSEO } from '../lib/useSEO'
import { useContent } from '../lib/ContentProvider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CONTAINER = 'mx-auto max-w-7xl px-6 sm:px-10 lg:px-16'

export default function ProjectPage() {
  const { projects, company } = useContent()
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  useSEO(
    project
      ? {
          title: `${project.title}${project.tag ? ' · ' + project.tag : ''} | JvB Bouw`,
          description: (project.intro || `${project.title} — een project van JvB Bouw.`).slice(0, 155),
          path: `/projecten/${project.slug}`,
        }
      : { title: company.name },
  )

  useEffect(() => {
    if (!project) return
    const ld = document.createElement('script')
    ld.type = 'application/ld+json'
    ld.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: company.url + '/' },
        { '@type': 'ListItem', position: 2, name: 'Projecten', item: company.url + '/#projecten' },
        { '@type': 'ListItem', position: 3, name: project.title, item: `${company.url}/projecten/${project.slug}` },
      ],
    })
    document.head.appendChild(ld)
    return () => { document.head.removeChild(ld) }
  }, [project, company.url])

  if (!project) return <Navigate to="/" replace />

  const others = projects.filter((p) => p.slug !== slug)
  const gallery = project.gallery?.length ? project.gallery : [project.image].filter(Boolean)

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />

      {/* hero */}
      <section className="relative flex min-h-[62vh] items-end overflow-hidden">
        <img src={project.image} alt={project.alt || project.title} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover brightness-[0.55]" />
        <div className="absolute inset-0 bg-gradient-to-br from-deep/80 via-deep/40 to-deep/75" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-deep to-transparent" />
        <div className={`relative z-10 ${CONTAINER} pb-14 pt-36`}>
          <Link to="/#projecten" className="mb-6 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white/70 hover:text-accent">
            <ArrowLeft className="h-3.5 w-3.5" /> Alle projecten
          </Link>
          {project.tag && <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{project.tag}</p>}
          <h1 className="max-w-3xl font-display text-4xl font-extrabold tracking-tighter text-white sm:text-6xl">{project.title}</h1>
        </div>
      </section>

      {/* body */}
      <section className={`${CONTAINER} py-20 sm:py-28`}>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {project.intro && (
              <p className="whitespace-pre-line font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                {project.intro}
              </p>
            )}
          </div>
          <aside className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2rem] bg-deep p-8 text-white">
              <div className="blueprint-bg absolute inset-0 opacity-[0.10]" />
              <div className="relative">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Ook zoiets?</p>
                <h3 className="mt-2 font-display text-2xl font-bold">Vraag een vrijblijvende offerte</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">Vertel ons over uw project — we denken graag met u mee.</p>
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

        {/* galerij */}
        {gallery.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-primary">Foto’s</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {gallery.map((src, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-2xl ${i === 0 && gallery.length > 1 ? 'sm:col-span-2' : ''}`}
                >
                  <img
                    src={src}
                    alt={`${project.title} — foto ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    style={{ aspectRatio: i === 0 && gallery.length > 1 ? '16/9' : '4/3' }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* andere projecten */}
        {others.length > 0 && (
          <div className="mt-24">
            <h2 className="mb-8 font-display text-2xl font-bold">Andere projecten</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {others.map((p) => (
                <Link key={p.slug} to={`/projecten/${p.slug}`} className="group relative aspect-[16/11] overflow-hidden rounded-3xl">
                  <img src={p.image} alt={p.alt || p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    {p.tag && <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{p.tag}</span>}
                    <h3 className="mt-1.5 font-display text-2xl font-bold text-white">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}
