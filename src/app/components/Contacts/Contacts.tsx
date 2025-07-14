import { CONTACTS } from '@/data/contacts';
import styles from './Contacts.module.css';
import { QRCodeSVG } from 'qrcode.react';

export function Contacts() {
  return (
    <div className={styles.contacts}>
      <h4>Контакты</h4>
      {CONTACTS.phones.map((phone) => {
        return (
          <a href={`tel:${phone.href}`} key={phone.text}>{phone.text}</a>
        )
      })}

      <h4>Whatsapp</h4>
      
      <QRCodeSVG value={`https://wa.me/${CONTACTS.whatsapp}`} />,
      
      <p>{CONTACTS.adress}</p>
      <p>Пн-Пт: 8:00 - 18:00</p>
    </div>
  );
}