import React, { Component } from "react";
import Card from "./Card";
import styles from "../../styles/cardScroller/Scroller.module.css";

type Props = {};

export default function Scroller({}: Props) {
  return (
    <div className={styles.videoContainerGrid}>
      <div className={styles.containerGrid}>
        <div className={styles.info}>
          <h2 className={styles.title}>WHAT TO WATCH</h2>
          <p className={styles.description}>
            Food shows so good you can almost taste them
          </p>
        </div>

        <div className={styles.scroller}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
