import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, BookOpen } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Snehitha<span className="text-orange-600">.</span>
            </h3>
            <p className="text-gray-400">
              AI Engineer building the future, one system at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-center space-x-6"
          >
            {[
              { icon: Github, href: 'https://github.com/dsnehitha', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/snehitha-domakuntla', label: 'LinkedIn' },
              { icon: BookOpen, href: 'https://domakuntlasnehitha.substack.com', label: 'Blog' },
              { icon: Mail, href: 'mailto:domakuntlasnehitha@gmail.com', label: 'Gmail' }
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-orange-600 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-gray-400 flex items-center justify-center md:justify-end gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> 
              and lots of ☕
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {currentYear} Snehitha Domakuntla. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
