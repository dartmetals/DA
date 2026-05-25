import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

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
    background: "linear-gradient(135deg, rgba(37,99,235,0.85) 0%, rgba(30,58,138,0.85) 100%)",
    color: "#1940cf",
    padding: "80px 60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center" as const,
    minHeight: 520,
    position: "relative",
    overflow: "hidden",
    backgroundImage: 'url("/training-bg.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  },
  heroText: {
    maxWidth: 900,
    zIndex: 1,
    margin: "0 auto",
  },
  heroHeading: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    fontStyle: "italic",
    fontSize: 42,
    fontWeight: 700,
    lineHeight: 1.15,
    margin: 0,
  },
  heroSubheading: {
    fontSize: 18,
    marginTop: 20,
    opacity: 0.9,
  },
  heroDescription: {
    fontSize: 16,
    marginTop: 16,
    opacity: 0.85,
    lineHeight: 1.5,
    maxWidth: 600,
    marginLeft: "auto",
    marginRight: "auto",
  },
  heroImagePlaceholder: {
    display: "none",
  },

  // ── Two-col intro section ───────────────────────────────────────────────
  introSection: {
    display: "flex",
    alignItems: "center",
    gap:60,
    padding: "70px 60px 16px",
    background: "#fff",
  },
  introImageBox: {
    flexShrink: 0,
    width: 360,
    height: 340,
    borderRadius: 16,
    overflow: "hidden",
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
    marginBottom: 16,
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
    color: "#2563eb",
  },

  // ── Cards grid ──────────────────────────────────────────────────────────
  cardsSection: {
    background: "#F7F7F7",
    padding: "30px 60px",
  },
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
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  cardDefault: {
    background: "#fff",
  },
  cardBlue: {
    background: "#2563eb",
  },
  cardIcon: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 26,
    transition: "all 0.3s ease",
  },
  cardIconWhite: {
    background: "#fff",
  },
  cardTitle: {
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 8,
    marginTop: 0,
    transition: "color 0.3s ease",
  },
  cardTitleBlue: {
    color: "#2563eb",
  },
  cardTitleWhite: {
    color: "#fff",
  },
  cardBody: {
    fontSize: 14,
    lineHeight: 1.7,
    margin: 0,
    transition: "color 0.3s ease",
  },
  cardBodyDark: {
    color: "#444",
  },
  cardBodyWhite: {
    color: "#fff",
  },

  // ── Blue Banner ───────────────────────────────────────────────
  goldBanner: {
    background: "#dbeafe",
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
    background: "linear-gradient(145deg, #2563eb 0%, #1e3a8a 100%)",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 16,
    textAlign: "center" as const,
  },

  // ── 2 Column Layout Section ──────────────────────────────────────────────
  twoColumnSection: {
    background: "#dbeafe",
    padding: "60px 60px",
  },
  twoColumnGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48,
  },
  leftColumn: {
    paddingRight: 24,
  },
  rightColumn: {
    paddingLeft: 24,
  },

  // ── Single column icon list (icon beside text) ───────────────────────────
  iconList: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 10,
  },
  iconListItem: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  iconCircleSmall: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: "rgba(37,99,235,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    flexShrink: 0,
  },
  iconLabelText: {
    fontSize: 14,
    lineHeight: 1.5,
    color: "#1A1A1A",
    fontWeight: 500,
  },

  // ── Why Choose List ───────────────────────────────────────────────────────
  whyChooseList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  whyChooseItem: {
    fontSize: 14,
    lineHeight: 1.8,
    marginBottom: 1,
    color: "#1A1A1A",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

 // ── Tech section ────────────────────────────────────────────────────
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

  // ── Six feature cards ──────────────────────────────────────────────────────
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
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  featureCardHover: {
    background: "#2563eb",
  },
  featureIcon: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    marginBottom: 14,
    transition: "all 0.3s ease",
  },
  featureIconHover: {
    background: "#fff",
  },
  featureTitle: {
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
    fontSize: 16,
    fontWeight: 700,
    color: "#2563eb",
    marginBottom: 8,
    marginTop: 0,
    transition: "color 0.3s ease",
  },
  featureTitleHover: {
    color: "#fff",
  },
  featureBody: {
    fontSize: 13,
    lineHeight: 1.65,
    color: "#555",
    margin: 0,
    transition: "color 0.3s ease",
  },
  featureBodyHover: {
    color: "#fff",
  },

  // ── CTA Banner ───────────────────────────────────────────────────────────
  ctaBanner: {
    background: "#1e3a8a",
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
    color: "#1e3a8a",
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

  // ── Footer ───────────────────────────────────────────────────────────────
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
  footerLink: { display: "block", fontSize: 13, color: "#60a5fa", marginBottom: 6, textDecoration: "none" },
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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredFeatureCard, setHoveredFeatureCard] = useState<number | null>(null);
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

  // Individual animation controls for each section
  const heroControls = useAnimation();
  const introImageControls = useAnimation();
  const introParaControls = useAnimation();
  const cardsControls = useAnimation();
  const whyChooseControls = useAnimation();
  const methodologyControls = useAnimation();
  const programImageControls = useAnimation();
  const programContentControls = useAnimation();
  const careerSupportControls = useAnimation();
  const ctaControls = useAnimation();

  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);
  const methodologyRef = useRef<HTMLDivElement>(null);
  const programRef = useRef<HTMLElement>(null);
  const careerSupportRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Animation variants (using as const for type safety)
  const imageFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  } as const;

  const textFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  } as const;

  const paraStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  } as const;

  const paraItem = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

  const listFromLeft = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  } as const;

  const listItem = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
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

  const imageFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  } as const;

  const contentFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  } as const;

  const ctaStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  } as const;

  const ctaItem = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  } as const;

  // Intersection Observer setup
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Hero section
    if (heroRef.current) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            heroControls.start("visible");
          } else {
            heroControls.set("hidden");
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
            introParaControls.start("visible");
          } else {
            introImageControls.set("hidden");
            introParaControls.set("hidden");
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

    // Why Choose section
    if (whyChooseRef.current) {
      const whyChooseObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            whyChooseControls.start("visible");
          } else {
            whyChooseControls.set("hidden");
          }
        },
        { threshold: 0.3 }
      );
      whyChooseObserver.observe(whyChooseRef.current);
      observers.push(whyChooseObserver);
    }

    // Methodology section
    if (methodologyRef.current) {
      const methodologyObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            methodologyControls.start("visible");
          } else {
            methodologyControls.set("hidden");
          }
        },
        { threshold: 0.3 }
      );
      methodologyObserver.observe(methodologyRef.current);
      observers.push(methodologyObserver);
    }

    // Program Designed section
    if (programRef.current) {
      const programObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            programImageControls.start("visible");
            programContentControls.start("visible");
          } else {
            programImageControls.set("hidden");
            programContentControls.set("hidden");
          }
        },
        { threshold: 0.3 }
      );
      programObserver.observe(programRef.current);
      observers.push(programObserver);
    }

    // Career Support section
    if (careerSupportRef.current) {
      const careerObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            careerSupportControls.start("visible");
          } else {
            careerSupportControls.set("hidden");
          }
        },
        { threshold: 0.2 }
      );
      careerObserver.observe(careerSupportRef.current);
      observers.push(careerObserver);
    }

    // CTA section
    if (ctaRef.current) {
      const ctaObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ctaControls.start("visible");
          } else {
            ctaControls.set("hidden");
          }
        },
        { threshold: 0.3 }
      );
      ctaObserver.observe(ctaRef.current);
      observers.push(ctaObserver);
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const trainingPrograms = [
    { icon: "☁️", title: "Azure Data Engineer", body: "Learn Azure Data Factory, Databricks, Synapse Analytics, Data Lakes, and enterprise cloud data engineering solutions." },
    { icon: "📊", title: "Data Analytics", body: "Master Excel, Power BI, SQL, Tableau, Alteryx, and Python with real-world analytics projects and dashboard development." },
    { icon: "📈", title: "Business Intelligence & Visualization", body: "Build interactive dashboards and data visualization solutions using Tableau and Power BI for business reporting and analytics." },
    { icon: "🤖", title: "AI & Machine Learning", body: "Learn Python, Machine Learning, MLOps, model deployment, MLflow, SageMaker, Kubeflow, and AI workflows through hands-on projects." },
    { icon: "🧠", title: "Generative AI & Agentic AI", body: "Learn Prompt Engineering, LLMs, AI Agents, LangChain, RAG Applications, Multi-Agent Systems, OpenAI APIs, Automation Workflows, and Agentic AI development through hands-on real-time projects." },
    { icon: "⚙️", title: "AWS DevOps", body: "Gain expertise in AWS infrastructure, CI/CD pipelines, Docker, Kubernetes, Terraform, monitoring, and cloud automation." },
    { icon: "🐍", title: "Python Full Stack Development", body: "Build scalable web applications using Python, Django, APIs, databases, and front-end technologies with practical implementation." },
    { icon: "☕", title: "Java Full Stack Development", body: "Master Java, Spring Boot, APIs, databases, cloud deployment, and enterprise application development." },
  ];

  const careerSupportFeatures = [
    { icon: "📄", title: "Resume Building", body: "Professional resume crafting tailored to industry standards." },
    { icon: "🔗", title: "LinkedIn Profile Optimization", body: "Enhance your online presence to attract recruiters." },
    { icon: "🎭", title: "Mock Interviews", body: "Practice with industry experts to build confidence." },
    { icon: "💻", title: "Technical Interview Preparation", body: "Master coding challenges and technical questions." },
    { icon: "🎓", title: "Career Mentorship", body: "Guidance from experienced industry professionals." },
    { icon: "🏢", title: "Placement Assistance", body: "Connect with top companies for job opportunities." },
  ];

  const trainingMethodologies = [
    { icon: "📚", label: "Interactive Instructor-Led Sessions" },
    { icon: "🏗️", label: "Real-Time Industry Projects" },
    { icon: "📋", label: "Case Study-Based Learning" },
    { icon: "✏️", label: "Assignments & Assessments" },
    { icon: "🔬", label: "Practical Labs & Exercises" },
    { icon: "🎯", label: "Interview-Oriented Preparation" },
    { icon: "🤝", label: "Continuous Mentorship Support" },
    { icon: "💡", label: "Learn By Doing - Practical Implementation" },
    { icon: "📈", label: "Career Growth & Placement Support" },
  ];

  const whyChoosePoints = [
    "Industry Expert Trainers",
    "Real-Time Project Exposure",
    "Hands-On Practical Sessions",
    "Placement Assistance",
    "Resume & Interview Preparation",
    "Flexible Online & Offline Training",
    "Certification Support",
    "Beginner to Advanced Learning Paths",
  ];

  // Helper function to determine if a card should be blue (active)
  const isCardBlue = (index: number): boolean => {
    if (hoveredCard !== null) {
      return hoveredCard === index;
    }
    return index === 0;
  };

  // Contact Us button click handler
  const handleContactClick = () => {
    window.location.href = "/contact-us";
  };

  // Get responsive grid columns
  const getCardsGridColumns = () => {
    if (isMobile) return "1fr";
    if (isTablet) return "repeat(2, 1fr)";
    return "repeat(4, 1fr)";
  };

  const getFeatureGridColumns = () => {
    if (isMobile) return "1fr";
    if (isTablet) return "repeat(2, 1fr)";
    return "repeat(3, 1fr)";
  };

  // Get responsive styles for sections
  const getHeroHeadingStyle = () => {
    if (isMobile) return { ...styles.heroHeading, fontSize: 28, width: "90%", margin: "0 auto" };
    if (isTablet) return { ...styles.heroHeading, fontSize: 36 };
    return styles.heroHeading;
  };

  const getHeroDescriptionStyle = () => {
    if (isMobile) return { ...styles.heroDescription, fontSize: 14, width: "90%", margin: "16px auto 0" };
    if (isTablet) return { ...styles.heroDescription, fontSize: 15 };
    return styles.heroDescription;
  };

  const getHeroBackgroundStyle = () => {
    if (isMobile) {
      return { ...styles.hero, backgroundSize: "contain", backgroundPosition: "center" };
    }
    return styles.hero;
  };

  const getSectionHeadingStyle = () => {
    if (isMobile) return { ...styles.sectionHeading, fontSize: 28 };
    if (isTablet) return { ...styles.sectionHeading, fontSize: 32 };
    return styles.sectionHeading;
  };

  const getIntroParaStyle = () => {
    if (isMobile) return { ...styles.introPara, fontSize: 13 };
    return styles.introPara;
  };

  const getTechParaStyle = () => {
    if (isMobile) return { ...styles.techPara, fontSize: 13 };
    return styles.techPara;
  };

  // Get responsive section padding
  const getIntroSectionStyle = () => {
    if (isMobile) {
      return { ...styles.introSection, padding: "40px 20px", gap: 30 };
    }
    if (isTablet) {
      return { ...styles.introSection, padding: "50px 30px", gap: 40 };
    }
    return styles.introSection;
  };

  const getCardsSectionStyle = () => {
    if (isMobile) {
      return { ...styles.cardsSection, padding: "40px 20px" };
    }
    if (isTablet) {
      return { ...styles.cardsSection, padding: "50px 30px" };
    }
    return styles.cardsSection;
  };

  const getTwoColumnSectionStyle = () => {
    if (isMobile) {
      return { ...styles.twoColumnSection, padding: "40px 20px" };
    }
    if (isTablet) {
      return { ...styles.twoColumnSection, padding: "50px 30px" };
    }
    return styles.twoColumnSection;
  };

  const getTechSectionStyle = () => {
    if (isMobile) {
      return { ...styles.techSection, padding: "40px 20px", gap: 30 };
    }
    if (isTablet) {
      return { ...styles.techSection, padding: "50px 30px", gap: 40 };
    }
    return styles.techSection;
  };

  const getFeatureSectionStyle = () => {
    if (isMobile) {
      return { ...styles.featureSection, padding: "40px 20px" };
    }
    if (isTablet) {
      return { ...styles.featureSection, padding: "50px 30px" };
    }
    return styles.featureSection;
  };

  const getCtaBannerStyle = () => {
    if (isMobile) {
      return { ...styles.ctaBanner, padding: "40px 20px", fontSize: 18 };
    }
    if (isTablet) {
      return { ...styles.ctaBanner, padding: "48px 30px", fontSize: 20 };
    }
    return styles.ctaBanner;
  };

  return (
    <div style={styles.page}>

      {/* ── HERO ── */}
      <motion.section
        ref={heroRef}
        style={getHeroBackgroundStyle()}
        initial="hidden"
        animate={heroControls}
        variants={imageFromLeft}
      >
        <motion.div
          style={styles.heroText}
          variants={textFromBottom}
          initial="hidden"
          animate={heroControls}
        >
          <h1 style={getHeroHeadingStyle()}>
            Build Your Future
            with Industry-Focused
            Software Training
          </h1>
          <p style={getHeroDescriptionStyle()}>
            Master in-demand tech skills with hands-on training, live projects, and expert mentorship.
            Start your journey to become an industry-ready professional today.
          </p>
        </motion.div>
        <div style={styles.heroImagePlaceholder}>
          [ Software Training Hero Image ]
        </div>
      </motion.section>

      {/* ── INTRO TWO-COL (Mobile: Content first, then Image) ── */}
      <section ref={introRef} style={{ ...getIntroSectionStyle(), flexDirection: isMobile || isTablet ? "column" : "row" }}>
        {isMobile || isTablet ? (
          <>
            <motion.div
              style={styles.introBody}
              variants={paraStagger}
              initial="hidden"
              animate={introParaControls}
            >
              <motion.p variants={paraItem} style={getIntroParaStyle()}>
                At Data Artisans, we empower students, freshers, and working professionals with industry-ready 
                technical skills through advanced software training programs designed for real-world careers.
              </motion.p>
              <motion.p variants={paraItem} style={getIntroParaStyle()}>
                Our training programs are carefully structured to bridge the gap between academic learning and 
                industry requirements by combining practical training, live projects, expert mentorship, and 
                placement-focused learning.
              </motion.p>
              <motion.p variants={paraItem} style={getIntroParaStyle()}>
                We help learners gain hands-on experience in trending technologies, cloud platforms, data 
                engineering, analytics, AI, software development, DevOps, ERP solutions, and enterprise tools.
              </motion.p>
              <motion.p variants={paraItem} style={getIntroParaStyle()}>
                Inspired by modern IT training platforms, our focus is on practical learning, industry relevance, and 
                career transformation.
              </motion.p>
            </motion.div>
            <motion.div
              style={{ ...styles.introImageBox, width: isMobile ? "100%" : "100%", height: isMobile ? "auto" : "auto", minHeight: isMobile ? 250 : 300 }}
              variants={imageFromLeft}
              initial="hidden"
              animate={introImageControls}
            >
              <img 
                src="/training-img1.jpg" 
                alt="Software Training"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: 16,
                }}
              />
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              style={styles.introImageBox}
              variants={imageFromLeft}
              initial="hidden"
              animate={introImageControls}
            >
              <img 
                src="/training-img1.jpg" 
                alt="Software Training"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 16,
                }}
              />
            </motion.div>
            <motion.div
              style={styles.introBody}
              variants={paraStagger}
              initial="hidden"
              animate={introParaControls}
            >
              <motion.p variants={paraItem} style={styles.introPara}>
                At Data Artisans, we empower students, freshers, and working professionals with industry-ready 
                technical skills through advanced software training programs designed for real-world careers.
              </motion.p>
              <motion.p variants={paraItem} style={styles.introPara}>
                Our training programs are carefully structured to bridge the gap between academic learning and 
                industry requirements by combining practical training, live projects, expert mentorship, and 
                placement-focused learning.
              </motion.p>
              <motion.p variants={paraItem} style={styles.introPara}>
                We help learners gain hands-on experience in trending technologies, cloud platforms, data 
                engineering, analytics, AI, software development, DevOps, ERP solutions, and enterprise tools.
              </motion.p>
              <motion.p variants={paraItem} style={styles.introPara}>
                Inspired by modern IT training platforms, our focus is on practical learning, industry relevance, and 
                career transformation.
              </motion.p>
            </motion.div>
          </>
        )}
      </section>

      {/* ── OUR TRAINING PROGRAMS SECTION ── */}
      <motion.section
        ref={cardsRef}
        style={getCardsSectionStyle()}
        initial="hidden"
        animate={cardsControls}
      >
        <motion.h2
          variants={textFromBottom}
          style={getSectionHeadingStyle()}
        >
          Our <em style={styles.sectionHeadingItalic}>Training Programs</em>
        </motion.h2>
        <motion.div
          style={{ ...styles.cardsGrid, gridTemplateColumns: getCardsGridColumns() }}
          variants={cardContentStagger}
          initial="hidden"
          animate={cardsControls}
        >
          {trainingPrograms.map((c, index) => {
            const isBlue = isCardBlue(index);
            return (
              <motion.div
                key={c.title}
                custom={index}
                variants={cardFromBottom}
                style={{
                  ...styles.card,
                  ...(isBlue ? styles.cardBlue : styles.cardDefault)
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div variants={cardContentItem}>
                  <h3 style={{
                    ...styles.cardTitle,
                    ...(isBlue ? styles.cardTitleWhite : styles.cardTitleBlue)
                  }}>{c.title}</h3>
                  <p style={{
                    ...styles.cardBody,
                    ...(isBlue ? styles.cardBodyWhite : styles.cardBodyDark)
                  }}>{c.body}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* ── 2 COLUMN SECTION: WHY CHOOSE + TRAINING METHODOLOGY (Stacked on Mobile/Tablet) ── */}
      <section style={getTwoColumnSectionStyle()}>
        <div style={{ ...styles.twoColumnGrid, display: isMobile || isTablet ? "flex" : "grid", flexDirection: "column", gap: 48 }}>
          {/* Right Column First on Mobile/Tablet - Training Methodology */}
          <div ref={methodologyRef} style={styles.rightColumn}>
            <motion.h2
              variants={textFromBottom}
              initial="hidden"
              animate={methodologyControls}
              style={styles.goldBannerHeading}
            >
              Training Methodology
            </motion.h2>
            <motion.div
              style={styles.iconList}
              variants={listFromRight}
              initial="hidden"
              animate={methodologyControls}
            >
              {trainingMethodologies.map((item, i) => (
                <motion.div key={i} variants={listItemRight} style={styles.iconListItem}>
                  <div style={styles.iconCircleSmall}>{item.icon}</div>
                  <p style={styles.iconLabelText}>{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Left Column - Why Choose Data Artisans */}
          <div ref={whyChooseRef} style={styles.leftColumn}>
            <motion.h2
              variants={textFromBottom}
              initial="hidden"
              animate={whyChooseControls}
              style={styles.goldBannerHeading}
            >
              Why Choose Data Artisans
            </motion.h2>
            <motion.p
              variants={textFromBottom}
              initial="hidden"
              animate={whyChooseControls}
              style={{ fontSize: isMobile ? 14 : 15, lineHeight: 1.75, marginBottom: 20, color: "#1A1A1A" }}
            >
              <strong>Practical Learning. Real Careers.</strong>
            </motion.p>
            <motion.ul
              style={styles.whyChooseList}
              variants={listFromLeft}
              initial="hidden"
              animate={whyChooseControls}
            >
              {whyChoosePoints.map((point, index) => (
                <motion.li key={index} variants={listItem} style={{ ...styles.whyChooseItem, fontSize: isMobile ? 13 : 14 }}>
                  <span style={{ color: "#2563eb", fontSize: 18 }}>✔</span> {point}
                </motion.li>
              ))}
            </motion.ul>
            <motion.p
              variants={textFromBottom}
              initial="hidden"
              animate={whyChooseControls}
              style={{ fontSize: isMobile ? 13 : 14, lineHeight: 1.75, marginTop: 20, color: "#1A1A1A" }}
            >
              Our programs are designed to provide practical exposure and real-world implementation experience 
              so learners can confidently transition into successful IT careers.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── WHO CAN JOIN SECTION (Mobile: Content first, then Image) ── */}
      <motion.section
        ref={programRef}
        style={{ ...getTechSectionStyle(), flexDirection: isMobile || isTablet ? "column" : "row" }}
        initial="hidden"
        animate={programImageControls}
      >
        {isMobile || isTablet ? (
          <>
            <motion.div
              style={styles.techBody}
              variants={contentFromLeft}
              initial="hidden"
              animate={programContentControls}
            >
              <motion.p variants={paraItem} style={getTechParaStyle()}>
                <strong>Programs Designed For:</strong>
              </motion.p>
              <motion.p variants={paraItem} style={getTechParaStyle()}>
                🎓 Freshers <br/>
                💼 Working Professionals <br/> 🔄 Career Switchers<br />
                💻 Non-IT Professionals <br/> ☁️ Cloud & DevOps Aspirants <br/> 🤖 AI & Data Enthusiasts
              </motion.p>
              <motion.p variants={paraItem} style={getTechParaStyle()}>
                Whether you are starting your career or upgrading your technical skills, our programs are tailored to 
                help you achieve your professional goals.
              </motion.p>
            </motion.div>
            <motion.div
              style={{ ...styles.techImageBox, width: isMobile ? "100%" : "100%", height: isMobile ? "auto" : "auto", minHeight: isMobile ? 250 : 300 }}
              variants={imageFromRight}
              initial="hidden"
              animate={programImageControls}
            >
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=360&fit=crop"
                alt="Students learning together - Diverse group studying"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: 12,
                }}
              />
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              style={styles.techImageBox}
              variants={imageFromRight}
              initial="hidden"
              animate={programImageControls}
            >
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=360&fit=crop"
                alt="Students learning together - Diverse group studying"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 12,
                }}
              />
            </motion.div>
            <motion.div
              style={styles.techBody}
              variants={contentFromLeft}
              initial="hidden"
              animate={programContentControls}
            >
              <motion.p variants={paraItem} style={styles.techPara}>
                <strong>Programs Designed For:</strong>
              </motion.p>
              <motion.p variants={paraItem} style={styles.techPara}>
                🎓 Freshers <br/>
                💼 Working Professionals <br/> 🔄 Career Switchers<br />
                💻 Non-IT Professionals <br/> ☁️ Cloud & DevOps Aspirants <br/> 🤖 AI & Data Enthusiasts
              </motion.p>
              <motion.p variants={paraItem} style={styles.techPara}>
                Whether you are starting your career or upgrading your technical skills, our programs are tailored to 
                help you achieve your professional goals.
              </motion.p>
            </motion.div>
          </>
        )}
      </motion.section>

      {/* ── CAREER SUPPORT FEATURE CARDS ── */}
      <motion.section
        ref={careerSupportRef}
        style={getFeatureSectionStyle()}
        initial="hidden"
        animate={careerSupportControls}
      >
        <motion.h2
          variants={textFromBottom}
          style={getSectionHeadingStyle()}
        >
          Career <em style={styles.sectionHeadingItalic}>Support</em>
        </motion.h2>
        <motion.p
          variants={textFromBottom}
          style={{ fontSize: isMobile ? 14 : 16, color: "#555", marginBottom: 32, textAlign: "left", marginTop: -32 }}
        >
          End-To-End Placement Assistance
        </motion.p>
        <motion.div
          style={{ ...styles.featureGrid, gridTemplateColumns: getFeatureGridColumns() }}
          variants={cardContentStagger}
          initial="hidden"
          animate={careerSupportControls}
        >
          {careerSupportFeatures.map((f, index) => (
            <motion.div
              key={f.title}
              custom={index}
              variants={cardFromBottom}
              style={{
                ...styles.featureCard,
                ...(hoveredFeatureCard === index ? styles.featureCardHover : {})
              }}
              onMouseEnter={() => setHoveredFeatureCard(index)}
              onMouseLeave={() => setHoveredFeatureCard(null)}
            >
              <motion.div variants={cardContentItem}>
                <div style={{
                  ...styles.featureIcon,
                  ...(hoveredFeatureCard === index ? styles.featureIconHover : {})
                }}>{f.icon}</div>
                <h4 style={{
                  ...styles.featureTitle,
                  ...(hoveredFeatureCard === index ? styles.featureTitleHover : {})
                }}>{f.title}</h4>
                <p style={{
                  ...styles.featureBody,
                  ...(hoveredFeatureCard === index ? styles.featureBodyHover : {})
                }}>{f.body}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          variants={textFromBottom}
          style={{ fontSize: isMobile ? 12 : 14, color: "#555", marginTop: 32, textAlign: "center" }}
        >
          Our objective is to help learners become industry-ready professionals equipped with practical skills and confidence.
        </motion.p>
      </motion.section>

      {/* ── CTA with Contact Us Button (Icon and title in one row on mobile) ── */}
      <motion.div
        ref={ctaRef}
        style={{ ...getCtaBannerStyle(), display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
        variants={ctaStagger}
        initial="hidden"
        animate={ctaControls}
      >
        <motion.span variants={ctaItem} style={styles.ctaSpan}>Start Your Tech Journey With Data Artisans</motion.span>
        <motion.div variants={ctaItem} style={{ fontSize: isMobile ? 16 : 18, marginTop: 8 }}>Upgrade your skills with industry-focused software training programs designed for real-world success.</motion.div>
        <motion.div variants={ctaItem}>
          <button onClick={handleContactClick} style={{ ...styles.ctaButton, marginTop: isMobile ? 16 : 24 }}>
            Contact Us
          </button>
        </motion.div>
        <motion.div variants={ctaItem} style={{ marginTop: 20, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: isMobile ? 8 : 16, fontSize: isMobile ? 12 : 14 }}>
          <span>📞 +91 XXXXX XXXXX</span>
          <span>✉️ info@dataartisans.com</span>
          <span>🌐 www.dataartisans.com</span>
        </motion.div>
      </motion.div>

    </div>
  );
};

export default TrainingPage;