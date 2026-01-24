'use client'

import { useEffect, useState } from 'react'

export default function GlobalLoader() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true)
    }

    window.addEventListener('navigation-start', handleStart)

    return () => {
      window.removeEventListener('navigation-start', handleStart)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#050816'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        <img
          src="/logolar/arlanlogonav.webp"
          alt="Loading"
          style={{ height: '64px', width: 'auto' }}
        />
        <div 
          style={{
            width: '48px',
            height: '48px',
            border: '2px solid transparent',
            borderTopColor: '#38BDF8',
            borderRightColor: '#A855F7',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}
        />
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>Yükleniyor...</p>
      </div>
    </div>
  )
}
