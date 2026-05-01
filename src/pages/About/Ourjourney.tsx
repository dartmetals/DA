import React, { useEffect, useRef, useState } from 'react'
import AboutLayout from '../../components/AboutLayout'

interface Milestone {
  year: string
  title: string
  description: string
  isHighlight?: boolean
}

const milestones: Milestone[] = [
  { year: '2015', title: 'Founded', description: 'Data Artisans was established in Hyderabad with a core team of 8 data engineers and analysts, focusing on BI and reporting solutions for the BFSI sector.', isHighlight: true },
  { year: '2016', title: 'First 50 Clients', description: 'Crossed 50 corporate clients across Banking and Insurance verticals. Launched our first proprietary ETL accelerator framework, reducing pipeline build time by 40%.' },
  { year: '2017', title: 'Cloud Practice Launch', description: 'Established dedicated Cloud Data practice covering AWS, Azure, and GCP. Executed first multi-cloud migration for a Fortune 500 Insurance company.', isHighlight: true },
  { year: '2018', title: 'DA Academy Founded', description: 'Launched DA Academy, our learning &amp; development arm, offering data engineering and analytics skilling programs. Partnered with 3 state governments for workforce upskilling.' },
  { year: '2019', title: 'AI/ML Center of Excellence', description: 'Established a dedicated AI/ML CoE with 50+ data scientists. Delivered first large-scale ML solution for demand forecasting in Consumer Goods sector.', isHighlight: true },
  { year: '2020', title: 'Pandemic Pivot & Growth', description: 'Rapidly pivoted to remote delivery. Grew headcount by 35% as digital transformation mandates accelerated demand for data services globally.' },
  { year: '2021', title: '200+ Corporate Clients', description: 'Crossed the milestone of 200 active corporate clients. Expanded operations to 22 states across India and opened first international delivery center.', isHighlight: true },
  { year: '2022', title: 'Global Expansion', description: 'Extended service delivery to 16 countries. Established partnerships with leading cloud vendors — AWS Advanced Partner, Microsoft Gold Partner, GCP Premier Partner.' },
  { year: '2023', title: 'GenAI Practice Launch', description: 'Launched a dedicated Generative AI practice. Delivered first enterprise LLM implementation for a large BFSI client, reducing document processing time by 70%.', isHighlight: true },
  { year: '2024', title: '400+ Clients & 5000+ Team', description: 'Reached 400+ corporate customers and a team of 5,000+ full-time and flexi-time employees. Recognized as a Top 10 Data Services Company in India.' },
  { year: '2025', title: 'Data Artisans 2.0', description: 'Launched Data Artisans 2.0 — a next-generation AI-native platform for automated data operations, real-time analytics, and self-service intelligence across the enterprise.', isHighlight: true },
]

const OurJourney: React.FC = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const [visible, setVisible] = useState<boolean[]>(new Array(milestones.length).fill(false))

  useEffect(() => {
    const observers = milestones.map((_, i) => {
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setVisible(prev => { const n = [...prev]; n[i] = true; return n })
          obs.disconnect()
        }
      }, { threshold: 0.2 })
      if (refs.current[i]) obs.observe(refs.current[i]!)
      return obs
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <AboutLayout title="Our Journey">
      {/* ── Intro ── */}
      <div style={{ backgroundColor: '#fff', padding: '50px 0 30px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <span style={{ color: '#2563eb', fontSize: '12px', fontWeight: '600', letterSpacing: '2px' }}>OUR STORY</span>
            <span style={{ display: 'block', width: '40px', height: '2px', backgroundColor: '#2563eb' }} />
          </div>
          <h2 style={{ fontSize: 'clamp(22px,3.5vw,32px)', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px' }}>
            A decade of data excellence
          </h2>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.9, maxWidth: '700px' }}>
            From a small team of passionate data engineers in Hyderabad to a global data solutions company
            serving 400+ enterprises across 16 countries — here's how we grew.
          </p>
        </div>
      </div>

      {/* ── Timeline ── */}
      <div style={{ backgroundColor: '#fff', padding: '10px 0 80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px', position: 'relative' }}>

          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '50%', top: '0', bottom: '0',
            width: '2px', backgroundColor: '#e2e8f0', transform: 'translateX(-50%)',
            zIndex: 0,
          }} />

          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0
            return (
              <div
                key={i}
                ref={el => { refs.current[i] = el }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 60px 1fr',
                  gap: '0',
                  marginBottom: '40px',
                  alignItems: 'center',
                  opacity: visible[i] ? 1 : 0,
                  transform: visible[i] ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                }}
              >
                {/* Left content */}
                <div style={{ paddingRight: '30px', textAlign: 'right' }}>
                  {isLeft ? (
                    <div style={{
                      border: `1px solid ${m.isHighlight ? '#2563eb' : '#ebebeb'}`,
                      borderRadius: '6px', padding: '22px 24px',
                      backgroundColor: m.isHighlight ? '#eff6ff' : '#fff',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                      textAlign: 'left',
                    }}>
                      <h3 style={{ fontSize: '15px', fontWeight: '700', color: m.isHighlight ? '#2563eb' : '#1a1a1a', marginBottom: '8px' }}>{m.title}</h3>
                      <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: m.description }} />
                    </div>
                  ) : null}
                </div>

                {/* Center dot */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    backgroundColor: m.isHighlight ? '#2563eb' : '#fff',
                    border: `2px solid ${m.isHighlight ? '#2563eb' : '#cbd5e1'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: m.isHighlight ? '0 0 0 6px rgba(37,99,235,0.12)' : 'none',
                  }}>
                    <span style={{ fontSize: '10px', fontWeight: '800', color: m.isHighlight ? '#fff' : '#64748b', lineHeight: 1.1, textAlign: 'center' }}>
                      {m.year}
                    </span>
                  </div>
                </div>

                {/* Right content */}
                <div style={{ paddingLeft: '30px' }}>
                  {!isLeft ? (
                    <div style={{
                      border: `1px solid ${m.isHighlight ? '#2563eb' : '#ebebeb'}`,
                      borderRadius: '6px', padding: '22px 24px',
                      backgroundColor: m.isHighlight ? '#eff6ff' : '#fff',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                    }}>
                      <h3 style={{ fontSize: '15px', fontWeight: '700', color: m.isHighlight ? '#2563eb' : '#1a1a1a', marginBottom: '8px' }}>{m.title}</h3>
                      <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: m.description }} />
                    </div>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </AboutLayout>
  )
}

export default OurJourney