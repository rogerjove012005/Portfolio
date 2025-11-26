'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:email@example.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-gray-800/50">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <motion.p
            className="text-gray-400 text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            © {new Date().getFullYear()} Portfolio. Todos los derechos reservados.
          </motion.p>
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-full text-gray-400 hover:text-white transition-all group"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                aria-label={label}
              >
                <Icon className="text-xl group-hover:scale-110 transition-transform" />
                <span className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></span>
              </motion.a>
            ))}
          </div>
        </div>
        <motion.div
          className="mt-8 pt-8 border-t border-gray-800/50 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-500 text-sm">
            Hecho con <span className="text-pink-500">❤️</span> usando Next.js y Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

