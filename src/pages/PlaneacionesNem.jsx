export default function PlaneacionesNem() {

  const meses = ["Agosto"];

  const niveles = [
    {
      nivel: "Preescolar",
      icono: "🌱",
      color: "#166534",
      fondo: "#f0fdf4",
      borde: "#bbf7d0",
      grados: [
        { grado: "1° Preescolar", archivo: "Planeacion_Agosto_Preescolar_1.pdf" },
        { grado: "2° Preescolar", archivo: "Planeacion_Agosto_Preescolar_2.pdf" },
        { grado: "3° Preescolar", archivo: "Planeacion_Agosto_Preescolar_3.pdf" },
      ],
    },
    {
      nivel: "Primaria",
      icono: "📚",
      color: "#1e40af",
      fondo: "#eff6ff",
      borde: "#bfdbfe",
      grados: [
        { grado: "1° Primaria", archivo: "Planeacion_Agosto_Primaria_1.pdf" },
        { grado: "2° Primaria", archivo: "Planeacion_Agosto_Primaria_2.pdf" },
        { grado: "3° Primaria", archivo: "Planeacion_Agosto_Primaria_3.pdf" },
        { grado: "4° Primaria", archivo: "Planeacion_Agosto_Primaria_4.pdf" },
        { grado: "5° Primaria", archivo: "Planeacion_Agosto_Primaria_5.pdf" },
        { grado: "6° Primaria", archivo: "Planeacion_Agosto_Primaria_6.pdf" },
      ],
    },
    {
      nivel: "Secundaria",
      icono: "🎓",
      color: "#7e22ce",
      fondo: "#faf5ff",
      borde: "#e9d5ff",
      grados: [
        { grado: "1° Secundaria", archivo: "Planeacion_Agosto_Secundaria_1.pdf" },
        { grado: "2° Secundaria", archivo: "Planeacion_Agosto_Secundaria_2.pdf" },
        { grado: "3° Secundaria", archivo: "Planeacion_Agosto_Secundaria_3.pdf" },
      ],
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f0fdf4", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg, #166534, #15803d)", padding: "60px 32px", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", margin: "0 0 16px 0" }}>Planeaciones NEM</h1>
        <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>
          Planeaciones didácticas basadas en la Nueva Escuela Mexicana para docentes de educación básica
        </p>
      </div>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "60px 32px" }}>

        <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <h2 style={{ color: "#166534", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>¿Qué son las Planeaciones NEM?</h2>
          <p style={{ color: "#475569", lineHeight: 1.8, fontSize: "16px" }}>
            Las planeaciones didácticas de la Nueva Escuela Mexicana son instrumentos de planificación que orientan el trabajo docente a partir de los nuevos programas de estudio 2022. Se basan en el enfoque por proyectos comunitarios, campos formativos y ejes articuladores, poniendo al centro el bienestar integral de los estudiantes.
          </p>
        </div>

        <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <h2 style={{ color: "#166534", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>Elementos de una Planeación NEM</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {[
              { titulo: "Campo Formativo", desc: "Lenguajes, Saberes y pensamiento científico, Ética naturaleza y sociedades, o De lo humano y lo comunitario." },
              { titulo: "Ejes Articuladores", desc: "Inclusión, Pensamiento crítico, Interculturalidad crítica, Igualdad de género, Vida saludable, Apropiación de culturas." },
              { titulo: "Proyecto Comunitario", desc: "Actividad integradora que vincula los aprendizajes con la realidad y necesidades de la comunidad escolar." },
              { titulo: "Evaluación Formativa", desc: "Instrumentos como rúbricas, listas de cotejo y portafolios que valoran el proceso de aprendizaje." },
            ].map((e) => (
              <div key={e.titulo} style={{ background: "#f0fdf4", borderRadius: "12px", padding: "20px", borderLeft: "4px solid #15803d" }}>
                <h3 style={{ color: "#166534", fontSize: "15px", fontWeight: "700", marginBottom: "8px" }}>{e.titulo}</h3>
                <p style={{ color: "#64748b", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <h2 style={{ color: "#166534", fontSize: "24px", fontWeight: "700", marginBottom: "8px" }}>
            📥 Descarga tus Planeaciones — Ciclo 2026-2027
          </h2>
          <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "28px" }}>
            Formato PDF · Plan de Estudios 2022 · Los 4 Campos Formativos · Evaluación diagnóstica incluida
          </p>
          {meses.map((mes) => (
            <div key={mes}>
              <div style={{ background: "linear-gradient(135deg, #166534, #15803d)", borderRadius: "12px", padding: "14px 20px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "20px" }}>📅</span>
                <span style={{ color: "white", fontWeight: "800", fontSize: "18px" }}>{mes}</span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>— Inducción y Diagnóstico</span>
              </div>
              {niveles.map((n) => (
                <div key={n.nivel} style={{ border: `1px solid ${n.borde}`, borderRadius: "16px", marginBottom: "16px", overflow: "hidden" }}>
                  <div style={{ background: n.fondo, padding: "14px 20px", display: "flex", alignItems: "center", gap: "10px", borderBottom: `1px solid ${n.borde}` }}>
                    <span style={{ fontSize: "22px" }}>{n.icono}</span>
                    <span style={{ color: n.color, fontWeight: "800", fontSize: "17px" }}>{n.nivel}</span>
                  </div>
                  <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {n.grados.map((g) => (
                      <div key={g.grado} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "#fafafa", borderRadius: "10px", border: "1px solid #f1f5f9" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <span style={{ fontSize: "16px" }}>📄</span>
                          <span style={{ color: "#1e293b", fontWeight: "600", fontSize: "15px" }}>{g.grado}</span>
                          <span style={{ color: "#94a3b8", fontSize: "13px" }}>— {mes}</span>
                        </div>
                        <a href={`/pdfs/planeaciones/${g.archivo}`} download style={{ background: n.color, color: "white", padding: "8px 18px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
                          ⬇ Descargar PDF
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ background: "linear-gradient(135deg, #166534, #15803d)", borderRadius: "20px", padding: "32px", textAlign: "center", color: "white" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", margin: "0 0 12px 0" }}>Prepara mejor tus clases</h2>
          <p style={{ opacity: 0.9, marginBottom: "20px" }}>Accede a recursos y guías gratuitas para la Nueva Escuela Mexicana</p>
          <a href="/nueva-escuela-mexicana" style={{ background: "white", color: "#15803d", padding: "14px 32px", borderRadius: "12px", textDecoration: "none", fontWeight: "800", fontSize: "16px", display: "inline-block" }}>Ver más recursos NEM</a>
        </div>

      </div>
    </div>
  );
}