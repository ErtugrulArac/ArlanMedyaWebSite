import type { Metadata } from "next";
import SurecClient from "./SurecClient";

export const metadata: Metadata = {
  title: "Calisma Surecimiz | Arlan Medya",
  description: "Arlan Medya'nin profesyonel calisma sureci. Analiz, planlama, tasarim, gelistirme ve surekli destek asamalariyla projelerinizi hayata geciriyoruz.",
  alternates: { canonical: "/surec" },
  openGraph: {
    url: "/surec",
    title: "Calisma Surecimiz | Arlan Medya",
    description: "Arlan Medya'nin profesyonel calisma sureci. Analiz, planlama, tasarim, gelistirme ve surekli destek asamalariyla projelerinizi hayata geciriyoruz.",
  },
};

export default function Page() {
  return <SurecClient />;
}
