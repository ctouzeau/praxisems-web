const steps = [
  {
    number: "01",
    title: "Set up your program",
    description: "Create your program, add your cohort, and invite students. Takes about ten minutes. Students get an email with login instructions.",
  },
  {
    number: "02",
    title: "Schedule rotations",
    description: "Create clinical and field rotation slots. Students self-book from available openings — PraxisEMS automatically drafts a log entry for each confirmed booking.",
  },
  {
    number: "03",
    title: "Students log their shifts",
    description: "After each rotation, students record patient contacts, clinical skills, and hours from any device. No paper. No waiting for the next class meeting.",
  },
  {
    number: "04",
    title: "Faculty review and evaluate",
    description: "Program directors and medical directors review all submissions in one place. Formative evaluations from skills labs roll in the same way — one unified record.",
  },
  {
    number: "05",
    title: "Export your SMC report",
    description: "When your CoAEMSP site visit arrives, generate a complete, accreditation-ready Student Mastery Checklist report in one click. Everything is already mapped.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "var(--section-py) 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="label-tag" style={{ marginBottom: "1.25rem" }}>How it works</div>
          <h2 style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", color: "var(--text)", marginBottom: "1rem" }}>
            From first rotation to site visit — in one platform.
          </h2>
          <p style={{ color: "var(--secondary)", fontSize: "1.0625rem", maxWidth: 500, margin: "0 auto" }}>
            PraxisEMS is designed to reduce administrative lift at every step, not just at reporting time.
          </p>
        </div>

        {/* Steps */}
        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: 20,
            top: 28,
            bottom: 28,
            width: 1,
            background: "linear-gradient(to bottom, rgba(245,158,11,.5), rgba(245,158,11,.05))",
          }} />

          {steps.map((step, i) => (
            <div key={i} style={{
              display: "flex",
              gap: "1.75rem",
              marginBottom: i < steps.length - 1 ? "2.25rem" : 0,
              position: "relative",
            }}>
              {/* Number bubble */}
              <div style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "var(--elevated)",
                border: "1px solid rgba(245,158,11,.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                zIndex: 1,
              }}>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: ".6875rem",
                  color: "#f59e0b",
                  letterSpacing: ".04em",
                }}>
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div style={{ paddingTop: ".5rem" }}>
                <h3 style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--text)",
                  marginBottom: ".5rem",
                }}>
                  {step.title}
                </h3>
                <p style={{ color: "var(--secondary)", fontSize: ".9375rem", lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
