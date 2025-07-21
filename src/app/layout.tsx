// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Head from "next/head";
import { SEO } from "@/data/seo";
import Script from "next/script";
import { Suspense } from "react";
import YandexMetrika from "./components/YandexMetrika/YandexMetrika";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta property="og:type" content="website"></meta>
      <Head>
        <meta name="robots" content="all" />
        <title>{SEO.site_name}{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={SEO.keywords}></meta>
        <meta property="og:locale" content="ru_RU"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:site_name" content={SEO.site_name}></meta>
      </Head>
      
      <Header />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
      <Footer />
      {
        SEO['JSON+LD'].map((content, i) => {
          return (
            <Script key={i} id={`json+ld-${i}`} type="application/ld+json">
              {content}
            </Script>
        )})
      }
      <a 
        href="https://metrika.yandex.ru/stat/?id=37548255&amp;from=informer"
        target="_blank"
        rel="nofollow"
      >
        <img
          src="https://informer.yandex.ru/informer/37548255/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
          style={{
            width: 88, 
            height: 31, 
            border: 0
          }}
          alt="Яндекс.Метрика"
          title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)"
          className="ym-advanced-informer"
          data-cid="37548255"
          data-lang="ru"
          decoding="async" 
          loading="lazy"
        />
      </a>

      <Script id="metrika-counter" strategy="afterInteractive">
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
          ym(37548255, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true,
                  trackHash:true
            });`
        }
      </Script>
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/37548255" 
            style={{
              position: 'absolute', 
              left:-9999,
            }}
            alt="" 
            decoding="async" 
            loading="lazy"
          />
        </div>
      </noscript>
      <Suspense fallback={<></>}>
        <YandexMetrika />
      </Suspense>
    </html>
  );
}
