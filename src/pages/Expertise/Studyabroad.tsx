import React, { useRef, useEffect } from "react";
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
    background: "url('/studyabroad-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "top",
    color: "#ffffff",
    padding: "80px 60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center" as const,
    minHeight: 520,
    position: "relative",
    overflow: "hidden",
    backgroundRepeat: "no-repeat"
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
    opacity: 0.9,
    lineHeight: 1.5,
    maxWidth: 600,
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
  introPara: { fontSize: 15, lineHeight: 1.75, color: "#333", marginBottom: 18 },
  sectionHeading: { fontSize: 36, fontWeight: 700, color: "#1A1A1A", marginBottom: 48 },
  sectionHeadingItalic: { fontStyle: "italic", color: "#2563eb" },
  cardsSection: { background: "#F7F7F7", padding: "60px 60px" },
  cardsGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 },
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
  card5: { background: "#F0E8FD" },
  card6: { background: "#FDF4E8" },
  card7: { background: "#E8FDF4" },
  card8: { background: "#FDE8FD" },
  card9: { background: "#E8F0FD" },
  card10: { background: "#FDF0E8" },
  card11: { background: "#E8FDF0" },
  card12: { background: "#FDE8F4" },
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
  cardIcon6: { background: "linear-gradient(135deg, #FF5722, #BF360C)" },
  cardIcon7: { background: "linear-gradient(135deg, #009688, #004D40)" },
  cardIcon8: { background: "linear-gradient(135deg, #673AB7, #311B92)" },
  cardIcon9: { background: "linear-gradient(135deg, #3F51B5, #1A237E)" },
  cardIcon10: { background: "linear-gradient(135deg, #FFC107, #FF6F00)" },
  cardIcon11: { background: "linear-gradient(135deg, #8BC34A, #33691E)" },
  cardIcon12: { background: "linear-gradient(135deg, #00BCD4, #006064)" },
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
  cardTitle6: { color: "#BF360C" },
  cardTitle7: { color: "#004D40" },
  cardTitle8: { color: "#311B92" },
  cardTitle9: { color: "#1A237E" },
  cardTitle10: { color: "#E65100" },
  cardTitle11: { color: "#33691E" },
  cardTitle12: { color: "#006064" },
  cardBody: { fontSize: 14, lineHeight: 1.7, margin: 0 },
  cardBody1: { color: "#1A237E" },
  cardBody2: { color: "#1B5E20" },
  cardBody3: { color: "#BF360C" },
  cardBody4: { color: "#4A148C" },
  cardBody5: { color: "#4A148C" },
  cardBody6: { color: "#BF360C" },
  cardBody7: { color: "#004D40" },
  cardBody8: { color: "#311B92" },
  cardBody9: { color: "#1A237E" },
  cardBody10: { color: "#BF360C" },
  cardBody11: { color: "#33691E" },
  cardBody12: { color: "#006064" },
  goldBanner: {
    background: "#3b82f6",
    padding: "70px 60px",
    display: "flex",
    alignItems: "center",
    gap: 60,
  },
  goldBannerText: { flex: 1, color: "#fff" },
  goldBannerPara: { fontSize: 15, lineHeight: 1.75, marginBottom: 16, color: "#fff" },
  goldBannerImageBox: {
    width: 340,
    height: 380,
    borderRadius: 12,
    background: "linear-gradient(145deg, #1e3a8a 0%, #2563eb 100%)",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center" as const,
  },
  iconRow: {
    background: "#3b82f6",
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
    background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
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

  destinationsSection: { background: "#fff", padding: "60px 60px" },
  destGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 40 },
  destCard: {
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    position: "relative",
  },
  destCardImage: {
    width: '100%',
    height: 140,
    objectFit: 'cover' as const,
  },
  destCardBody: { padding: "16px 18px", background: "#fff" },
  destCardTitle: {
    fontWeight: 700,
    fontSize: 16,
    color: "#2563eb",
    marginBottom: 6,
    marginTop: 0,
  },
  destCardText: { fontSize: 13, color: "#555", lineHeight: 1.6, margin: 0 },

  processSection: { background: "#F7F7F7", padding: "60px 60px" },
  processGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 40 },
  processCard: {
    background: "#fff",
    borderRadius: 12,
    padding: "28px 24px",
    textAlign: "center" as const,
    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
  },
  processNumber: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    fontWeight: 700,
    margin: "0 auto 16px",
  },
  processTitle: { fontSize: 18, fontWeight: 700, color: "#1e3a8a", marginBottom: 8 },
  processDesc: { fontSize: 13, color: "#555", lineHeight: 1.6 },

  aboutSection: {
    display: "flex",
    alignItems: "center",
    gap: 60,
    padding: "70px 60px",
    background: "#fff",
  },
  aboutContent: {
    width: "70%",
  },
  aboutImageBox: {
    width: "30%",
    borderRadius: 16,
    overflow: "hidden",
  },
  aboutImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover' as const,
    borderRadius: 16,
  },

  twoColumnSection: {
    background: "#F7F7F7",
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
  whyChooseList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  whyChooseItem: {
    fontSize: 15,
    lineHeight: 1.8,
    marginBottom: 12,
    color: "#1A1A1A",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  testimonialSection: {
    background: "#fff",
    padding: "70px 60px",
    display: "flex",
    alignItems: "center",
    gap: 60,
  },
  testimonialContent: {
    flex: 1,
  },
  testimonialImageBox: {
    width: 480,
    height: 340,
    borderRadius: 16,
    overflow: "hidden",
    flexShrink: 0,
  },
  testimonialImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  },

  ctaBanner: {
    background: "#1A1A2E",
    color: "#fff",
    textAlign: "center" as const,
    padding: "48px 60px",
  },
  ctaSpan: { color: "#3b82f6" },
  ctaButton: {
    display: "inline-block",
    background: "#3b82f6",
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
  footerLink: { display: "block", fontSize: 13, color: "#3b82f6", marginBottom: 6, textDecoration: "none" },
  footerBottom: {
    background: "#0d1117",
    color: "#666",
    textAlign: "center" as const,
    padding: "16px 60px",
    fontSize: 12,
  },
};

const StudyAbroadPage: React.FC = () => {
  // Animation controls
  const heroImageControls = useAnimation();
  const heroTextControls = useAnimation();
  const introImageControls = useAnimation();
  const introContentControls = useAnimation();
  const aboutContentControls = useAnimation();
  const aboutImageControls = useAnimation();
  const cardsControls = useAnimation();
  const destControls = useAnimation();
  const whyChooseControls = useAnimation();
  const ourProcessControls = useAnimation();
  const testimonialContentControls = useAnimation();
  const testimonialImageControls = useAnimation();

  // Refs
  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLElement>(null);
  const destRef = useRef<HTMLElement>(null);
  const whyChooseProcessRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLElement>(null);

  // Card color configurations
  const cardConfigs = [
    { bg: styles.card1, iconBg: styles.cardIcon1, titleColor: styles.cardTitle1, bodyColor: styles.cardBody1 },
    { bg: styles.card2, iconBg: styles.cardIcon2, titleColor: styles.cardTitle2, bodyColor: styles.cardBody2 },
    { bg: styles.card3, iconBg: styles.cardIcon3, titleColor: styles.cardTitle3, bodyColor: styles.cardBody3 },
    { bg: styles.card4, iconBg: styles.cardIcon4, titleColor: styles.cardTitle4, bodyColor: styles.cardBody4 },
    { bg: styles.card5, iconBg: styles.cardIcon5, titleColor: styles.cardTitle5, bodyColor: styles.cardBody5 },
    { bg: styles.card6, iconBg: styles.cardIcon6, titleColor: styles.cardTitle6, bodyColor: styles.cardBody6 },
    { bg: styles.card7, iconBg: styles.cardIcon7, titleColor: styles.cardTitle7, bodyColor: styles.cardBody7 },
    { bg: styles.card8, iconBg: styles.cardIcon8, titleColor: styles.cardTitle8, bodyColor: styles.cardBody8 },
    { bg: styles.card9, iconBg: styles.cardIcon9, titleColor: styles.cardTitle9, bodyColor: styles.cardBody9 },
    { bg: styles.card10, iconBg: styles.cardIcon10, titleColor: styles.cardTitle10, bodyColor: styles.cardBody10 },
    { bg: styles.card11, iconBg: styles.cardIcon11, titleColor: styles.cardTitle11, bodyColor: styles.cardBody11 },
    { bg: styles.card12, iconBg: styles.cardIcon12, titleColor: styles.cardTitle12, bodyColor: styles.cardBody12 },
  ];

  const destinationColors = [
    { bg: "linear-gradient(135deg, #BBDEFB, #E3F2FD)", flagColor: "#1A237E", textColor: "#0D47A1" },
    { bg: "linear-gradient(135deg, #FFCDD2, #FFEBEE)", flagColor: "#B71C1C", textColor: "#C62828" },
    { bg: "linear-gradient(135deg, #C8E6C9, #E8F5E9)", flagColor: "#1B5E20", textColor: "#2E7D32" },
    { bg: "linear-gradient(135deg, #B3E5FC, #E1F5FE)", flagColor: "#01579B", textColor: "#0277BD" },
    { bg: "linear-gradient(135deg, #FFF9C4, #FFFDE7)", flagColor: "#F57F17", textColor: "#F9A825" },
    { bg: "linear-gradient(135deg, #D1C4E9, #EDE7F6)", flagColor: "#311B92", textColor: "#4527A0" },
    { bg: "linear-gradient(135deg, #B2DFDB, #E0F2F1)", flagColor: "#004D40", textColor: "#00695C" },
    { bg: "linear-gradient(135deg, #F8BBD0, #FCE4EC)", flagColor: "#880E4F", textColor: "#AD1457" },
  ];

  // Animation variants with as const to fix TypeScript errors
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

  const destRowFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: i * 0.1 }
    })
  } as const;

  const destRowFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: i * 0.1 }
    })
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

  // Contact Us button click handler
  const handleContactClick = () => {
    window.location.href = "/contact-us";
  };

  // Intersection Observer setup (removed triggerOnce property)
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

    if (aboutRef.current) {
      const aboutObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            aboutContentControls.start("visible");
            aboutImageControls.start("visible");
          } else {
            aboutContentControls.set("hidden");
            aboutImageControls.set("hidden");
          }
        },
        { threshold: 0.3 }
      );
      aboutObserver.observe(aboutRef.current);
      observers.push(aboutObserver);
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

    if (destRef.current) {
      const destObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            destControls.start("visible");
          } else {
            destControls.set("hidden");
          }
        },
        { threshold: 0.2 }
      );
      destObserver.observe(destRef.current);
      observers.push(destObserver);
    }

    if (whyChooseProcessRef.current) {
      const processObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            whyChooseControls.start("visible");
            ourProcessControls.start("visible");
          } else {
            whyChooseControls.set("hidden");
            ourProcessControls.set("hidden");
          }
        },
        { threshold: 0.3 }
      );
      processObserver.observe(whyChooseProcessRef.current);
      observers.push(processObserver);
    }

    if (testimonialRef.current) {
      const testimonialObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            testimonialContentControls.start("visible");
            testimonialImageControls.start("visible");
          } else {
            testimonialContentControls.set("hidden");
            testimonialImageControls.set("hidden");
          }
        },
        { threshold: 0.3 }
      );
      testimonialObserver.observe(testimonialRef.current);
      observers.push(testimonialObserver);
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const whyChoosePoints = [
    "Personalized Student Guidance",
    "Transparent Process",
    "Experienced Counsellors",
    "High Visa Success Support",
    "Global University Network",
    "End-to-End Assistance",
    "Affordable & Reliable Services",
    "Student-Focused Approach",
  ];

  const processSteps = [
    { step: "1", title: "Free Counselling", desc: "Understanding student profile, interests, and career goals." },
    { step: "2", title: "University Shortlisting", desc: "Selecting suitable universities and courses based on eligibility." },
    { step: "3", title: "Documentation", desc: "Preparing SOPs, resumes, academic records, and applications." },
    { step: "4", title: "Application Submission", desc: "Applying to universities with complete support." },
    { step: "5", title: "Visa Processing", desc: "Visa filing, documentation, and interview preparation." },
    { step: "6", title: "Pre-Departure Guidance", desc: "Travel, accommodation, and student settlement assistance." },
  ];

  const servicesData = [
    { icon: "🎓", title: "Career Counselling", body: "Our experienced counselors provide personalized guidance to help students choose the right career path, country, university, and course based on academic profile, interests, and future goals." },
    { icon: "🏛️", title: "University & Course Selection", body: "We help students shortlist top universities and programs that match their educational background, budget, and long-term career aspirations." },
    { icon: "📊", title: "Profile Evaluation", body: "Complete profile assessment to identify the best possible study opportunities and improve admission success rates." },
    { icon: "📄", title: "Documentation Assistance", body: "We provide complete support for preparing and organizing academic documents, application forms, financial records, and verification documents required for international admissions." },
    { icon: "✍️", title: "SOP / Resume / LOR Support", body: "Our experts assist students in creating impactful Statements of Purpose (SOP), resumes, and Letters of Recommendation (LOR) that strengthen university applications." },
    { icon: "📬", title: "Application Submission", body: "Dedicated application support to ensure accurate and timely submission to universities and colleges." },
    { icon: "💰", title: "Scholarship Assistance", body: "We help students identify scholarship opportunities, grants, and tuition fee benefits available across universities worldwide." },
    { icon: "🏦", title: "Education Loan Assistance", body: "Guidance for securing education loans through trusted financial institutions with simplified documentation support." },
    { icon: "🛂", title: "Visa Assistance", body: "Expert support for visa filing, documentation, interview preparation, and application processing to improve visa success rates." },
    { icon: "📝", title: "IELTS / PTE / TOEFL Guidance", body: "Support for standardized test preparation and booking assistance for international admission requirements." },
    { icon: "✈️", title: "Foreign Exchange & Travel Assistance", body: "Assistance with forex services, travel planning, accommodation guidance, and student settlement support." },
    { icon: "🏠", title: "Pre-Departure & Post-Arrival Support", body: "From travel preparation to accommodation assistance and international student orientation, we ensure a smooth transition abroad." },
  ];

  const destinationRows = [
    [
      { flag: "🇺🇸", country: "USA", desc: "World-class universities across 50 states with diverse program offerings and cutting-edge research opportunities.", img: "/usa-1.jpg" },
      { flag: "🇨🇦", country: "Canada", desc: "Affordable education with high quality of life and excellent post-study work and immigration pathways.", img: "/canada-2.jpg" },
      { flag: "🇬🇧", country: "United Kingdom", desc: "Globally recognized degrees with shorter course durations and strong industry connections.", img: "/uk.jpg" },
      { flag: "🇦🇺", country: "Australia", desc: "Multicultural environment with globally ranked universities and strong student support systems.", img: "/australia-1.jpg" },
    ],
    [
      { flag: "🇩🇪", country: "Germany", desc: "Affordable or tuition-free education with strong engineering, technology, and research focus.", img: "/germany-2.jpg" },
      { flag: "🇮🇪", country: "Ireland", desc: "Growing hub for technology and pharmaceutical industries with excellent post-study work options.", img: "/ireland.jpg" },
      { flag: "🇳🇿", country: "New Zealand", desc: "High-quality education in a safe, welcoming environment with great work-life balance.", img: "/newzealand.jpg" },
      { flag: "🇪🇺", country: "Europe", desc: "Diverse study options across multiple countries with rich cultural experiences and affordable tuition.", img: "/europe-1.jpg" },
    ],
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
            Study Abroad<br />
            Expertise
          </h1>
          <p style={styles.heroDescription}>
            Your trusted partner for international education. Expert guidance for university selection,
            visa assistance, and scholarship support to help you achieve your global academic dreams.
          </p>
        </motion.div>
        <div style={styles.heroImagePlaceholder}>[ Study Abroad Hero Image ]</div>
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
            src="/study-abroad.jpg" 
            alt="Study Abroad"
            style={styles.introImage}
          />
        </motion.div>
        <motion.div
          style={styles.introBody}
          variants={textFromBottom}
          initial="hidden"
          animate={introContentControls}
        >
          <p style={styles.introPara}>
            At Data Artisans, we help students turn their international education dreams into reality through expert guidance, personalized counselling, and end-to-end overseas education support.
          </p>
          <p style={styles.introPara}>
            From selecting the right university to visa processing and post-arrival assistance, we simplify every step of your study abroad journey with transparency, professionalism, and student-first support.
          </p>
          <p style={styles.introPara}>
            ✓ University Admissions &nbsp;&nbsp; ✓ Career Counselling &nbsp;&nbsp; ✓ Visa Assistance<br />
            ✓ SOP / LOR / Resume Guidance &nbsp;&nbsp; ✓ Scholarships & Education Loans &nbsp;&nbsp; ✓ Pre & Post Departure Support
          </p>
          <p style={styles.introPara}>
            Helping students build successful global careers with confidence.
          </p>
        </motion.div>
      </section>

      {/* ── ABOUT US SECTION ── */}
      <section ref={aboutRef} style={styles.aboutSection}>
        <motion.div
          style={styles.aboutContent}
          variants={contentFromLeft}
          initial="hidden"
          animate={aboutContentControls}
        >
          <h2 style={styles.sectionHeading}>
            About <em style={styles.sectionHeadingItalic}>Us</em>
          </h2>
          <p style={styles.introPara}>
            Data Artisans is a professional overseas education consultancy dedicated to helping students achieve their academic and career goals abroad. We guide aspiring students through every stage of the international education process  from choosing the right destination and university to visa approval and settlement support.
          </p>
          <p style={styles.introPara}>
            Our experienced counselors work closely with students and parents to understand academic backgrounds, career aspirations, financial plans, and future goals before recommending suitable universities and programs.
          </p>
          <p style={styles.introPara}>
            We believe that studying abroad is not just about earning a degree. It is about creating global exposure, developing international skills, and unlocking better career opportunities. Our mission is to make global education accessible, transparent, and stress-free for every student.
          </p>
          <p style={styles.introPara}>
            With a student-centric approach and strong partnerships with international institutions, we ensure every student receives reliable guidance and complete support throughout the process. Inspired by leading overseas education consultancy platforms, our approach focuses on transparency, personalized counselling, and long-term student success.
          </p>
        </motion.div>
        <motion.div
          style={styles.aboutImageBox}
          variants={imageFromRight}
          initial="hidden"
          animate={aboutImageControls}
        >
          <img 
            src="/studyabroad-img1.jpg" 
            alt="About Study Abroad"
            style={styles.aboutImage}
          />
        </motion.div>
      </section>

      {/* ── SERVICES CARDS ── */}
      <motion.section
        ref={cardsRef}
        style={{ background: "#fff", padding: "60px 60px" }}
        initial="hidden"
        animate={cardsControls}
      >
        <motion.h2 variants={textFromBottom} style={styles.sectionHeading}>
          Our <em style={styles.sectionHeadingItalic}>Services</em>
        </motion.h2>
        <motion.div
          style={styles.cardsGrid}
          variants={cardContentStagger}
          initial="hidden"
          animate={cardsControls}
        >
          {servicesData.map((c, idx) => {
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

      {/* ── DESTINATION CARDS ── */}
      <motion.section
        ref={destRef}
        style={styles.destinationsSection}
        initial="hidden"
        animate={destControls}
      >
        <motion.h2 variants={textFromBottom} style={styles.sectionHeading}>
          Study <em style={styles.sectionHeadingItalic}>Destinations</em>
        </motion.h2>
        <div style={styles.destGrid}>
          {destinationRows[0].map((d, idx) => (
            <motion.div
              key={d.country}
              custom={idx}
              variants={destRowFromRight}
              style={{ ...styles.destCard, background: destinationColors[idx % destinationColors.length].bg }}
            >
              <img src={d.img} alt={d.country} style={styles.destCardImage} />
              <div style={styles.destCardBody}>
                <h4 style={{ ...styles.destCardTitle, color: destinationColors[idx % destinationColors.length].textColor }}>{d.country}</h4>
                <p style={styles.destCardText}>{d.desc}</p>
              </div>
            </motion.div>
          ))}
          {destinationRows[1].map((d, idx) => (
            <motion.div
              key={d.country}
              custom={idx}
              variants={destRowFromLeft}
              style={{ ...styles.destCard, background: destinationColors[(idx + 4) % destinationColors.length].bg }}
            >
              <img src={d.img} alt={d.country} style={styles.destCardImage} />
              <div style={styles.destCardBody}>
                <h4 style={{ ...styles.destCardTitle, color: destinationColors[(idx + 4) % destinationColors.length].textColor }}>{d.country}</h4>
                <p style={styles.destCardText}>{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.p variants={textFromBottom} style={{ textAlign: "center", marginTop: 32, fontSize: 14, color: "#555" }}>
          We help students explore globally recognized universities and career-focused programs across the world's top education destinations.
        </motion.p>
      </motion.section>

      {/* ── WHY CHOOSE US + OUR PROCESS ── */}
      <div ref={whyChooseProcessRef} style={styles.twoColumnSection}>
        <div style={styles.twoColumnGrid}>
          <div style={styles.leftColumn}>
            <motion.h2
              variants={textFromBottom}
              initial="hidden"
              animate={whyChooseControls}
              style={styles.sectionHeading}
            >
              Why <em style={styles.sectionHeadingItalic}>Choose Us</em>
            </motion.h2>
            <motion.ul
              style={styles.whyChooseList}
              variants={listFromLeft}
              initial="hidden"
              animate={whyChooseControls}
            >
              {whyChoosePoints.map((point, index) => (
                <motion.li key={index} variants={listItem} style={styles.whyChooseItem}>
                  <span style={{ color: "#2563eb", fontSize: 18 }}>✓</span> {point}
                </motion.li>
              ))}
            </motion.ul>
            <motion.p
              variants={textFromBottom}
              initial="hidden"
              animate={whyChooseControls}
              style={{ textAlign: "left", marginTop: 32, fontSize: 14, color: "#555" }}
            >
              Our goal is to make the overseas education process simple, transparent, and successful for every student. We focus on building trust, providing genuine guidance, and helping students achieve global academic opportunities with confidence.
            </motion.p>
          </div>

          <div style={styles.rightColumn}>
            <motion.h2
              variants={textFromBottom}
              initial="hidden"
              animate={ourProcessControls}
              style={styles.sectionHeading}
            >
              Our <em style={styles.sectionHeadingItalic}>Process</em>
            </motion.h2>
            <motion.p
              variants={textFromBottom}
              initial="hidden"
              animate={ourProcessControls}
              style={{ textAlign: "left", fontSize: 18, marginBottom: 20, color: "#1e3a8a", fontWeight: 600 }}
            >
              Simple & Structured Process
            </motion.p>
            <motion.div
              style={styles.processGrid}
              variants={listFromRight}
              initial="hidden"
              animate={ourProcessControls}
            >
              {processSteps.map((p, ) => (
                <motion.div key={p.step} variants={listItemRight} style={styles.processCard}>
                  {/* <div style={styles.processNumber}>{p.step}</div> */}
                  <h4 style={styles.processTitle}>{p.title}</h4>
                  <p style={styles.processDesc}>{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── TESTIMONIAL SECTION ── */}
      <motion.section
        ref={testimonialRef}
        style={styles.testimonialSection}
        initial="hidden"
        animate={testimonialContentControls}
      >
        <motion.div
          style={styles.testimonialContent}
          variants={textFromBottom}
          initial="hidden"
          animate={testimonialContentControls}
        >
          <h2 style={styles.sectionHeading}>
            Trusted By <em style={styles.sectionHeadingItalic}>Students & Parents</em>
          </h2>
          <p style={{ maxWidth: 600, fontSize: 15, lineHeight: 1.8, color: "#555", marginBottom: 20 }}>
            We are proud to support students in achieving admissions to globally recognized universities and building successful international careers.
          </p>
          <p style={{ maxWidth: 600, fontSize: 15, lineHeight: 1.8, color: "#555" }}>
            Our commitment to transparency, personalized support, and quality guidance has helped students confidently pursue higher education abroad.
          </p>
        </motion.div>
        <motion.div
          style={styles.testimonialImageBox}
          variants={imageFromRight}
          initial="hidden"
          animate={testimonialImageControls}
        >
          <img 
            src="/studyabroad-img2.jpg" 
            alt="Happy Students"
            style={styles.testimonialImage}
          />
        </motion.div>
      </motion.section>

      {/* ── CTA with Contact Us Button ── */}
      <div style={styles.ctaBanner}>
        Start Your Global Journey Today — speak with a <span style={styles.ctaSpan}>Study Abroad</span> expert.
        <div>
          <button onClick={handleContactClick} style={styles.ctaButton}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadPage;