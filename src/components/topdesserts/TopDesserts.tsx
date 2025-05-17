"use client";

import React from "react";
import styles from "../../styles/topdessertscarousel/TopDesserts.module.css";
import TopDessertsCarousel from "../topdessertscarousel";

const TopDesserts: React.FC = () => (
  <section id="top-desserts" className={styles.topDesserts}>
    <h2 className={styles.heading}>Nuestros Mejores Postres</h2>
    <TopDessertsCarousel />
  </section>
);

export default TopDesserts;
