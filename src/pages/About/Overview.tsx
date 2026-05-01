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

/* ── Group Company Card ── */
interface CompanyCardProps {
  name: string
  logoText: string
  logoSub?: string
  logoColor?: string
  description: string
  extraPara?: string
  href?: string
  alignRight?: boolean
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  name, logoText, logoSub, logoColor = '#2563eb',
  description, extraPara, href, alignRight
}) => (
  <div style={{
    border: '1px solid #ebebeb', borderRadius: '6px',
    padding: '36px 40px', marginBottom: '24px',
    backgroundColor: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
  }}>
    <div style={{
      display: 'grid',
      gridTemplateColumns: alignRight ? '1fr 180px' : '180px 1fr',
      gap: '40px', alignItems: 'flex-start',
    }}>
      {/* Logo side */}
      {!alignRight && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingTop: '6px' }}>
          <div style={{
            border: `2px solid ${logoColor}`, borderRadius: '4px',
            padding: '10px 14px', display: 'inline-block',
          }}>
            <div style={{ fontSize: '22px', fontWeight: '800', color: logoColor, fontStyle: 'italic' }}>{logoText}</div>
            {logoSub && <div style={{ fontSize: '8px', letterSpacing: '2px', color: '#666', marginTop: '2px' }}>{logoSub}</div>}
          </div>
        </div>
      )}

      {/* Content */}
      <div>
        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#2563eb', marginBottom: '16px' }}>{name}</h3>
        <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.85, marginBottom: '14px' }}>{description}</p>
        {extraPara && <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.85, marginBottom: '20px' }}>{extraPara}</p>}
        <a href={href || '#'} style={{
          fontSize: '12px', fontWeight: '700', color: '#1a1a1a',
          letterSpacing: '1px', borderBottom: '1.5px solid #2563eb',
          paddingBottom: '2px', display: 'inline-block',
        }}>
          + VISIT WEBSITE
        </a>
      </div>

      {/* Logo side right */}
      {alignRight && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            border: `2px solid ${logoColor}`, borderRadius: '4px',
            padding: '12px 18px', textAlign: 'center',
          }}>
            <div style={{ fontSize: '22px', fontWeight: '800', color: logoColor, fontStyle: 'italic' }}>{logoText}</div>
            {logoSub && <div style={{ fontSize: '8px', letterSpacing: '2px', color: '#666', marginTop: '2px' }}>{logoSub}</div>}
          </div>
        </div>
      )}
    </div>
  </div>
)

/* ══════════════════ OVERVIEW PAGE ══════════════════ */
const Overview: React.FC = () => (
  <AboutLayout title="About Us">
    {/* ── Intro Strip ── */}
    <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '28px 40px' }}>
        <p style={{ fontSize: '14px', color: '#444', lineHeight: 1.8 }}>
          Data Artisans is a complete data &amp; analytics solutions provider which includes
          Data Engineering, Analytics, AI/ML implementations, Cloud Migration, Talent Solutions and Digital Transformation.
        </p>
      </div>
    </div>

    {/* ── Vision + Mission ── */}
    <div style={{ backgroundColor: '#fff', padding: '60px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px', alignItems: 'stretch' }}>

          {/* Vision */}
          <div>
            <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a1a', marginBottom: '28px' }}>Vision</h2>
            <div style={{
              border: '1px solid #e8e8e8', borderRadius: '6px',
              padding: '36px 28px', textAlign: 'center', height: 'calc(100% - 68px)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ marginBottom: '20px', color: '#888' }}><EyeIcon /></div>
              <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.85, textAlign: 'center' }}>
                Catalyzing organizational success by providing next-gen data &amp; analytics
                services that optimize decisions, ignite growth, and drive
                sustainable business performance.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div>
            <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a1a', marginBottom: '28px' }}>Mission</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
              {[
                { Icon: CustomerIcon, label: 'CUSTOMER', text: 'To become a trusted partner for our customers by providing a wide range of sustainable data solutions that enable accelerated performance and faster growth.' },
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

    {/* ── Managing Data Since ── */}
    <div style={{ backgroundColor: '#f5f5f5', padding: '70px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <CompanyCard
          name="Data Artisans Group"
          logoText="DA"
          logoSub="GROUP"
          logoColor="#2563eb"
          description="Data Artisans has been a pioneer in large-scale data engineering, advanced analytics, and AI/ML implementations across a variety of industries, including BFSI, manufacturing, consumer goods, retail, and IT, since 2015."
          extraPara="Drawing from its rich experience of over 9+ years, Data Artisans offers People &amp; Data Performance Management Solutions. Performance variation among data teams who form the largest teams in Banking, Insurance, Manufacturing, etc. is a cause for concern. Data Artisans offers solutions to achieve optimal outputs and reduce performance variation based on analytics and data science."
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
          extraPara="Our 100+ customers, including various Ministries of the Government of India and global Institutions, value our proven instructional design for Data Science, AI/ML, and Analytics for Pre-graduate to Post graduate learners from India, Asia, Africa, Europe and America. Over 1.3 million learners have accessed our learning content in 17 Indian and 13 global languages over the past 10 years."
          href="#"
        />
      </div>
    </div>
  </AboutLayout>
)

export default Overview