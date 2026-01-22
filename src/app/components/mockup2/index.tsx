'use client'

import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Sparkles, Rocket, Target, TrendingUp, Zap, ArrowRight } from 'lucide-react'

// 3D Tilting Card Component
const TiltCard = ({ 
  children, 
  className = "",
  intensity = 15 
}: { 
  children: React.ReactNode
  className?: string
  intensity?: number
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useSpring(useTransform(y, [-100, 100], [intensity, -intensity]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-100, 100], [-intensity, intensity]), { stiffness: 300, damping: 30 })

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
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animated Phone Mockup - Responsive version
const PhoneMockup = ({ delay = 0, rotate = 0, zIndex = 1, isMobile = false }: { delay?: number; rotate?: number; zIndex?: number; isMobile?: boolean }) => {
  return (
    <motion.div
      className={isMobile ? "relative" : "absolute"}
      style={{ 
        zIndex,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 100, rotateY: rotate - 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        rotateY: rotate,
      }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: "easeOut" 
      }}
      viewport={{ once: true }}
    >
      <TiltCard intensity={10}>
        <div 
          className={`relative rounded-[30px] overflow-hidden ${isMobile ? 'w-[140px] h-[280px] sm:w-[160px] sm:h-[320px]' : 'w-[180px] h-[360px]'}`}
          style={{
            background: 'linear-gradient(145deg, #0a1628, #0f172a)',
            boxShadow: `
              0 25px 50px -12px rgba(0, 0, 0, 0.7),
              0 0 0 1px rgba(56, 189, 248, 0.2),
              0 0 30px rgba(56, 189, 248, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.1)
            `,
            transform: "translateZ(20px)",
          }}
        >
          {/* Phone Screen */}
          <div className="absolute inset-2 rounded-[24px] overflow-hidden bg-gradient-to-br from-[#050816] to-[#0a1628]">
            {/* Status Bar */}
            <div className="flex justify-between items-center px-4 py-2 text-[10px] text-white/70">
              <span>09:41</span>
              <div className="flex gap-1">
                <div className="w-3 h-2 bg-white/70 rounded-sm" />
                <div className="w-3 h-2 bg-white/70 rounded-sm" />
                <div className="w-5 h-2 bg-white/70 rounded-sm" />
              </div>
            </div>
            
            {/* App Content */}
            <div className="p-3">
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#38BDF8] to-cyan-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Arlan Medya</p>
                  <p className="text-[#38BDF8]/50 text-[8px]">Performans Paneli</p>
                </div>
              </div>

              {/* Stats Card */}
              <motion.div 
                className="bg-gradient-to-br from-[#38BDF8]/20 to-cyan-600/10 rounded-xl p-3 mb-3 border border-[#38BDF8]/20"
                animate={{ 
                  boxShadow: [
                    "0 0 0 rgba(56, 189, 248, 0)",
                    "0 0 20px rgba(56, 189, 248, 0.3)",
                    "0 0 0 rgba(56, 189, 248, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <p className="text-white/60 text-[8px] mb-1">Organik Büyüme</p>
                <p className="text-white text-lg font-bold">+186%</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400 text-[8px]">Son 30 gün</span>
                </div>
              </motion.div>

              {/* Mini Charts */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/5 rounded-lg p-2">
                  <p className="text-white/50 text-[7px]">Web Trafiği</p>
                  <p className="text-white text-sm font-bold">24.8K</p>
                  <div className="flex gap-[2px] mt-1">
                    {[40, 60, 45, 80, 65, 90, 75].map((h, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-gradient-to-t from-[#38BDF8] to-cyan-400 rounded-full"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: 0.1 * i + delay, duration: 0.5 }}
                        style={{ maxHeight: 20 }}
                      />
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-2">
                  <p className="text-white/50 text-[7px]">Dönüşüm</p>
                  <p className="text-white text-sm font-bold">%4.2</p>
                  <div className="flex gap-[2px] mt-1">
                    {[60, 40, 75, 50, 85, 70, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-gradient-to-t from-violet-500 to-purple-400 rounded-full"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: 0.1 * i + delay, duration: 0.5 }}
                        style={{ maxHeight: 20 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full" />
        </div>
      </TiltCard>
    </motion.div>
  )
}

// Service Card Mockup - Responsive version with 4 color variants
const ServiceCardMockup = ({ delay = 0, rotate = 0, variant = 'cyan', isMobile = false }: { delay?: number; rotate?: number; variant?: 'cyan' | 'purple' | 'orange' | 'emerald'; isMobile?: boolean }) => {
  
  // Daha sofistike ve yumuşak renk paleti
  const variantStyles = {
    cyan: {
      background: 'linear-gradient(145deg, #0c1a2e, #0f2942, #0a1628)',
      border: 'rgba(56, 189, 248, 0.15)',
      glow: '0 8px 32px rgba(56, 189, 248, 0.1)',
      chip: 'from-[#38BDF8]/60 to-cyan-700/60',
      chipGlow: 'rgba(56, 189, 248, 0.3)',
      accent: 'text-[#38BDF8]',
      iconBg: 'bg-[#38BDF8]/10',
      title: 'Sosyal Medya Yönetimi',
      package: 'Full Paket',
      desc: '360° Dijital Yönetim'
    },
    purple: {
      background: 'linear-gradient(145deg, #1a1625, #231d35, #110e1a)',
      border: 'rgba(139, 92, 246, 0.15)',
      glow: '0 8px 32px rgba(139, 92, 246, 0.1)',
      chip: 'from-violet-500/60 to-purple-700/60',
      chipGlow: 'rgba(139, 92, 246, 0.3)',
      accent: 'text-violet-400',
      iconBg: 'bg-violet-500/10',
      title: 'İçerik Üretimi',
      package: 'Creative Paket',
      desc: 'Video & Görsel Tasarım'
    },
    orange: {
      background: 'linear-gradient(145deg, #1f1510, #2a1a12, #150e0a)',
      border: 'rgba(249, 115, 22, 0.15)',
      glow: '0 8px 32px rgba(249, 115, 22, 0.1)',
      chip: 'from-orange-500/60 to-amber-700/60',
      chipGlow: 'rgba(249, 115, 22, 0.3)',
      accent: 'text-orange-400',
      iconBg: 'bg-orange-500/10',
      title: 'Reklam Yönetimi',
      package: 'Ads Paket',
      desc: 'Google & Meta Ads'
    },
    emerald: {
      background: 'linear-gradient(145deg, #0c1f1a, #102a22, #081512)',
      border: 'rgba(16, 185, 129, 0.15)',
      glow: '0 8px 32px rgba(16, 185, 129, 0.1)',
      chip: 'from-emerald-500/60 to-green-700/60',
      chipGlow: 'rgba(16, 185, 129, 0.3)',
      accent: 'text-emerald-400',
      iconBg: 'bg-emerald-500/10',
      title: 'SEO & Web Geliştirme',
      package: 'Growth Paket',
      desc: 'Organik Büyüme Odaklı'
    }
  }

  const style = variantStyles[variant]
  
  return (
    <motion.div
      className={isMobile ? "relative" : "absolute"}
      style={{ 
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 80, rotateZ: rotate - 5 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        rotateZ: rotate,
      }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: "easeOut" 
      }}
      viewport={{ once: true }}
    >
      <TiltCard intensity={8}>
        <div 
          className={`relative rounded-2xl overflow-hidden p-4 backdrop-blur-sm ${isMobile ? 'w-[140px] h-[100px]' : 'w-[240px] h-[150px]'}`}
          style={{
            background: style.background,
            boxShadow: `
              0 20px 40px -12px rgba(0, 0, 0, 0.4),
              0 0 0 1px ${style.border},
              ${style.glow},
              inset 0 1px 0 rgba(255, 255, 255, 0.05)
            `,
            transform: "translateZ(10px)",
          }}
        >
          {/* Card Pattern */}
          <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="80" cy="20" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
              <circle cx="80" cy="20" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
              <circle cx="80" cy="20" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
            </svg>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2 mb-2">
            <motion.div 
              className="w-7 h-7 rounded-full flex items-center justify-center bg-white/20"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <span className="text-white text-[10px] font-bold">A</span>
            </motion.div>
            <span className="text-white font-semibold text-xs">Arlan Medya</span>
          </div>

          {/* Card Details */}
          <div className="space-y-1">
            <div className="text-[10px] text-white/70">
              {style.title}
            </div>
            <div className="text-white font-bold text-base tracking-wider">
              {style.package}
            </div>
            <div className="flex items-center gap-1">
              <Sparkles className={`w-2.5 h-2.5 ${style.accent}`} />
              <span className="text-[10px] text-white/80">
                {style.desc}
              </span>
            </div>
          </div>

          {/* Chip Effect */}
          <motion.div 
            className={`absolute bottom-3 right-3 w-8 h-6 rounded bg-gradient-to-br ${style.chip}`}
            animate={{ 
              boxShadow: [
                "0 0 0 rgba(0, 0, 0, 0)",
                `0 0 15px ${style.chipGlow}`,
                "0 0 0 rgba(0, 0, 0, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="grid grid-cols-3 gap-[1px] p-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-black/20 rounded-[1px]" />
              ))}
            </div>
          </motion.div>
        </div>
      </TiltCard>
    </motion.div>
  )
}

// Feature Item Component
const FeatureItem = ({ 
  icon: Icon, 
  title, 
  description,
  delay = 0 
}: { 
  icon: React.ComponentType<{ className: string }>
  title: string
  description: string
  delay?: number
}) => {
  return (
    <motion.div
      className="flex items-start gap-4 group"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#38BDF8]/20 to-cyan-600/10 border border-[#38BDF8]/30 flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#38BDF8]" />
      </motion.div>
      <div>
        <h4 className="text-white font-semibold mb-1 text-sm sm:text-base group-hover:text-[#38BDF8] transition-colors">
          {title}
        </h4>
        <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

// Animated Circular Background
const CircularBackground = ({ isMobile = false }: { isMobile?: boolean }) => {
  const baseSize = isMobile ? 80 : 150
  const containerSize = isMobile ? 350 : 600
  
  return (
    <div 
      className={`absolute ${isMobile ? 'left-1/2 -translate-x-1/2' : 'right-0'} top-1/2 -translate-y-1/2`}
      style={{ width: containerSize, height: containerSize }}
    >
      {/* Main Circles */}
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-[#38BDF8]/10"
          style={{
            width: `${i * baseSize}px`,
            height: `${i * baseSize}px`,
            left: '50%',
            top: '50%',
            marginLeft: `-${i * baseSize / 2}px`,
            marginTop: `-${i * baseSize / 2}px`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          viewport={{ once: true }}
        />
      ))}
      
      {/* Animated Glow Ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: isMobile ? '200px' : '400px',
          height: isMobile ? '200px' : '400px',
          left: '50%',
          top: '50%',
          marginLeft: isMobile ? '-100px' : '-200px',
          marginTop: isMobile ? '-100px' : '-200px',
          background: 'radial-gradient(circle, transparent 45%, rgba(56, 189, 248, 0.1) 50%, transparent 55%)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Center Glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: isMobile ? '150px' : '300px',
          height: isMobile ? '150px' : '300px',
          left: '50%',
          top: '50%',
          marginLeft: isMobile ? '-75px' : '-150px',
          marginTop: isMobile ? '-75px' : '-150px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}

// Main Mockup2 Component
const Mockup2 = () => {
  const features = [
    {
      icon: Rocket,
      title: "Dijital Pazarlama Stratejileri",
      description: "Markanızı dijital dünyada büyütmek için özel stratejiler geliştiriyoruz."
    },
    {
      icon: Target,
      title: "Hedef Kitle Analizi",
      description: "Doğru kitleye ulaşmak için detaylı analiz ve optimizasyon yapıyoruz."
    },
    {
      icon: Zap,
      title: "Hızlı ve Etkili Sonuçlar",
      description: "Kampanyalarınızdan maksimum verim almanızı sağlıyoruz."
    }
  ]

  return (
    <section className="relative pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/25 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-[#38BDF8]"
                animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.span>
              <span className="text-[#38BDF8] text-sm font-medium">Dijital Çözümler</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-white">Dijital Dünyada</span>
              <br />
              <span className="text-white">Güvenilir</span>{' '}
              <span className="bg-gradient-to-r from-[#38BDF8] via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ortağınız.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-white/60 text-sm sm:text-base lg:text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Arlan Medya olarak, işletmenizin dijital dünyada büyümesi için 
              kapsamlı çözümler sunuyoruz. Sosyal medya yönetiminden SEO&apos;ya, 
              reklam kampanyalarından içerik üretimine kadar tüm ihtiyaçlarınız için buradayız.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#38BDF8] to-cyan-600 rounded-xl text-white font-semibold overflow-hidden mb-8 lg:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Hemen Başlayın</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>

            {/* Features */}
            <div className="space-y-4 sm:space-y-6 text-left">
              {features.map((feature, index) => (
                <FeatureItem
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={0.4 + index * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Mockups (Desktop) */}
          <div className="relative h-[550px] hidden lg:block">
            <CircularBackground />
            
            {/* Clean Layout: Phone Center, Cards Around */}
            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* Phone Mockup - Center */}
              <motion.div
                className="relative z-20"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <PhoneMockup delay={0.3} rotate={0} zIndex={20} />
              </motion.div>

              {/* Card 1 - Top Left (Purple) */}
              <motion.div
                className="absolute top-4 left-12 z-[5]"
                initial={{ opacity: 0, x: -50, rotate: 0 }}
                whileInView={{ opacity: 1, x: 0, rotate: -8 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ rotate: 0, scale: 1.05 }}
              >
                <ServiceCardMockup delay={0.4} rotate={-8} variant="purple" />
              </motion.div>

              {/* Card 2 - Top Right (Cyan) */}
              <motion.div
                className="absolute top-8 right-12 z-[5]"
                initial={{ opacity: 0, x: 50, rotate: 0 }}
                whileInView={{ opacity: 1, x: 0, rotate: 6 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ rotate: 0, scale: 1.05 }}
              >
                <ServiceCardMockup delay={0.5} rotate={6} variant="cyan" />
              </motion.div>

              {/* Card 3 - Bottom Left (Orange) */}
              <motion.div
                className="absolute bottom-20 left-16 z-[5]"
                initial={{ opacity: 0, x: -50, rotate: 0 }}
                whileInView={{ opacity: 1, x: 0, rotate: 5 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ rotate: 0, scale: 1.05 }}
              >
                <ServiceCardMockup delay={0.6} rotate={5} variant="orange" />
              </motion.div>

              {/* Card 4 - Bottom Right (Emerald) */}
              <motion.div
                className="absolute bottom-12 right-16 z-[5]"
                initial={{ opacity: 0, x: 50, rotate: 0 }}
                whileInView={{ opacity: 1, x: 0, rotate: -4 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ rotate: 0, scale: 1.05 }}
              >
                <ServiceCardMockup delay={0.7} rotate={-4} variant="emerald" />
              </motion.div>

            </div>
          </div>

          {/* Mobile/Tablet Mockups - Creative Stacked Layout */}
          <div className="relative lg:hidden mt-32">
            <CircularBackground isMobile />
            
            <div className="relative z-10 flex flex-col items-center px-8 pt-24 pb-16">
              
              {/* Phone Mockup - Center with overlapping cards */}
              <div className="relative" style={{ minHeight: '380px' }}>
                {/* Top Left Card - Floating behind phone */}
                <motion.div
                  className="absolute top-8 left-1/2 -translate-x-[120%] z-[2]"
                  initial={{ opacity: 0, y: -20, rotate: -8 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -8 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ServiceCardMockup delay={0.4} rotate={-8} variant="purple" isMobile />
                </motion.div>

                {/* Top Right Card - Floating behind phone */}
                <motion.div
                  className="absolute top-4 left-1/2 translate-x-[20%] z-[2]"
                  initial={{ opacity: 0, y: -20, rotate: 6 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 6 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ServiceCardMockup delay={0.5} rotate={6} variant="cyan" isMobile />
                </motion.div>

                {/* Phone - Center */}
                <motion.div
                  className="relative z-[5] mx-auto"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <PhoneMockup delay={0.3} rotate={0} zIndex={5} isMobile />
                </motion.div>

                {/* Bottom Left Card - Floating in front */}
                <motion.div
                  className="absolute bottom-6 left-1/2 -translate-x-[115%] z-[6]"
                  initial={{ opacity: 0, y: 20, rotate: 5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 5 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <ServiceCardMockup delay={0.6} rotate={5} variant="orange" isMobile />
                </motion.div>
                
                {/* Bottom Right Card - Floating in front */}
                <motion.div
                  className="absolute bottom-4 left-1/2 translate-x-[15%] z-[6]"
                  initial={{ opacity: 0, y: 20, rotate: -6 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -6 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <ServiceCardMockup delay={0.7} rotate={-6} variant="emerald" isMobile />
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mockup2
