import { useState } from "react";

export default function PaginaPago() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState("mes");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const precios = {
    mes: { precio: "$99 MXN", desc: "Octubre 2026 - todos los niveles (12 PDFs)", ahorro: "" },
    ciclo: { precio: "$599 MXN", desc: "Ciclo completo 2026-2027 - 8 meses (96 PDFs)", ahorro: "Ahorra 25%" },
  };

  const handlePago = async () => {
    if (!nombre.trim() || !email.trim()) {
      setError("Por favor ingresa tu nombre y email.");
      return;
    }
    if (!email.includes("@")) {
      setError("Por favor ingresa un email valido.");
      return;
    }

    setCargando(true);
    setError("");

    try {
      const res = await fetch("/api/crear-pago", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, tipo }),
      });

      const data = await res.json();

      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        setError("Error al procesar el pago. Intenta de nuevo.");
      }
    } catch (e) {
      setError("Error de conexion. Intenta de nuevo.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f0fdf4", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg, #166534, #15803d)", padding: "50px 32px", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "800", margin: "0 0 12px" }}>Comprar Planeaciones NEM</h1>
        <p style={{ fontSize: "17px", opacity: 0.9, maxWidth: "500px", margin: "0 auto" }}>
          PDFs con 4 semanas completas por mes, los 4 campos formativos y evaluacion formativa
        </p>
      </div>

      <div style={{ maxWidth: "600px", margin: "40px auto", padding: "0 24px" }}>

        {/* Selector de producto */}
        <div style={{ background: "white", borderRadius: "20px", padding: "28px", marginBottom: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <h2 style={{ color: "#166534", fontSize: "20px", fontWeight: "700", marginBottom: "16px" }}>Selecciona tu plan</h2>

          {Object.entries(precios).map(([key, val]) => (
            <div
              key={key}
              onClick={() => setTipo(key)}
              style={{
                border: `2px solid ${tipo === key ? "#166534" : "#e2e8f0"}`,
                borderRadius: "12px",
                padding: "16px 20px",
                marginBottom: "12px",
                cursor: "pointer",
                background: tipo === key ? "#f0fdf4" : "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontWeight: "700", color: "#1e293b", fontSize: "15px" }}>
                  {key === "mes" ? "Un mes" : "Ciclo completo"}
                  {val.ahorro && (
                    <span style={{ background: "#166534", color: "white", fontSize: "11px", padding: "2px 8px", borderRadius: "20px", marginLeft: "8px" }}>
                      {val.ahorro}
                    </span>
                  )}
                </div>
                <div style={{ color: "#64748b", fontSize: "13px", marginTop: "4px" }}>{val.desc}</div>
              </div>
              <div style={{ fontWeight: "800", fontSize: "20px", color: "#166534" }}>{val.precio}</div>
            </div>
          ))}
        </div>

        {/* Formulario */}
        <div style={{ background: "white", borderRadius: "20px", padding: "28px", marginBottom: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <h2 style={{ color: "#166534", fontSize: "20px", fontWeight: "700", marginBottom: "16px" }}>Tus datos</h2>

          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", color: "#374151", fontWeight: "600", marginBottom: "6px", fontSize: "14px" }}>
              Nombre completo *
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Maria Garcia Lopez"
              style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid #e2e8f0", fontSize: "15px", boxSizing: "border-box", outline: "none" }}
            />
            <p style={{ color: "#94a3b8", fontSize: "12px", margin: "4px 0 0" }}>Este nombre aparecera en la marca de agua de tus PDFs</p>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", color: "#374151", fontWeight: "600", marginBottom: "6px", fontSize: "14px" }}>
              Email *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid #e2e8f0", fontSize: "15px", boxSizing: "border-box", outline: "none" }}
            />
            <p style={{ color: "#94a3b8", fontSize: "12px", margin: "4px 0 0" }}>Recibirás los links de descarga en este email</p>
          </div>

          {error && (
            <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "10px", padding: "12px 16px", marginBottom: "16px", color: "#dc2626", fontSize: "14px" }}>
              {error}
            </div>
          )}

          <button
            onClick={handlePago}
            disabled={cargando}
            style={{
              width: "100%",
              background: cargando ? "#94a3b8" : "linear-gradient(135deg, #166534, #15803d)",
              color: "white",
              padding: "16px",
              borderRadius: "12px",
              border: "none",
              fontWeight: "800",
              fontSize: "17px",
              cursor: cargando ? "not-allowed" : "pointer",
            }}
          >
            {cargando ? "Procesando..." : `Pagar ${precios[tipo].precio} con MercadoPago`}
          </button>

          <p style={{ color: "#94a3b8", fontSize: "12px", textAlign: "center", marginTop: "12px" }}>
            Pago seguro · Aceptamos tarjetas, transferencias y mas · Recibes tus PDFs por email en minutos
          </p>
        </div>

        {/* Garantia */}
        <div style={{ background: "white", borderRadius: "20px", padding: "20px 28px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <span style={{ fontSize: "24px" }}>✅</span>
            <div>
              <div style={{ fontWeight: "700", color: "#166534", marginBottom: "4px" }}>Lo que incluye cada mes</div>
              <div style={{ color: "#64748b", fontSize: "13px", lineHeight: 1.6 }}>
                12 PDFs (Preescolar 1-3, Primaria 1-6, Secundaria 1-3) · 4 semanas por mes ·
                Los 4 Campos Formativos · Evaluacion formativa · Adecuaciones razonables ·
                Marca de agua personalizada con tu nombre
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
