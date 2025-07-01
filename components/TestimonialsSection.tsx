'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Prof. Kim Jisoo',
      role: 'Advisor, Kunsan National University',
      quote: 'Lakshy is a truly innovative researcher, blending AI and cultural studies in a way I have never seen before.'
    },
    {
      name: 'Dr. Anjali Sharma',
      role: 'AI Collaborator, IIT Delhi',
      quote: 'His work on Neuro-AI and facial analysis is groundbreaking and inspiring for the next generation.'
    },
    {
      name: 'Minji Park',
      role: 'Language Exchange Partner',
      quote: 'Lakshy\'s passion for Korean language and culture is contagious. He makes learning fun and meaningful!'
    }
  ]

  return (
    <section id="testimonials" className="py-20 fade-in parallax">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="cyber-text text-4xl md:text-5xl font-bold gradient-text mb-4">
            Testimonials
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What others say about working and learning with Lakshy
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass-effect rounded-lg p-6 flex flex-col items-center text-center neon-glow-blue fade-in parallax"
            >
              <Quote size={32} className="mb-2 text-cyber-blue" />
              <p className="text-lg mb-4">"{t.quote}"</p>
              <div className="font-bold cyber-text mb-1">{t.name}</div>
              <div className="text-xs text-gray-500">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 