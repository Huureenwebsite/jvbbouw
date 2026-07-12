import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import App from './App.jsx'
import ServicePage from './pages/ServicePage.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Terms from './pages/Terms.jsx'
import './index.css'

// Bij route-wissel: naar boven, of naar het #anker als dat er is
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollManager />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/diensten/:slug" element={<ServicePage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  </BrowserRouter>
)
