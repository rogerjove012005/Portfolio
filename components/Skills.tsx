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
  SiPandas,
  SiApachespark,
  SiJupyter,
  SiAmazonaws,
  SiLaravel,
} from 'react-icons/si'
import { FaJava, FaSwift, FaTerminal } from 'react-icons/fa'
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
  { name: 'Pandas', icon: SiPandas, level: 75, category: 'data' },
  { name: 'PySpark', icon: SiApachespark, level: 70, category: 'data' },
  { name: 'JupyterLab', icon: SiJupyter, level: 80, category: 'data' },
  { name: 'AWS', icon: SiAmazonaws, level: 70, category: 'cloud' },
  { name: 'Laravel', icon: SiLaravel, level: 75, category: 'backend' },
  { name: 'Bash', icon: FaTerminal, level: 80, category: 'devops' },
]

const categories = [
  { name: 'Backend', icon: '⚙️', skills: ['Node.js', 'Java', 'Python', 'Laravel'] },
  { name: 'Bases de Datos', icon: '🗄️', skills: ['MongoDB', 'SQL', 'PostgreSQL'] },
  { name: 'Data Science', icon: '📊', skills: ['Pandas', 'PySpark', 'JupyterLab'] },
  { name: 'Cloud & DevOps', icon: '☁️', skills: ['AWS', 'Docker', 'Bash', 'Git', 'GitHub'] },
  { name: 'Mobile', icon: '📱', skills: ['Swift', 'Kotlin'] },
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
        {/* Elegant Introduction Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-white/50 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Un conjunto diverso de tecnologías y herramientas que domino para crear soluciones innovadoras y eficientes.
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-12 md:gap-16 flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extralight text-white/95 mb-2 tabular-nums">
                {skills.length}
              </div>
              <div className="text-white/40 text-xs font-extralight tracking-wider uppercase">
                Tecnologías
              </div>
            </div>
            <div className="w-px h-16 bg-white/10"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extralight text-white/95 mb-2 tabular-nums">
                {categories.length}
              </div>
              <div className="text-white/40 text-xs font-extralight tracking-wider uppercase">
                Áreas
              </div>
            </div>
            <div className="w-px h-16 bg-white/10"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extralight text-white/95 mb-2 tabular-nums">
                {Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length)}%
              </div>
              <div className="text-white/40 text-xs font-extralight tracking-wider uppercase">
                Promedio
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Charts Section - Elegant Design */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-24">
          {/* Bar Chart - All Technologies */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 pb-4 border-b border-white/10">
              <h3 className="text-lg font-light text-white/70 tracking-wide uppercase text-xs mb-1">Nivel de Competencia</h3>
              <p className="text-white/40 text-xs font-extralight">Tecnologías ordenadas por dominio</p>
            </div>
            <div className="space-y-5">
              {skills
                .sort((a, b) => b.level - a.level)
                .map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      className="group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + index * 0.03,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                          <Icon className="text-xl text-white/50 group-hover:text-white/70 transition-colors duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white/90 font-light text-sm">{skill.name}</span>
                            <span className="text-white/40 text-xs font-extralight tabular-nums">{skill.level}%</span>
                          </div>
                          <div className="relative w-full h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-white/30 rounded-full"
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : {}}
                              transition={{
                                duration: 1.2,
                                delay: 0.4 + index * 0.04,
                                ease: [0.22, 1, 0.36, 1]
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
            </div>
          </motion.div>

          {/* Pie Chart - By Category */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 pb-4 border-b border-white/10">
              <h3 className="text-lg font-light text-white/70 tracking-wide uppercase text-xs mb-1">Distribución por Área</h3>
              <p className="text-white/40 text-xs font-extralight">Proporción de tecnologías por categoría</p>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center mb-8">
                <svg viewBox="0 0 200 200" className="w-64 h-64">
                  {(() => {
                    let currentAngle = -90
                    const total = skills.length
                    const colors = [
                      'rgba(255, 255, 255, 0.7)',
                      'rgba(255, 255, 255, 0.55)',
                      'rgba(255, 255, 255, 0.45)',
                      'rgba(255, 255, 255, 0.35)',
                      'rgba(255, 255, 255, 0.28)',
                    ]
                    
                    return categories.map((category, index) => {
                      const categorySkills = skills.filter(skill => category.skills.includes(skill.name))
                      const percentage = (categorySkills.length / total) * 100
                      const angle = (percentage / 100) * 360
                      
                      const startAngle = currentAngle
                      const endAngle = currentAngle + angle
                      
                      const x1 = 100 + 75 * Math.cos((startAngle * Math.PI) / 180)
                      const y1 = 100 + 75 * Math.sin((startAngle * Math.PI) / 180)
                      const x2 = 100 + 75 * Math.cos((endAngle * Math.PI) / 180)
                      const y2 = 100 + 75 * Math.sin((endAngle * Math.PI) / 180)
                      
                      const largeArcFlag = angle > 180 ? 1 : 0
                      
                      const pathData = [
                        `M 100 100`,
                        `L ${x1} ${y1}`,
                        `A 75 75 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                        `Z`
                      ].join(' ')
                      
                      currentAngle += angle
                      
                      return (
                        <motion.path
                          key={category.name}
                          d={pathData}
                          fill={colors[index % colors.length]}
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                          transition={{
                            duration: 1.2,
                            delay: 0.6 + index * 0.15,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                          className="hover:opacity-90 transition-opacity duration-300 cursor-pointer"
                        />
                      )
                    })
                  })()}
                  {/* Center circle */}
                  <circle cx="100" cy="100" r="40" fill="rgba(0, 0, 0, 0.8)" />
                </svg>
              </div>
              
              {/* Elegant Legend */}
              <div className="space-y-3">
                {categories.map((category, index) => {
                  const categorySkills = skills.filter(skill => category.skills.includes(skill.name))
                  const percentage = Math.round((categorySkills.length / skills.length) * 100)
                  const colors = [
                    'bg-white/70',
                    'bg-white/55',
                    'bg-white/45',
                    'bg-white/35',
                    'bg-white/28',
                  ]
                  
                  return (
                    <motion.div
                      key={category.name}
                      className="flex items-center gap-4 py-2 group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + index * 0.1,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      <div className={`w-3 h-3 rounded-sm ${colors[index % colors.length]} group-hover:scale-110 transition-transform duration-200`}></div>
                      <div className="flex-1 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{category.icon}</span>
                          <span className="text-white/80 font-light text-sm">{category.name}</span>
                        </div>
                        <span className="text-white/40 text-xs font-extralight tabular-nums">{percentage}%</span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Categories Section */}
        <motion.div
          className="mt-32 pt-16 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h3 className="text-lg font-light text-white/70 tracking-wide uppercase text-xs mb-2">
              Áreas de Especialización
            </h3>
            <div className="w-16 h-px bg-white/20"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
                    delay: 0.8 + index * 0.08, 
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <div className="relative h-full p-6 border-b border-white/10 hover:border-white/20 transition-colors duration-300">
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{category.icon}</span>
                        <h4 className="text-white/90 font-light text-base">
                          {category.name}
                        </h4>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/40 text-xs font-extralight">Promedio</span>
                        <span className="text-white/70 text-sm font-light tabular-nums">{avgLevel}%</span>
                      </div>
                      <div className="w-full h-0.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-white/30 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${avgLevel}%` } : {}}
                          transition={{ 
                            delay: 0.9 + index * 0.08, 
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => {
                        const SkillIcon = skill.icon
                        return (
                          <div
                            key={skill.name}
                            className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                          >
                            <SkillIcon className="text-sm text-white/60" />
                            <span className="text-white/50 text-xs font-extralight">
                              {skill.name}
                            </span>
                          </div>
                        )
                      })}
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
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div className="inline-block w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  )
}

