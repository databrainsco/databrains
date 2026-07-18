/** Número en formato internacional, solo dígitos (ej. México: 521XXXXXXXXXX). */
export const WHATSAPP_NUMBER = '525522339307'

export const WHATSAPP_PREFILL =
  'Hola DataBrains, me interesa conocer más sobre sus soluciones.'

export function getWhatsAppUrl() {
  const text = encodeURIComponent(WHATSAPP_PREFILL)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}
