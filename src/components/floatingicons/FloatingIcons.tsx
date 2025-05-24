"use client";
import React from "react";
import { FaLeaf, FaCookieBite, FaShippingFast } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "../../styles/hero/FloatingIcons.module.css";

const icons = [
  {
    icon: <FaLeaf />,
    label: "Natural",
    styleClass: `${styles.icon1} ${styles.blue}`,
    animationDelay: 0,
  },
  {
    icon: <FaCookieBite />,
    label: "Casero",
    styleClass: `${styles.icon2} ${styles.pink}`,
    animationDelay: 0.15,
  },
  {
    icon: <FaShippingFast />,
    label: "Envíos",
    styleClass: `${styles.icon3} ${styles.blue}`,
    animationDelay: 0.3,
  },
];

const FloatingIcons: React.FC = () => (
  <div className={styles.wrapper}>
    {icons.map(({ icon, label, styleClass, animationDelay }, index) => (
      <motion.div
        key={index}
        className={`${styles.iconItem} ${styleClass}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: animationDelay }}
      >
        {icon}
        <span className={styles.label}>{label}</span>
      </motion.div>
    ))}
  </div>
);

export default FloatingIcons;
