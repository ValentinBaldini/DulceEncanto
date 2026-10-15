export const SITE_URL = 'https://dulce-encanto-by-jose.vercel.app'

export const SEO_BY_PATH = {
  '/': {
    title: 'Brigadeiros, chipá y tortas en Mendoza | Dulce Encanto',
    description:
      'Brigadeiros brasileños, chipá congelado y tortas artesanales por encargo en Mendoza. Conocé Dulce Encanto y consultá por WhatsApp.',
    image: '/images/brigadeiros.jpg',
  },
  '/productos': {
    title: 'Catálogo de brigadeiros, chipá y tortas | Dulce Encanto',
    description:
      'Explorá el catálogo de Dulce Encanto: cajas de brigadeiros premium y tradicionales, chipá congelado y tortas artesanales en Mendoza.',
    image: '/images/Brigadeiros-premium.jpeg',
  },
}

export function getSeoForPath(pathname) {
  return SEO_BY_PATH[pathname] ?? SEO_BY_PATH['/']
}

export function getCanonicalUrl(pathname) {
  return `${SITE_URL}${pathname === '/' ? '/' : pathname}`
}
