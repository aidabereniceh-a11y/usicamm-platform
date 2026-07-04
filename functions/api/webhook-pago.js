// functions/api/webhook-pago.js
// Recibe notificaciones de MercadoPago y envía el email con los PDFs

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    console.log("Webhook recibido:", JSON.stringify(body));

    // Solo procesamos pagos aprobados
    if (body.type !== "payment") {
      return new Response("OK", { status: 200 });
    }

    const paymentId = body.data?.id;
    if (!paymentId) {
      return new Response("OK", { status: 200 });
    }

    // Obtener detalles del pago de MercadoPago
    const mpResponse = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: {
        "Authorization": `Bearer ${env.MP_ACCESS_TOKEN}`,
      },
    });

    const pago = await mpResponse.json();
    console.log("Pago status:", pago.status);

    if (pago.status !== "approved") {
      return new Response("OK", { status: 200 });
    }

    const { nombre, email, tipo, meses } = pago.metadata;
    const fechaCompra = new Date().toLocaleDateString("es-MX", {
      day: "2-digit", month: "long", year: "numeric"
    });

    // Generar links de descarga para cada mes y nivel
    const niveles = ["Preescolar_1","Preescolar_2","Preescolar_3",
                     "Primaria_1","Primaria_2","Primaria_3","Primaria_4","Primaria_5","Primaria_6",
                     "Secundaria_1","Secundaria_2","Secundaria_3"];

    const mesesArray = meses.split(",");
    let linksHTML = "";

    for (const mes of mesesArray) {
      linksHTML += `<h3 style="color:#166534;margin-top:20px">${mes}</h3><ul>`;
      for (const nivel of niveles) {
        const archivo = `Planeacion_${mes}_${nivel}.pdf`;
        const url = `https://promociondocente.mx/api/descarga-pdf?archivo=${archivo}&email=${encodeURIComponent(email)}&nombre=${encodeURIComponent(nombre)}&fecha=${encodeURIComponent(fechaCompra)}&token=${env.DOWNLOAD_SECRET}`;
        linksHTML += `<li><a href="${url}" style="color:#1e40af">${nivel.replace("_"," ")} - ${mes}</a></li>`;
      }
      linksHTML += `</ul>`;
    }

    // Enviar email con Resend
    const emailBody = {
      from: "Planeaciones NEM <planeaciones@promociondocente.mx>",
      to: [email],
      subject: "Tus Planeaciones NEM estan listas para descargar",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:linear-gradient(135deg,#166534,#15803d);padding:30px;text-align:center">
            <h1 style="color:white;margin:0">Planeaciones NEM</h1>
            <p style="color:rgba(255,255,255,0.9);margin:8px 0 0">Ciclo Escolar 2026-2027</p>
          </div>
          <div style="padding:30px;background:white">
            <h2 style="color:#166534">Hola ${nombre},</h2>
            <p style="color:#475569">Gracias por tu compra. Tus planeaciones estan listas para descargar.</p>
            <div style="background:#f0fdf4;border-radius:12px;padding:20px;margin:20px 0;border:1px solid #dcfce7">
              <p style="color:#166534;font-weight:700;margin:0 0 4px">Nota importante:</p>
              <p style="color:#475569;margin:0;font-size:14px">Estos PDFs tienen marca de agua con tu nombre y fecha de compra. Son para uso personal exclusivo.</p>
            </div>
            <h2 style="color:#166534">Tus planeaciones:</h2>
            ${linksHTML}
            <p style="color:#94a3b8;font-size:12px;margin-top:30px">Los links son validos por 7 dias. Si tienes problemas contactanos a planeaciones@promociondocente.mx</p>
          </div>
        </div>
      `,
    };

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailBody),
    });

    console.log("Email enviado a:", email);
    return new Response("OK", { status: 200 });

  } catch (error) {
    console.error("Error webhook:", error);
    return new Response("Error", { status: 500 });
  }
}
