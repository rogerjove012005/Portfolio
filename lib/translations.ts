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
      tagline: 'Full Stack Developer',
      navAbout: 'About Me',
      navSkills: 'Skills',
      navProjects: 'Projects',
      navContact: 'Contact Me',
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
      education: 'Education',
      experience: 'Experience',
      languages: 'Languages',
      technologies: 'Technologies',
      current: 'Current',
      languageItems: [
        { name: 'Catalan', level: 'Native', flag: '🇪🇸' },
        { name: 'Spanish', level: 'Native', flag: '🇪🇸' },
        { name: 'English', level: 'C1 Advanced (2023)', flag: '🇬🇧' }
      ],
      experienceItems: [
        {
          period: 'Mar 2025 - Aug 2025',
          title: 'Testing QA Programmer',
          company: 'Indra',
          location: 'Barcelona, Spain',
          description: 'As a QA Testing Intern, I collaborated with the development team to ensure product quality through manual and automated testing. My work focused on identifying bugs, improving testing workflows, and supporting continuous integration processes.'
        },
        {
          period: 'Jun 2023 - Aug 2023',
          title: 'English Teacher at Summer Camp',
          company: 'Bekith',
          location: 'Lestonnac Barcelona, Spain',
          description: 'Monitor of a primary school class, in charge of preparing and developing all the activities of the camp. Supervision of the classroom and resolution of any incidents. Daily closure of activities and next day set up.'
        },
        {
          period: 'Jun 2022 - Jul 2022',
          title: 'Waiter',
          company: 'Nova Pasta',
          location: 'Llafranch, Spain',
          description: 'Attendance and service at the customers, cleaning the facilities and the equipment, daily closing of the restaurant.'
        }
      ],
      educationItems: [
        {
          period: 'Sep 2025 - Ongoing',
          title: "Master's in Machine Learning and BigData",
          institution: 'LaSalle Barcelona',
          description: 'Currently pursuing advanced studies in Machine Learning and Big Data'
        },
        {
          period: 'Sep 2023 - Jun 2025',
          title: 'CFGS Development of Multiplatform Applications',
          institution: 'LaSalle de Gràcia Barcelona',
          description: 'Currently studying application programming, with the aim of working professionally as a full-stack developer. Knowledge acquired: Java, PHP, SQL, Github, HTML, CSS, XML and Linux.'
        }
      ],
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
          title: 'Weightlifting Data Warehouse ETL Pipeline',
          description: 'Comprehensive ETL pipeline for building a dimensional data warehouse from weightlifting competition data. Transforms raw CSV data into a structured star schema using Pandas and PySpark, optimized for analytical queries.',
        },
        {
          title: 'Neural Network for Data Structure',
          description: 'Advanced neural network implementation for data structure analysis and optimization. Deep learning model designed to understand and predict data structure patterns and performance metrics. (On Going)',
        },
        {
          title: 'SaaS Platform with Laravel',
          description: 'Multi-tenant SaaS platform built with Laravel. Features include subscription management, billing, payment integration, admin panel, and API RESTful. Complete solution for managing multiple organizations with isolated data and configurations.',
        },
      ],
    },
    // Contact
    contact: {
      badge: "Let's Talk",
      title: 'Contact Me',
      titleHighlight: '',
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
      tagline: 'Desarrollador Full Stack',
      navAbout: 'Sobre Mí',
      navSkills: 'Habilidades',
      navProjects: 'Proyectos',
      navContact: 'Contáctame',
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
      education: 'Educación',
      experience: 'Experiencia',
      languages: 'Idiomas',
      technologies: 'Tecnologías',
      current: 'Actual',
      languageItems: [
        { name: 'Catalán', level: 'Nativo', flag: '🇪🇸' },
        { name: 'Español', level: 'Nativo', flag: '🇪🇸' },
        { name: 'Inglés', level: 'C1 Avanzado (2023)', flag: '🇬🇧' }
      ],
      experienceItems: [
        {
          period: 'Mar 2025 - Ago 2025',
          title: 'Programador Testing QA',
          company: 'Indra',
          location: 'Barcelona, España',
          description: 'Como becario de Testing QA, colaboré con el equipo de desarrollo para asegurar la calidad del producto mediante pruebas manuales y automatizadas. Mi trabajo se centró en identificar errores, mejorar los flujos de trabajo de pruebas y apoyar los procesos de integración continua.'
        },
        {
          period: 'Jun 2023 - Ago 2023',
          title: 'Profesor de Inglés en Campamento de Verano',
          company: 'Bekith',
          location: 'Lestonnac Barcelona, España',
          description: 'Monitor de una clase de educación primaria, encargado de preparar y desarrollar todas las actividades del campamento. Supervisión del aula y resolución de cualquier incidente. Cierre diario de actividades y preparación del día siguiente.'
        },
        {
          period: 'Jun 2022 - Jul 2022',
          title: 'Camarero',
          company: 'Nova Pasta',
          location: 'Llafranch, España',
          description: 'Atención y servicio a los clientes, limpieza de las instalaciones y del equipo, cierre diario del restaurante.'
        }
      ],
      educationItems: [
        {
          period: 'Sep 2025 - En curso',
          title: 'Máster en Machine Learning y BigData',
          institution: 'LaSalle Barcelona',
          description: 'Actualmente cursando estudios avanzados en Machine Learning y Big Data'
        },
        {
          period: 'Sep 2023 - Jun 2025',
          title: 'CFGS Desarrollo de Aplicaciones Multiplataforma',
          institution: 'LaSalle de Gràcia Barcelona',
          description: 'Actualmente estudiando programación de aplicaciones, con el objetivo de trabajar profesionalmente como desarrollador full-stack. Conocimientos adquiridos: Java, PHP, SQL, Github, HTML, CSS, XML y Linux.'
        }
      ],
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
          title: 'Weightlifting Data Warehouse ETL Pipeline',
          description: 'Pipeline ETL completo para construir un data warehouse dimensional a partir de datos de competiciones de halterofilia. Transforma datos CSV en bruto en un modelo de esquema estrella usando Pandas y PySpark, optimizado para consultas analíticas.',
        },
        {
          title: 'Red Neuronal para Estructura de Datos',
          description: 'Implementación avanzada de red neuronal para análisis y optimización de estructuras de datos. Modelo de deep learning diseñado para entender y predecir patrones y métricas de rendimiento de estructuras de datos. (En Construcción)',
        },
        {
          title: 'Plataforma SaaS con Laravel',
          description: 'Plataforma SaaS multi-tenant desarrollada con Laravel. Incluye gestión de suscripciones, facturación, integración de pagos, panel de administración y API RESTful. Solución completa para gestionar múltiples organizaciones con datos y configuraciones aisladas.',
        },
      ],
    },
    // Contact
    contact: {
      badge: 'Hablemos',
      title: 'Contáctame',
      titleHighlight: '',
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

