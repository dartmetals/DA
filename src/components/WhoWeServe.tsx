import React, { useState } from 'react'

interface Card {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  href: string
  isHighlighted?: boolean
}

const EmployerIcon: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="14" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
    <path
      d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <rect x="16" y="28" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
)

const JobSeekerIcon: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect x="10" y="12" width="28" height="26" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="24" cy="19" r="5" stroke="currentColor" strokeWidth="1.8" fill="none" />
    <path d="M14 34c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
  </svg>
)

const PartnerIcon: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path
      d="M16 20c0 0 2-6 8-6s8 6 8 6"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <path d="M10 30l6-8h16l6 8H10z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
    <circle cx="24" cy="36" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <line x1="20" y1="36" x2="10" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="28" y1="36" x2="38" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const KnowMoreArrow: React.FC<{ white?: boolean }> = ({ white }) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={white ? '#fff' : '#e31e24'} strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const cards: Card[] = [
  {
    id: 'employer',
    icon: <EmployerIcon />,
    title: 'Employer',
    description:
      'Tech enabled recruitment processes to get you the right people at the right place, time & cost-catalyzing your business growth!',
    href: '#',
  },
  {
    id: 'jobseeker',
    icon: <JobSeekerIcon />,
    title: 'Job Seeker',
    description:
      'AI enabled applicant system for job recommendations so that we can show you the jobs that work for you & build your career!',
    href: '#',
  },
  {
    id: 'partner',
    icon: <PartnerIcon />,
    title: 'Partner',
    description: 'Work with marquee clients in volume & grow your business',
    href: '#',
    isHighlighted: true,
  },
]

const WhoWeServe: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section
      id="serve"
      style={{
        padding: '70px 0 80px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        {/* ── Heading ── */}
        <h2
          style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#1a1a1a',
            textAlign: 'center',
            marginBottom: '8px',
          }}
        >
          Who do we Serve
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: '#888',
            textAlign: 'center',
            marginBottom: '50px',
          }}
        >
          Choose your journey with us.
        </p>

        {/* ── Cards ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {cards.map((card) => {
            const isActive = hovered === card.id || card.isHighlighted
            const bgColor = card.isHighlighted
              ? '#e31e24'
              : hovered === card.id
              ? '#e31e24'
              : '#ffffff'
            const textColor = card.isHighlighted || hovered === card.id ? '#ffffff' : '#1a1a1a'
            const descColor = card.isHighlighted || hovered === card.id ? 'rgba(255,255,255,0.85)' : '#666'

            return (
              <div
                key={card.id}
                onMouseEnter={() => setHovered(card.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  backgroundColor: bgColor,
                  borderRadius: '4px',
                  padding: '38px 30px',
                  boxShadow: isActive
                    ? '0 8px 30px rgba(227,30,36,0.3)'
                    : '0 2px 16px rgba(0,0,0,0.07)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Background pattern for highlighted card */}
                {card.isHighlighted && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      backgroundImage:
                        'url("https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&q=60")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: 0.2,
                    }}
                  />
                )}

                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    color: textColor,
                  }}
                >
                  <div style={{ marginBottom: '20px' }}>{card.icon}</div>
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      marginBottom: '14px',
                      color: textColor,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '13.5px',
                      lineHeight: 1.75,
                      color: descColor,
                      marginBottom: '24px',
                    }}
                  >
                    {card.description}
                  </p>
                  <a
                    href={card.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '12px',
                      fontWeight: '700',
                      color: card.isHighlighted || hovered === card.id ? '#fff' : '#e31e24',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      borderBottom: `1px solid ${card.isHighlighted || hovered === card.id ? 'rgba(255,255,255,0.5)' : '#e31e24'}`,
                      paddingBottom: '2px',
                    }}
                  >
                    KNOW MORE
                    <KnowMoreArrow white={card.isHighlighted || hovered === card.id} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #serve > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default WhoWeServe
