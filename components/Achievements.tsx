'use client'

import { motion } from 'framer-motion'
import { Award, Star } from 'lucide-react'
import { resumeData } from '@/lib/resume-data'

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }

  return (
    <section id="achievements" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
            Achievements & Recognition
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full" />
        </motion.div>

        {/* Top Impact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {resumeData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg blur-lg group-hover:blur-xl transition-all -z-10" />

              {/* Card */}
              <div className="border border-purple-500/30 rounded-lg p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm hover:border-purple-400/60 transition-all">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/30 to-cyan-500/30 mb-4 group-hover:from-purple-500/50 group-hover:to-cyan-500/50 transition-all">
                  <Award className="w-6 h-6 text-purple-300" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-purple-300 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  {achievement.description}
                </p>
                <div className="text-xs text-purple-400 font-semibold">
                  {achievement.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All Achievements List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-cyan-500/20 rounded-lg p-8 bg-slate-900/30 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
            <Star className="w-5 h-5" />
            Recognition Timeline
          </h3>
          <div className="space-y-4">
            {resumeData.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-100 mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-slate-400 text-sm">{achievement.description}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-xs text-cyan-300">
                    {achievement.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
