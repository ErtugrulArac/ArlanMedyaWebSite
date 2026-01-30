import Footer from './components/footer'
import MainHero from './components/main'
import KodKarti from './components/main/kodkartı'
import HomeSections from './HomeSections'

export default function Home() {
  return (
    <>
      <MainHero />
      <KodKarti />
      <HomeSections />
      <Footer />
    </>
  );
}
