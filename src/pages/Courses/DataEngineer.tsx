import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

/* ══════════════════════════════════════════════════════
   THEME TOKENS
══════════════════════════════════════════════════════ */
const BLU = '#1e6fe0'
const BLU_D = '#1558b8'
const ORG = '#f97316'
const DARK = '#1a1a2e'
const GRAY = '#64748b'
const LGRAY = '#f1f5f9'
const BDR = '#e2e8f0'
const TXT = '#1e293b'

const btn = (bg: string, co: string, extra?: React.CSSProperties): React.CSSProperties => ({
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  padding: '11px 24px', borderRadius: '6px', fontSize: '14px', fontWeight: '600',
  border: `2px solid ${bg}`, backgroundColor: bg, color: co, cursor: 'pointer',
  fontFamily: "'Poppins',sans-serif", transition: 'all 0.2s ease', ...extra,
})

/* ══════════════════════════════════════════════════════
   CHECK ICON
══════════════════════════════════════════════════════ */
const Chk: React.FC<{ color?: string }> = ({ color = BLU }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
    <circle cx="9" cy="9" r="9" fill={color} opacity="0.12" />
    <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Star = () => <span style={{ color: '#f59e0b', fontSize: '14px' }}>★</span>

/* ══════════════════════════════════════════════════════
   2. HERO SECTION
══════════════════════════════════════════════════════ */
const HeroSection: React.FC = () => {
  const navigate = useNavigate()
  const [showVideoPopup, setShowVideoPopup] = useState(false)
  
  const handleScrollToTraining = () => {
    const trainingSection = document.getElementById('training-options')
    if (trainingSection) {
      trainingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleTalkToAdvisor = () => {
    navigate('/contact-us')
  }

  const handleGetQuote = () => {
    navigate('/contact-us')
  }

  return (
    <>
      <div style={{ 
        paddingTop: '60px', 
        backgroundColor: '#fff', 
        borderBottom: '1px solid #e2e8f0',
        backgroundImage: 'url("/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 440px', gap: '40px', alignItems: 'center', minHeight: '360px' }}>
          {/* Left */}
          <div style={{ padding: '36px 0' }}>
            <p style={{ fontSize: '14px', color: GRAY, marginBottom: '10px' }}>
              <Link to="/" style={{ color: BLU, textDecoration: 'none' }}> Home </Link> &gt; <Link to="/courses-lists" style={{ color: BLU, textDecoration: 'none' }}>view full Courses</Link> &gt; Data Engineer Training
            </p>
            <h1 style={{ fontSize: 'clamp(24px,3.5vw,34px)', fontWeight: '800', color: TXT, lineHeight: 1.2, marginBottom: '10px' }}>
              Data Engineer Certification Course
            </h1>
            <p style={{ fontSize: '14px', color: GRAY, marginBottom: '14px', fontWeight: '500' }}>
              Future-Proof Your Skills: Data Engineering Course for the Modern Data Professional.
            </p>
            <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.8, marginBottom: '24px', maxWidth: '520px' }}>
              Our comprehensive Data Engineering course will teach you the fundamentals of data pipelines, ETL/ELT processes, Apache Spark, Kafka, dbt, Airflow, and cloud data platforms (AWS, Azure, GCP). This certification will give you hands-on experience and prepare you for an exciting career as a professional Data Engineer.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '18px' }}>
              <button 
                onClick={handleScrollToTraining}
                style={btn(BLU, '#fff')}
              >
                View Training Options
              </button>
              <button 
                onClick={handleTalkToAdvisor}
                style={btn('#fff', BLU, { border: `2px solid ${BLU}` })}
              >
                Talk to Advisor
              </button>
            </div>
            <p style={{ fontSize: '13px', color: GRAY, marginBottom: '20px' }}>
              Group Enrollment with Friends or Colleagues |{' '}
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault()
                  handleGetQuote()
                }}
                style={{ color: BLU, fontWeight: '600', cursor: 'pointer' }}
              >
                Get a quote
              </a>
            </p>
            <p style={{ fontSize: '12px', color: GRAY, marginBottom: '8px' }}>Aligned to</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              {[
                { label: 'Apache Spark', color: '#e25a1c' },
                { label: 'python', color: '#017cee' },
              ].map(b => (
                <span key={b.label} style={{ padding: '4px 12px', borderRadius: '4px', border: `1px solid ${b.color}22`, backgroundColor: `${b.color}10`, color: b.color, fontSize: '12px', fontWeight: '700' }}>{b.label}</span>
              ))}
            </div>
          </div>

          {/* Right: Image with watch video button overlay and rating below */}
          <div>
            <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
              <img 
                src="/study-abroad.jpg" 
                alt="Data Engineer Course"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />
              {/* Watch Video Button Overlay */}
              <button 
                onClick={() => setShowVideoPopup(true)}
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: BLU,
                  border: 'none',
                  borderRadius: '24px',
                  padding: '8px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  color: '#fff',
                  fontSize: '12px',
                  fontWeight: '600',
                  fontFamily: "'Poppins',sans-serif",
                  whiteSpace: 'nowrap',
                  zIndex: 2
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="rgba(255,255,255,0.2)"/>
                  <path d="M6.5 5.5l5 2.5-5 2.5V5.5z" fill="#fff"/>
                </svg>
                Watch Intro Video
              </button>
            </div>
            
            {/* Ratings Bar Below Image */}
            <div style={{ 
              backgroundColor: 'rgba(255,255,255,0.95)', 
              marginTop: '16px', 
              borderRadius: '8px', 
              padding: '14px 20px', 
              display: 'flex', 
              justifyContent: 'space-around', 
              alignItems: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Star />
                <span style={{ fontWeight: '700', fontSize: '15px', color: TXT }}>4.6</span>
                <span style={{ fontSize: '12px', color: GRAY }}>4182 Ratings</span>
              </div>
              <div style={{ width: '1px', height: '28px', backgroundColor: '#e2e8f0' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="6" r="3.5" stroke={BLU} strokeWidth="1.5"/>
                  <path d="M2.5 15.5c0-3.5 2.9-6.5 6.5-6.5s6.5 3 6.5 6.5" stroke={BLU} strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span style={{ fontWeight: '700', fontSize: '15px', color: TXT }}>12.4K</span>
                <span style={{ fontSize: '12px', color: GRAY }}>Learners</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup Modal */}
      {showVideoPopup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }} onClick={() => setShowVideoPopup(false)}>
          <div style={{
            position: 'relative',
            width: '80%',
            maxWidth: '800px',
            backgroundColor: '#000',
            borderRadius: '12px',
            overflow: 'hidden',
            cursor: 'default'
          }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowVideoPopup(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                cursor: 'pointer',
                fontSize: '18px',
                zIndex: 10
              }}
            >
              ✕
            </button>
            <video
              src="/intro-video.mp4"
              controls
              autoPlay
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  )
}
/* ══════════════════════════════════════════════════════
   STICKY SIDEBAR FORM
══════════════════════════════════════════════════════ */
const SidebarForm: React.FC<{ title?: string; subtitle?: string; btnLabel?: string; showMsg?: boolean }> = ({
  title = 'Begin Your Journey to Success',
  subtitle = 'Get lifetime access to self-paced e-learning content',
  btnLabel = 'Talk to Our Advisor',
  showMsg = false,
}) => {
  const [inquiry, setInquiry] = useState<'myself' | 'company'>('myself')
  return (
    <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '24px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
      <h3 style={{ fontSize: '16px', fontWeight: '700', color: TXT, textAlign: 'center', marginBottom: '6px' }}>{title}</h3>
      <p style={{ fontSize: '12.5px', color: GRAY, textAlign: 'center', marginBottom: '20px' }}>{subtitle}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {['Name*', 'Email*'].map(pl => (
          <input key={pl} placeholder={pl} style={{ width: '100%', padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', fontFamily: "'Poppins',sans-serif", outline: 'none', boxSizing: 'border-box' }} />
        ))}
        <div style={{ display: 'flex', gap: '8px' }}>
          <select style={{ width: '80px', padding: '10px 8px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '12px', fontFamily: "'Poppins',sans-serif", outline: 'none' }}>
            <option>IN +91</option><option>US +1</option><option>UK +44</option>
          </select>
          <input placeholder="Phone Number*" style={{ flex: 1, padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', fontFamily: "'Poppins',sans-serif", outline: 'none' }} />
        </div>
        {showMsg && <textarea placeholder="Write an optional message" rows={3} style={{ width: '100%', padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '13px', fontFamily: "'Poppins',sans-serif", outline: 'none', resize: 'none', boxSizing: 'border-box' }} />}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '13px', color: GRAY }}>Inquiry for:</span>
          {(['myself', 'company'] as const).map(v => (
            <label key={v} style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '13px', color: TXT }}>
              <div onClick={() => setInquiry(v)} style={{ width: '16px', height: '16px', borderRadius: '50%', border: `2px solid ${inquiry === v ? BLU : '#cbd5e1'}`, backgroundColor: inquiry === v ? BLU : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                {inquiry === v && <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#fff' }} />}
              </div>
              {v === 'myself' ? 'Myself' : 'My Company'}
            </label>
          ))}
        </div>
        <label style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '12px', color: GRAY }}>
          <input type="checkbox" defaultChecked style={{ marginTop: '2px', accentColor: BLU }} />
          By providing your contact details, you agree to our{' '}
          <a href="#" style={{ color: BLU }}>Privacy Policy</a>
        </label>
        <button style={{ ...btn(BLU, '#fff'), width: '100%', padding: '12px', fontSize: '14px' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = BLU_D }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = BLU }}
        >{btnLabel}</button>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   3. OVERVIEW + FEATURES + SKILLS
══════════════════════════════════════════════════════ */

const keyFeatures = [
  '20+ assisted practices on all modules',
  '25+ hands-on labs with cloud sandboxes',
  '5 lesson-end knowledge checks and 1 capstone project',
  'Industry-recognized course completion certificate',
  'Mentorship from active data engineering practitioners',
  '8X higher interaction in live online classes conducted by industry experts',
]

const skills = [
  'Apache Spark', 'Apache Kafka', 'dbt (data build tool)', 'Apache Airflow',
  'Python for Data Eng.', 'SQL & Advanced SQL', 'AWS Glue / Redshift', 'Azure Data Factory',
  'Google BigQuery', 'Snowflake', 'Delta Lake / Lakehouse', 'Data Modeling',
  'ETL / ELT Pipelines', 'Spark Streaming', 'REST APIs', 'Docker & Kubernetes',
]

const OverviewSection: React.FC = () => {
  const navigate = useNavigate()

  const handleContactUs = () => {
    navigate('/contact-us')
  }

  return (
    <div style={{ backgroundColor: '#fff', padding: '50px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 360px', gap: '48px', alignItems: 'flex-start' }}>
        <div>
          <h2 style={{ fontSize: '26px', fontWeight: '800', color: TXT, marginBottom: '16px' }}>Data Engineer Course Overview</h2>
          <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.85, marginBottom: '28px' }}>
            This Data Engineering Training course covers the fundamentals of modern data infrastructure and how to apply them to real-world applications. The modules, lesson-end projects, and assignments comprising the curriculum cover data pipelines in Python, Spark, Kafka, Airflow, dbt, cloud platforms, data warehousing, stream processing, data lake architecture, and the most widely used orchestration and transformation frameworks.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: TXT }}>Data Engineering Certification Key Features</h2>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '20px', padding: '4px 14px', fontSize: '12px', fontWeight: '700', color: '#16a34a' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1l1.5 3 3.5.5-2.5 2.5.5 3.5L7 9l-3 1.5.5-3.5L2 4.5 5.5 4z" fill="#16a34a"/></svg>
              100% Money Back Guarantee
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="#16a34a"/><path d="M5 7l1.5 1.5 3-3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '36px' }}>
            {keyFeatures.map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Chk />
                <span style={{ fontSize: '13px', color: '#475569', lineHeight: 1.65 }}>{f}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '20px', fontWeight: '800', color: TXT, marginBottom: '18px' }}>Skills Covered</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {skills.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Chk />
                <span style={{ fontSize: '13px', color: '#475569' }}>{s}</span>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div style={{ marginTop: '36px', padding: '24px', backgroundColor: LGRAY, borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: TXT, marginBottom: '12px' }}>Benefits</h3>
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.8, marginBottom: '8px' }}>
              According to{' '}<a href="#" style={{ color: BLU }}>Gartner Research</a>, the global data engineering and analytics market is expected to reach <strong>USD 655.5 billion by 2029</strong>, registering a CAGR of 27.3% during the forecast period.
            </p>
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.8 }}>
              Data Engineers are among the highest-paid professionals in the tech industry, with average salaries of <strong>₹12–28 LPA in India</strong> and <strong>$120K–180K in the US</strong>, according to the 2024 Stack Overflow Developer Survey.
            </p>
          </div>
        </div>

        {/* Sticky sidebar */}
        <div style={{ position: 'sticky', top: '76px' }}>
          <SidebarForm />
          <div style={{ marginTop: '16px', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '700', color: TXT, marginBottom: '4px' }}>Corporate Training</h4>
            <p style={{ fontSize: '12.5px', color: GRAY, marginBottom: '16px' }}>Enterprise training for teams</p>
            <button 
              onClick={handleContactUs}
              style={{ ...btn('#fff', BLU, { border: `2px solid ${BLU}`, width: '100%' }) }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
/* ══════════════════════════════════════════════════════
   4. SALARY / HIRING COMPANIES
══════════════════════════════════════════════════════ */
const SalarySection: React.FC = () => {
  const bars = [
    { label: 'Min', val: 6, h: 60, color: BLU },
    { label: '', val: 10, h: 100, color: BLU },
    { label: 'Avg', val: 16, h: 145, color: BLU },
    { label: '', val: 12, h: 110, color: BLU },
    { label: 'Max', val: 28, h: 175, color: BLU },
  ]
  return (
    <div style={{ backgroundColor: LGRAY, padding: '50px 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#fff' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 1fr', borderBottom: '1px solid #e2e8f0' }}>
            {['Designation', 'Annual Salary', 'Hiring Companies'].map(h => (
              <div key={h} style={{ padding: '14px 20px', fontSize: '13px', fontWeight: '600', color: GRAY, borderRight: '1px solid #e2e8f0' }}>{h}</div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 1fr' }}>
            <div style={{ padding: '20px', borderRight: '1px solid #e2e8f0', display: 'flex', alignItems: 'center' }}>
              <a href="#" style={{ color: BLU, fontWeight: '600', fontSize: '13.5px' }}>Data Engineer</a>
            </div>
            {/* Bar chart */}
            <div style={{ padding: '20px', borderRight: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '180px', paddingBottom: '24px', position: 'relative' }}>
                {bars.map((b, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flex: 1 }}>
                    <span style={{ fontSize: '10px', fontWeight: '700', color: TXT }}>₹{b.val}L</span>
                    <div style={{ width: '100%', height: `${b.h}px`, backgroundColor: '#bfdbfe', borderRadius: '4px 4px 0 0', transition: 'height 0.5s ease' }} />
                  </div>
                ))}
                {/* X labels */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', padding: '0 8px' }}>
                  <span style={{ fontSize: '10px', color: GRAY }}>Min</span>
                  <span style={{ fontSize: '10px', color: GRAY }}>Average</span>
                  <span style={{ fontSize: '10px', color: GRAY }}>Max</span>
                </div>
              </div>
              <p style={{ fontSize: '11px', color: GRAY, textAlign: 'center' }}>Source: Glassdoor / LinkedIn</p>
            </div>
            {/* Logos */}
            <div style={{ padding: '24px 20px', display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center', justifyContent: 'center' }}>
              {[
                { name: 'Microsoft', color: '#00a4ef' },
                { name: 'Amazon', color: '#ff9900' },
                { name: 'Google', color: '#4285f4' },
                { name: 'Infosys', color: '#007cc3' },
                { name: 'TCS', color: '#1e3a8a' },
                { name: 'Databricks', color: '#ff3621' },
              ].map(c => (
                <span key={c.name} style={{ padding: '6px 14px', border: `1.5px solid ${c.color}40`, borderRadius: '6px', fontSize: '12px', fontWeight: '700', color: c.color, backgroundColor: `${c.color}08` }}>{c.name}</span>
              ))}
              <p style={{ width: '100%', fontSize: '11px', color: GRAY, textAlign: 'center', marginTop: '6px' }}>Source: Indeed / LinkedIn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
/* ══════════════════════════════════════════════════════
   5. TRAINING OPTIONS
══════════════════════════════════════════════════════ */
const TrainingOptions: React.FC = () => {
  const navigate = useNavigate()

  const handleEnrollNow = () => {
    navigate('/contact-us')
  }

  const handleContactUs = () => {
    navigate('/contact-us')
  }

  return (
    <div id="training-options" style={{ backgroundColor: '#fff', padding: '50px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '800', color: TXT, marginBottom: '28px' }}>Training Options</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {/* Self Paced */}
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '800', color: TXT, letterSpacing: '0.5px', textTransform: 'uppercase' }}>SELF PACED LEARNING</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
              {[
                'Lifetime access to high-quality self-paced e-learning content curated by industry experts',
                '24x7 learner assistance and support',
                'Access to 20+ hands-on labs and code sandboxes',
                'Auto-graded assignments with instant feedback',
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <Chk color={ORG} />
                  <span style={{ fontSize: '13px', color: '#475569', lineHeight: 1.65 }}>{f}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '22px', fontWeight: '800', color: TXT }}>₹24,999</span>
              <button 
                onClick={handleEnrollNow}
                style={{ ...btn(ORG, '#fff', { fontSize: '13px', padding: '10px 24px' }) }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#ea6a0a' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ORG }}
              >
                Enroll Now
              </button>
            </div>
          </div>
          {/* Corporate */}
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '800', color: TXT, letterSpacing: '0.5px', textTransform: 'uppercase' }}>CORPORATE TRAINING</h3>
              <a href="#" style={{ fontSize: '12px', color: BLU }}>Upskill or reskill your teams ↗</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
              {[
                'Flexible pricing & billing options',
                'Private cohorts available',
                'Training progress dashboards',
                'Skills assessment & benchmarking',
                'Platform integration capabilities',
                'Dedicated customer success manager',
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <Chk />
                  <span style={{ fontSize: '13px', color: '#475569', lineHeight: 1.65 }}>{f}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={handleContactUs}
              style={{ ...btn(BLU, '#fff', { width: 'fit-content', marginTop: '16px' }) }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   6. CURRICULUM ACCORDION
══════════════════════════════════════════════════════ */
interface Lesson { title: string; duration: string; preview?: boolean }
interface Module { title: string; totalDuration: string; lessons: Lesson[] }

const curriculum: Module[] = [
  {
    title: 'Section 01 - Self Paced Learning Curriculum', totalDuration: '48:30',
    lessons: [
      { title: 'Lesson 01: Data Engineering Fundamentals', duration: '36:20' },
    ]
  },
]

const fullLessons: Lesson[] = [
  { title: '1.1 Course Introduction', duration: '02:10', preview: true },
  { title: '1.2 Learning Objectives', duration: '00:55' },
  { title: '1.3 What is Data Engineering?', duration: '07:15' },
  { title: '1.4 Data Engineer vs Data Scientist vs Data Analyst', duration: '08:40' },
  { title: '1.5 Modern Data Stack Overview', duration: '06:30', preview: true },
  { title: '1.6 Python Environment Setup for Data Engineering', duration: '04:20' },
  { title: '1.7 Demo: Setting Up Your Dev Environment', duration: '05:50' },
  { title: '1.8 Data Types and Structures', duration: '05:10' },
  { title: '1.9 Intro to ETL vs ELT Pipelines', duration: '04:15', preview: true },
  { title: '1.10 Demo: Building Your First Pipeline', duration: '03:45' },
  { title: '1.11 Key Takeaways', duration: '01:00' },
]

const sections = [
  { title: 'Lesson 01: Data Engineering Fundamentals', duration: '36:20', lessons: fullLessons },
  { title: 'Lesson 02: Apache Spark & PySpark', duration: '44:15', lessons: [] },
  { title: 'Lesson 03: Apache Kafka & Streaming', duration: '38:50', lessons: [] },
  { title: 'Lesson 04: dbt & Data Transformation', duration: '29:30', lessons: [] },
  { title: 'Lesson 05: Apache Airflow & Orchestration', duration: '33:10', lessons: [] },
  { title: 'Lesson 06: Cloud Data Platforms (AWS/Azure/GCP)', duration: '52:00', lessons: [] },
  { title: 'Lesson 07: Data Warehousing & Snowflake', duration: '41:20', lessons: [] },
  { title: 'Lesson 08: Capstone Project', duration: '28:00', lessons: [] },
]

const CurriculumSection: React.FC = () => {
  const [openSection, setOpenSection] = useState(0)
  const [showAll, setShowAll] = useState(false)

  return (
    <div style={{ backgroundColor: LGRAY, padding: '50px 0', borderTop: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 360px', gap: '48px', alignItems: 'flex-start' }}>
        <div>
          <h2 style={{ fontSize: '26px', fontWeight: '800', color: TXT, marginBottom: '24px' }}>Data Engineer Course Curriculum</h2>

          {/* Eligibility */}
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: '700', color: TXT, marginBottom: '12px' }}>Eligibility</h3>
            <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.8, marginBottom: '6px' }}>
              Anyone interested in learning data engineering for software, analytics, or data science job roles will benefit from this certification. This course is also well-suited for:
            </p>
            <p style={{ fontSize: '13.5px', color: '#475569', marginBottom: '4px' }}>Software developers, BI developers...</p>
            <a href="#" style={{ color: BLU, fontSize: '13px', fontWeight: '600' }}>Read More</a>
          </div>

          {/* Pre-requisites */}
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: '700', color: TXT, marginBottom: '12px' }}>Pre-requisites</h3>
            <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.8 }}>
              Learners need to possess basic programming knowledge (any language) and a familiarity with SQL or databases. An undergraduate degree or diploma in any field is sufficient.
            </p>
          </div>

          {/* Course Content */}
          <h3 style={{ fontSize: '17px', fontWeight: '700', color: TXT, marginBottom: '16px' }}>Course Content</h3>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff' }}>
            {/* Top level section */}
            <div style={{ padding: '14px 18px', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: BLU, fontSize: '16px', fontWeight: '700' }}>—</span>
              <span style={{ fontSize: '13.5px', fontWeight: '600', color: TXT }}>Section 01 - Self Paced Learning Curriculum</span>
            </div>

            {sections.map((s, si) => (
              <div key={si} style={{ borderBottom: si < sections.length - 1 ? '1px solid #e2e8f0' : 'none' }}>
                {/* Section header */}
                <button onClick={() => setOpenSection(openSection === si ? -1 : si)} style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '13px 18px', background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: "'Poppins',sans-serif", textAlign: 'left',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#94a3b8', fontSize: '16px', fontWeight: '700' }}>—</span>
                    <span style={{ fontSize: '13.5px', fontWeight: '600', color: BLU }}>{s.title}</span>
                  </div>
                  <span style={{ fontSize: '12px', color: BLU, whiteSpace: 'nowrap', fontWeight: '600' }}>{s.duration}</span>
                </button>

                {/* Lessons */}
                {openSection === si && s.lessons.length > 0 && (
                  <div style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
                    {(showAll ? s.lessons : s.lessons.slice(0, 7)).map((lesson, li) => (
                      <div key={li} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 18px 10px 44px', borderBottom: li < s.lessons.length - 1 ? '1px solid #e2e8f0' : 'none' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: BLU, flexShrink: 0 }} />
                          <span style={{ fontSize: '13px', color: '#475569' }}>{lesson.title}</span>
                          {lesson.preview && (
                            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', borderRadius: '50%', backgroundColor: BLU, border: 'none', cursor: 'pointer' }}>
                              <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2.5 1.5l4 2.5-4 2.5V1.5z" fill="#fff"/></svg>
                            </button>
                          )}
                        </div>
                        <span style={{ fontSize: '12px', color: BLU, whiteSpace: 'nowrap', fontWeight: '600' }}>{lesson.duration}</span>
                      </div>
                    ))}
                    {!showAll && s.lessons.length > 7 && (
                      <div style={{ textAlign: 'center', padding: '12px' }}>
                        <button onClick={() => setShowAll(true)} style={{ color: BLU, background: 'none', border: 'none', fontSize: '13px', fontWeight: '600', cursor: 'pointer', fontFamily: "'Poppins',sans-serif" }}>View More</button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* <button style={{ ...btn(BLU, '#fff', { marginTop: '20px', fontSize: '13px' }) }}>Download Syllabus</button> */}
        </div>

        {/* Right sidebar */}
        <div style={{ position: 'sticky', top: '76px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px', backgroundColor: '#fff' }}>
            <p style={{ fontSize: '12px', color: GRAY, marginBottom: '6px' }}>Contact Us</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '22px', fontWeight: '800', color: TXT }}>1800-212-7688</p>
                <p style={{ fontSize: '12px', color: GRAY }}>(Toll Free)</p>
              </div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: BLU, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 2h3l1.5 4-2 1.5a11 11 0 0 0 5 5L12 11l4 1.5v3c-7.5 1-14-5.5-13-13z" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>
          <SidebarForm title="Request More Information" subtitle="" btnLabel="Submit" showMsg />
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   7. REAL-LIFE PROJECTS
══════════════════════════════════════════════════════ */
const projects = [
  { num: 'Project 1', title: 'Real-Time Clickstream Pipeline', desc: 'Build a real-time data pipeline using Apache Kafka and PySpark to ingest, process, and analyze web clickstream events from an e-commerce platform.' },
  { num: 'Project 2', title: 'Cloud Data Warehouse on Snowflake', desc: 'Design and implement a fully automated ELT pipeline using dbt and Apache Airflow to load raw data from S3 into a Snowflake data warehouse.' },
  { num: 'Project 3', title: 'Healthcare Analytics Platform', desc: 'Build an end-to-end data lakehouse on Azure with Delta Lake, automating patient data ingestion, transformation, and BI-ready serving layers.' },
]

const ProjectsSection: React.FC = () => (
  <div style={{ backgroundColor: '#fff', padding: '50px 0', borderTop: '1px solid #e2e8f0' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '800', color: TXT, marginBottom: '24px' }}>Data Engineering Real-Life Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
        {projects.map((p, i) => (
          <div key={i} style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px', transition: 'box-shadow 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(30,111,224,0.12)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
          >
            <span style={{ fontSize: '12px', color: GRAY, fontWeight: '500' }}>{p.num}</span>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: TXT, lineHeight: 1.4 }}>{p.title}</h3>
            <div style={{ flex: 1 }} />
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.75 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

/* ══════════════════════════════════════════════════════
   8. EXAM & CERTIFICATION
══════════════════════════════════════════════════════ */
const certFaqs = [
  {
    q: 'How do I pass the Data Engineering certification exam?',
    a: 'To earn your Data Engineer certification through Data Artisans, you must successfully navigate a two-step evaluation process. First, you need to complete at least 85% of the online self-paced learning or attend one full batch of the live instructor-led training. The final step is successfully evaluating your industry-aligned capstone project. To ensure you pass, we recommend completing all hands-on labs, practicing with cloud sandboxes, and completing all the hands-on exercises — as the final assessment focuses heavily on your ability to solve real-world data pipeline problems.',
  },
  { q: 'Validity of the Data Engineering certification?', a: null },
  { q: 'How soon can I retake the Data Engineering certification exam?', a: null },
  { q: 'What do I need to do to unlock my Data Artisans Certificate?', a: null },
]

const CertSection: React.FC = () => {
  const [open, setOpen] = useState(0)
  return (
    <div style={{ backgroundColor: LGRAY, padding: '50px 0', borderTop: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 360px', gap: '48px', alignItems: 'flex-start' }}>
        <div>
          <h2 style={{ fontSize: '26px', fontWeight: '800', color: TXT, marginBottom: '24px' }}>Data Engineering Exam & Certification</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {certFaqs.map((faq, i) => (
              <div key={i} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff' }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: "'Poppins',sans-serif", textAlign: 'left',
                }}>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: TXT }}>{faq.q}</span>
                  <span style={{ color: GRAY, fontSize: '18px', fontWeight: '300', flexShrink: 0 }}>{open === i ? '∧' : '∨'}</span>
                </button>
                {open === i && faq.a && (
                  <div style={{ padding: '0 20px 18px', borderTop: '1px solid #f1f5f9' }}>
                    <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.85 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Certificate visual */}
        <div style={{ position: 'sticky', top: '76px' }}>
          <div style={{ position: 'relative', backgroundColor: '#fff', border: '6px solid #1e6fe0', borderRadius: '8px', padding: '32px', textAlign: 'center', boxShadow: '0 12px 40px rgba(30,111,224,0.2)' }}>
            <div style={{ position: 'absolute', top: '-12px', left: '-12px', width: '32px', height: '32px', backgroundColor: '#1e6fe0', borderRadius: '4px' }} />
            <div style={{ position: 'absolute', top: '-12px', right: '-12px', width: '32px', height: '32px', backgroundColor: '#1e6fe0', borderRadius: '4px' }} />
            <div style={{ position: 'absolute', bottom: '-12px', left: '-12px', width: '32px', height: '32px', backgroundColor: '#1e6fe0', borderRadius: '4px' }} />
            <div style={{ position: 'absolute', bottom: '-12px', right: '-12px', width: '32px', height: '32px', backgroundColor: '#1e6fe0', borderRadius: '4px' }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginBottom: '16px' }}>
              <span style={{ fontWeight: '800', fontSize: '18px', color: DARK }}>data</span>
              <span style={{ fontWeight: '800', fontSize: '18px', color: BLU }}>:artisans</span>
            </div>
            <div style={{ borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '16px 0', margin: '0 0 16px' }}>
              <p style={{ fontSize: '13px', color: GRAY, marginBottom: '8px', fontStyle: 'italic' }}>Certificate of Achievement</p>
              <p style={{ fontSize: '12px', color: GRAY, marginBottom: '6px' }}>Congratulations!</p>
              <p style={{ fontSize: '16px', fontWeight: '800', color: BLU }}>John Doe</p>
              <p style={{ fontSize: '12px', color: GRAY, marginTop: '6px' }}>has successfully completed our training program on</p>
              <p style={{ fontSize: '14px', fontWeight: '700', color: TXT, marginTop: '6px' }}>Data Engineering Training</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontSize: '10px', color: GRAY }}>Date:</p>
                <p style={{ fontSize: '10px', color: GRAY }}>Certificate code: 12456</p>
              </div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l1.5 4h4.5l-3.5 2.5 1.5 4.5L10 11l-3.5 2 1.5-4.5L4.5 6H9z" fill="#f59e0b"/></svg>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '10px', color: GRAY }}>Krishna Kumar</p>
                <p style={{ fontSize: '9px', color: GRAY }}>CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   9. REVIEWS
══════════════════════════════════════════════════════ */
const reviews = [
  { name: 'Rahul Mehra', role: 'Data Engineer at HDFC Bank', stars: 5, text: "Data Artisans' Data Engineering Certification was transformative. The curriculum is comprehensive and practical. The Spark and Kafka modules were particularly excellent — I was able to apply what I learned immediately at work." },
  { name: 'Priya Krishnamurthy', role: 'Senior Analyst at Deloitte', stars: 5, text: "Excellent course! The hands-on labs and real-world projects gave me the confidence to migrate our data pipelines to the cloud. The mentors are industry practitioners who really understand enterprise challenges." },
  { name: 'Arjun Nair', role: 'Data Platform Lead at Swiggy', stars: 4, text: "Great content coverage from basics to advanced topics. The dbt and Airflow modules are top-notch. Would love even more content on Databricks, but overall an outstanding program." },
]

const ReviewsSection: React.FC = () => {
  const [idx, setIdx] = useState(0)
  return (
    <div style={{ backgroundColor: '#f8fafc', padding: '50px 0', borderTop: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '800', color: TXT, marginBottom: '28px' }}>Data Engineering Course Reviews</h2>
        <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#fff', maxWidth: '560px' }}>
          <div style={{ padding: '28px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: BLU, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#fff', fontWeight: '700', fontSize: '18px' }}>{reviews[idx].name[0]}</span>
              </div>
              <div>
                <p style={{ fontWeight: '700', fontSize: '15px', color: TXT }}>{reviews[idx].name}</p>
                <p style={{ fontSize: '12.5px', color: GRAY }}>{reviews[idx].role}</p>
                <div style={{ display: 'flex', gap: '2px', marginTop: '4px' }}>
                  {Array.from({ length: reviews[idx].stars }).map((_, i) => <Star key={i} />)}
                </div>
              </div>
            </div>
            <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.8 }}>{reviews[idx].text}</p>
          </div>
          <div style={{ height: '4px', backgroundColor: BLU }} />
        </div>
        <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? '24px' : '8px', height: '8px', borderRadius: '4px', border: 'none', backgroundColor: i === idx ? BLU : '#cbd5e1', cursor: 'pointer', transition: 'all 0.3s' }} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   10. WHY JOIN
══════════════════════════════════════════════════════ */
const whyPoints = [
  { title: 'Develop skills for real career growth', desc: 'Cutting-edge curriculum designed in guidance with industry and academia to develop job-ready data engineering skills' },
  { title: 'Learn from experts active in their field, not out-of-touch trainers', desc: 'Leading data practitioners who bring current best practices, live architectures and case studies to sessions that fit into your work schedule.' },
  { title: 'Learn by working on real-world pipelines', desc: 'Capstone projects involving real-world datasets with cloud lab sandboxes for hands-on data engineering.' },
  { title: 'Structured guidance ensuring learning never stops', desc: '24x7 learning support from mentors and a community of like-minded data engineers to resolve any conceptual or technical doubts.' },
]

const WhyJoinSection: React.FC = () => (
  <div style={{ backgroundColor: '#fff', padding: '50px 0', borderTop: '1px solid #e2e8f0' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
      <h2 style={{ fontSize: '26px', fontWeight: '800', color: TXT, marginBottom: '28px' }}>Why Join this Program</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '480px 1fr', gap: '48px', alignItems: 'center' }}>
        {/* Image from public folder */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', position: 'relative' }}>
          <img 
            src="/why-join-image.jpg" 
            alt="Why join this program"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'cover'
            }}
          />
        </div>
        {/* Points */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
          {whyPoints.map((p, i) => (
            <div key={i}>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: TXT, marginBottom: '8px', lineHeight: 1.4 }}>{p.title}</h4>
              <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.75 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

/* ══════════════════════════════════════════════════════
   11. FAQs
══════════════════════════════════════════════════════ */
const faqs = [
  { q: 'What is a Data Engineer certification?', a: 'A Data Engineering certification acts as a credential that validates your expertise in designing, building, and maintaining data pipelines and infrastructure. The certification process involves passing an exam that assesses your understanding of Apache Spark, Kafka, Airflow, dbt, cloud data platforms (AWS/Azure/GCP), data warehousing, and SQL. Data Artisans\' Data Engineering certification helps you demonstrate expertise to employers and clients, enhancing your career prospects for roles like Data Engineer, Pipeline Engineer, Platform Engineer, or Cloud Data Architect.' },
  { q: 'Why Learn Data Engineering?', a: null },
  { q: 'What does a Data Engineer do?', a: null },
  { q: 'What are the key components of a Data Engineering certification?', a: null },
  { q: 'How do beginners start learning Data Engineering?', a: null },
  { q: 'Which companies hire Data Engineers?', a: null },
]

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState(0)
  return (
    <div style={{ backgroundColor: '#f8fafc', padding: '50px 0', borderTop: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '800', color: TXT, marginBottom: '24px' }}>Data Engineering Certification FAQs</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Poppins',sans-serif", textAlign: 'left',
              }}>
                <span style={{ fontSize: '14px', fontWeight: '600', color: TXT }}>{faq.q}</span>
                <span style={{ color: GRAY, fontSize: '18px', fontWeight: '300', flexShrink: 0 }}>{open === i ? '∧' : '∨'}</span>
              </button>
              {open === i && faq.a && (
                <div style={{ padding: '0 20px 18px', borderTop: '1px solid #f1f5f9' }}>
                  <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.85 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <a href="#" style={{ color: BLU, fontSize: '14px', fontWeight: '600' }}>View More</a>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   12. RELATED PROGRAMS
══════════════════════════════════════════════════════ */
const related = [
  { title: 'Apache Spark Certification Training', level: 'ADVANCED', rating: 4.5, ratingCount: 2140, learners: 18420 },
  { title: 'AWS Data Analytics Certification', level: 'INTERMEDIATE', rating: 4.6, ratingCount: 1893, learners: 14200 },
  { title: 'Snowflake for Data Engineers', level: 'INTERMEDIATE', rating: 4.4, ratingCount: 987, learners: 8900 },
]

const RelatedSection: React.FC = () => (
  <div style={{ backgroundColor: LGRAY, padding: '50px 0', borderTop: '1px solid #e2e8f0' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '800', color: TXT, marginBottom: '24px' }}>Related Programs</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '18px' }}>
        {related.map((p, i) => (
          <div key={i} style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '22px', backgroundColor: '#fff', borderLeft: `4px solid ${BLU}`, transition: 'box-shadow 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(30,111,224,0.12)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
          >
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: TXT, marginBottom: '14px', lineHeight: 1.4 }}>{p.title}</h3>
            <span style={{ display: 'inline-block', fontSize: '10px', fontWeight: '700', letterSpacing: '1px', color: '#64748b', backgroundColor: '#f1f5f9', padding: '3px 10px', borderRadius: '4px', marginBottom: '12px' }}>{p.level}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12.5px', color: GRAY }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Star /><span style={{ fontWeight: '600', color: TXT }}>{p.rating}</span>
                <span>({p.ratingCount.toLocaleString()} Ratings)</span>
              </div>
              <span>|</span>
              <span>{p.learners.toLocaleString()} Learners</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// /* ══════════════════════════════════════════════════════
//    13. DARK FOOTER
// ══════════════════════════════════════════════════════ */
// const CourseFooter: React.FC = () => {
//   const cols = [
//     { title: 'Company', links: ['About us','Careers','Newsroom','Alumni speak','Grievance redressal','Contact us'] },
//     { title: 'Work with us', links: ['Become an instructor','Blog as guest'] },
//     { title: 'Discover', links: ['Data Artisans SkillUp','SkillUp Sitemap','Resources','RSS feed','AI Mentor GPT'] },
//     { title: 'For Businesses', links: ['Corporate training','Data Artisans SkillUp+','Guaranteed-to-run Classes','Corporate resources','Partners'] },
//     { title: 'Learn On the Go!', links: [] },
//   ]
//   const trending = {
//     'Trending Post Graduate Programs': ['Data Science MasterClass','ML Engineering Course','Cloud Architect Program','DevOps Engineering Bootcamp'],
//     'Trending Master Programs': ['PySpark Certification Course','dbt Analytics Engineer','Kafka Streams Master Course','Snowflake SnowPro Core'],
//     'Trending Courses': ['Python for Data Engineering','SQL for Data Engineers','Apache Airflow Certification','AWS Data Analytics','Azure Data Factory','GCP Professional Data Engineer'],
//     'Trending Resources': ['PySpark Tutorial','Kafka Tutorial','dbt Tutorial','Airflow DAG Guide','Snowflake Tutorial','Docker for Data Engineers'],
//   }
//   return (
//     <footer style={{ backgroundColor: '#1a1a2e', color: '#94a3b8', fontFamily: "'Poppins',sans-serif" }}>
//       <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '50px 24px 30px' }}>
//         {/* Top: logo + social + columns */}
//         <div style={{ display: 'grid', gridTemplateColumns: '160px repeat(5,1fr)', gap: '32px', marginBottom: '40px' }}>
//           {/* Brand */}
//           <div>
//             <div style={{ marginBottom: '16px' }}>
//               <span style={{ fontWeight: '800', fontSize: '20px', color: '#fff' }}>data</span>
//               <span style={{ fontWeight: '800', fontSize: '20px', color: BLU }}>:artisans</span>
//             </div>
//             <button style={{ border: '1px solid #334155', borderRadius: '6px', padding: '8px 14px', color: '#94a3b8', backgroundColor: 'transparent', fontSize: '12px', cursor: 'pointer', fontFamily: "'Poppins',sans-serif", marginBottom: '16px' }}>Refer and Earn</button>
//             <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
//               {['f','t','▶','in','✈','📸'].map((icon, i) => (
//                 <div key={i} style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', cursor: 'pointer', color: '#94a3b8' }}>{icon}</div>
//               ))}
//             </div>
//           </div>
//           {/* Nav columns */}
//           {cols.map((col, ci) => (
//             <div key={ci}>
//               <h4 style={{ color: '#fff', fontSize: '13px', fontWeight: '700', marginBottom: '14px' }}>{col.title}</h4>
//               {col.title === 'Learn On the Go!' ? (
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                   {['Get the Android App', 'Get the iOS App'].map(app => (
//                     <button key={app} style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #334155', borderRadius: '6px', padding: '8px 12px', backgroundColor: 'transparent', color: '#94a3b8', fontSize: '12px', cursor: 'pointer', fontFamily: "'Poppins',sans-serif' " }}>
//                       <span>{app.includes('Android') ? '🤖' : '🍎'}</span>{app}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
//                   {col.links.map(l => (
//                     <a key={l} href="#" style={{ color: '#64748b', fontSize: '12.5px', transition: 'color 0.2s' }}
//                       onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#94a3b8' }}
//                       onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#64748b' }}
//                     >{l}</a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <div style={{ borderTop: '1px solid #1e293b', paddingTop: '30px' }}>
//           {Object.entries(trending).map(([heading, links]) => (
//             <div key={heading} style={{ marginBottom: '18px' }}>
//               <h5 style={{ color: '#fff', fontSize: '12.5px', fontWeight: '700', marginBottom: '8px' }}>{heading}</h5>
//               <p style={{ fontSize: '12px', lineHeight: 1.8 }}>
//                 {links.map((l, i) => (
//                   <React.Fragment key={l}>
//                     <a href="#" style={{ color: BLU }}>{l}</a>
//                     {i < links.length - 1 && <span style={{ color: '#334155', margin: '0 8px' }}>|</span>}
//                   </React.Fragment>
//                 ))}
//               </p>
//             </div>
//           ))}
//         </div>

//         <div style={{ borderTop: '1px solid #1e293b', marginTop: '24px', paddingTop: '20px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
//           {['Terms and Conditions','Privacy Policy','Refund Policy'].map(l => (
//             <a key={l} href="#" style={{ color: '#64748b', fontSize: '12px' }}>{l}</a>
//           ))}
//           <span style={{ color: '#64748b', fontSize: '12px' }}>🇮🇳 Country</span>
//         </div>
//         <p style={{ textAlign: 'center', fontSize: '11.5px', color: '#475569', marginTop: '14px' }}>
//           © 2015–2026 Data Artisans Solutions. All Rights Reserved. The certification names are the trademarks of their respective owners.
//         </p>
//         <p style={{ textAlign: 'center', fontSize: '11px', color: '#334155', marginTop: '8px' }}>
//           * All trademarks are the property of their respective owners and their inclusion does not imply endorsement or affiliation.
//         </p>
//       </div>
//     </footer>
//   )
// }

/* ══════════════════════════════════════════════════════
   14. FLOATING BOTTOM BAR
══════════════════════════════════════════════════════ */
const BottomBar: React.FC = () => (
  <div style={{
    position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 900,
    backgroundColor: '#fff', borderTop: '1px solid #e2e8f0',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '12px 24px', boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
    fontFamily: "'Poppins',sans-serif",
  }}>
    <button style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13.5px', color: BLU, fontWeight: '600', fontFamily: "'Poppins',sans-serif" }}>
      <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: BLU, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 3h10v8H2zM5 3V2h4v1" stroke="#fff" strokeWidth="1.2" fill="none" strokeLinejoin="round"/></svg>
      </div>
      Request a Callback
    </button>
    <button style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13.5px', color: BLU, fontWeight: '600', fontFamily: "'Poppins',sans-serif" }}>
      <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: BLU, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2.5h2l1 3-1.5 1a9 9 0 0 0 4 4l1-1.5 3 1V12c-5 .5-11-4.5-10-9.5z" stroke="#fff" strokeWidth="1.2" fill="none" strokeLinejoin="round"/></svg>
      </div>
      Call us on 1800-212-7688
    </button>
    <div style={{ marginLeft: 'auto' }}>
      <button style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: BLU, color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 20px', cursor: 'pointer', fontSize: '13.5px', fontWeight: '600', fontFamily: "'Poppins',sans-serif" }}>
        <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2h6l4 4v6H2V2z" stroke="#fff" strokeWidth="1.2" fill="none" strokeLinejoin="round"/><path d="M8 2v4h4" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/></svg>
        </div>
        Live Chat
      </button>
    </div>
  </div>
)

/* ══════════════════════════════════════════════════════
   MAIN PAGE ASSEMBLY
══════════════════════════════════════════════════════ */
const DataEngineerCourse: React.FC = () => (
  <div style={{ fontFamily: "'Poppins',sans-serif", backgroundColor: '#fff', paddingBottom: '60px' }}>
    <HeroSection />
    <OverviewSection />
    <SalarySection />
    <TrainingOptions />
    <CurriculumSection />
    <ProjectsSection />
    <CertSection />
    <ReviewsSection />
    <WhyJoinSection />
    <FAQSection />
    <RelatedSection />
    {/* <CourseFooter /> */}
    <BottomBar />
  </div>
)

export default DataEngineerCourse