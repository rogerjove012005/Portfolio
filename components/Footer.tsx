'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { useLanguage } from '@/contexts/LanguageContext'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:email@example.com', label: 'Email' },
]

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="relative py-12 px-4 border-t border-white/5 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <motion.p
            className="text-white/40 text-center md:text-left font-extralight text-sm tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            © {new Date().getFullYear()} Portfolio. {t.footer.rights}
          </motion.p>
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-white/40 hover:text-white/80 transition-all group border border-white/10 bg-black/30 hover:bg-white/[0.02]"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                aria-label={label}
                style={{ willChange: 'transform' }}
              >
                <Icon className="text-xl group-hover:scale-110 transition-transform duration-200" />
              </motion.a>
            ))}
          </div>
        </div>
        <motion.div
          className="mt-8 pt-8 border-t border-white/5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-white/30 text-xs font-extralight tracking-wider">
            {t.footer.madeWith} <span className="text-white/50">❤️</span> {t.footer.using}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

