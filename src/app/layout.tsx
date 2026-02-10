import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, IBM_Plex_Serif, Poppins, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import GlobalLoader from "./components/GlobalLoader";
import { LoadingProvider } from "./context/LoadingContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    // ✅ Canonical altyapısı (Next’in doğru yöntemi)
    metadataBase: new URL("https://arlanmedya.com"),
    alternates: {
      canonical: "/", // ana sayfa
    },

    title: "Dijital Pazarlama Ajansı & Kurumsal Web Tasarım | Arlan Medya",
    description:
      "Arlan Medya; SEO, kurumsal web sitesi yapımı, sosyal medya yönetimi ve dijital reklam hizmetleriyle markanızı dijitalde büyütür. Profesyonel çözümler için bizimle iletişime geçin.",
    manifest: "/site.webmanifest",

    openGraph: {
      title: "Dijital Pazarlama Ajansı & Kurumsal Web Tasarım | Arlan Medya",
      description:
        "Arlan Medya; SEO, kurumsal web sitesi yapımı, sosyal medya yönetimi ve dijital reklam hizmetleriyle markanızı dijitalde büyütür.",
      // ✅ Bunu mutlak URL yerine path veriyoruz; metadataBase ile birleşiyor
      url: "/",
      siteName: "Arlan Medya",
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: "/logolar/arlanlogonav.webp",
          width: 1200,
          height: 630,
          alt: "Arlan Medya",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Dijital Pazarlama Ajansı & Kurumsal Web Tasarım | Arlan Medya",
      description:
        "Arlan Medya; SEO, kurumsal web sitesi yapımı, sosyal medya yönetimi ve dijital reklam hizmetleriyle markanızı dijitalde büyütür.",
      images: ["/logolar/arlanlogonav.webp"],
    },

    robots: {
      index: true,
      follow: true,
    },

    // ❌ canonical burada yazılmayacak (Next canonical üretmez)
    other: {
      publisher: "Arlan Medya",
    },

    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* Google Ads tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17894365829"
          strategy="afterInteractive"
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-17894365829');
    `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSerif.variable} ${poppins.variable} ${workSans.variable} antialiased`}
        style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
        suppressHydrationWarning
      >
        <LoadingProvider>
          <GlobalLoader />
          <AnimatedBackground />
          <Navbar />
          <main className="relative z-10" style={{ fontFamily: "var(--font-ibm-plex-serif)" }}>
            {children}
          </main>
        </LoadingProvider>
      </body>
    </html>
  );
}