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

/* ── Group Company Card ── */
// interface CompanyCardProps {
//   name: string
//   logoText: string
//   logoSub?: string
//   logoColor?: string
//   description: string
//   extraPara?: string
//   href?: string
//   alignRight?: boolean
// }

// const CompanyCard: React.FC<CompanyCardProps> = ({
//   name, logoText, logoSub, logoColor = '#2563eb',
//   description, extraPara, href, alignRight
// }) => (
//   <div style={{
//     border: '1px solid #ebebeb', borderRadius: '6px',
//     padding: '36px 40px', marginBottom: '24px',
//     backgroundColor: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
//   }}>
//     <div style={{
//       display: 'grid',
//       gridTemplateColumns: alignRight ? '1fr 180px' : '180px 1fr',
//       gap: '40px', alignItems: 'flex-start',
//     }}>
//       {/* Logo side */}
//       {!alignRight && (
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingTop: '6px' }}>
//           <div style={{
//             border: `2px solid ${logoColor}`, borderRadius: '4px',
//             padding: '10px 14px', display: 'inline-block',
//           }}>
//             <div style={{ fontSize: '22px', fontWeight: '800', color: logoColor, fontStyle: 'italic' }}>{logoText}</div>
//             {logoSub && <div style={{ fontSize: '8px', letterSpacing: '2px', color: '#666', marginTop: '2px' }}>{logoSub}</div>}
//           </div>
//         </div>
//       )}

//       {/* Content */}
//       <div>
//         <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#2563eb', marginBottom: '16px' }}>{name}</h3>
//         <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.85, marginBottom: '14px' }}>{description}</p>
//         {extraPara && <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.85, marginBottom: '20px' }}>{extraPara}</p>}
//         <a href={href || '#'} style={{
//           fontSize: '12px', fontWeight: '700', color: '#1a1a1a',
//           letterSpacing: '1px', borderBottom: '1.5px solid #2563eb',
//           paddingBottom: '2px', display: 'inline-block',
//         }}>
//           {/* + VISIT WEBSITE */}
//         </a>
//       </div>

//       {/* Logo side right */}
//       {alignRight && (
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           <div style={{
//             border: `2px solid ${logoColor}`, borderRadius: '4px',
//             padding: '12px 18px', textAlign: 'center',
//           }}>
//             <div style={{ fontSize: '22px', fontWeight: '800', color: logoColor, fontStyle: 'italic' }}>{logoText}</div>
//             {logoSub && <div style={{ fontSize: '8px', letterSpacing: '2px', color: '#666', marginTop: '2px' }}>{logoSub}</div>}
//           </div>
//         </div>
//       )}
//     </div>
//   </div>
// )

/* ══════════════════ OVERVIEW PAGE ══════════════════ */
const Overview: React.FC = () => (
  <AboutLayout title="About Us">
    {/* ── Hero Section with Background Image and Intro Script ── */}
    <div style={{ 
      backgroundColor: '#fff', 
      backgroundImage: 'url("/about-hero-bg.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      padding: '80px 0',
    }}>
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
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px' }}>
            Data Artisans
          </h2>
          <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.85, marginBottom: '20px' }}>
            At Data Artisans, we transform challenges into opportunities by delivering smart, scalable, and innovative solutions. Whether it's hiring top talent, expanding into new markets, or leveraging cutting-edge technology, we empower businesses to grow and succeed in a competitive world. Our expertise spans across business consulting, workforce solutions, technology integration, and operational optimization - ensuring that organizations stay ahead of the curve. We believe in building long-term partnerships, driven by trust, innovation, and measurable success.
          </p>
        </div>
      </div>
    </div>

    {/* ── Vision + Mission ── */}
    <div style={{ backgroundColor: '#fff', padding: '1px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px', alignItems: 'stretch' }}>

          {/* Vision */}
          <div>
            <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a1a', marginBottom: '28px' }}>Vision</h2>
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
                <p style={{ fontSize: '13.5px', color: '#ffffff', lineHeight: 1.85, textAlign: 'center' }}>
                  To be a global leader in empowering businesses and individuals with innovative technology solutions, training, and career guidance.
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div>
            <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a1a', marginBottom: '28px' }}>Mission</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
              {[
                { Icon: CustomerIcon, label: 'CUSTOMER', text: 'To become a trusted partner for our customers by providing a wide range of sustainable technology and training solutions that enable accelerated performance and faster growth.' },
                { Icon: EmployeeIcon, label: 'EMPLOYEES', text: 'To provide our employees with an inclusive workplace environment that motivates them to deliver their best and also provides ample avenues for continuous learning & development.' },
                { Icon: ShareholderIcon, label: 'SHAREHOLDERS', text: 'To provide our shareholders and investors with a high return on investment by increasing revenue, profitability and by continuously improving operational efficiency.' },
                { Icon: CommunityIcon, label: 'COMMUNITY', text: 'To make a positive impact by contributing to the well-being and prosperity of the communities we live in and work with.' },
              ].map(({ Icon, label, text }, i) => (
                <div key={i} style={{ backgroundColor: '#f8f8f8', padding: '26px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <Icon />
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#2563eb', letterSpacing: '1.5px' }}>{label}</span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.8 }}>{text}</p>
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
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a1a1a', textAlign: 'center', marginBottom: '16px' }}>
          How does Data Artisans make it happen:
        </h2>
        <p style={{ fontSize: '14px', color: '#666', textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px', lineHeight: 1.8 }}>
          At Data Artisans, we are committed to delivering innovative, data-driven, and technology-powered solutions that help businesses thrive in a competitive landscape. Our approach is built on expertise, strategy, and execution, ensuring that organizations achieve their goals efficiently.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
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
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a1a1a', marginBottom: '24px' }}>Company Overview</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.85, marginBottom: '20px' }}>
              Data Artisans is a leading organization that caters to the latest technology and innovation. We are also pioneers in industry consulting, development and outsourcing with the best software training services with market standards and also helps students to find their best universities for pursuing their studies with our study abroad services.
            </p>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.85, marginBottom: '20px' }}>
              We believe in offering the finest standards of quality and processes that are constantly updated and adapted to the changing global scenario. We are dedicated to guiding industry professionals and students to competently compete and confirm international standards of quality employee efficiency and productivity.
            </p>
            <div style={{ marginTop: '24px' }}>
              <a href="#" style={{ display: 'inline-block', backgroundColor: '#2563eb', color: '#fff', padding: '12px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>Partner with us →</a>
            </div>
          </div>
          <div>
            <img src="/overview-img.jpg" alt="Partner with us" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </div>
    </div>

    {/* ── Managing Data Since ── */}
    {/* <div style={{ backgroundColor: '#f5f5f5', padding: '70px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <CompanyCard
          name="Data Artisans Group"
          logoText="DA"
          logoSub="GROUP"
          logoColor="#2563eb"
          description="Data Artisans has been a pioneer in large-scale data engineering, advanced analytics, and AI/ML implementations across a variety of industries, including BFSI, manufacturing, consumer goods, retail, and IT, since 2015."
          extraPara="Drawing from its rich experience of over 3+ years, Data Artisans offers People &amp; Data Performance Management Solutions. Performance variation among data teams who form the largest teams in Banking, Insurance, Manufacturing, etc. is a cause for concern. Data Artisans offers solutions to achieve optimal outputs and reduce performance variation based on analytics and data science."
          href="#"
        />

        <CompanyCard
          name="Data Artisans Network"
          logoText="DA"
          logoSub="NETWORK"
          logoColor="#2563eb"
          alignRight
          description="Data Artisans Network has been a pioneer in large-scale recruiting of data professionals, medium to senior level talent, and Next Gen analytics staffing solutions across a variety of industries, including BFSI, consumer goods, retail, and IT, since 2015."
          extraPara="With Advanced Tech-Driven Recruitment/RPO Platform and Robotic Process Automation, and our 9 plus years of hiring experience with 10,000+ Data Executives and Managers, we help enterprises build data talent supply chains of the right talent, at the right place, in the right time and at the right cost. Currently we process 24,000+ candidates annually for 1,000 – 1,500+ annual hires in 47 cities and 22 states of India."
          href="#"
        />

        <CompanyCard
          name="DA Academy"
          logoText="DA"
          logoSub="ACADEMY"
          logoColor="#2563eb"
          description="DA Academy is the Learning Content and Learning Technology Solutions arm of Data Artisans Group. Since 2018, DA Academy is a pioneer in data skill development, e-learning, and blended learning solutions for enterprises and government programs, for global and Indian customers."
          extraPara="Our 100+ customers, including various Ministries of the Government of India and global Institutions, value our proven instructional design for Data Science, AI/ML, and Analytics for Pre-graduate to Post graduate learners from India, Asia, Africa, Europe and America. Over 1.3 million learners have accessed our learning content in 17 Indian and 13 global languages over the past 4 years."
          href="#"
        />
      </div>
    </div> */}
  </AboutLayout>
)

export default Overview