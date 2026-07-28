import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { getFormspreeForm } from '../data/formspree'

export default function NewsletterForm({
  formKey = 'newsletter',
  inputId = 'newsletter-email',
  className = 'flex gap-3',
}) {
  const { id } = getFormspreeForm(formKey)
  const [state, handleSubmit] = useForm(id)

  if (state.succeeded) {
    return <p className="text-sm font-semibold text-databrains-teal">¡Gracias! Ya quedaste suscrito.</p>
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <label className="sr-only" htmlFor={inputId}>
        Correo electrónico
      </label>
      <div className="min-w-0 flex-1">
        <input
          id={inputId}
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Tu correo electrónico"
          className="w-full rounded border border-databrains-slate/30 px-4 py-3 text-sm outline-none transition duration-300 placeholder:text-databrains-slate/45 focus:border-databrains-teal"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-1 block text-xs text-databrains-coral"
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="rounded-md bg-databrains-coral px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? 'Enviando…' : 'Suscribirme'}
      </button>
    </form>
  )
}
