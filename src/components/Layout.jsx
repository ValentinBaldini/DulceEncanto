import { useEffect, useRef, useState } from 'react'
import { Camera, Menu, MessageCircle, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { INSTAGRAM_URL, WHATSAPP_URL } from '../config'

export function BrandMark({ compact = false, onClick }) {
  return (
    <Link className="inline-flex items-center gap-3" to="/" aria-label="Dulce Encanto, inicio" onClick={onClick}>
      <img
        className={`${compact ? 'size-10' : 'size-12'} rounded-full border border-lilac-200 object-cover`}
        src="/images/logo.jpg"
        alt="Logo de Dulce Encanto"
      />
      <span className="leading-none">
        <strong className="block font-serif text-lg font-normal tracking-tight text-cocoa-900">
          Dulce Encanto
        </strong>
        <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-lilac-600">
          By Jose
        </span>
      </span>
    </Link>
  )
}

export function SiteHeader({ overlay = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const { pathname, hash } = useLocation()

  const navLinkClass = ({ isActive }) =>
    `transition hover:text-lilac-700 ${isActive ? 'font-bold text-lilac-700' : 'text-cocoa-700'}`

  const mobileLinkClass = (isActive) =>
    `flex min-h-12 items-center justify-between rounded-xl px-4 py-3 font-semibold transition ${isActive ? 'bg-lilac-100 text-lilac-700' : 'text-cocoa-800 hover:bg-lilac-50 hover:text-lilac-700'}`

  const closeMobileMenu = () => setMobileMenuOpen(false)

  useEffect(() => {
    if (!mobileMenuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [mobileMenuOpen])

  return (
    <header className={overlay ? 'absolute inset-x-0 top-0 z-30' : 'relative z-30 bg-lilac-50'}>
      <nav className="relative z-40 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12" aria-label="Navegación principal">
        <BrandMark compact onClick={closeMobileMenu} />
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <NavLink className={navLinkClass} end to="/">Inicio</NavLink>
          <NavLink className={navLinkClass} to="/productos">Productos</NavLink>
          <a className="text-cocoa-700 transition hover:text-lilac-700" href="/#nosotros">Nosotros</a>
          <a className="text-cocoa-700 transition hover:text-lilac-700" href="/#pedidos">Cómo pedir</a>
        </div>
        <div className="flex items-center gap-2">
          <a
            className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-cocoa-900 px-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-lilac-700 focus:outline-none focus:ring-2 focus:ring-lilac-700 focus:ring-offset-2 min-[390px]:px-4"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Hacé tu pedido</span>
            <span className="hidden min-[390px]:inline sm:hidden">Pedir</span>
            <span className="sr-only min-[390px]:hidden">Hacé tu pedido</span>
          </a>
          <button
            ref={menuButtonRef}
            className="grid size-11 place-items-center rounded-full border border-cocoa-700 bg-white text-cocoa-900 transition hover:bg-lilac-100 focus:outline-none focus:ring-2 focus:ring-lilac-700 focus:ring-offset-2 md:hidden"
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          >
            {mobileMenuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <>
          <button
            className="fixed inset-x-0 bottom-0 top-20 z-20 cursor-default bg-cocoa-950/20 backdrop-blur-[1px] md:hidden"
            type="button"
            tabIndex="-1"
            aria-hidden="true"
            onClick={closeMobileMenu}
          />
          <nav
            id="mobile-navigation"
            className="absolute inset-x-5 top-full z-30 rounded-3xl border border-lilac-200 bg-white p-3 shadow-2xl shadow-cocoa-950/15 md:hidden"
            aria-label="Navegación móvil"
          >
            <NavLink className={({ isActive }) => mobileLinkClass(isActive)} end to="/" onClick={closeMobileMenu}>
              Inicio
              <span aria-hidden="true">01</span>
            </NavLink>
            <NavLink className={({ isActive }) => mobileLinkClass(isActive)} to="/productos" onClick={closeMobileMenu}>
              Productos
              <span aria-hidden="true">02</span>
            </NavLink>
            <a className={mobileLinkClass(pathname === '/' && hash === '#promo-dia-de-las-madres')} href="/#promo-dia-de-las-madres" onClick={closeMobileMenu}>
              Promoción
              <span aria-hidden="true">03</span>
            </a>
            <a className={mobileLinkClass(pathname === '/' && hash === '#nosotros')} href="/#nosotros" onClick={closeMobileMenu}>
              Nosotros
              <span aria-hidden="true">04</span>
            </a>
            <a className={mobileLinkClass(pathname === '/' && hash === '#pedidos')} href="/#pedidos" onClick={closeMobileMenu}>
              Cómo pedir
              <span aria-hidden="true">05</span>
            </a>
          </nav>
        </>
      )}
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-lilac-100 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <BrandMark compact />
        <p className="text-sm text-cocoa-700">Brigadeiros · Chipá congelado · Tortas</p>
        <a
          className="inline-flex items-center gap-2 text-sm font-semibold text-cocoa-700 transition hover:text-lilac-700"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
        >
          <Camera className="size-5" aria-hidden="true" />
          @dulceencantobyjose
        </a>
      </div>
    </footer>
  )
}
