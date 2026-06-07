export default function EvaluacionDiagnostica() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f0fdf4", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg, #166534, #15803d)", padding: "60px 32px", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", margin: "0 0 16px 0" }}>Evaluacion Diagnostica</h1>
        <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>Instrumentos y guias para aplicar evaluaciones diagnosticas en el aula conforme a la NEM</p>
      </div>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 32px" }}>

        <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <h2 style={{ color: "#166534", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>Que es la Evaluacion Diagnostica?</h2>
          <p style={{ color: "#475569", lineHeight: 1.8, fontSize: "16px" }}>La evaluacion diagnostica es un proceso que permite al docente identificar los conocimientos previos, habilidades, actitudes e intereses de los estudiantes al inicio del ciclo escolar o de un nuevo proyecto. En la Nueva Escuela Mexicana, la evaluacion diagnostica es formativa y no tiene caracter calificador, sino que sirve como punto de partida para planificar el trabajo docente.</p>
        </div>

        <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <h2 style={{ color: "#166534", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>Para que sirve?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {[
              { titulo: "Conocer al grupo", desc: "Identifica las caracteristicas, intereses y contexto de vida de cada estudiante." },
              { titulo: "Detectar saberes previos", desc: "Reconoce lo que los alumnos ya saben para partir de ello en la ensenanza." },
              { titulo: "Planificar mejor", desc: "Permite ajustar las estrategias didacticas a las necesidades reales del grupo." },
              { titulo: "Identificar rezagos", desc: "Detecta a tiempo a los estudiantes que requieren apoyo o atencion especial." },
            ].map((s) => (
              <div key={s.titulo} style={{ background: "#f0fdf4", borderRadius: "12px", padding: "20px", borderLeft: "4px solid #15803d" }}>
                <h3 style={{ color: "#166534", fontSize: "15px", fontWeight: "700", marginBottom: "8px" }}>{s.titulo}</h3>
                <p style={{ color: "#64748b", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <h2 style={{ color: "#166534", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>Instrumentos de Evaluacion Diagnostica</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { instrumento: "Cuestionario inicial", desc: "Serie de preguntas abiertas o cerradas que exploran los conocimientos previos del alumno sobre un tema." },
              { instrumento: "Lluvia de ideas", desc: "Actividad grupal donde los alumnos expresan libremente lo que saben o piensan sobre un tema." },
              { instrumento: "Dibujo o mapa mental", desc: "Representacion grafica de lo que el alumno sabe, ideal para preescolar y primaria baja." },
              { instrumento: "Observacion directa", desc: "El docente observa y registra el comportamiento, actitudes y habilidades de los alumnos en actividades libres." },
              { instrumento: "Entrevista", desc: "Conversacion breve con el alumno para conocer su contexto, intereses y expectativas del ciclo escolar." },
              { instrumento: "Lista de cotejo", desc: "Instrumento que registra la presencia o ausencia de conocimientos, habilidades o actitudes especificas." },
            ].map((i) => (
              <div key={i.instrumento} style={{ display: "flex", gap: "16px", padding: "16px", background: "#f0fdf4", borderRadius: "12px" }}>
                <div style={{ minWidth: "160px" }}>
                  <div style={{ color: "#166534", fontWeight: "700", fontSize: "15px" }}>{i.instrumento}</div>
                </div>
                <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{i.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "linear-gradient(135deg, #166534, #15803d)", borderRadius: "20px", padding: "32px", textAlign: "center", color: "white" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", margin: "0 0 12px 0" }}>Organiza tu grupo con PasaLista</h2>
          <p style={{ opacity: 0.9, marginBottom: "20px" }}>Registra asistencia y controla tu grupo mientras aplicas tu evaluacion diagnostica</p>
          <a href="https://pasalista.mx" target="_blank" rel="noreferrer" style={{ background: "white", color: "#15803d", padding: "14px 32px", borderRadius: "12px", textDecoration: "none", fontWeight: "800", fontSize: "16px", display: "inline-block" }}>Conocer PasaLista</a>
        </div>

      </div>
    </div>
  );
}