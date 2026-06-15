import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faAward,
  faBell,
  faBriefcase,
  faChartColumn,
  faChartLine,
  faClock,
  faCloud,
  faDatabase,
  faFolderOpen,
  faGaugeHigh,
  faHeadset,
  faInfinity,
  faLaptopCode,
  faLink,
  faPuzzlePiece,
  faRocket,
  faSmile,
  faTableCellsLarge,
  faUserGroup,
  faUsers,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/SEO'
import teamImage from '../assets/images/home-team-collaboration.jpg'

const heroStats = [
  { value: '12%', label: 'Nuevos clientes', detail: 'vs. mes anterior', icon: faChartLine },
  { value: '98%', label: 'Clientes satisfechos', detail: 'satisfacción', icon: faSmile },
  { value: '24/7', label: 'Acompañamiento', detail: 'continuo', icon: faHeadset },
]

const metrics = [
  { value: '+10', label: 'Años de experiencia', icon: faUsers },
  { value: '+200', label: 'Proyectos exitosos', icon: faBriefcase },
  { value: '98%', label: 'Clientes satisfechos', icon: faChartLine },
  { value: '24/7', label: 'Acompañamiento continuo', icon: faGaugeHigh },
]

const features = [
  {
    title: 'Experiencia Comprobada',
    description: 'Más de 10 años entregando soluciones tecnológicas exitosas y relaciones de largo plazo.',
    icon: faAward,
  },
  {
    title: 'Enfoque Ágil y Personalizado',
    description: 'Creamos metodologías ágiles con un enfoque humano para adaptarnos a tus objetivos y contexto.',
    icon: faChartLine,
  },
  {
    title: 'Soluciones Integrales',
    description: 'Desde desarrollo web hasta IA, integramos tecnología y estrategia para resolver retos complejos.',
    icon: faPuzzlePiece,
  },
  {
    title: 'Nube, Datos e IA',
    description: 'Aprovechamos el poder de la nube, el análisis de datos y la inteligencia artificial para generar valor real.',
    icon: faCloud,
  },
]

const services = [
  {
    title: 'Creación de Software a la Medida y Páginas Web',
    description: 'Diseñamos y desarrollamos software y sitios web personalizados que se adaptan a tu negocio.',
    icon: faLaptopCode,
  },
  {
    title: 'Optimización en la nube',
    description: 'Migramos y optimizamos tu infraestructura en la nube para mejorar rendimiento, seguridad y reducir costos.',
    icon: faCloud,
  },
  {
    title: 'DevOps',
    description: 'Automatizamos procesos, integraciones y despliegues para entregar software con calidad y velocidad.',
    icon: faInfinity,
  },
  {
    title: 'DataScience',
    description: 'Transformamos datos en insights accionables para tomar decisiones inteligentes.',
    icon: faChartColumn,
  },
  {
    title: 'IA',
    description: 'Implementamos soluciones de inteligencia artificial para optimizar tu negocio y escalar tu impacto.',
    icon: faWandMagicSparkles,
  },
]

function WavePattern({ className = '' }) {
  return (
    <svg className={`pointer-events-none absolute text-databrains-aqua/20 ${className}`} viewBox="0 0 520 260" fill="none" aria-hidden="true">
      {Array.from({ length: 13 }).map((_, index) => (
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

function MiniStatCard({ stat }) {
  return (
    <div className="flex min-h-[100px] items-center gap-5 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-[0_15px_35px_rgba(49,69,78,0.12)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-databrains-paleCyan/55 text-xl text-databrains-teal">
        <FontAwesomeIcon icon={stat.icon} />
      </div>
      <div>
        <div className="font-heading text-3xl font-extrabold text-databrains-teal">{stat.value}</div>
        <div className="mt-1 max-w-[115px] text-xs font-semibold leading-4 text-databrains-slate">{stat.label}</div>
        <div className="text-[10px] leading-4 text-databrains-slate/55">{stat.detail}</div>
      </div>
    </div>
  )
}

function DashboardMockup() {
  const summaryCards = [
    { label: 'Proyectos activos', value: '23', note: '+12% vs. mes anterior', chart: 'donut' },
    { label: 'Tasa de éxito', value: '78%', note: '+6% vs. mes anterior', chart: 'donut' },
    { label: 'Ingresos generados', value: '$2.4M', note: '+10% vs. mes anterior', chart: 'bars' },
    { label: 'Clientes satisfechos', value: '98%', note: '+5% vs. mes anterior', chart: 'line' },
  ]

  return (
    <div className="relative min-h-[560px] lg:min-h-[520px]">
      <div className="absolute left-0 top-6 z-20 hidden w-[168px] space-y-8 xl:block">
        {heroStats.map((stat, index) => (
          <div key={stat.label} className={`${index === 1 ? 'ml-10' : index === 2 ? 'ml-4' : ''}`}>
            <MiniStatCard stat={stat} />
          </div>
        ))}
      </div>

      <div className="relative ml-auto w-full max-w-[705px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_24px_55px_rgba(49,69,78,0.16)] xl:w-[690px]">
        <div className="absolute inset-y-0 left-0 w-14 bg-gradient-to-b from-databrains-teal to-[#08616e]" />
        <div className="absolute left-0 top-0 flex w-14 flex-col items-center gap-7 py-7 text-white/90">
          {[faTableCellsLarge, faLink, faChartLine, faFolderOpen, faUserGroup, faDatabase].map((icon) => (
            <FontAwesomeIcon key={icon.iconName} icon={icon} className="text-lg" />
          ))}
        </div>

        <div className="ml-14 p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-heading text-base font-bold text-databrains-slate">Resumen general</h2>
            <div className="flex items-center gap-4">
              <div className="rounded-xl border border-gray-200 px-4 py-2 text-xs font-semibold text-databrains-slate/65">Últimos 30 días</div>
              <FontAwesomeIcon icon={faBell} className="text-databrains-slate/65" />
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-databrains-teal text-xs font-bold text-white">DB</div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {summaryCards.map((card) => (
              <div key={card.label} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="text-[11px] font-bold text-databrains-slate/70">{card.label}</div>
                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <div className="font-heading text-2xl font-extrabold text-databrains-slate">{card.value}</div>
                    <div className="mt-3 text-[10px] font-semibold text-databrains-teal">{card.note}</div>
                  </div>
                  {card.chart === 'bars' && (
                    <div className="flex h-12 items-end gap-1">
                      {[16, 24, 34, 44, 54].map((height) => (
                        <span key={height} className="w-1.5 rounded-full bg-databrains-aqua" style={{ height }} />
                      ))}
                    </div>
                  )}
                  {card.chart === 'line' && (
                    <svg className="h-11 w-16 text-databrains-aqua" viewBox="0 0 64 44" fill="none" aria-hidden="true">
                      <path d="M4 34L17 24L29 29L42 13L60 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {card.chart === 'donut' && (
                    <div className="h-11 w-11 rounded-full border-[6px] border-databrains-paleCyan border-r-databrains-teal" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[1.45fr_1fr]">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="font-heading text-sm font-bold text-databrains-slate">Rendimiento de proyectos</h3>
              <div className="mt-5 h-36">
                <svg viewBox="0 0 390 150" className="h-full w-full" fill="none" aria-hidden="true">
                  {[0, 1, 2, 3].map((line) => (
                    <path key={line} d={`M0 ${18 + line * 34}H390`} stroke="#E7EEF0" strokeWidth="1" strokeDasharray="5 5" />
                  ))}
                  <path
                    d="M8 126L52 82L94 70L138 95L180 55L222 83L264 40L308 55L356 16"
                    stroke="#25B7C6"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'].map((month, index) => (
                    <text key={month} x={12 + index * 68} y="146" fill="#66818A" fontSize="10">{month}</text>
                  ))}
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="font-heading text-sm font-bold text-databrains-slate">Estado de proyectos</h3>
                <div className="mt-4 space-y-4 text-sm">
                  {[
                    ['En desarrollo', '12', 'bg-databrains-teal'],
                    ['En pruebas', '6', 'bg-databrains-coral'],
                    ['Completados', '5', 'bg-databrains-aqua'],
                  ].map(([label, value, color]) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-databrains-slate/70">
                        <span className={`h-2 w-2 rounded-full ${color}`} />
                        {label}
                      </span>
                      <strong className="text-databrains-slate">{value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="font-heading text-sm font-bold text-databrains-slate">Alertas críticas</h3>
                <div className="mt-5 flex items-center gap-3">
                  <span className="font-heading text-3xl font-extrabold text-databrains-slate">2</span>
                  <span className="h-2 w-2 rounded-full bg-databrains-coral" />
                  <span className="text-xs text-databrains-slate/70">Requieren atención</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex justify-between text-sm font-bold text-databrains-slate">
              <span>Uso de recursos</span>
              <span>72%</span>
            </div>
            <div className="h-3 rounded-full bg-databrains-lightGray">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-databrains-teal to-databrains-aqua" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MetricStrip() {
  return (
    <section className="border-y border-gray-200 bg-white">
      <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-8 px-5 py-7 md:grid-cols-4 lg:px-8">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex items-center justify-center gap-4 md:justify-start">
            <FontAwesomeIcon icon={metric.icon} className="text-2xl text-databrains-teal" />
            <div>
              <div className="font-heading text-3xl font-extrabold text-databrains-teal">{metric.value}</div>
              <div className="max-w-[110px] text-xs font-bold leading-4 text-databrains-slate">{metric.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 lg:px-8">
      <WavePattern className="-left-44 top-24 h-72 w-[560px]" />
      <WavePattern className="-right-20 -top-20 h-72 w-[560px] rotate-12" />

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl font-extrabold text-databrains-slate">¿Quiénes somos?</h2>
          <div className="mx-auto mt-5 h-1 w-9 rounded-full bg-databrains-aqua" />
          <p className="mt-7 leading-7 text-databrains-slate/80">
            Somos un equipo especializado en el desarrollo de software, con más de 10 años de experiencia trabajando con
            empresas y proyectos independientes. Nos apasiona crear soluciones que combinan tecnología de punta con una
            atención al detalle para satisfacer las necesidades de nuestros clientes.
          </p>
          <p className="mt-6 leading-7 text-databrains-slate/80">
            Desde la creación de páginas web profesionales hasta la integración de soluciones avanzadas en IA y optimización
            en la nube, te ayudamos a construir soluciones a medida.
          </p>
        </div>

        <div className="mt-12 grid gap-12 rounded-3xl border border-databrains-aqua/20 bg-gradient-to-br from-databrains-paleCyan/30 to-white p-8 shadow-sm lg:grid-cols-[1.1fr_1fr] lg:p-10">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={teamImage}
              alt="Equipo de consultoría tecnológica colaborando alrededor de una laptop"
              className="h-full min-h-[360px] w-full object-cover"
            />
            <div className="absolute left-7 top-7 rounded-xl bg-white/90 p-5 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faChartLine} className="text-xl text-databrains-teal" />
                <div>
                  <div className="font-heading text-3xl font-extrabold text-databrains-teal">+24%</div>
                  <div className="text-xs font-semibold leading-4 text-databrains-slate">Productividad del equipo</div>
                </div>
              </div>
              <div className="mt-5 flex h-10 items-end gap-1">
                {[10, 14, 19, 24, 30, 36, 42].map((height) => (
                  <span key={height} className="w-1.5 rounded-full bg-databrains-aqua" style={{ height }} />
                ))}
              </div>
            </div>
            <div className="absolute bottom-7 left-24 rounded-xl bg-gradient-to-r from-databrains-teal to-databrains-aqua px-7 py-5 text-white shadow-xl">
              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faUserGroup} className="text-3xl" />
                <div className="font-heading text-lg font-bold leading-6">Enfoque Humano<br />+ Tech</div>
              </div>
            </div>
          </div>

          <div className="py-3">
            <h2 className="font-heading text-4xl font-extrabold text-databrains-slate">Lo que Nos Destaca:</h2>
            <div className="mt-4 h-1 w-14 rounded-full bg-databrains-aqua" />
            <p className="mt-7 leading-7 text-databrains-slate/80">
              Nuestra experiencia diversa nos permite ofrecer soluciones integrales, desde lo más básico hasta lo más
              complejo, adaptándonos a las necesidades de cada cliente. Ya sea que estés empezando con tu primer sitio web
              o necesites una solución avanzada en IA o DevOps, estamos aquí para ayudarte.
            </p>
            <div className="relative mt-8 space-y-8 pl-14">
              <div className="absolute left-[18px] top-4 h-[calc(100%-32px)] w-px bg-databrains-aqua" />
              {features.map((feature) => (
                <div key={feature.title} className="relative">
                  <span className="absolute -left-[42px] top-1 flex h-9 w-9 items-center justify-center rounded-full bg-white text-databrains-teal">
                    <FontAwesomeIcon icon={feature.icon} className="text-xl" />
                  </span>
                  <span className="absolute -left-[40px] top-4 h-2 w-2 rounded-full bg-databrains-teal" />
                  <h3 className="font-heading text-lg font-extrabold text-databrains-slate">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-databrains-slate/75">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="bg-white px-5 py-8 lg:px-8">
      <div className="mx-auto max-w-[1320px]">
        <div className="text-center">
          <h2 className="font-heading text-4xl font-extrabold text-databrains-slate">Nuestros Servicios</h2>
          <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-databrains-aqua" />
          <p className="mt-4 text-lg text-databrains-slate">Desde la idea hasta la innovación.</p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <article
              key={service.title}
              className="min-h-[260px] rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_12px_28px_rgba(49,69,78,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(49,69,78,0.14)]"
            >
              <FontAwesomeIcon icon={service.icon} className="text-5xl text-databrains-teal" />
              <h3 className="mt-8 font-heading text-lg font-extrabold leading-6 text-databrains-slate">{service.title}</h3>
              <p className="mt-5 text-sm leading-6 text-databrains-slate/75">{service.description}</p>
              <div className="mt-7 h-1 w-9 rounded-full bg-databrains-coral" />
            </article>
          ))}
        </div>

        <p className="mx-auto mt-9 max-w-4xl text-center text-lg leading-7 text-databrains-slate">
          Te acompañamos en cada etapa de tu transformación digital: diseñamos tu software,
          lo optimizamos en la nube, automatizamos tus procesos, analizamos tus datos y
          usamos <strong className="text-databrains-teal">IA para potenciar tu futuro.</strong>
        </p>
      </div>
    </section>
  )
}

function ContactCTA() {
  return (
    <section className="bg-white px-5 py-12 lg:px-8">
      <div className="mx-auto max-w-[1320px] overflow-hidden rounded-2xl bg-gradient-to-r from-[#066b78] via-databrains-teal to-[#10a9b8] p-8 text-white shadow-[0_18px_40px_rgba(6,107,120,0.28)]">
        <div className="grid items-center gap-8 lg:grid-cols-[130px_1fr_285px_220px]">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/35 bg-white/5">
            <FontAwesomeIcon icon={faRocket} className="text-5xl" />
          </div>
          <h2 className="font-heading text-3xl font-extrabold leading-tight lg:text-4xl">
            ¿Tienes un proyecto en mente?<br />
            Contáctanos y descubre cómo<br />
            podemos llevarlo al siguiente nivel.
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-4 rounded-xl bg-white/10 px-5 py-4">
              <FontAwesomeIcon icon={faClock} className="text-2xl" />
              <div>
                <div className="font-heading font-bold">Respuesta rápida</div>
                <div className="text-sm text-white/80">Menos de 2 horas</div>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-white/10 px-5 py-4">
              <FontAwesomeIcon icon={faUsers} className="text-2xl" />
              <div>
                <div className="font-heading font-bold">Atención personalizada</div>
                <div className="text-sm text-white/80">Soluciones a tu medida</div>
              </div>
            </div>
          </div>
          <Link
            to="/contacto"
            className="inline-flex min-h-[74px] items-center justify-center gap-4 rounded-xl bg-databrains-coral px-8 text-xl font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            CONTACTO
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <SEO
        title="Inicio | DataBrains"
        description="Transformamos ideas en tecnología efectiva con software, nube, datos, IA y consultoría digital."
      />
      <main className="overflow-hidden bg-white">
        <section className="relative bg-white px-5 py-6 lg:px-8 lg:py-8">
          <WavePattern className="-right-36 bottom-0 h-80 w-[620px]" />
          <div className="relative z-10 mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[0.87fr_1.13fr]">
            <div className="max-w-[500px] py-12">
              <p className="font-heading text-xl font-extrabold text-databrains-teal">DAtaBrains</p>
              <h1 className="mt-4 font-heading text-5xl font-extrabold leading-[1.05] text-databrains-slate lg:text-[58px]">
                Transformamos ideas en tecnología efectiva
              </h1>
              <p className="mt-4 font-heading text-2xl font-bold leading-tight text-databrains-slate">
                con un enfoque ágil y personalizado.
              </p>
              <div className="mt-5 h-1 w-10 rounded-full bg-databrains-aqua" />
              <p className="mt-8 max-w-[450px] text-base leading-7 text-databrains-slate/80">
                Desarrollamos soluciones de software, datos e IA que impulsan la eficiencia,
                optimizan procesos y generan resultados medibles para tu negocio.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-3 rounded-md bg-databrains-coral px-8 py-4 text-sm font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral focus-visible:ring-offset-2"
                >
                  Hablemos de tu proyecto
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                <Link
                  to="/soluciones-empresariales"
                  className="inline-flex items-center justify-center rounded-md border border-databrains-teal px-8 py-4 text-sm font-extrabold text-databrains-slate transition duration-300 hover:-translate-y-1 hover:bg-databrains-paleCyan/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral focus-visible:ring-offset-2"
                >
                  Conoce nuestras soluciones
                </Link>
              </div>
            </div>
            <DashboardMockup />
          </div>
        </section>

        <MetricStrip />
        <AboutSection />
        <ServicesSection />
        <ContactCTA />
      </main>
    </>
  )
}
