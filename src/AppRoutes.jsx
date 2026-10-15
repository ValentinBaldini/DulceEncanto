import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Seo } from './components/Seo'
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'

function RouteEffects() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
      return
    }

    window.scrollTo({ top: 0, left: 0 })
  }, [pathname, hash])

  return null
}

export function AppRoutes() {
  return (
    <>
      <Seo />
      <RouteEffects />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
