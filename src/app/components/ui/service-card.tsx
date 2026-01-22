'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'motion/react'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  gradient: string
  delay?: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, gradient, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  // Check if card is in view (for mobile scroll activation)
  const isInView = useInView(cardRef, { 
    amount: 0.6, // 60% of card must be visible
    once: false 
  })

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // On mobile, activate when in view
  const isActive = isMobile ? isInView : isHovered

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    mouseX.set((e.clientX - centerX) / rect.width)
    mouseY.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-100px" }}
      className="perspective-1000"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative group cursor-pointer"
      >
        {/* Glow Effect */}
        <motion.div
          className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${gradient} opacity-0 blur-xl transition-opacity duration-500`}
          animate={{ opacity: isActive ? 0.4 : 0 }}
        />

        {/* Card */}
        <div className="relative h-auto min-h-[280px] sm:min-h-[300px] p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0F172A]/80 backdrop-blur-xl overflow-hidden">
          {/* Animated Background Gradient */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500`}
            animate={{ opacity: isActive ? 0.1 : 0 }}
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }} />

          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 opacity-0"
            animate={{ 
              opacity: isActive ? 1 : 0,
              background: isActive ? 
                'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)' : 
                'none'
            }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundSize: '200% 200%',
              animation: isActive ? 'shine 1.5s ease-in-out infinite' : 'none'
            }}
          />

          {/* Content */}
          <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
            {/* Icon */}
            <motion.div
              className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${gradient} p-[1px] mb-4 sm:mb-5`}
              animate={{ 
                scale: isActive ? 1.1 : 1,
                rotateZ: isActive ? 5 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full rounded-2xl bg-[#0F172A] flex items-center justify-center">
                <motion.div
                  animate={{ scale: isActive ? 1.2 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-white"
                >
                  {icon}
                </motion.div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 bg-clip-text"
              style={{ color: 'var(--text-primary)' }}
              animate={{ x: isActive ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-xs sm:text-sm lg:text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
              animate={{ x: isActive ? 5 : 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {description}
            </motion.p>

            {/* Arrow */}
            <motion.div
              className="mt-4 sm:mt-5 flex items-center gap-2 text-[#38BDF8]"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-sm font-semibold">Detaylı Bilgi</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          </div>

          {/* Corner Accents */}
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-20 blur-3xl`} />
          <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${gradient} opacity-10 blur-2xl`} />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ServiceCard
