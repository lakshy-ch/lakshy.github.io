'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, BookOpen, Send, MessageCircle, Globe } from 'lucide-react'

const socialLinks = [
  { icon: <Linkedin size={24} />, url: 'https://linkedin.com/in/lakshy', label: 'LinkedIn' },
  { icon: <Github size={24} />, url: 'https://github.com/lakshy', label: 'GitHub' },
  { icon: <BookOpen size={24} />, url: 'https://www.researchgate.net/profile/Lakshy', label: 'ResearchGate' },
  { icon: <Globe size={24} />, url: 'https://lakshy.notion.site', label: 'Notion' }
]

export default function ContactSection() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { from: 'system', text: 'Hi! How can I help you today?' }
  ])
  const [sending, setSending] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { from: 'user', text: input }])
    setInput('')
    setSending(true)
    setTimeout(() => {
      setMessages(msgs => [...msgs, { from: 'system', text: 'Thank you! I will get back to you soon.' }])
      setSending(false)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="cyber-text text-4xl md:text-5xl font-bold gradient-text mb-4">
            Contact Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Reach out for collaborations, research, or just to say hello!
          </p>
        </motion.div>

        {/* Chatbot-style form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect rounded-lg p-6 max-w-xl mx-auto mb-12"
        >
          <div className="h-48 overflow-y-auto mb-4 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-2 flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-4 py-2 rounded-lg max-w-xs ${msg.from === 'user' ? 'bg-electric-purple text-white' : 'bg-glass-dark text-emerald-green'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {sending && (
              <div className="mb-2 flex justify-start">
                <div className="px-4 py-2 rounded-lg max-w-xs bg-glass-dark text-emerald-green">
                  <span className="loading-dots"></span>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              className="flex-1 px-4 py-2 rounded-lg bg-glass-dark text-white cyber-text focus:outline-none"
              placeholder="Type your message..."
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              className="px-4 py-2 bg-emerald-green text-black rounded-lg font-bold cyber-text"
            >
              <MessageCircle size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-8"
        >
          {socialLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full glass-effect neon-glow-purple transition-all duration-300 flex items-center justify-center"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 