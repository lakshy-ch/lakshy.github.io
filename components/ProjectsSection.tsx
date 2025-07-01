'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Play } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  videoUrl?: string
  color: string
  glow: string
}

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects: Project[] = [
    {
      id: 1,
      title: "Viduhr AI Assistant",
      description: "Local JARVIS-like AI assistant with voice interaction and facial recognition capabilities.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Speech Recognition"],
      githubUrl: "https://github.com/lakshy/viduhr-ai",
      videoUrl: "#",
      color: "text-emerald-green",
      glow: "neon-glow-green"
    },
    {
      id: 2,
      title: "Web5 Portfolio",
      description: "Futuristic portfolio website with Web5 integration and decentralized identity features.",
      technologies: ["Next.js", "Web5", "Three.js", "TailwindCSS"],
      githubUrl: "https://github.com/lakshy/web5-portfolio",
      liveUrl: "#",
      color: "text-electric-purple",
      glow: "neon-glow-purple"
    },
    {
      id: 3,
      title: "Facial Emotion Analyzer",
      description: "Real-time facial expression recognition system using deep learning and computer vision.",
      technologies: ["Python", "OpenCV", "PyTorch", "Flask"],
      githubUrl: "https://github.com/lakshy/emotion-analyzer",
      videoUrl: "#",
      color: "text-neon-red",
      glow: "neon-glow-red"
    },
    {
      id: 4,
      title: "Neuro-AI Research Platform",
      description: "Platform for analyzing neural network patterns and brain-computer interface research.",
      technologies: ["Python", "TensorFlow", "Neuroscience", "Data Analysis"],
      githubUrl: "https://github.com/lakshy/neuro-ai-platform",
      color: "text-cyber-blue",
      glow: "neon-glow-blue"
    },
    {
      id: 5,
      title: "Korean Learning App",
      description: "Interactive Korean language learning application with AI-powered pronunciation feedback.",
      technologies: ["React Native", "AI", "Speech API", "Korean NLP"],
      githubUrl: "https://github.com/lakshy/korean-learning-app",
      liveUrl: "#",
      color: "text-emerald-green",
      glow: "neon-glow-green"
    },
    {
      id: 6,
      title: "Decentralized Identity System",
      description: "Web5-based self-sovereign identity solution with blockchain integration.",
      technologies: ["Web5", "Blockchain", "DID", "Cryptography"],
      githubUrl: "https://github.com/lakshy/did-system",
      color: "text-electric-purple",
      glow: "neon-glow-purple"
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 fade-in parallax"
        >
          <h2 className="cyber-text text-4xl md:text-5xl font-bold gradient-text mb-4">
            Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing innovative projects at the forefront of AI, Web5, and Korean technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in parallax">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: `0 0 30px ${project.glow === 'neon-glow-green' ? 'rgba(6, 255, 165, 0.5)' : 
                              project.glow === 'neon-glow-red' ? 'rgba(255, 0, 110, 0.5)' :
                              project.glow === 'neon-glow-purple' ? 'rgba(131, 56, 236, 0.5)' :
                              'rgba(58, 134, 255, 0.5)'}`
              }}
              className={`glass-effect rounded-lg p-6 ${project.glow} transition-all duration-300 transform perspective-1000 fade-in parallax`}
            >
              <div className="mb-4">
                <h3 className={`cyber-text text-xl font-bold ${project.color} mb-2`}>
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-glass-dark rounded text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={16} />
                  <span className="text-xs">Code</span>
                </motion.a>

                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-xs">Live</span>
                  </motion.a>
                )}

                {project.videoUrl && (
                  <motion.a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                  >
                    <Play size={16} />
                    <span className="text-xs">Demo</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="cyber-text text-2xl font-bold gradient-text mb-8">
            GitHub Activity
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Repositories", value: "25+" },
              { label: "Contributions", value: "500+" },
              { label: "Stars", value: "150+" },
              { label: "Languages", value: "8+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="glass-effect rounded-lg p-6"
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 cyber-text">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 