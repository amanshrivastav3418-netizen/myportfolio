'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface NavLink {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: '#hero', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Update active section
      const sections = ['hero', 'experience', 'achievements', 'skills', 'education']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:fixed md:top-0 md:right-0 md:z-40 md:flex md:items-center md:gap-8 md:pr-8 md:pt-8">
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            className={`text-sm font-semibold transition-all duration-300 ${
              activeSection === link.href.slice(1)
                ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
                : 'text-slate-400 hover:text-cyan-300'
            }`}
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-4 bg-gradient-to-b from-slate-900 to-transparent backdrop-blur-sm">
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
          AMAN
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -20,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed top-16 left-0 right-0 z-30 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 backdrop-blur-lg border-b border-cyan-500/20"
      >
        <div className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-left px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeSection === link.href.slice(1)
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/50'
                  : 'text-slate-400 hover:text-cyan-300 hover:bg-slate-800/50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 z-50"
        style={{
          width: `${(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`,
        }}
      />
    </>
  )
}
