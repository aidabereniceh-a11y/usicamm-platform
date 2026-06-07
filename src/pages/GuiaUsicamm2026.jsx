export default function GuiaUsicamm2026() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f0fdf4", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg, #166534, #15803d)", padding: "60px 32px", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", margin: "0 0 16px 0" }}>Guia USICAMM 2026</h1>
        <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>Todo lo que necesitas saber para prepararte y aprobar el proceso USICAMM 2026</p>
      </div>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 32px" }}>

        <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <h2 style={{ color: "#166534", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>Que es USICAMM?</h2>
          <p style={{ color: "#475569", lineHeight: 1.8, fontSize: "16px" }}>La Unidad del Sistema para la Carrera de las Maestras y los Maestros (USICAMM) es el organismo encargado de los procesos de admision, promocion horizontal, promocion vertical y reconocimiento para docentes de educacion basica en Mexico. A traves de estos procesos, los maestros pueden ingresar al servicio educativo, mejorar su nivel salarial o acceder a funciones directivas.</p>
        </div>

        <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <h2 style={{ color: "#166534", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>Procesos USICAMM 2026</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {[
              { titulo: "Admision Docente", desc: "Para nuevos maestros que desean ingresar al servicio educativo publico.", color: "#166534" },
              { titulo: "Promocion Horizontal", desc: "Para docentes frente a grupo que buscan mejorar su nivel salarial sin cambiar funcion.", color: "#15803d" },
              { titulo: "Promocion Vertical", desc: "Para docentes que aspiran a funciones de direccion, supervision o asesoria tecnica.", color: "#16a34a" },
              { titulo: "Horas Adicionales", desc: "Para docentes que desean obtener horas adicionales en educacion secundaria.", color: "#166534" },
            ].map((p) => (
              <div key={p.titulo} style={{ background: "#f0fdf4", borderRadius: "12px", padding: "20px", borderLeft: "4px solid " + p.color }}>
                <h3 style={{ color: p.color, fontSize: "16px", fontWeight: "700", marginBottom: "8px" }}>{p.titulo}</h3>
                <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <h2 style={{ color: "#166534", fontSize: "24px", fontWeight: "700", marginBottom: "16px" }}>Como prepararse para USICAMM 2026</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { num: "1", tip: "Conoce el perfil de tu proceso", desc: "Descarga el perfil, parametros e indicadores correspondiente a tu proceso en la pagina oficial de USICAMM." },
              { num: "2", tip: "Practica con simuladores", desc: "Utiliza simuladores de reactivos tipo examen real para familiarizarte con el formato y contenido de la evaluacion." },
              { num: "3", tip: "Estudia los documentos normativos", desc: "Revisa la Ley General del Sistema para la Carrera de las Maestras y los Maestros (LGSCMM) y sus lineamientos." },
              { num: "4", tip: "Organiza tu expediente", desc: "Prepara con anticipacion todos los documentos que necesitaras para el registro y la valoracion curricular." },
              { num: "5", tip: "Mantente informado", desc: "Consulta periodicamente la pagina oficial de USICAMM y la SEP para conocer las convocatorias y fechas." },
            ].map((t) => (
              <div key={t.num} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "36px", height: "36px", background: "linear-gradient(135deg, #166534, #15803d)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "800", fontSize: "16px", flexShrink: 0 }}>{t.num}</div>
                <div>
                  <h3 style={{ color: "#166534", fontSize: "16px", fontWeight: "700", margin: "0 0 4px 0" }}>{t.tip}</h3>
                  <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "linear-gradient(135deg, #166534, #15803d)", borderRadius: "20px", padding: "32px", textAlign: "center", color: "white" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", margin: "0 0 12px 0" }}>Practica con nuestro simulador</h2>
          <p style={{ opacity: 0.9, marginBottom: "20px" }}>Prepara tu examen USICAMM 2026 con reactivos tipo examen real</p>
          <a href="/simulador-usicamm-2026" style={{ background: "white", color: "#15803d", padding: "14px 32px", borderRadius: "12px", textDecoration: "none", fontWeight: "800", fontSize: "16px", display: "inline-block" }}>Ir al simulador</a>
        </div>

      </div>
    </div>
  );
}