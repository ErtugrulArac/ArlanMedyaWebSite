'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import StaggeredMenu from '../ui/staggered-menu'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const [showLoader, setShowLoader] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Pathname değişince loading'i kapat
  useEffect(() => {
    setIsNavigating(false)
  }, [pathname])

  const menuItems = [
    { label: 'Anasayfa', ariaLabel: 'Ana sayfaya git', link: '/' },
    { label: 'Hizmetler', ariaLabel: 'Hizmetlerimizi görüntüle', link: '/hizmetlerimiz' },
    { label: 'Hakkımızda', ariaLabel: 'Hakkımızda sayfası', link: '/hakkimizda' },
    { label: 'Süreç', ariaLabel: 'Süreç sayfası', link: '/surec' },
    { label: 'İletişim', ariaLabel: 'İletişime geç', link: '/iletisim' },
  ]

  const handleNavigation = useCallback((link: string) => {
    // Sayfa içi anchor'a yumuşak scroll
    if (link.startsWith('#')) {
      document.querySelector(link)?.scrollIntoView({ behavior: 'smooth' })
      return
    }

    // Anasayfa linkine tıklanınca her zaman en üste
    if (link === '/') {
      if (pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      setShowLoader(true)
      setTimeout(() => {
        router.push('/')
        setTimeout(() => setShowLoader(false), 800)
      }, 100)
      return
    }

    // Aynı sayfaya yeniden gitmeye çalışma
    if (link === pathname) return

    // Normal yönlendirme
    setShowLoader(true)
    setTimeout(() => {
      router.push(link)
      setTimeout(() => setShowLoader(false), 800)
    }, 100)
  }, [pathname, router])

  const socialItems = [
    { label: 'Instagram', link: 'https://instagram.com/arlanmedya' },
    { label: 'LinkedIn', link: 'https://linkedin.com/company/arlanmedya' },
    { label: 'Twitter', link: 'https://twitter.com/arlanmedya' },
  ]

  const handleLogoClick = useCallback(() => {
    // Eğer anasayfadaysak, her zaman en üste kaydır
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    // Değilsek anasayfaya yönlendir ve scroll'u en üste yap
    setShowLoader(true)
    setTimeout(() => {
      router.push('/')
      setTimeout(() => setShowLoader(false), 800)
    }, 100)
  }, [pathname, router])

  return (
    <>
      {/* Client-Side Fake Loader (matching loading.tsx design) */}
      {showLoader && (
        <div className="fixed inset-0 bg-[#050816] flex items-center justify-center z-[9999]">
          {/* Background gradient */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
              style={{ background: 'radial-gradient(circle, #38BDF8 0%, transparent 70%)' }}
            />
          </div>

          {/* Loading content */}
          <div className="relative flex flex-col items-center gap-6">
            {/* Logo spinner */}
            <div className="relative w-24 h-24">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#38BDF8]/20" />
              
              {/* Spinning ring */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#38BDF8] animate-spin" />
              
              {/* Logo */}
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

            {/* Loading dots */}
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>
      )}
      
      {/* Desktop Navbar */}
      <motion.header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden lg:block transition-all duration-300`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div 
          className={`flex items-center gap-4 px-8 py-3 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-[#050816]/95 backdrop-blur-xl border-white/20 shadow-xl shadow-black/30'
              : 'bg-[#0a1628]/80 backdrop-blur-lg border-white/15 shadow-lg shadow-black/20'
          }`}
        >
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-2 group shrink-0 hover:opacity-80 transition-opacity"
          >
            <Image 
              src="/logolar/arlanlogonav.webp" 
              alt="Arlan Medya Logo" 
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </button>

          {/* Divider */}
          <div className="w-px h-5 bg-white/15" />

          {/* Desktop Menu Links */}
          <nav className="flex items-center">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                data-nav-link={item.link}
                onClick={() => handleNavigation(item.link)}
                className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors group poppins-medium"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-px h-5 bg-white/15" />

          {/* CTA Button */}
          <motion.a
            href="/iletisim"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] rounded-lg text-[#050816] font-semibold text-sm overflow-hidden group shrink-0 poppins-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Teklif Al</span>
            <svg className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </motion.a>
        </div>
      </motion.header>

      {/* Mobile Navbar - StaggeredMenu */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-50 lg:hidden">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#38BDF8"
          changeMenuColorOnOpen={true}
          colors={['#050816', '#0a1628', '#0f2942']}
          accentColor="#38BDF8"
          isFixed={false}
          logoUrl="/logolar/arlanlogonav.webp"
        />
      </div>
    </>
  )
}

export default Navbar