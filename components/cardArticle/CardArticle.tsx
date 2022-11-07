import React from "react";
import styles from "../../styles/cardArticle/Card.module.css";

type Props = {};

export default function card({}: Props) {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.cardImageContainer}>
          <img src="2.webp" className={styles.cardImage}></img>
        </div>

        <div className={styles.info} >
          <h3 className={styles.title}>BA's 10 Best New Restaurants of 2022</h3>
          <p className={styles.description}>
            These new restaurants remind us exactly how thrilling dining out can
            be.
          </p>
        </div>
      </div>
    </div>
  );
}
