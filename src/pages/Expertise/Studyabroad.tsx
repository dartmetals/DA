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
    background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #60a5fa 100%)",
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
    background: "linear-gradient(145deg, #3b82f6 30%, #1e3a8a 100%)",
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
  sectionHeadingItalic: { fontStyle: "italic", color: "#2563eb" },
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
    background: "linear-gradient(135deg, #3b82f6, #1e3a8a)",
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
    color: "#2563eb",
    marginBottom: 8,
    marginTop: 0,
  },
  cardBody: { fontSize: 14, lineHeight: 1.7, color: "#444", margin: 0 },
  goldBanner: {
    background: "#3b82f6",
    padding: "70px 60px",
    display: "flex",
    alignItems: "center",
    gap: 60,
  },
  goldBannerText: { flex: 1, color: "#fff" },
  goldBannerPara: { fontSize: 15, lineHeight: 1.75, marginBottom: 16, color: "#fff" },
  goldBannerImageBox: {
    width: 340,
    height: 380,
    borderRadius: 12,
    background: "linear-gradient(145deg, #1e3a8a 0%, #2563eb 100%)",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center" as const,
  },
  iconRow: {
    background: "#3b82f6",
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
    background: "linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)",
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
    background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
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
    color: "#2563eb",
    marginBottom: 8,
    marginTop: 0,
  },
  featureBody: { fontSize: 13, lineHeight: 1.65, color: "#555", margin: 0 },

  // ── Destination cards (unique to Study Abroad) ────────────────────────────
  destinationsSection: { background: "#fff", padding: "60px 60px" },
  destGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 40 },
  destCard: {
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    position: "relative",
  },
  destCardTop: {
    height: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 48,
    background: "linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)",
  },
  destCardBody: { padding: "16px 18px", background: "#fff" },
  destCardTitle: {
    fontWeight: 700,
    fontSize: 16,
    color: "#2563eb",
    marginBottom: 6,
    marginTop: 0,
  },
  destCardText: { fontSize: 13, color: "#555", lineHeight: 1.6, margin: 0 },

  processSection: { background: "#F7F7F7", padding: "60px 60px" },
  processGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 40 },
  processCard: {
    background: "#fff",
    borderRadius: 12,
    padding: "28px 24px",
    textAlign: "center" as const,
    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
  },
  processNumber: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    fontWeight: 700,
    margin: "0 auto 16px",
  },
  processTitle: { fontSize: 18, fontWeight: 700, color: "#1e3a8a", marginBottom: 8 },
  processDesc: { fontSize: 13, color: "#555", lineHeight: 1.6 },

  whyChooseGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginTop: 40 },
  whyCard: {
    background: "#fff",
    borderRadius: 10,
    padding: "20px",
    textAlign: "center" as const,
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  whyIcon: { fontSize: 32, marginBottom: 12 },
  whyText: { fontSize: 13, fontWeight: 600, color: "#1e3a8a" },

  ctaBanner: {
    background: "#1A1A2E",
    color: "#fff",
    textAlign: "center" as const,
    padding: "48px 60px",
    fontSize: 22,
    fontWeight: 700,
  },
  ctaSpan: { color: "#3b82f6" },
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
  footerLink: { display: "block", fontSize: 13, color: "#3b82f6", marginBottom: 6, textDecoration: "none" },
  footerBottom: {
    background: "#0d1117",
    color: "#666",
    textAlign: "center" as const,
    padding: "16px 60px",
    fontSize: 12,
  },
};

const StudyAbroadPage: React.FC = () => {
  return (
    <div style={styles.page}>

      {/* ── HERO ── */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroOverlay2} />
        <div style={styles.heroText}>
          <h1 style={styles.heroHeading}>
            Study Abroad<br />
            Expertise
          </h1>
        </div>
        <div style={styles.heroImagePlaceholder}>[ Study Abroad Hero Image ]</div>
      </section>

      {/* ── INTRO ── */}
      <section style={styles.introSection}>
        <div style={styles.introImageBox}>
          <p style={styles.introImageInnerText}>Your Gateway<br />To Global<br />Education</p>
        </div>
        <div style={styles.introBody}>
          <p style={styles.introPara}>
            At Data Artisans, we help students turn their international education dreams into reality through expert guidance, personalized counselling, and end-to-end overseas education support.
          </p>
          <p style={styles.introPara}>
            From selecting the right university to visa processing and post-arrival assistance, we simplify every step of your study abroad journey with transparency, professionalism, and student-first support.
          </p>
          <p style={styles.introPara}>
            ✓ University Admissions &nbsp;&nbsp; ✓ Career Counselling &nbsp;&nbsp; ✓ Visa Assistance<br />
            ✓ SOP / LOR / Resume Guidance &nbsp;&nbsp; ✓ Scholarships & Education Loans &nbsp;&nbsp; ✓ Pre & Post Departure Support
          </p>
          <p style={styles.introPara}>
            Helping students build successful global careers with confidence.
          </p>
        </div>
      </section>

      {/* ── ABOUT US SECTION ── */}
      <section style={styles.cardsSection}>
        <h2 style={styles.sectionHeading}>
          About <em style={styles.sectionHeadingItalic}>Us</em>
        </h2>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={styles.introPara}>
            Data Artisans is a professional overseas education consultancy dedicated to helping students achieve their academic and career goals abroad. We guide aspiring students through every stage of the international education process — from choosing the right destination and university to visa approval and settlement support.
          </p>
          <p style={styles.introPara}>
            Our experienced counselors work closely with students and parents to understand academic backgrounds, career aspirations, financial plans, and future goals before recommending suitable universities and programs.
          </p>
          <p style={styles.introPara}>
            We believe that studying abroad is not just about earning a degree — it is about creating global exposure, developing international skills, and unlocking better career opportunities. Our mission is to make global education accessible, transparent, and stress-free for every student.
          </p>
          <p style={styles.introPara}>
            With a student-centric approach and strong partnerships with international institutions, we ensure every student receives reliable guidance and complete support throughout the process. Inspired by leading overseas education consultancy platforms, our approach focuses on transparency, personalized counselling, and long-term student success.
          </p>
        </div>
      </section>

      {/* ── SERVICES CARDS ── */}
      <section style={{ background: "#fff", padding: "60px 60px" }}>
        <h2 style={styles.sectionHeading}>
          Our <em style={styles.sectionHeadingItalic}>Services</em>
        </h2>
        <div style={styles.cardsGrid}>
          {[
            { icon: "🎓", title: "Career Counselling", body: "Our experienced counselors provide personalized guidance to help students choose the right career path, country, university, and course based on academic profile, interests, and future goals." },
            { icon: "🏛️", title: "University & Course Selection", body: "We help students shortlist top universities and programs that match their educational background, budget, and long-term career aspirations." },
            { icon: "📊", title: "Profile Evaluation", body: "Complete profile assessment to identify the best possible study opportunities and improve admission success rates." },
            { icon: "📄", title: "Documentation Assistance", body: "We provide complete support for preparing and organizing academic documents, application forms, financial records, and verification documents required for international admissions." },
            { icon: "✍️", title: "SOP / Resume / LOR Support", body: "Our experts assist students in creating impactful Statements of Purpose (SOP), resumes, and Letters of Recommendation (LOR) that strengthen university applications." },
            { icon: "📬", title: "Application Submission", body: "Dedicated application support to ensure accurate and timely submission to universities and colleges." },
            { icon: "💰", title: "Scholarship Assistance", body: "We help students identify scholarship opportunities, grants, and tuition fee benefits available across universities worldwide." },
            { icon: "🏦", title: "Education Loan Assistance", body: "Guidance for securing education loans through trusted financial institutions with simplified documentation support." },
            { icon: "🛂", title: "Visa Assistance", body: "Expert support for visa filing, documentation, interview preparation, and application processing to improve visa success rates." },
            { icon: "📝", title: "IELTS / PTE / TOEFL Guidance", body: "Support for standardized test preparation and booking assistance for international admission requirements." },
            { icon: "✈️", title: "Foreign Exchange & Travel Assistance", body: "Assistance with forex services, travel planning, accommodation guidance, and student settlement support." },
            { icon: "🏠", title: "Pre-Departure & Post-Arrival Support", body: "From travel preparation to accommodation assistance and international student orientation, we ensure a smooth transition abroad." },
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

      {/* ── DESTINATION CARDS ── */}
      <section style={styles.destinationsSection}>
        <h2 style={styles.sectionHeading}>
          Study <em style={styles.sectionHeadingItalic}>Destinations</em>
        </h2>
        <div style={styles.destGrid}>
          {[
            { flag: "🇺🇸", country: "USA", desc: "World-class universities across 50 states with diverse program offerings and cutting-edge research opportunities." },
            { flag: "🇨🇦", country: "Canada", desc: "Affordable education with high quality of life and excellent post-study work and immigration pathways." },
            { flag: "🇬🇧", country: "United Kingdom", desc: "Globally recognized degrees with shorter course durations and strong industry connections." },
            { flag: "🇦🇺", country: "Australia", desc: "Multicultural environment with globally ranked universities and strong student support systems." },
            { flag: "🇩🇪", country: "Germany", desc: "Affordable or tuition-free education with strong engineering, technology, and research focus." },
            { flag: "🇮🇪", country: "Ireland", desc: "Growing hub for technology and pharmaceutical industries with excellent post-study work options." },
            { flag: "🇳🇿", country: "New Zealand", desc: "High-quality education in a safe, welcoming environment with great work-life balance." },
            { flag: "🇪🇺", country: "Europe", desc: "Diverse study options across multiple countries with rich cultural experiences and affordable tuition." },
          ].map((d) => (
            <div key={d.country} style={styles.destCard}>
              <div style={styles.destCardTop}>{d.flag}</div>
              <div style={styles.destCardBody}>
                <h4 style={styles.destCardTitle}>{d.country}</h4>
                <p style={styles.destCardText}>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: 32, fontSize: 14, color: "#555" }}>
          We help students explore globally recognized universities and career-focused programs across the world's top education destinations.
        </p>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ background: "#F7F7F7", padding: "60px 60px" }}>
        <h2 style={styles.sectionHeading}>
          Why <em style={styles.sectionHeadingItalic}>Choose Us</em>
        </h2>
        <div style={styles.whyChooseGrid}>
          {[
            "Personalized Student Guidance",
            "Transparent Process",
            "Experienced Counsellors",
            "High Visa Success Support",
            "Global University Network",
            "End-to-End Assistance",
            "Affordable & Reliable Services",
            "Student-Focused Approach",
          ].map((item) => (
            <div key={item} style={styles.whyCard}>
              <div style={styles.whyIcon}>✓</div>
              <div style={styles.whyText}>{item}</div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: 32, fontSize: 14, color: "#555" }}>
          Our goal is to make the overseas education process simple, transparent, and successful for every student. We focus on building trust, providing genuine guidance, and helping students achieve global academic opportunities with confidence.
        </p>
      </section>

      {/* ── OUR PROCESS ── */}
      <section style={styles.processSection}>
        <h2 style={styles.sectionHeading}>
          Our <em style={styles.sectionHeadingItalic}>Process</em>
        </h2>
        <p style={{ textAlign: "center", fontSize: 18, marginBottom: 20, color: "#1e3a8a", fontWeight: 600 }}>
          Simple & Structured Process
        </p>
        <div style={styles.processGrid}>
          {[
            { step: "1", title: "Free Counselling", desc: "Understanding student profile, interests, and career goals." },
            { step: "2", title: "University Shortlisting", desc: "Selecting suitable universities and courses based on eligibility." },
            { step: "3", title: "Documentation", desc: "Preparing SOPs, resumes, academic records, and applications." },
            { step: "4", title: "Application Submission", desc: "Applying to universities with complete support." },
            { step: "5", title: "Visa Processing", desc: "Visa filing, documentation, and interview preparation." },
            { step: "6", title: "Pre-Departure Guidance", desc: "Travel, accommodation, and student settlement assistance." },
          ].map((p) => (
            <div key={p.step} style={styles.processCard}>
              <div style={styles.processNumber}>{p.step}</div>
              <h4 style={styles.processTitle}>{p.title}</h4>
              <p style={styles.processDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL SECTION ── */}
      <section style={{ background: "#fff", padding: "60px 60px", textAlign: "center" }}>
        <h2 style={styles.sectionHeading}>
          Trusted By <em style={styles.sectionHeadingItalic}>Students & Parents</em>
        </h2>
        <p style={{ maxWidth: 800, margin: "0 auto", fontSize: 15, lineHeight: 1.8, color: "#555" }}>
          We are proud to support students in achieving admissions to globally recognized universities and building successful international careers.
        </p>
        <p style={{ maxWidth: 800, margin: "20px auto 0", fontSize: 15, lineHeight: 1.8, color: "#555" }}>
          Our commitment to transparency, personalized support, and quality guidance has helped students confidently pursue higher education abroad.
        </p>
      </section>

      {/* ── CTA ── */}
      <div style={styles.ctaBanner}>
        Start Your Global Journey Today — speak with a <span style={styles.ctaSpan}>Study Abroad</span> expert.
      </div>
    </div>
  );
};

export default StudyAbroadPage;