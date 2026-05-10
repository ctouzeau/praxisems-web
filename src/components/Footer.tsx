import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "2.5rem 0",
      background: "var(--surface)",
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1.25rem",
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          <div style={{
            width: 24, height: 24, background: "#d97706", borderRadius: 6,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L3 7v11h5v-5h4v5h5V7L10 2z" fill="white" opacity=".9" />
            </svg>
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontSize: ".9375rem", color: "var(--secondary)" }}>
            PraxisEMS
          </span>
        </Link>

        {/* Links */}
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <a href="#features" style={{ fontSize: ".875rem", color: "var(--muted)" }}>Features</a>
          <a href="#pricing" style={{ fontSize: ".875rem", color: "var(--muted)" }}>Pricing</a>
          <Link href="/demo" style={{ fontSize: ".875rem", color: "var(--muted)" }}>Demo</Link>
          <a href="mailto:hello@praxisems.com" style={{ fontSize: ".875rem", color: "var(--muted)" }}>Contact</a>
        </div>

        {/* Copyright */}
        <p style={{ fontSize: ".8125rem", color: "var(--muted)" }}>
          © {new Date().getFullYear()} PraxisEMS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
