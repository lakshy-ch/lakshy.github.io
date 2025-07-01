'use client'

import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-matte-black flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="cyber-text text-4xl md:text-6xl font-bold gradient-text mb-4">
            LAKSHY
          </h1>
          <p className="text-electric-purple cyber-text text-lg">
            AI Researcher & Ph.D. Student
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center items-center space-x-2"
        >
          <div className="w-3 h-3 bg-neon-red rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-electric-purple rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-emerald-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 text-gray-400 cyber-text"
        >
          Initializing Web5 Portfolio
          <span className="loading-dots"></span>
        </motion.p>
      </div>
    </div>
  )
} 