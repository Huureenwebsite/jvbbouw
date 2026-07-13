import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import * as staticContent from '../content'

export const sanityClient = createClient({
  projectId: 'xy8q4pjk',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)
const urlFor = (source, w = 1600) =>
  source ? builder.image(source).width(w).auto('format').fit('max').url() : null

const QUERY = `{
  "settings": *[_type == "siteSettings"][0],
  "services": *[_type == "service"] | order(order asc),
  "projects": *[_type == "project"] | order(order asc),
  "reviews": *[_type == "review"] | order(order asc),
  "faq": *[_type == "faqItem"] | order(order asc)
}`

// Haalt content uit Sanity en voegt die samen met de statische fallback (content.js).
// Bij een lege/ontbrekende waarde blijft de fallback staan, zodat er nooit iets kapot gaat.
export async function fetchCmsContent() {
  const data = await sanityClient.fetch(QUERY)
  const { company, hero, contact, seo, services, projects, faq, person, reviews } = staticContent

  const s = data.settings || {}

  const mergedCompany = {
    ...company,
    name: s.companyName || company.name,
    phoneDisplay: s.phoneDisplay || company.phoneDisplay,
    phoneTel: s.phoneTel || company.phoneTel,
    email: s.email || company.email,
    street: s.street || company.street,
    postal: s.postal || company.postal,
    city: s.city || company.city,
    kvk: s.kvk || company.kvk,
  }

  const mergedHero = {
    ...hero,
    image: urlFor(s.heroImage, 2400) || hero.image,
    alt: s.heroAlt || hero.alt,
    eyebrow: s.heroEyebrow || hero.eyebrow,
    titleLine1: s.heroTitleLine1 || hero.titleLine1,
    titleLine2: s.heroTitleLine2 || hero.titleLine2,
    subtext: s.heroSubtext || hero.subtext,
  }

  const mergedContact = {
    ...contact,
    title: s.contactTitle || contact.title,
    text: s.contactText || contact.text,
  }

  const mergedSeo = {
    title: s.seoTitle || seo.title,
    description: s.seoDescription || seo.description,
  }

  const mergedServices =
    data.services?.length
      ? data.services.map((doc) => {
          const fallback = services.find((x) => x.slug === doc.slug?.current) || {}
          return {
            slug: doc.slug?.current || fallback.slug,
            icon: doc.icon || fallback.icon,
            title: doc.title || fallback.title,
            short: doc.short || fallback.short,
            image: urlFor(doc.image, 1600) || fallback.image,
            alt: doc.alt || fallback.alt,
            intro: doc.intro || fallback.intro,
            points: doc.points?.length ? doc.points : fallback.points,
            metaTitle: doc.metaTitle || fallback.metaTitle,
            metaDescription: doc.metaDescription || fallback.metaDescription,
          }
        })
      : services

  const mergedProjects =
    data.projects?.length
      ? data.projects.map((doc, i) => {
          const fallback = projects[i] || {}
          const gallery = doc.gallery?.length
            ? doc.gallery.map((img) => urlFor(img, 1400)).filter(Boolean)
            : fallback.gallery || []
          return {
            slug: doc.slug?.current || fallback.slug,
            tag: doc.tag || fallback.tag,
            title: doc.title || fallback.title,
            image: urlFor(doc.image, 1600) || fallback.image,
            alt: doc.alt || fallback.alt || doc.title,
            intro: doc.intro || fallback.intro || '',
            gallery,
          }
        })
      : projects

  const mergedFaq =
    data.faq?.length ? data.faq.map((doc) => ({ q: doc.question, a: doc.answer })) : faq

  const mergedPerson = {
    ...person,
    eyebrow: s.personEyebrow || person.eyebrow,
    name: s.personName || person.name,
    role: s.personRole || person.role,
    text: s.personText || person.text,
    image: urlFor(s.personImage, 900) || person.image,
    alt: s.personAlt || person.alt,
  }

  const mergedReviews =
    data.reviews?.length
      ? data.reviews.map((doc) => ({
          name: doc.name,
          place: doc.place,
          rating: doc.rating || 5,
          text: doc.text,
        }))
      : reviews

  return {
    company: mergedCompany,
    hero: mergedHero,
    contact: mergedContact,
    seo: mergedSeo,
    services: mergedServices,
    projects: mergedProjects,
    faq: mergedFaq,
    person: mergedPerson,
    reviews: mergedReviews,
  }
}
