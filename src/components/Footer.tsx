import React from 'react'

/* ── Social Icons ─────────────────────────────────── */
const FacebookIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const TwitterIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
)
const LinkedInIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)
const InstagramIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)
const YoutubeIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
)

/* ── Data ─────────────────────────────────────────── */
const menuLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Employer', href: '#serve' },
  { label: 'Job Seeker', href: '#serve' },
]

const menuLinks2 = [
  { label: 'Partner', href: '#serve' },
  { label: 'Careers', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'HR Compliance', href: '#' },
  { label: 'Privacy Policy', href: '#' },
]

const jobLinks1 = [
  { label: 'Jobs in Insurance', href: '#' },
  { label: 'Jobs in Banking', href: '#' },
  { label: 'Jobs in IT', href: '#' },
  { label: 'Jobs in ITeS', href: '#' },
  { label: 'Jobs in Chemicals', href: '#' },
]

const jobLinks2 = [
  { label: 'Jobs in Hyderabad', href: '#' },
  { label: 'Jobs in Bangalore', href: '#' },
  { label: 'Jobs in Mumbai', href: '#' },
  { label: 'Jobs in Pune', href: '#' },
  { label: 'Jobs in Delhi', href: '#' },
  { label: 'Jobs in Kolkata', href: '#' },
  { label: 'Jobs in Ahmedabad', href: '#' },
  { label: 'Jobs in Chennai', href: '#' },
]

const socialIcons = [
  { icon: <FacebookIcon />, href: '#', label: 'Facebook' },
  { icon: <TwitterIcon />, href: '#', label: 'Twitter' },
  { icon: <LinkedInIcon />, href: '#', label: 'LinkedIn' },
  { icon: <InstagramIcon />, href: '#', label: 'Instagram' },
  { icon: <YoutubeIcon />, href: '#', label: 'YouTube' },
]

const linkStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '13px',
  color: '#aaaaaa',
  marginBottom: '10px',
  transition: 'color 0.2s ease',
}

const LinkItem: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <a
    href={href}
    style={linkStyle}
    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#e31e24')}
    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#aaaaaa')}
  >
    {label}
  </a>
)

/* ── Component ────────────────────────────────────── */
const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#212121',
        color: '#aaa',
        paddingTop: '56px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1.6fr',
          gap: '50px',
        }}
      >
        {/* ── Col 1: Brand ── */}
        <div>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
            <div
              style={{
                backgroundColor: '#e31e24',
                color: '#fff',
                width: '50px',
                height: '50px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
              }}
            >
              <span style={{ fontSize: '19px', fontWeight: '800', lineHeight: 1.1 }}>tmi</span>
              <span style={{ fontSize: '7px', fontWeight: '600', letterSpacing: '2px' }}>NETWORK</span>
            </div>
          </div>

          <p style={{ fontSize: '13px', lineHeight: 1.85, color: '#888', marginBottom: '22px' }}>
            <span style={{ color: '#e31e24', fontWeight: '600' }}>TMI Network</span> is one of
            India's oldest and largest recruitment agencies in India. It is part of the TMI Group of
            companies, based in Hyderabad, India.
          </p>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {socialIcons.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid #444',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#aaa',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#e31e24'
                  el.style.color = '#e31e24'
                  el.style.backgroundColor = 'rgba(227,30,36,0.1)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#444'
                  el.style.color = '#aaa'
                  el.style.backgroundColor = 'transparent'
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Col 2: Menu & Links ── */}
        <div>
          <h4
            style={{
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '20px',
              letterSpacing: '0.5px',
            }}
          >
            Menu &amp; Links
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
            <div>
              {menuLinks.map((l) => (
                <LinkItem key={l.label} href={l.href} label={l.label} />
              ))}
            </div>
            <div>
              {menuLinks2.map((l) => (
                <LinkItem key={l.label} href={l.href} label={l.label} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Col 3: Quick Job Links ── */}
        <div>
          <h4
            style={{
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '20px',
              letterSpacing: '0.5px',
            }}
          >
            Quick Job Links
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
            <div>
              {jobLinks1.map((l) => (
                <LinkItem key={l.label} href={l.href} label={l.label} />
              ))}
            </div>
            <div>
              {jobLinks2.map((l) => (
                <LinkItem key={l.label} href={l.href} label={l.label} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Copyright Bar ── */}
      <div
        style={{
          borderTop: '1px solid #333',
          marginTop: '48px',
          padding: '16px 40px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '12.5px', color: '#666' }}>
          © 2026 TMI Network. All Rights Reserved.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
