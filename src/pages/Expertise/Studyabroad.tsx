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
    background: "linear-gradient(135deg, #C8102E 0%, #8B0000 100%)",
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
    background: "linear-gradient(145deg, #F5A800 60%, #C8102E 100%)",
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
  introPara: { fontSize: 15, lineHeight: 1.75, color: "#333", marginBottom: 18 },
  sectionHeading: { fontSize: 36, fontWeight: 700, color: "#1A1A1A", marginBottom: 48 },
  sectionHeadingItalic: { fontStyle: "italic", color: "#C8102E" },
  cardsSection: { background: "#F7F7F7", padding: "60px 60px" },
  cardsGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 },
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
    background: "linear-gradient(135deg, #F5A800, #C8102E)",
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
    color: "#C8102E",
    marginBottom: 8,
    marginTop: 0,
  },
  cardBody: { fontSize: 14, lineHeight: 1.7, color: "#444", margin: 0 },
  goldBanner: {
    background: "#F5A800",
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
    background: "linear-gradient(145deg, #C8102E 0%, #8B0000 100%)",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center" as const,
  },
  iconRow: {
    background: "#F5A800",
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
  iconLabel: { fontSize: 14, lineHeight: 1.6, color: "#1A1A1A", fontWeight: 500 },
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
    background: "linear-gradient(135deg, #C8102E 0%, #F5A800 100%)",
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
    background: "linear-gradient(135deg, #C8102E, #F5A800)",
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
    color: "#C8102E",
    marginBottom: 8,
    marginTop: 0,
  },
  featureBody: { fontSize: 13, lineHeight: 1.65, color: "#555", margin: 0 },

  // ── Destination cards (unique to Study Abroad) ────────────────────────────
  destinationsSection: { background: "#fff", padding: "60px 60px" },
  destGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 40 },
  destCard: {
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    position: "relative",
  },
  destCardTop: {
    height: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 48,
    background: "linear-gradient(135deg, #C8102E 0%, #F5A800 100%)",
  },
  destCardBody: { padding: "16px 18px", background: "#fff" },
  destCardTitle: {
    fontWeight: 700,
    fontSize: 16,
    color: "#C8102E",
    marginBottom: 6,
    marginTop: 0,
  },
  destCardText: { fontSize: 13, color: "#555", lineHeight: 1.6, margin: 0 },

  ctaBanner: {
    background: "#1A1A2E",
    color: "#fff",
    textAlign: "center" as const,
    padding: "48px 60px",
    fontSize: 22,
    fontWeight: 700,
  },
  ctaSpan: { color: "#F5A800" },
  footer: {
    background: "#111827",
    color: "#fff",
    padding: "50px 60px 30px",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
    gap: 32,
  },
  footerBrand: { fontSize: 24, fontWeight: 800, color: "#C8102E", marginBottom: 12 },
  footerAddress: { fontSize: 13, lineHeight: 1.8, color: "#aaa" },
  footerColTitle: { fontSize: 12, fontWeight: 700, letterSpacing: 1, color: "#fff", marginBottom: 12, textTransform: "uppercase" as const },
  footerLink: { display: "block", fontSize: 13, color: "#C8102E", marginBottom: 6, textDecoration: "none" },
  footerBottom: {
    background: "#0d1117",
    color: "#666",
    textAlign: "center" as const,
    padding: "16px 60px",
    fontSize: 12,
  },
};

const StudyAbroadPage: React.FC = () => {
  return (
    <div style={styles.page}>

      {/* ── HERO ── */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroOverlay2} />
        <div style={styles.heroText}>
          <h1 style={styles.heroHeading}>
            Making<br />
            global<br />
            education<br />
            happen
          </h1>
        </div>
        <div style={styles.heroImagePlaceholder}>[ Study Abroad Hero Image ]</div>
      </section>

      {/* ── INTRO ── */}
      <section style={styles.introSection}>
        <div style={styles.introImageBox}>
          <p style={styles.introImageInnerText}>Making the right<br />global future happen</p>
        </div>
        <div style={styles.introBody}>
          <p style={styles.introPara}>
            Education has no borders — and neither should your ambitions. Studying abroad is one of the most transformative investments a student can make. It opens doors to world-class institutions, diverse cultures, and global career networks that are simply unmatched.
          </p>
          <p style={styles.introPara}>
            With deep expertise in international education counselling and a trusted network of university partners across the globe, we help students navigate the complex journey of studying abroad — from selecting the right programme to stepping foot on campus.
          </p>
          <p style={styles.introPara}>
            We understand that studying abroad is not just about getting a degree in another country. It is about personal growth, global exposure, and building a career that transcends borders. Every student's journey is unique, and we personalise our support to match individual goals, budgets, and aspirations.
          </p>
          <p style={styles.introPara}>
            From Ivy League aspirations to specialised technical programmes, our counsellors have the expertise and the relationships to help you get there. Let us make your global education happen.
          </p>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section style={styles.cardsSection}>
        <h2 style={styles.sectionHeading}>
          Making <em style={styles.sectionHeadingItalic}>seamless global education happen</em>
        </h2>
        <div style={styles.cardsGrid}>
          {[
            { icon: "🎓", title: "University Selection & Application", body: "Our counsellors analyse your academic profile, career goals, and budget to identify the best-fit universities and programmes across the US, UK, Canada, Australia, Europe, and beyond. We manage the entire application process from start to finish." },
            { icon: "📝", title: "SOP, LOR & Essay Support", body: "Your Statement of Purpose and application essays are your first impression on an admissions committee. Our writing experts help you craft compelling, authentic narratives that reflect your unique story and maximise your chances of admission." },
            { icon: "🛂", title: "Visa Guidance & Documentation", body: "Navigating student visa processes can be overwhelming. Our visa experts guide you through the documentation requirements, application procedures, and interview preparation for student visas across all major study destinations." },
            { icon: "🏠", title: "Pre-Departure & Settlement Support", body: "Leaving for a new country is a big step. We provide comprehensive pre-departure briefings covering accommodation options, travel arrangements, health insurance, banking, and cultural orientation so you arrive fully prepared." },
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

      {/* ── DESTINATION CARDS (unique section for Study Abroad) ── */}
      <section style={styles.destinationsSection}>
        <h2 style={styles.sectionHeading}>
          Making <em style={styles.sectionHeadingItalic}>global destinations happen</em>
        </h2>
        <div style={styles.destGrid}>
          {[
            { flag: "🇺🇸", country: "United States", desc: "Home to the world's top-ranked universities. We partner with institutions across the Ivy League, Big Ten, and leading state universities." },
            { flag: "🇬🇧", country: "United Kingdom", desc: "World-class education with shorter course durations. We guide students to Oxford, Cambridge, Russell Group, and leading business schools." },
            { flag: "🇨🇦", country: "Canada", desc: "Affordable education, excellent quality of life, and post-study work opportunities. We connect students with top Canadian universities nationwide." },
            { flag: "🇦🇺", country: "Australia", desc: "Globally recognised degrees in a multicultural environment. Our partners include the Group of Eight universities and leading institutes across major cities." },
          ].map((d) => (
            <div key={d.country} style={styles.destCard}>
              <div style={styles.destCardTop}>{d.flag}</div>
              <div style={styles.destCardBody}>
                <h4 style={styles.destCardTitle}>{d.country}</h4>
                <p style={styles.destCardText}>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GOLD BANNER ── */}
      <section style={styles.goldBanner}>
        <div style={styles.goldBannerText}>
          <p style={styles.goldBannerPara}>
            Students rely on trusted guidance to make one of the most important decisions of their lives. The right university, in the right country, with the right support can define the trajectory of an entire career.
          </p>
          <p style={styles.goldBannerPara}>
            Our vast network of students, alumni, and international university partners allows us to provide guidance that is genuinely personalised. Whether you are targeting a top-10 university or seeking the best value for your investment, we make it happen.
          </p>
          <p style={styles.goldBannerPara}>
            We span the complete study abroad journey — from profile evaluation and university shortlisting to application submission, visa support, and post-arrival settlement — ensuring you are never alone at any stage.
          </p>
          <p style={styles.goldBannerPara}>Here's how we are able to do that:</p>
        </div>
        <div style={styles.goldBannerImageBox}>
          <p style={{ fontFamily: "'Georgia',serif", fontStyle: "italic", fontSize: 30, fontWeight: 700, lineHeight: 1.3, margin: 0, padding: 20 }}>
            Making<br />global<br />education<br />from India<br />happen
          </p>
        </div>
      </section>

      {/* ── ICON ROW ── */}
      <div style={styles.iconRow}>
        {[
          { icon: "🏛️", label: "Our extensive network of 500+ university partnerships across the globe." },
          { icon: "🧑‍🎓", label: "Our access to students across academic profiles and study interests." },
          { icon: "⭐", label: "Our experience with successful placements at top 100 global universities." },
          { icon: "🌐", label: "Our network spanning the US, UK, Canada, Australia, Europe, and beyond." },
          { icon: "🎯", label: "Our ability to become your one-stop study abroad guidance partner." },
          { icon: "🧭", label: "Our unbiased counselling so students navigate global education opportunities better." },
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
          <p style={styles.techImageText}>Making<br />AI powered<br />university<br />matching<br />happen</p>
        </div>
        <div style={styles.techBody}>
          <p style={styles.techPara}>
            Study abroad counselling in the past relied on brochures, college fairs, and limited information. We have evolved alongside the industry to bring data, technology, and personalisation at the centre of every student guidance journey we undertake.
          </p>
          <p style={styles.techPara}>
            We have seen how international education counselling has shifted from one-size-fits-all advice to AI-powered profile matching and personalised university recommendations. That evolution gives us the tools to help students make better decisions, faster.
          </p>
          <p style={styles.techPara}>
            Our technology platform analyses student profiles, academic records, test scores, and career goals to generate precise university shortlists with admission probability scores — removing guesswork and maximising the efficiency of every application.
          </p>
          <p style={styles.techPara}>
            Our internal processes leverage data analytics and operational automation to deliver real-time application tracking, document management, visa status updates, and post-admission support — all in one seamless digital experience.
          </p>
        </div>
      </section>

      {/* ── FEATURE CARDS ── */}
      <section style={styles.featureSection}>
        <div style={styles.featureGrid}>
          {[
            { icon: "🖥️", title: "End to end virtual counselling", body: "From initial profile evaluation to final visa approval — fully virtual consultations available from anywhere in India." },
            { icon: "📊", title: "AI-powered university matching", body: "Intelligent shortlisting based on your academic profile, test scores, financial parameters, and career objectives." },
            { icon: "📄", title: "Application & essay support", body: "Expert assistance with applications, SOPs, LORs, and scholarship essays that maximise admission chances." },
            { icon: "🛂", title: "Seamless visa processing", body: "Fully guided student visa application process with documentation support, interview coaching, and status tracking." },
            { icon: "⚙️", title: "Complete process automation", body: "Automated deadline reminders, document checklists, application trackers, and communication management." },
            { icon: "🏠", title: "Pre-departure & post-arrival support", body: "Expert guidance on accommodation, travel, health insurance, banking, and cultural transition for a smooth start." },
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
        Begin your global journey — speak with a <span style={styles.ctaSpan}>Study Abroad</span> expert today.
      </div>
    </div>
  );
};

export default StudyAbroadPage;