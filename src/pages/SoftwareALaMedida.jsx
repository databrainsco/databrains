import React from 'react'
import {
  faCode,
  faMobileScreen,
  faDatabase,
  faUser,
  faGear,
  faChartColumn,
  faShieldHalved,
  faPuzzlePiece,
  faDollarSign,
  faMagnifyingGlass,
  faPencil,
  faCircleCheck,
  faRocket,
  faCloud,
} from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/SEO'
import {
  SolutionHero,
  ServicesCarouselSection,
  BenefitsGrid,
  ProcessTimeline,
  FinalCTABlock,
} from '../components/SolutionPageParts'
import heroImage from '../assets/images/pages/software/hero.jpg'
import ctaImage from '../assets/images/pages/software/cta.jpg'
import carousel1 from '../assets/images/pages/software/carousel-1.jpg'
import carousel2 from '../assets/images/pages/software/carousel-2.jpg'
import carousel3 from '../assets/images/pages/software/carousel-3.jpg'
import carousel4 from '../assets/images/pages/software/carousel-4.jpg'
import carousel5 from '../assets/images/pages/software/carousel-5.jpg'

const modules = [
  {
    title: 'Plataformas a medida',
    description: 'Sistemas web completos diseñados para tus procesos y flujos de trabajo únicos.',
    icon: faCode,
    image: carousel1,
  },
  {
    title: 'Aplicaciones móviles',
    description: 'Apps nativas o híbridas para iOS y Android que conectan con tu operación.',
    icon: faMobileScreen,
    image: carousel2,
  },
  {
    title: 'Sistemas internos y ERPs',
    description: 'Herramientas de gestión que centralizan y optimizan tu operación diaria.',
    icon: faDatabase,
    image: carousel3,
  },
  {
    title: 'Portales y autogestión',
    description: 'Espacios digitales donde tus clientes o colaboradores gestionan sus trámites.',
    icon: faUser,
    image: carousel4,
  },
  {
    title: 'Integraciones y APIs',
    description: 'Conectamos tus sistemas para que la información fluya sin fricciones.',
    icon: faGear,
    image: carousel5,
  },
]

const benefits = [
  { title: 'Alineado a tu negocio', description: 'Cada función responde a tus procesos reales.', icon: faGear },
  { title: 'Mayor eficiencia', description: 'Automatiza tareas y reduce tiempos operativos.', icon: faChartColumn },
  { title: 'Seguridad y control', description: 'Tus datos y procesos bajo tu propia gestión.', icon: faShieldHalved },
  { title: 'Escalabilidad', description: 'Crece contigo sin límites de plantillas genéricas.', icon: faPuzzlePiece },
  { title: 'Mejor retorno', description: 'Inversión que se traduce en resultados medibles.', icon: faDollarSign },
]

const processSteps = [
  { title: 'Descubrimiento', description: 'Entendemos tu negocio, necesidades y objetivos.', icon: faMagnifyingGlass },
  { title: 'Diseño', description: 'Definimos la arquitectura y experiencia del software.', icon: faPencil },
  { title: 'Desarrollo', description: 'Construimos con metodologías ágiles y entregas iterativas.', icon: faCode },
  { title: 'Pruebas', description: 'Validamos calidad, rendimiento y seguridad.', icon: faCircleCheck },
  { title: 'Entrega y evolución', description: 'Lanzamos y acompañamos el crecimiento continuo.', icon: faRocket },
]

export default function SoftwareALaMedida() {
  return (
    <>
      <SEO
        title="Software a la medida | DataBrains"
        description="Desarrollo de software personalizado que se adapta a tus procesos, objetivos y visión de negocio."
      />
      <main className="overflow-x-hidden bg-white">
        <SolutionHero
          title="Software a la medida"
          description="Construimos herramientas únicas que se adaptan a tus procesos, objetivos y visión de negocio. Sin límites, sin plantillas."
          heroImage={heroImage}
          heroAlt="Laptop con dashboard de datos en escritorio"
          badgeIcon={faCode}
        />
        <ServicesCarouselSection
          title="Módulos y funcionalidades que desarrollamos"
          subtitle="Soluciones 100% personalizadas para tu negocio."
          items={modules}
        />
        <BenefitsGrid title="Beneficios del software a la medida" benefits={benefits} lightBg={false} />
        <ProcessTimeline title="Así trabajamos contigo" steps={processSteps} />
        <FinalCTABlock
          title="¿Listo para tener un software hecho para ti?"
          description="Cuéntanos tu idea y la convertiremos en una solución que impulse tu negocio."
          ctaLabel="Hablemos de tu proyecto"
          image={ctaImage}
          floatingIcons={[faGear, faCloud, faMobileScreen, faCode]}
        />
      </main>
    </>
  )
}
