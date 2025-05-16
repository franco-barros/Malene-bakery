"use client";
import React from "react";
import { FaLeaf, FaCookieBite, FaShippingFast } from "react-icons/fa";
import styles from "../../styles/Features.module.css";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FaLeaf className={styles.icon} />,
    title: "Ingredientes Naturales",
    description:
      "Solo usamos ingredientes frescos y de origen local para garantizar el mejor sabor.",
  },
  {
    icon: <FaCookieBite className={styles.icon} />,
    title: "Artesanal",
    description:
      "Cada dulce es preparado a mano con técnicas tradicionales y toques modernos.",
  },
  {
    icon: <FaShippingFast className={styles.icon} />,
    title: "Envío Rápido",
    description:
      "Llevamos tu pedido directo a la puerta de tu casa, con embalaje seguro.",
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className={styles.features}>
      <h2 className={styles.heading}>Lo que nos distingue</h2>
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
