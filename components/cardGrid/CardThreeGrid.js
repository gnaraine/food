import styles from "../../styles/cardGrid/CardGrid.module.css";
import Card from "./Card";

export default function CardThreeGrid({ articleCard }) {
  return (
    <div>
      <div className={styles.gridInfo}>
        <h2 className={styles.title}>WE JUST LOVE THESE</h2>
        <p className={styles.description}>
          All the stuff you need—and some you don&apos;t
        </p>
      </div>

      <div className={styles.gridContainer3Col}>
        {/* Shopping */}

        {articleCard
          .filter((card) => card.fields.category == "Shopping")
          .map((card) => (
            <Card key={card.sys.id} card={card} />
          ))}
      </div>
    </div>
  );
}
