import { SERVICES } from '@/data/services'
import styles from './Services.module.css'
import { ClientButton } from '../ProductCard/ClientButton';

export function Services() {
  return (
    <>      
      <section className={styles.services}>
        <h2>Услуги</h2>
        <div className={styles.servicesGrid}>
          {SERVICES.map((service) => {
            return (
              <div className={styles.serviceCard} key={service.id}>
                <h3>
                 {service.name}
                </h3>
                <img
                  src={service.image}
                  alt={service.name}
                  className={styles.image}
                  width={350}
                  height={225}
                />
                <div className={styles.description}>
                   {service.description}
                </div>
                <div className={styles.price}>
                  <span>от {service.price} руб./час. </span>
                  <ClientButton />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  );
}