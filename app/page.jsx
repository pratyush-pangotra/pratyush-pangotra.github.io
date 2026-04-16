export default function Home() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #0d1117;
          --bg2: #161b22;
          --bg3: #21262d;
          --border: #30363d;
          --text: #e6edf3;
          --muted: #8b949e;
          --blue: #58a6ff;
          --green: #3fb950;
          --purple: #a371f7;
          --amber: #d29922;
          --teal: #2ea043;
          --red: #f85149;
          --mono: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
          --sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
        }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--text); font-family: var(--sans); min-height: 100vh; }

        nav { position: sticky; top: 0; z-index: 100; background: rgba(13,17,23,0.95); border-bottom: 1px solid var(--border); backdrop-filter: blur(8px); display: flex; align-items: center; gap: 0; padding: 0 1.5rem; overflow-x: auto; }
        nav .logo { font-family: var(--mono); font-size: 13px; color: var(--blue); padding: 14px 0; margin-right: 1.5rem; white-space: nowrap; flex-shrink: 0; }
        nav a { font-family: var(--mono); font-size: 12px; color: var(--muted); text-decoration: none; padding: 14px 12px; border-bottom: 2px solid transparent; transition: all 0.15s; white-space: nowrap; }
        nav a:hover { color: var(--text); }
        nav a.active { color: var(--blue); border-bottom-color: var(--blue); }

        .hero { padding: 4rem 2rem 3rem; max-width: 860px; margin: 0 auto; }
        .hero-prefix { font-family: var(--mono); font-size: 12px; color: var(--green); letter-spacing: 2px; margin-bottom: 0.75rem; }
        .hero-name { font-family: var(--mono); font-size: clamp(32px, 6vw, 52px); font-weight: 600; line-height: 1.1; color: var(--text); }
        .hero-name .dot { color: var(--blue); }
        .hero-subtitle { font-family: var(--mono); font-size: clamp(14px, 2vw, 18px); color: var(--muted); margin-top: 0.5rem; }
        .cursor { animation: blink 1s step-end infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .hero-desc { max-width: 580px; margin-top: 1.5rem; font-size: 15px; color: var(--muted); line-height: 1.8; }
        .hero-badges { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 1.25rem; }
        .badge { font-family: var(--mono); font-size: 11px; font-weight: 500; padding: 3px 10px; border-radius: 999px; border: 1px solid; }
        .bd-blue { color: var(--blue); border-color: rgba(88,166,255,0.3); background: rgba(88,166,255,0.08); }
        .bd-green { color: var(--green); border-color: rgba(63,185,80,0.3); background: rgba(63,185,80,0.08); }
        .bd-purple { color: var(--purple); border-color: rgba(163,113,247,0.3); background: rgba(163,113,247,0.08); }
        .bd-amber { color: var(--amber); border-color: rgba(210,153,34,0.3); background: rgba(210,153,34,0.08); }
        .bd-teal { color: #2dd4bf; border-color: rgba(45,212,191,0.3); background: rgba(45,212,191,0.08); }
        .hero-cta { display: flex; gap: 10px; margin-top: 1.75rem; flex-wrap: wrap; }
        .btn { font-family: var(--mono); font-size: 12px; padding: 8px 18px; border-radius: 6px; border: 1px solid; text-decoration: none; transition: all 0.15s; display: inline-flex; align-items: center; gap: 6px; }
        .btn-primary { background: var(--blue); color: var(--bg); border-color: var(--blue); font-weight: 600; }
        .btn-primary:hover { opacity: 0.85; }
        .btn-secondary { background: transparent; color: var(--text); border-color: var(--border); }
        .btn-secondary:hover { border-color: var(--muted); background: var(--bg3); }

        .stats-bar { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: var(--bg2); display: flex; overflow-x: auto; }
        .stat { padding: 1.25rem 2rem; border-right: 1px solid var(--border); flex-shrink: 0; }
        .stat:last-child { border-right: none; }
        .stat-num { font-family: var(--mono); font-size: 22px; font-weight: 600; color: var(--blue); }
        .stat-lbl { font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; margin-top: 2px; font-family: var(--mono); }

        section { padding: 3.5rem 2rem; max-width: 860px; margin: 0 auto; }
        .sec-header { display: flex; align-items: center; gap: 12px; margin-bottom: 2rem; }
        .sec-label { font-family: var(--mono); font-size: 11px; color: var(--blue); letter-spacing: 3px; text-transform: uppercase; }
        .sec-label::before { content: '// '; }
        .sec-line { flex: 1; height: 1px; background: var(--border); }

        .card { background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; padding: 1.25rem 1.5rem; margin-bottom: 12px; transition: border-color 0.15s; }
        .card:hover { border-color: rgba(88,166,255,0.4); }
        .card-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px; }

        .proj-card { background: var(--bg2); border: 1px solid var(--border); border-left: 3px solid var(--blue); border-radius: 0 10px 10px 0; padding: 1.25rem 1.5rem; margin-bottom: 12px; transition: border-color 0.15s; }
        .proj-card:hover { border-color: rgba(88,166,255,0.4); border-left-color: var(--blue); }
        .proj-card.featured { border-left-color: var(--green); }
        .proj-card.featured:hover { border-left-color: var(--green); }
        .proj-title { font-family: var(--mono); font-size: 15px; font-weight: 600; color: var(--text); display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .proj-desc { font-size: 13px; color: var(--muted); margin-top: 8px; line-height: 1.7; }
        .proj-link { font-family: var(--mono); font-size: 11px; color: var(--blue); text-decoration: none; display: inline-flex; align-items: center; gap: 4px; margin-top: 10px; transition: opacity 0.15s; }
        .proj-link:hover { opacity: 0.7; }

        .skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
        .skill-box { background: var(--bg2); border: 1px solid var(--border); border-radius: 8px; padding: 12px 14px; transition: border-color 0.15s; }
        .skill-box:hover { border-color: rgba(88,166,255,0.4); }
        .skill-name { font-family: var(--mono); font-size: 12px; font-weight: 500; color: var(--text); }
        .skill-cat { font-size: 10px; color: var(--muted); margin-top: 2px; text-transform: uppercase; letter-spacing: 1px; }
        .skill-bar { height: 2px; background: var(--bg3); border-radius: 1px; margin-top: 10px; overflow: hidden; }
        .skill-fill { height: 100%; border-radius: 1px; }

        .terminal { background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; padding: 1rem 1.25rem; font-family: var(--mono); font-size: 12px; margin-top: 1.5rem; }
        .terminal-header { display: flex; gap: 6px; margin-bottom: 12px; }
        .dot-r { width: 10px; height: 10px; border-radius: 50%; background: #f85149; }
        .dot-y { width: 10px; height: 10px; border-radius: 50%; background: #d29922; }
        .dot-g { width: 10px; height: 10px; border-radius: 50%; background: #3fb950; }
        .t-line { padding: 2px 0; }
        .t-prompt { color: var(--green); }
        .t-cmd { color: var(--blue); }
        .t-out { color: var(--muted); padding-left: 16px; }
        .t-out a { color: var(--blue); text-decoration: none; }
        .t-out a:hover { text-decoration: underline; }

        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media(max-width:520px) { .contact-grid { grid-template-columns: 1fr; } }
        .contact-card { background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; padding: 1.25rem 1.5rem; display: flex; gap: 12px; align-items: center; transition: border-color 0.15s; text-decoration: none; }
        .contact-card:hover { border-color: rgba(88,166,255,0.4); }
        .contact-icon { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
        .contact-info .lbl { font-size: 10px; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; font-family: var(--mono); }
        .contact-info .val { font-size: 13px; color: var(--text); margin-top: 2px; font-family: var(--mono); word-break: break-all; }

        footer { border-top: 1px solid var(--border); text-align: center; padding: 2rem; font-family: var(--mono); font-size: 11px; color: var(--muted); }
        footer span { color: var(--blue); }

        .timeline { position: relative; padding-left: 1.5rem; }
        .timeline::before { content: ''; position: absolute; left: 5px; top: 0; bottom: 0; width: 1px; background: var(--border); }
        .tl-item { position: relative; margin-bottom: 1.5rem; }
        .tl-dot { position: absolute; left: -1.5rem; top: 5px; width: 10px; height: 10px; border-radius: 50%; background: var(--blue); border: 2px solid var(--bg); box-shadow: 0 0 0 2px var(--blue); }
        .tl-content { background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; padding: 1rem 1.25rem; }
        .tl-title { font-family: var(--mono); font-size: 14px; font-weight: 600; color: var(--text); }
        .tl-sub { font-size: 12px; color: var(--muted); margin-top: 3px; }
        .tl-score { font-family: var(--mono); font-size: 18px; font-weight: 600; color: var(--green); margin-top: 6px; }

        @media(max-width:600px) { section, .hero { padding-left: 1rem; padding-right: 1rem; } }
      `}</style>

      <nav>
        <div className="logo">&gt; pratyush.pangotra</div>
        <a href="#about" className="active">about</a>
        <a href="#education">education</a>
        <a href="#projects">projects</a>
        <a href="#skills">skills</a>
        <a href="#contact">contact</a>
      </nav>

      {/* HERO */}
      <div className="hero" id="about">
        <div className="hero-prefix">// hello, world</div>
        <div className="hero-name">Pratyush<span className="dot">.</span>Pangotra<span className="cursor">_</span></div>
        <div className="hero-subtitle">ECE Engineer &nbsp;·&nbsp; Full-Stack Dev &nbsp;·&nbsp; IEEE Researcher</div>
        <p className="hero-desc">
          B.Tech ECE undergraduate who builds things end-to-end — from sensor-level embedded firmware to web applications.
          Creator of <strong style={{color:'var(--green)'}}>Forest Guard</strong>, an IEEE forest fire detection system.
          Passionate about IoT, data analysis, and shipping real products.
        </p>
        <div className="hero-badges">
          <span className="badge bd-green">Python</span>
          <span className="badge bd-amber">Embedded C</span>
          <span className="badge bd-teal">IoT Systems</span>
          <span className="badge bd-green">Data Analysis</span>
          <span className="badge bd-purple">Sensor Fusion</span>
          <span className="badge bd-blue">Git / GitHub</span>
        </div>
        <div className="hero-cta">
          <a href="https://github.com/pratyush-pangotra" target="_blank" className="btn btn-primary">&#60;/&#62; GitHub</a>
          <a href="mailto:pratyushpangotra74@gmail.com" className="btn btn-secondary">✉ Contact Me</a>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stat"><div className="stat-num">87.4%</div><div className="stat-lbl">CBSE Class X</div></div>
        <div className="stat"><div className="stat-num">82%</div><div className="stat-lbl">CBSE Class XII</div></div>
        <div className="stat"><div className="stat-num">1</div><div className="stat-lbl">IEEE Project</div></div>
        <div className="stat"><div className="stat-num">B.Tech</div><div className="stat-lbl">ECE · Ongoing</div></div>
      </div>

      {/* EDUCATION */}
      <section id="education">
        <div className="sec-header">
          <span className="sec-label">education</span>
          <div className="sec-line"></div>
        </div>
        <div className="timeline">
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-content">
              <div className="tl-title">B.Tech — Electronics &amp; Communication Engineering</div>
              <div className="tl-sub">Currently pursuing · Full-Stack specialization in progress</div>
              <div className="tl-score" style={{color:'var(--blue)'}}>Ongoing</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-dot" style={{background:'var(--purple)',boxShadow:'0 0 0 2px var(--purple)'}}></div>
            <div className="tl-content">
              <div className="tl-title">Class XII — CBSE Board</div>
              <div className="tl-sub">Senior Secondary · Science stream</div>
              <div className="tl-score" style={{color:'var(--purple)'}}>82%</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-dot" style={{background:'var(--green)',boxShadow:'0 0 0 2px var(--green)'}}></div>
            <div className="tl-content">
              <div className="tl-title">Class X — CBSE Board</div>
              <div className="tl-sub">Secondary School Certificate</div>
              <div className="tl-score">87.4%</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="sec-header">
          <span className="sec-label">projects</span>
          <div className="sec-line"></div>
        </div>

        <div className="proj-card featured">
          <div className="proj-title">
            <span className="badge bd-teal">★ IEEE</span>
            Forest Guard — Forest Fire Detection System
          </div>
          <p className="proj-desc">
            A real-time embedded system for early-stage forest fire detection using multi-sensor fusion.
            Integrates temperature, smoke, and infrared sensors with a microcontroller brain to detect fire
            signatures and trigger alerts. Designed for deployment in remote forest zones with minimal
            infrastructure — aimed at reducing response time and ecological damage.
            Published/presented under IEEE.
          </p>
          <div className="card-tags" style={{marginTop:'10px'}}>
            <span className="badge bd-amber">Embedded C</span>
            <span className="badge bd-teal">IoT</span>
            <span className="badge bd-green">Sensor Fusion</span>
            <span className="badge bd-purple">Microcontroller</span>
            <span className="badge bd-blue">IEEE</span>
          </div>
          <a className="proj-link" href="https://github.com/pratyush-pangotra" target="_blank">↗ View on GitHub</a>
        </div>

        <div className="proj-card">
          <div className="proj-title">Data Analysis Projects</div>
          <p className="proj-desc">
            A series of exploratory data analysis projects covering real-world datasets — involves
            data cleaning, feature engineering, visualization, and insight extraction using Python.
            Demonstrates practical command over the data science stack.
          </p>
          <div className="card-tags" style={{marginTop:'10px'}}>
            <span className="badge bd-green">Python</span>
            <span className="badge bd-blue">Pandas</span>
            <span className="badge bd-purple">Matplotlib / Seaborn</span>
            <span className="badge bd-teal">NumPy</span>
            <span className="badge bd-amber">EDA</span>
          </div>
          <a className="proj-link" href="https://github.com/pratyush-pangotra" target="_blank">↗ View on GitHub</a>
        </div>

        <div className="terminal">
          <div className="terminal-header">
            <div className="dot-r"></div><div className="dot-y"></div><div className="dot-g"></div>
          </div>
          <div className="t-line"><span className="t-prompt">pratyush@portfolio</span> <span style={{color:'var(--muted)'}}>~</span> <span className="t-cmd">$ open github</span></div>
          <div className="t-line t-out">→ <a href="https://github.com/pratyush-pangotra" target="_blank">github.com/pratyush-pangotra</a></div>
          <div className="t-line t-out">→ More projects, repos and source code available ↗</div>
          <div className="t-line" style={{marginTop:'6px'}}><span className="t-prompt">pratyush@portfolio</span> <span style={{color:'var(--muted)'}}>~</span> <span className="cursor" style={{color:'var(--blue)'}}>█</span></div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="sec-header">
          <span className="sec-label">skills</span>
          <div className="sec-line"></div>
        </div>
        <div className="skills-grid">
          {[
            { name: 'Embedded C', cat: 'Systems', width: '85%', color: 'var(--blue)' },
            { name: 'Python', cat: 'Programming', width: '80%', color: 'var(--green)' },
            { name: 'IoT Systems', cat: 'Hardware', width: '80%', color: 'var(--blue)' },
            { name: 'Data Analysis', cat: 'Data Science', width: '75%', color: 'var(--green)' },
            { name: 'HTML / CSS', cat: 'Web', width: '72%', color: 'var(--amber)' },
            { name: 'JavaScript', cat: 'Web', width: '65%', color: 'var(--amber)' },
            { name: 'Git / GitHub', cat: 'DevOps', width: '78%', color: 'var(--purple)' },
            { name: 'Pandas / NumPy', cat: 'Data Science', width: '75%', color: 'var(--green)' },
            { name: 'Sensor Fusion', cat: 'Research', width: '78%', color: 'var(--blue)' },
            { name: 'MATLAB', cat: 'Engineering', width: '60%', color: 'var(--amber)' },
            { name: 'Matplotlib', cat: 'Visualization', width: '72%', color: 'var(--green)' },
            { name: 'C / C++', cat: 'Programming', width: '70%', color: 'var(--blue)' },
          ].map((skill) => (
            <div className="skill-box" key={skill.name}>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-cat">{skill.cat}</div>
              <div className="skill-bar">
                <div className="skill-fill" style={{width: skill.width, background: skill.color}}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="sec-header">
          <span className="sec-label">contact</span>
          <div className="sec-line"></div>
        </div>
        <p style={{fontSize:'13px', color:'var(--muted)', marginBottom:'1.5rem'}}>Open to internships, research collaborations, and project partnerships.</p>
        <div className="contact-grid">
          <a className="contact-card" href="mailto:pratyushpangotra74@gmail.com">
            <div className="contact-icon" style={{background:'rgba(88,166,255,0.1)'}}>📧</div>
            <div className="contact-info">
              <div className="lbl">email</div>
              <div className="val">pratyushpangotra74@gmail.com</div>
            </div>
          </a>
          <a className="contact-card" href="https://github.com/pratyush-pangotra" target="_blank">
            <div className="contact-icon" style={{background:'rgba(63,185,80,0.1)'}}>⌥</div>
            <div className="contact-info">
              <div className="lbl">github</div>
              <div className="val">github.com/pratyush-pangotra</div>
            </div>
          </a>
          <div className="contact-card" style={{cursor:'default'}}>
            <div className="contact-icon" style={{background:'rgba(163,113,247,0.1)'}}>🎓</div>
            <div className="contact-info">
              <div className="lbl">degree</div>
              <div className="val">B.Tech ECE · In Progress</div>
            </div>
          </div>
          <div className="contact-card" style={{cursor:'default'}}>
            <div className="contact-icon" style={{background:'rgba(210,153,34,0.1)'}}>📍</div>
            <div className="contact-info">
              <div className="lbl">location</div>
              <div className="val">India</div>
            </div>
          </div>
        </div>
        <div className="terminal" style={{marginTop:'2rem'}}>
          <div className="terminal-header">
            <div className="dot-r"></div><div className="dot-y"></div><div className="dot-g"></div>
          </div>
          <div className="t-line"><span className="t-prompt">$</span> <span className="t-cmd">echo</span> <span style={{color:'var(--amber)'}}>"Available for internships & research collabs"</span></div>
          <div className="t-line t-out">Available for internships &amp; research collabs</div>
          <div className="t-line"><span className="t-prompt">$</span> <span className="t-cmd">mail</span> -s "Let's connect" pratyushpangotra74@gmail.com</div>
          <div className="t-line" style={{marginTop:'4px'}}><span className="t-prompt">$</span> <span className="cursor" style={{color:'var(--blue)'}}>█</span></div>
        </div>
      </section>

      <footer>
        built with <span>&#60;/&#62;</span> by Pratyush Pangotra &nbsp;·&nbsp; B.Tech ECE &nbsp;·&nbsp;{' '}
        <a href="https://github.com/pratyush-pangotra" style={{color:'var(--blue)', textDecoration:'none'}}>github.com/pratyush-pangotra</a>
      </footer>

      <script dangerouslySetInnerHTML={{__html: `
        const sections = document.querySelectorAll('section, .hero');
        const navLinks = document.querySelectorAll('nav a');
        window.addEventListener('scroll', () => {
          let current = '';
          sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 80) current = s.id;
          });
          navLinks.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + current);
          });
        });
        navLinks.forEach(a => {
          a.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
          });
        });
      `}} />
    </>
  );
}
