import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faCircleCheck,
  faDesktop,
  faMagnifyingGlass,
  faPenToSquare,
  faSliders,
} from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/SEO'
import branding1 from '../assets/images/pages/emprendedores/branding-1.jpg'
import branding2 from '../assets/images/pages/emprendedores/branding-2.jpg'
import branding3 from '../assets/images/pages/emprendedores/branding-3.jpg'
import branding4 from '../assets/images/pages/emprendedores/branding-4.jpg'
import branding5 from '../assets/images/pages/emprendedores/branding-5.jpg'
import brandingShowcase from '../assets/images/pages/emprendedores/branding-showcase.jpg'
import brandingPresentation from '../assets/images/pages/emprendedores/branding-presentation.jpg'
import brandingCtaArt from '../assets/images/pages/emprendedores/branding-cta-bag-cup.png'

const benefits = [
  {
    title: 'Diseño de identidad visual',
    description: 'Creación de logos, tipografías y paletas de colores que reflejen tu marca.',
    image: branding1,
    to: '/blog-recursos/diseno-de-identidad-visual',
  },
  {
    title: 'Presencia online coherente',
    description: 'Aplicación de la identidad en redes sociales, sitios web y correos.',
    image: branding2,
    to: '/blog-recursos/presencia-online-coherente',
  },
  {
    title: 'Estrategia de marca',
    description: 'Definición de voz y tono para conectar emocionalmente con tu audiencia.',
    image: branding3,
    to: '/blog-recursos/estrategia-de-marca',
  },
  {
    title: 'Optimización visual',
    description: 'Adaptación para dispositivos digitales (responsive, apps, etc.).',
    image: branding4,
    to: '/blog-recursos/optimizacion-visual',
  },
  {
    title: 'Reconocimiento de marca',
    description: 'Campañas para aumentar la visibilidad de tu marca en el entorno digital.',
    image: branding5,
    to: '/blog-recursos/reconocimiento-de-marca',
  },
]

const deliverables = [
  'Logo y variantes en formatos listos para usar',
  'Paleta de colores y tipografías definidas',
  'Manual o guía breve de marca',
  'Plantillas para redes sociales',
  'Aplicaciones en web, tarjetas y materiales digitales',
]

const processSteps = [
  {
    title: 'Descubrimiento',
    description: 'Entendemos tu visión y valores.',
    icon: faMagnifyingGlass,
  },
  {
    title: 'Diseño',
    description: 'Creamos elementos visuales únicos para tu marca.',
    icon: faPenToSquare,
  },
  {
    title: 'Implementación',
    description: 'Aplicamos el branding en todos los puntos de contacto digitales.',
    icon: faDesktop,
  },
  {
    title: 'Optimización',
    description: 'Revisamos y ajustamos para garantizar consistencia y resultados.',
    icon: faSliders,
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

function BenefitCard({ title, description, image, to }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_26px_rgba(49,69,78,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(49,69,78,0.12)]">
      <div className="relative h-[170px] overflow-hidden bg-slate-100">
        <img src={image} alt={title} className="h-full w-full object-cover object-center" loading="lazy" />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-base font-extrabold text-databrains-slate">
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

export default function Branding() {
  return (
    <>
      <SEO
        title="Branding Digital | DataBrains"
        description="Construimos marcas que conectan, inspiran y dejan huella. Identidad visual, estrategia y presencia digital para tu negocio."
      />
      <main className="overflow-x-hidden bg-white">
        <section className="relative bg-white px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
          <WavePattern className="-right-24 top-10 h-72 w-[520px]" />
          <div className="relative z-10 mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
            <div>
              <h1 className="font-heading text-[2rem] font-extrabold leading-tight text-databrains-slate md:text-4xl lg:text-[2.75rem]">
                Branding Digital
              </h1>
              <div className="mt-4 h-1 w-14 rounded-full bg-databrains-coral" />
              <p className="mt-6 text-lg leading-8 text-databrains-slate/85 md:text-xl">
                Construimos marcas que conectan, inspiran y dejan huella.
              </p>
              <Link
                to="/contacto"
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-databrains-coral px-7 py-3.5 text-sm font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral focus-visible:ring-offset-2"
              >
                Hablemos de tu marca
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-3xl bg-[#ecf7f9] p-4 shadow-[0_18px_40px_rgba(49,69,78,0.1)] sm:p-6">
              <img
                src={brandingShowcase}
                alt="Entregables de branding en web, redes sociales, tarjetas, empaque y vaso"
                className="h-auto w-full rounded-2xl object-cover object-center"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#ecf7f9] px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="font-heading text-2xl font-extrabold leading-snug text-databrains-slate md:text-3xl">
              Tu marca, lista para crecer
            </h2>
            <div className="mx-auto mt-4 h-1 w-11 rounded-full bg-databrains-coral" />
            <p className="mt-5 text-base leading-7 text-databrains-slate/80 md:text-lg md:leading-8">
              Construimos una base visual y verbal para que tu negocio se presente con seguridad.
            </p>
          </div>
        </section>

        <section className="bg-white px-5 py-12 min-[860px]:px-10 lg:px-8 lg:pb-20 lg:pt-8">
          <div className="mx-auto max-w-[1320px]">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-extrabold text-databrains-slate md:text-4xl">Beneficios clave</h2>
              <div className="mx-auto mt-4 h-1 w-11 rounded-full bg-databrains-coral" />
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.slice(0, 3).map((benefit) => (
                <BenefitCard key={benefit.title} {...benefit} />
              ))}
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:mx-auto lg:max-w-[880px]">
              {benefits.slice(3).map((benefit) => (
                <BenefitCard key={benefit.title} {...benefit} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f3f5f6] px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-[820px]">
            <div className="rounded-[28px] bg-white p-6 shadow-[0_18px_44px_rgba(49,69,78,0.1)] sm:p-8 lg:p-10">
              <div className="text-center">
                <h2 className="font-heading text-2xl font-extrabold leading-tight text-databrains-slate md:text-3xl">
                  Entregables profesionales de alta definición
                </h2>
                <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-databrains-coral" />
              </div>

              <ul className="mt-8 space-y-4">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-left">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-databrains-teal">
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    <span className="text-base leading-7 text-databrains-slate/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-[1100px]">
            <div className="overflow-hidden rounded-3xl shadow-[0_18px_40px_rgba(49,69,78,0.1)]">
              <img
                src={brandingPresentation}
                alt="Presentación de identidad de marca a cliente con pantallas y moodboard"
                className="h-auto w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-[900px]">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-extrabold text-databrains-slate md:text-4xl">
                Nuestro proceso de trabajo en Branding Digital
              </h2>
              <div className="mx-auto mt-4 h-1 w-11 rounded-full bg-databrains-coral" />
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_12px_32px_rgba(49,69,78,0.08)]">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={`flex items-center gap-4 px-5 py-5 sm:gap-5 sm:px-7 ${
                    index < processSteps.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-databrains-teal text-sm font-extrabold text-white">
                    {index + 1}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center text-xl text-databrains-slate/80">
                    <FontAwesomeIcon icon={step.icon} />
                  </span>
                  <p className="min-w-0 flex-1 text-sm leading-6 text-databrains-slate sm:text-base">
                    <span className="font-extrabold">{step.title}:</span> {step.description}
                  </p>
                  <span className="hidden shrink-0 text-databrains-teal sm:inline-flex" aria-hidden="true">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-xl" />
                  </span>
                </div>
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
                src={brandingCtaArt}
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
              <img src={brandingCtaArt} alt="" className="relative z-10 h-auto w-full object-contain" />
            </div>
            <div className="max-w-xl text-center lg:max-w-[560px] lg:text-left">
              <p className="font-heading text-2xl font-extrabold leading-snug text-databrains-slate md:text-3xl">
                ¿Listo para construir una marca que destaque y conecte con tu audiencia?
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
