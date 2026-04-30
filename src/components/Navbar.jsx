import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [employersOpen, setEmployersOpen] = useState(false);
  const [jobSeekersOpen, setJobSeekersOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <div className="logo-box">
            <span className="logo-tmi">TMI</span>
          </div>
          <span className="logo-network">Network</span>
        </div>

        {/* Desktop Nav */}
        <ul className="nav-links">
          <li>
            <a href="#home" className="nav-icon-link" title="Home">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </a>
          </li>
          <li><a href="#about">About Us</a></li>
          <li
            className="has-dropdown"
            onMouseEnter={() => setEmployersOpen(true)}
            onMouseLeave={() => setEmployersOpen(false)}
          >
            <a href="#employers">
              Employers
              <svg className="chevron" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </a>
            {employersOpen && (
              <div className="dropdown">
                <a href="#employers">Executive Search</a>
                <a href="#employers">Contingency Hiring</a>
                <a href="#employers">Flexi Staffing</a>
                <a href="#employers">HR Compliance</a>
              </div>
            )}
          </li>
          <li
            className="has-dropdown"
            onMouseEnter={() => setJobSeekersOpen(true)}
            onMouseLeave={() => setJobSeekersOpen(false)}
          >
            <a href="#jobseekers">
              Job Seekers
              <svg className="chevron" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </a>
            {jobSeekersOpen && (
              <div className="dropdown">
                <a href="#jobseekers">Find Jobs</a>
                <a href="#jobseekers">Upload Resume</a>
                <a href="#jobseekers">Career Tips</a>
              </div>
            )}
          </li>
          <li><a href="#partners">Partners</a></li>
          <li
            className="has-dropdown"
            onMouseEnter={() => setInsightsOpen(true)}
            onMouseLeave={() => setInsightsOpen(false)}
          >
            <a href="#insights">
              Insights
              <svg className="chevron" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </a>
            {insightsOpen && (
              <div className="dropdown">
                <a href="#insights">Blog</a>
                <a href="#insights">Reports</a>
                <a href="#insights">Whitepapers</a>
              </div>
            )}
          </li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#contact" className="nav-contact-btn">Contact Us</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#employers">Employers</a>
          <a href="#jobseekers">Job Seekers</a>
          <a href="#partners">Partners</a>
          <a href="#insights">Insights</a>
          <a href="#careers">Careers</a>
          <a href="#contact">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
