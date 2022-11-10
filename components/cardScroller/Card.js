import styles from "../../styles/cardScroller/Card.module.css";

export default function Card({ card }) {
  const { title, description, image, rating } = card.fields;
  return (
    <div>
      <div className={styles.card}>
        <picture>
          <img
            src={"https:" + image.fields.file.url}
            className={styles.cardImage}
            alt={''}
          ></img>
        </picture>

        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
          <p className={styles.cardRating}>{rating}</p>
        </div>
      </div>
    </div>
  );
}
