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

// Premium Phone Mockup Component
const FloatingMockup = React.memo(() => {
  const notifications = [
    { icon: CheckCircle2, text: 'Ödeme başarılı!', color: '#10B981', time: 'Şimdi' },
    { icon: Rocket, text: 'Yeni güncelleme hazır', color: '#38BDF8', time: '2dk' },
    { icon: Star, text: '5 yıldız aldınız!', color: '#FBBF24', time: '5dk' },
  ]

  return (
    <div className="relative flex items-center justify-center py-8 sm:py-0">
      {/* Orbital Rings - CSS Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full border border-dashed border-[#38BDF8]/20 animate-spin-slow"
        />
        <div
          className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[340px] lg:h-[340px] rounded-full border border-[#A855F7]/15 animate-spin-reverse"
        />
      </div>

      {/* Main Phone Frame */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Phone Device */}
        <div
          className="relative w-[200px] h-[400px] sm:w-[240px] sm:h-[480px] lg:w-[280px] lg:h-[560px] rounded-[32px] sm:rounded-[40px] lg:rounded-[48px] overflow-hidden hover-scale"
          style={{
            background: 'linear-gradient(145deg, #1E293B, #0F172A)',
            border: '4px solid #334155',
            boxShadow: `
              0 50px 100px -20px rgba(0, 0, 0, 0.7),
              0 0 0 1px rgba(255, 255, 255, 0.05),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              0 0 80px -20px rgba(56, 189, 248, 0.3)
            `
          }}
        >
          {/* Notch */}
          <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 lg:w-28 h-5 sm:h-6 lg:h-7 bg-black rounded-full z-20 flex items-center justify-center gap-2">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-800" />
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-500" />
          </div>

          {/* Screen Content */}
          <div className="absolute inset-[3px] rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
            {/* Status Bar */}
            <div className="flex items-center justify-between px-4 sm:px-5 pt-8 sm:pt-10 pb-2">
              <span className="text-white/60 text-[10px] sm:text-xs font-medium">9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-3 h-1.5 sm:w-4 sm:h-2 bg-white/60 rounded-sm" />
                <div className="w-2 h-1.5 sm:w-2.5 sm:h-2 bg-white/40 rounded-sm" />
              </div>
            </div>

            {/* App Header */}
            <div className="px-3 sm:px-4 pt-2 sm:pt-3 pb-3 sm:pb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div
                  className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #38BDF8, #0EA5E9)' }}
                >
                  <img 
                    src="/logolar/arlanlogonav.webp" 
                    alt="Arlan Logo" 
                    className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-xs sm:text-sm truncate">Arlan Panel</h4>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-400 text-[9px] sm:text-[10px]">Aktif</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="px-3 sm:px-4 grid grid-cols-2 gap-2 sm:gap-2.5">
              {[
                { label: 'Gelir', value: '₺24.5K', color: '#10B981', change: '+12%' },
                { label: 'Kullanıcı', value: '1.2K', color: '#38BDF8', change: '+8%' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-2.5 sm:p-3 rounded-xl"
                  style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}
                >
                  <span className="text-white/50 text-[9px] sm:text-[10px]">{stat.label}</span>
                  <div className="flex items-end justify-between mt-0.5 sm:mt-1">
                    <span className="text-white font-bold text-sm sm:text-base lg:text-lg">{stat.value}</span>
                    <span className="text-[9px] sm:text-[10px] font-medium" style={{ color: stat.color }}>{stat.change}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Visualization */}
            <div className="px-3 sm:px-4 mt-3 sm:mt-4">
              <div className="p-2.5 sm:p-3 rounded-xl" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-white/60 text-[9px] sm:text-[10px]">Haftalık Görüntülenme</span>
                  <span className="text-[#38BDF8] text-[9px] sm:text-[10px] font-medium">+24%</span>
                </div>
                <div className="flex items-end gap-1 sm:gap-1.5 h-12 sm:h-16">
                  {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        background: i === 5 ? 'linear-gradient(180deg, #38BDF8, #0EA5E9)' : 'rgba(56, 189, 248, 0.3)',
                        height: `${height}%`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions - CSS Hover */}
            <div className="px-3 sm:px-4 mt-3 sm:mt-4 grid grid-cols-4 gap-1.5 sm:gap-2">
              {[
                { icon: Smartphone, color: '#38BDF8' },
                { icon: Palette, color: '#A855F7' },
                { icon: Shield, color: '#10B981' },
                { icon: Layers, color: '#EC4899' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg sm:rounded-xl flex items-center justify-center hover-scale"
                  style={{ 
                    background: `linear-gradient(135deg, ${item.color}15, ${item.color}05)`,
                    border: `1px solid ${item.color}25`
                  }}
                >
                  <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" style={{ color: item.color }} />
                </div>
              ))}
            </div>

            {/* Bottom Navigation - CSS Hover */}
            <div className="absolute bottom-2 sm:bottom-3 left-3 sm:left-4 right-3 sm:right-4">
              <div className="flex items-center justify-around py-2 sm:py-2.5 px-2 rounded-xl sm:rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)' }}>
                {[Code2, Monitor, MessageCircle].map((Icon, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center hover-scale ${i === 1 ? 'bg-[#38BDF8]/20' : ''}`}
                  >
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${i === 1 ? 'text-[#38BDF8]' : 'text-white/40'}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Notification Cards - CSS Animation */}
        {notifications.map((notif, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              i === 0 ? '-right-4 sm:-right-12 lg:-right-20 top-16 sm:top-20' :
              i === 1 ? '-left-4 sm:-left-12 lg:-left-20 top-1/3' :
              '-right-2 sm:-right-10 lg:-right-16 bottom-24 sm:bottom-32'
            } z-20 ${i % 2 === 0 ? 'animate-float-notification' : 'animate-float-notification-reverse'}`}
            initial={{ opacity: 0, x: i === 1 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.15 }}
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            <div
              className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl"
              style={{
                background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.9))',
                border: `1px solid ${notif.color}30`,
                boxShadow: `0 10px 40px -10px rgba(0, 0, 0, 0.5), 0 0 20px -5px ${notif.color}30`,
                backdropFilter: 'blur(10px)'
              }}
            >
              <div 
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${notif.color}20, ${notif.color}10)` }}
              >
                <notif.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: notif.color }} />
              </div>
              <div className="hidden sm:block">
                <p className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">{notif.text}</p>
                <p className="text-white/40 text-[9px] sm:text-[10px]">{notif.time}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Corner Floating Icons - CSS Animation */}
        <div
          className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center z-20 animate-float"
          style={{
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(56, 189, 248, 0.1))',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 10px 30px -10px rgba(56, 189, 248, 0.4)'
          }}
        >
          <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-[#38BDF8]" />
        </div>

        <div
          className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-8 w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center z-20 animate-float-delayed"
          style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.1))',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#A855F7]" />
        </div>

        <div
          className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-8 w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center z-20 animate-float"
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.1))',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            backdropFilter: 'blur(10px)',
            animationDelay: '0.5s'
          }}
        >
          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981]" />
        </div>
      </motion.div>

      {/* Background Glow Effects - Static */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
        <div className="absolute w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#38BDF8] rounded-full blur-[100px] sm:blur-[120px] opacity-15" />
        <div className="absolute w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-[#A855F7] rounded-full blur-[80px] sm:blur-[100px] opacity-10 translate-x-10 translate-y-10" />
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
