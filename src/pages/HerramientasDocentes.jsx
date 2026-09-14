import { useState } from "react";

const AZ="#1e3a5f",AZM="#1d4ed8",VD="#166534",VM="#15803d",MO="#7e22ce",ML="#faf5ff";

function SeccionHeader({ titulo, color, bg }) {
  return (
    <div style={{ background: bg||"#eff6ff", borderLeft: "5px solid "+(color||AZ), padding: "10px 16px", marginTop: "20px", marginBottom: "10px", borderRadius: "0 8px 8px 0" }}>
      <div style={{ color: color||AZ, fontWeight: "800", fontSize: "15px" }}>{titulo}</div>
    </div>
  );
}
function InfoRow({ label, value }) {
  return (
    <div style={{ display: "flex", borderBottom: "1px solid #f1f5f9", padding: "8px 0" }}>
      <div style={{ color: "#64748b", fontSize: "13px", fontWeight: "700", minWidth: "160px" }}>{label}</div>
      <div style={{ color: "#1e293b", fontSize: "13px", flex: 1 }}>{value || "-"}</div>
    </div>
  );
}
function BulletItem({ text, color }) {
  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "6px", alignItems: "flex-start" }}>
      <span style={{ color: color||VD, fontWeight: "800", fontSize: "16px", lineHeight: "1.4", flexShrink: 0 }}>-</span>
      <span style={{ color: "#374151", fontSize: "13px", lineHeight: 1.6 }}>{text}</span>
    </div>
  );
}
function NumItem({ num, text, color }) {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "flex-start" }}>
      <div style={{ background: color||AZ, color: "white", borderRadius: "50%", width: "22px", height: "22px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "800", flexShrink: 0, marginTop: "1px" }}>{num}</div>
      <span style={{ color: "#374151", fontSize: "13px", lineHeight: 1.6 }}>{text}</span>
    </div>
  );
}

// --- EVALUACION DIAGNOSTICA ---
function EvaluacionDiagnosticaInfo() {
  return (
    <div>
      <div style={{ background: "white", borderRadius: "14px", padding: "20px", marginBottom: "16px", border: "1px solid #dcfce7" }}>
        <div style={{ color: VD, fontWeight: "800", fontSize: "16px", marginBottom: "12px" }}>Que es la Evaluacion Diagnostica NEM?</div>
        <div style={{ color: "#475569", lineHeight: 1.8, fontSize: "14px" }}>La evaluacion diagnostica es un proceso que permite al docente identificar los conocimientos previos, habilidades, actitudes e intereses de los estudiantes al inicio del ciclo escolar o de un nuevo proyecto. En la Nueva Escuela Mexicana es formativa y no tiene caracter calificador, sirve como punto de partida para planificar el trabajo docente.</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", marginBottom: "16px" }}>
        {[
          { titulo: "Conocer al grupo", desc: "Identifica las caracteristicas, intereses y contexto de vida de cada estudiante." },
          { titulo: "Detectar saberes previos", desc: "Reconoce lo que los alumnos ya saben para partir de ello en la ensenanza." },
          { titulo: "Planificar mejor", desc: "Permite ajustar las estrategias didacticas a las necesidades reales del grupo." },
          { titulo: "Identificar rezagos", desc: "Detecta a tiempo a los estudiantes que requieren apoyo o atencion especial." },
        ].map((s) => (
          <div key={s.titulo} style={{ background: "#f0fdf4", borderRadius: "12px", padding: "16px", borderLeft: "4px solid #15803d" }}>
            <div style={{ color: VD, fontWeight: "700", fontSize: "14px", marginBottom: "6px" }}>{s.titulo}</div>
            <div style={{ color: "#64748b", fontSize: "12px", lineHeight: 1.6 }}>{s.desc}</div>
          </div>
        ))}
      </div>
      <div style={{ color: VD, fontWeight: "800", fontSize: "15px", marginBottom: "12px" }}>Instrumentos de Evaluacion Diagnostica</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
        {[
          { instrumento: "Cuestionario inicial", desc: "Preguntas abiertas o cerradas que exploran los conocimientos previos del alumno." },
          { instrumento: "Lluvia de ideas", desc: "Actividad grupal donde los alumnos expresan lo que saben sobre un tema." },
          { instrumento: "Dibujo o mapa mental", desc: "Representacion grafica de lo que el alumno sabe, ideal para preescolar y primaria baja." },
          { instrumento: "Observacion directa", desc: "El docente observa y registra comportamiento, actitudes y habilidades en actividades libres." },
          { instrumento: "Entrevista", desc: "Conversacion breve con el alumno para conocer su contexto, intereses y expectativas." },
          { instrumento: "Lista de cotejo", desc: "Registra la presencia o ausencia de conocimientos, habilidades o actitudes especificas." },
        ].map((i) => (
          <div key={i.instrumento} style={{ display: "flex", gap: "14px", padding: "12px 14px", background: "#f0fdf4", borderRadius: "10px", border: "1px solid #dcfce7" }}>
            <div style={{ color: VD, fontWeight: "700", fontSize: "13px", minWidth: "150px", flexShrink: 0 }}>{i.instrumento}</div>
            <div style={{ color: "#64748b", fontSize: "13px", lineHeight: 1.5 }}>{i.desc}</div>
          </div>
        ))}
      </div>
      <div style={{ background: "linear-gradient(135deg, #166534, #15803d)", borderRadius: "14px", padding: "20px", textAlign: "center", color: "white" }}>
        <div style={{ fontWeight: "800", fontSize: "16px", marginBottom: "8px" }}>Organiza tu grupo con PasaLista</div>
        <div style={{ opacity: 0.9, fontSize: "13px", marginBottom: "14px" }}>Registra asistencia mientras aplicas tu evaluacion diagnostica</div>
        <a href="https://pasalista.mx" target="_blank" rel="noreferrer" style={{ background: "white", color: "#15803d", padding: "10px 24px", borderRadius: "10px", textDecoration: "none", fontWeight: "800", fontSize: "14px", display: "inline-block" }}>Conocer PasaLista</a>
      </div>
    </div>
  );
}

// --- DIAGNOSTICO DOCENTE NEM ---
const AREA_TEXTOS = {
  "Asistencia y comunicacion con familias": "Se identifican areas de oportunidad en la comunicacion con familias. Se recomienda implementar canales efectivos (grupo de WhatsApp, agenda escolar, reuniones bimestrales) y llevar registro sistematico de asistencia para detectar patrones y actuar oportunamente.",
  "Resultados de la valoracion diagnostica": "Los resultados muestran diversidad en los niveles de aprendizaje. Es prioritario identificar los contenidos de mayor reto y disenar un Plan de Atencion diferenciado que fortalezca los aprendizajes fundamentales de cada alumno.",
  "Estado socioemocional del grupo": "El estado socioemocional requiere atencion continua. Se sugiere implementar rutinas de bienvenida, circulos de dialogo y actividades de autorregulacion emocional, integrando el bienestar socioemocional en la planificacion diaria.",
  "Participacion e inclusion": "Se observan areas de mejora en la participacion equitativa. Se recomienda revisar las Barreras para el Aprendizaje y la Participacion (BAP) e implementar adecuaciones razonables para garantizar el acceso de todos los alumnos.",
  "Gestion del aula y convivencia": "La gestion del aula es clave para el aprendizaje. Se recomienda fortalecer los acuerdos de convivencia con participacion activa de los alumnos y establecer rutinas claras, consistentes y predecibles.",
  "Avance en los proyectos comunitarios": "Se sugiere reforzar la vinculacion entre los proyectos del aula y las necesidades reales de la comunidad escolar, asegurando un producto autentico y socializado.",
  "Uso de los LTG y materiales SEP": "Se recomienda planificar actividades vinculadas a los proyectos de cada LTG y usar Nuestros Saberes como referente transversal en todos los campos formativos.",
  "Evaluacion formativa y seguimiento": "Se sugiere implementar instrumentos variados (rubricas, listas de cotejo, portafolios) y registrar el avance individual de cada alumno de forma continua.",
};

function DiagnosticoOutput({ form }) {
  const fecha = new Date().toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" });
  const areas = form.areas.length > 0 ? form.areas : Object.keys(AREA_TEXTOS);
  const fortalezas = form.fortalezas
    ? form.fortalezas.split(/[,.\n]+/).filter(f => f.trim()).map(f => f.trim())
    : ["Disposicion positiva del grupo para el trabajo colaborativo.", "Participacion activa en las actividades de los proyectos comunitarios.", "Relacion respetuosa entre alumnos y con el docente."];
  const retos = form.retos
    ? form.retos.split(/[,.\n]+/).filter(r => r.trim()).map(r => r.trim())
    : ["Fortalecer la comprension lectora y la produccion escrita.", "Desarrollar el pensamiento matematico en situaciones contextualizadas.", "Ampliar la participacion de las familias en los procesos de aprendizaje."];
  const acciones = [
    "Elaborar el diagnostico de aprendizajes en las primeras 3 semanas del ciclo, usando observacion, producciones de los alumnos y entrevista informal.",
    "Disenar un Plan de Atencion diferenciado para alumnos con rezago, con estrategias especificas y seguimiento semanal documentado.",
    "Implementar al menos un proyecto comunitario por bimestre, con producto autentico socializado a la comunidad.",
    "Establecer un sistema de evaluacion formativa continua con rubricas y portafolios, compartiendo avances con las familias cada bimestre.",
    "Participar activamente en el CTE para analizar resultados de forma colegiada y ajustar las estrategias de ensenanza.",
  ];
  const indicadores = [
    "Porcentaje de alumnos que alcanzan los PDA esperados al cierre de cada bimestre.",
    "Numero de proyectos comunitarios concluidos con producto autentico y socializacion.",
    "Porcentaje de asistencia mensual del grupo (meta: 90% o superior).",
    "Numero de instrumentos de evaluacion formativa aplicados por bimestre (meta: min. 2 por campo).",
    "Porcentaje de familias que participan en reuniones bimestrales de informacion.",
  ];
  return (
    <div>
      <div style={{ background: "linear-gradient(135deg, "+AZ+", "+AZM+")", borderRadius: "12px", padding: "20px 24px", marginBottom: "4px", color: "white" }}>
        <div style={{ fontWeight: "800", fontSize: "18px" }}>Diagnostico Docente NEM</div>
        <div style={{ fontSize: "13px", opacity: 0.85, marginTop: "4px" }}>Diagnostico Integral del Grupo - Plan de Estudios 2022</div>
        <div style={{ fontSize: "12px", opacity: 0.7, marginTop: "2px" }}>Fecha: {fecha}</div>
      </div>
      <SeccionHeader titulo="1. Datos Generales del Grupo" color={AZ} bg="#eff6ff" />
      <div style={{ background: "white", borderRadius: "10px", padding: "4px 16px", border: "1px solid #e2e8f0" }}>
        <InfoRow label="Nivel educativo" value={form.nivel} />
        <InfoRow label="Grado" value={form.grado} />
        <InfoRow label="Numero de alumnos" value={form.alumnos} />
        <InfoRow label="Contexto escolar" value={form.contexto} />
        <InfoRow label="Ciclo escolar" value="2026 - 2027" />
        <InfoRow label="Docente" value="________________________________" />
        <InfoRow label="Escuela" value="________________________________" />
      </div>
      <SeccionHeader titulo="2. Situacion Actual del Grupo" color={AZ} bg="#eff6ff" />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {areas.map((a, i) => (
          <div key={i} style={{ background: "white", borderRadius: "10px", padding: "14px 16px", border: "1px solid #e2e8f0" }}>
            <div style={{ color: AZM, fontWeight: "700", fontSize: "13px", marginBottom: "6px" }}>{i + 1}. {a}</div>
            <div style={{ color: "#475569", fontSize: "13px", lineHeight: 1.6 }}>{AREA_TEXTOS[a]}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "4px" }}>
        <div>
          <SeccionHeader titulo="3. Fortalezas del Grupo" color={VD} bg="#f0fdf4" />
          <div style={{ background: "white", borderRadius: "10px", padding: "14px 16px", border: "1px solid #dcfce7" }}>
            {fortalezas.map((f, i) => <BulletItem key={i} text={f} color={VD} />)}
          </div>
        </div>
        <div>
          <SeccionHeader titulo="4. Areas de Oportunidad" color="#dc2626" bg="#fef2f2" />
          <div style={{ background: "white", borderRadius: "10px", padding: "14px 16px", border: "1px solid #fecaca" }}>
            {retos.map((r, i) => <BulletItem key={i} text={r} color="#dc2626" />)}
          </div>
        </div>
      </div>
      <SeccionHeader titulo="5. Objetivos del PEMC Sugeridos" color={MO} bg={ML} />
      <div style={{ background: "white", borderRadius: "10px", padding: "14px 16px", border: "1px solid #e9d5ff" }}>
        {["Mejorar los aprendizajes fundamentales mediante proyectos comunitarios y evaluacion formativa continua.","Fortalecer la participacion de las familias como agentes activos del proceso educativo.","Implementar adecuaciones razonables para atender la diversidad del grupo."].map((o, i) => <NumItem key={i} num={i + 1} text={o} color={MO} />)}
      </div>
      <SeccionHeader titulo="6. Acciones Prioritarias" color={AZ} bg="#eff6ff" />
      <div style={{ background: "white", borderRadius: "10px", padding: "14px 16px", border: "1px solid #e2e8f0" }}>
        {acciones.map((a, i) => <NumItem key={i} num={i + 1} text={a} color={AZM} />)}
      </div>
      <SeccionHeader titulo="7. Indicadores de Seguimiento" color={VD} bg="#f0fdf4" />
      <div style={{ background: "white", borderRadius: "10px", border: "1px solid #dcfce7", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", background: VD, padding: "10px 16px" }}>
          <div style={{ color: "white", fontWeight: "700", fontSize: "13px" }}>Indicador</div>
          <div style={{ color: "white", fontWeight: "700", fontSize: "13px" }}>Avance</div>
        </div>
        {indicadores.map((ind, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr auto", padding: "10px 16px", background: i % 2 === 0 ? "white" : "#f0fdf4", borderBottom: "1px solid #dcfce7", alignItems: "center", gap: "12px" }}>
            <div style={{ color: "#374151", fontSize: "13px" }}>{i + 1}. {ind}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", whiteSpace: "nowrap" }}>______ %</div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "16px" }}>
        {["Firma del docente", "Visto bueno del director"].map(f => (
          <div key={f} style={{ background: "white", borderRadius: "10px", padding: "16px", border: "1px solid #e2e8f0", textAlign: "center" }}>
            <div style={{ borderTop: "2px solid #94a3b8", marginBottom: "8px", marginTop: "32px" }} />
            <div style={{ color: "#64748b", fontSize: "12px" }}>{f}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DiagnosticoDocente() {
  const [form, setForm] = useState({ nivel: "", grado: "", alumnos: "", contexto: "", areas: [], fortalezas: "", retos: "" });
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState("");
  const areas = ["Asistencia y comunicacion con familias","Resultados de la valoracion diagnostica","Estado socioemocional del grupo","Participacion e inclusion","Gestion del aula y convivencia","Avance en los proyectos comunitarios","Uso de los LTG y materiales SEP","Evaluacion formativa y seguimiento"];
  const toggleArea = (a) => setForm(f => ({ ...f, areas: f.areas.includes(a) ? f.areas.filter(x => x !== a) : [...f.areas, a] }));
  const generar = () => { if (!form.nivel || !form.grado) { setError("Completa al menos el nivel y grado."); return; } setError(""); setMostrar(true); };
  const inp = { width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1px solid #bfdbfe", fontSize: "14px", color: AZ, outline: "none", boxSizing: "border-box" };
  const lbl = { display: "block", color: AZ, fontWeight: "700", fontSize: "13px", marginBottom: "6px" };
  if (mostrar) return (
    <div>
      <DiagnosticoOutput form={form} />
      <button onClick={() => { setMostrar(false); setForm({ nivel: "", grado: "", alumnos: "", contexto: "", areas: [], fortalezas: "", retos: "" }); }} style={{ width: "100%", background: "#f1f5f9", color: "#64748b", padding: "12px", borderRadius: "12px", border: "none", fontWeight: "600", cursor: "pointer", marginTop: "12px" }}>Nuevo diagnostico</button>
    </div>
  );
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
        <div><label style={lbl}>Nivel educativo *</label><select value={form.nivel} onChange={e => setForm(f => ({ ...f, nivel: e.target.value }))} style={inp}><option value="">Selecciona...</option><option>Preescolar</option><option>Primaria</option><option>Secundaria</option></select></div>
        <div><label style={lbl}>Grado *</label><select value={form.grado} onChange={e => setForm(f => ({ ...f, grado: e.target.value }))} style={inp}><option value="">Selecciona...</option>{["1","2","3","4","5","6"].map(g => <option key={g}>{g} grado</option>)}</select></div>
        <div><label style={lbl}>Numero de alumnos</label><input type="number" value={form.alumnos} onChange={e => setForm(f => ({ ...f, alumnos: e.target.value }))} placeholder="Ej: 28" style={inp} /></div>
        <div><label style={lbl}>Contexto escolar</label><select value={form.contexto} onChange={e => setForm(f => ({ ...f, contexto: e.target.value }))} style={inp}><option value="">Selecciona...</option><option>Urbano</option><option>Semiurbano</option><option>Rural</option><option>Indigena</option><option>Migrante</option></select></div>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <label style={lbl}>Areas a diagnosticar (opcional)</label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "8px" }}>
          {areas.map(a => (
            <label key={a} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", background: form.areas.includes(a) ? "#eff6ff" : "#f8faff", borderRadius: "8px", border: "1px solid "+(form.areas.includes(a)?"#93c5fd":"#e2e8f0"), cursor: "pointer", fontSize: "13px", color: AZ }}>
              <input type="checkbox" checked={form.areas.includes(a)} onChange={() => toggleArea(a)} style={{ accentColor: AZM }} />{a}
            </label>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
        <div><label style={lbl}>Fortalezas identificadas (opcional)</label><textarea value={form.fortalezas} onChange={e => setForm(f => ({ ...f, fortalezas: e.target.value }))} placeholder="Ej: Participacion activa de familias..." rows={3} style={{ ...inp, resize: "vertical" }} /></div>
        <div><label style={lbl}>Retos o problematicas (opcional)</label><textarea value={form.retos} onChange={e => setForm(f => ({ ...f, retos: e.target.value }))} placeholder="Ej: Rezago en lectoescritura..." rows={3} style={{ ...inp, resize: "vertical" }} /></div>
      </div>
      {error && <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "10px", padding: "12px 16px", marginBottom: "16px", color: "#dc2626", fontSize: "14px" }}>{error}</div>}
      <button onClick={generar} style={{ width: "100%", background: "linear-gradient(135deg, "+AZ+", "+AZM+")", color: "white", padding: "14px", borderRadius: "12px", border: "none", fontWeight: "800", fontSize: "16px", cursor: "pointer" }}>Generar Diagnostico NEM</button>
    </div>
  );
}

// --- TEST ESTILOS ---
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
    let V=0,A=0,K=0;
    Object.values(respuestas).forEach(v=>{if(v===0)V++;else if(v===1)A++;else K++;});
    const total=V+A+K;
    setResultado([
      {nombre:"Visual",sigla:"V",pct:Math.round(V/total*100),color:AZM,fondo:"#eff6ff",desc:"Aprendes y ensenyas mejor con imagenes, esquemas, colores y organizadores graficos.",tips:["Usa pizarron y colores al explicar","Incluye mapas mentales en tus planeaciones","Ofrece apoyos visuales para alumnos con BAP","Organiza el espacio con carteles y referencias"]},
      {nombre:"Auditivo",sigla:"A",pct:Math.round(A/total*100),color:MO,fondo:ML,desc:"Aprendes y ensenyas mejor con explicaciones orales, debates y repeticion en voz alta.",tips:["Usa debates y rondas de opinion en el aula","Lee en voz alta el LTG con expresion","Fomenta que los alumnos expliquen con sus palabras","Usa canciones o rimas para fijar contenidos"]},
      {nombre:"Kinestesico",sigla:"K",pct:Math.round(K/total*100),color:VD,fondo:"#f0fdf4",desc:"Aprendes y ensenyas mejor con la practica, el movimiento y la experiencia directa.",tips:["Disenya actividades con movimiento y materiales concretos","Incluye experimentos y proyectos manuales","Permite que los alumnos construyan y experimenten","Usa juegos de roles y simulaciones"]},
    ].sort((a,b)=>b.pct-a.pct));
  };
  if (resultado) {
    const p=resultado[0];
    return (
      <div>
        <div style={{textAlign:"center",marginBottom:"24px",padding:"20px",background:p.fondo,borderRadius:"16px",border:"2px solid "+p.color+"40"}}>
          <div style={{color:p.color,fontWeight:"800",fontSize:"24px"}}>Estilo predominante:</div>
          <div style={{color:p.color,fontWeight:"800",fontSize:"32px",margin:"8px 0"}}>{p.nombre}</div>
          <div style={{color:"#64748b",fontSize:"14px"}}>{p.pct}% de tus respuestas</div>
        </div>
        <div style={{display:"flex",gap:"12px",marginBottom:"20px"}}>
          {resultado.map((e,i)=>(
            <div key={e.sigla} style={{flex:1,background:e.fondo,borderRadius:"14px",padding:"14px",border:"2px solid "+(i===0?e.color:"#e2e8f0"),textAlign:"center"}}>
              <div style={{color:e.color,fontWeight:"800",fontSize:"22px"}}>{e.sigla}</div>
              <div style={{color:e.color,fontWeight:"700",fontSize:"13px",marginBottom:"8px"}}>{e.nombre}</div>
              <div style={{background:"#e2e8f0",borderRadius:"4px",height:"10px",overflow:"hidden",marginBottom:"4px"}}>
                <div style={{background:e.color,width:e.pct+"%",height:"100%",borderRadius:"4px"}}/>
              </div>
              <div style={{color:"#64748b",fontSize:"13px",fontWeight:"700"}}>{e.pct}%</div>
            </div>
          ))}
        </div>
        <div style={{background:"white",borderRadius:"14px",padding:"20px",border:"1px solid "+p.color+"40",marginBottom:"16px"}}>
          <div style={{color:p.color,fontWeight:"800",fontSize:"15px",marginBottom:"10px"}}>{p.desc}</div>
          <div style={{color:p.color,fontWeight:"700",fontSize:"13px",marginBottom:"10px"}}>Estrategias NEM para tu estilo {p.nombre}:</div>
          {p.tips.map((t,i)=><BulletItem key={i} text={t} color={p.color}/>)}
        </div>
        <button onClick={()=>{setResultado(null);setRespuestas({});}} style={{width:"100%",background:"#f1f5f9",color:"#64748b",padding:"12px",borderRadius:"12px",border:"none",fontWeight:"600",cursor:"pointer"}}>Repetir test</button>
      </div>
    );
  }
  return (
    <div>
      <div style={{background:"#f0f9ff",borderRadius:"12px",padding:"12px 16px",marginBottom:"20px",border:"1px solid #bae6fd"}}>
        <span style={{color:"#0369a1",fontSize:"14px"}}>Progreso: <strong>{respondidas} de {PREGUNTAS.length} preguntas</strong></span>
        <div style={{background:"#e0f2fe",borderRadius:"4px",height:"6px",marginTop:"8px",overflow:"hidden"}}>
          <div style={{background:"#0369a1",width:((respondidas/PREGUNTAS.length)*100)+"%",height:"100%",borderRadius:"4px",transition:"width 0.3s"}}/>
        </div>
      </div>
      {PREGUNTAS.map((p,i)=>(
        <div key={i} style={{marginBottom:"14px",padding:"16px",background:respuestas[i]!==undefined?"#f0fdf4":"#f8faff",borderRadius:"14px",border:"1px solid "+(respuestas[i]!==undefined?"#bbf7d0":"#e2e8f0")}}>
          <div style={{color:AZ,fontWeight:"700",fontSize:"14px",marginBottom:"10px"}}>{i+1}. {p.p}</div>
          <div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
            {p.o.map((o,j)=>(
              <label key={j} style={{display:"flex",alignItems:"center",gap:"10px",padding:"9px 14px",background:respuestas[i]===j?"#eff6ff":"white",borderRadius:"10px",border:"1px solid "+(respuestas[i]===j?"#93c5fd":"#e2e8f0"),cursor:"pointer",fontSize:"13px",color:"#374151"}}>
                <input type="radio" name={"p"+i} checked={respuestas[i]===j} onChange={()=>setRespuestas(r=>({...r,[i]:j}))} style={{accentColor:AZM}}/>
                <span style={{color:[AZM,MO,VD][j],fontWeight:"700",fontSize:"11px",minWidth:"72px"}}>{["Visual:","Auditivo:","Kinestesico:"][j]}</span>{o}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button onClick={calcular} disabled={!completo} style={{width:"100%",background:completo?"linear-gradient(135deg, "+MO+", #6d28d9)":"#94a3b8",color:"white",padding:"14px",borderRadius:"12px",border:"none",fontWeight:"800",fontSize:"16px",cursor:completo?"pointer":"not-allowed"}}>
        {completo?"Ver mi estilo de aprendizaje":"Responde "+(PREGUNTAS.length-respondidas)+" preguntas mas"}
      </button>
    </div>
  );
}

// --- EVALUACION FORMATIVA ---
const CRITERIOS_CAMPO = {
  "Lenguajes":["Produce textos con proposito comunicativo claro","Lee con comprension e identifica ideas principales","Participa en intercambios orales con vocabulario adecuado","Revisa y mejora sus producciones escritas","Usa el lenguaje para expresar ideas y argumentos"],
  "Saberes y Pensamiento Cientifico":["Resuelve situaciones problema con estrategias propias","Registra y analiza datos en tablas o graficas","Formula preguntas e hipotesis sobre su entorno","Aplica conceptos matematicos en contextos reales","Comunica sus hallazgos con claridad y evidencia"],
  "Etica, Naturaleza y Sociedades":["Reflexiona critica sobre situaciones de su entorno","Valora la diversidad cultural y natural de su comunidad","Propone acciones de mejora comunitaria concretas","Practica habitos de cuidado personal y ambiental","Participa activamente en la vida civica del grupo"],
  "De lo Humano y lo Comunitario":["Colabora con responsabilidad en el proyecto comunitario","Expresa emociones y sentimientos con asertividad","Asume roles con autonomia y compromiso","Respeta acuerdos y normas de convivencia","Contribuye al bienestar del grupo con acciones concretas"],
};

function EvaluacionOutput({ form }) {
  const fecha = new Date().toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" });
  const criterios = CRITERIOS_CAMPO[form.campo] || CRITERIOS_CAMPO["Lenguajes"];
  const esRubrica = form.instrumento.includes("Rubrica");
  const esLista = form.instrumento.includes("Lista");
  return (
    <div>
      <div style={{ background: "linear-gradient(135deg, "+MO+", #6d28d9)", borderRadius: "12px", padding: "20px 24px", marginBottom: "4px", color: "white" }}>
        <div style={{ fontWeight: "800", fontSize: "18px" }}>{form.instrumento}</div>
        <div style={{ fontSize: "13px", opacity: 0.85, marginTop: "4px" }}>Evaluacion Formativa NEM - Plan de Estudios 2022</div>
        <div style={{ fontSize: "12px", opacity: 0.7, marginTop: "2px" }}>Fecha: {fecha}</div>
      </div>
      <SeccionHeader titulo="Encabezado" color={MO} bg={ML} />
      <div style={{ background: "white", borderRadius: "10px", padding: "4px 16px", border: "1px solid #e9d5ff" }}>
        <InfoRow label="Nivel" value={form.nivel} />
        <InfoRow label="Grado" value={form.grado} />
        <InfoRow label="Campo formativo" value={form.campo} />
        <InfoRow label="PDA / Contenido" value={form.pda || "General del campo formativo"} />
        <InfoRow label="Contexto" value={form.contexto || "Aula regular"} />
        <InfoRow label="Docente" value="________________________________" />
        <InfoRow label="Alumno/a" value="________________________________" />
      </div>
      <SeccionHeader titulo="Proposito de la Evaluacion" color={MO} bg={ML} />
      <div style={{ background: "white", borderRadius: "10px", padding: "14px 16px", border: "1px solid #e9d5ff", color: "#374151", fontSize: "13px", lineHeight: 1.6 }}>
        Valorar el logro integral del alumno en <strong>{form.campo}</strong>, proporcionando informacion para retroalimentar el aprendizaje y ajustar la ensenanza de manera oportuna, conforme a los principios de la evaluacion formativa NEM.
      </div>
      <SeccionHeader titulo={esRubrica ? "Rubrica Formativa (3 Niveles)" : esLista ? "Lista de Cotejo" : "Instrumento de Evaluacion"} color={MO} bg={ML} />
      {esRubrica && (
        <div style={{ background: "white", borderRadius: "10px", border: "1px solid #e9d5ff", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", background: MO }}>
            {["Criterio de evaluacion", "Logrado", "En proceso", "Requiere apoyo"].map(h => (
              <div key={h} style={{ color: "white", fontWeight: "700", fontSize: "12px", padding: "10px 12px", borderRight: "1px solid #7e22ce" }}>{h}</div>
            ))}
          </div>
          {criterios.map((c, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", background: i % 2 === 0 ? "white" : ML, borderBottom: "1px solid #e9d5ff" }}>
              <div style={{ color: "#374151", fontSize: "12px", padding: "10px 12px", fontWeight: "600", borderRight: "1px solid #e9d5ff" }}>{c}</div>
              <div style={{ color: "#166534", fontSize: "11px", padding: "10px 12px", borderRight: "1px solid #e9d5ff" }}>De forma autonoma y con calidad</div>
              <div style={{ color: "#92400e", fontSize: "11px", padding: "10px 12px", borderRight: "1px solid #e9d5ff" }}>Con apoyo del docente</div>
              <div style={{ color: "#991b1b", fontSize: "11px", padding: "10px 12px" }}>Requiere guia constante</div>
            </div>
          ))}
        </div>
      )}
      {esLista && (
        <div style={{ background: "white", borderRadius: "10px", border: "1px solid #e9d5ff", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "3fr 80px 80px 100px", background: MO }}>
            {["Indicador de logro", "Si", "No", "En proceso"].map(h => (
              <div key={h} style={{ color: "white", fontWeight: "700", fontSize: "12px", padding: "10px 12px", borderRight: "1px solid #7e22ce", textAlign: "center" }}>{h}</div>
            ))}
          </div>
          {criterios.map((c, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "3fr 80px 80px 100px", background: i % 2 === 0 ? "white" : ML, borderBottom: "1px solid #e9d5ff" }}>
              <div style={{ color: "#374151", fontSize: "12px", padding: "10px 12px" }}>{c}</div>
              {[0,1,2].map(j => <div key={j} style={{ padding: "10px", textAlign: "center", borderLeft: "1px solid #e9d5ff", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "18px", height: "18px", border: "2px solid #c084fc", borderRadius: "4px" }} /></div>)}
            </div>
          ))}
        </div>
      )}
      {!esRubrica && !esLista && (
        <div style={{ background: "white", borderRadius: "10px", border: "1px solid #e9d5ff", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr 2fr", background: MO }}>
            {["Indicador", "Nivel (1-4)", "Observacion"].map(h => (
              <div key={h} style={{ color: "white", fontWeight: "700", fontSize: "12px", padding: "10px 12px", borderRight: "1px solid #7e22ce" }}>{h}</div>
            ))}
          </div>
          {criterios.map((c, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "3fr 1fr 2fr", background: i % 2 === 0 ? "white" : ML, borderBottom: "1px solid #e9d5ff" }}>
              <div style={{ color: "#374151", fontSize: "12px", padding: "10px 12px" }}>{c}</div>
              <div style={{ padding: "10px 12px", borderLeft: "1px solid #e9d5ff", textAlign: "center", color: "#94a3b8" }}>___</div>
              <div style={{ padding: "10px 12px", borderLeft: "1px solid #e9d5ff", color: "#94a3b8", fontSize: "12px" }}>_______________________</div>
            </div>
          ))}
        </div>
      )}
      <SeccionHeader titulo="Observaciones del Docente" color={MO} bg={ML} />
      <div style={{ background: "white", borderRadius: "10px", padding: "14px 16px", border: "1px solid #e9d5ff" }}>
        {["Fortalezas observadas:", "Ajustes para la siguiente sesion:", "Alumnos que requieren apoyo prioritario:"].map((l, i) => (
          <div key={i} style={{ marginBottom: "14px" }}>
            <div style={{ color: MO, fontWeight: "700", fontSize: "12px", marginBottom: "4px" }}>{l}</div>
            <div style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: "8px" }}>&nbsp;</div>
          </div>
        ))}
      </div>
      <SeccionHeader titulo="Preguntas de Metacognicion para el Alumno" color={VD} bg="#f0fdf4" />
      <div style={{ background: "white", borderRadius: "10px", padding: "14px 16px", border: "1px solid #dcfce7" }}>
        {["Que aprendi en esta actividad o proyecto?", "Que parte me costo mas trabajo? Como lo resolvi?", "Que cambiaria de mi trabajo si lo hiciera de nuevo?"].map((q, i) => (
          <div key={i} style={{ marginBottom: "14px" }}>
            <div style={{ color: VD, fontWeight: "700", fontSize: "12px", marginBottom: "4px" }}>{i + 1}. {q}</div>
            <div style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: "8px" }}>&nbsp;</div>
          </div>
        ))}
      </div>
      <div style={{ background: "#fef9c3", borderRadius: "10px", padding: "14px 16px", marginTop: "12px", border: "1px solid #fde047" }}>
        <div style={{ color: "#713f12", fontWeight: "700", fontSize: "12px", marginBottom: "6px" }}>NOTA PARA EL DOCENTE</div>
        <div style={{ color: "#92400e", fontSize: "12px", lineHeight: 1.6 }}>Este instrumento es formativo, no sumativo. Usalo para retroalimentar al alumno de forma especifica y oportuna, identificar quienes requieren apoyo y planificar la siguiente sesion con base en los resultados observados.</div>
      </div>
    </div>
  );
}

function EvaluacionFormativa() {
  const [form, setForm] = useState({ nivel: "", grado: "", campo: "", pda: "", instrumento: "", contexto: "" });
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState("");
  const campos = ["Lenguajes","Saberes y Pensamiento Cientifico","Etica, Naturaleza y Sociedades","De lo Humano y lo Comunitario"];
  const instrumentos = ["Rubrica formativa (3 niveles)","Lista de cotejo","Diario de aprendizaje / Portafolio","Escala de valoracion","Autoevaluacion y coevaluacion","Instrumento mixto (rubrica + autoevaluacion)"];
  const generar = () => { if (!form.nivel || !form.grado || !form.campo || !form.instrumento) { setError("Completa los campos obligatorios."); return; } setError(""); setMostrar(true); };
  const inp = { width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1px solid #d8b4fe", fontSize: "14px", color: MO, outline: "none", boxSizing: "border-box" };
  const lbl = { display: "block", color: MO, fontWeight: "700", fontSize: "13px", marginBottom: "6px" };
  if (mostrar) return (
    <div>
      <EvaluacionOutput form={form} />
      <button onClick={() => { setMostrar(false); setForm({ nivel: "", grado: "", campo: "", pda: "", instrumento: "", contexto: "" }); }} style={{ width: "100%", background: "#f1f5f9", color: "#64748b", padding: "12px", borderRadius: "12px", border: "none", fontWeight: "600", cursor: "pointer", marginTop: "12px" }}>Generar otro instrumento</button>
    </div>
  );
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
        <div><label style={lbl}>Nivel *</label><select value={form.nivel} onChange={e => setForm(f => ({ ...f, nivel: e.target.value }))} style={inp}><option value="">Selecciona...</option><option>Preescolar</option><option>Primaria</option><option>Secundaria</option></select></div>
        <div><label style={lbl}>Grado *</label><select value={form.grado} onChange={e => setForm(f => ({ ...f, grado: e.target.value }))} style={inp}><option value="">Selecciona...</option>{["1","2","3","4","5","6"].map(g => <option key={g}>{g} grado</option>)}</select></div>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <label style={lbl}>Campo formativo *</label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "8px" }}>
          {campos.map(c => (
            <label key={c} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px", background: form.campo === c ? ML : "white", borderRadius: "10px", border: "1px solid "+(form.campo === c ? "#c084fc" : "#e2e8f0"), cursor: "pointer", fontSize: "13px", color: MO }}>
              <input type="radio" name="campo" checked={form.campo === c} onChange={() => setForm(f => ({ ...f, campo: c }))} style={{ accentColor: MO }} />{c}
            </label>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <label style={lbl}>PDA o contenido especifico (opcional)</label>
        <textarea value={form.pda} onChange={e => setForm(f => ({ ...f, pda: e.target.value }))} placeholder="Ej: Escritura del nombre propio, Sumas hasta 20..." rows={2} style={{ ...inp, resize: "vertical" }} />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <label style={lbl}>Tipo de instrumento *</label>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {instrumentos.map(inst => (
            <label key={inst} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 14px", background: form.instrumento === inst ? ML : "white", borderRadius: "10px", border: "1px solid "+(form.instrumento === inst ? "#c084fc" : "#e2e8f0"), cursor: "pointer", fontSize: "13px", color: MO }}>
              <input type="radio" name="inst" checked={form.instrumento === inst} onChange={() => setForm(f => ({ ...f, instrumento: inst }))} style={{ accentColor: MO }} />{inst}
            </label>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label style={lbl}>Contexto del grupo (opcional)</label>
        <textarea value={form.contexto} onChange={e => setForm(f => ({ ...f, contexto: e.target.value }))} placeholder="Ej: Grupo de 28 alumnos, contexto urbano, algunos con BAP..." rows={2} style={{ ...inp, resize: "vertical" }} />
      </div>
      {error && <div style={{ background: "#fdf4ff", border: "1px solid #d8b4fe", borderRadius: "10px", padding: "12px 16px", marginBottom: "16px", color: MO, fontSize: "14px" }}>{error}</div>}
      <button onClick={generar} style={{ width: "100%", background: "linear-gradient(135deg, "+MO+", #6d28d9)", color: "white", padding: "14px", borderRadius: "12px", border: "none", fontWeight: "800", fontSize: "16px", cursor: "pointer" }}>Generar Instrumento de Evaluacion</button>
    </div>
  );
}

// --- PAGINA PRINCIPAL ---
export default function HerramientasDocentes() {
  const [activa, setActiva] = useState(null);
  const herramientas = [
    { id: "diagnostica", titulo: "Evaluacion Diagnostica NEM", desc: "Instrumentos y guias para aplicar evaluaciones diagnosticas en el aula conforme a la NEM.", color: VD, fondo: "#f0fdf4", borde: "#86efac", comp: <EvaluacionDiagnosticaInfo /> },
    { id: "diagnostico", titulo: "Diagnostico Docente NEM", desc: "Genera tu Diagnostico Integral del Grupo basado en el enfoque SEP-Mejoredu. Listo para el PEMC.", color: AZM, fondo: "#eff6ff", borde: "#93c5fd", comp: <DiagnosticoDocente /> },
    { id: "estilos", titulo: "Test: Estilos de Aprendizaje", desc: "Descubre tu estilo docente predominante (Visual, Auditivo o Kinestesico) y recibe estrategias NEM.", color: MO, fondo: ML, borde: "#c084fc", comp: <TestEstilosAprendizaje /> },
    { id: "evaluacion", titulo: "Evaluacion Formativa NEM", desc: "Genera rubricas, listas de cotejo y mas instrumentos de evaluacion formativa listos para usar.", color: VD, fondo: "#f0fdf4", borde: "#86efac", comp: <EvaluacionFormativa /> },
  ];
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg, "+AZ+", "+AZM+")", padding: "60px 32px", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", margin: "0 0 16px 0" }}>Herramientas para Docentes</h1>
        <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>Herramientas gratuitas para maestros mexicanos. Sin registro, sin instalacion, al instante.</p>
      </div>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 32px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "32px" }}>
          {herramientas.map(h => (
            <div key={h.id} style={{ background: "white", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid "+h.borde, overflow: "hidden" }}>
              <div style={{ background: h.fondo, padding: "20px 24px", borderBottom: activa === h.id ? "1px solid "+h.borde : "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ color: h.color, fontWeight: "800", fontSize: "18px", marginBottom: "4px" }}>{h.titulo}</div>
                  <div style={{ color: "#64748b", fontSize: "13px", lineHeight: 1.5 }}>{h.desc}</div>
                </div>
                <button onClick={() => setActiva(activa === h.id ? null : h.id)} style={{ background: activa === h.id ? h.color : "white", color: activa === h.id ? "white" : h.color, border: "2px solid "+h.color, padding: "10px 20px", borderRadius: "10px", cursor: "pointer", fontWeight: "700", fontSize: "14px", whiteSpace: "nowrap", marginLeft: "16px", flexShrink: 0 }}>
                  {activa === h.id ? "Cerrar" : "Abrir"}
                </button>
              </div>
              {activa === h.id && <div style={{ padding: "24px" }}>{h.comp}</div>}
            </div>
          ))}
        </div>
        <div style={{ background: "linear-gradient(135deg, "+AZ+", "+AZM+")", borderRadius: "20px", padding: "32px", textAlign: "center", color: "white" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", margin: "0 0 12px 0" }}>Descarga planeaciones NEM</h2>
          <p style={{ opacity: 0.9, marginBottom: "20px" }}>Planeaciones didacticas con LTG, calendario SEP y evaluacion formativa incluida</p>
          <a href="/planeaciones-nem" style={{ background: "white", color: AZM, padding: "14px 32px", borderRadius: "12px", textDecoration: "none", fontWeight: "800", fontSize: "16px", display: "inline-block" }}>Ver planeaciones NEM</a>
        </div>
      </div>
    </div>
  );
}
