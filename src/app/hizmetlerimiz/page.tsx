import type { Metadata } from "next";
import HizmetlerimizClient from "./HizmetlerimizClient";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Arlan Medya - Web Gelistirme & Dijital Pazarlama",
  description: "Arlan Medya'nin sunduğu profesyonel web gelistirme, mobil uygulama, UI/UX tasarim, SEO optimizasyonu, sosyal medya yonetimi ve yapay zeka cozumleri hizmetleri.",
  alternates: { canonical: "/hizmetlerimiz" },
  openGraph: {
    url: "/hizmetlerimiz",
    title: "Hizmetlerimiz | Arlan Medya - Web Gelistirme & Dijital Pazarlama",
    description: "Arlan Medya'nin sundugu profesyonel web gelistirme, mobil uygulama, UI/UX tasarim, SEO optimizasyonu, sosyal medya yonetimi ve yapay zeka cozumleri hizmetleri.",
  },
};

export default function Page() {
  return <HizmetlerimizClient />;
}
