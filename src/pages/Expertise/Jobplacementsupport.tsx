import React from "react";

const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    color: "#1A1A1A",
    margin: 0,
    padding: 0,
    overflowX: "hidden",
  },
  hero: {
    background: "linear-gradient(135deg, #1E3A5F 0%, #0D2137 100%)",
    color: "#fff",
    padding: "80px 60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 320,
    position: "relative",
    overflow: "hidden",
  },
  heroOverlay: {
    position: "absolute",
    top: -80,
    right: -60,
    width: 420,
    height: 420,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.07)",
    pointerEvents: "none",
  },
  heroOverlay2: {
    position: "absolute",
    bottom: -100,
    left: "35%",
    width: 300,
    height: 300,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.05)",
    pointerEvents: "none",
  },
  heroText: { maxWidth: 480, zIndex: 1 },
  heroHeading: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    fontStyle: "italic",
    fontSize: 52,
    fontWeight: 700,
    lineHeight: 1.15,
    margin: 0,
  },
  heroImagePlaceholder: {
    width: 340,
    height: 280,
    borderRadius: 12,
    background: "rgba(255,255,255,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(255,255,255,0.6)",
    fontSize: 16,
    zIndex: 1,
    flexShrink: 0,
  },
  introSection: {
    display: "flex",
    alignItems: "center",
    gap: 60,
    padding: "70px 60px",
    background: "#fff",
  },
  introImageBox: {
    flexShrink: 0,
    width: 360,
    height: 340,
    borderRadius: 16,
    background: "linear-gradient(145deg, #3B82F6 60%, #1E3A5F 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  introImageInnerText: {
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
    color: "#fff",
    fontSize: 26,
    fontWeight: 700,
    textAlign: "center",
    lineHeight: 1.4,
    padding: 24,
  },
  introBody: { flex: 1 },
  introPara: { fontSize: 15, lineHeight: 1.75, color: "#333", marginBottom: 18 },
  sectionHeading: { fontSize: 36, fontWeight: 700, color: "#1A1A1A", marginBottom: 48 },
  sectionHeadingItalic: { fontStyle: "italic", color: "#2563EB" },
  cardsSection: { background: "#F7F7F7", padding: "60px 60px" },
  cardsGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 },
  card: {
    background: "#fff",
    borderRadius: 12,
    padding: "32px 28px",
    display: "flex",
    gap: 20,
    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
  },
  cardIcon: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #3B82F6, #1E3A5F)",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 26,
  },
  cardTitle: {
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
    fontSize: 18,
    fontWeight: 700,
    color: "#2563EB",
    marginBottom: 8,
    marginTop: 0,
  },
  cardBody: { fontSize: 14, lineHeight: 1.7, color: "#444", margin: 0 },
  goldBanner: {
    background: "#EFF6FF",
    padding: "70px 60px",
    display: "flex",
    alignItems: "center",
    gap: 60,
  },
  goldBannerText: { flex: 1, color: "#1A1A1A" },
  goldBannerPara: { fontSize: 15, lineHeight: 1.75, marginBottom: 16, color: "#1A1A1A" },
  goldBannerImageBox: {
    width: 340,
    height: 380,
    borderRadius: 12,
    background: "linear-gradient(145deg, #1E3A5F 0%, #0D2137 100%)",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center" as const,
  },
  iconRow: {
    background: "#2563EB",
    padding: "0 60px 70px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 32,
  },
  iconCell: { display: "flex", flexDirection: "column" as const, alignItems: "flex-start", gap: 12 },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 32,
  },
  iconLabel: { fontSize: 14, lineHeight: 1.6, color: "#fff", fontWeight: 500 },
  techSection: {
    background: "#fff",
    padding: "70px 60px",
    display: "flex",
    alignItems: "center",
    gap: 60,
  },
  techImageBox: {
    width: 340,
    height: 360,
    borderRadius: 12,
    background: "linear-gradient(135deg, #1E3A5F 0%, #3B82F6 100%)",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center" as const,
    padding: 20,
  },
  techImageText: {
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 1.3,
  },
  techBody: { flex: 1 },
  techPara: { fontSize: 15, lineHeight: 1.75, color: "#333", marginBottom: 18 },
  featureSection: { background: "#F7F7F7", padding: "60px 60px" },
  featureGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 },
  featureCard: {
    background: "#fff",
    borderRadius: 10,
    padding: "24px 20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
  },
  featureIcon: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #1E3A5F, #3B82F6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    marginBottom: 14,
  },
  featureTitle: {
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
    fontSize: 16,
    fontWeight: 700,
    color: "#2563EB",
    marginBottom: 8,
    marginTop: 0,
  },
  featureBody: { fontSize: 13, lineHeight: 1.65, color: "#555", margin: 0 },
  ctaBanner: {
    background: "#1E3A5F",
    color: "#fff",
    textAlign: "center" as const,
    padding: "48px 60px",
    fontSize: 22,
    fontWeight: 700,
  },
  ctaSpan: { color: "#3B82F6" },
  // New styles for added content
  expertiseSection: {
    background: "#fff",
    padding: "60px 60px",
  },
  expertiseHeading: {
    fontSize: 28,
    fontWeight: 700,
    color: "#2563EB",
    marginBottom: 12,
    textAlign: "center" as const,
  },
  expertiseSubheading: {
    fontSize: 20,
    fontWeight: 600,
    color: "#1A1A1A",
    marginBottom: 32,
    textAlign: "center" as const,
  },
  expertiseText: {
    fontSize: 15,
    lineHeight: 1.75,
    color: "#333",
    marginBottom: 24,
  },
  expertiseList: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 12,
    margin: "24px 0",
  },
  expertiseListItem: {
    fontSize: 14,
    color: "#444",
    paddingLeft: 24,
    position: "relative" as const,
  },
  serviceHeading: {
    fontSize: 22,
    fontWeight: 700,
    color: "#1A1A1A",
    margin: "32px 0 20px",
  },
  serviceSubheading: {
    fontSize: 18,
    fontWeight: 600,
    color: "#2563EB",
    margin: "28px 0 16px",
  },
  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
    marginBottom: 32,
  },
  serviceItem: {
    background: "#F7F7F7",
    borderRadius: 10,
    padding: "20px",
  },
  serviceItemTitle: {
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
    fontSize: 16,
    fontWeight: 700,
    color: "#2563EB",
    marginBottom: 10,
  },
  serviceItemDesc: {
    fontSize: 13,
    lineHeight: 1.65,
    color: "#555",
  },
  processGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
    margin: "32px 0",
  },
  processStep: {
    background: "#F7F7F7",
    borderRadius: 10,
    padding: "20px",
    textAlign: "center" as const,
  },
  processNumber: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #1E3A5F, #3B82F6)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    fontWeight: "bold",
    margin: "0 auto 12px",
  },
  whoList: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: 12,
    margin: "20px 0",
  },
  whoItem: {
    background: "linear-gradient(135deg, #3B82F6, #1E3A5F)",
    color: "#fff",
    padding: "8px 20px",
    borderRadius: 30,
    fontSize: 14,
    fontWeight: 500,
  },
  ctaSmall: {
    background: "#1E3A5F",
    color: "#fff",
    textAlign: "center" as const,
    padding: "32px",
    borderRadius: 12,
    marginTop: 32,
  },
  ctaSmallText: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 16,
  },
  contactInfo: {
    display: "flex",
    justifyContent: "center",
    gap: 32,
    fontSize: 14,
  },
  footer: {
    background: "#0F172A",
    color: "#fff",
    padding: "50px 60px 30px",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
    gap: 32,
  },
  footerBrand: { fontSize: 24, fontWeight: 800, color: "#3B82F6", marginBottom: 12 },
  footerAddress: { fontSize: 13, lineHeight: 1.8, color: "#94A3B8" },
  footerColTitle: { fontSize: 12, fontWeight: 700, letterSpacing: 1, color: "#fff", marginBottom: 12, textTransform: "uppercase" as const },
  footerLink: { display: "block", fontSize: 13, color: "#3B82F6", marginBottom: 6, textDecoration: "none" },
  footerBottom: {
    background: "#020617",
    color: "#64748B",
    textAlign: "center" as const,
    padding: "16px 60px",
    fontSize: 12,
  },
};

const JobPlacementSupportPage: React.FC = () => {
  return (
    <div style={styles.page}>

      {/* ── HERO ── */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroOverlay2} />
        <div style={styles.heroText}>
          <h1 style={styles.heroHeading}>
            Making<br />
            the right<br />
            career move<br />
            happen
          </h1>
        </div>
        <div style={styles.heroImagePlaceholder}>[ Job Placement Hero Image ]</div>
      </section>

      {/* ── INTRO ── */}
      <section style={styles.introSection}>
        <div style={styles.introImageBox}>
          <p style={styles.introImageInnerText}>Making the right<br />opportunity happen</p>
        </div>
        <div style={styles.introBody}>
          <p style={styles.introPara}>
            Finding the right job is not just about sending applications — it is about positioning yourself correctly in a competitive market, understanding what employers truly seek, and having the right support at every step of the journey.
          </p>
          <p style={styles.introPara}>
            With more than two decades of experience connecting talent with leading organisations, we are uniquely positioned to guide candidates toward roles that align not just with their skills, but with their ambitions, values, and long-term career goals.
          </p>
          <p style={styles.introPara}>
            Our job placement support goes beyond a simple job board. We provide end-to-end assistance — from resume building and interview preparation to employer connects and offer negotiation — ensuring that every candidate we support is set up for lasting success.
          </p>
          <p style={styles.introPara}>
            Whether you are a fresh graduate entering the workforce for the first time or an experienced professional seeking your next big move, our expert team and deep employer network are here to make it happen.
          </p>
        </div>
      </section>

      {/* ── CARDS ── */}
      <section style={styles.cardsSection}>
        <h2 style={styles.sectionHeading}>
          Making <em style={styles.sectionHeadingItalic}>seamless job placement happen</em>
        </h2>
        <div style={styles.cardsGrid}>
          {[
            { icon: "📄", title: "Resume & Profile Building", body: "Our career advisors help candidates craft compelling resumes and LinkedIn profiles that stand out. We focus on showcasing achievements, quantifying impact, and aligning your profile with employer expectations in your target industry." },
            { icon: "🤝", title: "Employer Connect & Referrals", body: "We leverage our network of 2,500+ employer partners across industries to connect candidates directly with hiring managers. Our warm referrals significantly increase interview conversion rates compared to cold applications." },
            { icon: "🎤", title: "Interview Preparation", body: "From mock interviews to domain-specific Q&A coaching, we prepare candidates comprehensively. Our structured preparation covers technical rounds, case studies, HR interviews, and executive-level leadership conversations." },
            { icon: "💼", title: "Offer Negotiation & Onboarding", body: "We guide candidates through the critical final stages — evaluating offers, negotiating compensation, and ensuring a smooth transition into their new role. Our support does not end at the offer letter." },
          ].map((c) => (
            <div key={c.title} style={styles.card}>
              <div style={styles.cardIcon}>{c.icon}</div>
              <div>
                <h3 style={styles.cardTitle}>{c.title}</h3>
                <p style={styles.cardBody}>{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GOLD BANNER ── */}
      <section style={styles.goldBanner}>
        <div style={styles.goldBannerText}>
          <p style={styles.goldBannerPara}>
            Candidates rely on trusted guidance to make the right career decisions. The right support can mean the difference between a missed opportunity and a life-changing role. But how do you know who to trust with something this important?
          </p>
          <p style={styles.goldBannerPara}>
            Our vast network of candidates and employers across experience levels allows us to match the right person to the right opportunity. Whether you are looking for your first job, a lateral move, or a senior leadership role, we make it happen.
          </p>
          <p style={styles.goldBannerPara}>
            We span the complete career support supply chain — from skill gap analysis and resume building to employer introductions, interview coaching, and offer management — to ensure you land the role that propels your career forward.
          </p>
          <p style={styles.goldBannerPara}>Here's how we are able to do that:</p>
        </div>
        <div style={styles.goldBannerImageBox}>
          <p style={{ fontFamily: "'Georgia',serif", fontStyle: "italic", fontSize: 30, fontWeight: 700, lineHeight: 1.3, margin: 0, padding: 20 }}>
            Making<br />career<br />transitions<br />from campus<br />to boardroom<br />happen
          </p>
        </div>
      </section>

      {/* ── ICON ROW ── */}
      <div style={styles.iconRow}>
        {[
          { icon: "🏢", label: "Our extensive network of 2,500+ employer partners across all major industries." },
          { icon: "🧑‍💼", label: "Our access to candidates across experience levels for targeted placement." },
          { icon: "⭐", label: "Our experience with the placement of 1,000+ CXO-level professionals over the years." },
          { icon: "🌐", label: "Our network of more than 5 million professionals across industry verticals." },
          { icon: "🎯", label: "Our ability to become your one-stop career support and placement partner." },
          { icon: "🧭", label: "Our unbiased assistance to candidates so they can navigate opportunities better." },
        ].map((item, i) => (
          <div key={i} style={styles.iconCell}>
            <div style={styles.iconCircle}>{item.icon}</div>
            <p style={styles.iconLabel}>{item.label}</p>
          </div>
        ))}
      </div>

      {/* ── TECH SECTION ── */}
      <section style={styles.techSection}>
        <div style={styles.techImageBox}>
          <p style={styles.techImageText}>Making<br />AI powered<br />job matching<br />happen</p>
        </div>
        <div style={styles.techBody}>
          <p style={styles.techPara}>
            Job placement in the past was driven by newspapers, walk-in interviews, and word-of-mouth referrals. We have been at the forefront of the transformation that has made recruitment faster, smarter, and more accurate than ever before.
          </p>
          <p style={styles.techPara}>
            We have seen how job matching has evolved from paper applications to intelligent AI-driven platforms. That experience gives us the foresight to help candidates navigate modern recruitment processes and stand out in a crowded market.
          </p>
          <p style={styles.techPara}>
            With the help of our group company HirePro, we deploy AI-powered job matching, automated skill assessments, and data-driven career coaching tools that give every candidate a significant advantage in their job search.
          </p>
          <p style={styles.techPara}>
            Our platform delivers personalised job recommendations, real-time application tracking, and structured feedback from every interview — turning each experience into a stepping stone toward the right opportunity.
          </p>
        </div>
      </section>

      {/* ── FEATURE CARDS ── */}
      <section style={styles.featureSection}>
        <div style={styles.featureGrid}>
          {[
            { icon: "🖥️", title: "End to end virtual placement", body: "From profile creation and assessments to virtual interviews, offer letters, and onboarding — fully digital." },
            { icon: "📝", title: "Skill assessments", body: "Validated assessments that benchmark candidate skills and match them accurately to the right job openings." },
            { icon: "🎥", title: "High volume video interviews", body: "Scalable interview infrastructure with automatic ID verification and impersonation prevention." },
            { icon: "📱", title: "Seamless digital onboarding", body: "Fully digitised candidate engagement and document collection for a smooth joining experience." },
            { icon: "⚙️", title: "Complete automation", body: "Automated screening, job matching, interview scheduling, offer management, and placement tracking." },
            { icon: "🧩", title: "Career advisory services", body: "Expert guidance on career strategy, role selection, compensation benchmarking, and long-term career planning." },
          ].map((f) => (
            <div key={f.title} style={styles.featureCard}>
              <div style={styles.featureIcon}>{f.icon}</div>
              <h4 style={styles.featureTitle}>{f.title}</h4>
              <p style={styles.featureBody}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div style={styles.ctaBanner}>
        Visit <span style={styles.ctaSpan}>HirePro</span> to explore a whole new world of placement automation.
      </div>

      {/* ── NEW JOB PLACEMENT SUPPORT EXPERTISE SECTION ── */}
      <section style={styles.expertiseSection}>
        <h2 style={styles.expertiseHeading}>JOB PLACEMENT SUPPORT EXPERTISE</h2>
        <p style={styles.expertiseSubheading}>Empowering Careers Through Placement Support & Global Opportunities</p>
        
        <p style={styles.expertiseText}>
          At Data Artisans, we help students, freshers, and working professionals achieve successful careers 
          through dedicated job placement support, outsourcing solutions, CV marketing services, and 
          professional career guidance.
        </p>
        
        <p style={styles.expertiseText}>
          Our goal is to bridge the gap between talent and industry by providing practical career support, 
          professional mentoring, and access to opportunities across India and international markets.
        </p>
        
        <p style={styles.expertiseText}>
          We work closely with hiring partners, recruiters, consulting firms, and industry professionals to help 
          candidates improve employability, build strong professional profiles, and secure career opportunities 
          in competitive job markets.
        </p>
        
        <div style={styles.expertiseList}>
          <div style={styles.expertiseListItem}>✔ Placement Assistance</div>
          <div style={styles.expertiseListItem}>✔ CV Marketing Services</div>
          <div style={styles.expertiseListItem}>✔ Outsourcing Support</div>
          <div style={styles.expertiseListItem}>✔ Interview Preparation</div>
          <div style={styles.expertiseListItem}>✔ Resume Optimization</div>
          <div style={styles.expertiseListItem}>✔ Career Mentorship</div>
        </div>
        
        <p style={styles.expertiseText}>
          Helping candidates build successful careers with confidence and industry readiness.
        </p>

        <h3 style={styles.serviceHeading}>ABOUT OUR SERVICES</h3>
        <h4 style={styles.serviceSubheading}>Career-Focused Placement Solutions</h4>
        
        <p style={styles.expertiseText}>
          At Data Artisans, we understand that building a successful career requires more than technical skills. 
          Candidates need the right guidance, professional presentation, interview preparation, and industry 
          exposure to secure opportunities in today's competitive market.
        </p>
        
        <p style={styles.expertiseText}>
          Our placement support services are designed to help candidates identify suitable career 
          opportunities, strengthen professional profiles, and improve hiring success rates through structured 
          career guidance and industry-focused support.
        </p>
        
        <p style={styles.expertiseText}>
          We provide personalized assistance for freshers, experienced professionals, career switchers, and 
          international job aspirants looking to explore opportunities across various industries and 
          technologies.
        </p>

        <h3 style={styles.serviceHeading}>OUR SERVICES</h3>
        <h4 style={styles.serviceSubheading}>End-To-End Career Support Services</h4>
        
        <div style={styles.serviceGrid}>
          <div style={styles.serviceItem}>
            <div style={styles.serviceItemTitle}>Job Placement Support</div>
            <div style={styles.serviceItemDesc}>Comprehensive placement assistance for IT and Non-IT candidates through industry-focused preparation and opportunity mapping.</div>
          </div>
          <div style={styles.serviceItem}>
            <div style={styles.serviceItemTitle}>CV Marketing Services</div>
            <div style={styles.serviceItemDesc}>Professional resume marketing services to help candidates increase visibility among recruiters, consulting firms, and hiring companies.</div>
          </div>
          <div style={styles.serviceItem}>
            <div style={styles.serviceItemTitle}>Resume Building & Optimization</div>
            <div style={styles.serviceItemDesc}>Creating ATS-friendly, professionally structured resumes that highlight skills, projects, experience, and achievements effectively.</div>
          </div>
          <div style={styles.serviceItem}>
            <div style={styles.serviceItemTitle}>LinkedIn Profile Optimization</div>
            <div style={styles.serviceItemDesc}>Professional LinkedIn enhancement to improve recruiter visibility and networking opportunities.</div>
          </div>
          <div style={styles.serviceItem}>
            <div style={styles.serviceItemTitle}>Outsourcing Services</div>
            <div style={styles.serviceItemDesc}>Providing outsourcing support solutions for businesses and professionals across technical and operational domains.</div>
          </div>
          <div style={styles.serviceItem}>
            <div style={styles.serviceItemTitle}>Interview Preparation</div>
            <div style={styles.serviceItemDesc}>Mock interviews, technical interview guidance, HR preparation, and communication skill development.</div>
          </div>
          <div style={styles.serviceItem}>
            <div style={styles.serviceItemTitle}>Career Guidance & Mentorship</div>
            <div style={styles.serviceItemDesc}>Personalized career counselling to help candidates choose the right technology, domain, and career path based on market demand and future growth.</div>
          </div>
          <div style={styles.serviceItem}>
            <div style={styles.serviceItemTitle}>International Job Guidance</div>
            <div style={styles.serviceItemDesc}>Support for candidates exploring overseas opportunities, global career planning, and international professional growth.</div>
          </div>
        </div>

        <h3 style={styles.serviceHeading}>OUTSOURCING SERVICES</h3>
        <h4 style={styles.serviceSubheading}>Professional Outsourcing Solutions</h4>
        
        <p style={styles.expertiseText}>
          Data Artisans provides outsourcing support services for businesses seeking reliable professionals and 
          scalable workforce solutions.
        </p>
        
        <p style={styles.expertiseText}>
          We assist organizations with talent sourcing, technical resource support, operational staffing, and 
          project-based workforce requirements across multiple domains.
        </p>
        
        <div style={styles.expertiseList}>
          <div style={styles.expertiseListItem}>✔ Technical Resource Support</div>
          <div style={styles.expertiseListItem}>✔ Contract Staffing Assistance</div>
          <div style={styles.expertiseListItem}>✔ Remote Workforce Solutions</div>
          <div style={styles.expertiseListItem}>✔ Project-Based Hiring Support</div>
          <div style={styles.expertiseListItem}>✔ Business Operations Assistance</div>
          <div style={styles.expertiseListItem}>✔ Flexible Staffing Models</div>
        </div>
        
        <p style={styles.expertiseText}>
          Our outsourcing services help businesses improve productivity, optimize operational efficiency, and 
          access skilled professionals quickly.
        </p>

        <h3 style={styles.serviceHeading}>CV MARKETING SERVICES</h3>
        <h4 style={styles.serviceSubheading}>Professional CV Marketing & Profile Branding</h4>
        
        <p style={styles.expertiseText}>
          Our CV marketing services are designed to increase candidate visibility and improve job search 
          effectiveness.
        </p>
        
        <p style={styles.expertiseText}>
          We help candidates professionally present their skills, experience, certifications, and project 
          expertise to recruiters and hiring organizations.
        </p>
        
        <div style={styles.expertiseList}>
          <div style={styles.expertiseListItem}>✔ ATS-Friendly Resume Preparation</div>
          <div style={styles.expertiseListItem}>✔ Professional Profile Enhancement</div>
          <div style={styles.expertiseListItem}>✔ LinkedIn Optimization</div>
          <div style={styles.expertiseListItem}>✔ Job Portal Profile Management</div>
          <div style={styles.expertiseListItem}>✔ Recruiter Outreach Support</div>
          <div style={styles.expertiseListItem}>✔ Career Positioning Guidance</div>
        </div>
        
        <p style={styles.expertiseText}>
          We focus on creating strong professional branding that helps candidates stand out in competitive job 
          markets.
        </p>

        <h3 style={styles.serviceHeading}>PLACEMENT GUIDANCE</h3>
        <h4 style={styles.serviceSubheading}>Complete Career Guidance & Placement Assistance</h4>
        
        <p style={styles.expertiseText}>
          At Data Artisans, we provide strategic career support to help candidates confidently prepare for 
          interviews and placement opportunities.
        </p>
        
        <div style={styles.expertiseList}>
          <div style={styles.expertiseListItem}>✔ Career Roadmap Planning</div>
          <div style={styles.expertiseListItem}>✔ Technology & Domain Guidance</div>
          <div style={styles.expertiseListItem}>✔ Resume & Portfolio Support</div>
          <div style={styles.expertiseListItem}>✔ Mock Interviews</div>
          <div style={styles.expertiseListItem}>✔ HR Interview Preparation</div>
          <div style={styles.expertiseListItem}>✔ Communication Skill Development</div>
          <div style={styles.expertiseListItem}>✔ Job Search Strategy Guidance</div>
          <div style={styles.expertiseListItem}>✔ Professional Mentorship</div>
        </div>
        
        <p style={styles.expertiseText}>
          Our placement-focused approach helps candidates improve confidence, technical readiness, and 
          interview performance.
        </p>

        <h3 style={styles.serviceHeading}>WHY CHOOSE DATA ARTISANS</h3>
        <h4 style={styles.serviceSubheading}>Why Candidates Trust Us</h4>
        
        <div style={styles.expertiseList}>
          <div style={styles.expertiseListItem}>✔ Industry-Focused Career Support</div>
          <div style={styles.expertiseListItem}>✔ Experienced Mentorship</div>
          <div style={styles.expertiseListItem}>✔ Placement-Oriented Guidance</div>
          <div style={styles.expertiseListItem}>✔ Professional CV Marketing</div>
          <div style={styles.expertiseListItem}>✔ Real-Time Career Assistance</div>
          <div style={styles.expertiseListItem}>✔ Flexible Support Models</div>
          <div style={styles.expertiseListItem}>✔ Personalized Career Planning</div>
          <div style={styles.expertiseListItem}>✔ End-To-End Professional Guidance</div>
        </div>
        
        <p style={styles.expertiseText}>
          We focus on helping candidates build strong professional profiles and achieve sustainable long-term 
          career growth.
        </p>

        <h3 style={styles.serviceHeading}>WHO CAN BENEFIT</h3>
        <h4 style={styles.serviceSubheading}>Designed For</h4>
        
        <div style={styles.whoList}>
          <span style={styles.whoItem}>Freshers</span>
          <span style={styles.whoItem}>Experienced Professionals</span>
          <span style={styles.whoItem}>IT & Non-IT Candidates</span>
          <span style={styles.whoItem}>Career Switchers</span>
          <span style={styles.whoItem}>International Job Aspirants</span>
          <span style={styles.whoItem}>Professionals Seeking Career Growth</span>
        </div>
        
        <p style={styles.expertiseText}>
          Whether you are starting your career or planning your next professional move, our services are 
          designed to help you achieve your career goals effectively.
        </p>

        <h3 style={styles.serviceHeading}>OUR PROCESS</h3>
        <h4 style={styles.serviceSubheading}>How We Support Candidates</h4>
        
        <div style={styles.processGrid}>
          <div style={styles.processStep}>
            <div style={styles.processNumber}>1</div>
            <div style={styles.serviceItemTitle}>Profile Evaluation</div>
            <div style={styles.serviceItemDesc}>Understanding skills, experience, and career objectives.</div>
          </div>
          <div style={styles.processStep}>
            <div style={styles.processNumber}>2</div>
            <div style={styles.serviceItemTitle}>Career Consultation</div>
            <div style={styles.serviceItemDesc}>Identifying suitable opportunities and career paths.</div>
          </div>
          <div style={styles.processStep}>
            <div style={styles.processNumber}>3</div>
            <div style={styles.serviceItemTitle}>Resume & Profile Enhancement</div>
            <div style={styles.serviceItemDesc}>Professional CV optimization and branding support.</div>
          </div>
          <div style={styles.processStep}>
            <div style={styles.processNumber}>4</div>
            <div style={styles.serviceItemTitle}>Placement Preparation</div>
            <div style={styles.serviceItemDesc}>Interview guidance, technical preparation, and mentorship.</div>
          </div>
          <div style={styles.processStep}>
            <div style={styles.processNumber}>5</div>
            <div style={styles.serviceItemTitle}>Opportunity Support</div>
            <div style={styles.serviceItemDesc}>Connecting candidates with relevant hiring opportunities.</div>
          </div>
          <div style={styles.processStep}>
            <div style={styles.processNumber}>6</div>
            <div style={styles.serviceItemTitle}>Career Growth Assistance</div>
            <div style={styles.serviceItemDesc}>Continuous guidance for long-term professional development.</div>
          </div>
        </div>

        <div style={styles.ctaSmall}>
          <div style={styles.ctaSmallText}>Take The Next Step In Your Career</div>
          <p style={{ fontSize: 14, marginBottom: 20 }}>
            Build a strong professional future with expert placement support, CV marketing services, outsourcing 
            solutions, and career guidance from Data Artisans.
          </p>
          <div style={styles.contactInfo}>
            <span>📞 +91 XXXXX XXXXX</span>
            <span>✉️ info@dataartisans.com</span>
            <span>🌐 www.dataartisans.com</span>
          </div>
          <p style={{ fontSize: 13, marginTop: 20, fontStyle: "italic" }}>
            Build Skills. Create Opportunities. Achieve Career Success.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div style={styles.footer}>
          <div>
            <div style={styles.footerBrand}>Data Artisans</div>
            <div style={styles.footerAddress}>Making the right career move happen</div>
          </div>
          <div>
            <div style={styles.footerColTitle}>Quick Links</div>
            <a href="#" style={styles.footerLink}>Home</a>
            <a href="#" style={styles.footerLink}>About</a>
            <a href="#" style={styles.footerLink}>Services</a>
            <a href="#" style={styles.footerLink}>Contact</a>
          </div>
          <div>
            <div style={styles.footerColTitle}>Support</div>
            <a href="#" style={styles.footerLink}>Placement Support</a>
            <a href="#" style={styles.footerLink}>CV Marketing</a>
            <a href="#" style={styles.footerLink}>Outsourcing</a>
            <a href="#" style={styles.footerLink}>Interview Prep</a>
          </div>
          <div>
            <div style={styles.footerColTitle}>Resources</div>
            <a href="#" style={styles.footerLink}>Blog</a>
            <a href="#" style={styles.footerLink}>FAQs</a>
            <a href="#" style={styles.footerLink}>Career Guides</a>
          </div>
          <div>
            <div style={styles.footerColTitle}>Connect</div>
            <a href="#" style={styles.footerLink}>LinkedIn</a>
            <a href="#" style={styles.footerLink}>Twitter</a>
            <a href="#" style={styles.footerLink}>Facebook</a>
          </div>
        </div>
        <div style={styles.footerBottom}>
          © 2024 Data Artisans. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default JobPlacementSupportPage;