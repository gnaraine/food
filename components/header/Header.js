import styles from "../../styles/header/Header.module.css";
export default function Header() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.banner}>my appétite</div>
        <div className={styles.nav}>
          <p>One</p>
          <p>Two</p>
          <p>Three</p>
          <p>Four</p>
          <p>Five</p>
          <p>Six</p>
        </div>
      </div>
    </div>
  );
}
