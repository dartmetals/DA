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
    background: "linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)",
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
    background: "linear-gradient(145deg, #60a5fa 60%, #2563eb 100%)",
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
  introPara: {
    fontSize: 15,
    lineHeight: 1.75,
    color: "#333",
    marginBottom: 18,
  },
  sectionHeading: {
    fontSize: 36,
    fontWeight: 700,
    color: "#1A1A1A",
    marginBottom: 48,
  },
  sectionHeadingItalic: { fontStyle: "italic", color: "#2563eb" },
  cardsSection: { background: "#F7F7F7", padding: "60px 60px" },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 32,
  },
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
    background: "linear-gradient(135deg, #60a5fa, #2563eb)",
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
    background: "#dbeafe",
    padding: "70px 60px",
    display: "flex",
    alignItems: "center",
    gap: 60,
  },
  goldBannerText: { flex: 1, color: "#1A1A1A" },
  goldBannerPara: {
    fontSize: 15,
    lineHeight: 1.75,
    marginBottom: 16,
    color: "#1A1A1A",
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
  iconRow: {
    background: "#dbeafe",
    padding: "0 60px 70px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 32,
  },
  iconCell: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start",
    gap: 12,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    background: "rgba(37,99,235,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 32,
  },
  iconLabel: { fontSize: 14, lineHeight: 1.6, color: "#1A1A1A", fontWeight: 500 },
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
    background: "linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)",
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
  },
  featureIcon: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #2563eb, #60a5fa)",
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
  statsSection: {
    background: "#1e3a8a",
    padding: "60px 60px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 40,
    textAlign: "center" as const,
  },
  statNumber: {
    fontSize: 48,
    fontWeight: 800,
    color: "#fff",
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    color: "rgba(255,255,255,0.8)",
    textTransform: "uppercase" as const,
    letterSpacing: 1,
  },
  ctaBanner: {
    background: "#1A1A2E",
    color: "#fff",
    textAlign: "center" as const,
    padding: "48px 60px",
    fontSize: 22,
    fontWeight: 700,
  },
  ctaSpan: { color: "#60a5fa" },
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
  footerLink: { display: "block", fontSize: 13, color: "#2563eb", marginBottom: 6, textDecoration: "none" },
  footerBottom: {
    background: "#0d1117",
    color: "#666",
    textAlign: "center" as const,
    padding: "16px 60px",
    fontSize: 12,
  },
};

const AIPoweredHiring: React.FC = () => {
  return (
    <div style={styles.page}>

      {/* ── HERO ── */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroOverlay2} />
        <div style={styles.heroText}>
          <h1 style={styles.heroHeading}>
            AI Powered<br />
            Hiring.
          </h1>
          <p style={{ marginTop: 16, fontSize: 16, opacity: 0.9 }}>
            Smart hiring starts with smart data — let AI lead the way.
          </p>
        </div>
        <div style={styles.heroImagePlaceholder}>[ AI Hiring Hero Image ]</div>
      </section>

      {/* ── INTRO ── */}
      <section style={styles.introSection}>
        <div style={styles.introImageBox}>
          <p style={styles.introImageInnerText}>AI ensures fair,<br />unbiased hiring</p>
        </div>
        <div style={styles.introBody}>
          <p style={styles.introPara}>
            In today's diverse workforce, fairness and objectivity are non-negotiable. Traditional hiring methods can unknowingly introduce bias, leading to missed opportunities for both employers and talented candidates. AI-powered hiring transforms this by using data-driven assessments and algorithms that focus solely on skills, experience, and job relevance.
          </p>
          <p style={styles.introPara}>
            By removing human bias from the equation, AI helps organizations build more inclusive teams that reflect true merit. It ensures that every candidate is evaluated on an equal footing, paving the way for a transparent, equitable, and future-ready hiring process.
          </p>
          <p style={styles.introPara}>
            Discover the future of recruitment automation with Data Artisans.
          </p>
        </div>
      </section>

      {/* ── CARDS ── */}
      <section style={styles.cardsSection}>
        <h2 style={styles.sectionHeading}>
          Making <em style={styles.sectionHeadingItalic}>AI-powered recruitment happen</em>
        </h2>
        <div style={styles.cardsGrid}>
          {[
            { icon: "🎯", title: "Smart Profile Matching", body: "AI algorithms analyze resumes and job descriptions to match the most suitable candidates faster and more accurately." },
            { icon: "⚡", title: "Faster Screening", body: "Automated screening processes save time by shortlisting top candidates based on skills, experience, and relevance." },
            { icon: "🤝", title: "Bias-Free Hiring", body: "Artificial Intelligence ensures fair and unbiased evaluations, helping you build diverse and inclusive teams." },
            { icon: "📊", title: "Data-Driven Decisions", body: "Gain actionable insights through analytics on candidate performance, hiring trends, and process efficiency." },
            { icon: "🕒", title: "24/7 Recruitment", body: "With AI, hiring never sleeps - automated systems continue sourcing and screening around the clock." },
            { icon: "💬", title: "Enhanced Experience", body: "AI chatbots and virtual assistants offer quick updates & seamless communication throughout the recruitment journey." },
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

      {/* ── STATS SECTION ── */}
      <div style={styles.statsSection}>
        {[
          { number: "300000+", label: "Resumes Screened by AI" },
          { number: "95%", label: "Faster Shortlisting" },
          { number: "80%", label: "Improved Accuracy" },
          { number: "24x7", label: "Automated Engagement" },
        ].map((stat, i) => (
          <div key={i}>
            <div style={styles.statNumber}>{stat.number}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* ── GOLD BANNER ── */}
      <section style={styles.goldBanner}>
        <div style={styles.goldBannerText}>
          <p style={styles.goldBannerPara}>
            <strong>Redefining Recruitment Through Innovation</strong>
          </p>
          <p style={styles.goldBannerPara}>
            Recruitment has come a long way since we began our journey. What once relied heavily on paper-based processes has now evolved into a dynamic, technology-enabled system. We've not only witnessed this transformation firsthand but have also played an active role in shaping it. From traditional hiring practices to digital-first talent acquisition strategies, we've adapted with the times and continue to do so.
          </p>
          <p style={styles.goldBannerPara}>
            As recruitment has shifted from brick to click, we've embraced this evolution by integrating AI-powered solutions that meet the demands of today's digital workforce. Our collaboration with our group company, Simplify3x, has been instrumental in driving innovation at every step of the hiring journey. From sourcing and screening to assessments, virtual interviews, and onboarding - we offer seamless, end-to-end recruitment support powered by smart technology and expert insights.
          </p>
          <p style={styles.goldBannerPara}>
            Our internal operations are equally driven by advanced tools and automation, ensuring that our clients and candidates benefit from data-backed decisions, actionable analytics, and efficient processes. We continually train our teams with evolving tools and technologies, enabling them to stay ahead of the curve. At the heart of our success is the synergy of cutting-edge tech and dedicated professionals - a combination that allows us to build high-performing teams and deliver superior recruitment experiences.
          </p>
        </div>
        <div style={styles.goldBannerImageBox}>
          <p style={{ fontFamily: "'Georgia',serif", fontStyle: "italic", fontSize: 30, fontWeight: 700, lineHeight: 1.3, margin: 0, padding: 20 }}>
            Making<br />AI-powered<br />hiring<br />happen
          </p>
        </div>
      </section>

      {/* ── ICON ROW ── */}
      <div style={styles.iconRow}>
        {[
          { icon: "🤖", label: "AI-powered candidate sourcing and screening across multiple channels" },
          { icon: "📊", label: "Data-driven insights for better hiring decisions and talent analytics" },
          { icon: "⚡", label: "Automated interview scheduling and candidate communication workflows" },
          { icon: "🎯", label: "Intelligent job matching based on skills, experience, and cultural fit" },
          { icon: "🛡️", label: "Bias detection and removal for fair and inclusive hiring practices" },
          { icon: "📈", label: "Predictive analytics to identify top-performing candidates before they apply" },
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
          <p style={styles.techImageText}>Making<br />AI powered<br />recruitment<br />happen</p>
        </div>
        <div style={styles.techBody}>
          <p style={styles.techPara}>
            The traditional hiring process — paper resumes, manual shortlisting, and lengthy interview cycles — is a thing of the past. We have evolved alongside the industry to bring technology at the centre of every placement we make.
          </p>
          <p style={styles.techPara}>
            We have seen how recruitment has shifted from brick-and-mortar hiring to AI-powered talent matching. That evolution gives us the foresight to help organizations find exactly the right talent faster and more accurately than ever before.
          </p>
          <p style={styles.techPara}>
            With the help of our group company Simplify3x, we deploy intelligent matching algorithms, automated assessments, and virtual interview platforms to streamline the entire hiring cycle end to end.
          </p>
          <p style={styles.techPara}>
            Our internal processes leverage data, analytics, and operational automation to deliver exceptional experiences for both candidates and hiring organizations — reducing time-to-hire while improving quality of placement.
          </p>
        </div>
      </section>

      {/* ── FEATURE CARDS ── */}
      <section style={styles.featureSection}>
        <div style={styles.featureGrid}>
          {[
            { icon: "🖥️", title: "End to end virtual recruitment", body: "From sourcing and assessments to offer letters and virtual onboarding — fully digital and seamless." },
            { icon: "📝", title: "AI-powered assessments", body: "Fraud-proof candidate screening with auto-detection and intelligent proctoring." },
            { icon: "🎥", title: "High volume video interviews", body: "With automatic ID verification and prevention of impersonation across bulk hiring drives." },
            { icon: "📱", title: "Seamless digital onboarding", body: "Fully digitized candidate engagement and document collection from day one." },
            { icon: "⚙️", title: "Complete automation", body: "Automated screening, scheduling, assessments, offer management, and onboarding workflows." },
            { icon: "🧩", title: "Advisory and analytics", body: "Expert guidance on recruitment strategy and data-driven insights for continuous improvement." },
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
        Visit <span style={styles.ctaSpan}>Simplify3x</span> to explore a whole new world of recruitment automation.
      </div>
    </div>
  );
};

export default AIPoweredHiring;