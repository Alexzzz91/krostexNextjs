// import Image from 'next/image';
import styles from './Photos.module.css';

type PhotoCardProps = {
  src: string
}

export function PhotoCard({ src }: PhotoCardProps) {
  return (
    <div className={styles.card}>
      <a href={src} target="_blank" rel="noopener noreferrer">
        <img
          src={src}
          alt={'Мы в работе'}
          title={'Мы в работе'}
          className={styles.image}
          // width={100}
          // height={75}
          decoding="async" 
          loading="lazy"
        />

        {/* <Image
          src={src}
          alt={'Мы в работе'}
          title={'Мы в работе'}
          className={styles.image}
          // width={100}
          // height={75}
          decoding="async" 
          loading="lazy"
        /> */}
      </a>
    </div>
  );
}