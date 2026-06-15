import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ImagePlaceholder from './ImagePlaceholder'

export default function ServiceCard({ icon, title, description, to, badge, variant = 'light', imagePlaceholder }) {
  const isDark = variant === 'dark'

  const inner = (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isDark
          ? 'border-white/15 bg-databrains-slate text-white'
          : 'border-databrains-aqua/20 bg-white text-databrains-slate'
      }`}
    >
      {imagePlaceholder && (
        <ImagePlaceholder
          {...imagePlaceholder}
          className={`mb-5 ${imagePlaceholder.className || ''}`}
          height={imagePlaceholder.height || '180px'}
        />
      )}
      <div className="flex flex-1 flex-col">
        <div className="flex items-start gap-4">
          {icon && (
            <div
              className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl text-xl ${
                isDark ? 'bg-white/10 text-databrains-paleCyan' : 'bg-databrains-paleCyan text-databrains-teal'
              }`}
            >
              <FontAwesomeIcon icon={icon} />
            </div>
          )}
          <div>
            {badge && (
              <div className={`text-xs font-bold uppercase tracking-wide ${isDark ? 'text-databrains-yellow' : 'text-databrains-teal'}`}>
                {badge}
              </div>
            )}
            <h3 className="font-heading text-lg font-bold">{title}</h3>
          </div>
        </div>
        <p className={`mt-4 flex-1 text-sm leading-6 ${isDark ? 'text-white/75' : 'text-databrains-slate/75'}`}>{description}</p>
        {to && (
          <div className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${isDark ? 'text-databrains-paleCyan' : 'text-databrains-teal'}`}>
            Ver servicio
            <FontAwesomeIcon icon={faArrowRight} className="text-xs transition duration-300 group-hover:translate-x-1" />
          </div>
        )}
      </div>
    </article>
  )

  if (to) return <Link to={to} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral focus-visible:ring-offset-2">{inner}</Link>
  return inner
}
