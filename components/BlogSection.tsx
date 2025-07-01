'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Calendar, ArrowRight } from 'lucide-react'

export default function BlogSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web5 and Decentralized Identity",
      titleHindi: "Web5 और विकेंद्रीकृत पहचान का भविष्य",
      excerpt: "Exploring the next generation of web technologies and their impact on digital identity management.",
      excerptHindi: "वेब प्रौद्योगिकियों की अगली पीढ़ी और डिजिटल पहचान प्रबंधन पर उनके प्रभाव की खोज।",
      date: "2024-01-15",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Neuro-AI: Bridging Human Cognition and Machine Learning",
      titleHindi: "न्यूरो-एआई: मानव संज्ञान और मशीन लर्निंग को जोड़ना",
      excerpt: "How neural networks are evolving to better understand and mimic human brain patterns.",
      excerptHindi: "न्यूरल नेटवर्क कैसे मानव मस्तिष्क के पैटर्न को बेहतर ढंग से समझने और अनुकरण करने के लिए विकसित हो रहे हैं।",
      date: "2024-01-10",
      category: "AI Research",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Korean Culture Through the Lens of Technology",
      titleHindi: "प्रौद्योगिकी की दृष्टि से कोरियाई संस्कृति",
      excerpt: "The intersection of traditional Korean values and modern technological innovation.",
      excerptHindi: "पारंपरिक कोरियाई मूल्यों और आधुनिक तकनीकी नवाचार का मिलन बिंदु।",
      date: "2024-01-05",
      category: "Culture",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Building Viduhr: My Personal AI Assistant Journey",
      titleHindi: "विदुहर का निर्माण: मेरी व्यक्तिगत एआई सहायक यात्रा",
      excerpt: "The development process and challenges in creating a local JARVIS-like AI assistant.",
      excerptHindi: "स्थानीय JARVIS जैसे AI सहायक बनाने में विकास प्रक्रिया और चुनौतियां।",
      date: "2023-12-28",
      category: "Development",
      readTime: "6 min read"
    }
  ]

  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 fade-in parallax"
        >
          <h2 className="cyber-text text-4xl md:text-5xl font-bold gradient-text mb-4">
            Blog
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Thoughts on technology, culture, and the intersection of AI with Korean studies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 fade-in parallax">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-lg p-6 neon-glow-purple fade-in parallax"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-electric-purple/20 text-electric-purple rounded-full text-xs cyber-text">
                  {post.category}
                </span>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Calendar size={14} />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>

              <h3 className="cyber-text text-xl font-bold text-white mb-3">
                {post.title}
              </h3>
              
              <h4 className="text-sm text-gray-400 mb-3 italic">
                {post.titleHindi}
              </h4>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <p className="text-gray-400 text-xs mb-4 italic">
                {post.excerptHindi}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-emerald-green text-sm cyber-text">
                  {post.readTime}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-1 text-electric-purple hover:text-white transition-colors"
                >
                  <span className="text-sm">Read More</span>
                  <ArrowRight size={14} />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="cyber-text text-2xl font-bold text-center gradient-text mb-8">
            Featured Post
          </h3>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-effect rounded-lg p-8 neon-glow-green"
          >
            <div className="flex items-center mb-4">
              <BookOpen className="text-emerald-green mr-2" size={20} />
              <span className="text-emerald-green cyber-text">Featured</span>
            </div>
            <h4 className="cyber-text text-2xl font-bold text-white mb-4">
              "The Convergence of AI and Korean Language Learning"
            </h4>
            <h5 className="text-lg text-gray-400 mb-4 italic">
              "एआई और कोरियाई भाषा सीखने का मिलन"
            </h5>
            <p className="text-gray-300 mb-6 leading-relaxed">
              An in-depth exploration of how artificial intelligence is revolutionizing 
              language learning, with a focus on Korean language acquisition and cultural understanding. 
              This post discusses the development of AI-powered pronunciation feedback systems, 
              cultural context integration, and the future of personalized language education.
            </p>
            <p className="text-gray-400 text-sm mb-6 italic">
              कृत्रिम बुद्धिमत्ता कैसे भाषा सीखने में क्रांति ला रही है, इसकी गहरी खोज, 
              कोरियाई भाषा अधिग्रहण और सांस्कृतिक समझ पर ध्यान केंद्रित करते हुए। 
              यह पोस्ट AI-संचालित उच्चारण प्रतिक्रिया प्रणालियों, सांस्कृतिक संदर्भ एकीकरण, 
              और व्यक्तिगत भाषा शिक्षा के भविष्य पर चर्चा करती है।
            </p>
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <span className="px-3 py-1 bg-emerald-green/20 text-emerald-green rounded-full text-xs">
                  AI
                </span>
                <span className="px-3 py-1 bg-emerald-green/20 text-emerald-green rounded-full text-xs">
                  Language Learning
                </span>
                <span className="px-3 py-1 bg-emerald-green/20 text-emerald-green rounded-full text-xs">
                  Korean Culture
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-emerald-green text-black rounded-lg font-bold cyber-text hover:bg-emerald-green/80 transition-colors"
              >
                Read Full Article
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 