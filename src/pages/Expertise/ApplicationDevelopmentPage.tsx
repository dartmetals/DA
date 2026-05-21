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
  sectionHeadingItalic: { fontStyle: "italic", color: "#2980B9" },
  cardsSection: { background: "#F0F4F8", padding: "60px 60px" },
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
    color: "#2980B9",
    marginBottom: 8,
    marginTop: 0,
  },
  cardBody: { fontSize: 14, lineHeight: 1.7, color: "#444", margin: 0 },
  goldBanner: {
    background: "#EBF5FF",
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
  featureSection: { background: "#F0F4F8", padding: "60px 60px" },
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
    color: "#2980B9",
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
  ctaSpan: { color: "#74C0FC" },
  footer: {
    background: "#0D2137",
    color: "#fff",
    padding: "50px 60px 30px",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
    gap: 32,
  },
  footerBrand: { fontSize: 24, fontWeight: 800, color: "#74C0FC", marginBottom: 12 },
  footerAddress: { fontSize: 13, lineHeight: 1.8, color: "#aaa" },
  footerColTitle: { fontSize: 12, fontWeight: 700, letterSpacing: 1, color: "#fff", marginBottom: 12, textTransform: "uppercase" as const },
  footerLink: { display: "block", fontSize: 13, color: "#74C0FC", marginBottom: 6, textDecoration: "none" },
  footerBottom: {
    background: "#091725",
    color: "#666",
    textAlign: "center" as const,
    padding: "16px 60px",
    fontSize: 12,
  },
};

const ApplicationDevelopmentPage: React.FC = () => {
  return (
    <div style={styles.page}>

      {/* ── HERO ── */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroOverlay2} />
        <div style={styles.heroText}>
          <h1 style={styles.heroHeading}>
            Innovate with<br />
            Code.
          </h1>
        </div>
        <div style={styles.heroImagePlaceholder}>[ Application Development Hero Image ]</div>
      </section>

      {/* ── INTRO ── */}
      <section style={styles.introSection}>
        <div style={styles.introImageBox}>
          <p style={styles.introImageInnerText}>Turning ideas into<br />solutions through code</p>
        </div>
        <div style={styles.introBody}>
          <p style={styles.introPara}>
            Data Artisans blends technical expertise with strategic thinking to deliver custom application solutions that solve real business challenges. We prioritize seamless integration, future-ready architecture, and user-centric design to create software that's not only functional but transformative.
          </p>
          <p style={styles.introPara}>
            With over two decades of connecting talent with opportunity, we understand what organisations need from technology partners and what end-users need from applications. Our development programmes are structured to deliver real value — not just code completion, but genuine business impact.
          </p>
          <p style={styles.introPara}>
            We partner with organisations across sectors to create custom applications that solve real business challenges. From identifying the right technology stack to managing the entire development lifecycle, we make it seamless.
          </p>
          <p style={styles.introPara}>
            Our deep industry expertise, technology partnerships, and agile development capabilities give us the edge to deliver the right solution for the right problem — every time. Let us make the right experience happen.
          </p>
        </div>
      </section>

      {/* ── CARDS ── */}
      <section style={styles.cardsSection}>
        <h2 style={styles.sectionHeading}>
          Crafting <em style={styles.sectionHeadingItalic}>Intelligent Solutions</em> that Empower Digital Growth
        </h2>
        <div style={styles.cardsGrid}>
          {[
            { icon: "🏭", title: "Industry-Specific App Expertise", body: "We specialize in building applications tailored to various industries like healthcare, fintech, retail, and logistics." },
            { icon: "⚡", title: "Performance-Optimized Architecture", body: "Our development emphasizes speed, stability, and scalability for flawless performance under any user load." },
            { icon: "🚀", title: "Future-Ready Technologies", body: "We adopt cutting-edge technologies like AI, blockchain, and IoT to future-proof your digital products." },
            { icon: "🎨", title: "User-Centric UI/UX Design", body: "We craft intuitive interfaces and user-friendly experiences that boost engagement and usability." },
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
            <strong>1820+ Apps Delivered | 98% Client Satisfaction | 120+ Tech Stacks Mastered | 75+ Ongoing Projects</strong>
          </p>
          <p style={styles.goldBannerPara}>
            At Data Artisans, we specialize in building custom web applications designed to deliver value-driven functionality that aligns with your unique business needs. These applications go beyond just aesthetics - they serve as robust tools to boost operational productivity, streamline workflows, and increase business system efficiency.
          </p>
          <p style={styles.goldBannerPara}>
            By enhancing transparency in information sharing and optimizing internal processes, our solutions directly contribute to improving your bottom line. We craft scalable, user-friendly apps that empower business growth.
          </p>
        </div>
        <div style={styles.goldBannerImageBox}>
          <p style={{ fontFamily: "'Georgia',serif", fontStyle: "italic", fontSize: 30, fontWeight: 700, lineHeight: 1.3, margin: 0, padding: 20 }}>
            Building<br />tomorrow's<br />apps today.
          </p>
        </div>
      </section>

      {/* ── ICON ROW ── */}
      <div style={styles.iconRow}>
        {[
          { icon: "🏗️", label: "Custom-Built Apps - Tailored software solutions designed specifically to meet your business goals & workflows." },
          { icon: "📱", label: "Cross-Platform Compatible - Apps that run seamlessly across web, mobile (iOS & Android), and desktop platforms." },
          { icon: "🎯", label: "User-Centric UI/UX Design - Intuitive interfaces and user-friendly experiences that boost engagement and usability." },
          { icon: "🔄", label: "Agile Dev Process - Iterative development with flexibility for faster delivery, regular updates, and customer feedback loops." },
          { icon: "🔗", label: "API Integration - Seamless integration with payment gateways, CRMs, ERPs, social platforms, and other tools." },
          { icon: "☁️", label: "Cloud-Ready Solutions - Scalable and secure cloud-based applications for better performance and easy deployment." },
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
          <p style={styles.techImageText}>Smart<br />applications<br />Seamless<br />experiences<br />Powerful<br />results</p>
        </div>
        <div style={styles.techBody}>
          <p style={styles.techPara}>
            Today businesses thrive on global, forward-thinking strategies programmed into high-end technology solutions. Businesses want solutions based on innovative concepts that should give them leverage over their competitors. These solutions should be agile enough to respond to inevitable changes and should have an ability to deliver quick results amid various industry challenges.
          </p>
          <p style={styles.techPara}>
            We, at Data Artisans, drive businesses to success by giving them the much required edge in the industry. By delivering all kinds of solutions from enterprise-based applications to custom-made eCommerce applications, Data Artisans creates new opportunities, streamlines processes, and integrates operations.
          </p>
          <p style={styles.techPara}>
            The skilful experts at Data Artisans are your right technology partners, who can help you maximize process improvement and operational savings by implementing best Web solutions designed for your business needs.
          </p>
        </div>
      </section>

      {/* ── FEATURE CARDS ── */}
      <section style={styles.featureSection}>
        <div style={styles.featureGrid}>
          {[
            { icon: "🔒", title: "Robust Security Protocol", body: "Implementation of data encryption, role-based access, and secure coding practices." },
            { icon: "🧪", title: "Automated Testing & QA", body: "Continuous testing for bug-free, high-performance applications with reliable functionality." },
            { icon: "🛠️", title: "Maintenance & Support", body: "Post-deployment updates, performance optimization, and issue resolution to keep apps running smoothly." },
            { icon: "⚡", title: "Performance Optimization", body: "Every project is built with performance and efficiency in mind." },
            { icon: "🔄", title: "Real-Time Integrations", body: "Seamless integrations streamline operations and boost productivity." },
            { icon: "🔐", title: "Secure Delivery", body: "We apply rigorous testing for secure, bug-free delivery." },
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
        At the heart of great software lies <span style={styles.ctaSpan}>purpose-driven development.</span>
      </div>

      {/* ── ADDITIONAL CONTENT SECTION ── */}
      <section style={{ background: "#fff", padding: "60px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={styles.introPara}>
            Data Artisans eBusiness consulting solutions deliver measurable value, incorporating a broad range of technologies. We build and implement end-to-end e-Business services and solutions that seamlessly integrate with diverse business applications.
          </p>
          <p style={styles.introPara}>
            Our portfolio of successful Web projects includes Web Portals for eGovernance, License Management Systems, Social Networking sites, Customer relationship management applications, Content management and Workflow solutions, eLearning portals, storefronts, integration with back-end applications, Web-enabling of legacy applications, and ERP systems integration with Web applications.
          </p>
          <p style={styles.introPara}>
            Our Web solutions bring together expertise in middleware integration, application servers, portal development frameworks, and content management solutions, on the latest technology platforms such as Microsoft .NET and J2EE.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ApplicationDevelopmentPage;