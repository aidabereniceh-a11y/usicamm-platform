import { useState } from "react";

// â”€â”€â”€ COLORES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const AZ = "#1e3a5f";
const AZM = "#1d4ed8";
const VD = "#166534";
const VM = "#15803d";
const MO = "#7e22ce";
const ML = "#faf5ff";

// â”€â”€â”€ DIAGNÃ“STICO DOCENTE NEM â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function DiagnosticoDocente() {
  const [form, setForm] = useState({
    nivel: "", grado: "", alumnos: "", contexto: "",
    areas: [], fortalezas: "", retos: ""
  });
  const [resultado, setResultado] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const areasDisponibles = [
    "Asistencia y comunicaciÃ³n con familias",
    "Resultados de la valoraciÃ³n diagnÃ³stica",
    "Estado socioemocional del grupo",
    "ParticipaciÃ³n e inclusiÃ³n",
    "GestiÃ³n del aula y convivencia",
    "Avance en los proyectos comunitarios",
    "Uso de los LTG y materiales SEP",
    "EvaluaciÃ³n formativa y seguimiento",
  ];

  const toggleArea = (a) => setForm(f => ({
    ...f, areas: f.areas.includes(a) ? f.areas.filter(x => x !== a) : [...f.areas, a]
  }));

  const generar = async () => {
    if (!form.nivel || !form.grado) { setError("Completa al menos el nivel y grado."); return; }
    setCargando(true); setError(""); setResultado("");
    try {
      const prompt = `Eres un experto en la Nueva Escuela Mexicana y en el DiagnÃ³stico Integral de la Escuela (SEP-Mejoredu). Genera un DiagnÃ³stico Docente NEM completo y profesional con base en estos datos:

NIVEL: ${form.nivel}
GRADO: ${form.grado}
NÃšMERO DE ALUMNOS: ${form.alumnos || "No especificado"}
CONTEXTO ESCOLAR: ${form.contexto || "No especificado"}
ÃREAS A DIAGNOSTICAR: ${form.areas.length > 0 ? form.areas.join(", ") : "Todas las Ã¡reas"}
FORTALEZAS IDENTIFICADAS: ${form.fortalezas || "No especificadas"}
RETOS IDENTIFICADOS: ${form.retos || "No especificados"}

Genera el diagnÃ³stico con estas secciones claramente separadas:

1. DATOS GENERALES DEL GRUPO
2. SITUACIÃ“N ACTUAL (anÃ¡lisis por cada Ã¡rea seleccionada)
3. FORTALEZAS DEL GRUPO
4. ÃREAS DE OPORTUNIDAD Y RETOS
5. OBJETIVOS DEL PEMC SUGERIDOS (Programa Escolar de Mejora Continua)
6. ACCIONES PRIORITARIAS (mÃ­nimo 3, concretas y realizables)
7. INDICADORES DE SEGUIMIENTO

Usa lenguaje profesional docente, basado en el enfoque NEM. SÃ© especÃ­fico y prÃ¡ctico.`;

      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-api-key": import.meta.env.VITE_ANTHROPIC_KEY, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1500,
          messages: [{ role: "user", content: prompt }]
        })
      });
      const data = await res.json();
      const texto = data.content?.map(b => b.text || "").join("\n") || "";
      if (!texto) throw new Error("Sin respuesta");
      setResultado(texto);
    } catch { setError("No se pudo generar el diagnÃ³stico. Verifica tu conexiÃ³n."); }
    finally { setCargando(false); }
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
                {["1Â°","2Â°","3Â°","4Â°","5Â°","6Â°"].map(g => <option key={g}>{g}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>NÃºmero de alumnos</label>
              <input type="number" value={form.alumnos} onChange={e => setForm(f => ({ ...f, alumnos: e.target.value }))} placeholder="Ej: 28" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Contexto escolar</label>
              <select value={form.contexto} onChange={e => setForm(f => ({ ...f, contexto: e.target.value }))} style={inputStyle}>
                <option value="">Selecciona...</option>
                <option>Urbano</option><option>Semiurbano</option><option>Rural</option><option>IndÃ­gena</option><option>Migrante</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>Ãreas a diagnosticar (selecciona las que apliquen)</label>
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
              <textarea value={form.fortalezas} onChange={e => setForm(f => ({ ...f, fortalezas: e.target.value }))} placeholder="Ej: ParticipaciÃ³n activa de familias, alumnos motivados..." rows={3} style={{ ...inputStyle, resize: "vertical" }} />
            </div>
            <div>
              <label style={labelStyle}>Retos o problemÃ¡ticas</label>
              <textarea value={form.retos} onChange={e => setForm(f => ({ ...f, retos: e.target.value }))} placeholder="Ej: Rezago en lectoescritura, inasistencias frecuentes..." rows={3} style={{ ...inputStyle, resize: "vertical" }} />
            </div>
          </div>

          {error && <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "10px", padding: "12px 16px", marginBottom: "16px", color: "#dc2626", fontSize: "14px" }}>{error}</div>}

          <button onClick={generar} disabled={cargando} style={{ width: "100%", background: cargando ? "#94a3b8" : `linear-gradient(135deg, ${AZ}, ${AZM})`, color: "white", padding: "14px", borderRadius: "12px", border: "none", fontWeight: "800", fontSize: "16px", cursor: cargando ? "not-allowed" : "pointer" }}>
            {cargando ? "â³ Generando diagnÃ³stico..." : "ðŸ” Generar DiagnÃ³stico NEM"}
          </button>
        </div>
      ) : (
        <div>
          <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "16px", padding: "24px", marginBottom: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div style={{ color: VD, fontWeight: "800", fontSize: "18px" }}>âœ… DiagnÃ³stico generado</div>
              <button onClick={() => { navigator.clipboard.writeText(resultado); }} style={{ background: VD, color: "white", border: "none", padding: "8px 16px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>ðŸ“‹ Copiar</button>
            </div>
            <pre style={{ whiteSpace: "pre-wrap", fontFamily: "Arial, sans-serif", fontSize: "14px", color: "#1e293b", lineHeight: 1.7, margin: 0 }}>{resultado}</pre>
          </div>
          <button onClick={() => { setResultado(""); setForm({ nivel: "", grado: "", alumnos: "", contexto: "", areas: [], fortalezas: "", retos: "" }); }}
            style={{ width: "100%", background: "#f1f5f9", color: "#64748b", padding: "12px", borderRadius: "12px", border: "none", fontWeight: "600", cursor: "pointer" }}>
            Nuevo diagnÃ³stico
          </button>
        </div>
      )}
    </div>
  );
}

// â”€â”€â”€ TEST DE ESTILOS DE APRENDIZAJE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const PREGUNTAS_VAK = [
  { pregunta: "Cuando aprendes algo nuevo, prefieres...", opciones: ["Ver diagramas, videos o imÃ¡genes", "Escuchar una explicaciÃ³n oral", "Practicarlo con tus manos o moverte"] },
  { pregunta: "Para recordar algo importante, tiendes a...", opciones: ["Escribirlo o hacer un esquema visual", "Repetirlo en voz alta o grabarlo", "Hacer algo fÃ­sico o moverlo"] },
  { pregunta: "Cuando explicas algo a tus alumnos, prefieres...", opciones: ["Mostrarlo en el pizarrÃ³n con dibujos", "Narrarlo con detalle y ejemplos orales", "Hacer una actividad prÃ¡ctica con ellos"] },
  { pregunta: "Para planear una clase, usualmente...", opciones: ["Haces un esquema o mapa visual", "Piensas en voz alta o lo escuchas con alguien", "Caminas mientras lo organizas en tu mente"] },
  { pregunta: "Cuando lees un texto difÃ­cil, te ayuda...", opciones: ["Subrayar y hacer notas visuales", "Leerlo en voz alta o escuchar el audio", "Resumirlo escribiendo o caminando"] },
  { pregunta: "En una reuniÃ³n de CTE, aprendes mejor cuando...", opciones: ["Hay presentaciones con grÃ¡ficas e imÃ¡genes", "Hay debate, exposiciÃ³n oral o discusiÃ³n", "Hacen actividades prÃ¡cticas y dinÃ¡micas"] },
  { pregunta: "Cuando algo te preocupa en el trabajo, tiendes a...", opciones: ["Escribirlo o hacer listas", "Hablarlo con alguien", "Hacer algo fÃ­sico: limpiar, caminar, organizar"] },
  { pregunta: "Tu espacio de trabajo ideal es...", opciones: ["Ordenado visualmente, con todo a la vista", "Con algo de mÃºsica o sonido de fondo", "Con espacio para moverte o trabajar de pie"] },
  { pregunta: "Para aprender una habilidad nueva docente, prefieres...", opciones: ["Ver un tutorial o manual con imÃ¡genes", "Escuchar un podcast o asistir a una conferencia", "Practicarlo directamente en el aula"] },
  { pregunta: "Cuando llegas a una ciudad nueva, te orientas...", opciones: ["Con un mapa o referencia visual", "Preguntando a alguien que te explique", "Caminando y explorando hasta entender"] },
];

function TestEstilosAprendizaje() {
  const [respuestas, setRespuestas] = useState({});
  const [resultado, setResultado] = useState(null);

  const responder = (i, val) => setRespuestas(r => ({ ...r, [i]: val }));

  const calcular = () => {
    let V = 0, A = 0, K = 0;
    Object.values(respuestas).forEach(v => { if (v === 0) V++; else if (v === 1) A++; else K++; });
    const total = V + A + K;
    const estilos = [
      { nombre: "Visual", sigla: "V", puntaje: V, pct: Math.round((V / total) * 100), color: AZM, fondo: "#eff6ff", desc: "Aprendes y enseÃ±as mejor con imÃ¡genes, esquemas, colores y organizadores grÃ¡ficos. Tu fortaleza es el orden visual y la sÃ­ntesis." },
      { nombre: "Auditivo", sigla: "A", puntaje: A, pct: Math.round((A / total) * 100), color: MO, fondo: ML, desc: "Aprendes y enseÃ±as mejor con explicaciones orales, debates y repeticiÃ³n en voz alta. Tu fortaleza es la narraciÃ³n y el diÃ¡logo." },
      { nombre: "KinestÃ©sico", sigla: "K", puntaje: K, pct: Math.round((K / total) * 100), color: VD, fondo: "#f0fdf4", desc: "Aprendes y enseÃ±as mejor con la prÃ¡ctica, el movimiento y la experiencia directa. Tu fortaleza es la acciÃ³n y la experimentaciÃ³n." },
    ].sort((a, b) => b.puntaje - a.puntaje);
    setResultado(estilos);
  };

  const respondidas = Object.keys(respuestas).length;
  const completo = respondidas === PREGUNTAS_VAK.length;

  if (resultado) {
    const principal = resultado[0];
    const estrategias = {
      "Visual": ["Usa pizarrÃ³n y colores al explicar", "Incluye mapas mentales y esquemas en tus planeaciones", "Ofrece apoyos visuales para alumnos con BAP", "Organiza el espacio con carteles y referencias visuales"],
      "Auditivo": ["Usa debates, rondas de opiniÃ³n y exposiciones orales", "Lee en voz alta el LTG con expresiÃ³n y entonaciÃ³n", "Fomenta que los alumnos expliquen con sus propias palabras", "Usa canciones, rimas o ritmos para fijar contenidos"],
      "KinestÃ©sico": ["DiseÃ±a actividades con movimiento y materiales concretos", "Incluye experimentos, salidas y proyectos manuales", "Permite que los alumnos construyan, recorten y peguen", "Usa juegos de roles y simulaciones en el aula"],
    };
    return (
      <div>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <div style={{ fontSize: "48px", marginBottom: "8px" }}>ðŸ§ </div>
          <div style={{ color: principal.color, fontWeight: "800", fontSize: "22px" }}>Tu estilo predominante: {principal.nombre}</div>
          <div style={{ color: "#64748b", fontSize: "14px", marginTop: "4px" }}>{principal.pct}% de tus respuestas</div>
        </div>
        <div style={{ display: "flex", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
          {resultado.map((e, i) => (
            <div key={e.sigla} style={{ flex: 1, minWidth: "160px", background: e.fondo, borderRadius: "16px", padding: "16px", border: `2px solid ${i === 0 ? e.color : "#e2e8f0"}` }}>
              <div style={{ color: e.color, fontWeight: "800", fontSize: "20px", textAlign: "center", marginBottom: "4px" }}>{e.sigla}</div>
              <div style={{ color: e.color, fontWeight: "700", fontSize: "14px", textAlign: "center", marginBottom: "8px" }}>{e.nombre}</div>
              <div style={{ background: "#e2e8f0", borderRadius: "4px", height: "8px", overflow: "hidden" }}>
                <div style={{ background: e.color, width: `${e.pct}%`, height: "100%", borderRadius: "4px" }} />
              </div>
              <div style={{ color: "#64748b", fontSize: "12px", textAlign: "center", marginTop: "4px" }}>{e.pct}%</div>
              {i === 0 && <div style={{ color: "#475569", fontSize: "12px", marginTop: "8px", lineHeight: 1.5 }}>{e.desc}</div>}
            </div>
          ))}
        </div>
        <div style={{ background: "#f0fdf4", borderRadius: "16px", padding: "20px", border: "1px solid #bbf7d0", marginBottom: "16px" }}>
          <div style={{ color: VD, fontWeight: "800", fontSize: "15px", marginBottom: "12px" }}>ðŸ’¡ Estrategias recomendadas para tu estilo {principal.nombre}</div>
          {(estrategias[principal.nombre] || []).map((e, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "8px" }}>
              <span style={{ color: VD, fontWeight: "700", fontSize: "16px" }}>â€¢</span>
              <span style={{ color: "#374151", fontSize: "14px", lineHeight: 1.6 }}>{e}</span>
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
        <span style={{ color: "#0369a1", fontSize: "14px" }}>Respondidas: <strong>{respondidas} de {PREGUNTAS_VAK.length}</strong></span>
        <div style={{ background: "#e0f2fe", borderRadius: "4px", height: "6px", marginTop: "8px", overflow: "hidden" }}>
          <div style={{ background: "#0369a1", width: `${(respondidas / PREGUNTAS_VAK.length) * 100}%`, height: "100%", borderRadius: "4px", transition: "width 0.3s" }} />
        </div>
      </div>
      {PREGUNTAS_VAK.map((p, i) => (
        <div key={i} style={{ marginBottom: "20px", padding: "16px", background: respuestas[i] !== undefined ? "#f0fdf4" : "#f8faff", borderRadius: "14px", border: `1px solid ${respuestas[i] !== undefined ? "#bbf7d0" : "#e2e8f0"}` }}>
          <div style={{ color: AZ, fontWeight: "700", fontSize: "14px", marginBottom: "12px" }}>{i + 1}. {p.pregunta}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {p.opciones.map((o, j) => (
              <label key={j} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", background: respuestas[i] === j ? "#eff6ff" : "white", borderRadius: "10px", border: `1px solid ${respuestas[i] === j ? "#93c5fd" : "#e2e8f0"}`, cursor: "pointer", fontSize: "13px", color: "#374151" }}>
                <input type="radio" name={`p${i}`} checked={respuestas[i] === j} onChange={() => responder(i, j)} style={{ accentColor: AZM }} />
                <span style={{ marginRight: "6px" }}>{["ðŸ‘ï¸", "ðŸ‘‚", "ðŸ¤²"][j]}</span>{o}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button onClick={calcular} disabled={!completo} style={{ width: "100%", background: completo ? `linear-gradient(135deg, ${MO}, #6d28d9)` : "#94a3b8", color: "white", padding: "14px", borderRadius: "12px", border: "none", fontWeight: "800", fontSize: "16px", cursor: completo ? "pointer" : "not-allowed" }}>
        {completo ? "ðŸ§  Ver mi estilo de aprendizaje" : `Responde las ${PREGUNTAS_VAK.length - respondidas} preguntas restantes`}
      </button>
    </div>
  );
}

// â”€â”€â”€ EVALUACIÃ“N FORMATIVA NEM â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function EvaluacionFormativa() {
  const [form, setForm] = useState({ nivel: "", grado: "", campo: "", pda: "", instrumento: "", contexto: "" });
  const [resultado, setResultado] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const campos = ["Lenguajes", "Saberes y Pensamiento CientÃ­fico", "Ã‰tica, Naturaleza y Sociedades", "De lo Humano y lo Comunitario"];
  const instrumentos = ["RÃºbrica formativa (3 niveles)", "Lista de cotejo", "Diario de aprendizaje / Portafolio", "Escala de valoraciÃ³n", "AutoevaluaciÃ³n y coevaluaciÃ³n", "Instrumento mixto (rÃºbrica + autoevaluaciÃ³n)"];

  const generar = async () => {
    if (!form.nivel || !form.grado || !form.campo || !form.instrumento) { setError("Completa los campos obligatorios."); return; }
    setCargando(true); setError(""); setResultado("");
    try {
      const prompt = `Eres un experto en evaluaciÃ³n formativa de la Nueva Escuela Mexicana (NEM). Genera un instrumento de evaluaciÃ³n formativa completo y listo para usar, basado en estos datos:

NIVEL: ${form.nivel}
GRADO: ${form.grado}
CAMPO FORMATIVO: ${form.campo}
PDA / CONTENIDO: ${form.pda || "General del campo formativo para el nivel y grado indicados"}
INSTRUMENTO SOLICITADO: ${form.instrumento}
CONTEXTO: ${form.contexto || "Aula regular"}

Principios de la evaluaciÃ³n formativa NEM a seguir:
- Valorar el logro del estudiante de forma integral
- Proporcionar retroalimentaciÃ³n para mejorar
- El estudiante es activo: autoevaluaciÃ³n, coevaluaciÃ³n y metacogniciÃ³n
- El docente guÃ­a, valora el esfuerzo y fomenta la autonomÃ­a
- Vincular la evaluaciÃ³n con situaciones reales de la vida

Genera el instrumento COMPLETO con:
1. ENCABEZADO (nombre del instrumento, nivel, grado, campo, fecha)
2. PROPÃ“SITO DE LA EVALUACIÃ“N
3. EL INSTRUMENTO COMPLETO (tablas con criterios, niveles y descriptores especÃ­ficos y observables)
4. ESPACIO PARA OBSERVACIONES DEL DOCENTE
5. PREGUNTAS DE METACOGNICIÃ“N PARA EL ALUMNO (3 preguntas)
6. NOTA PARA EL DOCENTE (cÃ³mo usar el instrumento)

SÃ© muy especÃ­fico en los criterios y descriptores. Usa lenguaje profesional docente NEM.`;

      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-api-key": import.meta.env.VITE_ANTHROPIC_KEY, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" },
        body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 1500, messages: [{ role: "user", content: prompt }] })
      });
      const data = await res.json();
      const texto = data.content?.map(b => b.text || "").join("\n") || "";
      if (!texto) throw new Error("Sin respuesta");
      setResultado(texto);
    } catch { setError("No se pudo generar el instrumento. Verifica tu conexiÃ³n."); }
    finally { setCargando(false); }
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
                {["1Â°","2Â°","3Â°","4Â°","5Â°","6Â°"].map(g => <option key={g}>{g}</option>)}
              </select>
            </div>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>Campo formativo *</label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "8px" }}>
              {campos.map(c => (
                <label key={c} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px", background: form.campo === c ? ML : "white", borderRadius: "10px", border: `1px solid ${form.campo === c ? "#c084fc" : "#e2e8f0"}`, cursor: "pointer", fontSize: "13px", color: MO, fontWeight: form.campo === c ? "700" : "400" }}>
                  <input type="radio" name="campo" checked={form.campo === c} onChange={() => setForm(f => ({ ...f, campo: c }))} style={{ accentColor: MO }} />
                  {c}
                </label>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>PDA o contenido especÃ­fico (opcional)</label>
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
          <button onClick={generar} disabled={cargando} style={{ width: "100%", background: cargando ? "#94a3b8" : `linear-gradient(135deg, ${MO}, #6d28d9)`, color: "white", padding: "14px", borderRadius: "12px", border: "none", fontWeight: "800", fontSize: "16px", cursor: cargando ? "not-allowed" : "pointer" }}>
            {cargando ? "â³ Generando instrumento..." : "ðŸ“Š Generar Instrumento de EvaluaciÃ³n"}
          </button>
        </div>
      ) : (
        <div>
          <div style={{ background: ML, border: "1px solid #d8b4fe", borderRadius: "16px", padding: "24px", marginBottom: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div style={{ color: MO, fontWeight: "800", fontSize: "18px" }}>âœ… Instrumento generado</div>
              <button onClick={() => navigator.clipboard.writeText(resultado)} style={{ background: MO, color: "white", border: "none", padding: "8px 16px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>ðŸ“‹ Copiar</button>
            </div>
            <pre style={{ whiteSpace: "pre-wrap", fontFamily: "Arial, sans-serif", fontSize: "14px", color: "#1e293b", lineHeight: 1.7, margin: 0 }}>{resultado}</pre>
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

// â”€â”€â”€ PÃGINA PRINCIPAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export default function HerramientasDocentes() {
  const [activa, setActiva] = useState(null);

  const herramientas = [
    {
      id: "diagnostico",
      icono: "ðŸ”",
      titulo: "DiagnÃ³stico Docente NEM",
      desc: "Genera tu DiagnÃ³stico Integral de la Escuela (DIE) basado en el enfoque SEP-Mejoredu. Listo para el PEMC.",
      color: AZM,
      fondo: "#eff6ff",
      borde: "#93c5fd",
      comp: <DiagnosticoDocente />,
    },
    {
      id: "estilos",
      icono: "ðŸ§ ",
      titulo: "Test: Estilos de Aprendizaje",
      desc: "Descubre tu estilo docente predominante (Visual, Auditivo o KinestÃ©sico) y recibe estrategias NEM personalizadas.",
      color: MO,
      fondo: ML,
      borde: "#c084fc",
      comp: <TestEstilosAprendizaje />,
    },
    {
      id: "evaluacion",
      icono: "ðŸ“Š",
      titulo: "EvaluaciÃ³n Formativa NEM",
      desc: "Genera rÃºbricas, listas de cotejo, portafolios y mÃ¡s instrumentos de evaluaciÃ³n formativa listos para usar en el aula.",
      color: VD,
      fondo: "#f0fdf4",
      borde: "#86efac",
      comp: <EvaluacionFormativa />,
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ background: `linear-gradient(135deg, ${AZ}, ${AZM})`, padding: "60px 32px", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", margin: "0 0 16px 0" }}>Herramientas para Docentes</h1>
        <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>
          Herramientas gratuitas diseÃ±adas para maestros mexicanos. Sin registro, sin instalaciÃ³n, al instante.
        </p>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 32px" }}>

        {/* Grid de herramientas */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "20px", marginBottom: "32px" }}>
          {herramientas.map((h) => (
            <div key={h.id} style={{ background: "white", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: `1px solid ${h.borde}`, overflow: "hidden" }}>
              {/* Header de la tarjeta */}
              <div style={{ background: h.fondo, padding: "20px 24px", borderBottom: `1px solid ${h.borde}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "28px" }}>{h.icono}</span>
                  <div>
                    <div style={{ color: h.color, fontWeight: "800", fontSize: "17px" }}>{h.titulo}</div>
                    <div style={{ color: "#64748b", fontSize: "13px", marginTop: "2px", lineHeight: 1.4 }}>{h.desc}</div>
                  </div>
                </div>
                <button
                  onClick={() => setActiva(activa === h.id ? null : h.id)}
                  style={{ background: activa === h.id ? h.color : "white", color: activa === h.id ? "white" : h.color, border: `2px solid ${h.color}`, padding: "8px 16px", borderRadius: "10px", cursor: "pointer", fontWeight: "700", fontSize: "13px", whiteSpace: "nowrap", flexShrink: 0, marginLeft: "12px" }}>
                  {activa === h.id ? "Cerrar âœ•" : "Abrir â†’"}
                </button>
              </div>
              {/* Contenido desplegable */}
              {activa === h.id && (
                <div style={{ padding: "24px" }}>
                  {h.comp}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(135deg, ${AZ}, ${AZM})`, borderRadius: "20px", padding: "32px", textAlign: "center", color: "white" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", margin: "0 0 12px 0" }}>Descarga planeaciones NEM</h2>
          <p style={{ opacity: 0.9, marginBottom: "20px" }}>Planeaciones didÃ¡cticas con LTG, calendario SEP y evaluaciÃ³n formativa incluida</p>
          <a href="/planeaciones-nem" style={{ background: "white", color: AZM, padding: "14px 32px", borderRadius: "12px", textDecoration: "none", fontWeight: "800", fontSize: "16px", display: "inline-block" }}>
            Ver planeaciones NEM â†’
          </a>
        </div>

      </div>
    </div>
  );
}
