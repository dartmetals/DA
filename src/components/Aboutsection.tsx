import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: string;
}

const features: Feature[] = [
  {
    id: 'training',
    icon: (
      <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg,#fbbf24,#f59e0b)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 4h12M2 8h12M2 12h8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2" stroke="white" strokeWidth="1.4" />
        </svg>
      </div>
    ),
    title: 'Industry-Focused Training',
    content: 'We provide job-oriented training programs designed specifically for UK master\'s graduates. Our curriculum is developed in collaboration with industry experts to ensure you learn the most in-demand skills.',
  },
  {
    id: 'internship',
    icon: (
      <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg,#3b82f6,#2563eb)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 3h10v10H3z" stroke="white" strokeWidth="1.4" fill="none" />
          <path d="M6 7l2 2 4-4" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>
    ),
    title: 'Hands-On Internships',
    content: 'Gain real-world experience through our internship programs. Work on live projects, collaborate with industry professionals, and build a portfolio that showcases your practical skills.',
  },
  {
    id: 'placement',
    icon: (
      <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg,#ec4899,#db2777)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="5" r="2" stroke="white" strokeWidth="1.4" />
          <path d="M4 13v-2c0-1.5 1-3 4-3s4 1.5 4 3v2" stroke="white" strokeWidth="1.4" />
          <path d="M12 2l2 2-2 2M4 2l-2 2 2 2" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>
    ),
    title: 'Job Placement Support',
    content: 'We prepare you for interviews, help craft professional CVs, conduct mock interviews, and connect you with top employers. Our guidance continues until you successfully land your dream job.',
  },
  {
    id: 'abroad',
    icon: (
      <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg,#10b981,#059669)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.4" />
          <path d="M8 2v12M2 8h12" stroke="white" strokeWidth="1.4" />
          <circle cx="8" cy="8" r="2" fill="white" />
        </svg>
      </div>
    ),
    title: 'Abroad Study & Visa Support',
    content: 'Complete assistance for studying abroad — from university selection and visa processing to accommodation setup and part-time job guidance. We support you before, during, and after your move.',
  },
];

/* ── YouTube Thumbnail with Play Button ── */
const YouTubeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div style={{
      width: '100%',
      borderRadius: 24,
      overflow: 'hidden',
      boxShadow: '0 24px 48px rgba(91,99,248,0.15)',
      position: 'relative',
      aspectRatio: '16/9',
      cursor: 'pointer',
      background: '#000',
    }}>
      {!isPlaying ? (
        <div 
          onClick={() => setIsPlaying(true)}
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          {/* YouTube Thumbnail */}
          <img 
            src="https://img.youtube.com/vi/H8QqGZmG6PY/maxresdefault.jpg"
            alt="Video thumbnail"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          {/* Play Button Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.3)',
            transition: 'background 0.3s ease',
          }}>
            <div style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'rgba(255,0,0,0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s ease',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/H8QqGZmG6PY?autoplay=1"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      )}
    </div>
  );
};

const WebsiteFeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-100px' }); // Changed to false for every time
  const [openId, setOpenId] = useState<string | null>('training');

  return (
    <section ref={ref} style={{
      background: '#f0f2ff',
      padding: '100px 48px',
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 60, alignItems: 'center',
      }}>

        {/* LEFT: Content slides in from LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -70 }}
          transition={{ duration: 0.85, delay: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: 40, fontWeight: 800,
              color: '#0f172a', letterSpacing: '-0.03em',
              lineHeight: 1.2, marginBottom: 16,
            }}
          >
            About Data Artisans
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{
              fontSize: 15,
              color: '#64748b',
              lineHeight: 1.6,
              marginBottom: 32,
            }}
          >
            We bridge the gap between ambition and industry by providing world-class training, 
            guaranteed placements, and global education pathways tailored for the UK market.
          </motion.p>

          {/* Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {features.map((f, i) => (
              <div key={f.id}>
                {/* Divider top */}
                <div style={{ height: 1, background: '#e2e8f0' }} />

                {/* Row */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                  onClick={() => setOpenId(openId === f.id ? null : f.id)}
                  style={{
                    display: 'flex', alignItems: 'center',
                    gap: 16, padding: '18px 0',
                    cursor: 'pointer',
                  }}
                >
                  {f.icon}
                  <span style={{
                    flex: 1, fontSize: 16, fontWeight: 600,
                    color: '#0f172a',
                  }}>
                    {f.title}
                  </span>
                  <motion.div
                    animate={{ rotate: openId === f.id ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 8l5 5 5-5" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {openId === f.id && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{
                        fontSize: 14, color: '#64748b',
                        lineHeight: 1.68, paddingBottom: 16,
                        paddingLeft: 48,
                      }}>
                        {f.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            {/* Bottom divider */}
            <div style={{ height: 1, background: '#e2e8f0' }} />
          </div>
        </motion.div>

        {/* RIGHT: YouTube Thumbnail with Play Button */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
          transition={{ duration: 0.85, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <YouTubeVideo />
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteFeaturesSection;