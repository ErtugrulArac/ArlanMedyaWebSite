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
  const [hasActivated, setHasActivated] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  
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

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => setReduceMotion(mq.matches)
    handleChange()
    mq.addEventListener?.('change', handleChange)
    return () => mq.removeEventListener?.('change', handleChange)
  }, [])

  // On mobile, activate when in view
  useEffect(() => {
    if (isMobile && isInView && !hasActivated) {
      setHasActivated(true)
    }
  }, [isMobile, isInView, hasActivated])

  const isActive = isMobile ? hasActivated : isHovered

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 300, damping: 30 })

  // Cache rect and throttle mouse updates with rAF for smoother performance
  const rectRef = useRef<{ centerX: number; centerY: number; width: number; height: number } | null>(null)
  const rafPending = useRef(false)

  const updateRectCache = () => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    rectRef.current = {
      centerX: rect.left + rect.width / 2,
      centerY: rect.top + rect.height / 2,
      width: rect.width,
      height: rect.height,
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!rectRef.current) return
    if (rafPending.current) return
    rafPending.current = true
    requestAnimationFrame(() => {
      const { centerX, centerY, width, height } = rectRef.current!
      mouseX.set((e.clientX - centerX) / width)
      mouseY.set((e.clientY - centerY) / height)
      rafPending.current = false
    })
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    updateRectCache()
  }

  useEffect(() => {
    const onResize = () => {
      if (isHovered) updateRectCache()
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [isHovered])

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "0px 0px -20% 0px" }}
      className="perspective-1000"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
        }}
        className="relative group cursor-pointer"
      >
        {/* Glow Effect */}
        <div
          className={`absolute -inset-1 rounded-3xl bg-linear-to-r ${gradient} ${isMobile ? 'blur-md' : 'blur-xl'}`}
          style={{
            opacity: isActive ? 0.4 : 0,
            transition: 'opacity 500ms',
            willChange: 'opacity, filter',
          }}
        />

        {/* Card */}
        <div
          className="relative h-auto min-h-70 sm:min-h-75 p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0F172A]/80 backdrop-blur-xl overflow-hidden"
          style={{ contentVisibility: 'auto', contain: 'layout paint style' }}
        >
          {/* Animated Background Gradient */}
          <div
            className={`absolute inset-0 bg-linear-to-br ${gradient}`}
            style={{ opacity: isActive ? 0.1 : 0, transition: 'opacity 500ms', willChange: 'opacity' }}
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
              animation: isActive ? (isMobile || reduceMotion ? 'shine 1.2s ease-out 1' : 'shine 1.5s ease-in-out infinite') : 'none'
            }}
          />

          {/* Content */}
          <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
            {/* Icon */}
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-linear-to-br ${gradient} p-px mb-4 sm:mb-5`}
              style={{ transform: isActive ? 'scale(1.1) rotateZ(5deg)' : 'scale(1) rotateZ(0deg)', transition: 'transform 300ms' }}
            >
              <div className="w-full h-full rounded-2xl bg-[#0F172A] flex items-center justify-center">
                <div
                  className="text-white"
                  style={{ transform: isActive ? 'scale(1.2)' : 'scale(1)', transition: 'transform 300ms' }}
                >
                  {icon}
                </div>
              </div>
            </div>

            {/* Title */}
            <h3
              className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 bg-clip-text"
              style={{ color: 'var(--text-primary)', transform: isActive ? 'translateX(5px)' : 'translateX(0px)', transition: 'transform 300ms' }}
            >
              {title}
            </h3>

            {/* Description */}
            <p
              className="text-xs sm:text-sm lg:text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)', transform: isActive ? 'translateX(5px)' : 'translateX(0px)', transition: 'transform 300ms 50ms' }}
            >
              {description}
            </p>

            {/* Arrow */}
            <div
              className="mt-4 sm:mt-5 flex items-center gap-2 text-[#38BDF8]"
              style={{ opacity: isActive ? 1 : 0, transform: isActive ? 'translateX(0px)' : 'translateX(-10px)', transition: 'opacity 300ms, transform 300ms' }}
            >
              <span className="text-sm font-semibold">Detaylı Bilgi</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Corner Accents */}
          <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${gradient} opacity-20 ${isMobile ? 'blur-xl' : 'blur-3xl'}`} />
          <div className={`absolute bottom-0 left-0 w-24 h-24 bg-linear-to-tr ${gradient} opacity-10 ${isMobile ? 'blur-md' : 'blur-2xl'}`} />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default React.memo(ServiceCard)
