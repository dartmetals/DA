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
  { 
    city: 'London', 
    type: 'Regional', 
    address: '297, Suite 2, High Street North, London, E12 6SL', 
    phone: '+44 7385 649648', 
    email: 'london@dataartisans.com', 
    country: 'International', 
    flag: '🇬🇧', 
    coords: { lat: 51.52, lng: -0.09 } 
  },
  { 
    city: 'Hyderabad', 
    type: 'HQ', 
    address: '#918, 8th Floor, Vasavi MPM Grand, Beside Ameerpet Metro, (Pillar 1062 & 1063), Ameerpet, Hyderabad - 500073', 
    phone: '+91 91333 29955', 
    email: 'hyderabad@dataartisans.com', 
    country: 'India', 
    flag: '🇮🇳', 
    coords: { lat: 17.45, lng: 78.38 } 
  },
  { 
    city: 'Bangalore', 
    type: 'Regional', 
    address: 'No. 90/3, 2nd Floor, Outer Ring Rd, Opp. Innovative Multiplex, Marathahalli, Bangalore - 560037', 
    phone: '+91 97395 52345', 
    email: 'bangalore@dataartisans.com', 
    country: 'India', 
    flag: '🇮🇳', 
    coords: { lat: 12.97, lng: 77.59 } 
  },
]

const typeColor = { HQ: '#2563eb', Regional: '#1e3a8a', Delivery: '#64748b' }
const typeBg   = { HQ: '#eff6ff', Regional: '#e0e7ff', Delivery: '#f1f5f9' }

const Locations: React.FC = () => {
  const [activeCity, setActiveCity] = useState<string | null>('Hyderabad')
  const [activeTab, setActiveTab] = useState<'India' | 'International'>('India')
  
  // State for responsive layout
  const [isMobile, setIsMobile] = React.useState(false);
  const [_isTablet, setIsTablet] = React.useState(false);

  // Check screen size for responsive layout
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const filtered = offices.filter(o => activeTab === 'India' ? o.country === 'India' : o.country === 'International')

  // Responsive grid style function
  const getGridStyle = (): React.CSSProperties => {
    if (isMobile) {
      return { display: 'grid', gridTemplateColumns: '1fr', gap: '20px' };
    }
    // Tablet and Desktop: 3 columns
    return { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' };
  };

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

          <div style={getGridStyle()}>
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