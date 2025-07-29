import { motion } from 'framer-motion'
import Section from './Section'
import MorphingMesh from './MorphingMesh'

export default function About() {
  return (
    <Section id="about" title="About Me" className="bg-gray-900/50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative cursor-pointer group"
          >
            <MorphingMesh />
            
            {/* Profile image overlay */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              whileHover={{ scale: 1.1 }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=160&h=160&fit=crop&crop=face"
                alt=""
                className="w-32 h-32 rounded-full object-cover border-2 border-orange-600/50 relative z-10"
              />
            </motion.div>
            
            {/* Ambient glow effect */}
            <div className="absolute inset-0 bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-3xl rounded-full" />
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            AI Engineer with a passion for building intelligent systems that scale. 
            I specialize in <span className="text-orange-600 font-semibold">NLP</span>, 
            <span className="text-orange-600 font-semibold"> multimodal learning</span>, 
            and <span className="text-orange-600 font-semibold">MLOps</span>.
          </p>
          
          <p className="text-gray-400 leading-relaxed">
            My journey in AI began with a fascination for how machines can understand 
            and generate human language. Today, I work on cutting-edge projects that 
            push the boundaries of what's possible with artificial intelligence.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I also share my insights and explorations through my{' '}
            <a 
              href="https://domakuntlasnehitha.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-500 transition-colors font-medium"
            >
              technical blog
            </a>
            , where I dive deep into AI workflows, agent architectures, and the latest 
            developments in machine learning.
          </p>
          
          <div className="flex flex-wrap gap-3 pt-4">
            {['Python', 'PyTorch', 'Transformers', 'LangChain', 'AWS'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-3 py-1 bg-orange-600/20 text-orange-400 rounded-full text-sm font-medium border border-orange-600/30"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
