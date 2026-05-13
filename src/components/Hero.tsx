import Link from "next/link";

function DashboardMockup() {
  const navItems = [
    { active: true,  w: 72 },
    { active: false, w: 60 },
    { active: false, w: 80 },
    { active: false, w: 68 },
    { active: false, w: 56 },
    { active: false, w: 76 },
  ];
  const stats = [
    { value: "24", color: "#f59e0b", labelW: 80 },
    { value: "18", color: "#10b981", labelW: 64 },
    { value: "3",  color: "#f59e0b", labelW: 72 },
    { value: "2",  color: "#ef4444", labelW: 56 },
  ];
  const bars = [{ pct: 78, color: "#10b981" }, { pct: 51, color: "#f59e0b" }, { pct: 89, color: "#10b981" }];

  return (
    <div style={{
      background: "#070a14",
      borderRadius: 12,
      border: "1px solid #1e2940",
      overflow: "hidden",
      boxShadow: "0 40px 100px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.04)",
    }}>
      {/* Browser chrome */}
      <div style={{
        background: "#050810",
        padding: "10px 14px",
        borderBottom: "1px solid #1e2940",
        display: "flex", alignItems: "center", gap: 6,
      }}>
        <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#ff5f57", flexShrink: 0 }} />
        <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#ffbd2e", flexShrink: 0 }} />
        <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#28c840", flexShrink: 0 }} />
        <div style={{
          flex: 1, background: "#0a0e1a", borderRadius: 5,
          padding: "3px 10px", marginLeft: 6,
          color: "#4a5568", fontSize: 10, fontFamily: "var(--font-mono)",
        }}>
          app.praxisems.com/dashboard
        </div>
      </div>

      {/* App shell */}
      <div style={{ display: "flex", height: 340 }}>
        {/* Sidebar */}
        <div style={{
          width: 172, flexShrink: 0, background: "#050810",
          borderRight: "1px solid #1e2940", padding: "14px 10px",
          display: "flex", flexDirection: "column",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 18, paddingLeft: 6 }}>
            <div style={{
              width: 18, height: 18, borderRadius: 4, flexShrink: 0,
              background: "linear-gradient(145deg, #f59e0b 0%, #d97706 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="9" height="9" viewBox="0 0 20 20" fill="none">
                <rect x="2"  y="13" width="4" height="6"  rx="1.5" fill="white"/>
                <rect x="8"  y="8"  width="4" height="11" rx="1.5" fill="white"/>
                <rect x="14" y="2"  width="4" height="17" rx="1.5" fill="white"/>
              </svg>
            </div>
            <div style={{ width: 72, height: 8, background: "#1e2940", borderRadius: 2 }} />
          </div>
          {navItems.map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 7,
              padding: "6px 6px", borderRadius: 6, marginBottom: 2,
              background: item.active ? "rgba(245,158,11,.1)" : "transparent",
            }}>
              <div style={{
                width: 11, height: 11, borderRadius: 2, flexShrink: 0,
                background: item.active ? "#f59e0b" : "#1e2940",
              }} />
              <div style={{
                width: item.w, height: 7, borderRadius: 2,
                background: item.active ? "rgba(245,158,11,.25)" : "#1e2940",
              }} />
            </div>
          ))}
          <div style={{ marginTop: "auto", borderTop: "1px solid #1e2940", paddingTop: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 6px" }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#1e2940" }} />
              <div>
                <div style={{ width: 56, height: 7, background: "#2a3a5c", borderRadius: 2, marginBottom: 4 }} />
                <div style={{ width: 40, height: 5, background: "#1e2940", borderRadius: 2 }} />
              </div>
            </div>
          </div>
        </div>

        {/* Main */}
        <div style={{ flex: 1, padding: "18px 20px", overflow: "hidden" }}>
          {/* Greeting */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ width: 176, height: 13, background: "#2a3a5c", borderRadius: 3, marginBottom: 6 }} />
            <div style={{ width: 112, height: 8, background: "#1e2940", borderRadius: 3 }} />
          </div>
          {/* Stat cards */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 8, marginBottom: 14,
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                background: "#131929",
                border: `1px solid ${s.color}28`,
                borderRadius: 8, padding: "10px 10px",
              }}>
                <div style={{ width: s.labelW, height: 5, background: "#2a3a5c", borderRadius: 2, marginBottom: 7 }} />
                <div style={{ fontSize: 20, fontWeight: 700, color: s.color, lineHeight: 1, marginBottom: 5 }}>{s.value}</div>
                <div style={{ width: 44, height: 4, background: "#1e2940", borderRadius: 2 }} />
              </div>
            ))}
          </div>
          {/* Cohort health card */}
          <div style={{
            background: "#131929", border: "1px solid #1e2940",
            borderRadius: 8, padding: "12px 14px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <div style={{ width: 88, height: 7, background: "rgba(245,158,11,.3)", borderRadius: 2 }} />
              <div style={{ width: 56, height: 6, background: "#1e2940", borderRadius: 2 }} />
            </div>
            {bars.map((bar, i) => (
              <div key={i} style={{ marginBottom: i < bars.length - 1 ? 10 : 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <div style={{ width: 96, height: 6, background: "#2a3a5c", borderRadius: 2 }} />
                  <div style={{ width: 24, height: 6, background: "#2a3a5c", borderRadius: 2 }} />
                </div>
                <div style={{ height: 5, background: "#1e2940", borderRadius: 99 }}>
                  <div style={{
                    height: "100%", width: `${bar.pct}%`,
                    background: bar.color, borderRadius: 99,
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero-section" style={{
      position: "relative",
      paddingTop: "calc(64px + 80px)",
      paddingBottom: 80,
      overflow: "hidden",
    }}>
      {/* Background effects */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.01) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.01) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }} />
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "100%", height: 560,
        background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,158,11,.11), transparent)",
        zIndex: 0,
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Two-column layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }} className="hero-grid">

          {/* Left: copy */}
          <div>
            <div className="label-tag" style={{ marginBottom: "1.5rem" }}>
              Built for CoAEMSP paramedic programs
            </div>
            <h1 style={{
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              color: "var(--text)",
              marginBottom: "1.25rem",
              letterSpacing: "-.01em",
            }}>
              Clinical education,<br />
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>finally</em> under control.
            </h1>
            <p style={{
              fontSize: "1.125rem",
              color: "var(--secondary)",
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: 440,
              width: "100%",
            }}>
              PraxisEMS is the operational platform built for paramedic programs — rotation scheduling, clinical documentation, and accreditation reporting without the administrative overhead.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/demo" className="btn-primary">
                Book a Demo →
              </Link>
              <a href="#how-it-works" className="btn-ghost">
                See how it works
              </a>
            </div>
            {/* Trust line */}
            <p style={{
              marginTop: "1.5rem",
              fontSize: ".8125rem",
              color: "var(--muted)",
            }}>
              $99 per seat · One-time payment · No subscription
            </p>
          </div>

          {/* Right: mockup */}
          <div className="hero-mockup" style={{ position: "relative" }}>
            <div style={{
              position: "absolute", inset: -40,
              background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245,158,11,.07), transparent)",
              zIndex: 0,
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
