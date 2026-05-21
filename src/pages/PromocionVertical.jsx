import { Link } from "react-router-dom";

export default function PromocionVertical() {

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
            "linear-gradient(to right, #7c3aed, #5b21b6)",

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
          Promoción Vertical USICAMM
        </h1>

        <p
          style={{
            marginTop: "25px",
            fontSize: "22px",
            maxWidth: "850px",
            marginInline: "auto",
          }}
        >
          Prepárate para procesos de ascenso
          directivo y supervisión escolar con
          simuladores y recursos especializados.
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
              color: "#5b21b6",

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

          <h2>📚 Guías Directivas</h2>

          <p style={{ marginTop: "20px" }}>
            Material especializado para dirección,
            supervisión y liderazgo educativo.
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
            Practica con preguntas similares a los
            procesos oficiales USICAMM.
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
            Entrena con cronómetro y experiencia
            tipo examen real.
          </p>

        </div>

      </section>

      {/* ESTADÍSTICAS */}

      <section
        style={{
          padding: "80px 20px",
        }}
      >

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",

            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",

            gap: "30px",
          }}
        >

          <div
            style={{
              backgroundColor: "white",

              padding: "40px",

              borderRadius: "20px",

              textAlign: "center",

              boxShadow:
                "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "42px",
                color: "#7c3aed",
              }}
            >
              100+
            </h2>

            <p>
              Reactivos profesionales
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",

              padding: "40px",

              borderRadius: "20px",

              textAlign: "center",

              boxShadow:
                "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "42px",
                color: "#7c3aed",
              }}
            >
              8
            </h2>

            <p>
              Categorías USICAMM
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",

              padding: "40px",

              borderRadius: "20px",

              textAlign: "center",

              boxShadow:
                "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "42px",
                color: "#7c3aed",
              }}
            >
              24/7
            </h2>

            <p>
              Acceso gratuito
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

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
          Prepárate para ascender 🚀
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
