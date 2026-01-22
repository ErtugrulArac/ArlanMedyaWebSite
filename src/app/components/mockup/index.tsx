'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Sparkles, Smartphone, Tablet } from 'lucide-react'

// Phone Mockup Component
const PhoneMockup = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Soft Glow Behind */}
      <div 
        className="absolute -inset-4 -z-10 rounded-[3.5rem] opacity-60 blur-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(168, 85, 247, 0.15))'
        }}
      />

      {/* Phone Frame with Hover Effect */}
      <motion.div 
        className="relative"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Subtle Border Glow */}
        <div 
          className="absolute -inset-[1px] rounded-[3rem] opacity-50"
          style={{
            background: 'linear-gradient(135deg, #38BDF8, #A855F7)',
          }}
        />

        {/* Phone Frame */}
        <div 
          className="relative w-[260px] sm:w-[280px] md:w-[300px] h-[540px] sm:h-[580px] md:h-[620px] rounded-[3rem] p-3"
          style={{
            background: 'linear-gradient(145deg, #1a1a2e 0%, #12121f 50%, #0a0a12 100%)',
            boxShadow: `
              0 40px 80px -20px rgba(0, 0, 0, 0.6),
              0 20px 40px -20px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.1)
            `
          }}
        >
          {/* Dynamic Island */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
            <div 
              className="w-24 h-6 bg-black rounded-full"
              style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }}
            >
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#1a1a2e]">
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-[#0c4a6e] to-[#1e3a5f]" />
              </div>
            </div>
          </div>
        
          {/* Screen */}
          <div 
            className="relative w-full h-full rounded-[2.3rem] overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.4)'
            }}
          >
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-7 pt-2 z-10">
              <span className="text-white/80 text-xs font-medium">9:41</span>
              <div className="flex items-center gap-1">
                <div className="flex gap-0.5">
                  <div className="w-1 h-2.5 bg-white/80 rounded-sm" />
                  <div className="w-1 h-3 bg-white/80 rounded-sm" />
                  <div className="w-1 h-3.5 bg-white/80 rounded-sm" />
                  <div className="w-1 h-4 bg-white/80 rounded-sm" />
                </div>
                <div className="ml-1 w-6 h-3 border border-white/80 rounded-sm">
                  <div className="w-4 h-full bg-green-500 rounded-sm" />
                </div>
              </div>
            </div>

            {/* App Content */}
            <div className="relative h-full pt-14 px-4 pb-6">
              {/* App Header */}
              <motion.div
                className="mb-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] flex items-center justify-center">
                    <Sparkles size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Arlan Medya</h4>
                    <p className="text-white/50 text-xs">Dashboard</p>
                  </div>
                </div>
              </motion.div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-2.5 mb-3">
                <motion.div
                  className="p-2.5 rounded-xl"
                  style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.2)' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-white/50 text-[9px] mb-0.5">Toplam Erişim</p>
                  <p className="text-white font-bold text-base">2.4M</p>
                  <p className="text-green-400 text-[9px]">↑ 24%</p>
                </motion.div>
                <motion.div
                  className="p-2.5 rounded-xl"
                  style={{ background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.2)' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-white/50 text-[9px] mb-0.5">Dönüşüm</p>
                  <p className="text-white font-bold text-base">12.8%</p>
                  <p className="text-green-400 text-[9px]">↑ 18%</p>
                </motion.div>
              </div>

              {/* Chart Area */}
              <motion.div
                className="p-3 rounded-xl mb-3"
                style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-white/50 text-[9px] mb-2">Performans</p>
                <div className="flex items-end gap-1.5 h-16">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        height: `${height}%`,
                        background: `linear-gradient(to top, #38BDF8, #A855F7)`
                      }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Recent Activity */}
              <motion.div
                className="space-y-1.5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-white/50 text-[9px] mb-1.5">Son Aktiviteler</p>
                {[
                  { title: "Kampanya Başlatıldı", time: "2 dk önce", color: "#10B981" },
                  { title: "Yeni Lead Geldi", time: "15 dk önce", color: "#38BDF8" },
                  { title: "Rapor Hazırlandı", time: "1 saat önce", color: "#A855F7" }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-2 rounded-lg"
                    style={{ background: 'rgba(255, 255, 255, 0.02)' }}
                  >
                    <div 
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: item.color }}
                    />
                    <div className="flex-1">
                      <p className="text-white text-[10px]">{item.title}</p>
                    </div>
                    <p className="text-white/40 text-[8px]">{item.time}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Screen Reflection */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)'
              }}
            />
          </div>

          {/* Side Buttons */}
          <div 
            className="absolute -right-1 top-28 w-1 h-10 rounded-r-sm"
            style={{ background: 'linear-gradient(90deg, #1a1a2e, #252538)' }}
          />
          <div 
            className="absolute -right-1 top-42 w-1 h-10 rounded-r-sm"
            style={{ background: 'linear-gradient(90deg, #1a1a2e, #252538)' }}
          />
          <div 
            className="absolute -left-1 top-32 w-1 h-14 rounded-l-sm"
            style={{ background: 'linear-gradient(270deg, #1a1a2e, #252538)' }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

// Tablet Mockup Component
const TabletMockup = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Soft Glow Behind */}
      <div 
        className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-50 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(56, 189, 248, 0.1))'
        }}
      />

      {/* Tablet Container with Hover Effect */}
      <motion.div
        className="relative"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Subtle Border Glow */}
        <div 
          className="absolute -inset-[1px] rounded-[2rem] opacity-40"
          style={{
            background: 'linear-gradient(135deg, #A855F7, #38BDF8)',
          }}
        />

        {/* Tablet Frame */}
        <div 
          className="relative w-[380px] sm:w-[440px] md:w-[500px] h-[280px] sm:h-[320px] md:h-[360px] rounded-[2rem] overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #1a1a2e 0%, #12121f 50%, #0a0a12 100%)',
            boxShadow: `
              0 30px 60px -15px rgba(0, 0, 0, 0.5),
              0 15px 30px -15px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.1)
            `,
            padding: '12px'
          }}
        >
          {/* Camera */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
            <div className="w-2 h-2 rounded-full bg-[#0a0a12] border border-[#2a2a3e]" />
          </div>

          {/* Screen Content */}
          <div 
            className="w-full h-full rounded-[1.5rem] overflow-hidden"
            style={{ 
              background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)'
            }}
          >
            {/* Browser Chrome */}
            <div className="h-7 bg-[#1E293B] flex items-center px-3 gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 mx-3">
                <div className="h-4 rounded bg-white/5 flex items-center px-2">
                  <span className="text-white/40 text-[9px]">arlanmedya.com/dashboard</span>
                </div>
              </div>
            </div>

            {/* Website Content */}
            <div className="p-3 h-[calc(100%-1.75rem)]">
              <div className="flex gap-3 h-full">
                {/* Sidebar */}
                <motion.div
                  className="w-12 rounded-lg p-1.5 flex flex-col items-center gap-2"
                  style={{ background: 'rgba(255, 255, 255, 0.03)' }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] flex items-center justify-center">
                    <Sparkles size={14} className="text-white" />
                  </div>
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded bg-white/5" />
                  ))}
                </motion.div>

                {/* Main Content */}
                <div className="flex-1 space-y-2">
                  {/* Header */}
                  <motion.div
                    className="flex justify-between items-center"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div>
                      <h3 className="text-white font-semibold text-xs">Hoş Geldiniz</h3>
                      <p className="text-white/40 text-[8px]">İşte bugünkü özet</p>
                    </div>
                    <div className="px-2 py-1 rounded bg-[#38BDF8]/20 border border-[#38BDF8]/30">
                      <span className="text-[#38BDF8] text-[8px] font-medium">Rapor İndir</span>
                    </div>
                  </motion.div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-4 gap-1.5">
                    {[
                      { label: "Ziyaretçi", value: "24.5K", change: "+12%" },
                      { label: "Görüntüleme", value: "89.2K", change: "+8%" },
                      { label: "Dönüşüm", value: "3.2K", change: "+24%" },
                      { label: "Gelir", value: "₺125K", change: "+18%" }
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        className="p-1.5 rounded"
                        style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.08 }}
                      >
                        <p className="text-white/40 text-[7px]">{stat.label}</p>
                        <p className="text-white font-bold text-[10px]">{stat.value}</p>
                        <p className="text-green-400 text-[7px]">{stat.change}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart */}
                  <motion.div
                    className="flex-1 p-2 rounded-lg"
                    style={{ background: 'rgba(255, 255, 255, 0.02)' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <p className="text-white/50 text-[8px]">Trafik Analizi</p>
                      <div className="flex gap-1">
                        {["7G", "30G", "90G"].map((period, i) => (
                          <span 
                            key={i}
                            className={`text-[7px] px-1.5 py-0.5 rounded ${i === 1 ? 'bg-[#38BDF8]/20 text-[#38BDF8]' : 'text-white/40'}`}
                          >
                            {period}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Mini Chart */}
                    <svg className="w-full h-20" viewBox="0 0 400 80">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <motion.path
                        d="M0,60 Q50,45 100,55 T200,30 T300,40 T400,15"
                        fill="none"
                        stroke="#38BDF8"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                      />
                      <motion.path
                        d="M0,60 Q50,45 100,55 T200,30 T300,40 T400,15 L400,80 L0,80 Z"
                        fill="url(#chartGradient)"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Screen Reflection */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 40%)'
              }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Feature List Item
const FeatureItem = ({ 
  title, 
  description, 
  delay = 0 
}: { 
  title: string
  description: string
  delay?: number 
}) => {
  return (
    <motion.div
      className="flex gap-4"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex-shrink-0 mt-1">
        <div className="w-6 h-6 rounded-full bg-[#38BDF8]/20 flex items-center justify-center">
          <CheckCircle2 size={14} className="text-[#38BDF8]" />
        </div>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-1">{title}</h4>
        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

// Main Mockup Section
export default function MockupSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(ellipse, rgba(56, 189, 248, 0.08), transparent 70%)' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ 
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              color: '#38BDF8'
            }}
          >
            Yazılım Çözümleri
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Kurumsal Yönetim
            <span className="block mt-2 bg-gradient-to-r from-[#38BDF8] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent">
              Platformunuz
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Arlan Medya'nın geliştirdiği modern yönetim panelleriniz ile işletme verileriniz tamamen kontrolde.
          </p>
        </motion.div>

        {/* Mobile Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-32">
          {/* Phone Mockup */}
          <div className="flex-1 flex justify-center">
            <PhoneMockup />
          </div>

          {/* Content */}
          <div className="flex-1 max-w-xl">
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] flex items-center justify-center">
                <Smartphone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Mobil Uygulama</h3>
                <p className="text-white/50">iOS & Android</p>
              </div>
            </motion.div>

            <motion.p
              className="text-white/70 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Kullanıcılarınızın elinin altında olan, hızlı ve sezgisel mobil deneyimler oluşturuyoruz.
            </motion.p>

            <div className="space-y-5">
              <FeatureItem 
                title="Native Performans"
                description="React Native ile iOS ve Android'de native hız ve akıcılık."
                delay={0.2}
              />
              <FeatureItem 
                title="Offline Destek"
                description="İnternet bağlantısı olmadan da sorunsuz çalışma."
                delay={0.3}
              />
              <FeatureItem 
                title="Push Bildirimleri"
                description="Kullanıcılarınızla anlık iletişim kurma imkanı."
                delay={0.4}
              />
            </div>
          </div>
        </div>

        {/* Desktop Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          {/* Tablet Mockup */}
          <div className="flex-1 flex justify-center">
            <TabletMockup />
          </div>

          {/* Content */}
          <div className="flex-1 max-w-xl">
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#A855F7] to-[#7C3AED] flex items-center justify-center">
                <Tablet size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Yönetim Paneli</h3>
                <p className="text-white/50">Tam Kontrol & İzleme</p>
              </div>
            </motion.div>

            <motion.p
              className="text-white/70 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Arlan Medya yazılımları ile işletme verilerinizi tablet, telefon ve bilgisayardan real-time izleyebilirsiniz.
            </motion.p>

            <div className="space-y-5">
              <FeatureItem 
                title="Real-Time Analytics"
                description="Canlı veri görselleri ve performans metrikleri"
                delay={0.2}
              />
              <FeatureItem 
                title="Responsive Design"
                description="Tüm cihazlarda mükemmel görünüm ve işlevsellik"
                delay={0.3}
              />
              <FeatureItem 
                title="Veri Dışa Aktarma"
                description="Raporları PDF, Excel ve CSV formatlarında indirin"
                delay={0.4}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Yazılım Geliştirme & Dijital Yönetimi",
            "provider": {
              "@type": "Organization",
              "name": "Arlan Medya",
              "url": "https://arlanmedya.com"
            },
            "description": "Yazılım geliştirme, web aplikasyonları ve dijital yönetim çözümleri",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Yazılım & Dijital Yönetim Hizmetleri",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Yazılım Geliştirme",
                    "description": "React, Node.js ve TypeScript ile modern web aplikasyonları geliştirme"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Dijital Yönetim",
                    "description": "SEO, dijital pazarlama ve online varlık yönetimi"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Tasarım",
                    "description": "Kullanıcı dostu, modern web tasarımları ve UX/UI çözümleri"
                  }
                }
              ]
            }
          })
        }}
      />
    </section>
  )
}
