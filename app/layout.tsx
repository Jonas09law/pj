"use client";

import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script"; 
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Polícia Judiciária",
  description: "Polícia Judiciária SkyLine",
  generator: ".vxtz.",
  icons: {
    icon: [
      { url: "/pj.png", media: "(prefers-color-scheme: light)" },
      { url: "/pj.png", media: "(prefers-color-scheme: dark)" },
      { url: "/pj.png", type: "image/svg+xml" },
    ],
    apple: "/pj.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body className={`font-sans antialiased`}>
        {children}
        
        <Script
          src="https://cdn.jsdelivr.net/npm/disable-devtool"
          strategy="afterInteractive" 
          onLoad={() => {
            console.log(":))");
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
