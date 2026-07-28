import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faBullseye,
  faChevronRight,
  faClipboardList,
  faRocket,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/SEO'
import heroImage from '../assets/images/pages/landing/hero.jpg'
import feature1 from '../assets/images/pages/landing/feature-1.png'
import feature2 from '../assets/images/pages/landing/feature-2.png'
import feature3 from '../assets/images/pages/landing/feature-3.png'
import feature4 from '../assets/images/pages/landing/feature-4.png'
import usecase1 from '../assets/images/pages/landing/usecase-1.jpg'
import usecase2 from '../assets/images/pages/landing/usecase-2.jpg'
import usecase3 from '../assets/images/pages/landing/usecase-3.jpg'
import usecase4 from '../assets/images/pages/landing/usecase-4.jpg'
import ctaDevices from '../assets/images/pages/landing/cta-devices.png'

const features = [
  {
    title: 'Diseño enfocado en conversiones',
    description: 'Cada elemento está pensado para guiar al usuario hacia la acción deseada.',
    image: feature1,
    to: '/blog-recursos/diseno-enfocado-en-conversiones',
  },
  {
    title: 'Velocidad y optimización',
    description: 'Nuestras páginas cargan rápido y funcionan en cualquier dispositivo.',
    image: feature2,
    to: '/blog-recursos/velocidad-y-optimizacion',
  },
  {
    title: 'Integración con herramientas clave',
    description: 'Conectamos tu landing page con herramientas como formularios, CRMs y analíticas.',
    image: feature3,
    to: '/blog-recursos/integracion-con-herramientas-clave',
  },
  {
    title: 'Personalización total',
    description: 'Diseñamos según tus necesidades específicas, desde promociones hasta captación de leads.',
    image: feature4,
    to: '/blog-recursos/personalizacion-total',
  },
]

const processSteps = [
  { title: 'Analizamos tu objetivo', icon: faBullseye },
  { title: 'Diseñamos la experiencia', icon: faClipboardList },
  { title: 'Optimizamos la interacción', icon: faWandMagicSparkles },
  { title: 'Lanzamos y medimos resultados', icon: faRocket },
]

const useCases = [
  {
    title: 'Promoción de productos o servicios específicos.',
    image: usecase1,
    to: '/blog-recursos/promocion-de-productos-o-servicios',
  },
  {
    title: 'Inscripciones a webinars o eventos.',
    image: usecase2,
    to: '/blog-recursos/inscripciones-a-webinars-o-eventos',
  },
  {
    title: 'Campañas publicitarias dirigidas.',
    image: usecase3,
    to: '/blog-recursos/campanas-publicitarias-dirigidas',
  },
  {
    title: 'Lanzamiento de nuevos proyectos o startups.',
    image: usecase4,
    to: '/blog-recursos/lanzamiento-de-nuevos-proyectos',
  },
]

function WavePattern({ className = '' }) {
  return (
    <svg className={`pointer-events-none absolute text-databrains-aqua/20 ${className}`} viewBox="0 0 520 260" fill="none" aria-hidden="true">
      {Array.from({ length: 12 }).map((_, index) => (
        <path
          key={index}
          d={`M0 ${210 - index * 13}C120 ${120 - index * 3} 240 ${280 + index * 8} 520 ${55 + index * 6}`}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  )
}

function FeatureCard({ title, description, image, to }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_10px_26px_rgba(49,69,78,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(49,69,78,0.12)]">
      <div className="flex aspect-[4/3] items-center justify-center bg-[#f4f7f8] p-3 sm:aspect-[5/4] sm:p-4">
        <img src={image} alt={title} className="h-full w-full object-contain object-center" loading="lazy" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-base font-extrabold leading-snug text-databrains-slate">
          <Link
            to={to}
            className="transition duration-300 hover:text-databrains-teal focus:outline-none focus-visible:text-databrains-teal focus-visible:underline"
          >
            {title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-6 text-databrains-slate/75">{description}</p>
      </div>
    </article>
  )
}

function UseCaseCard({ title, image, to }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_26px_rgba(49,69,78,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(49,69,78,0.12)]">
      <div className="grid sm:grid-cols-[0.95fr_1.05fr]">
        <div className="aspect-[16/10] bg-slate-100 sm:aspect-auto sm:min-h-[180px]">
          <img src={image} alt={title} className="h-full w-full object-cover object-center" loading="lazy" />
        </div>
        <div className="flex items-center p-5 sm:p-6">
          <h3 className="font-heading text-base font-extrabold leading-snug text-databrains-slate sm:text-lg">
            <Link
              to={to}
              className="transition duration-300 hover:text-databrains-teal focus:outline-none focus-visible:text-databrains-teal focus-visible:underline"
            >
              {title}
            </Link>
          </h3>
        </div>
      </div>
    </article>
  )
}

export default function LandingPage() {
  return (
    <>
      <SEO
        title="Landing Pages | DataBrains"
        description="Landing pages estratégicas que convierten visitantes en leads y clientes."
      />
      <main className="overflow-x-hidden bg-white">
        <section className="relative overflow-hidden bg-white px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
          <WavePattern className="left-[38%] top-24 hidden h-72 w-[480px] lg:block" />
          <div className="relative z-10 mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
            <div>
              <h1 className="font-heading text-[2rem] font-extrabold leading-tight text-databrains-slate md:text-4xl lg:text-[2.75rem]">
                Landing Pages
              </h1>
              <div className="mt-4 h-1 w-14 rounded-full bg-databrains-coral" />
              <p className="mt-6 max-w-xl text-base leading-7 text-databrains-slate/80 lg:text-lg lg:leading-8">
                Diseñamos landing pages estratégicas que convierten visitantes en leads y clientes. Enfocadas en
                resultados, rápidas y optimizadas para impulsar tu crecimiento.
              </p>
              <Link
                to="/contacto"
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-md bg-databrains-teal px-7 py-3.5 text-sm font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-databrains-teal/90 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-teal focus-visible:ring-offset-2"
              >
                Conoce más
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={heroImage}
                  alt="Escritorio con laptop mostrando una landing page estratégica"
                  className="h-auto w-full object-cover object-center"
                />
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white via-white/40 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-white via-white/50 to-transparent" />
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7f8] px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-[1100px]">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-extrabold text-databrains-slate md:text-4xl">Nuestro proceso</h2>
              <div className="mx-auto mt-4 h-1 w-11 rounded-full bg-databrains-coral" />
            </div>

            <div className="mt-12 hidden items-start justify-between lg:flex">
              {processSteps.map((step, index) => (
                <React.Fragment key={step.title}>
                  <article className="flex w-[20%] flex-col items-center text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-3xl text-databrains-teal shadow-[0_10px_28px_rgba(49,69,78,0.1)] ring-1 ring-gray-100">
                      <FontAwesomeIcon icon={step.icon} />
                    </div>
                    <h3 className="mt-4 font-heading text-sm font-extrabold leading-snug text-databrains-slate">
                      {step.title}
                    </h3>
                  </article>
                  {index < processSteps.length - 1 && (
                    <div className="mt-8 flex shrink-0 items-center text-databrains-teal/45" aria-hidden="true">
                      <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
                      <FontAwesomeIcon icon={faChevronRight} className="-ml-1.5 text-sm opacity-55" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:hidden">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-[0_8px_22px_rgba(49,69,78,0.06)]"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl text-databrains-teal shadow-[0_8px_20px_rgba(49,69,78,0.08)] ring-1 ring-gray-100">
                    <FontAwesomeIcon icon={step.icon} />
                  </div>
                  <p className="mt-3 text-xs font-bold text-databrains-teal">{index + 1}</p>
                  <h3 className="mt-1 font-heading text-base font-extrabold text-databrains-slate">{step.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 pb-12 pt-4 min-[860px]:px-10 lg:px-8 lg:pb-16">
          <div className="mx-auto max-w-[1100px]">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-extrabold text-databrains-slate md:text-4xl">Casos de uso</h2>
              <div className="mx-auto mt-4 h-1 w-11 rounded-full bg-databrains-coral" />
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {useCases.map((item) => (
                <UseCaseCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#ecf7f9] px-5 py-14 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-16 top-6 h-52 w-[420px] rounded-full bg-databrains-aqua/20 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-44 w-[380px] rounded-full bg-databrains-paleCyan/60 blur-3xl" />
            <div className="absolute bottom-4 left-[16%] hidden h-[78%] max-h-[420px] w-[46%] max-w-[480px] lg:block xl:left-[20%]">
              <div className="absolute left-[8%] top-[10%] h-28 w-28 rounded-full bg-databrains-aqua/20 blur-sm" />
              <div className="absolute right-[6%] top-[18%] h-20 w-20 rounded-full bg-databrains-teal/10" />
              <div className="absolute bottom-[22%] left-[2%] h-16 w-16 rounded-full border border-databrains-teal/20 bg-white/30" />
              <div className="absolute right-[14%] top-[8%] h-2.5 w-2.5 rounded-full bg-databrains-teal/35" />
              <div className="absolute left-[18%] top-[28%] h-2 w-2 rounded-full bg-databrains-aqua/50" />
              <div className="absolute bottom-[30%] right-[10%] h-3 w-3 rounded-full bg-databrains-teal/25" />
              <div className="absolute left-[40%] top-[6%] h-1.5 w-1.5 rounded-full bg-databrains-aqua/40" />
              <div className="absolute bottom-[18%] left-[28%] h-2 w-2 rounded-full bg-databrains-teal/30" />
              <div className="absolute right-[22%] top-[42%] h-1.5 w-1.5 rounded-full bg-databrains-aqua/45" />
              <svg className="absolute left-[4%] top-[36%] h-24 w-24 text-databrains-aqua/35" viewBox="0 0 100 100" fill="none">
                <path d="M10 70C28 52 40 84 70 40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 5" strokeLinecap="round" />
                <path d="M20 82C42 60 55 90 88 48" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 6" strokeLinecap="round" />
              </svg>
              <img
                src={ctaDevices}
                alt=""
                className="relative z-10 h-full w-full object-contain object-left-bottom opacity-95"
              />
            </div>
          </div>
          <div className="relative z-10 mx-auto flex max-w-[1100px] flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-end lg:gap-10">
            <div className="relative mx-auto w-[78%] max-w-[360px] lg:hidden">
              <div className="pointer-events-none absolute inset-0" aria-hidden>
                <div className="absolute -left-2 top-2 h-16 w-16 rounded-full bg-databrains-aqua/25 blur-sm" />
                <div className="absolute -right-1 top-8 h-12 w-12 rounded-full bg-databrains-teal/10" />
                <div className="absolute bottom-6 left-4 h-10 w-10 rounded-full border border-databrains-teal/20 bg-white/40" />
                <div className="absolute right-6 top-4 h-2 w-2 rounded-full bg-databrains-teal/40" />
                <div className="absolute left-10 top-16 h-1.5 w-1.5 rounded-full bg-databrains-aqua/50" />
                <div className="absolute bottom-10 right-8 h-2.5 w-2.5 rounded-full bg-databrains-teal/25" />
              </div>
              <img src={ctaDevices} alt="" className="relative z-10 h-auto w-full object-contain" />
            </div>
            <div className="max-w-xl text-center lg:max-w-[560px] lg:text-left">
              <p className="font-heading text-2xl font-extrabold leading-snug text-databrains-slate md:text-3xl">
                Impulsa tus objetivos con una Landing Page hoy.
              </p>
              <Link
                to="/contacto"
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-databrains-coral px-8 py-4 text-sm font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral focus-visible:ring-offset-2"
              >
                Agenda una consulta gratuita
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
