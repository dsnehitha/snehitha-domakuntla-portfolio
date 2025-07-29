import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, BookOpen } from 'lucide-react'
import { useState } from 'react'
import Section from './Section'
import Button from './Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Section id="contact" title="Get In Touch" className="bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 text-center mb-8"
        >
          I'm always interested in discussing new opportunities, collaborations, 
          and innovative AI projects. Let's connect!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 mb-4">
            Want to stay updated with my latest AI insights?
          </p>
          <motion.a
            href="https://domakuntlasnehitha.substack.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-300 shadow-lg hover:shadow-orange-600/25"
          >
            <BookOpen className="w-5 h-5" />
            Subscribe to my Blog
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Let's work together
            </h3>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you're looking to build AI solutions, need consulting on ML projects, 
              or want to collaborate on research, I'd love to hear from you.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'domakuntlasnehitha@email.com', href: 'mailto:domakuntlasnehitha@email.com' },
                { icon: Github, label: 'GitHub', value: '@dsnehitha', href: 'https://github.com/dsnehitha' },
                { icon: Linkedin, label: 'LinkedIn', value: 'Snehitha Domakuntla', href: 'https://linkedin.com/in/snehitha-domakuntla' },
                { icon: BookOpen, label: 'Blog', value: 'Leo Logs', href: 'https://domakuntlasnehitha.substack.com' }
              ].map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                >
                  <contact.icon className="w-5 h-5 text-orange-600" />
                  <div>
                    <div className="text-gray-400 text-sm">{contact.label}</div>
                    <div className="text-white group-hover:text-orange-600 transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-white placeholder-gray-400"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-white placeholder-gray-400 resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            <Button type="submit" className="w-full justify-center text-lg py-4">
              <Send className="w-5 h-5" />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </Section>
  )
}
