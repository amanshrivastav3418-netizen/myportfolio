'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { resumeData } from '@/lib/resume-data'

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="experience" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
            Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline connector */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/50 to-blue-500/20 -translate-x-1/2 hidden md:block" />

              {/* Card */}
              <div
                className={`border border-cyan-500/30 rounded-lg overflow-hidden transition-all duration-300 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 ${
                  expandedIndex === index ? 'bg-slate-800/50' : 'bg-slate-900/30'
                }`}
              >
                <button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-slate-800/30 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-cyan-300 mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-slate-400 text-sm mb-2">{exp.company}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs text-slate-500">
                      <span>{exp.startDate}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{exp.endDate}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 mt-1"
                  >
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                </button>

                {/* Expanded content */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: expandedIndex === index ? 1 : 0,
                    height: expandedIndex === index ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 border-t border-cyan-500/20 pt-4">
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, bulletIndex) => (
                        <motion.li
                          key={bulletIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: expandedIndex === index ? 1 : 0,
                            x: expandedIndex === index ? 0 : -10,
                          }}
                          transition={{
                            duration: 0.3,
                            delay: bulletIndex * 0.1,
                          }}
                          className="flex gap-3 text-slate-300 text-sm leading-relaxed"
                        >
                          <span className="text-cyan-400 font-bold flex-shrink-0">
                            ▸
                          </span>
                          <span>{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Impact highlights */}
                    <div className="mt-4 pt-4 border-t border-cyan-500/20">
                      <p className="text-xs text-cyan-400 font-semibold uppercase mb-3">
                        Key Metrics
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.bullets.map((bullet, idx) => {
                          // Extract numbers from bullets
                          const numberMatch = bullet.match(/\d+[%+\-]?/)
                          if (numberMatch) {
                            return (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-xs text-cyan-300"
                              >
                                {numberMatch[0]}
                              </span>
                            )
                          }
                          return null
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
