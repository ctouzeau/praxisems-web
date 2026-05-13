"use client";

function FeatureIcon({ path }: { path: string | string[] }) {
  const paths = Array.isArray(path) ? path : [path];
  return (
    <div style={{
      width: 44, height: 44,
      background: "rgba(245,158,11,.1)",
      border: "1px solid rgba(245,158,11,.2)",
      borderRadius: 11,
      display: "flex", alignItems: "center", justifyContent: "center",
      marginBottom: "1.25rem",
      flexShrink: 0,
    }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        {paths.map((p, i) => (
          <path key={i} d={p} stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        ))}
      </svg>
    </div>
  );
}

const features = [
  {
    icon: ["M3 17l4-6 3 3 3-5 4 8", "M3 3v14h14"],
    title: "CoAEMSP Reporting",
    headline: "Generate your SMC report in one click.",
    support: "Every contact, skill, and field hour is tracked and mapped automatically — nothing to compile before a site visit.",
  },
  {
    icon: ["M7 7a3 3 0 100 6 3 3 0 000-6zM1 17a6 6 0 0112 0", "M13 7a3 3 0 110 6M19 17a6 6 0 00-6-6"],
    title: "Real-Time Progress Tracking",
    headline: "Know exactly who's on track — and who needs attention.",
    support: "Every student's CoAEMSP benchmarks, visible at a glance, before it's too late to act.",
  },
  {
    icon: ["M6 2v4M14 2v4M3 8h14M5 4H3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1h-2", "M8 12h4M10 10v4"],
    title: "Rotation Scheduling",
    headline: "Students book their own shifts. Your calendar fills itself.",
    support: "Each booking auto-generates a draft log entry — the paperwork starts the moment a rotation is confirmed.",
  },
  {
    icon: ["M9 2H5a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V7l-4-5H9z", "M13 2v5h4M10 10v4M8 12h4"],
    title: "Shift Logging",
    headline: "No paper. No delays. No lost data.",
    support: "Students log contacts, skills, and hours from any device — right after a rotation ends.",
  },
  {
    icon: ["M8 3H5a1 1 0 00-1 1v3l-1 2v6a1 1 0 001 1h10a1 1 0 001-1V9l-1-2V4a1 1 0 00-1-1h-3", "M8 3v4H5M12 3v4h3M7 13h6"],
    title: "Formative Evaluations",
    headline: "Skills lab results flow straight into each student's record.",
    support: "Faculty evaluate once — no double entry, no separate tracking spreadsheet.",
  },
  {
    icon: ["M4 4h12a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z", "M7 8h6M7 11h4"],
    title: "Staff Review & Submissions",
    headline: "Every submission, centralized. Review or remove anything in seconds.",
    support: "One view for all directors and faculty — full audit trail, no bottlenecks.",
  },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "var(--section-py) 0" }}>
      <div className="container">
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="label-tag" style={{ marginBottom: "1.25rem" }}>Features</div>
          <h2 style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", color: "var(--text)", marginBottom: "1rem" }}>
            Everything your program needs.<br />Nothing it doesn&apos;t.
          </h2>
          <p style={{ color: "var(--secondary)", fontSize: "1.0625rem", maxWidth: 520, margin: "0 auto" }}>
            One platform covers the full lifecycle — from a student&apos;s first rotation to your CoAEMSP site visit report.
          </p>
        </div>

        {/* Feature grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }} className="features-grid">
          {features.map((f, i) => (
            <div key={i} style={{
              background: "var(--elevated)",
              border: "1px solid var(--border)",
              borderRadius: 14,
              padding: "1.75rem",
              transition: "border-color .15s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(245,158,11,.35)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <FeatureIcon path={f.icon} />
              <p style={{
                fontSize: ".6875rem",
                fontFamily: "var(--font-mono)",
                color: "var(--muted)",
                letterSpacing: ".08em",
                textTransform: "uppercase",
                marginBottom: ".5rem",
              }}>
                {f.title}
              </p>
              <h3 style={{
                fontFamily: "var(--font-body)",
                fontSize: ".9375rem",
                fontWeight: 600,
                color: "var(--text)",
                lineHeight: 1.45,
                marginBottom: ".5rem",
              }}>
                {f.headline}
              </h3>
              <p style={{ color: "var(--secondary)", fontSize: ".875rem", lineHeight: 1.65 }}>
                {f.support}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
