import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { BackToHomeBar } from './components/BackToHome'
import WhatsAppButton from './components/WhatsAppButton'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-body text-databrains-slate">
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <BackToHomeBar />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
