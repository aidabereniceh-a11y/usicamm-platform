import { useState } from "react";

const AZ = "#1e3a5f";
const AZM = "#1d4ed8";
const VD = "#166534";
const VM = "#15803d";
const MO = "#7e22ce";
const ML = "#faf5ff";

// --- DIAGNOSTICO DOCENTE NEM ---
function DiagnosticoDocente() {
  const [form, setForm] = useState({ nivel: "", grado: "", alumnos: "", contexto: "", areas: [], fortalezas: "", retos: "" });
  const [resultado, setResultado] = useState("");
  const [cargando, setCargando] = useState(false);
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

  const generar = async () => {
    if (!form.nivel || !form.grado) { setError("Completa al menos el nivel y grado."); return; }
    setCargando(true); setError(""); setResultado("");
    try {
      const prompt = `Eres un experto en la Nueva Escuela Mexicana y en el Diagnostico Integral de la Escuela (SEP-Mejoredu). Genera un Diagnostico Docente NEM completo y profesional con base en estos datos:\n\nNIVEL: ${form.nivel}\nGRADO: ${form.grado}\nNUMERO DE ALUMNOS: ${form.alumnos || "No especificado"}\nCONTEXTO ESCOLAR: ${form.contexto || "No especificado"}\nAREAS A DIAGNOSTICAR: ${form.areas.length > 0 ? form.areas.join(", ") : "Todas las areas"}\nFORTALEZAS IDENTIFICADAS: ${form.fortalezas || "No especificadas"}\nRETOS IDENTIFICADOS: ${form.retos || "No especificados"}\n\nGenera el diagnostico con estas secciones:\n1. DATOS GENERALES DEL GRUPO\n2. SITUACION ACTUAL (analisis por cada area seleccionada)\n3. FORTALEZAS DEL GRUPO\n4. AREAS DE OPORTUNIDAD Y RETOS\n5. OBJETIVOS DEL PEMC SUGERIDOS\n6. ACCIONES PRIORITARIAS (minimo 3, concretas)\n7. INDICADORES DE SEGUIMIENTO\n\nUsa lenguaje profesional docente NEM. Se especifico y practico.`;
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-api-key": import.meta.env.VITE_ANTHROPIC_KEY, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" },
        body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 1500, messages: [{ role: "user", content: prompt }] })
      });
      const data = await res.json();
      const texto = data.content?.map(b => b.text || "").join("\n") || "";
      if (!texto) throw new Error("Sin respuesta");
      setResultado(texto);
    } catch { setError("No se pudo generar el diagnostico. Verifica tu conexion."); }
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
              <textarea value={form.fortalezas} onChange={e => setForm(f => ({ ...f, fortalezas: e.target.value }))} placeholder="Ej: Participacion activa de familias..." rows={3} style={{ ...inputStyle, resize: "vertical" }} />
            </div>
            <div>
              <label style={labelStyle}>Retos o problematicas</label>
              <textarea value={form.retos} onChange={e => setForm(f => ({ ...f, retos: e.target.value }))} placeholder="Ej: Rezago en lectoescritura..." rows={3} style={{ ...inputStyle, resize: "vertical" }} />
            </div>
          </div>
          {error && <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "10px", padding: "12px 16px", marginBottom: "16px", color: "#dc2626", fontSize: "14px" }}>{error}</div>}
          <button onClick={generar} disabled={cargando} style={{ width: "100%", background: cargando ? "#94a3b8" : `linear-gradient(135deg, ${AZ}, ${AZM})`, color: "white", padding: "14px", borderRadius: "12px", border: "none", fontWeight: "800", fontSize: "16px", cursor: cargando ? "not-allowed" : "pointer" }}>
            {cargando ? "Generando diagnostico..." : "Generar Diagnostico NEM"}
          </button>
        </div>
      ) : (
        <div>
          <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "16px", padding: "24px", marginBottom: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div style={{ color: VD, fontWeight: "800", fontSize: "18px" }}>Diagnostico generado</div>
              <button onClick={() => navigator.clipboard.writeText(resultado)} style={{ background: VD, color: "white", border: "none", padding: "8px 16px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>Copiar texto</button>
            </div>
            <pre style={{ whiteSpace: "pre-wrap", fontFamily: "Arial, sans-serif", fontSize: "14px", color: "#1e293b", lineHeight: 1.7, margin: 0 }}>{resultado}</pre>
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

// --- TEST ESTILOS DE APRENDIZAJE VAK ---
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

  const responder = (i, val) => setRespuestas(r => ({ ...r, [i]: val }));

  const calcular = () => {
    let V = 0, A = 0, K = 0;
    Object.values(respuestas).forEach(v => { if (v === 0) V++; else if (v === 1) A++; else K++; });
    const total = V + A + K;
    const estilos = [
      { nombre: "Visual", sigla: "V", puntaje: V, pct: Math.round((V / total) * 100), color: AZM, fondo: "#eff6ff", desc: "Aprendes y ensenyas mejor con imagenes, esquemas, colores y organizadores graficos.", tips: ["Usa pizarron y colores al explicar", "Incluye mapas mentales en tus planeaciones", "Ofrece apoyos visuales para alumnos con BAP", "Organiza el espacio con carteles y referencias"] },
      { nombre: "Auditivo", sigla: "A", puntaje: A, pct: Math.round((A / total) * 100), color: MO, fondo: ML, desc: "Aprendes y ensenyas mejor con explicaciones orales, debates y repeticion en voz alta.", tips: ["Usa debates y rondas de opinion", "Lee en voz alta el LTG con expresion", "Fomenta que los alumnos expliquen con sus palabras", "Usa canciones o rimas para fijar contenidos"] },
      { nombre: "Kinestesico", sigla: "K", puntaje: K, pct: Math.round((K / total) * 100), color: VD, fondo: "#f0fdf4", desc: "Aprendes y ensenyas mejor con la practica, el movimiento y la experiencia directa.", tips: ["Disenya actividades con movimiento y materiales concretos", "Incluye experimentos y proyectos manuales", "Permite que los alumnos construyan, recorten y peguen", "Usa juegos de roles y simulaciones"] },
    ].sort((a, b) => b.puntaje - a.puntaje);
    setResultado(estilos);
  };

  const respondidas = Object.keys(respuestas).length;
  const completo = respondidas === PREGUNTAS.length;

  if (resultado) {
    const principal = resultado[0];
    return (
      <div>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <div style={{ color: principal.color, fontWeight: "800", fontSize: "22px" }}>Tu estilo predominante: {principal.nombre}</div>
          <div style={{ color: "#64748b", fontSize: "14px", marginTop: "4px" }}>{principal.pct}% de tus respuestas</div>
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
        <div style={{ background: "#f0fdf4", borderRadius: "16px", padding: "20px", border: "1px solid #bbf7d0", marginBottom: "16px" }}>
          <div style={{ color: VD, fontWeight: "800", fontSize: "15px", marginBottom: "8px" }}>{principal.desc}</div>
          <div style={{ color: VD, fontWeight: "700", fontSize: "14px", marginBottom: "10px" }}>Estrategias recomendadas para tu estilo {principal.nombre}:</div>
          {principal.tips.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "6px" }}>
              <span style={{ color: VD, fontWeight: "700" }}>-</span>
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
        <div key={i} style={{ marginBottom: "20px", padding: "16px", background: respuestas[i] !== undefined ? "#f0fdf4" : "#f8faff", borderRadius: "14px", border: `1px solid ${respuestas[i] !== undefined ? "#bbf7d0" : "#e2e8f0"}` }}>
          <div style={{ color: AZ, fontWeight: "700", fontSize: "14px", marginBottom: "12px" }}>{i + 1}. {p.p}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {p.o.map((o, j) => (
              <label key={j} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", background: respuestas[i] === j ? "#eff6ff" : "white", borderRadius: "10px", border: `1px solid ${respuestas[i] === j ? "#93c5fd" : "#e2e8f0"}`, cursor: "pointer", fontSize: "13px", color: "#374151" }}>
                <input type="radio" name={`p${i}`} checked={respuestas[i] === j} onChange={() => responder(i, j)} style={{ accentColor: AZM }} />
                {["Visual:", "Auditivo:", "Kinestesico:"][j]} {o}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button onClick={calcular} disabled={!completo} style={{ width: "100%", background: completo ? `linear-gradient(135deg, ${MO}, #6d28d9)` : "#94a3b8", color: "white", padding: "14px", borderRadius: "12px", border: "none", fontWeight: "800", fontSize: "16px", cursor: completo ? "pointer" : "not-allowed" }}>
        {completo ? "Ver mi estilo de aprendizaje" : `Responde las ${PREGUNTAS.length - respondidas} preguntas restantes`}
      </button>
    </div>
  );
}

// --- EVALUACION FORMATIVA NEM ---
function EvaluacionFormativa() {
  const [form, setForm] = useState({ nivel: "", grado: "", campo: "", pda: "", instrumento: "", contexto: "" });
  const [resultado, setResultado] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const campos = ["Lenguajes", "Saberes y Pensamiento Cientifico", "Etica, Naturaleza y Sociedades", "De lo Humano y lo Comunitario"];
  const instrumentos = ["Rubrica formativa (3 niveles)", "Lista de cotejo", "Diario de aprendizaje / Portafolio", "Escala de valoracion", "Autoevaluacion y coevaluacion", "Instrumento mixto (rubrica + autoevaluacion)"];

  const generar = async () => {
    if (!form.nivel || !form.grado || !form.campo || !form.instrumento) { setError("Completa los campos obligatorios."); return; }
    setCargando(true); setError(""); setResultado("");
    try {
      const prompt = `Eres un experto en evaluacion formativa de la Nueva Escuela Mexicana (NEM). Genera un instrumento de evaluacion formativa completo y listo para usar:\n\nNIVEL: ${form.nivel}\nGRADO: ${form.grado}\nCAMPO FORMATIVO: ${form.campo}\nPDA / CONTENIDO: ${form.pda || "General del campo formativo"}\nINSTRUMENTO: ${form.instrumento}\nCONTEXTO: ${form.contexto || "Aula regular"}\n\nPrincipios NEM: valorar el logro integral, retroalimentacion para mejorar, estudiante activo (autoevaluacion, coevaluacion, metacognicion), docente que guia y fomenta autonomia.\n\nGenera el instrumento COMPLETO con:\n1. ENCABEZADO (nombre, nivel, grado, campo, fecha)\n2. PROPOSITO DE LA EVALUACION\n3. EL INSTRUMENTO COMPLETO (tabla con criterios, niveles y descriptores especificos)\n4. ESPACIO PARA OBSERVACIONES\n5. PREGUNTAS DE METACOGNICION PARA EL ALUMNO (3 preguntas)\n6. NOTA PARA EL DOCENTE (como usarlo)\n\nSe muy especifico en criterios y descriptores. Lenguaje profesional docente NEM.`;
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-api-key": import.meta.env.VITE_ANTHROPIC_KEY, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" },
        body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 1500, messages: [{ role: "user", content: prompt }] })
      });
      const data = await res.json();
      const texto = data.content?.map(b => b.text || "").join("\n") || "";
      if (!texto) throw new Error("Sin respuesta");
      setResultado(texto);
    } catch { setError("No se pudo generar el instrumento. Verifica tu conexion."); }
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
          <button onClick={generar} disabled={cargando} style={{ width: "100%", background: cargando ? "#94a3b8" : `linear-gradient(135deg, ${MO}, #6d28d9)`, color: "white", padding: "14px", borderRadius: "12px", border: "none", fontWeight: "800", fontSize: "16px", cursor: cargando ? "not-allowed" : "pointer" }}>
            {cargando ? "Generando instrumento..." : "Generar Instrumento de Evaluacion"}
          </button>
        </div>
      ) : (
        <div>
          <div style={{ background: ML, border: "1px solid #d8b4fe", borderRadius: "16px", padding: "24px", marginBottom: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div style={{ color: MO, fontWeight: "800", fontSize: "18px" }}>Instrumento generado</div>
              <button onClick={() => navigator.clipboard.writeText(resultado)} style={{ background: MO, color: "white", border: "none", padding: "8px 16px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>Copiar texto</button>
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

// --- PAGINA PRINCIPAL ---
export default function HerramientasDocentes() {
  const [activa, setActiva] = useState(null);

  const herramientas = [
    { id: "diagnostico", titulo: "Diagnostico Docente NEM", desc: "Genera tu Diagnostico Integral de la Escuela (DIE) basado en el enfoque SEP-Mejoredu. Listo para el PEMC.", color: AZM, fondo: "#eff6ff", borde: "#93c5fd", comp: <DiagnosticoDocente /> },
    { id: "estilos", titulo: "Test: Estilos de Aprendizaje", desc: "Descubre tu estilo docente predominante (Visual, Auditivo o Kinestesico) y recibe estrategias NEM personalizadas.", color: MO, fondo: ML, borde: "#c084fc", comp: <TestEstilosAprendizaje /> },
    { id: "evaluacion", titulo: "Evaluacion Formativa NEM", desc: "Genera rubricas, listas de cotejo, portafolios y mas instrumentos de evaluacion formativa listos para usar en el aula.", color: VD, fondo: "#f0fdf4", borde: "#86efac", comp: <EvaluacionFormativa /> },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ background: `linear-gradient(135deg, ${AZ}, ${AZM})`, padding: "60px 32px", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", margin: "0 0 16px 0" }}>Herramientas para Docentes</h1>
        <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>
          Herramientas gratuitas disenadas para maestros mexicanos. Sin registro, sin instalacion, al instante.
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
