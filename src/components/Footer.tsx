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
