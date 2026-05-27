import React, { useEffect, useRef, useState } from 'react'
import AboutLayout from '../../components/AboutLayout'

/* ── Differentiator icons ── */
const icons = {
  tech: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <rect x="4" y="8" width="36" height="26" rx="4" stroke="#2563eb" strokeWidth="2" fill="none" />
      <path d="M15 20l-5 4 5 4M29 20l5 4-5 4M21 16l2 12" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  speed: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="24" r="16" stroke="#2563eb" strokeWidth="2" fill="none" />
      <path d="M22 24L30 12" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="22" cy="24" r="2.5" fill="#2563eb" />
      <path d="M10 10l2 2M34 10l-2 2M22 6v2" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  talent: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="14" r="7" stroke="#2563eb" strokeWidth="2" fill="none" />
      <path d="M8 38c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M32 18l3 3-3 3M38 21h-6" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  scale: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path d="M6 34l10-12 8 6 12-16" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="6" cy="34" r="3" fill="#2563eb" />
      <circle cx="16" cy="22" r="3" fill="#2563eb" />
      <circle cx="24" cy="28" r="3" fill="#2563eb" />
      <circle cx="36" cy="12" r="3" fill="#2563eb" />
    </svg>
  ),
  trust: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path d="M22 6l4 8 9 1.5-6.5 6.5 1.5 9L22 27l-8 4 1.5-9L9 15.5l9-1.5z" stroke="#2563eb" strokeWidth="2" fill="none" strokeLinejoin="round" />
      <path d="M16 22l4 4 8-8" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  domain: (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="16" stroke="#2563eb" strokeWidth="2" fill="none" />
      <ellipse cx="22" cy="22" rx="8" ry="16" stroke="#2563eb" strokeWidth="1.5" fill="none" />
      <line x1="6" y1="22" x2="38" y2="22" stroke="#2563eb" strokeWidth="1.5" />
      <line x1="22" y1="6" x2="22" y2="38" stroke="#2563eb" strokeWidth="1.5" />
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

/* ── Stats Grid (blue/white alternating) ── */
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

/* ── Feature Card Component ── */
const FeatureCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div style={{
    border: '1px solid #ebebeb',
    borderRadius: '10px',
    padding: '24px',
    backgroundColor: '#fff',
    transition: 'all 0.3s ease',
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
    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a', marginBottom: '10px' }}>{title}</h3>
    <p style={{ fontSize: '13.5px', color: '#666', lineHeight: 1.75 }}>{description}</p>
  </div>
)

/* ── Building Exception Card Component ── */
const BuildingCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div style={{
    borderLeft: '4px solid #2563eb',
    padding: '20px 24px',
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    marginBottom: '20px',
  }}>
    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a', marginBottom: '10px' }}>{title}</h3>
    <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.75 }}>{description}</p>
  </div>
)

const WhyDataArtisans: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  
  // State for responsive layout
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Check screen size for responsive layout
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  // Responsive style functions
  const getAboutWhyGridStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '50px' };
    }
    return { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '50px' };
  };

  const getFeatureGridStyle = (): React.CSSProperties => {
    if (isMobile) return { display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginBottom: '50px' };
    if (isTablet) return { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '50px' };
    return { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '50px' };
  };

  const getBuildingGridStyle = (): React.CSSProperties => {
    if (isMobile) return { display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginBottom: '40px' };
    if (isTablet) return { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '40px' };
    return { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '40px' };
  };

  const getChooseSectionStyle = (): React.CSSProperties => {
    if (isMobile) {
      return {
        backgroundColor: '#f0f4ff',
        padding: '24px 16px',
        borderRadius: '16px',
        marginBottom: '50px',
        textAlign: 'center'
      };
    }
    if (isTablet) {
      return {
        backgroundColor: '#f0f4ff',
        padding: '32px 24px',
        borderRadius: '16px',
        marginBottom: '50px',
        textAlign: 'center'
      };
    }
    return {
      backgroundColor: '#f0f4ff',
      padding: '40px',
      borderRadius: '12px',
      marginBottom: '50px',
      textAlign: 'center'
    };
  };

  const getDifferentiatorGridStyle = (): React.CSSProperties => {
    if (isMobile) return { display: 'grid', gridTemplateColumns: '1fr', gap: '24px', paddingBottom: '60px' };
    if (isTablet) return { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', paddingBottom: '60px' };
    return { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', paddingBottom: '60px' };
  };

  const getStatsGridStyle = (): React.CSSProperties => {
    if (isMobile) return { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', border: '1px solid #ddd' };
    if (isTablet) return { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '1px solid #ddd' };
    return { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '1px solid #ddd' };
  };

  const getStatsItemBorderRight = (index: number, _total: number, isHighlight: boolean): string => {
    if (isMobile) {
      // For mobile (2 columns): remove border-right for even indices (1st, 3rd, 5th...)
      return (index + 1) % 2 !== 0 ? `1px solid ${isHighlight ? 'rgba(255,255,255,0.2)' : '#ddd'}` : 'none';
    }
    if (isTablet) {
      // For tablet (3 columns): remove border-right for indices that are multiples of 3
      return (index + 1) % 3 !== 0 ? `1px solid ${isHighlight ? 'rgba(255,255,255,0.2)' : '#ddd'}` : 'none';
    }
    // For desktop (3 columns)
    return (index + 1) % 3 !== 0 ? `1px solid ${isHighlight ? 'rgba(255,255,255,0.2)' : '#ddd'}` : 'none';
  };

  const getStatsItemBorderBottom = (index: number, total: number, isHighlight: boolean): string => {
    if (isMobile) {
      // For mobile (2 columns): show border-bottom for all except last two items
      return index < total - 2 ? `1px solid ${isHighlight ? 'rgba(255,255,255,0.2)' : '#ddd'}` : 'none';
    }
    if (isTablet) {
      // For tablet (3 columns): show border-bottom for all except last three items
      return index < total - 3 ? `1px solid ${isHighlight ? 'rgba(255,255,255,0.2)' : '#ddd'}` : 'none';
    }
    // For desktop (3 columns)
    return index < total - 3 ? `1px solid ${isHighlight ? 'rgba(255,255,255,0.2)' : '#ddd'}` : 'none';
  };

  return (
    <AboutLayout title="Why Data Artisans">
      {/* ── New Hero Section ── */}
      <div style={{ backgroundColor: '#fff', padding: '50px 0 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#555', lineHeight: 1.85, marginBottom: '40px' }}>
            At Data Artisans, we are committed to delivering cutting-edge, technology-driven solutions that empower businesses to succeed in today's dynamic landscape. Our expertise spans across multiple domains, ensuring innovation, efficiency, and reliability in every service we offer. With a team of highly skilled professionals, we leverage the latest technologies to develop customized solutions that address unique business challenges. Our commitment to continuous innovation enables us to stay ahead in a competitive market.
          </p>

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: isMobile ? '22px' : '24px', fontWeight: '700', color: '#1a1a1a', marginBottom: '8px' }}>Why Data Artisans Private Limited</h2>
            <p style={{ fontSize: '14px', color: '#2563eb', fontWeight: '500' }}>Innovation, reliability, excellence.</p>
          </div>

          {/* About Data Artisans + Why Data Artisans - Stacked on mobile/tablet */}
          <div style={getAboutWhyGridStyle()}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2563eb', marginBottom: '12px' }}>About Data Artisans</h3>
              <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#555', lineHeight: 1.85 }}>
                Redefining business success through innovation & strategy. Quality, consistency, and integrity define our work. We take pride in maintaining the highest standards in service delivery, ensuring our clients achieve sustainable growth and long-term success.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2563eb', marginBottom: '12px' }}>Why Data Artisans</h3>
              <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#555', lineHeight: 1.85 }}>
                Partner with Data Artisans Private Limited and experience the future of technology-driven business solutions. Let us help you scale, innovate, and transform your business for lasting success.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', margin: '50px 0 30px' }}>
            <h2 style={{ fontSize: isMobile ? '24px' : '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px' }}>
              Building exceptional teams for success.
            </h2>
            <p style={{ fontSize: '14px', color: '#2563eb', fontWeight: '500' }}>Revolutionizing talent acquisition.</p>
          </div>

          <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#555', lineHeight: 1.85, marginBottom: '40px' }}>
            We have witnessed the evolution of talent acquisition in the country and adapted to changing recruitment trends. This transformation has enabled us to continuously innovate our solutions to meet our clients' needs effectively.
          </p>

          {/* Feature Grid - 7 features */}
          <div style={getFeatureGridStyle()}>
            <FeatureCard 
              title="Fulfilling talent needs across all industries"
              description="Over the years, we have collaborated with businesses of all sizes, from traditional brick-and-mortar companies to dynamic startups. Whether it's sourcing the right talent across functions or serving diverse industry verticals."
            />
            <FeatureCard 
              title="Powering digital transformation"
              description="We have successfully digitized over one million transactions across various processes, including campus assessments and onboarding. Today, we administer more than one million assessments annually across India."
            />
            <FeatureCard 
              title="Network of top-tier professionals"
              description="Our cutting-edge recruitment platform enables us to connect with over 5 million candidates and 2,000+ institutions across 100+ locations in India. With a vast talent network spanning diverse specialties, domains, and experience levels."
            />
            <FeatureCard 
              title="Trusted by top enterprises"
              description="Our team of 2,000+ dedicated professionals boasts 58% diversity, with 20% having over two years of continued success. We have empowered 1,000+ enterprise clients in finding top talent and have served 50+ Fortune 500 companies."
            />
            <FeatureCard 
              title="Expanding RPOs and turnkey solutions"
              description="We have successfully executed and scaled over 100+ RPO engagements, catering to businesses of all sizes and industries. Our expertise enables us to manage workforce solutions efficiently, growing from 200 to 5,000 hires annually."
            />
            <FeatureCard 
              title="Premium, technology-driven experience"
              description="We leverage an advanced recruitment technology platform to deliver efficient, consistent, and high-quality hiring solutions. Our system optimizes the entire recruitment process, from sourcing and screening to onboarding, ensuring a seamless experience for both employers and candidates."
            />
            <FeatureCard 
              title="Risk-reward partnership"
              description="We follow a risk-reward partnership model that ensures an optimal balance between service excellence and pricing. By integrating this approach into our RPO engagement models, we drive efficiency, performance, and value, aligning our success with our clients' business goals."
            />
          </div>

          {/* Building Exception Section - 9 items */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: '700', color: '#1a1a1a', marginBottom: '30px', textAlign: 'center' }}>
              Transforming businesses with cutting-edge technology, strategic talent solutions, and innovation-driven growth.
            </h2>
            
            <div style={getBuildingGridStyle()}>
              <BuildingCard 
                title="Innovation-Driven Growth"
                description="We deliver innovative, technology-driven solutions tailored to business needs."
              />
              <BuildingCard 
                title="Continuous Training"
                description="Continuous training to enhance technical and soft skills for personal and professional growth."
              />
              <BuildingCard 
                title="Cross-Industry Expertise"
                description="Our expertise spans multiple industries, ensuring efficiency and scalability."
              />
              <BuildingCard 
                title="AI & Automation"
                description="Advanced AI and automation optimize processes for seamless business operations."
              />
              <BuildingCard 
                title="End-to-End Recruitment"
                description="We provide end-to-end recruitment and workforce management solutions efficiently."
              />
              <BuildingCard 
                title="Strong Talent Network"
                description="A strong talent network connects businesses with skilled professionals nationwide."
              />
              <BuildingCard 
                title="Client-Centric Approach"
                description="Client-centric approaches ensure flexibility, reliability, and long-term success."
              />
              <BuildingCard 
                title="Technology-Driven Experience"
                description="Superior, technology-driven experience with real-time approach ensuring efficiency and accuracy."
              />
              <BuildingCard 
                title="Seamless Hiring Solutions"
                description="End-to-end hiring solutions with consistency and high quality for seamless experience."
              />
            </div>
          </div>

          {/* Choose Data Artisans Section - Full width with border radius */}
          <div style={getChooseSectionStyle()}>
            <h2 style={{ fontSize: isMobile ? '22px' : '28px', fontWeight: '800', color: '#1a1a1a', marginBottom: '20px' }}>
              Choose Data Artisans - where technology meets talent, and ideas turn into success.
            </h2>
            <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#555', lineHeight: 1.85, marginBottom: '20px', textAlign: 'left' }}>
              At Data Artisans, we don't just provide solutions - we create experiences that drive business success. Our approach blends innovation, technology, and expertise to deliver seamless, scalable, and future-ready services. We specialize in recruitment, workforce solutions, and digital transformation, ensuring that businesses find the right talent while optimizing their operations. With AI-driven automation, data intelligence, and strategic execution, we help companies stay ahead in a fast-changing world.
            </p>
            <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#555', lineHeight: 1.85, marginBottom: '20px', textAlign: 'left' }}>
              What sets us apart? Our client-first mindset, risk-reward partnerships, and commitment to excellence. Whether you're a startup or an enterprise, we tailor our services to maximize efficiency, minimize risk, and fuel growth. With a vast network of professionals and institutions, we connect organizations with the best talent, helping them build high-performing teams. Our technology-driven approach ensures speed, accuracy, and reliability in every process.
            </p>
            <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#555', lineHeight: 1.85, textAlign: 'left' }}>
              At Data Artisans, we believe in empowering businesses through smart solutions and forward-thinking strategies. Our passion for excellence drives us to constantly innovate, evolve, and transform the way businesses operate.
            </p>
          </div>

          {/* ── Intro Section (Original) ── */}
          <div style={{ maxWidth: '800px', margin: '60px auto 50px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', justifyContent: 'center' }}>
              <span style={{ color: '#2563eb', fontSize: '12px', fontWeight: '600', letterSpacing: '2px' }}>WHY CHOOSE US</span>
              <span style={{ display: 'block', width: '40px', height: '2px', backgroundColor: '#2563eb' }} />
            </div>
            <h2 style={{ fontSize: isMobile ? '22px' : 'clamp(22px, 3.5vw, 32px)', fontWeight: '700', color: '#1a1a1a', lineHeight: 1.4, marginBottom: '18px', textAlign: 'center' }}>
              What makes Data Artisans<br />your ideal data partner?
            </h2>
            <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#666', lineHeight: 1.9, textAlign: 'center' }}>
              We combine deep technical expertise with domain knowledge to deliver data
              solutions that drive real business impact. Here are six reasons why the
              world's leading enterprises choose Data Artisans.
            </p>
          </div>

          {/* ── 6 Differentiator Cards ── */}
          <div style={getDifferentiatorGridStyle()}>
            {differentiators.map((d, i) => (
              <div key={i} style={{
                border: '1px solid #ebebeb', borderRadius: '6px', padding: '32px 28px',
                backgroundColor: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                transition: 'box-shadow 0.3s, transform 0.3s',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.boxShadow = '0 8px 30px rgba(37,99,235,0.15)'
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
          <h2 style={{ fontSize: isMobile ? '24px' : '28px', fontWeight: '700', color: '#1a1a1a', textAlign: 'center', marginBottom: '40px' }}>
            Data Artisans by Numbers
          </h2>
          <div style={getStatsGridStyle()}>
            {statsData.map((s, i) => (
              <div key={i} style={{
                backgroundColor: s.highlight ? '#2563eb' : '#fff',
                color: s.highlight ? '#fff' : '#333',
                padding: isMobile ? '20px 12px' : '30px 24px',
                textAlign: 'center',
                fontSize: isMobile ? '12px' : '15px',
                fontWeight: '600',
                lineHeight: 1.5,
                borderRight: getStatsItemBorderRight(i, statsData.length, s.highlight),
                borderBottom: getStatsItemBorderBottom(i, statsData.length, s.highlight),
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