"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";

import { LayoutContext } from "@/contexts/layout-context";
import { useContextHook } from "@/hooks/use-context-hook";
import { useOutsideClick } from "@/hooks/use-outside-click";

import Collapsible from "@/components/collapsible";
import styles from "@/styles/components/menu.module.scss";

const sleep = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

export default function Menu() {
  const { state, setIsMenuAnimating, setIsMenuOpen } = useContextHook(LayoutContext);

  const containerRef = useRef<HTMLDivElement>(null);
  const [isWIPVisible, setIsWIPVisible] = useState(false);
  const [openCollapsibleId, setOpenCollapsibleId] = useState("");

  const handleMenuClose = useCallback(async () => {
    if (state.isMenuAnimating || !state.isMenuOpen) {
      return;
    }

    if (openCollapsibleId) {
      setOpenCollapsibleId("");
      await sleep(300);
    }

    setIsMenuAnimating(true);
    setIsMenuOpen(false);
    await sleep(500);
    setIsMenuAnimating(false);
  }, [
    state.isMenuAnimating,
    state.isMenuOpen,
    setIsMenuAnimating,
    setIsMenuOpen,
    openCollapsibleId,
  ]);

  const handleLinkClick = () => {
    setIsWIPVisible(true);
    setTimeout(() => setIsWIPVisible(false), 3000);
  };

  useOutsideClick(containerRef, handleMenuClose);

  return (
    <menu className={`${styles["menu"]} ${state.isMenuOpen ? styles["open"] : ""}`}>
      <div className={styles["container"]} ref={containerRef}>
        <div className={styles["item"]}>
          <Collapsible
            id={[openCollapsibleId, setOpenCollapsibleId]}
            label="Servicii"
            styles={styles}
          >
            <Link href="/" onClick={handleLinkClick}>
              Marketing
            </Link>
            <Link href="/" onClick={handleLinkClick}>
              Identitate
            </Link>
            <Link href="/" onClick={handleLinkClick}>
              Web Design
            </Link>
          </Collapsible>
        </div>

        <div className={styles["item"]}>
          <Link href="/" onClick={handleLinkClick}>
            Proiecte
          </Link>
        </div>

        <div className={styles["item"]}>
          <Link href="/" onClick={handleLinkClick}>
            Echipa
          </Link>
        </div>

        <div className={styles["item"]}>
          <Link href="/" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      </div>

      <h5 className={isWIPVisible ? styles["visible"] : ""}>Work in progress</h5>
      <h6>copyright@martrystudio.com</h6>
    </menu>
  );
}
