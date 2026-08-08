import React from 'react'

/** Layout-stable placeholder matching the home hero while lazy routes load (reduces CLS). */
export default function PageSkeleton() {
  return (
    <main className="overflow-hidden bg-white" aria-busy="true" aria-live="polite">
      <span className="sr-only">Cargando página…</span>
      <section className="relative bg-white px-5 py-6 lg:px-8 lg:py-8">
        <div className="relative z-10 mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[0.87fr_1.13fr]">
          <div className="max-w-[500px] py-12">
            <div className="h-6 w-28 rounded bg-databrains-paleCyan/80" />
            <div className="mt-4 h-14 w-full max-w-[420px] rounded bg-databrains-lightGray" />
            <div className="mt-3 h-14 w-[80%] max-w-[360px] rounded bg-databrains-lightGray" />
            <div className="mt-5 h-1 w-10 rounded-full bg-databrains-aqua" />
            <div className="mt-8 space-y-3">
              <div className="h-4 w-full max-w-[450px] rounded bg-databrains-lightGray" />
              <div className="h-4 w-[85%] max-w-[400px] rounded bg-databrains-lightGray" />
              <div className="h-4 w-[65%] max-w-[300px] rounded bg-databrains-lightGray" />
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <div className="h-12 w-52 rounded-md bg-databrains-coral/80" />
              <div className="h-12 w-56 rounded-md border border-databrains-teal/40 bg-white" />
            </div>
          </div>
          <div className="hidden min-h-[420px] rounded-2xl bg-databrains-lightGray/80 lg:block" />
        </div>
      </section>
    </main>
  )
}
