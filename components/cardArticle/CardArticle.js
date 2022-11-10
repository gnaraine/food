import styles from "../../styles/cardArticle/Card.module.css";

export default function CardArticle() {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.cardImageContainer}>
          <picture>
            <img alt={""} className={styles.cardImage}></img>
          </picture>
        </div>

        <div className={styles.info}>
          <h3 className={styles.title}>My 10 Best New Restaurants of 2022</h3>
          <p className={styles.description}>
            These new restaurants remind us exactly how thrilling dining out can
            be.
          </p>
        </div>
      </div>
    </div>
  );
}
