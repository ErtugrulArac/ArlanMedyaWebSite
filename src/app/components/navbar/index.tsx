'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StaggeredMenu from '../ui/staggered-menu'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Anasayfa', ariaLabel: 'Ana sayfaya git', link: '/' },
    { label: 'Hizmetler', ariaLabel: 'Hizmetlerimizi görüntüle', link: '#services' },
    { label: 'Hakkımızda', ariaLabel: 'Hakkımızda sayfası', link: '#about' },
    { label: 'Projeler', ariaLabel: 'Projelerimizi görüntüle', link: '#projects' },
    { label: 'İletişim', ariaLabel: 'İletişime geç', link: '#contact' },
  ]

  const socialItems = [
    { label: 'Instagram', link: 'https://instagram.com/arlanmedya' },
    { label: 'LinkedIn', link: 'https://linkedin.com/company/arlanmedya' },
    { label: 'Twitter', link: 'https://twitter.com/arlanmedya' },
  ]

  return (
    <>
      {/* Desktop Navbar */}
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 hidden lg:block transition-all duration-300`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div 
          className={`transition-all duration-300 ${
            scrolled
              ? 'bg-[#050816]/95 backdrop-blur-xl border-b border-[#38BDF8]/15 shadow-xl shadow-[#38BDF8]/5'
              : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <a href="/" className="flex items-center gap-3 group">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] rounded-lg opacity-75 group-hover:opacity-100 transition blur"></div>
                  <div className="relative rounded-lg w-full h-full flex items-center justify-center bg-[#0a1628]">
                    <span className="font-bold text-lg text-[#38BDF8]">A</span>
                  </div>
                </div>
                <span className="font-bold text-xl text-white tracking-tight">
                  ARLAN<span className="text-[#38BDF8]">MEDYA</span>
                </span>
              </a>

              {/* Desktop Menu Links */}
              <nav className="flex items-center gap-1">
                {menuItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className="relative px-5 py-2.5 text-sm font-medium text-white/70 hover:text-white transition-colors group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-0 rounded-lg bg-[#38BDF8]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#38BDF8] group-hover:w-1/2 transition-all duration-300 rounded-full" />
                  </a>
                ))}
              </nav>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                className="relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] rounded-full text-[#050816] font-semibold text-sm overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Teklif Al</span>
                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navbar - StaggeredMenu - Only visible on mobile */}
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
        />
      </div>
    </>
  )
}

export default Navbar
