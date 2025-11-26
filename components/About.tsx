'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 bg-gray-800/50"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Sobre <span className="text-primary-400">Mí</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full h-96 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-6xl">👨‍💻</span>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Soy un desarrollador full stack apasionado por crear soluciones
              innovadoras y escalables. Con experiencia en tecnologías modernas
              como React, Next.js, Node.js y bases de datos tanto SQL como NoSQL.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Me encanta trabajar en proyectos desafiantes que me permiten
              aprender y crecer constantemente. Mi objetivo es crear aplicaciones
              que no solo funcionen bien, sino que también proporcionen una
              experiencia de usuario excepcional.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              {['Desarrollo Web', 'UI/UX', 'APIs REST', 'Bases de Datos'].map(
                (item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

