export default function Problem() {
  const pains = [
    {
      icon: "📋",
      text: "Manually compiling the Student Mastery Checklist from spreadsheets before every site visit.",
    },
    {
      icon: "📧",
      text: "Chasing students for rotation logs and paper sign-off sheets weeks after their shifts.",
    },
    {
      icon: "📊",
      text: "No real-time visibility into which students are behind — until it's too late to intervene.",
    },
  ];

  return (
    <section style={{
      padding: "var(--section-py) 0",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      background: "var(--surface)",
    }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }} className="problem-grid">

          {/* Left: headline */}
          <div>
            <div className="label-tag" style={{ marginBottom: "1.25rem" }}>The problem</div>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "var(--text)", marginBottom: "1.25rem" }}>
              Managing accreditation shouldn&apos;t feel like this.
            </h2>
            <p style={{ color: "var(--secondary)", lineHeight: 1.75, fontSize: "1rem" }}>
              Between disconnected tools and manual SMC compilations, most program directors spend more time managing paperwork than managing outcomes. FISDAP and EMCE were built for a different era.
            </p>
            <p style={{ color: "var(--secondary)", lineHeight: 1.75, fontSize: "1rem", marginTop: "1rem" }}>
              PraxisEMS was built from the ground up for how modern paramedic programs actually run.
            </p>
          </div>

          {/* Right: pain points */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {pains.map((pain, i) => (
              <div key={i} style={{
                display: "flex", gap: "1rem", alignItems: "flex-start",
                background: "var(--elevated)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "1.125rem 1.25rem",
              }}>
                <span style={{ fontSize: "1.25rem", flexShrink: 0, marginTop: 1 }}>{pain.icon}</span>
                <p style={{ color: "var(--secondary)", fontSize: ".9375rem", lineHeight: 1.6 }}>
                  {pain.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
