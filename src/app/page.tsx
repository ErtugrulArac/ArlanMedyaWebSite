'use client'

import MainHero from "./components/main";
import NasilCalisiyoruz from "./components/nasılçalışıyoruz";
import NedenBiz from "./components/nedenbiz";
import DestekSection from "./components/destek";
import Mockup2 from "./components/mockup2";
import MusteriYorumlari from "./components/müşteriyorumları";

export default function Home() {
  return (
    <main className="relative z-10">
      <MainHero />
      <Mockup2 />
      <NasilCalisiyoruz />
      <NedenBiz />
      <DestekSection />
      <MusteriYorumlari />
    </main>
  );
}
