import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const subLinks = [
  { label: 'Overview',           href: '/overview' },
  { label: 'Why Data Artisans',  href: '/whydataartisans' },
  { label: 'Our Journey',        href: '/ourjourney' },
  // { label: 'Leadership',         href: '/leadership' },
  { label: 'Locations',          href: '/locations' },
]

interface AboutLayoutProps {
  title: string
  children: React.ReactNode
}

const AboutLayout: React.FC<AboutLayoutProps> = ({ children }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // Dynamic hero content based on current path
  const getHeroContent = () => {
    if (pathname === '/overview') {
      return {
        heading: 'Tech for tomorrow.',
        subheading: 'Empowering businesses with cutting-edge solutions',
        bgImage: '/overview-bg.jpg'
      }
    } else if (pathname === '/whydataartisans') {
      return {
        heading: 'Making great teams.',
        subheading: 'Choose us for reliable & secure software.',
        bgImage: '/overview-bg.jpg'
      }
    } else if (pathname === '/ourjourney') {
      return {
        heading: 'From vision to innovation.',
        subheading: 'A journey of progress, powered by technology and passion',
        bgImage: '/overview-bg.jpg'
      }
    } else if (pathname === '/locations') {
      return {
        heading: 'Our Global Presence',
        subheading: 'Serving businesses across the world with excellence',
        bgImage: '/overview-bg.jpg'
      }
    }
    return {
      heading: 'Tech for tomorrow.',
      subheading: 'Empowering businesses with cutting-edge solutions',
      bgImage: '/overview-bg.jpg'
    }
  }

  const heroContent = getHeroContent()

  return (
    <div style={{ paddingTop: '68px' }}>
      {/* ── Hero Banner ── */}
      <div
        style={{
          position: 'relative',
          height: '480px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `url(${heroContent.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* BG gradient overlay - decreased opacity */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(15,32,68,0.6) 0%, rgba(26,53,102,0.6) 40%, rgba(13,48,96,0.6) 70%, rgba(7,29,69,0.6) 100%)',
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

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 40px', width: '100%' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', textDecoration: 'underline', cursor: 'pointer' }}>Home</a>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>»</span>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>About Us</span>
          </div>
          
          {/* Dynamic Hero Content */}
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>
            {heroContent.heading}
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: '500', color: 'rgba(255,255,255,0.9)', marginBottom: '16px' }}>
            {heroContent.subheading}
          </p>
          <div style={{ width: '50px', height: '3px', backgroundColor: '#e31e24' }} />
        </div>
      </div>

      {/* ── Sub Nav Tabs - Removed sticky positioning ── */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e8e8e8', position: 'relative', zIndex: 100 }}>
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