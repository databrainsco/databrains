import React, { useEffect } from 'react'
import SEO from '../components/SEO'
import { getWhatsAppUrl } from '../data/contact'

export default function Contacto() {
  useEffect(() => {
    window.location.assign(getWhatsAppUrl())
  }, [])

  return (
    <>
      <SEO
        title="Contacto | DataBrains"
        description="Contáctanos por WhatsApp para hablar de tu proyecto o solicitar una consultoría."
      />
      <main className="flex min-h-[50vh] items-center justify-center bg-white px-5 py-16">
        <div className="max-w-md text-center">
          <p className="font-heading text-xl font-extrabold text-databrains-slate">Abriendo WhatsApp…</p>
          <p className="mt-3 text-sm leading-6 text-databrains-slate/75">
            Si no se abre automáticamente,{' '}
            <a
              href={getWhatsAppUrl()}
              className="font-semibold text-databrains-teal underline-offset-2 hover:underline"
            >
              haz clic aquí
            </a>
            .
          </p>
        </div>
      </main>
    </>
  )
}
