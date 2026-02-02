'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { LucideIcon, Shield, Zap, Clock, HeadphonesIcon, Server, RefreshCw, ArrowRight, CheckCircle2 } from 'lucide-react'

// Simplified Floating Card Component
const FloatingCard = React.memo(({ 
  className = "", 
  delay = 0,
  rotate = 0,
  children 
}: { 
  className?: string
  delay?: number
  rotate?: number
  children: React.ReactNode
}) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, y: 30, rotate: rotate - 3 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
})
FloatingCard.displayName = 'FloatingCard'

// Dashboard Card Design
const DashboardCard = ({ variant = "primary" }: { variant?: "primary" | "secondary" }) => {
  const isPrimary = variant === "primary"
  
  return (
    <div 
      className={`relative w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] rounded-2xl overflow-hidden ${
        isPrimary ? 'h-[260px] sm:h-[280px] md:h-[300px] lg:h-[320px]' : 'h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px]'
      }`}
      style={{
        background: isPrimary 
          ? 'linear-gradient(145deg, #1a1a2e 0%, #0f0f1a 100%)'
          : 'linear-gradient(145deg, #0f0f1a 0%, #0a0a12 100%)',
        boxShadow: isPrimary
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(56, 189, 248, 0.1)'
          : '0 20px 40px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)'
      }}
    >
      {/* Card Header */}
      <div className="p-3 sm:p-4 border-b border-white/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/logolar/arlanlogonav.webp" 
              alt="Arlan Logo" 
              className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
            />
            <span className="text-white/80 text-[10px] sm:text-xs font-medium">Arlan Panel</span>
          </div>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/10" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/10" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#38BDF8]/50" />
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
        {/* Status Indicator */}
        <div className="flex items-center gap-2 p-1.5 sm:p-2 rounded-lg bg-green-500/10 border border-green-500/20">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-400 text-[8px] sm:text-[10px] font-medium">Sistem Aktif</span>
        </div>

        {/* Mini Stats */}
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
          <div className="p-1.5 sm:p-2 rounded-lg bg-white/[0.03] border border-white/5">
            <p className="text-white/40 text-[7px] sm:text-[8px]">Uptime</p>
            <p className="text-white font-bold text-xs sm:text-sm">99.9%</p>
          </div>
          <div className="p-1.5 sm:p-2 rounded-lg bg-white/[0.03] border border-white/5">
            <p className="text-white/40 text-[7px] sm:text-[8px]">Yanıt</p>
            <p className="text-white font-bold text-xs sm:text-sm">12ms</p>
          </div>
        </div>

        {/* Activity List */}
        <div className="space-y-1.5 sm:space-y-2">
          {[
            { label: "Güvenlik Taraması" },
            { label: "Yedekleme" },
            { label: "SSL Sertifikası" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-1.5 sm:p-2 rounded-lg bg-white/[0.02]">
              <span className="text-white/60 text-[9px] sm:text-[10px]">{item.label}</span>
              <CheckCircle2 size={10} className="text-green-400 sm:w-3 sm:h-3" />
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        {isPrimary && (
          <div className="pt-1 sm:pt-2">
            <div className="flex justify-between mb-1">
              <span className="text-white/40 text-[7px] sm:text-[8px]">Performans</span>
              <span className="text-[#38BDF8] text-[7px] sm:text-[8px]">98%</span>
            </div>
            <div className="h-1 sm:h-1.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div 
                className="h-full rounded-full bg-gradient-to-r from-[#38BDF8] to-cyan-400"
                initial={{ width: 0 }}
                whileInView={{ width: "98%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Decorative Glow */}
      <div 
        className="absolute -bottom-10 -right-10 w-24 sm:w-32 h-24 sm:h-32 rounded-full blur-3xl opacity-20"
        style={{ background: isPrimary ? '#38BDF8' : '#A855F7' }}
      />
    </div>
  )
}

// Stat Item Component
const StatItem = ({ 
  value, 
  label, 
  delay = 0 
}: { 
  value: string
  label: string
  delay?: number 
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="text-center lg:text-right"
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-1 ibm-plex-serif-bold"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      >
        {value}
        <span className="text-[#38BDF8]">+</span>
      </motion.div>
      <p className="text-white/50 text-[10px] sm:text-xs md:text-sm">{label}</p>
    </motion.div>
  )
}

// Feature Card Component
const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay = 0
}: {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative h-full p-4 sm:p-5 lg:p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-[#38BDF8]/20 hover:bg-white/[0.04] group-hover:-translate-y-1">
        {/* Icon */}
        <motion.div
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-[#38BDF8]/20 to-[#38BDF8]/5 border border-[#38BDF8]/20 flex items-center justify-center mb-3 sm:mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Icon size={20} className="text-[#38BDF8] sm:w-6 sm:h-6" />
        </motion.div>

        {/* Content */}
        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1.5 sm:mb-2">{title}</h3>
        <p className="text-white/50 text-[11px] sm:text-xs lg:text-sm leading-relaxed line-clamp-3">{description}</p>

        {/* Hover Glow */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[#38BDF8]/0 via-[#38BDF8]/5 to-[#38BDF8]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </div>
    </motion.div>
  )
}

// Main Component
const DestekSection = () => {
  const router = useRouter()
  const titleRef = useRef<HTMLDivElement>(null)
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Clock,
      title: "7/24 Destek",
      description: "Gece gündüz demeden her an yanınızdayız. Acil durumlarınızda anında müdahale."
    },
    {
      icon: Zap,
      title: "Hızlı Yanıt",
      description: "Ortalama 15 dakika içinde ilk yanıt garantisi. Kritik sorunlarda öncelikli destek."
    },
    {
      icon: RefreshCw,
      title: "Düzenli Güncelleme",
      description: "Güvenlik yamaları ve performans iyileştirmeleri düzenli olarak uygulanır."
    },
    {
      icon: Shield,
      title: "Güvenlik İzleme",
      description: "Proaktif güvenlik taramaları ve tehdit tespiti ile verileriniz güvende."
    },
    {
      icon: Server,
      title: "Sunucu Bakımı",
      description: "Sunucu optimizasyonu, yedekleme ve felaket kurtarma planları."
    },
    {
      icon: HeadphonesIcon,
      title: "Özel Destek",
      description: "Size özel hesap yöneticisi ve teknik ekip ile birebir iletişim."
    }
  ]

  return (
    <section 
      id="destek"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
      aria-labelledby="support-title"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#38BDF8]/[0.02] to-transparent" />
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section - Mobile: Stack, Desktop: Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center mb-12 sm:mb-16 md:mb-20 lg:mb-28">
          
          {/* Left Content - Full width on mobile, 4 cols on desktop */}
          <motion.div
            ref={titleRef}
            className="lg:col-span-4 text-center lg:text-left order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            {/* Kicker */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 mb-3 sm:mb-4 lg:mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ delay: 0.1 }}
            >
              <Shield size={14} className="text-[#38BDF8]" />
              <span className="text-[10px] sm:text-xs font-medium text-[#38BDF8]">Destek & Bakım</span>
            </motion.div>

            {/* Title */}
            <h2 
              id="support-title"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"
            >
              <span className="text-white">Gelişmiş Koruma</span>
              <br />
              <span className="bg-gradient-to-r from-[#38BDF8] via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ile Güvende Olun.
              </span>
            </h2>

            {/* Description */}
            <p className="text-white/50 text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-6 max-w-md mx-auto lg:mx-0">
              Dijital dünyada partneriniz olarak, yazılım projelerinizin her aşamasında yanınızdayız. Kesintisiz destek ile işinize odaklanın.
            </p>

            {/* CTA Button */}
            <motion.button
              className="inline-flex items-center gap-2 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] text-white font-semibold text-xs sm:text-sm shadow-lg shadow-[#38BDF8]/25 cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/iletisim')}
            >
              Destek Al
              <ArrowRight size={14} className="sm:w-4 sm:h-4" />
            </motion.button>
          </motion.div>

          {/* Center - Floating Cards - Hidden on mobile, visible on md+ */}
          <div className="lg:col-span-5 relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] items-center justify-center order-3 lg:order-2 hidden md:flex">
            {/* Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 rounded-full bg-[#38BDF8]/10 blur-3xl" />
            </div>

            {/* Cards */}
            <FloatingCard 
              className="left-0 sm:left-2 md:left-4 top-8 sm:top-6 md:top-4 z-10" 
              delay={0.2}
              rotate={-8}
            >
              <DashboardCard variant="secondary" />
            </FloatingCard>

            <FloatingCard 
              className="right-0 sm:right-2 md:right-4 top-0 z-20" 
              delay={0.4}
              rotate={6}
            >
              <DashboardCard variant="primary" />
            </FloatingCard>
          </div>

          {/* Mobile Cards - Simplified single card view */}
          <div className="flex md:hidden justify-center order-2 py-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <DashboardCard variant="primary" />
            </motion.div>
          </div>

          {/* Right - Stats */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col justify-center gap-4 sm:gap-6 lg:gap-8 order-4 lg:order-3">
            <StatItem value="200" label="Aktif Proje" delay={0.3} />
            <StatItem value="450" label="Çözülen Sorun" delay={0.4} />
            <StatItem value="99" label="Memnuniyet %" delay={0.5} />
          </div>
        </div>

        {/* Divider */}
        <motion.div 
          className="flex items-center justify-center gap-4 mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10" />
          <div className="flex gap-1.5 sm:gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#38BDF8]/30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
              />
            ))}
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-10 sm:mt-12 lg:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-white/40 text-xs sm:text-sm mb-3 sm:mb-4">
            Sorularınız mı var? Size yardımcı olmaktan mutluluk duyarız.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <motion.a
              href="tel:+905307464899"
              title="Bizi Arayın"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs sm:text-sm hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <HeadphonesIcon size={14} className="sm:w-4 sm:h-4" />
              +90 530 746 48 99
            </motion.a>
            <motion.a
              href="mailto:destek@arlanmedya.com"
              title="Email Gönder"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs sm:text-sm hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              info@arlanmedya.com
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DestekSection
