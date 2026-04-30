import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const GrowBusinessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-80px' }); // Changed to once: false

  return (
    <section style={{
      background: '#fff',
      padding: '40px 48px 60px',
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.97 }}
          transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #5b63f8 40%, #7c3aed 100%)',
            borderRadius: 24,
            padding: '72px 48px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: 220,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Cylinder decorations — left side */}
          <div style={{ position: 'absolute', left: 40, bottom: -10, display: 'flex', gap: 16, alignItems: 'flex-end' }}>
            {/* Short cylinder */}
            <div style={{ position: 'relative', width: 56 }}>
              <div style={{
                width: 56, height: 80, background: 'rgba(255,255,255,0.15)',
                borderRadius: '4px 4px 0 0',
              }} />
              <div style={{
                width: 56, height: 12, background: 'rgba(255,255,255,0.22)',
                borderRadius: '50%', marginTop: -6,
              }} />
            </div>
            {/* Tall cylinder */}
            <div style={{ position: 'relative', width: 70 }}>
              <div style={{
                width: 70, height: 140, background: 'rgba(255,255,255,0.2)',
                borderRadius: '4px 4px 0 0',
              }} />
              <div style={{
                width: 70, height: 14, background: 'rgba(255,255,255,0.28)',
                borderRadius: '50%', marginTop: -7,
              }} />
            </div>
            {/* Medium cylinder */}
            <div style={{ position: 'relative', width: 50 }}>
              <div style={{
                width: 50, height: 110, background: 'rgba(255,255,255,0.15)',
                borderRadius: '4px 4px 0 0',
              }} />
              <div style={{
                width: 50, height: 10, background: 'rgba(255,255,255,0.22)',
                borderRadius: '50%', marginTop: -5,
              }} />
            </div>
          </div>

          {/* Cylinder decorations — right side */}
          <div style={{ position: 'absolute', right: 40, bottom: -10, display: 'flex', gap: 16, alignItems: 'flex-end' }}>
            <div style={{ position: 'relative', width: 48 }}>
              <div style={{ width: 48, height: 100, background: 'rgba(255,255,255,0.12)', borderRadius: '4px 4px 0 0' }} />
              <div style={{ width: 48, height: 10, background: 'rgba(255,255,255,0.2)', borderRadius: '50%', marginTop: -5 }} />
            </div>
            <div style={{ position: 'relative', width: 60 }}>
              <div style={{ width: 60, height: 60, background: 'rgba(255,255,255,0.18)', borderRadius: '4px 4px 0 0' }} />
              <div style={{ width: 60, height: 12, background: 'rgba(255,255,255,0.25)', borderRadius: '50%', marginTop: -6 }} />
            </div>
          </div>

          {/* Title Text - Comes first */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0 }}
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 28, fontWeight: 700,
              color: '#fff',
              textAlign: 'center',
              lineHeight: 1.5,
              position: 'relative', zIndex: 2,
              letterSpacing: '-0.01em',
              maxWidth: 650,
              marginBottom: 20,
            }}
          >
            Comprehensive Job Placement Support
          </motion.p>

          {/* Paragraph inside the blur border radius card - Comes second */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              fontSize: 15,
              color: 'rgba(255,255,255,0.9)',
              textAlign: 'center',
              lineHeight: 1.7,
              position: 'relative',
              zIndex: 2,
              maxWidth: 800,
              margin: '0 auto',
            }}
          >
            We provide complete job placement support to help you land your dream role. Our team will work 
            closely with you to prepare a professional CV that highlights your skills, projects, and unique 
            strengths. We'll ensure your resume stands out to potential employers and effectively showcases 
            everything you've learned during your training and internship.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowBusinessSection;