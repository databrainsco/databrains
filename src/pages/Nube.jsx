import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartColumn,
  faCloud,
  faCubes,
  faDatabase,
  faDollarSign,
  faGaugeHigh,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/SEO'
import {
  SolutionHero,
  ServicesCarouselSection,
  BusinessIntelligencePanel,
  BenefitsGrid,
  FinalCTABlock,
} from '../components/SolutionPageParts'
import heroImage from '../assets/images/pages/nube/hero.jpg'
import ctaImage from '../assets/images/pages/nube/cta.jpg'
import carousel1 from '../assets/images/pages/nube/carousel-1.jpg'
import carousel2 from '../assets/images/pages/nube/carousel-2.jpg'
import carousel3 from '../assets/images/pages/nube/carousel-3.jpg'
import carousel4 from '../assets/images/pages/nube/carousel-4.jpg'
import carousel5 from '../assets/images/pages/nube/carousel-5.jpg'

const cloudSolutions = [
  {
    title: 'Estrategia Cloud',
    description: 'Diseñamos la mejor estrategia cloud para tu empresa, alineada a tus objetivos y presupuesto.',
    icon: faCloud,
    image: carousel1,
  },
  {
    title: 'Migración a la Nube',
    description: 'Migramos tus aplicaciones y datos a la nube de forma segura, sin interrumpir tu operación.',
    icon: faDatabase,
    image: carousel2,
  },
  {
    title: 'Seguridad en la Nube',
    description: 'Protegemos tus activos digitales con las mejores prácticas y protocolos de seguridad.',
    icon: faShieldHalved,
    image: carousel3,
  },
  {
    title: 'Optimización de Costos',
    description: 'Analizamos y optimizamos tus gastos en cloud para maximizar el ROI.',
    icon: faChartColumn,
    image: carousel4,
  },
  {
    title: 'Gestión y Operación',
    description: 'Administramos tu infraestructura para que te enfoques en tu negocio.',
    icon: faCubes,
    image: carousel5,
  },
]

const biChecklist = [
  'Visibilidad completa de tu negocio',
  'Reportes y dashboards en tiempo real',
  'Predicción de tendencias y comportamientos',
  'Mejores decisiones, mayor competitividad',
]

const biStats = [
  { title: 'Reducción de costos operativos', value: '35%', label: 'Ahorro promedio', chart: 'line' },
  { title: 'Mejora en el tiempo de respuesta', value: '60%', label: 'Más rápido', chart: 'bars' },
  { title: 'Disponibilidad de servicios', value: '99.9%', label: 'Uptime garantizado', chart: 'donut' },
]

const benefits = [
  { title: 'Escalabilidad', description: 'Ajusta recursos según demanda sin inversiones en hardware.', icon: faCloud },
  { title: 'Seguridad avanzada', description: 'Protección de datos con estándares y protocolos de clase mundial.', icon: faShieldHalved },
  { title: 'Ahorro de costos', description: 'Reduce gastos operativos y paga solo por lo que usas.', icon: faDollarSign },
  { title: 'Alta disponibilidad', description: 'Servicios siempre accesibles con mínimas interrupciones.', icon: faGaugeHigh },
  { title: 'Innovación continua', description: 'Acceso a las últimas tecnologías sin actualizaciones costosas.', icon: faCubes },
]

export default function Nube() {
  return (
    <>
      <SEO
        title="Nube | DataBrains"
        description="Soluciones en la nube para escalar, proteger y optimizar la operación tecnológica de tu empresa."
      />
      <main className="overflow-x-hidden bg-white">
        <SolutionHero
          label="Nube"
          title="Escalabilidad, seguridad y rendimiento sin límites"
          description="Te ayudamos a diseñar, migrar y optimizar tu infraestructura en la nube para que tu negocio sea más ágil, seguro y rentable."
          heroImage={heroImage}
          heroAlt="Sala de servidores con icono de nube"
          badgeIcon={faCloud}
        />
        <ServicesCarouselSection
          title="Soluciones en la nube que impulsan tu negocio"
          subtitle="Servicios y estrategias para aprovechar al máximo la nube."
          items={cloudSolutions}
        />
        <BusinessIntelligencePanel
          title="Inteligencia de negocios: decisiones basadas en datos"
          description="Centralizamos y analizamos tus datos en la nube para que tengas visibilidad completa de tu operación y puedas tomar decisiones informadas en tiempo real."
          checklist={biChecklist}
          stats={biStats}
        />
        <BenefitsGrid title="Beneficios de trabajar en la nube" benefits={benefits} />
        <FinalCTABlock
          title="Construyamos juntos tu camino a la nube"
          description="Te acompañamos en cada etapa para que obtengas el máximo valor de la nube."
          ctaLabel="Hablemos de tu proyecto"
          image={ctaImage}
          floatingIcons={[faCloud, faShieldHalved, faDatabase]}
        />
      </main>
    </>
  )
}
