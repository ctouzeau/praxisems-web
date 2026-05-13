const outcomes = [
  {
    n: "01",
    headline: "SMC prep goes from days to minutes.",
    body: "The tracking runs all semester. When you're ready to generate, it's one click — not a week of spreadsheet work.",
  },
  {
    n: "02",
    headline: "Paper is eliminated.",
    body: "Students log contacts, skills, and hours from their phone right after a rotation. Nothing gets lost, delayed, or forgotten.",
  },
  {
    n: "03",
    headline: "At-risk students surface early.",
    body: "Live progress dashboards show exactly who's behind — with enough time to do something about it, not after grades are set.",
  },
  {
    n: "04",
    headline: "Every director works from the same source.",
    body: "Program directors, medical directors, and faculty all see the same data. No spreadsheets emailed around. No version conflicts.",
  },
  {
    n: "05",
    headline: "Your next site visit is already documented.",
    body: "Every contact, skill, and field hour has been tracking itself since day one. The report exists. You just generate it.",
  },
];

export default function Outcomes() {
  return (
    <section style={{
      padding: "var(--section-py) 0",
      background: "var(--surface)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div className="container">

        {/* Header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem 6rem",
          alignItems: "start",
          marginBottom: "3.5rem",
        }} className="outcomes-header">
          <div>
            <div className="label-tag" style={{ marginBottom: "1.25rem" }}>Outcomes</div>
            <h2 style={{
              fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
              color: "var(--text)",
              lineHeight: 1.15,
            }}>
              This is what operational control looks like.
            </h2>
          </div>
          <p style={{
            color: "var(--secondary)",
            fontSize: "1.0625rem",
            lineHeight: 1.75,
            alignSelf: "end",
            paddingBottom: ".25rem",
          }}>
            PraxisEMS isn&apos;t student tracking software. It&apos;s the operational infrastructure your program runs on — from the first rotation to the final accreditation report.
          </p>
        </div>

        {/* Outcome list */}
        <div>
          {outcomes.map((o, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "3rem 1fr 1fr",
              gap: "0 3rem",
              padding: "1.75rem 0",
              borderTop: "1px solid var(--border)",
              alignItems: "start",
            }} className="outcome-row">
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: ".75rem",
                color: "rgba(245,158,11,.55)",
                letterSpacing: ".04em",
                paddingTop: ".125rem",
              }}>
                {o.n}
              </span>
              <h3 style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.0625rem",
                fontWeight: 600,
                color: "var(--text)",
                lineHeight: 1.4,
                margin: 0,
              }}>
                {o.headline}
              </h3>
              <p style={{
                color: "var(--secondary)",
                fontSize: ".9rem",
                lineHeight: 1.7,
                margin: 0,
              }}>
                {o.body}
              </p>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>

      </div>
    </section>
  );
}
