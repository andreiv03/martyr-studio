"use client";

import { LayoutContext } from "@/contexts/layout-context";
import { useContextHook } from "@/hooks/use-context-hook";

import HeaderLogo from "@/assets/header-logo";
import styles from "@/styles/components/header.module.scss";

export default function Header() {
  const { state, setIsMenuAnimating, setIsMenuOpen } = useContextHook(LayoutContext);

  const handleMenuAnimation = () => {
    if (state.isMenuAnimating || state.isMenuOpen) {
      return;
    }

    setIsMenuAnimating(true);
    setIsMenuOpen(true);
    setTimeout(() => setIsMenuAnimating(false), 1000);
  };

  const isMenuActive = state.isMenuAnimating || state.isMenuOpen;

  return (
    <header className={`${styles["header"]} ${isMenuActive ? styles["menu_active"] : ""}`}>
      <div className={styles["container"]}>
        <div className={styles["logo"]}>
          <HeaderLogo />
        </div>

        <button
          aria-controls="site-menu"
          aria-expanded={isMenuActive}
          aria-label="Open menu"
          className={styles["button"]}
          onClick={handleMenuAnimation}
        >
          {[1, 2].map((index) => (
            <div className={styles["rectangle"]} key={index}>
              <div className={styles["horizontal_line"]} />
              <div className={styles["horizontal_line"]} />
              <div className={styles["vertical_line"]} />
              <div className={styles["vertical_line"]} />
            </div>
          ))}
        </button>
      </div>

      <div className={styles["background"]} />
    </header>
  );
}
