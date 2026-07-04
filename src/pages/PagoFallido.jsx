export default function PagoFallido() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fff5f5", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "white", borderRadius: "20px", padding: "48px", textAlign: "center", maxWidth: "500px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
        <div style={{ fontSize: "64px", marginBottom: "16px" }}>😕</div>
        <h1 style={{ color: "#dc2626", fontSize: "28px", fontWeight: "800", margin: "0 0 12px" }}>Pago no completado</h1>
        <p style={{ color: "#475569", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
          No se pudo procesar tu pago. No se realizo ningun cargo a tu cuenta.
        </p>
        <a href="/comprar-planeaciones" style={{ background: "#dc2626", color: "white", padding: "14px 32px", borderRadius: "12px", textDecoration: "none", fontWeight: "700", fontSize: "15px", display: "inline-block" }}>
          Intentar de nuevo
        </a>
      </div>
    </div>
  );
}
