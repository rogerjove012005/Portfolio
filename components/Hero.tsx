'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const { t } = useLanguage()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHoveringParticles, setIsHoveringParticles] = useState(false)
  const [justReleasedHover, setJustReleasedHover] = useState(false)
  
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

  // Minimalist particle system - scattered and dispersed circular distribution
  const particleCount = 300 // 200-400 particles for sparse elegant distribution
  const baseRadius = 250 // Radius 250-350px
  const expandedRadius = 350
  const particleColors = [
    '#ffffff', // Pure white
    '#f8f9fa', // Very light gray-white
    '#e9ecef', // Light gray-white
    '#dee2e6', // Pale gray
    '#f0f0f0', // Off-white
    '#ffffff', // Pure white (more white particles)
  ]

  // Generate particle properties with high dispersion
  const generateParticleProps = (index: number) => {
    // High dispersion factor - random radial offset
    const angle = (index * 360) / particleCount + (Math.sin(index * 0.7) * 15) // Angle variation
    const radian = (angle * Math.PI) / 180
    
    // High radial dispersion - particles spread out significantly
    const radialOffset = (Math.sin(index * 0.5) * 60) + (Math.cos(index * 0.3) * 40) + (Math.sin(index * 0.9) * 30)
    const baseRad = baseRadius + radialOffset
    
    // Random size between 1-5px
    const size = 1 + (index % 5) * 0.8 + (Math.sin(index * 0.4) * 0.5)
    
    // Random color selection
    const colorIndex = index % particleColors.length
    const color = particleColors[colorIndex]
    
    // Some particles slightly blurred for depth (randomly)
    const hasBlur = index % 7 === 0 || index % 11 === 0
    
    // Varying opacity for depth
    const opacity = 0.6 + (index % 3) * 0.15
    
    return {
      angle,
      radian,
      baseRad,
      size,
      color,
      hasBlur,
      opacity,
    }
  }

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

      {/* Minimalist Scattered Particle Field - Right side */}
      <div 
        className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-auto"
        onMouseEnter={() => {
          setIsHoveringParticles(true)
          setJustReleasedHover(false)
        }}
        onMouseLeave={() => {
          setIsHoveringParticles(false)
          setJustReleasedHover(true)
          // Reset the animation flag after animation completes
          setTimeout(() => setJustReleasedHover(false), 800)
        }}
      >
        <motion.div 
          className="relative w-[800px] h-[800px]"
          animate={{
            rotate: isHoveringParticles ? 360 : 0,
          }}
          transition={{
            duration: isHoveringParticles ? 30 : 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...Array(particleCount)].map((_, i) => {
            const props = generateParticleProps(i)
            const currentRadius = isHoveringParticles 
              ? props.baseRad + (expandedRadius - baseRadius) 
              : props.baseRad
            
            // Animation when hover is released - particles pulse and spread
            const releaseAnimation = justReleasedHover ? {
              scale: [1, 1.5 + (i % 3) * 0.2, 1],
              opacity: [props.opacity, props.opacity * 1.5, props.opacity * 0.3, props.opacity],
            } : {}
            
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  width: `${props.size}px`,
                  height: `${props.size}px`,
                  background: props.color,
                  opacity: props.opacity,
                  filter: props.hasBlur ? 'blur(0.5px)' : 'none',
                  boxShadow: `0 0 ${props.size * 2}px ${props.color}40`,
                }}
                animate={{
                  x: Math.cos(props.radian) * currentRadius,
                  y: Math.sin(props.radian) * currentRadius,
                  opacity: justReleasedHover 
                    ? [props.opacity, props.opacity * 1.5, props.opacity * 0.3, props.opacity]
                    : [props.opacity * 0.5, props.opacity, props.opacity * 0.5],
                  scale: justReleasedHover
                    ? [1, 1.5 + (i % 3) * 0.2, 1]
                    : [0.9, 1.2, 0.9],
                }}
                transition={{
                  x: {
                    duration: isHoveringParticles ? 1.2 : (justReleasedHover ? 0.8 : 0),
                    ease: [0.22, 1, 0.36, 1],
                    delay: justReleasedHover ? (i % 10) * 0.01 : 0,
                  },
                  y: {
                    duration: isHoveringParticles ? 1.2 : (justReleasedHover ? 0.8 : 0),
                    ease: [0.22, 1, 0.36, 1],
                    delay: justReleasedHover ? (i % 10) * 0.01 : 0,
                  },
                  opacity: {
                    duration: justReleasedHover 
                      ? 0.8 
                      : (2 + (i % 5) * 0.3),
                    repeat: justReleasedHover ? 0 : Infinity,
                    ease: justReleasedHover ? [0.34, 1.56, 0.64, 1] : "easeInOut",
                    delay: justReleasedHover ? (i % 10) * 0.01 : (i * 0.02),
                  },
                  scale: {
                    duration: justReleasedHover 
                      ? 0.8 
                      : (2.5 + (i % 4) * 0.4),
                    repeat: justReleasedHover ? 0 : Infinity,
                    ease: justReleasedHover ? [0.34, 1.56, 0.64, 1] : "easeInOut",
                    delay: justReleasedHover ? (i % 10) * 0.01 : (i * 0.015),
                  },
                }}
              />
            )
          })}
        </motion.div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 pt-32">
        <div className="flex flex-col justify-center min-h-[calc(100vh-8rem)]">
          {/* Left-aligned content */}
          <div className="max-w-4xl">
            {/* Main Name - Larger, single line, brighter */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight text-white/90 tracking-[0.05em] leading-[1.1] text-left relative"
                animate={{
                  opacity: [0.9, 1, 0.9],
                  filter: [
                    'drop-shadow(0 0 0px rgba(255,255,255,0))',
                    'drop-shadow(0 0 25px rgba(255,255,255,0.2))',
                    'drop-shadow(0 0 0px rgba(255,255,255,0))',
                  ],
                }}
                transition={{
                  opacity: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  filter: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{
                  opacity: 1,
                  filter: 'drop-shadow(0 0 35px rgba(255,255,255,0.3))',
                  transition: { duration: 0.3 }
                }}
              >
                ROGER JOVÉ
              </motion.h1>
            </motion.div>
            
            {/* Tagline - Left-aligned without underline */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm md:text-base font-extralight text-white/40 tracking-[0.3em] uppercase mb-16 letter-spacing-wider text-left relative inline-block"
              whileHover={{
                x: 10,
                transition: { duration: 0.3 }
              }}
            >
              {t.hero.tagline}
            </motion.p>
          </div>

          {/* Navigation Buttons - Ultra elegant design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-0 w-full max-w-lg"
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
                    className="relative overflow-hidden py-6 border-l border-white/5 group-hover:border-white/20 transition-all duration-500"
                    whileHover={{ 
                      x: 6,
                      paddingLeft: '1.5rem',
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    {/* Elegant vertical line that extends on hover */}
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-px bg-white/30"
                      initial={{ height: 0, top: '50%' }}
                      whileHover={{ height: '100%', top: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                    
                    {/* Subtle background glow on hover */}
                    <motion.div
                      className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-500"
                    />
                    
                    <div className="flex items-center justify-between pl-8 relative z-10">
                      <motion.span 
                        className="text-sm md:text-base font-extralight text-white/45 tracking-[0.3em] uppercase group-hover:text-white/90 transition-all duration-500"
                        whileHover={{ 
                          x: 6,
                          letterSpacing: '0.35em',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {button.label}
                      </motion.span>
                      <motion.span
                        className="text-white/15 group-hover:text-white/50 text-xs font-extralight transition-all duration-500"
                        whileHover={{ 
                          x: 6,
                          opacity: 0.7,
                        }}
                        transition={{ type: "spring", stiffness: 500, damping: 25 }}
                      >
                        →
                      </motion.span>
                    </div>
                    
                    {/* Elegant bottom accent line */}
                    <motion.div
                      className="absolute bottom-0 left-8 right-0 h-px bg-gradient-to-r from-white/0 via-white/15 to-white/0"
                      initial={{ width: 0, opacity: 0 }}
                      whileHover={{ width: 'calc(100% - 2rem)', opacity: 1 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                    
                    {/* Subtle shine effect that moves on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0"
                      whileHover={{ 
                        opacity: 1,
                        x: ['-100%', '100%'],
                      }}
                      transition={{ 
                        opacity: { duration: 0.3 },
                        x: { duration: 0.8, ease: "easeInOut" }
                      }}
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
