import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Simulator from './pages/Simulator'
import Dashboard from './pages/Dashboard'

export default function App() {

  return (

    <div className="min-h-screen bg-gray-100">

      <Header />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/simulator/:type"
          element={<Simulator />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>

      <Footer />

    </div>
  )
}