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
  background: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600')",
  backgroundSize: "cover",
  backgroundPosition: "top",
  color: "#fff",
  padding: "80px 60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",  // Changed from "center" to "flex-start"
  textAlign: "left" as const,     // Changed from "center" to "left"
  minHeight: 560,
  position: "relative",
  overflow: "hidden",
},
heroText: { 
  maxWidth: 900, 
  zIndex: 1, 
  margin: "0",  // Changed from "0 auto" to "0"
  textAlign: "left" as const,  // Added textAlign left
},
  heroHeading: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    fontStyle: "italic",
    fontSize: 48,
    fontWeight: 700,
    lineHeight: 1.2,
    margin: 0,
  },
  heroSubPara: {
    fontSize: 20,
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
    marginBottom: 16,
  },
  sectionHeading: {
    fontSize: 36,
    fontWeight: 700,
    color: "#1A1A1A",
    marginBottom: 40,
  },
  sectionHeadingItalic: { fontStyle: "italic", color: "#1976D2" },
  cardsSection: { background: "#F7F7F7", padding: "60px 60px" },
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
  card1: { background: "#E8F4FD" },
  card2: { background: "#E8FDE8" },
  card3: { background: "#FEF3E8" },
  card4: { background: "#FDE8F0" },
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
    padding: "12px 60px",
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
    minHeight: 400,
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
    padding: "0px 60px 10px 60px",
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
    background: "#1976D2",
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    background: "rgba(25,118,210,0.15)",
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
    padding: "70px 60px 10px",
    display: "flex",
    alignItems: "center",
    gap: 60,
  },
  techImageBox: {
    width: 340,
    height: 360,
    borderRadius: 12,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center" as const,
    padding: 20,
    overflow: "hidden",
  },
  techImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    borderRadius: 12,
  },
  techImageText: {
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 1.3,
  },
  techBody: { flex: 1 },
  techPara: { fontSize: 15, lineHeight: 1.75, color: "#333", marginBottom: 16 },
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
    background: "linear-gradient(135deg, #1976D2, #0D47A1)",
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
    color: "#1976D2",
    marginBottom: 8,
    marginTop: 0,
  },
  featureBody: { fontSize: 13, lineHeight: 1.65, color: "#555", margin: 0 },
  ctaBanner: {
    background: "#1976D2",
    color: "#fff",
    textAlign: "center" as const,
    padding: "48px 60px",
    fontSize: 22,
    fontWeight: 700,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
  },
  ctaSpan: { color: "#64B5F6" },
  ctaButton: {
    background: "#fff",
    color: "#1976D2",
    border: "none",
    borderRadius: 30,
    padding: "12px 32px",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: 8,
  },
  footer: {
    background: "#0D47A1",
    color: "#fff",
    padding: "50px 60px 30px",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
    gap: 32,
  },
  footerBrand: { fontSize: 24, fontWeight: 800, color: "#64B5F6", marginBottom: 12 },
  footerAddress: { fontSize: 13, lineHeight: 1.8, color: "#BBDEFB" },
  footerColTitle: { fontSize: 12, fontWeight: 700, letterSpacing: 1, color: "#fff", marginBottom: 12, textTransform: "uppercase" as const },
  footerLink: { display: "block", fontSize: 13, color: "#64B5F6", marginBottom: 6, textDecoration: "none" },
  footerBottom: {
    background: "#0A3A8A",
    color: "#BBDEFB",
    textAlign: "center" as const,
    padding: "16px 60px",
    fontSize: 12,
  },
  // NEW STYLES FOR DATA ARTISANS CONTENT
  dataArtisansSection: {
    background: "#fff",
    padding: "70px 60px",
  },
  dataArtisansInnerWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 48,
  },
  dataArtisansContent: {
    flex: "0 0 70%",
  },
  dataArtisansImageWrapper: {
    flex: "0 0 30%",
    borderRadius: 16,
    overflow: "hidden",
  },
  dataArtisansImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover' as const,
    borderRadius: 16,
  },
  dataArtisansHeading: {
    fontSize: 42,
    fontWeight: 800,
    color: "#1A1A1A",
    marginBottom: 16,
    textAlign: "left" as const,
  },
  dataArtisansSubheading: {
    fontSize: 20,
    color: "#1976D2",
    textAlign: "left" as const,
    marginBottom: 24,
  },
  expertiseGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 32,
    marginTop: 40,
  },
  expertiseCard: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "28px",
    borderRadius: 16,
    position: "relative",
    overflow: "hidden",
  },
  expertiseCardContent: {
    position: "relative",
    zIndex: 2,
  },
  expertiseTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: "#fff",
    marginBottom: 16,
  },
  expertiseDesc: {
    fontSize: 14,
    lineHeight: 1.6,
    color: "#fff",
  },
  twoColumnWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 48,
    marginTop: 48,
  },
  contentColumn: {
    flex: "0 0 70%",
  },
  imageColumn: {
    flex: "0 0 30%",
    borderRadius: 16,
    overflow: "hidden",
  },
  sectionImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover' as const,
    borderRadius: 16,
  },
  aboutInternshipBox: {
    background: "linear-gradient(135deg, #1976D2 0%, #0D47A1 100%)",
    borderRadius: 20,
    padding: "48px",
    marginTop: 48,
    color: "#fff",
  },
  processGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
    marginTop: 32,
  },
  processStep: {
    background: "#fff",
    color: "#1A1A1A",
    padding: "24px",
    borderRadius: 12,
    textAlign: "center" as const,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  whoCanApply: {
    background: "#1976D2",
    color: "#fff",
    padding: "48px",
    borderRadius: 16,
    marginTop: 48,
    textAlign: "center" as const,
  },
  ctaSimple: {
    background: "#0D47A1",
    color: "#fff",
    textAlign: "center" as const,
    padding: "40px",
    borderRadius: 12,
    marginTop: 48,
  },
  checkList: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 16,
  },
  checkItem: {
    background: "#1976D2",
    color: "#fff",
    padding: "12px",
    borderRadius: 8,
    fontSize: 13,
    fontWeight: 500,
    textAlign: "center" as const,
  },
  tagContainer: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: 12,
    margin: "24px 0",
  },
  tag: {
    background: "#1976D2",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: 24,
    fontSize: 14,
    fontWeight: 500,
  },
  benefitList: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: 12,
    margin: "16px 0",
  },
  benefitItem: {
    background: "#F7F7F7",
    padding: "6px 12px",
    borderRadius: 8,
    fontSize: 13,
  },
};

const InternshipPage: React.FC = () => {
  // State for responsive layout
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // State for hovered icon
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

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
  const goldBannerContentControls = useAnimation();
  const goldBannerImageControls = useAnimation();
  const iconRowControls = useAnimation();
  const techImageControls = useAnimation();
  const techContentControls = useAnimation();
  const featureCardsControls = useAnimation();
  
  // Separate animation controls for each section in the Data Artisans area
  const internshipsExpertiseControls = useAnimation();
  const aboutInternshipControls = useAnimation();
  const internshipProgramsControls = useAnimation();
  const indiaInternshipControls = useAnimation();
  const ukInternshipControls = useAnimation();
  const whyChooseControls = useAnimation();
  const ourProcessControls = useAnimation();
  const whoCanApplyControls = useAnimation();
  const ctaSimpleControls = useAnimation();

  // Refs for each section
  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLElement>(null);
  const goldBannerRef = useRef<HTMLElement>(null);
  const iconRowRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLElement>(null);
  const featureRef = useRef<HTMLElement>(null);
  
  // Refs for Data Artisans sections
  const internshipsExpertiseRef = useRef<HTMLDivElement>(null);
  const aboutInternshipRef = useRef<HTMLDivElement>(null);
  const internshipProgramsRef = useRef<HTMLDivElement>(null);
  const indiaInternshipRef = useRef<HTMLDivElement>(null);
  const ukInternshipRef = useRef<HTMLDivElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);
  const ourProcessRef = useRef<HTMLDivElement>(null);
  const whoCanApplyRef = useRef<HTMLDivElement>(null);
  const ctaSimpleRef = useRef<HTMLDivElement>(null);

  // Card color configurations
  const cardConfigs = [
    { bg: styles.card1, iconBg: styles.cardIcon1, titleColor: styles.cardTitle1, bodyColor: styles.cardBody1 },
    { bg: styles.card2, iconBg: styles.cardIcon2, titleColor: styles.cardTitle2, bodyColor: styles.cardBody2 },
    { bg: styles.card3, iconBg: styles.cardIcon3, titleColor: styles.cardTitle3, bodyColor: styles.cardBody3 },
    { bg: styles.card4, iconBg: styles.cardIcon4, titleColor: styles.cardTitle4, bodyColor: styles.cardBody4 },
  ];

  // 6 different light background colors for internship program cards
  const programCardColors = [
    { bg: "linear-gradient(135deg, #E8F4FD, #B8E0F5)", titleColor: "#1565C0", textColor: "#1A237E" },
    { bg: "linear-gradient(135deg, #E8FDE8, #B8F0B8)", titleColor: "#2E7D32", textColor: "#1B5E20" },
    { bg: "linear-gradient(135deg, #FEF3E8, #FDE0B8)", titleColor: "#E65100", textColor: "#BF360C" },
    { bg: "linear-gradient(135deg, #FDE8F0, #FCC8DC)", titleColor: "#AD1457", textColor: "#4A148C" },
    { bg: "linear-gradient(135deg, #E8F0FE, #C8D8FC)", titleColor: "#1A237E", textColor: "#0D47A1" },
    { bg: "linear-gradient(135deg, #F0F8E8, #D8F0C8)", titleColor: "#33691E", textColor: "#1B5E20" },
  ];

  // Animation variants with as const to fix TypeScript errors
  const imageFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  } as const;

  const textFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  } as const;

  const imageFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
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

  const fromBottomItem = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

  // Responsive style functions
  const getHeroBackgroundStyle = (): React.CSSProperties => {
    if (isMobile) {
      return { ...styles.hero, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat", minHeight: 400, padding: "60px 20px" };
    }
    if (isTablet) {
      return { ...styles.hero, backgroundSize: "cover", backgroundPosition: "top", backgroundRepeat: "no-repeat" };
    }
    return styles.hero;
  };

  const getHeroHeadingStyle = (): React.CSSProperties => {
    if (isMobile) return { ...styles.heroHeading, fontSize: 32 };
    if (isTablet) return { ...styles.heroHeading, fontSize: 42 };
    return styles.heroHeading;
  };

  const getHeroDescriptionStyle = (): React.CSSProperties => {
    if (isMobile) return { ...styles.heroSubPara, display: "none" };
    if (isTablet) return { ...styles.heroSubPara, fontSize: 16 };
    return styles.heroSubPara;
  };

  const getIntroSectionStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { ...styles.introSection, flexDirection: "column", padding: "40px 20px", textAlign: "center" };
    }
    return styles.introSection;
  };

  const getIntroBodyStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { width: "100%", textAlign: "center", order: 1 };
    }
    return styles.introBody;
  };

  const getIntroImageBoxStyle = (): React.CSSProperties => {
    if (isMobile) {
      return { ...styles.introImageBox, width: "100%", height: "auto", minHeight: 250, order: 2, marginTop: 24 };
    }
    if (isTablet) {
      return { ...styles.introImageBox, width: "100%", height: "auto", minHeight: 300, order: 2, marginTop: 24 };
    }
    return styles.introImageBox;
  };

  const getCardsGridColumns = (): string => {
    if (isMobile) return "1fr";
    if (isTablet) return "repeat(2, 1fr)";
    return "repeat(4, 1fr)";
  };

  const getCardsSectionStyle = (): React.CSSProperties => {
    const baseStyle = { ...styles.cardsSection };
    if (isMobile) {
      baseStyle.padding = "40px 20px";
    } else if (isTablet) {
      baseStyle.padding = "50px 30px";
    }
    return baseStyle;
  };

  const getGoldBannerStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { ...styles.goldBanner, flexDirection: "column", padding: "40px 20px", textAlign: "center" };
    }
    return styles.goldBanner;
  };

  const getGoldBannerImageBoxStyle = (): React.CSSProperties => {
    if (isMobile) {
      return { ...styles.goldBannerImageBox, width: "100%", height: "auto", minHeight: 250, order: 2, marginTop: 24 };
    }
    if (isTablet) {
      return { ...styles.goldBannerImageBox, width: "100%", height: "auto", minHeight: 300, order: 2, marginTop: 24 };
    }
    return styles.goldBannerImageBox;
  };

  const getGoldBannerTextStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { ...styles.goldBannerText, order: 1 };
    }
    return styles.goldBannerText;
  };

  const getIconRowStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { ...styles.iconRow, padding: "40px 20px 50px 20px" };
    }
    return styles.iconRow;
  };

  const getIconGridColumns = (): string => {
    if (isMobile) return "1fr";
    if (isTablet) return "repeat(2, 1fr)";
    return "repeat(2, 1fr)";
  };

  const getTechSectionStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { ...styles.techSection, flexDirection: "column", padding: "40px 20px", textAlign: "center" };
    }
    return styles.techSection;
  };

  const getTechBodyStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { ...styles.techBody, order: 1 };
    }
    return styles.techBody;
  };

  const getTechImageBoxStyle = (): React.CSSProperties => {
    if (isMobile) {
      return { ...styles.techImageBox, width: "100%", height: "auto", minHeight: 250, order: 2, marginTop: 24 };
    }
    if (isTablet) {
      return { ...styles.techImageBox, width: "100%", height: "auto", minHeight: 300, order: 2, marginTop: 24 };
    }
    return styles.techImageBox;
  };

  const getFeatureGridColumns = (): string => {
    if (isMobile) return "1fr";
    if (isTablet) return "repeat(2, 1fr)";
    return "repeat(3, 1fr)";
  };

  const getDataArtisansSectionStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { ...styles.dataArtisansSection, padding: "40px 20px" };
    }
    return styles.dataArtisansSection;
  };

  const getDataArtisansInnerWrapperStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { ...styles.dataArtisansInnerWrapper, flexDirection: "column", textAlign: "center" };
    }
    return styles.dataArtisansInnerWrapper;
  };

  const getDataArtisansContentStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { flex: "0 0 100%", width: "100%", order: 1 };
    }
    return styles.dataArtisansContent;
  };

  const getDataArtisansImageWrapperStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { flex: "0 0 100%", width: "100%", marginTop: 24, order: 2 };
    }
    return styles.dataArtisansImageWrapper;
  };

  const getDataArtisansHeadingStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { ...styles.dataArtisansHeading, textAlign: "center", fontSize: 32 };
    }
    return styles.dataArtisansHeading;
  };

  const getDataArtisansSubheadingStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { ...styles.dataArtisansSubheading, textAlign: "center", fontSize: 18 };
    }
    return styles.dataArtisansSubheading;
  };

  const getExpertiseGridColumns = (): string => {
    if (isMobile) return "1fr";
    if (isTablet) return "repeat(2, 1fr)";
    return "repeat(3, 1fr)";
  };

  const getTwoColumnWrapperStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { ...styles.twoColumnWrapper, flexDirection: "column", textAlign: "center", marginTop: 32 };
    }
    return styles.twoColumnWrapper;
  };

  const getContentColumnStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { flex: "0 0 100%", width: "100%", order: 1 };
    }
    return styles.contentColumn;
  };

  const getImageColumnStyle = (): React.CSSProperties => {
    if (isMobile || isTablet) {
      return { flex: "0 0 100%", width: "100%", marginTop: 24, order: 2 };
    }
    return styles.imageColumn;
  };

  const getAboutInternshipBoxStyle = (): React.CSSProperties => {
    const baseStyle = { ...styles.aboutInternshipBox };
    if (isMobile) {
      baseStyle.padding = "30px 20px";
      baseStyle.borderRadius = "16px";
      baseStyle.marginTop = "32px";
    } else if (isTablet) {
      baseStyle.padding = "40px 30px";
      baseStyle.borderRadius = "16px";
      baseStyle.marginTop = "32px";
    }
    return baseStyle;
  };

  const getCtaSimpleStyle = (): React.CSSProperties => {
    const baseStyle = { ...styles.ctaSimple };
    if (isMobile) {
      baseStyle.padding = "30px 20px";
      baseStyle.borderRadius = "16px";
      baseStyle.marginTop = "32px";
    } else if (isTablet) {
      baseStyle.padding = "40px 30px";
      baseStyle.borderRadius = "16px";
      baseStyle.marginTop = "32px";
    }
    return baseStyle;
  };

  const getCheckListColumns = (): string => {
    if (isMobile) return "1fr";
    if (isTablet) return "repeat(2, 1fr)";
    return "repeat(4, 1fr)";
  };

  const getProcessGridColumns = (): string => {
    if (isMobile) return "1fr";
    if (isTablet) return "repeat(2, 1fr)";
    return "repeat(3, 1fr)";
  };

  const getSectionHeadingStyle = (): React.CSSProperties => {
    if (isMobile) return { ...styles.sectionHeading, fontSize: 28, marginBottom: 32, textAlign: "center" };
    if (isTablet) return { ...styles.sectionHeading, fontSize: 32, marginBottom: 40, textAlign: "center" };
    return styles.sectionHeading;
  };

  const getIntroParaStyle = (): React.CSSProperties => {
    if (isMobile) return { ...styles.introPara, fontSize: 13, textAlign: "center" };
    if (isTablet) return { ...styles.introPara, fontSize: 14, textAlign: "center" };
    return styles.introPara;
  };

  const getTechParaStyle = (): React.CSSProperties => {
    if (isMobile) return { ...styles.techPara, fontSize: 13, textAlign: "center" };
    if (isTablet) return { ...styles.techPara, fontSize: 14, textAlign: "center" };
    return styles.techPara;
  };

  const getGoldBannerParaStyle = (): React.CSSProperties => {
    if (isMobile) return { ...styles.goldBannerPara, fontSize: 13, textAlign: "center" };
    if (isTablet) return { ...styles.goldBannerPara, fontSize: 14, textAlign: "center" };
    return styles.goldBannerPara;
  };

  // Contact Us button click handler
  const handleContactClick = () => {
    window.location.href = "/contact-us";
  };

  // Intersection Observer setup for each section individually
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Hero section
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

    // Intro section
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

    // Cards section
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

    // Gold Banner
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

    // Icon Row
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

    // Tech section
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

    // Feature Cards
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

    // INTERNSHIPS EXPERTISE Section
    if (internshipsExpertiseRef.current) {
      const expertiseObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            internshipsExpertiseControls.start("visible");
          } else {
            internshipsExpertiseControls.set("hidden");
          }
        },
        { threshold: 0.2 }
      );
      expertiseObserver.observe(internshipsExpertiseRef.current);
      observers.push(expertiseObserver);
    }

    // ABOUT INTERNSHIPS Section
    if (aboutInternshipRef.current) {
      const aboutObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            aboutInternshipControls.start("visible");
          } else {
            aboutInternshipControls.set("hidden");
          }
        },
        { threshold: 0.3 }
      );
      aboutObserver.observe(aboutInternshipRef.current);
      observers.push(aboutObserver);
    }

    // INTERNSHIP PROGRAMS Section
    if (internshipProgramsRef.current) {
      const programsObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            internshipProgramsControls.start("visible");
          } else {
            internshipProgramsControls.set("hidden");
          }
        },
        { threshold: 0.2 }
      );
      programsObserver.observe(internshipProgramsRef.current);
      observers.push(programsObserver);
    }

    // INTERNSHIPS IN INDIA Section
    if (indiaInternshipRef.current) {
      const indiaObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            indiaInternshipControls.start("visible");
          } else {
            indiaInternshipControls.set("hidden");
          }
        },
        { threshold: 0.3 }
      );
      indiaObserver.observe(indiaInternshipRef.current);
      observers.push(indiaObserver);
    }

    // INTERNSHIPS IN UK Section
    if (ukInternshipRef.current) {
      const ukObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ukInternshipControls.start("visible");
          } else {
            ukInternshipControls.set("hidden");
          }
        },
        { threshold: 0.3 }
      );
      ukObserver.observe(ukInternshipRef.current);
      observers.push(ukObserver);
    }

    // WHY CHOOSE Section
    if (whyChooseRef.current) {
      const whyObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            whyChooseControls.start("visible");
          } else {
            whyChooseControls.set("hidden");
          }
        },
        { threshold: 0.3 }
      );
      whyObserver.observe(whyChooseRef.current);
      observers.push(whyObserver);
    }

    // OUR PROCESS Section
    if (ourProcessRef.current) {
      const processObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ourProcessControls.start("visible");
          } else {
            ourProcessControls.set("hidden");
          }
        },
        { threshold: 0.3 }
      );
      processObserver.observe(ourProcessRef.current);
      observers.push(processObserver);
    }

    // WHO CAN APPLY Section
    if (whoCanApplyRef.current) {
      const whoObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            whoCanApplyControls.start("visible");
          } else {
            whoCanApplyControls.set("hidden");
          }
        },
        { threshold: 0.3 }
      );
      whoObserver.observe(whoCanApplyRef.current);
      observers.push(whoObserver);
    }

    // CALL TO ACTION Section
    if (ctaSimpleRef.current) {
      const ctaObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ctaSimpleControls.start("visible");
          } else {
            ctaSimpleControls.set("hidden");
          }
        },
        { threshold: 0.3 }
      );
      ctaObserver.observe(ctaSimpleRef.current);
      observers.push(ctaObserver);
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const cardsData = [
    { icon: "🏢", title: "Corporate Internship Placements", body: "We connect students and fresh graduates with top-tier companies across industries. Our placements span Technology, BFSI, FMCG, Manufacturing, and more, ensuring diverse exposure and real industry experience." },
    { icon: "📋", title: "Structured Programme Design", body: "We help organisations design meaningful internship programmes with defined learning objectives, mentor assignments, and performance milestones. Every intern gets a purposeful experience, not just busy work." },
    { icon: "🎯", title: "Talent Identification & Screening", body: "Our rigorous screening process ensures that only the most suitable candidates are placed. We assess candidates on aptitude, domain knowledge, and cultural fit to maximise success for both parties." },
    { icon: "📈", title: "Performance Tracking & Conversion", body: "We track intern performance throughout the programme and help organisations identify top performers for pre-placement offers. Our data-driven approach improves conversion rates from intern to full-time hire." },
  ];

  const iconItems = [
    { icon: "🏫", label: "Our extensive network of colleges enables recruiters to choose and hire from a wide pool of fresh intern talent." },
    { icon: "🧑‍💻", label: "Our access to candidates across experience levels for targeted internship matching." },
    { icon: "⭐", label: "Our experience with structured onboarding of interns across 1,000+ partner organisations." },
    { icon: "🌐", label: "Our network of more than 5 million professionals across industry verticals." },
    { icon: "🎯", label: "Our ability to become your one-stop destination to find motivated intern talent." },
    { icon: "🧭", label: "Our unbiased assistance to interns so they can navigate their career opportunities better." },
  ];

  const internshipProgramsData = [
    { title: "Software Development Internships", desc: "Hands-on experience in Python, Java, Full Stack Development, APIs, databases, and web application development." },
    { title: "Data Analytics Internships", desc: "Practical exposure to Excel, SQL, Power BI, Tableau, Python, reporting, and dashboard creation." },
    { title: "AI & Machine Learning Internships", desc: "Learn Machine Learning, Generative AI, Agentic AI, automation workflows, and AI implementation projects." },
    { title: "Cloud & DevOps Internships", desc: "Gain practical knowledge in AWS, Azure, CI/CD pipelines, Docker, Kubernetes, and cloud infrastructure." },
    { title: "Business & Management Internships", desc: "Internship opportunities in HR, operations, recruitment, finance, and business coordination." },
    { title: "Cyber Security Internships", desc: "Exposure to security practices, vulnerability assessment, ethical hacking concepts, and security monitoring." },
  ];

  const indiaBenefits = ["Real-Time Project Experience", "Flexible Online & Offline Modes", "Internship Completion Certificates", "Technical Mentorship", "Resume Building Support", "Placement Assistance"];
  const ukBenefits = ["International Work Exposure", "Professional Skill Development", "Global Networking Opportunities", "Industry-Oriented Learning", "Career Advancement Support", "International Experience Certification"];

  return (
    <div style={styles.page}>

      {/* ── HERO ── */}
      <motion.section
        ref={heroRef}
        style={getHeroBackgroundStyle()}
        initial="hidden"
        animate={heroImageControls}
        variants={imageFromLeft}
      >
        <motion.div
          style={styles.heroText}
          variants={textFromBottom}
          initial="hidden"
          animate={heroTextControls}
        >
          <h1 style={getHeroHeadingStyle()}>
            Making
            career-defining<br />
            internships
            happen
          </h1>
          <p style={getHeroDescriptionStyle()}>
            Gain real-world experience, build professional skills,<br />
            and kickstart your career with industry-focused internships.
          </p>
        </motion.div>
        <div style={styles.heroImagePlaceholder}>[ Internship Hero Image ]</div>
      </motion.section>

      {/* ── INTRO ── */}
      <section ref={introRef} style={getIntroSectionStyle()}>
        <motion.div
          style={getIntroBodyStyle()}
          variants={contentFromLeft}
          initial="hidden"
          animate={introContentControls}
        >
          <p style={getIntroParaStyle()}>
            The bridge between education and employment has never been more critical. Internships are no longer optional add-ons to a resume. They are the proving grounds where careers are shaped, skills are tested, and futures are built.
          </p>
          <p style={getIntroParaStyle()}>
            With over two decades of connecting talent with opportunity, we understand what organisations need from interns and what interns need to succeed. Our internship programmes are structured to deliver real value. Not just task completion, but genuine growth and contribution.
          </p>
          <p style={getIntroParaStyle()}>
            We partner with organisations across sectors to create structured internship programmes that benefit both the student and the employer. From identifying the right candidates to managing the entire internship lifecycle, we make it seamless.
          </p>
          <p style={getIntroParaStyle()}>
            Our deep industry network, campus relationships, and talent assessment capabilities give us the edge to place the right intern in the right role, every time. Let us make the right experience happen.
          </p>
        </motion.div>
        <motion.div
          style={getIntroImageBoxStyle()}
          variants={imageFromRight}
          initial="hidden"
          animate={introImageControls}
        >
          <img 
            src="/training-img1.jpg" 
            alt="Internship"
            style={styles.introImage}
          />
        </motion.div>
      </section>

      {/* ── CARDS ── */}
      <motion.section
        ref={cardsRef}
        style={getCardsSectionStyle()}
        initial="hidden"
        animate={cardsControls}
      >
        <motion.h2 variants={textFromBottom} style={getSectionHeadingStyle()}>
          Making <em style={styles.sectionHeadingItalic}>seamless internships happen</em>
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

      {/* ── GOLD BANNER (Image on Right, Content on Left) ── */}
      <section ref={goldBannerRef} style={getGoldBannerStyle()}>
        <motion.div
          style={getGoldBannerTextStyle()}
          variants={contentFromLeft}
          initial="hidden"
          animate={goldBannerContentControls}
        >
          <p style={getGoldBannerParaStyle()}>
            Organisations rely on fresh talent to infuse new ideas and energy into their teams. But finding the right intern, one who aligns with your culture and can genuinely contribute, is harder than it sounds.
          </p>
          <p style={getGoldBannerParaStyle()}>
            Our vast network of colleges, universities, and student communities across the country allows us to source talent that matches your specific requirements. Whether you need one intern or a hundred, we scale to meet your demand.
          </p>
          <p style={getGoldBannerParaStyle()}>
            We manage the entire internship supply chain, from campus outreach and candidate screening to onboarding, mentoring support, and post-internship evaluation, so you can focus on what matters most.
          </p>
          <p style={getGoldBannerParaStyle()}>Here's how we are able to do that:</p>
        </motion.div>
        <motion.div
          style={getGoldBannerImageBoxStyle()}
          variants={imageFromRight}
          initial="hidden"
          animate={goldBannerImageControls}
        >
          <img 
            src="/internship-img2.jpg" 
            alt="Internship Success"
            style={styles.goldBannerImage}
          />
        </motion.div>
      </section>

      {/* ── ICON ROW (2 columns, same color as gold banner, hover effect) ── */}
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
          variants={contentFromLeft}
          initial="hidden"
          animate={techContentControls}
        >
          <p style={getTechParaStyle()}>
            The traditional internship hiring process, walk-in drives, manual shortlisting, and paper applications, is a thing of the past. We have evolved alongside the industry to bring technology at the centre of every placement we make.
          </p>
          <p style={getTechParaStyle()}>
            We have seen how intern recruitment has shifted from brick-and-mortar campus visits to AI-powered talent matching. That evolution gives us the foresight to help organisations find exactly the right intern faster and more accurately than ever before.
          </p>
          <p style={getTechParaStyle()}>
            With the help of our group company HirePro, we deploy intelligent matching algorithms, automated assessments, and virtual interview platforms to streamline the entire internship hiring cycle end to end.
          </p>
          <p style={getTechParaStyle()}>
            Our internal processes leverage data, analytics, and operational automation to deliver exceptional experiences for both interns and hiring organisations, reducing time-to-onboard while improving quality of placement.
          </p>
        </motion.div>
        <motion.div
          style={getTechImageBoxStyle()}
          variants={imageFromRight}
          initial="hidden"
          animate={techImageControls}
        >
          <img 
            src="/internship-img3.jpg" 
            alt="AI powered internship matching"
            style={styles.techImage}
          />
        </motion.div>
      </motion.section>

      {/* ── FEATURE CARDS ── */}
      <motion.section
        ref={featureRef}
        style={styles.featureSection}
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
            { icon: "🖥️", title: "End to end virtual recruitment", body: "From sourcing and assessments to offer letters and virtual onboarding, fully digital and seamless." },
            { icon: "📝", title: "Proctored assessments", body: "Fraud-proof intern screening with auto detection and control of cheating and impersonation." },
            { icon: "🎥", title: "High volume video interviews", body: "With automatic ID verification and prevention of impersonation across bulk interview drives." },
            { icon: "📱", title: "Seamless digital onboarding", body: "Fully digitised intern engagement and document collection from day one." },
            { icon: "⚙️", title: "Complete automation", body: "Automated screening, scheduling, assessments, offer management, and onboarding workflows." },
            { icon: "🧩", title: "Advisory and logistics services", body: "Expert guidance on remote internship strategy and digital coordination for distributed teams." },
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
        <div>
          Visit <span style={styles.ctaSpan}>HirePro</span> to explore a whole new world of internship automation.
        </div>
        <button onClick={handleContactClick} style={styles.ctaButton}>
          Contact Us
        </button>
      </div>

      {/* ── DATA ARTISANS INTERNSHIPS EXPERTISE SECTION ── */}
      <div style={getDataArtisansSectionStyle()}>
        {/* INTERNSHIPS EXPERTISE - Section 1 */}
        <motion.div
          ref={internshipsExpertiseRef}
          variants={fromBottomStagger}
          initial="hidden"
          animate={internshipsExpertiseControls}
        >
          <div style={getDataArtisansInnerWrapperStyle()}>
            <div style={getDataArtisansContentStyle()}>
              <motion.h1 variants={fromBottomItem} style={getDataArtisansHeadingStyle()}>INTERNSHIPS EXPERTISE</motion.h1>
              <motion.h2 variants={fromBottomItem} style={getDataArtisansSubheadingStyle()}>Launch Your Career With Industry-Focused Internships</motion.h2>
              
              <motion.p variants={fromBottomItem} style={getIntroParaStyle()}>
                At Data Artisans, we help students and graduates gain practical industry exposure through structured 
                internship programs designed to build real-world skills, technical expertise, and professional 
                confidence.
              </motion.p>
              <motion.p variants={fromBottomItem} style={getIntroParaStyle()}>
                Our internships are focused on hands-on learning, live project exposure, mentorship, and career 
                development to help students bridge the gap between academics and industry expectations.
              </motion.p>
              <motion.p variants={fromBottomItem} style={getIntroParaStyle()}>
                We provide internship opportunities across India and the UK in trending technologies, business 
                domains, analytics, cloud computing, AI, software development, and enterprise solutions.
              </motion.p>

              <motion.div variants={fromBottomItem} style={styles.tagContainer}>
                {["Real-Time Projects", "Industry Mentorship", "Practical Learning", "Internship Certification", "Career Guidance", "Placement-Focused Training"].map(item => (
                  <span key={item} style={styles.tag}>{item}</span>
                ))}
              </motion.div>

              <motion.p variants={fromBottomItem} style={getIntroParaStyle()}><strong>Helping students gain practical experience for successful global careers.</strong></motion.p>
            </div>

            <motion.div variants={imageFromRight} style={getDataArtisansImageWrapperStyle()}>
              <img 
                src="/internship-img4.jpg" 
                alt="Students celebrating internship success"
                style={styles.dataArtisansImage}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* ABOUT INTERNSHIPS - Section 2 */}
        <motion.div
          ref={aboutInternshipRef}
          variants={imageFromRight}
          initial="hidden"
          animate={aboutInternshipControls}
          style={getAboutInternshipBoxStyle()}
        >
          <h3 style={{ fontSize: isMobile ? 24 : 28, marginBottom: 16 }}>ABOUT INTERNSHIPS</h3>
          <h4 style={{ fontSize: isMobile ? 18 : 20, marginBottom: 16 }}>Practical Learning Beyond Classrooms</h4>
          <p style={{ fontSize: isMobile ? 13 : 15, lineHeight: 1.7, marginBottom: 16 }}>
            At Data Artisans, we believe internships are the foundation for building successful careers. Our 
            programs are designed to provide practical exposure, professional work environments, and industry-oriented learning experiences.
          </p>
          <p style={{ fontSize: isMobile ? 13 : 15, lineHeight: 1.7, marginBottom: 16 }}>
            Students get an opportunity to work on real-time projects, understand industry workflows, 
            collaborate with mentors, and develop technical as well as communication skills required in modern workplaces.
          </p>
          <p style={{ fontSize: isMobile ? 13 : 15, lineHeight: 1.7 }}>
            Our internship programs are suitable for students, freshers, career switchers, and professionals 
            looking to gain practical experience in high-demand technologies and business domains.
          </p>
        </motion.div>

        {/* INTERNSHIP PROGRAMS - Section 3 */}
        <div ref={internshipProgramsRef}>
          <motion.div
            variants={fromRightStagger}
            initial="hidden"
            animate={internshipProgramsControls}
          >
            <motion.h2 variants={fromRightItem} style={{ ...getSectionHeadingStyle(), marginTop: 48 }}>INTERNSHIP PROGRAMS</motion.h2>
            <motion.h3 variants={fromRightItem} style={{ fontSize: isMobile ? 20 : 24, color: "#1976D2", marginBottom: 24, textAlign: isMobile || isTablet ? "center" : "left" }}>Internship Domains</motion.h3>

            <motion.div variants={fromRightItem} style={{ ...styles.expertiseGrid, gridTemplateColumns: getExpertiseGridColumns() }}>
              {internshipProgramsData.map((item, idx) => (
                <div key={idx} style={{ ...styles.expertiseCard, background: programCardColors[idx % programCardColors.length].bg }}>
                  <div style={styles.expertiseCardContent}>
                    <h4 style={{ ...styles.expertiseTitle, color: programCardColors[idx % programCardColors.length].titleColor, fontSize: isMobile ? 18 : 22 }}>{item.title}</h4>
                    <p style={{ ...styles.expertiseDesc, color: programCardColors[idx % programCardColors.length].textColor, fontSize: isMobile ? 12 : 14 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* INTERNSHIPS IN INDIA - Section 4 */}
        <div ref={indiaInternshipRef}>
          <motion.div
            variants={fromBottomStagger}
            initial="hidden"
            animate={indiaInternshipControls}
          >
            <div style={getTwoColumnWrapperStyle()}>
              <div style={getContentColumnStyle()}>
                <motion.h2 variants={fromBottomItem} style={{ ...getSectionHeadingStyle(), marginTop: 48, marginBottom: 16 }}>INTERNSHIPS IN INDIA</motion.h2>
                <motion.h3 variants={fromBottomItem} style={{ fontSize: isMobile ? 20 : 24, color: "#1976D2", marginBottom: 16, textAlign: isMobile || isTablet ? "center" : "left" }}>Industry-Focused Internship Opportunities Across India</motion.h3>
                <motion.p variants={fromBottomItem} style={getIntroParaStyle()}>
                  Our India internship programs are designed for students and fresh graduates who want to gain 
                  practical exposure and improve employability through real-time project experience.
                </motion.p>
                <motion.p variants={fromBottomItem} style={getIntroParaStyle()}>
                  We collaborate with industry professionals and growing organizations to provide internship 
                  opportunities in various technical and non-technical domains.
                </motion.p>
                <motion.h4 variants={fromBottomItem} style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, marginTop: 24, textAlign: isMobile || isTablet ? "center" : "left" }}>Benefits of India Internships</motion.h4>
                <motion.div variants={fromBottomItem} style={styles.benefitList}>
                  {indiaBenefits.map(b => (
                    <span key={b} style={styles.benefitItem}>{b}</span>
                  ))}
                </motion.div>
              </div>
              <motion.div variants={imageFromRight} style={getImageColumnStyle()}>
                <img src="/internship-img5.jpg" alt="Internship Opportunities in India" style={styles.sectionImage} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* INTERNSHIPS IN UK - Section 5 */}
        <div ref={ukInternshipRef}>
          <motion.div
            variants={fromBottomStagger}
            initial="hidden"
            animate={ukInternshipControls}
          >
            <div style={getTwoColumnWrapperStyle()}>
              <div style={getContentColumnStyle()}>
                <motion.h2 variants={fromBottomItem} style={{ ...getSectionHeadingStyle(), marginTop: 48, marginBottom: 16 }}>INTERNSHIPS IN UK</motion.h2>
                <motion.h3 variants={fromBottomItem} style={{ fontSize: isMobile ? 20 : 24, color: "#1976D2", marginBottom: 16, textAlign: isMobile || isTablet ? "center" : "left" }}>International Internship Opportunities In The UK</motion.h3>
                <motion.p variants={fromBottomItem} style={getIntroParaStyle()}>
                  Data Artisans also supports students and professionals looking for international internship 
                  opportunities in the United Kingdom.
                </motion.p>
                <motion.p variants={fromBottomItem} style={getIntroParaStyle()}>
                  Our UK internship support programs help candidates gain global exposure, international work 
                  experience, and professional development opportunities in modern business environments.
                </motion.p>
                <motion.h4 variants={fromBottomItem} style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, marginTop: 24, textAlign: isMobile || isTablet ? "center" : "left" }}>Benefits of UK Internships</motion.h4>
                <motion.div variants={fromBottomItem} style={styles.benefitList}>
                  {ukBenefits.map(b => (
                    <span key={b} style={styles.benefitItem}>{b}</span>
                  ))}
                </motion.div>
              </div>
              <motion.div variants={imageFromLeft} style={getImageColumnStyle()}>
                <img src="/internship-img6.jpg" alt="Internship Opportunities in UK" style={styles.sectionImage} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* WHY CHOOSE - Section 6 */}
        <div ref={whyChooseRef}>
          <motion.div
            variants={fromRightStagger}
            initial="hidden"
            animate={whyChooseControls}
          >
            <motion.h2 variants={fromRightItem} style={{ ...getSectionHeadingStyle(), marginTop: 48 }}>WHY CHOOSE DATA ARTISANS</motion.h2>
            <motion.h3 variants={fromRightItem} style={{ fontSize: isMobile ? 18 : 20, marginBottom: 24, textAlign: isMobile || isTablet ? "center" : "left" }}>Why Students Prefer Our Internship Programs</motion.h3>
            <motion.div variants={fromRightItem} style={{ ...styles.checkList, gridTemplateColumns: getCheckListColumns() }}>
              {["Industry-Relevant Training", "Real-Time Practical Exposure", "Experienced Mentors", "Career-Oriented Learning", "Flexible Learning Models", "Professional Guidance", "Internship Certification", "Placement-Focused Support"].map(w => (
                <div key={w} style={styles.checkItem}>{w}</div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* OUR PROCESS - Section 7 */}
        <div ref={ourProcessRef}>
          <motion.div
            variants={fromRightStagger}
            initial="hidden"
            animate={ourProcessControls}
          >
            <motion.h2 variants={fromRightItem} style={{ ...getSectionHeadingStyle(), marginTop: 48 }}>OUR PROCESS</motion.h2>
            <motion.h3 variants={fromRightItem} style={{ fontSize: isMobile ? 18 : 20, marginBottom: 24, textAlign: isMobile || isTablet ? "center" : "left" }}>How Our Internship Program Works</motion.h3>
            <motion.div variants={fromRightItem} style={{ ...styles.processGrid, gridTemplateColumns: getProcessGridColumns() }}>
              <div style={styles.processStep}><strong style={{ color: "#1976D2" }}>1. Profile Evaluation</strong><br />Understanding student interests, skills, and career goals.</div>
              <div style={styles.processStep}><strong style={{ color: "#1976D2" }}>2. Domain Selection</strong><br />Choosing suitable internship programs based on career interests.</div>
              <div style={styles.processStep}><strong style={{ color: "#1976D2" }}>3. Training & Project Assignment</strong><br />Hands-on learning with real-time projects and mentorship.</div>
              <div style={styles.processStep}><strong style={{ color: "#1976D2" }}>4. Practical Implementation</strong><br />Working on assignments, case studies, and project execution.</div>
              <div style={styles.processStep}><strong style={{ color: "#1976D2" }}>5. Certification</strong><br />Internship completion certification and performance evaluation.</div>
              <div style={styles.processStep}><strong style={{ color: "#1976D2" }}>6. Career Support</strong><br />Resume guidance, interview preparation, and placement assistance.</div>
            </motion.div>
          </motion.div>
        </div>

        {/* WHO CAN APPLY - Section 8 */}
        <div ref={whoCanApplyRef}>
          <motion.div
            variants={fromBottomStagger}
            initial="hidden"
            animate={whoCanApplyControls}
          >
            <div style={getTwoColumnWrapperStyle()}>
              <div style={getContentColumnStyle()}>
                <motion.h3 variants={fromBottomItem} style={{ fontSize: isMobile ? 24 : 28, marginBottom: 24, color: "#1976D2", textAlign: isMobile || isTablet ? "center" : "left" }}>WHO CAN APPLY</motion.h3>
                <motion.div variants={fromBottomItem} style={{ display: "flex", flexWrap: "wrap", gap: 32, marginBottom: 24, justifyContent: isMobile || isTablet ? "center" : "flex-start" }}>
                  {["🎓 Students", "👨‍🎓 Freshers", "💻 Career Switchers", "🎓 Graduates", "🌍 International Aspirants", "⚙️ Tech Enthusiasts"].map(w => (
                    <span key={w} style={{ fontSize: isMobile ? 16 : 18 }}>{w}</span>
                  ))}
                </motion.div>
                <motion.p variants={fromBottomItem} style={{ fontSize: isMobile ? 13 : 14, lineHeight: 1.6, textAlign: isMobile || isTablet ? "center" : "left" }}>Whether you are starting your career or upgrading your practical skills, our internship programs are designed to help you gain real-world industry exposure.</motion.p>
              </div>
              <motion.div variants={imageFromRight} style={getImageColumnStyle()}>
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=360&fit=crop" alt="Who Can Apply - Students and Professionals" style={styles.sectionImage} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* CALL TO ACTION - Section 9 */}
        <div ref={ctaSimpleRef}>
          <motion.div
            variants={fromBottomStagger}
            initial="hidden"
            animate={ctaSimpleControls}
            style={getCtaSimpleStyle()}
          >
            <motion.h3 variants={fromBottomItem} style={{ fontSize: isMobile ? 22 : 28, marginBottom: 16 }}>Start Your Internship Journey Today</motion.h3>
            <motion.p variants={fromBottomItem} style={{ fontSize: isMobile ? 14 : 16, marginBottom: 24 }}>Build practical skills, gain industry exposure, and strengthen your career with Data Artisans internship programs in India and the UK.</motion.p>
            <motion.p variants={fromBottomItem}>📞 +91 XXXXX XXXXX</motion.p>
            <motion.p variants={fromBottomItem}>📧 info@dataartisans.com</motion.p>
            <motion.p variants={fromBottomItem}>🌐 www.dataartisans.com</motion.p>
            <motion.p variants={fromBottomItem} style={{ marginTop: 20, fontWeight: 700 }}>Learn. Practice. Grow Professionally.</motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InternshipPage;