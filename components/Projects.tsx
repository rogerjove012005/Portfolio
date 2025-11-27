'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'Complete e-commerce platform with shopping cart, payment system and admin panel.',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://via.placeholder.com/600x400',
  },
  {
    title: 'Task Management App',
    description:
      'Task management application with real-time collaboration, notifications and productivity analytics.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://via.placeholder.com/600x400',
  },
  {
    title: 'Social Media Dashboard',
    description:
      'Analytical dashboard for social networks with real-time metrics, interactive charts and custom reports.',
    technologies: ['Next.js', 'Python', 'PostgreSQL', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://via.placeholder.com/600x400',
  },
  {
    title: 'Weather App',
    description:
      'Weather application with detailed forecasts, interactive maps and custom alerts.',
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
    <section id="projects" ref={ref} className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-sm md:text-base text-primary-400 font-semibold tracking-wider uppercase glass-blue px-4 py-2 rounded-full mb-4 border border-primary-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Portfolio
          </motion.span>
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            My <span className="gradient-text-blue">Projects</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-blue mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative glass rounded-2xl overflow-hidden border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
              whileHover={{ y: -15, borderColor: 'rgba(59, 130, 246, 0.3)' }}
            >
              <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative h-64 bg-gradient-blue overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    className="text-white text-6xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  >
                    🚀
                  </motion.span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="glass-strong px-3 py-1 rounded-full text-xs text-white font-semibold border border-white/20">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="relative p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="glass-blue px-3 py-1 text-primary-300 rounded-full text-xs font-medium border border-primary-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 glass px-4 py-2 rounded-lg text-white/70 hover:text-white transition-all group/link border border-white/10"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="group-hover/link:rotate-12 transition-transform" />
                    <span className="font-medium">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-blue px-4 py-2 rounded-lg text-white font-medium transition-all group/link shadow-lg shadow-primary-500/20"
                    whileHover={{ scale: 1.05, x: 5, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="group-hover/link:rotate-12 transition-transform" />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

