import React, { useState } from 'react'

interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Thank you and your team for having forwarded the interesting and yet relevant article.',
    name: 'L.R. Natarajan',
    title: 'VP',
    company: 'Titan Industries Ltd',
  },
  {
    quote:
      'TMI Network has been instrumental in helping us find the right talent for our organization. Their understanding of our requirements is exceptional.',
    name: 'Ramesh Kumar',
    title: 'Head – HR',
    company: 'Infosys BPM',
  },
  {
    quote:
      'The quality of candidates sourced by TMI and their speed of delivery has always been remarkable. Truly a world-class recruitment partner.',
    name: 'Anita Singh',
    title: 'Director',
    company: 'HDFC Life Insurance',
  },
]

const QuoteIcon: React.FC = () => (
  <svg width="50" height="38" viewBox="0 0 50 38" fill="none">
    <path
      d="M0 38V22.5C0 9.5 8.5 2.5 25.5 0L27 4C19.5 5.5 15.5 9.5 15 15H22V38H0ZM28 38V22.5C28 9.5 36.5 2.5 53.5 0L55 4C47.5 5.5 43.5 9.5 43 15H50V38H28Z"
      fill="#e8e8e8"
    />
  </svg>
)

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section
      id="testimonials"
      style={{
        padding: '75px 0',
        backgroundColor: '#ffffff',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        {/* ── Header row ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: '48px',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '10px',
              }}
            >
              <span
                style={{
                  color: '#e31e24',
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}
              >
                TESTIMONIALS
              </span>
              <span
                style={{
                  display: 'block',
                  width: '40px',
                  height: '2px',
                  backgroundColor: '#e31e24',
                }}
              />
            </div>
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#1a1a1a',
              }}
            >
              What People Say About Us
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
            {[prev, next].map((fn, i) => (
              <button
                key={i}
                onClick={fn}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: '2px solid #ddd',
                  background: 'transparent',
                  color: '#555',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '700',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#e31e24'
                  el.style.color = '#e31e24'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#ddd'
                  el.style.color = '#555'
                }}
                aria-label={i === 0 ? 'Previous' : 'Next'}
              >
                {i === 0 ? '‹' : '›'}
              </button>
            ))}
          </div>
        </div>

        {/* ── Testimonial Card ── */}
        <div
          key={current}
          style={{
            maxWidth: '750px',
            animation: 'fadeInUp 0.5s ease forwards',
          }}
        >
          <div style={{ marginBottom: '24px' }}>
            <QuoteIcon />
          </div>

          <blockquote
            style={{
              fontSize: '16px',
              color: '#444',
              lineHeight: 1.85,
              fontStyle: 'italic',
              marginBottom: '28px',
              fontWeight: '400',
            }}
          >
            "{t.quote}"
          </blockquote>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '3px',
                height: '40px',
                backgroundColor: '#e31e24',
                borderRadius: '2px',
              }}
            />
            <div>
              <p
                style={{
                  fontWeight: '700',
                  fontSize: '15px',
                  color: '#1a1a1a',
                  marginBottom: '2px',
                }}
              >
                {t.name}
              </p>
              <p style={{ fontSize: '13px', color: '#888' }}>
                {t.title} – {t.company}
              </p>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            marginTop: '36px',
          }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: i === current ? '#e31e24' : '#ddd',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

export default Testimonials
