import React, { useState } from 'react'
import AboutLayout from '../../components/AboutLayout'

interface Office {
  city: string
  type: 'HQ' | 'Regional' | 'Delivery'
  address: string
  phone: string
  email: string
  country: string
  flag: string
  coords: { lat: number; lng: number }
}

const offices: Office[] = [
  { city: 'Hyderabad', type: 'HQ', address: 'Plot 42, HITEC City, Madhapur, Hyderabad – 500 081', phone: '+91 40 4455 6677', email: 'hq@dataartisans.com', country: 'India', flag: '🇮🇳', coords: { lat: 17.45, lng: 78.38 } },
  { city: 'Bengaluru', type: 'Regional', address: '6th Floor, Prestige Tech Park, Outer Ring Road, Bengaluru – 560 103', phone: '+91 80 4123 5678', email: 'bangalore@dataartisans.com', country: 'India', flag: '🇮🇳', coords: { lat: 12.97, lng: 77.59 } },
  { city: 'Mumbai', type: 'Regional', address: 'Level 9, One BKC, Bandra Kurla Complex, Mumbai – 400 051', phone: '+91 22 6655 4433', email: 'mumbai@dataartisans.com', country: 'India', flag: '🇮🇳', coords: { lat: 19.07, lng: 72.87 } },
  { city: 'Delhi NCR', type: 'Regional', address: 'Tower B, DLF Cyber Park, Phase 2, Gurugram – 122 002', phone: '+91 124 433 5566', email: 'delhi@dataartisans.com', country: 'India', flag: '🇮🇳', coords: { lat: 28.49, lng: 77.08 } },
  { city: 'Chennai', type: 'Delivery', address: '4th Floor, Olympia Cyberspace, SIPCOT IT Park, Chennai – 600 119', phone: '+91 44 4221 3344', email: 'chennai@dataartisans.com', country: 'India', flag: '🇮🇳', coords: { lat: 12.84, lng: 80.22 } },
  { city: 'Pune', type: 'Delivery', address: 'Unit 801, Commerzone, Yerwada, Pune – 411 006', phone: '+91 20 6677 8899', email: 'pune@dataartisans.com', country: 'India', flag: '🇮🇳', coords: { lat: 18.55, lng: 73.92 } },
  { city: 'Singapore', type: 'Regional', address: '1 Raffles Place, #40-02 One Raffles Place, Singapore 048616', phone: '+65 6234 5678', email: 'singapore@dataartisans.com', country: 'Singapore', flag: '🇸🇬', coords: { lat: 1.28, lng: 103.85 } },
  { city: 'Dubai', type: 'Delivery', address: 'DIFC, Gate Village Building 5, Level 4, Dubai, UAE', phone: '+971 4 330 1234', email: 'dubai@dataartisans.com', country: 'UAE', flag: '🇦🇪', coords: { lat: 25.21, lng: 55.28 } },
  { city: 'London', type: 'Delivery', address: '10 Finsbury Square, Moorgate, London EC2A 1AF, UK', phone: '+44 20 7946 0123', email: 'london@dataartisans.com', country: 'UK', flag: '🇬🇧', coords: { lat: 51.52, lng: -0.09 } },
]

const typeColor = { HQ: '#2563eb', Regional: '#1e3a8a', Delivery: '#64748b' }
const typeBg   = { HQ: '#eff6ff', Regional: '#e0e7ff', Delivery: '#f1f5f9' }

const Locations: React.FC = () => {
  const [activeCity, setActiveCity] = useState<string | null>('Hyderabad')
  const [activeTab, setActiveTab] = useState<'India' | 'International'>('India')

  const filtered = offices.filter(o => activeTab === 'India' ? o.country === 'India' : o.country !== 'India')

  return (
    <AboutLayout title="Locations">
      <div style={{ backgroundColor: '#fff', padding: '50px 0 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a1a', marginBottom: '24px' }}>Our Offices</h3>

          {/* Tab switcher */}
          <div style={{ display: 'flex', gap: '0', marginBottom: '32px', border: '1px solid #ebebeb', borderRadius: '4px', overflow: 'hidden', width: 'fit-content' }}>
            {(['India', 'International'] as const).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                padding: '10px 28px', fontSize: '13px', fontWeight: '600',
                backgroundColor: activeTab === tab ? '#2563eb' : '#fff',
                color: activeTab === tab ? '#fff' : '#555',
                border: 'none', cursor: 'pointer',
                fontFamily: "'Poppins', sans-serif",
                transition: 'all 0.2s',
              }}>{tab}</button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
            {filtered.map((office, i) => (
              <div key={i}
                onClick={() => setActiveCity(office.city)}
                style={{
                  border: `1.5px solid ${activeCity === office.city ? '#2563eb' : '#ebebeb'}`,
                  borderRadius: '6px', padding: '24px',
                  backgroundColor: activeCity === office.city ? '#eff6ff' : '#fff',
                  cursor: 'pointer', transition: 'all 0.2s',
                  boxShadow: activeCity === office.city ? '0 4px 20px rgba(37,99,235,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
                }}>
                {/* Type badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <span style={{
                    fontSize: '10px', fontWeight: '700', letterSpacing: '1px',
                    color: typeColor[office.type], backgroundColor: typeBg[office.type],
                    padding: '3px 9px', borderRadius: '20px',
                    border: `1px solid ${typeColor[office.type]}33`,
                  }}>{office.type.toUpperCase()}</span>
                  <span style={{ fontSize: '20px' }}>{office.flag}</span>
                </div>

                <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a', marginBottom: '8px' }}>
                  {office.city}
                  {office.type === 'HQ' && <span style={{ color: '#2563eb', fontSize: '12px', marginLeft: '6px' }}>★</span>}
                </h4>

                <p style={{ fontSize: '12.5px', color: '#777', lineHeight: 1.7, marginBottom: '14px' }}>{office.address}</p>

                <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '12px' }}>
                  <a href={`tel:${office.phone}`} style={{ display: 'block', fontSize: '12.5px', color: '#555', marginBottom: '4px', textDecoration: 'none' }}>
                    📞 {office.phone}
                  </a>
                  <a href={`mailto:${office.email}`} style={{ fontSize: '12.5px', color: '#2563eb', textDecoration: 'none' }}>
                    ✉ {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AboutLayout>
  )
}

export default Locations