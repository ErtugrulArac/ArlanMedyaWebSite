'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Monitor, 
  Smartphone, 
  Code2, 
  ShoppingCart, 
  Search, 
  Megaphone,
  ArrowRight,
  CheckCircle2,
  Layers,
  Phone,
  Zap,
  Shield,
  TrendingUp,
  Globe,
  Play,
  Video,
  Sparkles,
  MousePointer2,
  ChevronDown
} from 'lucide-react'
import Footer from '../components/footer'

// ============================================
// HERO SECTION - Cinematic Entry
// ============================================
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.15), transparent), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(168, 85, 247, 0.1), transparent), radial-gradient(ellipse 50% 30% at 20% 80%, rgba(236, 72, 153, 0.08), transparent)'
      }} />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern - Same as homepage */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
        
        {/* Floating Orbs - Reduced blur for performance */}
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-[#38BDF8]/20 rounded-full blur-[40px] animate-float" />
        <div className="hidden md:block absolute bottom-32 right-[15%] w-96 h-96 bg-[#A855F7]/15 rounded-full blur-[50px] animate-float-reverse" />
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EC4899]/10 rounded-full blur-[60px] animate-pulse-slow" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        {/* Orbiting Elements - KEEP AS IS */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]">
          <div className="absolute inset-0 animate-orbit">
            <div className="w-3 h-3 rounded-full bg-[#38BDF8]" />
          </div>
          <div className="absolute inset-0 animate-orbit-reverse">
            <div className="w-2 h-2 rounded-full bg-[#A855F7]" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <Sparkles className="w-4 h-4 text-[#38BDF8]" />
              <span className="text-white/70 text-sm">Premium Digital Solutions</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] ibm-plex-serif-bold">
              Dijital Dünyada
              <br />
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent">
                Fark Yaratın
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white/60 mb-10">
              Web tasarımından medya yönetimine, SEO&apos;dan e-ticarete kadar dijital dünyadaki tüm ihtiyaçlarınız için yanınızdayız.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
              <a
                href="#hizmetler"
                className="group relative flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-semibold text-white overflow-hidden w-full sm:w-auto"
              >
                {/* Button Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8] via-[#A855F7] to-[#EC4899]" style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradient-shift 8s ease infinite'
                }} />
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{
                    animation: 'shimmer 2s infinite'
                  }} />
                </div>
                <span className="relative z-10 text-sm sm:text-base">Hizmetleri Keşfet</span>
                <ArrowRight className="relative z-10 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/iletisim"
                className="group flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-semibold text-white hover:bg-white/10 transition-all w-full sm:w-auto"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="text-sm sm:text-base">Ücretsiz Görüşme</span>
              </a>
            </div>
          </div>

          {/* Right - 3D Mockup */}
          <div className="relative mt-12 lg:mt-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Browser Mockup */}
            <div className="hover-scale" style={{
              transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/50" style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                {/* Browser Chrome */}
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border-b border-white/10">
                  <div className="flex gap-1 sm:gap-1.5">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 mx-2 sm:mx-4">
                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-white/5">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                      <span className="text-white/40 text-[10px] sm:text-xs">arlanmedya.com</span>
                    </div>
                  </div>
                </div>
                
                {/* Browser Content */}
                <div className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-[#0a0a1a] to-[#0d1025] min-h-[180px] sm:min-h-[240px] md:min-h-[300px]">
                  {/* Fake Dashboard */}
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-5 sm:h-6 md:h-8 w-20 sm:w-24 md:w-32 rounded-md sm:rounded-lg bg-gradient-to-r from-[#38BDF8]/20 to-[#A855F7]/20" />
                      <div className="flex gap-1.5 sm:gap-2">
                        <div className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 rounded-md sm:rounded-lg bg-white/5" />
                        <div className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 rounded-md sm:rounded-lg bg-white/5" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-white/5">
                          <div className="h-1.5 sm:h-2 w-8 sm:w-10 md:w-12 rounded bg-white/10 mb-1 sm:mb-2" />
                          <div className="text-sm sm:text-lg md:text-2xl font-bold text-white">{['2.4K', '89%', '156'][i]}</div>
                          <div className="h-6 sm:h-8 md:h-12 mt-1.5 sm:mt-2 md:mt-3 rounded-md sm:rounded-lg bg-gradient-to-t from-[#38BDF8]/20 to-transparent" />
                        </div>
                      ))}
                    </div>
                    <div className="h-16 sm:h-24 md:h-32 rounded-lg sm:rounded-xl bg-white/5 p-2 sm:p-3 md:p-4">
                      <div className="flex items-end justify-between h-full gap-1 sm:gap-1.5 md:gap-2">
                        {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                          <div 
                            key={i} 
                            className="flex-1 rounded-t bg-gradient-to-t from-[#38BDF8] to-[#A855F7]"
                            style={{ height: `${h}%`, opacity: 0.3 + (h / 100) * 0.7 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Phone Mockup - Now visible on all screens */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-10 w-24 sm:w-28 md:w-40 animate-float-slow">
              <div className="glass rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 shadow-xl shadow-black/30">
                <div className="bg-[#0a0a1a] rounded-xl sm:rounded-2xl overflow-hidden">
                  <div className="h-3 sm:h-4 flex items-center justify-center">
                    <div className="w-6 sm:w-8 md:w-12 h-0.5 sm:h-1 rounded-full bg-white/20" />
                  </div>
                  <div className="p-2 sm:p-3 space-y-1.5 sm:space-y-2">
                    {/* Arlan Medya Logo */}
                    <div className="flex items-center justify-center py-1 sm:py-2">
                      <img 
                        src="/logolar/arlanlogonav.webp" 
                        alt="Arlan Medya" 
                        className="h-6 sm:h-8 md:h-10 w-auto object-contain"
                      />
                    </div>
                    <div className="h-2 sm:h-3 w-full rounded bg-gradient-to-r from-[#38BDF8]/30 to-[#A855F7]/30" />
                    <div className="h-2 sm:h-3 w-3/4 rounded bg-white/10" />
                    <div className="flex gap-1 sm:gap-1.5 md:gap-2">
                      <div className="h-4 sm:h-5 md:h-8 flex-1 rounded-md sm:rounded-lg bg-[#38BDF8]/20" />
                      <div className="h-4 sm:h-5 md:h-8 flex-1 rounded-md sm:rounded-lg bg-white/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements - Hidden on small mobile */}
            <div className="absolute -top-2 sm:-top-4 right-4 sm:right-10 animate-bounce-subtle hidden xs:block">
              <div className="glass px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                <span className="text-white/70 text-xs sm:text-sm">Deploy Başarılı</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-subtle">
          <span className="text-white/30 text-xs">Keşfet</span>
          <ChevronDown className="w-5 h-5 text-white/30" />
        </div>
      </div>
    </section>
  )
}

// ============================================
// SERVICES DATA
// ============================================
const services = [
  {
    id: 'web',
    title: 'Web Geliştirme',
    subtitle: 'Hızlı, güvenli, etkileyici',
    description: 'Next.js, React ve modern teknolojilerle kurumsal web siteleri. Core Web Vitals optimizasyonu ile Google\'da üst sıralarda yer alın.',
    icon: Monitor,
    color: '#38BDF8',
    gradient: 'from-[#38BDF8] to-[#06B6D4]',
    features: ['Responsive Tasarım', 'SEO Optimizasyonu', 'Yönetim Paneli', 'Analytics'],
    stats: '80+ Proje',
    mockupType: 'browser'
  },
  {
    id: 'media',
    title: 'Medya Yönetimi',
    subtitle: 'Sosyal medya uzmanlığı',
    description: 'Instagram, Facebook, LinkedIn ve TikTok\'ta profesyonel hesap yönetimi. İçerik üretimi, strateji geliştirme ve analiz raporlaması ile markanızı güçlendiriyoruz.',
    icon: Video,
    color: '#A855F7',
    gradient: 'from-[#A855F7] to-[#7C3AED]',
    features: ['İçerik Üretimi', 'Hesap Yönetimi', 'Video Editör', 'Analiz Raporları'],
    stats: '50+ Hesap',
    mockupType: 'phone'
  },
  {
    id: 'ecommerce',
    title: 'E-Ticaret',
    subtitle: 'Satışlarınızı katlayın',
    description: 'Shopify, WooCommerce veya özel altyapı. Ödeme sistemleri, kargo entegrasyonu ve stok yönetimi.',
    icon: ShoppingCart,
    color: '#10B981',
    gradient: 'from-[#10B981] to-[#059669]',
    features: ['Ödeme Sistemleri', 'Kargo Takibi', 'Stok Yönetimi', 'Pazaryeri'],
    stats: '45+ Mağaza',
    mockupType: 'cart'
  },
  {
    id: 'seo',
    title: 'SEO',
    subtitle: 'Google\'da zirveye',
    description: 'Teknik SEO, içerik stratejisi ve backlink çalışmaları. Organik trafiğinizi 3x artırın.',
    icon: Search,
    color: '#F59E0B',
    gradient: 'from-[#F59E0B] to-[#D97706]',
    features: ['Teknik SEO', 'İçerik Stratejisi', 'Backlink', 'Raporlama'],
    stats: '60+ Proje',
    mockupType: 'chart'
  },
  {
    id: 'marketing',
    title: 'Dijital Pazarlama',
    subtitle: 'ROI odaklı kampanyalar',
    description: 'Google Ads, Meta, LinkedIn. Dönüşüm odaklı stratejiler ve A/B testleri ile maksimum verim.',
    icon: Megaphone,
    color: '#EC4899',
    gradient: 'from-[#EC4899] to-[#DB2777]',
    features: ['Google Ads', 'Meta Ads', 'Remarketing', 'A/B Test'],
    stats: '70+ Kampanya',
    mockupType: 'ads'
  },
  {
    id: 'software',
    title: 'Özel Yazılım',
    subtitle: 'İş süreçlerinize özel',
    description: 'CRM, ERP, otomasyon sistemleri. İş akışlarınızı dijitalleştirin, verimliliği %40 artırın.',
    icon: Code2,
    color: '#6366F1',
    gradient: 'from-[#6366F1] to-[#4F46E5]',
    features: ['CRM/ERP', 'API', 'Otomasyon', 'Entegrasyon'],
    stats: '25+ Sistem',
    mockupType: 'code'
  },
]

// ============================================
// SERVICE MOCKUPS - Interactive Mini Previews
// ============================================
const ServiceMockup = ({ type, color }: { type: string; color: string }) => {
  switch (type) {
    case 'browser':
      return (
        <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-gradient-to-br from-[#0a0a1a] to-[#0d1025] border border-white/10 shadow-2xl">
          {/* Browser Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
            </div>
            <div className="flex-1 mx-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-white/50 text-xs font-medium">arlanmedya.com</span>
                <div className="ml-auto flex gap-1">
                  <div className="w-4 h-4 rounded bg-white/5" />
                  <div className="w-4 h-4 rounded bg-white/5" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Browser Content */}
          <div className="p-4 space-y-3">
            {/* Nav */}
            <div className="flex items-center justify-between">
              <div className="h-6 w-24 rounded-lg" style={{ background: `linear-gradient(90deg, ${color}40, ${color}20)` }} />
              <div className="flex gap-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-2 w-8 rounded bg-white/10" />
                ))}
              </div>
            </div>
            
            {/* Hero Section */}
            <div className="flex gap-3">
              <div className="flex-1 space-y-2">
                <div className="h-3 w-3/4 rounded" style={{ background: `${color}30` }} />
                <div className="h-2 w-full rounded bg-white/10" />
                <div className="h-2 w-2/3 rounded bg-white/5" />
                <div className="flex gap-2 mt-3">
                  <div className="h-6 w-16 rounded-lg" style={{ background: `linear-gradient(135deg, ${color}, ${color}80)` }} />
                  <div className="h-6 w-16 rounded-lg bg-white/10" />
                </div>
              </div>
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                <div className="w-10 h-10 rounded-lg" style={{ background: `${color}30` }} />
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-2">
              {['2.4K', '89%', '156'].map((val, i) => (
                <div key={i} className="p-2 rounded-lg bg-white/5 border border-white/5">
                  <div className="text-xs font-bold text-white">{val}</div>
                  <div className="h-1 w-8 rounded bg-white/10 mt-1" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute top-12 right-3 px-2 py-1 rounded-lg bg-green-500/20 border border-green-500/30">
            <span className="text-[10px] text-green-400 font-medium">● Live</span>
          </div>
        </div>
      )
    case 'phone':
      return (
        <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-gradient-to-br from-[#0a0a1a] to-[#0d1025] border border-white/10 shadow-2xl p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5" style={{ color }} />
              <span className="text-sm font-semibold text-white">Medya Dashboard</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg" style={{ background: `${color}20` }}>
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
              <span className="text-xs font-medium" style={{ color }}>3 Aktif</span>
            </div>
          </div>
          
          {/* Social Platforms */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { name: 'Instagram', followers: '12.4K', growth: '+8%', icon: '📸' },
              { name: 'TikTok', followers: '8.2K', growth: '+24%', icon: '🎵' },
              { name: 'LinkedIn', followers: '3.1K', growth: '+12%', icon: '💼' },
            ].map((platform, i) => (
              <div key={i} className="p-2 rounded-lg bg-white/5 border border-white/5 text-center">
                <div className="text-lg mb-1">{platform.icon}</div>
                <div className="text-xs font-bold text-white">{platform.followers}</div>
                <div className="text-[10px] font-medium text-green-400">{platform.growth}</div>
              </div>
            ))}
          </div>
          
          {/* Content Calendar Preview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/40 font-medium">Planlanan İçerikler</span>
              <span className="text-[10px]" style={{ color }}>Bu Hafta</span>
            </div>
            {[
              { type: 'Video', platform: 'IG Reels', time: '14:00', status: 'Hazır' },
              { type: 'Carousel', platform: 'LinkedIn', time: '10:00', status: 'Taslak' },
            ].map((content, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${color}20` }}>
                  <Play className="w-4 h-4" style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-white">{content.type}</div>
                  <div className="text-[10px] text-white/40">{content.platform} • {content.time}</div>
                </div>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${content.status === 'Hazır' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                  {content.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )
    case 'cart':
      return (
        <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-gradient-to-br from-[#0a0a1a] to-[#0d1025] border border-white/10 shadow-2xl p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" style={{ color }} />
              <span className="text-sm font-semibold text-white">Sepetim</span>
            </div>
            <div className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: `${color}20`, color }}>
              3 ürün
            </div>
          </div>
          
          {/* Products */}
          <div className="space-y-2">
            {[
              { name: 'Premium Plan', price: '₺2,499', tag: 'Popüler' },
              { name: 'Starter Pack', price: '₺999', tag: null },
              { name: 'Add-on Service', price: '₺499', tag: 'Yeni' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${color}20` }}>
                  <div className="w-5 h-5 rounded" style={{ background: `${color}40` }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-white truncate">{item.name}</span>
                    {item.tag && (
                      <span className="px-1.5 py-0.5 rounded text-[8px] font-medium" style={{ background: `${color}30`, color }}>
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="h-1 w-16 rounded bg-white/10 mt-1" />
                </div>
                <span className="text-xs font-bold" style={{ color }}>{item.price}</span>
              </div>
            ))}
          </div>
          
          {/* Total */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pt-3 border-t border-white/10">
            <span className="text-xs text-white/50">Toplam</span>
            <span className="text-sm font-bold" style={{ color }}>₺3,997</span>
          </div>
        </div>
      )
    case 'chart':
      return (
        <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-gradient-to-br from-[#0a0a1a] to-[#0d1025] border border-white/10 shadow-2xl p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" style={{ color }} />
              <span className="text-sm font-semibold text-white">Analytics</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-green-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold text-green-400">+127%</span>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { label: 'Ziyaretçi', value: '24.5K', change: '+12%' },
              { label: 'Tıklama', value: '8.2K', change: '+23%' },
              { label: 'Dönüşüm', value: '4.8%', change: '+8%' },
            ].map((stat, i) => (
              <div key={i} className="p-2 rounded-lg bg-white/5 border border-white/5">
                <div className="text-[10px] text-white/40">{stat.label}</div>
                <div className="text-sm font-bold text-white">{stat.value}</div>
                <div className="text-[10px] font-medium text-green-400">{stat.change}</div>
              </div>
            ))}
          </div>
          
          {/* Chart */}
          <div className="flex items-end justify-between h-16 gap-1 px-1">
            {[30, 45, 35, 60, 50, 75, 90, 70, 85, 95, 80, 100].map((h, i) => (
              <div 
                key={i} 
                className="flex-1 rounded-t transition-all duration-500 hover:opacity-100"
                style={{ 
                  height: `${h}%`, 
                  background: `linear-gradient(to top, ${color}, ${color}20)`,
                  opacity: 0.5 + (h / 100) * 0.5
                }}
              />
            ))}
          </div>
          
          {/* X-axis Labels */}
          <div className="flex justify-between mt-2 px-1">
            {['Oca', 'Şub', 'Mar', 'Nis'].map((m, i) => (
              <span key={i} className="text-[8px] text-white/30">{m}</span>
            ))}
          </div>
        </div>
      )
    case 'ads':
      return (
        <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-gradient-to-br from-[#0a0a1a] to-[#0d1025] border border-white/10 shadow-2xl p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: `${color}20` }}>
                <Megaphone className="w-4 h-4" style={{ color }} />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Kampanya #1</div>
                <div className="text-[10px] text-white/40">Google Ads</div>
              </div>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-full" style={{ background: `${color}20` }}>
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
              <span className="text-xs font-medium" style={{ color }}>Aktif</span>
            </div>
          </div>
          
          {/* Ad Preview */}
          <div className="p-3 rounded-lg bg-white/5 border border-white/10 mb-3">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${color}40, ${color}20)` }}>
                <Globe className="w-6 h-6" style={{ color }} />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-white mb-1">Reklam Başlığı</div>
                <div className="h-1.5 w-full rounded bg-white/10 mb-1" />
                <div className="h-1.5 w-3/4 rounded bg-white/5" />
              </div>
            </div>
          </div>
          
          {/* Metrics */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: 'Gösterim', value: '45K' },
              { label: 'Tıklama', value: '2.4K' },
              { label: 'CTR', value: '%5.3' },
              { label: 'CPC', value: '₺0.85' },
            ].map((m, i) => (
              <div key={i} className="text-center p-2 rounded-lg bg-white/5">
                <div className="text-xs font-bold" style={{ color: i === 2 ? color : 'white' }}>{m.value}</div>
                <div className="text-[8px] text-white/40">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      )
    case 'code':
      return (
        <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-gradient-to-br from-[#0a0a1a] to-[#0d1025] border border-white/10 shadow-2xl">
          {/* Editor Header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 flex items-center gap-2">
              <div className="px-3 py-1 rounded-t bg-white/10 text-[10px] text-white/70 font-mono">api.ts</div>
              <div className="px-3 py-1 text-[10px] text-white/30 font-mono">types.ts</div>
            </div>
          </div>
          
          {/* Code Content */}
          <div className="p-4 font-mono text-[10px] sm:text-xs leading-relaxed">
            <div className="flex">
              <span className="w-6 text-white/20 select-none">1</span>
              <span className="text-white/30">{'// Arlan Medya API'}</span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/20 select-none">2</span>
              <span style={{ color }}>export async function</span>
              <span className="text-yellow-400 ml-1">getData</span>
              <span className="text-white/50">()</span>
              <span className="text-white/30">{' {'}</span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/20 select-none">3</span>
              <span className="text-white/30 ml-4">const</span>
              <span className="text-white/70 ml-1">res</span>
              <span className="text-white/30 ml-1">=</span>
              <span className="text-green-400 ml-1">await</span>
              <span className="text-yellow-400 ml-1">fetch</span>
              <span className="text-white/30">(url)</span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/20 select-none">4</span>
              <span className="text-white/30 ml-4">return</span>
              <span className="text-white/30 ml-1">{'{'}</span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/20 select-none">5</span>
              <span className="text-purple-400 ml-8">status</span>
              <span className="text-white/30">:</span>
              <span className="text-green-400 ml-1">&quot;success&quot;</span>
              <span className="text-white/30">,</span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/20 select-none">6</span>
              <span className="text-purple-400 ml-8">data</span>
              <span className="text-white/30">:</span>
              <span className="text-orange-400 ml-1">response</span>
            </div>
            <div className="flex">
              <span className="w-6 text-white/20 select-none">7</span>
              <span className="text-white/30 ml-4">{'}}'}</span>
            </div>
          </div>
          
          {/* Status Bar */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-1.5 bg-white/5 border-t border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[10px] text-white/50">TypeScript</span>
            </div>
            <span className="text-[10px] text-white/30">UTF-8</span>
          </div>
        </div>
      )
    default:
      return null
  }
}

// ============================================
// SERVICES SECTION - Premium Cards with Mockups
// ============================================
const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeService, setActiveService] = useState<number>(0)
  const router = useRouter()

  // URL hash'e göre doğru hizmeti aktif et
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash.startsWith('hizmet-')) {
        const serviceId = hash.replace('hizmet-', '')
        const serviceIndex = services.findIndex(s => s.id === serviceId)
        if (serviceIndex !== -1) {
          setActiveService(serviceIndex)
          // Smooth scroll to the specific service section
          setTimeout(() => {
            const element = document.getElementById(hash)
            if (element) {
              const yOffset = 50; // Header height + some padding
              const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({top: y, behavior: 'smooth'});
            } else {
              // Fallback: scroll to services section
              const servicesElement = document.getElementById('hizmetler')
              if (servicesElement) {
                const yOffset = 30;
                const y = servicesElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
              }
            }
          }, 100)
        }
      }
    }

    // Initial load
    handleHashChange()
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <section id="hizmetler" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#38BDF8]/5 to-transparent" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#A855F7]/10 rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#EC4899]/8 rounded-full blur-[120px] opacity-25" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service Anchor Points */}
        {services.map(service => (
          <div key={service.id} id={`hizmet-${service.id}`} className="absolute -top-32" />
        ))}
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Layers className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-white/70 text-sm">6 Uzman Hizmet Alanı</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Hizmetlerimiz
          </h2>
          <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Her biri alanında uzman ekiplerle, işletmenizin dijital ihtiyaçlarını karşılıyoruz.
          </p>
        </div>

        {/* Featured Service - Large Card */}
        <div className="mb-8 sm:mb-12">
          <div 
            className="relative glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden"
            style={{ 
              background: `linear-gradient(135deg, ${services[activeService].color}08, transparent)` 
            }}
          >
            {/* Glow Effect */}
            <div 
              className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-[100px] opacity-20"
              style={{ background: services[activeService].color }}
            />
            
            <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Content */}
              <div>
                {(() => {
                  const ActiveIcon = services[activeService].icon
                  return (
                    <div 
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 sm:mb-6"
                      style={{ background: `${services[activeService].color}20` }}
                    >
                      <ActiveIcon className="w-4 h-4" style={{ color: services[activeService].color }} />
                      <span className="text-sm font-medium" style={{ color: services[activeService].color }}>
                        {services[activeService].stats}
                      </span>
                    </div>
                  )
                })()}
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
                  {services[activeService].title}
                </h3>
                <p className="text-white/40 text-sm sm:text-base mb-3 sm:mb-4">{services[activeService].subtitle}</p>
                <p className="text-white/60 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {services[activeService].features.map((feature, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-white/5"
                    >
                      <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 shrink-0" style={{ color: services[activeService].color }} />
                      <span className="text-white/70 text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="/iletisim"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-white transition-transform hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${services[activeService].color}, ${services[activeService].color}CC)` }}
                >
                  Ücretsiz Teklif Al
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
              </div>

              {/* Mockup - Now responsive on all screens */}
              <div className="mt-6 lg:mt-0">
                <div className="relative">
                  <ServiceMockup type={services[activeService].mockupType} color={services[activeService].color} />
                  
                  {/* Decorative elements */}
                  <div 
                    className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full blur-2xl opacity-30"
                    style={{ background: services[activeService].color }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Selector - Mini Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`relative p-3 sm:p-4 rounded-xl sm:rounded-2xl text-left transition-all duration-300 ${
                activeService === index 
                  ? 'bg-white/10 border-2' 
                  : 'bg-white/5 border border-white/5 hover:bg-white/10'
              }`}
              style={{ 
                borderColor: activeService === index ? service.color : undefined 
              }}
            >
              {/* Active Indicator */}
              {activeService === index && (
                <div 
                  className="absolute top-2 right-2 w-2 h-2 rounded-full animate-pulse"
                  style={{ background: service.color }}
                />
              )}
              
              <service.icon 
                className="w-5 sm:w-6 h-5 sm:h-6 mb-2 sm:mb-3" 
                style={{ color: activeService === index ? service.color : 'rgba(255,255,255,0.5)' }} 
              />
              <h4 className={`font-semibold text-xs sm:text-sm ${activeService === index ? 'text-white' : 'text-white/70'}`}>
                {service.title}
              </h4>
              <p className="text-white/40 text-[10px] sm:text-xs mt-0.5 sm:mt-1 hidden sm:block">{service.stats}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// PROCESS SECTION - Timeline
// ============================================
const ProcessSection = () => {
  const steps = [
    { title: 'Keşif', desc: 'İhtiyaçlarınızı dinliyoruz', icon: Search },
    { title: 'Strateji', desc: 'Yol haritası çiziyoruz', icon: Layers },
    { title: 'Tasarım', desc: 'Modern UI/UX tasarlıyoruz', icon: Sparkles },
    { title: 'Geliştirme', desc: 'Kodluyoruz ve test ediyoruz', icon: Code2 },
    { title: 'Lansman', desc: 'Canlıya alıyoruz', icon: Zap },
  ]

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Subtle Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#38BDF8]/8 rounded-full blur-[80px] opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#6366F1]/6 rounded-full blur-[90px] opacity-35" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto px-4">
            5 adımda projenizi hayata geçiriyoruz
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {steps.map((step, i) => (
              <div key={i} className={`relative text-center group ${i === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
                {/* Icon */}
                <div className="relative inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 mb-4 sm:mb-6">
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#38BDF8]/20 to-[#A855F7]/20 group-hover:from-[#38BDF8]/30 group-hover:to-[#A855F7]/30 transition-all duration-500" />
                  <step.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white/80" />
                  {/* Number */}
                  <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[#38BDF8] flex items-center justify-center">
                    <span className="text-[10px] sm:text-xs font-bold text-black">{i + 1}</span>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-white/50 text-xs sm:text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// STATS SECTION - Big Numbers
// ============================================
const StatsSection = () => {
  const stats = [
    { value: '200+', label: 'Tamamlanan Proje', icon: Globe },
    { value: '150+', label: 'Mutlu Müşteri', icon: Sparkles },
    { value: '8+', label: 'Yıllık Deneyim', icon: Shield },
    { value: '%97', label: 'Memnuniyet Oranı', icon: TrendingUp },
  ]

  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#38BDF8]/5 via-transparent to-[#A855F7]/5 opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[120px] opacity-30" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-6 sm:w-8 h-6 sm:h-8 text-[#38BDF8] mx-auto mb-3 sm:mb-4" />
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-white/50 text-xs sm:text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// CTA SECTION - Final Push
// ============================================
const CTASection = () => {
  return (
    <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden">
      {/* Premium Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black opacity-90" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-400/15 to-blue-500/10 rounded-full blur-[80px] opacity-60 animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-gradient-to-br from-violet-500/12 to-purple-400/8 rounded-full blur-[60px] opacity-50 animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-cyan-400/8 via-transparent to-indigo-400/6 rounded-full blur-[100px] opacity-30" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
          {/* Card Background with Premium Glass Effect */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/40 via-slate-800/30 to-gray-900/50" />
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/8 via-transparent to-blue-500/5" />
            <div className="absolute inset-0 backdrop-blur-xl border border-white/10" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.01) 100%)'
            }} />
          </div>
          
          {/* Inner Glow Effects */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent" />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent" />
          
          {/* Floating Orbs */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-br from-emerald-400/20 to-blue-500/15 blur-xl animate-float" />
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-to-tl from-violet-400/15 to-purple-500/12 blur-xl animate-float-reverse" />
          <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400/10 to-indigo-400/8 blur-lg animate-pulse-glow" />
          
          {/* Content */}
          <div className="relative z-10 text-center px-4 sm:px-8 md:px-12 py-6 sm:py-10 md:py-12 lg:py-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-4 sm:mb-6" style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(59, 130, 246, 0.1))',
              border: '1px solid rgba(34, 197, 94, 0.2)'
            }}>
              <div className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
              </div>
              <span className="text-emerald-300 text-xs font-medium">24/7 Destek • Ücretsiz Danışmanlık</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-[1.1]">
              Projenizi Birlikte
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-violet-400 bg-clip-text text-transparent">
                  Gerçekleştirelim
                </span>
                <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400/50 via-blue-500/50 to-violet-400/50 rounded-full" />
              </span>
            </h2>
            
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Fikirlerinizi dinleyelim, hayallerinizdeki dijital çözümü birlikte tasarlayalım.
              <br className="hidden sm:block" />
              <span className="text-emerald-400 font-medium">Ücretsiz keşif görüşmesi</span> ile başlayın.
            </p>

            {/* Enhanced Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
              {/* Primary CTA Button */}
              <a
                href="/iletisim"
                className="group relative inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base text-white overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
                style={{
                  background: 'linear-gradient(135deg, #22C55E, #3B82F6, #8B5CF6)',
                  backgroundSize: '200% 200%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.animation = 'gradient-shift 0.6s ease-in-out'
                }}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer" />
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: 'linear-gradient(135deg, #22C55E, #3B82F6, #8B5CF6)',
                  filter: 'blur(15px)',
                  transform: 'scale(1.05)',
                  zIndex: -1
                }} />
                
                <Phone className="relative z-10 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">Ücretsiz Görüşme</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/905307464899?text=Merhaba%20Arlan%20Medya%2C%20dijital%20hizmetleriniz%20hakk%C4%B1nda%20%C3%BCcretsiz%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base text-white transition-all duration-500 hover:scale-105 border border-white/20 w-full sm:w-auto"
                style={{
                  background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.15), rgba(37, 211, 102, 0.05))',
                  backdropFilter: 'blur(20px)'
                }}
              >
                {/* Hover Background */}
                <div className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.25), rgba(37, 211, 102, 0.1))'
                }} />
                
                <div className="relative z-10 w-4 h-4 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span className="relative z-10 text-green-100">WhatsApp</span>
                <MousePointer2 className="relative z-10 w-3.5 h-3.5 text-green-200 group-hover:translate-x-0.5 group-hover:rotate-6 transition-transform duration-300" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>200+ Başarılı Proje</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                <span>%100 Güvenli</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                <span>24 Saat Yanıt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// MAIN PAGE
// ============================================
export default function HizmetlerimizPage() {
  return (
    <>
      <main className="relative z-10 min-h-screen bg-[#050816]">
        {/* Global Grid Pattern */}
        <div className="fixed inset-0 z-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.02) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
        
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
