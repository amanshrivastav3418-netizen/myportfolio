'use client'

import { motion } from 'framer-motion'
import { Book, Award, Zap } from 'lucide-react'
import { resumeData } from '@/lib/resume-data'

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="education" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            Education
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline line */}
              {index < resumeData.education.length - 1 && (
                <div className="absolute left-0 md:left-auto md:right-full md:w-px w-1 h-full bg-gradient-to-b from-blue-500/50 to-transparent top-12 md:top-0" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-full top-6 -translate-x-2.5 md:translate-x-2.5 w-5 h-5 rounded-full border-2 border-blue-400 bg-slate-900 md:mr-8" />

              {/* Card */}
              <div className="md:ml-0 md:text-right md:pr-12 ml-8">
                <motion.div
                  whileHover={{ scale: 1.02, x: -5 }}
                  className="border border-blue-500/30 rounded-lg p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm hover:border-blue-400/60 transition-all"
                >
                  {/* Degree & Institution */}
                  <h3 className="text-lg md:text-xl font-bold text-blue-300 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-300 font-semibold mb-2">
                    {edu.institution}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 text-sm text-slate-400 mb-3">
                    <p>{edu.location}</p>
                    <p className="flex gap-2 md:justify-end">
                      <span className="font-semibold">
                        {edu.startDate || edu.date}
                      </span>
                      {edu.endDate && (
                        <>
                          <span>–</span>
                          <span className="font-semibold">{edu.endDate}</span>
                        </>
                      )}
                    </p>
                  </div>

                  {/* Performance Badge */}
                  <div className="inline-block md:inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg">
                    <span className="text-sm font-semibold text-blue-300">
                      {edu.details}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
        >
          <div className="border border-blue-500/20 rounded-lg p-4 md:p-6 bg-slate-900/30">
            <div className="flex items-center gap-3 mb-3">
              <Book className="w-5 h-5 text-blue-400" />
              <h4 className="font-bold text-blue-300">Current Studies</h4>
            </div>
            <p className="text-sm text-slate-400">
              3rd Year BCA Student pursuing excellence in computer science
            </p>
          </div>

          <div className="border border-purple-500/20 rounded-lg p-4 md:p-6 bg-slate-900/30">
            <div className="flex items-center gap-3 mb-3">
              <Award className="w-5 h-5 text-purple-400" />
              <h4 className="font-bold text-purple-300">Strong Foundation</h4>
            </div>
            <p className="text-sm text-slate-400">
              Solid understanding of Data Structures, Algorithms, and OOP
            </p>
          </div>

          <div className="border border-cyan-500/20 rounded-lg p-4 md:p-6 bg-slate-900/30">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-5 h-5 text-cyan-400" />
              <h4 className="font-bold text-cyan-300">Growth Focused</h4>
            </div>
            <p className="text-sm text-slate-400">
              Eager to apply skills and gain industry experience
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
