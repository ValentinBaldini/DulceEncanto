import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'

function RouteEffects() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    document.title = pathname === '/productos'
      ? 'Productos | Dulce Encanto'
      : 'Dulce Encanto | Brigadeiros, chipá y tortas'

    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
      return
    }

    window.scrollTo({ top: 0, left: 0 })
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
