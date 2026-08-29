import { Link } from "react-router-dom";

export default function PlaneacionesNem() {

  const meses = [
    { nombre: "Agosto-Septiembre", subtitulo: "Bienvenida e Inicio del Primer Proyecto", icono: "📅", gratis: true,  clavePdf: "Agosto_Septiembre", claveDoc: "Agosto_Septiembre" },
    { nombre: "Octubre",           subtitulo: "Profundizacion del Proyecto Comunitario",  icono: "📅", gratis: false, clavePdf: "Octubre",           claveDoc: "Octubre"           },
    { nombre: "Noviembre",         subtitulo: "Evaluacion del Primer Bimestre",            icono: "📅", gratis: false, clavePdf: "Noviembre",         claveDoc: "Noviembre"         },
    { nombre: "Diciembre",         subtitulo: "Cierre del Primer Semestre",                icono: "📅", gratis: false, clavePdf: "Diciembre",         claveDoc: "Diciembre"         },
    { nombre: "Enero",             subtitulo: "Reinicio del Segundo Semestre",             icono: "📅", gratis: false, clavePdf: "Enero",             claveDoc: "Enero"             },
    { nombre: "Febrero",           subtitulo: "Avance del Segundo Proyecto",               icono: "📅", gratis: false, clavePdf: "Febrero",           claveDoc: "Febrero"           },
    { nombre: "Marzo",             subtitulo: "Avance del Tercer Bimestre",                icono: "📅", gratis: false, clavePdf: "Marzo",             claveDoc: "Marzo"             },
    { nombre: "Abril",             subtitulo: "Cierre del Segundo Proyecto",               icono: "📅", gratis: false, clavePdf: "Abril",             claveDoc: "Abril"             },
    { nombre: "Mayo",              subtitulo: "Cierre del Ciclo Escolar",                  icono: "📅", gratis: false, clavePdf: "Mayo",              claveDoc: "Mayo"              },
    { nombre: "Junio",             subtitulo: "Evaluacion Final y Clausura",               icono: "📅", gratis: false, clavePdf: "Junio",             claveDoc: "Junio"             },
    { nombre: "Julio",             subtitulo: "Fin del Ciclo Escolar 2026-2027",           icono: "📅", gratis: false, clavePdf: "Julio",             claveDoc: "Julio"             },
  ];

  const niveles = [
    { nivel: "Preescolar", icono: "🌱", color: "#166534", fondo: "#f0fdf4", borde: "#bbf7d0", grados: ["1","2","3"], clave: "Preescolar" },
    { nivel: "Primaria",   icono: "📚", color: "#1e40af", fondo: "#eff6ff", borde: "#bfdbfe", grados: ["1","2","3","4","5","6"], clave: "Primaria" },
    { nivel: "Secundaria", icono: "🎓", color: "#7e22ce", fondo: "#faf5ff", borde: "#e9d5ff", grados: ["1","2","3"], clave: "Secundaria" },
  ];

  const getPdf  = (clave, nClave, num) => `/pdfs/planeaciones/Planeacion_${clave}_${nClave}_${num}.pdf`;
  const getDocx = (clave, nClave, num) => `/docx/planeaciones/Planeacion_${clave}_${nClave}_${num}.docx`;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f0fdf4", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg, #166534, #15803d)", padding: "60px 32px", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", margin: "0 0 16px 0" }}>Planeaciones NEM</h1>
        <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>
          Planeaciones didacticas basadas en la Nueva Escuela Mexicana. Disponibles en PDF y Word editables.
        </p>
      </div>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "60px 32px" }}>
        <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <h2 style={{ color: "#166534", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>Que son las Planeaciones NEM?</h2>
          <p style={{ color: "#475569", lineHeight: 1.8, fontSize: "16px" }}>
            Instrumentos de planificacion basados en el Plan de Estudios 2022. Proyectos comunitarios, campos formativos y ejes articuladores con el calendario oficial SEP 2026-2027.
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "20px", flexWrap: "wrap" }}>
            {[["📄","#fef9c3","#fde047","#713f12","Formato PDF"],["📝","#dbeafe","#93c5fd","#1e40af","Word editable"],["📅","#dcfce7","#86efac","#166534","Calendario SEP 2026-2027"]].map(([ico,bg,bd,co,txt])=>(
              <div key={txt} style={{ background: bg, border: `1px solid ${bd}`, borderRadius: "10px", padding: "8px 16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span>{ico}</span><span style={{ color: co, fontWeight: "700", fontSize: "14px" }}>{txt}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "linear-gradient(135deg, #1e40af, #1d4ed8)", borderRadius: "16px", padding: "20px 24px", marginBottom: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <div style={{ color: "white", fontWeight: "800", fontSize: "16px", marginBottom: "4px" }}>Agosto-Septiembre gratis · Octubre en adelante desde $99 MXN</div>
            <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>12 archivos por mes · PDF + Word editable · Todos los niveles · Calendario SEP oficial</div>
          </div>
          <Link to="/comprar-planeaciones" style={{ background: "white", color: "#1e40af", padding: "10px 24px", borderRadius: "10px", textDecoration: "none", fontWeight: "800", fontSize: "14px" }}>Ver precios</Link>
        </div>

        <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <h2 style={{ color: "#166534", fontSize: "24px", fontWeight: "700", marginBottom: "8px" }}>Descarga tus Planeaciones — Ciclo 2026-2027</h2>
          <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "28px" }}>Agosto-Septiembre gratis · Octubre en adelante requiere compra · PDF y Word disponibles</p>

          {meses.map((mes) => (
            <div key={mes.nombre} style={{ marginBottom: "32px" }}>
              <div style={{ background: mes.gratis ? "linear-gradient(135deg, #166534, #15803d)" : "linear-gradient(135deg, #1e40af, #1d4ed8)", borderRadius: "12px", padding: "14px 20px", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "20px" }}>{mes.icono}</span>
                  <span style={{ color: "white", fontWeight: "800", fontSize: "18px" }}>{mes.nombre}</span>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>— {mes.subtitulo}</span>
                </div>
                <span style={{ background: "rgba(255,255,255,0.2)", color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>
                  {mes.gratis ? "GRATIS" : "desde $99 MXN"}
                </span>
              </div>

              {!mes.gratis ? (
                <div style={{ border: "2px dashed #bfdbfe", borderRadius: "16px", padding: "32px", textAlign: "center", background: "#eff6ff" }}>
                  <div style={{ fontSize: "40px", marginBottom: "12px" }}>🔒</div>
                  <h3 style={{ color: "#1e40af", fontSize: "18px", fontWeight: "800", margin: "0 0 8px" }}>Planeaciones de {mes.nombre} — 12 PDF + 12 Word</h3>
                  <p style={{ color: "#64748b", fontSize: "14px", margin: "0 0 20px" }}>Preescolar 1-3 · Primaria 1-6 · Secundaria 1-3 · PDF y Word editables · Calendario SEP oficial</p>
                  <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                    <Link to="/comprar-planeaciones" style={{ background: "#1e40af", color: "white", padding: "12px 28px", borderRadius: "10px", textDecoration: "none", fontWeight: "800", fontSize: "15px" }}>Comprar este mes — $99 MXN</Link>
                    <Link to="/comprar-planeaciones" style={{ background: "white", color: "#1e40af", padding: "12px 28px", borderRadius: "10px", textDecoration: "none", fontWeight: "800", fontSize: "15px", border: "2px solid #1e40af" }}>Ciclo completo — $599 MXN</Link>
                  </div>
                </div>
              ) : (
                niveles.map((n) => (
                  <div key={n.nivel} style={{ border: `1px solid ${n.borde}`, borderRadius: "16px", marginBottom: "12px", overflow: "hidden" }}>
                    <div style={{ background: n.fondo, padding: "12px 20px", display: "flex", alignItems: "center", gap: "10px", borderBottom: `1px solid ${n.borde}` }}>
                      <span style={{ fontSize: "20px" }}>{n.icono}</span>
                      <span style={{ color: n.color, fontWeight: "800", fontSize: "16px" }}>{n.nivel}</span>
                    </div>
                    <div style={{ padding: "10px 14px", display: "flex", flexDirection: "column", gap: "6px" }}>
                      {n.grados.map((grado, idx) => (
                        <div key={grado} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 12px", background: "#fafafa", borderRadius: "10px", border: "1px solid #f1f5f9", flexWrap: "wrap", gap: "8px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ fontSize: "15px" }}>📄</span>
                            <span style={{ color: "#1e293b", fontWeight: "600", fontSize: "14px" }}>{grado}° {n.nivel}</span>
                            <span style={{ color: "#94a3b8", fontSize: "12px" }}>— {mes.nombre}</span>
                          </div>
                          <div style={{ display: "flex", gap: "8px" }}>
                            <a href={getPdf(mes.clavePdf, n.clave, idx + 1)} download style={{ background: n.color, color: "white", padding: "7px 14px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "12px", whiteSpace: "nowrap" }}>📄 PDF</a>
                            <a href={getDocx(mes.claveDoc, n.clave, idx + 1)} download style={{ background: "white", color: n.color, padding: "7px 14px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "12px", whiteSpace: "nowrap", border: `2px solid ${n.color}` }}>📝 Word</a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          ))}
        </div>

        <div style={{ background: "linear-gradient(135deg, #166534, #15803d)", borderRadius: "20px", padding: "32px", textAlign: "center", color: "white" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", margin: "0 0 12px 0" }}>Practica para tu examen USICAMM 2026</h2>
          <p style={{ opacity: 0.9, marginBottom: "20px" }}>Practica gratis con reactivos tipo examen real</p>
          <a href="/simulador-usicamm-2026" style={{ background: "white", color: "#15803d", padding: "14px 32px", borderRadius: "12px", textDecoration: "none", fontWeight: "800", fontSize: "16px", display: "inline-block" }}>Ir al Simulador USICAMM 2026</a>
        </div>
      </div>
    </div>
  );
}