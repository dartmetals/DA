import React, { useState } from 'react'

/* ══════════════════════════════════════════════════════
   THEME & RESPONSIVE CSS
   New Cyan Theme: Different shades of cyan
══════════════════════════════════════════════════════ */
const BLU = '#06B6D4'        // Primary cyan
const BLU_D = '#0891B2'      // Darker cyan for hover
const BLU_L = '#CFFAFE'      // Light cyan for backgrounds\
const DARK = '#0E7490'       // Darker cyan for text backgrounds
const GRAY = '#5e6e7a'       // Adjusted gray
const TXT = '#1e293b'        // Dark text color
const WHITE = '#ffffff'
const FONT = "'Poppins', sans-serif"

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
    .blue-dot   { width:10px;height:10px;border-radius:50%;background:${BLU};flex-shrink:0;margin-top:6px; }

    /* ── Heading scale ── */
    .h-hero  { font-size: clamp(36px, 6vw, 72px); }
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
    .script-dark { color: ${TXT}; }

    /* ── Btn ── */
    .btn-blue {
      display:inline-flex;align-items:center;gap:8px;
      background:${BLU};color:#fff;border:2px solid ${BLU};
      border-radius:6px;padding:12px 28px;
      font-size:14px;font-weight:600;cursor:pointer;
      font-family:${FONT};transition:all 0.2s ease;
      text-decoration:none;
    }
    .btn-blue:hover { background:${BLU_D}; border-color:${BLU_D}; transform:translateY(-2px); }
    .btn-outline {
      display:inline-flex;align-items:center;gap:8px;
      background:transparent;color:${BLU};border:2px solid ${BLU};
      border-radius:6px;padding:12px 28px;
      font-size:14px;font-weight:600;cursor:pointer;
      font-family:${FONT};transition:all 0.2s ease;
    }
    .btn-outline:hover { background:${BLU}; color:#fff; transform:translateY(-2px); }

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
      justify-content:center;border:2px solid rgba(6,182,212,0.15);
      transition:all 0.3s ease;
    }
    .icon-card:hover .icon-wrap {
      background:${BLU};transform:scale(1.08);
      box-shadow:0 8px 28px rgba(6,182,212,0.3);
    }
    .icon-card:hover .icon-wrap svg { color:#fff !important; }

    /* ── Model card ── */
    .model-card {
      background:rgba(255,255,255,0.12);border-radius:10px;
      padding:32px 26px;backdrop-filter:blur(4px);
      border:1px solid rgba(255,255,255,0.2);
      transition:all 0.3s ease;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .model-card:hover { background:rgba(255,255,255,0.2); transform:translateY(-4px); }
    
    /* Make bullet lists take equal height */
    .model-card .bullets-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    /* ── Case study card ── */
    .case-card {
      border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;
      background:#fff;transition:box-shadow 0.25s ease;
      display:flex;flex-direction:column;
    }
    .case-card:hover { box-shadow:0 12px 40px rgba(6,182,212,0.14); }

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
    .form-input:focus { border-color:${BLU}; }
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
      .h-hero { font-size:80px; }
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
   1. HERO BANNER — "Making Research & Consulting happen"
══════════════════════════════════════════════════════ */
const Hero: React.FC = () => {
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
        backgroundImage: `url('/research.jpg')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '0',
        paddingBottom: '30px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: BLU
      }
    }
    if (isTablet) {
      return {
        backgroundImage: `url('/research.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: BLU,
        paddingTop: '68px',
        position: 'relative',
        overflow: 'hidden'
      }
    }
    return {
      backgroundImage: `url('/research.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: BLU,
      paddingTop: '68px',
      position: 'relative',
      overflow: 'hidden'
    }
  }

  return (
    <section style={getHeroBgStyle()}>
      {[300,500,700].map((s,i)=>(
        <div key={i} style={{position:'absolute',right:`${-60+i*80}px`,top:'50%',transform:'translateY(-50%)',width:`${s}px`,height:`${s}px`,borderRadius:'50%',border:'1px solid rgba(255,255,255,0.08)',pointerEvents:'none'}}/>
      ))}
      <div style={{position:'absolute',inset:0,opacity:0.05,backgroundImage:'radial-gradient(circle,#fff 1px,transparent 1px)',backgroundSize:'24px 24px',pointerEvents:'none'}}/>

      <div className="wrap">
        <div className="hero-inner" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight: isMobile ? '320px' : '420px',position:'relative',zIndex:1}}>
          <div className="hero-txt" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center',padding: isMobile ? '30px 0' : '60px 0',width:'100%',maxWidth:'800px',margin:'0 auto'}}>
            <p style={{color:'rgba(255,255,255,0.9)',fontSize:'13px',fontWeight:'500',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'16px'}}>Research & Consulting</p>
            <h1 className="script" style={{fontSize: isMobile ? '28px' : 'clamp(36px, 6vw, 72px)',marginBottom:'20px'}}>
              Making Research & Consulting happen
            </h1>
            <p style={{color:'rgba(255,255,255,0.9)',fontSize:'16px',lineHeight:1.75,maxWidth:'600px',marginBottom:'24px',display: isMobile ? 'none' : 'block'}}>
              Drive strategic decisions with actionable insights, market intelligence, and expert consulting services tailored to your business needs.
            </p>
            <div className="hero-buttons" style={{display:'flex',gap:'14px',flexWrap:'wrap',justifyContent:'center'}}>
              <a href="#solutions" className="btn-blue" style={{background:'#fff',color:BLU,borderColor:'#fff'}}>Explore Solutions</a>
              <a href="#contact" className="btn-outline" style={{borderColor:'rgba(255,255,255,0.7)',color:'#fff'}}>Talk to Expert</a>
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
    <section className="sec" style={{background:WHITE, paddingTop: isMobile ? '30px' : '80px'}}>
      <div className="wrap">
        <div className="grid-2">
          <div>
            <p className="body-lg" style={{color:TXT,lineHeight:1.9,marginBottom:'18px'}}>
              Great organisations don't just react to markets — they anticipate them. It takes the right research methodology, the right analytical framework, and a partner who understands your business at every layer. To achieve this, you need to onboard the right consulting expertise at every stage of your strategic journey.
            </p>
            <p className="body-lg" style={{color:TXT,lineHeight:1.9,marginBottom:'18px'}}>
              This is where we come in. We help you formulate your research strategy, map your existing data sources, select the appropriate analytical models, and optimise your decision-making process. Every insight is accounted for and the right recommendations are provided for strategic execution.
            </p>
            <p className="body-lg" style={{color:TXT,lineHeight:1.9}}>
              The fact that we have been delivering enterprise research and consulting solutions since 2015, at scale, proves that we understand the necessity of expertise and process discipline in a rapidly evolving business landscape. And that is what enables us to offer these services to enterprises across the nation as well as the world.
            </p>
          </div>

          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img 
              src="/research-img1.jpg" 
              alt="Research and Consulting"
              style={{
                width: '100%',
                maxWidth: '440px',
                height: '500px',
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
   3. BENEFITS BAND
══════════════════════════════════════════════════════ */
const Benefits: React.FC = () => {
  const items = [
    'Actionable insights and complete ownership of your entire research lifecycle',
    'Single window for research needs across all business units and locations',
    'Fulfilment across different research methodologies — Primary, Secondary, Quantitative, Qualitative',
    'Optimisation of your research cost and time-to-insight',
    'Hassle-free, swift research onboarding and go-live',
    'Diagnosis-led approach — RADA (Research Assessment, Design and Implementation)',
    'Well defined SLAs and KPIs to measure research quality and impact',
    'Automated research pipelines for continuous data collection and analysis',
  ]
  return (
    <section className="sec" style={{background:DARK,position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,opacity:0.04,backgroundImage:'radial-gradient(circle,#fff 1px,transparent 1px)',backgroundSize:'20px 20px',pointerEvents:'none'}}/>
      {[0,1].map(i=>(
        <div key={i} style={{position:'absolute',right:`${-80+i*200}px`,top:i===0?'-100px':'40%',width:`${400+i*150}px`,height:`${400+i*150}px`,borderRadius:'50%',border:'1px solid rgba(255,255,255,0.06)',pointerEvents:'none'}}/>
      ))}

      <div className="wrap" style={{position:'relative',zIndex:1}}>
        <div className="grid-2">
          <div>
            <h2 className="h-xl" style={{color:WHITE,fontWeight:'700',lineHeight:1.3,marginBottom:'16px'}}>
              When you let us take care of your{' '}
              <em style={{fontFamily:'Georgia,serif',fontStyle:'italic',color:BLU_L}}>Research & Consulting</em>{' '}
              needs, this is what you get
            </h2>
            <p style={{color:'rgba(255,255,255,0.8)',fontSize:'14px',lineHeight:1.75,marginTop:'20px'}}>
              A fully managed research journey from strategy to scale — backed by experienced consultants, proven frameworks, and 24×7 operational support.
            </p>
            <a href="#contact" className="btn-blue" style={{marginTop:'28px',display:'inline-flex',background:WHITE,color:BLU,borderColor:WHITE}}>Explore All Services</a>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:'14px'}}>
            {items.map((item,i)=>(
              <div key={i} style={{display:'flex',gap:'14px',alignItems:'flex-start'}}>
                <div style={{width:'9px',height:'9px',borderRadius:'50%',background:BLU_L,flexShrink:0,marginTop:'6px'}}/>
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
  { key:'strategy', title:'RESEARCH STRATEGY & ASSESSMENT', desc:'Establishing predictable research outcomes with a tailored study roadmap' },
  { key:'migration', title:'DATA COLLECTION & MODERNISATION', desc:'Achieving zero-downtime data gathering with modern research methodologies' },
  { key:'security', title:'DATA PRIVACY & COMPLIANCE', desc:'Ensuring end-to-end data security across all research activities' },
  { key:'devops', title:'RESEARCH AUTOMATION', desc:'Accelerating insight delivery with automated data collection and analysis' },
  { key:'analytics', title:'ADVANCED ANALYTICS & MODELLING', desc:'Widening your analytical reach through governed, scalable research platforms' },
  { key:'multi', title:'MULTI-METHOD RESEARCH MANAGEMENT', desc:'Delivering unified governance across qualitative and quantitative studies' },
  { key:'support', title:'MANAGED RESEARCH OPERATIONS', desc:'24×7 monitoring, data quality assurance and continuous optimisation' },
  { key:'finops', title:'RESEARCH COST OPTIMISATION', desc:'Enhancing transparency and control over your research spend' },
]

const HolisticService: React.FC = () => (
  <section id="solutions" className="sec" style={{background:BLU_L}}>
    <div className="wrap">
      <p className="h-lg script-dark" style={{fontFamily:'Georgia,serif',fontStyle:'italic',fontWeight:'700',color:BLU,marginBottom:'48px',lineHeight:1.4,maxWidth:'800px'}}>
        Our holistic research service integrates the entire insight supply chain, bringing together all aspects in a highly efficient and result-oriented manner
      </p>
      <div className="grid-4">
        {serviceCards.map(c=>(
          <div key={c.key} className="icon-card" style={{cursor:'default'}}>
            <h3 style={{fontSize:'clamp(12px,1.3vw,13.5px)',fontWeight:'800',color:BLU,letterSpacing:'0.3px',lineHeight:1.45}}>{c.title}</h3>
            <p style={{fontSize:'clamp(12px,1.2vw,13.5px)',color:GRAY,lineHeight:1.7}}>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ══════════════════════════════════════════════════════
   5. FLAGSHIP RESEARCH MODELS - with equal bullet points
══════════════════════════════════════════════════════ */
const models = [
  {
    key:'enterprise',
    title:'Enterprise Research',
    icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none"><rect x="6" y="14" width="40" height="28" rx="5" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none"/><path d="M16 14V10a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v4" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none"/><line x1="26" y1="22" x2="26" y2="36" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round"/><line x1="19" y1="29" x2="33" y2="29" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round"/></svg>,
    bullets:[
      'Ideal for large organisations building enterprise-wide research capabilities',
      'High volume, spanning across multiple business units and geographies',
      'Managing the complete cycle from assessment to ongoing research operations',
      'Managing the service mix (Primary, Secondary, Quantitative, Qualitative)',
      'Dedicated team for governance, data quality and compliance',
      'Hiring that spans across research families, locations and methodologies',
      'Stringent focus on compliance, data privacy and audit readiness',
    ],
  },
  {
    key:'project',
    title:'Project-Based Research',
    icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none"><rect x="8" y="6" width="36" height="44" rx="4" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none"/><path d="M16 18h20M16 26h20M16 34h12" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round"/><circle cx="34" cy="40" r="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/><path d="M31 40l2 2 4-4" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    bullets:[
      'Flexible model suited for specific research studies or insight sprints',
      'Suitable to manage research spikes or growth in a specific domain',
      'Serves as a pilot for evaluating full Enterprise Research model',
      'Research teams staffed and aligned to internal strategy squads',
      'Allows internal teams to focus on core business priorities',
      'Cost-effective solution for targeted research initiatives',
      'Rapid deployment with focused scope and deliverables',
    ],
  },
  {
    key:'resource',
    title:'Research Resource Augmentation',
    icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="20" cy="16" r="8" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none"/><path d="M6 44c0-7.7 6.3-14 14-14" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" fill="none"/><circle cx="38" cy="26" r="6" stroke="rgba(255,255,255,0.9)" strokeWidth="2" fill="none"/><path d="M35 46c0-5.5 2.7-10 7-12" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" fill="none"/><path d="M38 20v-4M38 16l3 3" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    bullets:[
      'Augmenting the existing research team with certified consultants on demand',
      'Adding research analysts, data scientists or market researchers as needed',
      'Research governance managed by the client\'s strategy leads or as a service',
      'Highly collaborative model that works best for scaling active research teams',
      'Flexible engagement models for short-term and long-term needs',
      'Access to pre-vetted, experienced research professionals',
      'Seamless integration with your existing team culture',
    ],
  },
]

const FlagshipModels: React.FC = () => (
  <section className="sec" style={{background:BLU,position:'relative',overflow:'hidden'}}>
    <div style={{position:'absolute',inset:0,opacity:0.04,backgroundImage:'radial-gradient(circle,#fff 1px,transparent 1px)',backgroundSize:'20px 20px',pointerEvents:'none'}}/>
    <div className="wrap" style={{position:'relative',zIndex:1}}>
      <h2 className="h-xl" style={{color:WHITE,fontWeight:'700',marginBottom:'48px'}}>
        Our flagship <em style={{fontFamily:'Georgia,serif',fontStyle:'italic',color:WHITE}}>Research models</em>
      </h2>
      <div className="grid-3">
        {models.map(m=>(
          <div key={m.key} className="model-card">
            <div style={{marginBottom:'20px'}}>{m.icon}</div>
            <h3 style={{color:WHITE,fontSize:'clamp(16px,2vw,20px)',fontWeight:'700',fontFamily:'Georgia,serif',fontStyle:'italic',marginBottom:'18px',textAlign:'center'}}>{m.title}</h3>
            <div className="bullets-container" style={{display:'flex',flexDirection:'column',gap:'10px',flex:1}}>
              {m.bullets.map((b,i)=>(
                <div key={i} style={{display:'flex',gap:'12px',alignItems:'flex-start'}}>
                  <div style={{width:'8px',height:'8px',borderRadius:'50%',background:WHITE,flexShrink:0,marginTop:'5px'}}/>
                  <p style={{color:'rgba(255,255,255,0.9)',fontSize:'clamp(12px,1.3vw,13.5px)',lineHeight:1.7}}>{b}</p>
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
   6. RESEARCH PLATFORMS — horizontal logo strip
══════════════════════════════════════════════════════ */
const platforms = [
  {name:'Nielsen',short:'Nielsen',color:BLU},
  {name:'Kantar',short:'Kantar',color:BLU},
  {name:'IPSOS',short:'IPSOS',color:BLU},
  {name:'Qualtrics',short:'Qualtrics',color:BLU},
  {name:'SurveyMonkey',short:'SurveyMonkey',color:BLU},
  {name:'Tableau',short:'Tableau',color:BLU},
  {name:'SPSS',short:'SPSS',color:BLU},
  {name:'R Studio',short:'R Studio',color:BLU},
]

const PlatformStrip: React.FC = () => (
  <section className="sec-sm" style={{background:WHITE,borderTop:'1px solid #f0f0f0',borderBottom:'1px solid #f0f0f0'}}>
    <div className="wrap">
      <p style={{textAlign:'center',fontSize:'13px',fontWeight:'600',color:BLU,letterSpacing:'2px',textTransform:'uppercase',marginBottom:'32px'}}>Certified On Leading Research Platforms</p>
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
   7. CASE STUDIES
══════════════════════════════════════════════════════ */
const cases = [
  {
    tag:'Market Entry',
    headline:'Market Entry Strategy for a Global Tech Company into Southeast Asia',
    desc:'Our client, a US-based technology company, needed comprehensive market research across 6 Southeast Asian countries to inform their expansion strategy...',
    color: BLU,
    bgColor: '#e0f2fe',
    image: '/technology.jpg'
  },
  {
    tag:'Customer Insights',
    headline:'Customer Segmentation and Journey Mapping for a Leading Bank',
    desc:'A leading retail bank wanted to understand customer behaviour and preferences across different segments to improve digital engagement and retention...',
    color: BLU,
    bgColor: '#f0fdf4',
    image: '/retail.jpg'
  },
  {
    tag:'Competitive Intelligence',
    headline:'Competitive Benchmarking Study for a Healthcare SaaS Company',
    desc:'Our client, a fast-growing healthcare SaaS provider, needed to understand competitor positioning, pricing strategies, and product gaps in the market...',
    color: BLU,
    bgColor: '#fef3c7',
    image: '/healthcare.jpg'
  },
]

const CaseStudies: React.FC = () => (
  <section id="cases" className="sec" style={{background:'#f8fafc'}}>
    <div className="wrap">
      <h2 className="h-xl" style={{color:TXT,fontWeight:'700',marginBottom:'8px'}}>
        <em style={{fontFamily:'Georgia,serif',fontStyle:'italic',color:BLU}}>Case studies</em>
      </h2>
      <p style={{color:GRAY,fontSize:'15px',marginBottom:'40px'}}>Real results from real research transformations</p>
      <div className="grid-3">
        {cases.map((c,i)=>(
          <div key={i} className="case-card" style={{background:c.bgColor}}>
            <div style={{height:'180px',overflow:'hidden'}}>
              <img src={c.image} alt={c.tag} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            </div>
            <div style={{padding:'22px 22px 24px'}}>
              <span style={{display:'inline-block',fontSize:'11px',fontWeight:'700',letterSpacing:'1px',color:c.color,background:`${c.color}12`,padding:'3px 10px',borderRadius:'20px',marginBottom:'12px',textTransform:'uppercase'}}>{c.tag}</span>
              <h3 style={{fontSize:'clamp(14px,1.6vw,16px)',fontWeight:'700',color:TXT,lineHeight:1.45,marginBottom:'10px'}}>{c.headline}</h3>
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
    {num:'500+',label:'Research Projects Delivered',icon:'📊'},
    {num:'30+',label:'Industries Served',icon:'🏭'},
    {num:'98%',label:'Client Satisfaction Rate',icon:'⭐'},
    {num:'100+',label:'Expert Consultants',icon:'🧠'},
  ]
  return (
    <section className="sec-sm" style={{background:BLU}}>
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
    quote:'Data Artisans research team provided a study framework that could be scaled across multiple markets. A dedicated core team of research consultants across healthcare and technology sectors worked extensively to deliver as per our timelines. Overall, it was a combined effort that made this engagement successful.',
    role:'Head – Strategy & Insights',
    org:'Leading healthcare company',
  },
  {
    quote:'Data Artisans has been providing us research and consulting services across all three major methodologies — quantitative, qualitative and secondary research — for junior as well as senior roles. We are extremely happy with the quality of insights and the professional service provided.',
    role:'VP Market Research',
    org:'Global Consumer Goods Company',
  },
  {
    quote:'Data Artisans is one of the finest research consulting firms I have worked with. Their understanding of research requirements to the last detail is outstanding. The quality of insights we have received is simply exceptional both for domestic and international studies.',
    role:'Meera Nair, Director Insights',
    org:'International Retail Brand',
  },
]

const Testimonials: React.FC = () => (
  <section className="sec" style={{background:BLU_L}}>
    <div className="wrap">
      <h2 className="h-xl" style={{fontWeight:'700',color:BLU,marginBottom:'8px'}}>
        A word from those <strong style={{fontStyle:'italic',fontFamily:'Georgia,serif',color:BLU}}>we made it happen</strong> for
      </h2>
      <div style={{marginBottom:'44px'}}/>
      <div className="grid-3">
        {testimonials.map((t,i)=>(
          <div key={i} style={{background:WHITE,borderRadius:'10px',padding:'28px',boxShadow:'0 2px 16px rgba(0,0,0,0.06)',display:'flex',flexDirection:'column',gap:'16px',border:'1px solid #e2e8f0'}}>
            <svg width="36" height="30" viewBox="0 0 36 30" fill="none"><path d="M0 30V18C0 7 6 1.5 18 0l1 3C12 4.5 9 8 8.5 13H14V30H0ZM22 30V18C22 7 28 1.5 40 0L41 3C35 4.5 32 8 31.5 13H37V30H22Z" fill="#dbeafe"/></svg>
            <p style={{fontSize:'clamp(13px,1.3vw,14px)',color:'#475569',lineHeight:1.85,flex:1}}>{t.quote}</p>
            <div style={{borderTop:'1px solid #e2e8f0',paddingTop:'14px'}}>
              <p style={{fontWeight:'700',fontSize:'14px',color:BLU}}>{t.role}</p>
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
    <section id="contact" className="sec" style={{background:WHITE}}>
      <div className="wrap">
        <h2 className="h-xl" style={{fontWeight:'700',color:BLU,textAlign:'center',marginBottom:'8px'}}>
          Explore our <em style={{fontFamily:'Georgia,serif',fontStyle:'italic',color:BLU}}>Research & Consulting solutions</em>
        </h2>
        <p style={{textAlign:'center',color:GRAY,fontSize:'15px',marginBottom:'44px'}}>Tell us about your research needs and we'll get back within 24 hours</p>

        {sent ? (
          <div style={{maxWidth:'500px',margin:'0 auto',textAlign:'center',padding:'48px 24px',background:BLU_L,borderRadius:'12px',border:`1px solid ${BLU}22`}}>
            <div style={{width:'64px',height:'64px',borderRadius:'50%',background:'#dcfce7',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px'}}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M7 17l6 6 12-12" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 style={{fontSize:'20px',fontWeight:'700',color:'#16a34a',marginBottom:'8px'}}>Message Sent!</h3>
            <p style={{color:GRAY,fontSize:'14px'}}>Our research experts will reach out to you shortly.</p>
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
const ResearchConsulting: React.FC = () => (
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

export default ResearchConsulting