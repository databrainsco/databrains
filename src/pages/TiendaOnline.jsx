import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faClock,
  faCode,
  faCreditCard,
  faGlobe,
  faHeadset,
  faLock,
  faMagnifyingGlass,
  faMobileScreen,
  faPenNib,
  faRocket,
  faUsers,
  faWindowMaximize,
} from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/SEO'
import heroImage from '../assets/images/pages/emprendedores/tienda-online-hero.jpg'
import ctaCartImage from '../assets/images/pages/emprendedores/tienda-online-cta-cart.webp'

const whyOnline = [
  {
    title: 'Disponibilidad 24/7',
    description: 'Tu tienda abierta las 24 horas para que vendas sin horarios.',
    icon: faClock,
  },
  {
    title: 'Alcance global',
    description: 'Llega a clientes sin importar dónde se encuentren.',
    icon: faGlobe,
  },
  {
    title: 'Gestión sencilla',
    description: 'Administra productos e inventario desde una sola plataforma.',
    icon: faWindowMaximize,
  },
  {
    title: 'Escalabilidad',
    description: 'Tu tienda online crece a medida que crece tu negocio.',
    icon: faRocket,
  },
]

const features = [
  {
    title: 'Diseño personalizado',
    description: 'Una tienda con la identidad visual de tu marca.',
    icon: faPenNib,
  },
  {
    title: 'Plataforma fácil de usar',
    description: 'Gestiona tu catálogo y pedidos sin complicaciones.',
    icon: faWindowMaximize,
  },
  {
    title: 'Diseño responsivo',
    description: 'Se ve perfecto en celular, tablet y computadora.',
    icon: faMobileScreen,
  },
  {
    title: 'Integración de métodos de pago',
    description: 'Cobra en línea de forma segura y confiable.',
    icon: faCreditCard,
  },
  {
    title: 'SEO optimizado',
    description: 'Mejora tu visibilidad en buscadores desde el inicio.',
    icon: faMagnifyingGlass,
  },
  {
    title: 'Soporte y mantenimiento continuo',
    description: 'Te acompañamos para que tu tienda siga funcionando bien.',
    icon: faHeadset,
  },
]

const processSteps = [
  {
    title: 'Consulta inicial',
    description: 'Conocemos tu negocio y lo que quieres vender.',
    icon: faUsers,
  },
  {
    title: 'Diseño y desarrollo',
    description: 'Creamos tu tienda con un diseño atractivo y funcional.',
    icon: faCode,
  },
  {
    title: 'Implementación de pagos',
    description: 'Configuramos cobros seguros para tus clientes.',
    icon: faLock,
  },
  {
    title: 'Lanzamiento',
    description: 'Publicamos tu tienda lista para recibir pedidos.',
    icon: faRocket,
  },
  {
    title: 'Soporte continuo',
    description: 'Te acompañamos con mantenimiento y mejoras.',
    icon: faHeadset,
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

export default function TiendaOnline() {
  return (
    <>
      <SEO
        title="Tienda Online | DataBrains"
        description="Crea tu tienda online y llega a más clientes con un e-commerce atractivo, fácil de gestionar y listo para vender."
      />
      <main className="overflow-x-hidden bg-white">
        <section className="bg-white px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div>
              <h1 className="font-heading text-[2rem] font-extrabold leading-tight text-databrains-slate md:text-4xl lg:text-[2.75rem]">
                Tienda Online
              </h1>
              <p className="mt-4 font-heading text-xl font-extrabold leading-snug text-databrains-slate md:text-2xl">
                Crea tu tienda online y llega a más clientes
              </p>
              <div className="mt-4 h-1 w-14 rounded-full bg-databrains-coral" />
              <p className="mt-6 max-w-xl text-base leading-7 text-databrains-slate/80 lg:text-lg lg:leading-8">
                Soluciones completas para vender de manera efectiva en línea, con un diseño atractivo y fácil de
                gestionar.
              </p>
              <Link
                to="/contacto"
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-databrains-coral px-7 py-3.5 text-sm font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral focus-visible:ring-offset-2"
              >
                Inicia tu tienda hoy
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-[#ecf7f9] p-4 shadow-[0_18px_40px_rgba(49,69,78,0.1)] sm:p-6">
              <div
                className="pointer-events-none absolute -right-6 top-8 text-[140px] leading-none text-databrains-aqua/25"
                aria-hidden
              >
                ↗
              </div>
              <img
                src={heroImage}
                alt="Tienda online de moda mostrada en laptop, celular y tablet"
                width={960}
                height={640}
                decoding="async"
                fetchPriority="high"
                className="relative z-10 h-auto w-full rounded-2xl object-cover object-center"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-[1320px]">
            <SectionHeading>¿Por qué tener una tienda online?</SectionHeading>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {whyOnline.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-[0_10px_26px_rgba(49,69,78,0.07)]"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-databrains-paleCyan/70 text-2xl text-databrains-teal">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <h3 className="mt-5 font-heading text-base font-extrabold text-databrains-slate">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-databrains-slate/75">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7fafb] px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-[1320px]">
            <SectionHeading>Características principales</SectionHeading>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_10px_26px_rgba(49,69,78,0.07)]"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center text-4xl text-databrains-teal">
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-extrabold text-databrains-slate">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-databrains-slate/75">{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-[1320px]">
            <SectionHeading>Proceso de creación</SectionHeading>
            <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-databrains-slate/75 md:text-base">
              Te acompañamos paso a paso para que tu tienda quede lista para vender.
            </p>

            <div className="mt-12 hidden lg:block">
              <div className="relative flex items-start justify-between gap-3">
                <div className="absolute left-[8%] right-[8%] top-4 h-px border-t border-dashed border-databrains-coral/35" />
                {processSteps.map((step, index) => (
                  <article key={step.title} className="relative z-10 flex w-[18%] flex-col items-center text-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-databrains-coral text-xs font-extrabold text-white shadow-md">
                      {index + 1}
                    </div>
                    <div className="mt-4 text-3xl text-databrains-teal">
                      <FontAwesomeIcon icon={step.icon} />
                    </div>
                    <h3 className="mt-3 font-heading text-sm font-extrabold text-databrains-slate">{step.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-databrains-slate/70">{step.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:hidden">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-[0_8px_22px_rgba(49,69,78,0.06)]"
                >
                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-databrains-coral text-xs font-extrabold text-white">
                    {index + 1}
                  </div>
                  <div className="mt-3 text-3xl text-databrains-teal">
                    <FontAwesomeIcon icon={step.icon} />
                  </div>
                  <h3 className="mt-3 font-heading text-base font-extrabold text-databrains-slate">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-databrains-slate/75">{step.description}</p>
                </article>
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
                src={ctaCartImage}
                alt=""
                loading="lazy"
                decoding="async"
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
              <img src={ctaCartImage} alt="" className="relative z-10 h-auto w-full object-contain" />
            </div>
            <div className="max-w-xl text-center lg:max-w-[560px] lg:text-left">
              <p className="font-heading text-2xl font-extrabold leading-snug text-databrains-slate md:text-3xl">
                Lleva tu negocio al siguiente nivel con una tienda online profesional.
              </p>
              <Link
                to="/contacto"
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-databrains-coral px-8 py-4 text-sm font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral focus-visible:ring-offset-2"
              >
                Empieza hoy mismo
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
