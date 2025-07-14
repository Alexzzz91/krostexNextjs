import styles from './Hero.module.css';
import { ClientButton } from './ClientButton';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Производство и доставка бетона по Омску и Омской области</h1>
        <p>Высокое качество, доступные цены, быстрая доставка</p>
        <ClientButton />
      </div>
    </section>
  );
}