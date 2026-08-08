import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faBullseye,
  faChartColumn,
  faChevronRight,
  faCircleCheck,
  faClock,
  faComments,
  faDiagramProject,
  faLightbulb,
  faMagnifyingGlass,
  faPenToSquare,
  faRobot,
  faRocket,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/SEO'
import Carousel from '../components/Carousel'
import heroImage from '../assets/images/pages/emprendedores/ia/hero.jpg'
import usecase1 from '../assets/images/pages/emprendedores/ia/usecase-1.jpg'
import usecase2 from '../assets/images/pages/emprendedores/ia/usecase-2.jpg'
import usecase3 from '../assets/images/pages/emprendedores/ia/usecase-3.jpg'
import pain1 from '../assets/images/pages/emprendedores/ia/pain-1.jpg'
import pain2 from '../assets/images/pages/emprendedores/ia/pain-2.jpg'
import pain3 from '../assets/images/pages/emprendedores/ia/pain-3.jpg'
import pain4 from '../assets/images/pages/emprendedores/ia/pain-4.jpg'
import ctaRocket from '../assets/images/pages/emprendedores/ia/cta-rocket.webp'

const helpItems = [
  {
    title: 'Crear contenido más rápido',
    description: 'Ideas, textos y publicaciones para redes sin empezar desde cero.',
    icon: faPenToSquare,
  },
  {
    title: 'Atender mejor a tus clientes',
    description: 'Respuestas claras a dudas frecuentes y seguimiento más ágil.',
    icon: faComments,
  },
  {
    title: 'Ahorrar tiempo en tareas repetitivas',
    description: 'Automatiza lo que haces una y otra vez para enfocarte en vender.',
    icon: faClock,
  },
  {
    title: 'Entender mejor tu negocio',
    description: 'Ordena información y detecta patrones para decidir con más claridad.',
    icon: faChartColumn,
  },
  {
    title: 'Organizar tus ideas y procesos',
    description: 'Estructura lo que ya haces para operar con menos caos diario.',
    icon: faDiagramProject,
  },
]

const useCases = [
  {
    image: usecase1,
    overlay: 'Contenido generado: ideas para 3 publicaciones en redes.',
  },
  {
    image: usecase2,
    overlay: 'Respuesta sugerida: “Sí, tenemos disponibilidad para mañana.”',
  },
  {
    image: usecase3,
    overlay: 'Vista clara de ventas, consultas e inventario.',
  },
]

const startSteps = [
  {
    title: 'Analizamos tu negocio',
    description: 'Entendemos cómo operas hoy y dónde se va tu tiempo.',
    icon: faMagnifyingGlass,
  },
  {
    title: 'Detectamos tareas repetitivas y oportunidades',
    description: 'Identificamos qué se puede simplificar con IA de forma realista.',
    icon: faLightbulb,
  },
  {
    title: 'Recomendamos herramientas y automatizaciones simples',
    description: 'Te proponemos un camino claro, útil y fácil de aplicar.',
    icon: faRocket,
  },
]

const painPoints = [
  { image: pain1, quote: 'Paso mucho tiempo contestando lo mismo.' },
  { image: pain2, quote: 'No sé qué publicar en mis redes.' },
  { image: pain3, quote: 'Tengo mucha información, pero no sé cómo organizarla.' },
  { image: pain4, quote: 'Necesito hacer más, pero aún no puedo contratar gente.' },
]

const helpList = [
  'Identificar oportunidades de IA en tu negocio',
  'Elegir las herramientas adecuadas',
  'Crear prompts y plantillas a tu medida',
  'Automatizar procesos simples',
  'Capacitación para usar las herramientas',
  'Diseñar soluciones personalizadas',
]

function SectionHeading({ children }) {
  return (
    <div className="text-center">
      <h2 className="font-heading text-3xl font-extrabold text-databrains-slate md:text-4xl">{children}</h2>
      <div className="mx-auto mt-4 h-1 w-11 rounded-full bg-databrains-coral" />
    </div>
  )
}

function DashboardCard() {
  return (
    <div className="w-[220px] rounded-2xl border border-white/60 bg-white/95 p-4 shadow-[0_16px_36px_rgba(49,69,78,0.18)] backdrop-blur">
      <p className="text-xs font-extrabold text-databrains-slate">Dashboard</p>
      <div className="mt-3 space-y-2 text-[11px]">
        <div className="flex items-center justify-between rounded-lg bg-[#ecf7f9] px-2.5 py-2">
          <span className="text-databrains-slate/70">Ventas</span>
          <span className="font-bold text-databrains-teal">+18%</span>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-[#ecf7f9] px-2.5 py-2">
          <span className="text-databrains-slate/70">Consultas</span>
          <span className="font-bold text-databrains-slate">128</span>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-[#ecf7f9] px-2.5 py-2">
          <span className="text-databrains-slate/70">Inventario</span>
          <span className="font-bold text-databrains-coral">Bajo</span>
        </div>
      </div>
      <svg className="mt-3 h-10 w-full text-databrains-teal" viewBox="0 0 180 40" fill="none" aria-hidden="true">
        <path d="M0 30C20 28 30 18 50 20C70 22 80 10 100 12C120 14 130 24 150 16C160 12 170 8 180 6" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    </div>
  )
}

export default function IAM1B() {
  return (
    <>
      <SEO
        title="IA para emprendedores | DataBrains"
        description="La inteligencia artificial también puede trabajar para tu negocio. Te ayudamos a usar IA para ahorrar tiempo y crecer, sin ser una gran empresa ni saber programar."
      />
      <main className="overflow-x-hidden bg-white">
        <section className="bg-white px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div>
              <span className="inline-flex rounded-full bg-[#ecf7f9] px-4 py-1.5 text-xs font-extrabold text-databrains-teal">
                IA para emprendedores
              </span>
              <h1 className="mt-5 font-heading text-[2rem] font-extrabold leading-tight text-databrains-slate md:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
                La inteligencia artificial también puede trabajar para tu negocio
              </h1>
              <div className="mt-4 h-1 w-14 rounded-full bg-databrains-coral" />
              <p className="mt-6 max-w-xl text-base leading-7 text-databrains-slate/80 lg:text-lg lg:leading-8">
                No necesitas ser una gran empresa ni saber programar. Te ayudamos a usar IA para ahorrar tiempo y crecer.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-databrains-teal px-7 py-3.5 text-sm font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-databrains-teal/90 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-teal focus-visible:ring-offset-2"
                >
                  Quiero descubrir cómo usar IA en mi negocio
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                <a
                  href="#ejemplos"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-databrains-teal px-7 py-3.5 text-sm font-extrabold text-databrains-teal transition duration-300 hover:bg-[#ecf7f9] focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-teal focus-visible:ring-offset-2"
                >
                  Ver ejemplos
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-[0_18px_40px_rgba(49,69,78,0.14)]">
                <img
                  src={heroImage}
                  alt="Emprendedora usando laptop en su negocio"
                  width={960}
                  height={640}
                  decoding="async"
                  fetchPriority="high"
                  className="h-auto w-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 left-3 z-10 sm:bottom-6 sm:left-5">
                <DashboardCard />
              </div>
              <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-databrains-teal text-xl text-white shadow-lg sm:right-6 sm:top-6 sm:h-14 sm:w-14">
                <FontAwesomeIcon icon={faComments} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-[1320px]">
            <SectionHeading>¿En qué puede ayudarte la IA?</SectionHeading>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {helpItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-[0_10px_26px_rgba(49,69,78,0.08)]"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#ecf7f9] text-xl text-databrains-teal">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <h3 className="mt-4 font-heading text-sm font-extrabold leading-snug text-databrains-slate">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-databrains-slate/70">{item.description}</p>
                </article>
              ))}
            </div>

            <div id="ejemplos" className="mt-10 grid scroll-mt-24 gap-5 md:grid-cols-3">
              {useCases.map((item) => (
                <article key={item.overlay} className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_30px_rgba(49,69,78,0.1)]">
                  <div className="relative aspect-[4/3]">
                    <img src={item.image} alt="" className="h-full w-full object-cover object-center" loading="lazy" />
                    <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white/95 px-3 py-2.5 text-xs font-semibold leading-5 text-databrains-slate shadow-md backdrop-blur">
                      {item.overlay}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7f8] px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
            <div>
              <h2 className="font-heading text-3xl font-extrabold leading-snug text-databrains-slate md:text-4xl">
                La IA no sustituye tu experiencia
              </h2>
              <div className="mt-4 h-1 w-11 rounded-full bg-databrains-coral" />
              <p className="mt-5 text-base leading-7 text-databrains-slate/80">
                Es una herramienta de apoyo para potenciar tus decisiones, ahorrar tiempo y hacer más con lo que ya
                sabes de tu negocio.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <div className="flex w-[140px] flex-col items-center rounded-2xl bg-white p-5 text-center shadow-[0_10px_26px_rgba(49,69,78,0.08)]">
                <FontAwesomeIcon icon={faUser} className="text-2xl text-databrains-teal" />
                <p className="mt-3 text-sm font-extrabold text-databrains-slate">Tu experiencia</p>
              </div>
              <span className="text-2xl font-extrabold text-databrains-teal">+</span>
              <div className="flex w-[140px] flex-col items-center rounded-2xl bg-white p-5 text-center shadow-[0_10px_26px_rgba(49,69,78,0.08)]">
                <FontAwesomeIcon icon={faRobot} className="text-2xl text-databrains-teal" />
                <p className="mt-3 text-sm font-extrabold text-databrains-slate">Herramientas de IA</p>
              </div>
              <span className="text-2xl font-extrabold text-databrains-teal">=</span>
              <div className="flex w-[140px] flex-col items-center rounded-2xl bg-white p-5 text-center shadow-[0_10px_26px_rgba(49,69,78,0.08)]">
                <FontAwesomeIcon icon={faBullseye} className="text-2xl text-databrains-teal" />
                <p className="mt-3 text-sm font-extrabold text-databrains-slate">Mejores decisiones</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-[1100px]">
            <SectionHeading>¿Por dónde empezar?</SectionHeading>

            <div className="mt-12 hidden items-start justify-between lg:flex">
              {startSteps.map((step, index) => (
                <React.Fragment key={step.title}>
                  <article className="flex w-[28%] flex-col items-center text-center">
                    <div className="relative">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-databrains-teal bg-white text-3xl text-databrains-teal shadow-sm">
                        <FontAwesomeIcon icon={step.icon} />
                      </div>
                      <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-databrains-coral text-xs font-extrabold text-white">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-base font-extrabold text-databrains-slate">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-databrains-slate/70">{step.description}</p>
                  </article>
                  {index < startSteps.length - 1 && (
                    <div className="mt-8 flex shrink-0 items-center text-databrains-teal/40" aria-hidden="true">
                      <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
                      <FontAwesomeIcon icon={faChevronRight} className="-ml-1.5 text-sm opacity-55" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-3 lg:hidden">
              {startSteps.map((step, index) => (
                <article key={step.title} className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
                  <p className="text-xs font-bold text-databrains-coral">{index + 1}</p>
                  <div className="mx-auto mt-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-databrains-teal text-xl text-databrains-teal">
                    <FontAwesomeIcon icon={step.icon} />
                  </div>
                  <h3 className="mt-3 font-heading text-sm font-extrabold text-databrains-slate">{step.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-databrains-slate/70">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7f8] px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-[1320px]">
            <SectionHeading>¿La IA es para mi emprendimiento?</SectionHeading>
            <div className="mt-10">
              <Carousel slideClassName="w-[78%] flex-shrink-0 snap-start sm:w-[46%] lg:w-[23%]" gapClassName="gap-5">
                {painPoints.map((item) => (
                  <article key={item.quote} className="relative overflow-hidden rounded-2xl shadow-[0_12px_30px_rgba(49,69,78,0.12)]">
                    <div className="aspect-[3/4]">
                      <img src={item.image} alt="" className="h-full w-full object-cover object-center" loading="lazy" />
                    </div>
                    <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-databrains-slate/92 px-4 py-3 text-sm font-semibold leading-5 text-white shadow-lg">
                      “{item.quote}”
                    </div>
                  </article>
                ))}
              </Carousel>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-[900px]">
            <SectionHeading>Podemos ayudarte a:</SectionHeading>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {helpList.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-[0_8px_22px_rgba(49,69,78,0.06)]">
                  <span className="mt-0.5 text-databrains-teal">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  <span className="text-sm font-semibold leading-6 text-databrains-slate sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#ecf7f9] px-5 py-14 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-16 top-6 h-52 w-[420px] rounded-full bg-databrains-aqua/20 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-44 w-[380px] rounded-full bg-databrains-paleCyan/60 blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto flex max-w-[1100px] flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="w-[70%] max-w-[280px] lg:w-[32%]">
              <img src={ctaRocket} alt="" className="h-auto w-full object-contain" loading="lazy" decoding="async" />
            </div>
            <div className="max-w-xl text-center lg:max-w-[560px] lg:text-left">
              <p className="font-heading text-2xl font-extrabold leading-snug text-databrains-slate md:text-3xl">
                Empecemos con un problema real
              </p>
              <p className="mt-4 text-base leading-7 text-databrains-slate/80">
                Cuéntanos qué tarea te toma más tiempo hoy. Te mostraremos cómo la IA puede ayudarte a resolverla.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-databrains-coral px-7 py-3.5 text-sm font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral focus-visible:ring-offset-2"
                >
                  Quiero descubrir cómo usar IA en mi negocio
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-databrains-teal bg-white px-7 py-3.5 text-sm font-extrabold text-databrains-teal transition duration-300 hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-teal focus-visible:ring-offset-2"
                >
                  <FontAwesomeIcon icon={faComments} />
                  Hablar con DataBrains
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
