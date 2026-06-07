export default function PlaneacionesNem() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f0fdf4", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg, #166534, #15803d)", padding: "60px 32px", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", margin: "0 0 16px 0" }}>Planeaciones NEM</h1>
        <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>Planeaciones didacticas basadas en la Nueva Escuela Mexicana para docentes de educacion basica</p>
      </div>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 32px" }}>

        <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <h2 style={{ color: "#166534", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>Que son las Planeaciones NEM?</h2>
          <p style={{ color: "#475569", lineHeight: 1.8, fontSize: "16px" }}>Las planeaciones didacticas de la Nueva Escuela Mexicana son instrumentos de planificacion que orientan el trabajo docente a partir de los nuevos programas de estudio 2022. Se basan en el enfoque por proyectos comunitarios, campos formativos y ejes articuladores, poniendo al centro el bienestar integral de los estudiantes.</p>
        </div>

        <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <h2 style={{ color: "#166534", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>Elementos de una Planeacion NEM</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {[
              { titulo: "Campo Formativo", desc: "Lenguajes, Saberes y pensamiento cientifico, Etica naturaleza y sociedades, o De lo humano y lo comunitario." },
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
          <h2 style={{ color: "#166534", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>Niveles Educativos</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { nivel: "Preescolar", grados: "1°, 2° y 3° de preescolar", desc: "Planeaciones basadas en situaciones didacticas y juego como estrategia principal de aprendizaje." },
              { nivel: "Primaria Baja", grados: "1°, 2° y 3° de primaria", desc: "Proyectos comunitarios que integran la lectoescritura, matematicas y exploracion del entorno social y natural." },
              { nivel: "Primaria Alta", grados: "4°, 5° y 6° de primaria", desc: "Proyectos mas complejos que desarrollan el pensamiento critico, la investigacion y la colaboracion." },
              { nivel: "Secundaria", grados: "1°, 2° y 3° de secundaria", desc: "Planeaciones por asignatura articuladas con los ejes del curriculo NEM y proyectos interdisciplinarios." },
            ].map((n) => (
              <div key={n.nivel} style={{ display: "flex", gap: "16px", padding: "16px", background: "#f0fdf4", borderRadius: "12px" }}>
                <div style={{ minWidth: "120px" }}>
                  <div style={{ color: "#166534", fontWeight: "700", fontSize: "15px" }}>{n.nivel}</div>
                  <div style={{ color: "#15803d", fontSize: "13px" }}>{n.grados}</div>
                </div>
                <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "linear-gradient(135deg, #166534, #15803d)", borderRadius: "20px", padding: "32px", textAlign: "center", color: "white" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", margin: "0 0 12px 0" }}>Prepara mejor tus clases</h2>
          <p style={{ opacity: 0.9, marginBottom: "20px" }}>Accede a recursos y guias gratuitas para la Nueva Escuela Mexicana</p>
          <a href="/nueva-escuela-mexicana" style={{ background: "white", color: "#15803d", padding: "14px 32px", borderRadius: "12px", textDecoration: "none", fontWeight: "800", fontSize: "16px", display: "inline-block" }}>Ver mas recursos NEM</a>
        </div>

      </div>
    </div>
  );
}