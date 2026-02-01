'use client'

import React, { useState } from 'react'
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'Ajansınız işletmelerin büyümesine nasıl yardımcı oluyor?',
    answer: 'Dijital stratejiler, modern web siteleri, mobil uygulamalar ve etkili pazarlama kampanyaları ile markanızı büyütüyoruz. Her projeyi özel olarak analiz ediyor ve işletmenize en uygun çözümü sunuyoruz.'
  },
  {
    question: 'Uluslararası müşterilerle çalışıyor musunuz?',
    answer: 'Kesinlikle! Türkiye, Avrupa ve Amerika\'dan 150+ global müşteri ile çalıştık. Her pazara özel çözümler sunarak uluslararası standartlarda hizmet veriyoruz.'
  },
  {
    question: 'Tipik bir proje ne kadar sürer?',
    answer: 'Proje kapsamına göre değişmekle birlikte; basit web siteleri 2-4 hafta, kapsamlı e-ticaret projeleri 6-10 hafta, mobil uygulamalar ise 8-16 hafta sürebilir. Başlangıçta net bir zaman planı sunuyoruz.'
  },
  {
    question: 'Ajansınızı diğerlerinden ayıran nedir?',
    answer: 'Sadece proje teslim etmiyoruz, uzun vadeli iş ortaklıkları kuruyoruz. 7/24 destek, şeffaf süreç yönetimi, modern teknolojiler ve sonuç odaklı yaklaşımımız bizi farklı kılıyor.'
  },
  {
    question: 'Hizmetlerinize nasıl başlayabilirim?',
    answer: 'Hemen WhatsApp veya e-posta ile iletişime geçebilirsiniz. Ücretsiz danışmanlık görüşmemizde projenizi dinliyor, ihtiyaçlarınızı analiz ediyor ve size özel teklif sunuyoruz.'
  }
]

const FAQItem = ({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div 
      className={`rounded-2xl overflow-hidden transition-colors duration-200 ${
        isOpen 
          ? 'bg-gradient-to-r from-[#38BDF8]/10 to-[#A855F7]/8 border border-[#38BDF8]/30' 
          : 'bg-white/[0.02] border border-white/5 hover:border-white/10'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <span className={`text-base sm:text-lg font-medium transition-colors duration-200 ${
          isOpen ? 'text-white' : 'text-white/80'
        }`}>
          {item.question}
        </span>
        <div 
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 ${
            isOpen ? 'bg-[#38BDF8]/20' : 'bg-white/5'
          }`}
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-[#38BDF8]' : 'text-white/50'}`} />
        </div>
      </button>
      
      {/* Height animation - optimized */}
      <div 
        className="overflow-hidden transition-[max-height] duration-200 ease-out"
        style={{ maxHeight: isOpen ? '200px' : '0px' }}
      >
        <div className="px-6 pb-5">
          <p className="text-white/60 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-4 sm:py-6 overflow-hidden">
      {/* Background - optimized blur */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#38BDF8] rounded-full blur-[80px] opacity-[0.04] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-[#A855F7] rounded-full blur-[80px] opacity-[0.04] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-gradient-to-r from-[#38BDF8]/10 to-[#A855F7]/10 border border-[#38BDF8]/20">
            <HelpCircle className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-white/70 text-sm font-medium">SSS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-4 ibm-plex-serif-bold">
            Bizimle Başlamadan Önce{' '}
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent">
              Bilmeniz Gerekenler
            </span>
          </h2>

          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Nasıl çalıştığımız, neler sunduğumuz ve işletmenizin yeni zirvelere ulaşmasına nasıl yardımcı olabileceğimiz hakkında bilgi edinin.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* CTA Button - Optimized */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/905307464899?text=Merhaba%2C%20sorusum%20var"
            title="WhatsApp ile İletişim"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden transition-colors duration-200 bg-gradient-to-r from-[#38BDF8] to-[#A855F7] hover:from-[#38BDF8]/90 hover:to-[#A855F7]/90"
          >
            {/* Simple shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            
            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Bize Ulaşın
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
