import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getCanonicalUrl, getSeoForPath, SITE_URL } from '../../seo.config.js'

function updateMeta(selector, content) {
  document.head.querySelector(selector)?.setAttribute('content', content)
}

export function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = getSeoForPath(pathname)
    const canonicalUrl = getCanonicalUrl(pathname)
    const imageUrl = new URL(seo.image, SITE_URL).href

    document.title = seo.title
    document.head.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
    updateMeta('meta[name="description"]', seo.description)
    updateMeta('meta[property="og:title"]', seo.title)
    updateMeta('meta[property="og:description"]', seo.description)
    updateMeta('meta[property="og:url"]', canonicalUrl)
    updateMeta('meta[property="og:image"]', imageUrl)
    updateMeta('meta[name="twitter:title"]', seo.title)
    updateMeta('meta[name="twitter:description"]', seo.description)
    updateMeta('meta[name="twitter:image"]', imageUrl)
  }, [pathname])

  return null
}
