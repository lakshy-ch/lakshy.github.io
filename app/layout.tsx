import type { Metadata } from 'next'
import { Inter, Orbitron, Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const orbitron = Orbitron({ subsets: ['latin'] })
const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lakshy - AI Researcher & Ph.D. Student | Web5 Portfolio',
  description: 'Futuristic portfolio of Lakshy, a GKS Scholar and Ph.D. student at Kunsan National University specializing in AI research, Web5 development, and Korean studies.',
  keywords: ['AI Research', 'Web5', 'Ph.D. Student', 'Korean Studies', 'Neuro-AI', 'Facial Analysis'],
  authors: [{ name: 'Lakshy' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-matte-black text-white overflow-x-hidden`}>
        <div className="global-animated-bg">
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${Math.random() * 32 + 12}px`,
                height: `${Math.random() * 32 + 12}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle at 50% 50%, ${i % 4 === 0 ? '#ff006e' : i % 4 === 1 ? '#8338ec' : i % 4 === 2 ? '#06ffa5' : '#3a86ff'} 0%, transparent 80%)`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
        </div>
        {children}
      </body>
    </html>
  )
} 