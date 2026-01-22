'use client'

import React from 'react'

const AnimatedBackground = () => {
  return (
    <>
      {/* Animated Background - Fixed for entire page */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 -left-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500/40 to-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-cyan-400/30 to-blue-600/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-purple-500/15 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Additional Accent Orbs */}
        <div className="absolute top-10 right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 bg-gradient-to-br from-indigo-500/25 to-purple-500/15 rounded-full blur-2xl animate-float-reverse"></div>
        <div className="absolute bottom-10 left-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 bg-gradient-to-br from-teal-500/20 to-cyan-500/15 rounded-full blur-2xl animate-float-slow"></div>
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20"></div>
      </div>
    </>
  )
}

export default AnimatedBackground
