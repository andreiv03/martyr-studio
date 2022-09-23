import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  id: [string, React.Dispatch<React.SetStateAction<string>>];
  label: string;
  styles: {
    readonly [key: string]: string;
  };
};

const Collapsible: React.FC<Props> = ({ children, id: [id, setId], label, styles }) => {
  const containerRef = useRef({} as HTMLDivElement);
  
  return (
    <div className={`${styles.collapsible} ${(id === label) ? styles.open : ""}`} data-label={label}>
      <button type="button" onClick={() => (id !== label) ? setId(label) : setId("")}>{label}</button>
      <div className={styles.collapsible_container} ref={containerRef} style={{ height: (id === label) ? `${containerRef.current.scrollHeight}px` : "0px" }}>
        <div className={styles.collapsible_content}>{children}</div>
      </div>
    </div>
  );
}

export default Collapsible;