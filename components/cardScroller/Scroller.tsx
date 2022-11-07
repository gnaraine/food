import React, { Component } from "react";
import Card from "./Card";
import styles from "../../styles/cardScroller/Scroller.module.css";

type Props = { onClick; recipeCard; category };

export default function Scroller({ onClick, recipeCard, category }: Props) {
  // const showScroller = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   var x = document.getElementById(e.currentTarget.value);
  //   var b = document.getElementById("All");
  //   var y = document.getElementById(category[0]);
  //   var z = document.getElementById(category[1]);
  //   var v = document.getElementById(category[2]);

  //   b.style.display = "none";
  //   y.style.display = "none";
  //   z.style.display = "none";
  //   v.style.display = "none";
  //   x.style.display = "none";
  //   x.style.display = "grid";
  // };

  return (
    <div className={styles.containerGrid}>
      <div className={styles.info}>
        <h2 className={styles.title}>WHAT TO COOK TONIGHT</h2>
        <p className={styles.description}>Fast, fresh, and foolproof</p>
      </div>
      <div className={styles.selector}>
        <button className={styles.btn} value="All" onClick={onClick}>
          All
        </button>

        {category.map((cat) => (
          <button className={styles.btn} value={cat} onClick={onClick}>
            {cat}
          </button>
        ))}
      </div>

      <div id="All" className={styles.scroller}>
        {recipeCard.map((card) => (
          <Card card={card} />
        ))}
      </div>

      {category.map((cat) => (
        <div id={cat} style={{ background: "blue" }} className={styles.hidden}>
          {recipeCard
            .filter((card) => card.fields.tag.includes(cat))
            .map((card) => (
              <Card card={card} />
            ))}
        </div>
      ))}
    </div>
  );
}
