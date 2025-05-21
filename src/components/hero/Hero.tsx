// Hero.tsx

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLeaf, FaCookieBite, FaShippingFast } from "react-icons/fa";
import styles from "../../styles/Hero.module.css";

export const Hero = () => {
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
      <div className={styles.overlay}></div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className={styles.heading}>Malene Pastelería</h1>
        <p className={styles.subheading}>
          Pastelería artesanal con sabor y tradición
        </p>

        <div className={styles.buttons}>
          <a href="#pricing" className={`${styles.btn} ${styles.btnPink}`}>
            Ver Pricing
          </a>
          <a href="#promotion" className={`${styles.btn} ${styles.btnBlue}`}>
            Ver Promoción
          </a>
        </div>
      </motion.div>

      <div className={styles.floatingIcons}>
        <div
          className={`${styles.iconItem} ${styles.icon1} ${styles.iconBlue}`}
        >
          <FaLeaf />
          <span className={styles.iconLabel}>Natural</span>
        </div>
        <div
          className={`${styles.iconItem} ${styles.icon2} ${styles.iconPink}`}
        >
          <FaCookieBite />
          <span className={styles.iconLabel}>Casero</span>
        </div>
        <div
          className={`${styles.iconItem} ${styles.icon3} ${styles.iconBlue}`}
        >
          <FaShippingFast />
          <span className={styles.iconLabel}>Envíos</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
