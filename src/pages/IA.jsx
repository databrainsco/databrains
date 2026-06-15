import React from 'react'
import {
  faBrain,
  faBullseye,
  faChartColumn,
  faComments,
  faDatabase,
  faDollarSign,
  faEye,
  faFileLines,
  faMicrochip,
  faRocket,
  faShieldHalved,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/SEO'
import {
  SolutionHero,
  ServicesCarouselSection,
  BeforeAfterSection,
  BenefitsGrid,
  FinalCTABlock,
} from '../components/SolutionPageParts'
import heroImage from '../assets/images/pages/ia/hero.jpg'
import ctaImage from '../assets/images/pages/ia/cta.jpg'
import beforeImage from '../assets/images/pages/ia/before.jpg'
import afterImage from '../assets/images/pages/ia/after.jpg'
import carousel1 from '../assets/images/pages/ia/carousel-1.jpg'
import carousel2 from '../assets/images/pages/ia/carousel-2.jpg'
import carousel3 from '../assets/images/pages/ia/carousel-3.jpg'
import carousel4 from '../assets/images/pages/ia/carousel-4.jpg'
import carousel5 from '../assets/images/pages/ia/carousel-5.jpg'

const aiProducts = [
  { title: 'Asistentes Inteligentes', description: 'Chatbots y asistentes virtuales que atienden, resuelven y escalan consultas 24/7.', icon: faComments, image: carousel1 },
  { title: 'Predicción de Demanda', description: 'Modelos que anticipan necesidades de inventario, ventas y recursos.', icon: faChartColumn, image: carousel2 },
  { title: 'Visión por Computadora', description: 'Detección de objetos, inspección de calidad y análisis visual automatizado.', icon: faEye, image: carousel3 },
  { title: 'Análisis de Documentos', description: 'Extracción automática de datos de facturas, contratos y formularios.', icon: faFileLines, image: carousel4 },
  { title: 'Detección de Anomalías', description: 'Identifica fraudes, fallas y comportamientos inusuales en tiempo real.', icon: faTriangleExclamation, image: carousel5 },
]

const benefits = [
  { title: 'Mayor eficiencia', description: 'Automatiza tareas repetitivas y libera tiempo valioso.', icon: faChartColumn },
  { title: 'Decisiones inteligentes', description: 'Insights basados en datos, no en intuición.', icon: faBullseye },
  { title: 'Reducción de costos', description: 'Optimiza recursos y reduce errores costosos.', icon: faDollarSign },
  { title: 'Menos errores', description: 'Procesos consistentes y confiables.', icon: faShieldHalved },
  { title: 'Innovación continua', description: 'Mantente a la vanguardia con tecnología de punta.', icon: faRocket },
]

export default function IA() {
  return (
    <>
      <SEO
        title="IA | DataBrains"
        description="Soluciones de inteligencia artificial: asistentes inteligentes, predicción, visión por computadora, análisis de documentos y detección de anomalías."
      />
      <main className="overflow-x-hidden bg-white">
        <SolutionHero
          label="IA"
          title="Inteligencia que impulsa resultados"
          description="Desarrollamos e implementamos soluciones de inteligencia artificial que automatizan procesos, optimizan decisiones y generan valor real para tu negocio."
          heroImage={heroImage}
          heroAlt="Mujer observando visualización de cerebro digital con IA"
          badgeIcon={faMicrochip}
        />
        <ServicesCarouselSection
          title="Productos de IA que podemos implementar"
          subtitle="Soluciones listas para transformar tu operación desde el primer día."
          items={aiProducts}
        />
        <BeforeAfterSection
          title="El poder de la IA, en resultados reales"
          beforeImage={beforeImage}
          afterImage={afterImage}
          beforeItems={[
            'Procesos manuales y repetitivos',
            'Decisiones basadas en intuición',
            'Pérdida de tiempo y recursos',
            'Datos infrautilizados',
          ]}
          afterItems={[
            'Automatización inteligente',
            'Decisiones basadas en datos',
            'Ahorro de tiempo y costos',
            'Datos conectados que generan valor',
          ]}
        />
        <BenefitsGrid title="Beneficios de implementar IA" benefits={benefits} />
        <FinalCTABlock
          title="¿Quieres implementar IA en tu empresa?"
          description="Te ayudamos a convertir tus datos en soluciones inteligentes que generan impacto."
          ctaLabel="Hablemos de tu proyecto"
          image={ctaImage}
          floatingIcons={[faBrain, faComments, faChartColumn, faDatabase]}
        />
      </main>
    </>
  )
}
