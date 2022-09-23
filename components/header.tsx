import dynamic from "next/dynamic";
import { useContext } from "react";

import { Context } from "../context";

import styles from "../styles/components/header.module.scss";
const HeaderLogo = dynamic(() => import("../assets/header-logo"));

const Header: React.FC = () => {
  const { isMenuAnimating: [isMenuAnimating, setIsMenuAnimating], isMenuOpen: [isMenuOpen, setIsMenuOpen] } = useContext(Context);

  const handleMenuAnimation = () => {
    if (isMenuAnimating || isMenuOpen) return;
    setIsMenuAnimating(true)
    setIsMenuOpen(true);
    setTimeout(() => setIsMenuAnimating(false), 1000);
  }

  return (
    <header className={`${styles.header} ${(isMenuAnimating || isMenuOpen) ? styles.menu_active : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <HeaderLogo />
        </div>

        <div className={styles.button} onClick={handleMenuAnimation}>
          {[1, 2].map(index => (
            <div key={index} className={styles.rectangle}>
              <div className={styles.horizontal_line} />
              <div className={styles.horizontal_line} />
              <div className={styles.vertical_line} />
              <div className={styles.vertical_line} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.background} />
    </header>
  );
}

export default Header;