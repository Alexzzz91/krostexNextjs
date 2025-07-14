import styles from './About.module.css'

export function About() {
  return (
    <>      
      <section className={styles.about}>
        <h2>О НАС</h2>
        <span className={styles.aboutLead}>
          <p>
            <strong>ООО «БетонСибСтрой» </strong>
            &nbsp;начала свою деятельность по&nbsp;реализации бетонной продукции в&nbsp;2012 году <strong>в городе Омске</strong>, благодаря соглашению двух индивидуальных предпринимателей. 
            Приемлемые цены и&nbsp;хорошее качества&nbsp;— главный залог компании. 
            Предприятие располагается на&nbsp;<strong>левом берегу Омска. </strong> 
            Доставка бетона осуществляется по&nbsp;городу и&nbsp;за&nbsp;его пределы.
          </p>
        </span>
      </section>
      <section className={styles.advantages}>
        <h2>Наши преимущества</h2>
        <div className={styles.advantagesGrid}>
          <div className={styles.advantageCard}>
            <h3>
              Выгодные цены
            </h3>
            ООО &apos;БетонСибСтрой&apos; ведет партнерскую деятельность с другими производителями и поставщиками бетонной продукции
          </div>
          <div className={styles.advantageCard}>
            <h3>
              Различные виды бетона
            </h3>
            Для качественной и успешной работы
          </div>
          <div className={styles.advantageCard}>
            <h3>
              Услуги миксера
            </h3>
            Воспользуйтесь арендой строительного миксера от нашей компании
          </div>
          <div className={styles.advantageCard}>
            <h3>
              Услуги бетононасоса
            </h3>
            Выезд специалиста на объект для консультации бесплатно
          </div>

        </div>
      </section>
    </>
  );
}