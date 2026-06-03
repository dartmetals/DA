import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'ABOUT US', href: '#about', hasDropdown: true },
  { label: 'EXPERTISE', href: '#expertise', hasDropdown: true },
  { label: 'SOLUTIONS', href: 'solutions', hasDropdown: true },
  { label: 'COURSES', href: 'courses', hasDropdown: true },
  { label: 'CONTACT US', href: 'contact-us', hasDropdown: false },
  { label: 'JOIN US', href: 'join-us', hasDropdown: false },
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const dropdowns = {
    'ABOUT US': [
      { label: 'Overview', href: '/overview' },
      { label: 'Why Data Artisans', href: '/whydataartisans' },
      { label: 'Our Journey', href: '/ourjourney' },
      // { label: 'Leadership', href: '/leadership' },
      { label: 'Locations', href: '/locations' },
    ],
    'EXPERTISE': [
      { label: 'Software Training', href: 'training' },
      { label: 'Internships', href: 'internship' },
      { label: 'Job Placement Support', href: 'jobplacementsupport' },
      { label: 'Study Abroad', href: 'studyabroad' },
      { label: 'Industries', href: 'industries' },
      { label: 'AI Powered Hiring', href: 'ai-powered-hiring' },
      { label: 'Application Development', href: 'application-development' },
    ],
    'SOLUTIONS': [
      { label: 'Cloud Solutions', href: 'cloud-solutions' },
      { label: 'BI & Data Visualization', href: 'bi-data' },
      { label: 'IOT & Digital Engineering', href: 'iot-digital' },
      { label: 'Data & Artificial Intelligence', href: 'data-artificial' },
      { label: 'Enterprise Solutions', href: 'enterprise-solutions' },
      { label: 'Professional Staffing', href: 'professional-staffing' },
      { label: 'Research & Consulting', href: 'research-consulting' },
      { label: 'Career Transitions', href: 'career-transitions' },
    ],
    'COURSES': [
      { label: 'Azure Data Engineer', href: 'data-engineer' },
      { label: 'Power BI', href: 'power-bi' },
      { label: 'Data Analysis', href: 'data-analysis' },
      { label: 'View All Courses', href: 'courses-lists' },
    ],
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#ffffff',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.12)' : 'none',
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
        {/* ── Logo Image - Navigates to Home ── */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img 
            src="/da-logo2.png" 
            alt="TMI Network Logo"
            style={{
              height: '70px',
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
          className="desktop-nav"
        >
          {/* Home icon - Navigates to Home */}
          <Link
            to="/"
            style={{
              color: '#444',
              padding: '6px 10px',
              borderRadius: '3px',
              display: 'flex',
              alignItems: 'center',
              transition: 'color 0.2s',
              textDecoration: 'none',
            }}
          >
            <HomeIcon />
          </Link>

          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.label)}
              onMouseLeave={() => link.hasDropdown && setOpenDropdown(null)}
            >
              <a
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
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = '#2563eb')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = '#333')
                }
              >
                {link.label}
                {link.hasDropdown && <ChevronDown />}
              </a>

              {/* Dropdown Menu */}
              {link.hasDropdown && openDropdown === link.label && dropdowns[link.label as keyof typeof dropdowns] && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    backgroundColor: '#ffffff',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    minWidth: '200px',
                    overflow: 'hidden',
                    zIndex: 100,
                    animation: 'fadeIn 0.2s ease',
                  }}
                >
                  {dropdowns[link.label as keyof typeof dropdowns].map((item) => {
                    // Check if it's a React Router path (starts with /) or hash link
                    if (item.href.startsWith('/')) {
                      return (
                        <Link
                          key={item.label}
                          to={item.href}
                          style={{
                            display: 'block',
                            padding: '10px 16px',
                            fontSize: '12px',
                            color: '#333',
                            textDecoration: 'none',
                            borderBottom: '1px solid #f0f0f0',
                            transition: 'background 0.2s ease, color 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = '#f5f5f5'
                            ;(e.currentTarget as HTMLElement).style.color = '#2563eb'
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
                            ;(e.currentTarget as HTMLElement).style.color = '#333'
                          }}
                        >
                          {item.label}
                        </Link>
                      )
                    }
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        style={{
                          display: 'block',
                          padding: '10px 16px',
                          fontSize: '12px',
                          color: '#333',
                          textDecoration: 'none',
                          borderBottom: '1px solid #f0f0f0',
                          transition: 'background 0.2s ease, color 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.backgroundColor = '#f5f5f5'
                          ;(e.currentTarget as HTMLElement).style.color = '#2563eb'
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
                          ;(e.currentTarget as HTMLElement).style.color = '#333'
                        }}
                      >
                        {item.label}
                      </a>
                    )
                  })}
                </div>
              )}
            </div>
          ))}

          {/* GET STARTED Button - Blue Theme */}
          <a
            href="#get-started"
            style={{
              color: '#ffffff',
              fontSize: '12.5px',
              fontWeight: '600',
              padding: '9px 20px',
              backgroundColor: '#2563eb',
              borderRadius: '3px',
              marginLeft: '6px',
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.2s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = '#1d4ed8')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = '#2563eb')
            }
          >
            GET STARTED
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
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
        >
          {/* Mobile Home Link */}
          <Link
            to="/"
            style={{
              color: '#333',
              fontSize: '13px',
              fontWeight: '500',
              padding: '8px 0',
              borderBottom: '1px solid #f0f0f0',
              display: 'block',
              textDecoration: 'none',
            }}
            onClick={() => setMobileOpen(false)}
          >
            HOME
          </Link>

          {NAV_LINKS.map((link) => {
            const mobileDropdownItems = dropdowns[link.label as keyof typeof dropdowns]
            
            return (
              <div key={link.label}>
                <a
                  href={link.href}
                  style={{
                    color: '#333',
                    fontSize: '13px',
                    fontWeight: '500',
                    padding: '8px 0',
                    borderBottom: '1px solid #f0f0f0',
                    display: 'block',
                    textDecoration: 'none',
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
                
                {/* Mobile submenu items */}
                {mobileDropdownItems && (
                  <div style={{ paddingLeft: '16px', marginTop: '4px', marginBottom: '8px' }}>
                    {mobileDropdownItems.map((item) => {
                      if (item.href.startsWith('/')) {
                        return (
                          <Link
                            key={item.label}
                            to={item.href}
                            style={{
                              color: '#666',
                              fontSize: '12px',
                              fontWeight: '400',
                              padding: '6px 0',
                              display: 'block',
                              borderBottom: '1px solid #f5f5f5',
                              textDecoration: 'none',
                            }}
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        )
                      }
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          style={{
                            color: '#666',
                            fontSize: '12px',
                            fontWeight: '400',
                            padding: '6px 0',
                            display: 'block',
                            borderBottom: '1px solid #f5f5f5',
                            textDecoration: 'none',
                          }}
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </a>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
          <a
            href="#get-started"
            style={{
              color: '#fff',
              fontSize: '13px',
              fontWeight: '600',
              padding: '10px 20px',
              backgroundColor: '#2563eb',
              borderRadius: '3px',
              textAlign: 'center',
              marginTop: '4px',
              textDecoration: 'none',
            }}
          >
            GET STARTED
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          /* For tablet and below, make desktop nav scrollable horizontally */
          .desktop-nav {
            display: flex !important;
            overflow-x: auto;
            overflow-y: hidden;
            white-space: nowrap;
            scrollbar-width: thin;
            -webkit-overflow-scrolling: touch;
            flex: 1;
            justify-content: flex-start;
            margin-left: 20px;
            margin-right: 10px;
          }
          
          .desktop-nav::-webkit-scrollbar {
            height: 4px;
          }
          
          .desktop-nav::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 4px;
          }
          
          .desktop-nav::-webkit-scrollbar-thumb {
            background: #c1c1c1;
            border-radius: 4px;
          }
          
          .desktop-nav::-webkit-scrollbar-thumb:hover {
            background: #a8a8a8;
          }
          
          .desktop-nav a,
          .desktop-nav > div {
            flex-shrink: 0;
          }
          
          .hamburger {
            display: none !important;
          }
        }
        
        @media (max-width: 768px) {
          /* For mobile, hide desktop nav and show hamburger */
          .desktop-nav {
            display: none !important;
          }
          .hamburger {
            display: block !important;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar