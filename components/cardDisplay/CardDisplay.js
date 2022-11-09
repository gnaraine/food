import Card from "./Card";
import LargeCard from "./LargeCard";
import styles from "../../styles/cardDisplay/CardDisplay.module.css";
export default function CardDisplay({ cardDisplayLarge, cardDisplaySmall }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerGrid}>
        <div className={styles.gridLeft}>
          {/* {cardDisplayLarge.map((largeCard) => (
            <LargeCard largeCard={largeCard} />
          ))} */}

          <LargeCard
            key={cardDisplayLarge[0].sys.id}
            largeCard={cardDisplayLarge[0]}
          />
        </div>

        <div className={styles.gridRight}>
          {/* <Card title="Eggplant Tortas Milanesa" description="asd" rating="" />
        <Card title="Eggplant Tortas Milanesa" description="" rating="" />
        <Card title="Eggplant Tortas Milanesa" description="" rating="" /> */}

          {cardDisplaySmall.map((smallCard) => (
            <Card key={smallCard.sys.id} smallCard={smallCard} />
          ))}
        </div>
      </div>
    </div>
  );
}
