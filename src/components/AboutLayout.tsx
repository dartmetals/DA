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

  // State for responsive layout
  const [isMobile, setIsMobile] = React.useState(false);
  const [isTablet, setIsTablet] = React.useState(false);
  const [_isLaptop, setIsLaptop] = React.useState(false);

  // Check screen size for responsive layout
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 700);
      setIsTablet(window.innerWidth >= 700 && window.innerWidth <= 1024);
      setIsLaptop(window.innerWidth > 1024 && window.innerWidth <= 1440);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Responsive hero background style
  const getHeroBackgroundStyle = (bgImage: string): React.CSSProperties => {
    if (isMobile) {
      return {
        position: 'relative',
        height: '240px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0a1a3a',
      };
    }
    if (isTablet) {
      return {
        position: 'relative',
        height: '430px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };
    }
    // Laptop and Desktop
    return {
      position: 'relative',
      height: '480px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    };
  };

  // Responsive heading style
  const getHeadingStyle = (): React.CSSProperties => {
    if (isMobile) {
      return {
        fontSize: '24px',
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: '8px',
      };
    }
    if (isTablet) {
      return {
        fontSize: '34px',
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: '10px',
      };
    }
    return {
      fontSize: 'clamp(28px, 4vw, 42px)',
      fontWeight: '700',
      color: '#ffffff',
      marginBottom: '12px',
    };
  };

  // Responsive subheading style
  const getSubheadingStyle = (): React.CSSProperties => {
    if (isMobile) {
      return {
        fontSize: '14px',
        fontWeight: '500',
        color: 'rgba(255,255,255,0.9)',
        marginBottom: '12px',
      };
    }
    if (isTablet) {
      return {
        fontSize: '17px',
        fontWeight: '500',
        color: 'rgba(255,255,255,0.9)',
        marginBottom: '14px',
      };
    }
    return {
      fontSize: 'clamp(16px, 2vw, 20px)',
      fontWeight: '500',
      color: 'rgba(255,255,255,0.9)',
      marginBottom: '16px',
    };
  };

  // Dynamic hero content based on current path
  const getHeroContent = () => {
    if (pathname === '/overview') {
      return {
        heading: 'Tech for tomorrow',
        subheading: 'Empowering businesses with cutting-edge solutions.',
        bgImage: '/overview-bg.jpg'
      }
    } else if (pathname === '/whydataartisans') {
      return {
        heading: 'Making great teams',
        subheading: 'Choose us for reliable & secure software.',
        bgImage: '/overview-bg.jpg'
      }
    } else if (pathname === '/ourjourney') {
      return {
        heading: 'From vision to innovation',
        subheading: 'A journey of progress, powered by technology and passion.',
        bgImage: '/overview-bg.jpg'
      }
    } else if (pathname === '/locations') {
      return {
        heading: 'Our Global Presence',
        subheading: 'Serving businesses across the world with excellence.',
        bgImage: '/overview-bg.jpg'
      }
    }
    return {
      heading: 'Tech for tomorrow',
      subheading: 'Empowering businesses with cutting-edge solutions.',
      bgImage: '/overview-bg.jpg'
    }
  }

  const heroContent = getHeroContent()

  return (
    <div style={{ paddingTop: '68px' }}>
      {/* ── Hero Banner ── */}
      <div style={getHeroBackgroundStyle(heroContent.bgImage)}>
        {/* BG gradient overlay - decreased opacity */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(15,32,68,0.6) 0%, rgba(26,53,102,0.6) 40%, rgba(13,48,96,0.6) 70%, rgba(7,29,69,0.6) 100%)',
        }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 40px', width: '100%' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.7)', fontSize: isMobile ? '10px' : '12px', textDecoration: 'underline', cursor: 'pointer' }}>Home</a>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: isMobile ? '10px' : '12px' }}>»</span>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: isMobile ? '10px' : '12px' }}>About Us</span>
          </div>
          
          {/* Dynamic Hero Content */}
          <h1 style={getHeadingStyle()}>
            {heroContent.heading}
          </h1>
          <p style={getSubheadingStyle()}>
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
                  padding: isMobile ? '12px 16px' : '16px 22px',
                  fontSize: isMobile ? '12px' : '13px',
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