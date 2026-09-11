import { useState } from "react";

const AZ = "#1e3a5f";
const AZM = "#1d4ed8";
const VD = "#166534";
const VM = "#15803d";
const MO = "#7e22ce";
const ML = "#faf5ff";

// â”€â”€â”€ GENERADOR DE DIAGNOSTICO (sin API) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function generarDiagnosticoTexto(form) {
  const fecha = new Date().toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" });
  const areaTextos = {
    "Asistencia y comunicacion con familias": "Se identifican areas de oportunidad en la comunicacion con familias. Se recomienda implementar canales de comunicacion efectivos (WhatsApp grupal, agenda escolar, reuniones bimestrales) y llevar un registro sistematico de asistencia para detectar patrones y actuar oportunamente.",
    "Resultados de la valoracion diagnostica": "Los resultados de la valoracion diagnostica muestran diversidad en los niveles de aprendizaje del grupo. Es prioritario identificar los contenidos de mayor reto para el grupo y disenar un Plan de Atencion diferenciado que fortalezca los aprendizajes fundamentales.",
    "Estado socioemocional del grupo": "El estado socioemocional del grupo requiere atencion continua. Se sugiere implementar rutinas de bienvenida, circulos de dialogo y actividades de autorregulacion emocional, integrando el bienestar socioemocional en la planificacion diaria.",
    "Participacion e inclusion": "Se observan areas de mejora en la participacion equitativa e inclusion de todos los alumnos. Se recomienda revisar las barreras para el aprendizaje y la participacion (BAP) presentes en el grupo y disenar adecuaciones razonables.",
    "Gestion del aula y convivencia": "La gestion del aula y la convivencia son aspectos clave para el aprendizaje. Se recomienda fortalecer los acuerdos de convivencia con participacion activa de los alumnos y establecer rutinas claras y consistentes.",
    "Avance en los proyectos comunitarios": "El avance en los proyectos comunitarios muestra oportunidades de mejora en la vinculacion con el contexto. Se sugiere reforzar la conexion entre los proyectos del aula y las necesidades reales de la comunidad escolar.",
    "Uso de los LTG y materiales SEP": "El uso de los Libros de Texto Gratuitos y materiales SEP puede fortalecerse. Se recomienda planificar actividades especificas vinculadas a los proyectos de cada LTG y usar Nuestros Saberes como referente transversal.",
    "Evaluacion formativa y seguimiento": "La evaluacion formativa requiere mayor sistematizacion. Se sugiere implementar instrumentos variados (rubricas, listas de cotejo, portafolios) y registrar el avance individual de cada alumno de forma continua.",
  };

  const areasSeleccionadas = form.areas.length > 0 ? form.areas : Object.keys(areaTextos);
  const acciones = [
    `Elaborar el diagnostico de aprendizajes de ${form.grado} de ${form.nivel} en las primeras 3 semanas del ciclo escolar, usando instrumentos variados: observacion, produccion de los alumnos y entrevista informal.`,
    `Disenar un Plan de Atencion diferenciado para los alumnos con mayores rezagos, con estrategias especificas, materiales adaptados y seguimiento semanal.`,
    `Implementar al menos un proyecto comunitario por bimestre, vinculado al contexto de la escuela y al campo formativo con mayor area de oportunidad.`,
    `Establecer un sistema de evaluacion formativa continua con rubricas y portafolios, compartiendo los avances con las familias en cada bimestre.`,
    `Participar activamente en el CTE para colegiadamente analizar resultados y ajustar las estrategias de ensenanza de acuerdo con las necesidades del grupo.`,
  ];

  const indicadores = [
    `Porcentaje de alumnos de ${form.grado} de ${form.nivel} que alcanzan los PDA esperados al cierre de cada bimestre.`,
    `Numero de proyectos comunitarios concluidos con producto autentico y socializacion a la comunidad escolar.`,
    `Porcentaje de asistencia del grupo (meta: 90% o superior mensualmente).`,
    `Numero de instrumentos de evaluacion formativa aplicados por bimestre (meta: minimo 2 por campo formativo).`,
    `Porcentaje de familias que participan en las reuniones bimestrales de informacion de avances.`,
  ];

  return `DIAGNOSTICO DOCENTE NEM
Diagnostico Integral del Grupo - Plan de Estudios 2022
Fecha: ${fecha}

â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
1. DATOS GENERALES DEL GRUPO
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
Nivel educativo:     ${form.nivel}
Grado:               ${form.grado}
Numero de alumnos:   ${form.alumnos || "No especificado"}
Contexto escolar:    ${form.contexto || "No especificado"}
Docente:             ________________________________
Escuela:             ________________________________
Ciclo escolar:       2026 - 2027

â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
2. SITUACION ACTUAL DEL GRUPO
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
${areasSeleccionadas.map((a, i) => `${i + 1}. ${a}:\n   ${areaTextos[a] || "Area en revision y diagnostico."}`).join("\n\n")}

â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
3. FORTALEZAS DEL GRUPO
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
${form.fortalezas
  ? `- ${form.fortalezas.split(/[,.\n]+/).filter(f => f.trim()).map(f => f.trim()).join("\n- ")}`
  : `- Disposicion positiva del grupo para el trabajo colaborativo.
- Participacion activa en las actividades de los proyectos comunitarios.
- Relacion respetuosa entre alumnos y con el docente.`}

â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
4. AREAS DE OPORTUNIDAD Y RETOS
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
${form.retos
  ? `- ${form.retos.split(/[,.\n]+/).filter(r => r.trim()).map(r => r.trim()).join("\n- ")}`
  : `- Fortalecer la comprension lectora y la produccion escrita con proposito comunicativo.
- Desarrollar el pensamiento matematico en situaciones contextualizadas del proyecto.
- Ampliar la participacion de las familias en los procesos de aprendizaje.`}

â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
5. OBJETIVOS DEL PEMC SUGERIDOS
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
Objetivo 1: Mejorar los aprendizajes fundamentales de los alumnos de ${form.grado} de ${form.nivel} mediante proyectos comunitarios contextualizados y evaluacion formativa continua.

Objetivo 2: Fortalecer la participacion de las familias como agentes activos del proceso educativo, mediante canales de comunicacion efectivos y acciones de corresponsabilidad.

Objetivo 3: Implementar adecuaciones razonables para atender la diversidad del grupo, garantizando el derecho a la educacion de todos los alumnos.

â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
6. ACCIONES PRIORITARIAS
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
${acciones.map((a, i) => `Accion ${i + 1}: ${a}`).join("\n\n")}

â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
7. INDICADORES DE SEGUIMIENTO
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
${indicadores.map((ind, i) => `${i + 1}. ${ind}`).join("\n")}

â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
REFERENTES NORMATIVOS
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
- SEP (2022). Plan de Estudio para la Educacion Preescolar, Primaria y Secundaria.
- Mejoredu (2022). Modelo de evaluacion diagnostica, formativa e integral.
- SEP. Orientaciones para elaborar el Programa Escolar de Mejora Continua (PEMC).

Firma del docente: ________________________   Fecha: _______________
Visto bueno del director: _________________   Fecha: _______________`;
}

function DiagnosticoDocente() {
  const [form, setForm] = useState({ nivel: "", grado: "", alumnos: "", contexto: "", areas: [], fortalezas: "", retos: "" });
  const [resultado, setResultado] = useState("");
  const [error, setError] = useState("");

  const areasDisponibles = [
    "Asistencia y comunicacion con familias",
    "Resultados de la valoracion diagnostica",
    "Estado socioemocional del grupo",
    "Participacion e inclusion",
    "Gestion del aula y convivencia",
    "Avance en los proyectos comunitarios",
    "Uso de los LTG y materiales SEP",
    "Evaluacion formativa y seguimiento",
  ];

  const toggleArea = (a) => setForm(f => ({ ...f, areas: f.areas.includes(a) ? f.areas.filter(x => x !== a) : [...f.areas, a] }));

  const generar = () => {
    if (!form.nivel || !form.grado) { setError("Completa al menos el nivel y grado."); return; }
    setError("");
    setResultado(generarDiagnosticoTexto(form));
  };

  const inputStyle = { width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1px solid #bfdbfe", fontSize: "14px", color: AZ, outline: "none", boxSizing: "border-box" };
  const labelStyle = { display: "block", color: AZ, fontWeight: "700", fontSize: "13px", marginBottom: "6px" };

  return (
    <div>
      {!resultado ? (
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div>
              <label style={labelStyle}>Nivel educativo *</label>
              <select value={form.nivel} onChange={e => setForm(f => ({ ...f, nivel: e.target.value }))} style={inputStyle}>
                <option value="">Selecciona...</option>
                <option>Preescolar</option><option>Primaria</option><option>Secundaria</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Grado *</label>
              <select value={form.grado} onChange={e => setForm(f => ({ ...f, grado: e.target.value }))} style={inputStyle}>
                <option value="">Selecciona...</option>
                {["1","2","3","4","5","6"].map(g => <option key={g}>{g} grado</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Numero de alumnos</label>
              <input type="number" value={form.alumnos} onChange={e => setForm(f => ({ ...f, alumnos: e.target.value }))} placeholder="Ej: 28" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Contexto escolar</label>
              <select value={form.contexto} onChange={e => setForm(f => ({ ...f, contexto: e.target.value }))} style={inputStyle}>
                <option value="">Selecciona...</option>
                <option>Urbano</option><option>Semiurbano</option><option>Rural</option><option>Indigena</option><option>Migrante</option>
              </select>
            </div>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>Areas a diagnosticar</label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "8px" }}>
              {areasDisponibles.map(a => (
                <label key={a} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", background: form.areas.includes(a) ? "#eff6ff" : "#f8faff", borderRadius: "8px", border: `1px solid ${form.areas.includes(a) ? "#93c5fd" : "#e2e8f0"}`, cursor: "pointer", fontSize: "13px", color: AZ }}>
                  <input type="checkbox" checked={form.areas.includes(a)} onChange={() => toggleArea(a)} style={{ accentColor: AZM }} />
                  {a}
                </label>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
            <div>
              <label style={labelStyle}>Fortalezas identificadas</label>
              <textarea value={form.fortalezas} onChange={e => setForm(f => ({ ...f, fortalezas: e.target.value }))} placeholder="Ej: Participacion activa de familias, alumnos motivados..." rows={3} style={{ ...inputStyle, resize: "vertical" }} />
            </div>
            <div>
              <label style={labelStyle}>Retos o problematicas</label>
              <textarea value={form.retos} onChange={e => setForm(f => ({ ...f, retos: e.target.value }))} placeholder="Ej: Rezago en lectoescritura, inasistencias frecuentes..." rows={3} style={{ ...inputStyle, resize: "vertical" }} />
            </div>
          </div>
          {error && <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "10px", padding: "12px 16px", marginBottom: "16px", color: "#dc2626", fontSize: "14px" }}>{error}</div>}
          <button onClick={generar} style={{ width: "100%", background: `linear-gradient(135deg, ${AZ}, ${AZM})`, color: "white", padding: "14px", borderRadius: "12px", border: "none", fontWeight: "800", fontSize: "16px", cursor: "pointer" }}>
            Generar Diagnostico NEM
          </button>
        </div>
      ) : (
        <div>
          <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "16px", padding: "24px", marginBottom: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div style={{ color: VD, fontWeight: "800", fontSize: "18px" }}>Diagnostico generado</div>
              <button onClick={() => navigator.clipboard.writeText(resultado)} style={{ background: VD, color: "white", border: "none", padding: "8px 16px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>Copiar texto</button>
            </div>
            <pre style={{ whiteSpace: "pre-wrap", fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#1e293b", lineHeight: 1.7, margin: 0 }}>{resultado}</pre>
          </div>
          <button onClick={() => { setResultado(""); setForm({ nivel: "", grado: "", alumnos: "", contexto: "", areas: [], fortalezas: "", retos: "" }); }}
            style={{ width: "100%", background: "#f1f5f9", color: "#64748b", padding: "12px", borderRadius: "12px", border: "none", fontWeight: "600", cursor: "pointer" }}>
            Nuevo diagnostico
          </button>
        </div>
      )}
    </div>
  );
}

// â”€â”€â”€ TEST ESTILOS DE APRENDIZAJE VAK â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const PREGUNTAS = [
  { p: "Cuando aprendes algo nuevo, prefieres...", o: ["Ver diagramas, videos o imagenes", "Escuchar una explicacion oral", "Practicarlo con tus manos o moverte"] },
  { p: "Para recordar algo importante, tiendes a...", o: ["Escribirlo o hacer un esquema visual", "Repetirlo en voz alta o grabarlo", "Hacer algo fisico o moverlo"] },
  { p: "Cuando explicas algo a tus alumnos, prefieres...", o: ["Mostrarlo en el pizarron con dibujos", "Narrarlo con detalle y ejemplos orales", "Hacer una actividad practica con ellos"] },
  { p: "Para planear una clase, usualmente...", o: ["Haces un esquema o mapa visual", "Piensas en voz alta o lo escuchas con alguien", "Caminas mientras lo organizas en tu mente"] },
  { p: "Cuando lees un texto dificil, te ayuda...", o: ["Subrayar y hacer notas visuales", "Leerlo en voz alta o escuchar el audio", "Resumirlo escribiendo o caminando"] },
  { p: "En una reunion de CTE, aprendes mejor cuando...", o: ["Hay presentaciones con graficas e imagenes", "Hay debate, exposicion oral o discusion", "Hacen actividades practicas y dinamicas"] },
  { p: "Cuando algo te preocupa en el trabajo, tiendes a...", o: ["Escribirlo o hacer listas", "Hablarlo con alguien", "Hacer algo fisico: limpiar, caminar, organizar"] },
  { p: "Tu espacio de trabajo ideal es...", o: ["Ordenado visualmente, con todo a la vista", "Con algo de musica o sonido de fondo", "Con espacio para moverte o trabajar de pie"] },
  { p: "Para aprender una habilidad nueva docente, prefieres...", o: ["Ver un tutorial o manual con imagenes", "Escuchar un podcast o asistir a una conferencia", "Practicarlo directamente en el aula"] },
  { p: "Cuando llegas a una ciudad nueva, te orientas...", o: ["Con un mapa o referencia visual", "Preguntando a alguien que te explique", "Caminando y explorando hasta entender"] },
];

function TestEstilosAprendizaje() {
  const [respuestas, setRespuestas] = useState({});
  const [resultado, setResultado] = useState(null);
  const respondidas = Object.keys(respuestas).length;
  const completo = respondidas === PREGUNTAS.length;

  const calcular = () => {
    let V = 0, A = 0, K = 0;
    Object.values(respuestas).forEach(v => { if (v === 0) V++; else if (v === 1) A++; else K++; });
    const total = V + A + K;
    const estilos = [
      { nombre: "Visual", sigla: "V", puntaje: V, pct: Math.round((V / total) * 100), color: AZM, fondo: "#eff6ff",
        desc: "Aprendes y ensenyas mejor con imagenes, esquemas, colores y organizadores graficos. Tu fortaleza es el orden visual y la sintesis.",
        tips: ["Usa pizarron y colores al explicar tus clases", "Incluye mapas mentales y esquemas en tus planeaciones", "Ofrece apoyos visuales para alumnos con BAP", "Organiza el espacio con carteles y referencias visuales"] },
      { nombre: "Auditivo", sigla: "A", puntaje: A, pct: Math.round((A / total) * 100), color: MO, fondo: ML,
        desc: "Aprendes y ensenyas mejor con explicaciones orales, debates y repeticion en voz alta. Tu fortaleza es la narracion y el dialogo.",
        tips: ["Usa debates y rondas de opinion en el aula", "Lee en voz alta el LTG con expresion e intonacion", "Fomenta que los alumnos expliquen con sus propias palabras", "Usa canciones, rimas o ritmos para fijar contenidos"] },
      { nombre: "Kinestesico", sigla: "K", puntaje: K, pct: Math.round((K / total) * 100), color: VD, fondo: "#f0fdf4",
        desc: "Aprendes y ensenyas mejor con la practica, el movimiento y la experiencia directa. Tu fortaleza es la accion y la experimentacion.",
        tips: ["Disenya actividades con movimiento y materiales concretos", "Incluye experimentos, salidas y proyectos manuales", "Permite que los alumnos construyan, recorten y peguen", "Usa juegos de roles y simulaciones en el aula"] },
    ].sort((a, b) => b.puntaje - a.puntaje);
    setResultado(estilos);
  };

  if (resultado) {
    const p = resultado[0];
    return (
      <div>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <div style={{ color: p.color, fontWeight: "800", fontSize: "22px" }}>Tu estilo predominante: {p.nombre}</div>
          <div style={{ color: "#64748b", fontSize: "14px", marginTop: "4px" }}>{p.pct}% de tus respuestas</div>
        </div>
        <div style={{ display: "flex", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
          {resultado.map((e, i) => (
            <div key={e.sigla} style={{ flex: 1, minWidth: "150px", background: e.fondo, borderRadius: "16px", padding: "16px", border: `2px solid ${i === 0 ? e.color : "#e2e8f0"}` }}>
              <div style={{ color: e.color, fontWeight: "800", fontSize: "20px", textAlign: "center" }}>{e.sigla}</div>
              <div style={{ color: e.color, fontWeight: "700", fontSize: "14px", textAlign: "center", marginBottom: "8px" }}>{e.nombre}</div>
              <div style={{ background: "#e2e8f0", borderRadius: "4px", height: "8px", overflow: "hidden" }}>
                <div style={{ background: e.color, width: `${e.pct}%`, height: "100%", borderRadius: "4px" }} />
              </div>
              <div style={{ color: "#64748b", fontSize: "12px", textAlign: "center", marginTop: "4px" }}>{e.pct}%</div>
            </div>
          ))}
        </div>
        <div style={{ background: p.fondo, borderRadius: "16px", padding: "20px", border: `1px solid ${p.color}40`, marginBottom: "16px" }}>
          <div style={{ color: p.color, fontWeight: "800", fontSize: "15px", marginBottom: "8px" }}>{p.desc}</div>
          <div style={{ color: p.color, fontWeight: "700", fontSize: "14px", marginBottom: "10px" }}>Estrategias NEM para tu estilo {p.nombre}:</div>
          {p.tips.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "6px" }}>
              <span style={{ color: p.color, fontWeight: "700", flexShrink: 0 }}>-</span>
              <span style={{ color: "#374151", fontSize: "14px" }}>{t}</span>
            </div>
          ))}
        </div>
        <button onClick={() => { setResultado(null); setRespuestas({}); }} style={{ width: "100%", background: "#f1f5f9", color: "#64748b", padding: "12px", borderRadius: "12px", border: "none", fontWeight: "600", cursor: "pointer" }}>Repetir test</button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ background: "#f0f9ff", borderRadius: "12px", padding: "12px 16px", marginBottom: "20px", border: "1px solid #bae6fd" }}>
        <span style={{ color: "#0369a1", fontSize: "14px" }}>Respondidas: <strong>{respondidas} de {PREGUNTAS.length}</strong></span>
        <div style={{ background: "#e0f2fe", borderRadius: "4px", height: "6px", marginTop: "8px", overflow: "hidden" }}>
          <div style={{ background: "#0369a1", width: `${(respondidas / PREGUNTAS.length) * 100}%`, height: "100%", borderRadius: "4px", transition: "width 0.3s" }} />
        </div>
      </div>
      {PREGUNTAS.map((p, i) => (
        <div key={i} style={{ marginBottom: "16px", padding: "16px", background: respuestas[i] !== undefined ? "#f0fdf4" : "#f8faff", borderRadius: "14px", border: `1px solid ${respuestas[i] !== undefined ? "#bbf7d0" : "#e2e8f0"}` }}>
          <div style={{ color: AZ, fontWeight: "700", fontSize: "14px", marginBottom: "10px" }}>{i + 1}. {p.p}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {p.o.map((o, j) => (
              <label key={j} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 14px", background: respuestas[i] === j ? "#eff6ff" : "white", borderRadius: "10px", border: `1px solid ${respuestas[i] === j ? "#93c5fd" : "#e2e8f0"}`, cursor: "pointer", fontSize: "13px", color: "#374151" }}>
                <input type="radio" name={`p${i}`} checked={respuestas[i] === j} onChange={() => setRespuestas(r => ({ ...r, [i]: j }))} style={{ accentColor: AZM }} />
                <span style={{ color: [AZM, MO, VD][j], fontWeight: "700", fontSize: "11px", minWidth: "70px" }}>{["Visual:", "Auditivo:", "Kinestesico:"][j]}</span> {o}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button onClick={calcular} disabled={!completo} style={{ width: "100%", background: completo ? `linear-gradient(135deg, ${MO}, #6d28d9)` : "#94a3b8", color: "white", padding: "14px", borderRadius: "12px", border: "none", fontWeight: "800", fontSize: "16px", cursor: completo ? "pointer" : "not-allowed" }}>
        {completo ? "Ver mi estilo de aprendizaje" : `Responde ${PREGUNTAS.length - respondidas} preguntas mas`}
      </button>
    </div>
  );
}

// â”€â”€â”€ GENERADOR DE EVALUACION FORMATIVA (sin API) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function generarEvaluacion(form) {
  const fecha = new Date().toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" });

  const criteriosPorCampo = {
    "Lenguajes": ["Produce textos con proposito comunicativo claro", "Lee con comprension e identifica ideas principales", "Participa en intercambios orales con vocabulario adecuado", "Revisa y mejora sus producciones escritas", "Usa el lenguaje para expresar ideas, emociones y argumentos"],
    "Saberes y Pensamiento Cientifico": ["Resuelve situaciones problemas con estrategias propias", "Registra y analiza datos en tablas o graficas", "Formula preguntas e hipotesis sobre su entorno", "Aplica conceptos matematicos en contextos reales", "Comunica sus hallazgos con claridad y evidencia"],
    "Etica, Naturaleza y Sociedades": ["Reflexiona critica sobre situaciones de su entorno", "Valora la diversidad cultural y natural", "Propone acciones de mejora comunitaria", "Practica habitos de cuidado personal y ambiental", "Participa activamente en la vida civica del grupo"],
    "De lo Humano y lo Comunitario": ["Colabora con responsabilidad en el proyecto comunitario", "Expresa emociones y sentimientos con asertividad", "Asume roles con autonomia y compromiso", "Respeta acuerdos y normas de convivencia", "Contribuye al bienestar del grupo con acciones concretas"],
  };

  const criterios = criteriosPorCampo[form.campo] || criteriosPorCampo["Lenguajes"];

  if (form.instrumento.includes("Rubrica")) {
    return `RUBRICA FORMATIVA NEM
${form.instrumento.toUpperCase()}
Fecha: ${fecha}

ENCABEZADO
Nivel:           ${form.nivel}
Grado:           ${form.grado}
Campo formativo: ${form.campo}
PDA / Contenido: ${form.pda || "General del campo formativo"}
Contexto:        ${form.contexto || "Aula regular"}
Docente:         ________________________________
Alumno/a:        ________________________________

PROPOSITO DE LA EVALUACION
Valorar el logro integral del alumno en el campo de ${form.campo}, proporcionando
informacion para retroalimentar el aprendizaje y ajustar la ensenanza de manera
oportuna y pertinente, de acuerdo con los principios de la evaluacion formativa NEM.

RUBRICA FORMATIVA (3 NIVELES)
${"â”€".repeat(80)}
CRITERIO                        | LOGRADO           | EN PROCESO        | REQUIERE APOYO
${"â”€".repeat(80)}
${criterios.map(c => {
  const pad = (s, n) => s.length > n ? s.slice(0, n - 3) + "..." : s.padEnd(n);
  return `${pad(c, 30)} | ${pad("De forma autonoma y con calidad", 17)} | ${pad("Con apoyo del docente", 17)} | ${pad("Requiere andamiaje directo", 17)}`;
}).join("\n")}
${"â”€".repeat(80)}

DESCRIPTORES DETALLADOS POR CRITERIO
${criterios.map((c, i) => `
${i + 1}. ${c}
   LOGRADO:        El alumno lo realiza de forma autonoma, con calidad y puede explicarlo.
   EN PROCESO:     Lo realiza con apoyo o de forma parcial; requiere guia puntual.
   REQUIERE APOYO: Necesita andamiaje constante; el docente actua como mediador directo.`).join("\n")}

OBSERVACIONES DEL DOCENTE
___________________________________________________________________________
___________________________________________________________________________
___________________________________________________________________________

PREGUNTAS DE METACOGNICION PARA EL ALUMNO
1. ?Que aprendi en esta actividad / proyecto?
   ___________________________________________________________________________
2. ?Que parte me costo mas trabajo? ?Como lo resolvi?
   ___________________________________________________________________________
3. ?Que cambiaria de mi trabajo si lo hiciera de nuevo?
   ___________________________________________________________________________

NOTA PARA EL DOCENTE
Esta rubrica es un instrumento formativo, no sumativo. Usarla para:
- Retroalimentar al alumno de forma especifica y oportuna.
- Identificar quienes requieren apoyo adicional o adecuaciones.
- Planificar la siguiente sesion con base en los resultados observados.
- Compartir los avances con las familias en las reuniones bimestrales.

Referentes: SEP (2022) Plan de Estudio NEM / Mejoredu (2022) Modelo de evaluacion.`;
  }

  if (form.instrumento.includes("Lista de cotejo")) {
    return `LISTA DE COTEJO NEM
Fecha: ${fecha}

ENCABEZADO
Nivel:           ${form.nivel}
Grado:           ${form.grado}
Campo formativo: ${form.campo}
PDA / Contenido: ${form.pda || "General del campo formativo"}
Docente:         ________________________________
Alumno/a:        ________________________________

PROPOSITO
Registrar de forma sistematica los indicadores de logro observables en el alumno,
para retroalimentar el proceso de aprendizaje y ajustar la intervencion docente.

INDICADORES DE LOGRO
${"â”€".repeat(60)}
INDICADOR                                        | SI | NO | EN PROCESO
${"â”€".repeat(60)}
${criterios.map(c => `${c.padEnd(48)} |    |    |`).join("\n")}
${"â”€".repeat(60)}

REGISTRO DE AVANCE POR ALUMNO
${"â”€".repeat(70)}
NOMBRE DEL ALUMNO          | ${criterios.map((_, i) => `C${i + 1} `).join("| ")} | OBSERVACION
${"â”€".repeat(70)}
${Array(5).fill(0).map(() => `${"_".repeat(26)} | ${criterios.map(() => "   ").join("| ")} | ${"_".repeat(15)}`).join("\n")}
${"â”€".repeat(70)}

Leyenda: S = Si logrado / N = No logrado / P = En proceso

OBSERVACIONES GENERALES
___________________________________________________________________________
___________________________________________________________________________

PREGUNTAS DE METACOGNICION
1. ?Que es lo que mejor hago en ${form.campo}? ___________________________________
2. ?En que necesito mejorar? ____________________________________________________
3. ?Como puedo lograrlo? ________________________________________________________

NOTA PARA EL DOCENTE
Aplica esta lista de cotejo durante el proceso, no solo al final. Usa los resultados
para formar equipos de apoyo entre pares y disenar actividades diferenciadas.`;
  }

  // Portafolio / Diario / Escala / Mixto
  return `INSTRUMENTO DE EVALUACION FORMATIVA NEM
${form.instrumento.toUpperCase()}
Fecha: ${fecha}

ENCABEZADO
Nivel:           ${form.nivel}
Grado:           ${form.grado}
Campo formativo: ${form.campo}
PDA / Contenido: ${form.pda || "General del campo formativo"}
Docente:         ________________________________
Alumno/a:        ________________________________

PROPOSITO DE LA EVALUACION
Valorar el proceso de aprendizaje del alumno en ${form.campo} de manera integral,
fomentando la autoevaluacion, coevaluacion y metacognicion como componentes
esenciales de la evaluacion formativa NEM.

INSTRUMENTO: ${form.instrumento}

INDICADORES A VALORAR
${criterios.map((c, i) => `${i + 1}. ${c}
   Evidencia observable: ___________________________________________________
   Nivel de logro (1-4): ____   Observacion: _______________________________`).join("\n\n")}

AUTOEVALUACION DEL ALUMNO
Instrucciones: Colorea las estrellas segun tu avance (1 = inicio, 4 = logrado)
${criterios.map((c, i) => `${i + 1}. ${c}
   Estrellas: [ ] [ ] [ ] [ ]`).join("\n")}

COEVALUACION (opinion de un companero)
Lo que mas me gusto de tu trabajo: _________________________________________
Una sugerencia para mejorar:     _________________________________________

REFLEXION DOCENTE
Fortalezas observadas: _____________________________________________________
Ajustes para la siguiente sesion: __________________________________________
Alumnos que requieren apoyo prioritario: ____________________________________

PREGUNTAS DE METACOGNICION
1. ?Que aprendi? _____________________________________________________________
2. ?Que me costo trabajo? ____________________________________________________
3. ?Que quiero aprender mejor? ________________________________________________

Referentes: SEP (2022) Plan de Estudio NEM / Mejoredu (2022) Modelo de evaluacion.`;
}

function EvaluacionFormativa() {
  const [form, setForm] = useState({ nivel: "", grado: "", campo: "", pda: "", instrumento: "", contexto: "" });
  const [resultado, setResultado] = useState("");
  const [error, setError] = useState("");

  const campos = ["Lenguajes", "Saberes y Pensamiento Cientifico", "Etica, Naturaleza y Sociedades", "De lo Humano y lo Comunitario"];
  const instrumentos = ["Rubrica formativa (3 niveles)", "Lista de cotejo", "Diario de aprendizaje / Portafolio", "Escala de valoracion", "Autoevaluacion y coevaluacion", "Instrumento mixto (rubrica + autoevaluacion)"];

  const generar = () => {
    if (!form.nivel || !form.grado || !form.campo || !form.instrumento) { setError("Completa los campos obligatorios."); return; }
    setError("");
    setResultado(generarEvaluacion(form));
  };

  const inputStyle = { width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1px solid #d8b4fe", fontSize: "14px", color: MO, outline: "none", boxSizing: "border-box" };
  const labelStyle = { display: "block", color: MO, fontWeight: "700", fontSize: "13px", marginBottom: "6px" };

  return (
    <div>
      {!resultado ? (
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div>
              <label style={labelStyle}>Nivel *</label>
              <select value={form.nivel} onChange={e => setForm(f => ({ ...f, nivel: e.target.value }))} style={inputStyle}>
                <option value="">Selecciona...</option>
                <option>Preescolar</option><option>Primaria</option><option>Secundaria</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Grado *</label>
              <select value={form.grado} onChange={e => setForm(f => ({ ...f, grado: e.target.value }))} style={inputStyle}>
                <option value="">Selecciona...</option>
                {["1","2","3","4","5","6"].map(g => <option key={g}>{g} grado</option>)}
              </select>
            </div>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>Campo formativo *</label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "8px" }}>
              {campos.map(c => (
                <label key={c} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px", background: form.campo === c ? ML : "white", borderRadius: "10px", border: `1px solid ${form.campo === c ? "#c084fc" : "#e2e8f0"}`, cursor: "pointer", fontSize: "13px", color: MO }}>
                  <input type="radio" name="campo" checked={form.campo === c} onChange={() => setForm(f => ({ ...f, campo: c }))} style={{ accentColor: MO }} />
                  {c}
                </label>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>PDA o contenido especifico (opcional)</label>
            <textarea value={form.pda} onChange={e => setForm(f => ({ ...f, pda: e.target.value }))} placeholder="Ej: Escritura del nombre propio, Nombrario del grupo, Sumas hasta 20..." rows={2} style={{ ...inputStyle, resize: "vertical" }} />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>Tipo de instrumento *</label>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {instrumentos.map(inst => (
                <label key={inst} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 14px", background: form.instrumento === inst ? ML : "white", borderRadius: "10px", border: `1px solid ${form.instrumento === inst ? "#c084fc" : "#e2e8f0"}`, cursor: "pointer", fontSize: "13px", color: MO }}>
                  <input type="radio" name="inst" checked={form.instrumento === inst} onChange={() => setForm(f => ({ ...f, instrumento: inst }))} style={{ accentColor: MO }} />
                  {inst}
                </label>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={labelStyle}>Contexto del grupo (opcional)</label>
            <textarea value={form.contexto} onChange={e => setForm(f => ({ ...f, contexto: e.target.value }))} placeholder="Ej: Grupo de 28 alumnos, contexto urbano, algunos con BAP..." rows={2} style={{ ...inputStyle, resize: "vertical" }} />
          </div>
          {error && <div style={{ background: "#fdf4ff", border: "1px solid #d8b4fe", borderRadius: "10px", padding: "12px 16px", marginBottom: "16px", color: MO, fontSize: "14px" }}>{error}</div>}
          <button onClick={generar} style={{ width: "100%", background: `linear-gradient(135deg, ${MO}, #6d28d9)`, color: "white", padding: "14px", borderRadius: "12px", border: "none", fontWeight: "800", fontSize: "16px", cursor: "pointer" }}>
            Generar Instrumento de Evaluacion
          </button>
        </div>
      ) : (
        <div>
          <div style={{ background: ML, border: "1px solid #d8b4fe", borderRadius: "16px", padding: "24px", marginBottom: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div style={{ color: MO, fontWeight: "800", fontSize: "18px" }}>Instrumento generado</div>
              <button onClick={() => navigator.clipboard.writeText(resultado)} style={{ background: MO, color: "white", border: "none", padding: "8px 16px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>Copiar texto</button>
            </div>
            <pre style={{ whiteSpace: "pre-wrap", fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#1e293b", lineHeight: 1.7, margin: 0 }}>{resultado}</pre>
          </div>
          <button onClick={() => { setResultado(""); setForm({ nivel: "", grado: "", campo: "", pda: "", instrumento: "", contexto: "" }); }}
            style={{ width: "100%", background: "#f1f5f9", color: "#64748b", padding: "12px", borderRadius: "12px", border: "none", fontWeight: "600", cursor: "pointer" }}>
            Generar otro instrumento
          </button>
        </div>
      )}
    </div>
  );
}

// â”€â”€â”€ PAGINA PRINCIPAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export default function HerramientasDocentes() {
  const [activa, setActiva] = useState(null);

  const herramientas = [
    { id: "diagnostico", titulo: "Diagnostico Docente NEM", desc: "Genera tu Diagnostico Integral del Grupo basado en el enfoque SEP-Mejoredu. Listo para el PEMC.", color: AZM, fondo: "#eff6ff", borde: "#93c5fd", comp: <DiagnosticoDocente /> },
    { id: "estilos", titulo: "Test: Estilos de Aprendizaje", desc: "Descubre tu estilo docente predominante (Visual, Auditivo o Kinestesico) y recibe estrategias NEM.", color: MO, fondo: ML, borde: "#c084fc", comp: <TestEstilosAprendizaje /> },
    { id: "evaluacion", titulo: "Evaluacion Formativa NEM", desc: "Genera rubricas, listas de cotejo, portafolios y mas instrumentos listos para usar en el aula.", color: VD, fondo: "#f0fdf4", borde: "#86efac", comp: <EvaluacionFormativa /> },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ background: `linear-gradient(135deg, ${AZ}, ${AZM})`, padding: "60px 32px", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", margin: "0 0 16px 0" }}>Herramientas para Docentes</h1>
        <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>
          Herramientas gratuitas para maestros mexicanos. Sin registro, sin instalacion, al instante.
        </p>
      </div>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 32px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "32px" }}>
          {herramientas.map((h) => (
            <div key={h.id} style={{ background: "white", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: `1px solid ${h.borde}`, overflow: "hidden" }}>
              <div style={{ background: h.fondo, padding: "20px 24px", borderBottom: activa === h.id ? `1px solid ${h.borde}` : "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ color: h.color, fontWeight: "800", fontSize: "18px", marginBottom: "4px" }}>{h.titulo}</div>
                  <div style={{ color: "#64748b", fontSize: "13px", lineHeight: 1.5 }}>{h.desc}</div>
                </div>
                <button onClick={() => setActiva(activa === h.id ? null : h.id)}
                  style={{ background: activa === h.id ? h.color : "white", color: activa === h.id ? "white" : h.color, border: `2px solid ${h.color}`, padding: "10px 20px", borderRadius: "10px", cursor: "pointer", fontWeight: "700", fontSize: "14px", whiteSpace: "nowrap", marginLeft: "16px", flexShrink: 0 }}>
                  {activa === h.id ? "Cerrar" : "Abrir"}
                </button>
              </div>
              {activa === h.id && <div style={{ padding: "24px" }}>{h.comp}</div>}
            </div>
          ))}
        </div>
        <div style={{ background: `linear-gradient(135deg, ${AZ}, ${AZM})`, borderRadius: "20px", padding: "32px", textAlign: "center", color: "white" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", margin: "0 0 12px 0" }}>Descarga planeaciones NEM</h2>
          <p style={{ opacity: 0.9, marginBottom: "20px" }}>Planeaciones didacticas con LTG, calendario SEP y evaluacion formativa incluida</p>
          <a href="/planeaciones-nem" style={{ background: "white", color: AZM, padding: "14px 32px", borderRadius: "12px", textDecoration: "none", fontWeight: "800", fontSize: "16px", display: "inline-block" }}>
            Ver planeaciones NEM
          </a>
        </div>
      </div>
    </div>
  );
}
