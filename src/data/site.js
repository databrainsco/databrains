/** Canonical site URL (custom domain). */
export const SITE_URL = 'https://www.data-brains.net'

export const SITE_NAME = 'DataBrains'

export const SITE_TAGLINE = 'Transformamos ideas en tecnología efectiva'

export const DEFAULT_DESCRIPTION =
  'Consultoría tecnológica para empresas y emprendedores: software a la medida, nube, DevOps, Data Science, IA, blockchain, sitios web, e-commerce y branding.'

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

export const ORGANIZATION = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/apple-touch-icon.png`,
  description: DEFAULT_DESCRIPTION,
  sameAs: [
    'https://www.linkedin.com/in/data-brains-87a008428/',
    'https://x.com/databrainsagent',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    availableLanguage: ['es'],
    url: `${SITE_URL}/contacto`,
  },
}

/** Routes for sitemap / AI discovery (exclude pure redirects if desired). */
export const PUBLIC_ROUTES = [
  { path: '/', title: 'Inicio', description: DEFAULT_DESCRIPTION, priority: '1.0' },
  {
    path: '/soluciones-empresariales',
    title: 'Soluciones Empresariales',
    description: 'Software, nube, DevOps, Data Science, IA, blockchain, consultoría y documentación.',
    priority: '0.9',
  },
  {
    path: '/soluciones-empresariales/software-a-la-medida',
    title: 'Software a la medida',
    description: 'Desarrollo de software personalizado para procesos y objetivos de negocio.',
    priority: '0.8',
  },
  {
    path: '/soluciones-empresariales/nube',
    title: 'Nube',
    description: 'Migración y optimización de infraestructura en la nube.',
    priority: '0.8',
  },
  {
    path: '/soluciones-empresariales/devops',
    title: 'DevOps',
    description: 'Automatización, CI/CD y entrega continua de software.',
    priority: '0.8',
  },
  {
    path: '/soluciones-empresariales/data-science',
    title: 'Data Science',
    description: 'Analítica, dashboards y modelos para decisiones basadas en datos.',
    priority: '0.8',
  },
  {
    path: '/soluciones-empresariales/ia',
    title: 'Inteligencia Artificial',
    description: 'Asistentes, predicción, visión por computadora y automatización con IA.',
    priority: '0.8',
  },
  {
    path: '/soluciones-empresariales/blockchain',
    title: 'Blockchain',
    description: 'Blockchain práctico para trazabilidad y procesos empresariales.',
    priority: '0.8',
  },
  {
    path: '/soluciones-empresariales/consultoria-empresarial',
    title: 'Consultoría Empresarial',
    description: 'Consultoría tecnológica para arquitectura, software, nube y datos.',
    priority: '0.6',
  },
  {
    path: '/soluciones-empresariales/documentacion',
    title: 'Documentación',
    description: 'Documentación técnica clara y mantenible para proyectos complejos.',
    priority: '0.6',
  },
  {
    path: '/emprendedores-m1b',
    title: 'Emprendedores M1B',
    description: 'Sitios web, tienda online, branding, landing pages e IA para emprendedores.',
    priority: '0.9',
  },
  {
    path: '/emprendedores-m1b/sitios-web-personalizados',
    title: 'Sitios Web personalizados',
    description: 'Sitios web modernos y optimizados para tu marca.',
    priority: '0.8',
  },
  {
    path: '/emprendedores-m1b/tienda-online',
    title: 'Tienda Online',
    description: 'E-commerce atractivo y listo para vender.',
    priority: '0.8',
  },
  {
    path: '/emprendedores-m1b/branding',
    title: 'Branding Digital',
    description: 'Identidad visual y presencia digital para tu negocio.',
    priority: '0.8',
  },
  {
    path: '/emprendedores-m1b/landing-page',
    title: 'Landing Pages',
    description: 'Landing pages estratégicas orientadas a conversión.',
    priority: '0.8',
  },
  {
    path: '/emprendedores-m1b/ia',
    title: 'IA para emprendedores',
    description: 'Inteligencia artificial práctica para ahorrar tiempo y crecer.',
    priority: '0.8',
  },
  {
    path: '/emprendedores-m1b/consultoria',
    title: 'Consultoría para emprendedores',
    description: 'Diagnóstico y estrategia digital para proyectos emprendedores.',
    priority: '0.8',
  },
  {
    path: '/blog-recursos',
    title: 'Blog / Recursos',
    description: 'Artículos, guías y recursos digitales de DataBrains.',
    priority: '0.5',
  },
  {
    path: '/blog-recursos/preguntas-frecuentes',
    title: 'Preguntas frecuentes',
    description: 'Respuestas sobre servicios, tiempos y procesos de trabajo.',
    priority: '0.5',
  },
  {
    path: '/blog-recursos/nosotros',
    title: 'Nosotros',
    description: 'Equipo, enfoque y forma de trabajo de DataBrains.',
    priority: '0.5',
  },
  {
    path: '/blog-recursos/historia',
    title: 'Historia',
    description: 'Historia y evolución de DataBrains.',
    priority: '0.4',
  },
  {
    path: '/blog-recursos/terminos-y-condiciones',
    title: 'Términos y condiciones',
    description: 'Términos y condiciones del sitio y servicios DataBrains.',
    priority: '0.3',
  },
  {
    path: '/blog-recursos/aviso-de-privacidad',
    title: 'Aviso de privacidad',
    description: 'Aviso de privacidad y tratamiento de datos personales.',
    priority: '0.3',
  },
  {
    path: '/contacto',
    title: 'Contacto',
    description: 'Contacta a DataBrains por WhatsApp para hablar de tu proyecto.',
    priority: '0.7',
  },
]
