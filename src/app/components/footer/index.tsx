'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { SiInstagram, SiX, SiLinkedin } from 'react-icons/si'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Inject keyframes for light animation
  useEffect(() => {
    const styleId = 'footer-light-animation'
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style')
      style.id = styleId
      style.textContent = `
        @keyframes lightTravel {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `
      document.head.appendChild(style)
    }
  }, [])

  const navLinks = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Hakkımızda', href: '#hakkimizda' },
    { label: 'Hizmetler', href: '/hizmetlerimiz' },
    { label: 'Projeler', href: '#projeler' },
    { label: 'Yorumlar', href: '#yorumlar' },
    { label: 'SSS', href: '#faq' },
  ]

  const socialLinks = [
    { href: 'https://instagram.com/arlanmedya', label: 'Instagram', Icon: SiInstagram },
    { href: 'https://twitter.com/arlanmedya', label: 'X', Icon: SiX },
    { href: 'https://linkedin.com/company/arlanmedya', label: 'LinkedIn', Icon: SiLinkedin },
  ]

  return (
    <footer className="relative overflow-hidden py-16 sm:py-24">
      {/* Subtle glow only */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#38BDF8] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big ARLAN Text */}
        <div className="relative flex items-center justify-center mb-12 sm:mb-16">
          {/* Traveling light effect */}
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            <span 
              className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-black tracking-tight select-none"
              style={{
                color: 'transparent',
                background: 'linear-gradient(90deg, transparent 0%, transparent 40%, rgba(56, 189, 248, 0.8) 50%, transparent 60%, transparent 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextStroke: '1px transparent',
                animation: 'lightTravel 4s ease-in-out infinite',
              }}
            >
              ARLAN
            </span>
          </div>
          
          {/* Base text */}
          <h2 
            className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-black tracking-tight select-none"
            style={{
              color: 'rgba(255, 255, 255, 0.08)',
              WebkitTextStroke: '1px rgba(56, 189, 248, 0.2)',
              textShadow: '0 0 80px rgba(56, 189, 248, 0.1)',
            }}
          >
            ARLAN
          </h2>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 mb-12 sm:mb-16">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-white/50 hover:text-[#38BDF8] transition-all duration-300 hover:scale-110"
            >
              <social.Icon className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
          ))}
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-4 mb-12 sm:mb-16">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-white/50 text-sm sm:text-base hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs sm:text-sm">
            © {currentYear} Arlan Medya. Tüm hakları saklıdır.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 text-xs sm:text-sm hover:text-white transition-colors">
              Kullanım Şartları
            </a>
            <a href="#" className="text-white/40 text-xs sm:text-sm hover:text-white transition-colors">
              Gizlilik Politikası
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
