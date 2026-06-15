import React from 'react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'

export default function TiendaOnline() {
  return (
    <>
      <SEO title="Tienda Online | DataBrains" description="Soluciones de e-commerce para vender en línea con confianza." />
      <main>
        <Hero
          eyebrow="Emprendedores M1B"
          title="Tienda online"
          description="Página base lista para maquetarse según el mockup de Tienda Online."
          primaryCta={{ label: 'Contactar', to: '/contacto' }}
          imagePlaceholder={{ label: 'Imagen placeholder: tienda online' }}
        />
      </main>
    </>
  )
}
