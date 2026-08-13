import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup & MVP Launch Kit | Launch, Automate and Grow",
  description:
    "Transform your idea into a market-ready startup with branding, technology, marketing, software and automation solutions designed to help you launch faster and scale smarter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
