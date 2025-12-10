/**
 * Root Layout Component
 * 
 * This is the main layout component that wraps all pages in the application.
 * It configures:
 * - Global fonts (Kode_Mono and Geist)
 * - Metadata for the application
 * - Client-side root layout wrapper (RootLayoutClient) with navbar, content, footer
 * - Global styles and CSS variables
 */

import type { Metadata } from "next";
import { Geist, Kode_Mono } from "next/font/google";
import "./globals.css";
import RootLayoutClient from "./root-layout-client";
import { NavbarLayout } from "@/components/layout-navbar/navbar-layout";

/** Configuration for Kode_Mono font from Google Fonts */
const kodeMono = Kode_Mono({
  variable: "--font-kode-mono",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

/** Configuration for Geist font from Google Fonts */
const geistFont = Geist({
  variable: "--font-geist",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

/** Application metadata including title and description */
export const metadata: Metadata = {
  title: "Raflux",
  description: "Raflux - The Next Generation of NFT Raffles",
};

/**
 * RootLayout: Main layout wrapper for all pages
 * 
 * @param children - The page content to be rendered
 * @returns JSX element with configured fonts and layout wrapper
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kodeMono.variable} ${geistFont.variable} antialiased scroll-auto!`}
        style={{ fontFamily: 'var(--font-kode-mono)' }}
      >
        {/* RootLayoutClient handles client-side navigation and layout logic */}
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
