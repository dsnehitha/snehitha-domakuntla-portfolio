import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import TypewriterText from './TypewriterText'
import Button from './Button'

const subheadlines = [
  "Designing end-to-end intelligence flows",
  "research → code → reflect → repeat",
  "Open-Source. Open-Minded. Obsessed with Intelligence",
  "Exploring the Path to Conscious Intelligence"
]

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight"
          style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
        >
          <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent block sm:inline">
            Hi, I'm{' '}
          </span>
          <motion.span 
            className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800 bg-clip-text text-transparent relative block sm:inline"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ backgroundSize: '200% 200%' }}
          >
            Snehitha Domakuntla
          </motion.span>
          <br />
          <motion.span 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent block mt-2"
            style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif", letterSpacing: '0.02em' }}
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            AI Engineer
          </motion.span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 h-12 sm:h-10 md:h-8"
        >
          <TypewriterText texts={subheadlines} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button onClick={scrollToProjects} className="text-lg">
            View Projects
            <ArrowDown className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
