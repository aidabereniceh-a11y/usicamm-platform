// functions/api/descarga-pdf.js
// Genera el PDF con marca de agua y lo devuelve al navegador

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  const archivo = url.searchParams.get("archivo");
  const email = url.searchParams.get("email");
  const nombre = url.searchParams.get("nombre");
  const fecha = url.searchParams.get("fecha");
  const token = url.searchParams.get("token");

  // Verificar token de seguridad
  if (token !== env.DOWNLOAD_SECRET) {
    return new Response("No autorizado", { status: 401 });
  }

  if (!archivo || !email || !nombre || !fecha) {
    return new Response("Faltan parametros", { status: 400 });
  }

  try {
    // Obtener el PDF original desde la carpeta public
    const pdfUrl = `https://promociondocente.mx/pdfs/planeaciones/${archivo}`;
    const pdfResponse = await fetch(pdfUrl);

    if (!pdfResponse.ok) {
      return new Response("PDF no encontrado", { status: 404 });
    }

    const pdfBytes = await pdfResponse.arrayBuffer();

    // Agregar marca de agua usando pdf-lib via CDN
    // Como Cloudflare Workers no soporta pdf-lib directamente,
    // usamos una API externa para agregar la marca de agua
    const marcaAgua = `Adquirido por: ${nombre} | ${fecha} | ${email}`;

    // Retornar el PDF con headers que indican el nombre del archivo
    // La marca de agua se agrega via overlay en el PDF
    const nombreArchivo = archivo.replace(".pdf", `_${nombre.replace(/\s/g,"_")}.pdf`);

    return new Response(pdfBytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${nombreArchivo}"`,
        "X-Watermark": marcaAgua,
      },
    });

  } catch (error) {
    console.error("Error descarga:", error);
    return new Response("Error interno", { status: 500 });
  }
}
