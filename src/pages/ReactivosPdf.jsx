export default function ReactivosPdf() {
  const pdfs = [
    {
      titulo: "Guia Promocion Horizontal",
      desc: "10 reactivos tipo examen con respuestas y fundamento legal. Incluye resumen de requisitos, dimensiones del expediente y niveles de promocion.",
      archivo: "/pdfs/guia_promocion_horizontal.pdf",
      icono: "📈",
      tag: "Nuevo",
      tagColor: "#166534",
    },
    {
      titulo: "Guia Nueva Escuela Mexicana",
      desc: "10 reactivos sobre el Plan de Estudios 2022, ejes articuladores, campos formativos y rol del docente como facilitador.",
      archivo: "/pdfs/guia_nueva_escuela_mexicana.pdf",
      icono: "🏫",
      tag: "Nuevo",
      tagColor: "#166534",
    },
    {
      titulo: "Guia Admision Docente",
      desc: "10 reactivos sobre el proceso de admision, perfil del aspirante, planeacion didactica y evaluacion formativa.",
      archivo: "/pdfs/guia_admision_docente.pdf",
      icono: "🎓",
      tag: "Nuevo",
      tagColor: "#166534",
    },
    {
      titulo: "Guia Derechos y Legislacion",
      desc: "10 reactivos sobre el Articulo 3 Constitucional, LGSCMM, LGE, derechos del docente e inclusion educativa.",
      archivo: "/pdfs/guia_derechos_legislacion.pdf",
      icono: "⚖️",
      tag: "Nuevo",
      tagColor: "#166534",
    },
    {
      titulo: "Reactivos USICAMM PDF",
      desc: "Banco de reactivos tipo examen real para todos los procesos USICAMM 2026. Descarga e imprime para estudiar sin conexion.",
      archivo: "/pdfs/reactivos.pdf",
      icono: "📄",
      tag: "Clasico",
      tagColor: "#1e3a8a",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0fdf4",
        minHeight: "100vh",
      }}
    >
      {/* ENCABEZADO */}
      <div
        style={{
          background: "linear-gradient(135deg, #166534, #15803d)",
          padding: "60px 40px",
          textAlign: "center",
          color: "white",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.15)",
            padding: "6px 16px",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "16px",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          Descarga gratuita para docentes
        </div>
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "800",
            margin: "0 0 16px 0",
          }}
        >
          Reactivos y Guias de Estudio PDF
        </h1>
        <p
          style={{
            fontSize: "18px",
            opacity: 0.9,
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Descarga gratis guias con reactivos tipo examen, respuestas y
          fundamentos legales para tu proceso USICAMM 2026.
        </p>
      </div>

      {/* TARJETAS */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "50px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {pdfs.map((pdf) => (
          <div
            key={pdf.archivo}
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "28px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
              border: "1px solid #dcfce7",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              {/* ICONO + TAG */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "12px",
                }}
              >
                <span style={{ fontSize: "40px" }}>{pdf.icono}</span>
                <span
                  style={{
                    backgroundColor: pdf.tagColor,
                    color: "white",
                    fontSize: "11px",
                    fontWeight: "700",
                    padding: "3px 10px",
                    borderRadius: "20px",
                  }}
                >
                  {pdf.tag}
                </span>
              </div>

              {/* TITULO */}
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: "800",
                  color: "#166534",
                  margin: "0 0 10px 0",
                }}
              >
                {pdf.titulo}
              </h3>

              {/* DESC */}
              <p
                style={{
                  color: "#64748b",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  margin: "0 0 20px 0",
                }}
              >
                {pdf.desc}
              </p>
            </div>

            {/* BOTON */}
            <a
              href={pdf.archivo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#15803d",
                color: "white",
                padding: "13px 20px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "15px",
                textAlign: "center",
                display: "block",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#166534")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#15803d")
              }
            >
              Descargar PDF gratis →
            </a>
          </div>
        ))}
      </div>

      {/* FOOTER NOTE */}
      <div
        style={{
          textAlign: "center",
          padding: "0 20px 50px",
          color: "#64748b",
          fontSize: "14px",
        }}
      >
        Todos los materiales son gratuitos y actualizados para USICAMM 2026 •{" "}
        <span style={{ color: "#15803d", fontWeight: "600" }}>
          promociondocente.mx
        </span>
      </div>
    </div>
  );
}
