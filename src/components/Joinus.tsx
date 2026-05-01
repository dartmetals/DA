import React from 'react'

/* ══════════════════════════════════════════════════════
   SHARED PRIMITIVES
══════════════════════════════════════════════════════ */
const RED = '#e31e24'
const DARK = '#1a1a1a'

const ItalicScript: React.FC<{ children: React.ReactNode; size?: string; color?: string }> = ({
  children, size = '48px', color = '#fff'
}) => (
  <span style={{
    fontFamily: "'Georgia','Times New Roman',serif",
    fontStyle: 'italic', fontWeight: '700',
    fontSize: size, color, lineHeight: 1.2,
  }}>{children}</span>
)

const RedBar = () => <div style={{ width: '44px', height: '3px', backgroundColor: RED, margin: '14px 0 22px' }} />

const Tag: React.FC<{ text: string }> = ({ text }) => (
  <p style={{ fontSize: '11.5px', fontWeight: '700', color: RED, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>{text}</p>
)

/* icon wrappers */
const Circle: React.FC<{ size?: number; bg?: string; children: React.ReactNode }> = ({
  size = 70, bg = RED, children
}) => (
  <div style={{
    width: size, height: size, borderRadius: '50%',
    backgroundColor: bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  }}>{children}</div>
)

/* ── SVG icon library ── */
const I = {
  enterprise: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M4 28V10l12-6 12 6v18H4z" stroke="#fff" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      <rect x="12" y="18" width="8" height="10" stroke="#fff" strokeWidth="1.5" fill="none"/>
      <path d="M8 14h3M21 14h3M8 20h2M22 20h2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  advisor: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="10" r="6" stroke="#fff" strokeWidth="2" fill="none"/>
      <circle cx="6" cy="11" r="4" stroke="#fff" strokeWidth="1.5" fill="none"/>
      <circle cx="26" cy="11" r="4" stroke="#fff" strokeWidth="1.5" fill="none"/>
      <path d="M2 28c0-4 2-7 6-8M24 20c4 1 6 4 6 8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 28c0-5 4.5-9 10-9s10 4 10 9" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  candidate: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="10" r="7" stroke="#fff" strokeWidth="2" fill="none"/>
      <path d="M2 30c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M20 16l3 3-3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  star: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 3l2.8 5.6 6.2.9-4.5 4.4 1.1 6.2L14 17l-5.6 3.1 1.1-6.2L5 9.5l6.2-.9z" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
    </svg>
  ),
  growth: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 22l6-8 5 4 8-12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="4" cy="22" r="2" fill="#fff"/>
      <circle cx="10" cy="14" r="2" fill="#fff"/>
      <circle cx="15" cy="18" r="2" fill="#fff"/>
      <circle cx="23" cy="6" r="2" fill="#fff"/>
    </svg>
  ),
  learning: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4l12 6-12 6L2 10z" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
      <path d="M6 13v7c0 0 3.5 4 8 4s8-4 8-4v-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  team: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="10" cy="9" r="4.5" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <circle cx="20" cy="9" r="4.5" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <path d="M2 26c0-4.4 3.6-8 8-8M18 18c4.4 0 8 3.6 8 8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M13 18.5c1.7 0 3 1.3 3 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  award: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="11" r="8" stroke="#fff" strokeWidth="2" fill="none"/>
      <path d="M9 18l-3 8 8-4 8 4-3-8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 11l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  women: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="9" r="6" stroke="#fff" strokeWidth="2" fill="none"/>
      <path d="M14 15v8M10 20h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  appraisal: (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <rect x="4" y="4" width="22" height="22" rx="3" stroke="#fff" strokeWidth="2" fill="none"/>
      <path d="M9 15l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  schedule: (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <circle cx="15" cy="15" r="11" stroke="#fff" strokeWidth="2" fill="none"/>
      <path d="M15 8v7l5 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  insurance: (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M15 4L5 8v8c0 6 5 10 10 12 5-2 10-6 10-12V8z" stroke="#fff" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      <path d="M11 15l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  cafeteria: (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M6 10h18v2a9 9 0 0 1-18 0v-2z" stroke="#fff" strokeWidth="2" fill="none"/>
      <path d="M15 22v4M11 26h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      <path d="M22 6v6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  transport: (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <rect x="3" y="10" width="24" height="14" rx="3" stroke="#fff" strokeWidth="2" fill="none"/>
      <path d="M3 16h24M10 24v2M20 24v2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="9" cy="21" r="2" stroke="#fff" strokeWidth="1.5"/>
      <circle cx="21" cy="21" r="2" stroke="#fff" strokeWidth="1.5"/>
    </svg>
  ),
  campus: (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M5 26V14l10-8 10 8v12H5z" stroke="#fff" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      <rect x="11" y="18" width="8" height="8" stroke="#fff" strokeWidth="1.5" fill="none"/>
      <path d="M11 10h8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  culture: (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <circle cx="10" cy="10" r="4" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <circle cx="20" cy="10" r="4" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <circle cx="15" cy="20" r="4" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <line x1="14" y1="10" x2="16" y2="10" stroke="#fff" strokeWidth="1.5"/>
      <line x1="12" y1="16" x2="11" y2="14" stroke="#fff" strokeWidth="1.5"/>
      <line x1="18" y1="16" x2="19" y2="14" stroke="#fff" strokeWidth="1.5"/>
    </svg>
  ),
  awards2: (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M15 4l2.5 5 5.5.8-4 3.9 1 5.5L15 16.5 10 19.2l1-5.5-4-3.9 5.5-.8z" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
      <path d="M10 22v4M20 22v4M8 26h14" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  check: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill={RED}/>
      <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  target: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="11" stroke="#fff" strokeWidth="2" fill="none"/>
      <circle cx="14" cy="14" r="6" stroke="#fff" strokeWidth="1.5" fill="none"/>
      <circle cx="14" cy="14" r="2" fill="#fff"/>
    </svg>
  ),
  rocket: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4c6 0 10 8 10 12l-5 2-5 5-2-5C8 18 4 14 4 14c4 0 10-4 10-10z" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
      <circle cx="17" cy="11" r="2" stroke="#fff" strokeWidth="1.5"/>
      <path d="M6 22l-2 4 4-2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  diversity: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="8" cy="9" r="3.5" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <circle cx="20" cy="9" r="3.5" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <circle cx="14" cy="20" r="3.5" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <path d="M11 12.5c1 1 3 1 6 0M10.5 13.5L12 18M17.5 13.5L16 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  ldel: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="5" width="22" height="16" rx="2" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <path d="M10 21v4M18 21v4M7 25h14" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M8 13l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
}

/* ══════════════════════════════════════════════════════
   SECTION 1 — HERO
══════════════════════════════════════════════════════ */
const HeroSection: React.FC = () => (
  <div style={{
    position: 'relative', minHeight: '480px', overflow: 'hidden',
    background: 'linear-gradient(135deg, #1a0000 0%, #3d0000 30%, #a00000 65%, #e31e24 100%)',
    display: 'flex', alignItems: 'stretch',
  }}>
    {/* Dot grid overlay */}
    <div style={{
      position: 'absolute', inset: 0, opacity: 0.07,
      backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
      backgroundSize: '26px 26px',
    }}/>
    {/* Ring decorations */}
    {[0,1,2].map(i => (
      <div key={i} style={{
        position: 'absolute', right: `${-60 + i * 100}px`, top: '50%',
        transform: 'translateY(-50%)',
        width: `${500 + i * 120}px`, height: `${500 + i * 120}px`,
        borderRadius: '50%',
        border: `1px solid rgba(255,255,255,${0.05 + i * 0.04})`,
        pointerEvents: 'none',
      }}/>
    ))}

    <div style={{
      maxWidth: '1200px', margin: '0 auto', padding: '0 40px',
      width: '100%', position: 'relative', zIndex: 2,
      display: 'grid', gridTemplateColumns: '1fr 420px',
      alignItems: 'center', gap: '40px',
    }}>
      {/* Left: headline */}
      <div style={{ padding: '70px 0' }}>
        <ItalicScript size="clamp(38px,5vw,64px)">
          Make your<br />career happen<br />with us
        </ItalicScript>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: 1.8, marginTop: '24px', maxWidth: '440px' }}>
          As India's leading talent solutions provider, Careernet's values range from our love to large enterprises to our resolve to make a difference. We strongly believe that a diverse workforce is essential for future growth and innovation — and that calls for passionate people like you.
        </p>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14.5px', fontWeight: '600', marginTop: '20px', lineHeight: 1.7 }}>
          Are you passionate, driven and want to<br />make your mark in the recruitment space?
        </p>
        <a href="#" style={{
          display: 'inline-block', marginTop: '28px',
          backgroundColor: '#fff', color: RED,
          padding: '12px 32px', borderRadius: '4px',
          fontSize: '13px', fontWeight: '700', letterSpacing: '1px',
          transition: 'all 0.25s ease',
        }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = RED; el.style.color = '#fff' }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = '#fff'; el.style.color = RED }}
        >
          EXPLORE OPENINGS →
        </a>
      </div>

      {/* Right: circular inset */}
      <div style={{ position: 'relative', height: '480px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
        <div style={{
          width: '340px', height: '340px',
          borderRadius: '50% 50% 0 0',
          background: 'rgba(255,255,255,0.13)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden', position: 'relative',
        }}>
          {/* Illustrated person group */}
          <svg width="320" height="320" viewBox="0 0 320 320" fill="none" style={{ position: 'absolute', bottom: 0 }}>
            {/* Person 1 (woman, left) */}
            <ellipse cx="100" cy="80" rx="30" ry="36" fill="#f5c5a0"/>
            <ellipse cx="100" cy="52" rx="32" ry="18" fill="#2a1a0a"/>
            <path d="M70 120 Q80 110 100 115 L100 200 Q60 200 60 180 L70 120" fill="#fff"/>
            <rect x="55" y="118" width="14" height="70" rx="6" fill="#fff"/>
            {/* Person 2 (man, right) */}
            <ellipse cx="220" cy="80" rx="32" ry="38" fill="#d4956a"/>
            <ellipse cx="220" cy="50" rx="34" ry="20" fill="#1a0a00"/>
            <path d="M185 125 Q200 112 220 118 L240 112 Q255 118 260 130 L265 210 Q175 210 175 190 Z" fill="#1a1a3e"/>
            <rect x="162" y="125" width="16" height="72" rx="6" fill="#1a1a3e"/>
            <rect x="264" y="125" width="16" height="72" rx="6" fill="#1a1a3e"/>
            {/* Tie */}
            <polygon points="215,118 220,145 225,118" fill={RED}/>
          </svg>
          {/* Text overlay */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(180,0,0,0.35)' }}>
            <ItalicScript size="26px">Making<br />passionate<br />teams happen</ItalicScript>
          </div>
        </div>
      </div>
    </div>
  </div>
)

/* ══════════════════════════════════════════════════════
   SECTION 2 — WHY JOIN US STATS
══════════════════════════════════════════════════════ */
const WhyJoinStats: React.FC = () => {
  const stats = [
    { icon: I.enterprise, num: '100K+', label: 'enterprises served,\nof which 50 are F500 companies' },
    { icon: I.advisor, num: '3000+', label: 'domain advisors have\nengaged with us' },
    { icon: I.candidate, num: '5M+', label: 'We have a talent network of\n5M+ candidates across domains, expertise and experience levels' },
  ]
  return (
    <div style={{ backgroundColor: '#fff', padding: '70px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: '700', color: DARK, textAlign: 'center', marginBottom: '14px' }}>
          Why should you <ItalicScript size="inherit" color={RED}>join us?</ItalicScript>
        </h2>
        <div style={{ width: '50px', height: '3px', backgroundColor: RED, margin: '0 auto 50px' }}/>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '30px' }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
              padding: '36px 24px', border: '1px solid #ebebeb', borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              transition: 'box-shadow 0.3s, transform 0.3s',
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 8px 32px rgba(227,30,36,0.14)'; el.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)'; el.style.transform = 'translateY(0)' }}
            >
              <Circle size={76}>{s.icon}</Circle>
              <div style={{ fontSize: '38px', fontWeight: '800', color: RED, marginTop: '18px', lineHeight: 1 }}>{s.num}</div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.7, marginTop: '10px', whiteSpace: 'pre-line' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   SECTION 3 — EMPLOYEES FIRST
══════════════════════════════════════════════════════ */
const EmployeesFirst: React.FC = () => (
  <div style={{ backgroundColor: '#fafafa', padding: '70px 0', borderTop: '1px solid #f0f0f0' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
      <h2 style={{ fontSize: '30px', fontWeight: '700', color: DARK, marginBottom: '8px' }}>Employees first</h2>
      <RedBar/>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
        <div>
          <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9, marginBottom: '16px' }}>
            Our company's successful rise of over two decades is based on attributes that we value: trust, empathy, and approachability. Careernet's culture matters. Trust, arriving in the workplace comes before arriving in the marketplace. That's why every employee is encouraged to achieve their full potential, to strive out of the box, take calculated risks and grow beyond their core roles.
          </p>
          <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9 }}>
            We create equal opportunities for career building — both to serve our employees and our clients first organisation. To facilitate this, our HR professionals and employees work towards maintaining a motivated, inclusive and effective workforce.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: DARK, marginBottom: '16px' }}>Going the extra mile — with trust, integrity and tenacity</h3>
          <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9, marginBottom: '14px' }}>
            Our vision — to create connectivity by incorporating technology and human-influenced capital to offer innovative recruitment solutions. We may be in our second decade as an organisation, but from Day One, to today and beyond, Talent and People have always been core. Our focus on best-in-class relationships and delivering value to all clients.
          </p>
          <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9 }}>
            At Careernet, we believe in Commitment — it is our foundation. We've recognised and been recognised as one that has become better over every decade. Through the years, we are proud to say that there are people who have made Careernet what it is today. We aim to also enable a balanced culture that genuinely allows everyone to build a fulfilling career. At the end of the day, that is what matters most.
          </p>
        </div>
      </div>
    </div>
  </div>
)

/* ══════════════════════════════════════════════════════
   SECTION 4 — GREAT PLACE TO WORK + LIFE AT
══════════════════════════════════════════════════════ */
const LifeSection: React.FC = () => {
  const photos = [
    { label: 'Team Offsite', bg: '#c01820' },
    { label: 'Celebrations', bg: '#8a0000' },
    { label: 'Training Day', bg: '#b80000' },
    { label: 'Culture Fest', bg: '#d01520' },
    { label: 'Leadership Meet', bg: '#9a0010' },
    { label: 'Awards Night', bg: '#c81020' },
  ]
  return (
    <div style={{ backgroundColor: '#fff', padding: '70px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        {/* Great place badge row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 220px', gap: '60px', alignItems: 'flex-start', marginBottom: '60px' }}>
          <div>
            <h2 style={{ fontSize: '26px', fontWeight: '700', color: DARK, marginBottom: '14px' }}>
              Proud to be recognised as a <span style={{ color: RED }}>Great Place to Work</span>
            </h2>
            <RedBar/>
            <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9, marginBottom: '14px' }}>
              Careernet has been recognized as a <strong>Best Organisation for Women</strong> 2024 by the Economic Times, as 11 BEST Best Organisations for Women (Careernet 2024, featuring Times Group). We were listed by Forbes as a Top 100 Best Organisations for Women 2024 (Top 100). We stand testament to our commitment to our role as champions of women in our profession and in the communities.
            </p>
            <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9 }}>
              <strong>Best Organisation for Women:</strong> We recognize, celebrate our dedication to embracing this achievement fully.
            </p>
          </div>
          {/* Badge */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '160px', height: '160px', borderRadius: '50%',
              border: `4px solid ${RED}`, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', textAlign: 'center',
              padding: '16px',
            }}>
              <div style={{ fontSize: '10px', fontWeight: '700', color: '#555', letterSpacing: '1px', marginBottom: '4px' }}>GREAT PLACE</div>
              <div style={{ fontSize: '10px', fontWeight: '700', color: '#555', letterSpacing: '1px', marginBottom: '8px' }}>TO</div>
              <div style={{ fontSize: '18px', fontWeight: '900', color: RED, letterSpacing: '1px' }}>WORK</div>
              <div style={{ fontSize: '8px', fontWeight: '600', color: '#888', letterSpacing: '1px', marginTop: '6px' }}>CERTIFIED</div>
              <div style={{ fontSize: '8px', color: '#aaa', marginTop: '2px' }}>2024–25 | INDIA</div>
            </div>
          </div>
        </div>

        {/* Life at — photo grid */}
        <h2 style={{ fontSize: '26px', fontWeight: '700', color: DARK, marginBottom: '8px' }}>Life at Careernet</h2>
        <p style={{ fontSize: '13px', color: '#888', marginBottom: '28px' }}>
          Our campus offers a workplace fueled by productivity, boundless dreams, and laughter. Our young, enthusiastic workforce enjoys a host of career-building possibilities such as in-fact training programs, high-profile projects and other diverse experiences that help them on constantly-improving processes.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px' }}>
          {photos.map((p, i) => (
            <div key={i} style={{
              height: '160px', borderRadius: '6px', backgroundColor: p.bg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden', cursor: 'pointer',
              transition: 'transform 0.3s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
            >
              {/* Pattern */}
              <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}/>
              <ItalicScript size="18px">{p.label}</ItalicScript>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   SECTION 5 — L&D CIRCULAR IMAGE + FEATURES
══════════════════════════════════════════════════════ */
const LandDSection: React.FC = () => (
  <div style={{ backgroundColor: '#fafafa', padding: '70px 0', borderTop: '1px solid #f0f0f0' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
      {/* Top: circular image + text */}
      <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: '60px', alignItems: 'center', marginBottom: '60px' }}>
        {/* Circular image */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '320px', height: '320px', borderRadius: '50%',
              background: `linear-gradient(135deg, ${RED} 0%, #8a0000 100%)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', boxShadow: '0 16px 50px rgba(227,30,36,0.3)',
            }}>
              {/* Person with laptop illustration */}
              <svg width="280" height="280" viewBox="0 0 280 280" fill="none" style={{ position: 'absolute', bottom: 0 }}>
                <ellipse cx="140" cy="80" rx="38" ry="44" fill="#f5c5a0"/>
                <ellipse cx="140" cy="52" rx="40" ry="22" fill="#1a0a00"/>
                <path d="M95 130 Q110 115 140 120 L165 115 Q185 122 190 135 L195 240 Q110 250 95 235 Z" fill="#1a1a3e"/>
                {/* Laptop */}
                <rect x="105" y="160" width="80" height="50" rx="4" fill="#fff" opacity="0.9"/>
                <rect x="100" y="208" width="90" height="5" rx="2" fill="#ddd"/>
                <rect x="110" y="165" width="70" height="38" rx="2" fill="#dce8fe"/>
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(120,0,0,0.4)', textAlign: 'center', padding: '30px' }}>
                <ItalicScript size="22px">Making<br />career growth<br />happen</ItalicScript>
              </div>
            </div>
          </div>
        </div>

        {/* Right text */}
        <div>
          <Tag text="Learning & Development" />
          <h2 style={{ fontSize: '26px', fontWeight: '700', color: DARK, lineHeight: 1.4, marginBottom: '8px' }}>
            Careernet has a dedicated L&D team<br />in place that aims to:
          </h2>
          <RedBar/>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '8px' }}>
            {[
              { icon: I.ldel, title: 'Deliver structured L&D', desc: 'Performance driven blended learning using consistent experience and agility/knowledge.' },
              { icon: I.target, title: 'Identify development opportunities', desc: 'Building a strong, consistent learning culture within the organisation.' },
              { icon: I.growth, title: 'Upskilling through various learning initiatives', desc: 'Enabling and empowering employees to understand their responsibilities.' },
              { icon: I.rocket, title: 'Building employee confidence', desc: 'Sensitising employees to be an equal partner in its success and growth.' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <Circle size={52}>{c.icon}</Circle>
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: '700', color: DARK, marginBottom: '6px', lineHeight: 1.35 }}>{c.title}</h4>
                  <p style={{ fontSize: '12.5px', color: '#666', lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* L&D function cards */}
      <h3 style={{ fontSize: '20px', fontWeight: '700', color: DARK, marginBottom: '28px' }}>
        Our L&D function plays a significant role in the organisation by:
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
        {[
          { icon: I.learning, text: 'Spotlighting through various learning initiatives in-person real-time' },
          { icon: I.team, text: 'Enabling employees to understand their responsibilities effectively' },
          { icon: I.award, text: 'Sensitising employees to take pride in its success and growth' },
          { icon: I.star, text: 'Building employee confidence through skills development programs' },
          { icon: I.rocket, text: 'Providing a wide spectrum of learning paths for all talent levels' },
          { icon: I.diversity, text: 'Creating an inclusive learning culture across the entire workforce' },
        ].map((c, i) => (
          <div key={i} style={{
            display: 'flex', gap: '14px', alignItems: 'flex-start',
            padding: '18px', border: '1px solid #ebebeb', borderRadius: '6px',
            backgroundColor: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}>
            <Circle size={48}>{c.icon}</Circle>
            <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.7 }}>{c.text}</p>
          </div>
        ))}
      </div>

      {/* L&D new employees */}
      <div style={{ marginTop: '40px', backgroundColor: '#fff8f8', border: '1px solid rgba(227,30,36,0.15)', borderRadius: '8px', padding: '28px 32px' }}>
        <p style={{ fontSize: '14px', fontWeight: '600', color: DARK, marginBottom: '16px' }}>
          We offer multiple ongoing L&D programmes and initiatives, many of which are designed especially for new employees:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 30px' }}>
          {[
            'Onboarding programs for new recruiters',
            'Induction programs for Freshers across talent functions',
            'Training programs for lateral employees across functional domains, candidates level, and data management tools',
            'Organizational level compliance initiatives',
            'People Awareness Initiatives',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              {I.check}
              <span style={{ fontSize: '13px', color: '#555', lineHeight: 1.65 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

/* ══════════════════════════════════════════════════════
   SECTION 6 — EMPLOYEE BENEFITS
══════════════════════════════════════════════════════ */
const BenefitsSection: React.FC = () => {
  const benefits = [
    { icon: I.appraisal, title: 'Appraisal', desc: 'Performance appraisals done on a bi-annual cycle' },
    { icon: I.schedule, title: 'Work schedule', desc: 'Flexitime of every week for a work-life balance' },
    { icon: I.insurance, title: 'Insurance coverage', desc: 'Health insurance for employees and their families and Accident Policy' },
    { icon: I.cafeteria, title: 'Cafeteria', desc: 'Good and readily available wholesome food on campus' },
    { icon: I.transport, title: 'Transport', desc: 'Cab services for early morning departures. Subject to terms and conditions' },
    { icon: I.campus, title: 'Campus', desc: 'State-of-the-art Careernet campus starting from 80 sq. ft. to 1,000 sq. ft.' },
    { icon: I.culture, title: 'Cultural Committee', desc: 'Vibrant Cultural Committee events, activities, and team-building programs' },
    { icon: I.awards2, title: 'Awards', desc: 'Weekly, Fortnightly, monthly awards Quarterly, Annual Performance/Level Bonus' },
  ]
  return (
    <div style={{ backgroundColor: '#fff', padding: '70px 0', borderTop: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '700', color: DARK, marginBottom: '8px' }}>
          Making the good life happen — <ItalicScript size="26px" color={RED}>employee benefits</ItalicScript>
        </h2>
        <RedBar/>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px', marginTop: '12px' }}>
          {benefits.map((b, i) => (
            <div key={i} style={{
              border: '1px solid #ebebeb', borderRadius: '8px', padding: '28px 22px',
              display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '14px',
              backgroundColor: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              transition: 'all 0.3s ease', cursor: 'default',
            }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = '0 8px 28px rgba(227,30,36,0.16)'
                el.style.borderColor = RED
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'
                el.style.borderColor = '#ebebeb'
                el.style.transform = 'translateY(0)'
              }}
            >
              <Circle size={60}>{b.icon}</Circle>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: DARK }}>{b.title}</h4>
              <p style={{ fontSize: '12.5px', color: '#666', lineHeight: 1.7 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   SECTION 7 — LEADING FROM THE FRONT
══════════════════════════════════════════════════════ */
const LeadingSection: React.FC = () => (
  <div style={{ backgroundColor: '#fafafa', padding: '70px 0', borderTop: '1px solid #f0f0f0' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
      <h2 style={{ fontSize: '26px', fontWeight: '700', color: DARK, marginBottom: '8px' }}>Leading from the front</h2>
      <RedBar/>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9, marginBottom: '14px' }}>
            The leaders at Careernet push us from our current selves to professional qualifications and extensive industry expertise. What our founders created nearly two decades ago, is echoed back in everything that Careernet produces today. The in-depth dedication and focus on thinking. The single-mindedness and concentration that the team brings to the table has enabled far-reaching advances in our recruitment category and has allowed us to focus on producing consistently relevant results to be in the client's business, developing top-of-the-line recruitment models and providing unparalleled value in our understanding of recruitment.
          </p>
          <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9, marginBottom: '20px' }}>
            We are currently hiring professionals with <span style={{ color: RED, fontWeight: '600' }}>6+ years</span> of experience in talent acquisition, of which <span style={{ color: RED, fontWeight: '600' }}>4+ years</span> of relevant experience as industry advisors well beyond.
          </p>
          <p style={{ fontSize: '14px', fontWeight: '600', color: DARK }}>
            Does the prospect of working with <em style={{ color: RED }}>India's leading talent solutions provider</em> excite you?
          </p>
          <a href="#" style={{
            display: 'inline-block', marginTop: '22px',
            backgroundColor: RED, color: '#fff',
            padding: '12px 32px', borderRadius: '4px',
            fontSize: '13px', fontWeight: '700', letterSpacing: '1px',
            transition: 'background-color 0.25s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#c01820' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = RED }}
          >
            JOIN US →
          </a>
        </div>
        {/* Stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {[
            { num: '24+', label: 'Years of Industry\nExperience', icon: I.star },
            { num: '2500+', label: 'Talent Advisors\nAcross India', icon: I.advisor },
            { num: '400+', label: 'Corporate Clients\nServed', icon: I.enterprise },
            { num: '5M+', label: 'Candidate Network\nGlobally', icon: I.candidate },
          ].map((s, i) => (
            <div key={i} style={{
              backgroundColor: '#fff', border: '1px solid #ebebeb', borderRadius: '8px',
              padding: '26px 20px', textAlign: 'center',
              boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
            }}>
              <Circle size={50} bg={RED}>{s.icon}</Circle>
              <div style={{ fontSize: '32px', fontWeight: '800', color: RED, margin: '12px 0 4px' }}>{s.num}</div>
              <p style={{ fontSize: '12.5px', color: '#666', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

/* ══════════════════════════════════════════════════════
   SECTION 8 — CAREER BREAK
══════════════════════════════════════════════════════ */
const CareerBreakSection: React.FC = () => (
  <div style={{ backgroundColor: '#fff', padding: '70px 0', borderTop: '1px solid #f0f0f0' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
      <div style={{ backgroundColor: '#fff8f8', border: '1px solid rgba(227,30,36,0.12)', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ backgroundColor: RED, padding: '24px 36px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#fff' }}>
            Getting back into the groove after a career break
          </h2>
        </div>
        <div style={{ padding: '36px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9, marginBottom: '16px' }}>
              It is increasingly common for professionals to take a career break — to spend time with family, for personal reasons, or to pursue education. At Careernet, we make it easy for professionals who have been through career breaks to rejoin the workforce. We offer a special induction programme and structured onboarding for return professionals.
            </p>
            <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9, marginBottom: '22px' }}>
              Through our structured onboarding for reboarding candidates, we help professionals re-enter the industry with confidence and ease — providing them tools, mentors, and peer networks to get back up to speed.
            </p>
            <a href="#" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              border: `2px solid ${RED}`, color: RED,
              padding: '11px 26px', borderRadius: '4px',
              fontSize: '13px', fontWeight: '700', letterSpacing: '1px',
              transition: 'all 0.25s',
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = RED; el.style.color = '#fff' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'transparent'; el.style.color = RED }}
            >
              KNOW MORE →
            </a>
          </div>
          {/* Feature list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: I.learning, text: 'A Return-to-Work programme for returners' },
              { icon: I.team, text: 'Dedicated onboarding for freshers and recruiters' },
              { icon: I.ldel, text: 'Training programmes for lateral employees across business domains' },
              { icon: I.target, text: 'Organisational-level compliance initiatives' },
              { icon: I.diversity, text: 'People Awareness Initiatives' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <Circle size={48}>{item.icon}</Circle>
                <span style={{ fontSize: '13.5px', color: '#444', lineHeight: 1.6 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

/* ══════════════════════════════════════════════════════
   SECTION 9 — DIVERSITY & INCLUSION
══════════════════════════════════════════════════════ */
const DiversitySection: React.FC = () => (
  <div style={{ backgroundColor: '#fafafa', padding: '70px 0', borderTop: '1px solid #f0f0f0' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '60px', alignItems: 'center' }}>
        {/* Circular visual */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '280px', height: '280px', borderRadius: '50%',
            background: `linear-gradient(135deg, ${RED}, #8a0000)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 12px 40px rgba(227,30,36,0.25)', textAlign: 'center', padding: '32px',
          }}>
            <ItalicScript size="22px">Making<br />workplaces<br />diverse,<br />equitable<br />&amp; inclusive</ItalicScript>
          </div>
        </div>

        {/* Content */}
        <div>
          <Tag text="Diversity, Equity & Inclusion" />
          <h2 style={{ fontSize: '26px', fontWeight: '700', color: DARK, lineHeight: 1.4, marginBottom: '8px' }}>
            Making workplaces diverse,<br />equitable and inclusive
          </h2>
          <RedBar/>
          <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9, marginBottom: '16px' }}>
            We strongly believe that a truly inclusive and equitable workplace is essential for organizational growth. Careernet puts this into practice by removing unconscious biases from our processes, providing tools and networks to hone their skills and advocating innovative thinking.
          </p>
          <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9, marginBottom: '16px' }}>
            Do you believe in a workplace that prioritizes diversity, equity and inclusion? We want you to be part of this movement. Our Equal Opportunities policy makes certain that each employee, regardless of their background, gets a fair opportunity to contribute and grow.
          </p>
          <p style={{ fontSize: '14.5px', fontWeight: '700', color: DARK }}>
            Does this sound like a workplace that <em style={{ color: RED }}>you would like to be a part of?</em>
          </p>
          <a href="#" style={{
            display: 'inline-block', marginTop: '22px',
            backgroundColor: RED, color: '#fff',
            padding: '12px 32px', borderRadius: '4px',
            fontSize: '13px', fontWeight: '700', letterSpacing: '1px',
            transition: 'background-color 0.25s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#c01820' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = RED }}
          >
            JOIN US →
          </a>
        </div>
      </div>
    </div>
  </div>
)

/* ══════════════════════════════════════════════════════
   MAIN JOIN US PAGE
══════════════════════════════════════════════════════ */
const JoinUs: React.FC = () => (
  <div style={{ paddingTop: '68px', fontFamily: "'Poppins', sans-serif" }}>
    <HeroSection />
    <WhyJoinStats />
    <EmployeesFirst />
    <LifeSection />
    <LandDSection />
    <BenefitsSection />
    <LeadingSection />
    <CareerBreakSection />
    <DiversitySection />
  </div>
)

export default JoinUs