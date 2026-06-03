import React, { useState } from 'react'

/* ══════════════════════════════════════════════════════
   THEME & RESPONSIVE CSS
══════════════════════════════════════════════════════ */
// New 3-color theme
const PRIMARY_RED = '#D36262'
const PRIMARY_BLUE = '#27387A'
const THEME_WHITE = '#ffffff'
const THEME_DARK = '#1e293b'
const BLU_L = '#e8edf5'
const RED   = PRIMARY_RED
const GRAY  = '#64748b'
const WHITE = THEME_WHITE
const FONT  = "'Poppins', sans-serif"

const Styles: React.FC = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: ${FONT}; overflow-x: hidden; }
    img  { max-width: 100%; display: block; }

    /* ── Utility ── */
    .sec        { padding: 80px 0; }
    .sec-sm     { padding: 60px 0; }
    .wrap       { max-width: 1240px; margin: 0 auto; padding: 0 40px; }
    .grid-2     { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
    .grid-4     { display: grid; grid-template-columns: repeat(4,1fr); gap: 36px; }
    .grid-3     { display: grid; grid-template-columns: repeat(3,1fr); gap: 28px; }
    .blue-dot   { width:10px;height:10px;border-radius:50%;background:${PRIMARY_BLUE};flex-shrink:0;margin-top:6px; }

    /* ── Heading scale ── */
    .h-hero  { font-size: clamp(32px, 5vw, 56px); }
    .h-xl    { font-size: clamp(28px, 4vw, 48px); }
    .h-lg    { font-size: clamp(22px, 3vw, 36px); }
    .h-md    { font-size: clamp(18px, 2.5vw, 26px); }
    .h-sm    { font-size: clamp(15px, 2vw, 20px); }
    .body-lg { font-size: clamp(13px, 1.4vw, 15px); }
    .body-sm { font-size: clamp(12px, 1.3vw, 14px); }

    /* ── Italic script heading ── */
    .script {
      font-family: Georgia, 'Times New Roman', serif;
      font-style: italic;
      font-weight: 700;
      color: ${WHITE};
      line-height: 1.15;
    }
    .script-dark { color: ${THEME_DARK}; }

    /* ── Btn ── */
    .btn-blue {
      display:inline-flex;align-items:center;gap:8px;
      background:${PRIMARY_BLUE};color:#fff;border:2px solid ${PRIMARY_BLUE};
      border-radius:6px;padding:12px 28px;
      font-size:14px;font-weight:600;cursor:pointer;
      font-family:${FONT};transition:all 0.2s ease;
      text-decoration:none;
    }
    .btn-blue:hover { background:${RED}; border-color:${RED}; transform:translateY(-2px); }
    .btn-outline {
      display:inline-flex;align-items:center;gap:8px;
      background:transparent;color:${PRIMARY_BLUE};border:2px solid ${PRIMARY_BLUE};
      border-radius:6px;padding:12px 28px;
      font-size:14px;font-weight:600;cursor:pointer;
      font-family:${FONT};transition:all 0.2s ease;
    }
    .btn-outline:hover { background:${PRIMARY_BLUE}; color:#fff; transform:translateY(-2px); }

    /* Mobile button styles */
    @media (max-width:1024px) {
      .btn-blue, .btn-outline {
        padding: 8px 18px !important;
        font-size: 12px !important;
      }
    }

    /* ── Service icon card ── */
    .icon-card {
      display:flex;flex-direction:column;gap:12px;
      padding:0;
    }
    .icon-wrap {
      width:90px;height:90px;border-radius:50%;
      background:${BLU_L};display:flex;align-items:center;
      justify-content:center;border:2px solid rgba(39,56,122,0.15);
      transition:all 0.3s ease;
    }
    .icon-card:hover .icon-wrap {
      background:${PRIMARY_RED};transform:scale(1.08);
      box-shadow:0 8px 28px rgba(211,98,98,0.3);
    }
    .icon-card:hover .icon-wrap svg { color:#fff !important; }

    /* ── Model card ── */
    .model-card {
      background:rgba(39,56,122,0.12);border-radius:10px;
      padding:32px 26px;backdrop-filter:blur(4px);
      border:1px solid rgba(39,56,122,0.2);
      transition:all 0.3s ease;
    }
    .model-card:hover { background:rgba(211,98,98,0.15); transform:translateY(-4px); }

    /* ── Case study card ── */
    .case-card {
      border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;
      background:#fff;transition:box-shadow 0.25s ease;
      display:flex;flex-direction:column;
    }
    .case-card:hover { box-shadow:0 12px 40px rgba(39,56,122,0.14); }

    /* ── Testimonial ── */
    .test-col { display:flex;flex-direction:column;gap:16px; }

    /* ── Form ── */
    .form-input {
      width:100%;padding:13px 16px;
      border:1.5px solid #e2e8f0;border-radius:7px;
      font-size:14px;font-family:${FONT};outline:none;
      transition:border-color 0.2s;background:#fff;
      box-sizing:border-box;
    }
    .form-input:focus { border-color:${PRIMARY_BLUE}; }
    .form-grid { display:grid;grid-template-columns:1fr 1fr;gap:16px; }

    /* ═══════════ TABLET (≤ 1024px) ═══════════ */
    @media (max-width:1024px) {
      .wrap { padding:0 28px; }
      .sec  { padding:60px 0; }
      .grid-2 { grid-template-columns:1fr; gap:36px; }
      .grid-2.reverse-mob { direction:ltr; }
      .grid-2.reverse-mob > *:first-child { order:1; }
      .grid-2.reverse-mob > *:last-child  { order:0; }
      .grid-4 { grid-template-columns:repeat(2,1fr); gap:28px; }
      .grid-3 { grid-template-columns:repeat(2,1fr); gap:22px; }
      .form-grid { grid-template-columns:1fr; }
      .hero-inner { grid-template-columns:1fr !important; }
      .hero-txt   { order:0; }
      .hero-img   { order:1; }
    }

    /* ═══════════ MOBILE (≤ 767px) ═══════════ */
    @media (max-width:767px) {
      .wrap { padding:0 18px; }
      .sec  { padding:44px 0; }
      .sec-sm { padding:36px 0; }
      .grid-2 { grid-template-columns:1fr; gap:28px; }
      .grid-4 { grid-template-columns:1fr; gap:20px; }
      .grid-3 { grid-template-columns:1fr; gap:20px; }
      .form-grid { grid-template-columns:1fr; }
      .hide-mob { display:none !important; }
      .hero-inner { grid-template-columns:1fr !important; }
      .benefits-grid { grid-template-columns:1fr !important; }
      .stats-row  { grid-template-columns:repeat(2,1fr) !important; }
      .two-col-mob{ grid-template-columns:1fr !important; }
    }

    /* ═══════════ LARGE DESKTOP (≥ 1400px) ═══════════ */
    @media (min-width:1400px) {
      .wrap { max-width:1360px; }
      .h-hero { font-size:60px; }
    }

    @keyframes fadeInUp {
      from { opacity:0;transform:translateY(28px); }
      to   { opacity:1;transform:translateY(0); }
    }
    @keyframes scaleIn {
      from { opacity:0;transform:scale(0.92); }
      to   { opacity:1;transform:scale(1); }
    }
    .anim-up { animation:fadeInUp 0.7s ease forwards; }
    .anim-sc { animation:scaleIn 0.6s ease forwards; }
  `}</style>
)

/* ══════════════════════════════════════════════════════
   1. HERO BANNER — "Making BI & Data Visualization happen"
══════════════════════════════════════════════════════ */
const Hero: React.FC = () => {
  // State for responsive layout
  const [isMobile, setIsMobile] = React.useState(false)
  const [isTablet, setIsTablet] = React.useState(false)

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const getHeroBgStyle = (): React.CSSProperties => {
    if (isMobile) {
      return {
        backgroundImage: `url('/bi-data.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '0',
        paddingBottom: '30px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: THEME_WHITE
      }
    }
    if (isTablet) {
      return {
        backgroundImage: `url('/bi-data.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: PRIMARY_BLUE,
        paddingTop: '68px',
        position: 'relative',
        overflow: 'hidden'
      }
    }
    return {
      backgroundImage: `url('/bi-data.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: PRIMARY_BLUE,
      paddingTop: '68px',
      position: 'relative',
      overflow: 'hidden'
    }
  }

  return (
    <section style={getHeroBgStyle()}>
      {/* Decorative rings - red accents */}
      {[300,500,700].map((s,i)=>(
        <div key={i} style={{position:'absolute',right:`${-60+i*80}px`,top:'50%',transform:'translateY(-50%)',width:`${s}px`,height:`${s}px`,borderRadius:'50%',border:`1px solid ${PRIMARY_RED}${40 - i * 10}`,pointerEvents:'none'}}/>
      ))}
      {/* Dot grid */}
      <div style={{position:'absolute',inset:0,opacity:0.05,backgroundImage:'radial-gradient(circle,#fff 1px,transparent 1px)',backgroundSize:'24px 24px',pointerEvents:'none'}}/>

      <div className="wrap">
        <div className="hero-inner" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight: isMobile ? '320px' : '420px',position:'relative',zIndex:1}}>
          {/* Text centered for all devices */}
          <div className="hero-txt" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center',padding: isMobile ? '30px 0' : '60px 0',width:'100%',maxWidth:'800px',margin:'0 auto'}}>
            <p style={{color: PRIMARY_RED,fontSize:'13px',fontWeight:'500',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'16px'}}>BI & Data Visualization</p>
            <h1 className="script" style={{fontSize: isMobile ? '28px' : 'clamp(32px, 5vw, 56px)',marginBottom:'20px',color: THEME_WHITE}}>
              Making BI & Data Visualization happen
            </h1>
            <p style={{color: THEME_WHITE,fontSize:'16px',lineHeight:1.75,maxWidth:'600px',marginBottom:'24px',display: isMobile ? 'none' : 'block'}}>
              Transform raw data into actionable insights with interactive dashboards, real-time analytics, and powerful visual storytelling.
            </p>
            <div className="hero-buttons" style={{display:'flex',gap:'14px',flexWrap:'wrap',justifyContent:'center'}}>
              <a href="#solutions" className="btn-blue" style={{background:THEME_WHITE,color:PRIMARY_BLUE,borderColor:THEME_WHITE}}>Explore Solutions</a>
              <a href="#contact" className="btn-outline" style={{borderColor:THEME_WHITE,color:THEME_WHITE}}>Talk to Expert</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════
   2. INTRO — text left, circular image right
══════════════════════════════════════════════════════ */
const Intro: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return (
    <section className="sec" style={{background:'#fff', paddingTop: isMobile ? '30px' : '80px'}}>
      <div className="wrap">
        <div className="grid-2">
          <div>
            <p className="body-lg" style={{color:'#475569',lineHeight:1.9,marginBottom:'18px'}}>
              Great organisations don't just collect data  they transform it into meaningful insights. It takes the right BI strategy, the right visualization tools, and a partner who understands your data at every layer. To achieve this, you need to onboard the right BI expertise at every stage of your analytics journey.
            </p>
            <p className="body-lg" style={{color:'#475569',lineHeight:1.9,marginBottom:'18px'}}>
              This is where we come in. We help you formulate your BI strategy, map your existing data sources, select the appropriate visualization platforms, and optimise your dashboard performance. Every data point is accounted for and the right visualizations are provided for seamless decision-making.
            </p>
            <p className="body-lg" style={{color:'#475569',lineHeight:1.9}}>
              The fact that we have been delivering enterprise BI solutions since 2015, at scale, proves that we understand the necessity of expertise and process discipline in a rapidly changing analytics landscape. And that is what enables us to offer these services to enterprises across the nation as well as the world.
            </p>
          </div>

          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img 
              src="/bg-img1.png" 
              alt="BI and Data Visualization"
              style={{
                width: '100%',
                maxWidth: '540px',
                height: 'auto',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════
   3. BENEFITS BAND — blue theme background with red accents
══════════════════════════════════════════════════════ */
const Benefits: React.FC = () => {
  const items = [
    'Highly scalable and complete ownership of your entire BI ecosystem',
    'Single window for BI needs across all business units and locations',
    'Fulfilment across different visualization platforms - Power BI, Tableau, Looker',
    'Optimisation of your dashboard performance and user adoption',
    'Hassle-free, swift BI onboarding and go-live',
    'Diagnosis-led approach - BIDA (BI Assessment, Design and Implementation)',
    'Well defined SLAs and KPIs to measure dashboard performance',
    'Automated data pipelines for continuous refresh and real-time insights',
  ]
  return (
    <section className="sec" style={{background: PRIMARY_BLUE,position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,opacity:0.04,backgroundImage:'radial-gradient(circle,#fff 1px,transparent 1px)',backgroundSize:'20px 20px',pointerEvents:'none'}}/>
      {[0,1].map(i=>(
        <div key={i} style={{position:'absolute',right:`${-80+i*200}px`,top:i===0?'-100px':'40%',width:`${400+i*150}px`,height:`${400+i*150}px`,borderRadius:'50%',border:`1px solid ${PRIMARY_RED}33`,pointerEvents:'none'}}/>
      ))}

      <div className="wrap" style={{position:'relative',zIndex:1}}>
        <div className="grid-2">
          <div>
            <h2 className="h-xl" style={{color:WHITE,fontWeight:'700',lineHeight:1.3,marginBottom:'16px'}}>
              When you let us take care of your{' '}
              <em style={{fontFamily:'Georgia,serif',fontStyle:'italic',color:PRIMARY_RED}}>BI & Data Visualization</em>{' '}
              needs, this is what you get
            </h2>
            <p style={{color:'rgba(255,255,255,0.8)',fontSize:'14px',lineHeight:1.75,marginTop:'20px'}}>
              A fully managed BI journey from strategy to scale  backed by certified analysts, proven frameworks, and 24×7 operational support.
            </p>
            <a href="#contact" className="btn-outline" style={{marginTop:'28px',display:'inline-flex',borderColor:WHITE,color:WHITE}}>Explore All Services</a>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:'14px'}}>
            {items.map((item,i)=>(
              <div key={i} style={{display:'flex',gap:'14px',alignItems:'flex-start'}}>
                <div style={{width:'9px',height:'9px',borderRadius:'50%',background:PRIMARY_RED,flexShrink:0,marginTop:'6px'}}/>
                <p style={{color:'rgba(255,255,255,0.9)',fontSize:'clamp(13px,1.4vw,15px)',lineHeight:1.7}}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════
   4. HOLISTIC SERVICE — 8 icon cards
══════════════════════════════════════════════════════ */

const serviceCards = [
  { key:'strategy', title:'BI STRATEGY & ASSESSMENT', desc:'Establishing predictable BI outcomes with a tailored analytics roadmap' },
  { key:'migration', title:'DATA MIGRATION & INTEGRATION', desc:'Achieving zero-downtime data pipeline delivery with modern ETL/ELT processes' },
  { key:'security', title:'DATA SECURITY & GOVERNANCE', desc:'Ensuring end-to-end data security across Power BI, Tableau and Looker' },
  { key:'devops', title:'CI/CD FOR ANALYTICS', desc:'Accelerating dashboard release cycles with version control and automated deployment' },
  { key:'analytics', title:'ADVANCED ANALYTICS', desc:'Widening your analytical reach through governed, scalable BI platforms' },
  { key:'multi', title:'MULTI-PLATFORM MANAGEMENT', desc:'Delivering unified governance and visibility across hybrid BI environments' },
  { key:'support', title:'MANAGED BI OPERATIONS', desc:'24×7 monitoring, incident response and continuous optimisation' },
  { key:'finops', title:'BI COST OPTIMISATION', desc:'Enhancing transparency and control over your analytics spend' },
]

const HolisticService: React.FC = () => (
  <section id="solutions" className="sec" style={{background:'#f8fafc'}}>
    <div className="wrap">
      <p className="h-lg script-dark" style={{fontFamily:'Georgia,serif',fontStyle:'italic',fontWeight:'700',color:THEME_DARK,marginBottom:'48px',lineHeight:1.4,maxWidth:'800px'}}>
        Our holistic BI service integrates the entire analytics technology supply chain, bringing together all aspects in a highly efficient and result-oriented manner
      </p>
      <div className="grid-4">
        {serviceCards.map(c=>(
          <div key={c.key} className="icon-card" style={{cursor:'default'}}>
            <h3 style={{fontSize:'clamp(12px,1.3vw,13.5px)',fontWeight:'800',color:THEME_DARK,letterSpacing:'0.3px',lineHeight:1.45}}>{c.title}</h3>
            <p style={{fontSize:'clamp(12px,1.2vw,13.5px)',color:GRAY,lineHeight:1.7}}>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ══════════════════════════════════════════════════════
   5. FLAGSHIP BI MODELS
══════════════════════════════════════════════════════ */
const models = [
  {
    key:'enterprise',
    title:'Enterprise BI',
    icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none"><rect x="6" y="14" width="40" height="28" rx="5" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none"/><path d="M16 14V10a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v4" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none"/><line x1="26" y1="22" x2="26" y2="36" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round"/><line x1="19" y1="29" x2="33" y2="29" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round"/></svg>,
    bullets:[
      'Ideal for large organisations migrating entire BI infrastructure to modern platforms',
      'High volume, spanning across multiple business units and data sources',
      'Managing the complete cycle from assessment to ongoing operations',
      'Managing the service mix (dashboards, reports, data models and managed services)',
      'Dedicated team for governance, cost management and security',
      'Hiring that spans across BI families, locations and tech stacks',
      'Stringent focus on compliance, security posture and audit readiness',
    ],
  },
  {
    key:'project',
    title:'Project-Based BI',
    icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none"><rect x="8" y="6" width="36" height="44" rx="4" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none"/><path d="M16 18h20M16 26h20M16 34h12" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round"/><circle cx="34" cy="40" r="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/><path d="M31 40l2 2 4-4" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    bullets:[
      'Flexible model suited for specific dashboard or analytics sprints',
      'Suitable to manage data spikes or growth in a specific analytics workload',
      'Serves as a pilot for evaluating full Enterprise BI model',
      'BI teams staffed and aligned to internal delivery squads',
      'Allows internal analysts to focus on product and feature work',
      'Cost-effective solution for targeted analytics initiatives',
      'Rapid deployment with focused scope and deliverables',
    ],
  },
  {
    key:'resource',
    title:'BI Resource Augmentation',
    icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="20" cy="16" r="8" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none"/><path d="M6 44c0-7.7 6.3-14 14-14" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" fill="none"/><circle cx="38" cy="26" r="6" stroke="rgba(255,255,255,0.9)" strokeWidth="2" fill="none"/><path d="M35 46c0-5.5 2.7-10 7-12" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" fill="none"/><path d="M38 20v-4M38 16l3 3" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    bullets:[
      'Augmenting the existing BI team with certified analysts on demand',
      'Adding BI developers, dashboard designers or data analysts as needed',
      'Platform governance managed by the client\'s BI leads or as a service',
      'Highly collaborative model that works best for scaling active analytics teams',
      'Flexible engagement models for short-term and long-term needs',
      'Access to pre-vetted, experienced BI professionals',
      'Seamless integration with your existing team culture',
    ],
  },
]

const FlagshipModels: React.FC = () => (
  <section className="sec" style={{background: PRIMARY_BLUE,position:'relative',overflow:'hidden'}}>
    <div style={{position:'absolute',inset:0,opacity:0.04,backgroundImage:'radial-gradient(circle,#fff 1px,transparent 1px)',backgroundSize:'20px 20px',pointerEvents:'none'}}/>
    <div className="wrap" style={{position:'relative',zIndex:1}}>
      <h2 className="h-xl" style={{color:WHITE,fontWeight:'700',marginBottom:'48px'}}>
        Our flagship <em style={{fontFamily:'Georgia,serif',fontStyle:'italic',color:PRIMARY_RED}}>BI models</em>
      </h2>
      <div className="grid-3">
        {models.map(m=>(
          <div key={m.key} className="model-card" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
            padding: '32px 26px'
          }}>
            <div style={{marginBottom:'20px', display: 'flex', justifyContent: 'center'}}>{m.icon}</div>
            <h3 style={{
              color: WHITE,
              fontSize: 'clamp(16px,2vw,20px)',
              fontWeight: '700',
              fontFamily: 'Georgia,serif',
              fontStyle: 'italic',
              marginBottom: '18px',
              textAlign: 'center'
            }}>{m.title}</h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              flex: 1,
              width: '100%'
            }}>
              {m.bullets.map((b,i)=>(
                <div key={i} style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  justifyContent: 'flex-start'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: PRIMARY_RED,
                    flexShrink: 0,
                    marginTop: '5px'
                  }}/>
                  <p style={{
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: 'clamp(12px,1.3vw,13.5px)',
                    lineHeight: 1.7,
                    textAlign: 'left',
                    margin: 0
                  }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ══════════════════════════════════════════════════════
   6. BI PLATFORMS — horizontal logo strip
══════════════════════════════════════════════════════ */
const platforms = [
  {name:'Power BI',short:'Power BI',color:'#f2c811'},
  {name:'Tableau',short:'Tableau',color:'#e97627'},
  {name:'Looker',short:'Looker',color:'#4285f4'},
  {name:'Qlik',short:'Qlik',color:'#009fda'},
  {name:'Domo',short:'Domo',color:'#00a6e4'},
  {name:'Sisense',short:'Sisense',color:'#00a9e0'},
  {name:'ThoughtSpot',short:'ThoughtSpot',color:'#5c2d91'},
  {name:'Metabase',short:'Metabase',color:'#509ee3'},
]

const PlatformStrip: React.FC = () => (
  <section className="sec-sm" style={{background:'#fff',borderTop:'1px solid #f0f0f0',borderBottom:'1px solid #f0f0f0'}}>
    <div className="wrap">
      <p style={{textAlign:'center',fontSize:'13px',fontWeight:'600',color:GRAY,letterSpacing:'2px',textTransform:'uppercase',marginBottom:'32px'}}>Certified On Leading BI Platforms</p>
      <div style={{display:'flex',flexWrap:'wrap',gap:'16px',justifyContent:'center',alignItems:'center'}}>
        {platforms.map(p=>(
          <div key={p.name} style={{padding:'10px 22px',border:`2px solid ${p.color}22`,borderRadius:'8px',background:`${p.color}08`,cursor:'default',transition:'all 0.25s'}}
            onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor=p.color;el.style.background=`${p.color}18`;el.style.transform='translateY(-3px)'}}
            onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor=`${p.color}22`;el.style.background=`${p.color}08`;el.style.transform='translateY(0)'}}
          >
            <span style={{fontSize:'13.5px',fontWeight:'700',color:p.color}}>{p.short}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ══════════════════════════════════════════════════════
   7. CASE STUDIES — with images and different light bg colors
══════════════════════════════════════════════════════ */
const cases = [
  {
    tag:'Retail Analytics',
    headline:'How a Leading Retail Chain Built a Unified Dashboard for 500+ Stores',
    desc:'Our client, a fast-growing retail chain, needed real-time visibility into sales, inventory, and customer behavior across their 500+ store locations...',
    color: PRIMARY_BLUE,
    bgColor: BLU_L,
    image: '/retail.jpg'
  },
  {
    tag:'Healthcare BI',
    headline:'Transforming Patient Care with Real-Time Clinical Dashboards',
    desc:'A leading hospital network needed to consolidate patient data from multiple EMR systems and create actionable dashboards for clinical decision-making...',
    color: PRIMARY_BLUE,
    bgColor: '#f0fdf4',
    image: '/healthcare.jpg'
  },
  {
    tag:'Financial Services',
    headline:'Interactive Dashboard for Real-Time Investment Portfolio Analytics',
    desc:'Our client, an asset management firm, needed a comprehensive dashboard to track portfolio performance, risk metrics, and market trends in real time...',
    color: PRIMARY_BLUE,
    bgColor: '#fef3c7',
    image: '/financial.jpg'
  },
]

const CaseStudies: React.FC = () => (
  <section id="cases" className="sec" style={{background:'#f8fafc'}}>
    <div className="wrap">
      <h2 className="h-xl" style={{color:THEME_DARK,fontWeight:'700',marginBottom:'8px'}}>
        <em style={{fontFamily:'Georgia,serif',fontStyle:'italic',color:PRIMARY_RED}}>Case studies</em>
      </h2>
      <p style={{color:GRAY,fontSize:'15px',marginBottom:'40px'}}>Real results from real BI transformations</p>
      <div className="grid-3">
        {cases.map((c,i)=>(
          <div key={i} className="case-card" style={{background:c.bgColor}}>
            <div style={{height:'180px',overflow:'hidden'}}>
              <img src={c.image} alt={c.tag} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            </div>
            <div style={{padding:'22px 22px 24px'}}>
              <span style={{display:'inline-block',fontSize:'11px',fontWeight:'700',letterSpacing:'1px',color:c.color,background:`${c.color}12`,padding:'3px 10px',borderRadius:'20px',marginBottom:'12px',textTransform:'uppercase'}}>{c.tag}</span>
              <h3 style={{fontSize:'clamp(14px,1.6vw,16px)',fontWeight:'700',color:THEME_DARK,lineHeight:1.45,marginBottom:'10px'}}>{c.headline}</h3>
              <p style={{fontSize:'13px',color:GRAY,lineHeight:1.75,marginBottom:'16px'}}>{c.desc}</p>
              <a href="#" style={{display:'inline-flex',alignItems:'center',gap:'6px',fontSize:'13px',fontWeight:'600',color:c.color,textDecoration:'none',transition:'gap 0.2s'}}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.gap='10px'}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.gap='6px'}}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke={c.color} strokeWidth="1.5"/><path d="M7 9h5M10 7l2 2-2 2" stroke={c.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ══════════════════════════════════════════════════════
   8. STATS ROW
══════════════════════════════════════════════════════ */
const StatsRow: React.FC = () => {
  const stats = [
    {num:'500+',label:'Dashboards Delivered',icon:'📊'},
    {num:'100+',label:'Enterprise Clients',icon:'🏢'},
    {num:'99.5%',label:'Dashboard Uptime SLA',icon:'⚡'},
    {num:'40%',label:'Faster Decision Making',icon:'🚀'},
  ]
  return (
    <section className="sec-sm" style={{background:PRIMARY_BLUE}}>
      <div className="wrap">
        <div className="stats-row" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'20px',textAlign:'center'}}>
          {stats.map((s,i)=>(
            <div key={i} style={{padding:'16px 8px'}}>
              <div style={{fontSize:'30px',marginBottom:'6px'}}>{s.icon}</div>
              <div style={{fontSize:'clamp(28px,4vw,42px)',fontWeight:'800',color:WHITE,lineHeight:1.1,marginBottom:'6px'}}>{s.num}</div>
              <p style={{color:'rgba(255,255,255,0.8)',fontSize:'clamp(12px,1.3vw,14px)',lineHeight:1.5}}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════
   9. TESTIMONIALS
══════════════════════════════════════════════════════ */
const testimonials = [
  {
    quote:'Data Artisans BI team provided a dashboard development model that could be scaled up and down in line with our analytics demands. A dedicated core team of BI developers across retail and healthcare sectors worked extensively to deliver as per our dashboard SLAs. Overall, it was a combined effort that made this engagement successful.',
    role:'Head – Business Intelligence',
    org:'Leading retail analytics company',
  },
  {
    quote:'Data Artisans has been providing us BI development and analytics engineering services across all three major BI platforms - Power BI, Tableau and Looker  for junior as well as senior positions. We are extremely happy with the quality of analysts and the professional service provided throughout the pre and post-onboarding process.',
    role:'VP Analytics',
    org:'Global Technology Firm',
  },
  {
    quote:'Data Artisans is one of the finest BI staffing firms I have worked with in my career as a data leader. Their understanding of dashboard requirements to the last detail is outstanding. The quality of BI developers we have hired is simply exceptional both for domestic and international analytics programs.',
    role:'Meera Sharma, CDO',
    org:'International Banking Group',
  },
]

const Testimonials: React.FC = () => (
  <section className="sec" style={{background:'#f1f5f9'}}>
    <div className="wrap">
      <h2 className="h-xl" style={{fontWeight:'700',color:THEME_DARK,marginBottom:'8px'}}>
        A word from those <strong style={{fontStyle:'italic',fontFamily:'Georgia,serif',color:PRIMARY_RED}}>we made it happen</strong> for
      </h2>
      <div style={{marginBottom:'44px'}}/>
      <div className="grid-3">
        {testimonials.map((t,i)=>(
          <div key={i} style={{background:WHITE,borderRadius:'10px',padding:'28px',boxShadow:'0 2px 16px rgba(0,0,0,0.06)',display:'flex',flexDirection:'column',gap:'16px',border:'1px solid #e2e8f0'}}>
            <svg width="36" height="30" viewBox="0 0 36 30" fill="none"><path d="M0 30V18C0 7 6 1.5 18 0l1 3C12 4.5 9 8 8.5 13H14V30H0ZM22 30V18C22 7 28 1.5 40 0L41 3C35 4.5 32 8 31.5 13H37V30H22Z" fill="#dbeafe"/></svg>
            <p style={{fontSize:'clamp(13px,1.3vw,14px)',color:'#475569',lineHeight:1.85,flex:1}}>{t.quote}</p>
            <div style={{borderTop:'1px solid #e2e8f0',paddingTop:'14px'}}>
              <p style={{fontWeight:'700',fontSize:'14px',color:PRIMARY_BLUE}}>{t.role}</p>
              <p style={{fontSize:'13px',color:GRAY,marginTop:'2px'}}>{t.org}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ══════════════════════════════════════════════════════
   10. CONTACT FORM
══════════════════════════════════════════════════════ */
const ContactForm: React.FC = () => {
  const [form, setForm] = useState({name:'',phone:'',email:'',company:'',message:''})
  const [sent, setSent] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setSent(true)
    setTimeout(()=>setSent(false),3000)
    setForm({name:'',phone:'',email:'',company:'',message:''})
  }

  return (
    <section id="contact" className="sec" style={{background:'#fff'}}>
      <div className="wrap">
        <h2 className="h-xl" style={{fontWeight:'700',color:THEME_DARK,textAlign:'center',marginBottom:'8px'}}>
          Explore our <em style={{fontFamily:'Georgia,serif',fontStyle:'italic',color:PRIMARY_RED}}>BI & Data Visualization solutions</em>
        </h2>
        <p style={{textAlign:'center',color:GRAY,fontSize:'15px',marginBottom:'44px'}}>Tell us about your analytics journey and we'll get back within 24 hours</p>

        {sent ? (
          <div style={{maxWidth:'500px',margin:'0 auto',textAlign:'center',padding:'48px 24px',background:BLU_L,borderRadius:'12px',border:`1px solid ${PRIMARY_BLUE}22`}}>
            <div style={{width:'64px',height:'64px',borderRadius:'50%',background:'#dcfce7',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px'}}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M7 17l6 6 12-12" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 style={{fontSize:'20px',fontWeight:'700',color:'#16a34a',marginBottom:'8px'}}>Message Sent!</h3>
            <p style={{color:GRAY,fontSize:'14px'}}>Our BI experts will reach out to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{maxWidth:'760px',margin:'0 auto'}}>
            <div className="form-grid" style={{marginBottom:'16px'}}>
              <input className="form-input" placeholder="Your name" value={form.name} onChange={e=>setForm(p=>({...p,name:e.target.value}))} required/>
              <div style={{display:'flex',gap:'8px'}}>
                <select style={{width:'86px',padding:'13px 8px',border:'1.5px solid #e2e8f0',borderRadius:'7px',fontSize:'13px',fontFamily:FONT,outline:'none'}}>
                  <option>🇮🇳 +91</option><option>🇺🇸 +1</option><option>🇬🇧 +44</option>
                </select>
                <input className="form-input" placeholder="Phone number" value={form.phone} onChange={e=>setForm(p=>({...p,phone:e.target.value}))} style={{flex:1}}/>
              </div>
            </div>
            <div className="form-grid" style={{marginBottom:'16px'}}>
              <input className="form-input" type="email" placeholder="Your e-mail" value={form.email} onChange={e=>setForm(p=>({...p,email:e.target.value}))} required/>
              <input className="form-input" placeholder="Company name" value={form.company} onChange={e=>setForm(p=>({...p,company:e.target.value}))}/>
            </div>
            <textarea className="form-input" rows={5} placeholder="Message" value={form.message} onChange={e=>setForm(p=>({...p,message:e.target.value}))} style={{marginBottom:'24px',resize:'vertical'}}/>
            <div style={{display:'flex',justifyContent:'center'}}>
              <button type="submit" className="btn-blue" style={{padding:'14px 48px',fontSize:'15px',letterSpacing:'0.3px'}}>Submit</button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════
   MAIN ASSEMBLY
══════════════════════════════════════════════════════ */
const BIDataVisualization: React.FC = () => (
  <div style={{fontFamily:FONT}}>
    <Styles/>
    <Hero/>
    <Intro/>
    <Benefits/>
    <HolisticService/>
    <PlatformStrip/>
    <FlagshipModels/>
    <CaseStudies/>
    <StatsRow/>
    <Testimonials/>
    <ContactForm/>
  </div>
)

export default BIDataVisualization