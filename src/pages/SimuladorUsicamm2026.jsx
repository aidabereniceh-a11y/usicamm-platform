import { useState } from "react";

const preguntas = [
  {
    pregunta:
      "¿Qué significa USICAMM?",
    opciones: [
      "Unidad del Sistema para la Carrera de las Maestras y los Maestros",
      "Universidad del Sistema Educativo",
      "Unidad Superior de Educación",
      "Sistema Nacional Docente",
    ],
    correcta:
      "Unidad del Sistema para la Carrera de las Maestras y los Maestros",
  },

  {
    pregunta:
      "¿Qué modelo educativo impulsa actualmente México?",
    opciones: [
      "Nueva Escuela Mexicana",
      "Escuela Tradicional",
      "Modelo Europeo",
      "Sistema Internacional",
    ],
    correcta:
      "Nueva Escuela Mexicana",
  },

  {
    pregunta:
      "¿Cuál es un elemento clave de la Nueva Escuela Mexicana?",
    opciones: [
      "Inclusión",
      "Memorización",
      "Exámenes diarios",
      "Competencia extrema",
    ],
    correcta:
      "Inclusión",
  },
];

export default function SimuladorUsicamm2026() {

  const [indice, setIndice] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [respuesta, setRespuesta] = useState("");
  const [finalizado, setFinalizado] = useState(false);

  const preguntaActual = preguntas[indice];

  function seleccionarRespuesta(opcion) {

    setRespuesta(opcion);

    if (opcion === preguntaActual.correcta) {
      setPuntaje(puntaje + 1);
    }
  }

  function siguientePregunta() {

    if (indice + 1 < preguntas.length) {
      setIndice(indice + 1);
      setRespuesta("");
    } else {
      setFinalizado(true);
    }
  }

  if (finalizado) {
    return (
      <div
        style={{
          padding: "40px",
          fontFamily: "Arial",
          textAlign: "center",
        }}
      >
        <h1>Simulador Finalizado 🎉</h1>

        <h2>
          Tu puntaje: {puntaje} / {preguntas.length}
        </h2>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1>Simulador USICAMM 2026</h1>

      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          marginTop: "30px",
        }}
      >
        <h2>
          Pregunta {indice + 1}
        </h2>

        <p
          style={{
            fontSize: "20px",
            marginTop: "20px",
          }}
        >
          {preguntaActual.pregunta}
        </p>

        <div
          style={{
            display: "grid",
            gap: "15px",
            marginTop: "30px",
          }}
        >
          {preguntaActual.opciones.map((opcion) => (

            <button
              key={opcion}
              onClick={() => seleccionarRespuesta(opcion)}
              disabled={respuesta !== ""}
              style={{
                padding: "15px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                backgroundColor:
                  respuesta === opcion
                    ? opcion === preguntaActual.correcta
                      ? "#22c55e"
                      : "#ef4444"
                    : "#2563eb",
                color: "white",
                fontSize: "16px",
              }}
            >
              {opcion}
            </button>

          ))}
        </div>

        {respuesta && (

          <div style={{ marginTop: "30px" }}>

            <button
              onClick={siguientePregunta}
              style={{
                backgroundColor: "#111827",
                color: "white",
                padding: "15px 30px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Siguiente Pregunta
            </button>

          </div>

        )}
      </div>
    </div>
  );
}
