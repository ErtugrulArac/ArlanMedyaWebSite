'use client'

import { useLoading } from '../context/LoadingContext'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function GlobalLoader() {
  const { isInitialLoad } = useLoading()

  if (!isInitialLoad) return null

  return (
    <motion.div 
      className="fixed inset-0 bg-[#050816] flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #38BDF8 0%, transparent 70%)' }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut' 
          }}
        />
      </div>

      {/* Loading content */}
      <div className="relative flex flex-col items-center gap-6">
        {/* Logo spinner */}
        <div className="relative w-24 h-24">
          {/* Outer ring */}
          <motion.div 
            className="absolute inset-0 rounded-full border-2 border-[#38BDF8]/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          
          {/* Spinning ring */}
          <motion.div 
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#38BDF8]"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
          
          {/* Logo */}
          <motion.div 
            className="absolute inset-2 rounded-full bg-[#38BDF8]/5 flex items-center justify-center"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut' 
            }}
          >
            <Image 
              src="/logolar/arlanlogonav.webp" 
              alt="Arlan Medya" 
              width={56} 
              height={56}
              className="object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Loading dots */}
        <div className="flex gap-1.5">
          {[0, 150, 300].map((delay, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full bg-[#38BDF8]"
              animate={{ 
                y: [-4, 4, -4],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                delay: delay / 1000,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>

        {/* Loading text */}
        <motion.p 
          className="text-white/60 text-sm font-medium"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          Hazırlanıyor...
        </motion.p>
      </div>
    </motion.div>
  )
}
