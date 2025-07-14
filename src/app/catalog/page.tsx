import { Catalog } from '../components/Catalog';
import styles from './page.module.css'

export default function CatalogPage() {
  return (
    <>      
      <main className={styles.main}>  
        
        <Catalog />

      </main>
    </>
  );
}