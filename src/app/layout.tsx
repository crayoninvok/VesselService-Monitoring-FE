// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
});

export const metadata: Metadata = {
  title: "VessM - Ship Service Maintenance Platform",
  description:
    "Streamline your fleet maintenance with VessM - connecting ship owners, officers, and vendors in one unified system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // We can't use hooks at the top level in a Server Component,
  // so we'll create a client component wrapper for the navbar and footer
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${libreBaskerville.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
