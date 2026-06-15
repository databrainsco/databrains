import React from 'react'

export default function DataBrainsLogo({ className = '', iconClassName = 'h-11 w-11', textClassName = 'text-3xl' }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {/* TODO: Reemplazar por logo oficial de DataBrains cuando esté disponible. */}
      <svg className={iconClassName} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M23.2 9.3C16.2 9.8 10.7 15.7 10.7 22.8c0 1.1.1 2.1.4 3.1A10.5 10.5 0 0 0 13.6 46c1.5 0 2.9-.3 4.2-.9a9.8 9.8 0 0 0 17.9-1.3"
          stroke="#23949C"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M30.6 8.9c6.8.8 12.1 6.6 12.1 13.7 0 .7-.1 1.4-.2 2.1a10.4 10.4 0 0 1-1.9 20.6c-1.9 0-3.7-.5-5.2-1.4"
          stroke="#FF4F5A"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M18.2 25.6c0-5.1 4.1-9.2 9.2-9.2"
          stroke="#66CAD2"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      <span className={`font-heading font-bold tracking-normal ${textClassName}`}>
        <span className="text-databrains-slate">DAta</span>
        <span className="text-databrains-teal">Brains</span>
      </span>
    </span>
  )
}
