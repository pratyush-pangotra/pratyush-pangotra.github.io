"use client";
import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   PRATYUSH PANGOTRA — Personal Portfolio
   ECE Undergraduate · Jammu, India
   Accurate content only — no fabricated experience
   ───────────────────────────────────────────── */

// ── SVG ICONS ──────────────────────────────────────────────────────────────

const GH = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{width:18,height:18}}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const LI = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{width:18,height:18}}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const ML = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width:18,height:18}}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
  </svg>
);
const AR = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:14,height:14}}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/>
  </svg>
);
const CP = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width:18,height:18}}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"/>
  </svg>
);
const LOC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width:14,height:14}}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
  </svg>
);

// ── ANIMATED PCB BACKGROUND ─────────────────────────────────────────────────

const PCBGrid = () => (
  <div style={{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:0}}>
    {/* Grid lines */}
    <svg style={{position:"absolute",inset:0,width:"100%",height:"100%"}} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="pcb-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(34,211,238,0.055)" strokeWidth="0.5"/>
        </pattern>
        <pattern id="pcb-dot" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="0" cy="0" r="1" fill="rgba(34,211,238,0.12)"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pcb-grid)"/>
      <rect width="100%" height="100%" fill="url(#pcb-dot)"/>
    </svg>
    {/* Top center bloom */}
    <div style={{position:"absolute",top:"-10%",left:"50%",transform:"translateX(-50%)",width:"70%",height:"60%",background:"radial-gradient(ellipse, rgba(34,211,238,0.055) 0%, transparent 65%)"}}/>
  </div>
);

// ── ESP32 CIRCUIT ILLUSTRATION ──────────────────────────────────────────────

const ESP32Visual = () => {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick(p => p + 1), 1200);
    return () => clearInterval(t);
  }, []);
  const active = tick % 3;
  return (
    <div style={{position:"relative",width:320,height:320,display:"flex",alignItems:"center",justifyContent:"center"}}>
      {/* Outer glow */}
      <div style={{position:"absolute",inset:0,borderRadius:"50%",background:"radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 65%)"}}/>
      {/* Orbit ring */}
      <div style={{position:"absolute",inset:24,borderRadius:"50%",border:"1px dashed rgba(34,211,238,0.12)"}}/>
      <svg viewBox="0 0 280 280" style={{width:280,height:280,filter:"drop-shadow(0 0 16px rgba(34,211,238,0.28))"}}>
        {/* PCB base */}
        <rect x="55" y="55" width="170" height="170" rx="10" fill="#0c1118" stroke="#22d3ee" strokeWidth="1.2" opacity="0.95"/>
        {/* Inner board texture */}
        <rect x="65" y="65" width="150" height="150" rx="6" fill="#0e141d" stroke="rgba(34,211,238,0.2)" strokeWidth="0.5"/>
        {/* Trace lines */}
        <line x1="55" y1="90" x2="30" y2="90" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
        <line x1="55" y1="110" x2="30" y2="110" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
        <line x1="55" y1="130" x2="30" y2="130" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
        <line x1="55" y1="150" x2="30" y2="150" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
        <line x1="55" y1="170" x2="30" y2="170" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
        <line x1="55" y1="190" x2="30" y2="190" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
        <line x1="225" y1="90" x2="250" y2="90" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
        <line x1="225" y1="110" x2="250" y2="110" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
        <line x1="225" y1="130" x2="250" y2="130" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
        <line x1="225" y1="150" x2="250" y2="150" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
        <line x1="225" y1="170" x2="250" y2="170" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
        <line x1="225" y1="190" x2="250" y2="190" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
        <line x1="90" y1="55" x2="90" y2="30" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
        <line x1="120" y1="55" x2="120" y2="30" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
        <line x1="150" y1="55" x2="150" y2="30" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
        <line x1="180" y1="55" x2="180" y2="30" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
        <line x1="90" y1="225" x2="90" y2="250" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
        <line x1="120" y1="225" x2="120" y2="250" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
        <line x1="150" y1="225" x2="150" y2="250" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
        <line x1="180" y1="225" x2="180" y2="250" stroke="#22d3ee" strokeWidth="0.8" opacity="0.4"/>
        {/* Pad dots on traces */}
        {[90,110,130,150,170,190].map(y=>(
          <g key={y}>
            <circle cx="30" cy={y} r="2.5" fill="#0c1118" stroke="#22d3ee" strokeWidth="0.8"/>
            <circle cx="250" cy={y} r="2.5" fill="#0c1118" stroke="#22d3ee" strokeWidth="0.8"/>
          </g>
        ))}
        {[90,120,150,180].map(x=>(
          <g key={x}>
            <circle cx={x} cy="30" r="2.5" fill="#0c1118" stroke="#22d3ee" strokeWidth="0.8"/>
            <circle cx={x} cy="250" r="2.5" fill="#0c1118" stroke="#22d3ee" strokeWidth="0.8"/>
          </g>
        ))}
        {/* Antenna */}
        <rect x="126" y="62" width="28" height="6" rx="2" fill="#1a2535" stroke="#0ea5e9" strokeWidth="0.8"/>
        <line x1="130" y1="65" x2="130" y2="55" stroke="#0ea5e9" strokeWidth="0.8" opacity="0.6"/>
        <line x1="140" y1="65" x2="140" y2="50" stroke="#0ea5e9" strokeWidth="0.8" opacity="0.6"/>
        <line x1="150" y1="65" x2="150" y2="55" stroke="#0ea5e9" strokeWidth="0.8" opacity="0.6"/>
        {/* Main IC */}
        <rect x="92" y="100" width="96" height="80" rx="5" fill="#080d14" stroke="#22d3ee" strokeWidth="1"/>
        <rect x="99" y="107" width="82" height="66" rx="3" fill="#0a1020"/>
        <text x="140" y="143" textAnchor="middle" fill="#22d3ee" fontSize="11" fontFamily="monospace" fontWeight="bold">ESP32</text>
        <text x="140" y="157" textAnchor="middle" fill="#4b8fa8" fontSize="7" fontFamily="monospace">WROOM-32D</text>
        <text x="140" y="168" textAnchor="middle" fill="#2a4a5a" fontSize="6" fontFamily="monospace">240MHz · 4MB</text>
        {/* Capacitors */}
        <rect x="68" y="96" width="14" height="22" rx="3" fill="#14202e" stroke="#22d3ee" strokeWidth="0.8" opacity="0.85"/>
        <line x1="75" y1="96" x2="75" y2="88" stroke="#22d3ee" strokeWidth="0.7" opacity="0.5"/>
        <rect x="68" y="162" width="14" height="22" rx="3" fill="#14202e" stroke="#22d3ee" strokeWidth="0.8" opacity="0.85"/>
        <rect x="198" y="96" width="14" height="22" rx="3" fill="#14202e" stroke="#22d3ee" strokeWidth="0.8" opacity="0.85"/>
        <rect x="198" y="162" width="14" height="22" rx="3" fill="#14202e" stroke="#22d3ee" strokeWidth="0.8" opacity="0.85"/>
        {/* Signal dots that cycle */}
        <circle cx="30" cy="90" r="3" fill={active===0?"#22d3ee":"rgba(34,211,238,0.2)"} style={{transition:"fill 0.5s"}}/>
        <circle cx="250" cy="150" r="3" fill={active===1?"#22d3ee":"rgba(34,211,238,0.2)"} style={{transition:"fill 0.5s"}}/>
        <circle cx="150" cy="30" r="3" fill={active===2?"#22d3ee":"rgba(34,211,238,0.2)"} style={{transition:"fill 0.5s"}}/>
        {/* Corner pads */}
        <circle cx="70" cy="70" r="4" fill="#14202e" stroke="#22d3ee" strokeWidth="0.8"/>
        <circle cx="210" cy="70" r="4" fill="#14202e" stroke="#22d3ee" strokeWidth="0.8"/>
        <circle cx="70" cy="210" r="4" fill="#14202e" stroke="#22d3ee" strokeWidth="0.8"/>
        <circle cx="210" cy="210" r="4" fill="#14202e" stroke="#22d3ee" strokeWidth="0.8"/>
      </svg>
      {/* Label */}
      <div style={{position:"absolute",bottom:-4,left:"50%",transform:"translateX(-50%)",whiteSpace:"nowrap",padding:"3px 14px",borderRadius:99,fontSize:11,fontFamily:"monospace",background:"rgba(34,211,238,0.07)",border:"1px solid rgba(34,211,238,0.22)",color:"#67e8f9",letterSpacing:"0.08em"}}>
        ESP32-WROOM-32D
      </div>
    </div>
  );
};

// ── PROJECT CARD ILLUSTRATIONS ──────────────────────────────────────────────

const BellCircuit = () => (
  <svg viewBox="0 0 280 160" style={{width:"100%",height:"100%",opacity:0.28}}>
    <path d="M30 80 L70 80 L70 50 L140 50 L140 80 L210 80 L210 50 L250 50" fill="none" stroke="#22d3ee" strokeWidth="1.5"/>
    <path d="M70 80 L70 110 L110 110 L110 130" fill="none" stroke="#22d3ee" strokeWidth="1.5"/>
    <path d="M140 80 L140 110 L170 110" fill="none" stroke="#0ea5e9" strokeWidth="1.2"/>
    <circle cx="70" cy="80" r="4" fill="#22d3ee"/>
    <circle cx="140" cy="80" r="4" fill="#22d3ee"/>
    <circle cx="210" cy="80" r="4" fill="#0ea5e9"/>
    {/* Bell symbol */}
    <path d="M104 118 Q110 108 116 118 L116 122 L104 122 Z" fill="none" stroke="#22d3ee" strokeWidth="1.2"/>
    <circle cx="110" cy="124" r="2" fill="#22d3ee"/>
    {/* MCU box */}
    <rect x="155" y="96" width="34" height="28" rx="3" fill="none" stroke="#22d3ee" strokeWidth="1"/>
    <text x="172" y="113" textAnchor="middle" fill="#22d3ee" fontSize="6" fontFamily="monospace">ESP32</text>
    {/* ESP-NOW waves */}
    <path d="M195 106 Q202 106 202 112 Q202 118 195 118" fill="none" stroke="#0ea5e9" strokeWidth="1" opacity="0.7"/>
    <path d="M197 103 Q208 103 208 112 Q208 121 197 121" fill="none" stroke="#0ea5e9" strokeWidth="0.8" opacity="0.4"/>
    <line x1="30" y1="80" x2="20" y2="80" stroke="#22d3ee" strokeWidth="1" opacity="0.4"/>
    <circle cx="18" cy="80" r="2" fill="none" stroke="#22d3ee" strokeWidth="0.8"/>
  </svg>
);


const DataViz = () => (
  <svg viewBox="0 0 280 160" style={{width:"100%",height:"100%",opacity:0.28}}>
    {/* Axes */}
    <line x1="40" y1="130" x2="240" y2="130" stroke="#22d3ee" strokeWidth="1"/>
    <line x1="40" y1="30" x2="40" y2="130" stroke="#22d3ee" strokeWidth="1"/>
    {/* Bars */}
    {[[28,60],[52,90],[76,50],[100,110],[124,75],[148,125],[172,85],[196,100]].map(([x,h],i)=>(
      <rect key={i} x={x} y={130-h} width="20" height={h} rx="2"
        fill={i===5?"rgba(34,211,238,0.35)":i===3?"rgba(34,211,238,0.2)":"none"}
        stroke={i===5?"#22d3ee":i===3?"#0ea5e9":"rgba(34,211,238,0.6)"} strokeWidth="1"/>
    ))}
    {/* Trend line */}
    <path d="M38 105 L58 75 L82 80 L106 55 L130 68 L154 42 L178 58 L200 50" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.7"/>
    {/* Python label */}
    <rect x="195" y="32" width="45" height="22" rx="4" fill="rgba(34,211,238,0.06)" stroke="#22d3ee" strokeWidth="0.8"/>
    <text x="217" y="46" textAnchor="middle" fill="#22d3ee" fontSize="7" fontFamily="monospace">Python</text>
  </svg>
);

// ── SECTION DIVIDER ─────────────────────────────────────────────────────────

const Divider = ({label}) => (
  <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:14}}>
    <span style={{fontSize:11,fontFamily:"'JetBrains Mono',monospace",letterSpacing:"0.18em",textTransform:"uppercase",color:"#22d3ee",whiteSpace:"nowrap"}}>{label}</span>
    <div style={{height:1,flex:1,background:"linear-gradient(90deg, rgba(34,211,238,0.35) 0%, transparent 100%)"}}/>
  </div>
);

// ── TAG ─────────────────────────────────────────────────────────────────────

const Tag = ({t}) => (
  <span style={{padding:"3px 10px",borderRadius:6,fontSize:11,fontFamily:"'JetBrains Mono',monospace",background:"rgba(34,211,238,0.07)",color:"#67e8f9",border:"1px solid rgba(34,211,238,0.18)"}}>
    {t}
  </span>
);

// ── PROJECT CARD ─────────────────────────────────────────────────────────────

const PCard = ({title, desc, tags, art, gh}) => {
  const [h,sH] = useState(false);
  return (
    <div onMouseEnter={()=>sH(true)} onMouseLeave={()=>sH(false)}
      style={{borderRadius:18,overflow:"hidden",background:h?"rgba(34,211,238,0.035)":"rgba(255,255,255,0.02)",border:`1px solid ${h?"rgba(34,211,238,0.38)":"rgba(255,255,255,0.07)"}`,boxShadow:h?"0 24px 64px rgba(34,211,238,0.09), 0 0 0 1px rgba(34,211,238,0.08)":"none",transform:h?"translateY(-7px)":"translateY(0)",transition:"all 0.38s cubic-bezier(0.4,0,0.2,1)",cursor:"default",display:"flex",flexDirection:"column"}}>
      {/* Art panel */}
      <div style={{height:152,background:"linear-gradient(160deg,#0a0f18 0%,#0c1420 100%)",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden"}}>
        {/* Subtle dot grid in card */}
        <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.4}} xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id={`cg-${title[0]}`} width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="0" cy="0" r="0.6" fill="rgba(34,211,238,0.4)"/></pattern></defs>
          <rect width="100%" height="100%" fill={`url(#cg-${title[0]})`}/>
        </svg>
        <div style={{width:"100%",height:"100%",position:"relative"}}>{art}</div>
        {/* Top-right badge */}
        <div style={{position:"absolute",top:10,right:10,padding:"2px 9px",borderRadius:6,fontSize:10,fontFamily:"'JetBrains Mono',monospace",background:"rgba(34,211,238,0.09)",color:"#22d3ee",border:"1px solid rgba(34,211,238,0.2)"}}>project</div>
      </div>
      {/* Body */}
      <div style={{padding:"20px 22px 22px",flex:1,display:"flex",flexDirection:"column",gap:10}}>
        <div style={{fontWeight:700,fontSize:15,color:"white",letterSpacing:"-0.015em",lineHeight:1.3}}>{title}</div>
        <div style={{fontSize:12,color:"#6b7280",lineHeight:1.7,flex:1}}>{desc}</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:6,marginTop:4}}>
          {tags.map(t=><Tag key={t} t={t}/>)}
        </div>
        {gh && (
          <a href={gh} target="_blank" rel="noopener noreferrer"
            style={{display:"inline-flex",alignItems:"center",gap:8,marginTop:8,fontSize:12,color:h?"#22d3ee":"#4b5563",textDecoration:"none",transition:"color 0.2s",width:"fit-content"}}>
            <GH/> View on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

// ── SKILL PILL ───────────────────────────────────────────────────────────────

const SPill = ({icon, name}) => {
  const [h,sH] = useState(false);
  return (
    <div onMouseEnter={()=>sH(true)} onMouseLeave={()=>sH(false)}
      style={{display:"flex",flexDirection:"column",alignItems:"center",gap:7,padding:"14px 10px",borderRadius:12,background:h?"rgba(34,211,238,0.07)":"rgba(255,255,255,0.025)",border:`1px solid ${h?"rgba(34,211,238,0.32)":"rgba(255,255,255,0.07)"}`,boxShadow:h?"0 0 18px rgba(34,211,238,0.1)":"none",transition:"all 0.28s",cursor:"default"}}>
      <span style={{fontSize:22}}>{icon}</span>
      <span style={{fontSize:11,fontFamily:"'JetBrains Mono',monospace",color:h?"#e2e8f0":"#9ca3af",textAlign:"center",lineHeight:1.3}}>{name}</span>
    </div>
  );
};

// ── CONTACT ROW ───────────────────────────────────────────────────────────────

const ContactRow = ({icon, label, val, href}) => {
  const [h,sH] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={()=>sH(true)} onMouseLeave={()=>sH(false)}
      style={{display:"flex",alignItems:"center",gap:16,padding:"16px 20px",borderRadius:14,background:h?"rgba(34,211,238,0.05)":"rgba(255,255,255,0.025)",border:`1px solid ${h?"rgba(34,211,238,0.3)":"rgba(255,255,255,0.07)"}`,textDecoration:"none",color:"inherit",transition:"all 0.25s"}}>
      <div style={{width:38,height:38,borderRadius:10,background:"rgba(34,211,238,0.1)",border:"1px solid rgba(34,211,238,0.2)",display:"flex",alignItems:"center",justifyContent:"center",color:"#22d3ee",flexShrink:0}}>
        {icon}
      </div>
      <div style={{flex:1}}>
        <div style={{fontSize:11,color:"#4b5563",marginBottom:2,fontFamily:"'JetBrains Mono',monospace"}}>{label}</div>
        <div style={{fontSize:13,fontWeight:500,color:"white"}}>{val}</div>
      </div>
      <div style={{opacity:h?1:0,color:"#22d3ee",transition:"opacity 0.2s"}}><AR/></div>
    </a>
  );
};

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────

export default function PratyushPortfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const projects = [
    {
      title: "ESP32 Smart Bell Automation System",
      desc: "A microcontroller-based bell automation system for schools. Supports scheduled ringing and manual override controls. Multi-unit synchronisation via ESP-NOW is a planned idea.",
      tags: ["ESP32","Embedded C++","Electronics"],
      art: <BellCircuit/>,
      gh: "https://github.com/pratyush-pangotra/esp32-smart-bell-system"
    },
    {
      title: "Indian Population Visualisation",
      desc: "Data analysis and visualisation of Indian population trends. Explores growth patterns, distributions, and demographic shifts using Python and visualisation libraries.",
      tags: ["Python","Pandas","Plotly","Data"],
      art: <DataViz/>,
      gh: "https://github.com/pratyush-pangotra/indian-population-visualization"
    },
    {
      title: "Student Marks Visualisation",
      desc: "Analysis and visualisation of student marks data. Covers data cleaning, performance breakdowns, and chart-based summaries to surface academic trends.",
      tags: ["Python","Pandas","Matplotlib","Data"],
      art: <DataViz/>,
      gh: "https://github.com/pratyush-pangotra/student-marks-visualization"
    }
  ];

  const skillGroups = [
    { cat: "Embedded Systems", items: [
      {icon:"⚡",name:"ESP32"},{icon:"📡",name:"ESP8266"},
      {icon:"🔵",name:"Arduino"},{icon:"🔌",name:"MCU Interfacing"},
    ]},
    { cat: "Programming", items: [
      {icon:"🐍",name:"Python"},{icon:"⚙️",name:"C / C++"},
      {icon:"🗄️",name:"MySQL"},
    ]},
    { cat: "Data & Analytics", items: [
      {icon:"📊",name:"Data Analysis"},{icon:"📈",name:"Visualisation"},
      {icon:"🗃️",name:"Pandas"},{icon:"📉",name:"Dashboards"},
    ]},
    { cat: "Tools", items: [
      {icon:"🌿",name:"Git / GitHub"},{icon:"🐧",name:"Linux"},
      {icon:"🔧",name:"Prototyping"},{icon:"📐",name:"Schematic"},
    ]},
  ];

  const experiments = [
    {icon:"🔒", title:"Privacy-focused Hardware", desc:"Exploring custom device builds with a focus on local control and no cloud dependencies."},
    {icon:"📡", title:"ESP-NOW Communication", desc:"Exploring ESP-NOW for direct wireless communication between ESP32 devices without a router."},
    {icon:"📊", title:"Real-world Data Studies", desc:"Using available datasets — school data, local infrastructure — to practise analytics workflows."},
  ];

  const C = "#22d3ee"; // accent
  const BG = "#0b0c10";

  return (
    <div style={{background:BG,minHeight:"100vh",color:"white",fontFamily:"'DM Sans','Inter',system-ui,sans-serif",overflowX:"hidden"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{background:#0b0c10}
        ::placeholder{color:#2d3748}
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-track{background:#0b0c10}
        ::-webkit-scrollbar-thumb{background:rgba(34,211,238,0.32);border-radius:4px}
        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes blink2{0%,100%{opacity:1}50%{opacity:0.25}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .float-anim{animation:floatY 6s ease-in-out infinite}
        .blink2{animation:blink2 2.2s ease-in-out infinite}
        .fade-in{animation:fadeUp 0.7s ease forwards}
        input,textarea,button{font-family:inherit}
        a{text-decoration:none;color:inherit}
      `}</style>

      {/* ── NAV ── */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:200,padding:"14px 40px",display:"flex",alignItems:"center",justifyContent:"space-between",background:scrolled?"rgba(11,12,16,0.88)":"transparent",backdropFilter:scrolled?"blur(24px) saturate(1.5)":"none",borderBottom:scrolled?"1px solid rgba(255,255,255,0.05)":"none",transition:"all 0.35s"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:32,height:32,borderRadius:9,background:"rgba(34,211,238,0.1)",border:"1px solid rgba(34,211,238,0.28)",display:"flex",alignItems:"center",justifyContent:"center",color:C}}>
            <CP/>
          </div>
          <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:13,color:"#c9d6e0",letterSpacing:"0.04em"}}>pratyush.dev</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:36}}>
          {["About","Projects","Skills","Contact"].map(s=>(
            <a key={s} href={`#${s.toLowerCase()}`} style={{fontSize:13,color:"#5a6a78",transition:"color 0.2s"}}
              onMouseEnter={e=>e.currentTarget.style.color="#d1e0ea"}
              onMouseLeave={e=>e.currentTarget.style.color="#5a6a78"}>{s}</a>
          ))}
        </div>
        <a href="mailto:pratyushpangotra74@gmail.com"
          style={{padding:"8px 18px",borderRadius:10,fontSize:12,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",background:"rgba(34,211,238,0.1)",border:"1px solid rgba(34,211,238,0.3)",color:C,transition:"all 0.25s"}}
          onMouseEnter={e=>{e.currentTarget.style.background="rgba(34,211,238,0.18)";e.currentTarget.style.boxShadow="0 0 22px rgba(34,211,238,0.22)"}}
          onMouseLeave={e=>{e.currentTarget.style.background="rgba(34,211,238,0.1)";e.currentTarget.style.boxShadow="none"}}>
          say hello →
        </a>
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <PCBGrid/>
        {/* Side glow */}
        <div style={{position:"absolute",top:"20%",right:"5%",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(34,211,238,0.065) 0%,transparent 60%)",pointerEvents:"none"}}/>

        <div style={{position:"relative",zIndex:1,width:"100%",maxWidth:1240,margin:"0 auto",padding:"120px 40px 80px",display:"grid",gridTemplateColumns:"1.1fr 0.9fr",gap:64,alignItems:"center"}}>
          {/* Left */}
          <div className="fade-in">
            {/* Status pill */}
            <div style={{display:"inline-flex",alignItems:"center",gap:9,padding:"6px 16px",borderRadius:99,marginBottom:36,fontSize:12,fontFamily:"'JetBrains Mono',monospace",background:"rgba(34,211,238,0.07)",border:"1px solid rgba(34,211,238,0.2)",color:C}}>
              <span className="blink2" style={{width:6,height:6,borderRadius:"50%",background:"#4ade80",display:"inline-block"}}/>
              ECE Undergraduate · Jammu, India
              <span style={{display:"inline-flex",alignItems:"center",gap:3,color:"#4b5e6a"}}>
                <LOC/> JK
              </span>
            </div>

            {/* Name */}
            <div style={{fontSize:13,fontFamily:"'JetBrains Mono',monospace",color:"#4b6070",marginBottom:10,letterSpacing:"0.12em"}}>
              PRATYUSH PANGOTRA
            </div>

            {/* Heading */}
            <h1 style={{fontSize:52,fontWeight:800,lineHeight:1.06,letterSpacing:"-0.035em",marginBottom:22}}>
              Building Practical<br/>
              <span style={{background:"linear-gradient(130deg, #22d3ee 10%, #38bdf8 60%, #0ea5e9 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
                Hardware &amp; Data
              </span>
              <br/>Systems
            </h1>

            {/* Subtext */}
            <p style={{fontSize:16,color:"#6b7a88",lineHeight:1.75,maxWidth:500,marginBottom:14}}>
              ECE undergraduate working on embedded systems, automation tools, and data-driven engineering experiments.
            </p>

            {/* Tagline */}
            <div style={{fontSize:12,fontFamily:"'JetBrains Mono',monospace",color:"#3d5464",marginBottom:40,letterSpacing:"0.06em"}}>
              ESP32 · Embedded Systems · Data Analytics · Automation
            </div>

            {/* CTAs */}
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <a href="#projects"
                style={{display:"inline-flex",alignItems:"center",gap:8,padding:"12px 26px",borderRadius:12,fontWeight:700,fontSize:14,background:"linear-gradient(135deg,#0891b2 0%,#0369a1 100%)",color:"white",boxShadow:"0 0 28px rgba(34,211,238,0.22)",transition:"box-shadow 0.3s"}}
                onMouseEnter={e=>e.currentTarget.style.boxShadow="0 0 44px rgba(34,211,238,0.38)"}
                onMouseLeave={e=>e.currentTarget.style.boxShadow="0 0 28px rgba(34,211,238,0.22)"}>
                View Projects <AR/>
              </a>
              <a href="https://github.com/pratyush-pangotra" target="_blank"
                style={{display:"inline-flex",alignItems:"center",gap:8,padding:"12px 22px",borderRadius:12,fontWeight:500,fontSize:14,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",color:"#c9d6e0",transition:"background 0.2s"}}
                onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.08)"}
                onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.04)"}>
                <GH/> GitHub
              </a>
              <a href="#contact"
                style={{display:"inline-flex",alignItems:"center",gap:8,padding:"12px 22px",borderRadius:12,fontWeight:500,fontSize:14,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",color:"#c9d6e0",transition:"background 0.2s"}}
                onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.08)"}
                onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.04)"}>
                <ML/> Contact
              </a>
            </div>
          </div>

          {/* Right — ESP32 illustration */}
          <div className="float-anim" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <ESP32Visual/>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{position:"absolute",bottom:32,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:8,opacity:0.35}}>
          <span style={{fontSize:9,fontFamily:"'JetBrains Mono',monospace",letterSpacing:"0.22em",textTransform:"uppercase",color:"#4b6070"}}>scroll</span>
          <div style={{width:1,height:36,background:"linear-gradient(180deg,#22d3ee,transparent)"}}/>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{padding:"100px 40px",maxWidth:1240,margin:"0 auto"}}>
        <Divider label="01 — About"/>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,marginTop:44,alignItems:"start"}}>
          <div>
            <h2 style={{fontSize:38,fontWeight:800,letterSpacing:"-0.025em",marginBottom:24,lineHeight:1.15}}>
              Solving real problems<br/>
              <span style={{color:C}}>with working prototypes.</span>
            </h2>
            <div style={{display:"flex",flexDirection:"column",gap:16,fontSize:15,lineHeight:1.82,color:"#7a8b99"}}>
              <p>I am an Electronics and Computer Engineering undergraduate interested in embedded systems, IoT devices, and data-driven problem solving.</p>
              <p>My work revolves around building practical engineering prototypes using microcontrollers like ESP32, along with software tools for automation and data analysis.</p>
              <p>Alongside hardware experimentation, I explore how data analytics and dashboards can help understand and improve real-world systems such as schools and local infrastructure.</p>
              <p>I enjoy combining hardware, software, and data to build functional engineering solutions that go beyond the classroom.</p>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
            {[
              {icon:"⚡",title:"Embedded Systems",desc:"Microcontrollers, firmware, real-world I/O"},
              {icon:"📡",title:"IoT Sensing",desc:"Environmental monitoring, distributed nodes"},
              {icon:"🤖",title:"Automation",desc:"Scheduled and event-driven control systems"},
              {icon:"📊",title:"Data Analytics",desc:"Python pipelines and dashboard experiments"},
            ].map(({icon,title,desc})=>{
              const[h,sH]=useState(false);
              return(
                <div key={title} onMouseEnter={()=>sH(true)} onMouseLeave={()=>sH(false)}
                  style={{padding:20,borderRadius:14,background:h?"rgba(34,211,238,0.05)":"rgba(255,255,255,0.025)",border:`1px solid ${h?"rgba(34,211,238,0.26)":"rgba(255,255,255,0.07)"}`,transition:"all 0.28s",cursor:"default"}}>
                  <div style={{fontSize:26,marginBottom:10}}>{icon}</div>
                  <div style={{fontWeight:700,fontSize:14,color:"white",marginBottom:5}}>{title}</div>
                  <div style={{fontSize:12,color:"#5a6a78",lineHeight:1.65}}>{desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{padding:"100px 40px",position:"relative"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 30%,rgba(34,211,238,0.025) 0%,transparent 65%)",pointerEvents:"none"}}/>
        <div style={{maxWidth:1240,margin:"0 auto",position:"relative"}}>
          <Divider label="02 — Projects"/>
          <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginTop:44,marginBottom:40}}>
            <div>
              <h2 style={{fontSize:38,fontWeight:800,letterSpacing:"-0.025em",lineHeight:1.15}}>
                Prototypes &amp; experiments.<br/>
                <span style={{color:C}}>Built to learn.</span>
              </h2>
            </div>
            <a href="https://github.com/pratyush-pangotra" target="_blank"
              style={{display:"inline-flex",alignItems:"center",gap:8,fontSize:13,color:"#4b5a68",transition:"color 0.2s"}}
              onMouseEnter={e=>e.currentTarget.style.color=C}
              onMouseLeave={e=>e.currentTarget.style.color="#4b5a68"}>
              All on GitHub <AR/>
            </a>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:22}}>
            {projects.map((p,i)=><PCard key={i} {...p}/>)}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{padding:"100px 40px",maxWidth:1240,margin:"0 auto"}}>
        <Divider label="03 — Skills"/>
        <h2 style={{fontSize:38,fontWeight:800,letterSpacing:"-0.025em",marginTop:44,marginBottom:52,lineHeight:1.2}}>
          What I work with.<br/><span style={{color:C}}>Honestly.</span>
        </h2>
        <div style={{display:"flex",flexDirection:"column",gap:36}}>
          {skillGroups.map(({cat,items})=>(
            <div key={cat}>
              <div style={{fontSize:11,fontFamily:"'JetBrains Mono',monospace",letterSpacing:"0.18em",textTransform:"uppercase",color:"#2d3e4a",marginBottom:14}}>{cat}</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(8,1fr)",gap:10}}>
                {items.map(s=><SPill key={s.name} {...s}/>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIMENTS ── */}
      <section id="experiments" style={{padding:"100px 40px",maxWidth:1240,margin:"0 auto"}}>
        <Divider label="04 — Engineering Experiments"/>
        <div style={{display:"grid",gridTemplateColumns:"1fr 2fr",gap:72,marginTop:44,alignItems:"start"}}>
          <div>
            <h2 style={{fontSize:34,fontWeight:800,letterSpacing:"-0.02em",lineHeight:1.2,marginBottom:16}}>
              Small builds &amp;<br/>
              <span style={{color:C}}>explorations.</span>
            </h2>
            <p style={{fontSize:14,color:"#5a6a78",lineHeight:1.75}}>
              A collection of small builds and technical explorations involving embedded devices, automation tools, and data experiments.
            </p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            {experiments.map(({icon,title,desc})=>{
              const[h,sH]=useState(false);
              return(
                <div key={title} onMouseEnter={()=>sH(true)} onMouseLeave={()=>sH(false)}
                  style={{padding:24,borderRadius:16,background:h?"rgba(34,211,238,0.04)":"rgba(255,255,255,0.02)",border:`1px solid ${h?"rgba(34,211,238,0.26)":"rgba(255,255,255,0.06)"}`,transition:"all 0.3s",cursor:"default",position:"relative",overflow:"hidden"}}>
                  {h&&<div style={{position:"absolute",top:-16,right:-16,width:64,height:64,borderRadius:"50%",background:"radial-gradient(circle,rgba(34,211,238,0.14) 0%,transparent 70%)",pointerEvents:"none"}}/>}
                  <div style={{fontSize:28,marginBottom:12}}>{icon}</div>
                  <div style={{fontWeight:700,fontSize:14,color:"white",marginBottom:7}}>{title}</div>
                  <div style={{fontSize:12,color:"#5a6a78",lineHeight:1.7}}>{desc}</div>
                  <div style={{marginTop:14,fontSize:11,fontFamily:"'JetBrains Mono',monospace",color:C}}>experimenting →</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{padding:"100px 40px",maxWidth:1240,margin:"0 auto"}}>
        <Divider label="05 — Contact"/>
        <div style={{marginTop:44,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
          <h2 style={{fontSize:38,fontWeight:800,letterSpacing:"-0.025em",lineHeight:1.2,marginBottom:16}}>
            Let's connect<br/><span style={{color:C}}>and build.</span>
          </h2>
          <p style={{fontSize:15,color:"#5a6a78",lineHeight:1.8,marginBottom:48,maxWidth:420}}>
            Whether it's a hardware project, a collaboration, or just talking engineering — feel free to reach out.
          </p>
          <div style={{display:"flex",flexDirection:"column",gap:10,width:"100%",maxWidth:480}}>
            <ContactRow icon={<ML/>} label="Email" val="pratyushpangotra74@gmail.com" href="mailto:pratyushpangotra74@gmail.com"/>
            <ContactRow icon={<GH/>} label="GitHub" val="github.com/pratyush-pangotra" href="https://github.com/pratyush-pangotra"/>
            <ContactRow icon={<LI/>} label="LinkedIn" val="linkedin.com/in/pratyush-pangotra-7b0a39300" href="https://www.linkedin.com/in/pratyush-pangotra-7b0a39300/"/>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{borderTop:"1px solid rgba(255,255,255,0.05)",padding:"28px 40px"}}>
        <div style={{maxWidth:1240,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:28,height:28,borderRadius:8,background:"rgba(34,211,238,0.08)",border:"1px solid rgba(34,211,238,0.2)",display:"flex",alignItems:"center",justifyContent:"center",color:C}}>
              <CP/>
            </div>
            <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:12,color:"#2d3e4a"}}>Pratyush Pangotra</span>
          </div>
          <p style={{fontSize:12,fontFamily:"'JetBrains Mono',monospace",color:"#2d3e4a"}}>
            Built with Next.js, Tailwind, and caffeine. ☕
          </p>
          <div style={{display:"flex",gap:18}}>
            {[
              {icon:<GH/>,href:"https://github.com/pratyush-pangotra"},
              {icon:<LI/>,href:"https://www.linkedin.com/in/pratyush-pangotra-7b0a39300/"},
              {icon:<ML/>,href:"mailto:pratyushpangotra74@gmail.com"},
            ].map(({icon,href},i)=>(
              <a key={i} href={href} target="_blank" style={{color:"#2d3e4a",transition:"color 0.2s"}}
                onMouseEnter={e=>e.currentTarget.style.color=C}
                onMouseLeave={e=>e.currentTarget.style.color="#2d3e4a"}>{icon}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
