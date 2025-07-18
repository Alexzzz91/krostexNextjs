// import Image from 'next/image';
import styles from './ProductCard.module.css';
import { ClientButton } from './ClientButton';

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
          className={styles.image}
          width={100}
          height={75}
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
    </div>
  );
}