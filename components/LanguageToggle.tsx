'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { FaGlobe } from 'react-icons/fa'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-primary-500/30 transition-all group flex items-center gap-2 font-light tracking-wide text-sm uppercase"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      <FaGlobe className="text-base" />
      <span>{language === 'en' ? 'ES' : 'EN'}</span>
    </motion.button>
  )
}

