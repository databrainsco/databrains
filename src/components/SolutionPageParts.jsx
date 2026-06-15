import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import Carousel from './Carousel'

export function WavePattern({ className = '' }) {
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

export function SectionTitle({ children, light = false, subtitle }) {
  return (
    <div className="text-center">
      <h2 className={`font-heading text-[22px] font-extrabold leading-tight md:text-[26px] lg:text-[34px] ${light ? 'text-white' : 'text-databrains-slate'}`}>
        {children}
      </h2>
      <div className={`mx-auto mt-2 h-1 w-9 rounded-full lg:mt-3 lg:w-11 ${light ? 'bg-white/80' : 'bg-databrains-aqua'}`} />
      {subtitle && <p className={`mx-auto mt-4 max-w-2xl text-sm leading-6 lg:text-base ${light ? 'text-white/90' : 'text-databrains-slate/75'}`}>{subtitle}</p>}
    </div>
  )
}

export function SolutionHero({ label, title, description, heroImage, heroAlt, badgeIcon, secondaryCta, ctaLabel, ctaVariant = 'coral' }) {
  return (
    <section className="relative overflow-visible bg-white px-5 pb-6 pt-9 min-[860px]:px-10 min-[860px]:pb-5 min-[860px]:pt-1 lg:px-8 lg:pb-14 lg:pt-20">
      <WavePattern className="left-[42%] top-[225px] h-72 w-[430px] min-[860px]:top-[178px] lg:top-[225px]" />
      <div className="relative z-10 mx-auto grid max-w-[1320px] items-center gap-8 min-[860px]:grid-cols-[0.88fr_1fr] min-[860px]:gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
        <div className="min-[860px]:pt-5 lg:pt-0">
          {label && <p className="font-heading text-sm font-extrabold text-databrains-teal lg:text-base">{label}</p>}
          <h1 className="mt-3 font-heading text-[30px] font-extrabold leading-[1.08] text-databrains-slate md:text-[36px] lg:text-[52px]">{title}</h1>
          <div className="mt-3 h-1 w-10 rounded-full bg-databrains-aqua lg:mt-5 lg:w-14" />
          <p className="mt-5 max-w-[520px] text-[13px] leading-6 text-databrains-slate/80 lg:text-lg lg:leading-8">{description}</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row lg:mt-8">
            <HeroCTAButton label={ctaLabel} variant={ctaVariant} />
            {secondaryCta && (
              <Link
                to={secondaryCta.to}
                className="inline-flex items-center justify-center rounded-md border border-databrains-teal px-5 py-3 text-xs font-extrabold text-databrains-slate transition duration-300 hover:bg-databrains-paleCyan/40 lg:px-8 lg:py-4 lg:text-base"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-xl shadow-[0_22px_48px_rgba(49,69,78,0.18)]">
            <img src={heroImage} alt={heroAlt} className="h-[292px] w-full object-cover lg:h-[420px]" />
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white/40 to-transparent" />
          </div>
          {badgeIcon && (
            <div className="absolute -bottom-6 -right-2 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-databrains-teal to-databrains-aqua text-3xl text-white shadow-xl lg:-bottom-9 lg:h-28 lg:w-28 lg:rounded-xl lg:text-5xl">
              <FontAwesomeIcon icon={badgeIcon} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export function CarouselServiceCard({ title, description, icon, image, imageAlt }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_14px_32px_rgba(0,0,0,0.12)]">
      <div className="relative h-[170px] overflow-hidden bg-slate-900">
        <img src={image} alt={imageAlt || title} className="h-full w-full object-cover object-top" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        <div className="absolute -bottom-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-databrains-teal text-lg text-white shadow-md">
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-10 text-center">
        <h3 className="font-heading text-base font-extrabold text-databrains-slate">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-databrains-slate/75">{description}</p>
        <Link
          to="/contacto"
          className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-semibold text-databrains-teal transition duration-300 hover:text-databrains-coral"
        >
          Ver más
          <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
        </Link>
      </div>
    </article>
  )
}

export function ServicesCarouselSection({ title, subtitle, items }) {
  return (
    <section className="bg-gradient-to-r from-[#087f8d] to-[#16aeba] px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle light subtitle={subtitle}>{title}</SectionTitle>
        <div className="mt-8 lg:mt-10">
          <Carousel variant="dark">
            {items.map((item) => (
              <CarouselServiceCard key={item.title} {...item} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export function BenefitsGrid({ title, benefits, lightBg = true }) {
  return (
    <section className={`px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14 ${lightBg ? 'bg-databrains-lightGray' : 'bg-white'}`}>
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle>{title}</SectionTitle>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center text-4xl text-databrains-teal">
                <FontAwesomeIcon icon={benefit.icon} />
              </div>
              <h3 className="mt-4 font-heading text-base font-extrabold text-databrains-slate">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-6 text-databrains-slate/75">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BeforeAfterSection({ title, beforeItems, afterItems, beforeImage, afterImage }) {
  return (
    <section className="bg-white px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle>{title}</SectionTitle>
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1fr_1.15fr_1fr] lg:gap-10">
          <div>
            <span className="inline-block rounded-md bg-databrains-coral px-3 py-1 text-xs font-bold text-white">Antes</span>
            <ul className="mt-5 space-y-3">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-databrains-slate/80 lg:text-base">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-databrains-coral/15 text-databrains-coral">
                    <FontAwesomeIcon icon={faXmark} className="text-xs" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center gap-4">
            <img src={beforeImage} alt="Situación anterior" className="h-36 w-36 rounded-full border-4 border-gray-200 object-cover grayscale lg:h-44 lg:w-44" />
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-databrains-teal text-white shadow-md">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <img src={afterImage} alt="Situación mejorada" className="h-36 w-36 rounded-full border-4 border-databrains-teal object-cover lg:h-44 lg:w-44" />
          </div>

          <div>
            <span className="inline-block rounded-md bg-databrains-teal px-3 py-1 text-xs font-bold text-white">Después</span>
            <ul className="mt-5 space-y-3">
              {afterItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-databrains-slate/80 lg:text-base">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-databrains-teal text-white">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-xs" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ChallengesGrid({ title, items }) {
  return (
    <section className="bg-white px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle>{title}</SectionTitle>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-[0_10px_26px_rgba(49,69,78,0.08)]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-databrains-paleCyan/60 text-2xl text-databrains-teal">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3 className="mt-4 font-heading text-base font-extrabold text-databrains-slate">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-databrains-slate/75">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PhotoCardGrid({ title, subtitle, items }) {
  return (
    <section className="bg-white px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle subtitle={subtitle}>{title}</SectionTitle>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_10px_26px_rgba(49,69,78,0.08)]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover object-top" />
              </div>
              <div className="relative px-5 pb-5 pt-8">
                <div className="absolute -top-6 left-5 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-databrains-teal text-white shadow-md">
                  <FontAwesomeIcon icon={item.icon} className="text-lg" />
                </div>
                <h3 className="font-heading text-base font-extrabold text-databrains-slate">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-databrains-slate/75">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatChart({ type, value }) {
  if (type === 'line') {
    return (
      <div className="mt-4">
        <svg viewBox="0 0 200 60" className="h-14 w-full text-databrains-teal" fill="none" aria-hidden="true">
          <path d="M8 48L48 38L88 42L128 28L168 18L192 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="mt-2 font-heading text-2xl font-extrabold text-databrains-teal">{value}</div>
      </div>
    )
  }

  if (type === 'bars') {
    return (
      <div className="mt-4">
        <div className="flex h-14 items-end gap-2">
          {[18, 26, 34, 42, 52].map((height) => (
            <span key={height} className="flex-1 rounded-t bg-databrains-aqua" style={{ height }} />
          ))}
        </div>
        <div className="mt-2 font-heading text-2xl font-extrabold text-databrains-teal">{value}</div>
      </div>
    )
  }

  return (
    <div className="mt-4 flex items-center gap-4">
      <div className="h-16 w-16 rounded-full border-[8px] border-databrains-paleCyan border-r-databrains-teal" />
      <div className="font-heading text-2xl font-extrabold text-databrains-teal">{value}</div>
    </div>
  )
}

export function BusinessIntelligencePanel({ title, description, checklist, stats }) {
  return (
    <section className="bg-white px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle>{title}</SectionTitle>
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-base leading-7 text-databrains-slate/80 lg:text-lg">{description}</p>
            <ul className="mt-8 space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-semibold text-databrains-slate lg:text-base">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-databrains-teal text-white">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-xs" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {stats.map((stat) => (
              <article key={stat.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-[0_10px_26px_rgba(49,69,78,0.08)]">
                <h3 className="font-heading text-sm font-extrabold text-databrains-slate">{stat.title}</h3>
                <StatChart type={stat.chart} value={stat.value} />
                <p className="mt-1 text-xs font-semibold text-databrains-slate/70">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function FinalCTABlock({ title, description, ctaLabel, image, floatingIcons = [] }) {
  return (
    <section className="bg-white px-5 py-3 min-[860px]:px-7 lg:px-8 lg:py-10">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-xl bg-gradient-to-r from-[#087b88] to-[#12a7b5] text-white shadow-[0_18px_38px_rgba(8,123,136,0.2)]">
        <div className="relative z-10 grid min-h-[280px] items-center gap-8 px-8 py-8 lg:min-h-[330px] lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-10">
          <div>
            <h2 className="font-heading text-[27px] font-extrabold leading-tight md:text-[27px] lg:text-5xl">{title}</h2>
            <div className="mt-2 h-1 w-10 rounded-full bg-white lg:mt-5 lg:w-12" />
            <p className="mt-4 max-w-[500px] text-[13px] leading-5 text-white/92 lg:mt-8 lg:text-lg lg:leading-8">{description}</p>
            <Link
              to="/contacto"
              className="mt-4 inline-flex items-center justify-center gap-3 rounded-md bg-databrains-coral px-5 py-3 text-xs font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white lg:mt-8 lg:px-8 lg:py-4 lg:text-lg"
            >
              {ctaLabel}
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          {image && (
            <div className="relative flex justify-center">
              <img src={image} alt="" className="max-h-[280px] w-full max-w-[400px] rounded-xl object-cover object-top" />
              {floatingIcons.map((icon, index) => (
                <div
                  key={icon.iconName}
                  className={`absolute hidden h-14 w-14 items-center justify-center rounded-full bg-white text-2xl text-databrains-teal shadow-lg lg:flex ${
                    index === 0 ? '-left-2 top-8' : index === 1 ? 'right-4 top-2' : index === 2 ? 'bottom-6 right-0' : 'bottom-2 left-8'
                  }`}
                >
                  <FontAwesomeIcon icon={icon} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export function HeroCTAButton({ label = 'Solicita una consulta gratuita', variant = 'coral' }) {
  const styles =
    variant === 'teal'
      ? 'bg-databrains-teal focus-visible:ring-databrains-teal'
      : 'bg-databrains-coral focus-visible:ring-databrains-coral'
  return (
    <Link
      to="/contacto"
      className={`inline-flex items-center justify-center gap-3 rounded-md px-5 py-3 text-xs font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 lg:px-8 lg:py-4 lg:text-base ${styles}`}
    >
      {label}
      <FontAwesomeIcon icon={faArrowRight} />
    </Link>
  )
}

export function ProcessTimeline({ title, steps }) {
  return (
    <section className="bg-white px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle>{title}</SectionTitle>
        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gray-200 lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <article key={step.title} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-databrains-teal text-2xl text-white shadow-md">
                  <FontAwesomeIcon icon={step.icon} />
                </div>
                <p className="mt-2 text-xs font-bold text-databrains-teal">{index + 1}.</p>
                <h3 className="mt-1 font-heading text-sm font-extrabold text-databrains-slate lg:text-base">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-databrains-slate/75">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function IconFeatureGrid({ title, subtitle, items }) {
  return (
    <section className="bg-white px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle subtitle={subtitle}>{title}</SectionTitle>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.title} className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-[0_10px_26px_rgba(49,69,78,0.08)]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-databrains-paleCyan/60 text-2xl text-databrains-teal">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3 className="mt-4 font-heading text-base font-extrabold text-databrains-slate">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-databrains-slate/75">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function NumberedSteps({ title, steps }) {
  return (
    <section className="bg-white px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle>{title}</SectionTitle>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-databrains-teal text-lg font-extrabold text-white">
                {index + 1}
              </div>
              <div className="mx-auto mt-4 flex h-12 w-12 items-center justify-center text-2xl text-databrains-teal">
                <FontAwesomeIcon icon={step.icon} />
              </div>
              <h3 className="mt-3 font-heading text-sm font-extrabold text-databrains-slate lg:text-base">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-databrains-slate/75">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AudiencePhotoGrid({ title, items }) {
  return (
    <section className="bg-white px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle>{title}</SectionTitle>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_10px_26px_rgba(49,69,78,0.08)]">
              <img src={item.image} alt={item.title} className="h-32 w-full object-cover object-top" />
              <div className="p-4">
                <h3 className="font-heading text-sm font-extrabold text-databrains-slate">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-databrains-slate/75">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ResultsSplitSection({ image, items }) {
  return (
    <section className="bg-databrains-lightGray px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-2">
        <img src={image} alt="" className="rounded-xl shadow-[0_18px_38px_rgba(49,69,78,0.15)]" />
        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <article key={item.title} className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-[0_10px_26px_rgba(49,69,78,0.08)]">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-databrains-paleCyan/60 text-lg text-databrains-teal">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div>
                <h3 className="font-heading text-sm font-extrabold text-databrains-slate">{item.title}</h3>
                <p className="mt-1 text-xs leading-5 text-databrains-slate/75">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeatureIllustrationGrid({ items }) {
  return (
    <section className="bg-white px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_10px_26px_rgba(49,69,78,0.08)]">
              <img src={item.image} alt={item.title} className="h-40 w-full object-cover object-top" />
              <div className="p-6">
                <h3 className="font-heading text-base font-extrabold text-databrains-slate">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-databrains-slate/75">{item.description}</p>
                <Link to="/contacto" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-databrains-teal hover:text-databrains-coral">
                  Conoce más
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProcessFlowRow({ steps }) {
  return (
    <section className="bg-white px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-databrains-teal/30 bg-databrains-paleCyan/40 text-2xl text-databrains-teal">
                <FontAwesomeIcon icon={step.icon} />
              </div>
              <h3 className="mt-4 font-heading text-sm font-extrabold text-databrains-slate lg:text-base">{step.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function UseCasesGrid({ title, items }) {
  return (
    <section className="bg-databrains-lightGray px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle>{title}</SectionTitle>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <article key={item.title} className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-[0_10px_26px_rgba(49,69,78,0.08)]">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-databrains-paleCyan/60 text-2xl text-databrains-teal">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <p className="text-sm font-semibold leading-6 text-databrains-slate">{item.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SimpleCenterCTA({ title, ctaLabel }) {
  return (
    <section className="bg-white px-5 py-12 min-[860px]:px-10 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1320px] text-center">
        <h2 className="font-heading text-2xl font-extrabold text-databrains-slate lg:text-4xl">{title}</h2>
        <Link
          to="/contacto"
          className="mt-8 inline-flex items-center justify-center gap-3 rounded-md bg-databrains-coral px-8 py-4 text-base font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          {ctaLabel}
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </section>
  )
}
