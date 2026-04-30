import React, { useState } from 'react'
import AboutLayout from '../../components/AboutLayout'

interface Leader {
  name: string
  title: string
  company: string
  initials: string
  bg: string
  bio: string
}

const leaders: Leader[] = [
  {
    name: 'Arjun Mehta',
    title: 'Chairman',
    company: 'Data Artisans Group',
    initials: 'AM',
    bg: '#1a1a2e',
    bio: 'Arjun brings 25+ years of experience in data strategy and enterprise technology. He founded Data Artisans with a vision of democratizing data for Indian enterprises.',
  },
  {
    name: 'Priya Ramakrishnan',
    title: 'CEO',
    company: 'Data Artisans Group',
    initials: 'PR',
    bg: '#16213e',
    bio: 'Priya leads the overall business strategy and growth for Data Artisans Group. Previously SVP at a Big 4 consulting firm with expertise in Analytics transformation.',
  },
  {
    name: 'Rohan Desai',
    title: 'CBO, Analytics & Cloud',
    company: 'Data Artisans Group',
    initials: 'RD',
    bg: '#0f3460',
    bio: 'Rohan heads the Analytics and Cloud business vertical, having delivered 150+ large-scale cloud migration and analytics modernization programs across APAC.',
  },
  {
    name: 'Kiran Goswami',
    title: 'Chief Technology Officer',
    company: 'Data Artisans Group',
    initials: 'KG',
    bg: '#1a1a2e',
    bio: 'Kiran drives the technology vision and architecture for all Data Artisans platforms. A published researcher in ML systems and real-time data pipelines.',
  },
  {
    name: 'Sunita Iyer',
    title: 'Chief People Officer',
    company: 'Data Artisans Group',
    initials: 'SI',
    bg: '#16213e',
    bio: 'Sunita oversees talent acquisition, culture, and people development across Data Artisans Group. She has built data talent programs for 200+ enterprise clients.',
  },
  {
    name: 'Vikram Nair',
    title: 'Head – Data Engineering',
    company: 'Data Artisans Network',
    initials: 'VN',
    bg: '#0f3460',
    bio: 'Vikram leads the Data Engineering practice, overseeing 300+ engineers across Spark, Kafka, dbt and modern data stack implementations for global clients.',
  },
  {
    name: 'Ananya Sharma',
    title: 'Head – AI/ML Practice',
    company: 'Data Artisans Group',
    initials: 'AS',
    bg: '#1a1a2e',
    bio: 'Ananya leads the AI/ML Center of Excellence, driving GenAI adoption and machine learning solutions. PhD in Computer Science from IIT Bombay.',
  },
  {
    name: 'Deepak Pillai',
    title: 'Head – DA Academy',
    company: 'DA Academy',
    initials: 'DP',
    bg: '#16213e',
    bio: 'Deepak heads the learning and skilling arm, having trained 5 lakh+ data professionals across 17 Indian and 13 global languages through innovative blended learning programs.',
  },
]

const LeaderCard: React.FC<{ leader: Leader; delay: number }> = ({ leader, delay }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        animation: `fadeInUp 0.6s ease ${delay}ms both`,
      }}
    >
      {/* Avatar */}
      <div style={{
        width: '140px', height: '140px', borderRadius: '4px',
        backgroundColor: leader.bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '16px',
        boxShadow: hovered ? '0 8px 28px rgba(227,30,36,0.25)' : '0 4px 14px rgba(0,0,0,0.14)',
        border: hovered ? '2px solid #e31e24' : '2px solid transparent',
        transition: 'all 0.3s ease',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* TMI banner in avatar (mimicking the real photos with TMI logo banners) */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '32px', backgroundColor: 'rgba(227,30,36,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#fff', fontSize: '8px', fontWeight: '700', letterSpacing: '2px' }}>DATA ARTISANS</span>
        </div>
        <span style={{ fontSize: '36px', fontWeight: '800', color: '#fff', marginTop: '16px', letterSpacing: '1px' }}>{leader.initials}</span>
      </div>

      {/* Info */}
      <h3 style={{
        fontSize: '14.5px', fontWeight: '700', color: '#e31e24',
        textAlign: 'center', marginBottom: '4px', transition: 'color 0.2s',
      }}>{leader.name}</h3>
      <p style={{ fontSize: '12.5px', color: '#444', textAlign: 'center', fontWeight: '500', marginBottom: '2px' }}>{leader.title}</p>
      <p style={{ fontSize: '11.5px', color: '#888', textAlign: 'center', marginBottom: '14px' }}>{leader.company}</p>

      {/* Bio tooltip on hover */}
      {hovered && (
        <div style={{
          position: 'absolute', bottom: 'calc(100% + 10px)',
          left: '50%', transform: 'translateX(-50%)',
          width: '220px', backgroundColor: '#1a1a1a',
          color: '#eee', fontSize: '12px', lineHeight: 1.7,
          padding: '14px 16px', borderRadius: '6px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          zIndex: 100,
          animation: 'fadeIn 0.2s ease',
        }}>
          {leader.bio}
          <div style={{
            position: 'absolute', bottom: '-7px', left: '50%', transform: 'translateX(-50%)',
            width: '0', height: '0',
            borderLeft: '8px solid transparent', borderRight: '8px solid transparent',
            borderTop: '8px solid #1a1a1a',
          }} />
        </div>
      )}
    </div>
  )
}

const Leadership: React.FC = () => (
  <AboutLayout title="Leadership">
    {/* ── Intro ── */}
    <div style={{ backgroundColor: '#fff', padding: '55px 0 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '30px', fontWeight: '700', color: '#1a1a1a', marginBottom: '10px' }}>Our Leadership Team</h2>
        <p style={{ fontSize: '14px', color: '#888', marginBottom: '12px' }}>170+ Man Years of Designing &amp; Implementing Data-Driven Business Interventions</p>
        <div style={{ width: '50px', height: '3px', backgroundColor: '#e31e24', margin: '0 auto 60px' }} />
      </div>

      {/* ── Leader Grid ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px 24px' }}>
          {leaders.map((leader, i) => (
            <div key={i} style={{ position: 'relative' }}>
              <LeaderCard leader={leader} delay={i * 100} />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ── Advisory Board ── */}
    <div style={{ backgroundColor: '#f5f5f5', padding: '60px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#1a1a1a', textAlign: 'center', marginBottom: '10px' }}>Advisory Board</h2>
        <p style={{ fontSize: '14px', color: '#888', textAlign: 'center', marginBottom: '44px' }}>
          Guided by industry veterans across Data, Technology and Business Strategy
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {[
            { name: 'Dr. Sanjay Mathur', role: 'Former CIO, TCS', area: 'Enterprise Technology' },
            { name: 'Ms. Rekha Nambiar', role: 'Ex-MD, Deutsche Bank India', area: 'BFSI & Data Strategy' },
            { name: 'Prof. Arun Kumar', role: 'IIT Madras, Dept. of CS', area: 'AI/ML Research' },
          ].map((a, i) => (
            <div key={i} style={{
              backgroundColor: '#fff', border: '1px solid #ebebeb',
              borderRadius: '6px', padding: '28px 24px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '10px' }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  backgroundColor: '#e31e24', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ color: '#fff', fontWeight: '700', fontSize: '16px' }}>
                    {a.name.split(' ').filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1a1a1a', marginBottom: '2px' }}>{a.name}</h4>
                  <p style={{ fontSize: '12px', color: '#666' }}>{a.role}</p>
                </div>
              </div>
              <span style={{
                display: 'inline-block', fontSize: '11px', fontWeight: '600',
                color: '#e31e24', backgroundColor: '#fff0f0', padding: '3px 10px',
                borderRadius: '20px', border: '1px solid rgba(227,30,36,0.2)',
              }}>{a.area}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <style>{`
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(25px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
    `}</style>
  </AboutLayout>
)

export default Leadership