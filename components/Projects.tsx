'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useLanguage } from '@/contexts/LanguageContext'

const technologies = [
  ['Python', 'Pandas', 'PySpark', 'SQLite', 'Docker', 'Jupyter'],
  ['Python', 'TensorFlow', 'PyTorch', 'NumPy', 'Keras', 'Jupyter'],
  ['Laravel', 'PHP', 'MySQL', 'Blade', 'Stripe', 'Docker'],
]

export default function Projects() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const projects = t.projects.items.map((item, index) => ({
    ...item,
    technologies: technologies[index],
    github: index === 0 
      ? 'https://github.com/rogerjove012005/gym-lifters-data-warehouse_CSV.git'
      : index === 2
      ? 'https://github.com/rogerjove012005/Plataforma_Saas_Laravel.git'
      : 'https://github.com',
    demo: index === 0
      ? 'https://github.com/rogerjove012005/gym-lifters-data-warehouse_CSV'
      : index === 2
      ? 'https://github.com/rogerjove012005/Plataforma_Saas_Laravel'
      : 'https://demo.com',
    image: index === 0
      ? 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80'
      : index === 1
      ? 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop&q=80'
      : index === 2
      ? 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&q=80'
      : 'https://via.placeholder.com/600x400',
    isOngoing: index === 1,
  }))

  return (
    <section id="projects" ref={ref} className="py-20 px-4 relative bg-black">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-sm md:text-base text-white/40 font-extralight tracking-[0.3em] uppercase px-4 py-2 mb-4 border border-white/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {t.projects.badge}
          </motion.span>
          <motion.h2
            className="text-4xl md:text-6xl font-extralight text-white/90 mb-4 tracking-[0.05em]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            {t.projects.title} <span className="text-white">{t.projects.titleHighlight}</span>
          </motion.h2>
          <motion.div
            className="w-24 h-px bg-white/30 mx-auto"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative rounded-lg overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-200 bg-black/30"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              style={{ willChange: 'transform' }}
            >
              {/* Construction Tape Effect - X Pattern */}
              {project.isOngoing && (
                <>
                  <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
                    {/* First diagonal tape (top-left to bottom-right) */}
                    <div 
                      className="absolute"
                      style={{
                        top: '50%',
                        left: '50%',
                        width: '141.42%',
                        height: '11px',
                        transform: 'translate(-50%, -50%) rotate(45deg)',
                        transformOrigin: 'center center',
                        backgroundImage: `repeating-linear-gradient(
                          90deg,
                          #FFD700 0px,
                          #FFD700 12px,
                          #000 12px,
                          #000 24px
                        )`,
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
                      }}
                    />
                    {/* Second diagonal tape (top-right to bottom-left) - perpendicular */}
                    <div 
                      className="absolute"
                      style={{
                        top: '50%',
                        left: '50%',
                        width: '141.42%',
                        height: '15px',
                        transform: 'translate(-50%, -50%) rotate(-45deg)',
                        transformOrigin: 'center center',
                        backgroundImage: `repeating-linear-gradient(
                          90deg,
                          #FFD700 0px,
                          #FFD700 12px,
                          #000 12px,
                          #000 24px
                        )`,
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
                      }}
                    />
                    {/* Text overlay */}
                    <div className="absolute top-4 left-0 right-0 flex items-center justify-center z-10">
                      <motion.div
                        className="px-4 py-2 bg-yellow-500/95 text-black font-bold text-xs md:text-sm tracking-wider uppercase shadow-lg border-2 border-black/30"
                        animate={{ 
                          boxShadow: [
                            '0 0 0px rgba(255, 215, 0, 0.5)',
                            '0 0 20px rgba(255, 215, 0, 0.8)',
                            '0 0 0px rgba(255, 215, 0, 0.5)',
                          ]
                        }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        🚧 ON GOING 🚧
                      </motion.div>
                    </div>
                  </div>
                </>
              )}
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              
              <div className="relative h-64 bg-black/50 overflow-hidden border-b border-white/5">
                {project.image && project.image !== 'https://via.placeholder.com/600x400' ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                {!project.image || project.image === 'https://via.placeholder.com/600x400' ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      className="text-white/30 text-6xl"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                    >
                      🚀
                    </motion.span>
                  </div>
                ) : null}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs text-white/60 font-extralight tracking-wider uppercase border border-white/10 bg-black/30">
                    {t.projects.featured}
                  </span>
                </div>
              </div>
              
              <div className="relative p-6">
                <h3 className="text-2xl font-extralight text-white/90 mb-3 group-hover:text-white transition-colors duration-200 tracking-[0.05em]">
                  {project.title}
                </h3>
                <p className="text-white/50 mb-6 leading-relaxed text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-white/50 rounded-full text-xs font-extralight tracking-wider uppercase border border-white/10 bg-black/30"
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
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg text-white/60 hover:text-white/90 transition-all group/link border border-white/10 bg-black/30"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ willChange: 'transform' }}
                  >
                    <FaGithub className="group-hover/link:scale-110 transition-transform duration-200" />
                    <span className="font-extralight text-sm tracking-wider uppercase">{t.projects.code}</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg text-white/80 hover:text-white transition-all group/link border border-white/20 bg-white/[0.02]"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ willChange: 'transform' }}
                  >
                    <FaExternalLinkAlt className="group-hover/link:scale-110 transition-transform duration-200" />
                    <span className="font-extralight text-sm tracking-wider uppercase">{t.projects.demo}</span>
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

