'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:email@example.com', label: 'Email' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/6 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
          >
            <span className="text-sm md:text-base text-primary-400 font-semibold tracking-wider uppercase glass-blue px-4 py-2 rounded-full border border-primary-500/30">
              👋 Bienvenido a mi Portfolio
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hola, soy{' '}
            <span className="gradient-text-blue">
              Tu Nombre
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Desarrollador{' '}
            <span className="text-primary-400 font-bold">Full Stack</span>
          </motion.p>
          
          <motion.p
            className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Apasionado por crear experiencias digitales excepcionales y soluciones innovadoras
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-blue p-4 rounded-full text-white/60 hover:text-primary-400 transition-all group border border-primary-500/20"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                aria-label={label}
              >
                <Icon className="text-2xl group-hover:scale-110 transition-transform" />
                <span className="absolute inset-0 bg-primary-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-blue text-white rounded-xl font-semibold overflow-hidden shadow-lg shadow-primary-500/20"
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Ver Proyectos
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </motion.a>
            <motion.a
              href="#contact"
              className="group px-8 py-4 glass border-2 border-primary-500/30 text-white/80 rounded-xl font-semibold hover:border-primary-400 hover:text-white hover:bg-primary-500/10 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-2">
                Contactar
                <span className="group-hover:rotate-12 transition-transform">📧</span>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        >
          <a href="#about" className="inline-block glass-blue p-3 rounded-full text-white/60 hover:text-primary-400 transition-colors border border-primary-500/20">
            <HiArrowDown className="text-3xl" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

