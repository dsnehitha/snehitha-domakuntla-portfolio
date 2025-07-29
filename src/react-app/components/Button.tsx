import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center gap-2"
  
  const variants = {
    primary: "bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-orange-600/25",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700",
    outline: "border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
  }

  const Component = motion.button
  
  return (
    <Component
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </Component>
  )
}
