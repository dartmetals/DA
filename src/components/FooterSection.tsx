// FooterSection.jsx
import { motion } from 'framer-motion';

/* ── Social icon SVGs ─────────────────────────────────── */
const socialIcons = [
  {
    key: 'discord',
    title: 'Discord',
    svg: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M13.4 3A11.2 11.2 0 0010.7 2a.05.05 0 00-.06.03c-.12.21-.25.49-.34.71a10.4 10.4 0 00-3.06 0 7.2 7.2 0 00-.35-.71A.05.05 0 006.8 2a11.2 11.2 0 00-2.7.99A.05.05 0 004 3.05c-1.73 2.5-2.2 4.93-1.97 7.33a.06.06 0 00.02.04 11.3 11.3 0 003.38 1.7.05.05 0 00.06-.02c.26-.36.49-.73.69-1.13a.05.05 0 00-.03-.07 7.44 7.44 0 01-1.06-.5.05.05 0 010-.08l.2-.16a.05.05 0 01.05-.01c2.24 1.02 4.66 1.02 6.87 0a.05.05 0 01.06.01l.21.16a.05.05 0 010 .08c-.34.2-.69.37-1.06.5a.05.05 0 00-.03.07c.2.4.44.78.69 1.13a.05.05 0 00.06.02 11.3 11.3 0 003.38-1.7.06.06 0 00.02-.04c.27-2.78-.46-5.18-1.96-7.33a.05.05 0 00-.03-.02zM5.88 8.88c-.66 0-1.2-.6-1.2-1.34S5.2 6.2 5.88 6.2c.68 0 1.21.61 1.2 1.34 0 .74-.53 1.34-1.2 1.34zm4.24 0c-.66 0-1.2-.6-1.2-1.34s.53-1.34 1.2-1.34c.67 0 1.21.61 1.2 1.34 0 .74-.52 1.34-1.2 1.34z" />
      </svg>
    ),
  },
  {
    key: 'twitter',
    title: 'Twitter / X',
    svg: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M12.6 1h2.4L9.7 7.1 16 15h-4.6L7.5 9.8 3.2 15H.8l5.6-6.5L0 1h4.7l3.5 4.7L12.6 1zM11.8 13.5h1.3L4.3 2.4H2.9l8.9 11.1z" />
      </svg>
    ),
  },
  {
    key: 'youtube',
    title: 'YouTube',
    svg: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M15.8 4.8s-.2-1.3-.8-1.9c-.7-.8-1.6-.8-1.9-.8C11.1 2 8 2 8 2S4.9 2 2.9 2.1c-.4 0-1.2.1-1.9.8-.6.6-.8 1.9-.8 1.9S0 6.2 0 7.7v1.4c0 1.4.2 2.8.2 2.8s.2 1.3.8 1.9c.8.8 1.8.7 2.2.8C4.6 14.7 8 14.8 8 14.8s3.1 0 5.1-.2c.4 0 1.2-.1 1.9-.8.6-.6.8-1.9.8-1.9S16 10.5 16 9V7.6c0-1.4-.2-2.8-.2-2.8zM6.3 10.4V5.5l5.1 2.5-5.1 2.4z" />
      </svg>
    ),
  },
  {
    key: 'instagram',
    title: 'Instagram',
    svg: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C5.8 0 5.6 0 4.7 0 3.8 0 3.2.2 2.7.4c-.5.2-.9.5-1.4 1C.9 1.9.6 2.3.4 2.7.2 3.2 0 3.8 0 4.7 0 5.6 0 5.8 0 8s0 2.4 0 3.3c0 .9.2 1.5.4 2 .2.5.5.9 1 1.4.5.5.9.8 1.3 1 .5.2 1.1.4 2 .4.9 0 1.1 0 3.3 0s2.4 0 3.3 0c.9 0 1.5-.2 2-.4.5-.2.9-.5 1.4-1 .5-.5.8-.9 1-1.4.2-.5.4-1.1.4-2 0-.9 0-1.1 0-3.3S16 5.6 16 4.7c0-.9-.2-1.5-.4-2-.2-.5-.5-.9-1-1.4C14.1.9 13.7.6 13.3.4 12.8.2 12.2 0 11.3 0 10.4 0 10.2 0 8 0zm0 1.4c2.2 0 2.4 0 3.3 0 .8 0 1.2.2 1.5.3.4.1.6.3.9.6.3.3.5.5.6.9.1.3.3.7.3 1.5 0 .9 0 1.1 0 3.3s0 2.4 0 3.3c0 .8-.2 1.2-.3 1.5-.1.4-.3.6-.6.9-.3.3-.5.5-.9.6-.3.1-.7.3-1.5.3-.9 0-1.1 0-3.3 0s-2.4 0-3.3 0c-.8 0-1.2-.2-1.5-.3-.4-.1-.6-.3-.9-.6-.3-.3-.5-.5-.6-.9C1.6 12.5 1.4 12.1 1.4 11.3c0-.9 0-1.1 0-3.3s0-2.4 0-3.3c0-.8.2-1.2.3-1.5.1-.4.3-.6.6-.9.3-.3.5-.5.9-.6C3.5 1.6 3.9 1.4 4.7 1.4c.9 0 1.1 0 3.3 0zM8 3.9A4.1 4.1 0 1 0 8 12.1 4.1 4.1 0 0 0 8 3.9zm0 6.7A2.7 2.7 0 1 1 8 5.4 2.7 2.7 0 0 1 8 10.6zm4.3-6.8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
      </svg>
    ),
  },
  {
    key: 'snapchat',
    title: 'Snapchat',
    svg: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 1c-1.8 0-3.5 1.3-3.5 3.4v.6c-.4.2-1.2.2-1.2.9 0 .5.5.7.5.7-.2.8-.9 1.5-1.6 2-.2.1-.2.3 0 .4.8.3 1.3.3 1.7.7.2.2-.1.6 0 .9.1.2.4.3.6.3 1.5-.2 2.5.7 3.5.7s2-.9 3.5-.7c.2 0 .5-.1.6-.3.1-.3-.2-.7 0-.9.4-.4.9-.4 1.7-.7.2-.1.2-.3 0-.4-.7-.5-1.4-1.2-1.6-2 0 0 .5-.2.5-.7 0-.7-.8-.7-1.2-.9v-.6C11.5 2.3 9.8 1 8 1z" />
      </svg>
    ),
  },
  {
    key: 'linkedin',
    title: 'LinkedIn',
    svg: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M0 1.1C0 .5.5 0 1.1 0h13.8C15.5 0 16 .5 16 1.1v13.8c0 .6-.5 1.1-1.1 1.1H1.1A1.1 1.1 0 010 14.9V1.1zM4.8 13.4V6.2H2.4v7.2h2.4zM3.6 5.2a1.4 1.4 0 000-2.8 1.4 1.4 0 000 2.8zm10.2 8.2V9.5c0-2.1-1.1-3-2.7-3-1.3 0-1.9.7-2.2 1.2V6.2H6.5v7.2h2.4v-3.8c0-1.1.6-1.7 1.5-1.7.9 0 1.4.5 1.4 1.7v3.8h2.4z" />
      </svg>
    ),
  },
];

/* ── Footer column data ───────────────────────────────── */
const quickLinks = [
  { label: 'Home',          href: '/'              },
  { label: 'About',         href: '/about'         },
  { label: 'Trainings',     href: '/training'      },
  { label: 'Internship',    href: '/internship'    },
  { label: 'Job Placement', href: '/job-placement' },
  { label: 'Study Abroad',  href: '/study-abroad'  },
  { label: 'Contact',       href: '/contact'       },
];

const countries = [
  { label: '🇬🇧 United Kingdom', href: '#' },
  { label: '🇮🇳 India',          href: '#' },
  { label: '🇺🇸 United States',  href: '#' },
  { label: '🇦🇺 Australia',      href: '#' },
  { label: '🇨🇦 Canada',         href: '#' },
  { label: '🇩🇪 Germany',        href: '#' },
  { label: '🇦🇪 UAE',            href: '#' },
];

const contactInfo = [
  { icon: '📧', text: 'info@dataartisans.co.uk',   href: 'mailto:info@dataartisans.co.uk' },
  { icon: '📞', text: '+44 7700 900000',            href: 'tel:+447700900000'             },
  { icon: '📍', text: 'London, United Kingdom',     href: '#'                             },
];

/* ══════════════════════════════════════════════════════
   FOOTER SECTION
══════════════════════════════════════════════════════ */
const FooterSection = () => (
  <footer style={{
    background: '#0d1829',
    fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif",
    padding: '64px 48px 0',
  }}>
    <div style={{ maxWidth: 1400, margin: '0 auto' }}>

      {/* ── TOP GRID ────────────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '280px 1fr 1fr 1fr',
        gap: 48,
        paddingBottom: 56,
      }}>

        {/* ── COL 1: Brand ── */}
        <div>
          {/* Logo - replaced SVG with image */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <img 
              src="/da-logo2.png" 
              alt="Data Artisans Logo"
              style={{
                width: 316, 
                height: 56, 
                borderRadius: 10,
                objectFit: 'cover',
              }}
            />
            {/* <span style={{
              fontSize: 19, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em',
            }}>
              Data Artisans
            </span> */}
          </div>

          {/* Tagline paragraph */}
          <p style={{
            fontSize: 13.5, color: '#64748b',
            lineHeight: 1.7, maxWidth: 240, marginBottom: 32,
          }}>
            Empowering the next generation of IT professionals with world-class training,
            guaranteed placements, and global education pathways — tailored for the UK market
            and beyond.
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {socialIcons.map(({ key, title, svg }) => (
              <motion.a
                key={key}
                href="#"
                title={title}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                style={{
                  width: 34, height: 34, borderRadius: 8,
                  background: 'rgba(255,255,255,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#64748b', textDecoration: 'none',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(91,99,248,0.25)';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#a5b4fc';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#64748b';
                }}
              >
                {svg}
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── COL 2: Quick Links ── */}
        <div>
          <h4 style={{
            fontSize: 15, fontWeight: 700, color: '#fff',
            marginBottom: 22, letterSpacing: '0.01em',
          }}>
            Quick Links
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
            {quickLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: 13.5, color: '#64748b',
                  textDecoration: 'none',
                  transition: 'color 0.2s, transform 0.2s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#a5b4fc';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateX(4px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#64748b';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateX(0)';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── COL 3: Countries ── */}
        <div>
          <h4 style={{
            fontSize: 15, fontWeight: 700, color: '#fff',
            marginBottom: 22, letterSpacing: '0.01em',
          }}>
            Countries We Serve
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
            {countries.map(c => (
              <a
                key={c.label}
                href={c.href}
                style={{
                  fontSize: 13.5, color: '#64748b',
                  textDecoration: 'none',
                  transition: 'color 0.2s, transform 0.2s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#a5b4fc';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateX(4px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#64748b';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateX(0)';
                }}
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── COL 4: Contact ── */}
        <div>
          <h4 style={{
            fontSize: 15, fontWeight: 700, color: '#fff',
            marginBottom: 22, letterSpacing: '0.01em',
          }}>
            Contact Us
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {contactInfo.map(item => (
              <a
                key={item.text}
                href={item.href}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.8')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
              >
                <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                <span style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.5 }}>
                  {item.text}
                </span>
              </a>
            ))}
          </div>

          {/* Newsletter mini CTA */}
          <div style={{ marginTop: 32 }}>
            <p style={{ fontSize: 12.5, color: '#475569', marginBottom: 10 }}>
              Stay updated with our latest news
            </p>
            <div style={{ display: 'flex', gap: 0 }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1, padding: '9px 14px',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRight: 'none',
                  borderRadius: '8px 0 0 8px',
                  color: '#fff', fontSize: 13,
                  outline: 'none',
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}
              />
              <button
                style={{
                  background: '#5b63f8', color: '#fff',
                  border: 'none',
                  borderRadius: '0 8px 8px 0',
                  padding: '9px 14px',
                  fontSize: 12.5, fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = '#4048e8')}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = '#5b63f8')}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

      </div>{/* end top grid */}

      {/* ── DIVIDER ─────────────────────────────────── */}
      <div style={{ height: 1, background: 'rgba(255,255,255,0.07)' }} />

      {/* ── BOTTOM BAR ──────────────────────────────── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
        padding: '20px 0 24px',
      }}>
        <span style={{ fontSize: 12.5, color: '#475569' }}>
          © 2024-2025 Data Artisans. All rights reserved.
        </span>

        <div style={{ display: 'flex', gap: 32 }}>
          {['Terms & policy', 'Privacy Policy', 'Cookies Settings'].map(item => (
            <a
              key={item}
              href="#"
              style={{
                fontSize: 12.5, color: '#475569',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#a5b4fc')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#475569')}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

    </div>{/* end maxWidth container */}
  </footer>
);

export default FooterSection;