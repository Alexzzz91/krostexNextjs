import { About } from '../components/About';
import styles from './page.module.css'

export default function AboutPage() {
  return (
    <>      
      <main className={styles.main}>  
        
        <About />

      </main>
    </>
  );
}