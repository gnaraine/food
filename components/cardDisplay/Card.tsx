import React, { Component } from "react";
import styles from "../../styles/cardDisplay/Card.module.css";

type Props = { smallCard };

export default function Card({ smallCard }: Props) {
  const { title, description, image, rating } = smallCard.fields;
  return (
    <div>
      <div className={styles.card}>
        <img src={"https:" + image.fields.file.url} className={styles.cardImage}></img>
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>
            {description}
          </p>
          <p className={styles.rating}>{rating}</p>
        </div>
      </div>
    </div>
  );
}
