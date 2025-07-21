import Link from 'next/link';
import styles from './Header.module.css';
// import Image from 'next/image';
import { SEO } from '@/data/seo';

// import image from './assets/MixerTruckYellow-192x192.png'
import { CONTACTS } from '@/data/contacts';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          {/* <Image
            src={image}
            width={500}
            height={200}
            alt={SEO.site_name}
            placeholder="blur"
            objectFit="cover"
            quality={80}
            priority
          /> */}
          <img
            src={'/images/MixerTruckYellow-192x192.png'}
            width={192}
            height={192}
            alt={SEO.site_name}
            title={SEO.site_name}
            decoding="async" 
            loading="lazy"
          />
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/">Главная</Link>
          <Link href="/catalog.html">Каталог</Link>
          <Link href="/about.html">О компании</Link>
          <Link href="/contacts.html">Контакты</Link>
        </nav>
        <div className={styles.contacts}>
          <a href={`tel:${CONTACTS.whatsapp}`}>+7 (904) 589-90-75</a>
        </div>
      </div>
    </header>
  );
}