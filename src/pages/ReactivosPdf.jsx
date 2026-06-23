import { useState } from 'react'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import jsPDF from 'jspdf'

export default function ReactivosPdf() {
  const [loadingPdf, setLoadingPdf] = useState(false)
  const [totalQuestions, setTotalQuestions] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')

  const pdfs = [
    {
      titulo: "Guia Promocion Horizontal",
      desc: "10 reactivos tipo examen con respuestas y fundamento legal. Incluye resumen de requisitos, dimensiones del expediente y niveles de promocion.",
      archivo: "/pdfs/guia_promocion_horizontal.pdf",
      icono: "📈",
      tag: "Nuevo",
      tagColor: "#166534",
    },
    {
      titulo: "Guia Nueva Escuela Mexicana",
      desc: "10 reactivos sobre el Plan de Estudios 2022, ejes articuladores, campos formativos y rol del docente como facilitador.",
      archivo: "/pdfs/guia_nueva_escuela_mexicana.pdf",
      icono: "🏫",
      tag: "Nuevo",
      tagColor: "#166534",
    },
    {
      titulo: "Guia Admision Docente",
      desc: "10 reactivos sobre el proceso de admision, perfil del aspirante, planeacion didactica y evaluacion formativa.",
      archivo: "/pdfs/guia_admision_docente.pdf",
      icono: "🎓",
      tag: "Nuevo",
      tagColor: "#166534",
    },
    {
      titulo: "Guia Derechos y Legislacion",
      desc: "10 reactivos sobre el Articulo 3 Constitucional, LGSCMM, LGE, derechos del docente e inclusion educativa.",
      archivo: "/pdfs/guia_derechos_legislacion.pdf",
      icono: "⚖️",
      tag: "Nuevo",
      tagColor: "#166534",
    },
    {
      titulo: "Reactivos USICAMM PDF",
      desc: "Banco de reactivos tipo examen real para todos los procesos USICAMM 2026. Descarga e imprime para estudiar sin conexion.",
      archivo: "/pdfs/reactivos.pdf",
      icono: "📄",
      tag: "Clasico",
      tagColor: "#1e3a8a",
    },
  ]

  const downloadFirestorePDF = async () => {
    setLoadingPdf(true)
    setErrorMsg('')

    try {
      // Leer todas las preguntas de Firestore ordenadas por fecha
      const q = query(collection(db, 'ai_questions'), orderBy('createdAt', 'desc'))
      const snapshot = await getDocs(q)

      if (snapshot.empty) {
        setErrorMsg('Aún no hay preguntas generadas por IA. Usa el generador del simulador primero.')
        setLoadingPdf(false)
        return
      }

      const questions = snapshot.docs.map(doc => doc.data())
      setTotalQuestions(questions.length)

      // Generar PDF con jsPDF
      const doc = new jsPDF()
      const pageWidth = doc.internal.pageSize.getWidth()
      const margin = 20
      const maxWidth = pageWidth - margin * 2
      let y = 20

      // Encabezado
      doc.setFillColor(22, 101, 52) // verde oscuro
      doc.rect(0, 0, pageWidth, 40, 'F')
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(18)
      doc.setFont('helvetica', 'bold')
      doc.text('Banco de Reactivos IA - USICAMM 2026', margin, 18)
      doc.setFontSize(11)
      doc.setFont('helvetica', 'normal')
      doc.text(`promociondocente.mx  •  ${questions.length} preguntas generadas`, margin, 32)
      y = 55

      // Agrupar por tema
      const byTopic = {}
      questions.forEach(q => {
        const topic = q.topic || 'General'
        if (!byTopic[topic]) byTopic[topic] = []
        byTopic[topic].push(q)
      })

      let questionNumber = 1

      Object.entries(byTopic).forEach(([topic, topicQuestions]) => {
        // Título del tema
        if (y > 250) { doc.addPage(); y = 20 }
        doc.setFillColor(240, 253, 244)
        doc.rect(margin - 4, y - 6, maxWidth + 8, 12, 'F')
        doc.setTextColor(22, 101, 52)
        doc.setFontSize(13)
        doc.setFont('helvetica', 'bold')
        doc.text(`📚 ${topic}`, margin, y + 2)
        y += 16

        topicQuestions.forEach(question => {
          if (y > 245) { doc.addPage(); y = 20 }

          // Número y pregunta
          doc.setTextColor(30, 30, 30)
          doc.setFontSize(11)
          doc.setFont('helvetica', 'bold')
          const questionText = `${questionNumber}. ${question.question}`
          const splitQ = doc.splitTextToSize(questionText, maxWidth)
          doc.text(splitQ, margin, y)
          y += splitQ.length * 7 + 4

          // Opciones
          doc.setFont('helvetica', 'normal')
          doc.setFontSize(10)
          if (question.options) {
            Object.entries(question.options).forEach(([key, value]) => {
              if (y > 260) { doc.addPage(); y = 20 }
              const optText = `   ${key}) ${value}`
              const splitOpt = doc.splitTextToSize(optText, maxWidth - 10)
              doc.text(splitOpt, margin + 4, y)
              y += splitOpt.length * 6 + 2
            })
          }

          // Respuesta correcta
          if (y > 260) { doc.addPage(); y = 20 }
          doc.setFont('helvetica', 'bold')
          doc.setTextColor(22, 101, 52)
          doc.text(`✔ Respuesta: ${question.correct}`, margin + 4, y)
          y += 8

          // Explicación
          if (question.explanation) {
            if (y > 260) { doc.addPage(); y = 20 }
            doc.setFont('helvetica', 'italic')
            doc.setTextColor(80, 80, 80)
            doc.setFontSize(9)
            const splitExp = doc.splitTextToSize(question.explanation, maxWidth - 10)
            doc.text(splitExp, margin + 4, y)
            y += splitExp.length * 6
          }

          // Separador
          doc.setDrawColor(220, 220, 220)
          doc.line(margin, y + 4, pageWidth - margin, y + 4)
          y += 14

          questionNumber++
        })

        y += 6
      })

      // Pie de página en última página
      const totalPages = doc.internal.getNumberOfPages()
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i)
        doc.setFontSize(9)
        doc.setTextColor(150, 150, 150)
        doc.setFont('helvetica', 'normal')
        doc.text(
          `promociondocente.mx  •  Página ${i} de ${totalPages}`,
          pageWidth / 2,
          290,
          { align: 'center' }
        )
      }

      doc.save('reactivos-ia-usicamm-2026.pdf')
    } catch (error) {
      console.error(error)
      setErrorMsg('Error al obtener las preguntas. Intenta de nuevo.')
    }

    setLoadingPdf(false)
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f0fdf4", minHeight: "100vh" }}>

      {/* ENCABEZADO */}
      <div style={{ background: "linear-gradient(135deg, #166534, #15803d)", padding: "60px 40px", textAlign: "center", color: "white" }}>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", padding: "6px 16px", borderRadius: "20px", fontSize: "13px", fontWeight: "600", marginBottom: "16px", border: "1px solid rgba(255,255,255,0.3)" }}>
          Descarga gratuita para docentes
        </div>
        <h1 style={{ fontSize: "42px", fontWeight: "800", margin: "0 0 16px 0" }}>
          Reactivos y Guias de Estudio PDF
        </h1>
        <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
          Descarga gratis guias con reactivos tipo examen, respuestas y fundamentos legales para tu proceso USICAMM 2026.
        </p>
      </div>

      {/* TARJETAS */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "50px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>

        {/* Tarjetas estáticas existentes */}
        {pdfs.map((pdf) => (
          <div key={pdf.archivo} style={{ backgroundColor: "white", borderRadius: "20px", padding: "28px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "1px solid #dcfce7", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <span style={{ fontSize: "40px" }}>{pdf.icono}</span>
                <span style={{ backgroundColor: pdf.tagColor, color: "white", fontSize: "11px", fontWeight: "700", padding: "3px 10px", borderRadius: "20px" }}>{pdf.tag}</span>
              </div>
              <h3 style={{ fontSize: "17px", fontWeight: "800", color: "#166534", margin: "0 0 10px 0" }}>{pdf.titulo}</h3>
              <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", margin: "0 0 20px 0" }}>{pdf.desc}</p>
            </div>
            <a href={pdf.archivo} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#15803d", color: "white", padding: "13px 20px", borderRadius: "12px", textDecoration: "none", fontWeight: "700", fontSize: "15px", textAlign: "center", display: "block" }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#166534"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "#15803d"}>
              Descargar PDF gratis →
            </a>
          </div>
        ))}

        {/* TARJETA NUEVA — Reactivos generados por IA */}
        <div style={{ backgroundColor: "white", borderRadius: "20px", padding: "28px", boxShadow: "0 4px 20px rgba(0,0,0,0.10)", border: "2px solid #6A1B2D", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
          {/* Brillo especial */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #6A1B2D, #c0392b)", borderRadius: "20px 20px 0 0" }} />

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
              <span style={{ fontSize: "40px" }}>🤖</span>
              <span style={{ backgroundColor: "#6A1B2D", color: "white", fontSize: "11px", fontWeight: "700", padding: "3px 10px", borderRadius: "20px" }}>IA</span>
            </div>
            <h3 style={{ fontSize: "17px", fontWeight: "800", color: "#6A1B2D", margin: "0 0 10px 0" }}>
              Reactivos Generados por IA
            </h3>
            <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", margin: "0 0 20px 0" }}>
              PDF con todas las preguntas generadas por inteligencia artificial en el simulador. Banco actualizado con respuestas y explicaciones.
              {totalQuestions && (
                <span style={{ display: "block", marginTop: "8px", color: "#6A1B2D", fontWeight: "700" }}>
                  ✅ {totalQuestions} preguntas disponibles
                </span>
              )}
            </p>

            {errorMsg && (
              <div style={{ backgroundColor: "#fef2f2", border: "1px solid #fca5a5", borderRadius: "10px", padding: "10px 14px", marginBottom: "12px", color: "#b91c1c", fontSize: "13px" }}>
                {errorMsg}
              </div>
            )}
          </div>

          <button
            onClick={downloadFirestorePDF}
            disabled={loadingPdf}
            style={{ backgroundColor: loadingPdf ? "#9ca3af" : "#6A1B2D", color: "white", padding: "13px 20px", borderRadius: "12px", border: "none", fontWeight: "700", fontSize: "15px", textAlign: "center", display: "block", width: "100%", cursor: loadingPdf ? "not-allowed" : "pointer", transition: "background 0.2s" }}
            onMouseEnter={e => { if (!loadingPdf) e.currentTarget.style.backgroundColor = "#8B2239" }}
            onMouseLeave={e => { if (!loadingPdf) e.currentTarget.style.backgroundColor = "#6A1B2D" }}
          >
            {loadingPdf ? '⏳ Generando PDF...' : '🤖 Descargar Reactivos IA →'}
          </button>
        </div>

      </div>

      {/* FOOTER */}
      <div style={{ textAlign: "center", padding: "0 20px 50px", color: "#64748b", fontSize: "14px" }}>
        Todos los materiales son gratuitos y actualizados para USICAMM 2026 •{" "}
        <span style={{ color: "#15803d", fontWeight: "600" }}>promociondocente.mx</span>
      </div>
    </div>
  )
}