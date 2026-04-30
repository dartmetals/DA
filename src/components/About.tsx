import React from 'react'

const About: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        padding: '70px 0',
        backgroundColor: '#ffffff',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'grid',
          gridTemplateColumns: '220px 1fr 1.6fr',
          gap: '50px',
          alignItems: 'center',
        }}
      >
        {/* ── Left: 35 Years Box ── */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              border: '3px solid #e31e24',
              padding: '28px 22px',
              textAlign: 'center',
              minWidth: '160px',
              position: 'relative',
            }}
          >
            {/* Corner accent */}
            <div
              style={{
                position: 'absolute',
                top: '-3px',
                right: '-3px',
                width: '28px',
                height: '28px',
                backgroundColor: '#e31e24',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-3px',
                left: '-3px',
                width: '28px',
                height: '28px',
                backgroundColor: '#e31e24',
              }}
            />
            <span
              style={{
                display: 'block',
                fontSize: '72px',
                fontWeight: '800',
                color: '#1a1a1a',
                lineHeight: 1,
                marginBottom: '6px',
              }}
            >
              35
            </span>
            <span
              style={{
                display: 'block',
                fontSize: '12px',
                fontWeight: '500',
                color: '#555',
                lineHeight: 1.5,
              }}
            >
              Years of<br />solving HR<br />challenges
            </span>
          </div>
        </div>

        {/* ── Middle: Since 1991 ── */}
        <div>
          <p
            style={{
              color: '#e31e24',
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '1px',
              marginBottom: '16px',
            }}
          >
            SINCE 1991
          </p>
          <h2
            style={{
              fontSize: '22px',
              fontWeight: '700',
              color: '#1a1a1a',
              lineHeight: 1.45,
            }}
          >
            India's first and largest,<br />
            end-to-end, talent<br />
            supply chain group
          </h2>
        </div>

        {/* ── Right: Description ── */}
        <div>
          <p
            style={{
              fontSize: '14px',
              color: '#555',
              lineHeight: 1.9,
              marginBottom: '24px',
            }}
          >
            Since 1991, TMI Network is a pioneer in Executive Search and
            Contingency hiring and was the founder member of the Executive
            Recruiters Association. Today, it is a national leader in large
            scale hiring of frontline workforce, middle to senior level talent
            and Next Gen Flexi-staffing solutions across multiple sectors
            including Manufacturing, BFSI, Consumer Goods, Retail &amp; IT.
          </p>
          <a
            href="#"
            style={{
              fontSize: '12px',
              fontWeight: '700',
              color: '#1a1a1a',
              letterSpacing: '1.5px',
              borderBottom: '2px solid #e31e24',
              paddingBottom: '2px',
              display: 'inline-block',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = '#e31e24')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = '#1a1a1a')
            }
          >
            TMI Group Companies
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}

export default About
