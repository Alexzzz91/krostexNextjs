import styles from './Hero.module.css';
import { ClientButton } from './ClientButton';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function Hero() {
  const imageNumber = getRandomInt(1, 3)
  
  console.log('imageNumber', imageNumber)
  
  let imageBackground = styles.overlay_1
  if (imageNumber === 1) {
    imageBackground = styles.overlay_1
  } else if (imageNumber === 2) {
    imageBackground = styles.overlay_2
  } else if (imageNumber === 3) {
    imageBackground = styles.overlay_3
  }

  return (
    <section className={styles.hero}>
      <div className={`${styles.overlay} ${imageBackground}`}></div>
      <div className={styles.content}>
        <h1>Производство и доставка бетона по Омску и Омской области</h1>
        <p>Высокое качество, доступные цены, быстрая доставка</p>
        <ClientButton />
      </div>
    </section>
  );
}