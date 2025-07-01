'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Bot, Mic, Zap, MessageCircle } from 'lucide-react'

export default function ViduhrSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isListening, setIsListening] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'viduhr', text: 'Hello, I am Viduhr, your AI assistant. How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return
    setMessages([...messages, { from: 'user', text: input }])
    setInput('')
    setLoading(true)
    try {
      // Call OpenAI's free API endpoint (replace with your own key for production)
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer sk-demo-key` // <-- Replace with your own OpenAI key for real use
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are Viduhr, a helpful, futuristic AI assistant for students.' },
            ...messages.filter(m => m.from !== 'viduhr').map(m => ({ role: m.from === 'user' ? 'user' : 'assistant', content: m.text })),
            { role: 'user', content: input }
          ],
          max_tokens: 80,
          temperature: 0.7
        })
      })
      if (!res.ok) throw new Error('API error')
      const data = await res.json()
      const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not get a response.'
      setMessages(msgs => [...msgs, { from: 'viduhr', text: reply }])
    } catch (e) {
      setMessages(msgs => [...msgs, { from: 'viduhr', text: 'Sorry, there was an error connecting to the AI.' }])
    }
    setLoading(false)
  }

  return (
    <section id="viduhr" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="cyber-text text-4xl md:text-5xl font-bold gradient-text mb-4">
            Viduhr AI Zone
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet Viduhr, your local JARVIS-like AI assistant with voice and chat capabilities
          </p>
        </motion.div>

        {/* Avatar and Voice Wave */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="relative mb-4">
            <motion.div
              animate={{ boxShadow: isListening ? '0 0 40px 10px #06ffa5' : '0 0 20px 4px #8338ec' }}
              transition={{ duration: 0.5 }}
              className="w-32 h-32 rounded-full bg-glass-dark flex items-center justify-center neon-glow-green"
            >
              <Bot size={64} className="text-emerald-green" />
            </motion.div>
            {/* Voice wave animation */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 wave-container"
              animate={{ opacity: isListening ? 1 : 0.5 }}
            >
              <div className="wave h-8 w-32"></div>
            </motion.div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsListening(l => !l)}
            className={`px-6 py-2 rounded-lg font-bold cyber-text flex items-center space-x-2 ${isListening ? 'bg-emerald-green text-black' : 'bg-electric-purple text-white'}`}
          >
            <Mic size={20} />
            <span>{isListening ? 'Listening...' : 'Talk to Viduhr'}</span>
            <Zap size={20} className={isListening ? 'animate-pulse' : ''} />
          </motion.button>
        </motion.div>

        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-effect rounded-lg p-6 max-w-xl mx-auto"
        >
          <div className="h-48 overflow-y-auto mb-4 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-2 flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-4 py-2 rounded-lg max-w-xs ${msg.from === 'user' ? 'bg-electric-purple text-white' : 'bg-glass-dark text-emerald-green'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
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
              disabled={loading}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              className="px-4 py-2 bg-emerald-green text-black rounded-lg font-bold cyber-text"
              disabled={loading}
            >
              <MessageCircle size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 