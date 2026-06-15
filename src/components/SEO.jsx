import { useEffect } from 'react'

export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) document.title = title

    const setMeta = (type, key, value) => {
      if (!value) return
      let element = document.querySelector(`meta[${type}="${key}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(type, key)
        document.head.appendChild(element)
      }
      element.setAttribute('content', value)
    }

    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
    }
    if (title) {
      setMeta('property', 'og:title', title)
    }
  }, [title, description])

  return null
}
