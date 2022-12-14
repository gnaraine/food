import styles from "../../styles/cardGrid/CardGrid.module.css";
import Card from "./Card";

export default function CardTwoGrid({ articleCard }) {
  return (
    <div>
      <div className={styles.gridInfo}>
        <h2 className={styles.title}>WHAT TO READ</h2>
        <p className={styles.description}>
          Stories from around the world of food
        </p>
      </div>

      <div className={styles.gridContainer2Col}>
        {/* Culture, Restaurant */}

        {/* {articleCard.map((card) => (
        <Card card={card} />
      ))} */}

        {articleCard
          .filter((card) => card.fields.tag.includes("Chicken"))
          .map((card) => (
            <Card key={card.sys.id} card={card} />
          ))}

        {/* <Card />
      <Card />
      <Card />
      <Card /> */}
      </div>
    </div>
  );
}
