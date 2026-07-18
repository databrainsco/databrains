import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { getWhatsAppUrl } from '../data/contact'

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#25D366]/30 bg-white text-[#25D366] shadow-[0_8px_24px_rgba(49,69,78,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-[#25D366]/50 hover:shadow-[0_12px_28px_rgba(37,211,102,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-[1.55rem]" />
    </a>
  )
}
