'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'
import dynamic from 'next/dynamic'
// Heavy UI components are dynamically imported for better performance
const ServiceCard = dynamic(() => import('../ui/service-card'))
const LogoLoop = dynamic(() => import('../ui/logo-loop'))
const TrueFocus = dynamic(() => import('../ui/true-focus'))
import { SiGoogle, SiMeta, SiLinkedin, SiX, SiInstagram, SiYoutube, SiTiktok, SiSpotify } from 'react-icons/si'
import { Sparkles, ArrowRight, Code, Palette, Globe, Zap, Database, Cloud, Shield, Cpu, Layers, Box, Rocket, Smartphone, Monitor, Server, Wifi, Lock } from 'lucide-react'

// Premium Animated Background with Expanding Rings and Floating Icons
const PremiumBackground = React.memo(() => {
  // Floating tech icons for background
  const floatingIcons = [
    { Icon: Code, x: '10%', y: '20%', delay: 0, size: 24 },
    { Icon: Palette, x: '85%', y: '15%', delay: 1, size: 20 },
    { Icon: Globe, x: '75%', y: '70%', delay: 2, size: 22 },
    { Icon: Zap, x: '15%', y: '75%', delay: 0.5, size: 18 },
    { Icon: Database, x: '90%', y: '45%', delay: 1.5, size: 20 },
    { Icon: Cloud, x: '5%', y: '50%', delay: 2.5, size: 22 },
    { Icon: Shield, x: '70%', y: '85%', delay: 3, size: 18 },
    { Icon: Cpu, x: '25%', y: '90%', delay: 0.8, size: 20 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* ========== ULTRA PREMIUM BASE GRADIENT ========== */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 80% at 50% -30%, rgba(56, 189, 248, 0.2), transparent 50%),
            radial-gradient(ellipse 80% 60% at 100% 0%, rgba(168, 85, 247, 0.15), transparent 50%),
            radial-gradient(ellipse 70% 50% at 0% 100%, rgba(56, 189, 248, 0.12), transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(16, 185, 129, 0.08), transparent 50%),
            radial-gradient(ellipse 50% 30% at 20% 60%, rgba(251, 191, 36, 0.06), transparent 50%)
          `
        }}
      />

      {/* ========== AURORA EFFECT - CSS Animation ========== */}
      <div
        className="absolute inset-0 opacity-20 animate-aurora"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(56, 189, 248, 0.1) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
        }}
      />
      <div
        className="absolute inset-0 opacity-15 animate-aurora-reverse"
        style={{
          background: 'linear-gradient(-45deg, transparent 30%, rgba(168, 85, 247, 0.1) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* ========== GLOWING ORBS - Static with CSS pulse ========== */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(56, 189, 248, 0.04) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[900px] h-[900px] rounded-full animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.10) 0%, rgba(168, 85, 247, 0.03) 40%, transparent 70%)',
          filter: 'blur(80px)',
          animationDelay: '2s',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 60%)',
          filter: 'blur(50px)',
          animationDelay: '4s',
        }}
      />
      
      {/* ========== EXPANDING CIRCULAR RINGS - Optimized ========== */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${i % 2 === 0 ? 'animate-spin-slow' : 'animate-spin-reverse'}`}
            style={{
              width: `${(i + 1) * 200}px`,
              height: `${(i + 1) * 200}px`,
              border: `1px solid ${i % 3 === 0 ? 'rgba(56, 189, 248, 0.08)' : i % 3 === 1 ? 'rgba(168, 85, 247, 0.06)' : 'rgba(16, 185, 129, 0.05)'}`,
              opacity: 0.3,
            }}
          />
        ))}
        
        {/* Central Glow - Static */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(168, 85, 247, 0.08) 40%, transparent 70%)',
          }}
        />
      </div>

      {/* ========== ANIMATED GRID PATTERN ========== */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      
      {/* Secondary Grid - Static */}
      <div 
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(168, 85, 247, 0.4) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(168, 85, 247, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
      />

      {/* ========== LIGHT BEAMS - CSS Animation ========== */}
      <div
        className="absolute top-0 left-1/4 w-px h-full light-beam"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(56, 189, 248, 0.12), transparent)',
        }}
      />
      <div
        className="absolute top-0 right-1/3 w-px h-full light-beam"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(168, 85, 247, 0.10), transparent)',
          animationDelay: '3s',
        }}
      />

      {/* Horizontal Light Beam */}
      <div
        className="absolute left-0 top-1/4 h-px w-full light-beam-horizontal"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(56, 189, 248, 0.10), transparent)',
        }}
      />

      {/* ========== FLOATING TECH ICONS - CSS Animation ========== */}
      {floatingIcons.map((item, i) => (
        <div
          key={i}
          className="absolute text-white/10 animate-float"
          style={{ 
            left: item.x, 
            top: item.y,
            animationDelay: `${item.delay}s`,
          }}
        >
          <item.Icon size={item.size} />
        </div>
      ))}
      
      {/* ========== FLOATING PARTICLES - Optimized ========== */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full animate-pulse-slow"
          style={{
            left: `${8 + i * 8}%`,
            top: `${10 + (i % 4) * 22}%`,
            width: `${3 + (i % 3)}px`,
            height: `${3 + (i % 3)}px`,
            background: i % 4 === 0 
              ? 'rgba(56, 189, 248, 0.6)' 
              : i % 4 === 1 
                ? 'rgba(168, 85, 247, 0.5)' 
                : i % 4 === 2
                  ? 'rgba(16, 185, 129, 0.4)'
                  : 'rgba(255, 255, 255, 0.3)',
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      {/* ========== SHOOTING STAR - Single CSS ========== */}
      <div className="shooting-star absolute w-1 h-1 bg-white rounded-full" />

      {/* ========== CORNER DECORATIONS ========== */}
      {/* Top Left */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#38BDF8]/40 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-[#38BDF8]/40 to-transparent" />
        <div
          className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse-slow"
        />
      </div>
      
      {/* Top Right */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-[#A855F7]/40 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-[#A855F7]/40 to-transparent" />
        <div
          className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#A855F7] animate-pulse-slow"
          style={{ animationDelay: '0.5s' }}
        />
      </div>
      
      {/* Bottom Left */}
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#10B981]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-[#10B981]/40 to-transparent" />
      </div>
      
      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-[#F59E0B]/40 to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-[#F59E0B]/40 to-transparent" />
      </div>

      {/* ========== FLOATING PLUS SIGNS - CSS Animation ========== */}
      <div
        className="absolute text-[#38BDF8]/15 text-4xl sm:text-5xl font-thin animate-spin-slow"
        style={{ top: '15%', left: '20%' }}
      >
        +
      </div>
      <div
        className="absolute text-[#A855F7]/12 text-3xl sm:text-4xl font-thin animate-spin-reverse"
        style={{ top: '60%', right: '15%' }}
      >
        +
      </div>
      <div
        className="absolute text-[#10B981]/10 text-2xl sm:text-3xl font-thin animate-spin-slow"
        style={{ bottom: '25%', left: '10%' }}
      >
        +
      </div>

      {/* ========== DOT PATTERNS - Static ========== */}
      <div className="absolute top-20 right-20 hidden sm:grid grid-cols-4 gap-2 opacity-15">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-[#38BDF8]" />
        ))}
      </div>
      <div className="absolute bottom-20 left-20 hidden sm:grid grid-cols-4 gap-2 opacity-15">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-[#A855F7]" />
        ))}
      </div>

      {/* ========== ANIMATED HEX PATTERN ========== */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
        <defs>
          <pattern id="hexPattern" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
            <polygon points="30,0 60,15 60,37 30,52 0,37 0,15" fill="none" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexPattern)" />
      </svg>
    </div>
  )
})
PremiumBackground.displayName = 'PremiumBackground'

// 3D Floating Icons Background - Optimized with CSS animations
const Floating3DIconsBackground = React.memo(() => {
  // Reduced icon count from 12 to 8
  const icons3D = [
    { Icon: Layers, x: '8%', y: '25%', size: 32, color: 'rgba(56, 189, 248, 0.12)' },
    { Icon: Box, x: '5%', y: '55%', size: 36, color: 'rgba(168, 85, 247, 0.10)' },
    { Icon: Rocket, x: '88%', y: '20%', size: 38, color: 'rgba(251, 191, 36, 0.12)' },
    { Icon: Server, x: '85%', y: '60%', size: 30, color: 'rgba(168, 85, 247, 0.11)' },
    { Icon: Monitor, x: '25%', y: '8%', size: 28, color: 'rgba(56, 189, 248, 0.08)' },
    { Icon: Smartphone, x: '75%', y: '5%', size: 26, color: 'rgba(168, 85, 247, 0.08)' },
    { Icon: Lock, x: '20%', y: '88%', size: 24, color: 'rgba(16, 185, 129, 0.08)' },
    { Icon: Wifi, x: '80%', y: '90%', size: 28, color: 'rgba(251, 191, 36, 0.08)' },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Static 3D Shapes - No animation, just visual */}
      <svg className="absolute w-[80px] h-[80px] opacity-5 animate-spin-slow" style={{ left: '15%', top: '30%' }}>
        <polygon points="40,5 75,75 5,75" fill="none" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />
      </svg>
      <svg className="absolute w-[70px] h-[70px] opacity-5 animate-spin-reverse" style={{ right: '15%', top: '35%' }}>
        <circle cx="35" cy="35" r="30" fill="none" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1" />
      </svg>

      {/* Static Icons with CSS float animation */}
      {icons3D.map((item, i) => (
        <div
          key={`icon3d-${i}`}
          className="absolute animate-float"
          style={{
            left: item.x,
            top: item.y,
            color: item.color,
            animationDelay: `${i * 0.8}s`,
          }}
        >
          <item.Icon size={item.size} strokeWidth={1} />
        </div>
      ))}

      {/* Static connection nodes - No animation */}
      {[
        { x: '10%', y: '30%', color: 'rgba(56, 189, 248, 0.2)' },
        { x: '88%', y: '25%', color: 'rgba(168, 85, 247, 0.2)' },
        { x: '50%', y: '50%', color: 'rgba(56, 189, 248, 0.15)' },
      ].map((node, i) => (
        <div
          key={`node-${i}`}
          className="absolute w-2 h-2 rounded-full animate-pulse-slow"
          style={{
            left: node.x,
            top: node.y,
            background: node.color,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  )
})
Floating3DIconsBackground.displayName = 'Floating3DIconsBackground'

// Removed FloatingSphere for better performance

// Simplified 3D Card Component with Tilt - Lighter version
const Card3D = React.memo(({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useTransform(y, [-100, 100], [5, -5])
  const rotateY = useTransform(x, [-100, 100], [-5, 5])

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  )
})
Card3D.displayName = 'Card3D'

// Removed GlowingRing for better performance

// Simplified Static Grid Background
const AnimatedGrid = React.memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
})
AnimatedGrid.displayName = 'AnimatedGrid'

// Removed Particles for better performance

// Stats Counter Component - Optimized with memo
const AnimatedCounter = React.memo(({ value, suffix = "", label }: { value: number, suffix?: string, label: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    
    const duration = 1500 // Reduced from 2000
    const steps = 40 // Reduced from 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref}>
      <motion.div 
        className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-[#38BDF8] via-cyan-400 to-blue-500 bg-clip-text text-transparent"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {count}{suffix}
      </motion.div>
      <div className="text-xs sm:text-sm md:text-base mt-2" style={{color: 'var(--text-secondary)'}}>{label}</div>
    </div>
  )
})
AnimatedCounter.displayName = 'AnimatedCounter'
// NOT: Görsellerde next/image kullanın ve boyutları optimize edin. Örnek:
// import Image from 'next/image'
// <Image src="/path/to/image.jpg" width={400} height={300} alt="Açıklama" priority />

const MainHero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden pt-16 lg:pt-32">
      {/* Premium Animated Background with Rings and Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <PremiumBackground />
      </div>

      {/* 3D Floating Icons Background - Yazıların Arkasında */}
      <div className="absolute inset-0 pointer-events-none z-1">
        <Floating3DIconsBackground />
      </div>

      {/* Main Hero Content */}
      <motion.div 
        className="relative z-10 min-h-screen flex items-center justify-center py-10"
        style={{ y, opacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-6 sm:space-y-8">
            
            {/* Kicker Badge with Sparkles - Simplified */}
            <motion.div 
              className="mb-4 sm:mb-6 flex justify-center"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/25 backdrop-blur-sm">
                <span className="text-[#38BDF8]">
                  <Sparkles size={16} />
                </span>
                <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-white/90">
                  Arlan Medya - Yazılım & Dijital Yönetim
                </span>
              </div>
            </motion.div>

            {/* Main Title - TrueFocus Effect - Simplified */}
            <motion.div 
              className="mb-4 sm:mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight [&_span]:bg-linear-to-br [&_span]:from-white [&_span]:via-[#38BDF8] [&_span]:to-cyan-400 [&_span]:bg-clip-text [&_span]:text-transparent">
                <TrueFocus 
                  sentence="Dijitalde Öne Çıkan Markalar Şanslı Değil, Doğru Yönlendirilmiştir."
                  manualMode={false}
                  blurAmount={3}
                  borderColor="#38BDF8"
                  glowColor="rgba(56, 189, 248, 0.4)"
                  animationDuration={0.2}
                  pauseBetweenAnimations={0.5}
                />
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4 sm:px-0 text-white/70" 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Arlan Medya, işletmeniz için özel yazılım geliştirme ve entegre dijital yönetim hizmetleri sunar. SEO uyumlu, yüksek performanslı çözümlerle online varlığınızı güçlendirin.
            </motion.p>

            {/* Chips/Tags */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 px-4 sm:px-0"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {["Yazılım Geliştirme", "Dijital Yönetim", "Web Uygulama", "SEO Optimizasyon"].map((chip, index) => (
                <motion.span
                  key={chip}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] hover:bg-[#38BDF8]/20 hover:border-[#38BDF8]/40 transition-all cursor-default"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {chip}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons - New Design */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0 pt-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {/* Primary Button */}
              <motion.button
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-[#0F172A] overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #38BDF8 0%, rgba(56, 189, 248, 0.8) 100%)',
                  boxShadow: '0 4px 24px rgba(56, 189, 248, 0.35)',
                }}
                whileHover={{ scale: 1.02, y: -3, boxShadow: '0 8px 32px rgba(56, 189, 248, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Hemen Başlayın</span>
                <motion.span
                  className="transition-transform group-hover:translate-x-1"
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>

              {/* Secondary Button */}
              <motion.button 
                className="group relative px-8 py-4 rounded-full font-medium text-white/90 overflow-hidden"
                style={{
                  background: 'rgba(248, 251, 255, 0.08)',
                  border: '1px solid rgba(248, 251, 255, 0.18)',
                  backdropFilter: 'blur(8px)',
                }}
                whileHover={{ scale: 1.02, y: -2, background: 'rgba(248, 251, 255, 0.14)', borderColor: 'rgba(248, 251, 255, 0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Hizmetleri İncele</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators with LogoLoop */}
            <motion.div 
              className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12 border-t border-[#38BDF8]/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <p className="text-xs sm:text-sm mb-6 sm:mb-8" style={{color: 'var(--text-secondary)'}}>
                Güvenilir markalarla çalışıyoruz
              </p>
              <div className="relative h-20 overflow-hidden">
                <LogoLoop
                  logos={[
                    { node: <SiGoogle className="text-slate-400 hover:text-white transition-colors" />, title: "Google" },
                    { node: <SiMeta className="text-slate-400 hover:text-white transition-colors" />, title: "Meta" },
                    { node: <SiLinkedin className="text-slate-400 hover:text-white transition-colors" />, title: "LinkedIn" },
                    { node: <SiX className="text-slate-400 hover:text-white transition-colors" />, title: "X" },
                    { node: <SiInstagram className="text-slate-400 hover:text-white transition-colors" />, title: "Instagram" },
                    { node: <SiYoutube className="text-slate-400 hover:text-white transition-colors" />, title: "YouTube" },
                    { node: <SiTiktok className="text-slate-400 hover:text-white transition-colors" />, title: "TikTok" },
                    { node: <SiSpotify className="text-slate-400 hover:text-white transition-colors" />, title: "Spotify" },
                  ]}
                  speed={80}
                  direction="left"
                  logoHeight={50}
                  gap={80}
                  hoverSpeed={0}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#0F172A"
                  ariaLabel="Partner logoları"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#38BDF8]/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-[#38BDF8] rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="relative z-10 py-12 sm:py-16 md:py-24" style={{ isolation: 'isolate' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
              style={{color: 'var(--text-primary)'}}
            >
              <span className="bg-linear-to-r from-[#38BDF8] via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Yazılım & Dijital Çözümler
              </span>
            </motion.h2>
            <p className="text-xs sm:text-sm md:text-base max-w-xl mx-auto" style={{color: 'var(--text-secondary)'}}>
              Arlan Medya ile özel yazılım geliştirme, dijital yönetim ve SEO optimizasyonu
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
            style={{ contentVisibility: 'auto', contain: 'layout paint style', willChange: 'transform, opacity' }}
          >
            <ServiceCard
              title="Yazılım Geliştirme"
              description="React, Next.js ve Node.js ile ölçeklenebilir, yüksek performanslı web ve mobil uygulamaları geliştiriyoruz."
              gradient="from-blue-500 via-cyan-400 to-teal-500"
              delay={0}
              icon={
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />

            <ServiceCard
              title="Dijital Yönetim"
              description="SEO, SEM, sosyal medya ve içerik yönetimi ile online varlığınızı güçlendirin ve arama motorlarında üst sıralara çıkın."
              gradient="from-purple-500 via-pink-500 to-rose-500"
              delay={0.1}
              icon={
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              }
            />

            <ServiceCard
              title="Web Tasarım & UX/UI"
              description="Kullanıcı deneyimi odaklı, dönüşüme uygun modern web tasarımları ile markanızı profesyonel görüntüleyin."
              gradient="from-orange-500 via-amber-500 to-yellow-500"
              delay={0.2}
              icon={
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
            />

            <ServiceCard
              title="Marka Kimliği & Strateji"
              description="Akılda kalıcı logo, kurumsal kimlik ve marka stratejisi ile rakiplerinizden sıyrılın."
              gradient="from-emerald-500 via-green-500 to-lime-500"
              delay={0.3}
              icon={
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
            />

            <ServiceCard
              title="API & Entegrasyon"
              description="RESTful API geliştirme, üçüncü parti hizmetleri entegre edin ve otomasyonlarla verimliliği artırın."
              gradient="from-indigo-500 via-violet-500 to-purple-500"
              delay={0.4}
              icon={
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
            />

            <ServiceCard
              title="Güvenlik & Performans"
              description="SSL sertifikaları, siber güvenlik önlemleri, CDN optimizasyonu ve hızlı yükleme sürelerine sahip uygulamalar."
              gradient="from-rose-500 via-red-500 to-orange-500"
              delay={0.5}
              icon={
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainHero
