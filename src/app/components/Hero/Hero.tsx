import styles from './Hero.module.css';
import { ClientButton } from './ClientButton';
import { ClientBackground } from './ClientBackground';

export function Hero() {
  return (
    <section className={styles.hero}>
      <ClientBackground />
      <div className={styles.content}>
        <h1>Производство и доставка бетона по Омску и Омской области</h1>
        <p>Высокое качество, доступные цены, быстрая доставка</p>
        <ClientButton />
      </div>
    </section>
  );
}