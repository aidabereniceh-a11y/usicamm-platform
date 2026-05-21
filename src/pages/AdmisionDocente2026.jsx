import { Link } from "react-router-dom";

export default function AdmisionDocente2026() {

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
            "linear-gradient(to right, #2563eb, #1d4ed8)",

          color: "white",

          padding: "100px 20px",

          textAlign: "center",
        }}
      >

        <h1
          style={{
            fontSize: "52px",
          }}
        >
          Admisión Docente 2026
        </h1>

        <p
          style={{
            marginTop: "25px",
            fontSize: "22px",
            maxWidth: "800px",
            marginInline: "auto",
          }}
        >
          Prepárate para ingresar al sistema educativo
          con simuladores, reactivos y estrategias
          reales USICAMM.
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
              color: "#1d4ed8",

              padding: "18px 35px",

              borderRadius: "12px",

              textDecoration: "none",

              fontWeight: "bold",

              fontSize: "18px",
            }}
          >
            Comenzar Simulador 🚀
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

          <h2>📚 Guías de estudio</h2>

          <p style={{ marginTop: "20px" }}>
            Accede a materiales y contenidos
            esenciales para tu preparación docente.
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

          <h2>📝 Reactivos reales</h2>

          <p style={{ marginTop: "20px" }}>
            Practica con preguntas similares al
            examen oficial USICAMM.
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

          <h2>⏰ Simulador con timer</h2>

          <p style={{ marginTop: "20px" }}>
            Vive una experiencia tipo examen real
            con cronómetro y score final.
          </p>

        </div>

      </section>

      {/* CTA */}

      <section
        style={{
          textAlign: "center",

          padding: "80px 20px",
        }}
      >

        <h2
          style={{
            fontSize: "42px",
          }}
        >
          ¿Listo para comenzar?
        </h2>

        <p
          style={{
            marginTop: "20px",

            fontSize: "20px",
          }}
        >
          Empieza gratis tu preparación docente.
        </p>

        <div
          style={{
            marginTop: "35px",
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
            }}
          >
            Entrar al simulador
          </Link>

        </div>

      </section>

    </div>

  );
}
