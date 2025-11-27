export type Language = 'en' | 'es'

export const translations = {
  en: {
    // Header
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    // Hero
    hero: {
      welcome: 'Welcome to my Portfolio',
      hi: "Hi, I'm",
      yourName: 'Your Name',
      fullStack: 'Full Stack',
      developer: 'Developer',
      description: 'Passionate about creating exceptional digital experiences and innovative solutions',
      viewProjects: 'View Projects',
      contact: 'Contact',
    },
    // About
    about: {
      badge: 'About Me',
      title: 'About',
      titleHighlight: 'Me',
      description1: "I'm a",
      description1Highlight: 'junior programmer',
      description1Rest: 'with many ambitions and eager to learn about everything related to tech applications. Passionate about technology and committed to keeping up with the latest trends.',
      description2: 'Curious, decisive, honest, and with a clear goal of developing myself as a professional. Currently pursuing a',
      description2Highlight: "Master's in Machine Learning and BigData",
      description2Rest: 'at LaSalle Barcelona, after completing the CFGS in Multiplatform Application Development. I\'m planning to study',
      description2Highlight2: 'Software Engineering',
      description2Rest2: 'to further enhance my skills and knowledge in the field.',
      location: 'Location',
      languages: 'Languages',
      technologies: 'Technologies',
    },
    // Skills
    skills: {
      badge: 'Technologies',
      title: 'Technical',
      titleHighlight: 'Skills',
    },
    // Projects
    projects: {
      badge: 'Portfolio',
      title: 'My',
      titleHighlight: 'Projects',
      code: 'Code',
      demo: 'Demo',
      featured: 'Featured',
      items: [
        {
          title: 'E-commerce Platform',
          description: 'Complete e-commerce platform with shopping cart, payment system and admin panel.',
        },
        {
          title: 'Task Management App',
          description: 'Task management application with real-time collaboration, notifications and productivity analytics.',
        },
        {
          title: 'Social Media Dashboard',
          description: 'Analytical dashboard for social networks with real-time metrics, interactive charts and custom reports.',
        },
        {
          title: 'Weather App',
          description: 'Weather application with detailed forecasts, interactive maps and custom alerts.',
        },
      ],
    },
    // Contact
    contact: {
      badge: "Let's Talk",
      title: 'Contact',
      titleHighlight: 'Me',
      contactInfo: 'Contact Information',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      message: 'Message',
      messagePlaceholder: 'Your message...',
      sendMessage: 'Send Message',
    },
    // Footer
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Made with',
      using: 'using Next.js and Tailwind CSS',
    },
  },
  es: {
    // Header
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    // Hero
    hero: {
      welcome: 'Bienvenido a mi Portfolio',
      hi: 'Hola, soy',
      yourName: 'Tu Nombre',
      fullStack: 'Desarrollador',
      developer: 'Full Stack',
      description: 'Apasionado por crear experiencias digitales excepcionales y soluciones innovadoras',
      viewProjects: 'Ver Proyectos',
      contact: 'Contactar',
    },
    // About
    about: {
      badge: 'Sobre Mí',
      title: 'Sobre',
      titleHighlight: 'Mí',
      description1: 'Soy un',
      description1Highlight: 'programador junior',
      description1Rest: 'con muchas ambiciones y ansioso por aprender sobre todo lo relacionado con aplicaciones tecnológicas. Apasionado por la tecnología y comprometido con mantenerme al día con las últimas tendencias.',
      description2: 'Curioso, decidido, honesto y con un objetivo claro de desarrollarme como profesional. Actualmente cursando un',
      description2Highlight: 'Máster en Machine Learning y BigData',
      description2Rest: 'en LaSalle Barcelona, después de completar el CFGS en Desarrollo de Aplicaciones Multiplataforma. Planeo estudiar',
      description2Highlight2: 'Ingeniería de Software',
      description2Rest2: 'para mejorar aún más mis habilidades y conocimientos en el campo.',
      location: 'Ubicación',
      languages: 'Idiomas',
      technologies: 'Tecnologías',
    },
    // Skills
    skills: {
      badge: 'Tecnologías',
      title: 'Habilidades',
      titleHighlight: 'Técnicas',
    },
    // Projects
    projects: {
      badge: 'Portfolio',
      title: 'Mis',
      titleHighlight: 'Proyectos',
      code: 'Código',
      demo: 'Demo',
      featured: 'Destacado',
      items: [
        {
          title: 'Plataforma E-commerce',
          description: 'Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos y panel de administración.',
        },
        {
          title: 'App de Gestión de Tareas',
          description: 'Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y análisis de productividad.',
        },
        {
          title: 'Dashboard de Redes Sociales',
          description: 'Dashboard analítico para redes sociales con métricas en tiempo real, gráficos interactivos y reportes personalizados.',
        },
        {
          title: 'App del Tiempo',
          description: 'Aplicación meteorológica con pronósticos detallados, mapas interactivos y alertas personalizadas.',
        },
      ],
    },
    // Contact
    contact: {
      badge: 'Hablemos',
      title: 'Contácta',
      titleHighlight: 'me',
      contactInfo: 'Información de Contacto',
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Email',
      emailPlaceholder: 'tu@email.com',
      message: 'Mensaje',
      messagePlaceholder: 'Tu mensaje...',
      sendMessage: 'Enviar Mensaje',
    },
    // Footer
    footer: {
      rights: 'Todos los derechos reservados.',
      madeWith: 'Hecho con',
      using: 'usando Next.js y Tailwind CSS',
    },
  },
}

export type Translations = typeof translations.en

