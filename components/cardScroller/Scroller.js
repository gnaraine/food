import Card from "./Card";
import styles from "../../styles/cardScroller/Scroller.module.css";

export default function Scroller({ onClick, recipeCard, category }) {
  return (
    <div className={styles.containerGrid}>
      {/* <div className={styles.info}>
        <h2 className={styles.title}>WHAT TO COOK TONIGHT</h2>
        <p className={styles.description}>Fast, fresh, and foolproof</p>
      </div> */}

      {/* <div className={styles.selector}>
        <button className={styles.btn} value="All" onClick={onClick}>
          All
        </button>

        {category.map((cat) => (
          <button
            key={cat}
            className={styles.btn}
            value={cat}
            onClick={onClick}
          >
            {cat}
          </button>
        ))}
      </div> */}

      {/* <div id="All" className={styles.scroller}>
        {recipeCard.map((card) => (
          <Card key={card.sys.id} card={card} />
        ))}
      </div> */}

      {/* {category.map((cat) => (
        <div
          key={cat}
          id={cat}
          style={{ background: "blue" }}
          className={styles.hidden}
        >
          {recipeCard
            .filter((card) => card.fields.tag.includes(cat))
            .map((card) => (
              <Card key={card.sys.id} card={card} />
            ))}
        </div>
      ))} */}
    </div>
  );
}
