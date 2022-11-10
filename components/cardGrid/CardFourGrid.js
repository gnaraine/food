import styles from "../../styles/cardGrid/CardGrid.module.css";
import Card from "./Card";

export default function CardFourGrid({ articleCard }) {
  return (
    <div>
      <div className={styles.gridInfo}>
        <h2 className={styles.title}>COOKING TIPS & TECHNIQUES</h2>
        <p className={styles.description}>Level up your kitchen skills</p>
      </div>

      <div className={styles.gridContainer4Col}>
        {/* Cooking */}

        {articleCard
          .filter((card) => card.fields.category == "Cooking")
          .map((card) => (
            <Card key={card.sys.id} card={card} />
          ))}
      </div>
    </div>
  );
}
