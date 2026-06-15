import React from 'react'
import {
  faBox,
  faNetworkWired,
  faEye,
  faShieldHalved,
  faFileContract,
  faShip,
  faClipboardCheck,
  faFingerprint,
  faCube,
  faHandshake,
  faClipboardList,
  faRocket,
  faBolt,
  faUsers,
  faRoute,
  faCircleCheck,
  faLock,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/SEO'
import {
  SolutionHero,
  IconFeatureGrid,
  ServicesCarouselSection,
  NumberedSteps,
  BenefitsGrid,
  AudiencePhotoGrid,
  ResultsSplitSection,
  FinalCTABlock,
} from '../components/SolutionPageParts'
import heroImage from '../assets/images/pages/blockchain/hero.jpg'
import ctaImage from '../assets/images/pages/blockchain/cta.jpg'
import resultsImage from '../assets/images/pages/blockchain/results.jpg'
import carousel1 from '../assets/images/pages/blockchain/carousel-1.jpg'
import carousel2 from '../assets/images/pages/blockchain/carousel-2.jpg'
import carousel3 from '../assets/images/pages/blockchain/carousel-3.jpg'
import carousel4 from '../assets/images/pages/blockchain/carousel-4.jpg'
import carousel5 from '../assets/images/pages/blockchain/carousel-5.jpg'
import carousel6 from '../assets/images/pages/blockchain/carousel-6.jpg'
import audience1 from '../assets/images/pages/blockchain/audience-1.jpg'
import audience2 from '../assets/images/pages/blockchain/audience-2.jpg'
import audience3 from '../assets/images/pages/blockchain/audience-3.jpg'
import audience4 from '../assets/images/pages/blockchain/audience-4.jpg'
import audience5 from '../assets/images/pages/blockchain/audience-5.jpg'

const whatIsBlockchain = [
  { title: 'Trazabilidad', description: 'Registra cada paso de un proceso de forma inmutable y verificable.', icon: faBox },
  { title: 'Validación compartida', description: 'Múltiples actores validan la información según reglas acordadas.', icon: faNetworkWired },
  { title: 'Transparencia', description: 'Todos los participantes ven la misma información autorizada.', icon: faEye },
  { title: 'Confianza en procesos', description: 'La información no puede alterarse sin consenso entre las partes.', icon: faShieldHalved },
]

const businessUses = [
  { title: 'Trazabilidad de productos', description: 'Sigue el recorrido de productos desde origen hasta destino.', icon: faBox, image: carousel1 },
  { title: 'Certificados y documentos verificables', description: 'Emite y valida documentos con respaldo digital confiable.', icon: faFileContract, image: carousel2 },
  { title: 'Contratos / acuerdos digitales', description: 'Automatiza acuerdos con condiciones verificables.', icon: faHandshake, image: carousel3 },
  { title: 'Cadena de suministro', description: 'Coordina y audita operaciones logísticas entre múltiples actores.', icon: faShip, image: carousel4 },
  { title: 'Auditoría de procesos', description: 'Registra cada acción para revisiones y cumplimiento normativo.', icon: faClipboardCheck, image: carousel5 },
  { title: 'Identidad y validación', description: 'Verifica identidades y credenciales de forma segura.', icon: faFingerprint, image: carousel6 },
]

const howItWorks = [
  { title: 'Se genera una transacción', description: 'Un evento o acción se registra como transacción digital.', icon: faFileContract },
  { title: 'Se valida por reglas', description: 'La red verifica que cumple las condiciones establecidas.', icon: faNetworkWired },
  { title: 'Se registra en un bloque', description: 'La transacción se agrupa y sella en un bloque inmutable.', icon: faCube },
  { title: 'Queda compartido', description: 'Todos los participantes autorizados acceden al registro.', icon: faShieldHalved },
]

const benefits = [
  { title: 'Mayor transparencia', description: 'Visibilidad compartida de cada paso del proceso.', icon: faEye },
  { title: 'Menos errores y manipulación', description: 'Registros inmutables que reducen disputas.', icon: faShieldHalved },
  { title: 'Confianza entre actores', description: 'Colaboración segura entre empresas y socios.', icon: faUsers },
  { title: 'Auditoría más simple', description: 'Trazabilidad completa sin procesos manuales.', icon: faClipboardList },
  { title: 'Innovación y diferenciación', description: 'Posiciónate con procesos confiables y modernos.', icon: faRocket },
]

const audience = [
  { title: 'Empresas con cadena de suministro', description: 'Que necesitan trazabilidad de productos y materiales.', image: audience1 },
  { title: 'Organizaciones que emiten certificados', description: 'Que requieren documentos verificables y confiables.', image: audience2 },
  { title: 'Empresas con trazabilidad documental', description: 'Que manejan expedientes y registros críticos.', image: audience3 },
  { title: 'Proyectos con múltiples actores', description: 'Donde varias partes deben validar información.', image: audience4 },
  { title: 'Negocios que buscan procesos confiables', description: 'Que quieren reducir errores y aumentar la confianza.', image: audience5 },
]

const results = [
  { title: 'Mejor trazabilidad', description: 'Seguimiento completo de cada etapa del proceso.', icon: faRoute },
  { title: 'Menos disputas o errores', description: 'Registros compartidos que evitan malentendidos.', icon: faCircleCheck },
  { title: 'Verificación rápida', description: 'Valida información en segundos, no en días.', icon: faBolt },
  { title: 'Mayor confianza operativa', description: 'Relaciones más sólidas entre todos los actores.', icon: faHandshake },
]

export default function Blockchain() {
  return (
    <>
      <SEO
        title="Blockchain | DataBrains"
        description="Blockchain para procesos de negocio: trazabilidad, validación compartida y transparencia sin especulación."
      />
      <main className="overflow-x-hidden bg-white">
        <SolutionHero
          label="Blockchain"
          title="Blockchain para procesos de negocio, no para criptomonedas"
          description="Ayudamos a empresas a usar blockchain para trazabilidad, validación compartida y transparencia en sus procesos, sin enfocarnos en especulación."
          heroImage={heroImage}
          heroAlt="Profesionales revisando trazabilidad de cadena de suministro"
          secondaryCta={{ label: 'Conoce nuestras soluciones', to: '/soluciones-empresariales' }}
        />
        <IconFeatureGrid
          title="¿Qué sí es blockchain para empresas?"
          subtitle="No se trata de comprar monedas. Se trata de procesos más confiables, trazables y verificables."
          items={whatIsBlockchain}
        />
        <ServicesCarouselSection
          title="Usos empresariales de blockchain"
          subtitle="Aplicaciones prácticas que generan valor real en tu operación."
          items={businessUses}
        />
        <NumberedSteps title="¿Cómo funciona?" steps={howItWorks} />
        <BenefitsGrid title="Beneficios para tu empresa" benefits={benefits} />
        <AudiencePhotoGrid title="¿Para quién es esta solución?" items={audience} />
        <ResultsSplitSection image={resultsImage} items={results} />
        <FinalCTABlock
          title="¿Quieres explorar blockchain con un enfoque práctico para tu negocio?"
          description="Te ayudamos a identificar casos de uso reales y a implementarlos paso a paso."
          ctaLabel="Hablemos de tu proyecto"
          image={ctaImage}
          floatingIcons={[faCube, faShieldHalved, faLock, faDatabase]}
        />
      </main>
    </>
  )
}
