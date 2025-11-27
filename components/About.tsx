'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/contexts/LanguageContext'
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'

export default function About() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experienceTimeline = t.about.experienceItems.map((item, index) => ({
    ...item,
    isCurrent: index === 0 // First item is current
  }))

  const educationTimeline = t.about.educationItems.map((item, index) => ({
    ...item,
    isCurrent: index === 0 // First item is current
  }))

  const languages = t.about.languageItems

  const TimelineItem = ({ item, index, delay, type }: { item: any, index: number, delay: number, type: 'experience' | 'education' }) => (
    <motion.div
      className="relative pl-16"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: delay + index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Timeline Dot with connecting line */}
      <div className="absolute left-0 top-0">
        <div className="relative">
          {/* Outer glow for current items */}
          {item.isCurrent && (
            <motion.div
              className="absolute inset-0 rounded-full bg-white/10"
              animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            />
          )}
          
          {/* Main dot */}
          <div className={`relative w-4 h-4 rounded-full border-2 ${
            item.isCurrent 
              ? 'bg-white/30 border-white/50 shadow-[0_0_8px_rgba(255,255,255,0.2)]' 
              : 'bg-black/40 border-white/30'
          }`}>
            {/* Inner dot */}
            <div className={`absolute inset-1 rounded-full ${
              item.isCurrent ? 'bg-white/60' : 'bg-white/20'
            }`}></div>
          </div>
        </div>
      </div>
      
      {/* Content Card - Enhanced Design */}
      <div className="relative rounded-lg border border-white/5 bg-black/20 p-8 hover:border-white/15 hover:bg-black/30 transition-all duration-500 group/item mb-10 overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
        
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-20 h-px bg-white/5"></div>
        <div className="absolute top-0 left-0 w-px h-20 bg-white/5"></div>
        <div className="absolute bottom-0 right-0 w-20 h-px bg-white/5"></div>
        <div className="absolute bottom-0 right-0 w-px h-20 bg-white/5"></div>
        
        <div className="relative z-10">
          {/* Period Badge */}
          <div className="flex items-center justify-between mb-4">
            <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-extralight tracking-wider uppercase border ${
              item.isCurrent 
                ? 'text-white/80 border-white/30 bg-white/[0.05]' 
                : 'text-white/50 border-white/10 bg-black/30'
            }`}>
              {item.period}
            </span>
            {item.isCurrent && (
              <span className="text-xs text-white/40 font-extralight tracking-wider uppercase">
                {t.about.current}
              </span>
            )}
          </div>
          
          {/* Title */}
          <h4 className={`text-xl font-extralight mb-3 leading-tight ${
            item.isCurrent ? 'text-white/95' : 'text-white/85'
          }`}>
            {item.title}
          </h4>
          
          {/* Company/Institution & Location with icon */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <p className="text-white/60 font-extralight text-base">
              {item.company || item.institution}
            </p>
            {item.location && (
              <>
                <span className="text-white/20">•</span>
                <div className="flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-white/40 text-xs" />
                  <span className="text-white/50 font-extralight text-sm">{item.location}</span>
                </div>
              </>
            )}
          </div>
          
          {/* Description with better typography */}
          <div className="pt-4 border-t border-white/5">
            <p className="text-white/50 font-extralight text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-4 relative bg-black"
    >
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
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
            className="w-24 h-px bg-white/30 mx-auto mb-12"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative rounded-lg border border-white/5 bg-black/20 p-10 overflow-hidden group">
            {/* Subtle background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-24 h-px bg-white/10"></div>
            <div className="absolute top-0 left-0 w-px h-24 bg-white/10"></div>
            <div className="absolute bottom-0 right-0 w-24 h-px bg-white/10"></div>
            <div className="absolute bottom-0 right-0 w-px h-24 bg-white/10"></div>
            
            <div className="relative z-10 space-y-4">
              <motion.p
                className="text-white/70 text-lg leading-relaxed font-extralight"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {t.about.description1} <span className="text-white/90 font-light">{t.about.description1Highlight}</span> {t.about.description1Rest}
              </motion.p>
              <motion.p
                className="text-white/70 text-lg leading-relaxed font-extralight"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {t.about.description2} <span className="text-white/90 font-light">{t.about.description2Highlight}</span> {t.about.description2Rest} <span className="text-white/90 font-light">{t.about.description2Highlight2}</span> {t.about.description2Rest2}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <FaBriefcase className="text-white/40 text-xl" />
            <h3 className="text-white/60 font-extralight text-2xl tracking-wider uppercase">
              {t.about.experience}
            </h3>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>
          
          <div className="relative">
            {/* Enhanced Vertical Line with gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-px">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/5"></div>
            </div>
            
            {/* Timeline Items */}
            <div>
              {experienceTimeline.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} delay={0.9} type="experience" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <FaGraduationCap className="text-white/40 text-xl" />
            <h3 className="text-white/60 font-extralight text-2xl tracking-wider uppercase">
              {t.about.education}
            </h3>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>
          
          <div className="relative">
            {/* Enhanced Vertical Line with gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-px">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/5"></div>
            </div>
            
            {/* Timeline Items */}
            <div>
              {educationTimeline.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} delay={1.3} type="education" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Languages Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-white/60 font-extralight text-2xl tracking-wider uppercase">
              {t.about.languages}
            </h3>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                className="relative rounded-lg p-6 border border-white/5 bg-black/20 overflow-hidden group hover:border-white/15 hover:bg-black/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -2 }}
                style={{ willChange: 'transform' }}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-12 h-px bg-white/5"></div>
                <div className="absolute top-0 right-0 w-px h-12 bg-white/5"></div>
                
                <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <p className="text-white/80 font-extralight text-lg">{lang.name}</p>
                  </div>
                  <p className="text-white/40 font-extralight text-xs tracking-wider uppercase">
                    {lang.level}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
