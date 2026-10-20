import type { Metadata, Viewport } from "next";
import {
  Geist,
  Geist_Mono,
  Plus_Jakarta_Sans,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakart_Sans = Plus_Jakarta_Sans({
  variable: "--font-label",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "cyan" },
    { media: "(prefers-color-scheme: dark)", color: "yellow" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Aksad Consultancy | Prime Real Estate & Modern Developments",
    template: "%s | Aksad Consultancy",
  },
  description:
    "Find your next chapter with Aksad Consultancy. Discover modern apartments, prime land, and premier city developments designed for extraordinary living.",
  keywords: [
    "Aksad Consultancy",
    "real estate",
    "modern apartments",
    "prime land for sale",
    "commercial real estate",
    "city developments",
    "luxury properties",
    "property investments",
  ],
  authors: [{ name: "Aksad Consultancy" }],
  creator: "Aksad Consultancy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aksadconsultancy.com", // Replace with your domain
    siteName: "Aksad Consultancy",
    title: "Aksad Consultancy | Find Your Next Chapter",
    description:
      "Explore modern apartments, prime plots, and premier commercial spaces across the city's most desirable locations.",
    images: [
      {
        url: "/og-image.png", // Add a 1200x630px hero image/drone view preview in public/
        width: 1200,
        height: 630,
        alt: "Aksad Consultancy - Modern City Developments & Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aksad Consultancy | Find Your Next Chapter",
    description:
      "Explore modern apartments, prime plots, and premier commercial spaces across the city's most desirable locations.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakart_Sans.variable} ${playfairDisplay.variable} h-full antialiased`}
      // className={`h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col dark:bg-[#070f19] font-body-md text-body-md text-on-surface antialiased dark:selection:bg-rose-500/30 dark:selection:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
