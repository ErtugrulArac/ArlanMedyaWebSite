'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'motion/react'

interface ServiceCardProps {
  id?: string
  title: string
  description: string
  icon: React.ReactNode
  gradient: string
  delay?: number
  onClick?: () => void
  href?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, icon, gradient, delay = 0, onClick, href }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [hasActivated, setHasActivated] = useState(false)
  
  const isInView = useInView(cardRef, { amount: 0.6, once: false })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile && isInView && !hasActivated) {
      setHasActivated(true)
    }
  }, [isMobile, isInView, hasActivated])

  const isActive = isMobile ? hasActivated : isHovered

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        className="relative group cursor-pointer"
      >
        {href ? (
          <a href={href} className="block no-underline">
            <CardContent />
          </a>
        ) : (
          <CardContent />
        )}
      </div>
    </motion.div>
  )

  function CardContent() {
    return (
      <>
        {/* Glow Effect - Reduced blur */}
        <div
          className={`absolute -inset-0.5 rounded-2xl bg-linear-to-r ${gradient} blur-lg`}
          style={{
            opacity: isActive ? 0.25 : 0,
            transition: 'opacity 400ms',
          }}
        />

        {/* Card */}
        <div
          className="relative h-auto min-h-[280px] sm:min-h-[300px] p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0F172A]/80 backdrop-blur-md overflow-hidden transition-transform duration-300"
          style={{
            transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
          }}
        >
          {/* Animated Background Gradient */}
          <div
            className={`absolute inset-0 bg-linear-to-br ${gradient}`}
            style={{ opacity: isActive ? 0.08 : 0, transition: 'opacity 400ms' }}
          />

          {/* Content */}
          <div className="relative z-10">
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

          {/* Corner Accents - Reduced blur */}
          <div className={`absolute top-0 right-0 w-24 h-24 bg-linear-to-br ${gradient} opacity-15 blur-lg`} />
          <div className={`absolute bottom-0 left-0 w-20 h-20 bg-linear-to-tr ${gradient} opacity-8 blur-md`} />
        </div>
      </>
    )
  }
}

export default React.memo(ServiceCard)
