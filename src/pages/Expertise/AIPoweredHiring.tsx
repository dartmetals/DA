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
    background: "url('/ai.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    padding: "80px 60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "left" as const,
    minHeight: 520,
    position: "relative",
    overflow: "hidden",
    backgroundRepeat: "no-repeat",
  },
  heroText: { maxWidth: 700, zIndex: 1, margin: 0, textAlign: "left" as const },
  heroHeading: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    fontStyle: "italic",
    fontSize: 48,
    fontWeight: 700,
    lineHeight: 1.15,
    margin: 0,
    textAlign: "left" as const,
  },
  heroSubPara: {
    fontSize: 16,
    marginTop: 16,
    opacity: 0.9,
    textAlign: "left" as const,
  },
  heroDescription: {
    fontSize: 16,
    marginTop: 20,
    opacity: 0.95,
    lineHeight: 1.5,
    maxWidth: 600,
    marginLeft: 0,
    marginRight: 0,
    textAlign: "left" as const,
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
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 32,
  },
  // 6 different light background colors for cards
  card1: { background: "#E8F4FD" },  // Light Blue
  card2: { background: "#E8FDE8" },  // Light Green
  card3: { background: "#FEF3E8" },  // Light Orange
  card4: { background: "#FDE8F0" },  // Light Pink
  card5: { background: "#F0E8FD" },  // Light Purple
  card6: { background: "#E8FDF4" },  // Light Mint
  card: {
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
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 26,
  },
  cardIcon1: { background: "linear-gradient(135deg, #2196F3, #0D47A1)" },
  cardIcon2: { background: "linear-gradient(135deg, #4CAF50, #1B5E20)" },
  cardIcon3: { background: "linear-gradient(135deg, #FF9800, #E65100)" },
  cardIcon4: { background: "linear-gradient(135deg, #E91E63, #880E4F)" },
  cardIcon5: { background: "linear-gradient(135deg, #9C27B0, #4A148C)" },
  cardIcon6: { background: "linear-gradient(135deg, #009688, #004D40)" },
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
  cardTitle5: { color: "#6A1B9A" },
  cardTitle6: { color: "#004D40" },
  cardBody: { fontSize: 14, lineHeight: 1.7, margin: 0 },
  cardBody1: { color: "#1A237E" },
  cardBody2: { color: "#1B5E20" },
  cardBody3: { color: "#BF360C" },
  cardBody4: { color: "#4A148C" },
  cardBody5: { color: "#4A148C" },
  cardBody6: { color: "#004D40" },
  goldBanner: {
    background: "#EFF6FF",  // Light Blue Background
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
    background: "#EFF6FF",  // Same as gold banner
    padding: "0 60px 70px",
  },
  iconGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 20,
  },
  iconItem: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    padding: "16px 20px",
    background: "transparent",
    borderRadius: 12,
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  iconItemHover: {
    background: "#2563eb",
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    background: "rgba(37,99,235,0.15)",
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
    fontSize: 14,
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
    width: 400,
    height: 300,
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
    borderRadius: 12,
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
  statItem: {
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
  ctaButton: {
    display: "inline-block",
    background: "#60a5fa",
    color: "#1A1A2E",
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

  // Animation controls
  const heroImageControls = useAnimation();
  const heroTextControls = useAnimation();
  const introImageControls = useAnimation();
  const introContentControls = useAnimation();
  const cardsControls = useAnimation();
  const statsControls = useAnimation();
  const goldBannerContentControls = useAnimation();
  const goldBannerImageControls = useAnimation();
  const iconRowControls = useAnimation();
  const techImageControls = useAnimation();
  const techContentControls = useAnimation();
  const featureCardsControls = useAnimation();

  // Refs
  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const goldBannerRef = useRef<HTMLElement>(null);
  const iconRowRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLElement>(null);
  const featureRef = useRef<HTMLElement>(null);

  // Card color configurations
  const cardConfigs = [
    { bg: styles.card1, iconBg: styles.cardIcon1, titleColor: styles.cardTitle1, bodyColor: styles.cardBody1 },
    { bg: styles.card2, iconBg: styles.cardIcon2, titleColor: styles.cardTitle2, bodyColor: styles.cardBody2 },
    { bg: styles.card3, iconBg: styles.cardIcon3, titleColor: styles.cardTitle3, bodyColor: styles.cardBody3 },
    { bg: styles.card4, iconBg: styles.cardIcon4, titleColor: styles.cardTitle4, bodyColor: styles.cardBody4 },
    { bg: styles.card5, iconBg: styles.cardIcon5, titleColor: styles.cardTitle5, bodyColor: styles.cardBody5 },
    { bg: styles.card6, iconBg: styles.cardIcon6, titleColor: styles.cardTitle6, bodyColor: styles.cardBody6 },
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
      transition: { staggerChildren: 0.08 }
    }
  } as const;

  const listItemRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  } as const;

  const fromRightStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  } as const;

  const fromRightItem = {
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

  // Responsive style functions
  const getHeroBackgroundStyle = (): React.CSSProperties => {
    if (isMobile) {
      return { 
        ...styles.hero, 
        backgroundSize: "contain", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        minHeight: 320,
        padding: "0px"
      };
    }
    if (isTablet) {
      return { 
        ...styles.hero, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        minHeight: 450,
        padding: "60px 40px"
      };
    }
    return styles.hero;
  };

  const getHeroHeadingStyle = (): React.CSSProperties => {
    if (isMobile) return { ...styles.heroHeading, fontSize: 32 };
    if (isTablet) return { ...styles.heroHeading, fontSize: 40 };
    return styles.heroHeading;
  };

  const getHeroDescriptionStyle = (): React.CSSProperties => {
    if (isMobile) return { ...styles.heroDescription, display: "none" };
    if (isTablet) return { ...styles.heroDescription, fontSize: 13 };
    return styles.heroDescription;
  };

  const getHeroTextStyle = (): React.CSSProperties => {
    return { ...styles.heroText };
  };

  const getIntroSectionStyle = (): React.CSSProperties => {
    if (isMobile) {
      return { ...styles.introSection, flexDirection: "column", padding: "20px 20px 40px 20px", textAlign: "center" };
    }
    if (isTablet) {
      return { ...styles.introSection, flexDirection: "column", padding: "30px 20px 50px 20px", textAlign: "center" };
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
    return "repeat(3, 1fr)";
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

  const getStatsGridColumns = (): string => {
    if (isMobile) return "1fr";
    if (isTablet) return "repeat(2, 1fr)";
    return "repeat(4, 1fr)";
  };

  const getStatsSectionStyle = (): React.CSSProperties => {
    if (isMobile) {
      return { ...styles.statsSection, padding: "40px 20px", gap: 30 };
    }
    if (isTablet) {
      return { ...styles.statsSection, padding: "50px 30px", gap: 30 };
    }
    return styles.statsSection;
  };

  const getStatNumberStyle = (): React.CSSProperties => {
    if (isMobile) return { fontSize: 36 };
    if (isTablet) return { fontSize: 42 };
    return { fontSize: 48 };
  };

  const getStatLabelStyle = (): React.CSSProperties => {
    if (isMobile) return { fontSize: 11 };
    if (isTablet) return { fontSize: 12 };
    return { fontSize: 14 };
  };

  const getGoldBannerStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { ...styles.goldBanner, flexDirection: "column", padding: "40px 20px", textAlign: "center" };
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
      return { ...styles.iconRow, padding: "0 20px 40px 20px" };
    }
    if (isTablet) {
      return { ...styles.iconRow, padding: "0 30px 50px 30px" };
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

  // Intersection Observer setup
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

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

    if (statsRef.current) {
      const statsObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            statsControls.start("visible");
          } else {
            statsControls.set("hidden");
          }
        },
        { threshold: 0.3 }
      );
      statsObserver.observe(statsRef.current);
      observers.push(statsObserver);
    }

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

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const cardsData = [
    { icon: "🎯", title: "Smart Profile Matching", body: "AI algorithms analyze resumes and job descriptions to match the most suitable candidates faster and more accurately." },
    { icon: "⚡", title: "Faster Screening", body: "Automated screening processes save time by shortlisting top candidates based on skills, experience, and relevance." },
    { icon: "🤝", title: "Bias-Free Hiring", body: "Artificial Intelligence ensures fair and unbiased evaluations, helping you build diverse and inclusive teams." },
    { icon: "📊", title: "Data-Driven Decisions", body: "Gain actionable insights through analytics on candidate performance, hiring trends, and process efficiency." },
    { icon: "🕒", title: "24/7 Recruitment", body: "With AI, hiring never sleeps - automated systems continue sourcing and screening around the clock." },
    { icon: "💬", title: "Enhanced Experience", body: "AI chatbots and virtual assistants offer quick updates & seamless communication throughout the recruitment journey." },
  ];

  const iconItems = [
    { icon: "🤖", label: "AI-powered candidate sourcing and screening across multiple channels" },
    { icon: "📊", label: "Data-driven insights for better hiring decisions and talent analytics" },
    { icon: "⚡", label: "Automated interview scheduling and candidate communication workflows" },
    { icon: "🎯", label: "Intelligent job matching based on skills, experience, and cultural fit" },
    { icon: "🛡️", label: "Bias detection and removal for fair and inclusive hiring practices" },
    { icon: "📈", label: "Predictive analytics to identify top-performing candidates before they apply" },
  ];

  return (
    <div style={styles.page}>

      {/* ── HERO ── */}
      <motion.section
        ref={heroRef}
        style={getHeroBackgroundStyle()}
        initial="hidden"
        animate={heroImageControls}
        variants={imageFromRight}
      >
        <motion.div
          style={getHeroTextStyle()}
          variants={textFromBottom}
          initial="hidden"
          animate={heroTextControls}
        >
          <h1 style={getHeroHeadingStyle()}>
            AI Powered
            Hiring.
          </h1>
          <p style={getHeroDescriptionStyle()}>
            Revolutionize your recruitment process with cutting-edge AI technology.
          </p>
          <p style={getHeroDescriptionStyle()}>
            Smart hiring starts with smart data - let AI lead the way.
          </p>
        </motion.div>
        <div style={styles.heroImagePlaceholder}>[ AI Hiring Hero Image ]</div>
      </motion.section>

      {/* ── INTRO ── */}
      <section ref={introRef} style={getIntroSectionStyle()}>
        <motion.div
          style={getIntroBodyStyle()}
          variants={fromBottomStagger}
          initial="hidden"
          animate={introContentControls}
        >
          <motion.p variants={fromBottomItem} style={getIntroParaStyle()}>
            In today's diverse workforce, fairness and objectivity are non-negotiable. Traditional hiring methods can unknowingly introduce bias, leading to missed opportunities for both employers and talented candidates. AI-powered hiring transforms this by using data-driven assessments and algorithms that focus solely on skills, experience, and job relevance.
          </motion.p>
          <motion.p variants={fromBottomItem} style={getIntroParaStyle()}>
            By removing human bias from the equation, AI helps organizations build more inclusive teams that reflect true merit. It ensures that every candidate is evaluated on an equal footing, paving the way for a transparent, equitable, and future-ready hiring process.
          </motion.p>
          <motion.p variants={fromBottomItem} style={getIntroParaStyle()}>
            Discover the future of recruitment automation with Data Artisans.
          </motion.p>
        </motion.div>
        <motion.div
          style={getIntroImageBoxStyle()}
          variants={imageFromLeft}
          initial="hidden"
          animate={introImageControls}
        >
          <img 
            src="/ai-img1.jpg" 
            alt="AI Powered Hiring"
            style={styles.introImage}
          />
        </motion.div>
      </section>

      {/* ── CARDS (3 columns, 2 rows = 6 cards with different colors) ── */}
      <motion.section
        ref={cardsRef}
        style={getCardsSectionStyle()}
        initial="hidden"
        animate={cardsControls}
      >
        <motion.h2 variants={textFromBottom} style={getSectionHeadingStyle()}>
          Making <em style={styles.sectionHeadingItalic}>AI-powered recruitment happen</em>
        </motion.h2>
        <motion.div
          style={{ ...styles.cardsGrid, gridTemplateColumns: getCardsGridColumns() }}
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

      {/* ── STATS SECTION ── */}
      <motion.div
        ref={statsRef}
        style={{ ...getStatsSectionStyle(), gridTemplateColumns: getStatsGridColumns() }}
        variants={fromRightStagger}
        initial="hidden"
        animate={statsControls}
      >
        {[
          { number: "300000+", label: "Resumes Screened by AI" },
          { number: "95%", label: "Faster Shortlisting" },
          { number: "80%", label: "Improved Accuracy" },
          { number: "24x7", label: "Automated Engagement" },
        ].map((stat, i) => (
          <motion.div key={i} variants={fromRightItem} style={styles.statItem}>
            <div style={{ ...styles.statNumber, ...getStatNumberStyle() }}>{stat.number}</div>
            <div style={{ ...styles.statLabel, ...getStatLabelStyle() }}>{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── GOLD BANNER (Image on Right, Content on Left) ── */}
      <section ref={goldBannerRef} style={getGoldBannerStyle()}>
        <motion.div
          style={getGoldBannerTextStyle()}
          variants={fromBottomStagger}
          initial="hidden"
          animate={goldBannerContentControls}
        >
          <motion.p variants={fromBottomItem} style={styles.goldBannerPara}>
            <strong>Redefining Recruitment Through Innovation</strong>
          </motion.p>
          <motion.p variants={fromBottomItem} style={styles.goldBannerPara}>
            Recruitment has come a long way since we began our journey. What once relied heavily on paper-based processes has now evolved into a dynamic, technology-enabled system. We've not only witnessed this transformation firsthand but have also played an active role in shaping it. From traditional hiring practices to digital-first talent acquisition strategies, we've adapted with the times and continue to do so.
          </motion.p>
          <motion.p variants={fromBottomItem} style={styles.goldBannerPara}>
            As recruitment has shifted from brick to click, we've embraced this evolution by integrating AI-powered solutions that meet the demands of today's digital workforce. Our collaboration with our group company, Simplify3x, has been instrumental in driving innovation at every step of the hiring journey. From sourcing and screening to assessments, virtual interviews, and onboarding - we offer seamless, end-to-end recruitment support powered by smart technology and expert insights.
          </motion.p>
          <motion.p variants={fromBottomItem} style={styles.goldBannerPara}>
            Our internal operations are equally driven by advanced tools and automation, ensuring that our clients and candidates benefit from data-backed decisions, actionable analytics, and efficient processes. We continually train our teams with evolving tools and technologies, enabling them to stay ahead of the curve. At the heart of our success is the synergy of cutting-edge tech and dedicated professionals - a combination that allows us to build high-performing teams and deliver superior recruitment experiences.
          </motion.p>
        </motion.div>
        <motion.div
          style={getGoldBannerImageBoxStyle()}
          variants={imageFromRight}
          initial="hidden"
          animate={goldBannerImageControls}
        >
          <img 
            src="/ai-img2.jpg" 
            alt="AI Recruitment Innovation"
            style={styles.goldBannerImage}
          />
        </motion.div>
      </section>

      {/* ── ICON ROW (2 columns, hover effect, same bg as gold banner) ── */}
      <motion.div
        ref={iconRowRef}
        style={getIconRowStyle()}
        variants={listFromRight}
        initial="hidden"
        animate={iconRowControls}
      >
        <div style={{ ...styles.iconGrid, gridTemplateColumns: getIconGridColumns() }}>
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

      {/* ── TECH SECTION ── */}
      <motion.section
        ref={techRef}
        style={getTechSectionStyle()}
        initial="hidden"
        animate={techImageControls}
      >
        <motion.div
          style={getTechBodyStyle()}
          variants={fromBottomStagger}
          initial="hidden"
          animate={techContentControls}
        >
          <motion.p variants={fromBottomItem} style={getTechParaStyle()}>
            The traditional hiring process — paper resumes, manual shortlisting, and lengthy interview cycles — is a thing of the past. We have evolved alongside the industry to bring technology at the centre of every placement we make.
          </motion.p>
          <motion.p variants={fromBottomItem} style={getTechParaStyle()}>
            We have seen how recruitment has shifted from brick-and-mortar hiring to AI-powered talent matching. That evolution gives us the foresight to help organizations find exactly the right talent faster and more accurately than ever before.
          </motion.p>
          <motion.p variants={fromBottomItem} style={getTechParaStyle()}>
            With the help of our group company Simplify3x, we deploy intelligent matching algorithms, automated assessments, and virtual interview platforms to streamline the entire hiring cycle end to end.
          </motion.p>
          <motion.p variants={fromBottomItem} style={getTechParaStyle()}>
            Our internal processes leverage data, analytics, and operational automation to deliver exceptional experiences for both candidates and hiring organizations — reducing time-to-hire while improving quality of placement.
          </motion.p>
        </motion.div>
        <motion.div
          style={getTechImageBoxStyle()}
          variants={imageFromLeft}
          initial="hidden"
          animate={techImageControls}
        >
          <img 
            src="/ai-img4.jpg" 
            alt="AI powered recruitment"
            style={styles.techImage}
          />
        </motion.div>
      </motion.section>

      {/* ── FEATURE CARDS ── */}
      <motion.section
        ref={featureRef}
        style={getFeatureSectionStyle()}
        initial="hidden"
        animate={featureCardsControls}
      >
        <motion.h2 variants={textFromBottom} style={getSectionHeadingStyle()}>
          Features
        </motion.h2>
        <motion.div
          style={{ ...styles.featureGrid, gridTemplateColumns: getFeatureGridColumns() }}
          variants={cardContentStagger}
          initial="hidden"
          animate={featureCardsControls}
        >
          {[
            { icon: "🖥️", title: "End to end virtual recruitment", body: "From sourcing and assessments to offer letters and virtual onboarding — fully digital and seamless." },
            { icon: "📝", title: "AI-powered assessments", body: "Fraud-proof candidate screening with auto-detection and intelligent proctoring." },
            { icon: "🎥", title: "High volume video interviews", body: "With automatic ID verification and prevention of impersonation across bulk hiring drives." },
            { icon: "📱", title: "Seamless digital onboarding", body: "Fully digitized candidate engagement and document collection from day one." },
            { icon: "⚙️", title: "Complete automation", body: "Automated screening, scheduling, assessments, offer management, and onboarding workflows." },
            { icon: "🧩", title: "Advisory and analytics", body: "Expert guidance on recruitment strategy and data-driven insights for continuous improvement." },
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
      <div style={getCtaBannerStyle()}>
        <div style={{ marginBottom: 16 }}>
          Visit <span style={styles.ctaSpan}>Simplify3x</span> to explore a whole new world of recruitment automation.
        </div>
        <button onClick={handleContactClick} style={styles.ctaButton}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AIPoweredHiring;