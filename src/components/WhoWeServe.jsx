import React from 'react';
import './WhoWeServe.css';

const KnowMore = ({ white }) => (
  <span className={`know-more ${white ? 'know-more-white' : ''}`}>
    KNOW MORE
    <span className="arrow-icon">
      <svg width="8" height="8" viewBox="0 0 24 24" fill="white">
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
      </svg>
    </span>
  </span>
);

const cards = [
  {
    id: 'employer',
    bgImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
    icon: (
      <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="20" width="40" height="32" rx="4" stroke="#333" strokeWidth="2.5" fill="none"/>
        <path d="M22 20v-4a10 10 0 0120 0v4" stroke="#333" strokeWidth="2.5" fill="none"/>
        <circle cx="32" cy="36" r="6" stroke="#333" strokeWidth="2" fill="none"/>
        <path d="M20 52v-2a12 12 0 0124 0v2" stroke="#333" strokeWidth="2" fill="none"/>
      </svg>
    ),
    title: 'Employer',
    desc: 'Tech enabled recruitment processes to get you the right people at the right place, time & cost-catalyzing your business growth!',
    featured: false,
  },
  {
    id: 'jobseeker',
    bgImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop',
    icon: (
      <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="20" r="12" stroke="#333" strokeWidth="2.5" fill="none"/>
        <path d="M10 54c0-12 9-20 22-20s22 8 22 20" stroke="#333" strokeWidth="2.5" fill="none"/>
        <path d="M32 34l4 8-4 4-4-4 4-8z" fill="#E8000D"/>
      </svg>
    ),
    title: 'Job Seeker',
    desc: 'AI enabled applicant system for job recommendations so that we can show you the jobs that work for you & build your career!',
    featured: false,
  },
  {
    id: 'partner',
    bgImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    icon: (
      <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 32c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z" stroke="#333" strokeWidth="2" fill="none"/>
        <path d="M20 32l8 8 16-16" stroke="#333" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Partner',
    desc: 'Work with marquee clients in volume & grow your business with our extensive partner network.',
    featured: false, // Changed to false to remove red background
  },
];

const WhoWeServe = () => {
  return (
    <section className="who-we-serve" id="employers">
      <div className="container">
        <h2 className="section-title">Who do we Serve</h2>
        <p className="section-subtitle">Choose your journey with us.</p>

        <div className="serve-cards">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="serve-card"
              style={{ '--bg-image': `url(${card.bgImage})` }}
            >
              <div className="card-overlay"></div>
              <div className="card-content">
                <div className="card-icon">{card.icon}</div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
                <KnowMore white={false} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;