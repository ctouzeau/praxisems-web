import Link from "next/link";

const included = [
  "Unlimited rotation scheduling",
  "Patient contact & skill logging",
  "Formative evaluation submissions",
  "Real-time progress dashboards",
  "Staff review & submission management",
  "CoAEMSP-ready SMC report export",
  "Calendar invite emails for rotations",
  "Faculty and staff accounts included",
];

export default function Pricing() {
  return (
    <section id="pricing" style={{
      padding: "var(--section-py) 0",
      borderTop: "1px solid var(--border)",
      background: "var(--surface)",
    }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="label-tag" style={{ marginBottom: "1.25rem" }}>Pricing</div>
          <h2 style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", color: "var(--text)", marginBottom: "1rem" }}>
            Simple, honest pricing.
          </h2>
          <p style={{ color: "var(--secondary)", fontSize: "1.0625rem", maxWidth: 460, margin: "0 auto" }}>
            One flat rate per student seat. No monthly subscription. No per-module fees. Just pay when your cohort starts.
          </p>
        </div>

        {/* Pricing card */}
        <div style={{
          maxWidth: 520,
          margin: "0 auto",
          background: "var(--elevated)",
          border: "1px solid rgba(245,158,11,.3)",
          borderRadius: 18,
          overflow: "hidden",
          boxShadow: "0 0 60px rgba(245,158,11,.06)",
        }}>
          {/* Top */}
          <div style={{
            padding: "2rem 2.25rem 1.75rem",
            borderBottom: "1px solid var(--border)",
          }}>
            <div style={{
              display: "flex",
              alignItems: "flex-end",
              gap: ".5rem",
              marginBottom: ".75rem",
            }}>
              <span style={{
                fontSize: "clamp(3rem, 7vw, 4rem)",
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1,
                letterSpacing: "-.02em",
              }}>$99</span>
              <span style={{
                color: "var(--secondary)",
                fontSize: ".9375rem",
                marginBottom: ".5rem",
              }}>per student seat</span>
            </div>
            <p style={{ color: "var(--secondary)", fontSize: ".9rem", lineHeight: 1.6 }}>
              One-time payment per student. Covers the full duration of their cohort. No renewals, no surprises.
            </p>
          </div>

          {/* Included */}
          <div style={{ padding: "1.75rem 2.25rem" }}>
            <p style={{
              fontSize: ".75rem",
              fontFamily: "var(--font-mono)",
              color: "var(--muted)",
              letterSpacing: ".08em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}>
              Everything included
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem" }}>
              {included.map((item, i) => (
                <li key={i} style={{
                  display: "flex",
                  gap: ".75rem",
                  alignItems: "flex-start",
                  marginBottom: ".75rem",
                  color: "var(--secondary)",
                  fontSize: ".9375rem",
                  lineHeight: 1.5,
                }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                    <path d="M3 8l3.5 3.5L13 5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/demo" className="btn-primary" style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              boxSizing: "border-box",
            }}>
              Book a Demo →
            </Link>
            <p style={{
              textAlign: "center",
              marginTop: "1rem",
              fontSize: ".8125rem",
              color: "var(--muted)",
            }}>
              We&apos;ll walk you through setup and answer any questions.
            </p>
          </div>
        </div>

        {/* FAQ strip */}
        <div style={{
          maxWidth: 640,
          margin: "3rem auto 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
        }} className="pricing-faq">
          {[
            { q: "Are faculty and staff seats extra?", a: "No. Program directors, medical directors, and faculty access is included at no extra cost." },
            { q: "What happens at the end of the cohort?", a: "Your data stays in the system. When your next cohort starts, you purchase seats for the new students." },
            { q: "Is there a minimum number of seats?", a: "No minimum. Buy exactly as many seats as you have students." },
            { q: "Can I try it before purchasing?", a: "Yes — book a demo and we'll show you around a live program environment." },
          ].map((item, i) => (
            <div key={i} style={{
              background: "var(--elevated)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "1.25rem",
            }}>
              <p style={{ fontWeight: 600, fontSize: ".9rem", color: "var(--text)", marginBottom: ".5rem" }}>
                {item.q}
              </p>
              <p style={{ color: "var(--secondary)", fontSize: ".875rem", lineHeight: 1.65 }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 560px) {
          .pricing-faq { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
