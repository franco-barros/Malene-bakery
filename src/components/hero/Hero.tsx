"use client";

import Image from "next/image";
import FloatingIcons from "../floatingicons";
import { motion } from "framer-motion";
import styles from "../../styles/hero/Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.backgroundImage}>
        <Image
          src="/image/malene3.png"
          alt="Fondo de pastelería"
          fill
          sizes="100vw"
          priority
          quality={100}
          className={styles.image}
        />
      </div>

      <div className={styles.overlay} />

      <motion.div
        className={styles.content}
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
      >
        <motion.h1
          className={styles.heading}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Malene Pastelería
        </motion.h1>

        <motion.p
          className={styles.subheading}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Pastelería artesanal con sabor y tradición
        </motion.p>

        <motion.div
          className={styles.buttons}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <a href="#pricing" className={`${styles.btn} ${styles.btnPink}`}>
            Ver precios
          </a>
          <a href="#promotion" className={`${styles.btn} ${styles.btnBlue}`}>
            Ver promoción
          </a>
        </motion.div>

        {/* Aquí los íconos en mobile, debajo de los botones */}
        <div className={styles.mobileIconsWrapper}>
          <FloatingIcons />
        </div>
      </motion.div>

      {/* Íconos flotantes solo en desktop */}
      <div className={styles.floatingIconsWrapper}>
        <FloatingIcons />
      </div>
    </section>
  );
};

export default Hero;
