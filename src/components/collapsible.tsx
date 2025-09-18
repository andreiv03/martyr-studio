"use client";

import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  id: [string, React.Dispatch<React.SetStateAction<string>>];
  label: string;
  styles: {
    readonly [key: string]: string;
  };
}

export default function Collapsible({ children, id: [id, setId], label, styles }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`${styles["collapsible"]} ${id === label ? styles["open"] : ""}`}
      data-label={label}
    >
      <button type="button" onClick={() => setId(id === label ? "" : label)}>
        {label}
      </button>
      <div
        className={styles["collapsible_container"]}
        ref={containerRef}
        style={{
          height:
            id === label && containerRef.current ? `${containerRef.current.scrollHeight}px` : "0px",
        }}
      >
        <div className={styles["collapsible_content"]}>{children}</div>
      </div>
    </div>
  );
}
