'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" ref={ref} className="py-20 px-4 relative">
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
            Hablemos
          </motion.span>
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Contácta<span className="gradient-text">me</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-8 gradient-text">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <motion.a
                  href="mailto:email@example.com"
                  className="flex items-center space-x-4 glass p-4 rounded-xl hover:bg-primary-500/10 transition-all group"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="p-3 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-primary-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">email@example.com</p>
                  </div>
                </motion.a>
                <motion.a
                  href="tel:+1234567890"
                  className="flex items-center space-x-4 glass p-4 rounded-xl hover:bg-primary-500/10 transition-all group"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="p-3 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <FaPhone className="text-primary-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Teléfono</p>
                    <p className="text-white font-medium">+1 234 567 890</p>
                  </div>
                </motion.a>
                <div className="flex items-center space-x-4 glass p-4 rounded-xl">
                  <div className="p-3 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-lg">
                    <FaMapMarkerAlt className="text-primary-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Ubicación</p>
                    <p className="text-white font-medium">Ciudad, País</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="space-y-6 glass rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 mb-2 font-medium"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 glass border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 transition-all"
                required
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 mb-2 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 glass border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 transition-all"
                required
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 mb-2 font-medium"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 glass border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 resize-none transition-all"
                required
                placeholder="Tu mensaje..."
              />
            </div>
            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold overflow-hidden relative group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Enviar Mensaje
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </span>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

