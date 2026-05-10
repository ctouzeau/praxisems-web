import Link from "next/link";

export default function FinalCTA() {
  return (
    <section style={{
      padding: "var(--section-py) 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "60%",
        height: "100%",
        background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(245,158,11,.07), transparent)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", textAlign: "center" }}>
        <div className="label-tag" style={{ marginBottom: "1.25rem", display: "inline-flex" }}>
          Get started
        </div>
        <h2 style={{
          fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
          color: "var(--text)",
          marginBottom: "1.25rem",
          letterSpacing: "-.01em",
        }}>
          Ready to stop managing<br />paperwork and start managing outcomes?
        </h2>
        <p style={{
          color: "var(--secondary)",
          fontSize: "1.0625rem",
          maxWidth: 480,
          margin: "0 auto 2.25rem",
          lineHeight: 1.7,
        }}>
          Book a 30-minute demo and we&apos;ll show you how PraxisEMS works inside a real program — from setup to SMC export.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/demo" className="btn-primary" style={{ fontSize: "1rem", padding: ".75rem 2rem" }}>
            Book a Demo →
          </Link>
          <a href="mailto:hello@praxisems.com" className="btn-ghost" style={{ fontSize: "1rem", padding: ".75rem 2rem" }}>
            Email us
          </a>
        </div>
        <p style={{ marginTop: "1.5rem", fontSize: ".8125rem", color: "var(--muted)" }}>
          $99 per seat · One-time · No subscription
        </p>
      </div>
    </section>
  );
}
