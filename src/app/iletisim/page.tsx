import type { Metadata } from "next";
import IletisimClient from "./IletisimClient";

export const metadata: Metadata = {
  title: "Iletisim | Arlan Medya",
  description: "Arlan Medya ile iletisime gecin. Projeleriniz icin ucretsiz danismanlik alin. Web sitesi, mobil uygulama, dijital pazarlama ve daha fazlasi icin bize ulasin.",
  alternates: { canonical: "/iletisim" },
  openGraph: {
    url: "/iletisim",
    title: "Iletisim | Arlan Medya",
    description: "Arlan Medya ile iletisime gecin. Projeleriniz icin ucretsiz danismanlik alin.",
  },
};

export default function Page() {
  return <IletisimClient />;
}
