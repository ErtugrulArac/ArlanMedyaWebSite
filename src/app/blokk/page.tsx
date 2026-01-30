// app/blog/page.tsx
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // YYYY-MM-DD
  readingMinutes: number;
  cover: string;
  author: { name: string; role?: string };
  featured?: boolean;
  popular?: boolean;
};

const TOPICS = ["Tümü", "Web Tasarım", "SEO", "Performans", "UI/UX", "Dijital Pazarlama"];

const POSTS: Post[] = [
  {
    slug: "web-sitesi-neden-yavas-acilir",
    title: "Web Sitesi Neden Yavaş Açılır? 12 Sebep + Net Çözüm Planı",
    excerpt:
      "Gerçek hayatta en sık gördüğümüz performans sorunlarını sınıflandırdık; ilk 30 dakikada uygulayabileceğin fixes ile başla.",
    category: "Performans",
    date: "2026-01-20",
    readingMinutes: 7,
    cover:
      "https://images.unsplash.com/photo-1526378722484-cc5c5106e63b?auto=format&fit=crop&w=1800&q=70",
    author: { name: "Arlan Medya", role: "Studio" },
    featured: true,
    popular: true,
  },
  {
    slug: "kucuk-isletmeler-icin-seo-rehberi",
    title: "Küçük İşletmeler İçin SEO: 2026’da Trafik Getiren Sistem",
    excerpt:
      "Anahtar kelime avı değil: sayfa mimarisi, içerik kümeleri ve ölçümle büyüyen bir SEO düzeni kur.",
    category: "SEO",
    date: "2026-01-12",
    readingMinutes: 9,
    cover:
      "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1800&q=70",
    author: { name: "Arlan Medya" },
    popular: true,
  },
  {
    slug: "kurumsal-sitede-hizmet-sayfasi",
    title: "Kurumsal Web Sitesinde Hizmet Sayfası: İkna Eden İskelet",
    excerpt:
      "Kafa karıştıran listeler yerine, güven + kanıt + CTA akışıyla çalışan bir hizmet sayfası kurgusu.",
    category: "Web Tasarım",
    date: "2025-12-28",
    readingMinutes: 6,
    cover:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1800&q=70",
    author: { name: "Arlan Medya" },
  },
  {
    slug: "ui-ux-ile-donusum-arttirma",
    title: "UI/UX ile Dönüşüm Artırma: 9 Pratik İyileştirme",
    excerpt:
      "Buton, form, sosyal kanıt, içerik yoğunluğu… küçük dokunuşlarla büyük fark yaratan detaylar.",
    category: "UI/UX",
    date: "2025-12-10",
    readingMinutes: 5,
    cover:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1800&q=70",
    author: { name: "Arlan Medya" },
  },
  {
    slug: "landing-page-nedir",
    title: "Landing Page Nedir? Daha Fazla Lead İçin Minimal Rehber",
    excerpt:
      "Tek sayfada ikna: başlık, fayda, kanıt, teklif ve CTA sıralamasıyla çalışan landing sayfaları.",
    category: "Dijital Pazarlama",
    date: "2025-11-30",
    readingMinutes: 6,
    cover:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1800&q=70",
    author: { name: "Arlan Medya" },
  },
];

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

function formatDateTR(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("tr-TR", { day: "2-digit", month: "short", year: "numeric" }).format(d);
}

function readingLabel(n: number) {
  return `${n} dk okuma`;
}

export default function BlogPage() {
  const featured = POSTS.find((p) => p.featured) ?? POSTS[0];
  const trending = POSTS.filter((p) => p.popular && p.slug !== featured.slug).slice(0, 3);
  const feed = POSTS.filter((p) => p.slug !== featured.slug);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 antialiased">
      {/* Premium subtle background (no noisy gradients, just depth) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_-10%,rgba(99,102,241,0.14),transparent_55%),radial-gradient(1000px_circle_at_85%_10%,rgba(16,185,129,0.10),transparent_58%),radial-gradient(900px_circle_at_60%_95%,rgba(34,211,238,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.20),rgba(0,0,0,0.92))]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-10 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/35 px-3 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
            İçgörü • Rehber • Sistem
          </div>

          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Okunması keyifli, uygulanması net içerikler.
          </h1>

          <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-zinc-300">
            Web tasarım, SEO ve performans tarafında “süs” değil sistem kuran yazılar. Kısa, temiz ve sonuç odaklı.
          </p>
        </header>

        {/* Controls Row (sticky feel without heavy UI) */}
        <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          {/* Topics */}
          <div className="flex flex-wrap gap-2">
            {TOPICS.map((t, idx) => (
              <button
                key={t}
                type="button"
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs transition-colors",
                  idx === 0
                    ? "border-zinc-700 bg-zinc-50 text-zinc-950"
                    : "border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900/40 hover:text-zinc-50"
                )}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="flex w-full gap-2 lg:w-[520px]">
            <div className="relative w-full">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                ⌕
              </span>
              <input
                className="h-11 w-full rounded-2xl border border-zinc-800 bg-zinc-900/30 px-9 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-colors focus:border-zinc-700"
                placeholder="Ara: hız, SEO, landing page…"
              />
            </div>
            <button
              type="button"
              className="h-11 rounded-2xl border border-zinc-800 bg-zinc-900/30 px-4 text-sm text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              Filtre
            </button>
          </div>
        </div>

        {/* Editorial layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Spotlight + Feed */}
          <section className="lg:col-span-8">
            {/* Spotlight card */}
            <Link
              href={`/blog/${featured.slug}`}
              className="group relative block overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-900/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="relative md:col-span-7">
                  <div className="relative aspect-[16/10] md:aspect-[16/12]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={featured.cover}
                      alt={featured.title}
                      className="h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.01]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.70),transparent_60%)]" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-black/35 px-3 py-1 text-xs text-zinc-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/80" />
                      Spotlight • {featured.category}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6 md:col-span-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400">
                      <span>{formatDateTR(featured.date)}</span>
                      <span className="text-zinc-700">•</span>
                      <span>{readingLabel(featured.readingMinutes)}</span>
                    </div>

                    <h2 className="mt-3 text-pretty text-2xl font-semibold leading-tight tracking-tight">
                      {featured.title}
                    </h2>

                    <p className="mt-3 text-pretty text-sm leading-6 text-zinc-300">
                      {featured.excerpt}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="text-xs text-zinc-400">
                      <span className="text-zinc-200">{featured.author.name}</span>
                      {featured.author.role ? <span className="text-zinc-600"> • {featured.author.role}</span> : null}
                    </div>
                    <div className="inline-flex items-center gap-2 text-sm text-zinc-200">
                      Oku <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Feed (editorial cards) */}
            <div className="mt-8 grid grid-cols-1 gap-4">
              {feed.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group grid grid-cols-1 gap-4 rounded-[22px] border border-zinc-800 bg-zinc-900/15 p-4 transition-colors hover:border-zinc-700 hover:bg-zinc-900/25 sm:grid-cols-12"
                >
                  <div className="relative overflow-hidden rounded-[18px] sm:col-span-4">
                    <div className="aspect-[16/10]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.cover}
                        alt={p.title}
                        className="h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-between sm:col-span-8">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400">
                      <span className="rounded-full border border-zinc-800 bg-zinc-950/40 px-2.5 py-1 text-[11px] text-zinc-300">
                        {p.category}
                      </span>
                      <span>{formatDateTR(p.date)}</span>
                      <span className="text-zinc-700">•</span>
                      <span>{readingLabel(p.readingMinutes)}</span>
                    </div>

                    <h3 className="mt-3 text-pretty text-lg font-semibold leading-snug tracking-tight">
                      {p.title}
                    </h3>

                    <p className="mt-2 text-pretty text-sm leading-6 text-zinc-300">
                      {p.excerpt}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-xs text-zinc-400">
                        <span className="text-zinc-200">{p.author.name}</span>
                      </div>
                      <span className="text-sm text-zinc-200">
                        Devam <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Right rail: “Şu an” / “Popüler” / CTA — premium editorial rail */}
          <aside className="lg:col-span-4">
            <div className="sticky top-6 space-y-4">
              <div className="rounded-[24px] border border-zinc-800 bg-zinc-900/15 p-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-zinc-100">Şu an popüler</h4>
                  <span className="text-xs text-zinc-500">Bu hafta</span>
                </div>

                <div className="mt-4 space-y-3">
                  {trending.length ? (
                    trending.map((p, i) => (
                      <Link
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="group block rounded-[18px] border border-zinc-800 bg-zinc-950/35 p-4 transition-colors hover:border-zinc-700 hover:bg-zinc-900/35"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-xs text-zinc-300">
                            {i + 1}
                          </div>
                          <div>
                            <div className="text-[11px] text-zinc-400">
                              {p.category} • {readingLabel(p.readingMinutes)}
                            </div>
                            <div className="mt-1 text-sm font-semibold leading-snug text-zinc-50 group-hover:underline">
                              {p.title}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="text-sm text-zinc-400">Henüz popüler yazı yok.</div>
                  )}
                </div>
              </div>

              {/* CTA - clean */}
              <div className="rounded-[24px] border border-zinc-800 bg-zinc-900/15 p-5">
                <h4 className="text-base font-semibold">Siteni birlikte keskinleştirelim</h4>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  Hız + temel SEO + dönüşüm akışı için kısa bir değerlendirme yapalım. Gereksiz süs değil, net aksiyon.
                </p>
                <Link
                  href="/iletisim"
                  className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-2xl bg-zinc-50 px-4 text-sm font-semibold text-zinc-950 transition-opacity hover:opacity-90"
                >
                  İletişime geç
                </Link>
                <p className="mt-3 text-xs text-zinc-500">24 saat içinde dönüş.</p>
              </div>

              {/* Minimal “Newsletter” block without gimmicks */}
              <div className="rounded-[24px] border border-zinc-800 bg-zinc-900/15 p-5">
                <h4 className="text-sm font-semibold text-zinc-100">Aylık kısa notlar</h4>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  Ayda 1 kez: SEO + hız + tasarım tarafında işe yarayan kısa checklist.
                </p>
                <div className="mt-4 flex gap-2">
                  <input
                    className="h-11 w-full rounded-2xl border border-zinc-800 bg-zinc-950/40 px-4 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-colors focus:border-zinc-700"
                    placeholder="E-posta adresin"
                  />
                  <button
                    type="button"
                    className="h-11 shrink-0 rounded-2xl border border-zinc-800 bg-zinc-950/40 px-4 text-sm text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-900/40"
                  >
                    Katıl
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <footer className="mt-12 border-t border-zinc-900 pt-6 text-xs text-zinc-500">
          Not: Bu sayfayı gerçek filtre + arama ile çalıştırmak için (kategori seçimi ve input) “use client” ile state ekleriz.
          Görsel/UX katmanı zaten premium.
        </footer>
      </div>
    </main>
  );
}
