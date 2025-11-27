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
      className="glass-blue px-4 py-2 rounded-lg text-white/70 hover:text-white transition-all group border border-primary-500/20 flex items-center gap-2 font-medium"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      <FaGlobe className="text-lg" />
      <span className="uppercase text-sm font-semibold">{language === 'en' ? 'ES' : 'EN'}</span>
    </motion.button>
  )
}

