import { Link } from "react-router-dom";

import { useEffect } from "react";
export default function PromocionHorizontal() {
  useEffect(() => { document.title = "Simulador Promocion Horizontal USICAMM 2026 | Reactivos Gratis"; }, []);

  return (

    <div
      style={{
        fontFamily: "Arial",
        backgroundColor: "#f5f7fb",
        minHeight: "100vh",
      }}
    >

      {/* HERO */}

      <section
        style={{
          background:
            "linear-gradient(to right, #059669, #047857)",

          color: "white",

          padding: "100px 20px",

          textAlign: "center",
        }}
      >

        <h1
          style={{
            fontSize: "56px",
          }}
        >
          Promoción Horizontal USICAMM
        </h1>

        <p
          style={{
            marginTop: "25px",
            fontSize: "22px",
            maxWidth: "850px",
            marginInline: "auto",
          }}
        >
          Prepárate para mejorar tu nivel profesional
          con simuladores, reactivos y recursos para
          promoción horizontal.
        </p>

        <div
          style={{
            marginTop: "40px",
          }}
        >

          <Link
            to="/simulador-usicamm-2026"

            style={{
              backgroundColor: "white",
              color: "#047857",

              padding: "18px 35px",

              borderRadius: "12px",

              textDecoration: "none",

              fontWeight: "bold",

              fontSize: "18px",
            }}
          >
            Iniciar Simulador 🚀
          </Link>

        </div>

      </section>

      {/* CARDS */}

      <section
        style={{
          maxWidth: "1200px",

          margin: "0 auto",

          padding: "70px 20px",

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",

          gap: "30px",
        }}
      >

        {/* CARD 1 */}

        <div
          style={{
            backgroundColor: "white",

            padding: "35px",

            borderRadius: "20px",

            boxShadow:
              "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >

          <h2>📚 Guías Actualizadas</h2>

          <p style={{ marginTop: "20px" }}>
            Contenido y materiales para fortalecer
            conocimientos docentes.
          </p>

        </div>

        {/* CARD 2 */}

        <div
          style={{
            backgroundColor: "white",

            padding: "35px",

            borderRadius: "20px",

            boxShadow:
              "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >

          <h2>📝 Reactivos Tipo Examen</h2>

          <p style={{ marginTop: "20px" }}>
            Practica con preguntas similares
            al examen oficial USICAMM.
          </p>

        </div>

        {/* CARD 3 */}

        <div
          style={{
            backgroundColor: "white",

            padding: "35px",

            borderRadius: "20px",

            boxShadow:
              "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >

          <h2>⏰ Simulador Profesional</h2>

          <p style={{ marginTop: "20px" }}>
            Entrena con cronómetro, score y experiencia
            tipo examen real.
          </p>

        </div>

      </section>

     

      <section
        style={{
          textAlign: "center",

          padding: "90px 20px",
        }}
      >

        <h2
          style={{
            fontSize: "46px",
          }}
        >
          Prepárate desde hoy 🚀
        </h2>

        <p
          style={{
            marginTop: "20px",

            fontSize: "20px",
          }}
        >
          Accede gratis al simulador USICAMM.
        </p>

        <div
          style={{
            marginTop: "40px",
          }}
        >

          <Link
            to="/simulador-usicamm-2026"

            style={{
              backgroundColor: "#111827",

              color: "white",

              padding: "18px 35px",

              borderRadius: "12px",

              textDecoration: "none",

              fontWeight: "bold",

              fontSize: "18px",
            }}
          >
            Entrar al simulador
          </Link>

        </div>

      </section>

    </div>

  );
}
