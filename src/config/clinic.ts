export const clinic = {
  name: "Clínica Esther Fernández",
  logo: "/images/logo.png",
  tagline: "Fisioterapia de confianza en Ciudad Real",
  description: "Clínica Esther Fernández es tu centro de fisioterapia de referencia en Ciudad Real, con 5 estrellas en Google y 89 reseñas que avalan nuestro trabajo. Ofrecemos tratamientos personalizados de fisioterapia manual, deportiva, rehabilitación y suelo pélvico con la última tecnología. Nuestro equipo de profesionales combina técnicas avanzadas con un trato cercano y humano para garantizar tu completa recuperación.",
  colors: {
    primary: "#b79774",
    secondary: "#251915",
    accent: "#251915",
    neutral: "#f9f7f4"
  },
  phone: "647 66 78 80",
  whatsapp: "+34647667880",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "C. Fray Juan Cobo, 22, 13600 Alcázar de San Juan, Ciudad Real, España",
    city: "Ciudad Real",
    province: "Toledo",
    postalCode: "13600",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=5648096558374134815&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Cl%C3%ADnica%20Esther%20Fern%C3%A1ndez%20%4039.3897%2C-3.21602&z=16&output=embed",
  coordinates: {
    lat: 39.3897,
    lng: -3.21602
  },
  schedule: [
    {
      days: "lunes",
      hours: "15:00–21:00"
    },
    {
      days: "martes - viernes",
      hours: "15:00–20:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 89,
    url: "https://maps.google.com/?cid=5648096558374134815&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Rocio Villanueva",
        rating: 5,
        text: "Un placer volver a ponerme en las grandísimas manos de Miguel y encantada con Esther, que aunque no la conozco personalmente, siempre ha gestionado mis citas de una manera amable, cercana y empática. Totalmente recomendable. ¡Gracias!",
        date: "Hace 6 meses"
      },
      {
        author: "Maria Amparo L.",
        rating: 5,
        text: "Trato de calidad, muy profesional y cercano. Tanto Esther como Marina un 10.\nLa clínica con la última tecnología y muy agradable. Gracias a las dos.",
        date: "Hace 4 meses"
      },
      {
        author: "Vicky Quiñones",
        rating: 5,
        text: "Maaaaaravilloso!!! Como nueva y el trato espectacular! Grande profesional gran persona y graaaaande en general!! 😘😘😘🤗🤗🤗",
        date: "Hace 7 meses"
      },
      {
        author: "Elisa Garcia",
        rating: 5,
        text: "Muy profesionales y muy agradables. El trato es muy cercano y las instalaciones son fantásticas.",
        date: "Hace 4 meses"
      },
      {
        author: "Francisco Santiago Lopez Lopez",
        rating: 5,
        text: "Buen@s profesionales y buena atención.",
        date: "Hace 1 mes"
      }
    ]
  },
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual",
      description: "Técnicas manuales especializadas aplicadas por fisioterapeutas expertos para aliviar el dolor y recuperar la movilidad. Tratamos cada caso de forma personalizada, identificando el origen de tu molestia para ofrecerte soluciones efectivas y duraderas.",
      benefits: [
        "Alivio inmediato del dolor muscular y articular",
        "Mejora de la movilidad y flexibilidad",
        "Tratamiento personalizado según tu lesión"
      ],
      icon: "Hand"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Especialistas en recuperación y prevención de lesiones deportivas. Aplicamos protocolos específicos para cada disciplina deportiva, ayudándote a volver a tu actividad en el menor tiempo posible y con garantías de recuperación completa.",
      benefits: [
        "Recuperación acelerada de lesiones deportivas",
        "Prevención de recaídas y nuevas lesiones",
        "Planes adaptados a tu deporte y objetivos"
      ],
      icon: "Dumbbell"
    },
    {
      id: "rehabilitacion",
      name: "Rehabilitación",
      description: "Programas de rehabilitación diseñados específicamente para tu lesión o cirugía. Seguimiento continuo y progresivo para recuperar la funcionalidad completa, con ejercicios terapéuticos y técnicas avanzadas que aceleran tu vuelta a la normalidad.",
      benefits: [
        "Recuperación funcional completa",
        "Seguimiento personalizado en cada fase",
        "Ejercicios adaptados a tu evolución"
      ],
      icon: "Activity"
    },
    {
      id: "puncion-seca",
      name: "Punción Seca",
      description: "Técnica avanzada para el tratamiento de puntos gatillo miofasciales que causan dolor crónico y contracturas. Eliminamos la fuente del dolor de forma precisa y efectiva, proporcionando alivio duradero donde otros tratamientos no llegan.",
      benefits: [
        "Eliminación de contracturas persistentes",
        "Alivio del dolor crónico muscular",
        "Resultados rápidos y duraderos"
      ],
      icon: "Target"
    },
    {
      id: "electroterapia",
      name: "Electroterapia",
      description: "Disponemos de la última tecnología en equipos de electroterapia para acelerar tu recuperación. Utilizamos corrientes terapéuticas específicas para cada patología, complementando el tratamiento manual con tecnología de vanguardia.",
      benefits: [
        "Aceleración del proceso de recuperación",
        "Reducción de inflamación y dolor",
        "Tecnología de última generación"
      ],
      icon: "Zap"
    },
    {
      id: "suelo-pelvico",
      name: "Suelo Pélvico",
      description: "Tratamiento especializado para disfunciones del suelo pélvico en hombres y mujeres. Abordamos con profesionalidad y discreción problemas de incontinencia, dolor pélvico, postparto y otras patologías relacionadas con esta zona tan importante.",
      benefits: [
        "Tratamiento discreto y profesional",
        "Mejora de la calidad de vida",
        "Atención especializada y personalizada"
      ],
      icon: "Heart"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con nosotros",
      description: "Llama al 647 66 78 80 o escríbenos por WhatsApp. Esther gestionará tu cita de forma amable y cercana, buscando el mejor horario para ti."
    },
    {
      step: 2,
      title: "Valoración inicial personalizada",
      description: "Nuestros fisioterapeutas evaluarán tu estado físico en profundidad y diseñarán un plan de tratamiento específico para tu lesión o dolencia."
    },
    {
      step: 3,
      title: "Tratamiento profesional",
      description: "Aplicamos las técnicas más adecuadas combinando terapia manual y la última tecnología en nuestras modernas instalaciones para tu máxima comodidad."
    },
    {
      step: 4,
      title: "Seguimiento hasta tu recuperación",
      description: "Te acompañamos en todo el proceso con seguimiento continuo, ajustando el tratamiento según tu evolución hasta que estés completamente recuperado."
    }
  ],
  whyUs: [
    {
      title: "Excelencia avalada por nuestros pacientes",
      description: "Con 5 estrellas en Google y 89 reseñas reales, somos la clínica de fisioterapia mejor valorada de Ciudad Real. Nuestros pacientes destacan nuestra profesionalidad, el trato cercano y los resultados obtenidos.",
      icon: "Award"
    },
    {
      title: "Equipo profesional y cercano",
      description: "Nuestros fisioterapeutas, como Miguel, Esther y Marina, combinan amplia experiencia y formación especializada con un trato humano y empático. Te sentirás en buenas manos desde el primer momento.",
      icon: "Users"
    },
    {
      title: "Última tecnología y técnicas avanzadas",
      description: "Disponemos de equipos de última generación y aplicamos las técnicas más avanzadas en fisioterapia. Nuestras instalaciones modernas y agradables están diseñadas para tu máxima comodidad durante el tratamiento.",
      icon: "Zap"
    },
    {
      title: "Atención personalizada y seguimiento continuo",
      description: "Desde la gestión de tu cita hasta tu recuperación completa, te acompañamos en todo el proceso. Diseñamos planes de tratamiento específicos para ti y ajustamos cada sesión según tu evolución particular.",
      icon: "Heart"
    }
  ],
  team: [
    {
      name: "Miguel",
      role: "Fisioterapeuta",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Clínica Esther Fernández nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    },
    {
      name: "Esther",
      role: "Fisioterapeuta y Gestión",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Clínica Esther Fernández nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    },
    {
      name: "Marina",
      role: "Fisioterapeuta",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Clínica Esther Fernández nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "Clínica Esther Fernández - Imagen 1"
    }
  ],
  faq: [
    {
      question: "¿Qué tratamientos ofrece la Clínica Esther Fernández?",
      answer: "En Clínica Esther Fernández ofrecemos fisioterapia manual, fisioterapia deportiva, rehabilitación, punción seca, electroterapia y tratamiento de suelo pélvico. Contamos con la última tecnología y un equipo de profesionales expertos que personalizan cada tratamiento según tus necesidades específicas. Nuestras 89 reseñas de 5 estrellas en Google avalan la calidad de nuestros servicios."
    },
    {
      question: "¿Cómo puedo solicitar una cita?",
      answer: "Puedes solicitar tu cita llamando directamente al 647 66 78 80 o enviándonos un mensaje por WhatsApp al mismo número. Esther te atenderá de forma amable y cercana, gestionando tu cita de manera rápida y eficiente. Buscamos siempre el horario que mejor se adapte a tu disponibilidad."
    },
    {
      question: "¿Cuántas sesiones necesitaré?",
      answer: "El número de sesiones depende de tu lesión o dolencia específica. En la primera consulta realizamos una valoración completa y te explicamos el plan de tratamiento recomendado, incluyendo una estimación de sesiones. Nuestro objetivo es tu recuperación completa en el menor tiempo posible, con seguimiento personalizado en cada fase del tratamiento."
    },
    {
      question: "¿Tratáis lesiones deportivas?",
      answer: "Sí, la fisioterapia deportiva es una de nuestras especialidades en Clínica Esther Fernández. Tratamos todo tipo de lesiones deportivas con protocolos específicos para cada disciplina, ayudándote a recuperarte completamente y prevenir futuras lesiones. Aplicamos técnicas avanzadas combinadas con tecnología de última generación para acelerar tu vuelta a la actividad deportiva."
    },
    {
      question: "¿Qué es la punción seca y para qué sirve?",
      answer: "La punción seca es una técnica avanzada que utilizamos en Clínica Esther Fernández para tratar puntos gatillo miofasciales que causan dolor crónico y contracturas musculares persistentes. Es especialmente efectiva cuando otros tratamientos no han dado resultado, proporcionando alivio duradero del dolor. Nuestros fisioterapeutas están especializados en esta técnica y la aplican de forma precisa y segura."
    },
    {
      question: "¿Cómo son las instalaciones de la clínica?",
      answer: "Nuestras instalaciones son modernas, agradables y están equipadas con la última tecnología en fisioterapia. Como destacan nuestros pacientes en sus reseñas, la clínica es muy cómoda y cuenta con equipos de vanguardia que nos permiten ofrecer los tratamientos más avanzados. Hemos diseñado cada espacio pensando en tu comodidad y en crear un ambiente profesional pero acogedor."
    },
    {
      question: "¿Qué opinan los pacientes de la clínica?",
      answer: "Clínica Esther Fernández tiene una valoración de 5 estrellas en Google con 89 reseñas. Nuestros pacientes destacan especialmente la profesionalidad del equipo, el trato cercano y humano, la calidad de las instalaciones y los resultados obtenidos. Muchos resaltan la combinación de experiencia técnica con empatía y cercanía que caracteriza nuestro trabajo."
    },
    {
      question: "¿Ofrecéis tratamiento de suelo pélvico?",
      answer: "Sí, en Clínica Esther Fernández ofrecemos tratamiento especializado de suelo pélvico tanto para hombres como para mujeres. Abordamos con profesionalidad y discreción problemas de incontinencia, dolor pélvico, recuperación postparto y otras disfunciones relacionadas. Nuestro equipo está específicamente formado en esta área tan delicada e importante para la calidad de vida."
    }
  ],
  seo: {
    titleTemplate: "%s | Clínica Esther Fernández",
    defaultTitle: "Clínica Esther Fernández | Fisioterapia en Ciudad Real",
    defaultDescription: "Fisioterapia en Ciudad Real ⭐ 5 estrellas en Google. Tratamientos personalizados: fisioterapia manual, deportiva, suelo pélvico. Pide cita: 647 66 78 80",
    keywords: [
      "fisioterapia Ciudad Real",
      "Clínica Esther Fernández",
      "fisioterapeuta Ciudad Real",
      "fisioterapia deportiva Ciudad Real",
      "punción seca Ciudad Real",
      "rehabilitación Ciudad Real",
      "suelo pélvico Ciudad Real",
      "fisioterapia manual Ciudad Real",
      "mejor fisioterapeuta Ciudad Real",
      "clínica fisioterapia Ciudad Real",
      "electroterapia Ciudad Real",
      "fisioterapia Toledo"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Clínica Esther Fernández",
    cif: "",
    registeredAddress: "C. Fray Juan Cobo, 22, 13600 Alcázar de San Juan, Ciudad Real, España, Ciudad Real, Toledo"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Ciudad Real"
  ],
  heroDescription: "En Clínica Esther Fernández encontrarás fisioterapeutas expertos que combinan profesionalidad con cercanía. Utilizamos las técnicas más avanzadas y la última tecnología en instalaciones modernas y agradables para que te sientas como nuevo desde la primera sesión.",
  specialty: "Fisioterapia Personalizada",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para recuperar tu bienestar?",
  ctaDescription: "Solicita tu cita de valoración y descubre por qué somos la clínica mejor valorada de Ciudad Real. Te atenderemos con la profesionalidad y cercanía que nos caracteriza.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
