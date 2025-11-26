'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" ref={ref} className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
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
            Tecnologías
          </motion.span>
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Habilidades <span className="gradient-text-blue">Técnicas</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-blue mx-auto rounded-full"
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
                className="group relative glass rounded-2xl p-6 overflow-hidden border border-white/10"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                whileHover={{ y: -10, scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.3)' }}
              >
                <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center space-y-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="text-6xl text-primary-400" />
                  </motion.div>
                  <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                  <div className="w-full bg-black/50 rounded-full h-3 overflow-hidden border border-white/10">
                    <motion.div
                      className="h-full bg-gradient-blue rounded-full relative overflow-hidden"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                    >
                      <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                    </motion.div>
                  </div>
                  <span className="text-primary-400 text-sm font-bold">{skill.level}%</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

