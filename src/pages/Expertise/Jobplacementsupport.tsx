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
  introPara: { fontSize: 15, lineHeight: 1.75, color: "#333", marginBottom: 18 },
  sectionHeading: { fontSize: 36, fontWeight: 700, color: "#1A1A1A", marginBottom: 48 },
  sectionHeadingItalic: { fontStyle: "italic", color: "#C8102E" },
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
  goldBannerPara: { fontSize: 15, lineHeight: 1.75, marginBottom: 16, color: "#1A1A1A" },
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
    textAlign: "center" as const,
  },
  iconRow: {
    background: "#F5A800",
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

    </div>
  );
};

export default JobPlacementSupportPage;