'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Brain, Globe, Code } from 'lucide-react'

export default function HeroSection() {
  const scrollToNext = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-matte-black via-deep-gray to-matte-black"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-electric-purple rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Main greeting */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1 className="cyber-text text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">Hello,</span>
            <br />
            <span className="text-white">I am</span>
            <br />
            <span className="gradient-text">Lakshy</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 cyber-text"
        >
          GKS Scholar • Ph.D. Student • AI Researcher
        </motion.p>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="flex items-center space-x-2 text-emerald-green">
            <Brain size={24} />
            <span className="cyber-text">Neuro-AI</span>
          </div>
          <div className="flex items-center space-x-2 text-neon-red">
            <Globe size={24} />
            <span className="cyber-text">Web5</span>
          </div>
          <div className="flex items-center space-x-2 text-electric-purple">
            <Code size={24} />
            <span className="cyber-text">Facial Analysis</span>
          </div>
        </motion.div>

        {/* Location and languages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mb-12"
        >
          <p className="text-gray-400 mb-2">
            <span className="korean-text">📍 Kunsan National University, South Korea</span>
          </p>
          <p className="text-gray-400">
            <span className="korean-text">🌐 English • Hindi • 한국어</span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(131, 56, 236, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToNext}
            className="px-8 py-4 bg-gradient-to-r from-electric-purple to-neon-red rounded-lg font-bold cyber-text neon-glow-purple hover:neon-glow-red transition-all duration-300"
          >
            Explore My World
          </motion.button>
          
          <motion.a
            href="#viduhr"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-emerald-green text-emerald-green rounded-lg font-bold cyber-text hover:bg-emerald-green hover:text-black transition-all duration-300"
          >
            Meet Viduhr AI
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToNext}
            className="cursor-pointer"
          >
            <ChevronDown size={32} className="text-gray-400 hover:text-white transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 