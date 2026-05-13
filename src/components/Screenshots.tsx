"use client";

import { useState } from "react";
import Image from "next/image";

const screens = [
  {
    label: "Shift Logging",
    caption: "Students log every patient contact, clinical skill, and hour — from any device, right after a rotation ends.",
    src: "/screenshots/shift-log-list.png",
    url: "app.praxisems.com/summative",
  },
  {
    label: "Rotation Scheduling",
    caption: "Available slots organized by specialty. Students book in one click — no back-and-forth emails.",
    src: "/screenshots/rotation-booking.png",
    url: "app.praxisems.com/rotations",
  },
  {
    label: "Staff Review",
    caption: "Every submission from every student in one place. Review, edit, or remove entries with a full audit trail.",
    src: "/screenshots/staff-review.png",
    url: "app.praxisems.com/staff/review",
  },
  {
    label: "Student Dashboard",
    caption: "Students see their recent shifts, progress stats, and quick-access buttons to everything they need.",
    src: "/screenshots/student-dashboard.png",
    url: "app.praxisems.com/dashboard",
  },
];

function BrowserFrame({ src, url, label }: { src: string; url: string; label: string }) {
  return (
    <div style={{
      background: "#070a14",
      borderRadius: 10,
      border: "1px solid #1e2940",
      overflow: "hidden",
      boxShadow: "0 24px 64px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.04)",
    }}>
      <div style={{
        background: "#050810",
        padding: "8px 12px",
        borderBottom: "1px solid #1e2940",
        display: "flex",
        alignItems: "center",
        gap: 5,
      }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57", flexShrink: 0 }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ffbd2e", flexShrink: 0 }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840", flexShrink: 0 }} />
        <div style={{
          flex: 1, background: "#0a0e1a", borderRadius: 4,
          padding: "2px 8px", marginLeft: 4,
          color: "#4a5568", fontSize: 9,
          fontFamily: "var(--font-mono)", overflow: "hidden",
          whiteSpace: "nowrap", textOverflow: "ellipsis",
        }}>
          {url}
        </div>
      </div>
      <div style={{ overflow: "hidden", maxHeight: 400, lineHeight: 0 }}>
        <Image
          src={src}
          alt={label}
          width={1440}
          height={860}
          style={{ width: "100%", height: "auto", display: "block" }}
          priority={false}
        />
      </div>
    </div>
  );
}

export default function Screenshots() {
  const [active, setActive] = useState(0);
  const screen = screens[active];

  return (
    <section style={{
      padding: "var(--section-py) 0",
      borderTop: "1px solid var(--border)",
    }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div className="label-tag" style={{ marginBottom: "1.25rem" }}>
            The real app
          </div>
          <h2 style={{
            fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
            color: "var(--text)",
            marginBottom: "1rem",
          }}>
            No mockups. See it in action.
          </h2>
          <p style={{
            color: "var(--secondary)",
            fontSize: "1.0625rem",
            maxWidth: 480,
            margin: "0 auto",
          }}>
            These are real screens from a live paramedic program.
          </p>
        </div>

        {/* Tab row */}
        <div style={{
          display: "flex",
          gap: ".5rem",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "2rem",
        }}>
          {screens.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                padding: ".4375rem 1rem",
                borderRadius: 8,
                border: i === active
                  ? "1px solid rgba(245,158,11,.5)"
                  : "1px solid var(--border)",
                background: i === active
                  ? "rgba(245,158,11,.08)"
                  : "var(--elevated)",
                color: i === active ? "var(--accent)" : "var(--secondary)",
                fontSize: ".875rem",
                fontWeight: i === active ? 600 : 400,
                cursor: "pointer",
                transition: "all .15s",
                fontFamily: "var(--font-body)",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Screenshot */}
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <BrowserFrame src={screen.src} url={screen.url} label={screen.label} />
          <p style={{
            textAlign: "center",
            marginTop: "1.25rem",
            color: "var(--secondary)",
            fontSize: ".9375rem",
            lineHeight: 1.65,
            maxWidth: 560,
            margin: "1.25rem auto 0",
          }}>
            {screen.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
