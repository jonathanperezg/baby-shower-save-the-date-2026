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

function BabyBrewingVignette() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="flex gap-3 mb-1 h-8">
        <div className="steam-1 w-[2px] rounded-full bg-latte/40 h-6 self-end" />
        <div className="steam-2 w-[2px] rounded-full bg-latte/40 h-7 self-end" />
        <div className="steam-3 w-[2px] rounded-full bg-latte/40 h-5 self-end" />
      </div>

      <svg
        className="w-[220px] md:w-[280px] h-auto"
        viewBox="0 0 260 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Bow / ribbon at top center */}
        <g transform="translate(130, 14)">
          <path d="M0 0 C-14 -8 -24 2 -13 8 C-6 12 0 6 0 0Z" fill="#A0BFD4" opacity="0.55" />
          <path d="M0 0 C14 -8 24 2 13 8 C6 12 0 6 0 0Z" fill="#A0BFD4" opacity="0.55" />
          <circle cx="0" cy="2" r="3" fill="#8AA5C4" opacity="0.65" />
          <path d="M-3 5 C-8 14 -15 19 -11 21" stroke="#A0BFD4" strokeWidth="1.2" fill="none" opacity="0.45" />
          <path d="M3 5 C8 14 15 19 11 21" stroke="#A0BFD4" strokeWidth="1.2" fill="none" opacity="0.45" />
        </g>

        {/* Baby bottle — left, slightly tilted */}
        <g transform="translate(58, 62) rotate(-12)">
          <path d="M-1.5 -38 C-1.5 -42 1.5 -42 1.5 -38" fill="#D4A88C" stroke="#C49A6C" strokeWidth="0.5" />
          <path d="M-3.5 -32 C-3.5 -38 3.5 -38 3.5 -32" fill="#D4A88C" stroke="#C49A6C" strokeWidth="0.6" />
          <rect x="-6" y="-32" width="12" height="4" rx="1.5" fill="#EDD9C0" stroke="#C49A6C" strokeWidth="0.6" />
          <rect x="-9" y="-28" width="18" height="42" rx="3.5" fill="#E8EEF6" stroke="#C49A6C" strokeWidth="0.7" opacity="0.9" />
          <rect x="-7" y="-12" width="14" height="24" rx="2" fill="#FAF3EB" opacity="0.55" />
          <line x1="-5" y1="-6" x2="-1" y2="-6" stroke="#C49A6C" strokeWidth="0.4" opacity="0.3" />
          <line x1="-5" y1="0" x2="-1" y2="0" stroke="#C49A6C" strokeWidth="0.4" opacity="0.3" />
          <line x1="-5" y1="6" x2="-1" y2="6" stroke="#C49A6C" strokeWidth="0.4" opacity="0.3" />
        </g>

        {/* Coffee cup — center */}
        <g transform="translate(130, 55)">
          <path
            d="M-22 -22 L-18 26 Q-18 28 -16 28 L16 28 Q18 28 18 26 L22 -22 Z"
            fill="#F5E6D3" stroke="#C49A6C" strokeWidth="1"
          />
          <ellipse cx="0" cy="-19" rx="19" ry="4.5" fill="#C49A6C" opacity="0.35" />
          <path
            d="M0 -16 C-2.5 -20 -8 -20 -8 -17 C-8 -14 0 -11 0 -11 C0 -11 8 -14 8 -17 C8 -20 2.5 -20 0 -16Z"
            fill="#FAF3EB" opacity="0.5"
          />
          <path
            d="M18 -14 Q32 -14 32 -2 Q32 10 18 10"
            fill="none" stroke="#C49A6C" strokeWidth="1" strokeLinecap="round"
          />
          <ellipse cx="0" cy="30" rx="28" ry="4.2" fill="#EDD9C0" stroke="#C49A6C" strokeWidth="0.8" />
        </g>

        {/* Pacifier — right side */}
        <g transform="translate(206, 66) rotate(15)">
          <ellipse cx="0" cy="0" rx="11" ry="7.5" fill="#F5E6D3" stroke="#C49A6C" strokeWidth="0.7" />
          <ellipse cx="13" cy="0" rx="5.5" ry="4.2" fill="#D4A88C" stroke="#C49A6C" strokeWidth="0.5" opacity="0.65" />
          <circle cx="-11" cy="0" r="4.5" fill="none" stroke="#C49A6C" strokeWidth="0.8" />
          <circle cx="-2" cy="-1.5" r="0.9" fill="#C49A6C" opacity="0.2" />
          <circle cx="2.5" cy="-1.5" r="0.9" fill="#C49A6C" opacity="0.2" />
        </g>

        {/* Scattered hearts */}
        <g transform="translate(36, 24) scale(0.8)">
          <path d="M0 3 C-1 -1 -5 -1 -5 2 C-5 5 0 8 0 8 C0 8 5 5 5 2 C5 -1 1 -1 0 3Z" fill="#A0BFD4" opacity="0.45" />
        </g>
        <g transform="translate(224, 30) scale(0.65)">
          <path d="M0 3 C-1 -1 -5 -1 -5 2 C-5 5 0 8 0 8 C0 8 5 5 5 2 C5 -1 1 -1 0 3Z" fill="#C49A6C" opacity="0.35" />
        </g>
        <g transform="translate(212, 110) scale(0.55)">
          <path d="M0 3 C-1 -1 -5 -1 -5 2 C-5 5 0 8 0 8 C0 8 5 5 5 2 C5 -1 1 -1 0 3Z" fill="#A0BFD4" opacity="0.4" />
        </g>
        <g transform="translate(46, 114) scale(0.6)">
          <path d="M0 3 C-1 -1 -5 -1 -5 2 C-5 5 0 8 0 8 C0 8 5 5 5 2 C5 -1 1 -1 0 3Z" fill="#8AA5C4" opacity="0.35" />
        </g>
        <g transform="translate(108, 28) scale(0.45)">
          <path d="M0 3 C-1 -1 -5 -1 -5 2 C-5 5 0 8 0 8 C0 8 5 5 5 2 C5 -1 1 -1 0 3Z" fill="#A0BFD4" opacity="0.3" />
        </g>
        <g transform="translate(158, 26) scale(0.5)">
          <path d="M0 3 C-1 -1 -5 -1 -5 2 C-5 5 0 8 0 8 C0 8 5 5 5 2 C5 -1 1 -1 0 3Z" fill="#8AA5C4" opacity="0.3" />
        </g>

        {/* Coffee beans */}
        <g transform="translate(186, 118) rotate(25)">
          <ellipse rx="5.5" ry="3.5" fill="#C49A6C" opacity="0.4" />
          <path d="M-3.5 0 C-1.2 -1.8 1.2 1.8 3.5 0" stroke="#8B6914" strokeWidth="0.5" fill="none" opacity="0.3" />
        </g>
        <g transform="translate(76, 124) rotate(-15)">
          <ellipse rx="5" ry="3.2" fill="#C49A6C" opacity="0.35" />
          <path d="M-3 0 C-1 -1.5 1 1.5 3 0" stroke="#8B6914" strokeWidth="0.5" fill="none" opacity="0.3" />
        </g>
        <g transform="translate(170, 124) rotate(40)">
          <ellipse rx="4.5" ry="2.8" fill="#C49A6C" opacity="0.3" />
          <path d="M-2.5 0 C-0.8 -1.3 0.8 1.3 2.5 0" stroke="#8B6914" strokeWidth="0.4" fill="none" opacity="0.25" />
        </g>
      </svg>

      {/* "a baby is brewing" tagline */}
      <p
        className="mt-3 text-xl md:text-2xl text-roast/70"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 400,
          fontStyle: 'italic',
          letterSpacing: '0.04em',
        }}
      >
        a baby is brewing
      </p>
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
          Baby Shower Save the Date
        </p>

        {/* Baby brewing illustration */}
        <div className="opacity-0-start animate-fade-up delay-400 mb-8">
          <BabyBrewingVignette />
        </div>

        {/* Divider */}
        <div className="opacity-0-start animate-fade-up delay-400 divider mx-auto mb-8" />

        {/* Save the Date */}
        <p
          className="opacity-0-start animate-fade-up delay-600 font-sans text-[11px] tracking-[0.4em] uppercase text-mocha/70 mb-4"
          style={{ fontWeight: 300 }}
        >
          Celebrating Baby Perez
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
