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
      className="py-20 px-4 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-sm md:text-base text-primary-400 font-semibold tracking-wider uppercase glass px-4 py-2 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Conóceme
          </motion.span>
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Sobre <span className="gradient-text">Mí</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative glass rounded-2xl p-8 h-96 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-pink-500/20"></div>
                <motion.div
                  className="relative z-10 text-8xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  👨‍💻
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary-500/10 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-6 space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                Soy un <span className="text-primary-400 font-semibold">desarrollador full stack</span> apasionado por crear soluciones
                innovadoras y escalables. Con experiencia en tecnologías modernas
                como React, Next.js, Node.js y bases de datos tanto SQL como NoSQL.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Me encanta trabajar en proyectos desafiantes que me permiten
                aprender y crecer constantemente. Mi objetivo es crear aplicaciones
                que no solo funcionen bien, sino que también proporcionen una
                experiencia de usuario <span className="text-purple-400 font-semibold">excepcional</span>.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Desarrollo Web', 'UI/UX', 'APIs REST', 'Bases de Datos', 'Cloud Computing', 'DevOps'].map(
                (item, index) => (
                  <motion.span
                    key={item}
                    className="glass px-4 py-2 text-primary-400 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {item}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

