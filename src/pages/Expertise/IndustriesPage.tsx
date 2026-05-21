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
    background: "linear-gradient(145deg, #2980B9 60%, #1E3A5F 100%)",
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
  sectionHeadingItalic: { fontStyle: "italic", color: "#1E3A5F" },
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
    background: "linear-gradient(135deg, #2980B9, #1E3A5F)",
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
    color: "#1E3A5F",
    marginBottom: 8,
    marginTop: 0,
  },
  cardBody: { fontSize: 14, lineHeight: 1.7, color: "#444", margin: 0 },
  goldBanner: {
    background: "#EBF5FB",
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
    background: "linear-gradient(145deg, #1E3A5F 0%, #0D2137 100%)",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 16,
    textAlign: "center" as const,
  },
  iconRow: {
    background: "#2980B9",
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
    background: "linear-gradient(135deg, #1E3A5F 0%, #2980B9 100%)",
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
    background: "linear-gradient(135deg, #1E3A5F, #2980B9)",
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
    color: "#1E3A5F",
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
  ctaSpan: { color: "#2980B9" },
  footer: {
    background: "#0D2137",
    color: "#fff",
    padding: "50px 60px 30px",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
    gap: 32,
  },
  footerBrand: { fontSize: 24, fontWeight: 800, color: "#2980B9", marginBottom: 12 },
  footerAddress: { fontSize: 13, lineHeight: 1.8, color: "#aaa" },
  footerColTitle: { fontSize: 12, fontWeight: 700, letterSpacing: 1, color: "#fff", marginBottom: 12, textTransform: "uppercase" as const },
  footerLink: { display: "block", fontSize: 13, color: "#2980B9", marginBottom: 6, textDecoration: "none" },
  footerBottom: {
    background: "#071320",
    color: "#666",
    textAlign: "center" as const,
    padding: "16px 60px",
    fontSize: 12,
  },
};

const IndustriesPage: React.FC = () => {
  return (
    <div style={styles.page}>

      {/* ── HERO ── */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroOverlay2} />
        <div style={styles.heroText}>
          <h1 style={styles.heroHeading}>
            Solutions built<br />
            for scale.<br />
            <span style={{ fontSize: 28 }}>Scalable software for diverse industry needs.</span>
          </h1>
        </div>
        <div style={styles.heroImagePlaceholder}>1452 + Happy Clients</div>
      </section>

      {/* ── INTRO ── */}
      <section style={styles.introSection}>
        <div style={styles.introImageBox}>
          <p style={styles.introImageInnerText}>Experience excellence with our<br />top-tier services tailored just for you</p>
        </div>
        <div style={styles.introBody}>
          <p style={styles.introPara}>
            Vinqube we are here to find the best solution for your IT problems. Experience excellence with our top-tier services tailored just for you. From meticulous attention to detail to unparalleled customer satisfaction, we are committed to delivering the best. Elevate your experience and success with our dedicated and reliable service offerings.
          </p>
          <p style={styles.introPara}>
            <strong>01 Vinqube Services</strong> — Delivers innovative IT solutions and comprehensive technical support.<br />
            <strong>02 Engagement Models</strong> — Outline collaboration structures between service providers and clients.<br />
            <strong>03 Technology Expertise</strong> — Expertise powers innovative solutions and transforms digital landscapes.
          </p>
          <p style={styles.introPara}>
            <strong>1452+ Happy Clients</strong> | <strong>2195+ Completed Projects</strong> | <strong>100+ Outsourcing Partners</strong> | <strong>150+ Professional Team</strong>
          </p>
        </div>
      </section>

      {/* ── CARDS ── */}
      <section style={styles.cardsSection}>
        <h2 style={styles.sectionHeading}>
          Tech that <em style={styles.sectionHeadingItalic}>transforms industries</em>
        </h2>
        <div style={styles.cardsGrid}>
          {[
            { icon: "💻", title: "Technology", body: "In today's fast-paced tech landscape, businesses need professionals with strong technical skills, business acumen, and user insight. At Vinqube Technologies, we help clients find the right tech talent to build impactful, future-ready solutions." },
            { icon: "🌐", title: "Internet", body: "Our deep expertise spans across both B2C and B2B internet sectors, enabling us to serve a wide range of digital businesses. From mobility and health tech to e-commerce, retail, and food delivery, we understand the unique talent needs of the internet economy." },
            { icon: "🏢", title: "IT and Offshoring", body: "As the largest employers in the country, IT & Offshoring organizations hire thousands of professionals annually to meet growing business demands. At Vinqube, our deep-rooted domain expertise and agile scalability enable us to support hiring seamlessly." },
            { icon: "💰", title: "Financial Services", body: "Vinqube provides services to banking, capital markets, and insurance sectors in application development, IT infrastructure, and business operations. Clients can engage with us through outcome-based solutions, individual offer, or a combination of both for max value." },
            { icon: "🏭", title: "Domestic Businesses", body: "We help home-grown businesses transform their models and tech by finding the right talent for domain-specific and multi-city hiring needs. From services like Banking and Telecom to products like FMCG and Pharma, we support talent needs across all growth stages." },
            { icon: "🏗️", title: "Infrastructure", body: "Artificial intelligence and robotics are transforming how recruitment works in the infrastructure sector. As the market evolves, we help you stay ahead by delivering the right talent at scale, ensuring your workforce is ready for the future." },
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
            At Vinqube Technologies, we pride ourselves on delivering innovative, scalable, and customized software solutions across a wide spectrum of industries. With deep domain knowledge and a commitment to technological excellence, we help businesses transform their operations, enhance customer experiences, and achieve sustainable growth through digital innovation.
          </p>
          <p style={styles.goldBannerPara}>
            An in-depth experience across industries and an array of highly-competent talent acquisition teams help us help you have an edge over the others and make the right candidate happen.
          </p>
          <p style={styles.goldBannerPara}>
            Efficient hiring solutions tailored to your business needs.
          </p>
          <p style={styles.goldBannerPara}>Empowering industries through technology, one solution at a time.</p>
        </div>
        <div style={styles.goldBannerImageBox}>
          <p style={{ fontFamily: "'Georgia',serif", fontStyle: "italic", fontSize: 28, fontWeight: 700, lineHeight: 1.3, margin: 0, padding: 20 }}>
            Empowering industries<br />through technology,<br />one solution at a time.
          </p>
        </div>
      </section>

      {/* ── ICON ROW ── */}
      <div style={styles.iconRow}>
        {[
          { icon: "🎯", label: "We tailor our software solutions to match specific industry needs." },
          { icon: "🤝", label: "Our teams collaborate closely with clients to ensure seamless integration." },
          { icon: "⚡", label: "We leverage the latest technologies to drive digital transformation." },
          { icon: "📈", label: "Scalability and performance are at the core of every solution we deliver." },
          { icon: "🔒", label: "Compliance and security are prioritized across all our industry offerings." },
          { icon: "🔄", label: "Continuous support and innovation help our clients stay future-ready." },
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
          <p style={styles.techImageText}>How Vinqube Technologies<br />Serve Diverse Industries</p>
        </div>
        <div style={styles.techBody}>
          <p style={styles.techPara}>
            <strong>Industry Specific Expertise :</strong> We understand the unique workflows, compliance requirements, and digital goals of each industry we serve. Our domain experts work alongside our tech teams to design solutions that solve real problems.
          </p>
          <p style={styles.techPara}>
            <strong>Customized Software Development :</strong> Whether it's a customer-facing platform, an enterprise application, or a backend system, we develop custom software tailored to your specific use case and business model.
          </p>
          <p style={styles.techPara}>
            <strong>Seamless Integration :</strong> We ensure that our solutions integrate smoothly with your existing systems, minimizing disruption and maximizing productivity from day one.
          </p>
          <p style={styles.techPara}>
            <strong>Scalable and Future Ready Solutions :</strong> As your business grows, so do our solutions. We build with scalability in mind, allowing you to evolve without technical limitations.
          </p>
          <p style={styles.techPara}>
            <strong>Data Driven Insights :</strong> We empower industries with analytics and intelligent dashboards, helping stakeholders make informed decisions faster and with greater accuracy.
          </p>
          <p style={styles.techPara}>
            <strong>Ongoing Support and Optimization :</strong> Our job doesn't end at deployment. We continue to monitor, maintain, and improve our systems so they remain efficient, secure, and aligned with your business goals.
          </p>
        </div>
      </section>

      {/* ── FEATURE CARDS ── */}
      <section style={styles.featureSection}>
        <div style={styles.featureGrid}>
          {[
            { icon: "🏭", title: "Industry Specific Expertise", body: "We understand the unique workflows, compliance requirements, and digital goals of each industry we serve." },
            { icon: "💻", title: "Customized Software Development", body: "We develop custom software tailored to your specific use case and business model." },
            { icon: "🔗", title: "Seamless Integration", body: "Our solutions integrate smoothly with your existing systems, minimizing disruption." },
            { icon: "📊", title: "Scalable Solutions", body: "We build with scalability in mind, allowing you to evolve without technical limitations." },
            { icon: "📈", title: "Data Driven Insights", body: "Empowering industries with analytics and intelligent dashboards for faster decisions." },
            { icon: "🔄", title: "Ongoing Support", body: "We continue to monitor, maintain, and improve systems for long-term success." },
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
        Partner with <span style={styles.ctaSpan}>Vinqube Technologies</span> to transform your industry with cutting-edge solutions.
      </div>
    </div>
  );
};

export default IndustriesPage;