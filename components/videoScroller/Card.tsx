import React, { Component } from "react";
import styles from "../../styles/cardScroller/Card.module.css";

type Props = {};

export default function Card({}: Props) {
  return (
    <div>
      <div className={styles.card}>
        <img src="2.webp" className={styles.cardImage}></img>

        <div className={styles.info}>
          <p className={styles.tag}>ON THE LINE</p>
          <p className={styles.title}>Eggplant Tortas Milanesa</p>
          <p className={styles.date}>September 14, 2022</p>
        </div>
      </div>
    </div>
  );
}
