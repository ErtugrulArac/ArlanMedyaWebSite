import type { Metadata } from "next";
import HakkimizdaClient from "./HakkimizdaClient";

export const metadata: Metadata = {
  title: "Hakkimizda | Arlan Medya - Dijital Pazarlama Ajansi",
  description: "Arlan Medya hakkinda bilgi edinin. 2021'den beri markalarin dijital dunyada buyumesine yardimci oluyoruz. Kurucumuz, misyonumuz ve vizyonumuz hakkinda detaylar.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: { 
    url: "/hakkimizda",
    title: "Hakkimizda | Arlan Medya - Dijital Pazarlama Ajansi",
    description: "Arlan Medya hakkinda bilgi edinin. 2021'den beri markalarin dijital dunyada buyumesine yardimci oluyoruz.",
  },
};

export default function Page() {
  return <HakkimizdaClient />;
}
