import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import {
  collection,
  addDoc
} from 'firebase/firestore'

import { db } from '../firebase'

import admissionQuestions from '../data/admissionQuestions'
import horizontalQuestions from '../data/horizontalQuestions'
import verticalQuestions from '../data/verticalQuestions'
import hoursQuestions from '../data/hoursQuestions'

export default function Simulator() {

  const { type } = useParams()

  let questions = admissionQuestions

  if (type === 'horizontal') {
    questions = horizontalQuestions
  }

  if (type === 'vertical') {
    questions = verticalQuestions
  }

  if (type === 'hours') {
    questions = hoursQuestions
  }

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [score, setScore] = useState(0)

  const [timeLeft, setTimeLeft] = useState(1800)

  const [showExplanation, setShowExplanation] = useState(false)

  const [resultSaved, setResultSaved] = useState(false)

  const [shuffledQuestions] = useState(
    [...questions].sort(() => Math.random() - 0.5)
  )

  useEffect(() => {

    if (timeLeft <= 0) return

    const timer = setInterval(() => {

      setTimeLeft(prev => prev - 1)

    }, 1000)

    return () => clearInterval(timer)

  }, [timeLeft])

  useEffect(() => {

    const saveResult = async () => {

      if (
        currentQuestion < shuffledQuestions.length ||
        resultSaved
      ) return

      try {

        await addDoc(collection(db, 'results'), {

          examType: type || 'admission',

          score: score,

          totalQuestions: shuffledQuestions.length,

          percentage:
            Math.round(
              (score / shuffledQuestions.length) * 100
            ),

          createdAt: new Date()

        })

        console.log('Resultado guardado')

        setResultSaved(true)

      } catch (error) {

        console.log(error)

      }

    }

    saveResult()

  }, [
    currentQuestion,
    shuffledQuestions.length,
    score,
    type,
    resultSaved
  ])

  if (currentQuestion >= shuffledQuestions.length) {

    return (

      <div className="max-w-4xl mx-auto py-20 px-4">

        <div className="bg-white rounded-2xl shadow p-10 text-center">

          <h1 className="text-4xl font-bold mb-6">
            Simulador Finalizado
          </h1>

          <p className="text-lg mb-6 text-gray-700">

            Tipo de examen:
            {' '}

            <strong className="capitalize">
              {type}
            </strong>

          </p>

          <div className="bg-gray-100 rounded-xl p-6 mb-8">

            <p className="text-xl mb-4">
              Preguntas correctas:
              {' '}
              <strong>{score}</strong>
            </p>

            <p className="text-xl mb-4">
              Preguntas incorrectas:
              {' '}
              <strong>
                {shuffledQuestions.length - score}
              </strong>
            </p>

            <p className="text-xl">
              Puntaje:
              {' '}
              <strong>
                {Math.round(
                  (score / shuffledQuestions.length) * 100
                )}%
              </strong>
            </p>

          </div>

          <a
            href="/"
            className="bg-[#6A1B2D] text-white px-8 py-4 rounded-xl"
          >
            Volver al inicio
          </a>

        </div>

      </div>
    )
  }

  const question = shuffledQuestions[currentQuestion]

  const handleAnswer = (option) => {

    if (option === question.correct) {

      setScore(prev => prev + 1)

    }

    setShowExplanation(true)
  }

  const nextQuestion = () => {

    setShowExplanation(false)

    setCurrentQuestion(prev => prev + 1)
  }

  return (

    <div className="max-w-4xl mx-auto py-12 px-4">

      <div className="bg-white rounded-2xl shadow p-8">

        <div className="text-right text-xl font-bold text-red-600 mb-4">

          Tiempo restante:
          {' '}
          {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60)
            .toString()
            .padStart(2, '0')}

        </div>

        <div className="w-full bg-gray-300 rounded-full h-4 mb-8">

          <div
            className="bg-[#6A1B2D] h-4 rounded-full"
            style={{
              width:
                `${(
                  (currentQuestion + 1)
                  / shuffledQuestions.length
                ) * 100}%`
            }}
          />

        </div>

        <h2 className="text-2xl font-bold mb-6">

          Pregunta {currentQuestion + 1}

        </h2>

        <p className="text-lg mb-8">

          {question.question}

        </p>

        <div className="space-y-4">

          {Object.entries(question.options)
            .map(([key, value]) => (

              <button
                key={key}
                onClick={() => handleAnswer(key)}
                className="w-full text-left bg-gray-100 hover:bg-[#C9A227] p-4 rounded-xl"
              >
                {key}) {value}
              </button>

          ))}

        </div>

        {showExplanation && (

          <div className="mt-8 bg-green-100 p-6 rounded-xl">

            <p className="font-bold mb-2">

              Respuesta correcta:
              {' '}
              {question.correct}

            </p>

            <p>

              {question.explanation}

            </p>

            <button
              onClick={nextQuestion}
              className="mt-6 bg-[#6A1B2D] text-white px-6 py-3 rounded-xl"
            >
              Siguiente pregunta
            </button>

          </div>

        )}

      </div>

    </div>
  )
}