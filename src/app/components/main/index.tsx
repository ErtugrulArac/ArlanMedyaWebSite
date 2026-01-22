'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import ServiceCard from "../ui/service-card"
import LogoLoop from "../ui/logo-loop"
import TrueFocus from "../ui/true-focus"
import { SiGoogle, SiMeta, SiLinkedin, SiX, SiInstagram, SiYoutube, SiTiktok, SiSpotify } from 'react-icons/si'
import { Sparkles, ArrowRight } from 'lucide-react'

// 3D Floating Sphere Component
const FloatingSphere = ({ 
  size, 
  color, 
  position, 
  delay = 0,
  blur = false 
}: { 
  size: number
  color: string
  position: { x: string, y: string }
  delay?: number
  blur?: boolean
}) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: position.x,
        top: position.y,
        background: `radial-gradient(circle at 30% 30%, ${color}, transparent 70%)`,
        boxShadow: `0 0 ${size/2}px ${color}40, inset 0 0 ${size/3}px rgba(255,255,255,0.1)`,
        filter: blur ? 'blur(2px)' : 'none',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.4, 0.8, 0.4],
        scale: [1, 1.1, 1],
        y: [0, -30, 0],
        x: [0, 15, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
}

// 3D Card Component with Tilt
const Card3D = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 300, damping: 30 })

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
}

// Glowing Ring Component
const GlowingRing = ({ size, delay = 0 }: { size: number, delay?: number }) => {
  return (
    <motion.div
      className="absolute rounded-full border-2 border-[#38BDF8]/20"
      style={{
        width: size,
        height: size,
        left: '50%',
        top: '50%',
        marginLeft: -size/2,
        marginTop: -size/2,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0, 0.5, 0],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
}

// Animated Grid Background
const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center top',
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(15, 23, 42, 1) 100%)',
        }}
      />
    </div>
  )
}

// Particle Effect
const Particles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#38BDF8]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// Stats Counter Component
const AnimatedCounter = ({ value, suffix = "", label }: { value: number, suffix?: string, label: string }) => {
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
    
    const duration = 2000
    const steps = 60
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
        className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#38BDF8] via-cyan-400 to-blue-500 bg-clip-text text-transparent"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {count}{suffix}
      </motion.div>
      <div className="text-xs sm:text-sm md:text-base mt-2" style={{color: 'var(--text-secondary)'}}>{label}</div>
    </div>
  )
}

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
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatedGrid />
        <Particles />
        
        {/* 3D Floating Spheres */}
        <FloatingSphere size={300} color="#38BDF8" position={{ x: '80%', y: '10%' }} delay={0} />
        <FloatingSphere size={200} color="#8B5CF6" position={{ x: '10%', y: '60%' }} delay={1} blur />
        <FloatingSphere size={150} color="#EC4899" position={{ x: '70%', y: '70%' }} delay={2} />
        <FloatingSphere size={100} color="#10B981" position={{ x: '20%', y: '20%' }} delay={3} blur />
        <FloatingSphere size={80} color="#F59E0B" position={{ x: '85%', y: '50%' }} delay={4} />
        
        {/* Glowing Rings */}
        <GlowingRing size={600} delay={0} />
        <GlowingRing size={800} delay={1} />
        <GlowingRing size={1000} delay={2} />
      </div>

      {/* Main Hero Content */}
      <motion.div 
        className="relative z-10 min-h-screen flex items-center justify-center py-10"
        style={{ y, opacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-6 sm:space-y-8">
            
            {/* Kicker Badge with Sparkles */}
            <motion.div 
              className="mb-4 sm:mb-6 flex justify-center"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/25 backdrop-blur-sm">
                <motion.span 
                  className="text-[#38BDF8]"
                  animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles size={16} />
                </motion.span>
                <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-white/90">
                  Arlan Medya - Yazılım & Dijital Yönetim
                </span>
              </div>
            </motion.div>

            {/* Main Title - TrueFocus Effect */}
            <motion.div 
              className="mb-4 sm:mb-6"
              style={{
                transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight [&_span]:bg-gradient-to-br [&_span]:from-white [&_span]:via-[#38BDF8] [&_span]:to-cyan-400 [&_span]:bg-clip-text [&_span]:text-transparent">
                <TrueFocus 
                  sentence="Dijitalde Öne Çıkan Markalar Şanslı Değil, Doğru Yönlendirilmiştir."
                  manualMode={false}
                  blurAmount={4}
                  borderColor="#38BDF8"
                  glowColor="rgba(56, 189, 248, 0.6)"
                  animationDuration={0.25}
                  pauseBetweenAnimations={0.6}
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
              <div className="relative h-[80px] overflow-hidden">
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
      <div className="relative z-10 py-12 sm:py-16 md:py-24">
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
              <span className="bg-gradient-to-r from-[#38BDF8] via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Yazılım & Dijital Çözümler
              </span>
            </motion.h2>
            <p className="text-xs sm:text-sm md:text-base max-w-xl mx-auto" style={{color: 'var(--text-secondary)'}}>
              Arlan Medya ile özel yazılım geliştirme, dijital yönetim ve SEO optimizasyonu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
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
