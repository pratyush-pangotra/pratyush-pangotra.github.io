export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist+Mono:wght@300;400;500;600&family=Geist:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg:      #080a0f;
          --bg2:     #0d1017;
          --bg3:     #131720;
          --panel:   #0f1319;
          --border:  rgba(255,255,255,0.07);
          --border2: rgba(255,255,255,0.12);
          --text:    #f0f4ff;
          --muted:   #5a6475;
          --dim:     #2e3440;
          --blue:    #4f8ef7;
          --green:   #34d899;
          --amber:   #f5a623;
          --purple:  #9b7ff4;
          --red:     #f06060;
          --teal:    #22d3d3;
          --mono:    'Geist Mono', 'SFMono-Regular', Consolas, monospace;
          --serif:   'Instrument Serif', Georgia, serif;
          --sans:    'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        html { scroll-behavior: smooth; background: var(--bg); }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--sans);
          font-weight: 300;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ─── NOISE OVERLAY ─── */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          pointer-events: none;
          z-index: 0;
          opacity: 0.5;
        }

        /* ─── NAV ─── */
        nav {
          position: sticky;
          top: 0;
          z-index: 200;
          background: rgba(8,10,15,0.85);
          backdrop-filter: blur(16px) saturate(1.5);
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          padding: 0 2rem;
          height: 52px;
          gap: 0;
        }

        .nav-logo {
          font-family: var(--serif);
          font-size: 17px;
          font-style: italic;
          color: var(--text);
          letter-spacing: -0.01em;
          margin-right: auto;
          white-space: nowrap;
        }

        .nav-logo em {
          font-style: normal;
          color: var(--blue);
        }

        .nav-links {
          display: flex;
          gap: 0;
          list-style: none;
        }

        .nav-links a {
          font-family: var(--mono);
          font-size: 11px;
          font-weight: 400;
          color: var(--muted);
          text-decoration: none;
          padding: 0 14px;
          height: 52px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid transparent;
          transition: color 0.15s, border-color 0.15s;
          letter-spacing: 0.04em;
        }

        .nav-links a:hover { color: var(--text); }
        .nav-links a.active { color: var(--blue); border-bottom-color: var(--blue); }

        /* ─── HERO ─── */
        #about {
          position: relative;
          min-height: 92vh;
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 4rem;
          align-items: center;
          padding: 5rem 2rem 4rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .hero-glow {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(79,142,247,0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-left { position: relative; z-index: 1; }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: var(--mono);
          font-size: 11px;
          color: var(--green);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }

        .hero-tag::before {
          content: '';
          width: 20px;
          height: 1px;
          background: var(--green);
          display: block;
        }

        .hero-name {
          font-family: var(--serif);
          font-size: clamp(44px, 6vw, 72px);
          font-weight: 400;
          line-height: 1.0;
          letter-spacing: -0.03em;
          color: var(--text);
          margin-bottom: 0.2em;
        }

        .hero-name .line2 {
          font-style: italic;
          color: rgba(240,244,255,0.45);
        }

        .hero-stack {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--muted);
          margin-top: 1.25rem;
          margin-bottom: 1.5rem;
          letter-spacing: 0.02em;
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .stack-sep { color: var(--dim); }

        .hero-desc {
          font-size: 16px;
          font-weight: 300;
          color: rgba(240,244,255,0.6);
          line-height: 1.85;
          max-width: 520px;
        }

        .hero-desc strong {
          font-weight: 500;
          color: var(--text);
        }

        .hero-cta {
          display: flex;
          gap: 10px;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .btn {
          font-family: var(--mono);
          font-size: 12px;
          font-weight: 500;
          padding: 9px 20px;
          border-radius: 6px;
          border: 1px solid;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          letter-spacing: 0.02em;
          transition: all 0.15s;
        }

        .btn-primary {
          background: var(--blue);
          color: var(--bg);
          border-color: var(--blue);
        }

        .btn-primary:hover {
          background: #6ba3f9;
          border-color: #6ba3f9;
        }

        .btn-ghost {
          background: transparent;
          color: rgba(240,244,255,0.7);
          border-color: var(--border2);
        }

        .btn-ghost:hover {
          border-color: var(--muted);
          color: var(--text);
          background: rgba(255,255,255,0.03);
        }

        /* ─── HERO RIGHT PANEL ─── */
        .hero-panel {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .panel-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1rem 1.25rem;
        }

        .panel-card-label {
          font-family: var(--mono);
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--muted);
          margin-bottom: 5px;
        }

        .panel-card-value {
          font-family: var(--mono);
          font-size: 22px;
          font-weight: 500;
          color: var(--blue);
          letter-spacing: -0.02em;
        }

        .panel-card-sub {
          font-family: var(--mono);
          font-size: 10px;
          color: var(--muted);
          margin-top: 2px;
        }

        .live-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--green);
          margin-right: 6px;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        /* ─── DIVIDER ─── */
        .full-divider {
          border: none;
          border-top: 1px solid var(--border);
          margin: 0;
        }

        /* ─── STATS BAR ─── */
        .stats-bar {
          background: var(--panel);
          border-bottom: 1px solid var(--border);
          display: flex;
          overflow-x: auto;
        }

        .stat {
          padding: 1.25rem 2.5rem;
          border-right: 1px solid var(--border);
          flex-shrink: 0;
        }

        .stat:last-child { border-right: none; }

        .stat-num {
          font-family: var(--serif);
          font-size: 26px;
          font-style: italic;
          color: var(--text);
          letter-spacing: -0.02em;
        }

        .stat-lbl {
          font-family: var(--mono);
          font-size: 10px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 3px;
        }

        /* ─── SECTIONS ─── */
        section {
          padding: 4rem 2rem;
          max-width: 1000px;
          margin: 0 auto;
          border-bottom: 1px solid var(--border);
          position: relative;
          z-index: 1;
        }

        .sec-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 2.5rem;
        }

        .sec-index {
          font-family: var(--mono);
          font-size: 10px;
          color: var(--dim);
          letter-spacing: 0.06em;
          min-width: 24px;
        }

        .sec-title {
          font-family: var(--serif);
          font-size: 28px;
          font-style: italic;
          font-weight: 400;
          color: var(--text);
          letter-spacing: -0.02em;
        }

        .sec-line {
          flex: 1;
          height: 1px;
          background: var(--border);
        }

        /* ─── EDUCATION TIMELINE ─── */
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-left: 1px solid var(--border2);
          margin-left: 8px;
          padding-left: 2rem;
        }

        .tl-item {
          position: relative;
          padding-bottom: 2.5rem;
        }

        .tl-item:last-child { padding-bottom: 0; }

        .tl-dot {
          position: absolute;
          left: -2.35rem;
          top: 6px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--bg);
          border: 2px solid var(--blue);
        }

        .tl-dot.green { border-color: var(--green); }
        .tl-dot.purple { border-color: var(--purple); }

        .tl-year {
          font-family: var(--mono);
          font-size: 10px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }

        .tl-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1.25rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
          flex-wrap: wrap;
          transition: border-color 0.15s;
        }

        .tl-card:hover { border-color: var(--border2); }

        .tl-name {
          font-size: 15px;
          font-weight: 500;
          color: var(--text);
          margin-bottom: 4px;
        }

        .tl-sub {
          font-family: var(--mono);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.02em;
        }

        .tl-score {
          font-family: var(--serif);
          font-size: 32px;
          font-style: italic;
          color: var(--green);
          letter-spacing: -0.02em;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .tl-score.blue { color: var(--blue); }
        .tl-score.purple { color: var(--purple); }

        /* ─── PROJECTS ─── */
        .proj-featured {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
          margin-bottom: 16px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.15s;
        }

        .proj-featured::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--green), var(--blue), transparent);
        }

        .proj-featured:hover { border-color: var(--border2); }

        .proj-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .proj-badge {
          font-family: var(--mono);
          font-size: 10px;
          font-weight: 500;
          padding: 3px 9px;
          border-radius: 999px;
          border: 1px solid;
          letter-spacing: 0.04em;
        }

        .pb-green { color: var(--green); border-color: rgba(52,216,153,0.25); background: rgba(52,216,153,0.06); }
        .pb-blue  { color: var(--blue);  border-color: rgba(79,142,247,0.25); background: rgba(79,142,247,0.06); }
        .pb-amber { color: var(--amber); border-color: rgba(245,166,35,0.25);  background: rgba(245,166,35,0.06); }
        .pb-purple{ color: var(--purple);border-color: rgba(155,127,244,0.25);background: rgba(155,127,244,0.06); }
        .pb-teal  { color: var(--teal);  border-color: rgba(34,211,211,0.25);  background: rgba(34,211,211,0.06); }
        .pb-red   { color: var(--red);   border-color: rgba(240,96,96,0.25);   background: rgba(240,96,96,0.06); }
        .pb-gray  { color: var(--muted); border-color: var(--border2);          background: rgba(255,255,255,0.02); }

        .proj-title {
          font-family: var(--serif);
          font-size: 24px;
          font-style: italic;
          font-weight: 400;
          color: var(--text);
          letter-spacing: -0.02em;
          margin-bottom: 0.75rem;
        }

        .proj-desc {
          font-size: 14px;
          font-weight: 300;
          color: rgba(240,244,255,0.55);
          line-height: 1.8;
          max-width: 620px;
        }

        .proj-desc strong {
          font-weight: 500;
          color: rgba(240,244,255,0.8);
        }

        .proj-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 1.25rem;
        }

        .proj-link {
          font-family: var(--mono);
          font-size: 11px;
          color: var(--blue);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 1.25rem;
          opacity: 0.8;
          transition: opacity 0.15s;
          letter-spacing: 0.02em;
        }

        .proj-link:hover { opacity: 1; }

        .proj-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .proj-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1.5rem;
          transition: border-color 0.15s;
        }

        .proj-card:hover { border-color: var(--border2); }

        .proj-card-name {
          font-size: 14px;
          font-weight: 500;
          color: var(--text);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .proj-card-desc {
          font-size: 12px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.7;
        }

        /* ─── TERMINAL ─── */
        .terminal {
          background: #060810;
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 0;
          overflow: hidden;
          margin-top: 1.5rem;
        }

        .term-bar {
          background: var(--panel);
          border-bottom: 1px solid var(--border);
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .term-dot { width: 11px; height: 11px; border-radius: 50%; }
        .term-dot-r { background: #f06060; }
        .term-dot-y { background: #e0a94b; }
        .term-dot-g { background: var(--green); }

        .term-title {
          font-family: var(--mono);
          font-size: 11px;
          color: var(--muted);
          margin-left: 6px;
          letter-spacing: 0.04em;
        }

        .term-body {
          padding: 1.25rem 1.5rem;
          font-family: var(--mono);
          font-size: 12px;
          line-height: 2;
        }

        .t-prompt { color: var(--green); }
        .t-cmd { color: var(--blue); }
        .t-string { color: var(--amber); }
        .t-comment { color: var(--muted); }
        .t-out { color: rgba(240,244,255,0.4); padding-left: 14px; }
        .t-out a { color: var(--blue); text-decoration: none; }
        .t-out a:hover { text-decoration: underline; }
        .t-cursor { display: inline-block; width: 9px; height: 13px; background: var(--blue); vertical-align: middle; animation: blink 1s step-end infinite; }
        @keyframes blink { 50% { opacity: 0; } }

        /* ─── SKILLS ─── */
        .skill-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .skill-group { }

        .skill-group-label {
          font-family: var(--mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--muted);
          margin-bottom: 1rem;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border);
        }

        .skill-row {
          display: flex;
          align-items: center;
          gap: 0;
          padding: 9px 0;
          border-bottom: 1px solid rgba(255,255,255,0.03);
        }

        .skill-row:last-child { border-bottom: none; }

        .skill-name {
          font-family: var(--mono);
          font-size: 12px;
          color: rgba(240,244,255,0.75);
          flex: 1;
          font-weight: 400;
        }

        .skill-bar-wrap {
          width: 80px;
          height: 2px;
          background: var(--border);
          border-radius: 1px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 1px;
        }

        /* ─── CONTACT ─── */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .contact-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1.25rem 1.5rem;
          display: flex;
          gap: 14px;
          align-items: center;
          text-decoration: none;
          transition: border-color 0.15s;
        }

        .contact-card:hover { border-color: var(--border2); }

        .contact-icon {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--mono);
          font-size: 14px;
          flex-shrink: 0;
          border: 1px solid var(--border);
        }

        .contact-type {
          font-family: var(--mono);
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--muted);
          margin-bottom: 4px;
        }

        .contact-val {
          font-family: var(--mono);
          font-size: 12px;
          color: rgba(240,244,255,0.8);
          word-break: break-all;
        }

        /* ─── FOOTER ─── */
        footer {
          border-top: 1px solid var(--border);
          padding: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .footer-sig {
          font-family: var(--serif);
          font-size: 15px;
          font-style: italic;
          color: rgba(240,244,255,0.3);
        }

        .footer-meta {
          font-family: var(--mono);
          font-size: 10px;
          color: var(--muted);
          letter-spacing: 0.04em;
        }

        .footer-meta a {
          color: var(--blue);
          text-decoration: none;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 720px) {
          #about { grid-template-columns: 1fr; min-height: auto; padding-top: 3rem; }
          .hero-panel { display: none; }
          .skill-section { grid-template-columns: 1fr; }
          .proj-grid { grid-template-columns: 1fr; }
          .contact-grid { grid-template-columns: 1fr; }
          .nav-links { display: none; }
          footer { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="nav-logo">Pratyush <em>Pangotra</em></div>
        <ul className="nav-links">
          <li><a href="#about" className="active">about</a></li>
          <li><a href="#education">education</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <div id="about">
        <div className="hero-glow"></div>
        <div className="hero-left">
          <div className="hero-tag">
            <span className="live-dot"></span>
            Available · Jammu, India
          </div>
          <div className="hero-name">
            Pratyush<br />
            <span className="line2">Pangotra.</span>
          </div>
          <div className="hero-stack">
            <span style={{color:'var(--blue)'}}>ECE</span>
            <span className="stack-sep">/</span>
            <span>IoT Builder</span>
            <span className="stack-sep">/</span>
            <span>IEEE Researcher</span>
            <span className="stack-sep">/</span>
            <span>Startup Co-founder</span>
          </div>
          <p className="hero-desc">
            First-year B.Tech ECE at <strong>MIET Jammu</strong>, building systems that work in the real world — not just on paper.
            Creator of <strong>ForestGuard</strong>, an ESP32-based wildfire detection network that competed at <strong>YESIST12</strong>.
            Co-founded a B2B web startup. Writing code, soldering circuits, and closing clients — all before sophomore year.
          </p>
          <div className="hero-cta">
            <a href="https://github.com/pratyush-pangotra" target="_blank" className="btn btn-primary">
              ⌥ GitHub
            </a>
            <a href="mailto:pratyushpangotra74@gmail.com" className="btn btn-ghost">
              ✉ Email me
            </a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="panel-card">
            <div className="panel-card-label">status</div>
            <div style={{fontFamily:'var(--mono)',fontSize:'13px',color:'var(--green)',display:'flex',alignItems:'center',gap:'6px'}}>
              <span className="live-dot"></span>open to opportunities
            </div>
          </div>
          <div className="panel-card">
            <div className="panel-card-label">CBSE Class X</div>
            <div className="panel-card-value">87.4<span style={{fontSize:'14px',color:'var(--muted)'}}>%</span></div>
          </div>
          <div className="panel-card">
            <div className="panel-card-label">CBSE Class XII</div>
            <div className="panel-card-value" style={{color:'var(--purple)'}}>82<span style={{fontSize:'14px',color:'var(--muted)'}}>%</span></div>
          </div>
          <div className="panel-card">
            <div className="panel-card-label">current degree</div>
            <div className="panel-card-value" style={{fontSize:'15px',fontFamily:'var(--mono)',fontWeight:400,letterSpacing:0}}>B.Tech ECE</div>
            <div className="panel-card-sub">Semester II</div>
          </div>
          <div className="panel-card">
            <div className="panel-card-label">competition</div>
            <div style={{fontFamily:'var(--mono)',fontSize:'13px',color:'var(--amber)',fontWeight:500}}>YESIST12</div>
            <div className="panel-card-sub">ForestGuard · Team Lead</div>
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stat"><div className="stat-num">87.4%</div><div className="stat-lbl">CBSE X</div></div>
        <div className="stat"><div className="stat-num">82%</div><div className="stat-lbl">CBSE XII</div></div>
        <div className="stat"><div className="stat-num">1+</div><div className="stat-lbl">IEEE Projects</div></div>
        <div className="stat"><div className="stat-num">2</div><div className="stat-lbl">Startups Founded</div></div>
        <div className="stat"><div className="stat-num">Y1</div><div className="stat-lbl">B.Tech ECE</div></div>
      </div>

      {/* EDUCATION */}
      <section id="education">
        <div className="sec-header">
          <span className="sec-index">01</span>
          <span className="sec-title">Education</span>
          <div className="sec-line"></div>
        </div>
        <div className="timeline">
          <div className="tl-item">
            <div className="tl-dot blue"></div>
            <div className="tl-year">2025 – Present</div>
            <div className="tl-card">
              <div>
                <div className="tl-name">B.Tech — Electronics & Communication Engineering</div>
                <div className="tl-sub">MIET (Autonomous), Jammu &nbsp;·&nbsp; Roll No. 2025A3R005</div>
                <div style={{marginTop:'10px',display:'flex',gap:'6px',flexWrap:'wrap'}}>
                  <span className="proj-badge pb-blue">Semester II</span>
                  <span className="proj-badge pb-green">IoT Specialization</span>
                </div>
              </div>
              <div className="tl-score blue">Active</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-dot purple"></div>
            <div className="tl-year">Class XII · CBSE Board</div>
            <div className="tl-card">
              <div>
                <div className="tl-name">Senior Secondary — Science Stream</div>
                <div className="tl-sub">Central Board of Secondary Education</div>
              </div>
              <div className="tl-score purple">82%</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-dot green"></div>
            <div className="tl-year">Class X · CBSE Board</div>
            <div className="tl-card">
              <div>
                <div className="tl-name">Secondary School Certificate</div>
                <div className="tl-sub">Central Board of Secondary Education</div>
              </div>
              <div className="tl-score">87.4%</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="sec-header">
          <span className="sec-index">02</span>
          <span className="sec-title">Projects</span>
          <div className="sec-line"></div>
        </div>

        {/* Featured */}
        <div className="proj-featured">
          <div className="proj-eyebrow">
            <span className="proj-badge pb-green">★ Featured</span>
            <span className="proj-badge pb-amber">YESIST12 · 2025</span>
            <span className="proj-badge pb-blue">ESP32</span>
            <span className="proj-badge pb-gray">Team Lead</span>
          </div>
          <div className="proj-title">ForestGuard — IoT Wildfire Detection System</div>
          <p className="proj-desc">
            Designed and built a <strong>real-time forest fire detection network</strong> using ESP32 microcontrollers,
            DHT22 temperature sensors, and MQ-135 air quality modules. The system detects fire signatures through
            multi-sensor fusion and fires <strong>Telegram bot alerts in Hinglish</strong> with auto-normalisation —
            built to be usable by actual forest rangers without technical training.
            Tested with incense smoke. Competed at <strong>YESIST12 prelims</strong> (April 2025) as team lead of Team Pratham.
            Aligned with <strong>UN SDG 15</strong>.
          </p>
          <div className="proj-tags">
            <span className="proj-badge pb-blue">Embedded C</span>
            <span className="proj-badge pb-teal">DHT22 / MQ-135</span>
            <span className="proj-badge pb-green">Telegram Bot API</span>
            <span className="proj-badge pb-amber">Multi-Sensor Fusion</span>
            <span className="proj-badge pb-purple">SDG-15</span>
          </div>
          <a className="proj-link" href="https://github.com/pratyush-pangotra" target="_blank">
            ↗ View on GitHub
          </a>
        </div>

        {/* Grid */}
        <div className="proj-grid">
          <div className="proj-card">
            <div className="proj-card-name">
              ESP32-S3 Macropad
              <span className="proj-badge pb-purple" style={{fontSize:'9px'}}>Hardware</span>
            </div>
            <p className="proj-card-desc">
              Custom productivity macropad — ESP32-S3 N16R8 (16MB Flash, 8MB OPI PSRAM) with SSD1306 OLED.
              4 programmable keys for VS Code, Claude, YouTube, Terminal. StreamDeck-level functionality, ₹0 subscription.
            </p>
            <div style={{display:'flex',gap:'5px',flexWrap:'wrap',marginTop:'10px'}}>
              <span className="proj-badge pb-purple" style={{fontSize:'9px'}}>ESP32-S3</span>
              <span className="proj-badge pb-blue" style={{fontSize:'9px'}}>OLED</span>
              <span className="proj-badge pb-gray" style={{fontSize:'9px'}}>HID</span>
            </div>
          </div>
          <div className="proj-card">
            <div className="proj-card-name">
              B2B Web Startup
              <span className="proj-badge pb-amber" style={{fontSize:'9px'}}>Prototype</span>
            </div>
            <p className="proj-card-desc">
              Co-founded an early-stage B2B web application startup in first year of college.
              Leading client acquisition and sales operations. Building toward a SaaS model targeting Indian SMEs.
            </p>
            <div style={{display:'flex',gap:'5px',flexWrap:'wrap',marginTop:'10px'}}>
              <span className="proj-badge pb-amber" style={{fontSize:'9px'}}>B2B SaaS</span>
              <span className="proj-badge pb-green" style={{fontSize:'9px'}}>Sales</span>
              <span className="proj-badge pb-gray" style={{fontSize:'9px'}}>Web App</span>
            </div>
          </div>
        </div>

        <div className="terminal">
          <div className="term-bar">
            <div className="term-dot term-dot-r"></div>
            <div className="term-dot term-dot-y"></div>
            <div className="term-dot term-dot-g"></div>
            <span className="term-title">bash — pratyush@portfolio</span>
          </div>
          <div className="term-body">
            <div><span className="t-prompt">~</span> <span className="t-cmd">git</span> log --oneline --graph</div>
            <div className="t-out">* ForestGuard — YESIST12 prelims competed</div>
            <div className="t-out">* ESP32-S3 macropad firmware v0.3</div>
            <div className="t-out">* B2B startup — first client outreach</div>
            <div><span className="t-prompt">~</span> <span className="t-cmd">open</span> <span className="t-string">"github.com/pratyush-pangotra"</span></div>
            <div className="t-out">→ <a href="https://github.com/pratyush-pangotra" target="_blank">github.com/pratyush-pangotra</a></div>
            <div><span className="t-prompt">~</span> <span className="t-cursor"></span></div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="sec-header">
          <span className="sec-index">03</span>
          <span className="sec-title">Skills</span>
          <div className="sec-line"></div>
        </div>
        <div className="skill-section">
          <div className="skill-group">
            <div className="skill-group-label">Hardware & Embedded</div>
            {[
              { name: 'ESP32 / ESP32-S3',  w: '88%', c: 'var(--blue)'   },
              { name: 'Embedded C',        w: '82%', c: 'var(--blue)'   },
              { name: 'Arduino / PIO',     w: '85%', c: 'var(--blue)'   },
              { name: 'Circuit Analysis',  w: '78%', c: 'var(--teal)'   },
              { name: 'Sensor Fusion',     w: '80%', c: 'var(--blue)'   },
              { name: 'I2C / UART / SPI',  w: '72%', c: 'var(--teal)'   },
            ].map(s => (
              <div className="skill-row" key={s.name}>
                <span className="skill-name">{s.name}</span>
                <div className="skill-bar-wrap">
                  <div className="skill-bar-fill" style={{width:s.w,background:s.c}}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="skill-group">
            <div className="skill-group-label">Software & Data</div>
            {[
              { name: 'Python',           w: '78%', c: 'var(--green)'  },
              { name: 'Pandas / NumPy',   w: '74%', c: 'var(--green)'  },
              { name: 'SQL',              w: '68%', c: 'var(--amber)'  },
              { name: 'Telegram Bot API', w: '76%', c: 'var(--purple)' },
              { name: 'Git / GitHub',     w: '80%', c: 'var(--purple)' },
              { name: 'C / C++',          w: '70%', c: 'var(--amber)'  },
            ].map(s => (
              <div className="skill-row" key={s.name}>
                <span className="skill-name">{s.name}</span>
                <div className="skill-bar-wrap">
                  <div className="skill-bar-fill" style={{width:s.w,background:s.c}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="sec-header">
          <span className="sec-index">04</span>
          <span className="sec-title">Contact</span>
          <div className="sec-line"></div>
        </div>
        <p style={{fontFamily:'var(--mono)',fontSize:'12px',color:'var(--muted)',marginBottom:'1.5rem',letterSpacing:'0.02em'}}>
          {'// open to internships, research collabs, and project partnerships'}
        </p>
        <div className="contact-grid">
          <a className="contact-card" href="mailto:pratyushpangotra74@gmail.com">
            <div className="contact-icon" style={{background:'rgba(79,142,247,0.08)',color:'var(--blue)'}}>@</div>
            <div>
              <div className="contact-type">email</div>
              <div className="contact-val">pratyushpangotra74@gmail.com</div>
            </div>
          </a>
          <a className="contact-card" href="https://github.com/pratyush-pangotra" target="_blank">
            <div className="contact-icon" style={{background:'rgba(52,216,153,0.08)',color:'var(--green)',fontFamily:'var(--mono)'}}>⌥</div>
            <div>
              <div className="contact-type">github</div>
              <div className="contact-val">github.com/pratyush-pangotra</div>
            </div>
          </a>
          <div className="contact-card" style={{cursor:'default'}}>
            <div className="contact-icon" style={{background:'rgba(155,127,244,0.08)',color:'var(--purple)'}}>✦</div>
            <div>
              <div className="contact-type">degree</div>
              <div className="contact-val">B.Tech ECE · MIET Jammu</div>
            </div>
          </div>
          <div className="contact-card" style={{cursor:'default'}}>
            <div className="contact-icon" style={{background:'rgba(245,166,35,0.08)',color:'var(--amber)'}}>◎</div>
            <div>
              <div className="contact-type">location</div>
              <div className="contact-val">Jammu & Kashmir, India</div>
            </div>
          </div>
        </div>

        <div className="terminal" style={{marginTop:'2rem'}}>
          <div className="term-bar">
            <div className="term-dot term-dot-r"></div>
            <div className="term-dot term-dot-y"></div>
            <div className="term-dot term-dot-g"></div>
            <span className="term-title">bash — contact.sh</span>
          </div>
          <div className="term-body">
            <div><span className="t-prompt">$</span> <span className="t-cmd">echo</span> <span className="t-string">"Open to internships and research collaborations"</span></div>
            <div className="t-out">Open to internships and research collaborations</div>
            <div><span className="t-prompt">$</span> <span className="t-cmd">mail</span> pratyushpangotra74@gmail.com <span className="t-comment"># — let's build something</span></div>
            <div><span className="t-prompt">$</span> <span className="t-cursor"></span></div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-sig">Pratyush Pangotra</div>
        <div className="footer-meta">
          B.Tech ECE · Roll 2025A3R005 · &nbsp;
          <a href="https://github.com/pratyush-pangotra" target="_blank">github.com/pratyush-pangotra</a>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          const links = document.querySelectorAll('nav a');
          const sections = ['about','education','projects','skills','contact'];
          function setActive() {
            let cur = 'about';
            sections.forEach(id => {
              const el = document.getElementById(id);
              if (el && window.scrollY >= el.offsetTop - 100) cur = id;
            });
            links.forEach(a => {
              a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
            });
          }
          window.addEventListener('scroll', setActive, { passive: true });
          links.forEach(a => {
            a.addEventListener('click', e => {
              e.preventDefault();
              const id = a.getAttribute('href').slice(1);
              const el = document.getElementById(id);
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
          });
        })();
      `}} />
    </>
  );
}
