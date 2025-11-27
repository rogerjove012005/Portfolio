'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 relative bg-black"
    >
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
            {t.about.badge}
          </motion.span>
          <motion.h2
            className="text-4xl md:text-6xl font-extralight text-white/90 mb-4 tracking-[0.05em]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            {t.about.title} <span className="text-white">{t.about.titleHighlight}</span>
          </motion.h2>
          <motion.div
            className="w-24 h-px bg-white/30 mx-auto"
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
              <div className="relative rounded-lg p-8 h-96 flex flex-col items-center justify-center overflow-hidden border border-white/5 bg-black/30">
                <motion.div
                  className="relative z-10 text-8xl opacity-30"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  👨‍💻
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative rounded-lg p-8 space-y-5 border border-white/5 bg-black/30 overflow-hidden">
              <div className="absolute inset-0 bg-white/[0.01]"></div>
              
              <div className="relative z-10 space-y-5">
                <p className="text-white/70 text-base leading-relaxed font-extralight">
                  {t.about.description1} <span className="text-white/90">{t.about.description1Highlight}</span> {t.about.description1Rest}
                </p>
                <p className="text-white/70 text-base leading-relaxed font-extralight">
                  {t.about.description2} <span className="text-white/90">{t.about.description2Highlight}</span> {t.about.description2Rest} <span className="text-white/90">{t.about.description2Highlight2}</span> {t.about.description2Rest2}
                </p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-white/40 text-xs mb-2 font-extralight tracking-wider uppercase">📍 {t.about.location}</p>
                  <p className="text-white/70 font-extralight text-sm">Barcelona, Spain</p>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <p className="text-white/40 text-xs mb-2 font-extralight tracking-wider uppercase">🌐 {t.about.languages}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-white/60 text-sm font-extralight">Catalan (Native)</span>
                    <span className="text-white/20">•</span>
                    <span className="text-white/60 text-sm font-extralight">Spanish (Native)</span>
                    <span className="text-white/20">•</span>
                    <span className="text-white/60 text-sm font-extralight">English (C1 Advanced - 2023)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-white/80 font-extralight text-lg tracking-wider uppercase">{t.about.technologies}</h3>
              <div className="flex flex-wrap gap-3">
                {['HTML', 'CSS', 'Java', 'PHP', 'MySQL', 'Kotlin', 'Python', 'PySpark', 'Jupyter', 'Github', 'XML', 'Linux', 'React', 'Next.js'].map(
                  (item, index) => (
                    <motion.span
                      key={item}
                      className="px-4 py-2 text-white/50 rounded-full text-xs font-extralight tracking-wider uppercase border border-white/10 bg-black/30 hover:border-white/20 hover:text-white/70 transition-all"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      style={{ willChange: 'transform' }}
                    >
                      {item}
                    </motion.span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

