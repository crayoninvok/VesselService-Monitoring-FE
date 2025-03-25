// app/(auth)/login/layout.tsx
import { Libre_Baskerville } from "next/font/google";

// Use only Libre Baskerville for auth pages
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
});

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`${libreBaskerville.variable}`}>{children}</div>;
}
