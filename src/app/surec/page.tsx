'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, Palette, Code2, Rocket, Check, Star, Trophy, Users, Clock, ShieldCheck, Target, Gem, Handshake } from 'lucide-react'
import Footer from '../components/footer'

// ============================================
// HERO - Bold & Eye-catching
// ============================================
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20 pb-8 sm:pb-12">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Main Gradient Blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-linear-to-b from-[#1E40AF]/25 via-[#3B82F6]/15 to-transparent rounded-full blur-[120px]" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#38BDF8]/15 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1E40AF]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#374151]/15 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Gradient Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#38BDF8]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#1E40AF]/40 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div>
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-[#1E40AF]/15 to-[#3B82F6]/15 border border-[#38BDF8]/25 mb-6 sm:mb-8 group hover:scale-105 transition-transform cursor-default">
              <Sparkles className="w-4 h-4 text-[#38BDF8] animate-pulse" />
              <span className="text-sm font-medium bg-linear-to-r from-[#38BDF8] to-[#1E40AF] bg-clip-text text-transparent">
                Premium Dijital Ajans
              </span>
            </div>
            
            {/* Main Title with Gradient Animation */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] mb-6 sm:mb-8">
              <span className="text-white">Hayal Et,</span>
              <br />
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-[#38BDF8] via-[#1E40AF] to-[#374151] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Biz Yapalım
                </span>
                {/* Underline decoration */}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8C50 2 100 2 150 8C200 14 250 6 298 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="50%" stopColor="#1E40AF" />
                      <stop offset="100%" stopColor="#374151" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-8 sm:mb-10 max-w-lg">
              4 adımda fikirlerinizi <span className="text-[#38BDF8] font-semibold">dijital başyapıtlara</span> dönüştürüyoruz. 
              Strateji, tasarım, geliştirme ve lansman - hepsi tek çatı altında.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link 
                href="/iletisim"
                className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-linear-to-r from-[#1E40AF] to-[#3B82F6] text-white font-bold text-base sm:text-lg overflow-hidden transition-transform hover:scale-105"
              >
                <span className="relative z-10">Ücretsiz Danışmanlık</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-linear-to-r from-[#3B82F6] to-[#1E40AF] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link 
                href="/hizmetlerimiz"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border-2 border-white/20 text-white font-semibold text-base sm:text-lg hover:bg-white/10 hover:border-white/40 transition-all"
              >
                <span>Portföyü Gör</span>
              </Link>
            </div>
          </div>
          
          {/* Right - Animated Stats Cards */}
          <div className="relative mt-12 lg:mt-0">
            {/* Main Stats Card */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-linear-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-[#38BDF8] via-[#1E40AF] to-[#374151] rounded-3xl opacity-15 blur-xl" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-linear-to-br from-[#38BDF8] to-[#1E40AF] flex items-center justify-center">
                    <Trophy className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Toplam</div>
                    <div className="text-2xl sm:text-3xl font-bold text-white">200+ Proje</div>
                  </div>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {[
                    { icon: Star, value: '%97', label: 'Memnuniyet', color: 'from-[#FBBF24] to-[#F59E0B]' },
                    { icon: Users, value: '50+', label: 'Müşteri', color: 'from-[#38BDF8] to-[#0EA5E9]' },
                    { icon: Clock, value: '8 Yıl', label: 'Deneyim', color: 'from-[#1E40AF] to-[#3B82F6]' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-3 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 rounded-xl bg-linear-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-white/40">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-[#22C55E] text-white font-bold shadow-lg shadow-[#22C55E]/30 animate-bounce text-sm sm:text-base" style={{ animationDuration: '3s' }}>
              ✓ Zamanında Teslimat
            </div>
            <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-linear-to-r from-[#38BDF8] to-[#1E40AF] text-white font-bold shadow-lg shadow-[#1E40AF]/30 animate-bounce text-sm sm:text-base" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
              🚀 Hızlı Başlangıç
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// PROCESS - Interactive Timeline
// ============================================
const ProcessSection = () => {
  const steps = [
    {
      num: '01',
      title: 'Keşif & Analiz',
      subtitle: 'İhtiyaçlarınızı Anlıyoruz',
      description: 'İş hedeflerinizi, hedef kitlenizi ve rekabet ortamınızı derinlemesine analiz ediyoruz. Size özel bir strateji ve yol haritası oluşturuyoruz.',
      icon: Zap,
      color: '#38BDF8',
      gradient: 'from-[#38BDF8] to-[#0EA5E9]',
      features: ['Detaylı Brief', 'Rakip Analizi', 'Strateji Planı', 'Zaman Çizelgesi'],
      duration: '1-2 Hafta'
    },
    {
      num: '02',
      title: 'Tasarım & UX',
      subtitle: 'Görselleştiriyoruz',
      description: 'Kullanıcı deneyimini merkeze alarak wireframe\'ler ve göz alıcı arayüz tasarımları oluşturuyoruz. Her piksel mükemmel olana kadar iterasyon yapıyoruz.',
      icon: Palette,
      color: '#A855F7',
      gradient: 'from-[#A855F7] to-[#9333EA]',
      features: ['Wireframe', 'UI Tasarım', 'Prototip', 'Design System'],
      duration: '2-3 Hafta'
    },
    {
      num: '03',
      title: 'Geliştirme',
      subtitle: 'Hayata Geçiriyoruz',
      description: 'En güncel teknolojilerle hızlı, güvenli ve ölçeklenebilir çözümler geliştiriyoruz. Temiz kod ve best practice\'ler bizim işimiz.',
      icon: Code2,
      color: '#EC4899',
      gradient: 'from-[#EC4899] to-[#DB2777]',
      features: ['Frontend', 'Backend', 'API', 'Test'],
      duration: '4-8 Hafta'
    },
    {
      num: '04',
      title: 'Lansman & Destek',
      subtitle: 'Yayına Alıyoruz',
      description: 'Projenizi canlıya alıyor, eğitim veriyor ve 7/24 teknik destek ile yanınızda olmaya devam ediyoruz.',
      icon: Rocket,
      color: '#22C55E',
      gradient: 'from-[#22C55E] to-[#16A34A]',
      features: ['Deploy', 'Eğitim', 'SEO', '7/24 Destek'],
      duration: 'Süresiz'
    }
  ]

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#A855F7]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/20 mb-6">
            <span className="text-sm font-medium text-[#A855F7]">Sürecimiz</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            4 Adımda{' '}
            <span className="bg-linear-to-r from-[#38BDF8] to-[#A855F7] bg-clip-text text-transparent">
              Başarıya
            </span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Her aşamada şeffaf iletişim ve işbirliği ile projenizi birlikte şekillendiriyoruz
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.num}
              className="group relative"
            >
              {/* Glow on hover */}
              <div className={`absolute -inset-1 bg-linear-to-r ${step.gradient} rounded-[2rem] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative h-full p-8 rounded-[2rem] bg-linear-to-br from-white/8 to-white/2 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Large Background Number */}
                <div className="absolute -right-4 -top-4 text-[180px] font-black text-white/[0.02] leading-none pointer-events-none select-none">
                  {step.num}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`} style={{ boxShadow: `0 10px 40px -10px ${step.color}50` }}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                      <span className="text-sm font-medium text-white/50">{step.duration}</span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-sm font-medium" style={{ color: step.color }}>{step.subtitle}</p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/50 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {step.features.map((feature) => (
                      <span 
                        key={feature}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-sm text-white/70"
                      >
                        <Check className="w-3.5 h-3.5" style={{ color: step.color }} />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// WHY US - Premium Corporate Section
// ============================================
const WhyUsSection = () => {
  const stats = [
    { value: '200+', label: 'Başarılı Proje', suffix: '' },
    { value: '8', label: 'Yıllık Deneyim', suffix: '+' },
    { value: '97', label: 'Müşteri Memnuniyeti', suffix: '%' },
    { value: '50', label: 'Kurumsal Müşteri', suffix: '+' },
  ]

  const values = [
    {
      icon: ShieldCheck,
      title: 'Güvenilirlik',
      description: 'Verdiğimiz her söz, imzaladığımız bir taahhüttür. Zamanında teslimat ve kalite garantisi.',
    },
    {
      icon: Target,
      title: 'Sonuç Odaklılık',
      description: 'Sadece estetik değil, ölçülebilir iş sonuçları üreten stratejik çözümler geliştiriyoruz.',
    },
    {
      icon: Gem,
      title: 'Premium Kalite',
      description: 'Her projede mükemmellik arayışı. Detaylara verilen özen, markanızı yansıtan işçilik.',
    },
    {
      icon: Handshake,
      title: 'Stratejik Ortaklık',
      description: 'Tek seferlik iş değil, uzun vadeli iş ortaklığı. Büyümenizde yanınızdayız.',
    },
  ]

  return (
    <section className="py-32 sm:py-40 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-[#0A0F1C] via-[#0D1224] to-[#0A0F1C]" />
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        {/* Subtle pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left - Brand Showcase */}
          <div className="relative">
            {/* Logo Card */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-linear-to-r from-[#38BDF8]/20 via-[#A855F7]/20 to-[#EC4899]/20 rounded-[3rem] blur-3xl opacity-50" />
              
              {/* Main Card */}
              <div className="relative p-10 sm:p-12 rounded-[2.5rem] bg-linear-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm">
                {/* Corner Accents */}
                <div className="absolute top-0 left-8 w-20 h-px bg-linear-to-r from-[#38BDF8] to-transparent" />
                <div className="absolute top-0 left-8 w-px h-20 bg-linear-to-b from-[#38BDF8] to-transparent" />
                <div className="absolute bottom-0 right-8 w-20 h-px bg-linear-to-l from-[#EC4899] to-transparent" />
                <div className="absolute bottom-0 right-8 w-px h-20 bg-linear-to-t from-[#EC4899] to-transparent" />
                
                {/* Logo */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <img 
                      src="/logolar/arlanlogonav.webp" 
                      alt="Arlan Medya" 
                      className="h-16 sm:h-20 w-auto"
                    />
                    {/* Logo glow */}
                    <div className="absolute inset-0 bg-[#A855F7]/20 blur-2xl" />
                  </div>
                </div>
                
                {/* Tagline */}
                <div className="text-center mb-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Dijital Mükemmellik
                  </h3>
                  <p className="text-white/40 text-lg">
                    2021'den beri premium dijital çözümler
                  </p>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <div 
                      key={i}
                      className="relative p-5 rounded-2xl bg-white/[0.03] border border-white/5 text-center group hover:bg-white/[0.06] hover:border-white/10 transition-all"
                    >
                      <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                        {stat.value}<span className="text-[#A855F7]">{stat.suffix}</span>
                      </div>
                      <div className="text-sm text-white/40">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Values */}
          <div>
            {/* Section Header */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#A855F7]" />
                <span className="text-sm font-medium text-white/60">Neden Biz?</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
                Markanızı Geleceğe
                <span className="block mt-2 bg-linear-to-r from-[#38BDF8] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent">
                  Taşıyoruz
                </span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed">
                5 yılı aşkın deneyimimizle, markaların dijital dönüşüm yolculuğunda 
                güvenilir iş ortağı olmaya devam ediyoruz.
              </p>
            </div>
            
            {/* Values List */}
            <div className="space-y-6">
              {values.map((value, i) => (
                <div 
                  key={i}
                  className="group flex gap-5 p-5 rounded-2xl hover:bg-white/[0.03] transition-all cursor-default"
                >
                  {/* Icon */}
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-linear-to-br from-[#A855F7]/20 to-[#EC4899]/10 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#A855F7]/30 transition-all">
                    <value.icon className="w-6 h-6 text-[#A855F7]" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#A855F7] transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-white/40 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-white/5">
              <div className="flex flex-wrap gap-6 text-sm text-white/30">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#22C55E]" />
                  <span>NDA Korumalı</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#22C55E]" />
                  <span>Fatura Garantili</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#22C55E]" />
                  <span>Sözleşmeli Çalışma</span>
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
// CTA - Premium Call to Action
// ============================================
const CTASection = () => {
  return (
    <section className="py-20 sm:py-32 lg:py-40 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-[#0A0F1C] via-[#050816] to-[#0A0F1C]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-linear-to-r from-[#1E40AF]/20 via-[#38BDF8]/15 to-[#374151]/10 rounded-full blur-[100px] sm:blur-[120px]" />
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#38BDF8]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#1E40AF]/30 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-linear-to-r from-[#22C55E]/15 to-[#16A34A]/10 border border-[#22C55E]/25 mb-8 sm:mb-10">
            <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="text-sm sm:text-base font-medium text-[#22C55E]">İlk Görüşme Ücretsiz</span>
          </div>
          
          {/* Main Title */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.1] mb-4">
              <span className="block">Projenizi</span>
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-[#38BDF8] via-[#1E40AF] to-[#374151] bg-clip-text text-transparent">
                  Başlatalım
                </span>
                <Sparkles className="absolute -top-1 sm:-top-2 -right-4 sm:-right-6 w-6 h-6 sm:w-8 sm:h-8 text-[#FBBF24] animate-pulse" />
              </span>
            </h2>
            
            <div className="w-20 sm:w-24 h-1 bg-linear-to-r from-[#38BDF8] to-[#1E40AF] mx-auto rounded-full mt-6" />
          </div>
          
          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-12 sm:mb-16">
            Dijital dönüşüm yolculuğunuza bugün başlayın. 
            <span className="block mt-2 text-white/40">Fikrinizi dinleyelim, size en uygun çözümü birlikte bulalım.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            <Link 
              href="/iletisim"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-linear-to-r from-[#1E40AF] to-[#3B82F6] text-white font-semibold text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#1E40AF]/20"
            >
              <span className="relative z-10">Hemen Başlayalım</span>
              <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-linear-to-r from-[#3B82F6] to-[#1E40AF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <a 
              href="tel:+905551234567"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl border border-white/20 text-white/80 hover:text-white font-medium text-base transition-all duration-300 hover:bg-white/5 hover:border-white/30"
            >
              <span className="text-lg">📞</span>
              <span>Hemen Ara</span>
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="mb-12 sm:mb-16">
            <p className="text-white/40 text-sm sm:text-base mb-4">Alternatif iletişim:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <a 
                href="mailto:info@arlanmedya.com"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#38BDF8] transition-colors font-medium"
              >
                <span className="text-lg">✉️</span>
                <span>info@arlanmedya.com</span>
              </a>
              <a 
                href="https://wa.me/905307464899?text=Merhaba%20Arlan%20Medya%2C%20proje%20s%C3%BCreciniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#22C55E] transition-colors font-medium"
              >
                <span className="text-lg">💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              { icon: Check, text: "Ücretsiz Keşif Görüşmesi", desc: "İlk 30 dakika tamamen ücretsiz" },
              { icon: Check, text: "Taahhüt Yok", desc: "Hiçbir bağlayıcılık olmadan" },
              { icon: Check, text: "48 Saat İçinde Dönüş", desc: "Hızlı ve net geri bildirim" }
            ].map((item, i) => (
              <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group">
                <div className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#22C55E] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-white font-semibold text-sm sm:text-base mb-1">{item.text}</div>
                    <div className="text-white/40 text-xs sm:text-sm">{item.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// CUSTOM STYLES
// ============================================
const customStyles = `
  @keyframes gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  .animate-gradient {
    animation: gradient 3s ease infinite;
  }
`

// ============================================
// MAIN PAGE
// ============================================
export default function SurecPage() {
  return (
    <>
      <style jsx global>{customStyles}</style>
      <main className="min-h-screen relative overflow-x-hidden">
        <HeroSection />
        <ProcessSection />
        <WhyUsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}
