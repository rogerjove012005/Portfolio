'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/contexts/LanguageContext'
import { FaMapMarkerAlt, FaLanguage, FaCode, FaGraduationCap, FaRocket } from 'react-icons/fa'

export default function About() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const technologies = ['HTML', 'CSS', 'Java', 'PHP', 'MySQL', 'Kotlin', 'Python', 'PySpark', 'Jupyter', 'Github', 'XML', 'Linux', 'React', 'Next.js']
  const languages = [
    { name: 'Catalan', level: 'Native' },
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'C1 Advanced (2023)' }
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-4 relative bg-black"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="inline-block text-xs md:text-sm text-white/40 font-extralight tracking-[0.3em] uppercase px-4 py-2 mb-6 border border-white/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t.about.badge}
          </motion.span>
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white/90 mb-6 tracking-[0.05em]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t.about.title} <span className="text-white">{t.about.titleHighlight}</span>
          </motion.h2>
          <motion.div
            className="w-24 h-px bg-white/30 mx-auto"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Description */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main Description Card */}
            <div className="relative rounded-lg p-10 border border-white/5 bg-black/30 overflow-hidden group">
              {/* Subtle background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 left-0 w-24 h-px bg-white/10"></div>
              <div className="absolute top-0 left-0 w-px h-24 bg-white/10"></div>
              
              <div className="relative z-10 space-y-6">
                <motion.p
                  className="text-white/70 text-lg leading-relaxed font-extralight"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  {t.about.description1} <span className="text-white/90 font-light">{t.about.description1Highlight}</span> {t.about.description1Rest}
                </motion.p>
                <motion.p
                  className="text-white/70 text-lg leading-relaxed font-extralight"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {t.about.description2} <span className="text-white/90 font-light">{t.about.description2Highlight}</span> {t.about.description2Rest} <span className="text-white/90 font-light">{t.about.description2Highlight2}</span> {t.about.description2Rest2}
                </motion.p>
              </div>
            </div>

            {/* Education & Info Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Location Card */}
              <motion.div
                className="relative rounded-lg p-6 border border-white/5 bg-black/30 overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 border border-white/10 rounded-lg bg-white/[0.02]">
                      <FaMapMarkerAlt className="text-white/60 text-lg" />
                    </div>
                    <h3 className="text-white/40 text-xs font-extralight tracking-wider uppercase">{t.about.location}</h3>
                  </div>
                  <p className="text-white/80 font-extralight text-base">Barcelona, Spain</p>
                </div>
              </motion.div>

              {/* Education Card */}
              <motion.div
                className="relative rounded-lg p-6 border border-white/5 bg-black/30 overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 border border-white/10 rounded-lg bg-white/[0.02]">
                      <FaGraduationCap className="text-white/60 text-lg" />
                    </div>
                    <h3 className="text-white/40 text-xs font-extralight tracking-wider uppercase">Education</h3>
                  </div>
                  <p className="text-white/80 font-extralight text-sm leading-relaxed">
                    Master's in Machine Learning & BigData
                  </p>
                  <p className="text-white/50 font-extralight text-xs mt-1">LaSalle Barcelona</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sticky top-24">
              <div className="relative rounded-lg p-12 h-full min-h-[400px] flex flex-col items-center justify-center overflow-hidden border border-white/5 bg-black/30 group">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-px bg-white/10"></div>
                <div className="absolute bottom-4 left-4 w-16 h-px bg-white/10"></div>
                
                <motion.div
                  className="relative z-10 text-7xl md:text-8xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1, 1.05]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 8, 
                    ease: "easeInOut" 
                  }}
                >
                  👨‍💻
                </motion.div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Languages Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <FaLanguage className="text-white/40 text-xl" />
              <h3 className="text-white/60 font-extralight text-lg tracking-wider uppercase">{t.about.languages}</h3>
            </div>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                className="relative rounded-lg p-5 border border-white/5 bg-black/30 overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                whileHover={{ borderColor: 'rgba(255, 255, 255, 0.15)', y: -2 }}
                style={{ willChange: 'transform' }}
              >
                <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <p className="text-white/80 font-extralight text-base mb-1">{lang.name}</p>
                  <p className="text-white/40 font-extralight text-xs tracking-wider uppercase">{lang.level}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <FaCode className="text-white/40 text-xl" />
              <h3 className="text-white/60 font-extralight text-lg tracking-wider uppercase">{t.about.technologies}</h3>
            </div>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-5 py-2.5 text-white/50 rounded-lg text-xs font-extralight tracking-wider uppercase border border-white/10 bg-black/30 hover:border-white/20 hover:text-white/80 hover:bg-white/[0.02] transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.1 + index * 0.03, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, y: -2 }}
                style={{ willChange: 'transform' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

