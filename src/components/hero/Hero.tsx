"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/Hero.module.css";

export const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      {/* Imagen de fondo */}
      <div className={styles.backgroundImage}>
        <Image
          src="/image/malene3.png" // asegurate de tener esta imagen en public/image/
          alt="Fondo de pastelería"
          fill
          priority
          quality={100}
          className={styles.image}
        />
      </div>

      {/* Superposición oscura */}
      <div className={styles.overlay}></div>

      {/* Contenido del Hero */}
      <div className={styles.content}>
        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Pastelería artesanal con sabor y tradición
        </motion.h1>
        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Delicias frescas hechas con amor y los mejores ingredientes
        </motion.p>
        <motion.div
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2>Nuestra Pasión, tu Dulzura</h2>
          <p>
            En Malene Pastelería creamos productos únicos, desde tortas
            personalizadas hasta galletas y postres tradicionales, con el toque
            artesanal que nos distingue. Disfrutá del sabor auténtico en cada
            bocado.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
