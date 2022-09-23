import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { Context } from "../context";

import styles from "../styles/components/loading-screen.module.scss";
const LoadingScreenLogo = dynamic(() => import("../assets/loading-screen-logo"));

const verticalLinesData = [
  { heights: [120, 200], delays: [0, 0.075] },
  { heights: [200, 280], delays: [0.15, 0.225] },
  { heights: [210, 130], delays: [0.3, 0.375] },
  { heights: [130, 120], delays: [0.45, 0.525] },
  { heights: [120, 165], delays: [0.6, 0.675] },
  { heights: [160, 210], delays: [0.75, 0.825] }
];

const LoadingScreen: React.FC = () => {
  const { isFirstVisit: [, setIsFirstVisit] } = useContext(Context);

  const animationControls = useAnimation();
  const cutterLineControls = useAnimation();
  const horizontalLineControls = useAnimation();
  const verticalLineControls = useAnimation();

  const router = useRouter();

  useEffect(() => {
    const startAnimation = async () => {
      await horizontalLineControls.start({
        width: "125%",
        transition: {
          duration: 0.15,
          delay: 0.5,
          ease: "easeIn"
        }
      });
  
      await verticalLineControls.start(([height, delay]) => ({
        height,
        transition: {
          duration: 0.1,
          delay: delay + 0.1,
          ease: "easeIn"
        }
      }));

      verticalLineControls.start(([, delay]) => ({
        height: 0,
        transition: {
          duration: 0.15,
          delay: delay + 0.1,
          ease: "easeIn"
        }
      }));
  
      horizontalLineControls.start({
        x: 280,
        width: 0,
        transition: {
          duration: 1,
          delay: 0.1,
          ease: "easeIn"
        }
      });

      await cutterLineControls.start({
        width: "100%",
        transition: {
          duration: 0.75,
          delay: 0.3,
          ease: "easeIn"
        }
      });

      if (router.pathname === "/")
        return;
  
      await animationControls.start({
        opacity: 0,
        transition: {
          duration: 0.3,
          delay: 0.3,
          ease: "easeIn"
        }
      });

      sessionStorage.setItem("visited", "true");
      setIsFirstVisit(false);
    }

    startAnimation();
  }, [animationControls, cutterLineControls, horizontalLineControls, verticalLineControls, setIsFirstVisit]);

  return (
    <motion.div className={styles.loading_screen} animate={animationControls}>
      <div className={styles.container}>
        <LoadingScreenLogo />

        <div className={styles.vertical_lines}>
          {verticalLinesData.map(({ heights, delays }, index) => (
            <div key={index} className={styles.pair}>
              <motion.div className={styles.left_line} animate={verticalLineControls} custom={[heights[0], delays[0]]} />
              <motion.div className={styles.right_line} animate={verticalLineControls} custom={[heights[1], delays[1]]} />
            </div>
          ))}
        </div>

        <div className={styles.horizontal_lines}>
          {[1, 2, 3, 4].map(index => (
            <motion.div key={index} className={styles.line} animate={horizontalLineControls} />
          ))}
        </div>

        <motion.div className={styles.cutter_line} animate={cutterLineControls} />
      </div>
    </motion.div>
  );
}

export default LoadingScreen;