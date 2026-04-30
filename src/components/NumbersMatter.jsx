import React, { useEffect, useRef, useState } from 'react';
import './NumbersMatter.css';

const stats = [
  { value: '200', suffix: '+', label: 'Customers Serviced', isPercent: false },
  { value: '600', suffix: '+', label: 'Partners Engaged', isPercent: false },
  { value: '2L', suffix: '+', label: 'Candidates Hired', isPercent: false },
  { value: '470', suffix: '+', label: 'Cities Reached', isPercent: false },
  { value: '95', suffix: '%', label: 'Manning Managed', isPercent: true },
  { value: '40', suffix: '%', label: 'HR Cost Savings', isPercent: true },
  { value: '15', suffix: '%', label: 'Attrition Reduced', isPercent: true },
  { value: '95', suffix: '%', label: 'Customer Referral', isPercent: true },
];

const StatCard = ({ value, suffix, label, isPercent, visible }) => (
  <div className={`stat-card ${visible ? 'visible' : ''}`}>
    <div className="stat-value">
      {value}
      <span className={`stat-badge ${isPercent ? 'badge-percent' : 'badge-plus'}`}>
        {suffix}
      </span>
    </div>
    <div className="stat-label">{label}</div>
  </div>
);

const NumbersMatter = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="numbers-matter" id="numbers" ref={ref}>
      <div className="container">
        <h2 className="section-title">Numbers that Matter</h2>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <StatCard
              key={i}
              {...stat}
              visible={visible}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersMatter;
