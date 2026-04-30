import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const subLinks = [
  { label: 'Overview',           href: '/overview' },
  { label: 'Why Data Artisans',  href: '/whydataartisans' },
  { label: 'Our Journey',        href: '/ourjourney' },
  { label: 'Leadership',         href: '/leadership' },
  { label: 'Locations',          href: '/locations' },
]

interface AboutLayoutProps {
  title: string
  children: React.ReactNode
}

const AboutLayout: React.FC<AboutLayoutProps> = ({ title, children }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div style={{ paddingTop: '68px' }}>
      {/* ── Hero Banner ── */}
      <div
        style={{
          position: 'relative',
          height: '220px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* BG gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, #0f2044 0%, #1a3566 40%, #0d3060 70%, #071d45 100%)',
        }} />
        {/* Tech pattern overlay */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.08,
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px),
            repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px)`,
        }} />
        {/* Decorative circles */}
        {[350, 500, 650].map((x, i) => (
          <div key={i} style={{
            position: 'absolute', right: `${x - 300}px`, top: '-40px',
            width: `${140 + i * 60}px`, height: `${140 + i * 60}px`,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.08)',
          }} />
        ))}
        {/* Globe-like decorative SVG (right side) */}
        <div style={{ position: 'absolute', right: '120px', top: '20px', opacity: 0.18 }}>
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
            <circle cx="90" cy="90" r="80" stroke="white" strokeWidth="1.5" />
            <ellipse cx="90" cy="90" rx="45" ry="80" stroke="white" strokeWidth="1" />
            <ellipse cx="90" cy="90" rx="80" ry="35" stroke="white" strokeWidth="1" />
            <line x1="10" y1="90" x2="170" y2="90" stroke="white" strokeWidth="1" />
            <line x1="90" y1="10" x2="90" y2="170" stroke="white" strokeWidth="1" />
          </svg>
        </div>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 40px', width: '100%' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', textDecoration: 'underline', cursor: 'pointer' }}>Home</a>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>»</span>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>About Us</span>
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 48px)', fontWeight: '700', color: '#ffffff', marginBottom: '14px' }}>
            {title}
          </h1>
          <div style={{ width: '50px', height: '3px', backgroundColor: '#e31e24' }} />
        </div>
      </div>

      {/* ── Sub Nav Tabs ── */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e8e8e8', position: 'sticky', top: '68px', zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', display: 'flex', gap: '0', overflowX: 'auto' }}>
          {subLinks.map((link) => {
            const active = pathname === link.href
            return (
              <button
                key={link.href}
                onClick={() => navigate(link.href)}
                style={{
                  padding: '16px 22px',
                  fontSize: '13px',
                  fontWeight: active ? '600' : '400',
                  color: active ? '#e31e24' : '#555',
                  background: 'none',
                  border: 'none',
                  borderBottom: active ? '3px solid #e31e24' : '3px solid transparent',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  fontFamily: "'Poppins', sans-serif",
                }}
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = '#e31e24' }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = '#555' }}
              >
                {link.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Page Content ── */}
      <div>{children}</div>
    </div>
  )
}

export default AboutLayout