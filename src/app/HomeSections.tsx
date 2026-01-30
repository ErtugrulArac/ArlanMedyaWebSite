'use client'

import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

type LazyMountProps = {
  minHeight?: number
  rootMargin?: string
  children: React.ReactNode
}

function LazyMount({ children, minHeight = 600, rootMargin = '200px 0px' }: LazyMountProps) {
  const [isMounted, setIsMounted] = useState(false)
  const hostRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (isMounted) return

    const node = hostRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsMounted(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [isMounted, rootMargin])

  return (
    <div
      ref={hostRef}
      style={{ minHeight, contentVisibility: 'auto', contain: 'layout paint style' }}
      suppressHydrationWarning
    >
      {isMounted ? children : null}
    </div>
  )
}

const NasilCalisiyoruz = dynamic(
  () => import('./components/nasılçalışıyoruz').then((m) => m.default),
  { ssr: false, loading: () => <div style={{ minHeight: 800 }} /> }
)

const NedenBiz = dynamic(
  () => import('./components/nedenbiz').then((m) => m.default),
  { ssr: false, loading: () => <div style={{ minHeight: 700 }} /> }
)

const DestekSection = dynamic(
  () => import('./components/destek').then((m) => m.default),
  { ssr: false, loading: () => <div style={{ minHeight: 600 }} /> }
)

const YazilimProjesi = dynamic(
  () => import('./components/yazılımprojenizmivar').then((m) => m.default),
  { ssr: false, loading: () => <div style={{ minHeight: 600 }} /> }
)

const MusteriYorumlari = dynamic(
  () => import('./components/müşteriyorumları').then((m) => m.default),
  { ssr: false, loading: () => <div style={{ minHeight: 800 }} /> }
)

const Referanslar = dynamic(
  () => import('./components/referanslar').then((m) => m.default),
  { ssr: false, loading: () => <div style={{ minHeight: 600 }} /> }
)

const FAQ = dynamic(
  () => import('./components/faq').then((m) => m.default),
  { ssr: false, loading: () => <div style={{ minHeight: 600 }} /> }
)

export default function HomeSections() {
  return (
    <>
      <LazyMount minHeight={800}>
        <NasilCalisiyoruz />
      </LazyMount>
      <LazyMount minHeight={700}>
        <NedenBiz />
      </LazyMount>
      <LazyMount minHeight={600}>
        <DestekSection />
      </LazyMount>
      <LazyMount minHeight={600}>
        <YazilimProjesi />
      </LazyMount>
      <LazyMount minHeight={800}>
        <MusteriYorumlari />
      </LazyMount>
      <LazyMount minHeight={600}>
        <Referanslar />
      </LazyMount>
      <LazyMount minHeight={600}>
        <FAQ />
      </LazyMount>
    </>
  )
}
