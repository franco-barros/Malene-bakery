// components/TopDessertsCarousel.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../styles/topdessertscarousel/TopDessertsCarousel.module.css";
import topDesserts from "../../data/topDessertsData";
import Image from "next/image";

const TopDessertsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // <- NEW
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const total = topDesserts.length;

  const nextSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev + 1) % total);
  };
  const prevSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    setHasMounted(true); // <- Prevent render until after mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(nextSlide, 4000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [paused]);

  const variants = {
    enter: (dir: number) => ({ x: dir * 200, opacity: 0, scale: 0.9 }),
    left: { x: -100, opacity: 0.6, scale: 0.9 },
    center: { x: 0, opacity: 1, scale: 1.15 },
    right: { x: 100, opacity: 0.6, scale: 0.9 },
    exit: (dir: number) => ({ x: -dir * 200, opacity: 0, scale: 0.9 }),
  };

  const renderCard = (
    dessert: (typeof topDesserts)[number],
    position: "left" | "center" | "right",
    key: string | number,
    idx: number
  ) => {
    const isCenter = position === "center";
    const isBlue = idx % 2 === 0;

    return (
      <motion.div
        key={`${key}-${dessert.name}`}
        className={`${styles.card} ${isCenter ? styles.center : ""}`}
        custom={direction}
        initial="enter"
        animate={position}
        exit="exit"
        variants={variants}
        transition={{ duration: 0.6, ease: "easeInOut" }}
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
        </div>
        <h3
          className={`${styles.name} ${
            isBlue ? styles.nameBlue : styles.namePink
          }`}
        >
          {dessert.name}
        </h3>
      </motion.div>
    );
  };

  const renderStaticCard = (
    dessert: (typeof topDesserts)[number],
    idx: number
  ) => {
    const isBlue = idx % 2 === 0;
    return (
      <div className={`${styles.card} ${styles.center}`} key={idx}>
        <div className={styles.imageWrapper}>
          <Image
            src={dessert.img}
            alt={dessert.name}
            fill
            className={styles.image}
          />
        </div>
        <h3
          className={`${styles.name} ${
            isBlue ? styles.nameBlue : styles.namePink
          }`}
        >
          {dessert.name}
        </h3>
      </div>
    );
  };

  const leftIdx = (currentIndex - 1 + total) % total;
  const rightIdx = (currentIndex + 1) % total;

  if (!hasMounted) return null; // <- Prevent flashing render

  return (
    <div className={styles.carouselWrapper}>
      {!isMobile && (
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
      )}

      <div className={styles.carouselTrack}>
        <AnimatePresence initial={false} custom={direction}>
          {isMobile ? (
            renderStaticCard(topDesserts[currentIndex], currentIndex)
          ) : (
            <>
              {renderCard(topDesserts[leftIdx], "left", "left", leftIdx)}
              {renderCard(
                topDesserts[currentIndex],
                "center",
                "center",
                currentIndex
              )}
              {renderCard(topDesserts[rightIdx], "right", "right", rightIdx)}
            </>
          )}
        </AnimatePresence>
      </div>

      {!isMobile && (
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
      )}
    </div>
  );
};

export default TopDessertsCarousel;
