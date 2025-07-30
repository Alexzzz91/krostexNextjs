import { Metadata } from 'next';
import { Contacts } from '../components/Contacts';
import styles from './page.module.css'
import { SEO } from '@/data/seo';

export const metadata: Metadata = {
  title: `${SEO.site_name}${SEO.title}`,
  description: 'купить бетон м200 в омске с доставкой по городу и олбласти цена за куб от производителя',
  keywords: 'Купить бетон М300 в Омске, бетон омск цена, бетон миксер цена омск',
}

export default function ContactsPage() {
  return (
    <>      
      <main className={styles.main}>  
        
        <Contacts />

      </main>
    </>
  );
}
