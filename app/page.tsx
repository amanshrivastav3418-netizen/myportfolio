'use client'

import { useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SplashScreen from '@/components/SplashScreen'
import AnimatedBackground from '@/components/AnimatedBackground'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Achievements from '@/components/Achievements'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Footer from '@/components/Footer'

// Skip static generation for this page - allow dynamic rendering only
export const dynamic = 'force-dynamic'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const experienceRef = useRef<HTMLDivElement>(null)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  const handleViewExperience = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <AnimatedBackground />
      <Navigation />

      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>

      {!showSplash && (
        <main className="relative w-full">
          <Hero onViewExperience={handleViewExperience} />
          <div ref={experienceRef}>
            <Experience />
          </div>
          <Achievements />
          <Skills />
          <Education />
          <Footer />
        </main>
      )}
    </>
  )
}
