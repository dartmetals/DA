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
    background: "url('/digitaltransform.jpg')",
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
    backgroundRepeat: "no-repeat",
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
  heroSubText: {
    fontSize: 18,
    marginTop: 16,
    opacity: 0.95,
  },
  heroDescription: {
    fontSize: 16,
    marginTop: 16,
    opacity: 0.9,
    lineHeight: 1.5,
    maxWidth: 550,
    marginLeft: "auto",
    marginRight: "auto",
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
    width: 460,
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
  sectionHeadingItalic: { fontStyle: "italic", color: "#1E3A5F" },
  cardsSection: { background: "#F7F7F7", padding: "60px 60px" },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: 24,
  },
  card: {
    borderRadius: 12,
    padding: "28px 20px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    textAlign: "center" as const,
    gap: 16,
    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
    transition: "transform 0.3s ease",
  },
  // 6 different light background colors for cards
  card1: { background: "#E8F4FD" },  // Light Blue
  card2: { background: "#E8FDE8" },  // Light Green
  card3: { background: "#FEF3E8" },  // Light Orange
  card4: { background: "#FDE8F0" },  // Light Pink
  card5: { background: "#F0E8FD" },  // Light Purple
  card6: { background: "#E8FDF4" },  // Light Mint
  cardIcon: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 32,
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
  cardTitle6: { color: "#00695C" },
  cardBody: { fontSize: 13, lineHeight: 1.6, margin: 0 },
  cardBody1: { color: "#1A237E" },
  cardBody2: { color: "#1B5E20" },
  cardBody3: { color: "#BF360C" },
  cardBody4: { color: "#4A148C" },
  cardBody5: { color: "#4A148C" },
  cardBody6: { color: "#004D40" },
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
    borderRadius: 12,
  },
  iconRow: {
    background: "#EBF5FB",
    padding: "0 60px 70px 60px",
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
    width: 380,
    height: "auto",
    minHeight: 400,
    borderRadius: 12,
    overflow: "hidden",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    transition: "transform 0.3s ease",
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
    background: "#1E3A5F",
    color: "#fff",
    textAlign: "center" as const,
    padding: "48px 60px",
    fontSize: 22,
    fontWeight: 700,
  },
  ctaSpan: { color: "#2980B9" },
  ctaButton: {
    display: "inline-block",
    background: "#2980B9",
    color: "#fff",
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
  const statsControls = useAnimation();  // Separate control for stats
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
  const statsRef = useRef<HTMLDivElement>(null);  // Separate ref for stats
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

  // Animation variants (using as const to avoid TypeScript errors)
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

  const contentFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  } as const;

  const contentFromLeft = {
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

  // Responsive style functions
  const getHeroBackgroundStyle = (): React.CSSProperties => {
    if (isMobile) {
      return { 
        ...styles.hero, 
        backgroundSize: "contain", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        minHeight: 320,
        padding: "40px 20px"
      };
    }
    if (isTablet) {
      return { 
        ...styles.hero, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat"
      };
    }
    return styles.hero;
  };

  const getHeroHeadingStyle = (): React.CSSProperties => {
    if (isMobile) return { ...styles.heroHeading, fontSize: 32 };
    if (isTablet) return { ...styles.heroHeading, fontSize: 42 };
    return styles.heroHeading;
  };

  const getHeroDescriptionStyle = (): React.CSSProperties => {
    if (isMobile) return { ...styles.heroDescription, display: "none" };
    if (isTablet) return { ...styles.heroDescription, fontSize: 14 };
    return styles.heroDescription;
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
    return "repeat(6, 1fr)";
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

  const getStatsSectionStyle = (): React.CSSProperties => {
    if (isMobile) {
      return { ...styles.statsSection, padding: "40px 20px", gap: 30 };
    }
    if (isTablet) {
      return { ...styles.statsSection, padding: "50px 30px", gap: 30 };
    }
    return styles.statsSection;
  };

  const getStatsGridColumns = (): string => {
    if (isMobile) return "1fr";
    if (isTablet) return "repeat(2, 1fr)";
    return "repeat(4, 1fr)";
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

    if (statsRef.current) {
      const statsObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            statsControls.start("visible");
          } else {
            statsControls.set("hidden");
          }
        },
        { threshold: 0.2 }
      );
      statsObserver.observe(statsRef.current);
      observers.push(statsObserver);
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
    { icon: "💻", title: "Technology", body: "In today's fast-paced tech landscape, businesses need professionals with strong technical skills, business acumen, and user insight." },
    { icon: "🌐", title: "Internet", body: "Our deep expertise spans across both B2C and B2B internet sectors, enabling us to serve a wide range of digital businesses." },
    { icon: "🏢", title: "IT and Offshoring", body: "As the largest employers in the country, IT & Offshoring organizations hire thousands of professionals annually." },
    { icon: "💰", title: "Financial Services", body: "We provide services to banking, capital markets, and insurance sectors in application development and IT infrastructure." },
    { icon: "🏭", title: "Domestic Businesses", body: "We help home-grown businesses transform their models and tech by finding the right talent." },
    { icon: "🏗️", title: "Infrastructure", body: "AI and robotics are transforming recruitment in the infrastructure sector, helping you stay ahead." },
  ];

  const iconItems = [
    { icon: "🎯", label: "We tailor our software solutions to match specific industry needs." },
    { icon: "🤝", label: "Our teams collaborate closely with clients to ensure seamless integration." },
    { icon: "⚡", label: "We leverage the latest technologies to drive digital transformation." },
    { icon: "📈", label: "Scalability and performance are at the core of every solution we deliver." },
    { icon: "🔒", label: "Compliance and security are prioritized across all our industry offerings." },
    { icon: "🔄", label: "Continuous support and innovation help our clients stay future-ready." },
  ];

  const statsData = [
    { number: "1452+", label: "Happy Clients" },
    { number: "2195+", label: "Completed Projects" },
    { number: "100+", label: "Outsourcing Partners" },
    { number: "150+", label: "Professional Team" },
  ];

  // Contact Us button click handler
  const handleContactClick = () => {
    window.location.href = "/contact-us";
  };

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
          style={styles.heroText}
          variants={textFromBottom}
          initial="hidden"
          animate={heroTextControls}
        >
          <h1 style={getHeroHeadingStyle()}>
            Solutions built
            for scale.
          </h1>
          <p style={getHeroDescriptionStyle()}>
            Empowering businesses with innovative digital solutions, 
            cutting-edge technology, and industry expertise.
          </p>
        </motion.div>
        <div style={styles.heroImagePlaceholder}>1452 + Happy Clients</div>
      </motion.section>

      {/* ── INTRO ── */}
      <section ref={introRef} style={getIntroSectionStyle()}>
        <motion.div
          style={getIntroBodyStyle()}
          variants={contentFromBottom}
          initial="hidden"
          animate={introContentControls}
        >
          <p style={getIntroParaStyle()}>
            Data Artisans we are here to find the best solution for your IT problems. Experience excellence with our top-tier services tailored just for you. From meticulous attention to detail to unparalleled customer satisfaction, we are committed to delivering the best. Elevate your experience and success with our dedicated and reliable service offerings.
          </p>
          <p style={getIntroParaStyle()}>
            <strong>01 Data Artisans Services</strong>:  Delivers innovative IT solutions and comprehensive technical support.<br />
            <strong>02 Engagement Models</strong>:  Outline collaboration structures between service providers and clients.<br />
            <strong>03 Technology Expertise</strong>: Expertise powers innovative solutions and transforms digital landscapes.
          </p>
          <p style={getIntroParaStyle()}>
            <strong>1452+ Happy Clients</strong> | <strong>2195+ Completed Projects</strong> | <strong>100+ Outsourcing Partners</strong> | <strong>150+ Professional Team</strong>
          </p>
        </motion.div>
        <motion.div
          style={getIntroImageBoxStyle()}
          variants={imageFromLeft}
          initial="hidden"
          animate={introImageControls}
        >
          <img 
            src="/digitaltransform-img2.jpg" 
            alt="Industry Solutions"
            style={styles.introImage}
          />
        </motion.div>
      </section>

      {/* ── STATS SECTION (Fixed - Now using statsRef and statsControls) ── */}
      <motion.div
        ref={statsRef}
        style={{ ...getStatsSectionStyle(), gridTemplateColumns: getStatsGridColumns() }}
        variants={fromBottomStagger}
        initial="hidden"
        animate={statsControls}
      >
        {statsData.map((stat, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardFromBottom}
            style={styles.statItem}
          >
            <motion.div variants={cardContentItem}>
              <div style={{ ...styles.statNumber, ...getStatNumberStyle() }}>{stat.number}</div>
              <div style={{ ...styles.statLabel, ...getStatLabelStyle() }}>{stat.label}</div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── CARDS (6 cards in one row with different colors) ── */}
      <motion.section
        ref={cardsRef}
        style={getCardsSectionStyle()}
        initial="hidden"
        animate={cardsControls}
      >
        <motion.h2 variants={textFromBottom} style={getSectionHeadingStyle()}>
          Tech that <em style={styles.sectionHeadingItalic}>transforms industries</em>
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
                  <h3 style={{ ...styles.cardTitle, ...config.titleColor }}>{c.title}</h3>
                  <p style={{ ...styles.cardBody, ...config.bodyColor }}>{c.body}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* ── GOLD BANNER (Image on Right, Content on Left) ── */}
      <section ref={goldBannerRef} style={getGoldBannerStyle()}>
        <motion.div
          style={getGoldBannerTextStyle()}
          variants={contentFromLeft}
          initial="hidden"
          animate={goldBannerContentControls}
        >
          <p style={styles.goldBannerPara}>
            At Data Artisans, we pride ourselves on delivering innovative, scalable, and customized software solutions across a wide spectrum of industries. With deep domain knowledge and a commitment to technological excellence, we help businesses transform their operations, enhance customer experiences, and achieve sustainable growth through digital innovation.
          </p>
          <p style={styles.goldBannerPara}>
            An in-depth experience across industries and an array of highly-competent talent acquisition teams help us help you have an edge over the others and make the right candidate happen.
          </p>
          <p style={styles.goldBannerPara}>
            Efficient hiring solutions tailored to your business needs.
          </p>
          <p style={styles.goldBannerPara}>Empowering industries through technology, one solution at a time.</p>
        </motion.div>
        <motion.div
          style={getGoldBannerImageBoxStyle()}
          variants={imageFromRight}
          initial="hidden"
          animate={goldBannerImageControls}
        >
          <img 
            src="/digitaltransform-img4.jpg" 
            alt="Technology empowering industries"
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

      {/* ── TECH SECTION (Image on Left, Content on Right) ── */}
      <motion.section
        ref={techRef}
        style={getTechSectionStyle()}
        initial="hidden"
        animate={techImageControls}
      >
        <motion.div
          style={getTechBodyStyle()}
          variants={contentFromBottom}
          initial="hidden"
          animate={techContentControls}
        >
          <p style={getTechParaStyle()}>
            <strong>Industry Specific Expertise :</strong> We understand the unique workflows, compliance requirements, and digital goals of each industry we serve. Our domain experts work alongside our tech teams to design solutions that solve real problems.
          </p>
          <p style={getTechParaStyle()}>
            <strong>Customized Software Development :</strong> Whether it's a customer-facing platform, an enterprise application, or a backend system, we develop custom software tailored to your specific use case and business model.
          </p>
          <p style={getTechParaStyle()}>
            <strong>Seamless Integration :</strong> We ensure that our solutions integrate smoothly with your existing systems, minimizing disruption and maximizing productivity from day one.
          </p>
          <p style={getTechParaStyle()}>
            <strong>Scalable and Future Ready Solutions :</strong> As your business grows, so do our solutions. We build with scalability in mind, allowing you to evolve without technical limitations.
          </p>
          <p style={getTechParaStyle()}>
            <strong>Data Driven Insights :</strong> We empower industries with analytics and intelligent dashboards, helping stakeholders make informed decisions faster and with greater accuracy.
          </p>
          <p style={getTechParaStyle()}>
            <strong>Ongoing Support and Optimization :</strong> Our job doesn't end at deployment. We continue to monitor, maintain, and improve our systems so they remain efficient, secure, and aligned with your business goals.
          </p>
        </motion.div>
        <motion.div
          style={getTechImageBoxStyle()}
          variants={imageFromLeft}
          initial="hidden"
          animate={techImageControls}
        >
          <img 
            src="/digitaltransform-img5.jpg" 
            alt="How Data Artisans Serve Diverse Industries"
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
          Our Key Features
        </motion.h2>
        <motion.div
          style={{ ...styles.featureGrid, gridTemplateColumns: getFeatureGridColumns() }}
          variants={fromBottomStagger}
          initial="hidden"
          animate={featureCardsControls}
        >
          {[
            { icon: "🏭", title: "Industry Specific Expertise", body: "We understand the unique workflows, compliance requirements, and digital goals of each industry we serve." },
            { icon: "💻", title: "Customized Software Development", body: "We develop custom software tailored to your specific use case and business model." },
            { icon: "🔗", title: "Seamless Integration", body: "Our solutions integrate smoothly with your existing systems, minimizing disruption." },
            { icon: "📊", title: "Scalable Solutions", body: "We build with scalability in mind, allowing you to evolve without technical limitations." },
            { icon: "📈", title: "Data Driven Insights", body: "Empowering industries with analytics and intelligent dashboards for faster decisions." },
            { icon: "🔄", title: "Ongoing Support", body: "We continue to monitor, maintain, and improve systems for long-term success." },
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
        Partner with <span style={styles.ctaSpan}>Data Artisans</span> to transform your industry with cutting-edge solutions.
        <div>
          <button onClick={handleContactClick} style={styles.ctaButton}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;