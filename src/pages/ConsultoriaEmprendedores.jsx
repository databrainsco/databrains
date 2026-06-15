import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faBullseye,
  faCalendarCheck,
  faChevronRight,
  faCircleCheck,
  faCircleQuestion,
  faFlag,
  faLightbulb,
  faMagnifyingGlassChart,
  faRocket,
  faUser,
  faWindowMaximize,
} from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/SEO'
import heroImage from '../assets/images/consultoria-hero.jpg'
import ctaImage from '../assets/images/consultoria-cta.jpg'

const benefits = [
  {
    step: '1',
    icon: faMagnifyingGlassChart,
    text: 'Evaluaremos lo que ya tienes y detectaremos áreas de mejora.',
  },
  {
    step: '2',
    icon: faBullseye,
    text: 'Definiremos soluciones personalizadas para alcanzar tus objetivos.',
    featured: true,
  },
  {
    step: '3',
    icon: faLightbulb,
    text: 'Te ayudamos a comprender las herramientas clave para tu negocio y su funcionamiento.',
  },
  {
    step: '4',
    icon: faRocket,
    text: 'Te acompañamos en la toma de decisiones estratégicas.',
  },
]

const audience = [
  {
    icon: faCircleQuestion,
    text: 'Si no sabes qué necesita tu negocio digital.',
  },
  {
    icon: faWindowMaximize,
    text: 'Si ya tienes una página web, pero no entiendes cómo aprovecharla.',
  },
  {
    icon: faBullseye,
    text: 'Si quieres optimizar tu presencia digital sin perder tiempo.',
  },
]

function WavePattern({ className = '' }) {
  return (
    <svg className={`pointer-events-none absolute text-databrains-aqua/25 ${className}`} viewBox="0 0 420 180" fill="none" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, index) => (
        <path
          key={index}
          d={`M0 ${130 - index * 12}C90 ${80 - index * 5} 170 ${170 + index * 5} 420 ${52 + index * 8}`}
          stroke="currentColor"
          strokeWidth="1.4"
        />
      ))}
    </svg>
  )
}

function SectionTitle({ children }) {
  return (
    <div className="text-center">
      <h2 className="font-heading text-3xl font-extrabold text-[#073070] md:text-4xl">{children}</h2>
      <div className="mx-auto mt-4 h-1 w-11 rounded-full bg-databrains-coral" />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-10 px-6 pb-12 pt-20 md:px-12 lg:px-20 lg:pb-20 lg:pt-28">
          <h1 className="max-w-[610px] font-heading text-5xl font-extrabold leading-tight text-[#073070] md:text-6xl lg:text-[68px]">
            Consultoría Estratégica para tu Proyecto Digital
          </h1>
          <div className="mt-6 h-1 w-16 rounded-full bg-databrains-coral" />
          <p className="mt-10 max-w-[560px] text-xl leading-9 text-[#0b3370]/78">
            Aclaramos el camino, realizamos un diagnóstico claro y te acompañamos con una estrategia digital que impulse
            el crecimiento de tu negocio.
          </p>
          <div className="mt-8 space-y-5">
            {['Visión clara de tu proyecto', 'Decisiones inteligentes y efectivas'].map((item) => (
              <div key={item} className="flex items-center gap-4 font-heading text-lg font-bold text-[#073070]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-databrains-teal text-white">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-sm" />
                </span>
                {item}
              </div>
            ))}
          </div>
          <Link
            to="/contacto"
            className="mt-10 inline-flex items-center justify-center gap-3 rounded-md bg-databrains-coral px-8 py-4 text-lg font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral focus-visible:ring-offset-2"
          >
            Agenda tu sesión de consultoría
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        <div className="relative min-h-[440px] lg:min-h-[700px]">
          <img
            src={heroImage}
            alt="Consultora reunida con emprendedores para definir una estrategia digital"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white via-white/85 to-transparent" />
        </div>
      </div>
      <WavePattern className="-left-20 bottom-[-20px] h-40 w-[420px]" />
    </section>
  )
}

function BenefitsSection() {
  return (
    <section className="relative bg-white px-6 py-16 md:px-10">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle>¿Cómo te ayudamos? <span className="text-2xl md:text-3xl">(Beneficios del servicio)</span></SectionTitle>
        <div className="relative mt-16">
          <svg className="absolute left-[120px] right-[120px] top-0 hidden h-28 w-[calc(100%-240px)] text-databrains-teal lg:block" viewBox="0 0 900 130" fill="none" aria-hidden="true">
            <path
              d="M0 70C110 5 185 25 255 76C330 132 395 77 480 34C594 -22 650 108 745 90C812 77 835 15 900 34"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="8 8"
            />
          </svg>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.step}
                className={`relative mx-auto flex min-h-[225px] w-full max-w-[250px] flex-col items-center justify-center rounded-xl border bg-white p-7 text-center shadow-[0_12px_30px_rgba(49,69,78,0.09)] ${
                  benefit.featured
                    ? 'scale-105 border-databrains-teal shadow-[0_18px_40px_rgba(35,148,156,0.17)]'
                    : 'border-gray-200 lg:mt-14'
                } ${index === 3 ? 'lg:mt-14' : ''}`}
              >
                <div className="absolute -top-9 flex h-12 w-12 items-center justify-center rounded-full border-4 border-databrains-paleCyan bg-databrains-teal font-heading text-2xl font-extrabold text-white shadow-md">
                  {benefit.step}
                </div>
                <FontAwesomeIcon icon={benefit.icon} className={`${benefit.featured ? 'text-8xl' : 'text-6xl'} text-[#5e7f9f]`} />
                <p className={`mt-7 font-heading font-bold leading-7 text-[#073070] ${benefit.featured ? 'text-xl' : 'text-base'}`}>
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AudienceSection() {
  return (
    <section className="bg-white px-6 py-8 md:px-10">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle>¿A quién va dirigido este servicio?</SectionTitle>
        <div className="mt-10 grid gap-9 md:grid-cols-3">
          {audience.map((item, index) => (
            <article
              key={item.text}
              className="flex min-h-[145px] items-center gap-8 rounded-xl border border-gray-200 bg-white px-8 py-6 shadow-[0_12px_30px_rgba(49,69,78,0.08)]"
            >
              <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-databrains-paleCyan/60 text-5xl text-databrains-teal">
                <FontAwesomeIcon icon={index === 0 ? faUser : item.icon} />
              </div>
              <p className="font-heading text-lg font-bold leading-8 text-[#073070]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudySection() {
  const caseItems = [
    {
      label: 'Reto:',
      text: 'Sin presencia digital profesional.',
      icon: faFlag,
      accent: 'text-databrains-coral',
    },
    {
      label: 'Solución:',
      text: 'Página web personalizada con agendamiento en línea.',
      icon: faCalendarCheck,
      accent: 'text-databrains-teal',
    },
    {
      label: 'Resultado:',
      text: 'en consultas y menos tiempo gestionando citas.',
      result: '+40%',
      accent: 'text-databrains-teal',
    },
  ]

  return (
    <section className="bg-white px-6 py-8 md:px-10">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle>Ejemplo de caso</SectionTitle>
        <div className="mt-10 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {caseItems.map((item, index) => (
            <React.Fragment key={item.label}>
              <article className="flex min-h-[160px] items-center gap-8 rounded-xl border border-gray-200 bg-white px-8 py-7 shadow-[0_12px_30px_rgba(49,69,78,0.08)]">
                <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-databrains-paleCyan/65 text-5xl text-[#5e7f9f]">
                  {item.result ? (
                    <svg className="h-16 w-16 text-databrains-teal" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                      <path d="M8 52H56" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                      <path d="M16 44V32M30 44V24M44 44V14" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                      <path d="M14 28L28 20L39 23L52 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <FontAwesomeIcon icon={item.icon} />
                  )}
                </div>
                <div>
                  <h3 className={`font-heading text-xl font-extrabold ${item.accent}`}>{item.label}</h3>
                  {item.result ? (
                    <>
                      <div className="mt-2 font-heading text-6xl font-extrabold text-databrains-coral">{item.result}</div>
                      <p className="mt-2 font-heading text-base font-bold leading-7 text-[#073070]">{item.text}</p>
                    </>
                  ) : (
                    <p className="mt-5 font-heading text-lg font-bold leading-8 text-[#073070]">{item.text}</p>
                  )}
                </div>
              </article>
              {index < caseItems.length - 1 && (
                <div className="mx-auto hidden h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-2xl text-databrains-teal shadow-[0_12px_30px_rgba(49,69,78,0.11)] lg:flex">
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="bg-white px-6 py-12 md:px-10">
      <div className="relative mx-auto grid max-w-[1240px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm lg:grid-cols-[0.9fr_1.2fr]">
        <WavePattern className="-right-16 bottom-0 h-44 w-[430px]" />
        <div className="flex items-end justify-center bg-white px-8 pt-8">
          <img
            src={ctaImage}
            alt="Ilustración de una sesión de consultoría digital entre una consultora y un emprendedor"
            className="max-h-[250px] w-full max-w-[440px] object-contain"
          />
        </div>
        <div className="relative z-10 px-8 py-10 lg:px-10">
          <h2 className="font-heading text-4xl font-extrabold text-[#073070]">Hablemos de tu proyecto digital</h2>
          <p className="mt-4 max-w-[660px] text-xl leading-8 text-[#0b3370]/78">
            Agenda una sesión de consultoría y recibí una guía clara y accionable para tomar mejores decisiones.
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-md bg-databrains-coral px-8 py-4 text-lg font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral focus-visible:ring-offset-2"
          >
            Agenda tu sesión de consultoría
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function ConsultoriaEmprendedores() {
  return (
    <>
      <SEO
        title="Consultoría para emprendedores | DataBrains"
        description="Consultoría estratégica para aclarar el camino, diagnosticar tu proyecto digital y tomar mejores decisiones para crecer."
      />
      <main className="overflow-hidden bg-white">
        <HeroSection />
        <BenefitsSection />
        <AudienceSection />
        <CaseStudySection />
        <CTASection />
      </main>
    </>
  )
}
