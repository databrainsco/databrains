import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBullseye, faCalendarCheck, faChartPie, faCircleCheck, faEye, faGears, faRocket, faXmark } from '@fortawesome/free-solid-svg-icons'
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

export function SolutionHero({ label, title, subtitle, description, heroImage, heroAlt, badgeIcon, secondaryCta, ctaLabel, ctaVariant = 'coral' }) {
  return (
    <section className="relative overflow-visible bg-white px-5 pb-6 pt-9 min-[860px]:px-10 min-[860px]:pb-5 min-[860px]:pt-1 lg:px-8 lg:pb-14 lg:pt-20">
      <WavePattern className="left-[42%] top-[225px] h-72 w-[430px] min-[860px]:top-[178px] lg:top-[225px]" />
      <div className="relative z-10 mx-auto grid max-w-[1320px] items-center gap-8 min-[860px]:grid-cols-[0.88fr_1fr] min-[860px]:gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
        <div className="min-[860px]:pt-5 lg:pt-0">
          {label && !subtitle && <p className="font-heading text-sm font-extrabold text-databrains-teal lg:text-base">{label}</p>}
          <h1 className={`font-heading text-[30px] font-extrabold leading-[1.08] text-databrains-slate md:text-[36px] lg:text-[52px] ${label && !subtitle ? 'mt-3' : ''}`}>
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 font-heading text-xl font-extrabold leading-snug text-databrains-slate md:text-2xl lg:mt-4 lg:text-[28px] lg:leading-[1.2]">
              {subtitle}
            </p>
          )}
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
            <img src={heroImage} alt={heroAlt} className="h-[292px] w-full object-cover object-center lg:h-[420px]" />
            <div className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-2.5 bg-gradient-to-r from-databrains-teal to-databrains-aqua lg:h-3" />
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
    <article className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_14px_32px_rgba(0,0,0,0.12)]">
      <div className="relative h-[170px] overflow-hidden bg-slate-900">
        <img src={image} alt={imageAlt || title} className="h-full w-full object-cover object-top" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
      </div>
      <div className="absolute left-6 top-[170px] z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-databrains-teal text-lg text-white shadow-md">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="relative z-0 flex flex-1 flex-col px-5 pb-5 pt-10 text-center">
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

export function BenefitsGrid({ title, benefits, lightBg = true, paleBlueBg = false }) {
  const sectionBg = paleBlueBg ? 'bg-[#ecf7f9]' : lightBg ? 'bg-databrains-lightGray' : 'bg-white'

  return (
    <section className={`px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14 ${sectionBg}`}>
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

const BENEFIT_BUBBLE_STYLES = [
  { bg: '#23949C', icon: faBullseye },
  { bg: '#F1C40F', icon: faCalendarCheck },
  { bg: '#31454E', icon: faRocket },
  { bg: '#FF4F5A', icon: faGears },
  { bg: '#66CAD2', icon: faEye },
]

const BUBBLE_CENTER_COLOR = '#23949C'

const BUBBLE_MAP = {
  width: 1280,
  height: 720,
  cx: 640,
  cy: 360,
  orbitRadius: 248,
  outerBubbleSize: 168,
  centerSize: 204,
  nodeCount: 5,
  startAngleDeg: -90,
  shadow: { dy: 6 },
}

const BUBBLE_TEXT = {
  icon: 'text-white [filter:drop-shadow(0_1px_2px_rgba(49,69,78,0.35))]',
  title: 'text-white [text-shadow:0_1px_3px_rgba(49,69,78,0.4)]',
  description: 'text-white/90 [text-shadow:0_1px_2px_rgba(49,69,78,0.35)]',
  subtitle: 'text-white/85 [text-shadow:0_1px_2px_rgba(49,69,78,0.35)]',
}

function getRadialBubblePositions() {
  const step = 360 / BUBBLE_MAP.nodeCount

  return Array.from({ length: BUBBLE_MAP.nodeCount }, (_, index) => {
    const angleDeg = BUBBLE_MAP.startAngleDeg + step * index
    const rad = (angleDeg * Math.PI) / 180

    return {
      benefitIndex: index,
      angleDeg,
      x: BUBBLE_MAP.cx + BUBBLE_MAP.orbitRadius * Math.cos(rad),
      y: BUBBLE_MAP.cy + BUBBLE_MAP.orbitRadius * Math.sin(rad),
    }
  })
}

const DECORATIVE_GRAY_CIRCLES = [
  { cx: 95, cy: 88, r: 52 },
  { cx: 210, cy: 195, r: 24 },
  { cx: 168, cy: 520, r: 38 },
  { cx: 320, cy: 610, r: 18 },
  { cx: 1085, cy: 105, r: 44 },
  { cx: 1160, cy: 240, r: 20 },
  { cx: 1185, cy: 480, r: 34 },
  { cx: 1020, cy: 620, r: 16 },
  { cx: 780, cy: 655, r: 28 },
  { cx: 480, cy: 42, r: 22 },
  { cx: 860, cy: 58, r: 30 },
  { cx: 55, cy: 340, r: 26 },
  { cx: 1225, cy: 360, r: 14 },
  { cx: 400, cy: 120, r: 12 },
  { cx: 920, cy: 680, r: 20 },
]

const DECORATIVE_GRAY_CIRCLES_MOBILE = [
  { left: '6%', top: '12%', size: 64 },
  { left: '78%', top: '8%', size: 48 },
  { left: '82%', top: '55%', size: 32 },
  { left: '4%', top: '68%', size: 40 },
  { left: '42%', top: '88%', size: 24 },
  { left: '18%', top: '38%', size: 18 },
  { left: '68%', top: '32%', size: 22 },
]

function BenefitsBubbleMapBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem] xl:rounded-[2.5rem]" aria-hidden>
      <div className="absolute inset-[3%] rounded-[1.75rem] bg-white/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.75)] xl:rounded-[2rem]" />
      <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-databrains-aqua/[0.07] blur-3xl" />
      <div className="absolute -left-[6%] top-[8%] h-[42%] w-[42%] rounded-full bg-databrains-teal/[0.08] blur-3xl" />
      <div className="absolute -right-[5%] top-[4%] h-[38%] w-[38%] rounded-full bg-databrains-paleCyan/20 blur-3xl" />
      <div className="absolute -bottom-[8%] left-[18%] h-[36%] w-[36%] rounded-full bg-databrains-aqua/[0.09] blur-3xl" />
      <div className="absolute -bottom-[4%] -right-[2%] h-[30%] w-[30%] rounded-full bg-databrains-yellow/[0.06] blur-3xl" />

      <svg className="absolute inset-0 h-full w-full" viewBox={`0 0 ${BUBBLE_MAP.width} ${BUBBLE_MAP.height}`} preserveAspectRatio="xMidYMid meet">
        {DECORATIVE_GRAY_CIRCLES.map((circle, index) => (
          <circle
            key={`decor-${index}`}
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill="#31454E"
            fillOpacity="0.045"
          />
        ))}
        <circle cx={BUBBLE_MAP.cx} cy={BUBBLE_MAP.cy} r={340} fill="none" stroke="#23949C" strokeOpacity="0.04" strokeWidth="1" />
        <circle cx={BUBBLE_MAP.cx} cy={BUBBLE_MAP.cy} r={400} fill="none" stroke="#66CAD2" strokeOpacity="0.03" strokeWidth="1" />
        <circle cx={BUBBLE_MAP.cx} cy={BUBBLE_MAP.cy} r={460} fill="none" stroke="#BEFCFF" strokeOpacity="0.05" strokeWidth="1" />
      </svg>
    </div>
  )
}

function BenefitsBubbleMapMobileBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl" aria-hidden>
      <div className="absolute inset-0 rounded-3xl bg-white/45 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7)]" />
      {DECORATIVE_GRAY_CIRCLES_MOBILE.map((circle, index) => (
        <div
          key={`decor-mobile-${index}`}
          className="absolute rounded-full bg-databrains-slate/[0.045]"
          style={{ left: circle.left, top: circle.top, width: circle.size, height: circle.size }}
        />
      ))}
      <div className="absolute -left-10 top-8 h-48 w-48 rounded-full bg-databrains-teal/[0.08] blur-3xl" />
      <div className="absolute -right-8 top-24 h-40 w-40 rounded-full bg-databrains-aqua/[0.1] blur-3xl" />
      <div className="absolute bottom-12 left-1/4 h-44 w-44 rounded-full bg-databrains-paleCyan/25 blur-3xl" />
    </div>
  )
}

function BenefitBubble({ benefit, style, size }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div
        className="absolute rounded-full bg-databrains-slate/[0.05]"
        style={{ width: size, height: size, left: 0, top: BUBBLE_MAP.shadow.dy }}
      />
      <div
        className="relative flex h-full w-full flex-col items-center justify-center rounded-full px-5 text-center shadow-[0_6px_20px_rgba(49,69,78,0.08)]"
        style={{ backgroundColor: style.bg }}
      >
        <FontAwesomeIcon icon={style.icon} className={`mb-2 text-[22px] ${BUBBLE_TEXT.icon}`} />
        <h3 className={`font-heading text-[12px] font-extrabold leading-tight xl:text-[13px] ${BUBBLE_TEXT.title}`}>
          {benefit.title}
        </h3>
        <p className={`mt-1.5 font-body text-[10px] font-normal leading-snug xl:text-[11px] ${BUBBLE_TEXT.description}`}>
          {benefit.description}
        </p>
      </div>
    </div>
  )
}

function BenefitsBubbleMapDesktop({ centerTitle, centerSubtitle, benefits }) {
  const bubblePoints = getRadialBubblePositions().map((bubble) => ({
    ...bubble,
    style: BENEFIT_BUBBLE_STYLES[bubble.benefitIndex % BENEFIT_BUBBLE_STYLES.length],
  }))

  const pct = (value, axis) => `${(value / BUBBLE_MAP[axis]) * 100}%`

  return (
    <div className="relative mx-auto hidden w-full max-w-[1280px] lg:block">
      <div className="relative w-full overflow-hidden rounded-[2rem] xl:rounded-[2.5rem]" style={{ paddingBottom: `${(BUBBLE_MAP.height / BUBBLE_MAP.width) * 100}%` }}>
        <BenefitsBubbleMapBackdrop />

        <svg
          className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
          viewBox={`0 0 ${BUBBLE_MAP.width} ${BUBBLE_MAP.height}`}
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <circle
            cx={BUBBLE_MAP.cx}
            cy={BUBBLE_MAP.cy}
            r={BUBBLE_MAP.orbitRadius}
            fill="none"
            stroke="#31454E"
            strokeOpacity="0.05"
            strokeWidth="1"
          />

          {bubblePoints.map((bubble) => (
            <line
              key={`line-${bubble.benefitIndex}`}
              x1={BUBBLE_MAP.cx}
              y1={BUBBLE_MAP.cy}
              x2={bubble.x}
              y2={bubble.y}
              stroke="#31454E"
              strokeOpacity="0.08"
              strokeWidth="1"
            />
          ))}
        </svg>

        <div
          className="absolute z-20"
          style={{
            left: pct(BUBBLE_MAP.cx, 'width'),
            top: pct(BUBBLE_MAP.cy, 'height'),
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="relative" style={{ width: BUBBLE_MAP.centerSize, height: BUBBLE_MAP.centerSize }}>
            <div
              className="absolute rounded-full bg-databrains-slate/[0.05]"
              style={{
                width: BUBBLE_MAP.centerSize,
                height: BUBBLE_MAP.centerSize,
                left: 0,
                top: BUBBLE_MAP.shadow.dy,
              }}
            />
            <div
              className="relative flex h-full w-full flex-col items-center justify-center rounded-full px-6 text-center shadow-[0_8px_28px_rgba(35,148,156,0.18)]"
              style={{ backgroundColor: BUBBLE_CENTER_COLOR }}
            >
              <FontAwesomeIcon icon={faChartPie} className={`mb-2 text-[28px] xl:text-[32px] ${BUBBLE_TEXT.icon}`} />
              <p className={`font-heading text-lg font-extrabold leading-tight xl:text-xl ${BUBBLE_TEXT.title}`}>
                {centerTitle}
              </p>
              <p className={`mt-1 font-body text-xs font-normal xl:text-sm ${BUBBLE_TEXT.subtitle}`}>{centerSubtitle}</p>
            </div>
          </div>
        </div>

        {bubblePoints.map((bubble) => {
          const benefit = benefits[bubble.benefitIndex]

          return (
            <div
              key={benefit.title}
              className="absolute z-10"
              style={{
                left: pct(bubble.x, 'width'),
                top: pct(bubble.y, 'height'),
                transform: 'translate(-50%, -50%)',
              }}
            >
              <BenefitBubble benefit={benefit} style={bubble.style} size={BUBBLE_MAP.outerBubbleSize} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function BenefitsRadialSection({ title, centerTitle, centerSubtitle, benefits, paleBlueBg = true }) {
  const sectionBg = paleBlueBg ? 'bg-[#f3f6f8]' : 'bg-databrains-lightGray'

  return (
    <section className={`px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14 ${sectionBg}`}>
      <div className="mx-auto max-w-[1320px]">
        {title && (
          <div className="mb-10 lg:mb-12">
            <SectionTitle>{title}</SectionTitle>
          </div>
        )}
        <div className="lg:hidden">
          <div className="relative overflow-hidden rounded-3xl px-4 py-8">
            <BenefitsBubbleMapMobileBackdrop />
            <div className="relative z-10 flex justify-center">
              <div className="relative" style={{ width: 156, height: 156 }}>
                <div className="absolute left-0 top-1.5 h-full w-full rounded-full bg-databrains-slate/[0.05]" />
                <div
                  className="relative flex h-full w-full flex-col items-center justify-center rounded-full px-4 text-center shadow-[0_6px_20px_rgba(35,148,156,0.16)]"
                  style={{ backgroundColor: BUBBLE_CENTER_COLOR }}
                >
                  <FontAwesomeIcon icon={faChartPie} className={`mb-1.5 text-xl ${BUBBLE_TEXT.icon}`} />
                  <p className={`font-heading text-sm font-extrabold ${BUBBLE_TEXT.title}`}>{centerTitle}</p>
                  <p className={`mt-0.5 font-body text-[11px] font-normal ${BUBBLE_TEXT.subtitle}`}>{centerSubtitle}</p>
                </div>
              </div>
            </div>
            <div className="relative z-10 mt-8 space-y-4">
              {benefits.map((benefit, index) => {
                const style = BENEFIT_BUBBLE_STYLES[index % BENEFIT_BUBBLE_STYLES.length]

                return (
                  <article
                    key={benefit.title}
                    className="flex items-center gap-4 rounded-xl border border-white/80 bg-white/90 px-4 py-4 shadow-[0_4px_16px_rgba(49,69,78,0.05)]"
                  >
                    <div className="relative flex-shrink-0" style={{ width: 80, height: 80 }}>
                      <div className="absolute left-0 top-1.5 h-20 w-20 rounded-full bg-databrains-slate/[0.05]" />
                      <div
                        className="relative flex h-20 w-20 flex-col items-center justify-center rounded-full shadow-[0_4px_14px_rgba(49,69,78,0.07)]"
                        style={{ backgroundColor: style.bg }}
                      >
                        <FontAwesomeIcon icon={style.icon} className={`text-xl ${BUBBLE_TEXT.icon}`} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-extrabold" style={{ color: style.bg }}>
                        {benefit.title}
                      </h3>
                      <p className="mt-1 font-body text-sm font-normal leading-6 text-databrains-slate/70">
                        {benefit.description}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>

        <BenefitsBubbleMapDesktop centerTitle={centerTitle} centerSubtitle={centerSubtitle} benefits={benefits} />
      </div>
    </section>
  )
}

function BeforeAfterList({ items, variant, spread = false }) {
  const isBefore = variant === 'before'

  return (
    <ul
      className={
        spread
          ? 'flex h-[200px] flex-col justify-between sm:h-[220px] xl:h-[250px]'
          : 'space-y-4 lg:space-y-[1.35rem]'
      }
    >
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm text-databrains-slate lg:text-[15px]">
          {!isBefore && (
            <span className="hidden h-px min-w-[1.25rem] flex-1 border-t border-dashed border-databrains-slate/30 lg:block" />
          )}
          <span
            className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[11px] text-white ${
              isBefore ? 'bg-databrains-coral' : 'bg-databrains-teal'
            }`}
          >
            <FontAwesomeIcon icon={isBefore ? faXmark : faCircleCheck} />
          </span>
          <span className="min-w-0 flex-1 leading-6">{item}</span>
          {isBefore && (
            <span className="hidden h-px min-w-[1.25rem] flex-1 border-t border-dashed border-databrains-slate/30 lg:block" />
          )}
        </li>
      ))}
    </ul>
  )
}

function BeforeAfterCard({ label, image, alt, variant }) {
  const isBefore = variant === 'before'

  return (
    <div className="relative w-[200px] sm:w-[220px] xl:w-[250px]">
      <span
        className={`absolute -top-3 z-10 rounded-full px-3.5 py-1 text-xs font-bold text-white shadow-sm ${
          isBefore ? 'left-4 bg-databrains-coral' : 'right-4 bg-databrains-teal'
        }`}
      >
        {label}
      </span>
      <div className="overflow-hidden rounded-[1.75rem] shadow-[0_16px_40px_rgba(49,69,78,0.14)] xl:rounded-[2rem]">
        <img
          src={image}
          alt={alt}
          className={`aspect-square w-full object-cover object-center ${isBefore ? 'grayscale' : ''}`}
        />
      </div>
    </div>
  )
}

function BeforeAfterTransitionArrow({ size = 'lg' }) {
  const isLarge = size === 'lg'

  return (
    <div
      className={`absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-databrains-teal/25 bg-white text-databrains-teal shadow-[0_8px_24px_rgba(49,69,78,0.14)] ${
        isLarge ? 'h-14 w-14 text-xl' : 'h-12 w-12 text-lg'
      }`}
    >
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  )
}

function BeforeAfterImages({ beforeImage, afterImage, beforeAlt, afterAlt }) {
  return (
    <div className="relative flex shrink-0 items-center">
      <BeforeAfterCard label="Antes" image={beforeImage} alt={beforeAlt} variant="before" />
      <div className="-ml-2 sm:-ml-3 xl:-ml-4">
        <BeforeAfterCard label="Después" image={afterImage} alt={afterAlt} variant="after" />
      </div>
      <BeforeAfterTransitionArrow />
    </div>
  )
}

export function BeforeAfterSection({
  title,
  beforeItems,
  afterItems,
  beforeImage,
  afterImage,
  beforeAlt = 'Situación antes de implementar la solución',
  afterAlt = 'Resultados después de implementar la solución',
}) {
  return (
    <section className="bg-white px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle>{title}</SectionTitle>

        <div className="mt-10 hidden items-center gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-10 xl:gap-14">
          <div className="pr-2 xl:pr-4">
            <BeforeAfterList items={beforeItems} variant="before" spread />
          </div>

          <BeforeAfterImages
            beforeImage={beforeImage}
            afterImage={afterImage}
            beforeAlt={beforeAlt}
            afterAlt={afterAlt}
          />

          <div className="pl-2 xl:pl-4">
            <BeforeAfterList items={afterItems} variant="after" spread />
          </div>
        </div>

        <div className="mt-10 space-y-8 lg:hidden">
          <div className="mx-auto w-fit">
            <BeforeAfterImages
              beforeImage={beforeImage}
              afterImage={afterImage}
              beforeAlt={beforeAlt}
              afterAlt={afterAlt}
            />
          </div>
          <BeforeAfterList items={beforeItems} variant="before" />
          <BeforeAfterList items={afterItems} variant="after" />
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
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="flex min-h-[210px] flex-col items-center rounded-2xl border border-gray-200/80 bg-white px-3 py-6 text-center shadow-[0_8px_22px_rgba(49,69,78,0.07)] sm:min-h-[230px] sm:px-4 sm:py-7 lg:min-h-[248px]"
            >
              <div className="text-[30px] text-databrains-teal sm:text-[34px]">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3 className="mt-4 font-heading text-[13px] font-extrabold leading-snug text-databrains-slate sm:text-sm lg:text-[15px]">
                {item.title}
              </h3>
              <p className="mt-2 text-[11px] leading-[1.5] text-databrains-slate/72 sm:text-xs sm:leading-5 lg:text-[13px]">
                {item.description}
              </p>
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

function BusinessIntelligenceSlide({ title, description, icon, image }) {
  return (
    <article className="relative h-[340px] overflow-hidden rounded-2xl sm:h-[400px] md:h-[460px] lg:h-[520px]">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/25" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center text-white sm:px-12 lg:px-16">
        <div className="mb-4 text-3xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] md:text-4xl">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h3 className="max-w-3xl font-heading text-[22px] font-extrabold leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] sm:text-3xl lg:text-[2.1rem]">
          {title}
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] sm:text-base lg:mt-5 lg:text-lg lg:leading-8">
          {description}
        </p>
      </div>
    </article>
  )
}

export function BusinessIntelligenceCarousel({ title, subtitle, items }) {
  return (
    <section className="bg-white px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle subtitle={subtitle}>{title}</SectionTitle>
        <div className="mt-8 lg:mt-10">
          <Carousel slideClassName="w-[92%] flex-shrink-0 snap-center sm:w-[90%] lg:w-[88%]" gapClassName="gap-5 lg:gap-8">
            {items.map((item) => (
              <BusinessIntelligenceSlide key={item.title} {...item} />
            ))}
          </Carousel>
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

function CTATechBackground() {
  return (
    <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1280 330" fill="none" preserveAspectRatio="xMidYMid slice">
      <g opacity="0.14" stroke="white" strokeWidth="1.2">
        <path d="M80 72 L220 72" strokeDasharray="2 6" />
        <path d="M220 72 L310 118" strokeDasharray="2 6" />
        <path d="M310 118 L420 88" strokeDasharray="2 6" />
        <path d="M420 88 L560 104" strokeDasharray="2 6" />
        <path d="M560 104 L720 78" strokeDasharray="2 6" />
        <path d="M720 78 L920 96" strokeDasharray="2 6" />
        <path d="M920 96 L1120 84" strokeDasharray="2 6" />
        <path d="M220 72 L180 168" strokeDasharray="2 6" />
        <path d="M420 88 L360 210" strokeDasharray="2 6" />
        <path d="M720 78 L780 196" strokeDasharray="2 6" />
      </g>
      <g fill="white" opacity="0.16">
        <circle cx="80" cy="72" r="3.5" />
        <circle cx="220" cy="72" r="3.5" />
        <circle cx="310" cy="118" r="3.5" />
        <circle cx="420" cy="88" r="3.5" />
        <circle cx="560" cy="104" r="3.5" />
        <circle cx="720" cy="78" r="3.5" />
        <circle cx="920" cy="96" r="3.5" />
        <circle cx="1120" cy="84" r="3.5" />
        <circle cx="180" cy="168" r="3" />
        <circle cx="360" cy="210" r="3" />
        <circle cx="780" cy="196" r="3" />
      </g>
      <g fill="white" opacity="0.12">
        {Array.from({ length: 9 }).map((_, row) =>
          Array.from({ length: 16 }).map((__, col) => (
            <circle key={`${row}-${col}`} cx={90 + col * 34} cy={228 + row * 10} r="1.2" />
          )),
        )}
      </g>
      <g fill="white" opacity="0.15">
        <rect x="118" y="196" width="9" height="34" rx="1" />
        <rect x="132" y="182" width="9" height="48" rx="1" />
        <rect x="146" y="170" width="9" height="60" rx="1" />
        <rect x="160" y="188" width="9" height="42" rx="1" />
        <rect x="980" y="204" width="8" height="28" rx="1" />
        <rect x="992" y="190" width="8" height="42" rx="1" />
        <rect x="1004" y="178" width="8" height="54" rx="1" />
        <rect x="1016" y="196" width="8" height="36" rx="1" />
      </g>
      <g stroke="white" strokeWidth="1.2" opacity="0.14">
        <rect x="248" y="54" width="58" height="40" rx="3" />
        <line x1="256" y1="66" x2="298" y2="66" />
        <line x1="256" y1="76" x2="298" y2="76" />
        <line x1="256" y1="86" x2="290" y2="86" />
        <rect x="1040" y="42" width="54" height="38" rx="3" />
        <line x1="1048" y1="54" x2="1086" y2="54" />
        <line x1="1048" y1="64" x2="1086" y2="64" />
        <line x1="1048" y1="74" x2="1080" y2="74" />
      </g>
      <path
        d="M196 118c0-16 13-29 29-29s29 13 29 29-13 29-29 29-29-13-29-29zm10 0c0 10.5 8.5 19 19 19s19-8.5 19-19-8.5-19-19-19-19 8.5-19 19z"
        fill="white"
        opacity="0.13"
      />
      <path
        d="M214 104h12v7c0 6.6-5.4 12-12 12s-12-5.4-12-12v-7h12zm-5 7v2.5c0 2.8 2.2 5 5 5s5-2.2 5-5V111"
        stroke="white"
        strokeWidth="1.2"
        opacity="0.15"
        fill="none"
      />
      <path
        d="M1088 150c0-14 11-25 25-25s25 11 25 25-11 25-25 25-25-11-25-25zm8 0c0 9.4 7.6 17 17 17s17-7.6 17-17-7.6-17-17-17-17 7.6-17 17z"
        fill="white"
        opacity="0.12"
      />
    </svg>
  )
}

const CTA_CUTOUT_ICON_POSITIONS = {
  4: ['left-[0%] top-[16%]', 'right-[0%] top-[12%]', 'left-[4%] bottom-[20%]', 'right-[2%] bottom-[16%]'],
  3: ['left-[4%] top-[20%]', 'right-[2%] top-[20%]', 'left-1/2 bottom-[16%] -translate-x-1/2'],
}

const CTA_CUTOUT_CONNECTORS = {
  4: [
    'M 48 76 Q 190 42 332 70',
    'M 48 76 Q 38 168 54 246',
    'M 332 70 Q 342 168 328 244',
    'M 54 246 Q 190 272 328 244',
  ],
  3: ['M 52 78 Q 190 54 328 78', 'M 52 78 Q 190 172 190 258', 'M 328 78 Q 190 172 190 258'],
}

function CTAIconConnectors({ count }) {
  const paths = CTA_CUTOUT_CONNECTORS[count]
  if (!paths?.length) return null

  return (
    <svg aria-hidden className="absolute inset-0 z-[1] h-full w-full" viewBox="0 0 380 300" fill="none" preserveAspectRatio="xMidYMid meet">
      {paths.map((path) => (
        <path key={path} d={path} stroke="#F1C40F" strokeOpacity="0.55" strokeWidth="1.5" strokeDasharray="3 6" strokeLinecap="round" />
      ))}
    </svg>
  )
}

function CTACutoutVisual({ image, floatingIcons, size = 'default' }) {
  const positions = CTA_CUTOUT_ICON_POSITIONS[floatingIcons.length] ?? []
  const isLarge = size === 'large'

  return (
    <div
      className={`relative mx-auto w-full ${
        isLarge
          ? 'h-[280px] max-w-[480px] md:h-[320px] lg:h-[400px] lg:max-w-[680px]'
          : 'h-[300px] max-w-[460px] md:h-[340px] lg:h-[400px] lg:max-w-[520px]'
      }`}
    >
      <CTAIconConnectors count={floatingIcons.length} />
      <img
        src={image}
        alt=""
        className={`pointer-events-none absolute bottom-0 left-1/2 z-[2] w-auto -translate-x-1/2 object-contain object-bottom drop-shadow-[0_8px_24px_rgba(0,0,0,0.22)] ${
          isLarge
            ? 'max-h-full max-w-full lg:max-h-[104%] lg:max-w-[102%]'
            : 'max-h-[96%] max-w-[92%] md:max-w-[88%] lg:max-h-[94%] lg:max-w-[85%]'
        }`}
      />
      {floatingIcons.map((icon, index) => (
        <div
          key={icon.iconName}
          className={`absolute z-[4] flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg text-databrains-teal shadow-[0_8px_22px_rgba(0,0,0,0.18)] md:h-12 md:w-12 md:text-xl lg:h-14 lg:w-14 lg:text-2xl ${
            positions[index] ?? ''
          }`}
        >
          <FontAwesomeIcon icon={icon} />
        </div>
      ))}
    </div>
  )
}

const CTA_PHOTO_MASK = [
  'linear-gradient(to bottom, transparent 0%, #000 8%, #000 82%, transparent 100%)',
  'linear-gradient(to right, transparent 0%, #000 16%, #000 94%, transparent 100%)',
].join(', ')

function CTAPhotoVisual({ image, floatingIcons }) {
  return (
    <div className="relative h-[300px] w-full overflow-hidden lg:h-[400px]">
      <img
        src={image}
        alt=""
        className="pointer-events-none absolute -right-[4%] top-0 z-[1] h-[112%] w-[112%] max-w-none object-cover object-[68%_32%] lg:-right-[2%] lg:object-[70%_28%]"
        style={{
          WebkitMaskImage: CTA_PHOTO_MASK,
          maskImage: CTA_PHOTO_MASK,
          WebkitMaskComposite: 'source-in',
          maskComposite: 'intersect',
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-[#087b88] from-0% via-[#087b88]/85 via-[28%] to-transparent to-[58%]" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[#12a7b5] from-0% via-[#0f9eaa]/55 via-[22%] to-transparent to-[50%]" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-[#087b88]/50 from-0% to-transparent to-[12%]" />
      <div className="absolute right-[2%] top-[28%] z-[4] hidden grid-cols-2 gap-3 lg:grid lg:gap-4">
        {floatingIcons.map((icon) => (
          <div
            key={icon.iconName}
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-[20px] text-databrains-teal shadow-[0_8px_22px_rgba(0,0,0,0.2)] lg:h-14 lg:w-14 lg:text-2xl"
          >
            <FontAwesomeIcon icon={icon} />
          </div>
        ))}
      </div>
    </div>
  )
}
function CTAImageVisual({ image, floatingIcons }) {
  const legacyPositions = ['-left-2 top-8', 'right-4 top-2', 'bottom-6 right-0', 'bottom-2 left-8']

  return (
    <div className="relative flex justify-center">
      <img src={image} alt="" className="max-h-[280px] w-full max-w-[400px] rounded-xl object-cover object-top" />
      {floatingIcons.map((icon, index) => (
        <div
          key={icon.iconName}
          className={`absolute hidden h-14 w-14 items-center justify-center rounded-full bg-white text-2xl text-databrains-teal shadow-lg lg:flex ${
            legacyPositions[index] ?? ''
          }`}
        >
          <FontAwesomeIcon icon={icon} />
        </div>
      ))}
    </div>
  )
}

function CTAVisual({ image, floatingIcons, variant, cutoutSize }) {
  if (variant === 'cutout') return <CTACutoutVisual image={image} floatingIcons={floatingIcons} size={cutoutSize} />
  if (variant === 'integrated') return <CTAPhotoVisual image={image} floatingIcons={floatingIcons} />
  return <CTAImageVisual image={image} floatingIcons={floatingIcons} />
}

function CTADotGrid() {
  return (
    <div className="pointer-events-none absolute right-10 top-1/2 z-[5] hidden -translate-y-1/2 grid-cols-4 gap-3 lg:grid xl:right-14 xl:gap-3.5">
      {Array.from({ length: 16 }).map((_, index) => (
        <div key={index} className="h-2 w-2 rounded-full bg-white/30" />
      ))}
    </div>
  )
}

export function FinalCTABlock({ title, description, ctaLabel, image, floatingIcons = [], cutout = false, imageVariant, cutoutImageSize }) {
  const variant = imageVariant ?? (cutout ? 'cutout' : 'card')
  const isExpanded = variant === 'cutout' || variant === 'integrated'
  const isLargeCutout = cutoutImageSize === 'large'

  return (
    <section className={`bg-white px-5 py-3 min-[860px]:px-7 lg:px-8 ${isLargeCutout ? 'lg:py-8' : 'lg:py-10'}`}>
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-xl bg-gradient-to-r from-databrains-teal to-[#2ba8b0] text-white shadow-[0_18px_38px_rgba(35,148,156,0.2)]">
        {isExpanded && <CTATechBackground />}
        {isExpanded && <CTADotGrid />}
        <div
          className={`relative z-10 grid items-center gap-6 px-8 py-8 ${
            isExpanded
              ? `${isLargeCutout ? 'min-h-[260px] lg:min-h-[360px] lg:grid-cols-[0.95fr_1.08fr] lg:gap-10 lg:px-12 lg:py-8' : 'min-h-[300px] lg:min-h-[400px] lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:px-14 lg:py-12'}`
              : 'min-h-[280px] lg:min-h-[330px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-12 lg:py-10'
          }`}
        >
          <div className={`relative z-10 ${isExpanded ? 'flex max-w-[560px] flex-col justify-center' : ''}`}>
            <h2
              className={`font-heading font-extrabold leading-tight ${
                isExpanded
                  ? isLargeCutout
                    ? 'text-[27px] md:text-[30px] lg:text-[2.35rem] lg:leading-[1.12] xl:text-[2.65rem]'
                    : 'text-[27px] md:text-[30px] lg:text-[2.65rem] lg:leading-[1.12] xl:text-5xl'
                  : 'text-[27px] md:text-[27px] lg:text-5xl'
              }`}
            >
              {title}
            </h2>
            <div className={`rounded-full bg-databrains-yellow ${isExpanded ? 'mt-3 h-1 w-11 lg:mt-4 lg:w-14' : 'mt-2 h-1 w-10 lg:mt-5 lg:w-12'}`} />
            <p
              className={`text-white/92 ${
                isExpanded
                  ? isLargeCutout
                    ? 'mt-5 max-w-[500px] text-[13px] leading-6 lg:mt-6 lg:text-lg lg:leading-7'
                    : 'mt-5 max-w-[520px] text-[13px] leading-6 lg:mt-7 lg:text-xl lg:leading-8'
                  : 'mt-4 max-w-[500px] text-[13px] leading-5 lg:mt-8 lg:text-lg lg:leading-8'
              }`}
            >
              {description}
            </p>
            <Link
              to="/contacto"
              className={`inline-flex items-center justify-center gap-3 rounded-md bg-databrains-coral px-5 py-3 text-xs font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white lg:px-8 lg:py-4 lg:text-lg ${
                isExpanded ? (isLargeCutout ? 'mt-6 lg:mt-8' : 'mt-6 lg:mt-10') : 'mt-4 lg:mt-8'
              }`}
            >
              {ctaLabel}
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          {image && <CTAVisual image={image} floatingIcons={floatingIcons} variant={variant} cutoutSize={cutoutImageSize} />}
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

function ProcessStepCircle({ icon }) {
  return (
    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-databrains-teal text-2xl text-white shadow-md">
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}

function ProcessStepContent({ step, index }) {
  return (
    <>
      <p className="mt-2 text-xs font-bold text-databrains-teal">{index + 1}.</p>
      <h3 className="mt-1 font-heading text-sm font-extrabold text-databrains-slate lg:text-base">{step.title}</h3>
      <p className="mt-2 text-sm leading-6 text-databrains-slate/75">{step.description}</p>
    </>
  )
}

export function ProcessTimeline({ title, steps }) {
  return (
    <section className="bg-white px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle>{title}</SectionTitle>

        {/* Mobile / tablet: vertical roadmap */}
        <div className="mt-12 flex flex-col items-center lg:hidden">
          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <article className="w-full max-w-md text-center">
                <ProcessStepCircle icon={step.icon} />
                <ProcessStepContent step={step} index={index} />
              </article>
              {index < steps.length - 1 && (
                <div aria-hidden className="my-1 h-10 w-0.5 shrink-0 bg-databrains-teal/35" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Desktop: horizontal roadmap with connectors between circles */}
        <div className="mt-12 hidden lg:block">
          <div className="flex items-center">
            {steps.map((step, index) => (
              <React.Fragment key={`${step.title}-icon`}>
                <div className="flex flex-1 justify-center">
                  <ProcessStepCircle icon={step.icon} />
                </div>
                {index < steps.length - 1 && (
                  <div aria-hidden className="h-0.5 flex-1 bg-databrains-teal/35" />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <article key={`${step.title}-text`} className="text-center">
                <ProcessStepContent step={step} index={index} />
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

function ProcessInfographicConnector({ vertical = false }) {
  if (vertical) {
    return (
      <div aria-hidden className="flex justify-center py-1 lg:hidden">
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
          <path d="M10 0V18" stroke="#66CAD2" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round" />
          <path d="M6 14L10 22L14 14" stroke="#66CAD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    )
  }

  return (
    <div aria-hidden className="hidden shrink-0 items-center self-center lg:flex lg:px-0.5 xl:px-1">
      <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="xl:w-7">
        <path d="M0 8H14" stroke="#66CAD2" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round" />
        <path d="M12 4L18 8L12 12" stroke="#66CAD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function ProcessInfographicCard({ step, index }) {
  return (
    <article className="relative flex min-h-[228px] w-full flex-col rounded-2xl border border-gray-200/90 bg-white p-5 shadow-[0_10px_28px_rgba(49,69,78,0.07)] sm:min-h-[240px] lg:min-h-[252px] lg:w-[220px] lg:shrink-0 xl:w-[236px]">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-databrains-teal text-xs font-extrabold text-white">
        {index + 1}
      </span>
      <h3 className="mt-3 pr-2 font-heading text-[15px] font-extrabold leading-snug text-databrains-slate lg:text-base">
        {step.title}
      </h3>
      <p className="mt-2 flex-1 pr-16 text-sm leading-6 text-databrains-slate/75">{step.description}</p>
      <div className="pointer-events-none absolute bottom-4 right-4 text-[2.35rem] text-databrains-teal/90 lg:text-[2.5rem]">
        <FontAwesomeIcon icon={step.icon} />
      </div>
    </article>
  )
}

export function ProcessInfographic({ title, steps }) {
  return (
    <section className="bg-white px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle>{title}</SectionTitle>

        <div className="mt-10 -mx-1 overflow-x-auto px-1 pb-2 lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0">
          <div className="flex min-w-max flex-col lg:min-w-0 lg:flex-row lg:items-stretch lg:justify-center">
            {steps.map((step, index) => (
              <React.Fragment key={step.title}>
                <ProcessInfographicCard step={step} index={index} />
                {index < steps.length - 1 && (
                  <>
                    <ProcessInfographicConnector vertical />
                    <ProcessInfographicConnector />
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
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

function AudienceCarouselSlide({ title, description, image, icon }) {
  return (
    <article className="relative h-[360px] overflow-hidden rounded-2xl shadow-[0_18px_40px_rgba(49,69,78,0.16)] sm:h-[420px] md:h-[480px] lg:h-[540px]">
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
      {icon && (
        <div className="absolute left-6 top-6 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-databrains-teal text-2xl text-white shadow-lg lg:left-10 lg:top-10 lg:h-16 lg:w-16 lg:text-3xl">
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-8 sm:px-10 sm:pb-10 lg:px-14 lg:pb-12">
        <h3 className="max-w-4xl font-heading text-[1.65rem] font-extrabold leading-tight text-white sm:text-3xl lg:text-[2.35rem]">
          {title}
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/95 sm:text-base lg:mt-4 lg:text-lg lg:leading-8">
          {description}
        </p>
      </div>
    </article>
  )
}

export function AudienceCarousel({ title, items }) {
  return (
    <section className="bg-white px-5 py-10 min-[860px]:px-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle>{title}</SectionTitle>
        <div className="mt-8 lg:mt-10">
          <Carousel slideClassName="w-full flex-shrink-0 snap-center" gapClassName="gap-6 lg:gap-8">
            {items.map((item) => (
              <AudienceCarouselSlide key={item.title} {...item} />
            ))}
          </Carousel>
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
