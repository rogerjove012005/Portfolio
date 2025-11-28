'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="relative py-12 px-4 border-t border-white/5 bg-black">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <motion.p
            className="text-white/40 text-center font-extralight text-sm tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            © {new Date().getFullYear()} Portfolio. {t.footer.rights}
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

