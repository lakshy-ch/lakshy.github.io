'use client'

import { useState, useEffect } from 'react'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ResearchSection from '@/components/ResearchSection'
import ProjectsSection from '@/components/ProjectsSection'
import KoreanJourneySection from '@/components/KoreanJourneySection'
import FitnessSection from '@/components/FitnessSection'
import BlogSection from '@/components/BlogSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ViduhrSection from '@/components/ViduhrSection'
import ContactSection from '@/components/ContactSection'
import Navigation from '@/components/Navigation'
import ThemeToggle from '@/components/ThemeToggle'
import LoadingScreen from '@/components/LoadingScreen'
import StudentToolsSection from '@/components/StudentToolsSection'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Auto-detect system theme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode ? 'bg-matte-black text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Navigation isDarkMode={isDarkMode} />
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <ProjectsSection />
        <KoreanJourneySection />
        <FitnessSection />
        <BlogSection />
        <TestimonialsSection />
        <StudentToolsSection />
        <ViduhrSection />
        <ContactSection />
      </main>
    </div>
  )
} 