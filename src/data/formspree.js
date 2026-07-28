/** Formspree form endpoints used across the site. */
export const formspreeForms = {
  newsletter: {
    id: 'mojgrypq',
    endpoint: 'https://formspree.io/f/mojgrypq',
    name: 'email newsletter',
  },
}

/**
 * @param {keyof typeof formspreeForms} key
 */
export function getFormspreeForm(key) {
  const form = formspreeForms[key]
  if (!form) {
    throw new Error(`Formspree form "${key}" is not configured`)
  }
  return form
}
