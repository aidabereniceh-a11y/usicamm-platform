import { useEffect, useState } from 'react'

import {
  collection,
  getDocs,
  orderBy,
  query
} from 'firebase/firestore'

import { db } from '../firebase'

export default function Dashboard() {

  const [results, setResults] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchResults = async () => {

      try {

        const q = query(
          collection(db, 'results'),
          orderBy('createdAt', 'desc')
        )

        const querySnapshot = await getDocs(q)

        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        setResults(data)

      } catch (error) {

        console.log(error)

      } finally {

        setLoading(false)

      }

    }

    fetchResults()

  }, [])

  const totalExams = results.length

  const averageScore = totalExams > 0
    ? Math.round(
        results.reduce(
          (acc, item) => acc + item.percentage,
          0
        ) / totalExams
      )
    : 0

  const bestScore = totalExams > 0
    ? Math.max(...results.map(r => r.percentage))
    : 0

  if (loading) {

    return (

      <div className="text-center py-20 text-2xl font-bold">

        Cargando dashboard...

      </div>

    )
  }

  return (

    <div className="max-w-7xl mx-auto py-12 px-4">

      <h1 className="text-5xl font-bold mb-12 text-center text-[#6A1B2D]">

        Dashboard USICAMM PRO

      </h1>

      <div className="grid md:grid-cols-3 gap-8 mb-14">

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">

          <h2 className="text-2xl font-bold mb-4">
            Simuladores
          </h2>

          <p className="text-5xl font-bold text-[#6A1B2D]">
            {totalExams}
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">

          <h2 className="text-2xl font-bold mb-4">
            Promedio
          </h2>

          <p className="text-5xl font-bold text-[#6A1B2D]">
            {averageScore}%
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">

          <h2 className="text-2xl font-bold mb-4">
            Mejor Puntaje
          </h2>

          <p className="text-5xl font-bold text-[#6A1B2D]">
            {bestScore}%
          </p>

        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

        <div className="bg-[#6A1B2D] text-white p-6">

          <h2 className="text-3xl font-bold">
            Historial de Simuladores
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="p-4 text-left">
                  Tipo
                </th>

                <th className="p-4 text-left">
                  Puntaje
                </th>

                <th className="p-4 text-left">
                  Total
                </th>

                <th className="p-4 text-left">
                  Porcentaje
                </th>

                <th className="p-4 text-left">
                  Fecha
                </th>

              </tr>

            </thead>

            <tbody>

              {results.map(result => (

                <tr
                  key={result.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4 capitalize font-semibold">
                    {result.examType}
                  </td>

                  <td className="p-4">
                    {result.score}
                  </td>

                  <td className="p-4">
                    {result.totalQuestions}
                  </td>

                  <td className="p-4 font-bold text-[#6A1B2D]">
                    {result.percentage}%
                  </td>

                  <td className="p-4">

                    {
                      result.createdAt?.seconds
                        ? new Date(
                            result.createdAt.seconds * 1000
                          ).toLocaleDateString()
                        : 'Sin fecha'
                    }

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}