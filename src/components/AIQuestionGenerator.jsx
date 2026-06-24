import { useState, useEffect } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import jsPDF from 'jspdf'

const MAX_USES = 3
const STORAGE_KEY = 'ai_generator_uses'

export default function AIQuestionGenerator() {
  const [loading, setLoading] = useState(false)
  const [questionsData, setQuestionsData] = useState([])
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [usesLeft, setUsesLeft] = useState(MAX_USES)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored !== null) {
      setUsesLeft(Math.max(0, MAX_USES - parseInt(stored, 10)))
    }
  }, [])

  const getUsesCount = () => parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10)

  const incrementUses = () => {
    const newCount = getUsesCount() + 1
    localStorage.setItem(STORAGE_KEY, newCount)
    setUsesLeft(Math.max(0, MAX_USES - newCount))
  }

  const generateQuestion = async () => {
    setErrorMsg('')

    if (getUsesCount() >= MAX_USES) {
      setErrorMsg('Has alcanzado el limite de 3 generaciones gratuitas por sesion.')
      return
    }

    setQuestionsData([])
    setLoading(true)
    setSelectedAnswers({})
    setShowResults(false)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'generate' }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.error === 'limite_alcanzado') {
          throw new Error('Has alcanzado el limite de generaciones por hoy. Vuelve manana.')
        } else if (data.error === 'api_error') {
          throw new Error('Error al generar preguntas. Intenta de nuevo en un momento.')
        } else {
          throw new Error(data.message || 'Error inesperado. Intenta de nuevo.')
        }
      }

      const parsed = data.questions
      setQuestionsData(parsed)
      incrementUses()

      for (const question of parsed) {
        await addDoc(collection(db, 'ai_questions'), {
          ...question,
          createdAt: serverTimestamp(),
        })
      }
    } catch (error) {
      console.error(error)
      setErrorMsg(error.message || 'Ocurrio un error inesperado. Intenta de nuevo.')
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
      if (y > 230) { doc.addPage(); y = 20 }
      doc.setFontSize(14)
      const splitQuestion = doc.splitTextToSize(index + 1 + '. ' + question.question, 170)
      doc.text(splitQuestion, 20, y)
      y += splitQuestion.length * 10

      Object.entries(question.options)
        .sort(([a], [b]) => a.localeCompare(b))
        .forEach(([key, value]) => {
          if (y > 260) { doc.addPage(); y = 20 }
          const splitOption = doc.splitTextToSize(key + ') ' + value, 160)
          doc.text(splitOption, 30, y)
          y += splitOption.length * 8
        })

      if (y > 260) { doc.addPage(); y = 20 }
      doc.text('Respuesta correcta: ' + question.correct, 20, y)
      y += 10

      if (y > 260) { doc.addPage(); y = 20 }
      const splitExplanation = doc.splitTextToSize(question.explanation, 170)
      doc.text(splitExplanation, 20, y)
      y += splitExplanation.length * 8 + 15
    })

    doc.save('simulador-usicamm.pdf')
  }

  const usedCount = MAX_USES - usesLeft
  const limitReached = usesLeft === 0

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mt-12">
      <h2 className="text-3xl font-bold mb-2 text-[#6A1B2D]">
        IA Generadora de Reactivos
      </h2>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex gap-2">
          {Array.from({ length: MAX_USES }).map((_, i) => (
            <div
              key={i}
              className={'w-4 h-4 rounded-full border-2 transition-all ' + (i < usedCount ? 'bg-gray-300 border-gray-300' : 'bg-[#6A1B2D] border-[#6A1B2D]')}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">
          {limitReached ? 'Limite de generaciones alcanzado' : usesLeft + ' generacion' + (usesLeft !== 1 ? 'es' : '') + ' disponible' + (usesLeft !== 1 ? 's' : '')}
        </span>
      </div>

      <button
        onClick={generateQuestion}
        disabled={loading || limitReached}
        className="bg-[#6A1B2D] text-white px-8 py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition hover:bg-[#8B2239]"
      >
        {loading ? 'Generando examen...' : 'Generar Examen IA (5 preguntas)'}
      </button>

      {limitReached && (
        <div className="mt-4 p-4 bg-amber-50 border border-amber-300 rounded-xl text-amber-800">
          <p className="font-semibold">Has usado tus 3 generaciones gratuitas.</p>
          <p className="text-sm mt-1">Vuelve manana para obtener nuevas generaciones.</p>
        </div>
      )}

      {errorMsg && (
        <div className="mt-4 p-4 bg-red-50 border border-red-300 rounded-xl text-red-700">
          <p className="font-semibold">error {errorMsg}</p>
        </div>
      )}

      {loading && (
        <p className="mt-6 text-xl animate-pulse text-gray-600">
          Generando 5 preguntas con IA...
        </p>
      )}

      {questionsData.length > 0 && (
        <div className="mt-10 space-y-8">
          {questionsData.map((question, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#6A1B2D] text-white text-sm font-bold px-3 py-1 rounded-full">
                  {question.topic}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-6">Pregunta {index + 1}</h3>
              <p className="text-lg mb-6">{question.question}</p>

              <div className="space-y-4">
                {Object.entries(question.options)
                  .sort(([a], [b]) => a.localeCompare(b))
                  .map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => checkAnswer(index, key)}
                      className={'w-full text-left p-5 rounded-xl border transition ' + (
                        selectedAnswers[index] === key
                          ? showResults
                            ? key === question.correct
                              ? 'bg-green-200 border-green-600'
                              : 'bg-red-200 border-red-600'
                            : 'bg-blue-200 border-blue-600'
                          : showResults && key === question.correct
                          ? 'bg-green-100 border-green-400'
                          : 'bg-white hover:bg-gray-100 border-gray-300'
                      )}
                    >
                      <strong>{key})</strong> {value}
                    </button>
                  ))}
              </div>

              {showResults && (
                <div className="mt-6 bg-green-50 rounded-xl p-6 border border-green-200">
                  <p className="font-bold text-lg mb-2 text-green-800">
                    Respuesta correcta: {question.correct}
                  </p>
                  <p className="text-gray-700 leading-7">{question.explanation}</p>
                </div>
              )}
            </div>
          ))}

          <div className="text-center mt-12">
            {!showResults && (
              <button
                onClick={() => setShowResults(true)}
                className="bg-green-600 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-green-700 transition"
              >
                Finalizar Examen
              </button>
            )}
          </div>

          {showResults && (
            <div className="bg-white rounded-2xl shadow-xl p-10 text-center border border-gray-100">
              <h2 className="text-4xl font-bold mb-4 text-[#6A1B2D]">Resultado Final</h2>
              <p className="text-2xl mb-4">
                Puntaje: <strong>{calculateScore()} / {questionsData.length}</strong>
              </p>
              <p className={'text-5xl font-bold mb-8 ' + (Math.round((calculateScore() / questionsData.length) * 100) >= 70 ? 'text-green-600' : 'text-red-500')}>
                {Math.round((calculateScore() / questionsData.length) * 100)}%
              </p>
              {Math.round((calculateScore() / questionsData.length) * 100) >= 70 ? (
                <p className="text-green-700 font-semibold mb-6">Buen resultado! Sigue practicando para llegar al 100%.</p>
              ) : (
                <p className="text-red-600 font-semibold mb-6">Necesitas repasar mas. Tu puedes lograrlo!</p>
              )}
              <button
                onClick={downloadPDF}
                className="bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 transition font-semibold"
              >
                Descargar PDF con respuestas
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}