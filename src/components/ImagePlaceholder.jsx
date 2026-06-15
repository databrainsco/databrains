import React from 'react'

export default function ImagePlaceholder({ label, note, height, className = '' }) {
  const minHeight = typeof height === 'number' ? `${height}px` : height

  return (
    <div
      style={minHeight ? { minHeight } : undefined}
      className={`relative overflow-hidden rounded-3xl border border-databrains-aqua/70 bg-gradient-to-br from-databrains-paleCyan via-white to-databrains-lightGray p-6 text-databrains-slate shadow-sm ${className}`}
    >
      {/* TODO: Reemplazar todo este placeholder por un <img /> con alt descriptivo cuando exista el asset real. */}
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-databrains-aqua/50 bg-databrains-aqua/20" />
      <div className="absolute bottom-5 right-6 grid grid-cols-4 gap-2 opacity-40" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-databrains-teal" />
        ))}
      </div>
      <div className="relative z-10 flex h-full min-h-[220px] flex-col justify-between gap-8">
        <div className="flex items-start gap-4">
          <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl border border-white/80 bg-white/70 shadow-sm backdrop-blur">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="14" cy="14" r="7" fill="#BEFCFF" stroke="#23949C" strokeWidth="2" />
              <rect x="19" y="10" width="16" height="11" rx="3" fill="#FFFFFF" stroke="#66CAD2" strokeWidth="2" />
              <path d="M10 30H34" stroke="#31454E" strokeWidth="2" strokeLinecap="round" />
              <path d="M14 35H30" stroke="#31454E" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="font-heading text-lg font-bold text-databrains-slate">{label}</div>
            {note && <div className="mt-2 text-sm leading-6 text-databrains-slate/75">{note}</div>}
          </div>
        </div>
        <div className="inline-flex w-fit items-center rounded-full border border-databrains-aqua/60 bg-white/80 px-3 py-1 text-xs font-semibold text-databrains-teal">
          Placeholder visual
        </div>
      </div>
    </div>
  )
}
