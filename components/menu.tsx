import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback, useContext, useRef, useState } from "react";
import { useOnClickOutside } from "@andreiv03/react-hooks";

import { Context } from "../context";

import styles from "../styles/components/menu.module.scss";
const Collapsible = dynamic(() => import("./collapsible"));

const Menu: React.FC = () => {
  const { isMenuAnimating: [isMenuAnimating, setIsMenuAnimating], isMenuOpen: [isMenuOpen, setIsMenuOpen] } = useContext(Context);
  const containerRef = useRef({} as HTMLDivElement);

  const [isWIPVisible, setIsWIPVisible] = useState(false);
  const [openCollapsibleId, setOpenCollapsibleId] = useState("");

  const handleMenuClose = useCallback(async () => {
    if (isMenuAnimating || !isMenuOpen) return;

    console.log("test")

    if (openCollapsibleId)
      await (() => new Promise(() => {
        setOpenCollapsibleId("");
        setTimeout(() => {
          setIsMenuAnimating(true);
          setIsMenuOpen(false);
          setTimeout(() => setIsMenuAnimating(false), 500);
        }, 300);
      }))();

    setIsMenuAnimating(true);
    setIsMenuOpen(false);
    setTimeout(() => setIsMenuAnimating(false), 500);
  }, [isMenuAnimating, isMenuOpen, openCollapsibleId]);

  const handleLinkClick = () => {
    setIsWIPVisible(true);
    setTimeout(() => setIsWIPVisible(false), 3000);
  }

  useOnClickOutside(handleMenuClose, containerRef);

  return (
    <menu className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.item}>
          <Collapsible id={[openCollapsibleId, setOpenCollapsibleId]} label="Servicii" styles={styles}>
            <Link href="/progress"><span onClick={handleLinkClick}>Marketing</span></Link>
            <Link href="/progress"><span onClick={handleLinkClick}>Identitate</span></Link>
            <Link href="/progress"><span onClick={handleLinkClick}>Web Design</span></Link>
          </Collapsible>
        </div>

        <div className={styles.item} onClick={handleLinkClick}>
          <Link href="/progress">Proiecte</Link>
        </div>

        <div className={styles.item} onClick={handleLinkClick}>
          <Link href="/progress">Echipa</Link>
        </div>

        <div className={styles.item} onClick={handleLinkClick}>
          <Link href="/progress">Contact</Link>
        </div>
      </div>

      <h5 className={isWIPVisible ? styles.visible : ""}>Work in progress</h5>
      <h6>copyright@martrystudio.com</h6>
    </menu>
  );
}

export default Menu;