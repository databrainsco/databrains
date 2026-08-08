import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  ORGANIZATION,
  PUBLIC_ROUTES,
  SITE_NAME,
  SITE_URL,
} from '../data/site'

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  if (!href) return
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!data) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/**
 * Per-route SEO: title, description, canonical, Open Graph, Twitter, JSON-LD.
 * @param {{ title?: string, description?: string, image?: string, type?: string, noindex?: boolean, keywords?: string, jsonLd?: object|object[] }} props
 */
export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noindex = false,
  keywords = 'DataBrains, software a la medida, nube, DevOps, Data Science, inteligencia artificial, blockchain, sitios web, e-commerce, branding, consultoría tecnológica, México',
  jsonLd,
}) {
  const { pathname } = useLocation()
  const pageTitle = title?.includes(SITE_NAME) ? title : title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const canonicalPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '') || '/'
  const canonical = `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`
  const ogImage = image?.startsWith('http') ? image : `${SITE_URL}${image}`

  useEffect(() => {
    document.title = pageTitle
    document.documentElement.lang = 'es'

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large')
    upsertMeta('name', 'googlebot', noindex ? 'noindex, nofollow' : 'index, follow')
    upsertMeta('name', 'author', SITE_NAME)
    upsertMeta('name', 'theme-color', '#23949C')
    upsertMeta('name', 'keywords', keywords)

    upsertLink('canonical', canonical)

    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:locale', 'es_MX')
    upsertMeta('property', 'og:title', pageTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:image', ogImage)
    upsertMeta('property', 'og:image:alt', pageTitle)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', pageTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', ogImage)
    upsertMeta('name', 'twitter:site', '@databrainsagent')

    const routeMeta = PUBLIC_ROUTES.find((route) => route.path === canonicalPath)
    const autoService =
      routeMeta && Number(routeMeta.priority) >= 0.8 && routeMeta.path !== '/'
        ? {
            '@type': 'Service',
            name: routeMeta.title,
            description: routeMeta.description,
            url: canonical,
            provider: { '@id': `${SITE_URL}/#organization` },
            areaServed: { '@type': 'Country', name: 'Mexico' },
            availableLanguage: 'es',
          }
        : null

    const graph = {
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION,
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: SITE_URL,
          name: SITE_NAME,
          description: DEFAULT_DESCRIPTION,
          inLanguage: 'es-MX',
          publisher: { '@id': `${SITE_URL}/#organization` },
        },
        {
          '@type': 'WebPage',
          '@id': `${canonical}#webpage`,
          url: canonical,
          name: pageTitle,
          description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${SITE_URL}/#organization` },
          inLanguage: 'es-MX',
        },
        ...(autoService ? [autoService] : []),
        ...(Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []),
      ],
    }

    upsertJsonLd('databrains-jsonld', graph)

    return () => {
      // Keep tags for next route; they are overwritten on the next mount.
    }
  }, [pageTitle, description, canonical, ogImage, type, noindex, keywords, jsonLd])

  return null
}
