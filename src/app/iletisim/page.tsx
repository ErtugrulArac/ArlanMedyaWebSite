'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
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
  ChevronRight
} from 'lucide-react'
import { SiInstagram, SiX, SiLinkedin, SiWhatsapp } from 'react-icons/si'
import Footer from '../components/footer'

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', company: '', phone: '', service: '', budget: '', message: '' })
    }, 4000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const services = [
    'Web Sitesi & Web Uygulama',
    'Mobil Uygulama (iOS/Android)',
    'E-Ticaret Platformu',
    'Kurumsal Yazılım',
    'UI/UX Tasarım',
    'SEO & Dijital Pazarlama',
    'Bakım & Destek',
    'Danışmanlık'
  ]

  const budgetRanges = [
    '₺10.000 - ₺25.000',
    '₺25.000 - ₺50.000',
    '₺50.000 - ₺100.000',
    '₺100.000 - ₺250.000',
    '₺250.000+'
  ]

  const features = [
    { icon: Zap, title: 'Hızlı Yanıt', desc: '2 saat içinde' },
    { icon: Shield, title: 'Güvenli', desc: 'NDA korumalı' },
    { icon: Clock, title: '7/24', desc: 'Destek hattı' },
  ]

  return (
    <>
      <div className="min-h-screen pt-28 pb-12 sm:pt-36 sm:pb-20 relative overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#38BDF8] rounded-full blur-[200px] opacity-[0.04]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#A855F7] rounded-full blur-[180px] opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-4">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#38BDF8] via-[#A855F7] to-[#EC4899]">
              Birlikte Çalışalım
            </span>
          </h1>

          <div className="mx-auto mb-4 w-24 h-1 rounded-full bg-gradient-to-r from-[#38BDF8] via-[#A855F7] to-[#EC4899] opacity-90" />

          <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Projenizi detaylı anlatın — size özel, uygulanabilir ve ölçeklenebilir çözümler sunalım.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Side - Contact Info */}
          <motion.div 
            className="lg:col-span-4 space-y-4 order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            {/* Contact Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <h3 className="text-white font-semibold mb-4">İletişim</h3>
              
              <div className="space-y-3">
                <a 
                  href="mailto:info@arlanmedya.com" 
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

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/40 text-xs">Konum</p>
                    <p className="text-white text-sm font-medium">İstanbul, Türkiye</p>
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
                  { icon: SiInstagram, href: 'https://instagram.com/arlanmedya' },
                  { icon: SiX, href: 'https://twitter.com/arlanmedya' },
                  { icon: SiLinkedin, href: 'https://linkedin.com/company/arlanmedya' },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
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
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
            className="lg:col-span-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] relative overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/30 to-transparent" />

              {isSubmitted ? (
                <motion.div 
                  className="flex flex-col items-center justify-center py-20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#10B981]/20 border border-[#10B981]/30 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-[#10B981]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Talebiniz Alındı</h3>
                  <p className="text-white/50 text-center text-sm">En kısa sürede sizinle iletişime geçeceğiz</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/10 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-[#38BDF8]" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-white">Proje Talebi</h2>
                      <p className="text-white/40 text-xs">Tüm alanları doldurun</p>
                    </div>
                  </div>

                  {/* Row 1: Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Adınız Soyadınız"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#38BDF8]/40 focus:bg-white/[0.05] transition-all"
                      />
                      <User className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${focusedField === 'name' ? 'text-[#38BDF8]' : 'text-white/20'}`} />
                    </div>

                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="E-posta Adresiniz"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#38BDF8]/40 focus:bg-white/[0.05] transition-all"
                      />
                      <Mail className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${focusedField === 'email' ? 'text-[#38BDF8]' : 'text-white/20'}`} />
                    </div>
                  </div>

                  {/* Row 2: Company & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative group">
                      <input
                        type="text"
                        name="company"
                        placeholder="Şirket Adı (Opsiyonel)"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#38BDF8]/40 focus:bg-white/[0.05] transition-all"
                      />
                      <Building2 className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${focusedField === 'company' ? 'text-[#38BDF8]' : 'text-white/20'}`} />
                    </div>

                    <div className="relative group">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Telefon Numaranız"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#38BDF8]/40 focus:bg-white/[0.05] transition-all"
                      />
                      <Phone className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${focusedField === 'phone' ? 'text-[#38BDF8]' : 'text-white/20'}`} />
                    </div>
                  </div>

                  {/* Row 3: Service & Budget */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm focus:outline-none focus:border-[#38BDF8]/40 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer"
                      style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.3)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, 
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'right 0.75rem center', 
                        backgroundSize: '1.25rem' 
                      }}
                    >
                      <option value="" className="bg-slate-900 text-white/50">Hizmet Seçin</option>
                      {services.map((s, i) => (
                        <option key={i} value={s} className="bg-slate-900">{s}</option>
                      ))}
                    </select>

                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm focus:outline-none focus:border-[#38BDF8]/40 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer"
                      style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.3)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, 
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'right 0.75rem center', 
                        backgroundSize: '1.25rem' 
                      }}
                    >
                      <option value="" className="bg-slate-900 text-white/50">Bütçe Aralığı (Opsiyonel)</option>
                      {budgetRanges.map((b, i) => (
                        <option key={i} value={b} className="bg-slate-900">{b}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Projenizi kısaca anlatın... Ne yapmak istiyorsunuz? Zaman çizelgeniz nedir?"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#38BDF8]/40 focus:bg-white/[0.05] transition-all resize-none"
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-medium text-white flex items-center justify-center gap-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90"
                    style={{
                      background: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%)',
                      boxShadow: '0 8px 32px -8px rgba(56, 189, 248, 0.4)'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
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
                    Göndererek gizlilik politikamızı kabul etmiş olursunuz
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
