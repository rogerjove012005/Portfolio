'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  SiMongodb,
  SiPostgresql,
  SiNodedotjs,
  SiDocker,
  SiGithub,
  SiGit,
  SiPython,
  SiMysql,
} from 'react-icons/si'
import { FaJava, FaSwift } from 'react-icons/fa'
import { SiKotlin } from 'react-icons/si'

const skills = [
  { name: 'MongoDB', icon: SiMongodb, level: 80, category: 'database' },
  { name: 'SQL', icon: SiMysql, level: 75, category: 'database' },
  { name: 'PostgreSQL', icon: SiPostgresql, level: 75, category: 'database' },
  { name: 'Node.js', icon: SiNodedotjs, level: 85, category: 'backend' },
  { name: 'Docker', icon: SiDocker, level: 70, category: 'devops' },
  { name: 'GitHub', icon: SiGithub, level: 85, category: 'tools' },
  { name: 'Git', icon: SiGit, level: 90, category: 'tools' },
  { name: 'Swift', icon: FaSwift, level: 70, category: 'mobile' },
  { name: 'Kotlin', icon: SiKotlin, level: 70, category: 'mobile' },
  { name: 'Java', icon: FaJava, level: 75, category: 'backend' },
  { name: 'Python', icon: SiPython, level: 75, category: 'backend' },
]

const categories = [
  { name: 'Backend', icon: '⚙️', skills: ['Node.js', 'Java', 'Python'] },
  { name: 'Bases de Datos', icon: '🗄️', skills: ['MongoDB', 'SQL', 'PostgreSQL'] },
  { name: 'Mobile', icon: '📱', skills: ['Swift', 'Kotlin'] },
  { name: 'DevOps & Tools', icon: '🛠️', skills: ['Docker', 'Git', 'GitHub'] },
]

export default function Skills() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" ref={ref} className="py-32 px-4 relative bg-black overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section - Enhanced */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="inline-block text-xs md:text-sm text-white/40 font-extralight tracking-[0.3em] uppercase px-6 py-3 mb-8 border border-white/10 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t.skills.badge}
          </motion.span>
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white/90 mb-8 tracking-[0.05em]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t.skills.title} <span className="text-white">{t.skills.titleHighlight}</span>
          </motion.h2>
          <motion.div
            className="w-32 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto"
            initial={{ width: 0, opacity: 0 }}
            animate={inView ? { width: 128, opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* Skills Grid - Enhanced Design */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                className="group relative"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{ willChange: 'transform' }}
              >
                {/* Card Container */}
                <div className="relative h-full rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm transition-all duration-500 group-hover:border-white/30 group-hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)]">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glowing corner accents */}
                  <div className="absolute top-0 left-0 w-24 h-px bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-px h-24 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-px bg-gradient-to-l from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-px h-24 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10 p-8 flex flex-col items-center space-y-6">
                    {/* Icon Container with reduced glow */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      style={{ willChange: 'transform' }}
                    >
                      <div className="relative">
                        <Icon className="text-5xl md:text-6xl text-white/70 group-hover:text-white/85 transition-colors duration-300" />
                      </div>
                    </motion.div>

                    {/* Skill Name */}
                    <div className="text-center">
                      <h3 className="text-white/90 font-light text-lg md:text-xl tracking-wide group-hover:text-white transition-colors duration-500 mb-2">
                        {skill.name}
                      </h3>
                      <span className="text-white/50 font-extralight text-sm tracking-wider">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Enhanced Progress Bar */}
                    <div className="w-full space-y-2">
                      <div className="relative w-full h-2 bg-black/60 rounded-full overflow-hidden border border-white/10">
                        {/* Animated shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        
                        {/* Progress fill with gradient */}
                        <motion.div
                          className="relative h-full rounded-full overflow-hidden"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.08 + 0.4, 
                            ease: [0.22, 1, 0.36, 1] 
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/60 to-white/40"></div>
                          <div className="absolute inset-0 bg-white/20 blur-sm"></div>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Categories Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-extralight text-white/80 mb-4 tracking-wide">
              Áreas de Especialización
            </h3>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const categorySkills = skills.filter(skill => category.skills.includes(skill.name))
              const avgLevel = Math.round(
                categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length
              )

              return (
                <motion.div
                  key={category.name}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    delay: 1.2 + index * 0.1, 
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ y: -4 }}
                >
                  <div className="relative h-full rounded-lg border border-white/10 bg-black/30 p-6 hover:border-white/20 hover:bg-black/40 transition-all duration-300">
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-px bg-white/10"></div>
                    <div className="absolute top-0 right-0 w-px h-16 bg-white/10"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{category.icon}</span>
                        <h4 className="text-white/90 font-light text-lg tracking-wide">
                          {category.name}
                        </h4>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {categorySkills.map((skill) => {
                            const SkillIcon = skill.icon
                            return (
                              <div
                                key={skill.name}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                              >
                                <SkillIcon className="text-lg text-white/70" />
                                <span className="text-white/60 text-xs font-extralight">
                                  {skill.name}
                                </span>
                              </div>
                            )
                          })}
                        </div>
                        
                        <div className="pt-2 border-t border-white/5">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-white/50 text-xs font-extralight">Nivel promedio</span>
                            <span className="text-white/70 text-xs font-light">{avgLevel}%</span>
                          </div>
                          <div className="w-full h-1 bg-black/60 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-white/30 to-white/50 rounded-full"
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${avgLevel}%` } : {}}
                              transition={{ 
                                delay: 1.3 + index * 0.1, 
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1]
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Additional decorative element */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="inline-block w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  )
}

