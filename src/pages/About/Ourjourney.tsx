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

/* ── Journey Card Component ── */
const JourneyCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
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

const OurJourney: React.FC = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const [_visible, setVisible] = useState<boolean[]>(new Array(milestones.length).fill(false))

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

  // New milestones data
  const newMilestones = [
    { year: '2014', title: 'Founded Flair Technologies', description: 'Started with a vision to bridge the skill gap in IT industry' },
    { year: '2019', title: 'First 1000 Students Placed', description: 'Achieved 100% placement rate in our first year' },
    { year: '2020', title: 'Expanded to Hyderabad', description: 'Opened our second training center to serve more students' },
    { year: '2021', title: 'Launched Online Programs', description: 'Adapted to digital learning during pandemic' },
    { year: '2022', title: '7000+ Students Trained', description: 'Crossed the milestone of training 2000+ professionals' },
    { year: '2023', title: 'Industry Partnerships', description: 'Partnered with 100+ companies for direct placements' },
    { year: '2024', title: '10000+ Success Stories', description: 'Celebrating 10000+ successful career transformations' },
  ]

  return (
    <AboutLayout title="Our Journey">
      {/* ── Hero Section ── */}
      <div style={{ backgroundColor: '#fff', padding: '50px 0 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.85, marginBottom: '40px' }}>
            At Data Artisans, our journey is driven by a passion for innovation, excellence, and transformative solutions. What started as a vision to revolutionize business processes has evolved into a trusted enterprise providing cutting-edge recruitment, workforce management, and digital transformation services. As we move forward, we remain dedicated to driving change, fostering innovation, and delivering impactful solutions that empower businesses worldwide. Join us on this journey, and let's shape the future together.
          </p>
        </div>
      </div>

      {/* ── OUR STORY Section with gray bg (without milestones) ── */}
      <div style={{ backgroundColor: '#f1f5f9', padding: '40px 0 0 0' }}>
        <div style={{ padding: '0 0 30px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <span style={{ color: '#2563eb', fontSize: '12px', fontWeight: '600', letterSpacing: '2px' }}>OUR STORY</span>
              <span style={{ display: 'block', width: '40px', height: '2px', backgroundColor: '#2563eb' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(22px,3.5vw,32px)', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px' }}>
              A journey of growth, driven by software excellence.
            </h2>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.9, maxWidth: '100%', marginBottom: '20px' }}>
              Over the years, Data Artisans have evolved alongside industry demands, embracing AI-driven automation, data intelligence, and smart business strategies to deliver unmatched efficiency and scalability. Our commitment to excellence, adaptability, and customer-centric solutions has helped us forge strong relationships with Fortune 500 companies, startups, and growing enterprises. As we move forward, innovation, integrity, and impact remain at the core of everything we do. Join us on this journey, and let's shape the future-together.
            </p>

            <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.9, maxWidth: '100%', marginBottom: '20px' }}>
              At Data Artisans, our journey began with a vision-to revolutionize businesses through innovation, technology, and seamless talent solutions. From a humble start, we have grown into a trusted partner for enterprises seeking cutting-edge recruitment, workforce management, and digital transformation services. With a vast network of professionals and institutions, we have successfully connected businesses with the right talent, ensuring they stay ahead in an ever-changing market. Our journey is defined by continuous learning, technological advancement, and a relentless pursuit of success.
            </p>

            <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.9, maxWidth: '100%', marginBottom: '20px' }}>
              From our humble beginnings, we have grown into a technology-driven solutions provider, helping businesses across industries adapt to the ever-evolving digital landscape. Over the years, we have continuously evolved, embracing AI-driven automation, data intelligence, and strategic business solutions to ensure organizations stay competitive and agile. With a strong foundation in recruitment and workforce solutions, we have built an extensive network of professionals, institutions, and businesses, enabling seamless talent acquisition and workforce management.
            </p>

            <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.9, maxWidth: '100%', marginBottom: '40px' }}>
              As a company committed to scalability, efficiency, and long-term impact, we focus on delivering results that matter. Our risk-reward partnership models, innovative engagement strategies, and deep industry expertise set us apart as a trusted name in the industry. At Data Artisans, we believe in the power of continuous learning, collaboration, and technological advancement. Every milestone we achieve strengthens our resolve to redefine the future of business solutions. With a strong focus on excellence, adaptability, and success, we continue to push boundaries, enabling businesses to scale, innovate, and transform seamlessly.
            </p>
          </div>
        </div>
      </div>

      {/* Milestones That Define Us Section - WITHOUT gray bg */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a1a1a', textAlign: 'center', marginBottom: '48px' }}>
            Milestones That Define Us
          </h2>
          
          <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '2px',
              backgroundColor: '#e2e8f0',
              transform: 'translateX(-50%)',
              zIndex: 0,
            }} />

            {newMilestones.map((milestone, index) => {
              const isLeft = index % 2 === 0
              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: isLeft ? 'flex-start' : 'flex-end',
                    marginBottom: '40px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <div style={{
                    width: 'calc(50% - 40px)',
                    textAlign: isLeft ? 'right' : 'left',
                  }}>
                    <div style={{
                      backgroundColor: '#fff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      padding: '20px 24px',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                    }}>
                      <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#2563eb', marginBottom: '8px' }}>
                        {milestone.year}
                      </h3>
                      <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#1a1a1a', marginBottom: '8px' }}>
                        {milestone.title}
                      </h4>
                      <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.75, margin: 0 }}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#2563eb',
                    border: '2px solid #fff',
                    boxShadow: '0 0 0 3px rgba(37,99,235,0.2)',
                    zIndex: 2,
                  }} />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Transforming recruitment section - Full width gray bg */}
      <div style={{ backgroundColor: '#f1f5f9', padding: '2px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 40px 30px' }}>
          <div style={{ textAlign: 'center', margin: '30px 0 30px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px' }}>
              Transforming recruitment with innovation and technology for a smarter workforce.
            </h2>
          </div>

          {/* Journey Cards - 3 cards */}
          <div style={{ marginBottom: '50px' }}>
            <JourneyCard 
              title="Advancing technology, empowering businesses, redefining possibilities."
              description="At Data Artisans, we believe that technology is the key to unlocking new business opportunities and driving sustainable growth. As industries evolve, we continue to innovate, adapt, and implement cutting-edge solutions that help businesses stay ahead of the curve. Our commitment to advancing technology ensures that organizations can leverage the latest digital tools, automation, and AI-driven solutions to enhance efficiency, productivity, and overall business performance. Through a strategic blend of innovation and expertise, we provide tailored solutions that meet the dynamic demands of the modern business world."
            />
            <JourneyCard 
              title="Empowering businesses for success"
              description="Empowering businesses is at the core of what we do. Whether it's through intelligent recruitment solutions, workforce management, or digital transformation, we help enterprises streamline their operations and maximize their potential. By offering scalable, flexible, and high-impact technology solutions, we enable companies to build strong teams, optimize workflows, and achieve operational excellence. Our data-driven approach ensures businesses have the insights and resources needed to make informed decisions, drive efficiency, and create long-term success in an ever-changing marketplace."
            />
            <JourneyCard 
              title="Redefining what's possible"
              description="At Data Artisans, we are not just keeping pace with change-we are redefining what's possible. By combining technology with strategic thinking and a customer-centric approach, we transform challenges into opportunities for businesses across industries. Our vision is to bridge the gap between innovation and business success, ensuring that our clients remain competitive, agile, and ready for the future. As we continue to push boundaries, our goal remains the same: to provide future-ready solutions that drive transformation, create impact, and pave the way for a smarter, more connected world."
            />
          </div>
        </div>
      </div>
    </AboutLayout>
  )
}

export default OurJourney