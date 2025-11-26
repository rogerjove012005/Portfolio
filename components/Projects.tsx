'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos y panel de administración.',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://via.placeholder.com/600x400',
  },
  {
    title: 'Task Management App',
    description:
      'Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y análisis de productividad.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://via.placeholder.com/600x400',
  },
  {
    title: 'Social Media Dashboard',
    description:
      'Dashboard analítico para redes sociales con métricas en tiempo real, gráficos interactivos y reportes personalizados.',
    technologies: ['Next.js', 'Python', 'PostgreSQL', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://via.placeholder.com/600x400',
  },
  {
    title: 'Weather App',
    description:
      'Aplicación meteorológica con pronósticos detallados, mapas interactivos y alertas personalizadas.',
    technologies: ['React', 'OpenWeather API', 'Leaflet', 'CSS3'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://via.placeholder.com/600x400',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" ref={ref} className="py-20 px-4 bg-gray-800/50">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Mis <span className="text-primary-400">Proyectos</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 bg-gradient-to-br from-primary-500 to-primary-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-4xl">🚀</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <FaGithub />
                    <span>Código</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

