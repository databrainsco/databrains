import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faBuilding,
  faBullseye,
  faCartShopping,
  faChartColumn,
  faChartLine,
  faClipboardCheck,
  faCloud,
  faCode,
  faCubes,
  faDatabase,
  faDiagramProject,
  faHeadset,
  faInfinity,
  faMicrochip,
  faRocket,
  faServer,
  faShieldHalved,
  faTowerBroadcast,
  faTruckFast,
  faUsersGear,
} from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/SEO'
import heroImage from '../assets/images/home-team-collaboration.jpg'
import ctaImage from '../assets/images/soluciones-cta.jpg'

const solutionItems = [
  {
    title: 'Creación de Software a la Medida - Inicio del viaje',
    description:
      'Empezamos diseñando las herramientas digitales que necesitas. Desde aplicaciones y sistemas hasta plataformas completas, todo hecho a la medida para impulsar tu negocio.',
    icon: faCode,
    visual: 'software',
  },
  {
    title: 'Optimización en la Nube - Escalabilidad y eficiencia',
    description:
      'Una vez que tienes tu software, lo llevamos a la nube para hacerlo accesible, escalable y más eficiente.',
    icon: faCloud,
    visual: 'cloud',
  },
  {
    title: 'DevOps - Automatización del flujo de trabajo',
    description:
      'Integramos equipos y automatizamos procesos para que puedas entregar actualizaciones rápidamente y sin interrupciones.',
    icon: faInfinity,
    visual: 'devops',
  },
  {
    title: 'Data Science - Convirtiendo datos en estrategia',
    description:
      'Analizamos tus datos para descubrir patrones, tendencias y oportunidades, ayudándote a tomar decisiones informadas.',
    icon: faChartColumn,
    visual: 'data',
  },
  {
    title: 'Inteligencia Artificial (IA) - El futuro a tu alcance',
    description:
      'Implementamos IA para que optimices tus procesos y aproveches nuevas oportunidades que te mantengan competitivo.',
    icon: faMicrochip,
    visual: 'ai',
  },
]

const processSteps = [
  {
    title: 'Diagnóstico inicial.',
    description: 'Examinamos las necesidades de tu empresa, evaluamos la situación actual y lo que deseas lograr.',
    icon: faBullseye,
  },
  {
    title: 'Desarrollo de estrategia.',
    description: 'Diseñamos un plan detallado, alineado a tus metas y adaptado a tu industria.',
    icon: faDiagramProject,
  },
  {
    title: 'Implementación técnica.',
    description: 'Llevamos a cabo la ejecución de la solución con calidad, garantizando alineación con tus objetivos establecidos.',
    icon: faCode,
  },
  {
    title: 'Evolución y soporte continuo.',
    description: 'Evaluamos los resultados, ajustamos la solución según sea necesario y aseguramos éxito a largo plazo.',
    icon: faHeadset,
  },
]

const successCases = [
  {
    title: 'Telecomunicaciones',
    icon: faTowerBroadcast,
    intro: 'Transformación de la atención al cliente.',
    bullets: [
      'Chatbot IA para soporte técnico.',
      'Coreapps.',
      'Reducción del tiempo de respuesta.',
      '+40% de clientes satisfechos.',
      'Solución flexible y escalable 3 regiones.',
    ],
    result: '-18%',
    resultText: 'Reducción de costos operativos',
  },
  {
    title: 'Recursos Humanos',
    icon: faUsersGear,
    intro: 'Innovación para la gestión de talento.',
    bullets: [
      'Migración a la nube de SAP.',
      'App de Vacaciones y Beneficios.',
      '+35% tiempo promedio en procesos administrativos.',
      'Datos en tiempo real para toma de decisiones.',
      'Beneficios según ubicación.',
    ],
    result: '+32%',
    resultText: 'Mejora en eficiencia de operaciones',
  },
  {
    title: 'Retail',
    icon: faCartShopping,
    intro: 'Eficiencia y personalización en el comercio.',
    bullets: [
      'Sistema de inventario unificado en tiempo real.',
      'Plataforma de e-commerce con IA recomendadora.',
      '+25% en ventas por estrategia personalizada.',
      'Integración de marketplaces y medios de pago.',
    ],
    result: '-24%',
    resultText: 'Incremento en ventas online',
  },
  {
    title: 'Logística y Transporte',
    icon: faTruckFast,
    intro: 'Optimización de rutas y operaciones de flota.',
    bullets: [
      'IoT para monitoreo vehicular.',
      'Sistema de rutas inteligentes con IA.',
      '-30% en costos de combustible.',
      'Consola de control en tiempo real.',
      'Alertas de fallas y mantenimiento predictivo.',
    ],
    result: '+30%',
    resultText: 'Mejora en eficiencia de rutas',
  },
]

function WavePattern({ className = '' }) {
  return (
    <svg className={`pointer-events-none absolute text-databrains-aqua/20 ${className}`} viewBox="0 0 420 250" fill="none" aria-hidden="true">
      {Array.from({ length: 14 }).map((_, index) => (
        <path
          key={index}
          d={`M0 ${205 - index * 12}C90 ${120 - index * 4} 180 ${278 + index * 4} 420 ${72 + index * 7}`}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  )
}

function SectionTitle({ children }) {
  return (
    <div className="text-center">
      <h2 className="font-heading text-[22px] font-extrabold leading-tight text-databrains-slate md:text-[22px] lg:text-[34px]">{children}</h2>
      <div className="mx-auto mt-2 h-1 w-9 rounded-full bg-databrains-aqua lg:mt-3 lg:w-11" />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-visible bg-white px-5 pb-6 pt-9 min-[860px]:px-10 min-[860px]:pb-5 min-[860px]:pt-1 lg:px-8 lg:pb-14 lg:pt-20">
      <WavePattern className="left-[42%] top-[225px] h-72 w-[430px] min-[860px]:top-[178px] lg:top-[225px]" />
      <div className="relative z-10 mx-auto grid max-w-[1320px] items-center gap-8 min-[860px]:grid-cols-[0.88fr_1fr] min-[860px]:gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
        <div className="min-[860px]:pt-5 lg:pt-0">
          <h1 className="font-heading text-[38px] font-extrabold leading-[1.05] md:text-[36px] lg:text-[64px]">
            <span className="text-databrains-teal">Soluciones</span>
            <br />
            <span className="text-databrains-slate">Empresariales</span>
          </h1>
          <div className="mt-3 h-1 w-10 rounded-full bg-databrains-aqua lg:mt-5 lg:w-14" />
          <h2 className="mt-5 font-heading text-[17px] font-extrabold text-databrains-slate lg:mt-8 lg:text-2xl">Tu transformación tecnológica</h2>
          <p className="mt-3 max-w-[520px] text-[13px] leading-6 text-databrains-slate/80 lg:mt-5 lg:text-lg lg:leading-8">
            Creamos soluciones integrales que impulsan la eficiencia, optimizan procesos y generan valor sostenible para tu empresa.
          </p>
          <Link
            to="/contacto"
            className="mt-4 inline-flex items-center justify-center gap-3 rounded-md bg-databrains-coral px-5 py-3 text-xs font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral focus-visible:ring-offset-2 lg:mt-8 lg:px-8 lg:py-4 lg:text-base"
          >
            Solicita una consulta gratuita
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-xl shadow-[0_22px_48px_rgba(49,69,78,0.18)]">
            <img
              src={heroImage}
              alt="Equipo empresarial revisando soluciones tecnológicas en una laptop"
              className="h-[292px] w-full object-cover lg:h-[420px]"
            />
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white/45 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-2 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-databrains-teal to-databrains-aqua text-3xl text-white shadow-xl lg:-bottom-9 lg:h-28 lg:w-28 lg:rounded-xl lg:text-5xl">
            <FontAwesomeIcon icon={faBuilding} />
          </div>
        </div>
      </div>
    </section>
  )
}

function ServerStack() {
  return (
    <div className="space-y-2">
      {[0, 1, 2].map((item) => (
        <div key={item} className="h-7 rounded border border-databrains-aqua/40 bg-databrains-lightGray" />
      ))}
    </div>
  )
}

function TechVisual({ type }) {
  if (type === 'software') {
    return (
      <div className="grid h-full max-h-[104px] grid-cols-[1fr_1.2fr] overflow-hidden rounded-lg bg-[#0f2433]">
        <div className="space-y-1.5 overflow-hidden p-3 text-[8px] leading-none text-white/80">
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index}>
              <span className="text-databrains-aqua">const</span> service{index + 1} = <span className="text-databrains-yellow">"ready"</span>
            </div>
          ))}
        </div>
        <div className="m-2 rounded bg-white p-2">
          <div className="mb-2 h-2 w-20 rounded bg-databrains-aqua/60" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-12 rounded border border-gray-200 bg-databrains-lightGray" />
            <div className="h-12 rounded border border-gray-200 bg-databrains-paleCyan/45" />
            <div className="col-span-2 h-5 rounded bg-databrains-teal/20" />
          </div>
        </div>
      </div>
    )
  }

  if (type === 'cloud') {
    return (
      <div className="flex h-full max-h-[104px] items-center justify-center rounded-lg bg-white">
        <div className="grid w-full grid-cols-[1fr_1.4fr_1fr] items-center gap-4 px-5">
          <ServerStack />
          <div className="relative flex h-20 items-center justify-center">
            <div className="absolute h-px w-full bg-databrains-aqua/50" />
            <FontAwesomeIcon icon={faCloud} className="relative z-10 rounded-full bg-databrains-paleCyan p-4 text-4xl text-databrains-teal" />
          </div>
          <ServerStack />
        </div>
      </div>
    )
  }

  if (type === 'devops') {
    const steps = ['Code', 'Build', 'Test', 'Deploy', 'Monitor']
    const icons = [faCode, faServer, faClipboardCheck, faRocket, faChartLine]

    return (
      <div className="flex h-full max-h-[104px] items-center justify-center rounded-lg bg-white px-2 lg:px-4">
        <div className="flex w-full items-center justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={step}>
              <div className="text-center">
                <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-databrains-teal text-[10px] text-white lg:h-9 lg:w-9 lg:text-sm">
                  <FontAwesomeIcon icon={icons[index]} />
                </div>
                <div className="mt-1.5 text-[10px] font-bold text-databrains-slate lg:mt-2 lg:text-xs">{step}</div>
              </div>
              {index < steps.length - 1 && <div className="mx-1 h-px flex-1 border-t border-dashed border-databrains-aqua lg:mx-2" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'data') {
    return (
      <div className="grid h-full max-h-[104px] grid-cols-[1.3fr_0.8fr] gap-2 rounded-lg bg-white p-2 lg:gap-3 lg:p-3">
        <svg viewBox="0 0 220 86" className="h-10 w-full text-databrains-teal lg:h-16" fill="none" aria-hidden="true">
          <path d="M10 70L48 45L84 56L122 28L162 43L210 16" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 78H210" stroke="#E6EEF0" strokeWidth="2" />
        </svg>
        <div className="flex items-center justify-center">
          <div className="h-12 w-12 rounded-full border-[10px] border-databrains-paleCyan border-r-databrains-teal lg:h-16 lg:w-16 lg:border-[14px]" />
        </div>
        <div className="col-span-2 grid grid-cols-3 gap-2 text-center text-[10px] font-bold leading-none text-databrains-slate lg:text-xs">
          <span>+42%</span>
          <span>+18%</span>
          <span>+120%</span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full max-h-[104px] overflow-hidden rounded-lg bg-[#062b3a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(102,202,210,0.32),transparent_58%)]" />
      <svg viewBox="0 0 360 140" className="relative z-10 h-full w-full text-databrains-aqua" fill="none" aria-hidden="true">
        <path d="M120 80C116 42 154 26 182 46C205 18 250 39 243 79C263 89 258 120 230 119H138C107 119 96 91 120 80Z" stroke="currentColor" strokeWidth="3" />
        {Array.from({ length: 18 }).map((_, index) => (
          <circle key={index} cx={70 + (index * 31) % 230} cy={25 + (index * 19) % 95} r="3" fill="currentColor" opacity="0.75" />
        ))}
        <path d="M150 73H215M181 48V107M135 92H235" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function SolutionsTimeline() {
  return (
    <section className="border-t border-gray-200 bg-white px-5 py-5 min-[860px]:px-10 min-[860px]:pb-1 min-[860px]:pt-4 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-[760px] lg:max-w-[1120px]">
        <SectionTitle>Nuestras soluciones tecnológicas</SectionTitle>
        <div className="mt-5 grid items-start gap-7 md:grid-cols-[390px_246px] md:gap-[63px] lg:mt-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div className="relative">
            <div className="absolute left-6 top-5 hidden h-[calc(100%-32px)] w-px bg-gray-300 sm:block lg:left-8 lg:top-6 lg:h-[calc(100%-42px)]" />
            {solutionItems.map((item) => (
              <div key={item.title} className="relative grid grid-cols-[52px_1fr] gap-4 pb-3 last:pb-0 lg:grid-cols-[64px_1fr] lg:gap-6 lg:pb-10">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-xl text-databrains-teal shadow-sm lg:h-16 lg:w-16 lg:text-2xl">
                  <FontAwesomeIcon icon={item.icon} className="shrink-0" />
                </div>
                <div className="min-w-0 pt-1">
                  <h3 className="font-heading text-[13px] font-extrabold leading-5 text-databrains-teal lg:text-xl lg:leading-7">{item.title}</h3>
                  <p className="mt-1 max-w-[560px] text-[11px] leading-4 text-databrains-slate/85 lg:mt-2 lg:text-base lg:leading-7">{item.description}</p>
                </div>
              </div>
            ))}
            <div className="absolute bottom-0 left-[21px] hidden h-2 w-2 rounded-full bg-databrains-slate/55 sm:block lg:left-[29px]" />
          </div>

          <div className="space-y-2 pt-1 lg:space-y-5">
            {solutionItems.map((item) => (
              <div key={item.visual} className="h-[72px] max-h-[72px] overflow-hidden rounded-lg border border-gray-200 bg-white p-1.5 shadow-[0_10px_24px_rgba(49,69,78,0.08)] lg:h-[104px] lg:max-h-[104px] lg:p-2">
                <TechVisual type={item.visual} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="bg-white px-5 pb-3 pt-1 min-[860px]:px-10 min-[860px]:pb-2 min-[860px]:pt-1 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle>Proceso de trabajo profesionalizado</SectionTitle>
        <div className="mt-3 grid gap-3 md:grid-cols-4 lg:mt-8 lg:gap-5">
          {processSteps.map((step) => (
            <article key={step.title} className="h-[145px] overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-[0_10px_26px_rgba(49,69,78,0.08)] lg:h-auto lg:min-h-[215px] lg:p-8">
              <FontAwesomeIcon icon={step.icon} className="text-[30px] text-databrains-teal lg:text-5xl" />
              <h3 className="mt-2 font-heading text-[11px] font-extrabold leading-4 text-databrains-slate lg:mt-7 lg:text-lg lg:leading-tight">{step.title}</h3>
              <p className="mt-1.5 text-[8px] leading-[11px] text-databrains-slate/75 lg:mt-4 lg:text-sm lg:leading-6">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SuccessCasesSection() {
  return (
    <section className="bg-white px-5 py-3 lg:px-8 lg:py-4">
      <div className="mx-auto h-[270px] max-w-[1320px] overflow-hidden rounded-xl bg-gradient-to-r from-[#087f8d] to-[#16aeba] px-7 py-4 text-white shadow-[0_16px_34px_rgba(8,127,141,0.22)] lg:h-auto lg:px-8 lg:py-8">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-extrabold lg:text-4xl">Casos de éxito</h2>
          <div className="mx-auto mt-2 h-1 w-9 rounded-full bg-white/80 lg:mt-3 lg:w-10" />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-4 lg:mt-8 lg:gap-7">
          {successCases.map((item) => (
            <article key={item.title} className="flex h-full flex-col">
              <div className="flex items-start gap-3 lg:items-center lg:gap-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 text-base lg:h-16 lg:w-16 lg:text-3xl">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div>
                  <h3 className="font-heading text-[13px] font-extrabold leading-4 lg:text-xl lg:leading-tight">{item.title}</h3>
                  <p className="mt-1 text-[10px] leading-3 text-white/90 lg:mt-2 lg:text-sm lg:leading-5">{item.intro}</p>
                </div>
              </div>
              <ul className="mt-2 flex-1 space-y-0.5 pl-4 text-[9px] leading-3 text-white/90 lg:mt-4 lg:space-y-1.5 lg:pl-5 lg:text-sm lg:leading-5">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="list-disc">{bullet}</li>
                ))}
              </ul>
              <div className="mt-2 flex min-h-[44px] items-center gap-3 rounded-lg bg-white/12 px-3 lg:mt-7 lg:min-h-[70px] lg:gap-4 lg:px-5">
                <div className="font-heading text-2xl font-extrabold lg:text-4xl">{item.result}</div>
                <div className="text-[9px] font-bold leading-3 text-white/90 lg:text-sm lg:leading-5">{item.resultText}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="bg-white px-5 py-3 min-[860px]:px-7 lg:px-8 lg:py-10">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-xl bg-gradient-to-r from-[#087b88] to-[#12a7b5] text-white shadow-[0_18px_38px_rgba(8,123,136,0.2)]">
        <img
          src={ctaImage}
          alt="Profesional trabajando con laptop en entorno tecnológico empresarial"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#087b88] via-[#0b8d99]/85 to-transparent" />
        <div className="relative z-10 grid min-h-[213px] items-center gap-8 px-8 py-4 lg:min-h-[330px] lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-10">
          <div>
            <h2 className="font-heading text-[27px] font-extrabold leading-tight md:text-[27px] lg:text-5xl">
              ¿Listo para transformar
              <br />
              tu empresa?
            </h2>
            <div className="mt-2 h-1 w-10 rounded-full bg-white lg:mt-5 lg:w-12" />
            <p className="mt-4 max-w-[500px] text-[13px] leading-5 text-white/92 lg:mt-8 lg:text-lg lg:leading-8">
              Hablemos de cómo nuestras soluciones tecnológicas pueden llevar tu negocio al siguiente nivel.
            </p>
            <Link
              to="/contacto"
              className="mt-4 inline-flex items-center justify-center gap-3 rounded-md bg-databrains-coral px-5 py-3 text-xs font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white lg:mt-8 lg:px-8 lg:py-4 lg:text-lg"
            >
              Agenda una consulta gratuita
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className="hidden justify-end pr-4 lg:flex">
            <div className="grid grid-cols-2 gap-10 text-databrains-teal">
              {[faCloud, faShieldHalved, faChartColumn, faDatabase].map((icon) => (
                <div key={icon.iconName} className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl shadow-lg">
                  <FontAwesomeIcon icon={icon} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function SolucionesEmpresariales() {
  return (
    <>
      <SEO
        title="Soluciones Empresariales | DataBrains"
        description="Soluciones empresariales de DataBrains en software, nube, DevOps, Data Science, inteligencia artificial, blockchain, consultoría y documentación técnica para modernizar empresas."
      />
      <main className="overflow-x-hidden bg-white">
        <HeroSection />
        <SolutionsTimeline />
        <ProcessSection />
        <SuccessCasesSection />
        <FinalCTA />
      </main>
    </>
  )
}
