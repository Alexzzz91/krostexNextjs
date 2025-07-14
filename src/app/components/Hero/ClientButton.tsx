'use client';
import { CONTACTS } from '@/data/contacts';
import styles from './Hero.module.css';

export function ClientButton() {
  const handleOnButtonCLick = () => {
    document.getElementById('mymailto')?.click();
  }

  return (
    <>
        <button className={styles.cta} onClick={handleOnButtonCLick} >Заказать бетон</button>
        <a href={`tel:${CONTACTS.whatsapp}`} id="mymailto" style={ {display:'none'}}></a>
    </>
  );
}