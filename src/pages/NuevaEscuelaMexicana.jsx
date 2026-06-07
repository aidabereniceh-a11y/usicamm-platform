export default function NuevaEscuelaMexicana() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f0fdf4", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg, #166534, #15803d)", padding: "60px 32px", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", margin: "0 0 16px 0" }}>Nueva Escuela Mexicana</h1>
        <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>Recursos, guias y materiales sobre el nuevo modelo educativo para docentes de educacion basica</p>
      </div>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 32px" }}>

        <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <h2 style={{ color: "#166534", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>Que es la Nueva Escuela Mexicana?</h2>
          <p style={{ color: "#475569", lineHeight: 1.8, fontSize: "16px" }}>La Nueva Escuela Mexicana (NEM) es el modelo educativo vigente en Mexico desde 2022. Propone una educacion humanista, critica, participativa e inclusiva que pone al centro el bienestar integral de ninas, ninos y jovenes. Se sustenta en principios como la equidad, la interculturalidad, la perspectiva de genero y el respeto a la diversidad.</p>
        </div>

        <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <h2 style={{ color: "#166534", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>Principios de la NEM</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {[
              { titulo: "Educacion Humanista", desc: "Centra el proceso educativo en el desarrollo integral de la persona y su bienestar." },
              { titulo: "Pensamiento Critico", desc: "Fomenta la capacidad de analizar, cuestionar y proponer soluciones a problemas reales." },
              { titulo: "Interculturalidad", desc: "Reconoce y valora la diversidad cultural, linguistica y social de Mexico." },
              { titulo: "Inclusion", desc: "Garantiza el acceso, permanencia y aprendizaje de todos los estudiantes sin excepcion." },
              { titulo: "Perspectiva de Genero", desc: "Promueve la igualdad entre mujeres y hombres en todos los espacios educativos." },
              { titulo: "Vida Saludable", desc: "Impulsa habitos de bienestar fisico, emocional y social en la comunidad escolar." },
            ].map((p) => (
              <div key={p.titulo} style={{ background: "#f0fdf4", borderRadius: "12px", padding: "20px", borderLeft: "4px solid #15803d" }}>
                <h3 style={{ color: "#166534", fontSize: "15px", fontWeight: "700", marginBottom: "8px" }}>{p.titulo}</h3>
                <p style={{ color: "#64748b", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <h2 style={{ color: "#166534", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>Campos Formativos</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { campo: "Lenguajes", desc: "Desarrolla las competencias comunicativas orales y escritas en espanol, lenguas indigenas e ingles." },
              { campo: "Saberes y Pensamiento Cientifico", desc: "Integra matematicas, ciencias naturales y tecnologia para comprender el mundo desde una perspectiva cientifica." },
              { campo: "Etica, Naturaleza y Sociedades", desc: "Aborda la formacion civica, la historia, la geografia y la educacion ambiental de manera integrada." },
              { campo: "De lo Humano y lo Comunitario", desc: "Incluye educacion fisica, artistica y socioemocional para el desarrollo integral del estudiante." },
            ].map((c) => (
              <div key={c.campo} style={{ display: "flex", gap: "16px", padding: "16px", background: "#f0fdf4", borderRadius: "12px" }}>
                <div style={{ minWidth: "200px" }}>
                  <div style={{ color: "#166534", fontWeight: "700", fontSize: "15px" }}>{c.campo}</div>
                </div>
                <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "linear-gradient(135deg, #166534, #15803d)", borderRadius: "20px", padding: "32px", textAlign: "center", color: "white" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", margin: "0 0 12px 0" }}>Descarga planeaciones NEM</h2>
          <p style={{ opacity: 0.9, marginBottom: "20px" }}>Accede a planeaciones didacticas basadas en el nuevo modelo educativo</p>
          <a href="/planeaciones-nem" style={{ background: "white", color: "#15803d", padding: "14px 32px", borderRadius: "12px", textDecoration: "none", fontWeight: "800", fontSize: "16px", display: "inline-block" }}>Ver planeaciones</a>
        </div>

      </div>
    </div>
  );
}