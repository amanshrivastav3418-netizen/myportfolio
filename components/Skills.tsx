'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Zap } from 'lucide-react'
import { resumeData } from '@/lib/resume-data'

export default function Skills() {
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

  const skillCategories = [
    {
      name: 'Programming Languages',
      icon: Code2,
      skills: resumeData.skills.programming,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Web Development',
      icon: Zap,
      skills: resumeData.skills.webDevelopment,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Database',
      icon: Database,
      skills: resumeData.skills.database,
      color: 'from-green-500 to-cyan-500',
    },
    {
      name: 'Tools & Platforms',
      icon: Code2,
      skills: resumeData.skills.toolsAndPlatforms,
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'CS Fundamentals',
      icon: Code2,
      skills: resumeData.skills.fundamentals,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      name: 'Other Tools',
      icon: Zap,
      skills: resumeData.skills.otherTools,
      color: 'from-cyan-500 to-blue-500',
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                {/* Gradient background glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-lg blur-lg opacity-20 group-hover:opacity-40 transition-opacity -z-10`}
                />

                {/* Card */}
                <div className="border border-slate-600 rounded-lg p-6 bg-slate-900/50 backdrop-blur-sm group-hover:border-cyan-400/50 transition-colors">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-20`}>
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: skillIndex * 0.05,
                        }}
                        className="px-3 py-1 text-xs bg-slate-800/80 border border-slate-600 rounded-full text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-8 rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-900/20 to-slate-900/20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-purple-300 mb-6">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeData.softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                <span className="text-slate-300">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 p-8 rounded-lg border border-cyan-500/30 bg-gradient-to-r from-cyan-900/20 to-slate-900/20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-cyan-300 mb-6">Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-between p-4 rounded border border-cyan-500/20 bg-slate-800/50"
              >
                <span className="font-semibold text-slate-100">{lang.name}</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-semibold">
                  {lang.proficiency}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
