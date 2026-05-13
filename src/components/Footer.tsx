"use client";

import Link from "next/link";

const platform = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Book a demo", href: "/demo" },
];

const company = [
  { label: "Contact us", href: "mailto:hello@praxisems.com" },
  { label: "hello@praxisems.com", href: "mailto:hello@praxisems.com" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

function FooterLogo() {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", gap: ".625rem" }}>
      <div style={{
        width: 26, height: 26,
        background: "linear-gradient(145deg, #f59e0b 0%, #d97706 100%)",
        borderRadius: 7,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
          <rect x="2"  y="13" width="4" height="6"  rx="1.5" fill="white"/>
          <rect x="8"  y="8"  width="4" height="11" rx="1.5" fill="white"/>
          <rect x="14" y="2"  width="4" height="17" rx="1.5" fill="white"/>
        </svg>
      </div>
      <span style={{ fontFamily: "var(--font-display)", fontSize: ".9375rem", color: "var(--secondary)", letterSpacing: "-.01em" }}>
        PraxisEMS
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      background: "var(--surface)",
    }}>
      {/* Main footer body */}
      <div className="container" style={{ padding: "3rem 24px 2.5rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.75fr 1fr 1fr 1fr",
          gap: "2rem 3rem",
        }} className="footer-grid">

          {/* Brand column */}
          <div>
            <FooterLogo />
            <p style={{
              marginTop: "1rem",
              fontSize: ".875rem",
              color: "var(--muted)",
              lineHeight: 1.7,
              maxWidth: 240,
            }}>
              Clinical education infrastructure for modern CoAEMSP paramedic programs.
            </p>
            <p style={{
              marginTop: ".75rem",
              fontSize: ".8125rem",
              color: "var(--muted)",
              lineHeight: 1.6,
            }}>
              Built by clinicians and operators.<br />
              Designed around real accreditation workflows.
            </p>
          </div>

          {/* Platform */}
          <div>
            <p style={{
              fontSize: ".6875rem",
              fontFamily: "var(--font-mono)",
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: ".875rem",
            }}>
              Platform
            </p>
            {platform.map((l) => (
              <Link key={l.label} href={l.href} style={{
                display: "block",
                fontSize: ".875rem",
                color: "var(--secondary)",
                marginBottom: ".5rem",
                transition: "color .12s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--secondary)")}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <p style={{
              fontSize: ".6875rem",
              fontFamily: "var(--font-mono)",
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: ".875rem",
            }}>
              Company
            </p>
            {company.map((l) => (
              <a key={l.label} href={l.href} style={{
                display: "block",
                fontSize: ".875rem",
                color: "var(--secondary)",
                marginBottom: ".5rem",
                transition: "color .12s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--secondary)")}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div>
            <p style={{
              fontSize: ".6875rem",
              fontFamily: "var(--font-mono)",
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: ".875rem",
            }}>
              Legal
            </p>
            {legal.map((l) => (
              <Link key={l.label} href={l.href} style={{
                display: "block",
                fontSize: ".875rem",
                color: "var(--secondary)",
                marginBottom: ".5rem",
                transition: "color .12s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--secondary)")}
              >
                {l.label}
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{
          padding: "1.25rem 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: ".75rem",
        }}>
          <p style={{ fontSize: ".8125rem", color: "var(--muted)" }}>
            © {new Date().getFullYear()} PraxisEMS. All rights reserved.
          </p>
          <p style={{ fontSize: ".8125rem", color: "var(--muted)" }}>
            Built for CoAEMSP paramedic programs.
          </p>
        </div>
      </div>
    </footer>
  );
}
