'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { 
  Search, 
  Lightbulb, 
  Palette, 
  Rocket, 
  BarChart3,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

// Process Step Data
const processSteps = [
  {
    id: 1,
    title: "Keşif & Gereksinimler",
    description: "Projenizin hedeflerini, işletme gereksinimlerini ve teknik özellikleri detaylı olarak analiz ediyoruz. Tarafınızdan beklentileri tam olarak anladığımızdan emin oluyoruz.",
    icon: Search,
    color: "#38BDF8",
    gradient: "from-cyan-500 to-blue-500",
    features: ["Proje Tanımı", "İş Gereksinimleri", "Teknik Analiz", "Kapsam Belirleme"]
  },
  {
    id: 2,
    title: "Mimari & Planlama",
    description: "Teknoloji stack'i seçiyoruz, sistem mimarisini tasarlıyoruz, veritabanı şemasını oluşturuyoruz ve geliştirme yol haritasını hazırlıyoruz.",
    icon: Lightbulb,
    color: "#FBBF24",
    gradient: "from-amber-500 to-orange-500",
    features: ["Sistem Mimarisi", "Teknoloji Seçimi", "Veritabanı Tasarımı", "Zaman Planlaması"]
  },
  {
    id: 3,
    title: "Geliştirme & Kodlama",
    description: "Profesyonel geliştiricilerimiz en iyi uygulamaları izleyerek, test edilebilir ve ölçeklenebilir kod yazıyoruz. Code review sürecini katı şekilde takip ediyoruz.",
    icon: Palette,
    color: "#A855F7",
    gradient: "from-purple-500 to-pink-500",
    features: ["Frontend Geliştirme", "Backend Geliştirme", "Code Review", "Dokumentasyon"]
  },
  {
    id: 4,
    title: "Test & Kalite Kontrol",
    description: "Birim testler, entegrasyon testleri ve sistem testlerini yapıyoruz. Performans, güvenlik ve uyumluluğu kapsamlı şekilde test ediyoruz.",
    icon: Rocket,
    color: "#10B981",
    gradient: "from-emerald-500 to-teal-500",
    features: ["Otomatik Testler", "Performans Testi", "Güvenlik Testi", "Hata Taşıma"]
  },
  {
    id: 5,
    title: "Dağıtım & Destek",
    description: "Uygulamayı üretim ortamında dağıtıyoruz, CI/CD pipeline'ını kuruyoruz. Sonrası destek ve bakım sağlıyoruz, güvenlik güncellemeleri yapıyoruz.",
    icon: BarChart3,
    color: "#EC4899",
    gradient: "from-pink-500 to-rose-500",
    features: ["Dağıtım Yönetimi", "CI/CD Setup", "Monitoring", "24/7 Destek"]
  }
]

// Animated Connection Line
const ConnectionLine = ({ index, isInView }: { index: number, isInView: boolean }) => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full top-0 -z-10 hidden lg:block">
      <motion.div
        className="w-full h-full bg-gradient-to-b from-[#38BDF8]/50 to-[#38BDF8]/10"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />
    </div>
  )
}

// Process Step Card Component
const ProcessStepCard = ({ 
  step, 
  index, 
  isEven,
  isLast
}: { 
  step: typeof processSteps[0]
  index: number
  isEven: boolean
  isLast: boolean
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })
  
  const Icon = step.icon

  return (
    <motion.article
      ref={cardRef}
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* Mobile Layout */}
      <div className="lg:hidden relative flex gap-3">
        {/* Mobile Timeline - Left Side */}
        <div className="flex flex-col items-center">
          {/* Step Circle */}
          <motion.div
            className="relative z-10 flex-shrink-0"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.1, type: "spring", stiffness: 200 }}
          >
            <div 
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border-2"
              style={{ 
                borderColor: step.color,
                background: `linear-gradient(135deg, ${step.color}20, ${step.color}05)`,
                boxShadow: `0 0 12px ${step.color}20`
              }}
            >
              <span 
                className="text-sm sm:text-base font-bold"
                style={{ color: step.color }}
              >
                {step.id}
              </span>
            </div>
          </motion.div>
          
          {/* Connecting Line */}
          {!isLast && (
            <motion.div
              className="w-0.5 flex-1 min-h-[1.5rem] mt-1.5"
              style={{ 
                background: `linear-gradient(to bottom, ${step.color}30, ${processSteps[index + 1]?.color || step.color}30)`
              }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            />
          )}
        </div>
        
        {/* Mobile Card Content */}
        <div className="flex-1 pb-4 min-w-0">
          <motion.div
            className="group relative p-3 sm:p-4 rounded-lg overflow-hidden"
            style={{
              background: 'rgba(15, 23, 42, 0.6)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(56, 189, 248, 0.08)',
            }}
            whileHover={{ 
              boxShadow: `0 8px 20px ${step.color}10`,
              borderColor: `${step.color}20`
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-[0.03]`}
            />
            
            {/* Corner Accent */}
            <div
              className="absolute left-0 top-0 w-20 h-20"
              style={{
                background: `radial-gradient(circle at 0% 0%, ${step.color}12, transparent 70%)`,
              }}
            />

            {/* Icon & Title */}
            <div className="relative flex items-center gap-2 mb-2">
              <motion.div
                className="p-2 rounded-md flex-shrink-0"
                style={{ 
                  background: `${step.color}12`,
                }}
              >
                <Icon 
                  size={18} 
                  style={{ color: step.color }}
                  strokeWidth={1.5}
                />
              </motion.div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                {step.title}
              </h3>
            </div>

            {/* Description */}
            <p className="relative text-white/60 leading-relaxed mb-3 text-xs sm:text-sm line-clamp-2">
              {step.description}
            </p>

            {/* Features - Compact on mobile */}
            <div className="relative flex flex-wrap gap-1">
              {step.features.slice(0, 3).map((feature, featureIndex) => (
                <motion.span
                  key={feature}
                  className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium whitespace-nowrap"
                  style={{
                    background: `${step.color}10`,
                    border: `1px solid ${step.color}15`,
                    color: step.color
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 + featureIndex * 0.05 + 0.2 }}
                >
                  <CheckCircle2 size={8} />
                  {feature}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className={`hidden lg:flex items-center gap-12 ${
        isEven ? 'flex-row-reverse' : ''
      }`}>
        {/* Timeline Node - Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            className="relative"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
          >
            {/* Outer Glow */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl"
              style={{ backgroundColor: `${step.color}40` }}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Main Circle */}
            <div 
              className="relative w-16 h-16 rounded-full flex items-center justify-center border-2"
              style={{ 
                borderColor: step.color,
                background: `linear-gradient(135deg, ${step.color}20, ${step.color}05)`,
                boxShadow: `0 0 30px ${step.color}30`
              }}
            >
              <span 
                className="text-xl font-bold"
                style={{ color: step.color }}
              >
                {step.id}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Card Content */}
        <div className={`w-[calc(50%-4rem)] ${isEven ? 'text-right' : 'text-left'}`}>
          <motion.div
            className="group relative p-6 xl:p-8 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(15, 23, 42, 0.6)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(56, 189, 248, 0.1)',
            }}
            whileHover={{ 
              y: -5,
              boxShadow: `0 20px 40px ${step.color}15`,
              borderColor: `${step.color}30`
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Gradient Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
            />
            
            {/* Animated Corner Accent */}
            <div
              className={`absolute ${isEven ? 'right-0' : 'left-0'} top-0 w-24 h-24`}
              style={{
                background: `radial-gradient(circle at ${isEven ? '100% 0%' : '0% 0%'}, ${step.color}15, transparent 70%)`,
              }}
            />

            {/* Icon & Title */}
            <div className={`flex items-center gap-4 mb-4 ${isEven ? 'flex-row-reverse' : ''}`}>
              <motion.div
                className="p-3 rounded-xl"
                style={{ 
                  background: `${step.color}15`,
                  boxShadow: `0 0 20px ${step.color}10`
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon 
                  size={28} 
                  style={{ color: step.color }}
                  strokeWidth={1.5}
                />
              </motion.div>
              <h3 className="text-xl xl:text-2xl font-bold text-white">
                {step.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-white/70 leading-relaxed mb-6 text-sm xl:text-base">
              {step.description}
            </p>

            {/* Features List */}
            <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-end' : 'justify-start'}`}>
              {step.features.map((feature, featureIndex) => (
                <motion.span
                  key={feature}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium"
                  style={{
                    background: `${step.color}10`,
                    border: `1px solid ${step.color}20`,
                    color: step.color
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.15 + featureIndex * 0.1 + 0.3 }}
                  whileHover={{ 
                    scale: 1.05,
                    background: `${step.color}20`
                  }}
                >
                  <CheckCircle2 size={12} />
                  {feature}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Empty Space for Timeline Alignment */}
        <div className="w-[calc(50%-4rem)]" />
      </div>
    </motion.article>
  )
}

// Main Component
const NasilCalisiyoruz = () => {
  const containerRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section 
      ref={containerRef}
      id="nasil-calisiyoruz"
      className="relative py-12 sm:py-16 md:py-24 overflow-hidden"
      aria-labelledby="process-title"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)',
            y: backgroundY
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
            y: backgroundY
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          className="text-center mb-10 sm:mb-14 md:mb-18"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {/* Kicker - Simplified */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isTitleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-sm">🚀</span>
            <span className="text-xs sm:text-sm font-medium text-[#38BDF8]">Sürecimiz</span>
          </motion.div>

          {/* Main Title */}
          <h2 
            id="process-title"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
          >
            <span className="text-white">Yazılım Geliştirme </span>
            <span className="bg-gradient-to-r from-[#38BDF8] via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sürecimiz
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-white/60 text-xs sm:text-sm lg:text-base max-w-xl mx-auto leading-relaxed">
            Arlan Medya, profesyonel yazılım geliştirme metodolojisi ile 
            yüksek kaliteli, ölçeklenebilir uygulamalar sunuyoruz.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px">
            <motion.div
              className="w-full h-full"
              style={{
                background: 'linear-gradient(to bottom, transparent, rgba(56, 189, 248, 0.3) 10%, rgba(56, 189, 248, 0.3) 90%, transparent)'
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          {/* Process Steps */}
          <div className="space-y-0 lg:space-y-20">
            {processSteps.map((step, index) => (
              <ProcessStepCard
                key={step.id}
                step={step}
                index={index}
                isEven={index % 2 === 1}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 sm:mt-20 md:mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <p className="text-white/60 text-sm sm:text-base">
              Projenizi konuşmaya hazır mısınız?
            </p>
            <motion.button
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[#0F172A] bg-gradient-to-r from-[#38BDF8] to-cyan-400"
              style={{
                boxShadow: '0 4px 20px rgba(56, 189, 248, 0.3)'
              }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 8px 30px rgba(56, 189, 248, 0.4)' 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Ücretsiz Danışmanlık</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Schema.org Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Arlan Medya - Dijital Pazarlama Süreci",
            "description": "Arlan Medya'nın beş adımlık dijital pazarlama metodolojisi",
            "step": processSteps.map((step, index) => ({
              "@type": "HowToStep",
              "position": index + 1,
              "name": step.title,
              "text": step.description
            }))
          })
        }}
      />
    </section>
  )
}

export default NasilCalisiyoruz
