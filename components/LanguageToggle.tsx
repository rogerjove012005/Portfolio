'use client'

import { useCallback } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { FaGlobe } from 'react-icons/fa'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }, [language, setLanguage])

  return (
    <motion.button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-150 group flex items-center gap-2 font-light tracking-wide text-sm uppercase"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      aria-label="Toggle language"
    >
      <FaGlobe className="text-base" />
      <span>{language === 'en' ? 'ES' : 'EN'}</span>
    </motion.button>
  )
}

