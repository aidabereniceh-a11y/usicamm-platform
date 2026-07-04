export default function PlaneacionesNem() {

  const meses = [
    { nombre: "Agosto",     subtitulo: "Induccion y Diagnostico",                    icono: "📅" },
    { nombre: "Septiembre", subtitulo: "Inicio de Proyectos Comunitarios",            icono: "📅" },
    { nombre: "Octubre",    subtitulo: "Profundizacion del Proyecto Comunitario",     icono: "📅" },
  ];

  const niveles = [
    { nivel: "Preescolar", icono: "🌱", color: "#166534", fondo: "#f0fdf4", borde: "#bbf7d0", grados: ["1°","2°","3°"],              clave: "Preescolar" },
    { nivel: "Primaria",   icono: "📚", color: "#1e40af", fondo: "#eff6ff", borde: "#bfdbfe", grados: ["1°","2°","3°","4°","5°","6°"], clave: "Primaria"   },
    { nivel: "Secundaria", icono: "🎓", color: "#7e22ce", fondo: "#faf5ff", borde: "#e9d5ff", grados: ["1°","2°","3°"],              clave: "Secundaria" },
  ];

  const getArchivo = (mes, clave, numero) =>
    `Planeacion_${mes}_${clave}_${numero}.pdf`;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f0fdf4", minHeight: "100vh" }}>

      <div style={{ background: "linear-gradient(135deg, #166534, #15803d)", padding: "60px 32px", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", margin: "0 0 16px 0" }}>Planeaciones NEM</h1>
        <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>
          Planeaciones didacticas basadas en la Nueva Escuela Mexicana para docentes de educacion basica
        </p>
      </div>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "60px 32px" }}>

        <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <h2 style={{ color: "#166534", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>Que son las Planeaciones NEM?</h2>
          <p style={{ color: "#475569", lineHeight: 1.8, fontSize: "16px" }}>
            Las planeaciones didacticas de la Nueva Escuela Mexicana son instrumentos de planificacion que orientan el trabajo docente a partir de los nuevos programas de estudio 2022. Se basan en el enfoque por proyectos comunitarios, campos formativos y ejes articuladores, poniendo al centro el bienestar integral de los estudiantes.
          </p>
        </div>

        <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <h2 style={{ color: "#166534", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>Elementos de una Planeacion NEM</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {[
              { titulo: "Campo Formativo",    desc: "Lenguajes, Saberes y pensamiento cientifico, Etica naturaleza y sociedades, o De lo humano y lo comunitario." },
              { titulo: "Ejes Articuladores", desc: "Inclusion, Pensamiento critico, Interculturalidad critica, Igualdad de genero, Vida saludable, Apropiacion de culturas." },
              { titulo: "Proyecto Comunitario", desc: "Actividad integradora que vincula los aprendizajes con la realidad y necesidades de la comunidad escolar." },
              { titulo: "Evaluacion Formativa", desc: "Instrumentos como rubricas, listas de cotejo y portafolios que valoran el proceso de aprendizaje." },
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
            Descarga tus Planeaciones - Ciclo 2026-2027
          </h2>
          <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "28px" }}>
            Formato PDF · Plan de Estudios 2022 · Los 4 Campos Formativos · 4 semanas por mes · Completamente gratis
          </p>

          {meses.map((mes) => (
            <div key={mes.nombre} style={{ marginBottom: "32px" }}>
              <div style={{ background: "linear-gradient(135deg, #166534, #15803d)", borderRadius: "12px", padding: "14px 20px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "20px" }}>{mes.icono}</span>
                <span style={{ color: "white", fontWeight: "800", fontSize: "18px" }}>{mes.nombre}</span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>— {mes.subtitulo}</span>
              </div>

              {niveles.map((n) => (
                <div key={n.nivel} style={{ border: `1px solid ${n.borde}`, borderRadius: "16px", marginBottom: "12px", overflow: "hidden" }}>
                  <div style={{ background: n.fondo, padding: "12px 20px", display: "flex", alignItems: "center", gap: "10px", borderBottom: `1px solid ${n.borde}` }}>
                    <span style={{ fontSize: "20px" }}>{n.icono}</span>
                    <span style={{ color: n.color, fontWeight: "800", fontSize: "16px" }}>{n.nivel}</span>
                  </div>
                  <div style={{ padding: "10px 14px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {n.grados.map((grado, idx) => (
                      <div key={grado} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 12px", background: "#fafafa", borderRadius: "10px", border: "1px solid #f1f5f9" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ fontSize: "15px" }}>📄</span>
                          <span style={{ color: "#1e293b", fontWeight: "600", fontSize: "14px" }}>{grado} {n.nivel}</span>
                          <span style={{ color: "#94a3b8", fontSize: "12px" }}>— {mes.nombre}</span>
                        </div>
                        <a
                          href={`/pdfs/planeaciones/${getArchivo(mes.nombre, n.clave, idx + 1)}`}
                          download
                          style={{ background: n.color, color: "white", padding: "7px 16px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "12px", display: "flex", alignItems: "center", gap: "5px", whiteSpace: "nowrap" }}
                        >
                          Descargar PDF
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
          <h2 style={{ fontSize: "24px", fontWeight: "700", margin: "0 0 12px 0" }}>Practica para tu examen USICAMM 2026</h2>
          <p style={{ opacity: 0.9, marginBottom: "20px" }}>Practica gratis con reactivos tipo examen real para tu evaluacion USICAMM</p>
          <a href="/simulador-usicamm-2026" style={{ background: "white", color: "#15803d", padding: "14px 32px", borderRadius: "12px", textDecoration: "none", fontWeight: "800", fontSize: "16px", display: "inline-block" }}>
            Ir al Simulador USICAMM 2026
          </a>
        </div>

      </div>
    </div>
  );
}