"use client";
import React, { useEffect, useRef, useMemo, useCallback } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import styles from "../../styles/gallery/GalleryCarousel.module.css";
import InstagramEmbed from "../instagramembed";

interface GalleryCarouselProps {
  images: string[]; // URLs de publicaciones
}

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ images }) => {
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const speed = 50;
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const duplicatedImages = useMemo(() => [...images, ...images], [images]);

  const startAnimation = useCallback(() => {
    if (carouselRef.current) {
      const fullWidth = carouselRef.current.scrollWidth / 2;
      const duration = fullWidth / speed;
      controls.set({ x: -fullWidth });
      controls.start({
        x: 0,
        transition: {
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    }
  }, [controls, speed]);

  const stopAnimation = useCallback(() => {
    controls.stop();
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = null;
    }
  }, [controls]);

  const resumeAnimation = useCallback(() => {
    stopAnimation();
    scrollTimeoutRef.current = setTimeout(() => {
      startAnimation();
    }, 2000);
  }, [startAnimation, stopAnimation]);

  useEffect(() => {
    startAnimation();
    return () => {
      controls.stop();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [startAnimation, controls]);

  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      controls.stop();
      x.set(x.get() + e.deltaY);

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        startAnimation();
      }, 2000);
    };

    element.addEventListener("wheel", wheelHandler, { passive: false });
    return () => {
      element.removeEventListener("wheel", wheelHandler);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [controls, x, startAnimation]);

  return (
    <div className={styles.carouselWrapper}>
      <motion.div
        className={styles.carousel}
        ref={carouselRef}
        style={{ x }}
        animate={controls}
        initial={false}
        drag="x"
        dragElastic={0.2}
        whileTap={{ cursor: "grabbing" }}
        onDragStart={stopAnimation}
        onDragEnd={resumeAnimation}
        onMouseEnter={stopAnimation}
        onMouseLeave={resumeAnimation}
      >
        {duplicatedImages.map((url, index) => (
          <motion.div
            key={`${index}-${url}`}
            className={styles.carouselItem}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <InstagramEmbed url={url} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default GalleryCarousel;
