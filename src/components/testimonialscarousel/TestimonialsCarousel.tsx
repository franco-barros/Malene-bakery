"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../styles/testimonials/TestimonialsCarousel.module.css";
import testimonials from "../../data/testimonialsData";

const TestimonialsCarousel = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => setIndex((prev) => (prev + 1) % total);

  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setInterval(next, 5000);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [paused]);

  return (
    <section className={styles.testimonialsSection} id="testimonials">
      <div
        className={styles.carousel}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.text}>{testimonials[index].text}</p>
            <div className={styles.footer}>
              <span className={styles.author}>
                {testimonials[index].author}
              </span>
              <span className={styles.rating}>
                {"★".repeat(testimonials[index].rating)}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
