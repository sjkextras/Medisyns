export default function MedisynsProvincial() {
    return (
        <div style={{ fontFamily: "sans-serif", color: "#0D1F3C", width: "100%" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=DM+Mono:wght@400;500&display=swap');

                .mp-body{font-family:'DM Sans',sans-serif;background:#fff;color:#0D1F3C;}

                /* NAV */
                .mp-nav{display:flex;align-items:center;justify-content:space-between;padding:0 56px;height:70px;background:#0D1F3C;position:sticky;top:0;z-index:100;}
                .mp-nav-brand{display:flex;align-items:center;gap:12px;}
                .mp-nav-hex{width:30px;height:30px;background:#0B7A75;clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);}
                .mp-nav-name{font-family:'DM Serif Display',serif;font-size:19px;color:#fff;letter-spacing:0.02em;}
                .mp-nav-links{display:flex;gap:32px;align-items:center;}
                .mp-nav-links a{font-size:12px;font-weight:500;color:rgba(255,255,255,0.55);text-decoration:none;letter-spacing:0.06em;text-transform:uppercase;transition:color 0.2s;}
                .mp-nav-links a:hover{color:#fff;}
                .mp-nav-pill{background:#0B7A75;color:#fff!important;padding:9px 22px;border-radius:3px;font-size:12px!important;}

                /* HERO */
                .mp-hero{background:#0D1F3C;padding:130px 56px 100px;position:relative;overflow:hidden;}
                .mp-hero-dots{position:absolute;inset:0;opacity:0.035;background-image:radial-gradient(rgba(255,255,255,0.8) 1px,transparent 1px);background-size:28px 28px;}
                .mp-hero-glow{position:absolute;top:-100px;right:-100px;width:700px;height:700px;background:radial-gradient(ellipse,rgba(11,122,117,0.14) 0%,transparent 60%);pointer-events:none;}
                .mp-hero-glow2{position:absolute;bottom:-200px;left:-100px;width:500px;height:500px;background:radial-gradient(ellipse,rgba(26,86,160,0.1) 0%,transparent 60%);pointer-events:none;}
                .mp-hero-inner{max-width:1100px;margin:0 auto;position:relative;}
                .mp-eyebrow{display:inline-flex;align-items:center;gap:10px;border:1px solid rgba(11,122,117,0.4);border-radius:2px;padding:7px 16px;margin-bottom:40px;font-family:'DM Mono',monospace;font-size:11px;color:#0FA3A0;letter-spacing:0.14em;text-transform:uppercase;}
                .mp-eyebrow::before{content:'';width:7px;height:7px;background:#0FA3A0;border-radius:50%;animation:mpulse 2.4s ease-in-out infinite;}
                @keyframes mpulse{0%,100%{opacity:1}50%{opacity:0.3}}
                .mp-h1{font-family:'DM Serif Display',serif;font-size:clamp(44px,5.5vw,76px);line-height:1.06;color:#fff;max-width:860px;margin-bottom:30px;}
                .mp-h1 em{font-style:italic;color:#0FA3A0;}
                .mp-hero-body{font-size:19px;font-weight:300;color:rgba(255,255,255,0.58);max-width:580px;line-height:1.75;margin-bottom:52px;}
                .mp-hero-cta{display:flex;align-items:center;gap:20px;flex-wrap:wrap;}
                .mp-btn-main{display:inline-flex;align-items:center;gap:10px;background:#0B7A75;color:#fff;padding:15px 32px;border-radius:3px;font-size:15px;font-weight:500;text-decoration:none;letter-spacing:0.01em;transition:background 0.2s;}
                .mp-btn-main:hover{background:#0FA3A0;}
                .mp-btn-ghost{font-size:14px;color:rgba(255,255,255,0.5);text-decoration:none;display:flex;align-items:center;gap:6px;transition:color 0.2s;}
                .mp-btn-ghost:hover{color:#fff;}

                /* STAT STRIP */
                .mp-stats{display:grid;grid-template-columns:repeat(4,1fr);margin-top:80px;padding-top:48px;border-top:1px solid rgba(255,255,255,0.08);}
                .mp-stat{padding-right:40px;border-right:1px solid rgba(255,255,255,0.08);}
                .mp-stat:last-child{border-right:none;}
                .mp-stat-n{font-family:'DM Serif Display',serif;font-size:40px;color:#fff;line-height:1;}
                .mp-stat-n span{color:#0FA3A0;}
                .mp-stat-l{font-size:12px;color:rgba(255,255,255,0.4);margin-top:8px;line-height:1.5;text-transform:uppercase;letter-spacing:0.05em;}
                .mp-stat-s{font-size:10px;color:rgba(255,255,255,0.2);margin-top:4px;font-style:italic;}

                /* SECTIONS */
                .mp-section{padding:96px 56px;}
                .mp-section-inner{max-width:1100px;margin:0 auto;}
                .mp-mono{font-family:'DM Mono',monospace;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#0B7A75;margin-bottom:18px;}
                .mp-h2{font-family:'DM Serif Display',serif;font-size:clamp(30px,3.5vw,48px);line-height:1.1;color:#0D1F3C;max-width:680px;margin-bottom:18px;}
                .mp-lead{font-size:17px;color:#64748B;max-width:580px;line-height:1.75;margin-bottom:60px;}

                /* DARK SECTION */
                .mp-dark{background:#0D1F3C;}
                .mp-dark .mp-h2{color:#fff;}
                .mp-dark .mp-lead{color:rgba(255,255,255,0.5);}
                .mp-dark .mp-mono{color:#0FA3A0;}

                /* OFF SECTION */
                .mp-off{background:#F4F7FB;}

                /* PROBLEM — 2 col layout */
                .mp-prob-layout{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start;}
                .mp-prob-left{}
                .mp-prob-cards{display:flex;flex-direction:column;gap:16px;}
                .mp-prob-card{background:#fff;border:1px solid #E8EEF4;border-radius:6px;padding:28px 24px;display:flex;gap:20px;align-items:flex-start;}
                .mp-prob-card-accent{width:4px;flex-shrink:0;border-radius:2px;align-self:stretch;}
                .mp-prob-card-num{font-family:'DM Serif Display',serif;font-size:36px;line-height:1;flex-shrink:0;width:90px;}
                .mp-prob-card-body{}
                .mp-prob-card-label{font-size:14px;font-weight:500;color:#0D1F3C;margin-bottom:5px;line-height:1.4;}
                .mp-prob-card-src{font-size:11px;color:#94A3B8;font-style:italic;}

                /* DETECTION GAP — simple two column callout */
                .mp-gap-box{background:#0D1F3C;border-radius:8px;padding:40px 44px;margin-top:0;}
                .mp-gap-box p{font-size:17px;color:rgba(255,255,255,0.82);line-height:1.8;font-style:italic;}
                .mp-gap-box p strong{color:#fff;font-style:normal;}
                .mp-gap-box cite{display:block;margin-top:16px;font-size:12px;color:rgba(255,255,255,0.3);font-style:normal;font-family:'DM Mono',monospace;letter-spacing:0.06em;}

                /* HOW IT WORKS — horizontal chain */
                .mp-chain{display:grid;grid-template-columns:repeat(6,1fr);position:relative;margin-bottom:40px;}
                .mp-chain-line{position:absolute;top:22px;left:calc(8.33% + 16px);right:calc(8.33% + 16px);height:1px;background:#E8EEF4;}
                .mp-chain-step{display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 6px;position:relative;z-index:1;}
                .mp-chain-dot{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'DM Serif Display',serif;font-size:17px;color:#fff;margin-bottom:16px;flex-shrink:0;}
                .mp-odd .mp-chain-dot{background:#0D1F3C;}
                .mp-even .mp-chain-dot{background:#0B7A75;}
                .mp-chain-entity{font-size:11px;font-weight:500;color:#0D1F3C;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:5px;}
                .mp-chain-desc{font-size:10px;color:#94A3B8;line-height:1.5;}
                .mp-tx-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center;}
                .mp-tx-pill{background:#F4F7FB;border:1px solid #E8EEF4;border-radius:100px;padding:7px 16px;font-family:'DM Mono',monospace;font-size:11px;color:#0D1F3C;}
                .mp-tx-pill b{color:#0B7A75;}

                /* WHAT MEDISYNS IS — 3 cards */
                .mp-what-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;border-radius:8px;overflow:hidden;}
                .mp-what-card{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.07);padding:36px 30px;}
                .mp-what-card:hover{background:rgba(11,122,117,0.08);border-color:rgba(11,122,117,0.3);}
                .mp-what-top{display:flex;align-items:center;gap:12px;margin-bottom:18px;}
                .mp-what-icon{width:36px;height:36px;background:rgba(11,122,117,0.2);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;}
                .mp-what-card h3{font-size:15px;font-weight:500;color:#fff;margin:0;}
                .mp-what-card p{font-size:13px;color:rgba(255,255,255,0.45);line-height:1.75;}

                /* PROVINCIAL PAIN POINTS */
                .mp-pain-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}
                .mp-pain-card{background:#fff;border:1px solid #E8EEF4;border-radius:6px;padding:32px 28px;position:relative;overflow:hidden;}
                .mp-pain-card::after{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:#0B7A75;}
                .mp-pain-card h3{font-size:15px;font-weight:500;color:#0D1F3C;margin-bottom:10px;}
                .mp-pain-card p{font-size:13px;color:#64748B;line-height:1.75;}
                .mp-pain-tag{display:inline-block;background:#F4F7FB;border:1px solid #E8EEF4;border-radius:100px;padding:4px 12px;font-family:'DM Mono',monospace;font-size:10px;color:#0B7A75;margin-bottom:14px;letter-spacing:0.06em;text-transform:uppercase;}

                /* ROADMAP */
                .mp-phases{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
                .mp-phase{border-radius:6px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);}
                .mp-phase-head{padding:28px 26px 20px;}
                .mp-phase-1 .mp-phase-head{background:rgba(11,122,117,0.15);}
                .mp-phase-2 .mp-phase-head{background:rgba(26,86,160,0.15);}
                .mp-phase-3 .mp-phase-head{background:rgba(200,148,15,0.12);}
                .mp-phase-step{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px;}
                .mp-phase-1 .mp-phase-step{color:#0FA3A0;}
                .mp-phase-2 .mp-phase-step{color:#60A5FA;}
                .mp-phase-3 .mp-phase-step{color:#C8940F;}
                .mp-phase-title{font-family:'DM Serif Display',serif;font-size:22px;color:#fff;line-height:1.2;margin-bottom:5px;}
                .mp-phase-time{font-size:12px;color:rgba(255,255,255,0.4);font-style:italic;}
                .mp-phase-body{padding:20px 26px 26px;background:rgba(255,255,255,0.03);}
                .mp-phase-body p{font-size:13px;color:rgba(255,255,255,0.5);line-height:1.75;margin-bottom:18px;}
                .mp-phase-badge{display:inline-flex;padding:8px 16px;border-radius:3px;font-family:'DM Mono',monospace;font-size:12px;font-weight:500;color:#0D1F3C;background:#C8940F;}

                /* WHO WE'RE LOOKING FOR */
                .mp-audience-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
                .mp-audience-card{background:#fff;border:1px solid #E8EEF4;border-radius:6px;padding:24px 20px;text-align:center;}
                .mp-audience-icon{font-size:28px;margin-bottom:12px;}
                .mp-audience-card h3{font-size:13px;font-weight:500;color:#0D1F3C;margin-bottom:6px;}
                .mp-audience-card p{font-size:12px;color:#94A3B8;line-height:1.6;}

                /* CTA */
                .mp-cta{background:#0B7A75;padding:100px 56px;text-align:center;}
                .mp-cta-inner{max-width:680px;margin:0 auto;}
                .mp-cta h2{font-family:'DM Serif Display',serif;font-size:clamp(32px,4vw,52px);color:#fff;margin-bottom:18px;line-height:1.1;}
                .mp-cta p{font-size:18px;color:rgba(255,255,255,0.72);margin-bottom:44px;line-height:1.7;}
                .mp-cta-form{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
                .mp-cta-input{flex:1;min-width:200px;max-width:280px;padding:15px 20px;border-radius:3px;border:none;font-size:15px;font-family:'DM Sans',sans-serif;background:rgba(255,255,255,0.15);color:#fff;outline:none;}
                .mp-cta-input::placeholder{color:rgba(255,255,255,0.45);}
                .mp-cta-name{flex:1;min-width:160px;max-width:200px;padding:15px 20px;border-radius:3px;border:none;font-size:15px;font-family:'DM Sans',sans-serif;background:rgba(255,255,255,0.15);color:#fff;outline:none;}
                .mp-cta-name::placeholder{color:rgba(255,255,255,0.45);}
                .mp-cta-btn{padding:15px 32px;border-radius:3px;background:#0D1F3C;color:#fff;border:none;cursor:pointer;font-size:14px;font-weight:500;font-family:'DM Sans',sans-serif;white-space:nowrap;}
                .mp-cta-btn:hover{background:#0a1628;}
                .mp-cta-note{font-size:12px;color:rgba(255,255,255,0.4);margin-top:20px;}

                /* FOOTER */
                .mp-footer{background:#0D1F3C;padding:36px 56px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;border-top:1px solid rgba(255,255,255,0.06);}
                .mp-footer-left{display:flex;align-items:center;gap:10px;}
                .mp-footer-hex{width:22px;height:22px;background:#0B7A75;clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);}
                .mp-footer-name{font-family:'DM Serif Display',serif;font-size:16px;color:#fff;}
                .mp-footer-meta{font-size:11px;color:rgba(255,255,255,0.25);font-family:'DM Mono',monospace;letter-spacing:0.04em;}
            `}</style>

            <div className="mp-body">

                {/* NAV */}
                <div className="mp-nav">
                    <div className="mp-nav-brand">
                        <div className="mp-nav-hex" />
                        <span className="mp-nav-name">Medisyns</span>
                    </div>
                    <div className="mp-nav-links">
                        <a href="#problem">The problem</a>
                        <a href="#how">How it works</a>
                        <a href="#provincial">For provinces</a>
                        <a href="#roadmap">Roadmap</a>
                        <a href="#contact" className="mp-nav-pill">Start a conversation</a>
                    </div>
                </div>

                {/* HERO */}
                <div className="mp-hero">
                    <div className="mp-hero-dots" />
                    <div className="mp-hero-glow" />
                    <div className="mp-hero-glow2" />
                    <div className="mp-hero-inner">
                        <div className="mp-eyebrow">Provincial health system infrastructure</div>
                        <h1 className="mp-h1">
                            Canada's prescription system<br />
                            has a <em>verification gap.</em><br />
                            Medisyns closes it.
                        </h1>
                        <p className="mp-hero-body">
                            A permissioned blockchain protocol that connects provincial health registries, insurers, physicians, and pharmacies into a single real-time verification layer — giving provinces the audit infrastructure they've never had.
                        </p>
                        <div className="mp-hero-cta">
                            <a href="#contact" className="mp-btn-main">
                                Start a conversation
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </a>
                            <a href="#how" className="mp-btn-ghost">
                                See how it works
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </a>
                        </div>

                        <div className="mp-stats">
                            {[
                                {n:["$550M","–$2.75B"],l:"Public sector Rx fraud losses",s:"Lexology 2018 — Canada"},
                                {n:["~15"," yrs"],l:"Between pharmacy inspections in Ontario",s:"Only 6.7% inspected in 2016 — Ontario MOH"},
                                {n:["Zero",""],l:"National real-time fraud detection systems",s:"No dedicated federal oversight body"},
                                {n:["Aug ","2027"],l:"FHCPS federal contract renewal window",s:"Primary federal procurement opportunity"},
                            ].map((s,i) => (
                                <div key={i} className="mp-stat" style={{paddingLeft: i > 0 ? "40px" : "0"}}>
                                    <div className="mp-stat-n">{s.n[0]}<span>{s.n[1]}</span></div>
                                    <div className="mp-stat-l">{s.l}</div>
                                    <div className="mp-stat-s">{s.s}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* PROBLEM */}
                <div className="mp-section mp-off" id="problem">
                    <div className="mp-section-inner">
                        <div className="mp-prob-layout">
                            <div className="mp-prob-left">
                                <div className="mp-mono">The problem</div>
                                <h2 className="mp-h2">Provincial health systems are flying blind on prescription fraud</h2>
                                <p className="mp-lead">Every fraud estimate in the public record is based only on what was caught. The detection infrastructure to know the real number doesn't exist — yet.</p>
                                <div className="mp-gap-box">
                                    <p><strong>"You cannot know the true prescription fraud rate without a system like Medisyns in place."</strong> Every figure cited in provincial reports is based only on detected fraud. A pharmacy in Ontario can go 15 years without a single inspection. The data gap isn't a reporting problem — it's an infrastructure problem.</p>
                                    <cite>— Core Medisyns thesis</cite>
                                </div>
                            </div>
                            <div className="mp-prob-cards">
                                {[
                                    {color:"#B83030",n:"6.7%",l:"of Ontario pharmacies inspected in 2016",s:"Ontario MOH — 286 of 4,260 pharmacies"},
                                    {color:"#0D1F3C",n:"~15 yrs",l:"average gap between pharmacy inspections at that rate",s:"At 2016 inspection frequency"},
                                    {color:"#0B7A75",n:"$550M–$2.75B",l:"public sector prescription fraud losses annually",s:"Lexology 2018 — Canada"},
                                    {color:"#C8940F",n:"Unknown",l:"true national fraud rate — detection infrastructure doesn't exist",s:"No baseline has ever been established"},
                                ].map((c,i) => (
                                    <div key={i} className="mp-prob-card">
                                        <div className="mp-prob-card-accent" style={{background:c.color}} />
                                        <div className="mp-prob-card-num" style={{color:c.color}}>{c.n}</div>
                                        <div className="mp-prob-card-body">
                                            <div className="mp-prob-card-label">{c.l}</div>
                                            <div className="mp-prob-card-src">{c.s}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* HOW IT WORKS */}
                <div className="mp-section" id="how">
                    <div className="mp-section-inner">
                        <div className="mp-mono">How it works</div>
                        <h2 className="mp-h2">A verification event at every step of the prescription chain</h2>
                        <p className="mp-lead">Medisyns sits as a neutral protocol layer between existing systems. Nothing gets replaced. Every party connects via API. Every event is logged, auditable, and billable.</p>
                        <div className="mp-chain">
                            <div className="mp-chain-line" />
                            {[
                                {n:"1",e:"Provincial registry",d:"Patient confirmed as eligible — alive, enrolled, active",odd:true},
                                {n:"2",e:"Insurer / payer",d:"Coverage and formulary confirmed in real time",odd:false},
                                {n:"3",e:"Physician",d:"Prescribing authority verified across registries",odd:true},
                                {n:"4",e:"Prior auth",d:"Authorization confirmed before dispensing",odd:false},
                                {n:"5",e:"Pharmacy",d:"Dispense confirmed, cross-system duplication checked",odd:true},
                                {n:"6",e:"Patient record",d:"Benefit balance updated on auditable ledger",odd:false},
                            ].map(s => (
                                <div key={s.n} className={`mp-chain-step ${s.odd ? "mp-odd" : "mp-even"}`}>
                                    <div className="mp-chain-dot">{s.n}</div>
                                    <div className="mp-chain-entity">{s.e}</div>
                                    <div className="mp-chain-desc">{s.d}</div>
                                </div>
                            ))}
                        </div>
                        <div className="mp-tx-row">
                            {[
                                ["Eligibility verification","$0.10"],
                                ["Coverage check","$0.10"],
                                ["Prescriber verify","$0.10"],
                                ["Prior authorization","$0.50"],
                                ["Dispense + fraud flag","$0.25"],
                                ["Record write-back","$0.10"],
                            ].map(([l,p]) => (
                                <div key={l} className="mp-tx-pill">{l} <b>{p}</b></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* WHAT MEDISYNS IS */}
                <div className="mp-section mp-dark">
                    <div className="mp-section-inner">
                        <div className="mp-mono">The protocol</div>
                        <h2 className="mp-h2">Not a product. Not another EHR. A neutral open standard.</h2>
                        <p className="mp-lead">Like TCP/IP — Medisyns is infrastructure. It doesn't replace provincial systems. It connects them. Any compliant system can integrate. No vendor lock-in.</p>
                        <div className="mp-what-grid">
                            {[
                                {icon:"⬡",t:"Open protocol",b:"Governed by Medisyns Foundation (non-profit). Any provincial system, insurer, or pharmacy network can integrate. The standard belongs to no single vendor."},
                                {icon:"🔒",t:"Patient data stays off-chain",b:"Hyperledger Fabric. Patient PII never touches the ledger — only cryptographic event hashes. Fully PIPEDA and ITSG-33 compliant by architecture."},
                                {icon:"📋",t:"FHIR R4 native",b:"Built to the international healthcare interoperability standard. Compatible with every compliant provincial system today and any future procurement."},
                                {icon:"📊",t:"Continuous audit trail",b:"Every transaction timestamped and logged. The same record that satisfies a regulator generates the monthly invoice. One source of truth."},
                                {icon:"🛡",t:"Patent protected",b:"Protocol architecture, smart contract logic, and billing layer protected by patent applications filed in both the US and Canada."},
                                {icon:"⚖",t:"Dual-entity governance",b:"Medisyns Foundation governs the open standard. Medisyns Inc. operates the infrastructure. Provincial ministries deal with a neutral protocol, not a proprietary vendor."},
                            ].map(c => (
                                <div key={c.t} className="mp-what-card">
                                    <div className="mp-what-top">
                                        <div className="mp-what-icon">{c.icon}</div>
                                        <h3>{c.t}</h3>
                                    </div>
                                    <p>{c.b}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* PROVINCIAL PAIN POINTS */}
                <div className="mp-section mp-off" id="provincial">
                    <div className="mp-section-inner">
                        <div className="mp-mono">For provincial health systems</div>
                        <h2 className="mp-h2">The problems Medisyns solves for provinces, ministries, and health authorities</h2>
                        <p className="mp-lead">Whether you're a minister looking at budget leakage, a CIO evaluating interoperability, or a health authority managing coordination of benefits — Medisyns addresses the same underlying gap.</p>
                        <div className="mp-pain-grid">
                            {[
                                {tag:"Budget & fraud",t:"Unknown fraud losses draining public health budgets",b:"Public sector prescription fraud losses are estimated at $550M–$2.75B annually in Canada — but no province has a real-time baseline. Medisyns doesn't model the fraud rate. It builds the infrastructure to measure it for the first time."},
                                {tag:"Interoperability",t:"Provincial and private systems don't talk to each other",b:"When a patient has OHIP and a private employer plan, coordination of benefits requires two separate systems to verify in real time. Right now that process is slow, manual, and fraud-prone. Medisyns is the protocol layer that connects them."},
                                {tag:"Audit & compliance",t:"Pharmacy oversight is periodic, not continuous",b:"Ontario pharmacies are inspected on average once every 15 years. Medisyns replaces periodic inspection with a continuous, automated audit trail — every dispense event logged, timestamped, and cross-referenced across all connected parties."},
                                {tag:"Procurement readiness",t:"FHIR R4 and ITSG-33 compliance built in from day one",b:"Medisyns is designed to meet federal and provincial procurement requirements without modification. PIPEDA compliant, ITSG-33 certified, SOC 2 Type II, FHIR R4 native. No retrofitting required for government procurement."},
                            ].map(c => (
                                <div key={c.t} className="mp-pain-card">
                                    <div className="mp-pain-tag">{c.tag}</div>
                                    <h3>{c.t}</h3>
                                    <p>{c.b}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ROADMAP */}
                <div className="mp-section mp-dark" id="roadmap">
                    <div className="mp-section-inner">
                        <div className="mp-mono">Roadmap</div>
                        <h2 className="mp-h2">A federal pilot becomes a national standard</h2>
                        <p className="mp-lead">Medisyns is currently in active pilot discussions with Veterans Affairs Canada and Medavie Blue Cross. Provincial health systems are Phase 2 — and the entry point is easier than a full provincial procurement.</p>
                        <div className="mp-phases">
                            {[
                                {cls:"mp-phase-1",step:"Phase 1 — 2025–2027",t:"Federal pilot",time:"VAC × Medavie Blue Cross · 200K veterans",b:"Prove the protocol in production. Build the fraud baseline data. Target the FHCPS federal contract renewal in August 2027 as the first formal procurement event.",badge:"Active"},
                                {cls:"mp-phase-2",step:"Phase 2 — 2027–2028",t:"Ontario entry",time:"OHIP × Private insurers · 8M+ dual-insured",b:"Coordination of benefits between OHIP and employer plans is the fastest provincial entry point — same verification gap as the federal pilot, no full ministry procurement required to start.",badge:"~$2M–$8M ARR"},
                                {cls:"mp-phase-3",step:"Phase 3 — 2028–2030",t:"National standard",time:"Canada Health Infoway · all provinces",b:"Ministerial endorsements create horizontal spread. Canada Health Infoway accelerates adoption. Medisyns becomes the national prescription verification standard.",badge:"$20M+ ARR"},
                            ].map(p => (
                                <div key={p.t} className={`mp-phase ${p.cls}`}>
                                    <div className="mp-phase-head">
                                        <div className="mp-phase-step">{p.step}</div>
                                        <div className="mp-phase-title">{p.t}</div>
                                        <div className="mp-phase-time">{p.time}</div>
                                    </div>
                                    <div className="mp-phase-body">
                                        <p>{p.b}</p>
                                        <div className="mp-phase-badge">{p.badge}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* WHO WE WANT TO TALK TO */}
                <div className="mp-section mp-off">
                    <div className="mp-section-inner">
                        <div className="mp-mono">Who should reach out</div>
                        <h2 className="mp-h2">We're looking for the right conversations, not the right titles</h2>
                        <p className="mp-lead">If you work in or with provincial health systems and you recognize the problem — we'd like to talk. There's no minimum scope to start a conversation.</p>
                        <div className="mp-audience-grid">
                            {[
                                {icon:"🏛",t:"Health ministers & political offices",b:"Looking for policy wins on healthcare budget integrity and fraud prevention"},
                                {icon:"📋",t:"Deputy ministers & senior bureaucrats",b:"Evaluating interoperability investments and provincial data governance"},
                                {icon:"💻",t:"CIOs & technical procurement",b:"Assessing FHIR R4 compliant infrastructure for provincial health systems"},
                                {icon:"🤝",t:"Canada Health Infoway",b:"Exploring national interoperability standards and protocol layer investments"},
                            ].map(a => (
                                <div key={a.t} className="mp-audience-card">
                                    <div className="mp-audience-icon">{a.icon}</div>
                                    <h3>{a.t}</h3>
                                    <p>{a.b}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mp-cta" id="contact">
                    <div className="mp-cta-inner">
                        <h2>Start the conversation</h2>
                        <p>No pitch deck required. If you work in or with provincial health systems and you recognize the problem Medisyns solves — leave your details and we'll reach out within 48 hours.</p>
                        <div className="mp-cta-form">
                            <input className="mp-cta-name" type="text" placeholder="Your name" />
                            <input className="mp-cta-input" type="email" placeholder="Work email" />
                            <button className="mp-cta-btn">Get in touch</button>
                        </div>
                        <div className="mp-cta-note">Patent pending US & CA · Confidential · We do not share your information</div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="mp-footer">
                    <div className="mp-footer-left">
                        <div className="mp-footer-hex" />
                        <span className="mp-footer-name">Medisyns</span>
                    </div>
                    <div className="mp-footer-meta">PIPEDA · ITSG-33 · FHIR R4 · SOC 2 Type II · Hyperledger Fabric · Governed by Ontario Law</div>
                </div>

            </div>
        </div>
    )
}
