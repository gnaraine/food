import styles from "../../styles/cardDisplay/Card.module.css";

export default function Card({ smallCard }) {
  const { title, description, image, rating } = smallCard.fields;
  return (
    <div>
      <div>
        <img
          src={"https:" + image.fields.file.url}
          className={styles.cardImage}
          alt={""}
        ></img>

        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
          <p className={styles.rating}>{rating}</p>
        </div>
      </div>
    </div>
  );
}
