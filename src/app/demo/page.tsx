"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function DemoPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, program }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Nav />
      <main style={{
        minHeight: "100vh",
        paddingTop: "calc(64px + 80px)",
        paddingBottom: 80,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }} />
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: "100%", height: 480,
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,158,11,.09), transparent)",
          zIndex: 0,
        }} />

        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: 520 }}>
          {status === "success" ? (
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: 52, height: 52,
                background: "rgba(16,185,129,.1)",
                border: "1px solid rgba(16,185,129,.25)",
                borderRadius: 14,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 1.5rem",
              }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 11l5 5L18 6" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", color: "var(--text)", marginBottom: "1rem" }}>
                Request received
              </h1>
              <p style={{ color: "var(--secondary)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                We&apos;ll reach out to <strong style={{ color: "var(--text)" }}>{email}</strong> within one business day to schedule your demo.
              </p>
              <Link href="/" className="btn-ghost">← Back to home</Link>
            </div>
          ) : (
            <>
              <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                <div className="label-tag" style={{ marginBottom: "1.25rem", display: "inline-flex" }}>
                  Book a demo
                </div>
                <h1 style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)", color: "var(--text)", marginBottom: "1rem" }}>
                  See PraxisEMS in action.
                </h1>
                <p style={{ color: "var(--secondary)", fontSize: "1rem", lineHeight: 1.7 }}>
                  We&apos;ll walk you through a live program environment — from rotation scheduling to SMC export. Takes about 30 minutes.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{
                background: "var(--elevated)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: "2rem",
              }}>
                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={{
                    display: "block",
                    fontSize: ".8125rem",
                    fontWeight: 500,
                    color: "var(--secondary)",
                    marginBottom: ".5rem",
                  }}>
                    Your name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Dr. Jane Smith"
                    style={{
                      width: "100%",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: 8,
                      padding: ".6875rem .875rem",
                      color: "var(--text)",
                      fontSize: ".9375rem",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(245,158,11,.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  />
                </div>

                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={{
                    display: "block",
                    fontSize: ".8125rem",
                    fontWeight: 500,
                    color: "var(--secondary)",
                    marginBottom: ".5rem",
                  }}>
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@college.edu"
                    style={{
                      width: "100%",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: 8,
                      padding: ".6875rem .875rem",
                      color: "var(--text)",
                      fontSize: ".9375rem",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(245,158,11,.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  />
                </div>

                <div style={{ marginBottom: "1.75rem" }}>
                  <label style={{
                    display: "block",
                    fontSize: ".8125rem",
                    fontWeight: 500,
                    color: "var(--secondary)",
                    marginBottom: ".5rem",
                  }}>
                    Program name
                  </label>
                  <input
                    type="text"
                    required
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    placeholder="Springfield Community College Paramedic Program"
                    style={{
                      width: "100%",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: 8,
                      padding: ".6875rem .875rem",
                      color: "var(--text)",
                      fontSize: ".9375rem",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(245,158,11,.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  />
                </div>

                {status === "error" && (
                  <p style={{ color: "#ef4444", fontSize: ".875rem", marginBottom: "1rem" }}>
                    Something went wrong. Please try again or email us at hello@praxisems.com.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    opacity: status === "loading" ? .65 : 1,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "loading" ? "Sending…" : "Request a demo →"}
                </button>

                <p style={{
                  textAlign: "center",
                  marginTop: "1rem",
                  fontSize: ".8125rem",
                  color: "var(--muted)",
                }}>
                  We respond within one business day.
                </p>
              </form>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
