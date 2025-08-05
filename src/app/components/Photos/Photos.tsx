'use client';
import { CONTACTS } from '@/data/contacts';
import { ClientButton } from '../ProductCard/ClientButton';
import styles from './Photos.module.css';
import { PhotoCard } from './PhotoCard';
import { PHOTOS } from '@/data/photos';

export function Photos() {
  return (     
    <section className={styles.featuredProducts}>
        <h2>Как мы работаем</h2>
        <div className={styles.photoGrid}>
            {PHOTOS.map(({ src }) => (
                <PhotoCard key={src} src={src} />
            ))}
        </div>
        <div className={styles.price}>
            <ClientButton text='Позвонить нам'/>
        </div>
        <div className={styles.price}>
            <span>
                <a href={`tel:${CONTACTS.whatsapp}`}>{CONTACTS.whatsappTitle}</a>
            </span>
        </div>
    </section>
  );
}