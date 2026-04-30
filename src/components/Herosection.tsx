// // HeroSection.jsx
// import { motion } from 'framer-motion';

// const HeroSection = () => {
//   return (
//     <section style={{
//       background: 'linear-gradient(135deg, #eef0ff 0%, #e8ebff 40%, #dde2ff 100%)',
//       minHeight: '80vh',
//       fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif",
//       position: 'relative',
//       overflow: 'hidden',
//     }}>
//       {/* Subtle grid pattern overlay */}
//       <div style={{
//         position: 'absolute', inset: 0, pointerEvents: 'none',
//         backgroundImage: 'linear-gradient(rgba(100,120,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(100,120,255,0.04) 1px, transparent 1px)',
//         backgroundSize: '40px 40px',
//       }} />

//       {/* ── HERO BODY ── */}
//       <div style={{
//         maxWidth: 1400,
//         margin: '0 auto', 
//         padding: '0 48px',
//         minHeight: '90vh',
//         display: 'flex', 
//         alignItems: 'center',
//         gap: 60,
//       }}>
//         {/* Left content - wider */}
//         <div style={{ flex: '0 0 520px', zIndex: 2 }}>
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
//             style={{
//               fontFamily: "'Inter', system-ui, sans-serif",
//               fontSize: 36,
//               fontWeight: 800,
//               color: '#0f172a', 
//               lineHeight: 1.2,
//               letterSpacing: '-0.03em', 
//               margin: '0 0 24px',
//               maxWidth: '100%',
//             }}
//           >
//             Empowering the Next Generation of IT Excellence.
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
//             style={{
//               fontSize: 14,
//               color: '#64748b', 
//               lineHeight: 1.6,
//               maxWidth: 480,
//               margin: '0 0 36px',
//             }}
//           >
//             We bridge the gap between ambition and industry. Data Artisans provides world-class job-oriented training, guaranteed placements, and global education pathways tailored for the UK market.
//           </motion.p>

//           <motion.button
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.3 }}
//             whileHover={{ scale: 1.04, x: 4 }}
//             whileTap={{ scale: 0.97 }}
//             style={{
//               background: '#5b63f8',
//               border: 'none', 
//               borderRadius: 10,
//               padding: '14px 32px',
//               color: '#fff', 
//               fontSize: 15, 
//               fontWeight: 600,
//               cursor: 'pointer', 
//               display: 'flex', 
//               alignItems: 'center', 
//               gap: 10,
//             }}
//           >
//             Get started free
//             <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//               <path d="M3 9h12M10 4l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </motion.button>
//         </div>

//         {/* Right: 3D Machine Illustration */}
//         <motion.div
//           initial={{ opacity: 0, x: 80, scale: 0.92 }}
//           animate={{ opacity: 1, x: 0, scale: 1 }}
//           transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
//           style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
//         >
//           <svg viewBox="0 0 560 420" width="100%" style={{ maxWidth: 560, filter: 'drop-shadow(0 32px 80px rgba(91,99,248,0.18))' }} fill="none">
//             {/* Main frame outer */}
//             <rect x="60" y="40" width="440" height="340" rx="20" fill="rgba(255,255,255,0.6)" stroke="rgba(180,190,255,0.6)" strokeWidth="2" />
//             {/* Inner frame */}
//             <rect x="100" y="70" width="360" height="280" rx="12" fill="rgba(240,242,255,0.8)" stroke="rgba(150,160,255,0.5)" strokeWidth="1.5" />
//             {/* Center display */}
//             <rect x="160" y="110" width="240" height="200" rx="10" fill="rgba(255,255,255,0.9)" stroke="rgba(180,190,255,0.8)" strokeWidth="1.5" />
//             {/* HUSD Logo on center display */}
//             <rect x="240" y="158" width="80" height="80" rx="16" fill="linear-gradient(135deg,#5b63f8,#4048e8)" />
//             <rect x="240" y="158" width="80" height="80" rx="16" fill="#5b63f8" />
//             <rect x="254" y="172" width="20" height="20" rx="4" fill="white" />
//             <rect x="280" y="172" width="20" height="20" rx="4" fill="white" opacity="0.7" />
//             <rect x="254" y="198" width="20" height="20" rx="4" fill="white" opacity="0.7" />
//             <rect x="280" y="198" width="20" height="20" rx="4" fill="white" opacity="0.4" />
//             <text x="280" y="262" textAnchor="middle" fontSize="16" fontWeight="800" fill="#0f172a" fontFamily="Inter,sans-serif">HUSD</text>
//             {/* Left rail */}
//             <rect x="80" y="80" width="16" height="260" rx="6" fill="rgba(220,225,255,0.8)" stroke="rgba(160,175,255,0.6)" strokeWidth="1" />
//             {/* Right rail */}
//             <rect x="464" y="80" width="16" height="260" rx="6" fill="rgba(220,225,255,0.8)" stroke="rgba(160,175,255,0.6)" strokeWidth="1" />
//             {/* Top bar */}
//             <rect x="96" y="80" width="368" height="14" rx="5" fill="rgba(210,218,255,0.7)" />
//             {/* Bottom bar */}
//             <rect x="96" y="326" width="368" height="14" rx="5" fill="rgba(210,218,255,0.7)" />
//             {/* Connector rods horizontal */}
//             <rect x="60" y="148" width="100" height="8" rx="4" fill="rgba(200,210,255,0.8)" />
//             <rect x="400" y="148" width="100" height="8" rx="4" fill="rgba(200,210,255,0.8)" />
//             <rect x="60" y="264" width="100" height="8" rx="4" fill="rgba(200,210,255,0.8)" />
//             <rect x="400" y="264" width="100" height="8" rx="4" fill="rgba(200,210,255,0.8)" />
//             {/* Accent blue dots */}
//             <circle cx="96" cy="152" r="6" fill="#5b63f8" />
//             <circle cx="464" cy="152" r="6" fill="#5b63f8" />
//             <circle cx="96" cy="268" r="6" fill="#5b63f8" />
//             <circle cx="464" cy="268" r="6" fill="#5b63f8" />
//             {/* Glow accent orange */}
//             <circle cx="80" cy="210" r="8" fill="#ff8c42" opacity="0.85" />
//             <circle cx="480" cy="210" r="8" fill="#ff8c42" opacity="0.85" />
//             {/* Top-right corner accent */}
//             <rect x="430" y="45" width="40" height="6" rx="3" fill="#5b63f8" opacity="0.6" />
//             <rect x="446" y="38" width="6" height="18" rx="3" fill="#5b63f8" opacity="0.5" />
//           </svg>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

/* Shared base styles for every image */
const base = (w: number, h: number) => ({
  position: 'absolute' as const,
  width: w,
  height: h,
  borderRadius: 14,
  objectFit: 'cover' as const,
  display: 'block' as const,
  background: '#cbd5e1',           /* grey placeholder until real image loads */
  boxShadow: '0 6px 24px rgba(0,0,0,0.11)',
  willChange: 'transform, opacity',
  backfaceVisibility: 'hidden' as const,
  opacity: 0, // Start completely invisible
});

// CSS keyframe animations for smooth image entries - FASTER VERSION
const imageAnimations = `
  @keyframes slideFromTop {
    0% {
      opacity: 0;
      transform: translate3d(0, -90px, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slideFromRight {
    0% {
      opacity: 0;
      transform: translate3d(90px, 0, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slideFromLeft {
    0% {
      opacity: 0;
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slideFromBottom {
    0% {
      opacity: 0;
      transform: translate3d(0, 90px, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .animate-image-1 {
    animation: slideFromTop 1.0s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.15s forwards;
  }

  .animate-image-2 {
    animation: slideFromRight 1.0s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.45s forwards;
  }

  .animate-image-3 {
    animation: slideFromLeft 1.0s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.75s forwards;
  }

  .animate-image-4 {
    animation: slideFromBottom 1.0s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.05s forwards;
  }

  /* Initial positions - images start at their coming from positions */
  .image-start-1 {
    opacity: 0;
    transform: translate3d(0, -90px, 0);
  }
  
  .image-start-2 {
    opacity: 0;
    transform: translate3d(90px, 0, 0);
  }
  
  .image-start-3 {
    opacity: 0;
    transform: translate3d(-90px, 0, 0);
  }
  
  .image-start-4 {
    opacity: 0;
    transform: translate3d(0, 90px, 0);
  }
`;

const PhotoGrid = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-100px' });
  const [animationKey, setAnimationKey] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      // Reset animation by toggling key
      setAnimationKey(prev => prev + 1);
      setHasAnimated(true);
    } else if (!inView) {
      setHasAnimated(false);
    }
  }, [inView, hasAnimated]);

  // Inject CSS keyframes
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = imageAnimations;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div ref={ref} style={{
      position: 'relative',
      width: 520,
      height: 400,
      flexShrink: 0,
      transform: 'translate3d(0, 0, 0)', // Force hardware acceleration
    }}>

      <img
        key={`img1-${animationKey}`}
        src="/training.jpg"         
        alt="Hero image 1"
        className={inView ? 'animate-image-1' : 'image-start-1'}
        style={{ ...base(220, 180), left: 0, top: 0 }}
      />

      <img
        key={`img2-${animationKey}`}
        src="/internship.png"         
        alt="Hero image 2"
        className={inView ? 'animate-image-2' : 'image-start-2'}
        style={{ ...base(220, 280), left: 230, top: 0 }}
      />

      <img
        key={`img3-${animationKey}`}
        src="/jobplacement.jpg"        
        alt="Hero image 3"
        className={inView ? 'animate-image-3' : 'image-start-3'}
        style={{ ...base(220, 260), left: 0, top: 190 }}
      />

      <img
        key={`img4-${animationKey}`}
        src="/study-abroad.jpg"         
        alt="Hero image 4"
        className={inView ? 'animate-image-4' : 'image-start-4'}
        style={{ ...base(220, 160), left: 230, top: 288 }}
      />
    </div>
  );
};

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: '-100px' });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err: Error) => {
        console.log("Video autoplay failed:", err);
      });
    }
  }, []);

  return (
    <section ref={sectionRef} style={{
      minHeight: '100vh',
      fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif",
      position: 'relative',
      overflow: 'hidden',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      transform: 'translate3d(0, 0, 0)',
    }}>
      {/* Background Video - COMMENTED */}
      {/* <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.3,
        }}
      >
        <source src="/bg-herovideo1.mp4" type="video/mp4" />
      </video> */}

      {/* Background Image - ADDED */}
      <img 
        src="/bg-heroimg.png"
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.3,
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Dark overlay to ensure text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }} />

      {/* Subtle grid pattern overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundSize: '40px 40px',
        zIndex: 2,
      }} />

      {/* ── HERO BODY ── */}
      <div style={{
        maxWidth: 1400,
        margin: '0 auto',
        padding: '0 48px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        gap: 60,
        position: 'relative',
        zIndex: 3,
        transform: 'translate3d(0, 0, 0)',
      }}>

        {/* ── LEFT CONTENT ── */}
        <div style={{ flex: '0 0 520px', zIndex: 3 }}>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 36,
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.2,
              letterSpacing: '-0.03em',
              margin: '0 0 24px',
              maxWidth: '100%',
            }}
          >
            Empowering the Next Generation of IT Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontSize: 14,
              color: '#64748b',
              lineHeight: 1.6,
              maxWidth: 480,
              margin: '0 0 36px',
            }}
          >
            We bridge the gap between ambition and industry. Data Artisans provides world-class job-oriented training, guaranteed placements, and global education pathways tailored for the UK market.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ scale: 1.03, x: 3 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: '#5b63f8',
              border: 'none',
              borderRadius: 10,
              padding: '14px 32px',
              color: '#fff',
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            Get started free
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M10 4l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </div>

        {/* ── RIGHT: 2×2 photo grid ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: 0 }}
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PhotoGrid />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;