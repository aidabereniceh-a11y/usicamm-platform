import { useState, useRef } from "react";
import { PDFDocument } from "pdf-lib";

function CompresorPDF() {
  const [archivo, setArchivo] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef();

  const formatBytes = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  const handleArchivo = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    if (f.type !== "application/pdf") {
      setError("Solo se aceptan archivos PDF.");
      return;
    }
    setArchivo(f);
    setResultado(null);
    setError("");
  };

  const comprimir = async () => {
    if (!archivo) return;
    setCargando(true);
    setError("");
    setResultado(null);
    try {
      const buffer = await archivo.arrayBuffer();
      const pdfDoc = await PDFDocument.load(buffer, { ignoreEncryption: true });

      // Guardar con compresion
      const comprimido = await pdfDoc.save({ useObjectStreams: true, addDefaultPage: false, compress: true });

      const blob = new Blob([comprimido], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const reduccion = ((1 - comprimido.length / buffer.byteLength) * 100).toFixed(1);

      setResultado({
        url,
        nombre: archivo.name.replace(".pdf", "_comprimido.pdf"),
        tamanoOriginal: buffer.byteLength,
        tamanoFinal: comprimido.length,
        reduccion: parseFloat(reduccion),
      });
    } catch (e) {
      setError("No se pudo comprimir el PDF. Intenta con otro archivo.");
    } finally {
      setCargando(false);
    }
  };

  const resetear = () => {
    setArchivo(null);
    setResultado(null);
    setError("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #bfdbfe" }}>
      <h2 style={{ color: "#1e3a5f", fontSize: "24px", fontWeight: "700", marginBottom: "8px" }}>📦 Compresor de PDF</h2>
      <p style={{ color: "#475569", fontSize: "15px", marginBottom: "24px", lineHeight: 1.7 }}>
        Reduce el peso de tus planeaciones y documentos para enviarlos facil por WhatsApp o correo. Sin limite de paginas, sin registro.
      </p>

      {/* Zona de subida */}
      {!resultado && (
        <div>
          <div
            onClick={() => inputRef.current.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) { setArchivo(f); setError(""); setResultado(null); } }}
            style={{ border: "2px dashed #93c5fd", borderRadius: "16px", padding: "40px 20px", textAlign: "center", cursor: "pointer", background: archivo ? "#eff6ff" : "#f8faff", transition: "all 0.2s" }}
          >
            <div style={{ fontSize: "48px", marginBottom: "12px" }}>📄</div>
            {archivo ? (
              <div>
                <div style={{ color: "#1e3a5f", fontWeight: "700", fontSize: "16px", marginBottom: "4px" }}>{archivo.name}</div>
                <div style={{ color: "#64748b", fontSize: "14px" }}>{formatBytes(archivo.size)}</div>
              </div>
            ) : (
              <div>
                <div style={{ color: "#1e3a5f", fontWeight: "700", fontSize: "16px", marginBottom: "4px" }}>Haz clic o arrastra tu PDF aqui</div>
                <div style={{ color: "#94a3b8", fontSize: "13px" }}>Solo archivos PDF</div>
              </div>
            )}
            <input ref={inputRef} type="file" accept=".pdf,application/pdf" onChange={handleArchivo} style={{ display: "none" }} />
          </div>

          {error && (
            <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "10px", padding: "12px 16px", marginTop: "12px", color: "#dc2626", fontSize: "14px" }}>
              {error}
            </div>
          )}

          {archivo && (
            <div style={{ display: "flex", gap: "12px", marginTop: "16px", flexWrap: "wrap" }}>
              <button
                onClick={comprimir}
                disabled={cargando}
                style={{ flex: 1, background: cargando ? "#94a3b8" : "linear-gradient(135deg, #1e3a5f, #1d4ed8)", color: "white", padding: "14px", borderRadius: "12px", border: "none", fontWeight: "800", fontSize: "16px", cursor: cargando ? "not-allowed" : "pointer" }}
              >
                {cargando ? "Comprimiendo..." : "Comprimir PDF"}
              </button>
              <button
                onClick={resetear}
                style={{ background: "#f1f5f9", color: "#64748b", padding: "14px 20px", borderRadius: "12px", border: "none", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}
              >
                Cancelar
              </button>
            </div>
          )}
        </div>
      )}

      {/* Resultado */}
      {resultado && (
        <div>
          <div style={{ background: resultado.reduccion > 0 ? "#f0fdf4" : "#eff6ff", borderRadius: "16px", padding: "24px", marginBottom: "16px", border: `1px solid ${resultado.reduccion > 0 ? "#bbf7d0" : "#bfdbfe"}` }}>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <div style={{ fontSize: "48px", marginBottom: "8px" }}>{resultado.reduccion > 0 ? "🎉" : "✅"}</div>
              <div style={{ color: resultado.reduccion > 0 ? "#166534" : "#1e3a5f", fontWeight: "800", fontSize: "20px" }}>
                {resultado.reduccion > 0 ? `PDF comprimido ${resultado.reduccion}%` : "PDF procesado correctamente"}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
              <div style={{ background: "white", borderRadius: "12px", padding: "16px", textAlign: "center" }}>
                <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "4px" }}>Tamaño original</div>
                <div style={{ color: "#1e293b", fontWeight: "700", fontSize: "18px" }}>{formatBytes(resultado.tamanoOriginal)}</div>
              </div>
              <div style={{ background: "white", borderRadius: "12px", padding: "16px", textAlign: "center" }}>
                <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "4px" }}>Tamaño final</div>
                <div style={{ color: resultado.reduccion > 0 ? "#166534" : "#1e3a5f", fontWeight: "700", fontSize: "18px" }}>{formatBytes(resultado.tamanoFinal)}</div>
              </div>
            </div>
            <a
              href={resultado.url}
              download={resultado.nombre}
              style={{ display: "block", background: "linear-gradient(135deg, #166534, #15803d)", color: "white", padding: "14px", borderRadius: "12px", textDecoration: "none", fontWeight: "800", fontSize: "16px", textAlign: "center" }}
            >
              ⬇️ Descargar PDF comprimido
            </a>
          </div>
          <button
            onClick={resetear}
            style={{ width: "100%", background: "#f1f5f9", color: "#64748b", padding: "12px", borderRadius: "12px", border: "none", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}
          >
            Comprimir otro PDF
          </button>
        </div>
      )}
    </div>
  );
}

export default function HerramientasDocentes() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#eff6ff", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg, #1e3a5f, #1d4ed8)", padding: "60px 32px", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", margin: "0 0 16px 0" }}>Herramientas para Docentes</h1>
        <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>
          Herramientas gratuitas disenadas para maestros mexicanos. Sin registro, sin instalacion, al instante.
        </p>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 32px" }}>

        {/* Compresor funcional */}
        <CompresorPDF />

        {/* Proximas herramientas */}
        <div style={{ background: "white", borderRadius: "20px", padding: "32px", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #bfdbfe" }}>
          <h2 style={{ color: "#1e3a5f", fontSize: "24px", fontWeight: "700", marginBottom: "8px" }}>🔜 Proximamente</h2>
          <p style={{ color: "#475569", fontSize: "15px", marginBottom: "24px", lineHeight: 1.7 }}>
            Mas herramientas en desarrollo para facilitar tu trabajo docente.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "16px" }}>
            {[
              { icono: "📄", titulo: "Generador de constancias", desc: "Crea constancias y reconocimientos para tus alumnos listos para imprimir." },
              { icono: "✂️", titulo: "Dividir PDF", desc: "Extrae paginas especificas de cualquier documento PDF de forma rapida." },
              { icono: "🔗", titulo: "Unir PDFs", desc: "Combina varios documentos en un solo PDF ordenado con un clic." },
            ].map((h) => (
              <div key={h.titulo} style={{ background: "#eff6ff", borderRadius: "14px", padding: "20px", borderLeft: "4px solid #93c5fd", opacity: 0.7 }}>
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>{h.icono}</div>
                <h3 style={{ color: "#1e3a5f", fontSize: "15px", fontWeight: "700", marginBottom: "6px" }}>{h.titulo}</h3>
                <p style={{ color: "#64748b", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{h.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <span style={{ background: "#e0e7ff", color: "#3730a3", padding: "10px 24px", borderRadius: "10px", fontWeight: "700", fontSize: "14px", display: "inline-block" }}>
              🚧 En desarrollo
            </span>
          </div>
        </div>

        {/* CTA Planeaciones */}
        <div style={{ background: "linear-gradient(135deg, #1e3a5f, #1d4ed8)", borderRadius: "20px", padding: "32px", textAlign: "center", color: "white" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", margin: "0 0 12px 0" }}>Descarga planeaciones NEM</h2>
          <p style={{ opacity: 0.9, marginBottom: "20px" }}>Accede a planeaciones didacticas basadas en el nuevo modelo educativo</p>
          <a href="/planeaciones-nem" style={{ background: "white", color: "#1d4ed8", padding: "14px 32px", borderRadius: "12px", textDecoration: "none", fontWeight: "800", fontSize: "16px", display: "inline-block" }}>
            Ver planeaciones
          </a>
        </div>

      </div>
    </div>
  );
}
