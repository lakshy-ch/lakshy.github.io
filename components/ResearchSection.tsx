'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Eye, Globe, Cpu, Filter } from 'lucide-react'

interface ResearchItem {
  id: number
  title: string
  category: string
  description: string
  icon: React.ReactNode
  color: string
  glow: string
}

export default function ResearchSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [activeFilter, setActiveFilter] = useState('all')

  const researchItems: ResearchItem[] = [
    {
      id: 1,
      title: "Neuro-AI Integration",
      category: "ai",
      description: "Developing neural networks that mimic human brain patterns for enhanced AI cognition and decision-making processes.",
      icon: <Brain size={32} />,
      color: "text-emerald-green",
      glow: "neon-glow-green"
    },
    {
      id: 2,
      title: "Facial Analysis Systems",
      category: "facial",
      description: "Advanced computer vision algorithms for real-time facial expression recognition and emotion analysis.",
      icon: <Eye size={32} />,
      color: "text-neon-red",
      glow: "neon-glow-red"
    },
    {
      id: 3,
      title: "Web5 Development",
      category: "web5",
      description: "Building decentralized applications and identity systems using next-generation web technologies.",
      icon: <Globe size={32} />,
      color: "text-electric-purple",
      glow: "neon-glow-purple"
    },
    {
      id: 4,
      title: "Machine Learning Optimization",
      category: "ai",
      description: "Optimizing neural network architectures for improved performance and efficiency in various applications.",
      icon: <Cpu size={32} />,
      color: "text-cyber-blue",
      glow: "neon-glow-blue"
    },
    {
      id: 5,
      title: "Emotion Recognition AI",
      category: "facial",
      description: "Multi-modal emotion recognition systems combining facial, vocal, and contextual analysis.",
      icon: <Brain size={32} />,
      color: "text-emerald-green",
      glow: "neon-glow-green"
    },
    {
      id: 6,
      title: "Decentralized Identity",
      category: "web5",
      description: "Self-sovereign identity solutions using blockchain and cryptographic technologies for secure digital identity management.",
      icon: <Globe size={32} />,
      color: "text-electric-purple",
      glow: "neon-glow-purple"
    }
  ]

  const filters = [
    { id: 'all', label: 'All Research' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'facial', label: 'Facial Analysis' },
    { id: 'web5', label: 'Web5' }
  ]

  const filteredItems = activeFilter === 'all' 
    ? researchItems 
    : researchItems.filter(item => item.category === activeFilter)

  return (
    <section id="research" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 fade-in parallax"
        >
          <h2 className="cyber-text text-4xl md:text-5xl font-bold gradient-text mb-4">
            Research Areas
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Exploring cutting-edge technologies at the intersection of AI, neuroscience, and web innovation
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-bold cyber-text transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === filter.id
                  ? 'bg-electric-purple text-white neon-glow-purple'
                  : 'bg-glass-effect text-gray-300 hover:bg-electric-purple/20'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Filter size={16} />
              <span>{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Research Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in parallax"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 0 30px ${item.glow === 'neon-glow-green' ? 'rgba(6, 255, 165, 0.5)' : 
                              item.glow === 'neon-glow-red' ? 'rgba(255, 0, 110, 0.5)' :
                              item.glow === 'neon-glow-purple' ? 'rgba(131, 56, 236, 0.5)' :
                              'rgba(58, 134, 255, 0.5)'}`
              }}
              className={`glass-effect rounded-lg p-6 ${item.glow} transition-all duration-300 fade-in parallax`}
            >
              <div className={`${item.color} mb-4 dark:text-white`}>
                {item.icon}
              </div>
              <h3 className="cyber-text text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Research Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="cyber-text text-2xl font-bold text-center gradient-text mb-8">
            Research Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-electric-purple to-emerald-green"></div>
            <div className="space-y-8">
              {[
                { year: "2024", title: "Ph.D. Research", desc: "Advanced Neuro-AI studies" },
                { year: "2023", title: "GKS Scholarship", desc: "Started at Kunsan National University" },
                { year: "2022", title: "AI Research", desc: "Facial analysis and ML projects" },
                { year: "2021", title: "Web5 Exploration", desc: "Decentralized technology research" }
              ].map((timeline, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 px-8">
                    <div className="glass-effect rounded-lg p-4">
                      <h4 className="cyber-text font-bold text-electric-purple">{timeline.year}</h4>
                      <h5 className="text-white font-semibold">{timeline.title}</h5>
                      <p className="text-gray-400 text-sm">{timeline.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-electric-purple rounded-full border-4 border-matte-black"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 