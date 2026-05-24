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
        }}
      >
        Reactivos USICAMM PDF
      </h1>

      <p
        style={{
          fontSize: "20px",
          marginBottom: "30px",
        }}
      >
        Descarga reactivos tipo examen real para
        admisión, promoción horizontal y vertical.
      </p>

      <a
        href="/pdfs/reactivos-usicamm.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "15px 30px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Descargar PDF
      </a>
    </div>
  );
}
