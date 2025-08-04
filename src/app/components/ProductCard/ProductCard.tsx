// import Image from 'next/image';
import styles from './ProductCard.module.css';
import { ClientButton } from './ClientButton';
import { CONTACTS } from '@/data/contacts';

type ProductCardProps = {
  product: {
    id: number
    name: string
    description: string
    grade: string
    frostResistance: string
    mobility: string
    price: number
    image: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <h3>{product.name}</h3>
        <img
          src={product.image}
          alt={product.name}
          title={product.name}
          className={styles.image}
          width={100}
          height={75}
          decoding="async" 
          loading="lazy"
        />
      </div>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.specs}>
        <span>Марка: {product.grade}</span>
        <span>Морозостойкость: {product.frostResistance}</span>
        <span>Подвижность: {product.mobility}</span>
      </div>
      <div className={styles.price}>
        <span>от {product.price} ₽/м³</span>
        <ClientButton />
      </div>
      <div className={styles.price}>
        <span>
          <a href={`tel:${CONTACTS.whatsapp}`}>+7 (904) 589-90-75</a>
        </span>
      </div>
    </div>
  );
}