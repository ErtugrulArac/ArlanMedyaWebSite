'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Shield, Code2 } from 'lucide-react'

// Premium 3D Logo Platform Component
const Rotating3DCube = React.memo(() => {
  return (
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64" style={{ perspective: '1200px' }}>
      {/* Outer Rotating Ring */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            border: '2px dashed rgba(56, 189, 248, 0.3)',
          }}
        />
        {/* Orbiting Dots */}
        {[0, 90, 180, 270].map((deg, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              background: i % 2 === 0 ? '#38BDF8' : '#A855F7',
              boxShadow: i % 2 === 0 ? '0 0 15px #38BDF8' : '0 0 15px #A855F7',
              transform: `rotate(${deg}deg) translateX(${window?.innerWidth > 768 ? '110px' : '75px'}) translateY(-50%)`,
            }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </motion.div>

      {/* Secondary Ring - Counter Rotate */}
      <motion.div
        className="absolute inset-4 sm:inset-5 md:inset-6"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            border: '1px solid rgba(168, 85, 247, 0.2)',
          }}
        />
      </motion.div>

      {/* Main 3D Platform */}
      <motion.div
        className="absolute inset-6 sm:inset-8 md:inset-10"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ 
          rotateY: [0, 360],
          rotateX: [0, 10, 0, -10, 0],
        }}
        transition={{ 
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* Front Face - Main Logo Display */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{ 
            transform: 'translateZ(40px)',
            background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9))',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            boxShadow: '0 0 40px rgba(56, 189, 248, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        >
          {/* Inner Glow */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.1) 0%, transparent 70%)',
            }}
          />
          
          {/* Logo */}
          <motion.img 
            src="/logolar/arlanlogonav.webp" 
            alt="Arlan Logo" 
            className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
            animate={{ 
              scale: [1, 1.05, 1],
              filter: ['drop-shadow(0 0 10px rgba(56, 189, 248, 0.3))', 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.5))', 'drop-shadow(0 0 10px rgba(56, 189, 248, 0.3))']
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Corner Decorations */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#38BDF8]/40 rounded-tl" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#38BDF8]/40 rounded-tr" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#38BDF8]/40 rounded-bl" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#38BDF8]/40 rounded-br" />
        </motion.div>
        
        {/* Back Face */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center rounded-2xl sm:rounded-3xl"
          style={{ 
            transform: 'rotateY(180deg) translateZ(40px)',
            background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9))',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            boxShadow: '0 0 40px rgba(168, 85, 247, 0.2)',
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
            }}
          />
          <motion.img 
            src="/logolar/arlanlogonav.webp" 
            alt="Arlan Logo" 
            className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain opacity-80"
            style={{ filter: 'hue-rotate(60deg)' }}
          />
        </motion.div>
      </motion.div>

      {/* Floating Icons Around */}
      <motion.div
        className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(56, 189, 248, 0.1))',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          backdropFilter: 'blur(8px)',
        }}
        animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#38BDF8]" />
      </motion.div>

      <motion.div
        className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.1))',
          border: '1px solid rgba(168, 85, 247, 0.3)',
          backdropFilter: 'blur(8px)',
        }}
        animate={{ y: [0, 8, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      >
        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#A855F7]" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 -left-4 sm:-left-5 w-7 h-7 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.1))',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          backdropFilter: 'blur(8px)',
        }}
        animate={{ x: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
      >
        <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#10B981]" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 -right-4 sm:-right-5 w-7 h-7 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(236, 72, 153, 0.1))',
          border: '1px solid rgba(236, 72, 153, 0.3)',
          backdropFilter: 'blur(8px)',
        }}
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.8 }}
      >
        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#EC4899]" />
      </motion.div>

      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 60%)',
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 60%)',
          }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>
    </div>
  )
})
Rotating3DCube.displayName = 'Rotating3DCube'

// Animated Text Line Component
const AnimatedTextLine = ({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: React.ReactNode
  delay?: number
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        initial={{ y: 50 }}
        animate={isInView ? { y: 0 } : { y: 50 }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// Highlight Text Component
const HighlightText = ({ 
  children, 
  color = "#38BDF8" 
}: { 
  children: React.ReactNode
  color?: string 
}) => {
  return (
    <span 
      className="relative inline-block"
      style={{ color }}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute bottom-1 left-0 right-0 h-[3px] rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}60)` }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      />
    </span>
  )
}

// Content Data
const contentSections = [
  {
    title: "Teknoloji",
    highlight: "Modern Stack",
    description: "React, Node.js, TypeScript, Python, Docker ve Kubernetes gibi en güncel teknolojileri kullanıyoruz. Ölçeklenebilir, güvenilir ve bakım yapılabilir kod yazma konusunda uzmanız.",
    color: "#38BDF8"
  },
  {
    title: "Kalite",
    highlight: "Garantili",
    description: "Otomatik test, code review, kontinyu entegrasyon ve devops best practices ile %99.9 uptime ve kusursuz kodlama sağlıyoruz. Hata yoktur, sadece sürprizler olur.",
    color: "#10B981"
  },
  {
    title: "Deneyim",
    highlight: "Kanıtlanmış",
    description: "10+ yıllık yazılım geliştirme tecrübesi, 50+ başarıyla tamamlanmış proje ve memnun müşteriler. E-commerce, SaaS, kurumsal uygulamalar ve dijital yönetim sistemlerinde uzman ekip.",
    color: "#A855F7"
  },
  {
    title: "Destek",
    highlight: "Süreklil",
    description: "Geliştirmeden sonra da yanınız olmaya devam ediyoruz. Sistem monitoring, security updates, bug fixes ve yeni feature geliştirme için 7/24 erişilebilir bir ekip.",
    color: "#FBBF24"
  }
]

// Main Component
const NedenBiz = () => {
  const containerRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section 
      ref={containerRef}
      id="neden-biz"
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden"
      aria-labelledby="why-us-title"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 50% 50% at 50% 0%, rgba(56, 189, 248, 0.08), transparent),
              radial-gradient(ellipse 40% 40% at 100% 50%, rgba(168, 85, 247, 0.06), transparent)
            `
          }}
        />
      </div>

      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity }}
      >
        {/* Header with 3D Cube */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-12 sm:mb-20">
          {/* 3D Rotating Cube - Visible on all screens */}
          <motion.div
            className="flex-shrink-0 scale-75 sm:scale-75 lg:scale-100"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Rotating3DCube />
          </motion.div>

          {/* Title Section */}
          <motion.div
            ref={titleRef}
            className="text-center lg:text-left"
          >
            <AnimatedTextLine delay={0.1}>
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#38BDF8] mb-3">
                Farkımız
              </span>
            </AnimatedTextLine>
            
            <AnimatedTextLine delay={0.2}>
              <h2 
                id="why-us-title"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-4"
              >
                Yazılım Projelerinizde
                <br />
                <span className="bg-gradient-to-r from-[#38BDF8] via-cyan-400 to-[#A855F7] bg-clip-text text-transparent">
                  Güvenilir Partner
                </span>
              </h2>
            </AnimatedTextLine>

            <AnimatedTextLine delay={0.4}>
              <p className="text-sm sm:text-base lg:text-lg text-white/60 max-w-lg leading-relaxed">
                Bizimle çalışmak, yalnızca bir hizmet almak değil; dijital dönüşüm yolculuğunuzda sizi anlayan, yön veren ve birlikte büyüyen bir stratejik ortak kazanmaktır.
              </p>
            </AnimatedTextLine>
          </motion.div>
        </div>

        {/* Content Sections - Clean Typography */}
        <div className="space-y-10 sm:space-y-16">
          {contentSections.map((section, index) => (
            <motion.article
              key={section.title}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-4 sm:gap-6 lg:gap-12 items-start`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Section Label */}
              <div className={`lg:w-1/4 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                <motion.div
                  className="inline-flex items-center gap-2"
                  initial={{ opacity: 0, x: index % 2 === 1 ? 15 : -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <span 
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                    style={{ 
                      color: section.color,
                      textShadow: `0 0 40px ${section.color}30`
                    }}
                  >
                    0{index + 1}
                  </span>
                </motion.div>
                <h3 
                  className="text-xs sm:text-sm font-semibold tracking-widest uppercase mt-1"
                  style={{ color: `${section.color}90` }}
                >
                  {section.title}
                </h3>
              </div>

              {/* Content */}
              <div className="lg:w-3/4">
                <AnimatedTextLine delay={0.1}>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                    <HighlightText color={section.color}>{section.highlight}</HighlightText>
                    {' '}Çalışma Prensibi
                  </h4>
                </AnimatedTextLine>
                
                <AnimatedTextLine delay={0.2}>
                  <p className="text-xs sm:text-sm lg:text-base text-white/60 leading-relaxed max-w-xl">
                    {section.description}
                  </p>
                </AnimatedTextLine>

                {/* Decorative Line */}
                <motion.div
                  className="mt-4 sm:mt-6 h-px max-w-xs sm:max-w-md"
                  style={{ 
                    background: `linear-gradient(90deg, ${section.color}30, transparent)` 
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          className="mt-24 sm:mt-32 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className="relative max-w-4xl mx-auto">
            {/* Quote Mark */}
            <span 
              className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl sm:text-9xl font-serif opacity-10 text-[#38BDF8]"
              aria-hidden="true"
            >
              "
            </span>
            
            <AnimatedTextLine delay={0.1}>
              <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-relaxed">
                Bizimle çalışmak, sadece bir ajans tutmak değil;
                <span className="text-[#38BDF8]"> dijital dönüşümünüzde güvenilir bir partner </span>
                kazanmaktır.
              </p>
            </AnimatedTextLine>

            <motion.footer
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="inline-flex items-center gap-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <span className="text-white/50 text-sm font-medium tracking-wide">
                  ARLAN MEDYA EKİBİ
                </span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </div>
            </motion.footer>
          </blockquote>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="#contact"
            className="group inline-flex items-center gap-3 text-lg font-medium text-[#38BDF8] hover:text-white transition-colors"
            whileHover={{ x: 10 }}
          >
            <span>Birlikte çalışalım</span>
            <ArrowRight 
              size={20} 
              className="group-hover:translate-x-2 transition-transform" 
            />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Arlan Medya",
            "description": "Premium dijital pazarlama ve web tasarım ajansı",
            "foundingDate": "2018",
            "slogan": "Dijitalde başarı, doğru partnerle başlar"
          })
        }}
      />
    </section>
  )
}

export default NedenBiz
