import React from "react";

// ─── Theme tokens ────────────────────────────────────────────────────────────
// Primary blue : #2563eb
// Light blue   : #3b82f6
// Dark blue    : #1e3a8a
// White        : #FFFFFF
// Light grey bg: #F7F7F7
// ─────────────────────────────────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  // ── Global ──────────────────────────────────────────────────────────────
  page: {
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    color: "#1A1A1A",
    margin: 0,
    padding: 0,
    overflowX: "hidden",
  },

  // ── Hero banner ─────────────────────────────────────────────────────────
  hero: {
    background: "linear-gradient(135deg, rgba(37,99,235,0.85) 0%, rgba(30,58,138,0.85) 100%)",
    color: "#1940cf",
    padding: "80px 60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center" as const,
    minHeight: 620,
    position: "relative",
    overflow: "hidden",
    backgroundImage: 'url("/training.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
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
  heroText: {
    maxWidth: 800,
    zIndex: 1,
    margin: "0 auto",
  },
  heroHeading: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    fontStyle: "italic",
    fontSize: 52,
    fontWeight: 700,
    lineHeight: 1.15,
    margin: 0,
  },
  heroSubheading: {
    fontSize: 18,
    marginTop: 20,
    opacity: 0.9,
  },
  heroImagePlaceholder: {
    display: "none",
  },

  // ── Two-col intro section ───────────────────────────────────────────────
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
    overflow: "hidden",
    position: "relative",
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
  introBody: {
    flex: 1,
  },
  introPara: {
    fontSize: 15,
    lineHeight: 1.75,
    color: "#333",
    marginBottom: 18,
  },

  // ── Section heading ─────────────────────────────────────────────────────
  sectionHeading: {
    fontSize: 36,
    fontWeight: 700,
    color: "#1A1A1A",
    marginBottom: 48,
  },
  sectionHeadingItalic: {
    fontStyle: "italic",
    color: "#2563eb",
  },

  // ── Cards grid ──────────────────────────────────────────────────────────
  cardsSection: {
    background: "#F7F7F7",
    padding: "60px 60px",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 32,
  },
  card: {
    borderRadius: 12,
    padding: "32px 28px",
    display: "flex",
    gap: 20,
    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  cardDefault: {
    background: "#fff",
  },
  cardBlue: {
    background: "#2563eb",
  },
  cardIcon: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 26,
    transition: "all 0.3s ease",
  },
  cardIconWhite: {
    background: "#fff",
  },
  cardTitle: {
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 8,
    marginTop: 0,
    transition: "color 0.3s ease",
  },
  cardTitleBlue: {
    color: "#2563eb",
  },
  cardTitleWhite: {
    color: "#fff",
  },
  cardBody: {
    fontSize: 14,
    lineHeight: 1.7,
    margin: 0,
    transition: "color 0.3s ease",
  },
  cardBodyDark: {
    color: "#444",
  },
  cardBodyWhite: {
    color: "#fff",
  },

  // ── Blue Banner ───────────────────────────────────────────────
  goldBanner: {
    background: "#dbeafe",
    padding: "70px 60px",
    display: "flex",
    alignItems: "center",
    gap: 60,
  },
  goldBannerText: {
    flex: 1,
    color: "#1A1A1A",
  },
  goldBannerPara: {
    fontSize: 15,
    lineHeight: 1.75,
    marginBottom: 16,
    color: "#1A1A1A",
  },
  goldBannerHeading: {
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
    fontSize: 38,
    fontWeight: 700,
    color: "#1A1A1A",
    lineHeight: 1.2,
    marginBottom: 24,
    marginTop: 0,
  },
  goldBannerImageBox: {
    width: 340,
    height: 380,
    borderRadius: 12,
    background: "linear-gradient(145deg, #2563eb 0%, #1e3a8a 100%)",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 16,
    textAlign: "center" as const,
  },

  // ── 2 Column Layout Section ──────────────────────────────────────────────
  twoColumnSection: {
    background: "#dbeafe",
    padding: "60px 60px",
  },
  twoColumnGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48,
  },
  leftColumn: {
    paddingRight: 24,
  },
  rightColumn: {
    paddingLeft: 24,
  },

  // ── Single column icon list (icon beside text) ───────────────────────────
  iconList: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 10,
  },
  iconListItem: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  iconCircleSmall: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: "rgba(37,99,235,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    flexShrink: 0,
  },
  iconLabelText: {
    fontSize: 14,
    lineHeight: 1.5,
    color: "#1A1A1A",
    fontWeight: 500,
  },

  // ── Why Choose List ───────────────────────────────────────────────────────
  whyChooseList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  whyChooseItem: {
    fontSize: 14,
    lineHeight: 1.8,
    marginBottom: 1,
    color: "#1A1A1A",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

 // ── Tech section ────────────────────────────────────────────────────
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
  overflow: "hidden",
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f0f4ff",
},
techImageText: {
  fontFamily: "'Georgia', serif",
  fontStyle: "italic",
  fontSize: 28,
  fontWeight: 700,
  lineHeight: 1.3,
},
techBody: { flex: 1 },
techPara: {
  fontSize: 15,
  lineHeight: 1.75,
  color: "#333",
  marginBottom: 18,
},

  // ── Six feature cards ──────────────────────────────────────────────────────
  featureSection: {
    background: "#F7F7F7",
    padding: "60px 60px",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 28,
  },
  featureCard: {
    background: "#fff",
    borderRadius: 10,
    padding: "24px 20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  featureCardHover: {
    background: "#2563eb",
  },
  featureIcon: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    marginBottom: 14,
    transition: "all 0.3s ease",
  },
  featureIconHover: {
    background: "#fff",
  },
  featureTitle: {
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
    fontSize: 16,
    fontWeight: 700,
    color: "#2563eb",
    marginBottom: 8,
    marginTop: 0,
    transition: "color 0.3s ease",
  },
  featureTitleHover: {
    color: "#fff",
  },
  featureBody: {
    fontSize: 13,
    lineHeight: 1.65,
    color: "#555",
    margin: 0,
    transition: "color 0.3s ease",
  },
  featureBodyHover: {
    color: "#fff",
  },

  // ── CTA Banner ───────────────────────────────────────────────────────────
  ctaBanner: {
    background: "#1e3a8a",
    color: "#fff",
    textAlign: "center" as const,
    padding: "48px 60px",
    fontSize: 22,
    fontWeight: 700,
  },
  ctaSpan: { color: "#60a5fa" },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    background: "#111827",
    color: "#fff",
    padding: "50px 60px 30px",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
    gap: 32,
  },
  footerBrand: { fontSize: 24, fontWeight: 800, color: "#2563eb", marginBottom: 12 },
  footerAddress: { fontSize: 13, lineHeight: 1.8, color: "#aaa" },
  footerColTitle: { fontSize: 12, fontWeight: 700, letterSpacing: 1, color: "#fff", marginBottom: 12, textTransform: "uppercase" as const },
  footerLink: { display: "block", fontSize: 13, color: "#60a5fa", marginBottom: 6, textDecoration: "none" },
  footerBottom: {
    background: "#0d1117",
    color: "#666",
    textAlign: "center" as const,
    padding: "16px 60px",
    fontSize: 12,
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

const TrainingPage: React.FC = () => {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);
  const [hoveredFeatureCard, setHoveredFeatureCard] = React.useState<number | null>(null);

  const trainingPrograms = [
    { icon: "☁️", title: "Azure Data Engineer", body: "Learn Azure Data Factory, Databricks, Synapse Analytics, Data Lakes, and enterprise cloud data engineering solutions." },
    { icon: "📊", title: "Data Analytics", body: "Master Excel, Power BI, SQL, Tableau, Alteryx, and Python with real-world analytics projects and dashboard development." },
    { icon: "📈", title: "Business Intelligence & Visualization", body: "Build interactive dashboards and data visualization solutions using Tableau and Power BI for business reporting and analytics." },
    { icon: "🤖", title: "AI & Machine Learning", body: "Learn Python, Machine Learning, MLOps, model deployment, MLflow, SageMaker, Kubeflow, and AI workflows through hands-on projects." },
    { icon: "🧠", title: "Generative AI & Agentic AI", body: "Learn Prompt Engineering, LLMs, AI Agents, LangChain, RAG Applications, Multi-Agent Systems, OpenAI APIs, Automation Workflows, and Agentic AI development through hands-on real-time projects." },
    { icon: "⚙️", title: "AWS DevOps", body: "Gain expertise in AWS infrastructure, CI/CD pipelines, Docker, Kubernetes, Terraform, monitoring, and cloud automation." },
    { icon: "🐍", title: "Python Full Stack Development", body: "Build scalable web applications using Python, Django, APIs, databases, and front-end technologies with practical implementation." },
    { icon: "☕", title: "Java Full Stack Development", body: "Master Java, Spring Boot, APIs, databases, cloud deployment, and enterprise application development." },
  ];

  const careerSupportFeatures = [
    { icon: "📄", title: "Resume Building", body: "Professional resume crafting tailored to industry standards." },
    { icon: "🔗", title: "LinkedIn Profile Optimization", body: "Enhance your online presence to attract recruiters." },
    { icon: "🎭", title: "Mock Interviews", body: "Practice with industry experts to build confidence." },
    { icon: "💻", title: "Technical Interview Preparation", body: "Master coding challenges and technical questions." },
    { icon: "🎓", title: "Career Mentorship", body: "Guidance from experienced industry professionals." },
    { icon: "🏢", title: "Placement Assistance", body: "Connect with top companies for job opportunities." },
  ];

  const trainingMethodologies = [
    { icon: "📚", label: "Interactive Instructor-Led Sessions" },
    { icon: "🏗️", label: "Real-Time Industry Projects" },
    { icon: "📋", label: "Case Study-Based Learning" },
    { icon: "✏️", label: "Assignments & Assessments" },
    { icon: "🔬", label: "Practical Labs & Exercises" },
    { icon: "🎯", label: "Interview-Oriented Preparation" },
    { icon: "🤝", label: "Continuous Mentorship Support" },
    { icon: "💡", label: "Learn By Doing - Practical Implementation" },
    { icon: "📈", label: "Career Growth & Placement Support" },
  ];

  const whyChoosePoints = [
    "Industry Expert Trainers",
    "Real-Time Project Exposure",
    "Hands-On Practical Sessions",
    "Placement Assistance",
    "Resume & Interview Preparation",
    "Flexible Online & Offline Training",
    "Certification Support",
    "Beginner to Advanced Learning Paths",
  ];

  // Helper function to determine if a card should be blue (active)
  const isCardBlue = (index: number): boolean => {
    if (hoveredCard !== null) {
      return hoveredCard === index;
    }
    return index === 0;
  };

  return (
    <div style={styles.page}>

      {/* ── HERO ── */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroOverlay2} />
        <div style={styles.heroText}>
          <h1 style={styles.heroHeading}>
            Build Your Future<br />
            with Industry-Focused<br />
            Software Training
          </h1>
          <p style={styles.heroSubheading}>
            Practical Learning. Real Careers.
          </p>
        </div>
        <div style={styles.heroImagePlaceholder}>
          [ Software Training Hero Image ]
        </div>
      </section>

      {/* ── INTRO TWO-COL ── */}
      <section style={styles.introSection}>
        <div style={styles.introImageBox}>
          <img 
            src="/training-img1.jpg" 
            alt="Software Training"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 16,
            }}
          />
        </div>
        <div style={styles.introBody}>
          <p style={styles.introPara}>
            At Data Artisans, we empower students, freshers, and working professionals with industry-ready 
            technical skills through advanced software training programs designed for real-world careers.
          </p>
          <p style={styles.introPara}>
            Our training programs are carefully structured to bridge the gap between academic learning and 
            industry requirements by combining practical training, live projects, expert mentorship, and 
            placement-focused learning.
          </p>
          <p style={styles.introPara}>
            We help learners gain hands-on experience in trending technologies, cloud platforms, data 
            engineering, analytics, AI, software development, DevOps, ERP solutions, and enterprise tools.
          </p>
          <p style={styles.introPara}>
            Inspired by modern IT training platforms, our focus is on practical learning, industry relevance, and 
            career transformation.
          </p>
        </div>
      </section>

      {/* ── OUR TRAINING PROGRAMS SECTION ── */}
      <section style={styles.cardsSection}>
        <h2 style={styles.sectionHeading}>
          Our <em style={styles.sectionHeadingItalic}>Training Programs</em>
        </h2>
        <div style={styles.cardsGrid}>
          {trainingPrograms.map((c, index) => {
            const isBlue = isCardBlue(index);
            return (
              <div 
                key={c.title} 
                style={{
                  ...styles.card,
                  ...(isBlue ? styles.cardBlue : styles.cardDefault)
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div>
                  <h3 style={{
                    ...styles.cardTitle,
                    ...(isBlue ? styles.cardTitleWhite : styles.cardTitleBlue)
                  }}>{c.title}</h3>
                  <p style={{
                    ...styles.cardBody,
                    ...(isBlue ? styles.cardBodyWhite : styles.cardBodyDark)
                  }}>{c.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 2 COLUMN SECTION: WHY CHOOSE + TRAINING METHODOLOGY ── */}
      <section style={styles.twoColumnSection}>
        <div style={styles.twoColumnGrid}>
          {/* Left Column - Why Choose Data Artisans */}
          <div style={styles.leftColumn}>
            <h2 style={styles.goldBannerHeading}>Why Choose Data Artisans</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, marginBottom: 20, color: "#1A1A1A" }}>
              <strong>Practical Learning. Real Careers.</strong>
            </p>
            <ul style={styles.whyChooseList}>
              {whyChoosePoints.map((point, index) => (
                <li key={index} style={styles.whyChooseItem}>
                  <span style={{ color: "#2563eb", fontSize: 18 }}>✔</span> {point}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 14, lineHeight: 1.75, marginTop: 20, color: "#1A1A1A" }}>
              Our programs are designed to provide practical exposure and real-world implementation experience 
              so learners can confidently transition into successful IT careers.
            </p>
          </div>

          {/* Right Column - Training Methodology (Single column with icon beside text) */}
          <div style={styles.rightColumn}>
            <h2 style={styles.goldBannerHeading}>Training Methodology</h2>
            <div style={styles.iconList}>
              {trainingMethodologies.map((item, i) => (
                <div key={i} style={styles.iconListItem}>
                  <div style={styles.iconCircleSmall}>{item.icon}</div>
                  <p style={styles.iconLabelText}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* ── WHO CAN JOIN SECTION ── */}
<section style={styles.techSection}>
  <div style={styles.techImageBox}>
    <img 
      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=360&fit=crop"
      alt="Students learning together - Diverse group studying"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 12,
      }}
    />
  </div>
  <div style={styles.techBody}>
    <p style={styles.techPara}>
      <strong>Programs Designed For:</strong>
    </p>
    <p style={styles.techPara}>
      🎓 Freshers &nbsp;&nbsp;|&nbsp;&nbsp; 💼 Working Professionals &nbsp;&nbsp;|&nbsp;&nbsp; 🔄 Career Switchers<br />
      💻 Non-IT Professionals &nbsp;&nbsp;|&nbsp;&nbsp; ☁️ Cloud & DevOps Aspirants &nbsp;&nbsp;|&nbsp;&nbsp; 🤖 AI & Data Enthusiasts
    </p>
    <p style={styles.techPara}>
      Whether you are starting your career or upgrading your technical skills, our programs are tailored to 
      help you achieve your professional goals.
    </p>
  </div>
</section>

      {/* ── CAREER SUPPORT FEATURE CARDS ── */}
      <section style={styles.featureSection}>
        <h2 style={styles.sectionHeading}>
          Career <em style={styles.sectionHeadingItalic}>Support</em>
        </h2>
        <p style={{ fontSize: 16, color: "#555", marginBottom: 32, textAlign: "left", marginTop: -32 }}>
          End-To-End Placement Assistance
        </p>
        <div style={styles.featureGrid}>
          {careerSupportFeatures.map((f, index) => (
            <div 
              key={f.title} 
              style={{
                ...styles.featureCard,
                ...(hoveredFeatureCard === index ? styles.featureCardHover : {})
              }}
              onMouseEnter={() => setHoveredFeatureCard(index)}
              onMouseLeave={() => setHoveredFeatureCard(null)}
            >
              <div style={{
                ...styles.featureIcon,
                ...(hoveredFeatureCard === index ? styles.featureIconHover : {})
              }}>{f.icon}</div>
              <h4 style={{
                ...styles.featureTitle,
                ...(hoveredFeatureCard === index ? styles.featureTitleHover : {})
              }}>{f.title}</h4>
              <p style={{
                ...styles.featureBody,
                ...(hoveredFeatureCard === index ? styles.featureBodyHover : {})
              }}>{f.body}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 14, color: "#555", marginTop: 32, textAlign: "center" }}>
          Our objective is to help learners become industry-ready professionals equipped with practical skills and confidence.
        </p>
      </section>

      {/* ── CTA ── */}
      <div style={styles.ctaBanner}>
        <span style={styles.ctaSpan}>Start Your Tech Journey With Data Artisans</span><br />
        Upgrade your skills with industry-focused software training programs designed for real-world success.<br /><br />
        📞 +91 XXXXX XXXXX &nbsp;&nbsp;|&nbsp;&nbsp; ✉️ info@dataartisans.com &nbsp;&nbsp;|&nbsp;&nbsp; 🌐 www.dataartisans.com
      </div>

    </div>
  );
};

export default TrainingPage;