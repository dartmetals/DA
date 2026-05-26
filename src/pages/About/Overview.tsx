import React from 'react'
import AboutLayout from '../../components/AboutLayout'


/* ── Vision/Mission Icons ── */
const EyeIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <circle cx="22" cy="22" r="20" stroke="#cccccc" strokeWidth="1.5" fill="none" />
    <ellipse cx="22" cy="22" rx="12" ry="8" stroke="#888" strokeWidth="1.5" fill="none" />
    <circle cx="22" cy="22" r="4" fill="#888" />
    <path d="M22 6v4M22 34v4M6 22h4M34 22h4" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const CustomerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="8" r="5" stroke="#2563eb" strokeWidth="1.8" />
    <path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="22" cy="6" r="3" fill="#2563eb" opacity="0.3" />
    <circle cx="6" cy="6" r="3" fill="#2563eb" opacity="0.3" />
  </svg>
)

const EmployeeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="4" y="4" width="20" height="20" rx="4" stroke="#2563eb" strokeWidth="1.8" fill="none" />
    <path d="M9 14l4 4 6-8" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ShareholderIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="10" stroke="#2563eb" strokeWidth="1.8" fill="none" />
    <path d="M9 14l3 3 7-7" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 8v2M14 18v2M8 14h2M18 14h2" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const CommunityIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="10" cy="10" r="4" stroke="#2563eb" strokeWidth="1.8" fill="none" />
    <circle cx="20" cy="10" r="4" stroke="#2563eb" strokeWidth="1.8" fill="none" />
    <path d="M2 24c0-4.418 3.582-8 8-8" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M18 16c4.418 0 8 3.582 8 8" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 16c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z" fill="#2563eb" opacity="0.4" />
  </svg>
)

/* ── Service Card Component with bgImage support (no icon, white text) ── */
const ServiceCard: React.FC<{ title: string; description: string; bgImage?: string }> = ({ title, description, bgImage }) => (
  <div style={{
    position: 'relative',
    border: '1px solid #ebebeb',
    borderRadius: '10px',
    padding: '28px 24px',
    backgroundColor: '#fff',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    overflow: 'hidden',
    backgroundImage: bgImage ? `url(${bgImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
  onMouseEnter={e => {
    const el = e.currentTarget as HTMLElement
    el.style.boxShadow = '0 8px 30px rgba(37,99,235,0.12)'
    el.style.transform = 'translateY(-4px)'
  }}
  onMouseLeave={e => {
    const el = e.currentTarget as HTMLElement
    el.style.boxShadow = 'none'
    el.style.transform = 'translateY(0)'
  }}>
    {/* Blue gradient overlay with increased opacity for better visibility */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(37,99,235,0.4), rgba(37,99,235,0.4))',
      zIndex: 0,
    }} />
    
    <div style={{ position: 'relative', zIndex: 1 }}>
      <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>{title}</h3>
      <p style={{ fontSize: '13.5px', color: '#ffffff', lineHeight: 1.75, opacity: 0.9 }}>{description}</p>
    </div>
  </div>
)

/* ══════════════════ OVERVIEW PAGE ══════════════════ */
const Overview: React.FC = () => {
  // State for responsive layout
  const [isMobile, setIsMobile] = React.useState(false);
  const [isTablet, setIsTablet] = React.useState(false);

  // Check screen size for responsive layout
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Responsive style functions
  const getHeroBackgroundStyle = (): React.CSSProperties => {
    if (isMobile) {
      return {
        backgroundColor: '#fff',
        backgroundImage: 'url("/about-hero-bg.jpg")',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        padding: '60px 0',
      };
    }
    if (isTablet) {
      return {
        backgroundColor: '#fff',
        backgroundImage: 'url("/about-hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        padding: '70px 0',
      };
    }
    return {
      backgroundColor: '#fff',
      backgroundImage: 'url("/about-hero-bg.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      padding: '80px 0',
    };
  };

  const getHeroHeadingStyle = (): React.CSSProperties => {
    if (isMobile) return { fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px' };
    if (isTablet) return { fontSize: '30px', fontWeight: '700', color: '#1a1a1a', marginBottom: '18px' };
    return { fontSize: '32px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px' };
  };

  const getHeroParaStyle = (): React.CSSProperties => {
    if (isMobile) return { fontSize: '13px', color: '#555', lineHeight: 1.75, marginBottom: '16px', display: 'none' };
    if (isTablet) return { fontSize: '14px', color: '#555', lineHeight: 1.8, marginBottom: '18px' };
    return { fontSize: '15px', color: '#555', lineHeight: 1.85, marginBottom: '20px' };
  };

  const getVisionMissionGridStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'stretch' };
    }
    return { display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px', alignItems: 'stretch' };
  };

  const getMissionGridStyle = (): React.CSSProperties => {
    if (isMobile) return { display: 'flex', flexDirection: 'column', gap: '2px' };
    if (isTablet) return { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' };
    return { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' };
  };

  const getServiceCardsGridStyle = (): React.CSSProperties => {
    if (isMobile) return { display: 'grid', gridTemplateColumns: '1fr', gap: '24px' };
    if (isTablet) return { display: 'grid', gridTemplateColumns: '1fr', gap: '24px' };
    return { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' };
  };

  const getCompanyOverviewGridStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' };
    }
    return { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' };
  };

  const getSectionHeadingStyle = (): React.CSSProperties => {
    if (isMobile) return { fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'center' };
    if (isTablet) return { fontSize: '30px', fontWeight: '700', color: '#1a1a1a', marginBottom: '22px', textAlign: 'center' };
    return { fontSize: '32px', fontWeight: '700', color: '#1a1a1a', marginBottom: '24px' };
  };

  const getVisionHeadingStyle = (): React.CSSProperties => {
    if (isMobile) return { fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'center' };
    if (isTablet) return { fontSize: '30px', fontWeight: '700', color: '#1a1a1a', marginBottom: '24px', textAlign: 'center' };
    return { fontSize: '36px', fontWeight: '700', color: '#1a1a1a', marginBottom: '28px' };
  };

  const getMissionHeadingStyle = (): React.CSSProperties => {
    if (isMobile) return { fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px', textAlign: 'center', marginTop: '20px' };
    if (isTablet) return { fontSize: '30px', fontWeight: '700', color: '#1a1a1a', marginBottom: '24px', textAlign: 'center', marginTop: '0' };
    return { fontSize: '36px', fontWeight: '700', color: '#1a1a1a', marginBottom: '28px' };
  };

  const getHowItHappensHeadingStyle = (): React.CSSProperties => {
    if (isMobile) return { fontSize: '24px', fontWeight: '700', color: '#1a1a1a', textAlign: 'center', marginBottom: '12px' };
    if (isTablet) return { fontSize: '28px', fontWeight: '700', color: '#1a1a1a', textAlign: 'center', marginBottom: '14px' };
    return { fontSize: '32px', fontWeight: '700', color: '#1a1a1a', textAlign: 'center', marginBottom: '16px' };
  };

  const getCompanyOverviewContentStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { width: '100%', order: 1, textAlign: 'center' };
    }
    return {};
  };

  const getCompanyOverviewImageStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { width: '100%', order: 2, marginTop: '24px' };
    }
    return {};
  };

  return (
    <AboutLayout title="About Us">
      {/* ── Hero Section with Background Image and Intro Script ── */}
      <div style={getHeroBackgroundStyle()}>
        {/* Overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255,255,255,0.85)',
        }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 2 }}>

          {/* Company Introduction */}
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={getHeroHeadingStyle()}>
              Data Artisans
            </h2>
            <p style={getHeroParaStyle()}>
              At Data Artisans, we transform challenges into opportunities by delivering smart, scalable, and innovative solutions. Whether it's hiring top talent, expanding into new markets, or leveraging cutting-edge technology, we empower businesses to grow and succeed in a competitive world. Our expertise spans across business consulting, workforce solutions, technology integration, and operational optimization - ensuring that organizations stay ahead of the curve. We believe in building long-term partnerships, driven by trust, innovation, and measurable success.
            </p>
          </div>
        </div>
      </div>

      {/* ── Vision + Mission ── */}
      <div style={{ backgroundColor: '#fff', padding: '1px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={getVisionMissionGridStyle()}>

            {/* Vision */}
            <div>
              <h2 style={getVisionHeadingStyle()}>Vision</h2>
              <div style={{
                position: 'relative',
                border: '1px solid #e8e8e8', 
                borderRadius: '6px',
                padding: '36px 28px', 
                textAlign: 'center', 
                height: 'calc(100% - 68px)',
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                overflow: 'hidden',
                backgroundImage: 'url("/vision-bg.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>
                {/* Dark overlay for better text readability */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(54, 127, 229, 0.6)',
                  zIndex: 0,
                }} />
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ marginBottom: '20px', color: '#ffffff' }}><EyeIcon /></div>
                  <p style={{ fontSize: isMobile ? '12px' : '13.5px', color: '#ffffff', lineHeight: 1.85, textAlign: 'center' }}>
                    To be a global leader in empowering businesses and individuals with innovative technology solutions, training, and career guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div>
              <h2 style={getMissionHeadingStyle()}>Mission</h2>
              <div style={getMissionGridStyle()}>
                {[
                  { Icon: CustomerIcon, label: 'CUSTOMER', text: 'To become a trusted partner for our customers by providing a wide range of sustainable technology and training solutions that enable accelerated performance and faster growth.' },
                  { Icon: EmployeeIcon, label: 'EMPLOYEES', text: 'To provide our employees with an inclusive workplace environment that motivates them to deliver their best and also provides ample avenues for continuous learning & development.' },
                  { Icon: ShareholderIcon, label: 'SHAREHOLDERS', text: 'To provide our shareholders and investors with a high return on investment by increasing revenue, profitability and by continuously improving operational efficiency.' },
                  { Icon: CommunityIcon, label: 'COMMUNITY', text: 'To make a positive impact by contributing to the well-being and prosperity of the communities we live in and work with.' },
                ].map(({ Icon, label, text }, i) => (
                  <div key={i} style={{ backgroundColor: '#f8f8f8', padding: isMobile ? '20px 16px' : '26px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                      <Icon />
                      <span style={{ fontSize: '11px', fontWeight: '700', color: '#2563eb', letterSpacing: '1.5px' }}>{label}</span>
                    </div>
                    <p style={{ fontSize: isMobile ? '12px' : '13px', color: '#555', lineHeight: 1.8 }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── How Data Artisans Makes It Happen ── */}
      <div style={{ backgroundColor: '#f8fafc', padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <h2 style={getHowItHappensHeadingStyle()}>
            How does Data Artisans make it happen:
          </h2>
          <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#666', textAlign: 'center', maxWidth: '800px', margin: '0 auto (isMobile ? 32px : 48px)', lineHeight: 1.8, marginBottom: isMobile ? '32px' : '48px' }}>
            At Data Artisans, we are committed to delivering innovative, data-driven, and technology-powered solutions that help businesses thrive in a competitive landscape. Our approach is built on expertise, strategy, and execution, ensuring that organizations achieve their goals efficiently.
          </p>
          <div style={getServiceCardsGridStyle()}>
            <ServiceCard 
              title="Training"
              description="We provide industry-standard training courses for professionals and students to upgrade their skills and stay competitive in the job market."
              bgImage="/training.jpg"
            />
            <ServiceCard 
              title="Job Placement"
              description="We support graduates with job placement assistance, connecting them with top employers and helping them launch successful careers."
              bgImage="/jobplacement.jpg"
            />
            <ServiceCard 
              title="Study Abroad"
              description="Complete guidance for study abroad including visa assistance, loan support, accommodation, and part-time job opportunities."
              bgImage="/study-abroad.jpg"
            />
            <ServiceCard 
              title="Internship"
              description="We offer technology-focused internships that provide hands-on experience and prepare students for real-world challenges."
              bgImage="/internship.png"
            />
          </div>
        </div>
      </div>

      {/* ── Company Overview Section ── */}
      <div style={{ backgroundColor: '#fff', padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <h2 style={getSectionHeadingStyle()}>Company Overview</h2>
          <div style={getCompanyOverviewGridStyle()}>
            <div style={getCompanyOverviewContentStyle()}>
              <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#555', lineHeight: 1.85, marginBottom: '20px', textAlign: isMobile || isTablet ? 'center' : 'left' }}>
                Data Artisans is a leading organization that caters to the latest technology and innovation. We are also pioneers in industry consulting, development and outsourcing with the best software training services with market standards and also helps students to find their best universities for pursuing their studies with our study abroad services.
              </p>
              <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#555', lineHeight: 1.85, marginBottom: '20px', textAlign: isMobile || isTablet ? 'center' : 'left' }}>
                We believe in offering the finest standards of quality and processes that are constantly updated and adapted to the changing global scenario. We are dedicated to guiding industry professionals and students to competently compete and confirm international standards of quality employee efficiency and productivity.
              </p>
              <div style={{ marginTop: '24px', textAlign: isMobile || isTablet ? 'center' : 'left' }}>
                <a href="#" style={{ display: 'inline-block', backgroundColor: '#2563eb', color: '#fff', padding: '12px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>Partner with us →</a>
              </div>
            </div>
            <div style={getCompanyOverviewImageStyle()}>
              <img src="/overview-img.jpg" alt="Partner with us" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </div>
    </AboutLayout>
  );
}

export default Overview