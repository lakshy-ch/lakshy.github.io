"use client"
import { useRef, useEffect } from 'react'

export default function AnimatedHeroBackground() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40
      const y = (e.clientY / window.innerHeight - 0.5) * 40
      el.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div ref={ref} className="absolute inset-0 z-0 pointer-events-none transition-transform duration-300">
      {/* Neon layered gradients */}
      <div className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-neon-red via-electric-purple to-transparent opacity-40 blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-emerald-green via-cyber-blue to-transparent opacity-30 blur-2xl animate-spin-slow" />
      {/* Animated SVG wave */}
      <svg className="absolute bottom-0 left-0 w-full h-48" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8338ec" />
            <stop offset="50%" stopColor="#06ffa5" />
            <stop offset="100%" stopColor="#ff006e" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          fillOpacity="0.25"
          d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        >
          <animate attributeName="d" dur="8s" repeatCount="indefinite"
            values="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;
            M0,180L60,160C120,140,240,120,360,140C480,160,600,200,720,210C840,220,960,200,1080,180C1200,160,1320,140,1380,130L1440,120L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;
            M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </path>
      </svg>
    </div>
  )
} 