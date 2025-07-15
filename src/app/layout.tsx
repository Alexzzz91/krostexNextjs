// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Head from "next/head";
import { SEO } from "@/data/seo";

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
            <script key={i} type="application/ld+json">
              {content}
            </script>
        )})
      }
    </html>
  );
}
