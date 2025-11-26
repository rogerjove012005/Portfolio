'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 relative"
    >
      <div className="container mx-auto max-w-6xl">
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
            About Me
          </motion.span>
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            About <span className="gradient-text-blue">Me</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-blue mx-auto rounded-full"
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
              <div className="absolute inset-0 bg-gradient-blue rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative glass rounded-2xl p-8 h-96 flex flex-col items-center justify-center overflow-hidden border border-white/10">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-primary-600/15 to-primary-700/20"></div>
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary-500/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-primary-600/10 to-transparent"></div>
                
                <motion.div
                  className="relative z-10 text-8xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  👨‍💻
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary-500/10 via-primary-600/5 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative glass rounded-2xl p-8 space-y-5 border border-white/10 overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-primary-600/15 to-primary-700/10"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-600/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 space-y-5">
                <p className="text-white/90 text-lg leading-relaxed">
                  I'm a <span className="text-primary-400 font-semibold">junior programmer</span> with many ambitions and 
                  eager to learn about everything related to tech applications. 
                  Passionate about technology and committed to keeping up with the latest trends.
                </p>
                <p className="text-white/90 text-lg leading-relaxed">
                  Curious, decisive, honest, and with a clear goal of developing myself as a professional. 
                  Currently pursuing a <span className="text-primary-300 font-semibold">Master's in Machine Learning and BigData</span> at LaSalle Barcelona, 
                  after completing the CFGS in Multiplatform Application Development. 
                  I'm planning to study <span className="text-primary-400 font-semibold">Software Engineering</span> to further enhance my skills and knowledge in the field.
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/70 text-sm mb-2 font-semibold">📍 Location</p>
                  <p className="text-white/80">Barcelona, Spain</p>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <p className="text-white/70 text-sm mb-2 font-semibold">🌐 Languages</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-white/80 text-sm">Catalan (Native)</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/80 text-sm">Spanish (Native)</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/80 text-sm">English (C1 Advanced - 2023)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {['HTML', 'CSS', 'Java', 'PHP', 'MySQL', 'Kotlin', 'Python', 'PySpark', 'Jupyter', 'Github', 'XML', 'Linux', 'React', 'Next.js'].map(
                  (item, index) => (
                    <motion.span
                      key={item}
                      className="glass-blue px-4 py-2 text-primary-300 rounded-full text-sm font-medium border border-primary-500/30"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.05, type: "spring" }}
                      whileHover={{ scale: 1.1, y: -2, borderColor: 'rgba(59, 130, 246, 0.5)' }}
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

