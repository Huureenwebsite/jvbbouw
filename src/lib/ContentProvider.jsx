import { createContext, useContext, useEffect, useState } from 'react'
import * as staticContent from '../content'
import { fetchCmsContent } from './sanity'

// Statische startwaarde: de app rendert meteen met de content uit content.js.
// Zodra Sanity geladen is, worden de beheerde onderdelen bijgewerkt.
const initial = {
  company: staticContent.company,
  hero: staticContent.hero,
  contact: staticContent.contact,
  seo: staticContent.seo,
  services: staticContent.services,
  projects: staticContent.projects,
  faq: staticContent.faq,
  // niet-beheerde onderdelen (blijven altijd uit code):
  nav: staticContent.nav,
  pillars: staticContent.pillars,
  protocol: staticContent.protocol,
  trust: staticContent.trust,
  areasServed: staticContent.areasServed,
  contactForm: staticContent.contactForm,
}

const ContentContext = createContext(initial)

export function ContentProvider({ children }) {
  const [content, setContent] = useState(initial)

  useEffect(() => {
    let active = true
    fetchCmsContent()
      .then((cms) => { if (active) setContent((prev) => ({ ...prev, ...cms })) })
      .catch((err) => { console.warn('Sanity-content niet geladen, fallback in gebruik.', err) })
    return () => { active = false }
  }, [])

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>
}

export function useContent() {
  return useContext(ContentContext)
}
