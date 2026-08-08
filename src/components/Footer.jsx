import React from 'react'
import { Link } from 'react-router-dom'
import DataBrainsLogo from './DataBrainsLogo'
import NewsletterForm from './NewsletterForm'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/data-brains-87a008428/',
    path: 'M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.84-2.1 3.8-2.1 4.06 0 4.8 2.67 4.8 6.15V24h-4v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V24h-4V8.5z',
  },
  {
    label: 'X',
    href: 'https://x.com/databrainsagent',
    path: 'M18.244 2H21.5l-7.5 8.57L22.5 22h-6.59l-5.16-6.74L5.1 22H1.84l8.03-9.17L1.5 2h6.75l4.66 6.18L18.244 2Zm-1.16 18h1.82L7.08 3.92H5.13L17.084 20Z',
  },
]

export default function Footer() {
  return (
    <footer className="border-t-2 border-databrains-teal/80 bg-white">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1.65fr_1.05fr] lg:px-8">
        <div className="space-y-4">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral focus-visible:ring-offset-2">
            <DataBrainsLogo iconClassName="h-11 w-11" textClassName="text-[29px]" />
          </Link>
        </div>

        <div>
          <p className="max-w-[210px] text-sm leading-6 text-databrains-slate/75">
            Transformamos ideas en soluciones tecnológicas que impulsan resultados y crean valor sostenible.
          </p>
        </div>

        <div>
          <p className="max-w-[230px] text-sm leading-6 text-databrains-slate/75">
            Acompañamos a empresas y emprendedores en su camino hacia la innovación y la transformación digital.
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-heading text-sm font-semibold text-databrains-slate">Suscríbete al blog</h2>
          <NewsletterForm formKey="newsletter" />
        </div>
      </div>

      <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-5 pb-7 text-xs text-databrains-slate/70 md:flex-row md:items-center lg:px-8">
        <div>© 2026 DataBrains. Todos los derechos reservados.</div>
        <Link to="/blog-recursos/aviso-de-privacidad" className="transition duration-300 hover:text-databrains-teal">Política de privacidad</Link>
        <Link to="/blog-recursos/terminos-y-condiciones" className="transition duration-300 hover:text-databrains-teal">Términos y condiciones.</Link>
        <div className="flex gap-8 md:ml-auto">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              aria-label={`${item.label} de DataBrains`}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-databrains-teal transition duration-300 hover:-translate-y-0.5 hover:text-databrains-coral"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={item.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
