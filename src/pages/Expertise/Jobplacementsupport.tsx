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
    background: "url('/jobplacement-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#0b50c0",
    padding: "80px 60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center" as const,
    minHeight: 520,
    position: "relative",
    overflow: "hidden",
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
    fontSize: 18,
    marginTop: 20,
    opacity: 0.9,
    lineHeight: 1.4,
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
  introPara: { fontSize: 15, lineHeight: 1.75, color: "#333", marginBottom: 18 },
  sectionHeading: { fontSize: 36, fontWeight: 700, color: "#1A1A1A", marginBottom: 48 },
  sectionHeadingItalic: { fontStyle: "italic", color: "#2563EB" },
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
  featureGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 },
  featureCard: {
    background: "#fff",
    borderRadius: 10,
    padding: "24px 20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    transition: "transform 0.5s ease, background 0.5s ease",
    transform: "scale(1)",
  },
  featureCardActive: {
    transform: "scale(1.05)",
    background: "#2563EB",
  },
  featureIcon: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #1E3A5F, #3B82F6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    marginBottom: 14,
    transition: "all 0.3s ease",
  },
  featureIconActive: {
    background: "#fff",
  },
  featureTitle: {
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
    fontSize: 16,
    fontWeight: 700,
    color: "#2563EB",
    marginBottom: 8,
    marginTop: 0,
    transition: "color 0.3s ease",
  },
  featureTitleActive: {
    color: "#fff",
  },
  featureBody: { fontSize: 13, lineHeight: 1.65, color: "#555", margin: 0, transition: "color 0.3s ease" },
  featureBodyActive: { color: "#fff" },
  ctaBanner: {
    background: "#1E3A5F",
    color: "#fff",
    textAlign: "center" as const,
    padding: "48px 60px",
    fontSize: 22,
    fontWeight: 700,
  },
  ctaSpan: { color: "#3B82F6" },
  ctaButton: {
    display: "inline-block",
    background: "#3B82F6",
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
  // Two Column Layout (70% Content, 30% Image)
  twoColumnWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 48,
    marginBottom: 48,
  },
  twoColumnWrapperReverse: {
    display: "flex",
    alignItems: "center",
    gap: 48,
    marginBottom: 48,
    flexDirection: "row-reverse" as const,
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
  // New styles for added content
  expertiseSection: {
    background: "#fff",
    padding: "60px 60px",
  },
  expertiseHeading: {
    fontSize: 28,
    fontWeight: 700,
    color: "#2563EB",
    marginBottom: 12,
    textAlign: "center" as const,
  },
  expertiseSubheading: {
    fontSize: 20,
    fontWeight: 600,
    color: "#1A1A1A",
    marginBottom: 32,
    textAlign: "center" as const,
  },
  expertiseText: {
    fontSize: 15,
    lineHeight: 1.75,
    color: "#333",
    marginBottom: 24,
  },
  expertiseList: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 12,
    margin: "24px 0",
  },
  expertiseListItem: {
    fontSize: 14,
    color: "#444",
    paddingLeft: 24,
    position: "relative" as const,
  },
  serviceHeading: {
    fontSize: 22,
    fontWeight: 700,
    color: "#1A1A1A",
    margin: "32px 0 20px",
  },
  serviceSubheading: {
    fontSize: 18,
    fontWeight: 600,
    color: "#2563EB",
    margin: "28px 0 16px",
  },
  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 24,
    marginBottom: 32,
  },
  serviceItem: {
    background: "#F7F7F7",
    borderRadius: 10,
    padding: "20px",
  },
  serviceItemTitle: {
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
    fontSize: 16,
    fontWeight: 700,
    color: "#2563EB",
    marginBottom: 10,
  },
  serviceItemDesc: {
    fontSize: 13,
    lineHeight: 1.65,
    color: "#555",
  },
  processGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
    margin: "32px 0",
  },
  processStep: {
    background: "#F7F7F7",
    borderRadius: 10,
    padding: "20px",
    textAlign: "center" as const,
  },
  processNumber: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #1E3A5F, #3B82F6)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    fontWeight: "bold",
    margin: "0 auto 12px",
  },
  whoList: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: 12,
    margin: "20px 0",
  },
  whoItem: {
    background: "linear-gradient(135deg, #3B82F6, #1E3A5F)",
    color: "#fff",
    padding: "8px 20px",
    borderRadius: 30,
    fontSize: 14,
    fontWeight: 500,
  },
  ctaSmall: {
    background: "#1E3A5F",
    color: "#fff",
    textAlign: "center" as const,
    padding: "32px",
    borderRadius: 12,
    marginTop: 32,
  },
  ctaSmallText: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 16,
  },
  contactInfo: {
    display: "flex",
    justifyContent: "center",
    gap: 32,
    fontSize: 14,
  },
  footer: {
    background: "#0F172A",
    color: "#fff",
    padding: "50px 60px 30px",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
    gap: 32,
  },
  footerBrand: { fontSize: 24, fontWeight: 800, color: "#3B82F6", marginBottom: 12 },
  footerAddress: { fontSize: 13, lineHeight: 1.8, color: "#94A3B8" },
  footerColTitle: { fontSize: 12, fontWeight: 700, letterSpacing: 1, color: "#fff", marginBottom: 12, textTransform: "uppercase" as const },
  footerLink: { display: "block", fontSize: 13, color: "#3B82F6", marginBottom: 6, textDecoration: "none" },
  footerBottom: {
    background: "#020617",
    color: "#64748B",
    textAlign: "center" as const,
    padding: "16px 60px",
    fontSize: 12,
  },
};

const JobPlacementSupportPage: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  // Auto-scaling animation for feature cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % 8);
    }, 5000);
    return () => clearInterval(interval);
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
  const expertiseSectionControls = useAnimation();

  // Refs - Fixed the type for expertiseRef
  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLElement>(null);
  const goldBannerRef = useRef<HTMLElement>(null);
  const iconRowRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLElement>(null);
  const featureRef = useRef<HTMLElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null); // Changed from HTMLElement to HTMLDivElement

  // Card color configurations
  const cardConfigs = [
    { bg: styles.card1, iconBg: styles.cardIcon1, titleColor: styles.cardTitle1, bodyColor: styles.cardBody1 },
    { bg: styles.card2, iconBg: styles.cardIcon2, titleColor: styles.cardTitle2, bodyColor: styles.cardBody2 },
    { bg: styles.card3, iconBg: styles.cardIcon3, titleColor: styles.cardTitle3, bodyColor: styles.cardBody3 },
    { bg: styles.card4, iconBg: styles.cardIcon4, titleColor: styles.cardTitle4, bodyColor: styles.cardBody4 },
  ];

  // Animation variants (as const for type safety)
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

  // Contact Us button click handler
  const handleContactClick = () => {
    window.location.href = "/contact-us";
  };

  // Intersection Observer setup (removed triggerOnce)
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

    if (expertiseRef.current) {
      const expertiseObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            expertiseSectionControls.start("visible");
          } else {
            expertiseSectionControls.set("hidden");
          }
        },
        { threshold: 0.1 }
      );
      expertiseObserver.observe(expertiseRef.current);
      observers.push(expertiseObserver);
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const iconItems = [
    { icon: "🏢", label: "Our extensive network of 2,500+ employer partners across all major industries." },
    { icon: "🧑‍💼", label: "Our access to candidates across experience levels for targeted placement." },
    { icon: "⭐", label: "Our experience with the placement of 1,000+ CXO-level professionals over the years." },
    { icon: "🌐", label: "Our network of more than 5 million professionals across industry verticals." },
    { icon: "🎯", label: "Our ability to become your one-stop career support and placement partner." },
    { icon: "🧭", label: "Our unbiased assistance to candidates so they can navigate opportunities better." },
  ];

  const featureCardsData = [
    { icon: "🖥️", title: "End to end virtual placement", body: "From profile creation and assessments to virtual interviews, offer letters, and onboarding  fully digital." },
    { icon: "📝", title: "Skill assessments", body: "Validated assessments that benchmark candidate skills and match them accurately to the right job openings." },
    { icon: "🎥", title: "High volume video interviews", body: "Scalable interview infrastructure with automatic ID verification and impersonation prevention." },
    { icon: "📱", title: "Seamless digital onboarding", body: "Fully digitised candidate engagement and document collection for a smooth joining experience." },
    { icon: "⚙️", title: "Complete automation", body: "Automated screening, job matching, interview scheduling, offer management, and placement tracking." },
    { icon: "🧩", title: "Career advisory services", body: "Expert guidance on career strategy, role selection, compensation benchmarking, and long-term career planning." },
    { icon: "🔧", title: "Candidate Tracking System", body: "Real-time tracking of application status and interview progress." },
    { icon: "📊", title: "Analytics Dashboard", body: "Data-driven insights for recruiters to optimize hiring strategies." },
  ];

  const cardsData = [
    { icon: "📄", title: "Resume & Profile Building", body: "Our career advisors help candidates craft compelling resumes and LinkedIn profiles that stand out. We focus on showcasing achievements, quantifying impact, and aligning your profile with employer expectations in your target industry." },
    { icon: "🤝", title: "Employer Connect & Referrals", body: "We leverage our network of 2,500+ employer partners across industries to connect candidates directly with hiring managers. Our warm referrals significantly increase interview conversion rates compared to cold applications." },
    { icon: "🎤", title: "Interview Preparation", body: "From mock interviews to domain-specific Q&A coaching, we prepare candidates comprehensively. Our structured preparation covers technical rounds, case studies, HR interviews, and executive-level leadership conversations." },
    { icon: "💼", title: "Offer Negotiation & Onboarding", body: "We guide candidates through the critical final stages  evaluating offers, negotiating compensation, and ensuring a smooth transition into their new role. Our support does not end at the offer letter." },
  ];

  return (
    <div style={styles.page}>

      {/* ── HERO ── */}
      <motion.section
        ref={heroRef}
        style={styles.hero}
        initial="hidden"
        animate={heroImageControls}
        variants={imageFromLeft}
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
            Making
            the right<br />
            career move
            happen
          </h1>
          <p style={styles.heroDescription}>
            Get personalized job placement support, resume optimization,<br />
            and interview preparation to land your dream career.
          </p>
        </motion.div>
        <div style={styles.heroImagePlaceholder}>[ Job Placement Hero Image ]</div>
      </motion.section>

      {/* ── INTRO ── */}
      <section ref={introRef} style={styles.introSection}>
        <motion.div
          style={styles.introImageBox}
          variants={imageFromRight}
          initial="hidden"
          animate={introImageControls}
        >
          <img 
            src="/jobplacement.jpg" 
            alt="Job Placement Support"
            style={styles.introImage}
          />
        </motion.div>
        <motion.div
          style={styles.introBody}
          variants={contentFromLeft}
          initial="hidden"
          animate={introContentControls}
        >
          <p style={styles.introPara}>
            Finding the right job is not just about sending applications, it is about positioning yourself correctly in a competitive market, understanding what employers truly seek, and having the right support at every step of the journey.
          </p>
          <p style={styles.introPara}>
            With more than two decades of experience connecting talent with leading organisations, we are uniquely positioned to guide candidates toward roles that align not just with their skills, but with their ambitions, values, and long-term career goals.
          </p>
          <p style={styles.introPara}>
            Our job placement support goes beyond a simple job board. We provide end-to-end assistance  from resume building and interview preparation to employer connects and offer negotiation  ensuring that every candidate we support is set up for lasting success.
          </p>
          <p style={styles.introPara}>
            Whether you are a fresh graduate entering the workforce for the first time or an experienced professional seeking your next big move, our expert team and deep employer network are here to make it happen.
          </p>
        </motion.div>
      </section>

      {/* ── CARDS (4 cards in one row) ── */}
      <motion.section
        ref={cardsRef}
        style={styles.cardsSection}
        initial="hidden"
        animate={cardsControls}
      >
        <motion.h2 variants={textFromBottom} style={styles.sectionHeading}>
          Making <em style={styles.sectionHeadingItalic}>seamless job placement happen</em>
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
          variants={contentFromLeft}
          initial="hidden"
          animate={goldBannerContentControls}
        >
          <p style={styles.goldBannerPara}>
            Candidates rely on trusted guidance to make the right career decisions. The right support can mean the difference between a missed opportunity and a life-changing role. But how do you know who to trust with something this important?
          </p>
          <p style={styles.goldBannerPara}>
            Our vast network of candidates and employers across experience levels allows us to match the right person to the right opportunity. Whether you are looking for your first job, a lateral move, or a senior leadership role, we make it happen.
          </p>
          <p style={styles.goldBannerPara}>
            We span the complete career support supply chain from skill gap analysis and resume building to employer introductions, interview coaching, and offer management  to ensure you land the role that propels your career forward.
          </p>
          <p style={styles.goldBannerPara}>Here's how we are able to do that:</p>
        </motion.div>
        <motion.div
          style={styles.goldBannerImageBox}
          variants={imageFromRight}
          initial="hidden"
          animate={goldBannerImageControls}
        >
          <img 
            src="/jobplacement-img1.jpg" 
            alt="Career Success"
            style={styles.goldBannerImage}
          />
        </motion.div>
      </section>

      {/* ── ICON ROW (2 columns, hover effect) ── */}
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

      {/* ── TECH SECTION (Image on Right, Content on Left - 70%/30%) ── */}
      <motion.section
        ref={techRef}
        style={styles.techSection}
        initial="hidden"
        animate={techImageControls}
      >
        <div style={styles.contentColumn}>
          <motion.div
            variants={contentFromLeft}
            initial="hidden"
            animate={techContentControls}
          >
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
              Our platform delivers personalised job recommendations, real-time application tracking, and structured feedback from every interview  turning each experience into a stepping stone toward the right opportunity.
            </p>
          </motion.div>
        </div>
        <motion.div
          style={styles.imageColumn}
          variants={imageFromRight}
          initial="hidden"
          animate={techImageControls}
        >
          <img 
            src="/jobplacement-img2.jpg" 
            alt="AI powered job matching"
            style={styles.sectionImage}
          />
        </motion.div>
      </motion.section>

      {/* ── FEATURE CARDS (8 cards, 4 per row, auto-scaling animation) ── */}
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
          {featureCardsData.map((f, idx) => (
            <motion.div
              key={f.title}
              custom={idx}
              variants={cardFromBottom}
              style={{
                ...styles.featureCard,
                ...(activeCardIndex === idx ? styles.featureCardActive : {})
              }}
            >
              <motion.div variants={cardContentItem}>
                <div style={{
                  ...styles.featureIcon,
                  ...(activeCardIndex === idx ? styles.featureIconActive : {})
                }}>{f.icon}</div>
                <h4 style={{
                  ...styles.featureTitle,
                  ...(activeCardIndex === idx ? styles.featureTitleActive : {})
                }}>{f.title}</h4>
                <p style={{
                  ...styles.featureBody,
                  ...(activeCardIndex === idx ? styles.featureBodyActive : {})
                }}>{f.body}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── CTA with Contact Us Button ── */}
      <div style={styles.ctaBanner}>
        Visit <span style={styles.ctaSpan}>HirePro</span> to explore a whole new world of placement automation.
        <div>
          <button onClick={handleContactClick} style={styles.ctaButton}>
            Contact Us
          </button>
        </div>
      </div>

      {/* ── NEW JOB PLACEMENT SUPPORT EXPERTISE SECTION ── */}
      <motion.div
        ref={expertiseRef}
        style={styles.expertiseSection}
        variants={fromRightStagger}
        initial="hidden"
        animate={expertiseSectionControls}
      >
        {/* Expertise Section - Image on Right, Content on Left (70%/30%) */}
        <div style={styles.twoColumnWrapper}>
          <div style={styles.contentColumn}>
            <motion.h2 variants={fromRightItem} style={styles.expertiseHeading}>JOB PLACEMENT SUPPORT EXPERTISE</motion.h2>
            <motion.p variants={fromRightItem} style={styles.expertiseSubheading}>Empowering Careers Through Placement Support & Global Opportunities</motion.p>
            
            <motion.p variants={fromRightItem} style={styles.expertiseText}>
              At Data Artisans, we help students, freshers, and working professionals achieve successful careers 
              through dedicated job placement support, outsourcing solutions, CV marketing services, and 
              professional career guidance.
            </motion.p>
            
            <motion.p variants={fromRightItem} style={styles.expertiseText}>
              Our goal is to bridge the gap between talent and industry by providing practical career support, 
              professional mentoring, and access to opportunities across India and international markets.
            </motion.p>
            
            <motion.p variants={fromRightItem} style={styles.expertiseText}>
              We work closely with hiring partners, recruiters, consulting firms, and industry professionals to help 
              candidates improve employability, build strong professional profiles, and secure career opportunities 
              in competitive job markets.
            </motion.p>
            
            <motion.div variants={fromRightItem} style={styles.expertiseList}>
              <div style={styles.expertiseListItem}>✔ Placement Assistance</div>
              <div style={styles.expertiseListItem}>✔ CV Marketing Services</div>
              <div style={styles.expertiseListItem}>✔ Outsourcing Support</div>
              <div style={styles.expertiseListItem}>✔ Interview Preparation</div>
              <div style={styles.expertiseListItem}>✔ Resume Optimization</div>
              <div style={styles.expertiseListItem}>✔ Career Mentorship</div>
            </motion.div>
            
            <motion.p variants={fromRightItem} style={styles.expertiseText}>
              Helping candidates build successful careers with confidence and industry readiness.
            </motion.p>
          </div>
          <motion.div variants={imageFromRight} style={styles.imageColumn}>
            <img src="/jobplacement-img3.jpg" alt="Job Placement Expertise" style={styles.sectionImage} />
          </motion.div>
        </div>

        {/* ABOUT OUR SERVICES - Full Width */}
        <motion.div>
          <motion.h3 variants={fromRightItem} style={styles.serviceHeading}>ABOUT OUR SERVICES</motion.h3>
          <motion.h4 variants={fromRightItem} style={styles.serviceSubheading}>Career-Focused Placement Solutions</motion.h4>
          
          <motion.p variants={fromRightItem} style={styles.expertiseText}>
            At Data Artisans, we understand that building a successful career requires more than technical skills. 
            Candidates need the right guidance, professional presentation, interview preparation, and industry 
            exposure to secure opportunities in today's competitive market.
          </motion.p>
          
          <motion.p variants={fromRightItem} style={styles.expertiseText}>
            Our placement support services are designed to help candidates identify suitable career 
            opportunities, strengthen professional profiles, and improve hiring success rates through structured 
            career guidance and industry-focused support.
          </motion.p>
          
          <motion.p variants={fromRightItem} style={styles.expertiseText}>
            We provide personalized assistance for freshers, experienced professionals, career switchers, and 
            international job aspirants looking to explore opportunities across various industries and 
            technologies.
          </motion.p>
        </motion.div>

        {/* OUR SERVICES - Full Width */}
        <motion.div>
          <motion.h3 variants={fromRightItem} style={styles.serviceHeading}>OUR SERVICES</motion.h3>
          <motion.h4 variants={fromRightItem} style={styles.serviceSubheading}>End-To-End Career Support Services</motion.h4>
          
          <motion.div variants={fromRightItem} style={styles.serviceGrid}>
            <div style={styles.serviceItem}>
              <div style={styles.serviceItemTitle}>Job Placement Support</div>
              <div style={styles.serviceItemDesc}>Comprehensive placement assistance for IT and Non-IT candidates through industry-focused preparation and opportunity mapping.</div>
            </div>
            <div style={styles.serviceItem}>
              <div style={styles.serviceItemTitle}>CV Marketing Services</div>
              <div style={styles.serviceItemDesc}>Professional resume marketing services to help candidates increase visibility among recruiters, consulting firms, and hiring companies.</div>
            </div>
            <div style={styles.serviceItem}>
              <div style={styles.serviceItemTitle}>Resume Building & Optimization</div>
              <div style={styles.serviceItemDesc}>Creating ATS-friendly, professionally structured resumes that highlight skills, projects, experience, and achievements effectively.</div>
            </div>
            <div style={styles.serviceItem}>
              <div style={styles.serviceItemTitle}>LinkedIn Profile Optimization</div>
              <div style={styles.serviceItemDesc}>Professional LinkedIn enhancement to improve recruiter visibility and networking opportunities.</div>
            </div>
            <div style={styles.serviceItem}>
              <div style={styles.serviceItemTitle}>Outsourcing Services</div>
              <div style={styles.serviceItemDesc}>Providing outsourcing support solutions for businesses and professionals across technical and operational domains.</div>
            </div>
            <div style={styles.serviceItem}>
              <div style={styles.serviceItemTitle}>Interview Preparation</div>
              <div style={styles.serviceItemDesc}>Mock interviews, technical interview guidance, HR preparation, and communication skill development.</div>
            </div>
            <div style={styles.serviceItem}>
              <div style={styles.serviceItemTitle}>Career Guidance & Mentorship</div>
              <div style={styles.serviceItemDesc}>Personalized career counselling to help candidates choose the right technology, domain, and career path based on market demand and future growth.</div>
            </div>
            <div style={styles.serviceItem}>
              <div style={styles.serviceItemTitle}>International Job Guidance</div>
              <div style={styles.serviceItemDesc}>Support for candidates exploring overseas opportunities, global career planning, and international professional growth.</div>
            </div>
          </motion.div>
        </motion.div>

        {/* OUTSOURCING SERVICES - Image on Right, Content on Left (70%/30%) */}
        <div style={styles.twoColumnWrapper}>
          <div style={styles.contentColumn}>
            <motion.h3 variants={fromRightItem} style={styles.serviceHeading}>OUTSOURCING SERVICES</motion.h3>
            <motion.h4 variants={fromRightItem} style={styles.serviceSubheading}>Professional Outsourcing Solutions</motion.h4>
            
            <motion.p variants={fromRightItem} style={styles.expertiseText}>
              Data Artisans provides outsourcing support services for businesses seeking reliable professionals and 
              scalable workforce solutions.
            </motion.p>
            
            <motion.p variants={fromRightItem} style={styles.expertiseText}>
              We assist organizations with talent sourcing, technical resource support, operational staffing, and 
              project-based workforce requirements across multiple domains.
            </motion.p>
            
            <motion.div variants={fromRightItem} style={styles.expertiseList}>
              <div style={styles.expertiseListItem}>✔ Technical Resource Support</div>
              <div style={styles.expertiseListItem}>✔ Contract Staffing Assistance</div>
              <div style={styles.expertiseListItem}>✔ Remote Workforce Solutions</div>
              <div style={styles.expertiseListItem}>✔ Project-Based Hiring Support</div>
              <div style={styles.expertiseListItem}>✔ Business Operations Assistance</div>
              <div style={styles.expertiseListItem}>✔ Flexible Staffing Models</div>
            </motion.div>
            
            <motion.p variants={fromRightItem} style={styles.expertiseText}>
              Our outsourcing services help businesses improve productivity, optimize operational efficiency, and 
              access skilled professionals quickly.
            </motion.p>
          </div>
          <motion.div variants={imageFromRight} style={styles.imageColumn}>
            <img src="/jobplacement-img4.jpg" alt="Outsourcing Services" style={styles.sectionImage} />
          </motion.div>
        </div>

        {/* CV MARKETING SERVICES - Image on Left, Content on Right (70%/30%) */}
        <div style={styles.twoColumnWrapperReverse}>
          <div style={styles.contentColumn}>
            <motion.h3 variants={fromRightItem} style={styles.serviceHeading}>CV MARKETING SERVICES</motion.h3>
            <motion.h4 variants={fromRightItem} style={styles.serviceSubheading}>Professional CV Marketing & Profile Branding</motion.h4>
            
            <motion.p variants={fromRightItem} style={styles.expertiseText}>
              Our CV marketing services are designed to increase candidate visibility and improve job search 
              effectiveness.
            </motion.p>
            
            <motion.p variants={fromRightItem} style={styles.expertiseText}>
              We help candidates professionally present their skills, experience, certifications, and project 
              expertise to recruiters and hiring organizations.
            </motion.p>
            
            <motion.div variants={fromRightItem} style={styles.expertiseList}>
              <div style={styles.expertiseListItem}>✔ ATS-Friendly Resume Preparation</div>
              <div style={styles.expertiseListItem}>✔ Professional Profile Enhancement</div>
              <div style={styles.expertiseListItem}>✔ LinkedIn Optimization</div>
              <div style={styles.expertiseListItem}>✔ Job Portal Profile Management</div>
              <div style={styles.expertiseListItem}>✔ Recruiter Outreach Support</div>
              <div style={styles.expertiseListItem}>✔ Career Positioning Guidance</div>
            </motion.div>
            
            <motion.p variants={fromRightItem} style={styles.expertiseText}>
              We focus on creating strong professional branding that helps candidates stand out in competitive job 
              markets.
            </motion.p>
          </div>
          <motion.div variants={imageFromLeft} style={styles.imageColumn}>
            <img src="/jobplacement-img5.jpg" alt="CV Marketing Services" style={styles.sectionImage} />
          </motion.div>
        </div>

        {/* PLACEMENT GUIDANCE - Image on Right, Content on Left (70%/30%) */}
        <div style={styles.twoColumnWrapper}>
          <div style={styles.contentColumn}>
            <motion.h3 variants={fromRightItem} style={styles.serviceHeading}>PLACEMENT GUIDANCE</motion.h3>
            <motion.h4 variants={fromRightItem} style={styles.serviceSubheading}>Complete Career Guidance & Placement Assistance</motion.h4>
            
            <motion.p variants={fromRightItem} style={styles.expertiseText}>
              At Data Artisans, we provide strategic career support to help candidates confidently prepare for 
              interviews and placement opportunities.
            </motion.p>
            
            <motion.div variants={fromRightItem} style={styles.expertiseList}>
              <div style={styles.expertiseListItem}>✔ Career Roadmap Planning</div>
              <div style={styles.expertiseListItem}>✔ Technology & Domain Guidance</div>
              <div style={styles.expertiseListItem}>✔ Resume & Portfolio Support</div>
              <div style={styles.expertiseListItem}>✔ Mock Interviews</div>
              <div style={styles.expertiseListItem}>✔ HR Interview Preparation</div>
              <div style={styles.expertiseListItem}>✔ Communication Skill Development</div>
              <div style={styles.expertiseListItem}>✔ Job Search Strategy Guidance</div>
              <div style={styles.expertiseListItem}>✔ Professional Mentorship</div>
            </motion.div>
            
            <motion.p variants={fromRightItem} style={styles.expertiseText}>
              Our placement-focused approach helps candidates improve confidence, technical readiness, and 
              interview performance.
            </motion.p>
          </div>
          <motion.div variants={imageFromRight} style={styles.imageColumn}>
            <img src="/jobplacement-img6.jpg" alt="Placement Guidance" style={styles.sectionImage} />
          </motion.div>
        </div>

        {/* WHY CHOOSE DATA ARTISANS - Image on Left, Content on Right (70%/30%) */}
        <div style={styles.twoColumnWrapperReverse}>
          <div style={styles.contentColumn}>
            <motion.h3 variants={fromRightItem} style={styles.serviceHeading}>WHY CHOOSE DATA ARTISANS</motion.h3>
            <motion.h4 variants={fromRightItem} style={styles.serviceSubheading}>Why Candidates Trust Us</motion.h4>
            
            <motion.div variants={fromRightItem} style={styles.expertiseList}>
              <div style={styles.expertiseListItem}>✔ Industry-Focused Career Support</div>
              <div style={styles.expertiseListItem}>✔ Experienced Mentorship</div>
              <div style={styles.expertiseListItem}>✔ Placement-Oriented Guidance</div>
              <div style={styles.expertiseListItem}>✔ Professional CV Marketing</div>
              <div style={styles.expertiseListItem}>✔ Real-Time Career Assistance</div>
              <div style={styles.expertiseListItem}>✔ Flexible Support Models</div>
              <div style={styles.expertiseListItem}>✔ Personalized Career Planning</div>
              <div style={styles.expertiseListItem}>✔ End-To-End Professional Guidance</div>
            </motion.div>
            
            <motion.p variants={fromRightItem} style={styles.expertiseText}>
              We focus on helping candidates build strong professional profiles and achieve sustainable long-term 
              career growth.
            </motion.p>
          </div>
          <motion.div variants={imageFromLeft} style={styles.imageColumn}>
            <img src="/jobplacement-img7.jpg" alt="Why Choose Data Artisans" style={styles.sectionImage} />
          </motion.div>
        </div>

        {/* WHO CAN BENEFIT - Image on Right, Content on Left (70%/30%) */}
        <div style={styles.twoColumnWrapper}>
          <div style={styles.contentColumn}>
            <motion.h3 variants={fromRightItem} style={styles.serviceHeading}>WHO CAN BENEFIT</motion.h3>
            <motion.h4 variants={fromRightItem} style={styles.serviceSubheading}>Designed For</motion.h4>
            
            <motion.div variants={fromRightItem} style={styles.whoList}>
              <span style={styles.whoItem}>Freshers</span>
              <span style={styles.whoItem}>Experienced Professionals</span>
              <span style={styles.whoItem}>IT & Non-IT Candidates</span>
              <span style={styles.whoItem}>Career Switchers</span>
              <span style={styles.whoItem}>International Job Aspirants</span>
              <span style={styles.whoItem}>Professionals Seeking Career Growth</span>
            </motion.div>
            
            <motion.p variants={fromRightItem} style={styles.expertiseText}>
              Whether you are starting your career or planning your next professional move, our services are 
              designed to help you achieve your career goals effectively.
            </motion.p>
          </div>
          <motion.div variants={imageFromRight} style={styles.imageColumn}>
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=360&fit=crop" alt="Who Can Benefit" style={styles.sectionImage} />
          </motion.div>
        </div>

        {/* OUR PROCESS - Full Width */}
        <motion.div>
          <motion.h3 variants={fromRightItem} style={styles.serviceHeading}>OUR PROCESS</motion.h3>
          <motion.h4 variants={fromRightItem} style={styles.serviceSubheading}>How We Support Candidates</motion.h4>
          
          <motion.div variants={fromRightItem} style={styles.processGrid}>
            <div style={styles.processStep}>
              <div style={styles.processNumber}>1</div>
              <div style={styles.serviceItemTitle}>Profile Evaluation</div>
              <div style={styles.serviceItemDesc}>Understanding skills, experience, and career objectives.</div>
            </div>
            <div style={styles.processStep}>
              <div style={styles.processNumber}>2</div>
              <div style={styles.serviceItemTitle}>Career Consultation</div>
              <div style={styles.serviceItemDesc}>Identifying suitable opportunities and career paths.</div>
            </div>
            <div style={styles.processStep}>
              <div style={styles.processNumber}>3</div>
              <div style={styles.serviceItemTitle}>Resume & Profile Enhancement</div>
              <div style={styles.serviceItemDesc}>Professional CV optimization and branding support.</div>
            </div>
            <div style={styles.processStep}>
              <div style={styles.processNumber}>4</div>
              <div style={styles.serviceItemTitle}>Placement Preparation</div>
              <div style={styles.serviceItemDesc}>Interview guidance, technical preparation, and mentorship.</div>
            </div>
            <div style={styles.processStep}>
              <div style={styles.processNumber}>5</div>
              <div style={styles.serviceItemTitle}>Opportunity Support</div>
              <div style={styles.serviceItemDesc}>Connecting candidates with relevant hiring opportunities.</div>
            </div>
            <div style={styles.processStep}>
              <div style={styles.processNumber}>6</div>
              <div style={styles.serviceItemTitle}>Career Growth Assistance</div>
              <div style={styles.serviceItemDesc}>Continuous guidance for long-term professional development.</div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Small - Full Width */}
        <motion.div variants={fromRightItem} style={styles.ctaSmall}>
          <div style={styles.ctaSmallText}>Take The Next Step In Your Career</div>
          <p style={{ fontSize: 14, marginBottom: 20 }}>
            Build a strong professional future with expert placement support, CV marketing services, outsourcing 
            solutions, and career guidance from Data Artisans.
          </p>
          <div style={styles.contactInfo}>
            <span>📞 +91 XXXXX XXXXX</span>
            <span>✉️ info@dataartisans.com</span>
            <span>🌐 www.dataartisans.com</span>
          </div>
          <p style={{ fontSize: 13, marginTop: 20, fontStyle: "italic" }}>
            Build Skills. Create Opportunities. Achieve Career Success.
          </p>
        </motion.div>
      </motion.div>

    </div>
  );
};

export default JobPlacementSupportPage;