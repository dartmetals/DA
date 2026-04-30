import React, { useEffect, useRef, useState } from 'react'

interface Stat {
  value: string
  label: string
  suffix: 'plus' | 'percent'
}

const row1: Stat[] = [
  { value: '200', label: 'Customers\nServiced', suffix: 'plus' },
  { value: '600', label: 'Partners\nEngaged', suffix: 'plus' },
  { value: '2L', label: 'Candidates\nHired', suffix: 'plus' },
  { value: '470', label: 'Cities Reached', suffix: 'plus' },
]

const row2: Stat[] = [
  { value: '95', label: 'Manning\nManaged', suffix: 'percent' },
  { value: '40', label: 'HR Cost Savings', suffix: 'percent' },
  { value: '15', label: 'Attrition Reduced', suffix: 'percent' },
  { value: '95', label: 'Customer\nReferral', suffix: 'percent' },
]

const PlusIcon: React.FC = () => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '18px',
      height: '18px',
      backgroundColor: '#e31e24',
      color: '#fff',
      fontSize: '13px',
      fontWeight: '700',
      borderRadius: '3px',
      marginLeft: '4px',
      verticalAlign: 'super',
      flexShrink: 0,
    }}
  >
    +
  </span>
)

const PercentIcon: React.FC = () => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '18px',
      height: '18px',
      backgroundColor: '#e31e24',
      color: '#fff',
      fontSize: '10px',
      fontWeight: '700',
      borderRadius: '3px',
      marginLeft: '4px',
      verticalAlign: 'super',
      flexShrink: 0,
    }}
  >
    %
  </span>
)

const StatItem: React.FC<{ stat: Stat; visible: boolean; delay: number }> = ({
  stat,
  visible,
  delay,
}) => (
  <div
    style={{
      textAlign: 'center',
      padding: '20px 10px',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(25px)',
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}
  >
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: '14px',
      }}
    >
      <span
        style={{
          fontSize: 'clamp(36px, 5vw, 52px)',
          fontWeight: '800',
          color: '#1a1a1a',
          lineHeight: 1,
        }}
      >
        {stat.value}
      </span>
      {stat.suffix === 'plus' ? <PlusIcon /> : <PercentIcon />}
    </div>
    <p
      style={{
        fontSize: '14px',
        fontWeight: '500',
        color: '#555',
        lineHeight: 1.55,
        whiteSpace: 'pre-line',
      }}
    >
      {stat.label}
    </p>
  </div>
)

const Stats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      style={{
        padding: '70px 0',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #f0f0f0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#1a1a1a',
            textAlign: 'center',
            marginBottom: '50px',
          }}
        >
          Numbers that Matter
        </h2>

        {/* Row 1 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '12px',
          }}
        >
          {row1.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} visible={visible} delay={i * 120} />
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #f0f0f0', margin: '16px 0' }} />

        {/* Row 2 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
        >
          {row2.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} visible={visible} delay={200 + i * 120} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #stats-r1, #stats-r2 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Stats
