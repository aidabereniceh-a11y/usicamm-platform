import { Routes, Route, Link } from "react-router-dom";
import HorasAdicionales from "./pages/HorasAdicionales";
import SimuladorUsicamm2026 from "./pages/SimuladorUsicamm2026";
import AdmisionDocente2026 from "./pages/AdmisionDocente2026";

function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial",
        backgroundColor: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      {/* NAVBAR */}

      <nav
        style={{
          backgroundColor: "#1e3a8a",
          padding: "20px",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Promoción Docente MX</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link
            to="/"
            style={{ color: "white", textDecoration: "none" }}
          >
            Inicio
          </Link>

          <Link
            to="/simulador-usicamm-2026"
            style={{ color: "white", textDecoration: "none" }}
          >
            Simulador
          </Link>
<Link
  to="/horas-adicionales"
  style={{ color: "white", textDecoration: "none" }}
>
  Horas
</Link>
          <Link
            to="/admision-docente-2026"
            style={{ color: "white", textDecoration: "none" }}
          >
            Admisión
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}

      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background:
            "linear-gradient(to right, #2563eb, #1d4ed8)",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "48px" }}>
          Plataforma USICAMM 2026
        </h1>

        <p
          style={{
            fontSize: "20px",
            marginTop: "20px",
            maxWidth: "700px",
            marginInline: "auto",
          }}
        >
          Simuladores, reactivos, guías y recursos
          gratuitos para docentes.
        </p>

        <div style={{ marginTop: "30px" }}>
          <Link
            to="/simulador-usicamm-2026"
            style={{
              backgroundColor: "white",
              color: "#1d4ed8",
              padding: "15px 30px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Comenzar Gratis
          </Link>
        </div>
      </section>

      {/* CARDS */}

      <section
        style={{
          padding: "60px 20px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* CARD 1 */}

        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Simulador USICAMM</h2>

          <p>
            Practica con reactivos tipo examen real.
          </p>

          <Link to="/simulador-usicamm-2026">
            Ver más →
          </Link>
        </div>

        {/* CARD 2 */}

        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Admisión Docente</h2>

          <p>
            Guías y estrategias para ingreso docente.
          </p>

          <Link to="/admision-docente-2026">
            Ver más →
          </Link>
        </div>

        {/* CARD 3 */}

        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Promoción Horizontal</h2>

          <p>
            Recursos para promoción horizontal USICAMM.
          </p>

          <a href="#">
            Próximamente
          </a>
        </div>
      </section>

      {/* FOOTER */}

      <footer
        style={{
          backgroundColor: "#111827",
          color: "white",
          padding: "30px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        © 2026 Promoción Docente MX
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route
        path="/simulador-usicamm-2026"
        element={<SimuladorUsicamm2026 />}
      />

      <Route
        path="/admision-docente-2026"
        element={<AdmisionDocente2026 />}
      />
<Route
  path="/horas-adicionales"
  element={<HorasAdicionales />}
/>
    </Routes>
  );
}
