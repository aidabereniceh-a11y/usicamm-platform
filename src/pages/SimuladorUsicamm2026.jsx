import { useState, useEffect } from "react";
import { preguntasUsicamm } from "../data/preguntasUsicamm";

// MEZCLAR PREGUNTAS
const preguntas = [...preguntasUsicamm].sort(
  () => Math.random() - 0.5
);

export default function SimuladorUsicamm2026() {

  const [indice, setIndice] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [respuesta, setRespuesta] = useState("");
  const [finalizado, setFinalizado] = useState(false);

  const [tiempo, setTiempo] = useState(300);

  const preguntaActual = {
  ...preguntas[indice],

  opciones: [...preguntas[indice].opciones].sort(
    () => Math.random() - 0.5
  ),
};

  // TIMER

  useEffect(() => {

    if (tiempo > 0 && !finalizado) {

      const intervalo = setInterval(() => {
        setTiempo((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(intervalo);
    }

    if (tiempo === 0) {
      setFinalizado(true);
    }

  }, [tiempo, finalizado]);

  // FORMATO TIMER

  const minutos = Math.floor(tiempo / 60);
  const segundos = tiempo % 60;

  // SONIDO

  function reproducirSonido() {

    const audio = new Audio(
      "https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg"
    );

    audio.play();
  }

  // RESPUESTA

  function seleccionarRespuesta(opcion) {

    reproducirSonido();

    setRespuesta(opcion);

    if (opcion === preguntaActual.correcta) {

      setPuntaje((prev) => prev + 1);
    }
  }

  // SIGUIENTE

  function siguientePregunta() {

    if (indice + 1 < preguntas.length) {

      setIndice((prev) => prev + 1);

      setRespuesta("");

    } else {

      setFinalizado(true);
    }
  }

  // FINAL

  if (finalizado) {

    return (

      <div
        style={{
          padding: "40px",
          fontFamily: "Arial",
          textAlign: "center",
        }}
      >

        <h1>Examen Finalizado 🎉</h1>

        <h2>
          Puntaje Final: {puntaje} / {preguntas.length}
        </h2>

        <p style={{ marginTop: "20px" }}>
          Sigue practicando para mejorar tus resultados.
        </p>

      </div>
    );
  }

  // PROGRESO

  const progreso =
    ((indice + 1) / preguntas.length) * 100;

  return (

    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >

      <h1
        style={{
          textAlign: "center",
          color: "#1e3a8a",
        }}
      >
        Simulador USICAMM 2026
      </h1>

      {/* TIMER */}

      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#ef4444",
        }}
      >
        ⏰ {minutos}:{segundos.toString().padStart(2, "0")}
      </div>

      {/* BARRA */}

      <div
        style={{
          width: "100%",
          backgroundColor: "#d1d5db",
          height: "12px",
          borderRadius: "10px",
          marginTop: "30px",
        }}
      >

        <div
          style={{
            width: `${progreso}%`,
            backgroundColor: "#2563eb",
            height: "12px",
            borderRadius: "10px",
          }}
        />

      </div>

      {/* CARD */}

      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "25px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
          marginTop: "40px",
        }}
      >

        <h2>
          Pregunta {indice + 1} de {preguntas.length}
        </h2>

        <p
          style={{
            fontSize: "24px",
            marginTop: "25px",
            lineHeight: "1.5",
          }}
        >
          {preguntaActual.pregunta}
        </p>

        {/* OPCIONES */}

        <div
          style={{
            display: "grid",
            gap: "18px",
            marginTop: "35px",
          }}
        >

          {preguntaActual.opciones.map((opcion) => (

            <button
              key={opcion}

              onClick={() =>
                seleccionarRespuesta(opcion)
              }

              disabled={respuesta !== ""}

              style={{
                padding: "18px",
                borderRadius: "14px",
                border: "none",
                cursor: "pointer",

                backgroundColor:
                  respuesta === opcion
                    ? opcion === preguntaActual.correcta
                      ? "#22c55e"
                      : "#ef4444"
                    : "#2563eb",

                color: "white",

                fontSize: "17px",

                transition: "0.3s",
              }}
            >
              {opcion}
            </button>

          ))}

        </div>

        {/* BOTÓN */}

        {respuesta && (

          <div
            style={{
              marginTop: "35px",
              textAlign: "center",
            }}
          >

            <button
              onClick={siguientePregunta}

              style={{
                backgroundColor: "#111827",
                color: "white",
                padding: "16px 35px",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Siguiente Pregunta →
            </button>

          </div>

        )}

      </div>

    </div>
  );
}
