'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Award, Calendar, Target } from 'lucide-react'

export default function KoreanJourneySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const milestones = [
    {
      date: "2024",
      title: "TOPIK Level 4",
      description: "Advanced Korean proficiency achieved",
      korean: "고급 한국어 실력 달성",
      icon: <Award size={24} />,
      color: "text-emerald-green"
    },
    {
      date: "2023",
      title: "TOPIK Level 3",
      description: "Intermediate Korean communication skills",
      korean: "중급 한국어 의사소통 능력",
      icon: <BookOpen size={24} />,
      color: "text-electric-purple"
    },
    {
      date: "2022",
      title: "TOPIK Level 2",
      description: "Basic Korean conversation and writing",
      korean: "기초 한국어 회화 및 작문",
      icon: <Target size={24} />,
      color: "text-neon-red"
    },
    {
      date: "2021",
      title: "Korean Studies Begin",
      description: "Started learning Korean language and culture",
      korean: "한국어 및 한국 문화 학습 시작",
      icon: <Calendar size={24} />,
      color: "text-cyber-blue"
    }
  ]

  const idioms = [
    { korean: "가는 말이 고와야 오는 말이 곱다", english: "Kind words bring kind responses", hindi: "मीठे बोल मीठे जवाब लाते हैं" },
    { korean: "낮말은 새가 듣고 밤말은 쥐가 듣는다", english: "Walls have ears", hindi: "दीवारों के भी कान होते हैं" },
    { korean: "백지장도 맞들면 낫다", english: "Many hands make light work", hindi: "एकता में बल है" }
  ]

  return (
    <section id="korean" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="cyber-text text-4xl md:text-5xl font-bold gradient-text mb-4">
            Korean Language Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            <span className="korean-text">한국어 학습 여정과 문화 탐험</span>
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="cyber-text text-2xl font-bold text-center gradient-text mb-8">
            Learning Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-electric-purple to-emerald-green"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 px-8">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-effect rounded-lg p-6 neon-glow-purple"
                    >
                      <div className="flex items-center mb-3">
                        <div className={`${milestone.color} mr-3`}>
                          {milestone.icon}
                        </div>
                        <h4 className="cyber-text font-bold text-electric-purple">{milestone.date}</h4>
                      </div>
                      <h5 className="text-white font-semibold mb-2">{milestone.title}</h5>
                      <p className="text-gray-400 text-sm mb-2">{milestone.description}</p>
                      <p className="korean-text text-sm text-emerald-green">{milestone.korean}</p>
                    </motion.div>
                  </div>
                  <div className="w-4 h-4 bg-electric-purple rounded-full border-4 border-matte-black"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Korean Idioms */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="cyber-text text-2xl font-bold text-center gradient-text mb-8">
            Korean Idioms & Expressions
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {idioms.map((idiom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-lg p-6 neon-glow-green"
              >
                <p className="korean-text text-lg font-bold text-emerald-green mb-3">
                  {idiom.korean}
                </p>
                <p className="text-gray-300 text-sm mb-2">
                  {idiom.english}
                </p>
                <p className="text-gray-400 text-xs italic">
                  {idiom.hindi}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Goals */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <h3 className="cyber-text text-2xl font-bold gradient-text mb-8">
            Current Learning Goals
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-lg p-6 neon-glow-red"
            >
              <h4 className="cyber-text text-xl font-bold text-neon-red mb-4">
                TOPIK Level 5
              </h4>
              <p className="text-gray-300 mb-3">
                Advanced Korean proficiency for academic and professional communication
              </p>
              <p className="korean-text text-sm text-emerald-green">
                학술 및 전문적인 의사소통을 위한 고급 한국어 실력
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-lg p-6 neon-glow-blue"
            >
              <h4 className="cyber-text text-xl font-bold text-cyber-blue mb-4">
                Cultural Integration
              </h4>
              <p className="text-gray-300 mb-3">
                Deep understanding of Korean culture, traditions, and social norms
              </p>
              <p className="korean-text text-sm text-emerald-green">
                한국 문화, 전통 및 사회적 규범에 대한 깊은 이해
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 