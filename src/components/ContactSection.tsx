import React, { useState, useEffect, useRef } from 'react'

/* ══════════════════════════════════════════════════════
   THEME
══════════════════════════════════════════════════════ */
const RED = '#e31e24'
const DARK = '#1a1a1a'
const GRAY = '#666666'
const FONT = "'Poppins', sans-serif"

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

const HeroBanner: React.FC = () => {
  const [phaseIdx, setPhaseIdx] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animFrameRef = useRef<number>(0)

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
      height: '300px',
      overflow: 'hidden',
      transition: 'background 1.2s ease',
      background: transitioning
        ? `linear-gradient(120deg, ${BLUE_PHASES[(phaseIdx + 1) % BLUE_PHASES.length].from}, ${BLUE_PHASES[(phaseIdx + 1) % BLUE_PHASES.length].to})`
        : `linear-gradient(120deg, ${phase.from}, ${phase.to})`,
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

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 40px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '0' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', textDecoration: 'underline', cursor: 'pointer' }}>Home</a>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>»</span>
          <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px' }}>Contact Us</span>
        </div>
        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(38px, 6vw, 60px)',
          fontWeight: '700',
          color: '#ffffff',
          lineHeight: 1.15,
          marginBottom: '18px',
          textShadow: '0 2px 20px rgba(0,0,0,0.2)',
        }}>
          Contact Us
        </h1>
        {/* Red bar accent */}
        <div style={{ display: 'flex', gap: '6px', marginBottom: '0', paddingBottom: '40px' }}>
          <div style={{ width: '40px', height: '3px', backgroundColor: RED }} />
          <div style={{ width: '14px', height: '3px', backgroundColor: 'rgba(255,255,255,0.4)' }} />
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0%, 100% { transform: translateY(-50%) scale(1); opacity: 0.5; }
          50%       { transform: translateY(-50%) scale(1.04); opacity: 1; }
        }
        @keyframes float-up {
          0%   { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   INFO CARDS
══════════════════════════════════════════════════════ */

/* Red circle icon badge */
const RedIconBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{
    width: '48px', height: '48px', borderRadius: '50%',
    backgroundColor: RED, display: 'flex', alignItems: 'center',
    justifyContent: 'center', flexShrink: 0,
    boxShadow: '0 4px 16px rgba(227,30,36,0.3)',
  }}>
    {children}
  </div>
)

const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="2" y="4" width="18" height="14" rx="2.5" stroke="#fff" strokeWidth="1.8" fill="none"/>
    <path d="M2 7l9 6 9-6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M3 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L14 13l5 2v4c-9 1.5-17-6.5-16-16z"
      stroke="#fff" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
  </svg>
)

const MapPinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S4 14.25 4 9a7 7 0 0 1 7-7z"
      stroke="#fff" strokeWidth="1.8" fill="none"/>
    <circle cx="11" cy="9" r="2.5" stroke="#fff" strokeWidth="1.8" fill="none"/>
  </svg>
)

const InfoCards: React.FC = () => {
  const cards = [
    {
      icon: <EmailIcon />,
      title: 'Email Address',
      content: (
        <a href="mailto:recruiter@tminetwork.com" style={{ color: RED, fontSize: '14px', fontWeight: '500', textDecoration: 'none' }}>
          recruiter@tminetwork.com
        </a>
      ),
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone Number',
      content: (
        <a href="tel:04066765000" style={{ color: RED, fontSize: '14px', fontWeight: '500', textDecoration: 'none' }}>
          040-6676 5000
        </a>
      ),
    },
    {
      icon: <MapPinIcon />,
      title: 'Head Office',
      content: (
        <p style={{ fontSize: '13.5px', color: '#444', lineHeight: 1.75, margin: 0 }}>
          London<br/>
297, Suite 2, High Street North, London, E12 6SL
        </p>
      ),
    },
  ]

  return (
    <div style={{
      maxWidth: '1200px', margin: '0 auto', padding: '0 40px',
      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px', marginTop: '-56px', position: 'relative', zIndex: 10,
    }}>
      {cards.map((card, i) => (
        <div key={i} style={{
          backgroundColor: '#ffffff',
          border: '1px solid #ebebeb',
          borderRadius: '6px',
          padding: '28px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '18px',
          boxShadow: '0 6px 28px rgba(0,0,0,0.08)',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = 'translateY(-4px)'
            el.style.boxShadow = '0 12px 36px rgba(227,30,36,0.14)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = 'translateY(0)'
            el.style.boxShadow = '0 6px 28px rgba(0,0,0,0.08)'
          }}
        >
          {/* Left: icon badge */}
          <RedIconBadge>{card.icon}</RedIconBadge>
          {/* Right: content */}
          <div>
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: DARK, marginBottom: '8px' }}>
              {card.title}
            </h3>
            {card.content}
          </div>
        </div>
      ))}
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   ANIMATED CONTACT CARDS SECTION
   (pulsing blue-themed cards behind the map+form area)
══════════════════════════════════════════════════════ */
const AnimatedContactSection: React.FC = () => {
  const [animPhase, setAnimPhase] = useState(0)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  // Blue-themed animated gradient cycling (same concept as hero)
  const CONTACT_PHASES = [
    'rgba(219,234,254,0.6)',  // blue-100
    'rgba(191,219,254,0.6)',  // blue-200
    'rgba(147,197,253,0.5)',  // blue-300
    'rgba(96,165,250,0.4)',   // blue-400
    'rgba(59,130,246,0.35)',  // blue-500
    'rgba(37,99,235,0.3)',    // blue-600
    'rgba(29,78,216,0.25)',   // blue-700
    'rgba(30,64,175,0.2)',    // blue-800
    'rgba(30,58,138,0.15)',   // blue-900
    'rgba(219,234,254,0.6)',  // loop back
  ]

  useEffect(() => {
    const t = setInterval(() => setAnimPhase(p => (p + 1) % (CONTACT_PHASES.length - 1)), 3000)
    return () => clearInterval(t)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div style={{
      backgroundColor: '#fff',
      padding: '48px 0 70px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated blue tint background layer */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        transition: 'background-color 2s ease',
        backgroundColor: CONTACT_PHASES[animPhase],
        pointerEvents: 'none',
      }} />

      {/* Animated blue orbs */}
      {[
        { size: 400, top: '-100px', left: '-80px', delay: '0s' },
        { size: 300, top: '60%', right: '-60px', delay: '1.5s' },
        { size: 200, top: '30%', left: '40%', delay: '0.8s' },
      ].map((orb, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: `${orb.size}px`, height: `${orb.size}px`,
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(59,130,246,0.12), transparent 70%)`,
          top: orb.top, left: (orb as any).left, right: (orb as any).right,
          animation: `float-orb 6s ease-in-out infinite`,
          animationDelay: orb.delay,
          zIndex: 0, pointerEvents: 'none',
        }} />
      ))}

      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: '1200px', margin: '0 auto', padding: '0 40px',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '28px', alignItems: 'stretch',
      }}>
        {/* ── LEFT: Map ── */}
        <div style={{
          borderRadius: '8px', overflow: 'hidden',
          border: '1px solid #e2e8f0',
          boxShadow: '0 6px 24px rgba(0,0,0,0.06)',
          backgroundColor: '#fff',
        }}>
          {/* Map info strip */}
          <div style={{ padding: '18px 20px 14px', backgroundColor: '#fff', borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: '700', color: DARK, marginBottom: '4px' }}>Data Artisans</h4>
                <p style={{ fontSize: '12.5px', color: GRAY, lineHeight: 1.6 }}>
                  London<br/>
297, Suite 2, High Street North, London, E12 6SL
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '6px' }}>
                  <span style={{ color: '#f59e0b', fontSize: '13px' }}>★★★★</span>
                  <span style={{ color: '#f59e0b', fontSize: '13px', opacity: 0.5 }}>★</span>
                  <span style={{ fontSize: '12px', color: GRAY }}>4.4 (7)</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                {/* Edit / Directions icons */}
                {[
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="14" height="14" rx="2" stroke="#1e6fe0" strokeWidth="1.5"/><path d="M6 12l6-6M10 6l2 2-6 6H4v-2l6-6z" stroke="#1e6fe0" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9l6-7 6 7h-3v6H6V9H3z" stroke="#1e6fe0" strokeWidth="1.5" fill="none" strokeLinejoin="round"/></svg>,
                ].map((ic, ii) => (
                  <div key={ii} style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    {ic}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Embedded Google Map iframe */}
          <div style={{ height: '380px', position: 'relative' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1234567890123!2d78.48765!3d17.44220!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90f8d4e3b7a1%3A0xabcdef1234567890!2sTMI%20Network!5e0!3m2!1sen!2sin!4v1716000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TMI Network Location"
            />
          </div>
        </div>

        {/* ── RIGHT: Contact Form ── */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 6px 24px rgba(0,0,0,0.06)',
          padding: '36px 32px',
          display: 'flex', flexDirection: 'column',
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: DARK, textAlign: 'center', marginBottom: '6px' }}>
            Contact Us
          </h2>
          <p style={{ fontSize: '13.5px', color: GRAY, textAlign: 'center', marginBottom: '28px' }}>
            Fill the details and submit
          </p>

          {submitted ? (
            <div style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px',
              animation: 'float-up 0.4s ease forwards',
            }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M7 17l6 6 12-12" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#16a34a' }}>Message Sent!</h3>
              <p style={{ fontSize: '13.5px', color: GRAY, textAlign: 'center' }}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
              {/* Name */}
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                required
                style={{
                  padding: '12px 16px',
                  border: '1px solid #e2e8f0', borderRadius: '6px',
                  fontSize: '13.5px', fontFamily: FONT,
                  outline: 'none', width: '100%', boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => { (e.target as HTMLElement).style.borderColor = RED }}
                onBlur={e => { (e.target as HTMLElement).style.borderColor = '#e2e8f0' }}
              />
              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                required
                style={{
                  padding: '12px 16px',
                  border: '1px solid #e2e8f0', borderRadius: '6px',
                  fontSize: '13.5px', fontFamily: FONT,
                  outline: 'none', width: '100%', boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => { (e.target as HTMLElement).style.borderColor = RED }}
                onBlur={e => { (e.target as HTMLElement).style.borderColor = '#e2e8f0' }}
              />
              {/* Subject */}
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={e => setFormData(p => ({ ...p, subject: e.target.value }))}
                required
                style={{
                  padding: '12px 16px',
                  border: '1px solid #e2e8f0', borderRadius: '6px',
                  fontSize: '13.5px', fontFamily: FONT,
                  outline: 'none', width: '100%', boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => { (e.target as HTMLElement).style.borderColor = RED }}
                onBlur={e => { (e.target as HTMLElement).style.borderColor = '#e2e8f0' }}
              />
              {/* Message */}
              <textarea
                placeholder="Write detailed message here"
                value={formData.message}
                onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                required
                rows={6}
                style={{
                  padding: '12px 16px',
                  border: '1px solid #e2e8f0', borderRadius: '6px',
                  fontSize: '13.5px', fontFamily: FONT,
                  outline: 'none', width: '100%', boxSizing: 'border-box',
                  resize: 'vertical', lineHeight: 1.7,
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => { (e.target as HTMLElement).style.borderColor = RED }}
                onBlur={e => { (e.target as HTMLElement).style.borderColor = '#e2e8f0' }}
              />
              {/* Submit */}
              <button
                type="submit"
                style={{
                  padding: '13px 32px',
                  backgroundColor: DARK,
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  fontFamily: FONT,
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                  transition: 'background-color 0.25s ease, transform 0.15s ease',
                  letterSpacing: '0.3px',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.backgroundColor = RED
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.backgroundColor = DARK
                  el.style.transform = 'translateY(0)'
                }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes float-orb {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
          50%       { transform: translateY(-20px) scale(1.05); opacity: 1; }
        }
        @keyframes float-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}


const ContactUs: React.FC = () => (
  <div style={{ fontFamily: FONT, backgroundColor: '#ffffff' }}>
    
    <div style={{ paddingTop: '68px' }}>
      <HeroBanner />
      {/* Info cards overlap hero bottom */}
      <div style={{ backgroundColor: '#f8f8f8', paddingBottom: '0' }}>
        <InfoCards />
      </div>
      <div style={{ backgroundColor: '#f8f8f8', paddingTop: '48px' }}>
        <AnimatedContactSection />
      </div>
      
    </div>
  </div>
)

export default ContactUs