import React from 'react'

const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="why"
      style={{
        padding: '80px 0',
        backgroundColor: '#f9f9f9',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '70px',
          alignItems: 'center',
        }}
      >
        {/* ── Left: Image ── */}
        <div style={{ position: 'relative' }}>
          {/* Decorative dot-grid background */}
          <div
            style={{
              position: 'absolute',
              bottom: '-24px',
              left: '-24px',
              width: '160px',
              height: '160px',
              backgroundImage:
                'radial-gradient(circle, #e31e24 1.5px, transparent 1.5px)',
              backgroundSize: '14px 14px',
              opacity: 0.35,
              zIndex: 0,
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 1,
              borderRadius: '4px',
              overflow: 'hidden',
              height: '420px',
              background: 'linear-gradient(135deg, #2c2c2c 0%, #444 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Placeholder person illustration */}
            <svg width="200" height="300" viewBox="0 0 200 320" fill="none">
              {/* Background suit */}
              <rect x="40" y="130" width="120" height="180" rx="10" fill="#2a2a4a" />
              {/* Shirt / tie area */}
              <rect x="80" y="130" width="40" height="180" fill="#1a1a3a" />
              <polygon points="95,140 100,180 105,140" fill="#e31e24" />
              {/* Head */}
              <circle cx="100" cy="90" r="45" fill="#d4a876" />
              {/* Hair */}
              <ellipse cx="100" cy="52" rx="45" ry="20" fill="#2a1a0a" />
              {/* Arms */}
              <rect x="10" y="135" width="32" height="100" rx="14" fill="#2a2a4a" />
              <rect x="158" y="135" width="32" height="100" rx="14" fill="#2a2a4a" />
              {/* Hands */}
              <ellipse cx="26" cy="240" rx="16" ry="12" fill="#d4a876" />
              <ellipse cx="174" cy="240" rx="16" ry="12" fill="#d4a876" />
              {/* Lapels */}
              <polygon points="80,130 100,160 60,200" fill="#1a1a2e" opacity="0.7" />
              <polygon points="120,130 100,160 140,200" fill="#1a1a2e" opacity="0.7" />
            </svg>
          </div>

          {/* Decorative red accent bar */}
          <div
            style={{
              position: 'absolute',
              top: '24px',
              left: '-8px',
              width: '6px',
              height: '80px',
              backgroundColor: '#e31e24',
              zIndex: 2,
            }}
          />
        </div>

        {/* ── Right: Content ── */}
        <div>
          {/* Label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '16px',
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
              WHY CHOOSE US
            </span>
            <span
              style={{
                display: 'block',
                width: '50px',
                height: '2px',
                backgroundColor: '#e31e24',
              }}
            />
          </div>

          <h2
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: '700',
              color: '#1a1a1a',
              lineHeight: 1.35,
              marginBottom: '22px',
            }}
          >
            Simplify Talent Acquisition.<br />
            Amplify Business.
          </h2>

          <p
            style={{
              fontSize: '14px',
              color: '#666',
              lineHeight: 1.9,
              marginBottom: '36px',
            }}
          >
            Harness the right talent, at the optimal time and cost, for a
            transformative impact on your business. Experience our tech-enabled
            recruitment, seamless onboarding, and strategic staffing, driving
            cost savings through attrition reduction and enhanced workforce
            performance. Partner with us today.
          </p>

          <a
            href="#about"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#e31e24',
              fontSize: '12.5px',
              fontWeight: '700',
              padding: '11px 28px',
              border: '2px solid #e31e24',
              borderRadius: '3px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = '#e31e24'
              el.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = 'transparent'
              el.style.color = '#e31e24'
            }}
          >
            ABOUT US
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #why > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default WhyChooseUs
