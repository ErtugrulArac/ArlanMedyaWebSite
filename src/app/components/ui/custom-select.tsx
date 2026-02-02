'use client'

import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check } from 'lucide-react'

interface Option {
  value: string
  label: string
  icon?: React.ReactNode
}

interface CustomSelectProps {
  options: Option[]
  value: string
  onChange: (value: string) => void
  placeholder: string
  required?: boolean
  icon?: React.ReactNode
  className?: string
  name?: string
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  required = false,
  icon,
  className = '',
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const selectRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Memoize filtered options for performance
  const filteredOptions = useMemo(() => {
    if (!searchTerm) return options
    return options.filter(option =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [options, searchTerm])

  // Memoize selected option
  const selectedOption = useMemo(() => 
    options.find(opt => opt.value === value), 
    [options, value]
  )

  // Memoize should show search
  const shouldShowSearch = useMemo(() => options.length > 5, [options.length])

  // Optimize click outside handler
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false)
      setSearchTerm('')
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Optimize focus timing
      if (shouldShowSearch) {
        const timer = setTimeout(() => inputRef.current?.focus(), 50)
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
          clearTimeout(timer)
        }
      }
    }
    
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, handleClickOutside, shouldShowSearch])

  // Optimize select handler
  const handleSelect = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
    setSearchTerm('')
  }

  // Optimize toggle handler
  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  return (
    <div ref={selectRef} className={`relative ${className}`}>
      {/* Hidden input for form validation */}
      <input
        type="text"
        name={name}
        value={value}
        onChange={() => {}}
        required={required}
        className="sr-only"
        tabIndex={-1}
      />
      
      {/* Trigger Button */}
      <button
        type="button"
        onClick={toggleOpen}
        className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm focus:outline-none focus:border-[#38BDF8]/40 focus:bg-white/[0.05] transition-all duration-300 text-left flex items-center justify-between group hover:border-white/[0.12]"
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {icon && (
            <span className="text-white/20 group-focus:text-[#38BDF8] transition-colors flex-shrink-0">
              {icon}
            </span>
          )}
          <span className={`truncate ${selectedOption ? 'text-white' : 'text-white/50'}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-white/30 transition-all duration-200 flex-shrink-0 ${
            isOpen ? 'rotate-180 text-[#38BDF8]' : 'group-hover:text-white/50'
          }`} 
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className="absolute top-full left-0 right-0 mt-2 bg-[#0a1628] border border-white/[0.08] rounded-xl shadow-2xl shadow-black/40 backdrop-blur-xl z-50 overflow-hidden"
          >
            {/* Search Input */}
            {shouldShowSearch && (
              <div className="p-3 border-b border-white/[0.05]">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 bg-white/[0.03] border border-white/[0.06] rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#38BDF8]/40 transition-colors"
                />
              </div>
            )}

            {/* Options List */}
            <div className="max-h-60 overflow-y-auto py-2 custom-scrollbar">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleSelect(option.value)}
                    className={`w-full px-4 py-3 text-left flex items-center justify-between group transition-all duration-150 hover:bg-white/[0.03] ${
                      value === option.value ? 'bg-[#38BDF8]/10 text-[#38BDF8]' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      {option.icon && (
                        <span className={`flex-shrink-0 ${value === option.value ? 'text-[#38BDF8]' : 'text-white/20'}`}>
                          {option.icon}
                        </span>
                      )}
                      <span className="truncate text-sm">{option.label}</span>
                    </div>
                    {value === option.value && (
                      <Check className="w-4 h-4 text-[#38BDF8] flex-shrink-0" />
                    )}
                  </button>
                ))
              ) : (
                <div className="px-4 py-6 text-center text-white/40 text-sm">
                  Sonuç bulunamadı
                </div>
              )}
            </div>
          </m.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(56, 189, 248, 0.2) transparent;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(56, 189, 248, 0.2);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(56, 189, 248, 0.3);
        }
      `}</style>
    </div>
  )
}