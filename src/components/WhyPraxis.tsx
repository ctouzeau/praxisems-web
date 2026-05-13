export default function WhyPraxis() {
  return (
    <section style={{
      padding: "var(--section-py) 0",
      borderTop: "1px solid var(--border)",
    }}>
      <div className="container">
        <div style={{ maxWidth: 740, margin: "0 auto" }}>

          <div className="label-tag" style={{ marginBottom: "1.875rem" }}>
            The name
          </div>

          {/* Definition block */}
          <div style={{
            paddingLeft: "1.5rem",
            borderLeft: "2px solid rgba(245,158,11,.45)",
            marginBottom: "2.75rem",
          }}>
            <p style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
              fontStyle: "italic",
              color: "var(--text)",
              lineHeight: 1.3,
              marginBottom: ".625rem",
            }}>
              prax·is&nbsp;&nbsp;<span style={{ color: "var(--muted)", fontSize: ".75em", fontStyle: "normal", fontFamily: "var(--font-mono)", letterSpacing: ".02em" }}>/ˈprak·səs/&nbsp;&nbsp;noun</span>
            </p>
            <p style={{
              color: "var(--secondary)",
              fontSize: "1rem",
              lineHeight: 1.75,
            }}>
              The process of turning theory into real-world practice — the bridge between what you know and what you can do under pressure.
            </p>
          </div>

          {/* Body — two columns */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem 3.5rem",
            marginBottom: "2.75rem",
          }} className="why-praxis-grid">
            <p style={{ color: "var(--secondary)", fontSize: "1rem", lineHeight: 1.8, margin: 0 }}>
              That&apos;s the core of paramedic education. Not lectures alone — patient care. Not theory in isolation — clinical judgment under pressure. The rotation, the shift, the patient contact, the competency check.
            </p>
            <p style={{ color: "var(--secondary)", fontSize: "1rem", lineHeight: 1.8, margin: 0 }}>
              PraxisEMS was built around that process. Every feature — from rotation scheduling to SMC reporting — exists to support the full cycle of clinical learning: preparation, practice, documentation, and accreditation.
            </p>
          </div>

          {/* Closing statement */}
          <div style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "1.875rem",
            textAlign: "center",
          }}>
            <p style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.0625rem, 2vw, 1.25rem)",
              fontStyle: "italic",
              color: "var(--text)",
              margin: 0,
            }}>
              The name reflects the mission. The software reflects the work.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
