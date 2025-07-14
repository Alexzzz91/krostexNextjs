import { BETON } from '@/data/beton';

import styles from './Catalog.module.css'
import { ProductCard } from '../ProductCard';

export function Catalog() {
  return (
    <>      
        <section className={styles.featuredProducts}>
          <h2>Популярные марки бетона</h2>
          <div className={styles.productsGrid}>
            {BETON.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>    
    </>
  );
}