'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { 
  ArrowRight,
  Code2,
  Cpu,
  Globe,
  Layers,
  MessageCircle,
  Server,
  Smartphone,
  Terminal,
  Target,
  Eye,
  Rocket,
  Users,
  Zap,
  CheckCircle2
} from 'lucide-react'
import Footer from '../components/footer'

// ============================================
// GLOBAL BACKGROUND - Ana sayfa ile aynı premium tasarım
// ============================================
const GlobalBackground = React.memo(() => {
  // Floating tech icons for background
  const floatingIcons = [
    { Icon: Code2, x: '10%', y: '20%', delay: 0, size: 24 },
    { Icon: Globe, x: '85%', y: '15%', delay: 1, size: 20 },
    { Icon: Server, x: '75%', y: '70%', delay: 2, size: 22 },
    { Icon: Zap, x: '15%', y: '75%', delay: 0.5, size: 18 },
    { Icon: Layers, x: '90%', y: '45%', delay: 1.5, size: 20 },
    { Icon: Cpu, x: '5%', y: '50%', delay: 2.5, size: 22 },
    { Icon: Terminal, x: '70%', y: '85%', delay: 3, size: 18 },
    { Icon: Rocket, x: '25%', y: '90%', delay: 0.8, size: 20 },
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
        className="absolute inset-0 opacity-15 md:opacity-30 animate-aurora"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(56, 189, 248, 0.1) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
        }}
      />
      <div
        className="hidden md:block absolute inset-0 opacity-25 animate-aurora-reverse"
        style={{
          background: 'linear-gradient(-45deg, transparent 30%, rgba(168, 85, 247, 0.1) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* ========== GLOWING ORBS - Static with CSS pulse ========== */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] rounded-full animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(56, 189, 248, 0.04) 40%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
      {/* Second and third orbs hidden on mobile */}
      <div
        className="hidden sm:block absolute -bottom-1/4 -right-1/4 w-[900px] h-[900px] rounded-full animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.10) 0%, rgba(168, 85, 247, 0.03) 40%, transparent 70%)',
          filter: 'blur(80px)',
          animationDelay: '2s',
        }}
      />
      <div
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 60%)',
          filter: 'blur(50px)',
          animationDelay: '4s',
        }}
      />
      
      {/* ========== EXPANDING CIRCULAR RINGS - Optimized ========== */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
        {[...Array(2)].map((_, i) => (
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
        {/* Additional rings for desktop only */}
        {[2, 3, 4].map((i) => (
          <div
            key={`desktop-${i}`}
            className={`hidden md:block absolute rounded-full ${i % 2 === 0 ? 'animate-spin-slow' : 'animate-spin-reverse'}`}
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
        className="absolute inset-0 opacity-[0.08]"
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
        className="absolute inset-0 opacity-[0.04]"
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
        className="hidden md:block absolute top-0 right-1/3 w-px h-full light-beam"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(168, 85, 247, 0.10), transparent)',
          animationDelay: '3s',
        }}
      />

      {/* Horizontal Light Beam */}
      <div
        className="hidden lg:block absolute left-0 top-1/4 h-px w-full light-beam-horizontal"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(56, 189, 248, 0.10), transparent)',
        }}
      />

      {/* ========== FLOATING TECH ICONS - CSS Animation ========== */}
      {floatingIcons.map((item, i) => (
        <div
          key={i}
          className={`absolute text-white/10 animate-float ${i >= 3 ? 'hidden md:block' : ''}`}
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
          className={`absolute rounded-full animate-pulse-slow ${i >= 3 ? 'hidden sm:block' : ''}`}
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
      <div className="shooting-star absolute w-1 h-1 bg-white rounded-full hidden md:block" />

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
        className="hidden md:block absolute text-[#38BDF8]/15 text-4xl sm:text-5xl font-thin animate-spin-slow"
        style={{ top: '15%', left: '20%' }}
      >
        +
      </div>
      <div
        className="hidden lg:block absolute text-[#A855F7]/12 text-3xl sm:text-4xl font-thin animate-spin-reverse"
        style={{ top: '60%', right: '15%' }}
      >
        +
      </div>
      <div
        className="hidden md:block absolute text-[#10B981]/10 text-2xl sm:text-3xl font-thin animate-spin-slow"
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
      
      <div className="absolute bottom-32 left-16 hidden sm:grid grid-cols-3 gap-2 opacity-10">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-[#A855F7]" />
        ))}
      </div>
    </div>
  )
})

// ============================================
// HERO SECTION
// ============================================
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              <span className="text-[#38BDF8] text-sm font-medium">Dijital Ajans</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Kod yazıyoruz,
            <br />
            <span className="text-[#38BDF8]">markalar büyütüyoruz.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-center text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
            2021'den bu yana işletmelerin dijital varlıklarını oluşturuyor, 
            geliştiriyor ve yönetiyoruz. Laf değil, iş üretiyoruz.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#38BDF8] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

// ============================================
// MOCKUP SECTION
// ============================================
const MockupSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/5 mb-6">
              <Rocket className="w-4 h-4 text-[#38BDF8]" />
              <span className="text-[#38BDF8] text-sm font-medium">Projelerimiz</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Geliştirdiğimiz Çözümler
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Her platformda, her cihazda mükemmel çalışan dijital deneyimler
            </p>
          </div>

          {/* Mockups Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Desktop Mockup - Web Sitesi */}
            <div className="md:col-span-2 lg:col-span-2 group">
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10 hover:border-[#38BDF8]/30 transition-all duration-500 overflow-hidden">
                {/* Glow effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#38BDF8]/20 rounded-full blur-[80px] group-hover:bg-[#38BDF8]/30 transition-all duration-500" />
                
                {/* Browser Frame */}
                <div className="relative bg-[#1a1a2e] rounded-2xl overflow-hidden shadow-2xl">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#0f0f1a] border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white/5 rounded-lg px-4 py-1.5 text-white/40 text-sm flex items-center gap-2">
                        <Globe className="w-3 h-3" />
                        <span>arlanmedya.com</span>
                      </div>
                    </div>
                  </div>
                  {/* Browser Content */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-[#050816] to-[#0a0a1a] p-8 relative">
                    {/* Grid background inside mockup */}
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    
                    {/* Content */}
                    <div className="relative flex flex-col items-center justify-center h-full">
                      <Image src="/logolar/arlanlogonav.webp" alt="Arlan Medya" width={120} height={40} className="mb-6 opacity-90" />
                      <div className="hidden sm:flex gap-3 mb-4">
                        {['Ana Sayfa', 'Hizmetler', 'Hakkımızda', 'İletişim'].map((item, i) => (
                          <div key={i} className="px-3 py-1.5 rounded-lg bg-white/5 text-white/50 text-xs">{item}</div>
                        ))}
                      </div>
                      <div className="text-center">
                        <div className="text-white text-lg sm:text-xl font-bold mb-2">Dijital Çözümler</div>
                        <div className="text-white/40 text-xs sm:text-sm">Next.js & TypeScript</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-white font-semibold text-lg mb-1">Web Siteleri & Uygulamalar</h3>
                  <p className="text-white/40 text-sm">Modern, hızlı ve SEO dostu kurumsal web siteleri</p>
                </div>
              </div>
            </div>

            {/* Marka Medya Yönetimi Mockup */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10 hover:border-[#38BDF8]/30 transition-all duration-500 h-full flex flex-col overflow-hidden">
                {/* Glow effect */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#38BDF8]/15 rounded-full blur-[60px] group-hover:bg-[#38BDF8]/25 transition-all duration-500" />
                
                {/* Social Media Dashboard */}
                <div className="relative bg-[#1a1a2e] rounded-2xl p-4 flex-1">
                  {/* Header with logo */}
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                    <Image src="/logolar/arlanlogonav.webp" alt="Arlan" width={60} height={20} className="opacity-70" />
                    <span className="text-white/40 text-xs">Medya Yönetimi</span>
                  </div>
                  
                  {/* Social Icons Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { icon: '📸', label: 'Instagram', color: '#E4405F' },
                      { icon: '📘', label: 'Facebook', color: '#1877F2' },
                      { icon: '🐦', label: 'Twitter', color: '#1DA1F2' },
                      { icon: '💼', label: 'LinkedIn', color: '#0A66C2' },
                      { icon: '▶️', label: 'YouTube', color: '#FF0000' },
                      { icon: '🎵', label: 'TikTok', color: '#000000' }
                    ].map((social, i) => (
                      <div key={i} className="bg-[#0f0f1a] rounded-lg p-2 text-center hover:bg-[#38BDF8]/10 transition-colors">
                        <div className="text-lg mb-1">{social.icon}</div>
                        <div className="text-white/40 text-[10px]">{social.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="bg-[#0f0f1a] rounded-xl p-3">
                    <div className="text-[#38BDF8] text-lg font-bold">+127%</div>
                    <div className="text-white/40 text-xs">Etkileşim Artışı</div>
                  </div>
                </div>
                
                <div className="mt-5 text-center">
                  <h3 className="text-white font-semibold text-lg mb-1">Marka Medya Yönetimi</h3>
                  <p className="text-white/40 text-sm">Sosyal medya stratejisi ve içerik</p>
                </div>
              </div>
            </div>

            {/* Dashboard/Analytics Mockup */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10 hover:border-[#38BDF8]/30 transition-all duration-500 overflow-hidden">
                {/* Glow effect */}
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#38BDF8]/15 rounded-full blur-[60px] group-hover:bg-[#38BDF8]/25 transition-all duration-500" />
                
                <div className="relative bg-[#1a1a2e] rounded-2xl p-4">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <Image src="/logolar/arlanlogonav.webp" alt="Arlan" width={50} height={16} className="opacity-60" />
                    <div className="text-white/30 text-xs">Analytics</div>
                  </div>
                  
                  {/* Mini Dashboard Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gradient-to-br from-[#38BDF8]/20 to-[#38BDF8]/5 rounded-xl p-3 text-center">
                      <div className="text-[#38BDF8] text-xl font-bold">2.4K</div>
                      <div className="text-white/40 text-xs">Ziyaretçi</div>
                    </div>
                    <div className="bg-gradient-to-br from-[#0EA5E9]/20 to-[#0EA5E9]/5 rounded-xl p-3 text-center">
                      <div className="text-[#0EA5E9] text-xl font-bold">89%</div>
                      <div className="text-white/40 text-xs">Dönüşüm</div>
                    </div>
                  </div>
                  
                  {/* Chart */}
                  <div className="h-24 bg-[#0f0f1a] rounded-xl p-3 flex items-end justify-around gap-1">
                    {[40, 65, 45, 80, 55, 90].map((h, i) => (
                      <div key={i} className="flex-1 max-w-4 bg-gradient-to-t from-[#38BDF8] to-[#38BDF8]/40 rounded-t transition-all duration-300 hover:from-[#0EA5E9]" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                
                <div className="mt-5 text-center">
                  <h3 className="text-white font-semibold text-lg mb-1">Admin Panelleri</h3>
                  <p className="text-white/40 text-sm">Özel dashboard ve analitik</p>
                </div>
              </div>
            </div>

            {/* E-commerce Mockup */}
            <div className="md:col-span-2 lg:col-span-2 group">
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10 hover:border-[#38BDF8]/30 transition-all duration-500 overflow-hidden">
                {/* Glow effect */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#38BDF8]/20 rounded-full blur-[80px] group-hover:bg-[#38BDF8]/30 transition-all duration-500" />
                
                <div className="relative bg-[#1a1a2e] rounded-2xl p-4">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <Image src="/logolar/arlanlogonav.webp" alt="Arlan" width={50} height={16} className="opacity-60" />
                      <span className="text-white/30 text-xs">E-Commerce</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#38BDF8]/20 flex items-center justify-center">
                        <span className="text-[#38BDF8] text-xs">🛒</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="bg-[#0f0f1a] rounded-xl p-2 sm:p-3 hover:bg-[#38BDF8]/5 transition-colors">
                        <div className="aspect-square bg-gradient-to-br from-[#38BDF8]/10 to-[#0EA5E9]/5 rounded-lg mb-2 sm:mb-3 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.2) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
                          <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-[#38BDF8]/50" />
                        </div>
                        <div className="h-2 bg-white/10 rounded mb-2 w-3/4" />
                        <div className="h-2 bg-[#38BDF8]/40 rounded w-1/2" />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-5 text-center">
                  <h3 className="text-white font-semibold text-lg mb-1">E-Ticaret Sistemleri</h3>
                  <p className="text-white/40 text-sm">Satışa hazır, ödeme entegrasyonlu online mağazalar</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// MISSION & VISION SECTION
// ============================================
const MissionVisionSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#38BDF8]" />
            <span className="text-[#38BDF8] text-sm font-medium uppercase tracking-wider">Yönümüz</span>
            <div className="w-12 h-px bg-[#38BDF8]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Misyon & Vizyon
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative h-full bg-gradient-to-br from-[#38BDF8]/10 via-transparent to-transparent rounded-3xl p-8 border border-[#38BDF8]/20 backdrop-blur-sm overflow-hidden group hover:border-[#38BDF8]/40 transition-colors">
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#38BDF8]/10 rounded-full blur-[60px] group-hover:bg-[#38BDF8]/20 transition-colors" />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center">
                  <Target className="w-8 h-8 text-[#38BDF8]" />
                </div>
              </div>

              <h3 className="relative text-2xl sm:text-3xl font-bold text-white mb-4">
                Misyonumuz
              </h3>

              <p className="relative text-white/60 text-lg leading-relaxed mb-6">
                İşletmelerin dijital dünyada güçlü bir varlık göstermelerini sağlamak. 
                Teknolojiyi herkes için erişilebilir kılmak ve gerçek değer üreten 
                çözümler sunmak.
              </p>

              <ul className="relative space-y-3">
                {[
                  "Kaliteden ödün vermeden çözüm üretmek",
                  "Şeffaf ve dürüst iletişim kurmak",
                  "Sürdürülebilir ilişkiler inşa etmek"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/50">
                    <CheckCircle2 className="w-5 h-5 text-[#38BDF8] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Vision Card */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative h-full bg-gradient-to-br from-[#0EA5E9]/10 via-transparent to-transparent rounded-3xl p-8 border border-[#0EA5E9]/20 backdrop-blur-sm overflow-hidden group hover:border-[#0EA5E9]/40 transition-colors">
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#0EA5E9]/10 rounded-full blur-[60px] group-hover:bg-[#0EA5E9]/20 transition-colors" />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-[#0EA5E9]" />
                </div>
              </div>

              <h3 className="relative text-2xl sm:text-3xl font-bold text-white mb-4">
                Vizyonumuz
              </h3>

              <p className="relative text-white/60 text-lg leading-relaxed mb-6">
                Türkiye'nin en güvenilir dijital ajansı olmak. Global standartlarda 
                hizmet sunarak, müşterilerimizin dijital dönüşüm yolculuğunda 
                vazgeçilmez partneri olmak.
              </p>

              <ul className="relative space-y-3">
                {[
                  "Sektörde referans noktası olmak",
                  "Yenilikçi teknolojilere öncülük etmek",
                  "Global pazarlarda rekabet etmek"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/50">
                    <CheckCircle2 className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// ABOUT TEXT SECTION
// ============================================
const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-[#38BDF8]" />
            <span className="text-[#38BDF8] text-sm font-medium uppercase tracking-wider">Hakkımızda</span>
          </div>

          {/* Main Text */}
          <div className="space-y-8 text-lg sm:text-xl text-white/70 leading-relaxed">
            <p>
              <span className="text-white font-medium">Arlan Medya</span>, 2021 yılında 
              <span className="text-white"> Ertuğrul Araç</span> tarafından kuruldu. 
              Amacımız basit: işletmelerin dijital dünyada güçlü bir şekilde var olmasını sağlamak.
            </p>

            <p>
              "Müşteri odaklıyız", "kalite bizim önceliğimiz" gibi herkesin söylediği 
              şeyleri tekrarlamayacağız. Bunun yerine ne yaptığımızı söyleyelim:
            </p>

            <ul className="space-y-4 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-[#38BDF8] mt-1.5">→</span>
                <span>Web siteleri ve uygulamalar geliştiriyoruz. Gerçekten çalışan, hızlı açılan, kullanıcıların sevdiği türden.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#38BDF8] mt-1.5">→</span>
                <span>Sosyal medya yönetimi yapıyoruz. Beğeni kasmak için değil, marka bilinirliği oluşturmak için.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#38BDF8] mt-1.5">→</span>
                <span>Dijital pazarlama stratejileri oluşturuyoruz. Bütçenizi boşa harcamadan, ölçülebilir sonuçlar alarak.</span>
              </li>
            </ul>

            <p>
              5 yılda onlarca proje tamamladık. Her biri farklı, her biri 
              müşterisinin ihtiyacına göre tasarlandı. Çünkü kopyala-yapıştır iş yapmıyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// FOUNDER SECTION
// ============================================
const FounderSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Left - Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#38BDF8]" />
              <span className="text-[#38BDF8] text-sm font-medium uppercase tracking-wider">Kurucu</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ertuğrul Araç
            </h2>

            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Yazılım geliştirme ve dijital pazarlama alanında 5+ yıllık deneyim. 
              İşlerin doğru yapılması gerektiğine inanan, detaylara takılan biri. 
              Ekibiyle birlikte her projeye aynı özenle yaklaşıyor.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Full-Stack Development", "Dijital Strateji", "Proje Yönetimi"].map((skill, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/60 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Background shape */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-[#38BDF8]/10 to-transparent border border-[#38BDF8]/20" />
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center">
                    <Terminal className="w-10 h-10 text-[#38BDF8]" />
                  </div>
                  <div className="text-white font-medium">CEO & Founder</div>
                  <div className="text-white/40 text-sm">Arlan Medya</div>
                  <div className="text-white font-semibold text-lg mt-2">Ertuğrul Araç</div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-[#38BDF8]/50" />
              <div className="absolute bottom-12 left-8 w-2 h-2 rounded-full bg-[#38BDF8]/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// TECH STACK SECTION
// ============================================
const TechSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const technologies = [
    { icon: Code2, name: "React & Next.js", desc: "Modern web uygulamaları" },
    { icon: Server, name: "Node.js", desc: "Backend sistemleri" },
    { icon: Layers, name: "TypeScript", desc: "Tip güvenli kod yapısı" },
    { icon: Globe, name: "SEO & Analytics", desc: "Arama motoru optimizasyonu" },
    { icon: Cpu, name: "AI Entegrasyonu", desc: "Yapay zeka çözümleri" },
    { icon: Zap, name: "Performans", desc: "Hız odaklı optimizasyon" }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#38BDF8]" />
            <span className="text-[#38BDF8] text-sm font-medium uppercase tracking-wider">Teknolojiler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Kullandığımız araçlar
          </h2>
          <p className="text-white/50 text-lg max-w-2xl">
            En güncel teknolojileri kullanarak projelerinizi hayata geçiriyoruz.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className={`group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#38BDF8]/30 hover:bg-[#38BDF8]/5 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/10 flex items-center justify-center mb-4 group-hover:bg-[#38BDF8]/20 transition-colors">
                <tech.icon className="w-6 h-6 text-[#38BDF8]" />
              </div>
              <h3 className="text-white font-semibold mb-1">{tech.name}</h3>
              <p className="text-white/40 text-sm">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// CTA SECTION
// ============================================
const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logolar/arlanlogonav.webp"
              alt="Arlan Medya"
              width={140}
              height={46}
              className="mx-auto opacity-60"
            />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Projenizi konuşalım mı?
          </h2>

          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Aklınızda bir proje mi var? Bir kahve içerken konuşalım. 
            İlk görüşme her zaman ücretsiz.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/iletisim"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#38BDF8] text-[#050816] font-semibold hover:bg-[#38BDF8]/90 transition-colors"
            >
              <span>İletişime Geç</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="https://wa.me/905307464899?text=Merhaba%20Arlan%20Medya%2C%20hizmetleriniz%20hakk%C4%B1nda%20detayl%C4%B1%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

// ============================================
// MAIN PAGE
// ============================================
export default function HakkimizdaPage() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GlobalBackground />
      </div>
      <main className="relative z-10 min-h-screen bg-[#050816]/70">
        <HeroSection />
        <FounderSection />
        <MissionVisionSection />
        <AboutSection />
        <MockupSection />
        <TechSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
