'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SiInstagram, SiX, SiLinkedin } from 'react-icons/si'

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
    <footer className="relative overflow-hidden py-16 sm:py-20 mt-20 sm:mt-32">
      {/* Subtle static glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#38BDF8] rounded-full blur-[150px] opacity-[0.04] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Arlan Logo */}
        <div className="relative flex items-center justify-center mb-6 sm:mb-8">
          <div 
            className="relative p-6 sm:p-8"
            style={{
              filter: 'drop-shadow(0 0 40px rgba(56, 189, 248, 0.15))',
            }}
          >
            <Image
              src="/logolar/arlanlogonav.webp"
              alt="Arlan Medya Logo"
              width={200}
              height={80}
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 mb-6 sm:mb-8">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-white/50 hover:text-[#38BDF8] transition-colors duration-200"
            >
              <social.Icon className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
          ))}
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 lg:gap-x-12 gap-y-3 mb-6 sm:mb-8">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-white/50 text-xs sm:text-sm hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p className="text-white/30">
            © {currentYear} Arlan Medya. Tüm hakları saklıdır.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/40 hover:text-white transition-colors duration-200">
              Kullanım Şartları
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors duration-200">
              Gizlilik Politikası
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
