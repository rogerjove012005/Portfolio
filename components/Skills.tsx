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
    <section id="skills" ref={ref} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Habilidades <span className="text-primary-400">Técnicas</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <Icon className="text-5xl text-primary-400" />
                  <h3 className="text-white font-semibold">{skill.name}</h3>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-primary-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    />
                  </div>
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

