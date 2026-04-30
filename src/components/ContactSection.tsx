import React, { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ─── Inline styles ────────────────────────────────────────────────────────────
const S: Record<string, React.CSSProperties> = {
  // Reset / global
  root: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontSize: 14,
    color: "#333",
    margin: 0,
    padding: 0,
    background: "#fff",
    minHeight: "100vh",
  },

  // ── Navbar ─────────────────────────────────────────────────────────────────
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 32px",
    background: "#fff",
    borderBottom: "1px solid #eee",
    position: "sticky" as const,
    top: 0,
    zIndex: 100,
    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
  },
  navLogo: {
    display: "flex",
    alignItems: "center",
    gap: 0,
  },
  logoBox: {
    width: 56,
    height: 48,
    background: "#1a1a2e",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px 6px",
  },
  logoText: {
    color: "#fff",
    fontWeight: 900,
    fontSize: 20,
    letterSpacing: -1,
    lineHeight: 1,
  },
  logoSubText: {
    color: "#aaa",
    fontSize: 8,
    letterSpacing: 2,
    display: "block",
    textAlign: "center" as const,
    marginTop: 2,
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: 28,
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navLink: {
    fontSize: 13,
    fontWeight: 600,
    color: "#333",
    textDecoration: "none",
    letterSpacing: 0.3,
    textTransform: "uppercase" as const,
    cursor: "pointer",
  },
  navLinkActive: {
    color: "#c8102e",
  },
  navHomeIcon: {
    color: "#333",
    fontSize: 16,
    cursor: "pointer",
  },

  // ── Hero banner ─────────────────────────────────────────────────────────────
  hero: {
    position: "relative" as const,
    height: 180,
    overflow: "hidden",
    background: "linear-gradient(135deg, #0d1b2a 0%, #1a2f45 50%, #243b55 100%)",
    display: "flex",
    alignItems: "flex-end",
  },
  heroBg: {
    position: "absolute" as const,
    inset: 0,
    background:
      "linear-gradient(to right, rgba(10,20,35,0.92) 0%, rgba(10,20,35,0.6) 50%, rgba(10,20,35,0.3) 100%)",
  },
  // Decorative circuit/network dots
  heroDots: {
    position: "absolute" as const,
    right: 60,
    top: 20,
    opacity: 0.25,
    fontSize: 80,
    color: "#4fc3f7",
  },
  heroBreadcrumb: {
    position: "relative" as const,
    zIndex: 2,
    padding: "0 40px 12px",
    color: "#ccc",
    fontSize: 13,
  },
  heroBreadcrumbLink: { color: "#aaa", textDecoration: "underline", cursor: "pointer" },
  heroBreadcrumbSep: { margin: "0 6px", color: "#888" },
  heroTitle: {
    position: "absolute" as const,
    zIndex: 2,
    bottom: 28,
    left: 40,
    color: "#fff",
    fontSize: 38,
    fontWeight: 700,
    letterSpacing: -0.5,
    margin: 0,
  },
  heroUnderline: {
    position: "absolute" as const,
    zIndex: 2,
    bottom: 20,
    left: 40,
    width: 60,
    height: 3,
    background: "#c8102e",
    borderRadius: 2,
  },

  // ── Main content area ───────────────────────────────────────────────────────
  main: {
    background: "#f4f4f4",
    padding: "0 0 60px",
  },

  // ── Three info cards row ─────────────────────────────────────────────────────
  infoRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 0,
    maxWidth: 900,
    margin: "0 auto",
    position: "relative" as const,
    top: -30,
    padding: "0 32px",
  },
  infoCard: {
    background: "#fff",
    borderRadius: 6,
    padding: "22px 24px",
    display: "flex",
    alignItems: "flex-start",
    gap: 16,
    boxShadow: "0 2px 12px rgba(0,0,0,0.09)",
    margin: "0 6px",
  },
  infoIconBox: {
    width: 44,
    height: 44,
    borderRadius: 4,
    background: "#c8102e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    fontSize: 20,
    color: "#fff",
  },
  infoCardTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#222",
    marginBottom: 4,
  },
  infoCardValue: {
    fontSize: 13,
    color: "#c8102e",
    textDecoration: "none",
    cursor: "pointer",
  },
  infoCardAddress: {
    fontSize: 13,
    color: "#555",
    lineHeight: 1.6,
  },

  // ── Bottom section: map left + form right ──────────────────────────────────
  bottomGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 0,
    maxWidth: 900,
    margin: "20px auto 0",
    padding: "0 32px",
    background: "#fff",
    borderRadius: 6,
    boxShadow: "0 2px 12px rgba(0,0,0,0.09)",
    overflow: "hidden",
  },

  // Map side
  mapSide: {
    padding: 0,
    position: "relative" as const,
    minHeight: 380,
    background: "#e8f0fe",
    overflow: "hidden",
  },
  mapIframe: {
    width: "100%",
    height: "100%",
    border: "none",
    display: "block",
    minHeight: 380,
  },

  // Form side
  formSide: {
    padding: "32px 28px",
    borderLeft: "1px solid #f0f0f0",
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: "#333",
    textAlign: "center" as const,
    marginBottom: 4,
  },
  formSubtitle: {
    fontSize: 13,
    color: "#888",
    textAlign: "center" as const,
    marginBottom: 24,
  },
  formInput: {
    width: "100%",
    padding: "11px 14px",
    border: "1px solid #ddd",
    borderRadius: 4,
    fontSize: 13,
    color: "#333",
    background: "#fff",
    outline: "none",
    boxSizing: "border-box" as const,
    marginBottom: 14,
    fontFamily: "inherit",
  },
  formTextarea: {
    width: "100%",
    padding: "11px 14px",
    border: "1px solid #ddd",
    borderRadius: 4,
    fontSize: 13,
    color: "#333",
    background: "#fff",
    outline: "none",
    boxSizing: "border-box" as const,
    marginBottom: 18,
    fontFamily: "inherit",
    resize: "vertical" as const,
    minHeight: 110,
  },
  formBtn: {
    background: "#1a1a2e",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    padding: "11px 28px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    letterSpacing: 0.3,
  },

  // ── Footer ──────────────────────────────────────────────────────────────────
  footer: {
    background: "#1a1a2e",
    color: "#ccc",
    padding: "44px 40px 0",
  },
  footerGrid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr 1fr 1fr",
    gap: 32,
    maxWidth: 960,
    margin: "0 auto",
    paddingBottom: 32,
  },
  footerLogoBox: {
    width: 64,
    height: 56,
    background: "#fff",
    borderRadius: 6,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    padding: 6,
  },
  footerLogoText: {
    color: "#1a1a2e",
    fontWeight: 900,
    fontSize: 22,
    letterSpacing: -1,
    lineHeight: 1,
  },
  footerLogoSub: {
    color: "#c8102e",
    fontSize: 7,
    letterSpacing: 2,
    textTransform: "uppercase" as const,
    marginTop: 2,
  },
  footerDesc: {
    fontSize: 13,
    lineHeight: 1.7,
    color: "#bbb",
    marginBottom: 18,
  },
  footerDescRed: { color: "#c8102e", fontWeight: 600 },
  footerSocial: {
    display: "flex",
    gap: 8,
  },
  footerSocialIcon: {
    width: 32,
    height: 32,
    borderRadius: 4,
    background: "#2a2a3e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    color: "#ccc",
    cursor: "pointer",
    textDecoration: "none",
  },
  footerColTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#fff",
    marginBottom: 16,
    marginTop: 0,
  },
  footerLink: {
    display: "block",
    fontSize: 13,
    color: "#bbb",
    textDecoration: "none",
    marginBottom: 10,
    cursor: "pointer",
  },
  footerLinkRed: {
    display: "block",
    fontSize: 13,
    color: "#c8102e",
    textDecoration: "none",
    marginBottom: 8,
    cursor: "pointer",
  },
  footerBottom: {
    borderTop: "1px solid #2a2a3e",
    textAlign: "center" as const,
    padding: "14px 40px",
    fontSize: 12,
    color: "#888",
    background: "#111827",
  },

  // Quick job links - two col inside footer col
  quickJobGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0 16px",
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
const ContactUsPage: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    ...S.formInput,
    borderColor: focusedField === field ? "#c8102e" : "#ddd",
    boxShadow: focusedField === field ? "0 0 0 2px rgba(200,16,46,0.08)" : "none",
  });
  const textareaStyle = (): React.CSSProperties => ({
    ...S.formTextarea,
    borderColor: focusedField === "message" ? "#c8102e" : "#ddd",
    boxShadow: focusedField === "message" ? "0 0 0 2px rgba(200,16,46,0.08)" : "none",
  });

  const navItems = [
    { label: "About Us", href: "#" },
    { label: "Employers", href: "#", dropdown: true },
    { label: "Job Seekers", href: "#", dropdown: true },
    { label: "Partners", href: "#" },
    { label: "Insights", href: "#", dropdown: true },
    { label: "Careers", href: "#" },
    { label: "Contact Us", href: "#", active: true },
  ];

  const menuLinks = ["Home", "About", "Employer", "Job Seeker"];
  const menuLinks2 = ["Partner", "Careers", "Contact Us", "HR Compliance", "Privacy Policy"];
  const quickJobsLeft = [
    "Jobs in Insurance",
    "Jobs in Banking",
    "Jobs in I.T.",
    "Jobs in ITeS",
    "Jobs in Chemicals",
  ];
  const quickJobsRight = [
    "Jobs in Hyderabad",
    "Jobs in Bangalore",
    "Jobs in Mumbai",
    "Jobs in Pune",
    "Jobs in Delhi",
    "Jobs in Kolkata",
    "Jobs in Ahmedabad",
    "Jobs in Chennai",
  ];

  return (
    <div style={S.root}>

      {/* ── NAVBAR ── */}
      <nav style={S.nav}>
        <div style={S.navLogo}>
          <div style={S.logoBox}>
            <div>
              <div style={S.logoText}>
                <span style={{ color: "#c8102e" }}>T</span>
                <span style={{ color: "#fff" }}>MI</span>
              </div>
              <span style={S.logoSubText}>NETWORK</span>
            </div>
          </div>
        </div>
        <ul style={S.navLinks}>
          <li>
            <span style={S.navHomeIcon}>🏠</span>
          </li>
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                style={{
                  ...S.navLink,
                  ...(item.active ? S.navLinkActive : {}),
                }}
              >
                {item.label}
                {item.dropdown && (
                  <span style={{ marginLeft: 4, fontSize: 10 }}>▼</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── HERO ── */}
      <div style={S.hero}>
        {/* Decorative network bg effect */}
        <div style={S.heroBg} />
        {/* Faint icon cluster top-right */}
        <div
          style={{
            position: "absolute",
            right: 80,
            top: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            opacity: 0.18,
            fontSize: 64,
            gap: 20,
            color: "#90caf9",
          }}
        >
          <span>📊</span>
          <span>👤</span>
          <span>🌐</span>
          <span>🤝</span>
        </div>

        <div style={{ position: "relative", zIndex: 2, padding: "0 40px 32px", width: "100%" }}>
          <div style={{ color: "#ccc", fontSize: 13, marginBottom: 8 }}>
            <span style={{ color: "#aaa", cursor: "pointer", textDecoration: "underline" }}>
              Home
            </span>
            <span style={{ margin: "0 6px", color: "#888" }}>»</span>
            <span>Contact Us</span>
          </div>
          <h1
            style={{
              color: "#fff",
              fontSize: 38,
              fontWeight: 700,
              margin: 0,
              letterSpacing: -0.5,
            }}
          >
            Contact Us
          </h1>
          <div
            style={{
              marginTop: 8,
              width: 56,
              height: 3,
              background: "#c8102e",
              borderRadius: 2,
            }}
          />
        </div>
      </div>

      {/* ── MAIN ── */}
      <div style={S.main}>

        {/* ── THREE INFO CARDS ── */}
        <div style={S.infoRow}>
          {/* Email */}
          <div style={S.infoCard}>
            <div style={S.infoIconBox}>✉️</div>
            <div>
              <div style={S.infoCardTitle}>Email Address</div>
              <a href="mailto:recruiter@tminetwork.com" style={S.infoCardValue}>
                recruiter@tminetwork.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div style={S.infoCard}>
            <div style={S.infoIconBox}>📞</div>
            <div>
              <div style={S.infoCardTitle}>Phone Number</div>
              <a href="tel:04066765000" style={S.infoCardValue}>
                040-6676 5000
              </a>
            </div>
          </div>

          {/* Head Office */}
          <div style={S.infoCard}>
            <div style={S.infoIconBox}>🏢</div>
            <div>
              <div style={S.infoCardTitle}>Head Office</div>
              <p style={S.infoCardAddress}>
                Ashoka My Home Chambers,<br />
                Unit No's. 102 to 105, No.1-8-301 to 303,<br />
                S.P. Road, Secunderabad – 500 003
              </p>
            </div>
          </div>
        </div>

        {/* ── MAP + FORM ── */}
        <div style={S.bottomGrid}>

          {/* Map */}
          <div style={S.mapSide}>
            <iframe
              title="TMI Network Location"
              style={S.mapIframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4055898862704!2d78.49785631487738!3d17.44274398804189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b10c65e9d1%3A0x4f4b5f0a8dcf6e5b!2sTMI%20Network!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Form */}
          <div style={S.formSide}>
            <h2 style={S.formTitle}>Contact Us</h2>
            <p style={S.formSubtitle}>Fill the details and submit</p>

            <input
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              style={inputStyle("name")}
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              style={inputStyle("email")}
            />
            <input
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField(null)}
              style={inputStyle("subject")}
            />
            <textarea
              name="message"
              placeholder="Write detailed message here"
              value={form.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              style={textareaStyle()}
            />
            <button
              onClick={handleSubmit}
              style={S.formBtn}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#c8102e";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#1a1a2e";
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactUsPage;