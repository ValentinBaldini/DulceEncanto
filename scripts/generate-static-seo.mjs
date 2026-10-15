import { readFile, writeFile } from 'node:fs/promises'
import { createServer } from 'vite'
import { getCanonicalUrl, getSeoForPath, SITE_URL } from '../seo.config.js'

const outputDirectory = new URL('../dist/', import.meta.url)
const indexPath = new URL('index.html', outputDirectory)
const productPath = new URL('productos.html', outputDirectory)

function replaceRequired(html, pattern, replacement, label) {
  if (!pattern.test(html)) {
    throw new Error(`No se encontró ${label} en dist/index.html`)
  }

  return html.replace(pattern, replacement)
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function createRouteHtml(baseHtml, pathname) {
  const seo = getSeoForPath(pathname)
  const canonicalUrl = getCanonicalUrl(pathname)
  const imageUrl = new URL(seo.image, SITE_URL).href
  const title = escapeHtml(seo.title)
  const description = escapeHtml(seo.description)

  const replacements = [
    [/<title>[^<]*<\/title>/, `<title>${title}</title>`, 'el título'],
    [/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`, 'la descripción'],
    [/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`, 'la URL canónica'],
    [/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`, 'og:title'],
    [/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`, 'og:description'],
    [/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`, 'og:url'],
    [/<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${imageUrl}" />`, 'og:image'],
    [/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`, 'twitter:title'],
    [/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`, 'twitter:description'],
    [/<meta name="twitter:image" content="[^"]*" \/>/, `<meta name="twitter:image" content="${imageUrl}" />`, 'twitter:image'],
  ]

  return replacements.reduce(
    (html, [pattern, replacement, label]) => replaceRequired(html, pattern, replacement, label),
    baseHtml,
  )
}

const baseHtml = await readFile(indexPath, 'utf8')
const vite = await createServer({ appType: 'custom', server: { middlewareMode: true } })

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')
  const createPrerenderedHtml = (pathname) => {
    const routeHtml = createRouteHtml(baseHtml, pathname)
    return routeHtml.replace('<div id="root"></div>', `<div id="root">${render(pathname)}</div>`)
  }

  await writeFile(indexPath, createPrerenderedHtml('/'))
  await writeFile(productPath, createPrerenderedHtml('/productos'))
} finally {
  await vite.close()
}

console.log('Páginas estáticas generadas: dist/index.html y dist/productos.html')
