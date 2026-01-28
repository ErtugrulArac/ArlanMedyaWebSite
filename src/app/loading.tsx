

import Image from 'next/image'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#050816] flex items-center justify-center z-[9999]">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #38BDF8 0%, transparent 70%)' }}
        />
      </div>

      {/* Loading content */}
      <div className="relative flex flex-col items-center gap-6">
        {/* Logo spinner */}
        <div className="relative w-24 h-24">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-[#38BDF8]/20" />
          
          {/* Spinning ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#38BDF8] animate-spin" />
          
          {/* Logo */}
          <div className="absolute inset-2 rounded-full bg-[#38BDF8]/5 flex items-center justify-center">
            <Image 
              src="/logolar/arlanlogonav.webp" 
              alt="Arlan Medya" 
              width={56} 
              height={56}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  )
}
