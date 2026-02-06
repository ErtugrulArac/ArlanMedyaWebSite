'use client'

import React, { useEffect, useState } from 'react'
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'
import { CheckCircle2, ArrowLeft, Home, Mail, MessageSquare, Sparkles, Heart, Star } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLoading } from '../context/LoadingContext'

export default function TesekkurlerClient() {
  const reduce = useReducedMotion()
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()
  const { setIsLoading } = useLoading()

  useEffect(() => {
    setIsClient(true)
    // Sayfa yüklendiğinde global loading'i kapat
    setIsLoading(false)
  }, [setIsLoading])

  const motionIn = (delay = 0) =>
    reduce || !isClient
      ? { initial: undefined, animate: undefined, transition: undefined }
      : {
          initial: { opacity: 0, y: 20, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.6, delay },
        }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white">Yükleniyor...</div>
      </div>
    )
  }

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden relative">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/15 to-blue-500/15 rounded-full blur-3xl"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <m.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                x: [Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
                y: [Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800), Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 lg:pt-24">
          <m.div
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Success Icon */}
            <m.div {...motionIn(0)} className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                  <CheckCircle2 className="w-16 h-16 text-white" />
                </div>
                <m.div
                  className="absolute -inset-4 border-2 border-white/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <m.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="w-4 h-4 text-yellow-900" />
                </m.div>
              </div>
            </m.div>

            {/* Main Message */}
            <m.h1 
              {...motionIn(0.1)} 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Teşekkürler!
              </span>
            </m.h1>

            <m.div {...motionIn(0.2)} className="space-y-4 mb-12">
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
                Formunuzu başarıyla aldık
              </p>
              <div className="flex items-center justify-center gap-2 text-lg text-gray-400">
                <Heart className="w-5 h-5 text-red-400" />
                <span>En kısa zamanda sizinle iletişime geçeceğiz</span>
                <Heart className="w-5 h-5 text-red-400" />
              </div>
            </m.div>

            {/* Info Cards */}
            <m.div {...motionIn(0.3)} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">E-posta Bildirimi</h3>
                <p className="text-gray-400 text-sm">E postanız başarı şekilde alındı</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <MessageSquare className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">24 Saat İçinde</h3>
                <p className="text-gray-400 text-sm">İlk yanıtımızı alacaksınız</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Ücretsiz Danışmanlık</h3>
                <p className="text-gray-400 text-sm">Projeniz için ön görüşme</p>
              </div>
            </m.div>

            {/* Action Buttons */}
            <m.div {...motionIn(0.4)} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/" className="group">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:shadow-blue-500/25">
                  <Home className="w-5 h-5" />
                  Ana Sayfa
                  <m.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </m.div>
                </button>
              </Link>

              <button 
                onClick={() => router.back()}
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3"
              >
                <ArrowLeft className="w-5 h-5" />
                Geri Dön
              </button>
            </m.div>

            {/* Logo */}
            <m.div {...motionIn(0.5)} className="mt-12 flex justify-center">
              <img 
                src="/logolar/arlanlogonav.webp" 
                alt="Arlan Logo" 
                className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </m.div>

            {/* Additional Info */}
            <m.div {...motionIn(0.6)} className="mt-12 pt-8 pb-8 border-t border-white/10">
              <p className="text-gray-500 text-xs sm:text-sm">
                Acil bir durumunuz mu var? 
                <a href="tel:+905307464899" className="text-blue-400 hover:text-blue-300 ml-2 underline">
                  Hemen arayın: (530) 746 48 99
                </a>
              </p>
            </m.div>
          </m.div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
    </LazyMotion>
  )
}
