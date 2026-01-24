'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Footer from './components/footer'

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

// Lazy load components for better performance - only load when in viewport
const MainHero = dynamic(() => import("./components/main"), {
  loading: () => <div className="min-h-screen bg-[#050816]" />,
  ssr: true // Hero should load on server
})

const KodKarti = dynamic(() => import("./components/main/kodkartı"), {
  loading: () => <div className="min-h-[600px]" />,
  ssr: false
})

// These components load only when user scrolls to them
const Mockup2 = dynamic(() => import("./components/mockup2"), {
  loading: () => <div className="min-h-[600px]" />,
  ssr: false
})

const NasilCalisiyoruz = dynamic(() => import("./components/nasılçalışıyoruz"), {
  loading: () => <div className="min-h-[800px]" />,
  ssr: false
})

const NedenBiz = dynamic(() => import("./components/nedenbiz"), {
  loading: () => <div className="min-h-[700px]" />,
  ssr: false
})

const DestekSection = dynamic(() => import("./components/destek"), {
  loading: () => <div className="min-h-[600px]" />,
  ssr: false
})

const MusteriYorumlari = dynamic(() => import("./components/müşteriyorumları"), {
  loading: () => <div className="min-h-[800px]" />,
  ssr: false
})

const YazilimProjesi = dynamic(() => import("./components/yazılımprojenizmivar"), {
  loading: () => <div className="min-h-[600px]" />,
  ssr: false
})

const FAQ = dynamic(() => import("./components/faq"), {
  loading: () => <div className="min-h-[600px]" />,
  ssr: false
})

const Referanslar = dynamic(() => import("./components/referanslar"), {
  loading: () => <div className="min-h-[600px]" />,
  ssr: false
})

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
        <Mockup2 />
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
