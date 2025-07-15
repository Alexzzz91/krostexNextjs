import { Metadata } from 'next';
import { About } from '../components/About';
import styles from './page.module.css'
import { SEO } from '@/data/seo';
import Head from 'next/head';

export const metadata: Metadata = {
  title: `${SEO.site_name}${SEO.title}`,
  description: SEO.description,
  keywords: SEO.keywords,
}


export default function AboutPage() {
  return (
    <>     
      <Head>
        <title>{SEO.site_name}{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={SEO.keywords}></meta>
        <meta property="og:locale" content="ru_RU"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:site_name" content={SEO.site_name}></meta>
      </Head> 
      <main className={styles.main}>  
        
        <About />

      </main>
    </>
  );
}