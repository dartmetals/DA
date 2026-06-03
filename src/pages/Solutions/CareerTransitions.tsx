import React, { useState } from 'react'

/* ══════════════════════════════════════════════════════
   THEME & RESPONSIVE CSS
   Light Blue Theme
══════════════════════════════════════════════════════ */
const BLU = '#75a0e4'        // Primary light blue
const BLU_D = '#2563EB'      // Darker blue for hover
const BLU_L = '#EFF6FF'      // Very light blue for backgrounds
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
      justify-content:center;border:2px solid rgba(59,130,246,0.15);
      transition:all 0.3s ease;
    }
    .icon-card:hover .icon-wrap {
      background:${BLU};transform:scale(1.08);
      box-shadow:0 8px 28px rgba(59,130,246,0.3);
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
    .case-card:hover { box-shadow:0 12px 40px rgba(59,130,246,0.14); }

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
   1. HERO BANNER — "Making Career Transitions happen"
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
        backgroundImage: `url('/career-img1.jpg')`,
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
        backgroundImage: `url('/career-img1.jpg')`,
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
      backgroundImage: `url('/career-img1.jpg')`,
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
            <p style={{color:'rgba(255,255,255,0.9)',fontSize:'13px',fontWeight:'500',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'16px'}}>Career Transitions</p>
            <h1 className="script" style={{fontSize: isMobile ? '28px' : 'clamp(36px, 6vw, 72px)',marginBottom:'20px'}}>
              Making Career Transitions happen
            </h1>
            <p style={{color:'rgba(255,255,255,0.9)',fontSize:'16px',lineHeight:1.75,maxWidth:'600px',marginBottom:'24px',display: isMobile ? 'none' : 'block'}}>
              Navigate your professional journey with confidence through our comprehensive career transition services tailored to your aspirations.
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
              Great careers don't just happen — they are built through deliberate transitions. It takes the right strategy, the right guidance, and a partner who understands your aspirations at every layer. To achieve this, you need to onboard the right career expertise at every stage of your professional journey.
            </p>
            <p className="body-lg" style={{color:TXT,lineHeight:1.9,marginBottom:'18px'}}>
              This is where we come in. We help you formulate your career transition strategy, map your existing skills, identify target opportunities, and optimise your transition path. Every step is accounted for and the right guidance is provided for seamless career progression.
            </p>
            <p className="body-lg" style={{color:TXT,lineHeight:1.9}}>
              The fact that we have been delivering career transition solutions since 2015, at scale, proves that we understand the necessity of expertise and process discipline in a rapidly changing job market. And that is what enables us to offer these services to professionals across the nation as well as the world.
            </p>
          </div>

          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img 
              src="/career.jpeg" 
              alt="Career Transitions"
              style={{
                width: '100%',
                maxWidth: '540px',
                height: 'auto',
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
    'Complete ownership of your entire career transition journey',
    'Single window for career needs across different industries and roles',
    'Fulfilment across different transition types — Industry Switch, Role Change, Return to Work',
    'Optimisation of your transition timeline and success rate',
    'Hassle-free, swift career onboarding and go-live',
    'Diagnosis-led approach — CTDA (Career Transition Assessment, Design and Implementation)',
    'Well defined SLAs and KPIs to measure career progression',
    'Automated job matching for continuous opportunity discovery',
  ]
  return (
    <section className="sec" style={{background:BLU,position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,opacity:0.04,backgroundImage:'radial-gradient(circle,#fff 1px,transparent 1px)',backgroundSize:'20px 20px',pointerEvents:'none'}}/>
      {[0,1].map(i=>(
        <div key={i} style={{position:'absolute',right:`${-80+i*200}px`,top:i===0?'-100px':'40%',width:`${400+i*150}px`,height:`${400+i*150}px`,borderRadius:'50%',border:'1px solid rgba(255,255,255,0.06)',pointerEvents:'none'}}/>
      ))}

      <div className="wrap" style={{position:'relative',zIndex:1}}>
        <div className="grid-2">
          <div>
            <h2 className="h-xl" style={{color:WHITE,fontWeight:'700',lineHeight:1.3,marginBottom:'16px'}}>
              When you let us take care of your{' '}
              <em style={{fontFamily:'Georgia,serif',fontStyle:'italic',color:BLU_L}}>Career Transitions</em>{' '}
              needs, this is what you get
            </h2>
            <p style={{color:'rgba(255,255,255,0.8)',fontSize:'14px',lineHeight:1.75,marginTop:'20px'}}>
              A fully managed career journey from strategy to success — backed by experienced career coaches, proven frameworks, and 24×7 support.
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
  { key:'strategy', title:'CAREER STRATEGY & ASSESSMENT', desc:'Establishing predictable career outcomes with a tailored transition roadmap' },
  { key:'migration', title:'SKILL ASSESSMENT & DEVELOPMENT', desc:'Identifying skill gaps and creating personalised upskilling plans' },
  { key:'security', title:'PROFILE BRANDING & SECURITY', desc:'Ensuring professional brand protection and privacy compliance' },
  { key:'devops', title:'JOB SEARCH AUTOMATION', desc:'Accelerating job search with automated matching and application tracking' },
  { key:'analytics', title:'CAREER ANALYTICS & INSIGHTS', desc:'Widening your career reach through data-driven opportunity discovery' },
  { key:'multi', title:'MULTI-CHANNEL JOB ACCESS', desc:'Delivering unified access across job boards, networks and referrals' },
  { key:'support', title:'MANAGED CAREER OPERATIONS', desc:'24×7 monitoring, interview support and continuous guidance' },
  { key:'finops', title:'CAREER TRANSITION OPTIMISATION', desc:'Enhancing transparency and control over your career investment' },
]

const HolisticService: React.FC = () => (
  <section id="solutions" className="sec" style={{background:BLU_L}}>
    <div className="wrap">
      <p className="h-lg script-dark" style={{fontFamily:'Georgia,serif',fontStyle:'italic',fontWeight:'700',color:BLU,marginBottom:'48px',lineHeight:1.4,maxWidth:'800px'}}>
        Our holistic career service integrates the entire professional journey, bringing together all aspects in a highly efficient and result-oriented manner
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
   5. FLAGSHIP CAREER MODELS - with equal bullet points
══════════════════════════════════════════════════════ */
const models = [
  {
    key:'enterprise',
    title:'Executive Career Transition',
    icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none"><rect x="6" y="14" width="40" height="28" rx="5" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none"/><path d="M16 14V10a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v4" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none"/><line x1="26" y1="22" x2="26" y2="36" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round"/><line x1="19" y1="29" x2="33" y2="29" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round"/></svg>,
    bullets:[
      'Ideal for senior professionals making strategic career moves',
      'High-touch, bespoke transition planning for leadership roles',
      'Managing the complete cycle from assessment to offer negotiation',
      'Dedicated executive coach for governance and strategy alignment',
      'Access to unadvertised executive opportunities',
      'Board and C-suite placement advisory',
      'Stringent focus on confidentiality and discretion',
    ],
  },
  {
    key:'project',
    title:'Mid-Career Transition',
    icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none"><rect x="8" y="6" width="36" height="44" rx="4" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none"/><path d="M16 18h20M16 26h20M16 34h12" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round"/><circle cx="34" cy="40" r="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/><path d="M31 40l2 2 4-4" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    bullets:[
      'Flexible model suited for industry switch or functional change',
      'Suitable to manage career spikes or growth aspirations',
      'Serves as a pilot for evaluating full Career Transition model',
      'Personalised coaching and guidance',
      'Allows professionals to focus on core skill development',
      'Structured timeline with clear milestones',
      'Access to mid-senior level opportunities',
    ],
  },
  {
    key:'resource',
    title:'Return-to-Work Transition',
    icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="20" cy="16" r="8" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none"/><path d="M6 44c0-7.7 6.3-14 14-14" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" fill="none"/><circle cx="38" cy="26" r="6" stroke="rgba(255,255,255,0.9)" strokeWidth="2" fill="none"/><path d="M35 46c0-5.5 2.7-10 7-12" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" fill="none"/><path d="M38 20v-4M38 16l3 3" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    bullets:[
      'Specialised program for professionals returning after career break',
      'Confidence building and skill refreshment support',
      'Flexible engagement options tailored to personal circumstances',
      'Supportive environment for re-entry into workforce',
      'Access to return-to-work focused employers',
      'Gradual transition with customised timeline',
      'Continuous mentorship and guidance',
    ],
  },
]

const FlagshipModels: React.FC = () => (
  <section className="sec" style={{background:BLU,position:'relative',overflow:'hidden'}}>
    <div style={{position:'absolute',inset:0,opacity:0.04,backgroundImage:'radial-gradient(circle,#fff 1px,transparent 1px)',backgroundSize:'20px 20px',pointerEvents:'none'}}/>
    <div className="wrap" style={{position:'relative',zIndex:1}}>
      <h2 className="h-xl" style={{color:WHITE,fontWeight:'700',marginBottom:'48px'}}>
        Our flagship <em style={{fontFamily:'Georgia,serif',fontStyle:'italic',color:BLU_L}}>Career models</em>
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
   6. CAREER PLATFORMS — horizontal logo strip
══════════════════════════════════════════════════════ */
const platforms = [
  {name:'LinkedIn',short:'LinkedIn',color:BLU},
  {name:'Naukri',short:'Naukri',color:BLU},
  {name:'Indeed',short:'Indeed',color:BLU},
  {name:'Monster',short:'Monster',color:BLU},
  {name:'Glassdoor',short:'Glassdoor',color:BLU},
  {name:'Upwork',short:'Upwork',color:BLU},
  {name:'TopResume',short:'TopResume',color:BLU},
  {name:'CareerBuilder',short:'CareerBuilder',color:BLU},
]

const PlatformStrip: React.FC = () => (
  <section className="sec-sm" style={{background:WHITE,borderTop:'1px solid #f0f0f0',borderBottom:'1px solid #f0f0f0'}}>
    <div className="wrap">
      <p style={{textAlign:'center',fontSize:'13px',fontWeight:'600',color:BLU,letterSpacing:'2px',textTransform:'uppercase',marginBottom:'32px'}}>Certified On Leading Career Platforms</p>
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
   7. CASE STUDIES (unchanged - keeping original distinct backgrounds)
══════════════════════════════════════════════════════ */
const cases = [
  {
    tag:'Technology',
    headline:'How a Senior Engineer Transitioned from Automotive to Fintech in 90 Days',
    desc:'Our client, a senior embedded systems engineer, wanted to transition into fintech as a backend developer. We created a structured upskilling and job search plan...',
    color: BLU,
    bgColor: '#e0f2fe',
    image: '/technology.jpg'
  },
  {
    tag:'Return to Work',
    headline:'Successful Return to Workforce for a Professional After 5-Year Career Break',
    desc:'Our client, a marketing professional, returned to the workforce after a 5-year career break to care for family. We provided confidence-building and targeted job search support...',
    color: BLU,
    bgColor: '#f0fdf4',
    image: '/career-img1.jpg'
  },
  {
    tag:'Leadership',
    headline:'Strategic CTO Transition for a High-Growth SaaS Startup',
    desc:'A fast-growing SaaS startup needed to hire a CTO with specific experience in scaling engineering teams. We conducted a targeted executive search and transition support...',
    color: BLU,
    bgColor: '#fef3c7',
    image: '/saas.jpg'
  },
]

const CaseStudies: React.FC = () => (
  <section id="cases" className="sec" style={{background:'#f8fafc'}}>
    <div className="wrap">
      <h2 className="h-xl" style={{color:TXT,fontWeight:'700',marginBottom:'8px'}}>
        <em style={{fontFamily:'Georgia,serif',fontStyle:'italic',color:BLU}}>Case studies</em>
      </h2>
      <p style={{color:GRAY,fontSize:'15px',marginBottom:'40px'}}>Real results from real career transformations</p>
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
    {num:'5,000+',label:'Successful Career Transitions',icon:'🎯'},
    {num:'50+',label:'Industries Supported',icon:'🏭'},
    {num:'92%',label:'Career Satisfaction Rate',icon:'⭐'},
    {num:'100+',label:'Career Coaches',icon:'🧑‍🏫'},
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
    quote:'Data Artisans career transition team provided a structured framework that guided me through a complete industry switch. Their support from skill assessment to job placement was invaluable. The dedicated career coaches worked extensively to understand my aspirations and match me with the right opportunities.',
    role:'Software Engineer',
    org:'Fintech Company',
  },
  {
    quote:'After a 5-year career break, I was nervous about re-entering the workforce. Data Artisans made the transition smooth and confidence-building. The return-to-work program was tailored to my needs and the employer connections were excellent.',
    role:'Marketing Manager',
    org:'Global Consumer Brand',
  },
  {
    quote:'Data Artisans is one of the best career transition partners I have worked with. Their understanding of industry requirements to the last detail is outstanding. The quality of coaching and support is exceptional both for junior and senior professionals.',
    role:'Vikram Singh, CHRO',
    org:'Leading Technology Company',
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
          Explore our <em style={{fontFamily:'Georgia,serif',fontStyle:'italic',color:BLU}}>Career Transitions solutions</em>
        </h2>
        <p style={{textAlign:'center',color:GRAY,fontSize:'15px',marginBottom:'44px'}}>Tell us about your career goals and we'll get back within 24 hours</p>

        {sent ? (
          <div style={{maxWidth:'500px',margin:'0 auto',textAlign:'center',padding:'48px 24px',background:BLU_L,borderRadius:'12px',border:`1px solid ${BLU}22`}}>
            <div style={{width:'64px',height:'64px',borderRadius:'50%',background:'#dcfce7',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px'}}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M7 17l6 6 12-12" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 style={{fontSize:'20px',fontWeight:'700',color:'#16a34a',marginBottom:'8px'}}>Message Sent!</h3>
            <p style={{color:GRAY,fontSize:'14px'}}>Our career experts will reach out to you shortly.</p>
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
              <input className="form-input" placeholder="Company / Current Role" value={form.company} onChange={e=>setForm(p=>({...p,company:e.target.value}))}/>
            </div>
            <textarea className="form-input" rows={5} placeholder="Your career aspirations / Message" value={form.message} onChange={e=>setForm(p=>({...p,message:e.target.value}))} style={{marginBottom:'24px',resize:'vertical'}}/>
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
const CareerTransitions: React.FC = () => (
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

export default CareerTransitions