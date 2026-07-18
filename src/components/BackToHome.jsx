import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export function BackToHomeBar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/' || pathname === ''

  if (isHome) return null

  return (
    <div className="border-t border-gray-100 bg-white px-5 py-5 min-[860px]:px-10 lg:px-8">
      <div className="mx-auto flex max-w-[1320px] justify-center sm:justify-start">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-md border border-databrains-slate/15 bg-white px-5 py-3 text-sm font-semibold text-databrains-slate shadow-sm transition duration-300 hover:border-databrains-teal/40 hover:text-databrains-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-teal focus-visible:ring-offset-2"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
