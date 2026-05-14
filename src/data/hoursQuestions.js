const hoursQuestions = [

  {
    topic: 'Protocolos escolares',
    difficulty: 'Alta',
    question:
      'En una escuela pública, un docente detecta a un alumno presuntamente comercializando sustancias ilegales dentro del plantel. ¿Cuál es el procedimiento correcto?',
    options: {
      A: 'Separar al alumno y decidir si informar a los padres',
      B: 'Informar de inmediato a las autoridades escolares y activar el protocolo legal',
      C: 'Resguardar las sustancias y esperar al Consejo Técnico'
    },
    correct: 'B',
    explanation:
      'Ante la presunción de un delito, el docente debe informar de inmediato a las autoridades escolares y activar el protocolo correspondiente.',
    legalBasis: [
      'Protocolos escolares SEP'
    ]
  },

  {
    topic: 'Ley General de Educación',
    difficulty: 'Media',
    question:
      '¿En qué artículo de la Ley General de Educación se establece la obligatoriedad de la educación básica y media superior?',
    options: {
      A: 'Artículo sexto',
      B: 'Artículo 14',
      C: 'Artículo 33'
    },
    correct: 'A',
    explanation:
      'El artículo sexto establece que la educación preescolar, primaria, secundaria y media superior son obligatorias.',
    legalBasis: [
      'Ley General de Educación'
    ]
  },

  {
    topic: 'Participación familiar',
    difficulty: 'Media',
    question:
      '¿Cuál es una obligación de madres, padres o tutores establecida en la Ley General de Educación?',
    options: {
      A: 'Decidir contenidos de asignaturas',
      B: 'Promover actividades físicas y deportivas',
      C: 'Modificar formas de evaluación'
    },
    correct: 'B',
    explanation:
      'La Ley General de Educación establece como obligación promover actividades físicas y recreativas.',
    legalBasis: [
      'Ley General de Educación'
    ]
  },

  {
    topic: 'Resolución de conflictos',
    difficulty: 'Media',
    question:
      'Dos docentes tienen un conflicto que afecta el ambiente laboral. ¿Qué acción debe realizarse primero?',
    options: {
      A: 'Solicitar propuestas escritas',
      B: 'Implementar mediación inmediata',
      C: 'Reconocer el conflicto y hablar de él'
    },
    correct: 'C',
    explanation:
      'Todo proceso de resolución comienza reconociendo el conflicto y generando diálogo.',
    legalBasis: [
      'Convivencia escolar'
    ]
  },

  {
    topic: 'Derecho de prioridad',
    difficulty: 'Media',
    question:
      'Durante una emergencia escolar, los paramédicos atienden primero a un alumno lesionado antes que a un adulto. ¿Qué derecho se aplica?',
    options: {
      A: 'Derecho a vivir en bienestar',
      B: 'Derecho a la salud',
      C: 'Derecho de prioridad'
    },
    correct: 'C',
    explanation:
      'Las niñas, niños y adolescentes deben recibir atención prioritaria en igualdad de condiciones.',
    legalBasis: [
      'Ley General de los Derechos de Niñas, Niños y Adolescentes'
    ]
  },

  {
    topic: 'Consejo Técnico Escolar',
    difficulty: 'Media',
    question:
      '¿Cuál es una función principal del Consejo Técnico Escolar?',
    options: {
      A: 'Tomar decisiones pedagógicas para mejorar aprendizajes',
      B: 'Resolver asuntos sindicales',
      C: 'Organizar actividades sociales'
    },
    correct: 'A',
    explanation:
      'El CTE toma decisiones pedagógicas orientadas al máximo logro de aprendizajes.',
    legalBasis: [
      'Lineamientos CTE'
    ]
  },

  {
    topic: 'Contención emocional',
    difficulty: 'Media',
    question:
      '¿Qué acción debe realizar un docente ante una situación de emergencia emocional?',
    options: {
      A: 'Pedir silencio y continuar actividades',
      B: 'Hacer contacto visual y hablar con tono tranquilo',
      C: 'Esperar indicaciones oficiales'
    },
    correct: 'B',
    explanation:
      'El contacto visual y la comunicación calmada brindan seguridad y contención emocional.',
    legalBasis: [
      'Primeros auxilios psicológicos'
    ]
  },

  {
    topic: 'Uso responsable de internet',
    difficulty: 'Media',
    question:
      '¿Qué estrategia promueve el uso responsable del internet y la identidad digital?',
    options: {
      A: 'Transmitir videos institucionales con supervisión docente',
      B: 'Compartir información personal libremente',
      C: 'Publicar sin supervisión'
    },
    correct: 'A',
    explanation:
      'Las actividades supervisadas desde medios institucionales favorecen seguridad digital.',
    legalBasis: [
      'Ciudadanía digital'
    ]
  },

  {
    topic: 'Protocolos de seguridad',
    difficulty: 'Alta',
    question:
      '¿Cuál es el orden correcto ante una situación de peligro en la escuela?',
    options: {
      A: 'Llamar al 911 y después reunir al grupo',
      B: 'Verificar al grupo, resguardarlo y llamar al 911',
      C: 'Evacuar inmediatamente'
    },
    correct: 'B',
    explanation:
      'Primero se verifica la seguridad del alumnado, luego se resguarda y finalmente se contacta a emergencias.',
    legalBasis: [
      'Protocolos escolares'
    ]
  },

  {
    topic: 'Acoso digital',
    difficulty: 'Media',
    question:
      'Una alumna informa recibir mensajes acosadores. ¿Qué debe hacer la docente?',
    options: {
      A: 'Pedirle que confronte al agresor',
      B: 'Investigar por cuenta propia',
      C: 'Notificar a la dirección escolar'
    },
    correct: 'C',
    explanation:
      'La docente debe activar el protocolo institucional y proteger a la alumna.',
    legalBasis: [
      'Protocolos SEP'
    ]
  },

  {
    topic: 'Interés superior de la niñez',
    difficulty: 'Alta',
    question:
      '¿Qué enfoque debe orientar decisiones escolares relacionadas con horarios y actividades?',
    options: {
      A: 'Bienestar integral del alumnado',
      B: 'Resultados estandarizados',
      C: 'Decisiones de adultos'
    },
    correct: 'A',
    explanation:
      'El interés superior de la niñez prioriza el bienestar físico, mental y social.',
    legalBasis: [
      'Derechos de niñas, niños y adolescentes'
    ]
  },

  {
    topic: 'Flexibilidad educativa',
    difficulty: 'Alta',
    question:
      '¿Qué estrategia responde mejor a contextos rurales con ausentismo por trabajo familiar?',
    options: {
      A: 'Aplicar sanciones estrictas',
      B: 'Diseñar modelos educativos flexibles',
      C: 'Excluir alumnos con faltas'
    },
    correct: 'B',
    explanation:
      'Los modelos flexibles garantizan acceso y permanencia escolar.',
    legalBasis: [
      'Artículo 3° Constitucional'
    ]
  },

  {
    topic: 'Comunicación escolar',
    difficulty: 'Media',
    question:
      '¿Qué estrategia mejora la comunicación con estudiantes tímidos?',
    options: {
      A: 'Participación obligatoria',
      B: 'Espacios de diálogo respetuoso',
      C: 'Opiniones únicamente escritas'
    },
    correct: 'B',
    explanation:
      'El diálogo seguro fortalece expresión y confianza.',
    legalBasis: [
      'Convivencia escolar'
    ]
  },

  {
    topic: 'Igualdad de género',
    difficulty: 'Media',
    question:
      '¿Qué busca el eje articulador Igualdad de Género?',
    options: {
      A: 'Eliminar barreras por estereotipos',
      B: 'Celebrar fechas conmemorativas',
      C: 'Aplicarse solo en Formación Cívica'
    },
    correct: 'A',
    explanation:
      'Busca eliminar desigualdades y prejuicios de género.',
    legalBasis: [
      'Plan de Estudios 2022'
    ]
  },

  {
    topic: 'Piaget',
    difficulty: 'Alta',
    question:
      '¿Qué teoría explica que adolescentes mayores resuelvan mejor problemas abstractos?',
    options: {
      A: 'Bandura',
      B: 'Piaget',
      C: 'Skinner'
    },
    correct: 'B',
    explanation:
      'Piaget explica el desarrollo del pensamiento abstracto en operaciones formales.',
    legalBasis: [
      'Teoría del desarrollo cognitivo'
    ]
  }

]

export default hoursQuestions