'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import StaggeredMenu from '../ui/staggered-menu'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
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
    { label: 'Hakkımızda', ariaLabel: 'Hakkımızda sayfası', link: '#about' },
    { label: 'Projeler', ariaLabel: 'Projelerimizi görüntüle', link: '#projects' },
    { label: 'İletişim', ariaLabel: 'İletişime geç', link: '/iletisim' },
  ]

  const handleNavigation = useCallback((link: string) => {
    if (link.startsWith('#')) {
      document.querySelector(link)?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    
    // Aynı sayfadaysa navigasyon yapma
    if (link === pathname) return
    
    // Loading başlat
    setIsNavigating(true)
    window.dispatchEvent(new CustomEvent('navigation-start'))
    
    // 300ms sonra navigate et
    setTimeout(() => {
      window.location.href = link
    }, 300)
  }, [pathname])

  const socialItems = [
    { label: 'Instagram', link: 'https://instagram.com/arlanmedya' },
    { label: 'LinkedIn', link: 'https://linkedin.com/company/arlanmedya' },
    { label: 'Twitter', link: 'https://twitter.com/arlanmedya' },
  ]

  return (
    <>
      {/* Desktop Navbar */}
      <motion.header
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block transition-all duration-300`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div 
          className={`flex items-center gap-6 px-10 py-4 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-[#050816]/95 backdrop-blur-xl border-white/20 shadow-xl shadow-black/30'
              : 'bg-[#0a1628]/80 backdrop-blur-lg border-white/15 shadow-lg shadow-black/20'
          }`}
        >
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('/')}
            className="flex items-center gap-2 group shrink-0 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/logolar/arlanlogonav.webp" 
              alt="Arlan Medya Logo" 
              className="h-12 w-auto object-contain"
              loading="eager"
            />
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-white/15" />

          {/* Desktop Menu Links */}
          <nav className="flex items-center">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                data-nav-link={item.link}
                onClick={() => handleNavigation(item.link)}
                className="relative px-5 py-2.5 text-base font-medium text-white/70 hover:text-white transition-colors group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-px h-6 bg-white/15" />

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] rounded-lg text-[#050816] font-semibold text-base overflow-hidden group shrink-0"
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
