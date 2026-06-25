export default function HerramientasDocentes() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#eff6ff", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg, #1e3a5f, #1d4ed8)", padding: "60px 32px", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", margin: "0 0 16px 0" }}>Herramientas para Docentes</h1>
        <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>Herramientas gratuitas disenadas para maestros mexicanos. Sin registro, sin instalacion, al instante.</p>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 32px" }}>

        <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #bfdbfe" }}>
          <h2 style={{ color: "#1e3a5f", fontSize: "24px", fontWeight: "700", marginBottom: "8px" }}>&#128295; Herramientas PDF</h2>
          <p style={{ color: "#475569", fontSize: "15px", marginBottom: "24px", lineHeight: 1.7 }}>
            Comprime, convierte y crea documentos PDF en segundos, especialmente pensadas para el trabajo docente diario.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "28px" }}>
            {[
              { icono: "\u{1F4E6}", titulo: "Compresor de PDF", desc: "Reduce el peso de tus planeaciones y documentos para enviarlos facil por WhatsApp." },
              { icono: "\u{1F4C4}", titulo: "Generador de constancias", desc: "Crea constancias y reconocimientos para tus alumnos listos para imprimir." },
              { icono: "\u2702\uFE0F", titulo: "Dividir PDF", desc: "Extrae paginas especificas de cualquier documento PDF de forma rapida." },
              { icono: "\u{1F517}", titulo: "Unir PDFs", desc: "Combina varios documentos en un solo PDF ordenado con un clic." },
            ].map((h) => (
              <div key={h.titulo} style={{ background: "#eff6ff", borderRadius: "14px", padding: "20px", borderLeft: "4px solid #1d4ed8" }}>
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>{h.icono}</div>
                <h3 style={{ color: "#1e3a5f", fontSize: "15px", fontWeight: "700", marginBottom: "6px" }}>{h.titulo}</h3>
                <p style={{ color: "#64748b", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{h.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <span style={{ background: "#e0e7ff", color: "#3730a3", padding: "10px 24px", borderRadius: "10px", fontWeight: "700", fontSize: "14px", display: "inline-block" }}>
              &#128679; Proximamente disponibles
            </span>
          </div>
        </div>

        <div style={{ background: "linear-gradient(135deg, #1e3a5f, #1d4ed8)", borderRadius: "20px", padding: "32px", textAlign: "center", color: "white" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", margin: "0 0 12px 0" }}>Descarga planeaciones NEM</h2>
          <p style={{ opacity: 0.9, marginBottom: "20px" }}>Accede a planeaciones didacticas basadas en el nuevo modelo educativo</p>
          <a href="/planeaciones-nem" style={{ background: "white", color: "#1d4ed8", padding: "14px 32px", borderRadius: "12px", textDecoration: "none", fontWeight: "800", fontSize: "16px", display: "inline-block" }}>Ver planeaciones</a>
        </div>

      </div>
    </div>
  );
}