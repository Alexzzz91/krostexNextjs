import styles from './Footer.module.css';
import { SEO } from '@/data/seo';
import { Contacts } from '../Contacts';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3>{SEO.site_name}</h3>
          <p>Производство и доставка бетона по Омску и Омской области</p>
        </div>
        
        <div className={styles.links}>
          <h4>Меню</h4>
          <Link href='/'>Главная</Link>
          <Link href='/catalog'>Каталог</Link>
          <Link href='/about'>О компании</Link>
          <Link href='/contacts'>Контакты</Link>
        </div>
        
        <Contacts />
      </div>
      
      <div className={styles.copyright}>
        <p>© 2012-2025 {SEO.site_name} </p>
      </div>
    </footer>
  );
}