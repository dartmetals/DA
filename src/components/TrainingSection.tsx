import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const trainingCourses = [
  { name: 'Data Science', style: { fontFamily: 'Georgia, serif', fontStyle: 'italic' } },
  { name: 'Cloud Computing',    style: { fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: '700' } },
  { name: 'Cyber Security',    style: { letterSpacing: '0.02em' }, prefix: '✦ ' },
  { name: 'AI & ML',      style: { fontWeight: '800', letterSpacing: '0.1em' } },
  { name: 'DevOps',       style: { fontWeight: '700', letterSpacing: '0.06em' } },
  { name: 'Full Stack',   style: { fontFamily: 'Georgia, serif' } },
  { name: 'Digital Marketing',    style: { fontWeight: '700' } },
  { name: 'Project Management',     style: { fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: '700' } },
  { name: 'Business Analytics',      style: { fontWeight: '800', letterSpacing: '0.08em' } },
  { name: 'UI/UX Design',     style: {} },
  { name: 'Data Analytics', style: { fontSize: '13px' } },
  { name: 'Cloud Security',  style: { fontWeight: '800', letterSpacing: '0.06em' } },
];

const CourseCard = ({ course, delay }: { course: typeof trainingCourses[0]; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ scale: 1.04, boxShadow: '0 4px 24px rgba(91,99,248,0.12)' }}
      style={{
        border: '1.5px solid #e2e8f0',
        borderRadius: 12,
        padding: '18px 28px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        minWidth: 100, cursor: 'default',
        background: '#fff',
        transition: 'box-shadow 0.2s',
      }}
    >
      <span style={{
        color: '#5b63f8',
        fontSize: 15,
        fontFamily: "'Inter', system-ui, sans-serif",
        ...course.style,
      }}>
        {course.prefix || ''}{course.name}
      </span>
    </motion.div>
  );
};

const TrustedBrandsSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: '-80px' });

  const row1 = trainingCourses.slice(0, 6);
  const row2 = trainingCourses.slice(6, 12);

  return (
    <section style={{
      background: '#fff',
      padding: '80px 48px',
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      <div ref={sectionRef} style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Title and Paragraph in 2 Columns - 1 Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            marginBottom: 48,
            alignItems: 'center',
          }}
        >
          {/* Left Column - Title */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Specialized Training for UK Master's Graduates
          </motion.h2>

          {/* Right Column - Paragraph */}
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: 16,
              color: '#64748b',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Industry-focused training programs designed specifically for students who have completed their Masters in the UK. 
            Bridge the gap between your degree and high-demand IT careers.
          </motion.p>
        </motion.div>

        {/* Courses Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 16 }}>
            {row1.map((c, i) => <CourseCard key={c.name} course={c} delay={0.5 + i * 0.07} />)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 16 }}>
            {row2.map((c, i) => <CourseCard key={c.name} course={c} delay={0.92 + i * 0.07} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsSection;