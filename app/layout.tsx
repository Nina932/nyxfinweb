import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "NYX Core | Financial Intelligence Platform",
  description:
    "Transform raw accounting data into verified insights and executable decisions using hybrid symbolic-neural architecture. The decision layer for financial data.",
  keywords: [
    "financial intelligence",
    "AI analytics",
    "financial automation",
    "decision engine",
    "knowledge graph",
    "multi-agent reasoning",
  ],
  authors: [{ name: "NYX Core" }],
  openGraph: {
    title: "NYX Core | Financial Intelligence Platform",
    description:
      "Transform raw accounting data into verified insights and executable decisions.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0a0f1c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
