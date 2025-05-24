"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FloatingIcons from "../floatingicons";
import styles from "../../styles/hero/Hero.module.css";

const Hero: React.FC = () => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    const timeout = setTimeout(() => {
      document.body.style.overflow = originalStyle;
    }, 2500); // 🕒 Tiempo que bloquea el scroll

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.backgroundImage}>
        <Image
          src="/image/malene3.png"
          alt="Fondo de pastelería"
          fill
          priority
          quality={100}
          className={styles.image}
        />
      </div>

      <div className={styles.overlay} />

      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className={styles.heading}>Malene Pastelería</h1>
        <p className={styles.subheading}>
          Pastelería artesanal con sabor y tradición
        </p>
        <div className={styles.buttons}>
          <a href="#pricing" className={`${styles.btn} ${styles.btnPink}`}>
            Ver precios
          </a>
          <a href="#promotion" className={`${styles.btn} ${styles.btnBlue}`}>
            Ver promoción
          </a>
        </div>
      </motion.div>

      <FloatingIcons />
    </section>
  );
};

export default React.memo(Hero);
