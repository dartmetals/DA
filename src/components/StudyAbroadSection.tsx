import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CardData {
  flag: string;
  country: string;
  flagCode: string;
  title: string;
  desc: string;
  variant: 'blue' | 'white';
  decoration?: React.ReactNode;
}

const CountryFlag = ({ country, flagCode }: { country: string; flagCode: string }) => (
  <div style={{
    width: 60, height: 60, borderRadius: '50%',
    background: '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: 20, fontSize: 32,
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    border: '2px solid #e2e8f0',
  }}>
    <img 
      src={`https://flagcdn.com/${flagCode}.svg`}
      alt={`${country} flag`}
      style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        objectFit: 'cover',
      }}
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none';
      }}
    />
  </div>
);

// const BlueIcon = () => (
//   <div style={{
//     width: 48, height: 48, borderRadius: '50%',
//     background: 'rgba(255,255,255,0.25)',
//     border: '2px solid rgba(255,255,255,0.5)',
//     display: 'flex', alignItems: 'center', justifyContent: 'center',
//     marginBottom: 20,
//   }}>
//     <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
//       <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2" fill="none" />
//       <circle cx="11" cy="11" r="3" fill="white" />
//     </svg>
//   </div>
// );

/* Decorative 3D book shape (top right of community card) */
const BookDecoration = () => (
  <div style={{ position: 'absolute', top: -20, right: -10, opacity: 0.85 }}>
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <rect x="8" y="24" width="40" height="34" rx="4" fill="#5b63f8" transform="rotate(-18 8 24)" />
      <rect x="16" y="20" width="40" height="34" rx="4" fill="#7c8cf8" transform="rotate(-8 16 20)" />
      <rect x="22" y="18" width="40" height="34" rx="4" fill="#a5b4fc" />
      <rect x="26" y="22" width="32" height="2" rx="1" fill="white" opacity="0.5" />
      <rect x="26" y="28" width="28" height="2" rx="1" fill="white" opacity="0.5" />
    </svg>
  </div>
);

/* Decorative 3D cube shape */
const CubeDecoration = () => (
  <div style={{ position: 'absolute', bottom: 16, right: 20, opacity: 0.8 }}>
    <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
      <polygon points="20,20 50,6 80,20 50,34" fill="#7c8cf8" />
      <polygon points="20,20 20,50 50,64 50,34" fill="#5b63f8" />
      <polygon points="50,34 50,64 80,50 80,20" fill="#4048e8" />
      <polygon points="30,26 55,14 70,22 45,34" fill="#a5b4fc" opacity="0.7" />
    </svg>
  </div>
);

const cards: CardData[] = [
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    flagCode: "gb",
    title: "Study in UK",
    desc: "World-class education at top universities. Complete guidance for applications, student visas, and university selection tailored to your profile.",
    variant: 'blue',
  },
  {
    flag: "🇨🇦",
    country: "Canada",
    flagCode: "ca",
    title: "Study in Canada",
    desc: "Affordable education with excellent post-study work opportunities. We help you with college selection, visa process, and settlement support.",
    variant: 'white',
    decoration: <BookDecoration />,
  },
  {
    flag: "🇦🇺",
    country: "Australia",
    flagCode: "au",
    title: "Study in Australia",
    desc: "Quality education in a multicultural environment. Complete assistance with university applications, scholarships, and visa processing.",
    variant: 'white',
    decoration: <CubeDecoration />,
  },
];

const SpeedyDigitalSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-80px' }); // Changed to once: false

  return (
    <section ref={ref} style={{
      background: '#f0f2ff',
      padding: '100px 48px',
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0 }}
          style={{
            fontSize: 44, fontWeight: 800,
            color: '#0f172a', letterSpacing: '-0.03em',
            lineHeight: 1.2, textAlign: 'center',
            marginBottom: 24,
          }}
        >
          Your Global Education Partner
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            fontSize: 16,
            color: '#64748b',
            textAlign: 'center',
            maxWidth: 700,
            margin: '0 auto 56px auto',
            lineHeight: 1.6,
          }}
        >
          Complete support for your abroad journey — from visa assistance to post-arrival settlement.
          Our dedicated team guides you every step of the way.
        </motion.p>

        {/* Cards — appear one after another */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60, scale: 0.94 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.94 }}
              transition={{
                duration: 0.65,
                delay: 0.6 + i * 0.25,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              style={{
                borderRadius: 24,
                padding: '32px 28px 36px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                ...(card.variant === 'blue'
                  ? {
                      background: 'linear-gradient(145deg, #5b63f8 0%, #4048e8 100%)',
                      boxShadow: '0 8px 32px rgba(91,99,248,0.35)',
                    }
                  : {
                      background: '#fff',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                      border: '1px solid #f1f5f9',
                    }),
              }}
            >
              {card.decoration}

              {/* Country Flag */}
              <CountryFlag country={card.country} flagCode={card.flagCode} />

              <h3 style={{
                fontSize: 22, fontWeight: 700,
                color: card.variant === 'blue' ? '#fff' : '#0f172a',
                marginBottom: 12, lineHeight: 1.3,
              }}>
                {card.title}
              </h3>

              <p style={{
                fontSize: 14, lineHeight: 1.65,
                color: card.variant === 'blue' ? 'rgba(255,255,255,0.85)' : '#64748b',
                marginBottom: 20,
              }}>
                {card.desc}
              </p>

              {/* Learn more link */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{
                  fontSize: 14, fontWeight: 600,
                  color: card.variant === 'blue' ? '#fff' : '#5b63f8',
                  borderBottom: `1.5px solid ${card.variant === 'blue' ? 'rgba(255,255,255,0.5)' : '#5b63f8'}`,
                  paddingBottom: 1,
                }}>
                  Explore {card.country}
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4"
                    stroke={card.variant === 'blue' ? '#fff' : '#5b63f8'}
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          style={{
            marginTop: 60,
            padding: '32px 40px',
            background: '#fff',
            borderRadius: 20,
            textAlign: 'center',
            border: '1px solid #e2e8f0',
          }}
        >
          <h3 style={{
            fontSize: 20,
            fontWeight: 700,
            color: '#0f172a',
            marginBottom: 16,
          }}>
            We're With You Every Step of the Way
          </h3>
          <p style={{
            fontSize: 15,
            color: '#475569',
            lineHeight: 1.7,
            maxWidth: 800,
            margin: '0 auto',
          }}>
            From visa guidance and university applications to accommodation setup and part-time job assistance — 
            our team supports you before, during, and after your move abroad. We'll be there until you're 
            completely settled and thriving in your new country.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeedyDigitalSection;