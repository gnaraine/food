import React, { Component } from "react";
import Card from "./Card";
import LargeCard from "./LargeCard";
import styles from "../../styles/cardDisplay/CardDisplay.module.css";
type Props = { cardDisplayLarge: []; cardDisplaySmall: [] };

export default function CardDisplay({
  cardDisplayLarge,
  cardDisplaySmall,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.containerGrid}>
        <div className={styles.gridLeft}>
          {cardDisplayLarge.map((largeCard) => (
            <LargeCard largeCard={largeCard} />
          ))}
        </div>

        <div className={styles.gridRight}>
          {/* <Card title="Eggplant Tortas Milanesa" description="asd" rating="" />
          <Card title="Eggplant Tortas Milanesa" description="" rating="" />
          <Card title="Eggplant Tortas Milanesa" description="" rating="" /> */}

          {cardDisplaySmall.map((smallCard) => (
            <Card smallCard={smallCard} />
          ))}
        </div>
      </div>
    </div>
  );
}
