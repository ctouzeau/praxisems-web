function PainIcon({ paths }: { paths: string[] }) {
  return (
    <div style={{
      width: 38, height: 38, flexShrink: 0,
      background: "rgba(245,158,11,.08)",
      border: "1px solid rgba(245,158,11,.22)",
      borderRadius: 9,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        {paths.map((d, i) => (
          <path key={i} d={d} stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        ))}
      </svg>
    </div>
  );
}

const pains = [
  {
    paths: [
      "M9 5H7a1 1 0 00-1 1v10a1 1 0 001 1h6a1 1 0 001-1V6a1 1 0 00-1-1h-2",
      "M9 5a1 1 0 001 1h0a1 1 0 001-1V4a1 1 0 00-1-1h0a1 1 0 00-1 1v1z",
      "M7 10h6M7 13h4",
    ],
    text: "Manually compiling the Student Mastery Checklist from spreadsheets before every site visit.",
  },
  {
    paths: [
      "M6 2v4M14 2v4M3 8h14M5 4H3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1h-2",
      "M10 12v2M10 16h.01",
    ],
    text: "Chasing students for rotation logs and paper sign-off sheets weeks after their shifts.",
  },
  {
    paths: [
      "M3 17l4-6 3 3 3-5 4 8",
      "M3 3v14h14",
    ],
    text: "No real-time visibility into which students are behind — until it's too late to intervene.",
  },
];

export default function Problem() {
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
                <PainIcon paths={pain.paths} />
                <p style={{ color: "var(--secondary)", fontSize: ".9375rem", lineHeight: 1.6, margin: 0 }}>
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
