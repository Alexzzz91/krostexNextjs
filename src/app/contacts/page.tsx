import { Contacts } from '../components/Contacts';
import styles from './page.module.css'

export default function ContactsPage() {
  return (
    <>      
      <main className={styles.main}>  
        
        <Contacts />

      </main>
    </>
  );
}