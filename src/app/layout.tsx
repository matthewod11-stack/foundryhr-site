import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mattodonnell.com"),
  title: "Matt O'Donnell | AI-First HR Leader & Technology Builder",
  description:
    "15+ years scaling technical organizations. Building the next generation of HR technology. Helping early-stage startups embed AI into their people operations.",
  keywords: [
    "HR consulting",
    "AI HR",
    "startup HR",
    "people operations",
    "technical recruiting",
    "HR technology",
    "FoundryHR",
    "San Francisco",
  ],
  authors: [{ name: "Matt O'Donnell" }],
  creator: "Matt O'Donnell",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mattodonnell.com",
    siteName: "Matt O'Donnell",
    title: "Matt O'Donnell | AI-First HR Leader & Technology Builder",
    description:
      "15+ years scaling technical organizations. Building the next generation of HR technology.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Matt O'Donnell - AI-First HR Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matt O'Donnell | AI-First HR Leader",
    description:
      "15+ years scaling technical organizations. Building the next generation of HR technology.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
