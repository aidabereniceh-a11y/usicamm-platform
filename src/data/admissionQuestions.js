const admissionQuestions = [

  {
    topic: 'Zona de desarrollo próximo',
    difficulty: 'Media',
    question:
      '¿Cuál tiene tres implicaciones importantes para la enseñanza-aprendizaje: cómo ayudar al niño a cumplir una tarea, cómo evaluar a los niños y cómo determinar lo más adecuado para el desarrollo?',
    options: {
      A: 'El lenguaje',
      B: 'La zona de desarrollo próximo',
      C: 'Las herramientas de la mente'
    },
    correct: 'B',
    explanation:
      'La zona de desarrollo próximo (ZDP), concepto de Vygotsky, define el espacio entre lo que el niño puede hacer solo y lo que puede lograr con ayuda.',
    legalBasis: [
      'Teoría histórico-cultural de Vygotsky'
    ]
  },

  {
    topic: 'Campos formativos',
    difficulty: 'Media',
    question:
      '¿Qué se basa en la relación entre los objetos de conocimiento que lo integran y los sujetos que participan en su acercamiento a través de la enseñanza y del aprendizaje?',
    options: {
      A: 'Los contenidos',
      B: 'Las fases de aprendizaje',
      C: 'Los campos formativos'
    },
    correct: 'C',
    explanation:
      'Los campos formativos organizan y articulan los saberes considerando tanto los objetos de conocimiento como los sujetos que aprenden.',
    legalBasis: [
      'Plan de Estudios 2022'
    ]
  },

  {
    topic: 'Actividad conductora',
    difficulty: 'Media',
    question:
      '¿Qué considera los tipos de interacción del niño y el medio ambiente social que conducen a logros en el desarrollo?',
    options: {
      A: 'El lenguaje',
      B: 'Actividad conductora',
      C: 'La zona de desarrollo próximo'
    },
    correct: 'B',
    explanation:
      'La actividad conductora describe las interacciones sociales que el niño establece con su entorno y que son determinantes para su desarrollo.',
    legalBasis: [
      'Teoría histórico-cultural'
    ]
  },

  {
    topic: 'Convivencia escolar',
    difficulty: 'Media',
    question:
      'En la escuela Adolfo López Mateos, alumnos manifiestan temor de asistir a clases, bajos resultados académicos y clima de estrés. ¿Qué indican estas características?',
    options: {
      A: 'Una convivencia inadecuada',
      B: 'Acoso escolar y maltrato',
      C: 'Niveles de cortisol altos en la comunidad escolar'
    },
    correct: 'A',
    explanation:
      'Los indicadores muestran una problemática amplia de convivencia escolar deteriorada.',
    legalBasis: [
      'Programa Nacional de Convivencia Escolar'
    ]
  },

  {
    topic: 'Campos formativos',
    difficulty: 'Baja',
    question:
      'Completa la frase: "Los _____ integran los contenidos nacionales que se busca promover durante el trayecto por la educación básica."',
    options: {
      A: 'PDA',
      B: 'Campos formativos',
      C: 'Ejes articuladores'
    },
    correct: 'B',
    explanation:
      'Los campos formativos son las grandes organizaciones de contenidos del Plan de Estudios 2022.',
    legalBasis: [
      'Plan de Estudios 2022'
    ]
  },

  {
    topic: 'Interculturalidad crítica',
    difficulty: 'Alta',
    question:
      '¿Qué eje articulador posibilita el desarrollo de subjetividades sensibles ante la violación de derechos, la violencia y la discriminación por clase, discapacidad, sexo, etnia o género?',
    options: {
      A: 'Interculturalidad crítica',
      B: 'Inclusión',
      C: 'Igualdad de género'
    },
    correct: 'A',
    explanation:
      'La interculturalidad crítica impulsa la acción contra toda forma de discriminación estructural.',
    legalBasis: [
      'Ejes articuladores NEM'
    ]
  },

  {
    topic: 'Pensamiento crítico',
    difficulty: 'Media',
    question:
      '¿Qué eje articulador busca que los estudiantes desarrollen su propio juicio y autonomía para pensar por sí mismos?',
    options: {
      A: 'Pensamiento crítico',
      B: 'Autonomía para el aprendizaje',
      C: 'Autoevaluación del aprendizaje'
    },
    correct: 'A',
    explanation:
      'El pensamiento crítico desarrolla la capacidad de analizar y formar juicios propios.',
    legalBasis: [
      'Nueva Escuela Mexicana'
    ]
  },

  {
    topic: 'Derecho de prioridad',
    difficulty: 'Media',
    question:
      'La maestra Karen organiza un simulacro de incendios y comunica que ante cualquier incidente primero se debe atender a las niñas y niños. ¿A qué derecho hace referencia?',
    options: {
      A: 'El derecho a la protección física',
      B: 'El derecho de prioridad',
      C: 'El derecho a la salud'
    },
    correct: 'B',
    explanation:
      'El derecho de prioridad establece que niñas y niños deben ser atendidos primero en situaciones de riesgo.',
    legalBasis: [
      'Ley General de los Derechos de Niñas, Niños y Adolescentes'
    ]
  },

  {
    topic: 'Aprendizaje servicio',
    difficulty: 'Media',
    question:
      'El profesor Mateo desarrolla con sus estudiantes un proyecto que busca atender una problemática de la comunidad mientras aprenden. ¿Qué tipo de proyecto emplea?',
    options: {
      A: 'Aprendizaje servicio',
      B: 'Aprendizaje basado en problemáticas',
      C: 'Aprendizaje basado en indagación'
    },
    correct: 'A',
    explanation:
      'El aprendizaje servicio combina aprendizaje curricular con beneficio comunitario.',
    legalBasis: [
      'Metodologías activas NEM'
    ]
  },

  {
    topic: 'Derecho a la educación',
    difficulty: 'Media',
    question:
      '¿Cuál es el derecho que contribuye al conocimiento de los propios derechos, basado en un enfoque de derechos humanos e igualdad sustantiva?',
    options: {
      A: 'El derecho a la igualdad sustantiva',
      B: 'El derecho a la educación',
      C: 'El derecho a la identidad'
    },
    correct: 'B',
    explanation:
      'El derecho a la educación incluye formación en derechos humanos y respeto a la dignidad humana.',
    legalBasis: [
      'Artículo 3° Constitucional'
    ]
  },

  {
    topic: 'Interés superior de la niñez',
    difficulty: 'Media',
    question:
      '¿Qué debe considerarse de manera primordial en la toma de decisiones sobre una cuestión debatida que involucre a niñas, niños y adolescentes?',
    options: {
      A: 'El interés superior de la niñez',
      B: 'Sus costumbres y tradiciones',
      C: 'Su posición económica y social'
    },
    correct: 'A',
    explanation:
      'El interés superior de la niñez es el principio rector en cualquier decisión que involucre menores.',
    legalBasis: [
      'Convención sobre los Derechos del Niño'
    ]
  },

  {
    topic: 'Autonomía docente',
    difficulty: 'Media',
    question:
      'La mamá de Carla le pide a la maestra que implemente el método global para enseñar a leer. ¿Está obligada la maestra a hacerlo?',
    options: {
      A: 'Sí, debe hacerlo',
      B: 'No, los docentes tienen autonomía de cátedra',
      C: 'Sí, es obligación docente'
    },
    correct: 'B',
    explanation:
      'Los docentes tienen autonomía profesional para tomar decisiones pedagógicas fundamentadas.',
    legalBasis: [
      'Ley General de Educación'
    ]
  },

  {
    topic: 'Evaluación formativa',
    difficulty: 'Media',
    question:
      'El profesor Iván ajusta su clase al observar dificultades en matemáticas e introduce aprendizaje cooperativo. ¿Qué tipo de evaluación utiliza?',
    options: {
      A: 'Evaluación memorística',
      B: 'Evaluación sumativa',
      C: 'Evaluación formativa'
    },
    correct: 'C',
    explanation:
      'La evaluación formativa adapta la enseñanza según el progreso continuo del estudiante.',
    legalBasis: [
      'Evaluación formativa NEM'
    ]
  },

  {
    topic: 'Fases de aprendizaje',
    difficulty: 'Media',
    question:
      '¿Qué pone atención en la continuidad del proceso educativo a lo largo de la educación básica?',
    options: {
      A: 'Los procesos de desarrollo de aprendizaje',
      B: 'Los campos formativos',
      C: 'Las fases de aprendizaje'
    },
    correct: 'C',
    explanation:
      'Las fases organizan progresivamente los aprendizajes durante toda la educación básica.',
    legalBasis: [
      'Plan de Estudios 2022'
    ]
  },

  {
    topic: 'Evaluación integral',
    difficulty: 'Media',
    question:
      'Según el Acuerdo 10923, ¿qué elementos considera la evaluación integral?',
    options: {
      A: 'Actividades extraescolares',
      B: 'Solo exámenes finales',
      C: 'Conocimientos, habilidades y logro de objetivos'
    },
    correct: 'C',
    explanation:
      'La evaluación integral considera conocimientos, habilidades, destrezas y logro de objetivos.',
    legalBasis: [
      'Acuerdo 10923'
    ]
  },

  {
    topic: 'Métodos de evaluación',
    difficulty: 'Media',
    question:
      'Según el Acuerdo 10923, ¿qué método de evaluación debe emplearse?',
    options: {
      A: 'Solo trabajos escritos',
      B: 'Exámenes escritos únicamente',
      C: 'Observación sistemática y evidencias'
    },
    correct: 'C',
    explanation:
      'La evaluación debe incluir observación, participación y diversas evidencias.',
    legalBasis: [
      'Acuerdo 10923'
    ]
  },

  {
    topic: 'Educación equitativa',
    difficulty: 'Media',
    question:
      '¿Qué tipo de educación busca combatir desigualdades y respaldar a estudiantes en condiciones de vulnerabilidad?',
    options: {
      A: 'Educación de excelencia',
      B: 'Educación humanista',
      C: 'Educación equitativa'
    },
    correct: 'C',
    explanation:
      'La educación equitativa busca reducir desigualdades y garantizar inclusión.',
    legalBasis: [
      'Ley General de Educación'
    ]
  },

  {
    topic: 'Promoción escolar',
    difficulty: 'Baja',
    question:
      'Según el Acuerdo 10923, ¿qué criterio es necesario para la promoción de un alumno de primer grado?',
    options: {
      A: 'Promedio mínimo de 7',
      B: 'Haber cursado el grado',
      C: 'Promedio mínimo de 6'
    },
    correct: 'B',
    explanation:
      'En primer grado la promoción se otorga por haber cursado el grado.',
    legalBasis: [
      'Acuerdo 10923'
    ]
  },

  {
    topic: 'Portafolio de evidencias',
    difficulty: 'Media',
    question:
      '¿Cuál es una estrategia fundamentada en el enfoque de evaluación formativa?',
    options: {
      A: 'Resumen de tema',
      B: 'Revisión de cuaderno',
      C: 'Portafolio de evidencias'
    },
    correct: 'C',
    explanation:
      'El portafolio permite observar avances continuos y mejorar el aprendizaje.',
    legalBasis: [
      'Evaluación formativa'
    ]
  }

]

export default admissionQuestions