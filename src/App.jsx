import { Routes, Route, Link } from "react-router-dom";
import SimuladorUsicamm2026 from "./pages/SimuladorUsicamm2026";

function Home() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Promoción Docente MX</h1>

      <p>
        Plataforma educativa para docentes: simuladores USICAMM,
        reactivos, guías y recursos gratuitos.
      </p>

      <nav style={{ marginTop: "20px" }}>
        <Link to="/simulador-usicamm-2026">
          Ir al Simulador USICAMM 2026
        </Link>
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
    </Routes>
  );
}
