import React from 'react'
import {
  faChartColumn,
  faCloud,
  faCode,
  faCubes,
  faDollarSign,
  faInfinity,
  faRocket,
  faShieldHalved,
  faBullseye,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/SEO'
import {
  SolutionHero,
  ServicesCarouselSection,
  BeforeAfterSection,
  BenefitsGrid,
  FinalCTABlock,
} from '../components/SolutionPageParts'
import heroImage from '../assets/images/pages/devops/hero.jpg'
import ctaImage from '../assets/images/pages/devops/cta.jpg'
import beforeImage from '../assets/images/pages/devops/before.jpg'
import afterImage from '../assets/images/pages/devops/after.jpg'
import carousel1 from '../assets/images/pages/devops/carousel-1.jpg'
import carousel2 from '../assets/images/pages/devops/carousel-2.jpg'
import carousel3 from '../assets/images/pages/devops/carousel-3.jpg'
import carousel4 from '../assets/images/pages/devops/carousel-4.jpg'
import carousel5 from '../assets/images/pages/devops/carousel-5.jpg'

const devopsSolutions = [
  {
    title: 'Integración Continua',
    description: 'Automatizamos la integración de código para detectar errores temprano y acelerar el desarrollo.',
    icon: faCode,
    image: carousel1,
  },
  {
    title: 'Entrega y Despliegue Continuo (CI/CD)',
    description: 'Pipelines automatizados para llevar tu software a producción de forma rápida y confiable.',
    icon: faCloud,
    image: carousel2,
  },
  {
    title: 'Contenerización y Orquestación',
    description: 'Docker y Kubernetes para desplegar aplicaciones escalables y portables.',
    icon: faCubes,
    image: carousel3,
  },
  {
    title: 'Monitoreo y Observabilidad',
    description: 'Visibilidad en tiempo real del rendimiento, logs y métricas de tus sistemas.',
    icon: faChartColumn,
    image: carousel4,
  },
  {
    title: 'Seguridad DevSecOps',
    description: 'Integramos seguridad en cada etapa del ciclo de desarrollo y despliegue.',
    icon: faShieldHalved,
    image: carousel5,
  },
]

const benefits = [
  { title: 'Mayor velocidad', description: 'Entregas más rápidas y ciclos de desarrollo acortados.', icon: faRocket },
  { title: 'Mayor calidad', description: 'Menos errores gracias a pruebas y despliegues automatizados.', icon: faBullseye },
  { title: 'Eficiencia operativa', description: 'Menos trabajo manual y procesos más predecibles.', icon: faDollarSign },
  { title: 'Colaboración', description: 'Equipos de desarrollo y operaciones alineados.', icon: faUsers },
  { title: 'Escalabilidad y seguridad', description: 'Infraestructura que crece contigo y protege tus activos.', icon: faShieldHalved },
]

export default function DevOps() {
  return (
    <>
      <SEO
        title="DevOps | DataBrains"
        description="Prácticas y herramientas DevOps para automatizar entregas, mejorar colaboración y acelerar el ciclo de desarrollo de software."
      />
      <main className="overflow-x-hidden bg-white">
        <SolutionHero
          label="DevOps"
          title="Agilidad, calidad y entrega continua"
          description="Implementamos prácticas y herramientas DevOps para automatizar procesos, mejorar la colaboración entre equipos y acelerar la entrega de software con calidad y confiabilidad."
          heroImage={heroImage}
          heroAlt="Profesional trabajando con múltiples monitores de código"
          badgeIcon={faInfinity}
        />
        <ServicesCarouselSection
          title="Soluciones DevOps que implementamos"
          subtitle="Herramientas y prácticas que transforman tu ciclo de desarrollo."
          items={devopsSolutions}
        />
        <BeforeAfterSection
          title="DevOps en acción: transforma tu forma de entregar valor"
          beforeImage={beforeImage}
          afterImage={afterImage}
          beforeItems={[
            'Despliegues manuales y lentos',
            'Errores frecuentes en producción',
            'Falta de visibilidad del estado de los sistemas',
            'Equipos desconectados',
          ]}
          afterItems={[
            'Despliegues automáticos y confiables',
            'Menos errores y rollbacks rápidos',
            'Monitoreo y alertas en tiempo real',
            'Colaboración fluida entre equipos',
          ]}
        />
        <BenefitsGrid title="Beneficios de adoptar DevOps" benefits={benefits} />
        <FinalCTABlock
          title="¿Listo para llevar tu entrega de software al siguiente nivel?"
          description="Te acompañamos en la implementación DevOps de principio a fin."
          ctaLabel="Hablemos de tu proyecto"
          image={ctaImage}
          floatingIcons={[faInfinity, faCloud, faChartColumn, faShieldHalved]}
        />
      </main>
    </>
  )
}
