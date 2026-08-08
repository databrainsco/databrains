import React from 'react'
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.99.57 3.85 1.56 5.44L2 22l4.9-1.61a9.9 9.9 0 0 0 5.14 1.43h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.77 13.96c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.16-4.93-4.35-.14-.19-1.17-1.55-1.17-2.96 0-1.4.74-2.09 1-2.37.26-.28.57-.35.76-.35h.55c.17 0 .41-.07.64.49.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.17-.3.37-.42.5-.14.14-.29.29-.12.56.17.28.75 1.23 1.61 1.99 1.11.98 2.04 1.28 2.33 1.42.28.14.45.12.61-.07.17-.19.7-.81.89-1.09.19-.28.38-.23.64-.14.26.1 1.66.78 1.95.92.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
      </svg>
    </a>
  )
}
