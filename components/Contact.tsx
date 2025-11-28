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
    <section id="contact" ref={ref} className="py-32 px-4 relative bg-black">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header - Minimalist */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="inline-block text-xs text-white/30 font-extralight tracking-[0.4em] uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t.contact.badge}
          </motion.span>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white/95 mb-6 tracking-tight"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t.contact.title} <span className="text-white">{t.contact.titleHighlight}</span>
          </motion.h2>
          <motion.div
            className="w-20 h-px bg-white/20 mx-auto"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          {/* Contact Information - Elegant Sidebar */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-1 mb-10">
              <h3 className="text-lg font-light text-white/60 tracking-wide uppercase mb-2">
                {t.contact.contactInfo}
              </h3>
              <div className="w-12 h-px bg-white/10"></div>
            </div>
            
            <div className="space-y-6">
              <motion.a
                href="mailto:rogerjove2005@gmail.com"
                className="group flex items-start gap-4 py-4 border-b border-white/5 hover:border-white/10 transition-colors duration-300"
                whileHover={{ x: 4 }}
                style={{ willChange: 'transform' }}
              >
                <div className="mt-1">
                  <FaEnvelope className="text-white/40 group-hover:text-white/60 text-lg transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <p className="text-white/40 text-xs font-extralight tracking-wider uppercase mb-1">Email</p>
                  <p className="text-white/80 font-light text-sm group-hover:text-white transition-colors duration-300">
                    rogerjove2005@gmail.com
                  </p>
                </div>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/roger-jov%C3%A9-tusell-10163a2b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 py-4 border-b border-white/5 hover:border-white/10 transition-colors duration-300"
                whileHover={{ x: 4 }}
                style={{ willChange: 'transform' }}
              >
                <div className="mt-1">
                  <FaLinkedin className="text-white/40 group-hover:text-white/60 text-lg transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <p className="text-white/40 text-xs font-extralight tracking-wider uppercase mb-1">LinkedIn</p>
                  <p className="text-white/80 font-light text-sm group-hover:text-white transition-colors duration-300">
                    Roger Jové Tusell
                  </p>
                </div>
              </motion.a>
              
              <motion.a
                href="https://github.com/rogerjove012005"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 py-4 border-b border-white/5 hover:border-white/10 transition-colors duration-300"
                whileHover={{ x: 4 }}
                style={{ willChange: 'transform' }}
              >
                <div className="mt-1">
                  <FaGithub className="text-white/40 group-hover:text-white/60 text-lg transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <p className="text-white/40 text-xs font-extralight tracking-wider uppercase mb-1">GitHub</p>
                  <p className="text-white/80 font-light text-sm group-hover:text-white transition-colors duration-300">
                    rogerjove012005
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form - Clean and Professional */}
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-1 mb-8">
              <h3 className="text-lg font-light text-white/60 tracking-wide uppercase mb-2">
                Send Message
              </h3>
              <div className="w-12 h-px bg-white/10"></div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-white/50 mb-3 font-extralight text-xs tracking-wider uppercase"
              >
                {t.contact.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-0 py-3 border-b border-white/10 bg-transparent text-white/90 focus:outline-none focus:border-white/30 transition-colors duration-300 placeholder:text-white/20 font-light"
                required
                placeholder={t.contact.namePlaceholder}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-white/50 mb-3 font-extralight text-xs tracking-wider uppercase"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-0 py-3 border-b border-white/10 bg-transparent text-white/90 focus:outline-none focus:border-white/30 transition-colors duration-300 placeholder:text-white/20 font-light"
                required
                placeholder={t.contact.emailPlaceholder}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-white/50 mb-3 font-extralight text-xs tracking-wider uppercase"
              >
                {t.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-0 py-3 border-b border-white/10 bg-transparent text-white/90 focus:outline-none focus:border-white/30 resize-none transition-colors duration-300 placeholder:text-white/20 font-light"
                required
                placeholder={t.contact.messagePlaceholder}
              />
            </div>

            <motion.button
              type="submit"
              className="mt-8 w-full py-4 text-white/80 border border-white/10 hover:border-white/20 hover:text-white/90 transition-all duration-300 font-light tracking-wider uppercase text-sm relative group overflow-hidden"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              style={{ willChange: 'transform' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t.contact.sendMessage}
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
