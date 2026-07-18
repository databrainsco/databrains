import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faChartColumn,
  faCircleCheck,
  faFlask,
  faGlobe,
  faHandshake,
  faLightbulb,
  faMagnifyingGlass,
  faMobileScreen,
  faPalette,
  faRocket,
  faWindowMaximize,
} from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/SEO'
import heroImage from '../assets/images/pages/emprendedores/sitios-web-hero.jpg'

const benefits = [
  {
    title: 'Presencia digital sólida',
    description: 'Tu negocio disponible 24/7 para clientes de todo el mundo.',
    icon: faGlobe,
  },
  {
    title: 'Diseño adaptado a tu marca',
    description: 'Una página que refleja tu identidad y objetivos.',
    icon: faPalette,
  },
  {
    title: 'Optimización para móviles',
    description: 'Compatible con todos los dispositivos.',
    icon: faMobileScreen,
  },
  {
    title: 'Crecimiento medible',
    description: 'Herramientas de análisis para monitorear tu éxito.',
    icon: faChartColumn,
  },
]

const includes = [
  {
    title: 'Diseño personalizado',
    description: 'Layout único adaptado a tu marca.',
  },
  {
    title: 'Dominio y hosting',
    description: 'Gestión inicial para que te olvides de los detalles técnicos.',
  },
  {
    title: 'Optimización SEO básica',
    description: 'Para aparecer en los motores de búsqueda.',
  },
  {
    title: 'Diseño responsivo',
    description: 'Compatible con móviles, tablets y escritorio.',
  },
  {
    title: 'Soporte técnico inicial',
    description: 'Aseguramos un lanzamiento sin problemas.',
  },
]

const processSteps = [
  {
    title: 'Empatizamos',
    description: 'Reunión inicial para conocerte y entender tus objetivos.',
    icon: faHandshake,
  },
  {
    title: 'Definimos',
    description: 'Convertimos lo observado en un diagnóstico que guía la solución.',
    icon: faMagnifyingGlass,
  },
  {
    title: 'Ideamos',
    description: 'Ideas innovadoras que aportan valor a tu negocio.',
    icon: faLightbulb,
  },
  {
    title: 'Prototipamos',
    description: 'Creamos prototipos funcionales para validar contigo.',
    icon: faWindowMaximize,
  },
  {
    title: 'Testeamos',
    description: 'Probamos, medimos y refinamos para mayor efectividad.',
    icon: faFlask,
  },
  {
    title: '¡Lanzamiento!',
    description: 'Tu página lista para generar impacto.',
    icon: faRocket,
  },
]

function SectionHeading({ children }) {
  return (
    <div className="text-center">
      <h2 className="font-heading text-3xl font-extrabold text-databrains-slate md:text-4xl">{children}</h2>
      <div className="mx-auto mt-4 h-1 w-11 rounded-full bg-databrains-coral" />
    </div>
  )
}

export default function SitiosWebPersonalizados() {
  return (
    <>
      <SEO
        title="Sitios Web personalizados | DataBrains"
        description="Diseños únicos, modernos y optimizados para que tu marca destaque en el mundo digital."
      />
      <main className="overflow-x-hidden bg-white">
        <section className="bg-white px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div>
              <h1 className="font-heading text-[2rem] font-extrabold leading-tight text-databrains-slate md:text-4xl lg:text-[2.75rem]">
                Sitios Web Profesionales
              </h1>
              <div className="mt-4 h-1 w-14 rounded-full bg-databrains-coral" />
              <p className="mt-6 max-w-xl text-base leading-7 text-databrains-slate/80 lg:text-lg lg:leading-8">
                Diseños únicos, modernos, funcionales y optimizados que destacan tu marca en el mundo digital y
                cautivan a tus clientes.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-databrains-slate/75 lg:text-base">
                Incluyen diseños adaptados a dispositivos móviles, optimización para buscadores y una experiencia de
                usuario impecable.
              </p>
              <Link
                to="/contacto"
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-databrains-coral px-7 py-3.5 text-sm font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral focus-visible:ring-offset-2"
              >
                Solicita una cotización
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-3xl bg-[#ecf7f9] p-4 shadow-[0_18px_40px_rgba(49,69,78,0.1)] sm:p-6">
              <img
                src={heroImage}
                alt="Sitio web profesional mostrado en laptop, monitor, tablet y celular"
                className="h-auto w-full rounded-2xl object-cover object-center"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-[1320px]">
            <SectionHeading>Beneficios de tener un sitio web profesional</SectionHeading>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-[0_10px_26px_rgba(49,69,78,0.07)]"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-databrains-paleCyan/70 text-2xl text-databrains-teal">
                    <FontAwesomeIcon icon={benefit.icon} />
                  </div>
                  <h3 className="mt-5 font-heading text-base font-extrabold text-databrains-slate">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-databrains-slate/75">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7fafb] px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-[860px]">
            <SectionHeading>¿Qué incluye nuestro servicio?</SectionHeading>
            <ul className="mt-10 space-y-5">
              {includes.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-databrains-teal text-white">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-sm" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-extrabold text-databrains-slate">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-databrains-slate/75">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-[1320px]">
            <SectionHeading>Nuestro proceso de trabajo</SectionHeading>
            <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-databrains-slate/75 md:text-base">
              Aplicamos Design Thinking para crear soluciones centradas en ti y en tus usuarios.
            </p>

            <div className="mt-12 hidden lg:block">
              <div className="relative flex items-start justify-between gap-2">
                <div className="absolute left-[6%] right-[6%] top-10 h-px border-t border-dashed border-databrains-teal/40" />
                {processSteps.map((step, index) => (
                  <article key={step.title} className="relative z-10 flex w-[15%] flex-col items-center text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-databrains-teal bg-white text-2xl text-databrains-teal shadow-sm">
                      <FontAwesomeIcon icon={step.icon} />
                    </div>
                    <p className="mt-4 text-xs font-bold text-databrains-teal">{index + 1}.</p>
                    <h3 className="mt-1 font-heading text-sm font-extrabold text-databrains-slate">{step.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-databrains-slate/70">{step.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:hidden">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-[0_8px_22px_rgba(49,69,78,0.06)]"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-databrains-teal bg-white text-xl text-databrains-teal">
                    <FontAwesomeIcon icon={step.icon} />
                  </div>
                  <p className="mt-3 text-xs font-bold text-databrains-teal">{index + 1}.</p>
                  <h3 className="mt-1 font-heading text-base font-extrabold text-databrains-slate">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-databrains-slate/75">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#ecf7f9] px-5 py-14 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
            <div className="absolute -left-20 top-8 h-56 w-[480px] rounded-full bg-databrains-aqua/25 blur-3xl" />
            <div className="absolute -right-16 bottom-0 h-48 w-[420px] rounded-full bg-databrains-paleCyan/50 blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto max-w-[820px] text-center">
            <p className="font-heading text-2xl font-extrabold leading-snug text-databrains-slate md:text-3xl">
              Nuestro enfoque asegura que cada solución esté hecha a tu medida, basada en tus necesidades y las de tus
              usuarios.
            </p>
            <Link
              to="/contacto"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-databrains-coral px-8 py-4 text-sm font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral focus-visible:ring-offset-2"
            >
              Comienza tu proyecto
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
