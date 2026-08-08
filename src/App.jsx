import React, { Suspense, lazy, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { BackToHomeBar } from './components/BackToHome'
import AppRoutes from './routes/AppRoutes'

const Footer = lazy(() => import('./components/Footer'))
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'))

function DeferredChrome() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let idleId
    let timeoutId

    const enable = () => setReady(true)

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(enable, { timeout: 1200 })
    } else {
      timeoutId = window.setTimeout(enable, 1)
    }

    return () => {
      if (idleId && 'cancelIdleCallback' in window) window.cancelIdleCallback(idleId)
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [])

  if (!ready) return null

  return (
    <Suspense fallback={null}>
      <Footer />
      <WhatsAppButton />
    </Suspense>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-body text-databrains-slate">
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <BackToHomeBar />
      <DeferredChrome />
    </div>
  )
}
