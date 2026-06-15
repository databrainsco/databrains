import React, { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Carousel({ children, variant = 'light' }) {
  const isDark = variant === 'dark'
  const scroller = useRef(null)
  const [pages, setPages] = useState(1)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const el = scroller.current
    if (!el) return
    const update = () => {
      const pagesCount = Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth))
      setPages(pagesCount)
      setActive(Math.min(pagesCount - 1, Math.round(el.scrollLeft / el.clientWidth)))
    }
    update()
    window.addEventListener('resize', update)
    el.addEventListener('scroll', update)
    return () => {
      window.removeEventListener('resize', update)
      el.removeEventListener('scroll', update)
    }
  }, [children])

  const scroll = (direction) => {
    const el = scroller.current
    if (!el) return
    const amount = direction === 'left' ? -el.clientWidth : el.clientWidth
    el.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => scroll('left')}
          className={`hidden h-11 w-11 flex-shrink-0 items-center justify-center rounded-full shadow-sm transition duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 md:inline-flex ${
            isDark
              ? 'border border-white/30 bg-white/15 text-white hover:bg-white/25 focus-visible:ring-white'
              : 'border border-databrains-aqua/30 bg-white text-databrains-slate hover:text-databrains-teal focus-visible:ring-databrains-coral'
          }`}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div ref={scroller} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-1 py-3">
          {React.Children.map(children, (child, i) => (
            <div key={i} className="min-w-[260px] max-w-[320px] snap-start md:min-w-[300px]">{child}</div>
          ))}
        </div>
        <button
          type="button"
          aria-label="Siguiente"
          onClick={() => scroll('right')}
          className={`hidden h-11 w-11 flex-shrink-0 items-center justify-center rounded-full shadow-sm transition duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 md:inline-flex ${
            isDark
              ? 'border border-white/30 bg-white/15 text-white hover:bg-white/25 focus-visible:ring-white'
              : 'border border-databrains-aqua/30 bg-white text-databrains-slate hover:text-databrains-teal focus-visible:ring-databrains-coral'
          }`}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            type="button"
            key={i}
            aria-label={`Ir a página ${i + 1}`}
            onClick={() => scroller.current && scroller.current.scrollTo({ left: i * scroller.current.clientWidth, behavior: 'smooth' })}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active
                ? `w-8 ${isDark ? 'bg-white' : 'bg-databrains-teal'}`
                : `w-2 ${isDark ? 'bg-white/35' : 'bg-databrains-lightGray'}`
            }`}
          />
        ))}
      </div>
    </div>
  )
}
