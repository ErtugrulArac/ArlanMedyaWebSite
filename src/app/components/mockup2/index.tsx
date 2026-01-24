'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileCode } from 'lucide-react'

// ==================== KOD EDİTÖR KARTI ====================
const CodeEditorCard = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [sloganIndex, setSloganIndex] = useState(0)
  
  const slogans = [
    "Dijitalde Öne Çıkın",
    "Hayallerinizi Kodluyoruz", 
    "Yazılımın Gücünü Keşfedin",
    "Başarıyı Birlikte İnşa Edelim"
  ]

  useEffect(() => {
    const current = slogans[sloganIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setSloganIndex((prev: number) => (prev + 1) % slogans.length)
        }
      }
    }, isDeleting ? 40 : 70)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, sloganIndex])

  return (
    <div 
      className="mockup2-code-card"
      style={{
        width: '340px',
        background: 'linear-gradient(160deg, #0d1525 0%, #080c14 100%)',
        borderRadius: '12px',
        boxShadow: '0 30px 60px -15px rgba(0,0,0,0.6), 0 0 0 1px rgba(56,189,248,0.2), 0 0 60px rgba(56,189,248,0.08)',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '12px 16px',
        background: 'rgba(10,15,24,0.9)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28ca41' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <FileCode style={{ width: '14px', height: '14px', color: '#38BDF8' }} />
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontFamily: 'monospace' }}>arlanmedya.tsx</span>
        </div>
        <div style={{ width: '50px' }} />
      </div>

      {/* Code Content - 16 satır */}
      <div style={{ padding: '12px 16px', fontFamily: 'monospace', fontSize: '11px', lineHeight: '1.85' }}>
        <CodeLine num={1}><Purple>import</Purple> <Cyan>React</Cyan><White70>,</White70> {'{'} <Cyan>useState</Cyan> {'}'} <White50>from</White50> <Green>&apos;react&apos;</Green></CodeLine>
        <CodeLine num={2}><Purple>import</Purple> {'{'} <Cyan>motion</Cyan> {'}'} <White50>from</White50> <Green>&apos;framer-motion&apos;</Green></CodeLine>
        <CodeLine num={3} />
        <CodeLine num={4}><Purple>const</Purple> <Yellow>ArlanMedya</Yellow> <White70>=</White70> <White70>() =&gt; {'{'}</White70></CodeLine>
        <CodeLine num={5}><Purple indent>const</Purple> <White70>[</White70><Cyan>success</Cyan><White70>,</White70> <Cyan>setSuccess</Cyan><White70>]</White70> <White70>=</White70> <Yellow>useState</Yellow><White70>(</White70><Orange>true</Orange><White70>)</White70></CodeLine>
        <CodeLine num={6} />
        <CodeLine num={7}><Purple indent>return</Purple> <White70>(</White70></CodeLine>
        <CodeLine num={8}><Green indent2>&lt;motion.div</Green> <Orange>animate</Orange><White70>=</White70><White70>{'{'}</White70><White70>{'{'}</White70> <Cyan>scale</Cyan><White70>:</White70> <Orange>1.1</Orange> <White70>{'}'}</White70><White70>{'}'}</White70><Green>&gt;</Green></CodeLine>
        <CodeLine num={9}><Green indent2>  &lt;Success</Green> <Orange>status</Orange><White70>=</White70><White70>{'{'}</White70><Cyan>success</Cyan><White70>{'}'}</White70> <Green>/&gt;</Green></CodeLine>
        <CodeLine num={10}><Green indent2>&lt;/motion.div&gt;</Green></CodeLine>
        <CodeLine num={11}><White70 indent>)</White70></CodeLine>
        <CodeLine num={12}><White70>{'}'}</White70></CodeLine>
        <CodeLine num={13} />
        <CodeLine num={14}><Purple>export default</Purple> <Yellow>ArlanMedya</Yellow></CodeLine>
        <CodeLine num={15} />
        <CodeLine num={16}>
          <White40>{'// '}</White40>
          <span style={{ color: '#38BDF8' }}>{displayText}</span>
          <motion.span 
            style={{ display: 'inline-block', width: '2px', height: '14px', background: '#38BDF8', marginLeft: '2px', verticalAlign: 'middle' }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />
        </CodeLine>
      </div>
    </div>
  )
}

// Kod satırı yardımcı bileşenleri
const CodeLine = ({ num, children }: { num: number; children?: React.ReactNode }) => (
  <div style={{ display: 'flex' }}>
    <span style={{ color: 'rgba(255,255,255,0.3)', width: '24px', textAlign: 'right', marginRight: '16px', userSelect: 'none' }}>{num}</span>
    {children}
  </div>
)
const Purple = ({ children, indent, indent2 }: { children: React.ReactNode; indent?: boolean; indent2?: boolean }) => (
  <span style={{ color: '#c084fc', marginLeft: indent ? '16px' : indent2 ? '32px' : 0 }}>{children}</span>
)
const Cyan = ({ children }: { children: React.ReactNode }) => <span style={{ color: '#67e8f9', marginLeft: '4px' }}>{children}</span>
const Green = ({ children, indent2 }: { children: React.ReactNode; indent2?: boolean }) => (
  <span style={{ color: '#6ee7b7', marginLeft: indent2 ? '32px' : '4px' }}>{children}</span>
)
const Yellow = ({ children }: { children: React.ReactNode }) => <span style={{ color: '#fde047', marginLeft: '4px' }}>{children}</span>
const Orange = ({ children }: { children: React.ReactNode }) => <span style={{ color: '#fb923c', marginLeft: '4px' }}>{children}</span>
const White70 = ({ children, indent }: { children: React.ReactNode; indent?: boolean }) => (
  <span style={{ color: 'rgba(255,255,255,0.7)', marginLeft: indent ? '16px' : '4px' }}>{children}</span>
)
const White50 = ({ children }: { children: React.ReactNode }) => <span style={{ color: 'rgba(255,255,255,0.5)', marginLeft: '4px' }}>{children}</span>
const White40 = ({ children }: { children: React.ReactNode }) => <span style={{ color: 'rgba(255,255,255,0.4)' }}>{children}</span>


// ==================== SERVİS KARTI ====================
interface ServiceCardProps {
  title: string
  subtitle: string
  color: 'purple' | 'cyan' | 'orange' | 'emerald'
}

const ServiceCard = ({ title, subtitle, color }: ServiceCardProps) => {
  const colors = {
    purple: { bg: 'linear-gradient(145deg, #1a1625, #231d35, #110e1a)', border: 'rgba(139,92,246,0.2)', accent: '#a78bfa' },
    cyan: { bg: 'linear-gradient(145deg, #0c1a2e, #0f2942, #0a1628)', border: 'rgba(56,189,248,0.2)', accent: '#38BDF8' },
    orange: { bg: 'linear-gradient(145deg, #1f1510, #2a1a12, #150e0a)', border: 'rgba(249,115,22,0.2)', accent: '#fb923c' },
    emerald: { bg: 'linear-gradient(145deg, #0c1f1a, #102a22, #081512)', border: 'rgba(16,185,129,0.2)', accent: '#34d399' },
  }
  const c = colors[color]

  return (
    <div 
      className="mockup2-service-card"
      style={{
        width: '160px',
        height: '100px',
        background: c.bg,
        borderRadius: '12px',
        padding: '12px',
        boxShadow: `0 15px 30px -10px rgba(0,0,0,0.4), 0 0 0 1px ${c.border}`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Logo */}
      <div style={{ 
        width: '24px', 
        height: '24px', 
        borderRadius: '50%', 
        background: 'rgba(255,255,255,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '8px'
      }}>
        <span style={{ color: '#fff', fontSize: '10px', fontWeight: 'bold' }}>A</span>
      </div>
      
      {/* İçerik */}
      <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>{subtitle}</div>
      <div style={{ fontSize: '13px', color: '#fff', fontWeight: '600' }}>{title}</div>
      
      {/* Accent line */}
      <div style={{ 
        position: 'absolute', 
        bottom: '0', 
        left: '0', 
        right: '0', 
        height: '2px', 
        background: c.accent,
        opacity: 0.5
      }} />
    </div>
  )
}


// ==================== CIRCULAR BACKGROUND ====================
const CircularBackground = () => (
  <div style={{ 
    position: 'absolute', 
    inset: 0, 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    pointerEvents: 'none',
    zIndex: 0
  }}>
    {[300, 220, 140].map((size, i) => (
      <motion.div
        key={i}
        style={{
          position: 'absolute',
          width: size,
          height: size,
          borderRadius: '50%',
          border: '1px solid rgba(56,189,248,0.1)',
        }}
        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
        transition={{ duration: 30 + i * 10, repeat: Infinity, ease: 'linear' }}
      />
    ))}
    <motion.div
      style={{
        position: 'absolute',
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
      }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
  </div>
)


// ==================== ANA COMPONENT ====================
const Mockup2 = () => {
  return (
    <section className="hidden"></section>
  )
}

export default Mockup2
