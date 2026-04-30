import React, { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'ABOUT US', href: '#about' },
  { label: 'EMPLOYERS', href: '#', hasDropdown: true },
  { label: 'JOB SEEKERS', href: '#', hasDropdown: true },
  { label: 'PARTNERS', href: '#serve' },
  { label: 'INSIGHTS', href: '#', hasDropdown: true },
  { label: 'CAREERS', href: '#' },
]

const HomeIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
)

const ChevronDown: React.FC = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: 3 }}>
    <path d="M7 10l5 5 5-5z" />
  </svg>
)

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#ffffff',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.12)' : '0 1px 6px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '68px',
        }}
      >
        {/* ── Logo ── */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
          <div
            style={{
              backgroundColor: '#e31e24',
              color: '#ffffff',
              width: '50px',
              height: '50px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: '19px',
                fontWeight: '800',
                lineHeight: 1.1,
                letterSpacing: '-0.5px',
              }}
            >
              tmi
            </span>
            <span
              style={{
                fontSize: '7px',
                fontWeight: '600',
                letterSpacing: '2px',
                opacity: 0.9,
              }}
            >
              NETWORK
            </span>
          </div>
        </a>

        {/* ── Desktop Nav ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
          className="desktop-nav"
        >
          {/* Home icon */}
          <a
            href="#"
            style={{
              color: '#444',
              padding: '6px 10px',
              borderRadius: '3px',
              display: 'flex',
              alignItems: 'center',
              transition: 'color 0.2s',
            }}
          >
            <HomeIcon />
          </a>

          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: '#333',
                fontSize: '12.5px',
                fontWeight: '500',
                padding: '6px 10px',
                borderRadius: '3px',
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                letterSpacing: '0.3px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = '#e31e24')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = '#333')
              }
            >
              {link.label}
              {link.hasDropdown && <ChevronDown />}
            </a>
          ))}

          <a
            href="#contact"
            style={{
              color: '#ffffff',
              fontSize: '12.5px',
              fontWeight: '600',
              padding: '9px 20px',
              backgroundColor: '#e31e24',
              borderRadius: '3px',
              marginLeft: '6px',
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = '#c01820')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = '#e31e24')
            }
          >
            CONTACT US
          </a>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: '1px solid #ddd',
            borderRadius: '4px',
            padding: '6px 10px',
            cursor: 'pointer',
            fontSize: '18px',
            color: '#333',
          }}
          className="hamburger"
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: '#fff',
            borderTop: '1px solid #eee',
            padding: '16px 30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: '#333',
                fontSize: '13px',
                fontWeight: '500',
                padding: '8px 0',
                borderBottom: '1px solid #f0f0f0',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              color: '#fff',
              fontSize: '13px',
              fontWeight: '600',
              padding: '10px 20px',
              backgroundColor: '#e31e24',
              borderRadius: '3px',
              textAlign: 'center',
              marginTop: '4px',
            }}
          >
            CONTACT US
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
