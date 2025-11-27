'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
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
            className="inline-block text-sm md:text-base text-primary-400 font-semibold tracking-wider uppercase glass-blue px-4 py-2 rounded-full mb-4 border border-primary-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {t.contact.badge}
          </motion.span>
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            {t.contact.title} <span className="gradient-text-blue">{t.contact.titleHighlight}</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-blue mx-auto rounded-full"
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
            <div className="glass rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-8 gradient-text-blue">
                {t.contact.contactInfo}
              </h3>
              <div className="space-y-6">
                <motion.a
                  href="mailto:rogerjove2005@gmail.com"
                  className="flex items-center space-x-4 glass-blue p-4 rounded-xl hover:bg-primary-500/10 transition-all group border border-primary-500/20"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="p-3 bg-primary-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-primary-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <p className="text-white font-medium">rogerjove2005@gmail.com</p>
                  </div>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/roger-jov%C3%A9-tusell-10163a2b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 glass-blue p-4 rounded-xl hover:bg-primary-500/10 transition-all group border border-primary-500/20"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="p-3 bg-primary-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <FaLinkedin className="text-primary-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">LinkedIn</p>
                    <p className="text-white font-medium">Roger Jové Tusell</p>
                  </div>
                </motion.a>
                <motion.a
                  href="https://github.com/rogerjove012005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 glass-blue p-4 rounded-xl hover:bg-primary-500/10 transition-all group border border-primary-500/20"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="p-3 bg-primary-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <FaGithub className="text-primary-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">GitHub</p>
                    <p className="text-white font-medium">rogerjove012005</p>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="space-y-6 glass rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-white/80 mb-2 font-medium"
              >
                {t.contact.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 glass border border-white/10 rounded-xl text-white bg-black/30 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 transition-all placeholder:text-white/30"
                required
                placeholder={t.contact.namePlaceholder}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white/80 mb-2 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 glass border border-white/10 rounded-xl text-white bg-black/30 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 transition-all placeholder:text-white/30"
                required
                placeholder={t.contact.emailPlaceholder}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-white/80 mb-2 font-medium"
              >
                {t.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 glass border border-white/10 rounded-xl text-white bg-black/30 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 resize-none transition-all placeholder:text-white/30"
                required
                placeholder={t.contact.messagePlaceholder}
              />
            </div>
            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-blue text-white rounded-xl font-semibold overflow-hidden relative group shadow-lg shadow-primary-500/20"
              whileHover={{ scale: 1.02, y: -2, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t.contact.sendMessage}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

