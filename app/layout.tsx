import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://metaads.prodxstore.com"),
  title: "PRODXSTORE AI Meta Ads Launch Kit",
  description: "A practical AI-assisted toolkit for planning, creating, launching, measuring, and improving Meta ad campaigns.",
  openGraph: { title: "PRODXSTORE AI Meta Ads Launch Kit", description: "Stop guessing your Meta ads. Build campaigns with a practical AI-assisted system.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "PRODXSTORE AI Meta Ads Launch Kit", description: "A practical AI-assisted campaign system.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
