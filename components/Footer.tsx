'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { resumeData } from '@/lib/resume-data'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer className="relative py-16 px-4 md:px-8 border-t border-cyan-500/20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* About */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-cyan-400 mb-4">About</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              3rd year BCA student passionate about software development and eager to contribute
              to dynamic tech teams.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-purple-400 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['Home', 'Experience', 'Achievements', 'Skills', 'Education'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-blue-400 mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${resumeData.basics.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <Mail size={16} />
                {resumeData.basics.email}
              </a>
              <a
                href={`tel:${resumeData.basics.phone}`}
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <Phone size={16} />
                {resumeData.basics.phone}
              </a>
              <p className="flex items-center gap-2 text-slate-400">
                <MapPin size={16} />
                {resumeData.basics.location}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-8 origin-left"
        />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 text-center sm:text-left"
        >
          <p>&copy; 2025 {resumeData.basics.name}. All rights reserved.</p>
          <p>
            Crafted with{' '}
            <span className="text-cyan-400 animate-pulse">❤</span> using NextJS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
