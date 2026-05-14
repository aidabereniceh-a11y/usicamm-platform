import { Link } from 'react-router-dom'

export default function Header() {

  return (

    <header className="bg-[#6A1B2D] text-white shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-3xl font-bold">
          USICAMM PRO
        </h1>

        <nav className="flex gap-6 text-lg">

          <Link
            to="/"
            className="hover:text-yellow-300"
          >
            Inicio
          </Link>

          <Link
            to="/simulator/admission"
            className="hover:text-yellow-300"
          >
            Admisión
          </Link>

          <Link
            to="/simulator/horizontal"
            className="hover:text-yellow-300"
          >
            Horizontal
          </Link>

          <Link
            to="/simulator/vertical"
            className="hover:text-yellow-300"
          >
            Vertical
          </Link>

          <Link
            to="/simulator/hours"
            className="hover:text-yellow-300"
          >
            Horas
          </Link>

        </nav>

      </div>

    </header>
  )
}