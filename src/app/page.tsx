import Footer from './components/footer'
import MainHero from './components/main'
import KodKarti from './components/main/kodkartı'
import HomeSections from './HomeSections'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dijital Pazarlama Ajansı & Kurumsal Web Tasarım | Arlan Medya',
  description: 'Arlan Medya; SEO, kurumsal web sitesi yapımı, sosyal medya yönetimi ve dijital reklam hizmetleriyle markanızı dijitalde büyütür. Profesyonel çözümler için bizimle iletişime geçin.',
  openGraph: {
    title: 'Dijital Pazarlama Ajansı & Kurumsal Web Tasarım | Arlan Medya',
    description: 'Arlan Medya; SEO, kurumsal web sitesi yapımı, sosyal medya yönetimi ve dijital reklam hizmetleriyle markanızı dijitalde büyütür.',
    url: 'https://arlanmedya.com',
  }
}

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
