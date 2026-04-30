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
    <circle cx="14" cy="8" r="5" stroke="#e31e24" strokeWidth="1.8" />
    <path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#e31e24" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="22" cy="6" r="3" fill="#e31e24" opacity="0.3" />
    <circle cx="6" cy="6" r="3" fill="#e31e24" opacity="0.3" />
  </svg>
)

const EmployeeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="4" y="4" width="20" height="20" rx="4" stroke="#e31e24" strokeWidth="1.8" fill="none" />
    <path d="M9 14l4 4 6-8" stroke="#e31e24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ShareholderIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="10" stroke="#e31e24" strokeWidth="1.8" fill="none" />
    <path d="M9 14l3 3 7-7" stroke="#e31e24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 8v2M14 18v2M8 14h2M18 14h2" stroke="#e31e24" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const CommunityIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="10" cy="10" r="4" stroke="#e31e24" strokeWidth="1.8" fill="none" />
    <circle cx="20" cy="10" r="4" stroke="#e31e24" strokeWidth="1.8" fill="none" />
    <path d="M2 24c0-4.418 3.582-8 8-8" stroke="#e31e24" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M18 16c4.418 0 8 3.582 8 8" stroke="#e31e24" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 16c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z" fill="#e31e24" opacity="0.4" />
  </svg>
)

/* ── Values Wheel ── */
// const ValuesWheel = () => (
//   <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 0 20px' }}>
//     <div style={{ position: 'relative', width: '420px', height: '420px' }}>
//       {/* Center PRIDE + VALUES text */}
//       <div style={{
//         position: 'absolute', top: '50%', left: '50%',
//         transform: 'translate(-50%, -50%)',
//         textAlign: 'center', zIndex: 10,
//       }}>
//         <div style={{ fontSize: '11px', fontWeight: '700', color: '#555', letterSpacing: '3px', marginBottom: '4px' }}>VALUES</div>
//         <div style={{ fontSize: '38px', fontWeight: '800', color: '#1a1a1a', letterSpacing: '12px', lineHeight: 1 }}>PRIDE</div>
//       </div>

//       {/* SVG Wheel */}
//       <svg width="420" height="420" viewBox="0 0 420 420" style={{ position: 'absolute', inset: 0 }}>
//         {/* Outer ring segments */}
//         {[
//           { label: 'P', color: '#555', angle: -90 },
//           { label: 'R', color: '#555', angle: -18 },
//           { label: 'I', color: '#555', angle: 54 },
//           { label: 'D', color: '#555', angle: 126 },
//           { label: 'E', color: '#555', angle: 198 },
//         ].map(({ label, angle }, i) => {
//           const rad = (angle * Math.PI) / 180
//           const r = 130
//           const x = 210 + r * Math.cos(rad)
//           const y = 210 + r * Math.sin(rad)
//           return (
//             <text key={i} x={x} y={y + 6} textAnchor="middle"
//               style={{ fontSize: '28px', fontWeight: '800', fill: '#333', fontFamily: 'Poppins, sans-serif' }}>
//               {label}
//             </text>
//           )
//         })}

//         {/* Segment arcs — 5 segments */}
//         {[
//           { startAngle: -108, color: '#e31e24', label: 'PROFESSIONALISM\nAT THE CORE' },
//           { startAngle: -36,  color: '#cccccc', label: 'RESPECT FOR\nEVERYONE' },
//           { startAngle: 36,   color: '#cccccc', label: 'INNOVATE\nFOR THE FUTURE' },
//           { startAngle: 108,  color: '#cccccc', label: 'DO IT\nTOGETHER' },
//           { startAngle: 180,  color: '#e31e24', label: 'EMPOWER\nTO EXCEL' },
//         ].map(({ startAngle, color, label }, i) => {
//           const toRad = (d: number) => (d * Math.PI) / 180
//           const outerR = 195
//           const innerR = 150
//           const midR = 172
//           const sa = toRad(startAngle + 4)
//           const ea = toRad(startAngle + 68)
//           const midA = toRad(startAngle + 36)

//           const x1 = 210 + outerR * Math.cos(sa)
//           const y1 = 210 + outerR * Math.sin(sa)
//           const x2 = 210 + outerR * Math.cos(ea)
//           const y2 = 210 + outerR * Math.sin(ea)
//           const x3 = 210 + innerR * Math.cos(ea)
//           const y3 = 210 + innerR * Math.sin(ea)
//           const x4 = 210 + innerR * Math.cos(sa)
//           const y4 = 210 + innerR * Math.sin(sa)

//           const lx = 210 + midR * Math.cos(midA)
//           const ly = 210 + midR * Math.sin(midA)

//           return (
//             <g key={i}>
//               <path
//                 d={`M ${x1} ${y1} A ${outerR} ${outerR} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 0 0 ${x4} ${y4} Z`}
//                 fill={color} opacity={color === '#e31e24' ? 0.85 : 0.55}
//               />
//               <text x={lx} y={ly - 6} textAnchor="middle"
//                 style={{ fontSize: '7.5px', fontWeight: '600', fill: '#fff', fontFamily: 'Poppins, sans-serif' }}>
//                 {label.split('\n')[0]}
//               </text>
//               {label.split('\n')[1] && (
//                 <text x={lx} y={ly + 8} textAnchor="middle"
//                   style={{ fontSize: '7.5px', fontWeight: '600', fill: '#fff', fontFamily: 'Poppins, sans-serif' }}>
//                   {label.split('\n')[1]}
//                 </text>
//               )}
//             </g>
//           )
//         })}

//         {/* Inner circle */}
//         <circle cx="210" cy="210" r="149" fill="#f5f5f5" />
//         <circle cx="210" cy="210" r="105" fill="#ffffff" />
//         <circle cx="210" cy="210" r="104" fill="none" stroke="#ddd" strokeWidth="1" />
//       </svg>
//     </div>
//   </div>
// )

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
  name, logoText, logoSub, logoColor = '#e31e24',
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
        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#e31e24', marginBottom: '16px' }}>{name}</h3>
        <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.85, marginBottom: '14px' }}>{description}</p>
        {extraPara && <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.85, marginBottom: '20px' }}>{extraPara}</p>}
        <a href={href || '#'} style={{
          fontSize: '12px', fontWeight: '700', color: '#1a1a1a',
          letterSpacing: '1px', borderBottom: '1.5px solid #e31e24',
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
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#e31e24', letterSpacing: '1.5px' }}>{label}</span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.8 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ── Divider ── */}
    {/* <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
      <hr style={{ border: 'none', borderTop: '1px solid #ececec' }} />
    </div> */}

    {/* ── Values Wheel ── */}
    {/* <div style={{ backgroundColor: '#fff', padding: '20px 0 60px' }}>
      <ValuesWheel />
    </div> */}

    {/* ── Managing Data Since ── */}
    <div style={{ backgroundColor: '#f5f5f5', padding: '70px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <h2 style={{
          fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: '700',
          color: '#1a1a1a', textAlign: 'center', marginBottom: '48px',
        }}>
          {/* Delivering Data Excellence Since 2015 */}
        </h2>

        <CompanyCard
          name="Data Artisans Group"
          logoText="DA"
          logoSub="GROUP"
          logoColor="#e31e24"
          description="Data Artisans has been a pioneer in large-scale data engineering, advanced analytics, and AI/ML implementations across a variety of industries, including BFSI, manufacturing, consumer goods, retail, and IT, since 2015."
          extraPara="Drawing from its rich experience of over 9+ years, Data Artisans offers People &amp; Data Performance Management Solutions. Performance variation among data teams who form the largest teams in Banking, Insurance, Manufacturing, etc. is a cause for concern. Data Artisans offers solutions to achieve optimal outputs and reduce performance variation based on analytics and data science."
          href="#"
        />

        <CompanyCard
          name="Data Artisans Network"
          logoText="DA"
          logoSub="NETWORK"
          logoColor="#e31e24"
          alignRight
          description="Data Artisans Network has been a pioneer in large-scale recruiting of data professionals, medium to senior level talent, and Next Gen analytics staffing solutions across a variety of industries, including BFSI, consumer goods, retail, and IT, since 2015."
          extraPara="With Advanced Tech-Driven Recruitment/RPO Platform and Robotic Process Automation, and our 9 plus years of hiring experience with 10,000+ Data Executives and Managers, we help enterprises build data talent supply chains of the right talent, at the right place, in the right time and at the right cost. Currently we process 24,000+ candidates annually for 1,000 – 1,500+ annual hires in 47 cities and 22 states of India."
          href="#"
        />

        <CompanyCard
          name="DA Academy"
          logoText="DA"
          logoSub="ACADEMY"
          logoColor="#e31e24"
          description="DA Academy is the Learning Content and Learning Technology Solutions arm of Data Artisans Group. Since 2018, DA Academy is a pioneer in data skill development, e-learning, and blended learning solutions for enterprises and government programs, for global and Indian customers."
          extraPara="Our 100+ customers, including various Ministries of the Government of India and global Institutions, value our proven instructional design for Data Science, AI/ML, and Analytics for Pre-graduate to Post graduate learners from India, Asia, Africa, Europe and America. Over 1.3 million learners have accessed our learning content in 17 Indian and 13 global languages over the past 10 years."
          href="#"
        />
      </div>
    </div>
  </AboutLayout>
)

export default Overview