import { useState, useEffect } from 'react'
import './index.css'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function useCountdown(targetDate: string): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate).getTime() - new Date().getTime()
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return timeLeft
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="countdown-card rounded-xl px-5 py-5 flex flex-col items-center gap-1 min-w-[72px]">
      <span
        className="font-serif text-4xl md:text-5xl text-espresso leading-none"
        style={{ fontWeight: 300, fontFamily: "'Cormorant Garamond', serif" }}
      >
        {String(value).padStart(2, '0')}
      </span>
      <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-latte font-light">
        {label}
      </span>
    </div>
  )
}

// Coffee cup SVG icon
function CoffeeCup() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Steam */}
      <div className="flex gap-3 mb-1 h-8">
        <div className="steam-1 w-[2px] rounded-full bg-latte/40 h-6 self-end" />
        <div className="steam-2 w-[2px] rounded-full bg-latte/40 h-7 self-end" />
        <div className="steam-3 w-[2px] rounded-full bg-latte/40 h-5 self-end" />
      </div>
      {/* Cup */}
      <svg width="56" height="52" viewBox="0 0 56 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Cup body */}
        <path
          d="M8 10 L12 44 Q12 46 14 46 L42 46 Q44 46 44 44 L48 10 Z"
          fill="#F5E6D3"
          stroke="#C49A6C"
          strokeWidth="1"
        />
        {/* Coffee surface */}
        <ellipse cx="28" cy="13" rx="17" ry="4" fill="#C49A6C" opacity="0.35" />
        {/* Latte art circle */}
        <ellipse cx="28" cy="13" rx="9" ry="2.2" fill="none" stroke="#FAF3EB" strokeWidth="0.8" opacity="0.7" />
        {/* Handle */}
        <path
          d="M44 18 Q56 18 56 28 Q56 38 44 38"
          fill="none"
          stroke="#C49A6C"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Saucer */}
        <ellipse cx="28" cy="48" rx="24" ry="3.5" fill="#EDD9C0" stroke="#C49A6C" strokeWidth="0.8" />
      </svg>
    </div>
  )
}

function LeafDecor({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20 58 C20 58 2 40 2 22 C2 10 10 2 20 2 C30 2 38 10 38 22 C38 40 20 58 20 58Z"
        fill="none" stroke="#C49A6C" strokeWidth="0.8" opacity="0.4" />
      <line x1="20" y1="58" x2="20" y2="2" stroke="#C49A6C" strokeWidth="0.6" opacity="0.3" />
      <line x1="20" y1="20" x2="8" y2="12" stroke="#C49A6C" strokeWidth="0.5" opacity="0.25" />
      <line x1="20" y1="28" x2="32" y2="18" stroke="#C49A6C" strokeWidth="0.5" opacity="0.25" />
      <line x1="20" y1="36" x2="9" y2="28" stroke="#C49A6C" strokeWidth="0.5" opacity="0.25" />
    </svg>
  )
}

export default function App() {
  const timeLeft = useCountdown('2026-08-08T10:00:00')

  return (
    <div className="min-h-screen bg-foam relative overflow-hidden">
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Decorative background rings */}
      <div className="coffee-ring w-[600px] h-[600px] -top-40 -right-40" aria-hidden="true" />
      <div className="coffee-ring w-[400px] h-[400px] -top-10 -right-10" aria-hidden="true" />
      <div className="coffee-ring w-[700px] h-[700px] -bottom-60 -left-60" aria-hidden="true" />
      <div className="coffee-ring w-[320px] h-[320px] bottom-20 left-10" aria-hidden="true" />

      {/* Leaf decorations */}
      <LeafDecor className="absolute top-12 left-8 opacity-60 rotate-[-15deg] hidden md:block" />
      <LeafDecor className="absolute top-12 right-8 opacity-60 rotate-[15deg] hidden md:block" />
      <LeafDecor className="absolute bottom-16 left-12 opacity-40 rotate-[-25deg] hidden md:block" />
      <LeafDecor className="absolute bottom-16 right-12 opacity-40 rotate-[25deg] hidden md:block" />

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16 text-center">

        {/* Top eyebrow */}
        <p
          className="opacity-0-start animate-fade-up delay-200 font-sans text-[10px] tracking-[0.35em] uppercase text-latte mb-8"
          style={{ fontWeight: 300 }}
        >
          You're invited
        </p>

        {/* Coffee cup illustration */}
        <div className="opacity-0-start animate-fade-up delay-400 mb-8">
          <CoffeeCup />
        </div>

        {/* Divider */}
        <div className="opacity-0-start animate-fade-up delay-400 divider mx-auto mb-8" />

        {/* Save the Date */}
        <p
          className="opacity-0-start animate-fade-up delay-600 font-sans text-[11px] tracking-[0.4em] uppercase text-mocha/70 mb-4"
          style={{ fontWeight: 300 }}
        >
          Save the Date
        </p>

        {/* Names */}
        <h1
          className="opacity-0-start animate-fade-up delay-600 text-5xl md:text-7xl text-espresso mb-2 leading-tight"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            letterSpacing: '0.02em',
          }}
        >
          Jonathan
        </h1>
        <p
          className="opacity-0-start animate-fade-up delay-800 font-sans text-xs tracking-[0.4em] uppercase text-latte mb-2"
          style={{ fontWeight: 300 }}
        >
          &amp;
        </p>
        <h1
          className="opacity-0-start animate-fade-up delay-800 text-5xl md:text-7xl text-espresso mb-10 leading-tight"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            letterSpacing: '0.02em',
          }}
        >
          Esmeralda
        </h1>

        {/* Divider */}
        <div className="opacity-0-start animate-fade-up delay-800 divider mx-auto mb-10" />

        {/* Date */}
        <div className="opacity-0-start animate-fade-up delay-1000 mb-2">
          <p
            className="text-3xl md:text-4xl text-roast"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontStyle: 'italic',
              letterSpacing: '0.03em',
            }}
          >
            August 8, 2026
          </p>
        </div>

        {/* Location */}
        <p
          className="opacity-0-start animate-fade-up delay-1000 font-sans text-[11px] tracking-[0.3em] uppercase text-latte mt-3 mb-12"
          style={{ fontWeight: 300 }}
        >
          Sacramento, California
        </p>

        {/* Countdown */}
        <div className="opacity-0-start animate-fade-up delay-1200 flex gap-3 md:gap-4 mb-14 flex-wrap justify-center">
          <CountdownUnit value={timeLeft.days} label="Days" />
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <CountdownUnit value={timeLeft.minutes} label="Min" />
          <CountdownUnit value={timeLeft.seconds} label="Sec" />
        </div>

        {/* Invitation coming soon */}
        <div className="opacity-0-start animate-fade-up delay-1400">
          <div
            className="inline-block px-8 py-4 rounded-full"
            style={{
              background: 'rgba(196,154,108,0.12)',
              border: '1px solid rgba(196,154,108,0.3)',
            }}
          >
            <p
              className="font-sans text-[11px] tracking-[0.35em] uppercase text-mocha/75"
              style={{ fontWeight: 300 }}
            >
              Formal invitation coming soon
            </p>
          </div>
        </div>

        {/* Footer */}
        <p
          className="opacity-0-start animate-fade-in delay-1400 font-sans text-[10px] tracking-[0.2em] text-latte/50 mt-16"
          style={{ fontWeight: 200 }}
        >
          Baby Shower · 2026
        </p>
      </main>
    </div>
  )
}
