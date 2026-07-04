export default function PagoExitoso() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f0fdf4", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "white", borderRadius: "20px", padding: "48px", textAlign: "center", maxWidth: "500px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #dcfce7" }}>
        <div style={{ fontSize: "64px", marginBottom: "16px" }}>🎉</div>
        <h1 style={{ color: "#166534", fontSize: "28px", fontWeight: "800", margin: "0 0 12px" }}>Pago exitoso</h1>
        <p style={{ color: "#475569", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
          Gracias por tu compra. En unos minutos recibiras un email con los links para descargar tus planeaciones.
        </p>
        <div style={{ background: "#f0fdf4", borderRadius: "12px", padding: "16px", marginBottom: "24px", border: "1px solid #dcfce7" }}>
          <p style={{ color: "#166534", fontWeight: "600", margin: "0 0 4px" }}>Revisa tu bandeja de entrada</p>
          <p style={{ color: "#64748b", fontSize: "13px", margin: 0 }}>Si no ves el email en 5 minutos, revisa tu carpeta de spam.</p>
        </div>
        <a href="/planeaciones-nem" style={{ background: "linear-gradient(135deg,#166534,#15803d)", color: "white", padding: "14px 32px", borderRadius: "12px", textDecoration: "none", fontWeight: "700", fontSize: "15px", display: "inline-block" }}>
          Ver más planeaciones
        </a>
      </div>
    </div>
  );
}
