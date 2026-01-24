'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Rocket, 
  ArrowRight,
  Smartphone,
  Monitor,
  Palette,
  Code2,
  Layers,
  Zap,
  Shield,
  Clock,
  MessageCircle,
  CheckCircle2,
  Star
} from 'lucide-react'

// Floating Feature Cards Component
const FloatingMockup = React.memo(() => {
  const features = [
    { Icon: Smartphone, label: 'Mobil Uygulama', color: '#38BDF8', delay: 0 },
    { Icon: Monitor, label: 'Web Sitesi', color: '#A855F7', delay: 0.1 },
    { Icon: Palette, label: 'UI/UX Tasarım', color: '#EC4899', delay: 0.2 },
    { Icon: Code2, label: 'Özel Yazılım', color: '#10B981', delay: 0.3 },
  ]

  const stats = [
    { value: '99.9%', label: 'Uptime', color: '#10B981', icon: '⬆️' },
    { value: '12ms', label: 'Yanıt', color: '#38BDF8', icon: '⚡' },
    { value: '98%', label: 'Performans', color: '#A855F7', icon: '🚀' },
    { value: '✓', label: 'Güvenlik', color: '#EC4899', icon: '🔒' },
  ]

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main Card - Perspective Container */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ perspective: '1000px' }}
      >
        {/* Central Dashboard Card */}
        <motion.div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9))',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 80px -20px rgba(0, 0, 0, 0.5), 0 0 60px -20px rgba(56, 189, 248, 0.2)'
          }}
          whileHover={{ rotateY: 5, rotateX: -5 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="relative px-4 sm:px-6 py-4 sm:py-5 border-b border-white/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #38BDF8, #0EA5E9)' }}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <img 
                    src="/logolar/arlanlogonav.webp" 
                    alt="Arlan Logo" 
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </motion.div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">Arlan Panel</h4>
                  <p className="text-white/50 text-xs sm:text-sm">Sistem Aktif</p>
                </div>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="group relative p-3 sm:p-4 rounded-xl cursor-pointer"
                  style={{ background: 'rgba(255, 255, 255, 0.03)' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: feature.delay, duration: 0.5 }}
                  whileHover={{ scale: 1.02, background: 'rgba(255, 255, 255, 0.06)' }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}10, transparent)`,
                      border: `1px solid ${feature.color}30`
                    }}
                  />
                  <div className="relative flex flex-col items-center gap-2 sm:gap-3">
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center"
                      style={{ 
                        background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                        border: `1px solid ${feature.color}30`
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <feature.Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: feature.color }} />
                    </motion.div>
                    <span className="text-white/80 text-xs sm:text-sm font-medium text-center">{feature.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="flex items-center justify-between p-3 sm:p-4 rounded-xl" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <motion.span 
                    className="block text-lg sm:text-2xl font-bold"
                    style={{ color: stat.color }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-white/50 text-[10px] sm:text-xs">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Progress Indicator */}
            <motion.div 
              className="mt-4 sm:mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-xs sm:text-sm">Proje İlerlemesi</span>
                <span className="text-[#10B981] text-xs sm:text-sm font-semibold">100%</span>
              </div>
              <div className="h-2 sm:h-2.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #38BDF8, #10B981)' }}
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.1))',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            backdropFilter: 'blur(10px)'
          }}
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-[#10B981]" />
        </motion.div>

        <motion.div
          className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.1))',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            backdropFilter: 'blur(10px)'
          }}
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-[#A855F7]" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 -left-6 sm:-left-10 w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(56, 189, 248, 0.1))',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            backdropFilter: 'blur(10px)'
          }}
          animate={{ x: [0, -5, 0], y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          <Star className="w-4 h-4 sm:w-6 sm:h-6 text-[#38BDF8]" />
        </motion.div>
      </motion.div>

      {/* Glow Effects */}
      <div className="absolute -inset-10 -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-40 sm:w-60 h-40 sm:h-60 bg-[#38BDF8] rounded-full blur-[80px] sm:blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-40 sm:w-60 h-40 sm:h-60 bg-[#A855F7] rounded-full blur-[80px] sm:blur-[100px]" />
      </div>
    </div>
  )
})
FloatingMockup.displayName = 'FloatingMockup'

// Main Component
export default function YazilimProjenizMiVar() {
  const benefits = [
    { icon: Zap, text: 'Hızlı Teslimat' },
    { icon: Shield, text: 'Güvenli Altyapı' },
    { icon: Clock, text: '7/24 Destek' },
  ]

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.08), transparent),
              radial-gradient(ellipse 60% 40% at 100% 50%, rgba(168, 85, 247, 0.06), transparent),
              radial-gradient(ellipse 50% 30% at 0% 80%, rgba(16, 185, 129, 0.05), transparent)
            `
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(56, 189, 248, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56, 189, 248, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(168, 85, 247, 0.1))',
                border: '1px solid rgba(56, 189, 248, 0.2)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                <Rocket size={14} className="text-[#38BDF8] sm:w-4 sm:h-4" />
              </motion.span>
              <span className="text-white/80 text-xs sm:text-sm font-medium">Hayallerinizi Kodluyoruz</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-white">Yazılım Projeniz</span>
              <br />
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent">
                Mi Var?
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-white/60 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Aklınızdaki fikri, <span className="text-white font-medium">modern teknolojilerle</span> profesyonel 
              bir ürüne dönüştürelim. Siz hayal edin, biz geliştirelim.
            </motion.p>

            {/* Benefits */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10"
                >
                  <benefit.icon size={14} className="text-[#38BDF8] sm:w-4 sm:h-4" />
                  <span className="text-white/70 text-xs sm:text-sm">{benefit.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="#iletisim"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white text-sm sm:text-base overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #38BDF8, #0EA5E9)',
                  boxShadow: '0 10px 40px -10px rgba(56, 189, 248, 0.5)'
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket size={18} />
                  Projeyi Başlat
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>
              
              <motion.a
                href="#portfolyo"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white text-sm sm:text-base"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                whileHover={{ 
                  background: 'rgba(168, 85, 247, 0.1)',
                  borderColor: 'rgba(168, 85, 247, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Code2 size={18} className="text-[#A855F7]" />
                Projelerimizi Gör
              </motion.a>
            </motion.div>
          </div>

          {/* Right - Mockup */}
          <div className="relative mt-8 lg:mt-0">
            <FloatingMockup />
          </div>
        </div>

        {/* Bottom WhatsApp CTA */}
        <motion.div
          className="mt-16 sm:mt-24 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div 
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-1"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(56, 189, 248, 0.2), rgba(168, 85, 247, 0.2))'
            }}
          >
            <div 
              className="relative rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-10"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.95))'
              }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl">
                <div className="absolute top-0 left-1/4 w-40 sm:w-60 h-40 sm:h-60 bg-[#10B981]/10 rounded-full blur-[60px] sm:blur-[80px]" />
                <div className="absolute bottom-0 right-1/4 w-40 sm:w-60 h-40 sm:h-60 bg-[#38BDF8]/10 rounded-full blur-[60px] sm:blur-[80px]" />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
                {/* Left Content */}
                <div className="text-center lg:text-left flex-1">
                  <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                        Ücretsiz Danışmanlık
                      </h3>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
                    Projenizi anlatalım, size özel çözüm ve fiyat teklifi sunalım. 
                    <span className="text-[#10B981] font-medium"> Hiçbir taahhüt yok!</span>
                  </p>
                </div>

                {/* Right - CTA */}
                <motion.a
                  href="https://wa.me/905551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-white text-sm sm:text-base whitespace-nowrap overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #10B981, #059669)',
                    boxShadow: '0 10px 40px -10px rgba(16, 185, 129, 0.5)'
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </motion.div>
                  <span>WhatsApp&apos;tan Yazın</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                </motion.a>
              </div>

              {/* Trust Badges */}
              <motion.div
                className="relative z-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {[
                  { icon: CheckCircle2, text: 'Ücretsiz Keşif Görüşmesi' },
                  { icon: Shield, text: 'Gizlilik Garantisi' },
                  { icon: Zap, text: 'Hızlı Yanıt' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 sm:gap-2 text-white/50 text-xs sm:text-sm">
                    <item.icon size={14} className="text-[#10B981] sm:w-4 sm:h-4" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
