import React from 'react'
import ImagePlaceholder from './ImagePlaceholder'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Hero({ eyebrow, title, description, primaryCta, secondaryCta, imagePlaceholder, decorative, children }) {
  return (
    <section className="relative overflow-hidden px-6 py-14 lg:px-12 lg:py-20">
      <div className="absolute left-0 top-10 h-56 w-56 rounded-full bg-databrains-paleCyan/60 blur-3xl" aria-hidden="true" />
      <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-databrains-aqua/10 blur-3xl" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          {eyebrow && (
            <div className="inline-flex rounded-full border border-databrains-aqua/40 bg-white/80 px-4 py-2 text-sm font-bold text-databrains-teal shadow-sm">
              {eyebrow}
            </div>
          )}
          <h1 className="mt-5 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-databrains-slate md:text-5xl lg:text-6xl">{title}</h1>
          {description && <p className="mt-5 max-w-2xl text-base leading-8 text-databrains-slate/80 lg:text-lg">{description}</p>}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {primaryCta && (
              <Link
                to={primaryCta.to || '/contacto'}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-databrains-coral px-6 py-3 font-body text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral focus-visible:ring-offset-2"
              >
                {primaryCta.label}
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.to || '/contacto'}
                className="inline-flex items-center justify-center rounded-full border border-databrains-aqua/60 bg-white px-6 py-3 font-body text-sm font-bold text-databrains-slate transition duration-300 hover:-translate-y-1 hover:border-databrains-teal hover:text-databrains-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral focus-visible:ring-offset-2"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>

          {children}
        </div>
        <div className="relative">
          {decorative}
          {imagePlaceholder ? (
            <ImagePlaceholder height="360px" {...imagePlaceholder} />
          ) : (
            <ImagePlaceholder
              label="Imagen placeholder"
              note="TODO: Reemplazar por imagen real del mockup o asset final"
              height="360px"
            />
          )}
        </div>
      </div>
    </section>
  )
}
