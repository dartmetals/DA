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

const typeColor = { HQ: '#e31e24', Regional: '#1a1a2e', Delivery: '#666' }
const typeBg   = { HQ: '#fff0f0', Regional: '#f0f1f8', Delivery: '#f5f5f5' }

// const MapSVG: React.FC<{ offices: Office[]; active: string | null }> = ({ offices, active }) => (
//   <svg viewBox="0 0 900 450" width="100%" style={{ backgroundColor: '#e8f0fe', borderRadius: '6px' }}>
//     {/* World map simplified outline */}
//     <rect width="900" height="450" fill="#dce8f9" />
//     {/* Grid lines */}
//     {[1,2,3,4,5,6].map(i => (
//       <line key={i} x1="0" y1={i*75} x2="900" y2={i*75} stroke="#c5d8f0" strokeWidth="0.5" />
//     ))}
//     {[1,2,3,4,5,6,7,8].map(i => (
//       <line key={i} x1={i*112.5} y1="0" x2={i*112.5} y2="450" stroke="#c5d8f0" strokeWidth="0.5" />
//     ))}
//     {/* Land masses (simplified) */}
//     <ellipse cx="450" cy="160" rx="340" ry="120" fill="#c8dba8" opacity="0.6" />
//     <ellipse cx="200" cy="280" rx="140" ry="90" fill="#c8dba8" opacity="0.6" />
//     <ellipse cx="550" cy="320" rx="110" ry="75" fill="#c8dba8" opacity="0.6" />
//     <ellipse cx="730" cy="200" rx="80" ry="110" fill="#c8dba8" opacity="0.6" />
//     {/* Equator line */}
//     <line x1="0" y1="225" x2="900" y2="225" stroke="#a0bce0" strokeWidth="1" strokeDasharray="6,4" />

//     {/* Office dots — project lat/lng to SVG coords */}
//     {offices.map((o, i) => {
//       const x = ((o.coords.lng + 180) / 360) * 900
//       const y = ((90 - o.coords.lat) / 180) * 450
//       const isActive = active === o.city
//       const r = isActive ? 10 : 7
//       const fill = o.type === 'HQ' ? '#e31e24' : o.type === 'Regional' ? '#1a1a2e' : '#555'
//       return (
//         <g key={i}>
//           {isActive && <circle cx={x} cy={y} r="18" fill={fill} opacity="0.2" />}
//           <circle cx={x} cy={y} r={r} fill={fill} stroke="#fff" strokeWidth="2" />
//           <text x={x + 12} y={y + 4} fontSize="9" fontWeight="600" fill="#333" fontFamily="Poppins, sans-serif">{o.city}</text>
//         </g>
//       )
//     })}
//   </svg>
// )

const Locations: React.FC = () => {
  const [activeCity, setActiveCity] = useState<string | null>('Hyderabad')
  const [activeTab, setActiveTab] = useState<'India' | 'International'>('India')

  const filtered = offices.filter(o => activeTab === 'India' ? o.country === 'India' : o.country !== 'India')
//   const activeOffice = offices.find(o => o.city === activeCity)

  return (
    <AboutLayout title="Locations">
      {/* ── Intro ── */}
      {/* <div style={{ backgroundColor: '#fff', padding: '50px 0 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <span style={{ color: '#e31e24', fontSize: '12px', fontWeight: '600', letterSpacing: '2px' }}>GLOBAL PRESENCE</span>
            <span style={{ display: 'block', width: '40px', height: '2px', backgroundColor: '#e31e24' }} />
          </div>
          <h2 style={{ fontSize: 'clamp(22px,3.5vw,32px)', fontWeight: '700', color: '#1a1a1a', marginBottom: '10px' }}>
            Wherever your data lives, we're there
          </h2>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.9, marginBottom: '40px', maxWidth: '660px' }}>
            Data Artisans operates across 16 countries with 470+ delivery cities in India and growing
            international presence to serve global enterprises with local expertise.
          </p> */}

          {/* ── Map ── */}
          {/* <MapSVG offices={offices} active={activeCity} /> */}

          {/* ── Summary stats ── */}
          {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0', marginTop: '32px', border: '1px solid #ebebeb', borderRadius: '6px', overflow: 'hidden' }}>
            {[
              { num: '16', label: 'Countries' },
              { num: '9', label: 'Office Locations' },
              { num: '470+', label: 'Cities in India' },
              { num: '22', label: 'States Covered' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '24px 16px', textAlign: 'center',
                borderRight: i < 3 ? '1px solid #ebebeb' : 'none',
                backgroundColor: '#fff',
              }}>
                <div style={{ fontSize: '30px', fontWeight: '800', color: '#e31e24', marginBottom: '6px' }}>{s.num}</div>
                <div style={{ fontSize: '13px', color: '#666', fontWeight: '500' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* ── Office cards ── */}
      <div style={{ backgroundColor: '#fff', padding: '50px 0 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a1a', marginBottom: '24px' }}>Our Offices</h3>

          {/* Tab switcher */}
          <div style={{ display: 'flex', gap: '0', marginBottom: '32px', border: '1px solid #ebebeb', borderRadius: '4px', overflow: 'hidden', width: 'fit-content' }}>
            {(['India', 'International'] as const).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                padding: '10px 28px', fontSize: '13px', fontWeight: '600',
                backgroundColor: activeTab === tab ? '#e31e24' : '#fff',
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
                  border: `1.5px solid ${activeCity === office.city ? '#e31e24' : '#ebebeb'}`,
                  borderRadius: '6px', padding: '24px',
                  backgroundColor: activeCity === office.city ? '#fff8f8' : '#fff',
                  cursor: 'pointer', transition: 'all 0.2s',
                  boxShadow: activeCity === office.city ? '0 4px 20px rgba(227,30,36,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
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
                  {office.type === 'HQ' && <span style={{ color: '#e31e24', fontSize: '12px', marginLeft: '6px' }}>★</span>}
                </h4>

                <p style={{ fontSize: '12.5px', color: '#777', lineHeight: 1.7, marginBottom: '14px' }}>{office.address}</p>

                <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '12px' }}>
                  <a href={`tel:${office.phone}`} style={{ display: 'block', fontSize: '12.5px', color: '#555', marginBottom: '4px' }}>
                    📞 {office.phone}
                  </a>
                  <a href={`mailto:${office.email}`} style={{ fontSize: '12.5px', color: '#e31e24', textDecoration: 'none' }}>
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