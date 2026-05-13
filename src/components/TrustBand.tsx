const signals = [
  {
    title: "Designed around CoAEMSP workflows",
    body: "Built around the V2 SMC structure from day one — not adapted from a nursing LMS or a generic tracking tool.",
  },
  {
    title: "Informed by real accreditation pain points",
    body: "Manual spreadsheet compilation, lost paper logs, last-minute site visit scrambles. We built against all of it.",
  },
  {
    title: "The terminology matches your world",
    body: "Rotations, preceptors, capstone assessments, clinical sites — not \"courses,\" \"modules,\" or \"assignments.\"",
  },
  {
    title: "No IT department required",
    body: "Students log from their phones. Directors pull reports on demand. Setup takes hours, not months.",
  },
];

export default function TrustBand() {
  return (
    <section style={{
      padding: "var(--section-py) 0",
      borderTop: "1px solid var(--border)",
      background: "var(--elevated)",
    }}>
      <div className="container">

        {/* Intro */}
        <div style={{
          maxWidth: 600,
          margin: "0 auto 3.5rem",
          textAlign: "center",
        }}>
          <div className="label-tag" style={{ marginBottom: "1.25rem" }}>
            Built for EMS education
          </div>
          <h2 style={{
            fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
            color: "var(--text)",
            marginBottom: "1rem",
          }}>
            Not adapted. Built from scratch.
          </h2>
          <p style={{
            color: "var(--secondary)",
            fontSize: "1.0625rem",
            lineHeight: 1.7,
          }}>
            PraxisEMS was designed around how CoAEMSP accreditation actually works — by people who have lived the operational side of paramedic education.
          </p>
        </div>

        {/* Signals grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem 4rem",
          maxWidth: 820,
          margin: "0 auto",
        }} className="trust-grid">
          {signals.map((s, i) => (
            <div key={i} style={{
              paddingLeft: "1.125rem",
              borderLeft: "2px solid rgba(245,158,11,.4)",
            }}>
              <h3 style={{
                fontFamily: "var(--font-body)",
                fontSize: ".9375rem",
                fontWeight: 600,
                color: "var(--text)",
                marginBottom: ".375rem",
                lineHeight: 1.4,
              }}>
                {s.title}
              </h3>
              <p style={{
                color: "var(--secondary)",
                fontSize: ".875rem",
                lineHeight: 1.7,
                margin: 0,
              }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
