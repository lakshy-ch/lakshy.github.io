'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Terminal, Award, GraduationCap, MapPin, Languages } from 'lucide-react'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const terminalLines = [
    { text: "> whoami", delay: 0 },
    { text: "Lakshy - GKS Scholar & Ph.D. Student", delay: 0.5 },
    { text: "> location", delay: 1 },
    { text: "Kunsan National University, South Korea", delay: 1.5 },
    { text: "> research_interests", delay: 2 },
    { text: "AI, Neuro-AI, Facial Analysis, Web5", delay: 2.5 },
    { text: "> languages", delay: 3 },
    { text: "English, Hindi, 한국어 (Korean)", delay: 3.5 },
    { text: "> status", delay: 4 },
    { text: "Active Research & Development", delay: 4.5 },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 fade-in parallax"
        >
          <h2 className="cyber-text text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Exploring the intersection of AI, neuroscience, and Korean culture
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Terminal Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-effect-dark rounded-lg p-6 neon-glow-green fade-in parallax"
          >
            <div className="flex items-center mb-4">
              <Terminal className="text-emerald-green dark:text-emerald-400 mr-2" size={20} />
              <span className="cyber-text text-emerald-green dark:text-emerald-400">terminal@lakshy:~$</span>
            </div>
            <div className="space-y-2 font-mono text-sm">
              {terminalLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: line.delay, duration: 0.3 }}
                  className="flex items-start"
                >
                  {line.text.startsWith('>') ? (
                    <span className="text-emerald-green">{line.text}</span>
                  ) : (
                    <span className="text-gray-300 ml-4">{line.text}</span>
                  )}
                  {index === terminalLines.length - 1 && (
                    <span className="terminal-cursor ml-1 text-emerald-green">|</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* GKS Scholarship */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-lg p-6 neon-glow-purple"
            >
              <div className="flex items-center mb-3">
                <Award className="text-electric-purple mr-3" size={24} />
                <h3 className="cyber-text text-xl font-bold text-electric-purple">
                  GKS Scholar
                </h3>
              </div>
              <p className="text-gray-300">
                Recipient of the prestigious Global Korea Scholarship, enabling advanced research 
                in AI and Korean studies at Kunsan National University.
              </p>
            </motion.div>

            {/* Ph.D. Research */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-lg p-6 neon-glow-red"
            >
              <div className="flex items-center mb-3">
                <GraduationCap className="text-neon-red mr-3" size={24} />
                <h3 className="cyber-text text-xl font-bold text-neon-red">
                  Ph.D. Research
                </h3>
              </div>
              <p className="text-gray-300">
                Specializing in Neuro-AI and facial analysis, developing cutting-edge 
                technologies that bridge artificial intelligence and human cognition.
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-lg p-6 neon-glow-blue"
            >
              <div className="flex items-center mb-3">
                <MapPin className="text-cyber-blue mr-3" size={24} />
                <h3 className="cyber-text text-xl font-bold text-cyber-blue">
                  South Korea
                </h3>
              </div>
              <p className="text-gray-300">
                Immersed in Korean culture and technology, contributing to the global 
                AI research community from the heart of innovation.
              </p>
            </motion.div>

            {/* Languages */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-lg p-6 neon-glow-green"
            >
              <div className="flex items-center mb-3">
                <Languages className="text-emerald-green mr-3" size={24} />
                <h3 className="cyber-text text-xl font-bold text-emerald-green">
                  Multilingual
                </h3>
              </div>
              <p className="text-gray-300">
                Fluent in English, Hindi, and Korean, enabling cross-cultural 
                collaboration and research communication.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 