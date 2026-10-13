import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import MetaPixel from "./components/MetaPixel";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-display",
  display: "swap",
});

function getSafeMetadataBase(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://metaads.prodxstore.com";
  const normalized = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    return new URL(normalized);
  } catch {
    return new URL("https://metaads.prodxstore.com");
  }
}

export const metadata: Metadata = {
  metadataBase: getSafeMetadataBase(),
  title: "PRODXSTORE AI Meta Ads Launch Kit — Blueprint, 205 Prompts & Planner",
  description:
    "A practical AI-assisted toolkit for planning, creating, launching, measuring, and improving Meta ad campaigns. Includes 89-page Blueprint, 205-Prompt Vault, Excel Planner & Tracker, and 12-page QA Checklist.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "PRODXSTORE",
    title: "PRODXSTORE AI Meta Ads Launch Kit",
    description:
      "Stop guessing your Meta ads. Plan, create, launch, measure, and improve campaigns with an 89-page blueprint, 205 AI prompts, and editable campaign tracker.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "PRODXSTORE AI Meta Ads Launch Kit bundle preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRODXSTORE AI Meta Ads Launch Kit",
    description:
      "89-page Blueprint, 205-Prompt Vault, Excel Campaign Planner & Tracker, and 12-page Launch Checklist in one instant download.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
