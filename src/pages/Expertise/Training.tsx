import React from "react";

// ─── Theme tokens ────────────────────────────────────────────────────────────
// Primary red  : #C8102E   (Careernet teal → red)
// Accent gold  : #F5A800   (kept from original for icon circles)
// Dark navy    : #1A1A2E   (footer dark)
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
  heroText: {
    maxWidth: 480,
    zIndex: 1,
  },
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
    background: "linear-gradient(145deg, #F5A800 60%, #C8102E 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    color: "#C8102E",
  },

  // ── Cards grid ──────────────────────────────────────────────────────────
  cardsSection: {
    background: "#F7F7F7",
    padding: "60px 60px",
  },
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
  cardBody: {
    fontSize: 14,
    lineHeight: 1.7,
    color: "#444",
    margin: 0,
  },

  // ── Yellow / Gold banner (campus to boardroom equivalent) ───────────────
  goldBanner: {
    background: "#F5A800",
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
    background: "linear-gradient(145deg, #C8102E 0%, #8B0000 100%)",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 16,
    textAlign: "center" as const,
  },

  // ── Six icons row ────────────────────────────────────────────────────────
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
  iconLabel: {
    fontSize: 14,
    lineHeight: 1.6,
    color: "#1A1A1A",
    fontWeight: 500,
  },

  // ── AI / Tech section ────────────────────────────────────────────────────
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
  techPara: {
    fontSize: 15,
    lineHeight: 1.75,
    color: "#333",
    marginBottom: 18,
  },

  // ── Six feature cards (AI powered) ──────────────────────────────────────
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
  featureBody: {
    fontSize: 13,
    lineHeight: 1.65,
    color: "#555",
    margin: 0,
  },

  // ── CTA Banner ───────────────────────────────────────────────────────────
  ctaBanner: {
    background: "#1A1A2E",
    color: "#fff",
    textAlign: "center" as const,
    padding: "48px 60px",
    fontSize: 22,
    fontWeight: 700,
  },
  ctaSpan: { color: "#F5A800" },

  // ── Footer ───────────────────────────────────────────────────────────────
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

// ─── Component ───────────────────────────────────────────────────────────────

const TrainingPage: React.FC = () => {
  return (
    <div style={styles.page}>

      {/* ── HERO ── */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroOverlay2} />
        <div style={styles.heroText}>
          <h1 style={styles.heroHeading}>
            Making<br />
            future-ready<br />
            professionals<br />
            happen
          </h1>
        </div>
        <div style={styles.heroImagePlaceholder}>
          [ Training Hero Image ]
        </div>
      </section>

      {/* ── INTRO TWO-COL ── */}
      <section style={styles.introSection}>
        <div style={styles.introImageBox}>
          <p style={styles.introImageInnerText}>
            Making the right<br />
            skill happen
          </p>
        </div>
        <div style={styles.introBody}>
          <p style={styles.introPara}>
            The world of work is evolving faster than ever. Skills that were relevant yesterday may not be enough tomorrow. We understand that true employability goes beyond degrees — it demands continuous learning, practical exposure, and real-world readiness.
          </p>
          <p style={styles.introPara}>
            With more than two decades of experience partnering with leading organisations, we bring deep insight into what employers truly seek. Our training programmes are designed not just to teach, but to transform individuals into professionals who are confident, competent, and career-ready.
          </p>
          <p style={styles.introPara}>
            Whether you are a fresh graduate stepping into the workforce or a mid-career professional looking to upskill, our tailored training solutions ensure that you stay ahead in a competitive landscape. We believe in building not just skills, but careers.
          </p>
          <p style={styles.introPara}>
            Our expert trainers, industry partnerships, and outcome-focused curriculum give us the edge to help individuals and organisations thrive together. Let us make the right skill happen — for you.
          </p>
        </div>
      </section>

      {/* ── SEAMLESS TRAINING SECTION HEADING ── */}
      <section style={styles.cardsSection}>
        <h2 style={styles.sectionHeading}>
          Making <em style={styles.sectionHeadingItalic}>seamless learning happen</em>
        </h2>
        <div style={styles.cardsGrid}>
          {[
            { icon: "🎓", title: "Functional & Domain Training", body: "We offer role-specific training across domains such as Banking, Technology, FMCG, and more. Our programmes are aligned with real job descriptions so candidates learn exactly what employers expect on day one." },
            { icon: "💻", title: "Technology & Digital Skills", body: "From coding bootcamps to data analytics and cloud computing, our technology training tracks help individuals gain in-demand digital skills. We partner with top tech firms to ensure curriculum relevance." },
            { icon: "🗣️", title: "Soft Skills & Communication", body: "Technical knowledge alone is not enough. Our soft skills modules cover business communication, leadership, teamwork, and professional etiquette — the competencies that drive career advancement." },
            { icon: "📊", title: "Assessment & Certification", body: "We conduct rigorous pre- and post-training assessments to measure learning outcomes. Our certification programmes are industry-recognised and add real credibility to your professional profile." },
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

      {/* ── GOLD BANNER (campus to boardroom equivalent) ── */}
      <section style={styles.goldBanner}>
        <div style={styles.goldBannerText}>
          <p style={styles.goldBannerPara}>
            Organisations rely on skilled talent to make growth happen. The right training transforms raw potential into measurable performance. But how do you ensure training is truly effective and not just a box-ticking exercise?
          </p>
          <p style={styles.goldBannerPara}>
            Our vast network of industry partnerships and trainer pool across experience levels allows us to design training that delivers real results. Whether you are upskilling freshers, mid-level managers, or senior leaders, we make it happen.
          </p>
          <p style={styles.goldBannerPara}>
            We span the complete learning and development supply chain — from needs analysis to post-training performance tracking — to find the right approach that propels your team's growth.
          </p>
          <p style={styles.goldBannerPara}>Here's how we are able to do that:</p>
        </div>
        <div style={styles.goldBannerImageBox}>
          <p style={{ fontFamily: "'Georgia',serif", fontStyle: "italic", fontSize: 30, fontWeight: 700, lineHeight: 1.3, margin: 0, padding: 20 }}>
            Making<br />employability<br />through<br />training<br />happen
          </p>
        </div>
      </section>

      {/* ── ICON ROW ── */}
      <div style={styles.iconRow}>
        {[
          { icon: "🏫", label: "Our extensive network of training institutes and industry experts." },
          { icon: "🧑‍💻", label: "Access to candidates across experience levels for targeted training." },
          { icon: "⭐", label: "Experience with training and onboarding of 1,000+ leadership hires." },
          { icon: "🌐", label: "Network of more than 5 million professionals across industry verticals." },
          { icon: "🎯", label: "Our ability to become your one-stop training and development partner." },
          { icon: "🧭", label: "Unbiased guidance so individuals navigate their learning journey better." },
        ].map((item, i) => (
          <div key={i} style={styles.iconCell}>
            <div style={styles.iconCircle}>{item.icon}</div>
            <p style={styles.iconLabel}>{item.label}</p>
          </div>
        ))}
      </div>

      {/* ── TECH / AI SECTION ── */}
      <section style={styles.techSection}>
        <div style={styles.techImageBox}>
          <p style={styles.techImageText}>Making<br />AI powered<br />learning<br />happen</p>
        </div>
        <div style={styles.techBody}>
          <p style={styles.techPara}>
            In 1999, when we started out, training happened in an entirely different manner. The whole process was manual, classroom-driven, and paper-based. Over the years, L&D has gone through a complete evolution and we have been an integral part of it.
          </p>
          <p style={styles.techPara}>
            We have seen how learning has gone from brick-and-mortar classrooms to click-and-learn digital platforms. That gives us the foresight to navigate the challenges that lie ahead. To help you find training solutions that are in sync with technological innovation, we switched to AI-driven learning solutions.
          </p>
          <p style={styles.techPara}>
            With the help of our group company HirePro, we make innovation happen. We believe that the magical combination of cutting-edge technology and passionately committed people can help our customers build outperforming teams through superior learning and development.
          </p>
          <p style={styles.techPara}>
            Our internal processes are enabled by technological innovations that promise to deliver exceptional learning experiences in terms of data, analytics, efficiency, insights, and operational mechanisms.
          </p>
        </div>
      </section>

      {/* ── 6 FEATURE CARDS ── */}
      <section style={styles.featureSection}>
        <div style={styles.featureGrid}>
          {[
            { icon: "🖥️", title: "End to end virtual training", body: "From onboarding sessions to advanced skill modules — fully virtual and seamlessly delivered." },
            { icon: "📝", title: "Proctored assessments", body: "Fraud-proof skill assessments with auto detection and control of malpractice." },
            { icon: "🎥", title: "High volume video sessions", body: "Scalable live and recorded training sessions with automatic attendance and engagement tracking." },
            { icon: "📱", title: "Seamless digital onboarding", body: "Fully digitised learner engagement, content delivery, and progress documentation." },
            { icon: "⚙️", title: "Complete automation", body: "Automated scheduling, assessments, reminders, reporting, and certification workflows." },
            { icon: "🧩", title: "Advisory and L&D consulting", body: "Expert guidance on training strategy, content design, and digital learning coordination." },
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
        Visit <span style={styles.ctaSpan}>HirePro</span> to explore a whole new world of learning automation.
      </div>

    </div>
  );
};

export default TrainingPage;