import styles from "../../styles/cardScroller/Card.module.css";
export default function Card() {
  return (
    <div>
      <div className={styles.card}>
        <img className={styles.cardImage}></img>

        <div className={styles.info}>
          <p className={styles.tag}>ON THE LINE</p>
          <p className={styles.title}>Eggplant Tortas Milanesa</p>
          <p className={styles.date}>September 14, 2022</p>
        </div>
      </div>
    </div>
  );
}
