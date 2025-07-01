'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Brain, Globe, Code, User } from 'lucide-react'

export default function HeroSection() {
  const scrollToNext = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Animation variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated layered gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-neon-red via-electric-purple to-transparent opacity-30 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-emerald-green via-cyber-blue to-transparent opacity-20 blur-2xl animate-spin-slow" />
      </div>
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-electric-purple opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Glowing Avatar */}
        <motion.div
          variants={fadeUp}
          className="mb-8 flex flex-col items-center"
        >
          <div className="w-32 h-32 rounded-full bg-glass-effect flex items-center justify-center neon-glow-purple shadow-2xl mb-4 animate-float relative">
            <User size={64} className="text-electric-purple" />
            <div className="absolute inset-0 rounded-full border-4 border-electric-purple animate-pulse pointer-events-none" />
          </div>
          <span className="cyber-text text-lg text-gray-400 tracking-widest uppercase">GKS Scholar & AI Researcher</span>
        </motion.div>

        {/* Main greeting */}
        <motion.div variants={fadeUp} className="mb-6 text-center">
          <h1 className="cyber-text text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 gradient-text drop-shadow-lg">
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              Hello, I am
            </motion.span>
            <br />
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
              Lakshy
            </motion.span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="text-xl md:text-2xl text-gray-300 mb-2 cyber-text">
            Ph.D. Student @ Kunsan National University
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="text-lg text-gray-400 mb-4">
            AI | Web5 | Neuro-AI | Korean Studies | Futuristic UI
          </motion.p>
        </motion.div>

        {/* Specializations */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          <div className="flex items-center space-x-2 text-emerald-green">
            <Brain size={28} />
            <span className="cyber-text">Neuro-AI</span>
          </div>
          <div className="flex items-center space-x-2 text-neon-red">
            <Globe size={28} />
            <span className="cyber-text">Web5</span>
          </div>
          <div className="flex items-center space-x-2 text-electric-purple">
            <Code size={28} />
            <span className="cyber-text">Facial Analysis</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0 0 40px #8338ec' }}
            whileTap={{ scale: 0.96 }}
            onClick={scrollToNext}
            className="px-10 py-4 bg-gradient-to-r from-electric-purple to-neon-red rounded-xl font-bold cyber-text neon-glow-purple hover:neon-glow-red transition-all duration-300 text-lg shadow-lg"
          >
            Explore My World
          </motion.button>
          <motion.a
            href="#viduhr"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="px-10 py-4 border-2 border-emerald-green text-emerald-green rounded-xl font-bold cyber-text hover:bg-emerald-green hover:text-black transition-all duration-300 text-lg shadow-lg"
          >
            Meet Viduhr AI
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToNext}
            className="cursor-pointer"
          >
            <ChevronDown size={36} className="text-electric-purple hover:text-neon-red transition-colors" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
} 