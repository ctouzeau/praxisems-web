import Link from "next/link";
import Image from "next/image";

const proofPoints = [
  "Setup in minutes, not months",
  "Built around real CoAEMSP program workflows",
  "No IT department. No subscription.",
];

export default function FinalCTA() {
  return (
    <section style={{
      padding: "var(--section-py) 0",
      borderTop: "1px solid var(--border)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Ambient glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 55% 70% at 30% 50%, rgba(245,158,11,.06), transparent)",
      }} />

      <div className="container" style={{ position: "relative" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }} className="cta-grid">

          {/* Left: copy */}
          <div>
            <div className="label-tag" style={{ marginBottom: "1.375rem", display: "inline-flex" }}>
              Get started
            </div>
            <h2 style={{
              fontSize: "clamp(1.875rem, 3.5vw, 3rem)",
              color: "var(--text)",
              marginBottom: "1.75rem",
              lineHeight: 1.15,
              letterSpacing: "-.01em",
            }}>
              Ready to stop managing paperwork and start managing outcomes?
            </h2>

            {/* Proof points */}
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem" }}>
              {proofPoints.map((p, i) => (
                <li key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: ".75rem",
                  marginBottom: ".625rem",
                  fontSize: ".9375rem",
                  color: "var(--secondary)",
                  lineHeight: 1.5,
                }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                    <path d="M3 8l3.5 3.5L13 5" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {p}
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div style={{ display: "flex", gap: ".875rem", flexWrap: "wrap" }}>
              <Link href="/demo" className="btn-primary" style={{ fontSize: ".9375rem", padding: ".75rem 1.875rem" }}>
                Book a Demo →
              </Link>
              <a href="mailto:hello@praxisems.com" className="btn-ghost" style={{ fontSize: ".9375rem", padding: ".75rem 1.875rem" }}>
                Email us
              </a>
            </div>

            <p style={{ marginTop: "1.25rem", fontSize: ".8125rem", color: "var(--muted)" }}>
              $99 per seat · One-time · No subscription
            </p>
          </div>

          {/* Right: mini screenshot */}
          <div className="cta-screenshot" style={{ position: "relative" }}>
            {/* Subtle outer glow behind the frame */}
            <div style={{
              position: "absolute", inset: -24,
              background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(245,158,11,.06), transparent)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "relative",
              background: "#070a14",
              border: "1px solid #1e2940",
              borderRadius: 10,
              overflow: "hidden",
              boxShadow: "0 24px 60px rgba(0,0,0,.55), 0 0 0 1px rgba(255,255,255,.04)",
            }}>
              {/* Browser chrome */}
              <div style={{
                background: "#050810",
                padding: "8px 12px",
                borderBottom: "1px solid #1e2940",
                display: "flex", alignItems: "center", gap: 5,
              }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#ffbd2e" }} />
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#28c840" }} />
                <div style={{
                  flex: 1, background: "#0a0e1a", borderRadius: 4,
                  padding: "2px 8px", marginLeft: 4,
                  color: "#4a5568", fontSize: 9,
                  fontFamily: "var(--font-mono)",
                }}>
                  app.praxisems.com/summative
                </div>
              </div>
              {/* Screenshot clipped to top portion */}
              <div style={{ overflow: "hidden", maxHeight: 320, lineHeight: 0 }}>
                <Image
                  src="/screenshots/shift-log-list.png"
                  alt="Shift log view — real student submissions"
                  width={1440}
                  height={860}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  priority={false}
                />
              </div>
            </div>
            <p style={{
              marginTop: ".875rem",
              fontSize: ".8125rem",
              color: "var(--muted)",
              textAlign: "center",
            }}>
              Real shift submissions from a live program.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
