'use client'

import React, { useMemo, useEffect, useState } from 'react'
import { 
  Monitor, 
  Smartphone, 
  Palette, 
  Code2, 
  ShoppingCart, 
  BarChart3, 
  Search, 
  Megaphone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Globe,
  Layers,
  MessageCircle,
  ChevronRight,
  PenTool,
  Lock,
  Terminal,
  Database,
  Cloud,
  Cpu,
  Wifi,
  Server
} from 'lucide-react'
import dynamic from 'next/dynamic'
import Footer from '../components/footer'

// ============================================
// FLOATING BACKGROUND COMPONENT - Parallax Style
// ============================================
const FloatingBackground = React.memo(() => {
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  // Code snippets that float - parallax with different speeds
  const codeSnippets = [
    { code: '<div>', x: '5%', baseY: 200, speed: 0.1 },
    { code: 'npm run', x: '88%', baseY: 400, speed: 0.15 },
    { code: '{ }', x: '12%', baseY: 700, speed: 0.08 },
    { code: '</>', x: '85%', baseY: 1000, speed: 0.12 },
    { code: 'const', x: '8%', baseY: 1400, speed: 0.18 },
    { code: '=>', x: '90%', baseY: 1800, speed: 0.1 },
    { code: 'async', x: '15%', baseY: 2200, speed: 0.14 },
    { code: 'return', x: '82%', baseY: 2600, speed: 0.09 },
    { code: 'function', x: '6%', baseY: 3000, speed: 0.16 },
    { code: 'import', x: '92%', baseY: 3400, speed: 0.11 },
    { code: 'export', x: '10%', baseY: 3800, speed: 0.13 },
    { code: 'await', x: '87%', baseY: 4200, speed: 0.17 },
  ]

  // Floating icons - parallax with different speeds
  const floatingIcons = [
    { Icon: Terminal, x: '92%', baseY: 300, speed: 0.12 },
    { Icon: Database, x: '7%', baseY: 600, speed: 0.08 },
    { Icon: Cloud, x: '90%', baseY: 900, speed: 0.15 },
    { Icon: Cpu, x: '5%', baseY: 1200, speed: 0.1 },
    { Icon: Code2, x: '88%', baseY: 1600, speed: 0.14 },
    { Icon: Server, x: '8%', baseY: 2000, speed: 0.09 },
    { Icon: Globe, x: '93%', baseY: 2400, speed: 0.16 },
    { Icon: Wifi, x: '4%', baseY: 2800, speed: 0.11 },
    { Icon: Monitor, x: '91%', baseY: 3200, speed: 0.13 },
    { Icon: Smartphone, x: '6%', baseY: 3600, speed: 0.18 },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, i) => {
        const y = snippet.baseY - scrollY * snippet.speed
        return (
          <div
            key={`code-${i}`}
            className="absolute font-mono text-sm sm:text-base select-none transition-opacity duration-300"
            style={{
              left: snippet.x,
              top: `${y}px`,
              color: '#38BDF8',
              opacity: 0.12,
              transform: `rotate(${Math.sin(scrollY * 0.002 + i) * 5}deg)`,
            }}
          >
            {snippet.code}
          </div>
        )
      })}

      {/* Floating Icons */}
      {floatingIcons.map((item, i) => {
        const y = item.baseY - scrollY * item.speed
        return (
          <item.Icon
            key={`icon-${i}`}
            className="absolute w-5 h-5 sm:w-6 sm:h-6 transition-opacity duration-300"
            style={{
              left: item.x,
              top: `${y}px`,
              color: '#A855F7',
              opacity: 0.1,
              transform: `rotate(${Math.cos(scrollY * 0.002 + i) * 8}deg)`,
            }}
          />
        )
      })}
    </div>
  )
})

FloatingBackground.displayName = 'FloatingBackground'

// ============================================
// HERO SECTION
// ============================================
const HeroSection = React.memo(() => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-4">
      {/* Subtle glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#38BDF8] rounded-full blur-[200px] opacity-[0.05]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#A855F7] rounded-full blur-[200px] opacity-[0.05]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 bg-gradient-to-r from-[#38BDF8]/10 to-[#A855F7]/10 border border-[#38BDF8]/20">
            <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-white/70 text-sm">Dijital Çözümler</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8">
            <span className="text-white">Premium </span>
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent">
              Hizmetlerimiz
            </span>
          </h1>

          <p className="text-white/50 text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            İşletmenizi dijital dünyada zirveye taşıyacak çözümler. 
            Modern teknolojiler, yaratıcı tasarımlar ve güçlü stratejiler.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Proje', count: '200+', icon: Globe },
              { label: 'Müşteri', count: '150+', icon: CheckCircle2 },
              { label: 'Yıllık Deneyim', count: '8+', icon: TrendingUp },
              { label: 'Hizmet', count: '7', icon: Sparkles },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#38BDF8]" />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.count}
                </div>
                <div className="text-white/40 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

HeroSection.displayName = 'HeroSection'

// ============================================
// SERVICE CARD COMPONENT
// ============================================
interface ServiceCardProps {
  index: number
  title: string
  description: string
  Icon: any
  color: string
  features: string[]
  mockup: React.ReactNode
  reverse: boolean
}

const ServiceCard = React.memo(({ index, title, description, Icon, color, features, mockup, reverse }: ServiceCardProps) => {
  return (
    <div className="py-16 sm:py-24 first:pt-8">
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>
        {/* Content */}
        <div className="flex-1 lg:max-w-lg">
          {/* Icon & Title */}
          <div className="flex items-center gap-4 mb-6">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${color}20, ${color}10)`,
                border: `1px solid ${color}30`
              }}
            >
              <Icon className="w-7 h-7" style={{ color }} />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {title}
              </h3>
              <div className="text-xs text-white/40 uppercase tracking-wide">
                0{index + 1}. Hizmet
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            {description}
          </p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color }} />
                <span className="text-white/70">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <button 
              className="group px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:bg-white/20 transition-all duration-300"
            >
              Detaylı Bilgi
              <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Mockup */}
        <div className="flex-1 lg:max-w-2xl w-full">
          <div className="relative">
            {mockup}
          </div>
        </div>
      </div>
    </div>
  )
})

ServiceCard.displayName = 'ServiceCard'

// ============================================
// MAIN COMPONENT
// ============================================
export default function HizmetlerimizPage() {
  const services = useMemo(() => [
    {
      title: 'Web Sitesi Geliştirme',
      description: 'Modern teknolojilerle, SEO uyumlu, hızlı ve mobil dostu web siteleri geliştiriyoruz.',
      Icon: Monitor,
      color: '#38BDF8',
      features: [
        'Responsive & Mobil Uyumlu Tasarım',
        'SEO Optimizasyonu & Hızlı Yüklenme',
        'Modern UI/UX Standartları',
        'SSL Sertifikası & Güvenlik',
        'İçerik Yönetim Sistemi (CMS)',
      ],
      MockupComponent: () => (
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white/5 rounded-lg px-4 py-1.5 text-white/40 text-sm flex items-center gap-2">
                <Lock className="w-3 h-3 text-green-400" />
                <span>www.sirketiniz.com</span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9]" />
                <span className="text-white font-semibold">Logo</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="h-4 w-3/4 bg-white/10 rounded mb-3" />
                <div className="h-8 w-full bg-gradient-to-r from-[#38BDF8]/20 to-[#A855F7]/20 rounded mb-4" />
                <div className="h-10 w-32 rounded-lg bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9]" />
              </div>
              <div className="hidden sm:block">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-[#38BDF8]/10 to-[#A855F7]/10 border border-white/10" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Mobil Uygulama',
      description: 'iOS ve Android için native ve cross-platform mobil uygulamalar geliştiriyoruz.',
      Icon: Smartphone,
      color: '#A855F7',
      features: [
        'iOS & Android Native Geliştirme',
        'Cross-Platform (React Native, Flutter)',
        'Push Bildirim Sistemi',
        'App Store & Play Store Optimizasyonu',
        'Offline Çalışabilme',
      ],
      MockupComponent: () => (
        <div className="relative flex justify-center">
          <div className="relative w-[240px] sm:w-[280px] h-[480px] sm:h-[560px] rounded-[40px] sm:rounded-[48px] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-slate-600 shadow-2xl">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />
            <div className="absolute inset-[3px] rounded-[44px] overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
              <div className="flex items-center justify-between px-6 pt-10 pb-2">
                <span className="text-white/60 text-xs font-medium">9:41</span>
                <div className="w-4 h-2 bg-white/60 rounded-sm" />
              </div>
              <div className="px-5 pt-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A855F7] to-[#EC4899]" />
                  <div>
                    <div className="text-white font-semibold text-sm">Hoş Geldiniz! 👋</div>
                    <div className="text-white/40 text-xs">Premium Üye</div>
                  </div>
                </div>
                <div className="p-4 rounded-2xl mb-4 bg-gradient-to-r from-[#A855F7] to-[#EC4899]">
                  <div className="text-white/70 text-xs mb-1">Toplam Bakiye</div>
                  <div className="text-white text-2xl font-bold">₺24,580.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'E-Ticaret Çözümleri',
      description: 'Ürünlerinizi online satışa açın! Güvenli ödeme sistemi ile tam donanımlı e-ticaret.',
      Icon: ShoppingCart,
      color: '#10B981',
      features: [
        'Güvenli Ödeme Altyapısı',
        'Stok & Sipariş Yönetimi',
        'Müşteri Paneli & Üyelik Sistemi',
        'Kargo Entegrasyonları',
        'Çoklu Para Birimi Desteği',
      ],
      MockupComponent: () => (
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">E-Ticaret</span>
            </div>
          </div>
          <div className="p-6">
            <div className="relative rounded-2xl overflow-hidden mb-6 p-6 bg-gradient-to-r from-[#10B981]/10 to-[#10B981]/5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[#10B981] text-xs font-medium">🔥 Öne Çıkan</span>
                  <h4 className="text-white text-lg font-bold mt-1">Premium Ürün</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-white/30 line-through text-sm">₺2,999</span>
                    <span className="text-[#10B981] font-bold text-xl">₺1,999</span>
                  </div>
                </div>
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  <Layers className="w-12 h-12 text-[#10B981]/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'UI/UX Tasarım',
      description: 'Kullanıcı deneyimini ön planda tutan, estetik ve fonksiyonel arayüz tasarımları.',
      Icon: Palette,
      color: '#EC4899',
      features: [
        'Kullanıcı Araştırması & Analizi',
        'Wireframe & Prototip',
        'Görsel Tasarım & Branding',
        'Etkileşim Tasarımı',
        'Tasarım Sistemi Oluşturma',
      ],
      MockupComponent: () => (
        <div className="relative rounded-2xl overflow-hidden p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EC4899] to-[#DB2777] flex items-center justify-center">
                <PenTool className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">Design Studio</span>
            </div>
            <div className="flex items-center gap-2">
              {['#EC4899', '#A855F7', '#38BDF8', '#10B981', '#FBBF24'].map((color, i) => (
                <div key={i} className="w-6 h-6 rounded-full" style={{ background: color }} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br from-[#EC4899]/10 to-[#A855F7]/10 border border-white/10">
                <div className="p-3">
                  <div className="h-2 w-1/2 bg-white/20 rounded mb-1" />
                  <div className="h-1 w-3/4 bg-white/10 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Dijital Pazarlama',
      description: 'Markanızı dijitalde büyütün! Sosyal medya, Google Ads ve performans odaklı kampanyalar.',
      Icon: Megaphone,
      color: '#FBBF24',
      features: [
        'Sosyal Medya Yönetimi',
        'Google & Meta Ads Kampanyaları',
        'İçerik Pazarlaması & Strateji',
        'E-posta Marketing',
        'Influencer İş Birlikleri',
      ],
      MockupComponent: () => (
        <div className="relative rounded-2xl overflow-hidden p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">Marketing Dashboard</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: 'Erişim', value: '1.2M', color: '#38BDF8' },
              { label: 'Etkileşim', value: '45.2K', color: '#A855F7' },
              { label: 'Dönüşüm', value: '8.5%', color: '#10B981' },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5">
                <span className="text-white/40 text-xs block mb-1">{stat.label}</span>
                <span className="text-white text-xl font-bold">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'SEO Optimizasyonu',
      description: 'Arama motorlarında üst sıralara çıkın! Teknik SEO ve içerik optimizasyonu.',
      Icon: Search,
      color: '#6366F1',
      features: [
        'Teknik SEO Analizi & Düzeltme',
        'Anahtar Kelime Araştırması',
        'İçerik Optimizasyonu',
        'Backlink Stratejisi',
        'Rakip Analizi & Raporlama',
      ],
      MockupComponent: () => (
        <div className="relative rounded-2xl overflow-hidden p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl">
          <div className="mb-6">
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white mb-4">
              <Search className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600 text-sm">şirketiniz hizmetleri</span>
            </div>
            <div className="p-4 rounded-xl border-2 border-[#10B981]/50 bg-[#10B981]/5">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-[#10B981] font-medium px-2 py-0.5 bg-[#10B981]/20 rounded">1. Sıra</span>
              </div>
              <h4 className="text-[#38BDF8] font-medium mb-1">Şirketiniz - Profesyonel Hizmetler</h4>
              <p className="text-white/50 text-sm">En iyi hizmetleri sunan lider firma...</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Özel Yazılım Geliştirme',
      description: 'İşletmenize özel yazılım çözümleri. ERP, CRM ve otomasyon sistemleri.',
      Icon: Code2,
      color: '#8B5CF6',
      features: [
        'İş Analizi & Danışmanlık',
        'Özel ERP & CRM Sistemleri',
        'API Geliştirme & Entegrasyon',
        'Otomasyon Çözümleri',
        'Bulut Altyapı & DevOps',
      ],
      MockupComponent: () => (
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 bg-black/30 border-b border-white/5">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-white/40 text-sm ml-2">~/custom-software</span>
          </div>
          <div className="p-6 font-mono text-sm">
            <div className="space-y-2">
              <div><span className="text-[#A855F7]">const</span> <span className="text-white">solution</span> <span className="text-[#38BDF8]">=</span> <span className="text-white">{`{`}</span></div>
              <div className="pl-4"><span className="text-[#10B981]">name</span><span className="text-white">: </span><span className="text-[#FBBF24]">"Özel Yazılım"</span><span className="text-white">,</span></div>
              <div className="pl-4"><span className="text-[#10B981]">scalable</span><span className="text-white">: </span><span className="text-[#A855F7]">true</span></div>
              <div><span className="text-white">{`}`};</span></div>
            </div>
          </div>
        </div>
      ),
    },
  ], [])

  return (
    <>
      <main className="relative min-h-screen">
        {/* Floating Background Animation */}
        <FloatingBackground />
        
        {/* Hero */}
        <HeroSection />

      {/* Services */}
      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              İşletmenizi dijital dünyada öne çıkaracak kapsamlı çözümler sunuyoruz.
            </p>
          </div>

          {/* Service Cards */}
          <div className="divide-y divide-white/5">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                index={index}
                title={service.title}
                description={service.description}
                Icon={service.Icon}
                color={service.color}
                features={service.features}
                mockup={<service.MockupComponent />}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8]/10 via-[#A855F7]/10 to-[#EC4899]/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-gradient-to-r from-[#38BDF8]/10 to-[#A855F7]/10 border border-[#38BDF8]/20">
            <MessageCircle className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-white/70 text-sm">Ücretsiz Danışmanlık</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Projenizi{' '}
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent">
              Hayata Geçirelim
            </span>
          </h2>

          <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto">
            Fikirlerinizi dinliyor, ihtiyaçlarınızı analiz ediyor ve size en uygun 
            dijital çözümü sunuyoruz.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp ile İletişim
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="mailto:info@arlanmedya.com"
              className="group flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              E-posta Gönder
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}