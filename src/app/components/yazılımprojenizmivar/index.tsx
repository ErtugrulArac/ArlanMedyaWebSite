'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Rocket, 
  Code2, 
  Sparkles, 
  ArrowRight
} from 'lucide-react'

// Animated Code Block Component
const FloatingCodeBlock = React.memo(() => {
  return (
    <motion.div
      className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div 
        className="relative w-72 rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9))',
          border: '1px solid rgba(56, 189, 248, 0.2)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(56, 189, 248, 0.1)'
        }}
      >
        {/* Editor Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-white/40 text-xs ml-2 font-mono">your-project.tsx</span>
        </div>
        
        {/* Code Content */}
        <div className="p-4 font-mono text-xs space-y-1">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-[#A855F7]">const</span>
            <span className="text-white"> yourProject </span>
            <span className="text-[#38BDF8]">=</span>
            <span className="text-white"> {'{'}</span>
          </motion.div>
          
          <motion.div
            className="pl-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-[#10B981]">idea</span>
            <span className="text-white">: </span>
            <span className="text-[#FBBF24]">"Hayal Ettiğiniz"</span>
            <span className="text-white">,</span>
          </motion.div>
          
          <motion.div
            className="pl-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <span className="text-[#10B981]">developer</span>
            <span className="text-white">: </span>
            <span className="text-[#FBBF24]">"Arlan Medya"</span>
            <span className="text-white">,</span>
          </motion.div>
          
          <motion.div
            className="pl-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-[#10B981]">result</span>
            <span className="text-white">: </span>
            <span className="text-[#FBBF24]">"Başarılı Proje"</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <span className="text-white">{'}'}</span>
            <span className="text-[#38BDF8]">;</span>
          </motion.div>
          
          <motion.div
            className="mt-3 pt-3 border-t border-white/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <span className="text-[#A855F7]">await</span>
            <span className="text-white"> arlanMedya.</span>
            <span className="text-[#38BDF8]">build</span>
            <span className="text-white">(yourProject)</span>
            <span className="text-[#38BDF8]">;</span>
          </motion.div>
          
          <motion.div
            className="flex items-center gap-2 mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
          >
            <span className="text-[#10B981]">// ✓ Build successful!</span>
            <motion.span
              className="inline-block w-2 h-4 bg-[#38BDF8]"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Floating particles */}
      <motion.div
        className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#38BDF8]/20 blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full bg-[#A855F7]/20 blur-xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.div>
  )
})
FloatingCodeBlock.displayName = 'FloatingCodeBlock'

// Main Component
export default function YazilimProjenizMiVar() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section 
      ref={containerRef}
      className="relative py-20 sm:py-28 md:py-36 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Central glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-30"
          style={{
            background: 'radial-gradient(ellipse, rgba(56, 189, 248, 0.08), transparent 70%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="relative">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.2)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles size={16} className="text-[#38BDF8]" />
              <span className="text-[#38BDF8] text-sm font-medium">Hayallerinizi Kodluyoruz</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Yazılım Projeniz
              <br />
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent">
                Mi Var?
              </span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-lg sm:text-xl text-white/70 mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Aklınızdaki fikri, modern teknolojilerle profesyonel bir ürüne dönüştürelim.
              <span className="text-white font-medium"> Siz hayal edin, biz geliştirelim.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.a
                href="#iletisim"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #38BDF8, #0EA5E9)',
                  boxShadow: '0 10px 40px -10px rgba(56, 189, 248, 0.5)'
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket size={20} />
                  Projeyi Başlat
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(135deg, #0EA5E9, #0284C7)' }}
                />
              </motion.a>
              
              <motion.a
                href="#portfolyo"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  borderColor: 'rgba(168, 85, 247, 0.3)',
                  background: 'rgba(168, 85, 247, 0.1)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Code2 size={20} className="text-[#A855F7]" />
                Projelerimizi Gör
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Code Block (Desktop) */}
          <div className="relative hidden lg:block">
            <FloatingCodeBlock />
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          className="relative mt-16 sm:mt-20 p-8 sm:p-10 rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Banner background */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(168, 85, 247, 0.1))',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}
          />
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(56, 189, 248, 0.15), transparent 50%),
                               radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.15), transparent 50%)`
            }}
          />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Ücretsiz Proje Değerlendirmesi
              </h3>
              <p className="text-white/60 max-w-md">
                Projenizi anlatalım, size özel çözüm ve fiyat teklifi sunalım. Hiçbir taahhüt yok.
              </p>
            </div>
            
            <motion.a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #10B981, #059669)',
                boxShadow: '0 10px 40px -10px rgba(16, 185, 129, 0.5)'
              }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp ile İletişim
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
