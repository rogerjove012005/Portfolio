'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useEffect } from 'react'
import Link from 'next/link'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/rogerjove012005', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/roger-jov%C3%A9-tusell-10163a2b7/', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:rogerjove2005@gmail.com', label: 'Email' },
]

export default function Hero() {
  const { t } = useLanguage()
  
  const navButtons = [
    { label: t.hero.navAbout, href: '/about' },
    { label: t.hero.navSkills, href: '/skills' },
    { label: t.hero.navProjects, href: '/projects' },
    { label: t.hero.navContact, href: '/contact' },
  ]

  // Disable scroll on mount
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center px-4 relative overflow-hidden bg-black"
    >
      {/* Ultra subtle background texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.01)_50%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Main Name - Ultra elegant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-extralight text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60 tracking-[0.02em] leading-[0.9] mb-2">
              ROGER
            </h1>
            <h2 className="text-8xl md:text-9xl lg:text-[12rem] font-extralight text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60 tracking-[0.02em] leading-[0.9]">
              JOVÉ
            </h2>
          </motion.div>
          
          {/* Tagline - Ultra thin */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base font-extralight text-white/40 tracking-[0.3em] uppercase mb-20 letter-spacing-wider"
          >
            {t.hero.tagline}
          </motion.p>

          {/* Navigation Buttons - Ultra minimal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-1 w-full max-w-md"
          >
            {navButtons.map((button, index) => (
              <motion.div
                key={button.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={button.href}
                  className="group block"
                >
                  <div className="relative overflow-hidden border-b border-white/5 hover:border-white/20 transition-all duration-700 py-4">
                    <div className="flex items-center justify-between">
                      <span className="text-lg md:text-xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70 tracking-[0.2em] uppercase group-hover:from-white group-hover:via-white group-hover:to-white transition-all duration-500">
                        {button.label}
                      </span>
                      <motion.span
                        className="text-white/20 group-hover:text-white/60 text-sm font-extralight transition-colors duration-500"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        →
                      </motion.span>
                    </div>
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                      initial={{ width: 0, x: '-50%' }}
                      whileHover={{ width: '100%', x: '0%' }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links - Ultra minimal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex space-x-8 mt-20"
          >
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/20 hover:text-white/60 transition-all duration-500"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                aria-label={label}
              >
                <Icon className="text-lg" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
