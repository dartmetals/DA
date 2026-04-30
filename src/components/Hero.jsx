import React, { useState, useEffect } from 'react';
import './Hero.css';

const slides = [
  {
    id: 1,
    headline: 'Simplify Hiring, Onboarding & Staffing.',
    highlight: 'Business.',
    before: 'Amplify ',
    cta: 'EMPLOYER',
  },
  {
    id: 2,
    headline: 'Find the Right Talent at the Right Time.',
    highlight: 'Growth.',
    before: 'Drive ',
    cta: 'JOB SEEKER',
  },
  {
    id: 3,
    headline: 'Partner With India\'s Largest Talent Network.',
    highlight: 'Success.',
    before: 'Scale Toward ',
    cta: 'PARTNER',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <section className="hero" id="home">
      {/* Staircase / background pattern */}
      <div className="hero-bg">
        <div className="hero-overlay"></div>
        <div className="hero-stairs">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="stair-arrow" style={{ animationDelay: `${i * 0.1}s` }}>
              <svg viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="20,0 40,25 30,25 30,50 10,50 10,25 0,25" fill="rgba(255,255,255,0.07)"/>
              </svg>
            </div>
          ))}
        </div>
        {/* Silhouette figure */}
        <div className="hero-silhouette">
          <svg viewBox="0 0 120 220" xmlns="http://www.w3.org/2000/svg" fill="rgba(0,0,0,0.5)">
            <circle cx="60" cy="28" r="20"/>
            <rect x="35" y="55" width="50" height="90" rx="8"/>
            <rect x="20" y="55" width="18" height="70" rx="8"/>
            <rect x="82" y="55" width="18" height="70" rx="8"/>
            <rect x="30" y="145" width="22" height="75" rx="8"/>
            <rect x="68" y="145" width="22" height="75" rx="8"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className={`hero-content ${animating ? 'fade-out' : 'fade-in'}`}>
        <h1 className="hero-headline">{slide.headline}</h1>
        <h2 className="hero-subline">
          {slide.before}
          <span className="hero-highlight">{slide.highlight}</span>
        </h2>
        <div className="hero-cta-wrapper">
          <button className="hero-cta-btn">
            {slide.cta}
            <span className="cta-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="hero-controls">
        <button className="ctrl-btn" onClick={prev}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/>
          </svg>
        </button>
        <button className="ctrl-btn" onClick={next}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
