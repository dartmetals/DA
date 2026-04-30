import React, { useEffect, useRef, useState } from 'react'
import AboutLayout from '../../components/AboutLayout'

/* ── Differentiator icons ── */
const icons = {
  tech: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <rect x="4" y="8" width="36" height="26" rx="4" stroke="#e31e24" strokeWidth="2" fill="none" />
      <path d="M15 20l-5 4 5 4M29 20l5 4-5 4M21 16l2 12" stroke="#e31e24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  speed: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="24" r="16" stroke="#e31e24" strokeWidth="2" fill="none" />
      <path d="M22 24L30 12" stroke="#e31e24" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="22" cy="24" r="2.5" fill="#e31e24" />
      <path d="M10 10l2 2M34 10l-2 2M22 6v2" stroke="#e31e24" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  talent: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="14" r="7" stroke="#e31e24" strokeWidth="2" fill="none" />
      <path d="M8 38c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#e31e24" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M32 18l3 3-3 3M38 21h-6" stroke="#e31e24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  scale: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path d="M6 34l10-12 8 6 12-16" stroke="#e31e24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="6" cy="34" r="3" fill="#e31e24" />
      <circle cx="16" cy="22" r="3" fill="#e31e24" />
      <circle cx="24" cy="28" r="3" fill="#e31e24" />
      <circle cx="36" cy="12" r="3" fill="#e31e24" />
    </svg>
  ),
  trust: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path d="M22 6l4 8 9 1.5-6.5 6.5 1.5 9L22 27l-8 4 1.5-9L9 15.5l9-1.5z" stroke="#e31e24" strokeWidth="2" fill="none" strokeLinejoin="round" />
      <path d="M16 22l4 4 8-8" stroke="#e31e24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  domain: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="16" stroke="#e31e24" strokeWidth="2" fill="none" />
      <ellipse cx="22" cy="22" rx="8" ry="16" stroke="#e31e24" strokeWidth="1.5" fill="none" />
      <line x1="6" y1="22" x2="38" y2="22" stroke="#e31e24" strokeWidth="1.5" />
      <line x1="22" y1="6" x2="22" y2="38" stroke="#e31e24" strokeWidth="1.5" />
    </svg>
  ),
}

const differentiators = [
  {
    icon: icons.tech,
    title: 'AI-Powered Data Platform',
    text: 'Our proprietary tech-driven data engineering and analytics platform accelerates delivery timelines by 60%, enabling real-time insights and automated pipelines for enterprise-scale operations.',
  },
  {
    icon: icons.speed,
    title: 'Speed to Insight',
    text: 'From data ingestion to actionable intelligence in record time. Our agile delivery model ensures your teams get the answers they need to make decisions before the window of opportunity closes.',
  },
  {
    icon: icons.talent,
    title: 'Curated Data Talent',
    text: 'Access a pre-vetted pool of 24,000+ data professionals annually across Data Engineering, Data Science, Analytics, and Cloud — matched precisely to your stack, culture, and business objectives.',
  },
  {
    icon: icons.scale,
    title: 'Enterprise-Grade Scalability',
    text: 'From 1 analyst to 1,000-person data centers, our flexible engagement models grow with you. We operate across 47+ cities, 22 states, supporting both onsite and fully remote distributed teams.',
  },
  {
    icon: icons.trust,
    title: '9+ Years of Proven Trust',
    text: 'With 400+ corporate customers across BFSI, Manufacturing, Retail, and Consumer Goods — our track record of delivering measurable ROI speaks louder than any pitch deck.',
  },
  {
    icon: icons.domain,
    title: 'Cross-Industry Domain Depth',
    text: 'We bring industry-specific data frameworks tuned for Banking, Insurance, Manufacturing, and Retail, combining vertical expertise with horizontal analytics capability to solve your unique challenges.',
  },
]

/* ── Stats Grid (red/white alternating) ── */
const statsData = [
  { label: '3 Group Companies',            highlight: true },
  { label: '16 Countries',                 highlight: false },
  { label: 'Operations in 47+ Cities in India', highlight: true },
  { label: '5000+ Full-Time/Flexi-Time Employees', highlight: false },
  { label: '400+ Corporate Customers',     highlight: true },
  { label: '1000+ Partners',               highlight: false },
  { label: '51 Government & CSR Customers', highlight: true },
  { label: '6500+ e-Learning hours in 13 Indian & 7 International Languages', highlight: false },
  { label: '10+ Million Brand Connects',   highlight: true },
  { label: '5,000+ Hours of Classroom Content', highlight: false },
  { label: '0.5+ Million Trained in Classroom', highlight: true },
  { label: '3,000+ Employee Alumni',       highlight: false },
  { label: '0.15+ Million Managers Placed', highlight: true },
  { label: '1+ Million Job Seeker Engagements Annually', highlight: false },
  { label: '3+ million eLearners from 190+ countries', highlight: true },
]

const WhyDataArtisans: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <AboutLayout title="Why Data Artisans">
      {/* ── Intro ── */}
      <div style={{ backgroundColor: '#fff', padding: '50px 0 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ maxWidth: '800px', marginBottom: '50px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <span style={{ color: '#e31e24', fontSize: '12px', fontWeight: '600', letterSpacing: '2px' }}>WHY CHOOSE US</span>
              <span style={{ display: 'block', width: '40px', height: '2px', backgroundColor: '#e31e24' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '700', color: '#1a1a1a', lineHeight: 1.4, marginBottom: '18px' }}>
              What makes Data Artisans<br />your ideal data partner?
            </h2>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.9 }}>
              We combine deep technical expertise with domain knowledge to deliver data
              solutions that drive real business impact. Here are six reasons why the
              world's leading enterprises choose Data Artisans.
            </p>
          </div>

          {/* ── 6 Differentiator Cards ── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', paddingBottom: '60px' }}>
            {differentiators.map((d, i) => (
              <div key={i} style={{
                border: '1px solid #ebebeb', borderRadius: '6px', padding: '32px 28px',
                backgroundColor: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                transition: 'box-shadow 0.3s, transform 0.3s',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.boxShadow = '0 8px 30px rgba(227,30,36,0.15)'
                  el.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <div style={{ marginBottom: '18px' }}>{d.icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a', marginBottom: '12px' }}>{d.title}</h3>
                <p style={{ fontSize: '13.5px', color: '#666', lineHeight: 1.8 }}>{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats Grid ── */}
      <div ref={ref} style={{ padding: '0 0 80px', backgroundColor: '#f5f5f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '50px 40px 0' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', textAlign: 'center', marginBottom: '40px' }}>
            Data Artisans by Numbers
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', border: '1px solid #ddd' }}>
            {statsData.map((s, i) => (
              <div key={i} style={{
                backgroundColor: s.highlight ? '#e31e24' : '#fff',
                color: s.highlight ? '#fff' : '#333',
                padding: '30px 24px',
                textAlign: 'center',
                fontSize: '15px',
                fontWeight: '600',
                lineHeight: 1.5,
                borderRight: (i + 1) % 3 !== 0 ? `1px solid ${s.highlight ? 'rgba(255,255,255,0.2)' : '#ddd'}` : 'none',
                borderBottom: i < statsData.length - 3 ? `1px solid ${s.highlight ? 'rgba(255,255,255,0.2)' : '#ddd'}` : 'none',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${i * 60}ms, transform 0.5s ease ${i * 60}ms`,
              }}>
                {s.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AboutLayout>
  )
}

export default WhyDataArtisans