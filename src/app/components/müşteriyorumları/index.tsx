'use client'

import React, { useEffect, useState, useRef, useCallback, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'

// Testimonial Data - 20 Müşteri Yorumu
const testimonials = [
  {
    id: 1,
    name: "Mustafa Yıldırım",
    role: "Genel Müdür",
    company: "Ortadoğu Elektrik",
    rating: 5,
    text: "Ertuğrul Bey'e ve ekibine sonsuz teşekkürler! Kişisel ilgisi ve profesyonel yaklaşımı sayesinde sektörde çok daha görünür olduk. Sosyal medya yönetiminde gerçekten fark yarattılar.",
    highlight: "10x Marka Bilinirliği",
    color: "cyan"
  },
  {
    id: 2,
    name: "Elif Kaya",
    role: "Pazarlama Direktörü",
    company: "AkrTicaret",
    rating: 5,
    text: "Ertuğrul Bey her aşamada yanımızda oldu, ilgisi ve desteği için minnettarız. SEO çalışmalarıyla organik trafiğimizi 6 ayda 5 katına çıkardılar!",
    highlight: "5x Organik Trafik",
    color: "purple"
  },
  {
    id: 3,
    name: "Mehmet Demir",
    role: "Kurucu",
    company: "Mydectai",
    rating: 5,
    text: "Reklam kampanyalarında ROI'miz %450 arttı. Arlan Medya gerçek bir dijital partner, her kuruşun karşılığını aldık.",
    highlight: "%450 ROI Artışı",
    color: "emerald"
  },
  {
    id: 4,
    name: "Zeynep Arslan",
    role: "İşletme Sahibi",
    company: "Keyif Kahve",
    rating: 5,
    text: "Küçük bir işletme olarak dijital dünyada kaybolmuştuk. Arlan Medya sayesinde yerel müşterilerimize ulaşmayı başardık. Satışlarımız %200 arttı!",
    highlight: "%200 Satış Artışı",
    color: "orange"
  },
  {
    id: 5,
    name: "Hasan Çetin",
    role: "Yönetim Kurulu Başkanı",
    company: "Anadolu Makina",
    rating: 5,
    text: "B2B sektöründe dijital pazarlama zor diyorlardı. Arlan Medya'ya güvendik, yanılmadık. LinkedIn stratejileriyle ciddi iş bağlantıları kurduk.",
    highlight: "50+ B2B İş Ortağı",
    color: "cyan"
  },
  {
    id: 6,
    name: "Ayşe Yıldız",
    role: "E-Ticaret Müdürü",
    company: "Güzellik Dünyası",
    rating: 5,
    text: "Instagram ve TikTok yönetiminde harikalar yarattılar. Influencer işbirlikleriyle marka değerimiz katlandı. Genç kitleye ulaşmamızı sağladılar.",
    highlight: "500K+ Takipçi",
    color: "purple"
  },
  {
    id: 7,
    name: "Can Özkan",
    role: "CTO",
    company: "Teknoloji Vadisi",
    rating: 5,
    text: "Web sitemizin yenilenmesinde Ertuğrul Bey bizzat ilgilendi, her detayı takip etti. Sayfa yüklenme süremiz 4 saniyeden 0.8 saniyeye düştü. Teşekkürler!",
    highlight: "5x Hız Artışı",
    color: "emerald"
  },
  {
    id: 8,
    name: "Fatma Çelik",
    role: "Genel Müdür",
    company: "Sağlık Merkezi",
    rating: 5,
    text: "Sağlık sektöründe güven çok önemli. Arlan Medya içerik stratejisiyle hastalarımızın bize olan güvenini artırdı. Online randevu sayımız 3 katına çıktı.",
    highlight: "3x Online Randevu",
    color: "orange"
  },
  {
    id: 9,
    name: "Osman Kara",
    role: "Firma Sahibi",
    company: "Yıldız Otomotiv",
    rating: 5,
    text: "Showroom trafiğimiz dijital kampanyalar sayesinde %180 arttı. Ekibin çalışması ve profesyonelliği gerçekten takdire şayan.",
    highlight: "%180 Showroom Trafiği",
    color: "cyan"
  },
  {
    id: 10,
    name: "Burak Şahin",
    role: "Restoran Sahibi",
    company: "Anadolu Sofrası",
    rating: 5,
    text: "Yemeksepeti ve Getir entegrasyonlarıyla online siparişlerimiz patladı. Sosyal medya içerikleri müşterilerimizi çok etkiliyor.",
    highlight: "%350 Online Sipariş",
    color: "purple"
  },
  {
    id: 11,
    name: "Selin Koç",
    role: "Marka Yöneticisi",
    company: "Stil Moda",
    rating: 5,
    text: "Moda sektöründe rekabet çok yoğun. Arlan Medya'nın kreatif ekibi bizi rakiplerimizden ayıran içerikler üretti. E-ticaret satışlarımız %400 arttı.",
    highlight: "%400 E-Ticaret Artışı",
    color: "emerald"
  },
  {
    id: 12,
    name: "Ahmet Polat",
    role: "Kurucu Ortak",
    company: "Eğitim Portalı",
    rating: 5,
    text: "Ertuğrul Bey projeye en başından beri özel ilgi gösterdi. Online eğitim platformumuzun tanıtımında muhteşem bir iş çıkardılar, ilgisi için teşekkürler!",
    highlight: "100K+ Öğrenci",
    color: "orange"
  },
  {
    id: 13,
    name: "Serkan Yılmaz",
    role: "Firma Sahibi",
    company: "Usta Yapı Market",
    rating: 5,
    text: "Yerel SEO çalışmalarıyla 'yakınımdaki yapı market' aramalarında 1 numara olduk. Mağaza trafiğimiz ciddi oranda arttı.",
    highlight: "#1 Yerel SEO",
    color: "cyan"
  },
  {
    id: 14,
    name: "Deniz Aktaş",
    role: "Spa Müdürü",
    company: "Huzur Spa",
    rating: 5,
    text: "Instagram'da estetik bir sayfa oluşturdular. Rezervasyonlarımız %250 arttı. Görsel içerikler müşterilerimizi çok etkiliyor.",
    highlight: "%250 Rezervasyon",
    color: "purple"
  },
  {
    id: 15,
    name: "Murat Öztürk",
    role: "CEO",
    company: "Taşıma Lojistik",
    rating: 5,
    text: "Lojistik sektöründe B2B pazarlama zorlu. Arlan Medya LinkedIn ve email marketing ile ciddi kurumsal müşteriler kazandırdı.",
    highlight: "30+ Kurumsal Müşteri",
    color: "emerald"
  },
  {
    id: 16,
    name: "Gizem Acar",
    role: "Butik Sahibi",
    company: "Şık Butik",
    rating: 5,
    text: "Küçük bir butik olarak başladık, şimdi online satışlarımız mağazayı geçti. Arlan Medya'nın e-ticaret stratejisi harika çalıştı.",
    highlight: "Online > Mağaza Satışı",
    color: "orange"
  },
  {
    id: 17,
    name: "Ali Karaca",
    role: "Firma Sahibi",
    company: "Karaca Mobilya",
    rating: 5,
    text: "Ertuğrul Bey'in vizyonu ve ekibinin özverisi için teşekkürler! Pinterest ve Instagram stratejisiyle showroom ziyaretçilerimiz %300 arttı.",
    highlight: "%300 Showroom Ziyareti",
    color: "cyan"
  },
  {
    id: 18,
    name: "Hakan Demir",
    role: "Diş Hekimi",
    company: "Gülümseme Kliniği",
    rating: 5,
    text: "Sağlık sektöründe dijital pazarlama hassas bir konu. Arlan Medya etik ve etkili bir strateji oluşturdu. Hasta portföyümüz 2 katına çıktı.",
    highlight: "2x Hasta Portföyü",
    color: "purple"
  },
  {
    id: 19,
    name: "Pınar Öztürk",
    role: "Yoga Eğitmeni",
    company: "Denge Studio",
    rating: 5,
    text: "Online yoga derslerim için muhteşem bir dijital strateji oluşturdular. Ekibin çabası ve yaratıcılığı bizim için çok değerli.",
    highlight: "50K YouTube Abone",
    color: "emerald"
  },
  {
    id: 20,
    name: "İbrahim Koç",
    role: "Firma Sahibi",
    company: "Güven Elektrik",
    rating: 5,
    text: "Google Ads ve yerel SEO ile elektrikçi arayanların %60'ına ulaşıyoruz artık. Arlan Medya ekibine teşekkürler!",
    highlight: "%60 Pazar Payı",
    color: "orange"
  }
]

// Color variants for cards
const colorVariants = {
  cyan: {
    gradient: 'from-[#38BDF8]/10 to-cyan-600/5',
    border: 'border-[#38BDF8]/20',
    highlight: 'bg-[#38BDF8]/20 text-[#38BDF8]',
    star: 'text-[#38BDF8]',
    quote: 'text-[#38BDF8]/30',
    glow: 'rgba(56, 189, 248, 0.15)',
    accent: '#38BDF8'
  },
  purple: {
    gradient: 'from-violet-500/10 to-purple-600/5',
    border: 'border-violet-500/20',
    highlight: 'bg-violet-500/20 text-violet-400',
    star: 'text-violet-400',
    quote: 'text-violet-500/30',
    glow: 'rgba(139, 92, 246, 0.15)',
    accent: '#8B5CF6'
  },
  emerald: {
    gradient: 'from-emerald-500/10 to-green-600/5',
    border: 'border-emerald-500/20',
    highlight: 'bg-emerald-500/20 text-emerald-400',
    star: 'text-emerald-400',
    quote: 'text-emerald-500/30',
    glow: 'rgba(16, 185, 129, 0.15)',
    accent: '#10B981'
  },
  orange: {
    gradient: 'from-orange-500/10 to-amber-600/5',
    border: 'border-orange-500/20',
    highlight: 'bg-orange-500/20 text-orange-400',
    star: 'text-orange-400',
    quote: 'text-orange-500/30',
    glow: 'rgba(249, 115, 22, 0.15)',
    accent: '#F97316'
  }
}

// Animated Star Rating - Memoized and optimized
const StarRating = memo(({ rating, color }: { rating: number; color: string }) => {
  const variant = colorVariants[color as keyof typeof colorVariants]
  
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i}
          className={`w-4 h-4 ${i < rating ? variant.star : 'text-white/20'}`}
          fill={i < rating ? variant.accent : 'transparent'}
        />
      ))}
    </div>
  )
})
StarRating.displayName = 'StarRating'

// Testimonial Card Component - Optimized with memo
const TestimonialCard = memo(({ 
  testimonial, 
  isActive = false,
  onClick
}: { 
  testimonial: typeof testimonials[0]
  isActive?: boolean
  onClick?: () => void
}) => {
  const variant = colorVariants[testimonial.color as keyof typeof colorVariants]
  
  return (
    <div
      className={`relative cursor-pointer rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 will-change-transform ${
        isActive 
          ? `bg-gradient-to-br ${variant.gradient} ${variant.border} border-2 scale-100` 
          : 'bg-white/5 border border-white/10 scale-95 opacity-70'
      } ${isActive ? 'hover:scale-[1.02]' : 'hover:scale-[0.98]'}`}
      style={{
        boxShadow: isActive ? `0 10px 30px -10px ${variant.glow}` : 'none'
      }}
      onClick={onClick}
    >
      {/* Quote Icon */}
      <div className={`absolute top-4 right-4 ${variant.quote}`}>
        <Quote className="w-8 h-8" />
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        {/* Avatar */}
        <div 
          className={`relative w-14 h-14 rounded-full overflow-hidden border-2 ${variant.border}`}
          style={{
            background: `linear-gradient(135deg, ${variant.accent}40, ${variant.accent}20)`
          }}
        >
          {/* Placeholder Avatar with Initial */}
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-xl font-bold text-white/80">
              {testimonial.name.charAt(0)}
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold">{testimonial.name}</h4>
          <p className="text-white/50 text-sm">{testimonial.role} @ {testimonial.company}</p>
        </div>
      </div>

      {/* Star Rating */}
      {isActive && <StarRating rating={testimonial.rating} color={testimonial.color} />}

      {/* Highlight Badge */}
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${variant.highlight} text-sm font-medium mt-3`}
      >
        <Sparkles className="w-3.5 h-3.5" />
        {testimonial.highlight}
      </div>

      {/* Testimonial Text */}
      <div
        className={`overflow-hidden transition-[max-height,opacity,margin-top] duration-200 ease-out ${
          isActive ? 'opacity-100 mt-4 max-h-[520px]' : 'opacity-0 mt-0 max-h-0'
        }`}
        aria-hidden={!isActive}
      >
        <p className="text-white/70 text-sm leading-relaxed">
          &ldquo;{testimonial.text}&rdquo;
        </p>
      </div>
    </div>
  )
})
TestimonialCard.displayName = 'TestimonialCard'

// Main Testimonials Component
const MusteriYorumlari = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const leftScrollRef = useRef<HTMLDivElement>(null)
  const rightScrollRef = useRef<HTMLDivElement>(null)
  
  // Mouse drag scroll state
  const [isDragging, setIsDragging] = useState(false)
  const [startY, setStartY] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)
  const [activeScrollRef, setActiveScrollRef] = useState<React.RefObject<HTMLDivElement | null> | null>(null)
  
  // Mouse drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent, ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return
    setIsDragging(true)
    setActiveScrollRef(ref)
    setStartY(e.pageY - ref.current.offsetTop)
    setScrollTop(ref.current.scrollTop)
    ref.current.style.cursor = 'grabbing'
  }, [])
  
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !activeScrollRef?.current) return
    e.preventDefault()
    const y = e.pageY - activeScrollRef.current.offsetTop
    const walk = (y - startY) * 2
    activeScrollRef.current.scrollTop = scrollTop - walk
  }, [isDragging, activeScrollRef, startY, scrollTop])
  
  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    if (activeScrollRef?.current) {
      activeScrollRef.current.style.cursor = 'grab'
    }
    setActiveScrollRef(null)
  }, [activeScrollRef])
  
  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      handleMouseUp()
    }
  }, [isDragging, handleMouseUp])
  
  // Auto-scroll effect
  useEffect(() => {
    if (isPaused || !isInView) return
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isPaused, isInView])

  // Pause auto-advance when section is offscreen
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const activeTestimonial = testimonials[activeIndex]
  const activeVariant = colorVariants[activeTestimonial.color as keyof typeof colorVariants]

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements - Simplified */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Static Gradient Orbs - Removed animations */}
        <div
          className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]"
          style={{ background: `radial-gradient(circle, ${activeVariant.accent}, transparent 70%)` }}
        />
        <div
          className="absolute bottom-20 right-10 w-[300px] h-[300px] rounded-full opacity-8 blur-[80px]"
          style={{ background: `radial-gradient(circle, ${activeVariant.accent}, transparent 70%)` }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Badge - Simplified */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/25 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-[#38BDF8]">
              <Star className="w-4 h-4" fill="#38BDF8" />
            </span>
            <span className="text-[#38BDF8] text-sm font-medium">Müşteri Yorumları</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Müşterilerimiz</span>{' '}
            <span className="bg-gradient-to-r from-[#38BDF8] via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ne Diyor?
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Birlikte çalıştığımız markaların başarı hikayeleri ve deneyimleri
          </p>
        </motion.div>

        {/* Main Content */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={containerRef}
        >
          {/* Desktop Layout - Horizontal Scroll with Featured Card */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Side - Navigation Dots & Info - Draggable */}
            <div 
              ref={leftScrollRef}
              className="col-span-2 space-y-4 cursor-grab select-none"
              onMouseDown={(e) => handleMouseDown(e, leftScrollRef)}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              {/* Progress Indicator - Show only 5 items around active */}
              <div className="space-y-2 py-2">
                {(() => {
                  const visibleIndices = []
                  for (let i = -2; i <= 2; i++) {
                    const idx = (activeIndex + i + testimonials.length) % testimonials.length
                    visibleIndices.push(idx)
                  }
                  return visibleIndices.map((idx) => (
                    <motion.button
                      key={idx}
                      className={`flex items-center gap-3 w-full group`}
                      onClick={() => !isDragging && setActiveIndex(idx)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className={`h-1 rounded-full transition-all duration-500 ${
                          idx === activeIndex 
                            ? 'bg-gradient-to-r from-[#38BDF8] to-cyan-400 w-8' 
                            : 'bg-white/20 w-3 group-hover:w-5 group-hover:bg-white/40'
                        }`}
                      />
                      <span className={`text-xs transition-all duration-300 truncate ${
                        idx === activeIndex ? 'text-white' : 'text-white/40 group-hover:text-white/60'
                      }`}>
                        {testimonials[idx].name.split(' ')[0]}
                      </span>
                    </motion.button>
                  ))
                })()}
              </div>

              {/* Counter */}
              <div className="pt-4 border-t border-white/10">
                <motion.div 
                  className="text-4xl font-bold text-[#38BDF8]"
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(activeIndex + 1).padStart(2, '0')}
                </motion.div>
                <div className="text-white/40 text-sm">/ {testimonials.length}</div>
              </div>
            </div>

            {/* Center - Featured Card */}
            <div className="col-span-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, x: 50, rotateY: -10 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -50, rotateY: 10 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="perspective-1000"
                >
                  <div 
                    className={`relative rounded-3xl p-8 backdrop-blur-sm bg-gradient-to-br ${activeVariant.gradient} ${activeVariant.border} border-2`}
                    style={{
                      boxShadow: `0 30px 60px -12px ${activeVariant.glow}, 0 0 0 1px ${activeVariant.accent}20`
                    }}
                  >
                    {/* Large Quote */}
                    <Quote className={`absolute top-6 right-6 w-16 h-16 ${activeVariant.quote}`} />

                    {/* Content */}
                    <div className="relative">
                      {/* Author Info - Simplified avatar */}
                      <div className="flex items-center gap-4 mb-6">
                        <div 
                          className={`w-16 h-16 rounded-2xl overflow-hidden border-2 ${activeVariant.border}`}
                          style={{
                            background: `linear-gradient(135deg, ${activeVariant.accent}40, ${activeVariant.accent}10)`
                          }}
                        >
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-2xl font-bold text-white/80">
                              {activeTestimonial.name.charAt(0)}
                            </span>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-white">{activeTestimonial.name}</h3>
                          <p className="text-white/50">{activeTestimonial.role} @ {activeTestimonial.company}</p>
                        </div>

                        <div className="ml-auto">
                          <StarRating rating={activeTestimonial.rating} color={activeTestimonial.color} />
                        </div>
                      </div>

                      {/* Highlight Badge - Simplified */}
                      <motion.div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${activeVariant.highlight} font-semibold mb-6`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Sparkles className="w-4 h-4" />
                        {activeTestimonial.highlight}
                      </motion.div>

                      {/* Quote Text */}
                      <motion.p
                        className="text-white/80 text-lg leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        &ldquo;{activeTestimonial.text}&rdquo;
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side - Mini Cards - Virtualized scroll - Only show nearby cards */}
            <div 
              ref={rightScrollRef}
              className="col-span-4 space-y-4 max-h-[450px] overflow-y-auto scrollbar-hide cursor-grab select-none pr-2"
              onMouseDown={(e) => handleMouseDown(e, rightScrollRef)}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((testimonial, idx) => {
                // Only render cards that are near the active index (within 5 items)
                const distance = Math.abs(idx - activeIndex)
                if (idx === activeIndex || distance > 5) return null
                
                return (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03, duration: 0.2, ease: "easeOut" }}
                    onClick={() => !isDragging && setActiveIndex(idx)}
                    className="cursor-pointer"
                  >
                    <TestimonialCard 
                      testimonial={testimonial} 
                      isActive={false}
                    />
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Mobile Layout - Enhanced Responsive Design */}
          <div className="lg:hidden">
            {/* Featured Card with improved mobile styling */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="px-2"
              >
                {/* Mobile Featured Card */}
                <div 
                  className={`relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 backdrop-blur-sm bg-gradient-to-br ${activeVariant.gradient} ${activeVariant.border} border-2`}
                  style={{
                    boxShadow: `0 20px 40px -12px ${activeVariant.glow}`
                  }}
                >
                  {/* Quote Icon */}
                  <Quote className={`absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 ${activeVariant.quote}`} />

                  {/* Author Info - Simplified for mobile */}
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl overflow-hidden border-2 ${activeVariant.border}`}
                      style={{
                        background: `linear-gradient(135deg, ${activeVariant.accent}40, ${activeVariant.accent}10)`
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-xl sm:text-2xl font-bold text-white/80">
                          {activeTestimonial.name.charAt(0)}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-white truncate">{activeTestimonial.name}</h3>
                      <p className="text-white/50 text-xs sm:text-sm truncate">{activeTestimonial.role} @ {activeTestimonial.company}</p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="mb-3">
                    <StarRating rating={activeTestimonial.rating} color={activeTestimonial.color} />
                  </div>

                  {/* Highlight Badge */}
                  <motion.div
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${activeVariant.highlight} text-xs sm:text-sm font-semibold mb-4`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    {activeTestimonial.highlight}
                  </motion.div>

                  {/* Quote Text */}
                  <motion.p
                    className="text-white/70 text-sm sm:text-base leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    &ldquo;{activeTestimonial.text}&rdquo;
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Navigation - Improved */}
            <div className="flex items-center justify-between mt-6 sm:mt-8 px-2">
              {/* Progress Bar with Numbers */}
              <div className="flex items-center flex-1 mr-4 gap-3">
                <span className="text-white/60 text-xs font-medium min-w-[16px]">{activeIndex + 1}</span>
                <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#38BDF8] to-cyan-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <span className="text-white/40 text-xs font-medium min-w-[16px]">{testimonials.length}</span>
              </div>

              {/* Arrows */}
              <div className="flex gap-2 sm:gap-3">
                <motion.button
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
                  onClick={handlePrev}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#38BDF8] to-cyan-600 flex items-center justify-center text-white transition-all"
                  onClick={handleNext}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden lg:flex absolute -bottom-16 left-1/2 -translate-x-1/2 gap-4">
            <motion.button
              className="w-12 h-12 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all"
              onClick={handlePrev}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              className="w-12 h-12 rounded-full bg-gradient-to-r from-[#38BDF8] to-cyan-600 flex items-center justify-center text-white hover:opacity-90 transition-all"
              onClick={handleNext}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Inspiring Quote Section */}
        <motion.div
          className="mt-20 lg:mt-28 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Quote className="w-12 h-12 mx-auto mb-6 text-[#38BDF8]/30" />
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-white/80 leading-relaxed italic">
              &ldquo;Başarı, doğru zamanda doğru stratejiyle buluştuğunda ortaya çıkar. 
              Biz sadece dijital pazarlama yapmıyoruz; <span className="text-[#38BDF8] font-medium not-italic">markanızın hikayesini</span> yazıyoruz.&rdquo;
            </p>
            <motion.div 
              className="mt-8 flex items-center justify-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#38BDF8]/50" />
              <span className="text-[#38BDF8] font-semibold">Arlan Medya</span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#38BDF8]/50" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(56, 189, 248, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(56, 189, 248, 0.5);
        }
      `}</style>
    </section>
  )
}

export default MusteriYorumlari
