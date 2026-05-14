import { Link } from 'react-router-dom'
import AIQuestionGenerator from '../components/AIQuestionGenerator'
export default function Home() {

  return (

    <div>

      <section className="bg-[#6A1B2D] text-white py-24 text-center">

        <h1 className="text-6xl font-bold mb-6">
          Plataforma USICAMM PRO
        </h1>

        <p className="text-2xl mb-10">
          Simuladores profesionales tipo examen real
        </p>

      </section>

      <section className="max-w-7xl mx-auto py-20 px-4">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <Link
            to="/simulator/admission"
            className="bg-white rounded-2xl shadow-xl p-8 hover:scale-105 transition"
          >
            <h2 className="text-2xl font-bold mb-4">
              Admisión Docente
            </h2>

            <p>
              Simuladores oficiales basados en la NEM.
            </p>
          </Link>

          <Link
            to="/simulator/horizontal"
            className="bg-white rounded-2xl shadow-xl p-8 hover:scale-105 transition"
          >
            <h2 className="text-2xl font-bold mb-4">
              Promoción Horizontal
            </h2>

            <p>
              Casos prácticos y evaluación formativa.
            </p>
          </Link>

          <Link
            to="/simulator/vertical"
            className="bg-white rounded-2xl shadow-xl p-8 hover:scale-105 transition"
          >
            <h2 className="text-2xl font-bold mb-4">
              Promoción Vertical
            </h2>

            <p>
              Liderazgo y gestión escolar.
            </p>
          </Link>

          <Link
            to="/simulator/hours"
            className="bg-white rounded-2xl shadow-xl p-8 hover:scale-105 transition"
          >
            <h2 className="text-2xl font-bold mb-4">
              Horas Adicionales
            </h2>

            <p>
              Estrategias didácticas y aprendizaje situado.
            </p>
          </Link>

        </div>

      </section>
<AIQuestionGenerator />
    </div>
  )
}