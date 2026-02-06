import type { Metadata } from "next";
import TesekkurlerClient from "./TesekkurlerClient";

export const metadata: Metadata = {
  title: "Tesekkurler | Arlan Medya",
  description: "Mesajiniz basariyla iletildi. En kisa surede sizinle iletisime gececegiz.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function Page() {
  return <TesekkurlerClient />;
}
