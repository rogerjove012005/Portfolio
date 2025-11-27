'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiTailwindcss,
  SiFigma,
} from 'react-icons/si'

const skills = [
  { name: 'React', icon: SiReact, level: 90 },
  { name: 'Next.js', icon: SiNextdotjs, level: 85 },
  { name: 'TypeScript', icon: SiTypescript, level: 80 },
  { name: 'JavaScript', icon: SiJavascript, level: 90 },
  { name: 'Node.js', icon: SiNodedotjs, level: 85 },
  { name: 'Python', icon: SiPython, level: 75 },
  { name: 'MongoDB', icon: SiMongodb, level: 80 },
  { name: 'PostgreSQL', icon: SiPostgresql, level: 75 },
  { name: 'Git', icon: SiGit, level: 90 },
  { name: 'Docker', icon: SiDocker, level: 70 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85 },
  { name: 'Figma', icon: SiFigma, level: 70 },
]

export default function Skills() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" ref={ref} className="py-20 px-4 relative bg-black">
      <div className="container mx-auto max-w-7xl">
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
            {t.skills.badge}
          </motion.span>
          <motion.h2
            className="text-4xl md:text-6xl font-extralight text-white/90 mb-4 tracking-[0.05em]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            {t.skills.title} <span className="text-white">{t.skills.titleHighlight}</span>
          </motion.h2>
          <motion.div
            className="w-24 h-px bg-white/30 mx-auto"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                className="group relative rounded-lg p-6 overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-200 bg-black/30"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                style={{ willChange: 'transform' }}
              >
                <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="relative z-10 flex flex-col items-center space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    style={{ willChange: 'transform' }}
                  >
                    <Icon className="text-5xl text-white/70 group-hover:text-white/90 transition-colors duration-200" />
                  </motion.div>
                  <h3 className="text-white/80 font-extralight text-base tracking-[0.1em] uppercase group-hover:text-white transition-colors duration-200">{skill.name}</h3>
                  <div className="w-full bg-black/50 rounded-full h-1 overflow-hidden border border-white/10">
                    <motion.div
                      className="h-full bg-white/30 rounded-full relative overflow-hidden"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-white/60 text-xs font-extralight tracking-wider">{skill.level}%</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

