'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { FileCode, ArrowRight, Phone, Sparkles, Terminal, GitBranch, Database, Cpu, Code2, Braces, Cloud, Server } from 'lucide-react'

// ==================== TYPEWRITER SLOGANS ====================
const slogans = [
  "Dijitalde Öne Çıkın",
  "Hayallerinizi Kodluyoruz",
  "Yazılımın Gücünü Keşfedin",
  "Başarıyı Birlikte İnşa Edelim"
]

// ==================== PREMIUM KOD EDİTÖR KARTI ====================
const PremiumCodeEditor = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [sloganIndex, setSloganIndex] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const current = slogans[sloganIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2500)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setSloganIndex((prev: number) => (prev + 1) % slogans.length)
        }
      }
    }, isDeleting ? 35 : 80)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, sloganIndex])

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible(v => !v), 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div 
      className="premium-code-editor relative w-full"
      initial={{ opacity: 0, y: 30, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{ perspective: '1000px' }}
    >
      <div className="relative">
        {/* Animated Border */}
        <motion.div
          className="absolute -inset-0.5 rounded-2xl opacity-60"
          style={{
            background: 'linear-gradient(135deg, #38BDF8, #A855F7, #38BDF8)',
            backgroundSize: '200% 200%',
          }}
          animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Main Card */}
        <div
          className="relative w-full overflow-hidden rounded-2xl"
          style={{
            background: 'linear-gradient(160deg, #0c1222 0%, #070b14 50%, #0a0f1a 100%)',
            boxShadow: '0 0 0 1px rgba(56, 189, 248, 0.1), 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 100px rgba(56, 189, 248, 0.15)',
          }}
        >
          {/* Header Bar */}
          <div 
            className="relative flex items-center justify-between px-3 sm:px-5 py-3 sm:py-4"
            style={{
              background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.7) 100%)',
              borderBottom: '1px solid rgba(56, 189, 248, 0.1)',
            }}
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28ca41]" />
            </div>
            
            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1 sm:py-1.5 rounded-lg"
              style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.2)' }}
            >
              <FileCode className="w-3 h-3 sm:w-4 sm:h-4 text-[#38BDF8]" />
              <span className="text-xs sm:text-sm text-white/80 font-mono">arlanmedya.tsx</span>
            </div>
            
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-white/50" />
              </div>
              <div className="hidden sm:flex w-8 h-8 rounded-lg items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <GitBranch className="w-4 h-4 text-white/50" />
              </div>
            </div>
          </div>

          {/* Code Area */}
          <div className="relative p-3 sm:p-4 md:p-6 font-mono text-[10px] sm:text-[11px] md:text-[13px] leading-[1.6] sm:leading-[1.8] overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-10 md:w-12 flex flex-col items-end pr-2 sm:pr-3 md:pr-4 pt-3 sm:pt-4 md:pt-6 text-white/20 select-none"
              style={{ background: 'rgba(0,0,0,0.2)' }}
            >
              {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => (
                <div key={n} className="h-[16px] sm:h-[18px] md:h-[23.4px] text-[9px] sm:text-[10px] md:text-[11px]">{n}</div>
              ))}
            </div>
            
            <div className="pl-6 sm:pl-8 md:pl-10 relative">
              <motion.div
                className="absolute left-0 right-0 h-[16px] sm:h-[18px] md:h-[23.4px] -ml-6 sm:-ml-8 md:-ml-10 rounded"
                style={{ top: 'calc(11 * 16px)', background: 'rgba(56, 189, 248, 0.05)', borderLeft: '2px solid #38BDF8' }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <CodeLine><Purple>import</Purple> <Cyan>React</Cyan><Op>,</Op> {'{'} <Cyan>useState</Cyan> {'}'} <Purple>from</Purple> <Green>&apos;react&apos;</Green></CodeLine>
              <CodeLine><Purple>import</Purple> {'{'} <Cyan>motion</Cyan> {'}'} <Purple>from</Purple> <Green>&apos;framer-motion&apos;</Green></CodeLine>
              <CodeLine />
              <CodeLine><Comment>{'// 🚀 Arlan Medya - Dijital Çözümler'}</Comment></CodeLine>
              <CodeLine><Purple>const</Purple> <Yellow>ArlanMedya</Yellow> <Op>=</Op> <Op>{'() => {'}</Op></CodeLine>
              <CodeLine indent={1}><Purple>const</Purple> <Op>[</Op><Cyan>success</Cyan><Op>]</Op> <Op>=</Op> <Yellow>useState</Yellow><Op>(</Op><Orange>true</Orange><Op>)</Op></CodeLine>
              <CodeLine />
              <CodeLine indent={1}><Purple>return</Purple> <Op>(</Op></CodeLine>
              <CodeLine indent={2}><Green>{'<motion.div>'}</Green></CodeLine>
              <CodeLine indent={3}><Green>{'<Success />'}</Green></CodeLine>
              <CodeLine indent={2}><Green>{'</motion.div>'}</Green></CodeLine>
              
              <CodeLine>
                <Comment>{'// '}</Comment>
                <span className="text-[#38BDF8] font-semibold">{displayText}</span>
                <span className="inline-block w-0.5 h-3 sm:h-4 bg-[#38BDF8] ml-0.5 align-middle" style={{ opacity: cursorVisible ? 1 : 0 }} />
              </CodeLine>
            </div>
          </div>

          {/* Status Bar */}
          <div className="flex items-center justify-between px-3 sm:px-5 py-1.5 sm:py-2 text-[9px] sm:text-[11px]"
            style={{ background: 'linear-gradient(180deg, rgba(56, 189, 248, 0.08) 0%, rgba(56, 189, 248, 0.03) 100%)', borderTop: '1px solid rgba(56, 189, 248, 0.1)' }}
          >
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="text-[#38BDF8]">● Live</span>
              <span className="text-white/40 hidden sm:inline">TypeScript React</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 text-white/40">
              <span className="hidden sm:inline">UTF-8</span>
              <span className="text-[#28ca41]">✓ No Issues</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ==================== KOD SATIRI BİLEŞENLERİ ====================
const CodeLine = ({ children, indent = 0 }: { children?: React.ReactNode; indent?: number }) => (
  <div className="h-[16px] sm:h-[18px] md:h-[23.4px] flex items-center" style={{ paddingLeft: `${indent * 12}px` }}>{children}</div>
)
const Purple = ({ children }: { children: React.ReactNode }) => <span className="text-[#c084fc]">{children} </span>
const Cyan = ({ children }: { children: React.ReactNode }) => <span className="text-[#67e8f9]">{children}</span>
const Green = ({ children }: { children: React.ReactNode }) => <span className="text-[#6ee7b7]">{children}</span>
const Yellow = ({ children }: { children: React.ReactNode }) => <span className="text-[#fde047]">{children}</span>
const Orange = ({ children }: { children: React.ReactNode }) => <span className="text-[#fb923c]">{children}</span>
const Op = ({ children }: { children: React.ReactNode }) => <span className="text-white/70">{children}</span>
const Comment = ({ children }: { children: React.ReactNode }) => <span className="text-white/30 italic">{children}</span>

// ==================== FLOATING TECH ICON ====================
const FloatingTechIcon = ({ 
  icon: Icon, 
  color, 
  size = 40,
  mobileSize = 32,
  position,
  mobilePosition,
  delay,
}: { 
  icon: typeof Terminal
  color: string
  size?: number
  mobileSize?: number
  position: { top?: string; bottom?: string; left?: string; right?: string }
  mobilePosition?: { top?: string; bottom?: string; left?: string; right?: string }
  delay: number
}) => (
  <>
    {/* Desktop */}
    <motion.div
      className="absolute hidden lg:flex items-center justify-center rounded-xl"
      style={{
        ...position,
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${color}20, ${color}05)`,
        border: `1px solid ${color}30`,
        boxShadow: `0 10px 40px -10px ${color}40`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      animate={{ y: [0, -15, 0], rotate: [0, 5, 0, -5, 0] }}
      whileHover={{ scale: 1.2, boxShadow: `0 20px 50px -10px ${color}60` }}
    >
      <Icon size={size * 0.5} style={{ color }} />
    </motion.div>
    
    {/* Mobile/Tablet */}
    <motion.div
      className="absolute flex lg:hidden items-center justify-center rounded-lg"
      style={{
        ...(mobilePosition || position),
        width: mobileSize,
        height: mobileSize,
        background: `linear-gradient(135deg, ${color}15, ${color}05)`,
        border: `1px solid ${color}25`,
        boxShadow: `0 5px 20px -5px ${color}30`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay + 0.1 }}
      animate={{ y: [0, -8, 0] }}
    >
      <Icon size={mobileSize * 0.5} style={{ color }} />
    </motion.div>
  </>
)

// ==================== FLOATING BADGE ====================
const FloatingBadge = ({ 
  text, 
  color, 
  position,
  mobilePosition,
  delay 
}: { 
  text: string
  color: string
  position: { top?: string; bottom?: string; left?: string; right?: string }
  mobilePosition?: { top?: string; bottom?: string; left?: string; right?: string }
  delay: number
}) => (
  <>
    {/* Desktop */}
    <motion.div
      className="absolute hidden xl:flex items-center gap-2 px-4 py-2 rounded-full"
      style={{
        ...position,
        background: `linear-gradient(135deg, ${color}15, ${color}05)`,
        border: `1px solid ${color}30`,
        boxShadow: `0 10px 30px -10px ${color}30`,
      }}
      initial={{ opacity: 0, scale: 0.8, x: -20 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      animate={{ y: [0, -10, 0] }}
    >
      <div className="w-2 h-2 rounded-full" style={{ background: color, boxShadow: `0 0 10px ${color}` }} />
      <span className="text-sm font-medium" style={{ color }}>{text}</span>
    </motion.div>
    
    {/* Mobile */}
    <motion.div
      className="absolute flex xl:hidden items-center gap-1.5 px-2.5 py-1.5 rounded-full"
      style={{
        ...(mobilePosition || position),
        background: `linear-gradient(135deg, ${color}10, ${color}05)`,
        border: `1px solid ${color}20`,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay + 0.2 }}
      animate={{ y: [0, -5, 0] }}
    >
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
      <span className="text-xs font-medium" style={{ color }}>{text}</span>
    </motion.div>
  </>
)

// ==================== GLOWING ORB ====================
const GlowingOrb = ({ 
  color, 
  size, 
  mobileSize,
  position, 
  delay = 0,
  duration = 4 
}: { 
  color: string
  size: number
  mobileSize?: number
  position: { top?: string; bottom?: string; left?: string; right?: string }
  delay?: number
  duration?: number
}) => (
  <>
    {/* Desktop */}
    <motion.div
      className="absolute rounded-full pointer-events-none hidden sm:block"
      style={{
        ...position,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}40 0%, ${color}10 40%, transparent 70%)`,
        filter: 'blur(1px)',
      }}
      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
    />
    {/* Mobile */}
    <motion.div
      className="absolute rounded-full pointer-events-none sm:hidden"
      style={{
        ...position,
        width: mobileSize || size * 0.6,
        height: mobileSize || size * 0.6,
        background: `radial-gradient(circle, ${color}30 0%, ${color}10 40%, transparent 70%)`,
        filter: 'blur(1px)',
      }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  </>
)

// ==================== ANA COMPONENT ====================
const KodKarti = () => {
  const router = useRouter()

  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* ========== BACKGROUND ELEMENTS ========== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large Gradient Orbs */}
        <motion.div
          className="absolute -top-20 -left-20 sm:-left-40 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 60%)' }}
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 sm:-right-40 w-[350px] sm:w-[550px] lg:w-[800px] h-[350px] sm:h-[550px] lg:h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 60%)' }}
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating Particles - Her ekranda görünür */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 3 === 0 ? 6 : i % 2 === 0 ? 4 : 3,
              height: i % 3 === 0 ? 6 : i % 2 === 0 ? 4 : 3,
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 5) * 18}%`,
              background: i % 2 === 0 ? '#38BDF8' : '#A855F7',
              opacity: 0.5,
              boxShadow: i % 2 === 0 ? '0 0 10px #38BDF8' : '0 0 10px #A855F7',
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{ duration: 4 + i * 0.4, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}

        {/* Extra Decorative Lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-32 sm:w-48 lg:w-64 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.3), transparent)' }}
          animate={{ x: [-100, 200], opacity: [0, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-0 w-32 sm:w-48 lg:w-64 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)' }}
          animate={{ x: [100, -200], opacity: [0, 1, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 3 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
          
          {/* ========== SOL İÇERİK ========== */}
          <motion.div
            className="relative text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8"
              style={{
                background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(168, 85, 247, 0.1))',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                boxShadow: '0 0 30px rgba(56, 189, 248, 0.1)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4 text-[#38BDF8]" />
              <span className="text-transparent bg-gradient-to-r from-[#38BDF8] to-[#A855F7] bg-clip-text text-xs sm:text-sm font-semibold">
                Profesyonel Yazılım Çözümleri
              </span>
            </motion.div>

            {/* Ana Başlık */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-[1.1]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="text-white">Dijital Dünyada</span>
              <br />
              <span className="text-white">Güvenilir </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#38BDF8] via-cyan-400 to-[#A855F7] bg-clip-text text-transparent">
                  Ortağınız.
                </span>
                <motion.div
                  className="absolute -bottom-1 sm:-bottom-2 left-0 h-1 sm:h-1.5 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #38BDF8, #A855F7)', boxShadow: '0 0 20px rgba(56, 189, 248, 0.5)' }}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </span>
            </motion.h2>

            {/* Açıklama */}
            <motion.p
              className="text-white/50 text-base sm:text-lg lg:text-xl xl:text-2xl mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Arlan Medya olarak, işletmenizin dijital dönüşümünü uçtan uca yönetiyoruz. 
              Modern teknolojiler ve yaratıcı çözümlerle markanızı geleceğe taşıyoruz.
            </motion.p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
              style={{ opacity: 1, transform: 'translateY(0px)' }}
            >
              <a
                href="/iletisim"
                className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white overflow-hidden w-full sm:w-auto justify-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%)',
                  boxShadow: '0 20px 40px -15px rgba(56, 189, 248, 0.5)',
                  textDecoration: 'none'
                }}
              >
                <span className="relative z-10 text-sm sm:text-base">Ücretsiz Danışmanlık</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="tel:+905307464899"
                className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white border border-white/20 w-full sm:w-auto justify-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)', textDecoration: 'none' }}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#38BDF8]" />
                <span className="text-sm sm:text-base">Bizi Arayın</span>
              </a>
            </div>
          </motion.div>

          {/* ========== SAĞ - KOD KARTI + DEKORATÖR ELEMENTLER ========== */}
          <motion.div
            className="relative flex items-center justify-center min-h-[350px] sm:min-h-[400px] lg:min-h-[550px]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* ===== GLOW EFFECTS ===== */}
            <GlowingOrb color="#38BDF8" size={300} mobileSize={180} position={{ top: '10%', left: '5%' }} delay={0} duration={5} />
            <GlowingOrb color="#A855F7" size={250} mobileSize={150} position={{ bottom: '10%', right: '5%' }} delay={1} duration={6} />
            <GlowingOrb color="#10B981" size={150} mobileSize={100} position={{ top: '50%', right: '15%' }} delay={2} duration={4} />

            {/* ===== ORBITAL RINGS - Tüm ekranlarda ===== */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Outer Ring */}
              <motion.div
                className="absolute w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] rounded-full"
                style={{ border: '1px solid rgba(56, 189, 248, 0.1)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              >
                <motion.div
                  className="absolute w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#38BDF8]"
                  style={{ top: '0%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 0 15px #38BDF8' }}
                />
                <motion.div
                  className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#A855F7]"
                  style={{ bottom: '20%', right: '0%', transform: 'translate(50%, 50%)', boxShadow: '0 0 10px #A855F7' }}
                />
              </motion.div>
              
              {/* Middle Ring */}
              <motion.div
                className="absolute w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px] rounded-full"
                style={{ border: '1px solid rgba(168, 85, 247, 0.08)' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              >
                <motion.div
                  className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#10B981]"
                  style={{ bottom: '0%', left: '50%', transform: 'translate(-50%, 50%)', boxShadow: '0 0 12px #10B981' }}
                />
              </motion.div>

              {/* Inner Ring */}
              <motion.div
                className="absolute w-[160px] sm:w-[200px] md:w-[260px] lg:w-[300px] h-[160px] sm:h-[200px] md:h-[260px] lg:h-[300px] rounded-full"
                style={{ border: '1px dashed rgba(56, 189, 248, 0.05)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* ===== PREMIUM KOD KARTI ===== */}
            <div className="relative z-10 w-full max-w-[300px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[440px] px-2 sm:px-0">
              <PremiumCodeEditor />
            </div>

            {/* ===== FLOATING TECH ICONS - Tüm ekranlarda ===== */}
            <FloatingTechIcon 
              icon={Terminal} 
              color="#38BDF8" 
              size={52} mobileSize={36}
              position={{ top: '2%', left: '2%' }}
              mobilePosition={{ top: '0%', left: '5%' }}
              delay={0.5}
            />
            <FloatingTechIcon 
              icon={GitBranch} 
              color="#A855F7" 
              size={48} mobileSize={34}
              position={{ top: '8%', right: '-2%' }}
              mobilePosition={{ top: '5%', right: '5%' }}
              delay={0.7}
            />
            <FloatingTechIcon 
              icon={Database} 
              color="#10B981" 
              size={50} mobileSize={34}
              position={{ bottom: '20%', left: '-5%' }}
              mobilePosition={{ bottom: '25%', left: '2%' }}
              delay={0.9}
            />
            <FloatingTechIcon 
              icon={Cpu} 
              color="#F59E0B" 
              size={52} mobileSize={36}
              position={{ bottom: '5%', right: '0%' }}
              mobilePosition={{ bottom: '5%', right: '5%' }}
              delay={1.1}
            />
            <FloatingTechIcon 
              icon={Code2} 
              color="#EC4899" 
              size={44} mobileSize={30}
              position={{ top: '35%', left: '-8%' }}
              mobilePosition={{ top: '40%', left: '0%' }}
              delay={1.3}
            />
            <FloatingTechIcon 
              icon={Braces} 
              color="#6366F1" 
              size={46} mobileSize={32}
              position={{ top: '25%', right: '-5%' }}
              mobilePosition={{ top: '25%', right: '0%' }}
              delay={1.5}
            />
            <FloatingTechIcon 
              icon={Cloud} 
              color="#0EA5E9" 
              size={44} mobileSize={30}
              position={{ bottom: '35%', right: '-8%' }}
              mobilePosition={{ bottom: '40%', right: '0%' }}
              delay={1.7}
            />
            <FloatingTechIcon 
              icon={Server} 
              color="#8B5CF6" 
              size={42} mobileSize={28}
              position={{ bottom: '45%', left: '-10%' }}
              mobilePosition={{ bottom: '55%', left: '0%' }}
              delay={1.9}
            />

            {/* ===== FLOATING BADGES ===== */}
            <FloatingBadge
              text="React.js"
              color="#61DAFB"
              position={{ top: '0%', left: '25%' }}
              mobilePosition={{ top: '-2%', left: '30%' }}
              delay={0.6}
            />
            <FloatingBadge
              text="Next.js"
              color="#ffffff"
              position={{ top: '15%', right: '15%' }}
              mobilePosition={{ top: '12%', right: '20%' }}
              delay={0.8}
            />
            <FloatingBadge
              text="TypeScript"
              color="#3178C6"
              position={{ bottom: '15%', left: '15%' }}
              mobilePosition={{ bottom: '12%', left: '15%' }}
              delay={1}
            />
            <FloatingBadge
              text="Tailwind"
              color="#38BDF8"
              position={{ bottom: '0%', right: '20%' }}
              mobilePosition={{ bottom: '-2%', right: '25%' }}
              delay={1.2}
            />

            {/* ===== EXTRA CORNER DECORATIONS ===== */}
            {/* Top Left Corner */}
            <motion.div
              className="absolute top-0 left-0 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#38BDF8]/50 to-transparent" />
              <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-[#38BDF8]/50 to-transparent" />
            </motion.div>

            {/* Bottom Right Corner */}
            <motion.div
              className="absolute bottom-0 right-0 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-[#A855F7]/50 to-transparent" />
              <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-[#A855F7]/50 to-transparent" />
            </motion.div>

            {/* Floating Plus Signs */}
            <motion.div
              className="absolute text-[#38BDF8]/20 text-xl sm:text-2xl lg:text-3xl font-thin"
              style={{ top: '5%', left: '40%' }}
              animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity }}
            >
              +
            </motion.div>
            <motion.div
              className="absolute text-[#A855F7]/20 text-lg sm:text-xl lg:text-2xl font-thin"
              style={{ bottom: '10%', right: '35%' }}
              animate={{ rotate: [0, -90, -180, -270, -360], scale: [1, 1.3, 1] }}
              transition={{ duration: 12, repeat: Infinity, delay: 1 }}
            >
              +
            </motion.div>

            {/* Small Dots Pattern */}
            <div className="absolute top-8 sm:top-10 right-8 sm:right-10 grid grid-cols-3 gap-1 sm:gap-1.5 opacity-20">
              {[...Array(9)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-[#38BDF8]"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                />
              ))}
            </div>
            <div className="absolute bottom-8 sm:bottom-10 left-8 sm:left-10 grid grid-cols-3 gap-1 sm:gap-1.5 opacity-20">
              {[...Array(9)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-[#A855F7]"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default KodKarti