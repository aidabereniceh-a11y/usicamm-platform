// functions/api/crear-pago.js
// Crea una preferencia de pago en MercadoPago

export async function onRequestPost(context) {
  const { request, env } = context;

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nombre, email, tipo } = await request.json();

    if (!nombre || !email || !tipo) {
      return new Response(JSON.stringify({ error: "Faltan datos" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Productos disponibles
    const productos = {
      mes: {
        titulo: "Planeaciones NEM - Octubre 2026 (todos los niveles)",
        precio: 99,
        meses: ["Octubre"],
      },
      ciclo: {
        titulo: "Planeaciones NEM - Ciclo completo 2026-2027 (8 meses)",
        precio: 599,
        meses: ["Octubre","Noviembre","Diciembre","Enero","Febrero","Marzo","Abril","Mayo"],
      },
    };

    const producto = productos[tipo];
    if (!producto) {
      return new Response(JSON.stringify({ error: "Tipo de producto invalido" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Crear preferencia en MercadoPago
    const preferencia = {
      items: [
        {
          title: producto.titulo,
          quantity: 1,
          currency_id: "MXN",
          unit_price: producto.precio,
        },
      ],
      payer: {
        name: nombre,
        email: email,
      },
      back_urls: {
        success: "https://promociondocente.mx/pago-exitoso",
        failure: "https://promociondocente.mx/pago-fallido",
        pending: "https://promociondocente.mx/pago-pendiente",
      },
      auto_return: "approved",
      notification_url: "https://promociondocente.mx/api/webhook-pago",
      metadata: {
        nombre: nombre,
        email: email,
        tipo: tipo,
        meses: producto.meses.join(","),
      },
      statement_descriptor: "PROMOCIONDOCENTE",
      external_reference: `${email}-${tipo}-${Date.now()}`,
    };

    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${env.MP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(preferencia),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error MP:", data);
      return new Response(JSON.stringify({ error: "Error al crear el pago" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ init_point: data.init_point }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Error interno" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
}
