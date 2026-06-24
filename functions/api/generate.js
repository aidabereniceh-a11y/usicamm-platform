const MAX_USES_PER_IP = 3
const KV_TTL = 60 * 60 * 24

export async function onRequestPost(context) {
  const { request, env } = context

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown'
  const kvKey = 'uses_' + ip

  let currentUses = 0
  if (env.USES_KV) {
    const stored = await env.USES_KV.get(kvKey)
    currentUses = stored ? parseInt(stored, 10) : 0
    if (currentUses >= MAX_USES_PER_IP) {
      return new Response(
        JSON.stringify({ error: 'limite_alcanzado', message: 'Has alcanzado el limite de generaciones por hoy.' }),
        { status: 429, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      )
    }
  }

  const anthropicKey = env.ANTHROPIC_API_KEY
  if (!anthropicKey) {
    return new Response(
      JSON.stringify({ error: 'config_error', message: 'Error de configuracion: ' + JSON.stringify(Object.keys(env)) }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    )
  }

  try {
    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': anthropicKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 2000,
        messages: [
          {
            role: 'user',
            content: 'Genera SOLO un ARRAY JSON valido.\nNO expliques nada.\nNO uses markdown.\nDebes generar EXACTAMENTE 5 preguntas tipo examen USICAMM.\n\nFormato EXACTO:\n[\n  {\n    "topic": "",\n    "question": "",\n    "options": {\n      "A": "",\n      "B": "",\n      "C": "",\n      "D": ""\n    },\n    "correct": "",\n    "explanation": ""\n  }\n]\n\nTemas:\n- Nueva Escuela Mexicana\n- Inclusion y diversidad\n- Evaluacion formativa\n- Articulo 3 Constitucional\n- Planeacion didactica\n- Promocion Horizontal\n- Derechos y legislacion docente',
          },
        ],
      }),
    })

    const data = await anthropicResponse.json()

    if (!anthropicResponse.ok) {
      return new Response(
        JSON.stringify({ error: 'api_error', message: 'Error Anthropic: ' + JSON.stringify(data.error) }),
        { status: 502, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      )
    }

    if (env.USES_KV) {
      await env.USES_KV.put(kvKey, String(currentUses + 1), { expirationTtl: KV_TTL })
    }

    const text = data.content[0].text
    const questions = JSON.parse(text)

    return new Response(
      JSON.stringify({ questions, usesLeft: MAX_USES_PER_IP - (currentUses + 1) }),
      { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'server_error', message: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    )
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}