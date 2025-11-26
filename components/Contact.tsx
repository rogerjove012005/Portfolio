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
    <section id="contact" ref={ref} className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Contácta<span className="text-primary-400">me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Información de Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-600/20 rounded-lg">
                  <FaEnvelope className="text-primary-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">email@example.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-600/20 rounded-lg">
                  <FaPhone className="text-primary-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Teléfono</p>
                  <p className="text-white">+1 234 567 890</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-600/20 rounded-lg">
                  <FaMapMarkerAlt className="text-primary-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Ubicación</p>
                  <p className="text-white">Ciudad, País</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500 resize-none"
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar Mensaje
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

