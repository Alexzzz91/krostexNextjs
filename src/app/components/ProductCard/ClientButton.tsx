'use client';
import { CONTACTS } from '@/data/contacts';

export function ClientButton() {
  const handleOnButtonCLick = () => {
    document.getElementById('mymailto')?.click();
  }

  return (
    <>
        <button onClick={handleOnButtonCLick} >Заказать</button>
        <a href={`tel:${CONTACTS.whatsapp}`} id="mymailto" style={ {display:'none'}}></a>
    </>
  );
}