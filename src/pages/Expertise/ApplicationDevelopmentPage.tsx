import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    color: "#1A1A1A",
    margin: 0,
    padding: 0,
    overflowX: "hidden",
  },
  hero: {
    background: "url('/appdev.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    padding: "80px 60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center" as const,
    minHeight: 520,
    position: "relative",
    overflow: "hidden",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.4)",
    pointerEvents: "none",
  },
  heroOverlay2: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.2)",
    pointerEvents: "none",
  },
  heroText: { maxWidth: 700, zIndex: 1, margin: "0 auto" },
  heroHeading: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    fontStyle: "italic",
    fontSize: 52,
    fontWeight: 700,
    lineHeight: 1.15,
    margin: 0,
  },
  heroDescription: {
    fontSize: 16,
    marginTop: 20,
    opacity: 0.95,
    lineHeight: 1.5,
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
  cardsSection: { background: "#F0F4F8", padding: "60px 60px" },
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
  },
  // 4 different light background colors for cards
  card1: { background: "#E8F4FD" },  // Light Blue
  card2: { background: "#E8FDE8" },  // Light Green
  card3: { background: "#FEF3E8" },  // Light Orange
  card4: { background: "#FDE8F0" },  // Light Pink
  cardIcon: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 26,
  },
  cardIcon1: { background: "linear-gradient(135deg, #2980B9, #1E3A5F)" },
  cardIcon2: { background: "linear-gradient(135deg, #27AE60, #1B5E20)" },
  cardIcon3: { background: "linear-gradient(135deg, #F39C12, #E65100)" },
  cardIcon4: { background: "linear-gradient(135deg, #E91E63, #880E4F)" },
  cardTitle: {
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 8,
    marginTop: 0,
  },
  cardTitle1: { color: "#1565C0" },
  cardTitle2: { color: "#2E7D32" },
  cardTitle3: { color: "#E65100" },
  cardTitle4: { color: "#AD1457" },
  cardBody: { fontSize: 14, lineHeight: 1.7, margin: 0 },
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
    background: "#EBF5FF",  // Same as gold banner
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

  // Animation controls
  const heroImageControls = useAnimation();
  const heroTextControls = useAnimation();
  const introImageControls = useAnimation();
  const introContentControls = useAnimation();
  const cardsControls = useAnimation();
  const goldBannerContentControls = useAnimation();
  const goldBannerImageControls = useAnimation();
  const iconRowControls = useAnimation();
  const techImageControls = useAnimation();
  const techContentControls = useAnimation();
  const featureCardsControls = useAnimation();
  const additionalSectionControls = useAnimation();

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
    { bg: styles.card1, iconBg: styles.cardIcon1, titleColor: styles.cardTitle1, bodyColor: styles.cardBody1 },
    { bg: styles.card2, iconBg: styles.cardIcon2, titleColor: styles.cardTitle2, bodyColor: styles.cardBody2 },
    { bg: styles.card3, iconBg: styles.cardIcon3, titleColor: styles.cardTitle3, bodyColor: styles.cardBody3 },
    { bg: styles.card4, iconBg: styles.cardIcon4, titleColor: styles.cardTitle4, bodyColor: styles.cardBody4 },
  ];

  // Animation variants (using as const for type safety)
  const imageFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  } as const;

  const textFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  } as const;

  const imageFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  } as const;

  const cardFromBottom = {
    hidden: { opacity: 0, y: 80 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1 }
    })
  } as const;

  const cardContentStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  } as const;

  const cardContentItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  } as const;

  const listFromRight = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  } as const;

  const listItemRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  } as const;

  const fromBottomStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  } as const;

  const fromBottomItem = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  } as const;

  // Contact Us button click handler
  const handleContactClick = () => {
    window.location.href = "/contact-us";
  };

  // Intersection Observer setup (removed triggerOnce)
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Hero section - image from right, text from bottom after image
    if (heroRef.current) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            heroImageControls.start("visible");
            setTimeout(() => heroTextControls.start("visible"), 400);
          } else {
            heroImageControls.set("hidden");
            heroTextControls.set("hidden");
          }
        },
        { threshold: 0.3 }
      );
      heroObserver.observe(heroRef.current);
      observers.push(heroObserver);
    }

    // Intro section - image from left, content from bottom
    if (introRef.current) {
      const introObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            introImageControls.start("visible");
            introContentControls.start("visible");
          } else {
            introImageControls.set("hidden");
            introContentControls.set("hidden");
          }
        },
        { threshold: 0.3 }
      );
      introObserver.observe(introRef.current);
      observers.push(introObserver);
    }

    // Cards section - everything from bottom
    if (cardsRef.current) {
      const cardsObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            cardsControls.start("visible");
          } else {
            cardsControls.set("hidden");
          }
        },
        { threshold: 0.2 }
      );
      cardsObserver.observe(cardsRef.current);
      observers.push(cardsObserver);
    }

    // Gold Banner - image from right, content from bottom
    if (goldBannerRef.current) {
      const goldObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            goldBannerContentControls.start("visible");
            goldBannerImageControls.start("visible");
          } else {
            goldBannerContentControls.set("hidden");
            goldBannerImageControls.set("hidden");
          }
        },
        { threshold: 0.3 }
      );
      goldObserver.observe(goldBannerRef.current);
      observers.push(goldObserver);
    }

    // Icon Row - points from right one after another
    if (iconRowRef.current) {
      const iconObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            iconRowControls.start("visible");
          } else {
            iconRowControls.set("hidden");
          }
        },
        { threshold: 0.2 }
      );
      iconObserver.observe(iconRowRef.current);
      observers.push(iconObserver);
    }

    // Tech section - image from left, content from bottom
    if (techRef.current) {
      const techObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            techImageControls.start("visible");
            techContentControls.start("visible");
          } else {
            techImageControls.set("hidden");
            techContentControls.set("hidden");
          }
        },
        { threshold: 0.3 }
      );
      techObserver.observe(techRef.current);
      observers.push(techObserver);
    }

    // Feature Cards - cards from bottom
    if (featureRef.current) {
      const featureObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            featureCardsControls.start("visible");
          } else {
            featureCardsControls.set("hidden");
          }
        },
        { threshold: 0.2 }
      );
      featureObserver.observe(featureRef.current);
      observers.push(featureObserver);
    }

    // Additional section - content from bottom
    if (additionalRef.current) {
      const additionalObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            additionalSectionControls.start("visible");
          } else {
            additionalSectionControls.set("hidden");
          }
        },
        { threshold: 0.3 }
      );
      additionalObserver.observe(additionalRef.current);
      observers.push(additionalObserver);
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const cardsData = [
    { icon: "🏭", title: "Industry-Specific App Expertise", body: "We specialize in building applications tailored to various industries like healthcare, fintech, retail, and logistics." },
    { icon: "⚡", title: "Performance-Optimized Architecture", body: "Our development emphasizes speed, stability, and scalability for flawless performance under any user load." },
    { icon: "🚀", title: "Future-Ready Technologies", body: "We adopt cutting-edge technologies like AI, blockchain, and IoT to future-proof your digital products." },
    { icon: "🎨", title: "User-Centric UI/UX Design", body: "We craft intuitive interfaces and user-friendly experiences that boost engagement and usability." },
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
      <motion.section
        ref={heroRef}
        style={styles.hero}
        initial="hidden"
        animate={heroImageControls}
        variants={imageFromRight}
      >
        <div style={styles.heroOverlay} />
        <div style={styles.heroOverlay2} />
        <motion.div
          style={styles.heroText}
          variants={textFromBottom}
          initial="hidden"
          animate={heroTextControls}
        >
          <h1 style={styles.heroHeading}>
            Innovate with<br />
            Code.
          </h1>
          <p style={styles.heroDescription}>
            Transform your ideas into powerful, scalable applications with our expert development team.
            From concept to deployment, we bring your vision to life.
          </p>
        </motion.div>
        <div style={styles.heroImagePlaceholder}>[ Application Development Hero Image ]</div>
      </motion.section>

      {/* ── INTRO ── */}
      <section ref={introRef} style={styles.introSection}>
        <motion.div
          style={styles.introImageBox}
          variants={imageFromLeft}
          initial="hidden"
          animate={introImageControls}
        >
          <img 
            src="/appdev-img2.jpg" 
            alt="Application Development"
            style={styles.introImage}
          />
        </motion.div>
        <motion.div
          style={styles.introBody}
          variants={fromBottomStagger}
          initial="hidden"
          animate={introContentControls}
        >
          <motion.p variants={fromBottomItem} style={styles.introPara}>
            Data Artisans blends technical expertise with strategic thinking to deliver custom application solutions that solve real business challenges. We prioritize seamless integration, future-ready architecture, and user-centric design to create software that's not only functional but transformative.
          </motion.p>
          <motion.p variants={fromBottomItem} style={styles.introPara}>
            With over two decades of connecting talent with opportunity, we understand what organisations need from technology partners and what end-users need from applications. Our development programmes are structured to deliver real value  not just code completion, but genuine business impact.
          </motion.p>
          <motion.p variants={fromBottomItem} style={styles.introPara}>
            We partner with organisations across sectors to create custom applications that solve real business challenges. From identifying the right technology stack to managing the entire development lifecycle, we make it seamless.
          </motion.p>
          <motion.p variants={fromBottomItem} style={styles.introPara}>
            Our deep industry expertise, technology partnerships, and agile development capabilities give us the edge to deliver the right solution for the right problem  every time. Let us make the right experience happen.
          </motion.p>
        </motion.div>
      </section>

      {/* ── CARDS (4 cards in one row with different colors) ── */}
      <motion.section
        ref={cardsRef}
        style={styles.cardsSection}
        initial="hidden"
        animate={cardsControls}
      >
        <motion.h2 variants={textFromBottom} style={styles.sectionHeading}>
          Crafting <em style={styles.sectionHeadingItalic}>Intelligent Solutions</em> that Empower Digital Growth
        </motion.h2>
        <motion.div
          style={styles.cardsGrid}
          variants={cardContentStagger}
          initial="hidden"
          animate={cardsControls}
        >
          {cardsData.map((c, idx) => {
            const config = cardConfigs[idx % cardConfigs.length];
            return (
              <motion.div
                key={c.title}
                custom={idx}
                variants={cardFromBottom}
                style={{ ...styles.card, ...config.bg }}
              >
                <motion.div variants={cardContentItem}>
                  <div style={{ ...styles.cardIcon, ...config.iconBg }}>{c.icon}</div>
                  <h3 style={{ ...styles.cardTitle, ...config.titleColor }}>{c.title}</h3>
                  <p style={{ ...styles.cardBody, ...config.bodyColor }}>{c.body}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* ── GOLD BANNER (Image on Right, Content on Left) ── */}
      <section ref={goldBannerRef} style={styles.goldBanner}>
        <motion.div
          style={styles.goldBannerText}
          variants={fromBottomStagger}
          initial="hidden"
          animate={goldBannerContentControls}
        >
          <motion.p variants={fromBottomItem} style={styles.goldBannerPara}>
            <strong>1820+ Apps Delivered | 98% Client Satisfaction | 120+ Tech Stacks Mastered | 75+ Ongoing Projects</strong>
          </motion.p>
          <motion.p variants={fromBottomItem} style={styles.goldBannerPara}>
            At Data Artisans, we specialize in building custom web applications designed to deliver value-driven functionality that aligns with your unique business needs. These applications go beyond just aesthetics - they serve as robust tools to boost operational productivity, streamline workflows, and increase business system efficiency.
          </motion.p>
          <motion.p variants={fromBottomItem} style={styles.goldBannerPara}>
            By enhancing transparency in information sharing and optimizing internal processes, our solutions directly contribute to improving your bottom line. We craft scalable, user-friendly apps that empower business growth.
          </motion.p>
        </motion.div>
        <motion.div
          style={styles.goldBannerImageBox}
          variants={imageFromRight}
          initial="hidden"
          animate={goldBannerImageControls}
        >
          <img 
            src="/appdev-img5.jpg" 
            alt="Application Development Success"
            style={styles.goldBannerImage}
          />
        </motion.div>
      </section>

      {/* ── ICON ROW (2 columns, same color as gold banner, hover effect) ── */}
      <motion.div
        ref={iconRowRef}
        style={styles.iconRow}
        variants={listFromRight}
        initial="hidden"
        animate={iconRowControls}
      >
        <div style={styles.iconGrid}>
          {iconItems.map((item, i) => (
            <motion.div
              key={i}
              variants={listItemRight}
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
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── TECH SECTION (Image on Left, Content on Right) ── */}
      <motion.section
        ref={techRef}
        style={styles.techSection}
        initial="hidden"
        animate={techImageControls}
      >
        <motion.div
          style={styles.techImageBox}
          variants={imageFromLeft}
          initial="hidden"
          animate={techImageControls}
        >
          <img 
            src="/appdev-img4.jpg" 
            alt="Smart Applications Development"
            style={styles.techImage}
          />
        </motion.div>
        <motion.div
          style={styles.techBody}
          variants={fromBottomStagger}
          initial="hidden"
          animate={techContentControls}
        >
          <motion.p variants={fromBottomItem} style={styles.techPara}>
            Today businesses thrive on global, forward-thinking strategies programmed into high-end technology solutions. Businesses want solutions based on innovative concepts that should give them leverage over their competitors. These solutions should be agile enough to respond to inevitable changes and should have an ability to deliver quick results amid various industry challenges.
          </motion.p>
          <motion.p variants={fromBottomItem} style={styles.techPara}>
            We, at Data Artisans, drive businesses to success by giving them the much required edge in the industry. By delivering all kinds of solutions from enterprise-based applications to custom-made eCommerce applications, Data Artisans creates new opportunities, streamlines processes, and integrates operations.
          </motion.p>
          <motion.p variants={fromBottomItem} style={styles.techPara}>
            The skilful experts at Data Artisans are your right technology partners, who can help you maximize process improvement and operational savings by implementing best Web solutions designed for your business needs.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* ── FEATURE CARDS ── */}
      <motion.section
        ref={featureRef}
        style={styles.featureSection}
        initial="hidden"
        animate={featureCardsControls}
      >
        <motion.h2 variants={textFromBottom} style={styles.sectionHeading}>
          Features
        </motion.h2>
        <motion.div
          style={styles.featureGrid}
          variants={cardContentStagger}
          initial="hidden"
          animate={featureCardsControls}
        >
          {[
            { icon: "🔒", title: "Robust Security Protocol", body: "Implementation of data encryption, role-based access, and secure coding practices." },
            { icon: "🧪", title: "Automated Testing & QA", body: "Continuous testing for bug-free, high-performance applications with reliable functionality." },
            { icon: "🛠️", title: "Maintenance & Support", body: "Post-deployment updates, performance optimization, and issue resolution to keep apps running smoothly." },
            { icon: "⚡", title: "Performance Optimization", body: "Every project is built with performance and efficiency in mind." },
            { icon: "🔄", title: "Real-Time Integrations", body: "Seamless integrations streamline operations and boost productivity." },
            { icon: "🔐", title: "Secure Delivery", body: "We apply rigorous testing for secure, bug-free delivery." },
          ].map((f, idx) => (
            <motion.div
              key={f.title}
              custom={idx}
              variants={cardFromBottom}
              style={styles.featureCard}
            >
              <motion.div variants={cardContentItem}>
                <div style={styles.featureIcon}>{f.icon}</div>
                <h4 style={styles.featureTitle}>{f.title}</h4>
                <p style={styles.featureBody}>{f.body}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── CTA with Contact Us Button ── */}
      <div style={styles.ctaBanner}>
        <div>At the heart of great software lies <span style={styles.ctaSpan}>purpose-driven development.</span></div>
        <button onClick={handleContactClick} style={styles.ctaButton}>
          Contact Us
        </button>
      </div>

      {/* ── ADDITIONAL CONTENT SECTION ── */}
      <motion.section
        ref={additionalRef}
        style={styles.additionalSection}
        variants={fromBottomStagger}
        initial="hidden"
        animate={additionalSectionControls}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.p variants={fromBottomItem} style={styles.introPara}>
            Data Artisans eBusiness consulting solutions deliver measurable value, incorporating a broad range of technologies. We build and implement end-to-end e-Business services and solutions that seamlessly integrate with diverse business applications.
          </motion.p>
          <motion.p variants={fromBottomItem} style={styles.introPara}>
            Our portfolio of successful Web projects includes Web Portals for eGovernance, License Management Systems, Social Networking sites, Customer relationship management applications, Content management and Workflow solutions, eLearning portals, storefronts, integration with back-end applications, Web-enabling of legacy applications, and ERP systems integration with Web applications.
          </motion.p>
          <motion.p variants={fromBottomItem} style={styles.introPara}>
            Our Web solutions bring together expertise in middleware integration, application servers, portal development frameworks, and content management solutions, on the latest technology platforms such as Microsoft .NET and J2EE.
          </motion.p>
        </div>
      </motion.section>

    </div>
  );
};

export default ApplicationDevelopmentPage;