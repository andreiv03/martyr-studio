import type { NextPage } from "next";
import styles from "../styles/pages/not-found.module.scss";

const NotFound: NextPage = () => {
  return (
    <div className={styles.page}>
      <h1>Page not found</h1>
    </div>
  );
}

export default NotFound;