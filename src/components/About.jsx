import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left: Years Badge */}
          <div className="about-badge-col">
            <div className="years-badge">
              <div className="years-inner">
                <span className="years-number">35</span>
                <span className="years-label">Years of<br />Solving HR<br />Challenges</span>
              </div>
              <div className="badge-corner top-left"></div>
              <div className="badge-corner bottom-right"></div>
            </div>
          </div>

          {/* Middle: Since 1991 */}
          <div className="about-since-col">
            <p className="since-year">SINCE 1991</p>
            <h3 className="since-tagline">
              India's first and largest,<br />
              end-to-end, talent<br />
              supply chain group
            </h3>
          </div>

          {/* Right: Description */}
          <div className="about-desc-col">
            <p className="about-desc">
              Since 1991, TMI Network is a pioneer in Executive Search and
              Contingency Hiring and was the founder member of the Executive
              Recruiters Association. Today, it is a national leader in large
              scale hiring of frontline workforce, middle to senior level talent
              and Next Gen Flexi-staffing solutions across multiple sectors
              including Manufacturing, BFSI, Consumer Goods, Retail & IT.
            </p>
            <a href="#about" className="tmi-group-link">
              TMI GROUP COMPANIES
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
