'use client';
import { CONTACTS } from '@/data/contacts';

type ClientButtonProps = {
  text?: string 
}

export function ClientButton({ text = 'Заказать' }: ClientButtonProps) {
  const handleOnButtonCLick = () => {
    document.getElementById('mymailto')?.click();
  }

  return (
    <>
        <button onClick={handleOnButtonCLick} >{ text }</button>
        <a href={`tel:${CONTACTS.whatsapp}`} id="mymailto" style={ {display:'none'}}></a>
    </>
  );
}