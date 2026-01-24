'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'Hizmetler', href: '#hizmetler' },
    { label: 'Projeler', href: '#projeler' },
    { label: 'Hakkımızda', href: '#hakkimizda' },
    { label: 'İletişim', href: '#iletisim' },
  ]

  const socials = [
    { label: 'Instagram', href: 'https://instagram.com/arlanmedya' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/arlanmedya' },
    { label: 'Twitter', href: 'https://twitter.com/arlanmedya' },
  ]

  return (
    <footer className="relative overflow-hidden">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/30 to-transparent" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-[#050816]">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.5) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 sm:pb-12">
          
          {/* Top Section - Logo & CTA */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-20 mb-16 sm:mb-20">
            {/* Logo & Tagline */}
            <div className="flex-1">
              <motion.div
                className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center overflow-hidden"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(168, 85, 247, 0.15))',
                    border: '1px solid rgba(56, 189, 248, 0.2)'
                  }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <img 
                    src="/logolar/arlanlogonav.webp" 
                    alt="Arlan Logo" 
                    className="w-9 h-9 sm:w-11 sm:h-11 object-contain"
                  />
                </motion.div>
                <div>
                  <h3 className="text-white font-bold text-xl sm:text-2xl tracking-tight">Arlan Medya</h3>
                  <p className="text-white/40 text-xs sm:text-sm">Dijital Çözümler</p>
                </div>
              </motion.div>
              
              <motion.p
                className="text-white/50 text-sm sm:text-base max-w-md leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Markanızı dijital dünyada öne çıkaran yaratıcı çözümler sunuyoruz.
              </motion.p>
            </div>

            {/* Quick Contact */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a 
                href="mailto:info@arlanmedya.com"
                className="group flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#38BDF8]/10 group-hover:bg-[#38BDF8]/20 transition-colors">
                  <Mail className="w-4 h-4 text-[#38BDF8]" />
                </div>
                <span className="text-white/70 text-sm group-hover:text-white transition-colors">info@arlanmedya.com</span>
              </a>
              
              <a 
                href="tel:+905551234567"
                className="group flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#A855F7]/10 group-hover:bg-[#A855F7]/20 transition-colors">
                  <Phone className="w-4 h-4 text-[#A855F7]" />
                </div>
                <span className="text-white/70 text-sm group-hover:text-white transition-colors">+90 555 123 45 67</span>
              </a>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10 sm:mb-12" />

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            
            {/* Links */}
            <motion.nav
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {links.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="text-white/40 text-sm hover:text-white transition-colors duration-300 relative group"
                  whileHover={{ x: 2 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#38BDF8] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </motion.nav>

            {/* Socials */}
            <motion.div
              className="flex items-center gap-4 sm:gap-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-white/40 text-sm hover:text-white transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  <span>{social.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Copyright Strip */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <p className="text-white/30 text-xs sm:text-sm">
                © {currentYear} Arlan Medya. Tüm hakları saklıdır.
              </p>
              <div className="flex items-center gap-1.5 text-white/30 text-xs sm:text-sm">
                <span>Türkiye'de</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-red-500"
                >
                  ♥
                </motion.span>
                <span>ile yapıldı</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#38BDF8] rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />
    </footer>
  )
}
