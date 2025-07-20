import { Hero } from './components/Hero';
import styles from './page.module.css'
import { Catalog } from './components/Catalog';
import { About } from './components/About';
import { Metadata } from 'next';
import { SEO } from '@/data/seo';
import { Services } from './components/Services';

export const metadata: Metadata = {
  title: `${SEO.site_name}${SEO.title}`,
  description: SEO.description,
  keywords: SEO.keywords,
}

export default function Home() {
  return (
    <>
      <Hero />
      <main className={styles.main}>  
        <About />
        
        <Catalog />

        <Services />
        
        <section className={styles.delivery}>
          <h2>Наша компания работает с инертными материалами следующих поставщиков: </h2>
          <div className={styles.deliveryContent}>
            <p> Цемент :  Топкинский завод, Искитимский завод </p>
            <p> Щебень:  Челябинская область, Новосибирская область </p> 
            <p> Различные виды бетонных присадок: Пенетрон «ADMIX», «Shtainberg», «ПФМ-ЛНК» </p> 
            <p>  Бесперебойная поставка инертных материалов позволяют нам обеспечить заказчика продукцией высокого качества любым объемом. </p> 
          </div>
        </section>
      </main>

    </>
  );
}