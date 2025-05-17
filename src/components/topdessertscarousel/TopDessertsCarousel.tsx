"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/topdessertscarousel/TopDessertsCarousel.module.css";
import topDesserts from "../../data/topDessertsData";
import Image from "next/image";

const TopDessertsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const total = topDesserts.length;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(nextSlide, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const leftIndex = (currentIndex - 1 + total) % total;
  const rightIndex = (currentIndex + 1) % total;
  const visible = [
    topDesserts[leftIndex],
    topDesserts[currentIndex],
    topDesserts[rightIndex],
  ];

  const variants = {
    center: {
      initial: { x: direction * 200, opacity: 0 },
      animate: { x: 0, opacity: 1, scale: 1.1 },
    },
  };

  return (
    <div className={styles.carouselWrapper}>
      <button
        className={styles.navLeft}
        onClick={() => {
          prevSlide();
          setPaused(true);
        }}
        onMouseLeave={() => setPaused(false)}
        aria-label="Anterior"
      >
        ⬅
      </button>

      <div className={styles.carouselTrack}>
        {visible.map((dessert, i) =>
          i === 1 ? (
            <motion.div
              key={dessert.name}
              className={`${styles.card} ${styles.center}`}
              variants={variants.center}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={dessert.img}
                  alt={dessert.name}
                  fill
                  className={styles.image}
                />
                <h3
                  className={`${styles.name} ${
                    (leftIndex + i) % 2 === 0
                      ? styles.nameBlue
                      : styles.namePink
                  }`}
                >
                  {dessert.name}
                </h3>
              </div>
            </motion.div>
          ) : (
            <div
              key={dessert.name}
              className={`${styles.card} ${
                i === 0 ? styles.left : styles.right
              }`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={dessert.img}
                  alt={dessert.name}
                  fill
                  className={styles.image}
                />
                <h3
                  className={`${styles.name} ${
                    (leftIndex + i) % 2 === 0
                      ? styles.nameBlue
                      : styles.namePink
                  }`}
                >
                  {dessert.name}
                </h3>
              </div>
            </div>
          )
        )}
      </div>

      <button
        className={styles.navRight}
        onClick={() => {
          nextSlide();
          setPaused(true);
        }}
        onMouseLeave={() => setPaused(false)}
        aria-label="Siguiente"
      >
        ➡
      </button>
    </div>
  );
};

export default TopDessertsCarousel;
