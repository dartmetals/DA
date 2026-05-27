import React, { useState, useEffect, useRef } from 'react'

/* ══════════════════════════════════════════════════════
   SHARED PRIMITIVES
══════════════════════════════════════════════════════ */
const RED = '#e31e24'
const BLUE = '#2563eb'
const BLUE_DARK = '#1e3a8a'
const BLUE_LIGHT = '#dbeafe'
const DARK = '#1a1a1a'

/* ══════════════════════════════════════════════════════
   ANIMATED HERO BANNER
   Cycles through blue shades light→dark every 3-4s
   with a smooth animated particle/network overlay
══════════════════════════════════════════════════════ */

// 8 blue gradient phases: pale sky → royal → navy → midnight
const BLUE_PHASES = [
  { from: '#a8d8f0', to: '#3b82f6' },   // pale → blue
  { from: '#3b82f6', to: '#1e40af' },   // blue → indigo
  { from: '#1e40af', to: '#1e3a8a' },   // indigo → navy
  { from: '#1e3a8a', to: '#0c1f4a' },   // navy → midnight
  { from: '#0c1f4a', to: '#172554' },   // midnight → deep navy
  { from: '#172554', to: '#1d4ed8' },   // deep navy → royal
  { from: '#1d4ed8', to: '#60a5fa' },   // royal → light blue
  { from: '#60a5fa', to: '#a8d8f0' },   // light → pale (loop)
]

interface Particle {
  x: number; y: number; vx: number; vy: number;
  r: number; opacity: number; type: 'dot' | 'person' | 'pin' | 'chart'
}

const ItalicScript: React.FC<{ children: React.ReactNode; size?: string; color?: string }> = ({
  children, size = '48px', color = '#fff'
}) => (
  <span style={{
    fontFamily: "'Georgia','Times New Roman',serif",
    fontStyle: 'italic', fontWeight: '700',
    fontSize: size, color, lineHeight: 1.2,
  }}>{children}</span>
)

const HeroBanner: React.FC = () => {
  const [phaseIdx, setPhaseIdx] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animFrameRef = useRef<number>(0)
  
  // State for responsive layout
  const [isMobile, setIsMobile] = useState(false)
  const [_isTablet, setIsTablet] = useState(false)

  // Check screen size for responsive layout
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  /* ── Colour cycling ── */
  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true)
      setTimeout(() => {
        setPhaseIdx(i => (i + 1) % BLUE_PHASES.length)
        setTransitioning(false)
      }, 600)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  /* ── Canvas particle network ── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const W = canvas.offsetWidth
    const H = canvas.offsetHeight
    canvas.width = W
    canvas.height = H

    // init particles
    const count = 28
    particlesRef.current = Array.from({ length: count }, (_, ) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: 2.5 + Math.random() * 2,
      opacity: 0.5 + Math.random() * 0.5,
      type: (['dot', 'dot', 'dot', 'dot', 'person', 'pin', 'chart'] as const)[
        Math.floor(Math.random() * 7)
      ],
    }))

    const drawPerson = (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
      ctx.beginPath()
      ctx.arc(x, y - s * 1.4, s * 0.7, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(x - s * 0.8, y + s * 1.2)
      ctx.quadraticCurveTo(x, y - s * 0.2, x + s * 0.8, y + s * 1.2)
      ctx.fill()
    }

    const drawPin = (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
      ctx.beginPath()
      ctx.arc(x, y - s, s * 0.9, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(x - s * 0.4, y - s * 0.2)
      ctx.lineTo(x, y + s * 1.2)
      ctx.lineTo(x + s * 0.4, y - s * 0.2)
      ctx.fill()
    }

    const drawChart = (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
      ;[[0, 0], [s * 1.2, -s * 0.6], [s * 2.4, -s * 1.4], [s * 3.6, -s * 0.8]].forEach(
        ([dx, dy], i, arr) => {
          if (i === 0) return
          const [px, py] = arr[i - 1]
          ctx.beginPath()
          ctx.moveTo(x + px, y + py)
          ctx.lineTo(x + dx, y + dy)
          ctx.strokeStyle = ctx.fillStyle as string
          ctx.lineWidth = 1.5
          ctx.stroke()
          ctx.beginPath()
          ctx.arc(x + dx, y + dy, s * 0.35, 0, Math.PI * 2)
          ctx.fill()
        }
      )
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const pts = particlesRef.current

      // draw connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(255,255,255,${0.18 * (1 - dist / 130)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // draw particles
      pts.forEach(p => {
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`
        if (p.type === 'dot') {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
          ctx.fill()
        } else if (p.type === 'person') {
          drawPerson(ctx, p.x, p.y, p.r)
        } else if (p.type === 'pin') {
          drawPin(ctx, p.x, p.y, p.r)
        } else {
          drawChart(ctx, p.x, p.y, p.r * 0.7)
        }

        // move
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
      })

      animFrameRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animFrameRef.current)
  }, [])

  const phase = BLUE_PHASES[phaseIdx]

  return (
    <div style={{
      position: 'relative',
      minHeight: isMobile ? '400px' : '480px',
      overflow: 'hidden',
      transition: 'background 1.2s ease',
      background: transitioning
        ? `linear-gradient(135deg, ${BLUE_PHASES[(phaseIdx + 1) % BLUE_PHASES.length].from}, ${BLUE_PHASES[(phaseIdx + 1) % BLUE_PHASES.length].to})`
        : `linear-gradient(135deg, ${phase.from}, ${phase.to})`,
      display: 'flex',
      alignItems: 'stretch',
    }}>
      {/* Animated canvas overlay */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}
      />

      {/* Pulsing ring decorations */}
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          position: 'absolute',
          right: `${-40 + i * 100}px`,
          top: '50%',
          transform: 'translateY(-50%)',
          width: `${300 + i * 120}px`,
          height: `${300 + i * 120}px`,
          borderRadius: '50%',
          border: `1px solid rgba(255,255,255,${0.06 + i * 0.04})`,
          animation: `pulse-ring ${3 + i}s ease-in-out infinite`,
          animationDelay: `${i * 0.8}s`,
        }} />
      ))}

      {/* Dot grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.07, zIndex: 2,
        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
        backgroundSize: '26px 26px',
      }}/>

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        maxWidth: '1200px', margin: '0 auto', padding: '0 40px',
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        minHeight: isMobile ? '400px' : '480px',
      }}>
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <ItalicScript size={isMobile ? "clamp(28px,5vw,38px)" : "clamp(38px,5vw,64px)"}>
            Make your career happen with us
          </ItalicScript>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: isMobile ? '12px' : '14px', lineHeight: 1.8, marginTop: '24px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
            As India's leading talent solutions provider, our values range from our love to large enterprises to our resolve to make a difference. We strongly believe that a diverse workforce is essential for future growth and innovation — and that calls for passionate people like you.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: isMobile ? '13px' : '14.5px', fontWeight: '600', marginTop: '20px', lineHeight: 1.7 }}>
            Are you passionate, driven and want to make your mark in the recruitment space?
          </p>
          <a href="#" style={{
            display: 'inline-block', marginTop: '28px',
            backgroundColor: '#fff', color: RED,
            padding: isMobile ? '10px 24px' : '12px 32px',
            borderRadius: '4px',
            fontSize: '13px', fontWeight: '700', letterSpacing: '1px',
            transition: 'all 0.25s ease',
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = RED; el.style.color = '#fff' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = '#fff'; el.style.color = RED }}
          >
            EXPLORE OPENINGS →
          </a>
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0%, 100% { transform: translateY(-50%) scale(1); opacity: 0.5; }
          50%       { transform: translateY(-50%) scale(1.04); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

/* icon wrappers */
const Circle: React.FC<{ size?: number; bg?: string; children: React.ReactNode }> = ({
  size = 70, bg = BLUE, children
}) => (
  <div style={{
    width: size, height: size, borderRadius: '50%',
    backgroundColor: bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  }}>{children}</div>
)

const RedBar = () => <div style={{ width: '44px', height: '3px', backgroundColor: RED, margin: '14px 0 22px' }} />

const Tag: React.FC<{ text: string }> = ({ text }) => (
  <p style={{ fontSize: '11.5px', fontWeight: '700', color: RED, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>{text}</p>
)

/* ── SVG icon library (updated to blue theme) ── */
const I = {
  enterprise: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M4 28V10l12-6 12 6v18H4z" stroke="#fff" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      <rect x="12" y="18" width="8" height="10" stroke="#fff" strokeWidth="1.5" fill="none"/>
      <path d="M8 14h3M21 14h3M8 20h2M22 20h2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  advisor: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="10" r="6" stroke="#fff" strokeWidth="2" fill="none"/>
      <circle cx="6" cy="11" r="4" stroke="#fff" strokeWidth="1.5" fill="none"/>
      <circle cx="26" cy="11" r="4" stroke="#fff" strokeWidth="1.5" fill="none"/>
      <path d="M2 28c0-4 2-7 6-8M24 20c4 1 6 4 6 8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 28c0-5 4.5-9 10-9s10 4 10 9" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  candidate: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="10" r="7" stroke="#fff" strokeWidth="2" fill="none"/>
      <path d="M2 30c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M20 16l3 3-3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  star: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 3l2.8 5.6 6.2.9-4.5 4.4 1.1 6.2L14 17l-5.6 3.1 1.1-6.2L5 9.5l6.2-.9z" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
    </svg>
  ),
  growth: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 22l6-8 5 4 8-12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="4" cy="22" r="2" fill="#fff"/>
      <circle cx="10" cy="14" r="2" fill="#fff"/>
      <circle cx="15" cy="18" r="2" fill="#fff"/>
      <circle cx="23" cy="6" r="2" fill="#fff"/>
    </svg>
  ),
  learning: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4l12 6-12 6L2 10z" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
      <path d="M6 13v7c0 0 3.5 4 8 4s8-4 8-4v-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  team: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="10" cy="9" r="4.5" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <circle cx="20" cy="9" r="4.5" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <path d="M2 26c0-4.4 3.6-8 8-8M18 18c4.4 0 8 3.6 8 8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M13 18.5c1.7 0 3 1.3 3 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  award: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="11" r="8" stroke="#fff" strokeWidth="2" fill="none"/>
      <path d="M9 18l-3 8 8-4 8 4-3-8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 11l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  women: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="9" r="6" stroke="#fff" strokeWidth="2" fill="none"/>
      <path d="M14 15v8M10 20h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  appraisal: (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <rect x="4" y="4" width="22" height="22" rx="3" stroke="#fff" strokeWidth="2" fill="none"/>
      <path d="M9 15l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  schedule: (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <circle cx="15" cy="15" r="11" stroke="#fff" strokeWidth="2" fill="none"/>
      <path d="M15 8v7l5 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  insurance: (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M15 4L5 8v8c0 6 5 10 10 12 5-2 10-6 10-12V8z" stroke="#fff" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      <path d="M11 15l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  cafeteria: (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M6 10h18v2a9 9 0 0 1-18 0v-2z" stroke="#fff" strokeWidth="2" fill="none"/>
      <path d="M15 22v4M11 26h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      <path d="M22 6v6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  transport: (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <rect x="3" y="10" width="24" height="14" rx="3" stroke="#fff" strokeWidth="2" fill="none"/>
      <path d="M3 16h24M10 24v2M20 24v2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="9" cy="21" r="2" stroke="#fff" strokeWidth="1.5"/>
      <circle cx="21" cy="21" r="2" stroke="#fff" strokeWidth="1.5"/>
    </svg>
  ),
  campus: (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M5 26V14l10-8 10 8v12H5z" stroke="#fff" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      <rect x="11" y="18" width="8" height="8" stroke="#fff" strokeWidth="1.5" fill="none"/>
      <path d="M11 10h8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  culture: (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <circle cx="10" cy="10" r="4" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <circle cx="20" cy="10" r="4" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <circle cx="15" cy="20" r="4" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <line x1="14" y1="10" x2="16" y2="10" stroke="#fff" strokeWidth="1.5"/>
      <line x1="12" y1="16" x2="11" y2="14" stroke="#fff" strokeWidth="1.5"/>
      <line x1="18" y1="16" x2="19" y2="14" stroke="#fff" strokeWidth="1.5"/>
    </svg>
  ),
  awards2: (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M15 4l2.5 5 5.5.8-4 3.9 1 5.5L15 16.5 10 19.2l1-5.5-4-3.9 5.5-.8z" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
      <path d="M10 22v4M20 22v4M8 26h14" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  check: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill={RED}/>
      <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  target: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="11" stroke="#fff" strokeWidth="2" fill="none"/>
      <circle cx="14" cy="14" r="6" stroke="#fff" strokeWidth="1.5" fill="none"/>
      <circle cx="14" cy="14" r="2" fill="#fff"/>
    </svg>
  ),
  rocket: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4c6 0 10 8 10 12l-5 2-5 5-2-5C8 18 4 14 4 14c4 0 10-4 10-10z" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
      <circle cx="17" cy="11" r="2" stroke="#fff" strokeWidth="1.5"/>
      <path d="M6 22l-2 4 4-2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  diversity: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="8" cy="9" r="3.5" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <circle cx="20" cy="9" r="3.5" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <circle cx="14" cy="20" r="3.5" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <path d="M11 12.5c1 1 3 1 6 0M10.5 13.5L12 18M17.5 13.5L16 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  ldel: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="5" width="22" height="16" rx="2" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <path d="M10 21v4M18 21v4M7 25h14" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M8 13l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
}

/* ══════════════════════════════════════════════════════
   SECTION 2 — WHY JOIN US STATS
══════════════════════════════════════════════════════ */
const WhyJoinStats: React.FC = () => {
  // State for responsive layout
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const stats = [
    { icon: I.enterprise, num: '100K+', label: 'enterprises served,\nof which 50 are F500 companies' },
    { icon: I.advisor, num: '3000+', label: 'domain advisors have\nengaged with us' },
    { icon: I.candidate, num: '5M+', label: 'We have a talent network of\n5M+ candidates across domains, expertise and experience levels' },
  ]

  const getWhyJoinStatsGridStyle = (): React.CSSProperties => {
    if (isMobile) return { display: 'grid', gridTemplateColumns: '1fr', gap: '30px' } as React.CSSProperties
    if (isTablet) return { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '30px' } as React.CSSProperties
    return { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '30px' } as React.CSSProperties
  }

  return (
    <div style={{ backgroundColor: '#fff', padding: '70px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: '700', color: DARK, textAlign: 'center', marginBottom: '14px' }}>
          Why should you <span style={{ fontFamily: "'Georgia','Times New Roman',serif", fontStyle: 'italic', fontWeight: '700', color: RED }}>join us?</span>
        </h2>
        <div style={{ width: '50px', height: '3px', backgroundColor: RED, margin: '0 auto 50px' }}/>

        <div style={getWhyJoinStatsGridStyle()}>
          {stats.map((s, i) => (
            <div key={i} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
              padding: '36px 24px', border: '1px solid #ebebeb', borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              transition: 'box-shadow 0.3s, transform 0.3s',
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 8px 32px rgba(37,99,235,0.14)'; el.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)'; el.style.transform = 'translateY(0)' }}
            >
              <Circle size={76}>{s.icon}</Circle>
              <div style={{ fontSize: '38px', fontWeight: '800', color: BLUE, marginTop: '18px', lineHeight: 1 }}>{s.num}</div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.7, marginTop: '10px', whiteSpace: 'pre-line' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   SECTION 3 — EMPLOYEES FIRST
══════════════════════════════════════════════════════ */
const EmployeesFirst: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const getEmployeesFirstGridStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) return { display: 'grid', gridTemplateColumns: '1fr', gap: '30px' } as React.CSSProperties
    return { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' } as React.CSSProperties
  }

  return (
    <div style={{ backgroundColor: '#fafafa', padding: '70px 0', borderTop: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <h2 style={{ fontSize: isMobile ? '26px' : '30px', fontWeight: '700', color: DARK, marginBottom: '8px' }}>Employees first</h2>
        <RedBar/>
        <div style={getEmployeesFirstGridStyle()}>
          <div>
            <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9, marginBottom: '16px' }}>
              Our company's successful rise of over two decades is based on attributes that we value: trust, empathy, and approachability. Our culture matters. Trust, arriving in the workplace comes before arriving in the marketplace. That's why every employee is encouraged to achieve their full potential, to strive out of the box, take calculated risks and grow beyond their core roles.
            </p>
            <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9 }}>
              We create equal opportunities for career building — both to serve our employees and our clients first organisation. To facilitate this, our HR professionals and employees work towards maintaining a motivated, inclusive and effective workforce.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: DARK, marginBottom: '16px' }}>Going the extra mile — with trust, integrity and tenacity</h3>
            <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9, marginBottom: '14px' }}>
              Our vision — to create connectivity by incorporating technology and human-influenced capital to offer innovative recruitment solutions. We may be in our second decade as an organisation, but from Day One, to today and beyond, Talent and People have always been core. Our focus on best-in-class relationships and delivering value to all clients.
            </p>
            <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9 }}>
              At our company, we believe in Commitment — it is our foundation. We've recognised and been recognised as one that has become better over every decade. Through the years, we are proud to say that there are people who have made our company what it is today. We aim to also enable a balanced culture that genuinely allows everyone to build a fulfilling career. At the end of the day, that is what matters most.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   SECTION 4 — L&D CIRCULAR IMAGE + FEATURES
══════════════════════════════════════════════════════ */
const LandDSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const getLandDTopGridStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) return { display: 'flex', flexDirection: 'column' as const, gap: '40px', alignItems: 'center', marginBottom: '60px' }
    return { display: 'grid', gridTemplateColumns: '380px 1fr', gap: '60px', alignItems: 'center', marginBottom: '60px' }
  }

  const getLandDFeaturesGridStyle = (): React.CSSProperties => {
    if (isMobile) return { display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginTop: '8px' }
    if (isTablet) return { display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginTop: '8px' }
    return { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '8px' }
  }

  const getLandDCardsGridStyle = (): React.CSSProperties => {
    if (isMobile) return { display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }
    if (isTablet) return { display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '20px' }
    return { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }
  }

  const getLandDNewEmployeesGridStyle = (): React.CSSProperties => {
    if (isMobile) return { display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }
    if (isTablet) return { display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '10px 30px' }
    return { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 30px' }
  }

  return (
    <div style={{ backgroundColor: '#fafafa', padding: '70px 0', borderTop: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        {/* Top: circular image + text */}
        <div style={getLandDTopGridStyle()}>
          {/* Circular image */}
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                width: isMobile ? '260px' : '320px',
                height: isMobile ? '260px' : '320px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DARK} 100%)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden', boxShadow: '0 16px 50px rgba(37,99,235,0.3)',
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop"
                  alt="Team collaboration and learning"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                />
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'rgba(30,58,138,0.5)', 
                  zIndex: 1 
                }} />
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  textAlign: 'center', 
                  padding: '30px',
                  zIndex: 2,
                }}>
                  <ItalicScript size={isMobile ? "18px" : "22px"} color="#ffffff">Making<br />career growth<br />happen</ItalicScript>
                </div>
              </div>
            </div>
          </div>

          {/* Right text */}
          <div style={{ width: '100%' }}>
            <Tag text="Learning & Development" />
            <h2 style={{ fontSize: isMobile ? '22px' : '26px', fontWeight: '700', color: DARK, lineHeight: 1.4, marginBottom: '8px', textAlign: isMobile || isTablet ? 'center' : 'left' }}>
              Our company has a dedicated L&D team<br />in place that aims to:
            </h2>
            <RedBar/>
            <div style={getLandDFeaturesGridStyle()}>
              {[
                { icon: I.ldel, title: 'Deliver structured L&D', desc: 'Performance driven blended learning using consistent experience and agility/knowledge.' },
                { icon: I.target, title: 'Identify development opportunities', desc: 'Building a strong, consistent learning culture within the organisation.' },
                { icon: I.growth, title: 'Upskilling through various learning initiatives', desc: 'Enabling and empowering employees to understand their responsibilities.' },
                { icon: I.rocket, title: 'Building employee confidence', desc: 'Sensitising employees to be an equal partner in its success and growth.' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <Circle size={52}>{c.icon}</Circle>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: '700', color: DARK, marginBottom: '6px', lineHeight: 1.35 }}>{c.title}</h4>
                    <p style={{ fontSize: '12.5px', color: '#666', lineHeight: 1.7 }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* L&D function cards */}
        <h3 style={{ fontSize: isMobile ? '18px' : '20px', fontWeight: '700', color: DARK, marginBottom: '28px', textAlign: isMobile || isTablet ? 'center' : 'left' }}>
          Our L&D function plays a significant role in the organisation by:
        </h3>
        <div style={getLandDCardsGridStyle()}>
          {[
            { icon: I.learning, text: 'Spotlighting through various learning initiatives in-person real-time' },
            { icon: I.team, text: 'Enabling employees to understand their responsibilities effectively' },
            { icon: I.award, text: 'Sensitising employees to take pride in its success and growth' },
            { icon: I.star, text: 'Building employee confidence through skills development programs' },
            { icon: I.rocket, text: 'Providing a wide spectrum of learning paths for all talent levels' },
            { icon: I.diversity, text: 'Creating an inclusive learning culture across the entire workforce' },
          ].map((c, i) => (
            <div key={i} style={{
              display: 'flex', gap: '14px', alignItems: 'flex-start',
              padding: '18px', border: '1px solid #ebebeb', borderRadius: '6px',
              backgroundColor: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}>
              <Circle size={48}>{c.icon}</Circle>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.7 }}>{c.text}</p>
            </div>
          ))}
        </div>

        {/* L&D new employees */}
        <div style={{ marginTop: '40px', backgroundColor: BLUE_LIGHT, border: `1px solid ${BLUE}`, borderRadius: '8px', padding: isMobile ? '20px' : '28px 32px' }}>
          <p style={{ fontSize: '14px', fontWeight: '600', color: DARK, marginBottom: '16px' }}>
            We offer multiple ongoing L&D programmes and initiatives, many of which are designed especially for new employees:
          </p>
          <div style={getLandDNewEmployeesGridStyle()}>
            {[
              'Onboarding programs for new recruiters',
              'Induction programs for Freshers across talent functions',
              'Training programs for lateral employees across functional domains, candidates level, and data management tools',
              'Organizational level compliance initiatives',
              'People Awareness Initiatives',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                {I.check}
                <span style={{ fontSize: '13px', color: '#555', lineHeight: 1.65 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   SECTION 5 — EMPLOYEE BENEFITS
══════════════════════════════════════════════════════ */
const BenefitsSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const benefits = [
    { icon: I.appraisal, title: 'Appraisal', desc: 'Performance appraisals done on a bi-annual cycle' },
    { icon: I.schedule, title: 'Work schedule', desc: 'Flexitime of every week for a work-life balance' },
    { icon: I.insurance, title: 'Insurance coverage', desc: 'Health insurance for employees and their families and Accident Policy' },
    { icon: I.cafeteria, title: 'Cafeteria', desc: 'Good and readily available wholesome food on campus' },
    { icon: I.transport, title: 'Transport', desc: 'Cab services for early morning departures. Subject to terms and conditions' },
    { icon: I.campus, title: 'Campus', desc: 'State-of-the-art campus starting from 80 sq. ft. to 1,000 sq. ft.' },
    { icon: I.culture, title: 'Cultural Committee', desc: 'Vibrant Cultural Committee events, activities, and team-building programs' },
    { icon: I.awards2, title: 'Awards', desc: 'Weekly, Fortnightly, monthly awards Quarterly, Annual Performance/Level Bonus' },
  ]

  const getBenefitsGridStyle = (): React.CSSProperties => {
    if (isMobile) return { display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginTop: '12px' }
    if (isTablet) return { display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '24px', marginTop: '12px' }
    return { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px', marginTop: '12px' }
  }

  return (
    <div style={{ backgroundColor: '#fff', padding: '70px 0', borderTop: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <h2 style={{ fontSize: isMobile ? '22px' : '26px', fontWeight: '700', color: DARK, marginBottom: '8px', textAlign: isMobile || isTablet ? 'center' : 'left' }}>
          Making the good life happen — <ItalicScript size={isMobile ? "22px" : "26px"} color={RED}>employee benefits</ItalicScript>
        </h2>
        <RedBar/>
        <div style={getBenefitsGridStyle()}>
          {benefits.map((b, i) => (
            <div key={i} style={{
              border: '1px solid #ebebeb', borderRadius: '8px', padding: '28px 22px',
              display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '14px',
              backgroundColor: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              transition: 'all 0.3s ease', cursor: 'default',
            }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = '0 8px 28px rgba(37,99,235,0.16)'
                el.style.borderColor = BLUE
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'
                el.style.borderColor = '#ebebeb'
                el.style.transform = 'translateY(0)'
              }}
            >
              <Circle size={60}>{b.icon}</Circle>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: DARK }}>{b.title}</h4>
              <p style={{ fontSize: '12.5px', color: '#666', lineHeight: 1.7 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   SECTION 6 — LEADING FROM THE FRONT
══════════════════════════════════════════════════════ */
const LeadingSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const getLeadingGridStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) return { display: 'flex', flexDirection: 'column' as const, gap: '40px', alignItems: 'center' }
    return { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }
  }

  return (
    <div style={{ backgroundColor: '#fafafa', padding: '70px 0', borderTop: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <h2 style={{ fontSize: isMobile ? '24px' : '26px', fontWeight: '700', color: DARK, marginBottom: '8px', textAlign: isMobile || isTablet ? 'center' : 'left' }}>Leading from the front</h2>
        <RedBar/>
        <div style={getLeadingGridStyle()}>
          <div>
            <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9, marginBottom: '14px' }}>
              The leaders at our company push us from our current selves to professional qualifications and extensive industry expertise. What our founders created nearly two decades ago, is echoed back in everything that our company produces today. The in-depth dedication and focus on thinking. The single-mindedness and concentration that the team brings to the table has enabled far-reaching advances in our recruitment category and has allowed us to focus on producing consistently relevant results to be in the client's business, developing top-of-the-line recruitment models and providing unparalleled value in our understanding of recruitment.
            </p>
            <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9, marginBottom: '20px' }}>
              We are currently hiring professionals with <span style={{ color: RED, fontWeight: '600' }}>6+ years</span> of experience in talent acquisition, of which <span style={{ color: RED, fontWeight: '600' }}>4+ years</span> of relevant experience as industry advisors well beyond.
            </p>
            <p style={{ fontSize: '14px', fontWeight: '600', color: DARK }}>
              Does the prospect of working with <em style={{ color: RED }}>India's leading talent solutions provider</em> excite you?
            </p>
            <a href="#" style={{
              display: 'inline-block', marginTop: '22px',
              backgroundColor: RED, color: '#fff',
              padding: '12px 32px', borderRadius: '4px',
              fontSize: '13px', fontWeight: '700', letterSpacing: '1px',
              transition: 'background-color 0.25s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#c01820' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = RED }}
            >
              JOIN US →
            </a>
          </div>
          {/* Stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '20px' }}>
            {[
              { num: '24+', label: 'Years of Industry\nExperience', icon: I.star },
              { num: '2500+', label: 'Talent Advisors\nAcross India', icon: I.advisor },
              { num: '400+', label: 'Corporate Clients\nServed', icon: I.enterprise },
              { num: '5M+', label: 'Candidate Network\nGlobally', icon: I.candidate },
            ].map((s, i) => (
              <div key={i} style={{
                backgroundColor: '#fff', border: '1px solid #ebebeb', borderRadius: '8px',
                padding: '26px 20px', textAlign: 'center',
                boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
              }}>
                <Circle size={50}>{s.icon}</Circle>
                <div style={{ fontSize: '32px', fontWeight: '800', color: BLUE, margin: '12px 0 4px' }}>{s.num}</div>
                <p style={{ fontSize: '12.5px', color: '#666', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   SECTION 7 — CAREER BREAK
══════════════════════════════════════════════════════ */
const CareerBreakSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const getCareerBreakContentGridStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) return { padding: '36px', display: 'flex', flexDirection: 'column' as const, gap: '30px', alignItems: 'center' }
    return { padding: '36px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }
  }

  return (
    <div style={{ backgroundColor: '#fff', padding: '70px 0', borderTop: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ backgroundColor: BLUE_LIGHT, border: `1px solid ${BLUE}`, borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ backgroundColor: RED, padding: isMobile ? '20px 24px' : '24px 36px' }}>
            <h2 style={{ fontSize: isMobile ? '18px' : '22px', fontWeight: '700', color: '#fff', textAlign: 'center' }}>
              Getting back into the groove after a career break
            </h2>
          </div>
          <div style={getCareerBreakContentGridStyle()}>
            <div>
              <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9, marginBottom: '16px' }}>
                It is increasingly common for professionals to take a career break — to spend time with family, for personal reasons, or to pursue education. At our company, we make it easy for professionals who have been through career breaks to rejoin the workforce. We offer a special induction programme and structured onboarding for return professionals.
              </p>
              <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9, marginBottom: '22px' }}>
                Through our structured onboarding for reboarding candidates, we help professionals re-enter the industry with confidence and ease — providing them tools, mentors, and peer networks to get back up to speed.
              </p>
              <a href="#" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                border: `2px solid ${RED}`, color: RED,
                padding: '11px 26px', borderRadius: '4px',
                fontSize: '13px', fontWeight: '700', letterSpacing: '1px',
                transition: 'all 0.25s',
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = RED; el.style.color = '#fff' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'transparent'; el.style.color = RED }}
              >
                KNOW MORE →
              </a>
            </div>
            {/* Feature list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: I.learning, text: 'A Return-to-Work programme for returners' },
                { icon: I.team, text: 'Dedicated onboarding for freshers and recruiters' },
                { icon: I.ldel, text: 'Training programmes for lateral employees across business domains' },
                { icon: I.target, text: 'Organisational-level compliance initiatives' },
                { icon: I.diversity, text: 'People Awareness Initiatives' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <Circle size={48}>{item.icon}</Circle>
                  <span style={{ fontSize: '13.5px', color: '#444', lineHeight: 1.6 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   SECTION 8 — DIVERSITY & INCLUSION
══════════════════════════════════════════════════════ */
const DiversitySection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const getDiversityGridStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) return { display: 'flex', flexDirection: 'column' as const, gap: '40px', alignItems: 'center' }
    return { display: 'grid', gridTemplateColumns: '320px 1fr', gap: '60px', alignItems: 'center' }
  }

  return (
    <div style={{ backgroundColor: '#fafafa', padding: '70px 0', borderTop: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div style={getDiversityGridStyle()}>
          {/* Circular visual */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: isMobile ? '220px' : '280px',
              height: isMobile ? '220px' : '280px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DARK})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 12px 40px rgba(37,99,235,0.25)', textAlign: 'center', padding: '32px',
            }}>
              <ItalicScript size={isMobile ? "18px" : "22px"}>Making<br />workplaces<br />diverse,<br />equitable<br />&amp; inclusive</ItalicScript>
            </div>
          </div>

          {/* Content */}
          <div>
            <Tag text="Diversity, Equity & Inclusion" />
            <h2 style={{ fontSize: isMobile ? '22px' : '26px', fontWeight: '700', color: DARK, lineHeight: 1.4, marginBottom: '8px', textAlign: isMobile || isTablet ? 'center' : 'left' }}>
              Making workplaces diverse,<br />equitable and inclusive
            </h2>
            <RedBar/>
            <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9, marginBottom: '16px', textAlign: isMobile || isTablet ? 'center' : 'left' }}>
              We strongly believe that a truly inclusive and equitable workplace is essential for organizational growth. Our company puts this into practice by removing unconscious biases from our processes, providing tools and networks to hone their skills and advocating innovative thinking.
            </p>
            <p style={{ fontSize: '13.5px', color: '#555', lineHeight: 1.9, marginBottom: '16px', textAlign: isMobile || isTablet ? 'center' : 'left' }}>
              Do you believe in a workplace that prioritizes diversity, equity and inclusion? We want you to be part of this movement. Our Equal Opportunities policy makes certain that each employee, regardless of their background, gets a fair opportunity to contribute and grow.
            </p>
            <p style={{ fontSize: '14.5px', fontWeight: '700', color: DARK, textAlign: isMobile || isTablet ? 'center' : 'left' }}>
              Does this sound like a workplace that <em style={{ color: RED }}>you would like to be a part of?</em>
            </p>
            <div style={{ textAlign: isMobile || isTablet ? 'center' : 'left' }}>
              <a href="#" style={{
                display: 'inline-block', marginTop: '22px',
                backgroundColor: RED, color: '#fff',
                padding: '12px 32px', borderRadius: '4px',
                fontSize: '13px', fontWeight: '700', letterSpacing: '1px',
                transition: 'background-color 0.25s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#c01820' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = RED }}
              >
                JOIN US →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   MAIN JOIN US PAGE
══════════════════════════════════════════════════════ */
const JoinUs: React.FC = () => (
  <div style={{ paddingTop: '68px', fontFamily: "'Poppins', sans-serif" }}>
    <HeroBanner />
    <WhyJoinStats />
    <EmployeesFirst />
    <LandDSection />
    <BenefitsSection />
    <LeadingSection />
    <CareerBreakSection />
    <DiversitySection />
  </div>
)

export default JoinUs