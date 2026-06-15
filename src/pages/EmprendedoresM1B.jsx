import React from 'react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import { entrepreneurServices } from '../data/services'

export default function EmprendedoresM1B() {
  return (
    <>
      <SEO title="Emprendedores M1B | DataBrains" description="Productos y servicios pensados para emprendedores." />
      <main>
        <Hero
          eyebrow="Emprendedores M1B"
          title="Soluciones para emprendedores"
          description="Sitios web, e-commerce, branding, landing pages y consultoría para construir una presencia digital clara y comercial."
          primaryCta={{ label: 'Contactar', to: '/contacto' }}
          secondaryCta={{ label: 'Ver servicios', to: '/emprendedores-m1b/sitios-web-personalizados' }}
          imagePlaceholder={{
            label: 'Imagen placeholder: emprendedores',
            note: 'TODO: Reemplazar por imagen real de emprendedores, marca digital o experiencia de compra',
          }}
        />
        <section className="px-6 py-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase text-databrains-teal">Productos digitales</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-databrains-slate">Base para vender y comunicar mejor</h2>
              <p className="mt-4 leading-7 text-databrains-slate/75">
                Servicios modulares para desarrollar cada página con el contenido y composición del mockup final.
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
