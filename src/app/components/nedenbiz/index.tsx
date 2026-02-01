import React from 'react'
import { ArrowRight, Sparkles, Zap, Shield, Code2 } from 'lucide-react'

// Premium 3D Logo Platform Component
const Rotating3DCube = React.memo(() => {
  return (
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64" style={{ perspective: '1200px' }}>
      {/* Outer Rotating Ring */}
      <div className="absolute inset-0 animate-spin-slow">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: '2px dashed rgba(56, 189, 248, 0.3)',
          }}
        />
        {/* Orbiting Dots */}
        {[0, 90, 180, 270].map((deg, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-pulse-scale"
            style={{
              top: '50%',
              left: '50%',
              background: i % 2 === 0 ? '#38BDF8' : '#A855F7',
              boxShadow: i % 2 === 0 ? '0 0 15px #38BDF8' : '0 0 15px #A855F7',
              transform: `rotate(${deg}deg) translateX(80px) translateY(-50%)`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Secondary Ring - Counter Rotate */}
      <div className="absolute inset-4 sm:inset-5 md:inset-6 animate-spin-reverse">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: '1px solid rgba(168, 85, 247, 0.2)',
          }}
        />
      </div>

      {/* Main 3D Platform */}
      <div
        className="absolute inset-6 sm:inset-8 md:inset-10 animate-cube-rotate"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face - Main Logo Display */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{
            transform: 'translateZ(40px)',
            background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9))',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            boxShadow: '0 0 40px rgba(56, 189, 248, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        >
          {/* Inner Glow */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.1) 0%, transparent 70%)',
            }}
          />

          {/* Logo */}
          <img
            src="/logolar/arlanlogonav.webp"
            alt="Arlan Logo"
            className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain animate-logo-glow"
          />

          {/* Corner Decorations */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#38BDF8]/40 rounded-tl" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#38BDF8]/40 rounded-tr" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#38BDF8]/40 rounded-bl" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#38BDF8]/40 rounded-br" />
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-2xl sm:rounded-3xl"
          style={{
            transform: 'rotateY(180deg) translateZ(40px)',
            background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9))',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            boxShadow: '0 0 40px rgba(168, 85, 247, 0.2)',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
            }}
          />
          <img
            src="/logolar/arlanlogonav.webp"
            alt="Arlan Logo"
            className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain opacity-80"
            style={{ filter: 'hue-rotate(60deg)' }}
          />
        </div>
      </div>

      {/* Floating Icons Around */}
      <div
        className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center animate-float"
        style={{
          background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(56, 189, 248, 0.1))',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#38BDF8]" />
      </div>

      <div
        className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center animate-float-delayed"
        style={{
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.1))',
          border: '1px solid rgba(168, 85, 247, 0.3)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#A855F7]" />
      </div>

      <div
        className="absolute top-1/2 -left-4 sm:-left-5 w-7 h-7 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center animate-float-horizontal"
        style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.1))',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          backdropFilter: 'blur(8px)',
          animationDelay: '1s'
        }}
      >
        <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#10B981]" />
      </div>

      <div
        className="absolute top-1/2 -right-4 sm:-right-5 w-7 h-7 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center animate-float-horizontal"
        style={{
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(236, 72, 153, 0.1))',
          border: '1px solid rgba(236, 72, 153, 0.3)',
          backdropFilter: 'blur(8px)',
          animationDelay: '0.8s'
        }}
      >
        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#EC4899]" />
      </div>

      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full animate-glow-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full animate-glow-pulse-delayed"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 60%)',
          }}
        />
      </div>
    </div>
  )
})
Rotating3DCube.displayName = 'Rotating3DCube'

// Animated Text Line Component
const AnimatedTextLine = ({
  children,
  delay = 0,
  className = ""
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) => {
  return (
    <div
      className={`overflow-hidden animate-fade-in ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="animate-slide-up" style={{ animationDelay: `${delay}s` }}>
        {children}
      </div>
    </div>
  )
}

// Highlight Text Component
const HighlightText = ({
  children,
  color = "#38BDF8"
}: {
  children: React.ReactNode
  color?: string
}) => {
  return (
    <span
      className="relative inline-block"
      style={{ color }}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute bottom-1 left-0 right-0 h-[3px] rounded-full animate-expand-width"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}60)` }}
      />
    </span>
  )
}

// Content Data
const contentSections = [
  {
    title: "Teknoloji",
    highlight: "Modern Stack",
    description: "React, Node.js, TypeScript, Python, Docker ve Kubernetes gibi en güncel teknolojileri kullanıyoruz. Ölçeklenebilir, güvenilir ve bakım yapılabilir kod yazma konusunda uzmanız.",
    color: "#38BDF8"
  },
  {
    title: "Kalite",
    highlight: "Garantili",
    description: "Otomatik test, code review, kontinyu entegrasyon ve devops best practices ile %99.9 uptime ve kusursuz kodlama sağlıyoruz. Hata yoktur, sadece sürprizler olur.",
    color: "#10B981"
  },
  {
    title: "Deneyim",
    highlight: "Kanıtlanmış",
    description: "10+ yıllık yazılım geliştirme tecrübesi, 50+ başarıyla tamamlanmış proje ve memnun müşteriler. E-commerce, SaaS, kurumsal uygulamalar ve dijital yönetim sistemlerinde uzman ekip.",
    color: "#A855F7"
  },
  {
    title: "Destek",
    highlight: "Süreklil",
    description: "Geliştirmeden sonra da yanınız olmaya devam ediyoruz. Sistem monitoring, security updates, bug fixes ve yeni feature geliştirme için 7/24 erişilebilir bir ekip.",
    color: "#FBBF24"
  }
]

// Main Component
const NedenBiz = () => {
  return (
    <section
      id="neden-biz"
      className="relative py-16 sm:py-24 md:py-28 overflow-hidden"
      aria-labelledby="why-us-title"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 50% 50% at 50% 0%, rgba(56, 189, 248, 0.08), transparent),
              radial-gradient(ellipse 40% 40% at 100% 50%, rgba(168, 85, 247, 0.06), transparent)
            `
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with 3D Cube */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-12 sm:mb-20">
          {/* 3D Rotating Cube - Visible on all screens */}
          <div className="flex-shrink-0 scale-75 sm:scale-75 lg:scale-100 animate-fade-in">
            <Rotating3DCube />
          </div>

          {/* Title Section */}
          <div className="text-center lg:text-left">
            <AnimatedTextLine delay={0.1}>
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#38BDF8] mb-3">
                Farkımız
              </span>
            </AnimatedTextLine>

            <AnimatedTextLine delay={0.2}>
              <h2
                id="why-us-title"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-[1.15] mb-4 ibm-plex-serif-bold"
              >
                Yazılım Projelerinizde
                <br />
                <span className="bg-gradient-to-r from-[#38BDF8] via-cyan-400 to-[#A855F7] bg-clip-text text-transparent">
                  Güvenilir Partner
                </span>
              </h2>
            </AnimatedTextLine>

            <AnimatedTextLine delay={0.4}>
              <p className="text-sm sm:text-base lg:text-lg text-white/60 max-w-lg leading-relaxed">
                Bizimle çalışmak, yalnızca bir hizmet almak değil; dijital dönüşüm yolculuğunuzda sizi anlayan, yön veren ve birlikte büyüyen bir stratejik ortak kazanmaktır.
              </p>
            </AnimatedTextLine>
          </div>
        </div>

        {/* Content Sections - Clean Typography */}
        <div className="space-y-10 sm:space-y-16">
          {contentSections.map((section, index) => (
            <article
              key={section.title}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-4 sm:gap-6 lg:gap-12 items-start animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Section Label */}
              <div className={`lg:w-1/4 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                <div className="inline-flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <span
                    className="text-4xl sm:text-5xl lg:text-5xl font-bold ibm-plex-serif-bold"
                    style={{
                      color: section.color,
                      textShadow: `0 0 40px ${section.color}30`
                    }}
                  >
                    0{index + 1}
                  </span>
                </div>
                <h3
                  className="text-xs sm:text-sm font-semibold tracking-widest uppercase mt-1"
                  style={{ color: `${section.color}90` }}
                >
                  {section.title}
                </h3>
              </div>

              {/* Content */}
              <div className="lg:w-3/4">
                <AnimatedTextLine delay={0.1}>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                    <HighlightText color={section.color}>{section.highlight}</HighlightText>
                    {' '}Çalışma Prensibi
                  </h4>
                </AnimatedTextLine>

                <AnimatedTextLine delay={0.2}>
                  <p className="text-xs sm:text-sm lg:text-base text-white/60 leading-relaxed max-w-xl">
                    {section.description}
                  </p>
                </AnimatedTextLine>

                {/* Decorative Line */}
                <div
                  className="mt-4 sm:mt-6 h-px max-w-xs sm:max-w-md animate-expand-width"
                  style={{
                    background: `linear-gradient(90deg, ${section.color}30, transparent)`,
                    animationDelay: '0.4s'
                  }}
                />
              </div>
            </article>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-24 sm:mt-32 text-center animate-fade-in">
          <blockquote className="relative max-w-4xl mx-auto">
            {/* Quote Mark */}
            <span
              className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl sm:text-9xl font-serif opacity-10 text-[#38BDF8]"
              aria-hidden="true"
            >
              "
            </span>

            <AnimatedTextLine delay={0.1}>
              <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-relaxed">
                Başarı, zamanla yoğrulan kusursuz stratejinin sakin zaferidir
                <span className="text-[#38BDF8]"> Biz yalnızca pazarlama yapmıyor markanıza güven veren bir gelecek  </span>
                yazıyoruz.
              </p>
            </AnimatedTextLine>

            <footer className="mt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="inline-flex items-center gap-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <span className="text-white/50 text-sm font-medium tracking-wide">
                  ARLAN MEDYA EKİBİ
                </span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </div>
            </footer>
          </blockquote>
        </div>

        {/* CTA */}
        <div className="mt-16 sm:mt-20 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a
            href="/iletisim"
            className="group inline-flex items-center gap-3 text-lg font-medium text-[#38BDF8] hover:text-white transition-all duration-300 hover:translate-x-2"
          >
            <span>Birlikte çalışalım</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-2 transition-transform"
            />
          </a>
        </div>
      </div>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Arlan Medya",
            "description": "Premium dijital pazarlama ve web tasarım ajansı",
            "foundingDate": "2018",
            "slogan": "Dijitalde başarı, doğru partnerle başlar"
          })
        }}
      />
    </section>
  )
}

export default NedenBiz
