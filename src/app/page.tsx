'use client'

import dynamic from 'next/dynamic'

// Lazy load components for better performance - only load when in viewport
const MainHero = dynamic(() => import("./components/main"), {
  loading: () => <div className="min-h-screen bg-[#050816]" />,
  ssr: true // Hero should load on server
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

export default function Home() {
  return (
    <main className="relative z-10">
      <MainHero />
      <Mockup2 />
      <NasilCalisiyoruz />
      <NedenBiz />
      <DestekSection />
      <MusteriYorumlari />
    </main>
  );
}
