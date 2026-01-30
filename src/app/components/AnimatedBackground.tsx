const AnimatedBackground = () => {
  return (
    <>
      {/* Optimized Animated Background - Reduced effects for better performance */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Static Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>
        
        {/* Simplified Grid - No animation */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.02) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>

        {/* Reduced Floating Orbs - Only 2 main orbs with CSS animation */}
        <div 
          className="absolute top-1/4 -left-20 w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500/30 to-cyan-500/15 rounded-full blur-3xl animate-float"
        ></div>
        <div 
          className="absolute bottom-1/4 -right-20 w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-cyan-400/20 to-blue-600/15 rounded-full blur-3xl animate-float-delayed"
          style={{ animationDelay: '5s' }}
        ></div>
      </div>
    </>
  )
}

export default AnimatedBackground
