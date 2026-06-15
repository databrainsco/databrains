import {
  faBrain,
  faChartLine,
  faCloud,
  faCode,
  faCubes,
  faDatabase,
  faFileLines,
  faGlobe,
  faLayerGroup,
  faLightbulb,
  faPalette,
  faRocket,
  faServer,
  faShop,
} from '@fortawesome/free-solid-svg-icons'

export const enterpriseServices = [
  {
    title: 'Software a la medida',
    description: 'Aplicaciones y plataformas adaptadas a procesos reales, integraciones y crecimiento operativo.',
    icon: faCode,
    to: '/soluciones-empresariales/software-a-la-medida',
  },
  {
    title: 'Nube',
    description: 'Arquitecturas cloud preparadas para escalar, proteger datos y reducir fricción técnica.',
    icon: faCloud,
    to: '/soluciones-empresariales/nube',
  },
  {
    title: 'DevOps',
    description: 'Automatización, pipelines y prácticas para entregar software con mayor velocidad y control.',
    icon: faServer,
    to: '/soluciones-empresariales/devops',
  },
  {
    title: 'Data Science',
    description: 'Modelos, analítica y tableros para convertir datos dispersos en decisiones accionables.',
    icon: faChartLine,
    to: '/soluciones-empresariales/data-science',
  },
  {
    title: 'IA',
    description: 'Automatización inteligente y soluciones de IA aplicadas a procesos, productos y atención.',
    icon: faBrain,
    to: '/soluciones-empresariales/ia',
  },
  {
    title: 'Blockchain',
    description: 'Soluciones descentralizadas, trazabilidad y contratos inteligentes con enfoque práctico.',
    icon: faCubes,
    to: '/soluciones-empresariales/blockchain',
  },
  {
    title: 'Consultoría Empresarial',
    description: 'Acompañamiento estratégico para tomar mejores decisiones tecnológicas.',
    icon: faLightbulb,
    to: '/soluciones-empresariales/consultoria-empresarial',
  },
  {
    title: 'Documentación',
    description: 'Documentación técnica clara para equipos, sistemas complejos y conocimiento crítico.',
    icon: faFileLines,
    to: '/soluciones-empresariales/documentacion',
  },
]

export const entrepreneurServices = [
  {
    title: 'Sitios Web personalizados',
    description: 'Sitios profesionales, rápidos y alineados con la identidad de cada negocio.',
    icon: faGlobe,
    to: '/emprendedores-m1b/sitios-web-personalizados',
  },
  {
    title: 'Tienda online',
    description: 'E-commerce listo para vender, comunicar confianza y ordenar la operación digital.',
    icon: faShop,
    to: '/emprendedores-m1b/tienda-online',
  },
  {
    title: 'Branding',
    description: 'Identidad visual, narrativa y presencia de marca para competir con claridad.',
    icon: faPalette,
    to: '/emprendedores-m1b/branding',
  },
  {
    title: 'Landing Page',
    description: 'Páginas enfocadas en conversión para campañas, lanzamientos y captación de leads.',
    icon: faRocket,
    to: '/emprendedores-m1b/landing-page',
  },
  {
    title: 'Consultoría',
    description: 'Guía práctica para priorizar tecnología, ventas digitales y crecimiento sostenible.',
    icon: faLayerGroup,
    to: '/emprendedores-m1b/consultoria',
  },
]

export const featuredServices = [
  enterpriseServices[0],
  enterpriseServices[1],
  enterpriseServices[4],
  {
    ...entrepreneurServices[0],
    badge: 'Emprendedores',
  },
  {
    ...entrepreneurServices[1],
    badge: 'Ventas digitales',
  },
  {
    title: 'Datos y automatización',
    description: 'Procesos conectados, tableros y flujos inteligentes para operar con menos fricción.',
    icon: faDatabase,
    to: '/soluciones-empresariales/data-science',
    badge: 'Operación',
  },
]
