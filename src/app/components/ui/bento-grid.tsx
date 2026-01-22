'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { cn } from "@/lib/utils"

// Counter Component
function Counter({ 
  targetValue, 
  format = (v: number) => Math.ceil(v).toString() 
}: { 
  targetValue: number
  format?: (v: number) => string 
}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const duration = 2000
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      setValue(targetValue * progress)
      if (progress === 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [targetValue])

  return <span>{format(value)}</span>
}

// Ticker Component
function Ticker({ value }: { value: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {value}
    </motion.span>
  )
}

// Typing Text Component
function TypingText({ text, className }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState('')
  
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [text])

  return <span className={className}>{displayText}<span className="animate-pulse">|</span></span>
}

// BoldCopy Component
function BoldCopy({
  text = "ARLAN",
  className,
  textClassName,
  backgroundTextClassName,
}: {
  text: string
  className?: string
  textClassName?: string
  backgroundTextClassName?: string
}) {
  if (!text?.length) return null

  return (
    <div className={cn("group relative flex items-center justify-center px-2 py-2 md:px-6 md:py-4", className)}>
      <div className={cn("text-4xl font-black uppercase text-white/10 transition-all group-hover:opacity-50 md:text-8xl", backgroundTextClassName)}>
        {text}
      </div>
      <div className={cn("text-md absolute font-black uppercase text-[#38BDF8] transition-all group-hover:text-4xl md:text-3xl group-hover:md:text-8xl", textClassName)}>
        {text}
      </div>
    </div>
  )
}

// Bento Card Component
function BentoCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("relative h-full w-full overflow-hidden rounded-3xl p-6 border border-white/10 backdrop-blur-xl", className)}
    >
      {children}
    </motion.div>
  )
}

// Feature 1: Rating
function FeatureOne() {
  return (
    <BentoCard className="flex flex-col bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9]">
      <div className="font-bold text-white/80">Müşteri Memnuniyeti</div>
      <div className="mt-auto flex items-end justify-end">
        <div className="text-4xl font-black text-white md:text-7xl">
          <Ticker value="%98" />
        </div>
        <span className="text-xl text-white/80 ml-1 mb-2">★</span>
      </div>
    </BentoCard>
  )
}

// Feature 2: Students/Customers
function FeatureTwo() {
  return (
    <BentoCard className="relative flex flex-col bg-gradient-to-br from-purple-600 to-violet-600 sm:col-span-2">
      <strong className="text-2xl font-semibold text-white">
        <Counter targetValue={500} format={(v) => Math.ceil(v) + "+ Mutlu Müşteri"} />
      </strong>
      <div className="mt-auto flex -space-x-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-white/30 to-white/10 border-2 border-purple-500 flex items-center justify-center text-white font-bold text-xs">
            {['A', 'B', 'C', 'D', 'E'][i]}
          </div>
        ))}
        <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-purple-500 flex items-center justify-center text-white font-bold text-xs">
          +495
        </div>
      </div>
    </BentoCard>
  )
}

// Feature 3: AI Integration
function FeatureThree() {
  return (
    <BentoCard className="flex flex-col bg-gradient-to-br from-orange-500 to-amber-500">
      <svg className="w-8 h-8 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <strong className="mt-1 inline-block text-sm text-white/90">AI Destekli Analiz</strong>
      <div className="mt-auto">
        <div className="text-sm font-medium text-white/80">Rakip analizi yap</div>
        <div className="font-semibold text-white">
          <TypingText text="Rakipleriniz analiz ediliyor..." />
        </div>
      </div>
    </BentoCard>
  )
}

// Feature 4: Progress Report
function FeatureFour() {
  return (
    <BentoCard className="flex items-center gap-4 bg-gradient-to-br from-emerald-500 to-green-500 sm:col-span-2 md:flex-row-reverse">
      <div className="text-xl md:text-2xl font-black text-white">Aylık Raporlama</div>
      <div className="relative flex-shrink-0">
        <div className="w-32 h-20 rounded-xl bg-white/20 p-3">
          <div className="flex gap-1 h-full items-end">
            {[40, 70, 50, 90, 60].map((h, i) => (
              <motion.div 
                key={i} 
                className="flex-1 bg-white/60 rounded-t"
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              />
            ))}
          </div>
        </div>
      </div>
    </BentoCard>
  )
}

// Feature 5: Brand
function FeatureFive() {
  return (
    <BentoCard className="flex flex-col items-center justify-center bg-gradient-to-br from-[#1E293B] to-[#0F172A] sm:col-span-2">
      <BoldCopy text="ARLAN" />
    </BentoCard>
  )
}

// Feature 6: Weekly Stats
function FeatureSix() {
  return (
    <BentoCard className="bg-gradient-to-br from-[#38BDF8]/20 to-[#0EA5E9]/10">
      <div className="flex gap-1 h-24 items-end justify-between">
        {[30, 70, 60, 90, 40, 80, 55].map((h, i) => (
          <motion.div 
            key={i} 
            className="flex-1 bg-[#38BDF8] rounded-t-lg max-w-8"
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          />
        ))}
      </div>
      <div className="mt-4 text-center font-bold text-white">Haftalık Performans</div>
    </BentoCard>
  )
}

// Feature 7: Services
function FeatureSeven() {
  return (
    <BentoCard className="flex flex-col gap-2 bg-gradient-to-br from-rose-500 to-pink-500">
      <motion.div 
        className="w-full -rotate-1 rounded-full bg-white/20 py-2 text-center font-semibold text-white md:-rotate-3"
        whileHover={{ scale: 1.05 }}
      >
        Web Tasarım
      </motion.div>
      <motion.div 
        className="w-full rotate-1 rounded-full bg-white/20 py-2 text-center font-semibold text-white md:rotate-3"
        whileHover={{ scale: 1.05 }}
      >
        Sosyal Medya
      </motion.div>
      <motion.div 
        className="w-full rounded-full bg-white/20 py-2 text-center font-semibold text-white"
        whileHover={{ scale: 1.05 }}
      >
        SEO
      </motion.div>
    </BentoCard>
  )
}

// Feature 8: Support
function FeatureEight() {
  return (
    <BentoCard className="relative flex flex-col bg-gradient-to-br from-indigo-600 to-blue-600 sm:col-span-2">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <div>
          <div className="text-lg font-black text-white">7/24 Destek</div>
          <p className="text-sm text-white/80">Her zaman yanınızdayız</p>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <span className="px-3 py-1 rounded-full bg-white/20 text-xs text-white">WhatsApp</span>
        <span className="px-3 py-1 rounded-full bg-white/20 text-xs text-white">E-posta</span>
        <span className="px-3 py-1 rounded-full bg-white/20 text-xs text-white">Telefon</span>
      </div>
    </BentoCard>
  )
}

export default function BentoGrid() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 sm:grid-rows-3">
        <FeatureOne />
        <FeatureTwo />
        <FeatureThree />
        <FeatureFour />
        <FeatureFive />
        <FeatureSix />
        <FeatureSeven />
        <FeatureEight />
      </div>
    </div>
  )
}
