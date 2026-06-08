import OpenAI from 'openai'

const openai = new OpenAI({
  baseURL: 'HTTP-Referer': 'https://promociondocente.mx',

  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,

  defaultHeaders: {
    'HTTP-Referer': 'https://promocion-admision-educacion-mx.netlify.app',
    'X-Title': 'USICAMM Platform'
  },

  dangerouslyAllowBrowser: true
})

export default openai