'use client'

import React, { useCallback, useMemo, useState, useEffect } from 'react'
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  Send,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  User,
  Building2,
  CheckCircle2,
  ArrowUpRight,
  Zap,
  Shield,
  Clock,
  ChevronRight,
  Calendar,
  Briefcase,
  Headphones,
  FileText,
  Star,
} from 'lucide-react'
import { SiInstagram, SiX, SiLinkedin, SiWhatsapp, SiGoogle } from 'react-icons/si'
import Footer from '../components/footer'
import KVKKModal from '../components/ui/kvkk-modal'
import { CustomSelect } from '../components/ui/custom-select'
import { useLoading } from '../context/LoadingContext'

export default function IletisimPage() {
  const router = useRouter()
  const { setIsLoading } = useLoading()
  const reduce = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const [isKvkkOpen, setIsKvkkOpen] = useState(false)
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    topic: '',
    service: '',
    budget: '',
    timeline: '',
    preferredContact: 'E-posta',
    message: '',
    website: '', // honeypot
  })

  const [consents, setConsents] = useState({
    kvkk: false,
    marketing: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = useMemo(
    () => [
      'Web Sitesi & Web Uygulama',
      'Mobil Uygulama (iOS/Android)',
      'E-Ticaret Platformu',
      'Kurumsal Yazılım',
      'UI/UX Tasarım',
      'SEO & Dijital Pazarlama',
      'Bakım & Destek',
      'Danışmanlık',
    ],
    []
  )

  const budgetRanges = useMemo(
    () => ['₺10.000 - ₺25.000', '₺25.000 - ₺50.000', '₺50.000 - ₺100.000', '₺100.000 - ₺250.000', '₺250.000+'],
    []
  )

  const topics = useMemo(
    () => [
      { label: 'Yeni Proje / Teklif', value: 'Yeni Proje / Teklif', icon: Briefcase },
      { label: 'Destek / Bakım', value: 'Destek / Bakım', icon: Headphones },
      { label: 'İş Ortaklığı', value: 'İş Ortaklığı', icon: Building2 },
      { label: 'Diğer', value: 'Diğer', icon: FileText },
    ],
    []
  )

  const timelines = useMemo(() => ['Acil (1-2 hafta)', 'Kısa (2-4 hafta)', 'Orta (1-2 ay)', 'Uzun (3 ay+)', 'Esnek'], [])

  const features = useMemo(
    () => [
      { icon: Zap, title: 'Hızlı Yanıt', desc: '2 saat içinde' },
      { icon: Shield, title: 'Güvenli', desc: 'NDA opsiyonlu' },
      { icon: Clock, title: '7/24', desc: 'Destek hattı' },
    ],
    []
  )

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    // Mobilde daha hızlı güncelleme
    if (isMobile) {
      setFormData((prev) => ({ ...prev, [name]: value }))
    } else {
      requestAnimationFrame(() => {
        setFormData((prev) => ({ ...prev, [name]: value }))
      })
    }
  }, [isMobile])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()

      // Bot koruması
      if (formData.website) return

      // KVKK zorunlu
      if (!consents.kvkk) {
        setIsKvkkOpen(true)
        return
      }

      setIsSubmitting(true)

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, consents }),
        })

        const result = await response.json()

        if (!response.ok) {
          throw new Error(result.error || 'Bir hata oluştu')
        }

        // Global loading'i aktif et ve teşekkürler sayfasına yönlendir
        setIsLoading(true)
        router.push('/tesekkurler')
      } catch (error) {
        console.error('Form submission error:', error)
        alert(error instanceof Error ? error.message : 'Bir hata oluştu. Lütfen tekrar deneyin.')
        setIsSubmitting(false)
      }
    },
    [consents.kvkk, formData, router, setIsLoading]
  )

  const motionIn = (delay = 0) =>
    reduce || isMobile || !isClient
      ? { initial: undefined, animate: undefined, transition: undefined }
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay },
        }

  // ✅ Footer'ı da client hazır olduktan sonra render ediyoruz (tasarım aynı, teknik daha stabil)
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Yükleniyor...</div>
      </div>
    )
  }

  return (
    <LazyMotion features={domAnimation}>
      <>
        <div className="min-h-screen pt-28 pb-12 sm:pt-36 sm:pb-20 relative overflow-hidden">
          {/* Minimal Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#38BDF8] rounded-full blur-[200px] opacity-[0.04]" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#A855F7] rounded-full blur-[180px] opacity-[0.03]" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <m.div className="text-center mb-10 sm:mb-14" {...motionIn(0)}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-4 ibm-plex-serif-bold">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#38BDF8] via-[#A855F7] to-[#EC4899]">
                  Birlikte Çalışalım
                </span>
              </h1>

              <div className="mx-auto mb-4 w-24 h-1 rounded-full bg-gradient-to-r from-[#38BDF8] via-[#A855F7] to-[#EC4899] opacity-90" />

              <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                Projenizi detaylı anlatın — size özel, uygulanabilir ve ölçeklenebilir çözümler sunalım.
              </p>
            </m.div>

            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
              {/* Left */}
              <m.div className="lg:col-span-4 space-y-4 order-2 lg:order-1" {...motionIn(0.05)}>
                {/* Contact Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <h3 className="text-white font-semibold mb-4">İletişim</h3>

                  <div className="space-y-3">
                    <a
                      href="mailto:info@arlanmedya.com"
                      title="E-posta Gönder"
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-[#38BDF8]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/40 text-xs">E-posta</p>
                        <p className="text-white text-sm font-medium truncate">info@arlanmedya.com</p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#38BDF8] transition-colors" />
                    </a>

                    <a
                      href="tel:+905307464899"
                      title="Bizi Arayın"
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#A855F7]/10 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-[#A855F7]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/40 text-xs">Telefon</p>
                        <p className="text-white text-sm font-medium">+90 530 746 48 99</p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#A855F7] transition-colors" />
                    </a>

                    {/* Address + Work Hours */}
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-[#10B981]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white/40 text-xs">Konum</p>
                          <p className="text-white text-sm font-medium">İstanbul, Türkiye</p>
                        </div>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Istanbul"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-white/50 hover:text-[#10B981] transition-colors"
                        >
                          Haritada aç
                        </a>
                      </div>

                      <div className="mt-3 flex items-center justify-between rounded-lg bg-white/[0.02] border border-white/[0.05] px-3 py-2">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-white/30" />
                          <span className="text-white/50 text-xs">Çalışma Saatleri</span>
                        </div>
                        <span className="text-white/70 text-xs font-medium">Pzt-Cmt 10:00–19:00</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-2">
                  {features.map((f, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
                      <f.icon className="w-4 h-4 text-[#38BDF8] mx-auto mb-1" />
                      <p className="text-white text-xs font-medium">{f.title}</p>
                      <p className="text-white/40 text-[10px]">{f.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-white/50 text-sm">Takip edin</span>
                  <div className="flex gap-2">
                    {[
                      { icon: SiInstagram, href: 'https://instagram.com/arlanmedya', label: 'Instagram' },
                      { icon: SiX, href: 'https://twitter.com/arlanmedya', label: 'Twitter' },
                      { icon: SiLinkedin, href: 'https://linkedin.com/company/arlanmedya', label: 'LinkedIn' },
                      { icon: SiGoogle, href: 'https://www.google.com/search?q=Arlan+Medya', label: 'Google İşletme Profilimiz' },
                    ].map((s, i) => (
                      <a
                        key={i}
                        href={s.href}
                        title={s.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-[#38BDF8]/20 flex items-center justify-center transition-colors group"
                      >
                        <s.icon className="w-3.5 h-3.5 text-white/50 group-hover:text-[#38BDF8]" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/905307464899"
                  title="WhatsApp ile İletişim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/15 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <SiWhatsapp className="w-5 h-5 text-[#25D366]" />
                    <span className="text-white font-medium text-sm">WhatsApp ile ulaşın</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#25D366] group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Google Business CTA */}
                <a
                  href="https://www.google.com/search?q=Arlan+Medya&rlz=1C1GCEU_trTR832TR832&oq=Arlan+Medya&aqs=chrome..69i57j69i60.1504j0j4&sourceid=chrome&ie=UTF-8#lrd=0x14caa3f4b8b8b8b8:0x1234567890abcdef,1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#4285F4]/10 border border-[#4285F4]/20 hover:bg-[#4285F4]/15 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <SiGoogle className="w-5 h-5 text-[#4285F4]" />
                    <div className="flex flex-col">
                      <span className="text-white font-medium text-sm">Google'da Değerlendir</span>
                      <span className="text-white/40 text-xs">Yorumunuz bizim için değerli</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-[#FFD700] fill-current" />
                      ))}
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#4285F4] group-hover:translate-x-1 transition-transform ml-1" />
                  </div>
                </a>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06]">
                  <div className="px-4 py-3 flex items-center justify-between">
                    <span className="text-white/60 text-sm font-medium">Harita</span>
                    <button onClick={() => setIsMapLoaded(true)} className="text-white/50 hover:text-[#38BDF8] text-xs transition-colors">
                      {isMapLoaded ? 'Yüklendi' : 'Haritayı Yükle'}
                    </button>
                  </div>
                  <div className="h-[220px]">
                    {isMapLoaded ? (
                      <iframe
                        title="Harita"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                        src="https://www.google.com/maps?q=Istanbul&output=embed"
                      />
                    ) : (
                      <div
                        className="w-full h-full bg-white/[0.02] flex items-center justify-center cursor-pointer hover:bg-white/[0.04] transition-colors"
                        onClick={() => setIsMapLoaded(true)}
                      >
                        <div className="text-center">
                          <MapPin className="w-8 h-8 text-white/30 mx-auto mb-2" />
                          <p className="text-white/50 text-sm">Haritayı görmek için tıklayın</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </m.div>

              {/* Right */}
              <m.div className="lg:col-span-8 order-1 lg:order-2" {...motionIn(0.12)}>
                <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/30 to-transparent" />

                  {isSubmitted ? (
                    <m.div
                      className="flex flex-col items-center justify-center py-20"
                      initial={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                      animate={reduce ? undefined : { opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-[#10B981]/20 border border-[#10B981]/30 flex items-center justify-center mb-5">
                        <CheckCircle2 className="w-8 h-8 text-[#10B981]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Talebiniz Alındı</h3>
                      <p className="text-white/50 text-center text-sm">En kısa sürede sizinle iletişime geçeceğiz</p>
                    </m.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/10 flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-[#38BDF8]" />
                        </div>
                        <div>
                          <h2 className="text-lg font-semibold text-white">Proje Talebi</h2>
                          <p className="text-white/40 text-xs">Lütfen alanları doldurun</p>
                        </div>
                      </div>

                      {/* Honeypot */}
                      <input type="text" name="website" value={formData.website} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

                      {/* Topic + Contact */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <CustomSelect
                          name="topic"
                          options={topics.map(t => ({ value: t.value, label: t.label, icon: <t.icon className="w-4 h-4" /> }))}
                          value={formData.topic}
                          onChange={(value) => setFormData(prev => ({ ...prev, topic: value }))}
                          placeholder="Konu Seçin"
                          required
                          className="flex-1"
                        />

                        <CustomSelect
                          name="preferredContact"
                          options={[
                            { value: 'E-posta', label: 'İletişim Tercihi: E-posta', icon: <Mail className="w-4 h-4" /> },
                            { value: 'Telefon', label: 'İletişim Tercihi: Telefon', icon: <Phone className="w-4 h-4" /> },
                            { value: 'WhatsApp', label: 'İletişim Tercihi: WhatsApp', icon: <SiWhatsapp className="w-4 h-4" /> }
                          ]}
                          value={formData.preferredContact}
                          onChange={(value) => setFormData(prev => ({ ...prev, preferredContact: value }))}
                          placeholder="İletişim Tercihi"
                          className="flex-1"
                        />
                      </div>

                      {/* Name + Email */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="relative group">
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Adınız Soyadınız"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#38BDF8]/40 focus:bg-white/[0.05] transition-all"
                          />
                          <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 transition-colors group-focus-within:text-[#38BDF8]" />
                        </div>

                        <div className="relative group">
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="E-posta Adresiniz"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#38BDF8]/40 focus:bg-white/[0.05] transition-all"
                          />
                          <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 transition-colors group-focus-within:text-[#38BDF8]" />
                        </div>
                      </div>

                      {/* Company + Phone */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="relative group">
                          <input
                            type="text"
                            name="company"
                            placeholder="Şirket Adı (Opsiyonel)"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#38BDF8]/40 focus:bg-white/[0.05] transition-all"
                          />
                          <Building2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 transition-colors group-focus-within:text-[#38BDF8]" />
                        </div>

                        <div className="relative group">
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Telefon Numaranız"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#38BDF8]/40 focus:bg-white/[0.05] transition-all"
                          />
                          <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 transition-colors group-focus-within:text-[#38BDF8]" />
                        </div>
                      </div>

                      {/* Service + Budget */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <CustomSelect
                          name="service"
                          options={services.map(s => ({ value: s, label: s }))}
                          value={formData.service}
                          onChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                          placeholder="Hizmet Seçin"
                          required
                          icon={<Briefcase className="w-4 h-4" />}
                          className="flex-1"
                        />

                        <CustomSelect
                          name="budget"
                          options={budgetRanges.map(b => ({ value: b, label: b }))}
                          value={formData.budget}
                          onChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                          placeholder="Bütçe Aralığı (Opsiyonel)"
                          icon={<ChevronRight className="w-4 h-4 rotate-90" />}
                          className="flex-1"
                        />
                      </div>

                      {/* Timeline */}
                      <CustomSelect
                        name="timeline"
                        options={timelines.map(t => ({ value: t, label: t }))}
                        value={formData.timeline}
                        onChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}
                        placeholder="Zaman Çizelgesi (Opsiyonel)"
                        icon={<Calendar className="w-4 h-4" />}
                      />

                      {/* Message */}
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Projenizi kısaca anlatın... Hedefiniz nedir? Zaman çizelgeniz? Örnek site/brief linki varsa ekleyin."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#38BDF8]/40 focus:bg-white/[0.05] transition-all resize-none"
                      />

                      {/* Consents */}
                      <div className="space-y-3 rounded-xl bg-white/[0.02] border border-white/[0.06] p-4">
                        <label className="flex items-start gap-3 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={consents.kvkk}
                            onChange={(e) => setConsents((p) => ({ ...p, kvkk: e.target.checked }))}
                            className="mt-0.5 h-4 w-4 accent-[#38BDF8]"
                            required
                          />
                          <span className="text-white/60 text-xs leading-relaxed">
                            <button
                              type="button"
                              onClick={() => setIsKvkkOpen(true)}
                              className="text-white/85 font-medium underline decoration-white/20 underline-offset-2 hover:text-[#38BDF8] hover:decoration-[#38BDF8]/40 transition-colors"
                            >
                              KVKK Aydınlatma Metni
                            </button>
                            <span className="text-white/60">’ni okudum, kişisel verilerimin iletişim amaçlı işlenmesini kabul ediyorum.</span>{' '}
                            <span className="text-white/30">(Zorunlu)</span>
                          </span>
                        </label>

                        <label className="flex items-start gap-3 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={consents.marketing}
                            onChange={(e) => setConsents((p) => ({ ...p, marketing: e.target.checked }))}
                            className="mt-0.5 h-4 w-4 accent-[#A855F7]"
                          />
                          <span className="text-white/60 text-xs leading-relaxed">
                            Kampanya/duyuru amaçlı bilgilendirme almak istiyorum. <span className="text-white/30">(Opsiyonel)</span>
                          </span>
                        </label>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting || !consents.kvkk}
                        className="w-full py-4 rounded-xl font-medium text-white flex items-center justify-center gap-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90"
                        style={{
                          background: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%)',
                          boxShadow: '0 8px 32px -8px rgba(56, 189, 248, 0.4)',
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            <span>Gönderiliyor...</span>
                          </>
                        ) : (
                          <>
                            <span>Talebi Gönder</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-white/30 text-xs">
                        Göndererek gizlilik politikamızı kabul etmiş olursunuz. (Kurumsal süreçler için NDA talep edebilirsiniz.)
                      </p>
                    </form>
                  )}
                </div>
              </m.div>
            </div>
          </div>
        </div>

        {/* KVKK Modal */}
        <KVKKModal
          isOpen={isKvkkOpen}
          onClose={() => setIsKvkkOpen(false)}
          onAccept={() => {
            setConsents((p) => ({ ...p, kvkk: true }))
            setIsKvkkOpen(false)
          }}
        />

        {/* ✅ TEK style jsx: nested yok */}
        <style jsx>{`
          .contact-select {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.3)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 0.75rem center;
            background-size: 1.25rem;
          }
        `}</style>

        <Footer />
      </>
    </LazyMotion>
  )
}
