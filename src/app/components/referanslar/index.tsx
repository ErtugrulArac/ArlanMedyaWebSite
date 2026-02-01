'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'

// Referans logoları - placeholder olarak kullanılacak, gerçek logolar eklenecek
const referanslar = [
  { name: 'Şirket 1', logo: '/referanslar/1.webp' },
  { name: 'Şirket 2', logo: '/referanslar/2.webp' },
  { name: 'Şirket 3', logo: '/referanslar/3.webp' },
  { name: 'Şirket 4', logo: '/referanslar/4.webp' },
  { name: 'Şirket 5', logo: '/referanslar/5.webp' },
  { name: 'Şirket 6', logo: '/referanslar/6.webp' },
  { name: 'Şirket 7', logo: '/referanslar/7.webp' },
  { name: 'Şirket 8', logo: '/referanslar/8.webp' },
  { name: 'Şirket 9', logo: '/referanslar/9.webp' },
  { name: 'Şirket 10', logo: '/referanslar/10.webp' },
  { name: 'Şirket 11', logo: '/referanslar/11.webp' },
]

export default function Referanslar() {
  // Inject keyframes for animations
  useEffect(() => {
    const styleId = 'referanslar-animations'
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style')
      style.id = styleId
      style.textContent = `
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `
      document.head.appendChild(style)
    }
  }, [])

  // Double the array for seamless loop
  const doubledReferanslar = [...referanslar, ...referanslar]

  return (
    <section className="relative py-24 sm:py-28 overflow-hidden">
      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20">
            <svg className="w-4 h-4 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span className="text-sm text-[#38BDF8] font-medium">Güvenilir İş Ortakları</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-2 ibm-plex-serif-bold">
            Referanslarımız
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#38BDF8]">
            Birlikte Büyüyoruz
          </p>
        </div>

        {/* Logos Container */}
        <div className="relative">
          {/* Marquee Container */}
          <div className="relative py-8 sm:py-12">
            {/* Scrolling logos */}
            <div className="overflow-hidden">
              <div 
                className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12"
                style={{
                  animation: 'marquee 25s linear infinite',
                  width: 'fit-content',
                }}
              >
                {doubledReferanslar.map((ref, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#1a1f35] to-[#0d1020] border border-white/10 flex items-center justify-center transition-all duration-300 hover:border-[#38BDF8]/50 hover:scale-110 group"
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1a1f35] to-[#0d1020] flex items-center justify-center overflow-hidden">
                      <Image
                        src={ref.logo}
                        alt={ref.name}
                        width={80}
                        height={80}
                        className="object-contain w-full h-full rounded-full"
                        unoptimized
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <a
            href="/iletisim"
            title="Siz de Katılın"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-[#38BDF8] to-[#6366F1] rounded-full text-white font-medium text-sm sm:text-base overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Siz de Katılın</span>
            <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
