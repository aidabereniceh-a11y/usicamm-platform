import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import jsPDF from 'jspdf'

export default function AIQuestionGenerator() {
  const [loading, setLoading] = useState(false)
  const [questionsData, setQuestionsData] = useState([])
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const generateQuestion = async () => {
    setQuestionsData([])
    setLoading(true)
    setSelectedAnswers({})
    setShowResults(false)

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': import.meta.env.VITE_ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 4000,
          messages: [
            {
              role: 'user',
              content: `Genera SOLO un ARRAY JSON válido.
NO expliques nada.
NO uses markdown.
NO uses \`\`\`json.
Debes generar EXACTAMENTE 10 preguntas tipo examen USICAMM.

Formato EXACTO:
[
  {
    "topic": "",
    "question": "",
    "options": {
      "A": "",
      "B": "",
      "C": ""
    },
    "correct": "",
    "explanation": ""
  }
]

Temas:
- Nueva Escuela Mexicana
- Inclusión y diversidad
- Evaluación formativa
- Casos prácticos USICAMM
- Artículo 3° Constitucional
- Planeación didáctica
- Aprendizaje situado
- Promoción Horizontal
- Derechos y legislación docente`,
            },
          ],
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error?.message || 'Error al conectar con la API')
      }

      const text = data.content[0].text
      const parsed = JSON.parse(text)

      setQuestionsData(parsed)

      for (const question of parsed) {
        await addDoc(collection(db, 'ai_questions'), {
          ...question,
          createdAt: serverTimestamp(),
        })
      }
    } catch (error) {
      console.error(error)
      alert('Error: ' + error.message)
    }

    setLoading(false)
  }

  const checkAnswer = (questionIndex, option) => {
    if (showResults) return
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: option }))
  }

  const calculateScore = () => {
    let correct = 0
    questionsData.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) correct++
    })
    return correct
  }

  const downloadPDF = () => {
    const doc = new jsPDF()
    let y = 20

    doc.setFontSize(20)
    doc.text('Simulador USICAMM PRO', 20, y)
    y += 20

    questionsData.forEach((question, index) => {
      doc.setFontSize(14)
      const splitQuestion = doc.splitTextToSize(
        `${index + 1}. ${question.question}`,
        170
      )
      doc.text(splitQuestion, 20, y)
      y += splitQuestion.length * 10

      Object.entries(question.options).forEach(([key, value]) => {
        const splitOption = doc.splitTextToSize(`${key}) ${value}`, 160)
        doc.text(splitOption, 30, y)
        y += splitOption.length * 8
      })

      doc.text(`Respuesta correcta: ${question.correct}`, 20, y)
      y += 10

      const splitExplanation = doc.splitTextToSize(question.explanation, 170)
      doc.text(splitExplanation, 20, y)
      y += splitExplanation.length * 8 + 15

      if (y > 260) {
        doc.addPage()
        y = 20
      }
    })

    doc.save('simulador-usicamm.pdf')
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mt-12">
      <h2 className="text-3xl font-bold mb-6 text-[#6A1B2D]">
        IA Generadora de Reactivos
      </h2>

      <button
        onClick={generateQuestion}
        disabled={loading}
        className="bg-[#6A1B2D] text-white px-8 py-4 rounded-xl disabled:opacity-50"
      >
        {loading ? 'Generando examen...' : 'Generar Examen IA'}
      </button>

      {loading && (
        <p className="mt-6 text-xl animate-pulse">
          Generando 10 preguntas con IA...
        </p>
      )}

      {questionsData.length > 0 && (
        <div className="mt-10 space-y-8">
          {questionsData.map((question, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-8">
                Pregunta {index + 1}
              </h3>
              <p className="text-xl mb-8">{question.question}</p>

              <div className="space-y-4">
                {Object.entries(question.options).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => checkAnswer(index, key)}
                    className={`w-full text-left p-5 rounded-xl border transition ${
                      selectedAnswers[index] === key
                        ? showResults
                          ? key === question.correct
                            ? 'bg-green-200 border-green-600'
                            : 'bg-red-200 border-red-600'
                          : 'bg-blue-200 border-blue-600'
                        : 'bg-white hover:bg-gray-100 border-gray-300'
                    }`}
                  >
                    <strong>{key})</strong> {value}
                  </button>
                ))}
              </div>

              {showResults && (
                <div className="mt-8 bg-green-50 rounded-xl p-6">
                  <p className="font-bold text-lg mb-4">
                    Respuesta correcta: {question.correct}
                  </p>
                  <p className="leading-8">{question.explanation}</p>
                </div>
              )}
            </div>
          ))}

          <div className="text-center mt-12">
            {!showResults && (
              <button
                onClick={() => setShowResults(true)}
                className="bg-green-600 text-white px-10 py-5 rounded-2xl text-xl font-bold"
              >
                Finalizar Examen
              </button>
            )}
          </div>

          {showResults && (
            <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
              <h2 className="text-4xl font-bold mb-8 text-[#6A1B2D]">
                Resultado Final
              </h2>
              <p className="text-3xl mb-6">
                Puntaje:{' '}
                <strong>
                  {calculateScore()} / {questionsData.length}
                </strong>
              </p>
              <p className="text-5xl font-bold text-green-600">
                {Math.round((calculateScore() / questionsData.length) * 100)}%
              </p>
              <button
                onClick={downloadPDF}
                className="mt-8 bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 transition"
              >
                Descargar PDF
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}