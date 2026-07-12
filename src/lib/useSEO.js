import { useEffect } from 'react'
import { company } from '../content'

// Zet per pagina de <title>, meta-description, canonical en OG-tags.
// Lichtgewicht alternatief voor react-helmet — geen extra dependency.
function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function useSEO({ title, description, path = '/' }) {
  useEffect(() => {
    if (title) document.title = title
    if (description) {
      upsertMeta('name', 'description', description)
      upsertMeta('property', 'og:description', description)
    }
    if (title) upsertMeta('property', 'og:title', title)
    upsertLink('canonical', `${company.url}${path}`)
    upsertMeta('property', 'og:url', `${company.url}${path}`)
  }, [title, description, path])
}
