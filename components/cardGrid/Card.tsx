import React from "react";
import styles from "../../styles/cardGrid/Card.module.css";

type Props = { card };

export default function Card({ card }: Props) {
 
    const { title, description, image, category } = card.fields;

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.cardImageContainer}>
          <img src={"https:" + image.fields.file.url} className={styles.cardImage}></img>
        </div>

        <div className={styles.info}>
          <p className={styles.category}>
            <a href="">{category}</a>
          </p>
          <h3 className={styles.title}>
            {title}
          </h3>
          <p className={styles.description}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
