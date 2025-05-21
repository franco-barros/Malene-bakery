"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaCookieBite, FaShippingFast } from "react-icons/fa";
import styles from "../../styles/Features.module.css";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FaLeaf className={`${styles.icon} ${styles.iconBlue}`} />,
    title: "Ingredientes Naturales",
    description:
      "Solo usamos ingredientes frescos y de origen local para garantizar el mejor sabor.",
  },
  {
    icon: <FaCookieBite className={`${styles.icon} ${styles.iconPink}`} />,
    title: "Artesanal",
    description:
      "Cada dulce es preparado a mano con técnicas tradicionales y toques modernos.",
  },
  {
    icon: <FaShippingFast className={`${styles.icon} ${styles.iconBlue}`} />,
    title: "Envío Rápido",
    description:
      "Llevamos tu pedido directo a la puerta de tu casa, con embalaje seguro.",
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className={styles.features}>
      {/* Título animado */}
      <motion.h2
        className={styles.heading}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
      >
        Lo que nos distingue
      </motion.h2>

      {/* Intro en card */}
      <div className={styles.introCard}>
        <h3 className={styles.introTitle}>
          Delicias frescas hechas con amor y los mejores ingredientes
        </h3>
        <p className={styles.introText}>
          En Malene Pastelería creamos productos únicos, desde tortas
          personalizadas hasta galletas y postres tradicionales, con el toque
          artesanal que nos distingue. Disfrutá del sabor auténtico en cada
          bocado.
        </p>
      </div>

      <div className={styles.grid}>
        {features.map((feature, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.iconWrapper}>{feature.icon}</div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
