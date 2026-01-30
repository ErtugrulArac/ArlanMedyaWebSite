'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Footer from './components/footer'
import MainHero from './components/main'
import KodKarti from './components/main/kodkartı'
import NasilCalisiyoruz from './components/nasılçalışıyoruz'
import NedenBiz from './components/nedenbiz'
import DestekSection from './components/destek'
import MusteriYorumlari from './components/müşteriyorumları'
import YazilimProjesi from './components/yazılımprojenizmivar'
import FAQ from './components/faq'
import Referanslar from './components/referanslar'

// Loading component
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-[#050816] flex items-center justify-center z-50">
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #38BDF8 0%, transparent 70%)' }}
      />
    </div>
    <div className="relative flex flex-col items-center gap-6">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-2 border-[#38BDF8]/20" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#38BDF8] animate-spin" />
        <div className="absolute inset-2 rounded-full bg-[#38BDF8]/5 flex items-center justify-center">
          <Image 
            src="/logolar/arlanlogonav.webp" 
            alt="Arlan Medya" 
            width={56} 
            height={56}
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  </div>
)

// Components are statically imported to ensure reliable rendering

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Sayfa yüklendiğinde loading'i kapat
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // 1.5 saniye loading göster

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <>
      <main className="relative z-10">
        <MainHero />
        <KodKarti />
        <NasilCalisiyoruz />
        <NedenBiz />
        <DestekSection />
        <YazilimProjesi />
        <MusteriYorumlari />
        <Referanslar />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
