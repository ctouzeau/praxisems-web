const rows = [
  {
    legacy: "Spreadsheet-heavy workflows and manual data entry",
    modern: "Unified operational platform — one place for everything",
  },
  {
    legacy: "Retrospective reporting compiled at the last minute",
    modern: "Real-time visibility into every student, every day",
  },
  {
    legacy: "Manual SMC compilation before each site visit",
    modern: "One-click export — always current, always ready",
  },
  {
    legacy: "Rotation scheduling managed outside the system",
    modern: "Integrated scheduling with auto-generated log entries",
  },
  {
    legacy: "Paper sign-offs and chasing logs after the fact",
    modern: "Mobile-first logging from the field, right after the shift",
  },
  {
    legacy: "Months of setup, IT involvement required",
    modern: "Live in hours — no IT department needed",
  },
];

function X() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M3 3l8 8M11 3L3 11" stroke="#4a5568" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M2.5 7l3 3L11.5 4" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Comparison() {
  return (
    <section style={{
      padding: "var(--section-py) 0",
      borderTop: "1px solid var(--border)",
      background: "var(--surface)",
    }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="label-tag" style={{ marginBottom: "1.25rem" }}>
            Built for modern EMS programs
          </div>
          <h2 style={{
            fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
            color: "var(--text)",
            marginBottom: "1rem",
          }}>
            A different approach to clinical operations.
          </h2>
          <p style={{
            color: "var(--secondary)",
            fontSize: "1.0625rem",
            maxWidth: 480,
            margin: "0 auto",
          }}>
            Legacy platforms were built for a different era. PraxisEMS was built for how programs actually run today.
          </p>
        </div>

        {/* Comparison table */}
        <div style={{ maxWidth: 820, margin: "0 auto" }}>

          {/* Column headers */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
            marginBottom: ".75rem",
          }} className="comparison-grid">
            <div style={{
              padding: ".5rem 1.25rem .5rem 0",
              fontSize: ".75rem",
              fontFamily: "var(--font-mono)",
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}>
              Traditional systems
            </div>
            <div style={{
              padding: ".5rem 0 .5rem 1.25rem",
              fontSize: ".75rem",
              fontFamily: "var(--font-mono)",
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "rgba(245,158,11,.7)",
            }}>
              PraxisEMS
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              borderTop: "1px solid var(--border)",
            }} className="comparison-grid">
              {/* Legacy */}
              <div style={{
                display: "flex",
                gap: ".75rem",
                alignItems: "flex-start",
                padding: "1.125rem 1.25rem 1.125rem 0",
                borderRight: "1px solid var(--border)",
              }}>
                <X />
                <p style={{
                  color: "var(--muted)",
                  fontSize: ".9rem",
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {row.legacy}
                </p>
              </div>
              {/* Modern */}
              <div style={{
                display: "flex",
                gap: ".75rem",
                alignItems: "flex-start",
                padding: "1.125rem 0 1.125rem 1.25rem",
              }}>
                <Check />
                <p style={{
                  color: "var(--text)",
                  fontSize: ".9rem",
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {row.modern}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>

      </div>
    </section>
  );
}
