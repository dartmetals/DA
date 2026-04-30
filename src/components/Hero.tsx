import React, { useState } from 'react'

const ArrowRight: React.FC = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    style={{ marginLeft: '8px' }}
  >
    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const slides = [
  {
    headline1: 'Simplify Hiring, Onboarding & Staffing.',
    headline2: 'Amplify',
    highlight: 'Business.',
    sub: 'EMPLOYER',
  },
  {
    headline1: 'Connecting Talent With Opportunity.',
    headline2: 'Grow Your',
    highlight: 'Career.',
    sub: 'JOB SEEKER',
  },
  {
    headline1: 'Scale Your Business With Right Talent.',
    headline2: 'Become Our',
    highlight: 'Partner.',
    sub: 'PARTNER',
  },
]

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  const slide = slides[current]

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '580px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        marginTop: '68px',
      }}
    >
      {/* Background – dark gradient simulating the city/stairs image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 30%, #16213e 60%, #0f3460 100%)',
          zIndex: 0,
        }}
      />

      {/* Decorative upward arrows (mimicking the arrows in the original BG) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          overflow: 'hidden',
          opacity: 0.12,
        }}
      >
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              bottom: '-10px',
              left: `${6 + i * 7}%`,
              width: '0',
              height: '0',
              borderLeft: '22px solid transparent',
              borderRight: '22px solid transparent',
              borderBottom: `${180 + (i % 3) * 60}px solid #ffffff`,
            }}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.55)',
          zIndex: 2,
        }}
      />

      {/* Silhouette person (center bottom) */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          opacity: 0.25,
        }}
      >
        <svg width="80" height="180" viewBox="0 0 80 180" fill="white">
          <ellipse cx="40" cy="22" rx="14" ry="16" />
          <rect x="26" y="42" width="28" height="70" rx="6" />
          <rect x="10" y="45" width="14" height="55" rx="5" />
          <rect x="56" y="45" width="14" height="55" rx="5" />
          <rect x="22" y="110" width="14" height="65" rx="5" />
          <rect x="44" y="110" width="14" height="65" rx="5" />
        </svg>
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '80px 40px',
          width: '100%',
        }}
      >
        <div style={{ maxWidth: '660px' }}>
          <p
            key={`h1-${current}`}
            style={{
              color: '#ffffff',
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: '600',
              lineHeight: 1.25,
              marginBottom: '6px',
              animation: 'fadeInUp 0.6s ease forwards',
            }}
          >
            {slide.headline1}
          </p>
          <p
            key={`h2-${current}`}
            style={{
              color: '#ffffff',
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: '700',
              lineHeight: 1.25,
              marginBottom: '36px',
              animation: 'fadeInUp 0.7s ease 0.1s forwards',
              opacity: 0,
            }}
          >
            {slide.headline2}{' '}
            <span
              style={{
                backgroundColor: '#e31e24',
                color: '#fff',
                padding: '2px 12px',
                borderRadius: '2px',
                fontStyle: 'italic',
              }}
            >
              {slide.highlight}
            </span>
          </p>

          <a
            href="#serve"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              border: '2px solid #ffffff',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: '600',
              padding: '12px 28px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
              transition: 'all 0.25s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = '#e31e24'
              el.style.borderColor = '#e31e24'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = 'transparent'
              el.style.borderColor = '#ffffff'
            }}
          >
            {slide.sub}
            <ArrowRight />
          </a>
        </div>

        {/* Carousel Arrows */}
        <div
          style={{
            position: 'absolute',
            right: '40px',
            bottom: '40px',
            display: 'flex',
            gap: '8px',
          }}
        >
          {[prev, next].map((fn, i) => (
            <button
              key={i}
              onClick={fn}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.6)',
                background: 'rgba(255,255,255,0.1)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '700',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#e31e24'
                el.style.borderColor = '#e31e24'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(255,255,255,0.1)'
                el.style.borderColor = 'rgba(255,255,255,0.6)'
              }}
            >
              {i === 0 ? '‹' : '›'}
            </button>
          ))}
        </div>

        {/* Slide dots */}
        <div
          style={{
            position: 'absolute',
            right: '120px',
            bottom: '52px',
            display: 'flex',
            gap: '6px',
          }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? '22px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                background: i === current ? '#e31e24' : 'rgba(255,255,255,0.4)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(25px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

export default Hero
