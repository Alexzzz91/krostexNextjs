import { Metadata } from 'next';
import { Contacts } from '../components/Contacts';
import styles from './page.module.css'
import { SEO } from '@/data/seo';

export const metadata: Metadata = {
  title: `${SEO.site_name}${SEO.title}`,
  description: SEO.description,
  keywords: SEO.keywords,
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