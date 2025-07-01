'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, BookOpen, Share2, ClipboardList } from 'lucide-react'

export default function StudentToolsSection() {
  const tools = [
    {
      name: 'Timetable',
      icon: <ClipboardList size={32} />, 
      desc: 'View and manage your class schedule.',
      link: '#'
    },
    {
      name: 'Notes',
      icon: <BookOpen size={32} />, 
      desc: 'Organize and access your study notes.',
      link: '#'
    },
    {
      name: 'Calendar',
      icon: <Calendar size={32} />, 
      desc: 'Track deadlines, events, and exams.',
      link: '#'
    },
    {
      name: 'Study Timer',
      icon: <Clock size={32} />, 
      desc: 'Pomodoro and focus timer for productivity.',
      link: '#'
    },
    {
      name: 'Resource Sharing',
      icon: <Share2 size={32} />, 
      desc: 'Share and find useful study resources.',
      link: '#'
    }
  ]

  return (
    <section id="student-tools" className="py-20 fade-in parallax">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="cyber-text text-4xl md:text-5xl font-bold gradient-text mb-4">
            Student Tools
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Essential tools for productivity, organization, and collaboration
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <motion.a
              key={i}
              href={tool.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass-effect rounded-lg p-8 flex flex-col items-center text-center neon-glow-purple hover:neon-glow-green transition-all duration-300 fade-in parallax"
            >
              <div className="mb-4">{tool.icon}</div>
              <div className="font-bold cyber-text text-xl mb-2">{tool.name}</div>
              <div className="text-gray-300 text-sm">{tool.desc}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
} 