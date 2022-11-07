import React from "react";
import styles from "../../styles/footer/Footer.module.css";
type Props = {};

export default function Footer({}: Props) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.footer}>
          <div className={styles.about}>
            <h2 className={styles.title}>my appétite</h2>
            <p className={styles.info}>
              Recipes you want to make. Cooking advice that works. Restaurant
              recommendations you trust.
            </p>
          </div>
          <div className={styles.links}>
            <h3 className={styles.title}>MORE FROM MY APPÉTITE</h3>
            <a href="">One</a>
            <a href="">Two</a>
            <a href="">Three</a>
            <a href="">Four</a>
            <a href="">Five</a>
          </div>
          <div className={styles.about}>
            <h3 className={styles.title}>CONTACT</h3>
            <a href="">One</a>
            <a href="">Two</a>
          </div>
        </div>
        <div className={styles.socials}>
          <p>f</p>
          <p>t</p>
          <p>p</p>
          <p>ig</p>
          <p>yt</p>
        </div>
        <div className={styles.notice}>
          <p>One</p>
          <p>|</p>
          <p>Two</p>
          <p>|</p>
          <p>Three</p>
          <p>|</p>
          <p>Four</p>
          <p>|</p>
          <p>Five</p>
        </div>

        <div className={styles.rights}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
          distinctio eius. Consectetur sunt voluptate odit fugit, tenetur modi
          quia officiis ducimus nostrum reiciendis praesentium soluta eum, esse
          aspernatur iusto vero doloribus atque. Possimus nihil modi, alias
          eveniet quibusdam cum dolorem! Ad expedita doloribus tempora similique
          corrupti itaque soluta!
        </div>
      </div>
    </div>
  );
}
