import React from 'react'
import {
  faBrain,
  faCalendarDays,
  faCircleCheck,
  faClock,
  faChartColumn,
  faChartLine,
  faDatabase,
  faDollarSign,
  faEye,
  faGaugeHigh,
  faGear,
  faLightbulb,
  faMagnifyingGlassChart,
  faRobot,
  faShieldHalved,
  faTableCellsLarge,
  faTrophy,
  faBullseye,
} from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/SEO'
import {
  SolutionHero,
  ChallengesGrid,
  ServicesCarouselSection,
  BusinessIntelligenceCarousel,
  BenefitsRadialSection,
  FinalCTABlock,
} from '../components/SolutionPageParts'
import heroImage from '../assets/images/pages/datascience/hero.jpg'
import ctaImage from '../assets/images/pages/datascience/cta-person.webp'
import bi1 from '../assets/images/pages/datascience/bi-1.jpg'
import bi2 from '../assets/images/pages/datascience/bi-2.jpg'
import bi3 from '../assets/images/pages/datascience/bi-3.jpg'
import bi4 from '../assets/images/pages/datascience/bi-4.jpg'
import bi5 from '../assets/images/pages/datascience/bi-5.jpg'
import bi6 from '../assets/images/pages/datascience/bi-6.jpg'
import carousel1 from '../assets/images/pages/datascience/carousel-1.jpg'
import carousel2 from '../assets/images/pages/datascience/carousel-2.jpg'
import carousel3 from '../assets/images/pages/datascience/carousel-3.jpg'
import carousel4 from '../assets/images/pages/datascience/carousel-4.jpg'
import carousel5 from '../assets/images/pages/datascience/carousel-5.jpg'
import carousel6 from '../assets/images/pages/datascience/carousel-6.jpg'
import carousel7 from '../assets/images/pages/datascience/carousel-7.jpg'
import carousel8 from '../assets/images/pages/datascience/carousel-8.jpg'

const challenges = [
  { title: 'Datos dispersos', description: 'La información está en múltiples fuentes y sin integración.', icon: faDatabase },
  { title: 'Reportes manuales', description: 'Procesos repetitivos que consumen tiempo y son propensos a errores.', icon: faTableCellsLarge },
  { title: 'Poca visibilidad', description: 'Falta de dashboards e indicadores claros para el día a día.', icon: faEye },
  { title: 'Decisiones lentas', description: 'La información llega tarde o no está disponible cuando se necesita.', icon: faClock },
  { title: 'Información no confiable', description: 'Datos inconsistentes que afectan la credibilidad.', icon: faShieldHalved },
  { title: 'Dificultad para detectar oportunidades', description: 'Se pierden patrones y tendencias clave para el crecimiento.', icon: faMagnifyingGlassChart },
]

const dataSolutions = [
  { title: 'Integración y limpieza de datos', description: 'Unificamos y depuramos tus fuentes de datos para análisis confiable.', icon: faDatabase, image: carousel1 },
  { title: 'Dashboards ejecutivos', description: 'Tableros visuales con los KPIs que importan para tu negocio.', icon: faChartColumn, image: carousel2 },
  { title: 'Automatización de reportes', description: 'Reportes que se generan solos y llegan a quien los necesita.', icon: faRobot, image: carousel3 },
  { title: 'Análisis descriptivo', description: 'Entendemos qué pasó en tu negocio con métricas clave.', icon: faChartLine, image: carousel4 },
  { title: 'Modelos predictivos', description: 'Anticipamos escenarios y comportamientos futuros con IA y ML.', icon: faBrain, image: carousel5 },
  { title: 'Indicadores clave de negocio', description: 'Definimos y monitoreamos KPIs que impulsan resultados.', icon: faBullseye, image: carousel6 },
  { title: 'Visualización de datos', description: 'Transformamos datos complejos en visuales simples y poderosas.', icon: faChartColumn, image: carousel7 },
  { title: 'Detección de patrones y oportunidades', description: 'Identificamos insights escondidos que generan ventaja competitiva.', icon: faMagnifyingGlassChart, image: carousel8 },
]

const biCards = [
  { title: 'Toma de decisiones con datos', description: 'Decisiones más seguras y alineadas a objetivos estratégicos.', icon: faCircleCheck, image: bi1 },
  { title: 'Visibilidad operativa en tiempo real', description: 'Monitorea tu negocio al instante y actúa con información actualizada.', icon: faEye, image: bi2 },
  { title: 'Proyecciones y pronósticos más claros', description: 'Anticipa escenarios y planifica con mayor precisión.', icon: faChartLine, image: bi3 },
  { title: 'Detección de oportunidades de crecimiento', description: 'Descubre segmentos, productos y mercados con mayor potencial.', icon: faLightbulb, image: bi4 },
  { title: 'Optimización de costos y recursos', description: 'Reduce gastos innecesarios y mejora la rentabilidad.', icon: faDollarSign, image: bi5 },
  { title: 'Seguimiento de KPIs críticos', description: 'Mide lo que importa y garantiza el cumplimiento de metas.', icon: faGaugeHigh, image: bi6 },
]

const benefits = [
  { title: 'Decisiones más precisas', description: 'Basadas en datos, no en suposiciones.' },
  { title: 'Mejor planeación', description: 'Proyecciones confiables para anticiparse.' },
  { title: 'Ventaja competitiva', description: 'Detecta oportunidades antes que el mercado.' },
  { title: 'Eficiencia operativa', description: 'Optimiza procesos y reduce desperdicios.' },
  { title: 'Mayor visibilidad', description: 'Claridad sobre lo que ocurre en la operación.' },
]

export default function DataScience() {
  return (
    <>
      <SEO
        title="Data Science | DataBrains"
        description="Analítica avanzada, dashboards, modelos predictivos y business intelligence para convertir datos en decisiones de negocio."
      />
      <main className="overflow-x-hidden bg-white">
        <SolutionHero
          title="Data Science"
          subtitle="Convierte tus datos en decisiones de negocio"
          description="En DataBrains ayudamos a las empresas a organizar, analizar y visualizar sus datos para tomar mejores decisiones, identificar oportunidades y reducir la incertidumbre."
          heroImage={heroImage}
          heroAlt="Analista de datos revisando dashboards en laptop y monitor"
          secondaryCta={{ label: 'Conoce nuestros casos', to: '/soluciones-empresariales' }}
        />
        <ChallengesGrid title="Retos comunes" items={challenges} />
        <ServicesCarouselSection
          title="Soluciones de Data Science que implementamos"
          subtitle="Herramientas y metodologías para transformar tus datos en valor."
          items={dataSolutions}
        />
        <BusinessIntelligenceCarousel
          title="Inteligencia de negocios"
          subtitle="Con el análisis de datos adecuado, tu empresa gana claridad e inteligencia accionable."
          items={biCards}
        />
        <BenefitsRadialSection
          title="Beneficios de implementar Data Science"
          centerTitle="Data Science"
          centerSubtitle="Beneficios clave"
          benefits={benefits}
        />
        <FinalCTABlock
          title="Convierte tus datos en una ventaja real"
          description="Te ayudamos a implementar soluciones de Data Science que impulsan mejores decisiones, eficiencia y crecimiento sostenible para tu negocio."
          ctaLabel="Hablemos de tu proyecto"
          image={ctaImage}
          imageVariant="cutout"
          cutoutImageSize="large"
        />
      </main>
    </>
  )
}
