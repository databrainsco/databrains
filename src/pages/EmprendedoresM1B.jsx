import React from 'react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import { entrepreneurServices } from '../data/services'
import heroImage from '../assets/images/pages/emprendedores/hero.jpg'

export default function EmprendedoresM1B() {
  return (
    <>
      <SEO
        title="Emprendedores M1B | DataBrains"
        description="Lleva tu primer negocio al siguiente nivel con sitios web, tienda online, branding y consultoría pensados para ti."
      />
      <main>
        <Hero
          eyebrow="Emprendedores M1B"
          title="Soluciones para tu negocio"
          description="Te ayudamos a construir tu presencia digital con sitios web, e-commerce, branding, landing pages y consultoría claras, amigables y listas para vender."
          primaryCta={{ label: 'Hablemos', to: '/contacto' }}
          secondaryCta={{ label: 'Ver mis opciones', to: '/emprendedores-m1b/sitios-web-personalizados' }}
          image={heroImage}
          imageAlt="Emprendedora gestionando el negocio en una tablet mientras su socio atiende la cafetería"
        />
        <section className="px-6 py-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="font-heading text-base font-extrabold uppercase tracking-wide text-databrains-teal md:text-lg">
                Productos digitales
              </p>
              <h2 className="mt-3 font-heading text-xl font-extrabold text-databrains-slate md:text-2xl">
                Tu base para vender y comunicar mejor
              </h2>
              <p className="mt-4 leading-7 text-databrains-slate/75">
                Elige lo que tu negocio necesita hoy y ve creciendo a tu ritmo. Todo pensado para que vendas más y
                comuniques con claridad.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {entrepreneurServices.map((service) => (
                <ServiceCard key={service.to} {...service} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
