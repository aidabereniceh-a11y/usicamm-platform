export default function ReactivosPdf() {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
      }}
    >
      <h1
        style={{
          color: "#1d4ed8",
          marginBottom: "20px",
          fontSize: "42px",
        }}
      >
        Reactivos y Guías de Estudio PDF
      </h1>

      <p
        style={{
          fontSize: "20px",
          marginBottom: "30px",
          maxWidth: "800px",
          lineHeight: "1.6",
        }}
      >
        Descarga reactivos tipo examen real y Guías de
        Estudio PDF gratuitos para admisión docente,
        promoción horizontal, promoción vertical y
        simuladores USICAMM 2026.
      </p>

      <a
        href="/pdfs/reactivos.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "15px 30px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "18px",
          display: "inline-block",
        }}
      >
        Descargar PDF
      </a>
    </div>
  );
}
