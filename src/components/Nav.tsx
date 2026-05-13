"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features",    label: "Features" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#pricing",     label: "Pricing" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(5,8,15,.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(30,41,64,.6)" : "1px solid transparent",
      transition: "all .2s",
    }}>
      <div className="container" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64,
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: ".625rem" }}>
          <div style={{
            width: 30, height: 30,
            background: "linear-gradient(145deg, #f59e0b 0%, #d97706 100%)",
            borderRadius: 8,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
            boxShadow: "0 1px 4px rgba(217,119,6,.35)",
          }}>
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
              <rect x="2"  y="13" width="4" height="6"  rx="1.5" fill="white"/>
              <rect x="8"  y="8"  width="4" height="11" rx="1.5" fill="white"/>
              <rect x="14" y="2"  width="4" height="17" rx="1.5" fill="white"/>
            </svg>
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.0625rem", color: "var(--text)", letterSpacing: "-.01em" }}>
            PraxisEMS
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="nav-desktop">
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{
              fontSize: ".9rem", color: "var(--secondary)",
              transition: "color .12s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--secondary)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
          <Link href="/demo" className="btn-primary nav-cta-btn" style={{ padding: ".5rem 1.25rem", fontSize: ".875rem" }}>
            Book a Demo
          </Link>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-mobile"
            style={{ background: "none", border: "none", color: "var(--text)", cursor: "pointer", padding: 4 }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {menuOpen
                ? <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                : <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(5,8,15,.97)", borderTop: "1px solid var(--border)",
          padding: "1rem 24px 1.5rem",
        }}>
          {links.map((l) => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block", padding: ".75rem 0",
                color: "var(--secondary)", fontSize: ".9375rem",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {l.label}
            </a>
          ))}
          <Link href="/demo" className="btn-primary" style={{ marginTop: "1rem", justifyContent: "center" }}
            onClick={() => setMenuOpen(false)}>
            Book a Demo
          </Link>
        </div>
      )}

    </nav>
  );
}
