import React, { useRef, useEffect, useState } from "react";

const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    color: "#1A1A1A",
    margin: 0,
    padding: 0,
    overflowX: "hidden",
  },
  hero: {
    background: "url('/appdev.png')",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundColor: '#000000',
    color: "#fff",
    padding: "80px 60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center" as const,
    minHeight: 560,
    position: "relative",
    overflow: "hidden",
    backgroundRepeat: "no-repeat",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.4)",
    pointerEvents: "none",
  },
  heroOverlay2: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.2)",
    pointerEvents: "none",
  },
  heroText: { maxWidth: 800,  zIndex: 1, margin: "0 auto",textAlign: "left" },
  heroHeading: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    fontStyle: "italic",
    fontSize: 42,
    fontWeight: 700,
    lineHeight: 1.15,
    margin: 0,
    textAlign: 'left',
    marginLeft: 12
  },
  heroDescription: {
    fontSize: 14,
    marginTop: 20,
    opacity: 0.95,
    lineHeight: 1.5,
    marginLeft: 12
  },
  heroImagePlaceholder: {
    display: "none",
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
    overflow: "hidden",
  },
  introImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
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
  cardsSection: { background: "#Fff", padding: "60px 60px" },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 32,
  },
  card: {
    borderRadius: 12,
    padding: "32px 28px",
    display: "flex",
    flexDirection: "column" as const,
    gap: 16,
    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
  },
  // 4 different light background colors for cards
  card1: { background: "#E8F4FD" },  // Light Blue
  card2: { background: "#E8FDE8" },  // Light Green
  card3: { background: "#FEF3E8" },  // Light Orange
  card4: { background: "#FDE8F0" },  // Light Pink
  cardTopRow: {
    display: "grid",
    gridTemplateColumns: "30% 70%",
    gap: 16,
    alignItems: "center",
  },
  cardIcon: {
    width: 64,
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 32,
  },
  cardTitle: {
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
    fontSize: 18,
    fontWeight: 700,
    margin: 0,
    textAlign: "left" as const,
  },
  cardTitle1: { color: "#1565C0" },
  cardTitle2: { color: "#2E7D32" },
  cardTitle3: { color: "#E65100" },
  cardTitle4: { color: "#AD1457" },
  cardBody: { 
    fontSize: 14, 
    lineHeight: 1.7, 
    margin: 0,
    textAlign: "left" as const,
  },
  cardBody1: { color: "#1A237E" },
  cardBody2: { color: "#1B5E20" },
  cardBody3: { color: "#BF360C" },
  cardBody4: { color: "#4A148C" },
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
    width: 380,
    height: "auto",
    minHeight: 380,
    borderRadius: 12,
    overflow: "hidden",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  goldBannerImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  },
  iconRow: {
    background: "#EBF5FF",
    padding: "0 60px 70px",
  },
  iconGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 24,
  },
  iconItem: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    padding: "20px 24px",
    background: "transparent",
    borderRadius: 12,
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  iconItemHover: {
    background: "#2980B9",
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    background: "rgba(41,128,185,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    flexShrink: 0,
    transition: "all 0.3s ease",
  },
  iconCircleHover: {
    background: "rgba(255,255,255,0.3)",
  },
  iconLabel: {
    fontSize: 15,
    lineHeight: 1.4,
    color: "#1A1A1A",
    fontWeight: 500,
    flex: 1,
    transition: "all 0.3s ease",
  },
  iconLabelHover: {
    color: "#fff",
  },
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
  techImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
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
  ctaButton: {
    display: "inline-block",
    background: "#74C0FC",
    color: "#1E3A5F",
    border: "none",
    borderRadius: 30,
    padding: "12px 28px",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: 24,
    textDecoration: "none",
  },
  additionalSection: {
    background: "#fff",
    padding: "60px 60px",
  },
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
  // State for hovered icon
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Check screen size for responsive layout
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Refs
  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLElement>(null);
  const goldBannerRef = useRef<HTMLElement>(null);
  const iconRowRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLElement>(null);
  const featureRef = useRef<HTMLElement>(null);
  const additionalRef = useRef<HTMLElement>(null);

  // Card color configurations
  const cardConfigs = [
    { bg: styles.card1, titleColor: styles.cardTitle1, bodyColor: styles.cardBody1 },
    { bg: styles.card2, titleColor: styles.cardTitle2, bodyColor: styles.cardBody2 },
    { bg: styles.card3, titleColor: styles.cardTitle3, bodyColor: styles.cardBody3 },
    { bg: styles.card4, titleColor: styles.cardTitle4, bodyColor: styles.cardBody4 },
  ];

  // Contact Us button click handler
  const handleContactClick = () => {
    window.location.href = "/contact-us";
  };

  // Responsive style functions
  const getHeroBackgroundStyle = (): React.CSSProperties => {
    if (isMobile) {
      return { 
        ...styles.hero, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        minHeight: 380,
        padding: "40px 20px"
      };
    }
    if (isTablet) {
      return { 
        ...styles.hero, 
        backgroundSize: "contain", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        minHeight: 520,
        padding: "60px 40px"
      };
    }
    return styles.hero;
  };

  const getHeroHeadingStyle = (): React.CSSProperties => {
    if (isMobile) return { ...styles.heroHeading, fontSize: 32, marginLeft: 12 };
    if (isTablet) return { ...styles.heroHeading, fontSize: 42, marginLeft: 12 };
    return { ...styles.heroHeading, marginLeft: 12 };
  };

  const getHeroDescriptionStyle = (): React.CSSProperties => {
    if (isMobile) return { ...styles.heroDescription, display: "none" };
    if (isTablet) return { ...styles.heroDescription, fontSize: 14, marginLeft: 12 };
    return { ...styles.heroDescription, marginLeft: 12 };
  };

  const getHeroTextStyle = (): React.CSSProperties => {
    return { ...styles.heroText, marginLeft: 0 };
  };

  const getIntroSectionStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { ...styles.introSection, flexDirection: "column", padding: "40px 20px", textAlign: "center" };
    }
    return styles.introSection;
  };

  const getIntroBodyStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { width: "100%", textAlign: "center" };
    }
    return styles.introBody;
  };

  const getIntroImageBoxStyle = (): React.CSSProperties => {
    if (isMobile) {
      return { ...styles.introImageBox, width: "100%", height: "auto", minHeight: 250 };
    }
    if (isTablet) {
      return { ...styles.introImageBox, width: "100%", height: "auto", minHeight: 300 };
    }
    return styles.introImageBox;
  };

  const getCardsGridColumns = (): string => {
    if (isMobile) return "1fr";
    if (isTablet) return "repeat(2, 1fr)";
    return "repeat(4, 1fr)";
  };

  const getCardsSectionStyle = (): React.CSSProperties => {
    if (isMobile) {
      return { ...styles.cardsSection, padding: "40px 20px" };
    }
    if (isTablet) {
      return { ...styles.cardsSection, padding: "50px 30px" };
    }
    return styles.cardsSection;
  };

  const getGoldBannerStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { ...styles.goldBanner, flexDirection: "column", padding: "40px 20px", textAlign: "center", background: "#EBF5FF" };
    }
    return styles.goldBanner;
  };

  const getGoldBannerTextStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { width: "100%", textAlign: "center" };
    }
    return styles.goldBannerText;
  };

  const getGoldBannerImageBoxStyle = (): React.CSSProperties => {
    if (isMobile) {
      return { ...styles.goldBannerImageBox, width: "100%", height: "auto", minHeight: 250 };
    }
    if (isTablet) {
      return { ...styles.goldBannerImageBox, width: "100%", height: "auto", minHeight: 300 };
    }
    return styles.goldBannerImageBox;
  };

  const getIconGridColumns = (): string => {
    if (isMobile) return "1fr";
    return "repeat(2, 1fr)";
  };

  const getIconRowStyle = (): React.CSSProperties => {
    if (isMobile) {
      return { ...styles.iconRow, padding: "0 20px 40px 20px", background: "#EBF5FF" };
    }
    if (isTablet) {
      return { ...styles.iconRow, padding: "0 30px 50px 30px", background: "#EBF5FF" };
    }
    return styles.iconRow;
  };

  const getTechSectionStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { ...styles.techSection, flexDirection: "column", padding: "40px 20px", textAlign: "center" };
    }
    return styles.techSection;
  };

  const getTechBodyStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { width: "100%", textAlign: "center" };
    }
    return styles.techBody;
  };

  const getTechImageBoxStyle = (): React.CSSProperties => {
    if (isMobile) {
      return { ...styles.techImageBox, width: "100%", height: "auto", minHeight: 250 };
    }
    if (isTablet) {
      return { ...styles.techImageBox, width: "100%", height: "auto", minHeight: 300 };
    }
    return styles.techImageBox;
  };

  const getFeatureGridColumns = (): string => {
    if (isMobile) return "1fr";
    if (isTablet) return "repeat(2, 1fr)";
    return "repeat(3, 1fr)";
  };

  const getFeatureSectionStyle = (): React.CSSProperties => {
    if (isMobile) {
      return { ...styles.featureSection, padding: "40px 20px" };
    }
    if (isTablet) {
      return { ...styles.featureSection, padding: "50px 30px" };
    }
    return styles.featureSection;
  };

  const getCtaBannerStyle = (): React.CSSProperties => {
    if (isMobile) {
      return { ...styles.ctaBanner, padding: "40px 20px", fontSize: 18 };
    }
    if (isTablet) {
      return { ...styles.ctaBanner, padding: "48px 30px", fontSize: 20 };
    }
    return styles.ctaBanner;
  };

  const getAdditionalSectionStyle = (): React.CSSProperties => {
    if (isMobile) {
      return { ...styles.additionalSection, padding: "40px 20px" };
    }
    if (isTablet) {
      return { ...styles.additionalSection, padding: "50px 30px" };
    }
    return styles.additionalSection;
  };

  const getIntroParaStyle = (): React.CSSProperties => {
    if (isMobile) return { ...styles.introPara, fontSize: 13, textAlign: "center" };
    if (isTablet) return { ...styles.introPara, fontSize: 14, textAlign: "center" };
    return styles.introPara;
  };

  const getSectionHeadingStyle = (): React.CSSProperties => {
    if (isMobile) return { ...styles.sectionHeading, fontSize: 28 };
    if (isTablet) return { ...styles.sectionHeading, fontSize: 32 };
    return styles.sectionHeading;
  };

  const getTechParaStyle = (): React.CSSProperties => {
    if (isMobile) return { ...styles.techPara, fontSize: 13, textAlign: "center" };
    if (isTablet) return { ...styles.techPara, fontSize: 14, textAlign: "center" };
    return styles.techPara;
  };

  const cardsData = [
    { icon: "🏭", title: "Industry-Specific App Expertise", body: "We specialize in building applications tailored to various industries like healthcare, fintech, retail, and logistics." },
    { icon: "⚡", title: "Performance-Optimized Architecture", body: "Our development emphasizes speed, stability, and scalability for flawless performance under any user load." },
    { icon: "🚀", title: "Future-Ready Technologies", body: "We adopt cutting-edge technologies like AI, blockchain, IoT, and machine learning to future-proof your digital products." },
    { icon: "🎨", title: "User-Centric UI/UX Design", body: "We craft intuitive interfaces and user-friendly experiences that boost engagement, retention, satisfaction, conversion rates, and overall usability." },
  ];

  const iconItems = [
    { icon: "🏗️", label: "Custom-Built Apps - Tailored software solutions designed specifically to meet your business goals & workflows." },
    { icon: "📱", label: "Cross-Platform Compatible - Apps that run seamlessly across web, mobile (iOS & Android), and desktop platforms." },
    { icon: "🎯", label: "User-Centric UI/UX Design - Intuitive interfaces and user-friendly experiences that boost engagement and usability." },
    { icon: "🔄", label: "Agile Dev Process - Iterative development with flexibility for faster delivery, regular updates, and customer feedback loops." },
    { icon: "🔗", label: "API Integration - Seamless integration with payment gateways, CRMs, ERPs, social platforms, and other tools." },
    { icon: "☁️", label: "Cloud-Ready Solutions - Scalable and secure cloud-based applications for better performance and easy deployment." },
  ];

  return (
    <div style={styles.page}>

      {/* ── HERO ── */}
      <section ref={heroRef} style={getHeroBackgroundStyle()}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroOverlay2} />
        <div style={getHeroTextStyle()}>
          <h1 style={getHeroHeadingStyle()}>
            Innovate with
            Code.
          </h1>
          <p style={getHeroDescriptionStyle()}>
            Transform your ideas into powerful, scalable applications with our expert development team.
            From concept to deployment, we bring your vision to life.
          </p>
        </div>
        <div style={styles.heroImagePlaceholder}>[ Application Development Hero Image ]</div>
      </section>

      {/* ── CARDS (4 cards in one row with different colors) ── */}
      <section ref={cardsRef} style={getCardsSectionStyle()}>
        <h2 style={getSectionHeadingStyle()}>
          Crafting <em style={styles.sectionHeadingItalic}>Intelligent Solutions</em> that Empower Digital Growth
        </h2>
        <div style={{ ...styles.cardsGrid, gridTemplateColumns: getCardsGridColumns() }}>
          {cardsData.map((c, idx) => {
            const config = cardConfigs[idx % cardConfigs.length];
            return (
              <div key={c.title} style={{ ...styles.card, ...config.bg }}>
                <div style={styles.cardTopRow}>
                  <div style={styles.cardIcon}>{c.icon}</div>
                  <h3 style={{ ...styles.cardTitle, ...config.titleColor }}>{c.title}</h3>
                </div>
                <p style={{ ...styles.cardBody, ...config.bodyColor }}>{c.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── INTRO ── */}
      <section ref={introRef} style={getIntroSectionStyle()}>
        <div style={getIntroBodyStyle()}>
          <p style={getIntroParaStyle()}>
            Data Artisans blends technical expertise with strategic thinking to deliver custom application solutions that solve real business challenges. We prioritize seamless integration, future-ready architecture, and user-centric design to create software that's not only functional but transformative.
          </p>
          <p style={getIntroParaStyle()}>
            With over two decades of connecting talent with opportunity, we understand what organisations need from technology partners and what end-users need from applications. Our development programmes are structured to deliver real value  not just code completion, but genuine business impact.
          </p>
          <p style={getIntroParaStyle()}>
            We partner with organisations across sectors to create custom applications that solve real business challenges. From identifying the right technology stack to managing the entire development lifecycle, we make it seamless.
          </p>
          <p style={getIntroParaStyle()}>
            Our deep industry expertise, technology partnerships, and agile development capabilities give us the edge to deliver the right solution for the right problem  every time. Let us make the right experience happen.
          </p>
        </div>
        <div style={getIntroImageBoxStyle()}>
          <img 
            src="/appdev-img2.jpg" 
            alt="Application Development"
            style={styles.introImage}
          />
        </div>
      </section>

      {/* ── GOLD BANNER (Image on Right, Content on Left) ── */}
      <section ref={goldBannerRef} style={getGoldBannerStyle()}>
        <div style={getGoldBannerTextStyle()}>
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
        <div style={getGoldBannerImageBoxStyle()}>
          <img 
            src="/appdev-img5.jpg" 
            alt="Application Development Success"
            style={styles.goldBannerImage}
          />
        </div>
      </section>

      {/* ── ICON ROW (2 columns, same color as gold banner, hover effect) ── */}
      <div ref={iconRowRef} style={getIconRowStyle()}>
        <div style={{ ...styles.iconGrid, gridTemplateColumns: getIconGridColumns() }}>
          {iconItems.map((item, i) => (
            <div
              key={i}
              style={{
                ...styles.iconItem,
                ...(hoveredIcon === i ? styles.iconItemHover : {})
              }}
              onMouseEnter={() => setHoveredIcon(i)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div style={{
                ...styles.iconCircle,
                ...(hoveredIcon === i ? styles.iconCircleHover : {})
              }}>
                {item.icon}
              </div>
              <p style={{
                ...styles.iconLabel,
                ...(hoveredIcon === i ? styles.iconLabelHover : {})
              }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── TECH SECTION (Image on Left, Content on Right) ── */}
      <section ref={techRef} style={getTechSectionStyle()}>
        <div style={getTechBodyStyle()}>
          <p style={getTechParaStyle()}>
            Today businesses thrive on global, forward-thinking strategies programmed into high-end technology solutions. Businesses want solutions based on innovative concepts that should give them leverage over their competitors. These solutions should be agile enough to respond to inevitable changes and should have an ability to deliver quick results amid various industry challenges.
          </p>
          <p style={getTechParaStyle()}>
            We, at Data Artisans, drive businesses to success by giving them the much required edge in the industry. By delivering all kinds of solutions from enterprise-based applications to custom-made eCommerce applications, Data Artisans creates new opportunities, streamlines processes, and integrates operations.
          </p>
          <p style={getTechParaStyle()}>
            The skilful experts at Data Artisans are your right technology partners, who can help you maximize process improvement and operational savings by implementing best Web solutions designed for your business needs.
          </p>
        </div>
        <div style={getTechImageBoxStyle()}>
          <img 
            src="/appdev-img4.jpg" 
            alt="Smart Applications Development"
            style={styles.techImage}
          />
        </div>
      </section>

      {/* ── FEATURE CARDS ── */}
      <section ref={featureRef} style={getFeatureSectionStyle()}>
        <h2 style={getSectionHeadingStyle()}>
          Features
        </h2>
        <div style={{ ...styles.featureGrid, gridTemplateColumns: getFeatureGridColumns() }}>
          {[
            { icon: "🔒", title: "Robust Security Protocol", body: "Implementation of data encryption, role-based access, and secure coding practices." },
            { icon: "🧪", title: "Automated Testing & QA", body: "Continuous testing for bug-free, high-performance applications with reliable functionality." },
            { icon: "🛠️", title: "Maintenance & Support", body: "Post-deployment updates, performance optimization, and issue resolution to keep apps running smoothly." },
            { icon: "⚡", title: "Performance Optimization", body: "Every project is built with performance and efficiency in mind." },
            { icon: "🔄", title: "Real-Time Integrations", body: "Seamless integrations streamline operations and boost productivity." },
            { icon: "🔐", title: "Secure Delivery", body: "We apply rigorous testing for secure, bug-free delivery." },
          ].map((f, _idx) => (
            <div key={f.title} style={styles.featureCard}>
              <div>
                <div style={styles.featureIcon}>{f.icon}</div>
                <h4 style={styles.featureTitle}>{f.title}</h4>
                <p style={styles.featureBody}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA with Contact Us Button ── */}
      <div style={getCtaBannerStyle()}>
        <div>At the heart of great software lies <span style={styles.ctaSpan}>purpose-driven development.</span></div>
        <button onClick={handleContactClick} style={styles.ctaButton}>
          Contact Us
        </button>
      </div>

      {/* ── ADDITIONAL CONTENT SECTION ── */}
      <section ref={additionalRef} style={getAdditionalSectionStyle()}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={getIntroParaStyle()}>
            Data Artisans eBusiness consulting solutions deliver measurable value, incorporating a broad range of technologies. We build and implement end-to-end e-Business services and solutions that seamlessly integrate with diverse business applications.
          </p>
          <p style={getIntroParaStyle()}>
            Our portfolio of successful Web projects includes Web Portals for eGovernance, License Management Systems, Social Networking sites, Customer relationship management applications, Content management and Workflow solutions, eLearning portals, storefronts, integration with back-end applications, Web-enabling of legacy applications, and ERP systems integration with Web applications.
          </p>
          <p style={getIntroParaStyle()}>
            Our Web solutions bring together expertise in middleware integration, application servers, portal development frameworks, and content management solutions, on the latest technology platforms such as Microsoft .NET and J2EE.
          </p>
        </div>
      </section>

    </div>
  );
};

export default ApplicationDevelopmentPage;