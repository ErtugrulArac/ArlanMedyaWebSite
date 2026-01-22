import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import AnimatedBackground from "./components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arlan Medya - Yazılım Geliştirme & Dijital Yönetimi Çözümleri",
  description: "Arlan Medya, yazılım geliştirme, web aplikasyonları, dijital yönetim ve SEO optimizasyonu hizmetleri ile işletmenizi dönüştürüyoruz. Modern teknoloji ve uzman ekip ile başarının adresi.",
  keywords: "yazılım geliştirme, web aplikasyon, dijital yönetim, SEO, Node.js, React, Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)'}}
      >
        <AnimatedBackground />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
