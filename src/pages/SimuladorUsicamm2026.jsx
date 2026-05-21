import { useState, useEffect } from "react";
import { preguntasUsicamm } from "../data/preguntasUsicamm";

export default function SimuladorUsicamm2026() {

  // ESTADOS

  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState("");

  const [examenIniciado, setExamenIniciado] =
    useState(false);

  const [preguntas, setPreguntas] = useState([]);

  const [indice, setIndice] = useState(0);

  const [puntaje, setPuntaje] = useState(0);

  const [respuesta, setRespuesta] = useState("");

  const [finalizado, setFinalizado] =
    useState(false);

  const [tiempo, setTiempo] = useState(300);

  const [opcionesMezcladas, setOpcionesMezcladas] =
    useState([]);

  // CATEGORÍAS

  const categorias = [
  "Nueva Escuela Mexicana",
  "Evaluación Formativa",
  "Inclusión y Diversidad",
  "Derechos y Legislación",
  "Convivencia y Cultura de Paz",
  "Planeación Didáctica",
  "Desarrollo y Aprendizaje",
  "Seguridad Escolar",
];

  // INICIAR EXAMEN

  function iniciarExamen() {

    if (!categoriaSeleccionada) return;

    const filtradas = preguntasUsicamm.filter(
      (pregunta) =>
        pregunta.categoria === categoriaSeleccionada
    );

    const mezcladas = [...filtradas].sort(
      () => Math.random() - 0.5
    );

    setPreguntas(mezcladas);

    setExamenIniciado(true);
  }

  // TIMER

  useEffect(() => {

    if (
      examenIniciado &&
      tiempo > 0 &&
      !finalizado
    ) {

      const intervalo = setInterval(() => {

        setTiempo((prev) => prev - 1);

      }, 1000);

      return () => clearInterval(intervalo);
    }

    if (tiempo === 0) {

      setFinalizado(true);
    }

  }, [tiempo, finalizado, examenIniciado]);

  // PREGUNTA ACTUAL

  const preguntaActual =
    preguntas[indice];

  // MEZCLAR OPCIONES SOLO UNA VEZ

  useEffect(() => {

    if (preguntaActual) {

      const mezcladas =
        [...preguntaActual.opciones].sort(
          () => Math.random() - 0.5
        );

      setOpcionesMezcladas(mezcladas);
    }

  }, [indice, preguntaActual]);

  // VALIDACIÓN

  if (
    examenIniciado &&
    preguntas.length > 0 &&
    !preguntaActual
  ) {
    return null;
  }

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

  // FORMATO TIMER

  const minutos =
    Math.floor(tiempo / 60);

  const segundos =
    tiempo % 60;

  // PANTALLA INICIAL

  if (!examenIniciado) {

    return (

      <div
        style={{
          padding: "40px",
          fontFamily: "Arial",
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >

        <h1
          style={{
            color: "#1e3a8a",
          }}
        >
          Simulador USICAMM 2026
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
          }}
        >
          Selecciona una categoría para iniciar el examen.
        </p>

        <div
          style={{
            display: "grid",
            gap: "15px",
            marginTop: "40px",
          }}
        >

          {categorias.map((categoria) => (

            <button
              key={categoria}

              onClick={() =>
                setCategoriaSeleccionada(categoria)
              }

              style={{
                padding: "18px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",

                backgroundColor:
                  categoriaSeleccionada === categoria
                    ? "#1e3a8a"
                    : "#2563eb",

                color: "white",

                fontSize: "16px",
              }}
            >
              {categoria}
            </button>

          ))}

        </div>

        <button
          onClick={iniciarExamen}

          style={{
            marginTop: "40px",
            backgroundColor: "#111827",
            color: "white",
            padding: "18px 40px",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Iniciar Examen 🚀
        </button>

      </div>
    );
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

  // EXAMEN

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

      <h3
        style={{
          textAlign: "center",
          marginTop: "10px",
          color: "#2563eb",
        }}
      >
        Categoría:
        {" "}
        {categoriaSeleccionada}
      </h3>

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
          boxShadow:
            "0 6px 18px rgba(0,0,0,0.12)",

          marginTop: "40px",
        }}
      >

        <h2>
          Pregunta {indice + 1}
          {" "}
          de
          {" "}
          {preguntas.length}
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

          {opcionesMezcladas.map((opcion) => (

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
                    ? opcion ===
                      preguntaActual.correcta
                      ? "#22c55e"
                      : "#ef4444"
                    : "#2563eb",

                color: "white",

                fontSize: "17px",
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
