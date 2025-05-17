"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBirthdayCake, FaCookie } from "react-icons/fa";
import styles from "../../styles/BackgroundAbout.module.css";

type IconData = {
  x: number;
  size: number;
  duration: number;
  delay: number;
  type: "cake" | "cookie";
};

const Background = () => {
  const [icons, setIcons] = useState<IconData[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const iconCount = 10;
    const screenWidth = window.innerWidth;
    const gap = screenWidth / iconCount;

    const generatedIcons: IconData[] = new Array(iconCount)
      .fill(null)
      .map((_, index) => ({
        x: gap * index + gap / 2 - 30,
        size: 1.5,
        duration: 8,
        delay: index * 1.5,
        type: index % 2 === 0 ? "cake" : "cookie",
      }));

    setIcons(generatedIcons);
  }, []);

  return (
    <div className={styles.background}>
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{
            y: -100,
            x: icon.x,
            opacity: 0,
            scale: icon.size,
          }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 100 : 1000,
            x:
              typeof window !== "undefined"
                ? Math.min(icon.x + 300, window.innerWidth)
                : icon.x,
            opacity: 0.5,
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            repeatType: "loop",
            delay: icon.delay,
            ease: "linear",
          }}
          className={`${styles.icon} ${
            icon.type === "cake" ? styles.cake : styles.cookie
          }`}
        >
          {icon.type === "cake" ? (
            <FaBirthdayCake size={60} />
          ) : (
            <FaCookie size={60} />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Background;
