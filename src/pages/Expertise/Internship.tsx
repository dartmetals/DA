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
    background: "linear-gradient(135deg, #C8102E 0%, #8B0000 100%)",
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
    background: "linear-gradient(145deg, #F5A800 60%, #C8102E 100%)",
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
  sectionHeadingItalic: { fontStyle: "italic", color: "#C8102E" },
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
    background: "linear-gradient(135deg, #F5A800, #C8102E)",
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
    color: "#C8102E",
    marginBottom: 8,
    marginTop: 0,
  },
  cardBody: { fontSize: 14, lineHeight: 1.7, color: "#444", margin: 0 },
  goldBanner: {
    background: "#F5A800",
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
    background: "linear-gradient(145deg, #C8102E 0%, #8B0000 100%)",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 16,
    textAlign: "center" as const,
  },
  iconRow: {
    background: "#F5A800",
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
    background: "rgba(255,255,255,0.3)",
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
    background: "linear-gradient(135deg, #C8102E 0%, #F5A800 100%)",
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
    background: "linear-gradient(135deg, #C8102E, #F5A800)",
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
    color: "#C8102E",
    marginBottom: 8,
    marginTop: 0,
  },
  featureBody: { fontSize: 13, lineHeight: 1.65, color: "#555", margin: 0 },
  ctaBanner: {
    background: "#1A1A2E",
    color: "#fff",
    textAlign: "center" as const,
    padding: "48px 60px",
    fontSize: 22,
    fontWeight: 700,
  },
  ctaSpan: { color: "#F5A800" },
  footer: {
    background: "#111827",
    color: "#fff",
    padding: "50px 60px 30px",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
    gap: 32,
  },
  footerBrand: { fontSize: 24, fontWeight: 800, color: "#C8102E", marginBottom: 12 },
  footerAddress: { fontSize: 13, lineHeight: 1.8, color: "#aaa" },
  footerColTitle: { fontSize: 12, fontWeight: 700, letterSpacing: 1, color: "#fff", marginBottom: 12, textTransform: "uppercase" as const },
  footerLink: { display: "block", fontSize: 13, color: "#C8102E", marginBottom: 6, textDecoration: "none" },
  footerBottom: {
    background: "#0d1117",
    color: "#666",
    textAlign: "center" as const,
    padding: "16px 60px",
    fontSize: 12,
  },
};

const InternshipPage: React.FC = () => {
  return (
    <div style={styles.page}>

      {/* ── HERO ── */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroOverlay2} />
        <div style={styles.heroText}>
          <h1 style={styles.heroHeading}>
            Making<br />
            career-defining<br />
            internships<br />
            happen
          </h1>
        </div>
        <div style={styles.heroImagePlaceholder}>[ Internship Hero Image ]</div>
      </section>

      {/* ── INTRO ── */}
      <section style={styles.introSection}>
        <div style={styles.introImageBox}>
          <p style={styles.introImageInnerText}>Making the right<br />experience happen</p>
        </div>
        <div style={styles.introBody}>
          <p style={styles.introPara}>
            The bridge between education and employment has never been more critical. Internships are no longer optional add-ons to a resume — they are the proving grounds where careers are shaped, skills are tested, and futures are built.
          </p>
          <p style={styles.introPara}>
            With over two decades of connecting talent with opportunity, we understand what organisations need from interns and what interns need to succeed. Our internship programmes are structured to deliver real value — not just task completion, but genuine growth and contribution.
          </p>
          <p style={styles.introPara}>
            We partner with organisations across sectors to create structured internship programmes that benefit both the student and the employer. From identifying the right candidates to managing the entire internship lifecycle, we make it seamless.
          </p>
          <p style={styles.introPara}>
            Our deep industry network, campus relationships, and talent assessment capabilities give us the edge to place the right intern in the right role — every time. Let us make the right experience happen.
          </p>
        </div>
      </section>

      {/* ── CARDS ── */}
      <section style={styles.cardsSection}>
        <h2 style={styles.sectionHeading}>
          Making <em style={styles.sectionHeadingItalic}>seamless internships happen</em>
        </h2>
        <div style={styles.cardsGrid}>
          {[
            { icon: "🏢", title: "Corporate Internship Placements", body: "We connect students and fresh graduates with top-tier companies across industries. Our placements span Technology, BFSI, FMCG, Manufacturing, and more — ensuring diverse exposure and real industry experience." },
            { icon: "📋", title: "Structured Programme Design", body: "We help organisations design meaningful internship programmes with defined learning objectives, mentor assignments, and performance milestones. Every intern gets a purposeful experience, not just busy work." },
            { icon: "🎯", title: "Talent Identification & Screening", body: "Our rigorous screening process ensures that only the most suitable candidates are placed. We assess candidates on aptitude, domain knowledge, and cultural fit to maximise success for both parties." },
            { icon: "📈", title: "Performance Tracking & Conversion", body: "We track intern performance throughout the programme and help organisations identify top performers for pre-placement offers. Our data-driven approach improves conversion rates from intern to full-time hire." },
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
            Organisations rely on fresh talent to infuse new ideas and energy into their teams. But finding the right intern — one who aligns with your culture and can genuinely contribute — is harder than it sounds.
          </p>
          <p style={styles.goldBannerPara}>
            Our vast network of colleges, universities, and student communities across the country allows us to source talent that matches your specific requirements. Whether you need one intern or a hundred, we scale to meet your demand.
          </p>
          <p style={styles.goldBannerPara}>
            We manage the entire internship supply chain — from campus outreach and candidate screening to onboarding, mentoring support, and post-internship evaluation — so you can focus on what matters most.
          </p>
          <p style={styles.goldBannerPara}>Here's how we are able to do that:</p>
        </div>
        <div style={styles.goldBannerImageBox}>
          <p style={{ fontFamily: "'Georgia',serif", fontStyle: "italic", fontSize: 30, fontWeight: 700, lineHeight: 1.3, margin: 0, padding: 20 }}>
            Making<br />employability<br />from campus<br />to boardroom<br />happen
          </p>
        </div>
      </section>

      {/* ── ICON ROW ── */}
      <div style={styles.iconRow}>
        {[
          { icon: "🏫", label: "Our extensive network of colleges enables recruiters to choose and hire from a wide pool of fresh intern talent." },
          { icon: "🧑‍💻", label: "Our access to candidates across experience levels for targeted internship matching." },
          { icon: "⭐", label: "Our experience with structured onboarding of interns across 1,000+ partner organisations." },
          { icon: "🌐", label: "Our network of more than 5 million professionals across industry verticals." },
          { icon: "🎯", label: "Our ability to become your one-stop destination to find motivated intern talent." },
          { icon: "🧭", label: "Our unbiased assistance to interns so they can navigate their career opportunities better." },
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
          <p style={styles.techImageText}>Making<br />AI powered<br />internship<br />matching<br />happen</p>
        </div>
        <div style={styles.techBody}>
          <p style={styles.techPara}>
            The traditional internship hiring process — walk-in drives, manual shortlisting, and paper applications — is a thing of the past. We have evolved alongside the industry to bring technology at the centre of every placement we make.
          </p>
          <p style={styles.techPara}>
            We have seen how intern recruitment has shifted from brick-and-mortar campus visits to AI-powered talent matching. That evolution gives us the foresight to help organisations find exactly the right intern faster and more accurately than ever before.
          </p>
          <p style={styles.techPara}>
            With the help of our group company HirePro, we deploy intelligent matching algorithms, automated assessments, and virtual interview platforms to streamline the entire internship hiring cycle end to end.
          </p>
          <p style={styles.techPara}>
            Our internal processes leverage data, analytics, and operational automation to deliver exceptional experiences for both interns and hiring organisations — reducing time-to-onboard while improving quality of placement.
          </p>
        </div>
      </section>

      {/* ── FEATURE CARDS ── */}
      <section style={styles.featureSection}>
        <div style={styles.featureGrid}>
          {[
            { icon: "🖥️", title: "End to end virtual recruitment", body: "From sourcing and assessments to offer letters and virtual onboarding — fully digital and seamless." },
            { icon: "📝", title: "Proctored assessments", body: "Fraud-proof intern screening with auto detection and control of cheating and impersonation." },
            { icon: "🎥", title: "High volume video interviews", body: "With automatic ID verification and prevention of impersonation across bulk interview drives." },
            { icon: "📱", title: "Seamless digital onboarding", body: "Fully digitised intern engagement and document collection from day one." },
            { icon: "⚙️", title: "Complete automation", body: "Automated screening, scheduling, assessments, offer management, and onboarding workflows." },
            { icon: "🧩", title: "Advisory and logistics services", body: "Expert guidance on remote internship strategy and digital coordination for distributed teams." },
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
        Visit <span style={styles.ctaSpan}>HirePro</span> to explore a whole new world of internship automation.
      </div>
    </div>
  );
};

export default InternshipPage;