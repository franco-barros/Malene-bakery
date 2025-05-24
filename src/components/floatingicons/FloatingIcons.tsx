"use client";
import React from "react";
import { FaLeaf, FaCookieBite, FaShippingFast } from "react-icons/fa";
import styles from "../../styles/hero/FloatingIcons.module.css";

const FloatingIcons: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={`${styles.iconItem} ${styles.icon1} ${styles.blue}`}>
      <FaLeaf />
      <span className={styles.label}>Natural</span>
    </div>
    <div className={`${styles.iconItem} ${styles.icon2} ${styles.pink}`}>
      <FaCookieBite />
      <span className={styles.label}>Casero</span>
    </div>
    <div className={`${styles.iconItem} ${styles.icon3} ${styles.blue}`}>
      <FaShippingFast />
      <span className={styles.label}>Envíos</span>
    </div>
  </div>
);

export default FloatingIcons;
