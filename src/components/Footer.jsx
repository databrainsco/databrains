import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import DataBrainsLogo from './DataBrainsLogo'
import NewsletterForm from './NewsletterForm'

export default function Footer() {
  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/data-brains-87a008428/', icon: faLinkedin },
    { label: 'X', href: 'https://x.com/databrainsagent', icon: faXTwitter },
  ]

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
        <div>© 2025 DataBrains. Todos los derechos reservados.</div>
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
              className="text-3xl text-databrains-teal transition duration-300 hover:-translate-y-0.5 hover:text-databrains-coral"
            >
              <FontAwesomeIcon icon={item.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
