'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const { t } = useLanguage()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
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

  // Track mouse position for interactive effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center px-4 relative overflow-hidden bg-black"
    >
      {/* Interactive cursor light effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.03) 0%, transparent 50%)`,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Ultra subtle background texture with elegant animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_0%,transparent_70%)]"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.01)_50%,transparent_100%)]"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        {/* Floating particles effect - more visible */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + i * 8}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
        {/* Elegant wave effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 pt-32">
        <div className="flex flex-col justify-center min-h-[calc(100vh-8rem)]">
          {/* Left-aligned content */}
          <div className="max-w-4xl">
            {/* Main Name - Larger, left-aligned */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <motion.h1 
                className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-extralight text-transparent bg-clip-text bg-gradient-to-b from-white via-white/95 to-white/70 tracking-[0.05em] leading-[1.1] text-left"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                ROGER JOVÉ
              </motion.h1>
            </motion.div>
            
            {/* Tagline - Left-aligned with interactive animation */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm md:text-base font-extralight text-white/50 tracking-[0.3em] uppercase mb-16 letter-spacing-wider text-left relative inline-block"
              whileHover={{
                x: 10,
                transition: { duration: 0.3 }
              }}
            >
              {t.hero.tagline}
              <motion.span
                className="absolute -bottom-1 left-0 h-px bg-white/30"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              />
            </motion.p>
          </div>

          {/* Navigation Buttons - Left-aligned with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-1 w-full max-w-md"
          >
            {navButtons.map((button, index) => (
              <motion.div
                key={button.href}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8 + index * 0.15, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
              >
                <Link
                  href={button.href}
                  className="group block"
                >
                  <motion.div 
                    className="relative overflow-hidden border-b border-white/5 hover:border-white/30 transition-all duration-700 py-4"
                    whileHover={{ 
                      x: 15,
                      scale: 1.02,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="flex items-center justify-between">
                      <motion.span 
                        className="text-lg md:text-xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-white/60 via-white/80 to-white/60 tracking-[0.2em] uppercase group-hover:from-white group-hover:via-white group-hover:to-white transition-all duration-700 relative"
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.2
                        }}
                        style={{
                          backgroundSize: '200% 200%',
                        }}
                        whileHover={{
                          x: 5,
                        }}
                      >
                        {button.label}
                        {/* Animated underline on hover */}
                        <motion.span
                          className="absolute bottom-0 left-0 h-px bg-white/50"
                          initial={{ width: 0 }}
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.4 }}
                        />
                      </motion.span>
                      <motion.span
                        className="text-white/20 group-hover:text-white/80 text-sm font-extralight transition-colors duration-500"
                        whileHover={{ 
                          x: 12,
                          scale: 1.2,
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      >
                        →
                      </motion.span>
                    </div>
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-white/0 via-white/40 to-white/0"
                      initial={{ width: 0, x: '-50%' }}
                      whileHover={{ width: '100%', x: '0%' }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    />
                    {/* Enhanced glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: '-100%', opacity: 0 }}
                      whileHover={{ x: '100%', opacity: 1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    {/* Ripple effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/5 rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
