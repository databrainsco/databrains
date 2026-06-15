import React from 'react'
import {
  faBullseye,
  faPenRuler,
  faWandMagicSparkles,
  faRocket,
  faBottleDroplet,
  faCalendarDays,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/SEO'
import {
  SolutionHero,
  FeatureIllustrationGrid,
  ProcessFlowRow,
  UseCasesGrid,
  SimpleCenterCTA,
} from '../components/SolutionPageParts'
import heroImage from '../assets/images/pages/landing/hero.jpg'
import feature1 from '../assets/images/pages/landing/feature-1.jpg'
import feature2 from '../assets/images/pages/landing/feature-2.jpg'
import feature3 from '../assets/images/pages/landing/feature-3.jpg'
import feature4 from '../assets/images/pages/landing/feature-4.jpg'

const features = [
  {
    title: 'Diseño enfocado en conversiones',
    description: 'Cada elemento está pensado para guiar al usuario hacia la acción deseada.',
    image: feature1,
  },
  {
    title: 'Velocidad y optimización',
    description: 'Nuestras páginas cargan rápido y funcionan en cualquier dispositivo.',
    image: feature2,
  },
  {
    title: 'Integración con herramientas clave',
    description: 'Conectamos tu landing page con formularios, CRMs y analíticas.',
    image: feature3,
  },
  {
    title: 'Personalización total',
    description: 'Diseñamos según tus necesidades específicas, desde promociones hasta captación de leads.',
    image: feature4,
  },
]

const processSteps = [
  { title: 'Analizamos tu objetivo', icon: faBullseye },
  { title: 'Diseñamos la experiencia', icon: faPenRuler },
  { title: 'Optimizamos la interacción', icon: faWandMagicSparkles },
  { title: 'Lanzamos y medimos resultados', icon: faRocket },
]

const useCases = [
  { title: 'Promoción de productos o servicios específicos.', icon: faBottleDroplet },
  { title: 'Inscripciones a webinars o eventos.', icon: faCalendarDays },
  { title: 'Campañas publicitarias dirigidas.', icon: faBullhorn },
  { title: 'Lanzamiento de nuevos proyectos o startups.', icon: faRocket },
]

export default function LandingPage() {
  return (
    <>
      <SEO
        title="Landing Pages | DataBrains"
        description="Landing pages estratégicas que convierten visitantes en leads y clientes."
      />
      <main className="overflow-x-hidden bg-white">
        <SolutionHero
          title="Landing Pages"
          description="Diseñamos landing pages estratégicas que convierten visitantes en leads y clientes. Enfocadas en resultados, rápidas y optimizadas para impulsar tu crecimiento."
          heroImage={heroImage}
          heroAlt="Escritorio con laptop mostrando landing page"
          ctaLabel="Conoce más"
          ctaVariant="teal"
        />
        <FeatureIllustrationGrid items={features} />
        <ProcessFlowRow steps={processSteps} />
        <UseCasesGrid title="Casos de uso" items={useCases} />
        <SimpleCenterCTA
          title="Impulsa tus objetivos con una Landing Page hoy."
          ctaLabel="Agenda una consulta gratuita"
        />
      </main>
    </>
  )
}
