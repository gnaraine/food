import styles from "../../styles/cardScroller/Card.module.css";

export default function Card({ card }) {
  const { title, description, image, rating } = card.fields;
  return (
    <div>
      <div className={styles.card}>
        <img
          src={"https:" + image.fields.file.url}
          className={styles.cardImage}
        ></img>

        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          {description}
          <p className={styles.cardRating}>{rating}</p>
        </div>
      </div>
    </div>
  );
}
