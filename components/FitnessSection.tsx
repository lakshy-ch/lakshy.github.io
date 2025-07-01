'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Dumbbell, Target, Apple, TrendingUp } from 'lucide-react'

export default function FitnessSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fitnessGoals = [
    {
      title: "V-Shape Body",
      description: "Building broad shoulders and narrow waist",
      progress: 75,
      color: "text-emerald-green",
      icon: <Target size={24} />
    },
    {
      title: "Strength Training",
      description: "Compound movements and progressive overload",
      progress: 80,
      color: "text-neon-red",
      icon: <Dumbbell size={24} />
    },
    {
      title: "Vegetarian Nutrition",
      description: "High protein plant-based diet",
      progress: 90,
      color: "text-electric-purple",
      icon: <Apple size={24} />
    },
    {
      title: "Cardio Fitness",
      description: "Endurance and cardiovascular health",
      progress: 70,
      color: "text-cyber-blue",
      icon: <TrendingUp size={24} />
    }
  ]

  const workoutPlan = [
    { day: "Monday", focus: "Chest & Triceps", exercises: ["Bench Press", "Incline Dumbbell", "Dips"] },
    { day: "Tuesday", focus: "Back & Biceps", exercises: ["Pull-ups", "Deadlifts", "Rows"] },
    { day: "Wednesday", focus: "Legs", exercises: ["Squats", "Lunges", "Calf Raises"] },
    { day: "Thursday", focus: "Shoulders", exercises: ["Military Press", "Lateral Raises", "Shrugs"] },
    { day: "Friday", focus: "Arms", exercises: ["Bicep Curls", "Tricep Extensions", "Forearms"] },
    { day: "Saturday", focus: "Cardio", exercises: ["Running", "Cycling", "HIIT"] },
    { day: "Sunday", focus: "Rest", exercises: ["Recovery", "Stretching", "Meditation"] }
  ]

  return (
    <section id="fitness" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="cyber-text text-4xl md:text-5xl font-bold gradient-text mb-4">
            Fitness Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building strength, endurance, and a V-shape physique through disciplined training
          </p>
        </motion.div>

        {/* Fitness Goals */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="cyber-text text-2xl font-bold text-center gradient-text mb-8">
            Current Goals & Progress
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fitnessGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-lg p-6 neon-glow-green"
              >
                <div className={`${goal.color} mb-4`}>
                  {goal.icon}
                </div>
                <h4 className="cyber-text text-lg font-bold text-white mb-2">
                  {goal.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  {goal.description}
                </p>
                <div className="w-full bg-glass-dark rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${goal.progress}%` } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="bg-gradient-to-r from-emerald-green to-electric-purple h-2 rounded-full"
                  />
                </div>
                <p className="text-emerald-green text-sm mt-2 cyber-text">
                  {goal.progress}% Complete
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Workout Plan */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="cyber-text text-2xl font-bold text-center gradient-text mb-8">
            Weekly Workout Plan
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {workoutPlan.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`glass-effect rounded-lg p-4 ${
                  day.focus === 'Rest' ? 'neon-glow-blue' : 'neon-glow-purple'
                }`}
              >
                <h4 className="cyber-text font-bold text-electric-purple mb-2">
                  {day.day}
                </h4>
                <h5 className="text-white font-semibold mb-3">
                  {day.focus}
                </h5>
                <ul className="space-y-1">
                  {day.exercises.map((exercise, exIndex) => (
                    <li key={exIndex} className="text-gray-300 text-xs">
                      • {exercise}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nutrition Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="cyber-text text-2xl font-bold gradient-text mb-6">
              Vegetarian Nutrition
            </h3>
            <div className="space-y-4">
              {[
                { macro: "Protein", target: "180g", sources: ["Tofu", "Lentils", "Quinoa", "Greek Yogurt"] },
                { macro: "Carbs", target: "250g", sources: ["Brown Rice", "Sweet Potato", "Oats", "Fruits"] },
                { macro: "Fats", target: "70g", sources: ["Nuts", "Avocado", "Olive Oil", "Seeds"] }
              ].map((macro, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                  className="glass-effect rounded-lg p-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="cyber-text font-bold text-emerald-green">
                      {macro.macro}
                    </h4>
                    <span className="text-white font-semibold">
                      {macro.target}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {macro.sources.map((source, sourceIndex) => (
                      <span
                        key={sourceIndex}
                        className="px-2 py-1 bg-glass-dark rounded text-xs text-gray-300"
                      >
                        {source}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="cyber-text text-2xl font-bold gradient-text mb-6">
              Progress Tracking
            </h3>
            <div className="space-y-6">
              {[
                { metric: "Body Weight", current: "75kg", target: "78kg", unit: "kg" },
                { metric: "Body Fat %", current: "12%", target: "10%", unit: "%" },
                { metric: "Bench Press", current: "100kg", target: "120kg", unit: "kg" },
                { metric: "Squat", current: "140kg", target: "160kg", unit: "kg" }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                  className="glass-effect rounded-lg p-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="cyber-text font-bold text-neon-red">
                      {metric.metric}
                    </h4>
                    <span className="text-white font-semibold">
                      {metric.current} / {metric.target}
                    </span>
                  </div>
                  <div className="w-full bg-glass-dark rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: "70%" } : {}}
                      transition={{ duration: 1, delay: 1.8 + index * 0.1 }}
                      className="bg-gradient-to-r from-neon-red to-electric-purple h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 