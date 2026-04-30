import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    quote:
      'Thank you and your team for having forwarded the interesting and yet relevant article. TMI Network has been an outstanding recruitment partner for our organization.',
    name: 'L.R. Natarajan',
    title: 'VP – Titan Industries Ltd',
  },
  {
    id: 2,
    quote:
      'TMI Network has consistently delivered quality talent that aligns with our business needs. Their understanding of our culture and requirements is exceptional.',
    name: 'Priya Sharma',
    title: 'Head of HR – Leading FMCG Company',
  },
  {
    id: 3,
    quote:
      'The speed and quality of candidates provided by TMI Network helped us scale rapidly. Their processes are truly tech-enabled and efficient.',
    name: 'Rajesh Kumar',
    title: 'Director – Manufacturing Firm',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <div className="testimonials-label">
            <span>TESTIMONIALS</span>
            <div className="label-line-red"></div>
          </div>
          <div className="testimonials-controls">
            <button className="testi-ctrl" onClick={prev}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/>
              </svg>
            </button>
            <button className="testi-ctrl" onClick={next}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
              </svg>
            </button>
          </div>
        </div>

        <h2 className="section-title" style={{ textAlign: 'left' }}>What People Say About Us</h2>

        <div className="testimonial-card" key={t.id}>
          <div className="quote-mark">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 22h-6a2 2 0 01-2-2v-6a2 2 0 012-2h6a2 2 0 012 2v6l-2 8h-4l4-6z" fill="var(--red)" opacity="0.2"/>
              <path d="M30 22h-6a2 2 0 01-2-2v-6a2 2 0 012-2h6a2 2 0 012 2v6l-2 8h-4l4-6z" fill="var(--red)" opacity="0.2"/>
              <text x="2" y="36" fontSize="48" fill="var(--red)" opacity="0.15" fontFamily="Georgia">"</text>
            </svg>
          </div>

          <p className="testimonial-text">{t.quote}</p>

          <div className="testimonial-author">
            <div className="author-line"></div>
            <div className="author-info">
              <span className="author-name">{t.name}</span>
              <span className="author-title">{t.title}</span>
            </div>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="testi-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testi-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
