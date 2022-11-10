import styles from "../../styles/cardGrid/Card.module.css";
export default function Card({ card }) {
  const { title, description, image, category } = card.fields;
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.cardImageContainer}>
          <picture>
            <img
              src={"https:" + image.fields.file.url}
              className={styles.cardImage}
              alt={""}
            ></img>
          </picture>
        </div>

        <div className={styles.info}>
          <p className={styles.category}>
            <a href="">{category}</a>
          </p>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}
