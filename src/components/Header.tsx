// Header.tsx
import { useEffect, useState } from 'react';

const Header = () => {
  const [_scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      position: 'absolute',
      top: 0, left: 0, right: 0, zIndex: 100,
      background: 'transparent',  // Always transparent, no background color
      backdropFilter: 'none',     // No blur effect
      borderBottom: 'none',       // No border
      transition: 'all 0.3s',
      padding: '0 48px', 
      height: 68,
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
    }}>
      {/* Logo with Image */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {/* Logo Image - Replace the src with your actual logo path */}
        <img 
          src="/da-logo2.png"  // Change this to your actual logo path
          alt="Logo"
          style={{
            width: 236, height: 76, borderRadius: 1,
            objectFit: 'contain'
          }}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.currentTarget;
            // Fallback to gradient box if image fails to load
            target.style.display = 'none';
            if (target.nextSibling) {
              (target.nextSibling as HTMLElement).style.display = 'flex';
            }
          }}
        />
        {/* Fallback gradient box */}
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'linear-gradient(135deg,#5b63f8,#4048e8)',
          display: 'none', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="3" y="3" width="6" height="6" rx="1.5" fill="white" />
            <rect x="11" y="3" width="6" height="6" rx="1.5" fill="white" opacity="0.7" />
            <rect x="3" y="11" width="6" height="6" rx="1.5" fill="white" opacity="0.7" />
            <rect x="11" y="11" width="6" height="6" rx="1.5" fill="white" opacity="0.4" />
          </svg>
        </div>
        {/* <span style={{ fontWeight: 700, fontSize: 18, color: '#0f172a', letterSpacing: '-0.02em' }}>HUSD</span> */}
      </div>

      {/* Nav Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        {['Home', 'Trainings', 'Internships', 'Job Placements', 'Abroad Study', 'About Us', 'Contact Us'].map((l) => (
          <a 
            key={l} 
            href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
            style={{
              fontSize: 14, color: '#334155', textDecoration: 'none',
              fontWeight: 500, transition: 'color 0.2s',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#5b63f8')}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#334155')}
          >
            {l}
          </a>
        ))}
      </div>

      {/* Right - Get In Touch Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <span style={{ fontSize: 14, color: '#334155', fontWeight: 500, cursor: 'pointer' }}>
         
        </span>
        <button style={{
          border: '1.5px solid #0f172a', background: 'transparent',
          color: '#0f172a', borderRadius: 8,
          padding: '9px 20px', fontSize: 14, fontWeight: 600,
          cursor: 'pointer', transition: 'all 0.2s',
        }}
          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.background = '#0f172a';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#0f172a';
          }}
        >
          Get In Touch
        </button>
      </div>
    </nav>
  );
};

export default Header;