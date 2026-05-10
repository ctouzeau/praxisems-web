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
    description: "Every patient contact, clinical skill, and field hour is mapped to your Student Mastery Checklist automatically. Generate a complete, accreditation-ready SMC report in one click — no more manual compilation before site visits.",
  },
  {
    icon: ["M7 7a3 3 0 100 6 3 3 0 000-6zM1 17a6 6 0 0112 0", "M13 7a3 3 0 110 6M19 17a6 6 0 00-6-6"],
    title: "Real-Time Progress Tracking",
    description: "See every student's completion status across all CoAEMSP benchmarks at a glance. Know who's on track, who's at risk, and who needs intervention — before it's too late to do anything about it.",
  },
  {
    icon: ["M6 2v4M14 2v4M3 8h14M5 4H3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1h-2", "M8 12h4M10 10v4"],
    title: "Rotation Scheduling",
    description: "Create rotation slots and let students book their own shifts. PraxisEMS automatically generates a draft log entry for every booking — so the paperwork starts itself the moment a rotation is confirmed.",
  },
  {
    icon: ["M9 2H5a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V7l-4-5H9z", "M13 2v5h4M10 10v4M8 12h4"],
    title: "Shift Logging",
    description: "Students log patient contacts by age group and chief complaint, clinical skills with success tracking, and hours — all from any device, right after a rotation ends. No paper. No delays. No lost data.",
  },
  {
    icon: ["M8 3H5a1 1 0 00-1 1v3l-1 2v6a1 1 0 001 1h10a1 1 0 001-1V9l-1-2V4a1 1 0 00-1-1h-3", "M8 3v4H5M12 3v4h3M7 13h6"],
    title: "Formative Evaluations",
    description: "Faculty administer skills lab evaluations directly in PraxisEMS. Passing results roll into each student's progress dashboard automatically, giving you a complete picture of both clinical and lab competency.",
  },
  {
    icon: ["M4 4h12a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z", "M7 8h6M7 11h4"],
    title: "Staff Review & Submissions",
    description: "Program directors, medical directors, and faculty can review, edit, or remove any student submission from one central view. Full audit trail. No approval bottlenecks — just clean oversight.",
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
              <h3 style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--text)",
                marginBottom: ".625rem",
              }}>
                {f.title}
              </h3>
              <p style={{ color: "var(--secondary)", fontSize: ".9rem", lineHeight: 1.7 }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
