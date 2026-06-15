import React from 'react'
import Hero from './Hero'
import SEO from './SEO'

export default function ComingSoon({ title = 'Próximamente', description, badge, seoTitle, seoDescription }) {
  const pageDescription = description || 'Estamos preparando esta página. Si necesitas información ahora, contáctanos.'

  return (
    <main>
      <SEO title={seoTitle || `${title} | DataBrains`} description={seoDescription || pageDescription} />
      <Hero
        eyebrow={badge}
        title={title}
        description={pageDescription}
        primaryCta={{ label: 'Contacto', to: '/contacto' }}
        imagePlaceholder={{
          label: `Imagen placeholder: ${title}`,
          note: 'TODO: Reemplazar por imagen real cuando exista el mockup o asset definitivo',
        }}
      />
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-databrains-slate/80">Esta sección está lista como placeholder y se maquetará según el mockup en una iteración posterior.</p>
        </div>
      </section>
    </main>
  )
}
