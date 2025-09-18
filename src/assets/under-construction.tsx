import styles from "@/styles/assets/under-construction.module.scss";

export default function UnderConstruction() {
  return (
    <div className={styles["under_construction"]}>
      <div className={styles["land"]} />

      <div className={styles["buildings"]}>
        <div className={styles["one"]} />
        <div className={styles["two"]} />
        <div className={styles["three"]} />
        <div className={styles["four"]} />
        <div className={styles["five"]} />
      </div>

      <div className={`${styles["crane"]} ${styles["crane_three"]}`}>
        <div className={`${styles["line"]} ${styles["line_one"]}`} />
        <div className={`${styles["line"]} ${styles["line_two"]}`} />
        <div className={`${styles["line"]} ${styles["line_three"]}`} />
        <div className={styles["stand"]} />
        <div className={styles["weight"]} />
        <div className={styles["cabin"]} />
        <div className={styles["arm"]} />
      </div>

      <div className={`${styles["crane"]} ${styles["crane_two"]}`}>
        <div className={`${styles["line"]} ${styles["line_one"]}`} />
        <div className={`${styles["line"]} ${styles["line_two"]}`} />
        <div className={`${styles["line"]} ${styles["line_three"]}`} />
        <div className={styles["stand"]} />
        <div className={styles["weight"]} />
        <div className={styles["cabin"]} />
        <div className={styles["arm"]} />
      </div>

      <div className={`${styles["crane"]} ${styles["crane_one"]}`}>
        <div className={`${styles["line"]} ${styles["line_one"]}`} />
        <div className={`${styles["line"]} ${styles["line_two"]}`} />
        <div className={`${styles["line"]} ${styles["line_three"]}`} />
        <div className={styles["stand"]} />
        <div className={styles["weight"]} />
        <div className={styles["cabin"]} />
        <div className={styles["arm"]} />
      </div>
    </div>
  );
}
