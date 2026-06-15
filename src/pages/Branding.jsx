import React from 'react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'

export default function Branding() {
  return (
    <>
      <SEO title="Branding | DataBrains" description="Construimos marcas con identidad y propósito para emprendedores." />
      <main>
        <Hero
          eyebrow="Emprendedores M1B"
          title="Branding"
          description="Página base lista para maquetarse según el mockup de Branding."
          primaryCta={{ label: 'Contactar', to: '/contacto' }}
          imagePlaceholder={{ label: 'Imagen placeholder: branding' }}
        />
      </main>
    </>
  )
}
