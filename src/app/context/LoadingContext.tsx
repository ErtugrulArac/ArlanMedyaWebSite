'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface LoadingContextType {
  isLoading: boolean
  setIsLoading: (value: boolean) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  // Eğer provider dışında ise, dummy function döndür
  if (!context) {
    return { isLoading: false, setIsLoading: () => {} }
  }
  return context
}
