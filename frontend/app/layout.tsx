import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "VECAI — Intelligence at Every Level",
  description:
    "VECAI helps anyone plan, design, estimate, and execute construction projects with AI — from first sketch to final supplier order.",
  metadataBase: new URL("https://vecai.com"),
  openGraph: {
    title: "VECAI — Intelligence at Every Level",
    description:
      "Plan, design, estimate, and execute construction projects with AI.",
    siteName: "VECAI",
    type: "website",
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
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-slate-50 text-slate-900 selection:bg-[#F28500] selection:text-white">
        {children}
      </body>
    </html>
  );
}