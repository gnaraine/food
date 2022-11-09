import styles from "../../styles/cardDisplay/Card.module.css";
export default function LargeCard({ largeCard }) {
  const { title, description, image, rating } = largeCard.fields;
  return (
    <div>
      <div className={styles.largeCard}>
        <img
          src={"https:" + image.fields.file.url}
          className={styles.largeCardImage}
        ></img>

        <div className={styles.largeCardInfo}>
          <p className={styles.largeCardTitle}>{title}</p>
          <p className={styles.largeCardDescription}>{description}</p>
          <p className={styles.rating}>{rating}</p>
        </div>
      </div>
    </div>
  );
}
