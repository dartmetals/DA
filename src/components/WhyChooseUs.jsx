import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us" id="why-us">
      <div className="container">
        <div className="why-grid">
          {/* Left Image */}
          <div className="why-image-col">
            <div className="why-image-wrapper">
              <div className="why-image-placeholder">
                {/* Professional figure illustration */}
                <svg viewBox="0 0 320 420" xmlns="http://www.w3.org/2000/svg" className="why-illustration">
                  {/* Background dots pattern */}
                  {[...Array(6)].map((_, row) =>
                    [...Array(6)].map((_, col) => (
                      <circle
                        key={`${row}-${col}`}
                        cx={col * 50 + 10}
                        cy={row * 50 + 10}
                        r="3"
                        fill="rgba(232,0,13,0.15)"
                      />
                    ))
                  )}
                  {/* Suit figure */}
                  <circle cx="160" cy="80" r="48" fill="#1a1a1a"/>
                  <path d="M80 420 C80 300 120 260 160 260 C200 260 240 300 240 420Z" fill="#1a1a1a"/>
                  <path d="M120 200 L160 260 L200 200 L180 180 L160 200 L140 180 Z" fill="#2a2a2a"/>
                  <rect x="70" y="180" width="50" height="120" rx="10" fill="#1a1a1a" transform="rotate(-10 95 240)"/>
                  <rect x="200" y="180" width="50" height="120" rx="10" fill="#1a1a1a" transform="rotate(10 225 240)"/>
                  {/* Tie */}
                  <polygon points="155,195 165,195 170,260 160,270 150,260" fill="#E8000D"/>
                  {/* Shirt collar */}
                  <polygon points="140,180 160,200 180,180 165,175 155,175" fill="white"/>
                </svg>
              </div>
              <div className="why-image-dots">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="dot-item"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="why-content-col">
            <div className="why-label">
              <span>WHY CHOOSE US</span>
              <div className="label-line"></div>
            </div>

            <h2 className="why-heading">
              Simplify Talent Acquisition.<br />
              Amplify Business.
            </h2>

            <p className="why-desc">
              Harness the right talent, at the optimal time and cost, for a transformative
              impact on your business. Experience our tech-enabled recruitment, seamless
              onboarding, and strategic staffing, driving cost savings through attrition
              reduction and enhanced workforce performance. Partner with us today.
            </p>

            <a href="#about" className="btn-outline-red">
              ABOUT US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
