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
    <section id="contact" ref={ref} className="py-20 px-4 relative bg-black">
      <div className="container mx-auto max-w-6xl">
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
            {t.contact.badge}
          </motion.span>
          <motion.h2
            className="text-4xl md:text-6xl font-extralight text-white/90 mb-4 tracking-[0.05em]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            {t.contact.title} <span className="text-white">{t.contact.titleHighlight}</span>
          </motion.h2>
          <motion.div
            className="w-24 h-px bg-white/30 mx-auto"
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
            <div className="rounded-lg p-8 border border-white/5 bg-black/30">
              <h3 className="text-2xl font-extralight text-white/90 mb-8 tracking-[0.05em]">
                {t.contact.contactInfo}
              </h3>
              <div className="space-y-6">
                <motion.a
                  href="mailto:rogerjove2005@gmail.com"
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/[0.02] transition-all group border border-white/10 bg-black/30"
                  whileHover={{ x: 5 }}
                  style={{ willChange: 'transform' }}
                >
                  <div className="p-3 bg-white/[0.02] rounded-lg group-hover:scale-110 transition-transform duration-200">
                    <FaEnvelope className="text-white/60 group-hover:text-white/90 text-xl transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-extralight tracking-wider uppercase">Email</p>
                    <p className="text-white/80 font-extralight text-sm">rogerjove2005@gmail.com</p>
                  </div>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/roger-jov%C3%A9-tusell-10163a2b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/[0.02] transition-all group border border-white/10 bg-black/30"
                  whileHover={{ x: 5 }}
                  style={{ willChange: 'transform' }}
                >
                  <div className="p-3 bg-white/[0.02] rounded-lg group-hover:scale-110 transition-transform duration-200">
                    <FaLinkedin className="text-white/60 group-hover:text-white/90 text-xl transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-extralight tracking-wider uppercase">LinkedIn</p>
                    <p className="text-white/80 font-extralight text-sm">Roger Jové Tusell</p>
                  </div>
                </motion.a>
                <motion.a
                  href="https://github.com/rogerjove012005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/[0.02] transition-all group border border-white/10 bg-black/30"
                  whileHover={{ x: 5 }}
                  style={{ willChange: 'transform' }}
                >
                  <div className="p-3 bg-white/[0.02] rounded-lg group-hover:scale-110 transition-transform duration-200">
                    <FaGithub className="text-white/60 group-hover:text-white/90 text-xl transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-extralight tracking-wider uppercase">GitHub</p>
                    <p className="text-white/80 font-extralight text-sm">rogerjove012005</p>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="space-y-6 rounded-lg p-8 border border-white/5 bg-black/30"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-white/60 mb-2 font-extralight text-sm tracking-wider uppercase"
              >
                {t.contact.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-white/10 rounded-lg text-white/90 bg-black/30 focus:outline-none focus:border-white/30 focus:bg-white/[0.02] transition-all placeholder:text-white/30 font-extralight"
                required
                placeholder={t.contact.namePlaceholder}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white/60 mb-2 font-extralight text-sm tracking-wider uppercase"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-white/10 rounded-lg text-white/90 bg-black/30 focus:outline-none focus:border-white/30 focus:bg-white/[0.02] transition-all placeholder:text-white/30 font-extralight"
                required
                placeholder={t.contact.emailPlaceholder}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-white/60 mb-2 font-extralight text-sm tracking-wider uppercase"
              >
                {t.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 border border-white/10 rounded-lg text-white/90 bg-black/30 focus:outline-none focus:border-white/30 focus:bg-white/[0.02] resize-none transition-all placeholder:text-white/30 font-extralight"
                required
                placeholder={t.contact.messagePlaceholder}
              />
            </div>
            <motion.button
              type="submit"
              className="w-full px-8 py-4 text-white/90 rounded-lg font-extralight tracking-wider uppercase overflow-hidden relative group border border-white/20 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{ willChange: 'transform' }}
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
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

