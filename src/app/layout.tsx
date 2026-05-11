import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "PraxisEMS — Clinical Management for Paramedic Programs",
  description: "PraxisEMS helps paramedic programs track student clinical hours, skills, and patient contacts — and generate CoAEMSP-ready SMC reports in minutes.",
  openGraph: {
    title: "PraxisEMS — Clinical Management for Paramedic Programs",
    description: "Track rotations, skills, and patient contacts. Export your SMC report in one click.",
    url: "https://praxisems.com",
    siteName: "PraxisEMS",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
