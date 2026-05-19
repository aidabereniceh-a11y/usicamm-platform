import { Routes, Route, Link } from "react-router-dom";

import SimuladorUsicamm2026 from "./pages/SimuladorUsicamm2026";
import AdmisionDocente2026 from "./pages/AdmisionDocente2026";

function Home() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Promoción Docente MX</h1>

      <p>
        Plataforma educativa para docentes: simuladores USICAMM,
        reactivos, guías y recursos gratuitos.
      </p>

      <nav style={{ marginTop: "20px" }}>

        <div style={{ marginBottom: "10px" }}>
          <Link to="/simulador-usicamm-2026">
            Simulador USICAMM 2026
          </Link>
        </div>

        <div>
          <Link to="/admision-docente-2026">
            Admisión Docente 2026
          </Link>
        </div>

      </nav>
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

    </Routes>
  );
}
