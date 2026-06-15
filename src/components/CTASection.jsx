import React from 'react'
import ImagePlaceholder from './ImagePlaceholder'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBolt, faChartLine } from '@fortawesome/free-solid-svg-icons'

export default function CTASection({ eyebrow, title, description, buttonLabel, buttonTo, imagePlaceholder }) {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 overflow-hidden rounded-3xl bg-gradient-to-r from-databrains-teal to-databrains-aqua p-8 text-white shadow-xl lg:flex-row lg:items-center lg:p-10">
        <div className="relative flex-1">
          <div className="absolute -left-4 -top-5 text-white/15" aria-hidden="true">
            <FontAwesomeIcon icon={faChartLine} className="text-6xl" />
          </div>
          {eyebrow && <div className="relative text-sm font-bold uppercase text-databrains-paleCyan">{eyebrow}</div>}
          <h2 className="relative mt-3 max-w-2xl font-heading text-3xl font-extrabold lg:text-4xl">{title}</h2>
          <p className="relative mt-4 max-w-2xl leading-7 text-white/85">{description}</p>
          <div className="mt-5">
            <Link
              to={buttonTo || '/contacto'}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-databrains-coral px-6 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-databrains-teal"
            >
              <FontAwesomeIcon icon={faBolt} />
              {buttonLabel}
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </Link>
            {/* TODO: Reemplazar por ruta final si cambia el destino de conversión. */}
          </div>
        </div>
        <div className="w-full lg:w-[34%]">
          {imagePlaceholder ? (
            <ImagePlaceholder {...imagePlaceholder} height={imagePlaceholder.height || '240px'} />
          ) : (
            <ImagePlaceholder label="Ilustración CTA" note="TODO: Reemplazar por imagen real de apoyo" height="240px" />
          )}
        </div>
      </div>
    </section>
  )
}
