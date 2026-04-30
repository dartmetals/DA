import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SolutionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section style={{
      background: '#fff',
      padding: '20px 48px',
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      <div ref={ref} style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 80, alignItems: 'center',
      }}>

        {/* LEFT: Internship Image from public folder */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
          transition={{ duration: 0.85, delay: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img 
            src="/internship-img2.png" 
            alt="Internship Program"
            style={{
              width: '100%',
              maxWidth: 450,
              height: 'auto',
              // borderRadius: 24,
              // boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            }}
          />
        </motion.div>

        {/* RIGHT: Text content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontSize: 40, fontWeight: 800,
              color: '#0f172a', letterSpacing: '-0.03em',
              lineHeight: 1.2, marginBottom: 24,
            }}
          >
            Internship That Boosts Your Career
          </motion.h2>
          
          {/* Paragraph 1 */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ 
              fontSize: 13.5, 
              color: '#475569', 
              lineHeight: 1.6, 
              marginBottom: 18 
            }}
          >
            Along with our specialized training programs, we provide hands-on internships that give you 
            real-world experience in your chosen field. Our internships are designed to bridge the gap 
            between academic knowledge and practical industry requirements, ensuring you're job-ready 
            from day one. You'll work on live projects, collaborate with industry experts, and build 
            a professional portfolio that showcases your skills to potential employers.
          </motion.p>
          
          {/* Paragraph 2 */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ 
              fontSize: 13.5, 
              color: '#475569', 
              lineHeight: 1.6 
            }}
          >
            During your internship, you'll get the opportunity to work on meaningful projects that 
            have real business impact. Each intern is assigned a dedicated mentor who guides you 
            through project development, code reviews, and best practices. By the end of the internship, 
            you'll have completed at least 2-3 full-scale projects that you can proudly add to your 
            resume and portfolio. This practical experience is invaluable and will give you a significant 
            advantage in the competitive UK job market.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;