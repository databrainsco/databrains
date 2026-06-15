import React from 'react'
import {
  faBrain,
  faCalendarDays,
  faChartColumn,
  faChartLine,
  faDatabase,
  faEye,
  faGear,
  faMagnifyingGlassChart,
  faRobot,
  faTableCellsLarge,
  faTrophy,
  faBullseye,
} from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/SEO'
import {
  SolutionHero,
  ChallengesGrid,
  ServicesCarouselSection,
  PhotoCardGrid,
  BenefitsGrid,
  FinalCTABlock,
} from '../components/SolutionPageParts'
import heroImage from '../assets/images/pages/datascience/hero.jpg'
import ctaImage from '../assets/images/pages/datascience/cta.jpg'
import bi1 from '../assets/images/pages/datascience/bi-1.jpg'
import bi2 from '../assets/images/pages/datascience/bi-2.jpg'
import bi3 from '../assets/images/pages/datascience/bi-3.jpg'
import bi4 from '../assets/images/pages/datascience/bi-4.jpg'
import carousel1 from '../assets/images/pages/datascience/carousel-1.jpg'
import carousel2 from '../assets/images/pages/datascience/carousel-2.jpg'
import carousel3 from '../assets/images/pages/datascience/carousel-3.jpg'
import carousel4 from '../assets/images/pages/datascience/carousel-4.jpg'
import carousel5 from '../assets/images/pages/datascience/carousel-5.jpg'

const challenges = [
  { title: 'Datos dispersos', description: 'Información en múltiples sistemas sin conexión.', icon: faDatabase },
  { title: 'Reportes manuales', description: 'Horas perdidas generando reportes a mano.', icon: faTableCellsLarge },
  { title: 'Poca visibilidad', description: 'Sin claridad sobre el estado real del negocio.', icon: faEye },
  { title: 'Decisiones lentas', description: 'Esperar días o semanas para obtener insights.', icon: faCalendarDays },
  { title: 'Información no confiable', description: 'Datos inconsistentes que generan dudas.', icon: faChartColumn },
  { title: 'Dificultad para detectar oportunidades', description: 'Tendencias y patrones que pasan desapercibidos.', icon: faMagnifyingGlassChart },
]

const dataSolutions = [
  { title: 'Integración y limpieza de datos', description: 'Unificamos y depuramos tus fuentes de datos para análisis confiable.', icon: faDatabase, image: carousel1 },
  { title: 'Dashboards ejecutivos', description: 'Tableros visuales con los KPIs que importan para tu negocio.', icon: faChartColumn, image: carousel2 },
  { title: 'Automatización de reportes', description: 'Reportes que se generan solos y llegan a quien los necesita.', icon: faRobot, image: carousel3 },
  { title: 'Análisis descriptivo', description: 'Entiende qué pasó en tu negocio con análisis claros y accionables.', icon: faChartLine, image: carousel4 },
  { title: 'Modelos predictivos', description: 'Anticipa tendencias y comportamientos con machine learning.', icon: faBrain, image: carousel5 },
]

const biCards = [
  { title: 'Toma de decisiones con datos', description: 'Basadas en evidencia, no en intuición.', icon: faBullseye, image: bi1 },
  { title: 'Visibilidad operativa en tiempo real', description: 'Monitorea tu negocio al instante.', icon: faEye, image: bi2 },
  { title: 'Proyecciones y pronósticos más claros', description: 'Anticipa el futuro con modelos confiables.', icon: faChartLine, image: bi3 },
  { title: 'Detección de oportunidades de crecimiento', description: 'Encuentra nichos y tendencias emergentes.', icon: faMagnifyingGlassChart, image: bi4 },
  { title: 'Optimización de costos', description: 'Identifica dónde ahorrar sin sacrificar calidad.', icon: faGear, image: carousel3 },
  { title: 'Seguimiento de KPIs críticos', description: 'Métricas clave siempre a la vista.', icon: faTrophy, image: carousel5 },
]

const benefits = [
  { title: 'Decisiones más precisas', description: 'Basadas en datos reales, no suposiciones.', icon: faBullseye },
  { title: 'Mayor visibilidad', description: 'Claridad total sobre tu operación.', icon: faEye },
  { title: 'Eficiencia operativa', description: 'Procesos optimizados con insights accionables.', icon: faGear },
  { title: 'Mejor planeación', description: 'Estrategias fundamentadas en proyecciones confiables.', icon: faCalendarDays },
  { title: 'Ventaja competitiva', description: 'Anticípate al mercado con analítica avanzada.', icon: faTrophy },
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
          label="Data Science"
          title="Convierte tus datos en decisiones de negocio"
          description="Te ayudamos a organizar, analizar y visualizar tus datos para que tomes mejores decisiones con menos incertidumbre y más claridad."
          heroImage={heroImage}
          heroAlt="Profesional analizando dashboards de datos"
          secondaryCta={{ label: 'Conoce nuestros casos', to: '/soluciones-empresariales' }}
        />
        <ChallengesGrid title="Retos comunes" items={challenges} />
        <ServicesCarouselSection
          title="Soluciones de Data Science que implementamos"
          subtitle="Herramientas y metodologías para transformar tus datos en valor."
          items={dataSolutions}
        />
        <PhotoCardGrid
          title="Inteligencia de negocios"
          subtitle="Con el análisis de datos adecuado, tu empresa gana claridad e inteligencia accionable."
          items={biCards}
        />
        <BenefitsGrid title="Beneficios de implementar Data Science" benefits={benefits} lightBg={false} />
        <FinalCTABlock
          title="Convierte tus datos en una ventaja real"
          description="Hablemos de cómo la analítica puede transformar la forma en que operas y decides."
          ctaLabel="Hablemos de tu proyecto"
          image={ctaImage}
          floatingIcons={[faChartColumn, faDatabase, faBrain]}
        />
      </main>
    </>
  )
}
