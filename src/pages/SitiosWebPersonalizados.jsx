import React from 'react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'

export default function SitiosWebPersonalizados() {
  return (
    <>
      <SEO title="Sitios Web personalizados | DataBrains" description="Diseño y desarrollo de sitios webs personalizados para tu marca." />
      <main>
        <Hero
          eyebrow="Emprendedores M1B"
          title="Sitios Web personalizados"
          description="Página base lista para maquetarse según el mockup de Sitios Web personalizados."
          primaryCta={{ label: 'Contactar', to: '/contacto' }}
          imagePlaceholder={{ label: 'Imagen placeholder: sitios web personalizados' }}
        />
      </main>
    </>
  )
}
