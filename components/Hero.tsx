'use client'

import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'
import { resumeData } from '@/lib/resume-data'

interface HeroProps {
  onViewExperience: () => void
}

export default function Hero({ onViewExperience }: HeroProps) {
  const handleDownloadResume = () => {
    // Create resume text dynamically to avoid build-time evaluation
    const generateResumeText = () => {
      const lines: string[] = []
      lines.push(resumeData.basics.name)
      lines.push(`${resumeData.basics.phone} | ${resumeData.basics.email}`)
      lines.push('')
      lines.push('OBJECTIVE')
      lines.push(resumeData.basics.summary)
      lines.push('')
      lines.push('EDUCATION')
      
      resumeData.education.forEach((edu) => {
        lines.push(edu.institution)
        lines.push(edu.degree)
        lines.push(edu.location)
        if (edu.startDate || edu.date) {
          const start = edu.startDate || edu.date
          const end = edu.endDate ? ` - ${edu.endDate}` : ''
          lines.push(start + end)
        }
        lines.push(edu.details)
        lines.push('')
      })
      
      lines.push('SKILLS')
      Object.entries(resumeData.skills).forEach(([key, values]) => {
        const keyLabel = key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, (str) => str.toUpperCase())
          .trim()
        const skillList = Array.isArray(values) ? values.join(', ') : values
        lines.push(`${keyLabel}: ${skillList}`)
      })
      
      lines.push('')
      lines.push('SOFT SKILLS')
      lines.push(resumeData.softSkills.join(', '))
      
      lines.push('')
      lines.push('LANGUAGES')
      resumeData.languages.forEach((lang) => {
        lines.push(`${lang.name} – ${lang.proficiency}`)
      })
      
      lines.push('')
      lines.push('EXPERIENCE')
      resumeData.experience.forEach((exp) => {
        lines.push(exp.company)
        lines.push(exp.role)
        lines.push(exp.location)
        lines.push(`${exp.startDate} – ${exp.endDate}`)
        exp.bullets.forEach((bullet) => {
          lines.push(`• ${bullet}`)
        })
        lines.push('')
      })
      
      lines.push('ACHIEVEMENTS')
      resumeData.achievements.forEach((ach) => {
        lines.push(`• ${ach.description}`)
      })
      
      return lines.join('\n')
    }

    const resumeText = generateResumeText()
    const element = document.createElement('a')
    element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(resumeText)}`)
    element.setAttribute('download', `AMAN-Resume.txt`)
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 md:px-8"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Gradient text background */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-lg filter blur-xl -z-10" />

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400"
        >
          {resumeData.basics.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-cyan-300 mb-4 font-light tracking-wide"
        >
          {resumeData.basics.title}
        </motion.p>

        {/* Summary */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {resumeData.basics.summary}
        </motion.p>

        {/* Location */}
        <motion.p
          variants={itemVariants}
          className="text-sm text-slate-400 mb-8 flex items-center justify-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          {resumeData.basics.location}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <button
            onClick={onViewExperience}
            className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2"
          >
            <span>View Experience</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleDownloadResume}
            className="group relative px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400"
        >
          <a
            href={`mailto:${resumeData.basics.email}`}
            className="hover:text-cyan-400 transition-colors"
          >
            {resumeData.basics.email}
          </a>
          <span className="hidden sm:inline text-slate-600">•</span>
          <a
            href={`tel:${resumeData.basics.phone}`}
            className="hover:text-cyan-400 transition-colors"
          >
            {resumeData.basics.phone}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border border-cyan-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
