'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageToggle from './LanguageToggle'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.skills, href: '/skills' },
    { name: t.nav.projects, href: '/projects' },
    { name: t.nav.contact, href: '/contact' },
  ]

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            prefetch={true}
            className="text-2xl font-extralight tracking-[0.1em] text-white transition-opacity hover:opacity-80"
          >
            PORTFOLIO
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                className={`relative group px-2 py-1 font-extralight tracking-[0.2em] text-xs uppercase transition-colors duration-150 ${
                  pathname === item.href
                    ? 'text-white'
                    : 'text-white/40 hover:text-white/80'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-px transition-all duration-200 ${
                  pathname === item.href ? 'w-full bg-white/30' : 'w-0 group-hover:w-full bg-white/20'
                }`} />
              </Link>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              className="text-2xl text-white transition-opacity hover:opacity-80 active:opacity-60"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 space-y-2 pb-4 bg-black/90 backdrop-blur-md rounded-lg p-4 border border-white/10 shadow-lg"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                className={`block px-4 py-2 transition-colors duration-150 font-extralight tracking-[0.2em] text-xs uppercase rounded ${
                  pathname === item.href
                    ? 'text-white bg-white/5'
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}
                onClick={handleMobileMenuClose}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

