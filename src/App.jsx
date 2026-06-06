import { Link, Routes, Route } from "react-router-dom";
import HorasAdicionales from "./pages/HorasAdicionales";
import SimuladorUsicamm2026 from "./pages/SimuladorUsicamm2026";
import AdmisionDocente2026 from "./pages/AdmisionDocente2026";
import PromocionHorizontal from "./pages/PromocionHorizontal";
import PromocionVertical from "./pages/PromocionVertical";
import ReactivosPdf from "./pages/ReactivosPdf";
import GuiaUsicamm2026 from "./pages/GuiaUsicamm2026";
import PlaneacionesNem from "./pages/PlaneacionesNem";
import NuevaEscuelaMexicana from "./pages/NuevaEscuelaMexicana";
import EvaluacionDiagnostica from "./pages/EvaluacionDiagnostica";

const cards = [
  { titulo: "Simulador USICAMM", desc: "Practica con reactivos tipo examen real.", link: "/simulador-usicamm-2026", icono: "📝" },
  { titulo: "Admision Docente", desc: "Guias y estrategias para ingreso docente.", link: "/admision-docente-2026", icono: "🎓" },
  { titulo: "Promocion Horizontal", desc: "Recursos para promocion horizontal USICAMM.", link: "/promocion-horizontal-usicamm", icono: "📈" },
  { titulo: "Horas Adicionales", desc: "Estrategias y recursos para horas adicionales.", link: "/horas-adicionales", icono: "⏰" },
  { titulo: "Promocion Vertical", desc: "Recursos y simuladores para promocion vertical.", link: "/promocion-vertical-usicamm", icono: "🚀" },
  { titulo: "Reactivos PDF", desc: "Descarga reactivos y materiales PDF gratuitos.", link: "/reactivos-usicamm-pdf", icono: "📄" },
  { titulo: "Guia USICAMM 2026", desc: "Guia completa para el proceso USICAMM 2026.", link: "/guia-usicamm-2026", icono: "📚" },
  { titulo: "Planeaciones NEM", desc: "Planeaciones para la Nueva Escuela Mexicana.", link: "/planeaciones-nem", icono: "🗂️" },
  { titulo: "Nueva Escuela Mexicana", desc: "Recursos y materiales NEM para docentes.", link: "/nueva-escuela-mexicana", icono: "🏫" },
  { titulo: "Evaluacion Diagnostica", desc: "Instrumentos y guias de evaluacion diagnostica.", link: "/evaluacion-diagnostica", icono: "✅" },
];

function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f0fdf4", minHeight: "100vh" }}>
      <nav style={{ background: "linear-gradient(135deg, #166534, #15803d)", padding: "0 40px", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px", boxShadow: "0 2px 12px rgba(0,0,0,0.15)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ fontSize: "20px", fontWeight: "800" }}>Promocion Docente MX</div>
        <div style={{ display: "flex", gap: "8px" }}>
          {[{ label: "Inicio", to: "/" }, { label: "Simulador", to: "/simulador-usicamm-2026" }, { label: "Horas", to: "/horas-adicionales" }, { label: "Admision", to: "/admision-docente-2026" }].map((item) => (
            <Link key={item.to} to={item.to} style={{ color: "white", textDecoration: "none", padding: "8px 16px", borderRadius: "8px", fontSize: "14px", fontWeight: "500" }}>{item.label}</Link>
          ))}
        </div>
      </nav>
      <section style={{ textAlign: "center", padding: "80px 20px", background: "linear-gradient(135deg, #166534 0%, #15803d 50%, #16a34a 100%)", color: "white", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", padding: "6px 16px", borderRadius: "20px", fontSize: "13px", fontWeight: "600", marginBottom: "20px", border: "1px solid rgba(255,255,255,0.3)" }}>Plataforma gratuita para docentes</div>
          <h1 style={{ fontSize: "56px", fontWeight: "800", margin: "0 0 20px 0", lineHeight: 1.1 }}>Plataforma USICAMM 2026</h1>
          <p style={{ fontSize: "20px", opacity: 0.9, marginBottom: "36px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto 36px" }}>Simuladores, reactivos, guias y recursos gratuitos para docentes.</p>
          <Link to="/simulador-usicamm-2026" style={{ backgroundColor: "white", color: "#15803d", padding: "16px 40px", borderRadius: "12px", textDecoration: "none", fontWeight: "800", fontSize: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.2)", display: "inline-block" }}>Comenzar Gratis</Link>
        </div>
      </section>
      <section style={{ background: "#dcfce7", padding: "40px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "24px", textAlign: "center" }}>
          {[{ num: "10+", label: "Recursos gratuitos" }, { num: "100%", label: "Gratis para docentes" }, { num: "2026", label: "Actualizado" }].map((s) => (
            <div key={s.label}><div style={{ fontSize: "40px", fontWeight: "800", color: "#15803d" }}>{s.num}</div><div style={{ color: "#166534", fontSize: "15px", fontWeight: "500" }}>{s.label}</div></div>
          ))}
        </div>
      </section>
      <section style={{ padding: "60px 20px", maxWidth: "1400px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: "800", color: "#166534", marginBottom: "40px" }}>Recursos disponibles</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
          {cards.map((card) => (
            <div key={card.link} style={{ backgroundColor: "white", padding: "28px", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>{card.icono}</div>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#166534", margin: "0 0 8px 0" }}>{card.titulo}</h3>
              <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.6, margin: "0 0 16px 0" }}>{card.desc}</p>
              <Link to={card.link} style={{ color: "#15803d", textDecoration: "none", fontWeight: "600", fontSize: "14px" }}>Ver mas →</Link>
            </div>
          ))}
        </div>
      </section>
      <section style={{ background: "linear-gradient(135deg, #166534, #15803d)", padding: "60px 20px", textAlign: "center", color: "white" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "800", margin: "0 0 12px 0" }}>Listo para prepararte?</h2>
        <p style={{ fontSize: "18px", opacity: 0.9, marginBottom: "28px" }}>Accede gratis a todos los recursos para tu proceso USICAMM 2026</p>
        <Link to="/simulador-usicamm-2026" style={{ background: "white", color: "#15803d", padding: "16px 40px", borderRadius: "12px", textDecoration: "none", fontWeight: "800", fontSize: "16px", display: "inline-block" }}>Empezar ahora</Link>
      </section>
      <footer style={{ backgroundColor: "#052e16", color: "#86efac", padding: "32px", textAlign: "center", fontSize: "14px" }}>
        <div style={{ fontSize: "18px", fontWeight: "700", color: "white", marginBottom: "8px" }}>Promocion Docente MX</div>
        <p style={{ margin: 0 }}>2026 Promocion Docente MX · Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/simulador-usicamm-2026" element={<SimuladorUsicamm2026 />} />
      <Route path="/admision-docente-2026" element={<AdmisionDocente2026 />} />
      <Route path="/horas-adicionales" element={<HorasAdicionales />} />
      <Route path="/promocion-horizontal-usicamm" element={<PromocionHorizontal />} />
      <Route path="/promocion-vertical-usicamm" element={<PromocionVertical />} />
      <Route path="/reactivos-usicamm-pdf" element={<ReactivosPdf />} />
      <Route path="/guia-usicamm-2026" element={<GuiaUsicamm2026 />} />
      <Route path="/planeaciones-nem" element={<PlaneacionesNem />} />
      <Route path="/nueva-escuela-mexicana" element={<NuevaEscuelaMexicana />} />
      <Route path="/evaluacion-diagnostica" element={<EvaluacionDiagnostica />} />
    </Routes>
  );
}