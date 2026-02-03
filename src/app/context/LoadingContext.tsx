'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

interface LoadingContextType {
  isLoading: boolean
  isInitialLoad: boolean
  setIsLoading: (value: boolean) => void
  finishInitialLoad: () => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const [hasPreloaded, setHasPreloaded] = useState(false)

  // İlk yükleme için preloading logic
  useEffect(() => {
    if (!hasPreloaded) {
      const preloadCriticalResources = async () => {
        // Critical images preload
        const criticalImages = [
          '/logolar/arlanlogonav.webp',
          // Diğer critical image'ları buraya ekle
        ]

        // Image preload promises
        const imagePromises = criticalImages.map(src => {
          return new Promise((resolve) => {
            const img = new Image()
            img.onload = () => resolve(src)
            img.onerror = () => resolve(src) // Hata olsa da devam et
            img.src = src
          })
        })

        // Font preload (eğer custom font varsa)
        const fontPromises = [
          new Promise(resolve => {
            if (document.fonts) {
              document.fonts.ready.then(resolve)
            } else {
              setTimeout(resolve, 500)
            }
          })
        ]

        // Animation preparation delay
        const animationDelay = new Promise(resolve => setTimeout(resolve, 800))

        try {
          await Promise.all([...imagePromises, ...fontPromises, animationDelay])
        } catch (error) {
          console.log('Preload tamamlandı (bazı hatalar olabilir)')
        }

        setHasPreloaded(true)
        
        // Minimum loading screen süresi (1.2s)
        setTimeout(() => {
          setIsInitialLoad(false)
        }, 1200)
      }

      preloadCriticalResources()
    }
  }, [hasPreloaded])

  const finishInitialLoad = () => {
    setIsInitialLoad(false)
  }

  return (
    <LoadingContext.Provider value={{ 
      isLoading, 
      isInitialLoad, 
      setIsLoading, 
      finishInitialLoad 
    }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  // Eğer provider dışında ise, dummy function döndür
  if (!context) {
    return { 
      isLoading: false, 
      isInitialLoad: false, 
      setIsLoading: () => {}, 
      finishInitialLoad: () => {} 
    }
  }
  return context
}
